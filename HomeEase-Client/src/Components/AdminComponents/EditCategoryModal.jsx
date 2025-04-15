import React, { useState } from "react";
import axios from "axios";

const EditCategoryModal = ({ category, onClose, onSuccess }) => {
  const [formData, setFormData] = useState({
    name: category.name,
    description: category.description,
    icon: category.icon,
    popularServices: [...category.popularServices],
    image: category.image,
  });
  const [popularServiceInput, setPopularServiceInput] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddPopularService = () => {
    if (popularServiceInput.trim() !== "") {
      setFormData({
        ...formData,
        popularServices: [...formData.popularServices, popularServiceInput.trim()],
      });
      setPopularServiceInput("");
    }
  };

  const handleRemovePopularService = (index) => {
    const updatedServices = formData.popularServices.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      popularServices: updatedServices,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      await axios.put(
        `http://localhost:9000/categories/${category._id.$oid || category._id}`,
        formData
      );
      onSuccess();
    } catch (err) {
      setError("Failed to update category. Please try again.");
      console.error("Error updating category:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Edit Category</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded"
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="icon"
              >
                Icon (Emoji)
              </label>
              <input
                id="icon"
                name="icon"
                type="text"
                value={formData.icon}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded"
              rows="3"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="image"
            >
              Image URL
            </label>
            <input
              id="image"
              name="image"
              type="url"
              value={formData.image}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Popular Services
            </label>
            <div className="flex">
              <input
                type="text"
                value={popularServiceInput}
                onChange={(e) => setPopularServiceInput(e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-l"
                placeholder="Add a popular service"
              />
              <button
                type="button"
                onClick={handleAddPopularService}
                className="bg-customBlue text-white px-4 py-2 rounded-r hover:bg-customBlue"
              >
                Add
              </button>
            </div>
            <div className="mt-2">
              {formData.popularServices.map((service, index) => (
                <div
                  key={index}
                  className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                >
                  {service}
                  <button
                    type="button"
                    onClick={() => handleRemovePopularService(index)}
                    className="ml-2 text-red-500 hover:text-red-700"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded mr-2 hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`bg-customBlue text-white font-bold py-2 px-4 rounded hover:bg-customBlue ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? "Updating..." : "Update Category"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditCategoryModal;