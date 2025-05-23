import { useQuery } from '@tanstack/react-query';
import axios from 'axios'; // Import axios
import useAuth from './useAuth';

const UseAdmin = () => {
    const { user } = useAuth();

    const { data: isAdmin, isPending: isAdminLoading } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:9000/users/admin/${user?.email}`);
            console.log(res.data);
            return res.data?.admin;
        }
    });
    
    return [isAdmin, isAdminLoading];
};

export default UseAdmin;
