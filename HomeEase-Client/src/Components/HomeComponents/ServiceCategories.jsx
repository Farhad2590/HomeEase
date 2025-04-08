import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import DynamicHeader from "../SharedComponets/DynamicHeader"

const ServiceCategories = () => {
  const [showAllCategories, setShowAllCategories] = useState(false);

  const allCategories = [
    { name: 'Home Cleaning', icon: '🧹', count: '250+ Providers' },
    { name: 'Electrical Services', icon: '⚡', count: '120+ Providers' },
    { name: 'Plumbing', icon: '🔧', count: '180+ Providers' },
    { name: 'Gardening', icon: '🌱', count: '90+ Providers' },
    { name: 'Appliance Repair', icon: '🔌', count: '110+ Providers' },
    { name: 'Home Painting', icon: '🎨', count: '95+ Providers' },
    { name: 'Carpentry', icon: '🪚', count: '85+ Providers' },
    { name: 'AC Repair', icon: '❄️', count: '75+ Providers' },
    { name: 'Pest Control', icon: '🐜', count: '60+ Providers' },
    { name: 'Moving Help', icon: '🚚', count: '50+ Providers' },
    { name: 'Flooring', icon: '🧱', count: '40+ Providers' },
    { name: 'Roofing', icon: '🏠', count: '30+ Providers' },
  ];

  const displayedCategories = showAllCategories ? allCategories : allCategories.slice(0, 6);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
        <DynamicHeader title="Popular Service Categories" />
          {/* <h2 className="text-3xl font-bold text-gray-900">Popular Service Categories</h2> */}
          <p className="mt-4 text-lg text-gray-600">Browse through our most requested service categories</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {displayedCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <a href="#" className="block p-6">
                <div className="flex items-center">
                  <span className="text-4xl mr-4">{category.icon}</span>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{category.name}</h3>
                    <p className="text-[#68b5c2] mt-1">{category.count}</p>
                  </div>
                  <ArrowRight className="ml-auto h-5 w-5 text-gray-400" />
                </div>
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button 
            onClick={() => setShowAllCategories(!showAllCategories)}
            className="bg-[#68b5c2] hover:bg-[#5aa4b1] text-white px-6 py-3 rounded-md font-medium transition-colors"
          >
            {showAllCategories ? 'Show Less Categories' : 'Browse All Categories'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;