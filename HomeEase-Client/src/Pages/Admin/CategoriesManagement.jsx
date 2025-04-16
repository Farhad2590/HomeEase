import React, { useState, useEffect } from "react";
import axios from "axios";
import AddCategoryModal from "../../Components/AdminComponents/AddCategoryModal";
import EditCategoryModal from "../../Components/AdminComponents/EditCategoryModal";

const CategoriesManagement = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(null);

  // Fetch all categories
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:9000/categories");
      setCategories(response.data);
      setError(null);
    } catch (err) {
      setError("Failed to fetch categories. Please try again.");
      console.error("Error fetching categories:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleEditClick = (category) => {
    setCurrentCategory(category);
    setShowEditModal(true);
  };

  const handleDeleteClick = async (categoryId) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      try {
        await axios.delete(`http://localhost:9000/categories/${categoryId}`);
        fetchCategories(); // Refresh the list after deletion
      } catch (err) {
        setError("Failed to delete category. Please try again.");
        console.error("Error deleting category:", err);
      }
    }
  };

  // const handleAddSuccess = () => {
  //   setShowAddModal(false);
  //   fetchCategories();
  // };

  const handleEditSuccess = () => {
    setShowEditModal(false);
    fetchCategories();
  };

  if (loading)
    return <div className="text-center py-10">Loading categories...</div>;

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Categories Management</h1>
        <button
          // onClick={() => setShowAddModal(true)}
          className="bg-customBlue hover:bg-customBlue text-white px-4 py-2 rounded"
        >
          Add New Category
        </button>
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Icon
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Description
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Popular Services
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {categories.map((category) => (
              <tr key={category._id.$oid || category._id}>
                <td className="px-6 py-4 whitespace-nowrap text-2xl">
                  {category.icon}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{category.name}</td>
                <td className="px-6 py-4">{category.description}</td>
                <td className="px-6 py-4">
                  <ul className="list-disc pl-5">
                    {category.popularServices.map((service, index) => (
                      <li key={index}>{service}</li>
                    ))}
                  </ul>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button
                    onClick={() => handleEditClick(category)}
                    className="text-customBlue hover:text-customBlue mr-4"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() =>
                      handleDeleteClick(category._id.$oid || category._id)
                    }
                    className="text-red-600 hover:text-red-900"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Category Modal
      {showAddModal && (
        <AddCategoryModal
          onClose={() => setShowAddModal(false)}
          onSuccess={handleAddSuccess}
        />
      )}
 */}
      {/* Edit Category Modal */}
      {showEditModal && currentCategory && (
        <EditCategoryModal
          category={currentCategory}
          onClose={() => setShowEditModal(false)}
          onSuccess={handleEditSuccess}
        />
      )}
    </div>
  );
};

export default CategoriesManagement;
