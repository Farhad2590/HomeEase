import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const AddServiceForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    description: '',
    price: '',
    duration: '',
    rating: 0,
    serviceProvider: '',
    image: '',
    features: [],
    isPopular: false,
    reviews: [],
  });
  
  const [featureInput, setFeatureInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleFeatureAdd = () => {
    if (featureInput.trim() !== '') {
      setFormData({
        ...formData,
        features: [...formData.features, featureInput.trim()]
      });
      setFeatureInput('');
    }
  };

  const handleFeatureRemove = (index) => {
    const updatedFeatures = formData.features.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      features: updatedFeatures
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    
    // Convert price to number for database
    const serviceData = {
      ...formData,
      price: Number(formData.price),
      rating: Number(formData.rating)
    };
    
    try {
      const response = await axios.post('/services', serviceData);
      console.log(response);
      toast("Service added successfully!")
      setMessage('Service added successfully!');
      // Reset form
      setFormData({
        name: '',
        category: '',
        description: '',
        price: '',
        duration: '',
        rating: 0,
        serviceProvider: '',
        image: '',
        features: [],
        isPopular: false,
        reviews: []
      });
    } catch (error) {
      setMessage(`Error: ${error.response?.data?.error || 'Something went wrong'}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Add New Service</h1>
      
      {message && (
        <div className={`p-4 mb-4 rounded ${message.includes('Error') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
          {message}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Service Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
            Category *
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select Category</option>
            <option value="Cleaning">Cleaning</option>
            <option value="Repair">Repair</option>
            <option value="Installation">Installation</option>
            <option value="Maintenance">Maintenance</option>
            <option value="Consultation">Consultation</option>
            <option value="Other">Other</option>
          </select>
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
            Description *
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="3"
            required
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
              Price ($) *
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              min="0"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="duration">
              Duration *
            </label>
            <input
              type="text"
              id="duration"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              placeholder="e.g. 2 hours"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rating">
              Initial Rating
            </label>
            <input
              type="number"
              id="rating"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              min="0"
              max="5"
              step="0.1"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="serviceProvider">
              Service Provider Name *
            </label>
            <input
              type="text"
              id="serviceProvider"
              name="serviceProvider"
              value={formData.serviceProvider}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
            Image URL
          </label>
          <input
            type="url"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="https://example.com/images/service.jpg"
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Service Features
          </label>
          <div className="flex">
            <input
              type="text"
              value={featureInput}
              onChange={(e) => setFeatureInput(e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Add a feature"
            />
            <button
              type="button"
              onClick={handleFeatureAdd}
              className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600"
            >
              Add
            </button>
          </div>
          <div className="mt-2">
            {formData.features.map((feature, index) => (
              <div key={index} className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {feature}
                <button
                  type="button"
                  onClick={() => handleFeatureRemove(index)}
                  className="ml-2 text-red-500 hover:text-red-700"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mb-6">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="isPopular"
              name="isPopular"
              checked={formData.isPopular}
              onChange={handleChange}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label className="ml-2 block text-gray-700 text-sm font-bold" htmlFor="isPopular">
              Mark as Popular Service
            </label>
          </div>
        </div>
        
        <div className="flex items-center justify-end">
          <button
            type="submit"
            className="bg-blue-500 text-white font-bold py-2 px-6 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'Add Service'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddServiceForm;