import { useState, useEffect } from 'react';
import axios from 'axios';

const AllUsers = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [editingUserId, setEditingUserId] = useState(null);
    const [newRole, setNewRole] = useState('');
    const api = 'http://localhost:9000'

    useEffect(() => {
        fetchAllUsers();
    }, []);

    const fetchAllUsers = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`${api}/users`);
            setUsers(response.data);
            setLoading(false);
        } catch (err) {
            setError(err.response?.data?.error || err.message);
            setLoading(false);
        }
    };

    const handleEditRole = (userId, currentRole) => {
        setEditingUserId(userId);
        setNewRole(currentRole);
    };

    const handleRoleUpdate = async (userId) => {
        try {
            const user = users.find(u => u._id === userId);
            if (!user) return;
            
            await axios.put(`${api}/users/updateUserRole/${user.email}`, { role: newRole });
            
            setUsers(users.map(u => 
                u._id === userId ? { ...u, role: newRole } : u
            ));
            setEditingUserId(null);
        } catch (err) {
            setError(err.response?.data?.error || err.message);
        }
    };

    const handleDeleteUser = async (userId) => {
        if (!window.confirm('Are you sure you want to delete this user?')) return;
        
        try {
            await axios.delete(`${api}/users/${userId}`);
            setUsers(users.filter(u => u._id !== userId));
        } catch (err) {
            setError(err.response?.data?.error || err.message);
        }
    };

    if (loading) return <div className="text-center py-8">Loading users...</div>;
    if (error) return <div className="text-red-500 text-center py-8">Error: {error}</div>;

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-6">User Management</h1>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <table className="min-w-full">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="py-3 px-4 text-left">Name</th>
                            <th className="py-3 px-4 text-left">Email</th>
                            <th className="py-3 px-4 text-left">Role</th>
                            <th className="py-3 px-4 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user._id} className="border-t border-gray-200 hover:bg-gray-50">
                                <td className="py-3 px-4">{user.name || 'N/A'}</td>
                                <td className="py-3 px-4">{user.email}</td>
                                <td className="py-3 px-4">
                                    {editingUserId === user._id ? (
                                        <select
                                            value={newRole}
                                            onChange={(e) => setNewRole(e.target.value)}
                                            className="border rounded px-2 py-1"
                                        >
                                            <option value="admin">Admin</option>
                                            <option value="provider">Provider</option>
                                            <option value="receiver">Receiver</option>
                                        </select>
                                    ) : (
                                        <span className={`px-2 py-1 rounded-full text-xs ${
                                            user.role === 'admin' ? 'bg-purple-100 text-purple-800' :
                                            user.role === 'provider' ? 'bg-blue-100 text-blue-800' :
                                            'bg-green-100 text-green-800'
                                        }`}>
                                            {user.role}
                                        </span>
                                    )}
                                </td>
                                <td className="py-3 px-4 space-x-2">
                                    {editingUserId === user._id ? (
                                        <>
                                            <button
                                                onClick={() => handleRoleUpdate(user._id)}
                                                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-sm"
                                            >
                                                Save
                                            </button>
                                            <button
                                                onClick={() => setEditingUserId(null)}
                                                className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600 text-sm"
                                            >
                                                Cancel
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            <button
                                                onClick={() => handleEditRole(user._id, user.role)}
                                                className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 text-sm"
                                            >
                                                Edit Role
                                            </button>
                                            <button
                                                onClick={() => handleDeleteUser(user._id)}
                                                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm"
                                            >
                                                Delete
                                            </button>
                                        </>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;