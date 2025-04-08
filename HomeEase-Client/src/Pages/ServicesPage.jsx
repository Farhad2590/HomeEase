// components/ServicesPage.jsx
import React, { useState } from "react";
import {
  Search,
  Filter,
  Star,
  MapPin,
  ChevronDown,
  Sliders,
} from "lucide-react";

const ServicesPage = () => {
  // State for filters
  const [categoryFilter, setCategoryFilter] = useState("All Categories");
  const [priceFilter, setPriceFilter] = useState("All Prices");
  const [ratingFilter, setRatingFilter] = useState("All Ratings");
  const [sortBy, setSortBy] = useState("Recommended");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Sample data
  const categories = [
    "All Categories",
    "Home Cleaning",
    "Electrical Services",
    "Plumbing",
    "Gardening",
    "Appliance Repair",
    "Home Painting",
    "Pest Control",
    "Carpentry",
  ];

  const priceRanges = [
    "All Prices",
    "$0 - $50",
    "$50 - $100",
    "$100 - $200",
    "$200+",
  ];

  const ratings = [
    "All Ratings",
    "4.5 & up",
    "4.0 & up",
    "3.5 & up",
    "3.0 & up",
  ];

  const sortOptions = [
    "Recommended",
    "Price: Low to High",
    "Price: High to Low",
    "Top Rated",
    "Most Popular",
  ];

  const services = [
    {
      id: 1,
      title: "Professional Home Deep Cleaning",
      category: "Home Cleaning",
      provider: "CleanCo Services",
      providerImage: "/api/placeholder/50/50",
      rating: 4.8,
      reviews: 156,
      price: 80,
      image: "/api/placeholder/400/300",
      location: "Downtown, City",
      description:
        "Complete home cleaning service including dusting, vacuuming, mopping, bathroom cleaning, and kitchen cleaning.",
      badges: ["Top Rated", "Featured"],
    },
    {
      id: 2,
      title: "Full Electrical System Checkup",
      category: "Electrical Services",
      provider: "PowerFix Electricians",
      providerImage: "/api/placeholder/50/50",
      rating: 4.9,
      reviews: 124,
      price: 120,
      image: "/api/placeholder/400/300",
      location: "North Side, City",
      description:
        "Complete electrical system inspection, fault detection, and safety certification for your home.",
      badges: ["Top Rated"],
    },
    {
      id: 3,
      title: "Plumbing Emergency Services",
      category: "Plumbing",
      provider: "FastPlumb Solutions",
      providerImage: "/api/placeholder/50/50",
      rating: 4.7,
      reviews: 98,
      price: 95,
      image: "/api/placeholder/400/300",
      location: "East Side, City",
      description:
        "24/7 emergency plumbing services including pipe repairs, drain unclogging, and leak detection.",
      badges: ["Emergency Service"],
    },
    {
      id: 4,
      title: "Garden Maintenance & Landscaping",
      category: "Gardening",
      provider: "Green Thumb Landscaping",
      providerImage: "/api/placeholder/50/50",
      rating: 4.6,
      reviews: 87,
      price: 110,
      image: "/api/placeholder/400/300",
      location: "Suburbs, City",
      description:
        "Professional garden care including lawn mowing, plant care, weeding, and seasonal maintenance.",
      badges: [],
    },
    {
      id: 5,
      title: "Interior Wall Painting",
      category: "Home Painting",
      provider: "ColorMasters Painters",
      providerImage: "/api/placeholder/50/50",
      rating: 4.8,
      reviews: 112,
      price: 150,
      image: "/api/placeholder/400/300",
      location: "Central City",
      description:
        "Premium interior painting service with prep work, priming, and two coats of premium paint.",
      badges: ["Featured"],
    },
    {
      id: 6,
      title: "Refrigerator Repair & Maintenance",
      category: "Appliance Repair",
      provider: "AppliancePro Repairs",
      providerImage: "/api/placeholder/50/50",
      rating: 4.5,
      reviews: 76,
      price: 85,
      image: "/api/placeholder/400/300",
      location: "West End, City",
      description:
        "Refrigerator diagnostics, repair, and maintenance for all major brands and models.",
      badges: [],
    },
  ];

  // Render star rating
  const renderStars = (rating) => {
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < Math.floor(rating)
                ? "text-yellow-400 fill-current"
                : "text-gray-300"
            }`}
          />
        ))}
        <span className="ml-1 text-gray-800 font-medium">{rating}</span>
        <span className="ml-1 text-gray-500">({rating})</span>
      </div>
    );
  };

  // Toggle mobile filters
  const toggleMobileFilters = () => {
    setMobileFiltersOpen(!mobileFiltersOpen);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#68b5c2] to-[#4a9ba8] pt-8 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white mb-6">
            Find the Perfect Home Service
          </h1>

          {/* Search bar */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search for services..."
                className="w-full pl-10 pr-3 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#68b5c2]"
              />
            </div>
            <div className="relative w-full md:w-1/4">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MapPin className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Your location"
                className="w-full pl-10 pr-3 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#68b5c2]"
              />
            </div>
            <button className="bg-[#4a8a96] hover:bg-[#3a7a86] text-white px-8 py-3 rounded-lg font-medium">
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Desktop Filters */}
        <div className="hidden md:flex items-center justify-between mb-6">
          {/* Left side filters */}
          <div className="flex space-x-4">
            {/* Category filter */}
            <div className="relative">
              <button
                className="flex items-center justify-between w-48 px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-gray-700 hover:bg-gray-50"
                onClick={() => {}} // Add dropdown toggle functionality
              >
                <span>{categoryFilter}</span>
                <ChevronDown className="h-4 w-4 text-gray-500" />
              </button>
              {/* Dropdown would be here */}
            </div>

            {/* Price range filter */}
            <div className="relative">
              <button
                className="flex items-center justify-between w-40 px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-gray-700 hover:bg-gray-50"
                onClick={() => {}} // Add dropdown toggle functionality
              >
                <span>{priceFilter}</span>
                <ChevronDown className="h-4 w-4 text-gray-500" />
              </button>
              {/* Dropdown would be here */}
            </div>

            {/* Rating filter */}
            <div className="relative">
              <button
                className="flex items-center justify-between w-40 px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-gray-700 hover:bg-gray-50"
                onClick={() => {}} // Add dropdown toggle functionality
              >
                <span>{ratingFilter}</span>
                <ChevronDown className="h-4 w-4 text-gray-500" />
              </button>
              {/* Dropdown would be here */}
            </div>
          </div>

          {/* Right side filters */}
          <div className="flex items-center">
            <span className="text-gray-600 mr-2">Sort by:</span>
            <div className="relative">
              <button
                className="flex items-center justify-between w-48 px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-gray-700 hover:bg-gray-50"
                onClick={() => {}} // Add dropdown toggle functionality
              >
                <span>{sortBy}</span>
                <ChevronDown className="h-4 w-4 text-gray-500" />
              </button>
              {/* Dropdown would be here */}
            </div>
          </div>
        </div>

        {/* Mobile Filters */}
        <div className="md:hidden mb-6">
          <button
            className="w-full flex items-center justify-between px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm"
            onClick={toggleMobileFilters}
          >
            <span className="flex items-center">
              <Filter className="h-5 w-5 text-gray-500 mr-2" />
              <span className="font-medium text-gray-700">Filters & Sort</span>
            </span>
            <ChevronDown
              className={`h-5 w-5 text-gray-500 transition-transform ${
                mobileFiltersOpen ? "transform rotate-180" : ""
              }`}
            />
          </button>

          {mobileFiltersOpen && (
            <div className="mt-2 p-4 bg-white border border-gray-300 rounded-md shadow-sm">
              <div className="space-y-4">
                {/* Category filter - mobile */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Category
                  </label>
                  <select
                    value={categoryFilter}
                    onChange={(e) => setCategoryFilter(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  >
                    {categories.map((category, index) => (
                      <option key={index} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Price range filter - mobile */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Price Range
                  </label>
                  <select
                    value={priceFilter}
                    onChange={(e) => setPriceFilter(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  >
                    {priceRanges.map((range, index) => (
                      <option key={index} value={range}>
                        {range}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Rating filter - mobile */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Rating
                  </label>
                  <select
                    value={ratingFilter}
                    onChange={(e) => setRatingFilter(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  >
                    {ratings.map((rating, index) => (
                      <option key={index} value={rating}>
                        {rating}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Sort by - mobile */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Sort by
                  </label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  >
                    {sortOptions.map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <button className="w-full bg-[#68b5c2] hover:bg-[#4a9ba8] text-white font-medium py-2 rounded-md">
                  Apply Filters
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-700">
            Showing <span className="font-medium">{services.length}</span>{" "}
            services
          </p>

          {/* View options (grid/list) could go here */}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-duration-300"
            >
              <div className="relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                {service.badges.length > 0 && (
                  <div className="absolute top-2 left-2 flex flex-wrap gap-2">
                    {service.badges.map((badge, index) => (
                      <span
                        key={index}
                        className={`text-xs font-semibold px-2 py-1 rounded ${
                          badge === "Top Rated"
                            ? "bg-yellow-500 text-white"
                            : badge === "Featured"
                            ? "bg-[#68b5c2] text-white"
                            : badge === "Emergency Service"
                            ? "bg-red-600 text-white"
                            : "bg-gray-700 text-white"
                        }`}
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                )}
                <div className="absolute bottom-2 right-2 bg-white rounded-full py-1 px-3 text-sm font-bold text-gray-900">
                  ${service.price}
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-center mb-2">
                  <span className="px-2 py-1 bg-[#e0f2f5] text-[#4a8a96] text-xs font-medium rounded">
                    {service.category}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1 hover:text-[#68b5c2]">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {service.description}
                </p>

                <div className="flex items-center mb-3">
                  <div className="flex-shrink-0">
                    <img
                      src={service.providerImage}
                      alt={service.provider}
                      className="h-6 w-6 rounded-full"
                    />
                  </div>
                  <span className="ml-2 text-sm text-gray-600">
                    {service.provider}
                  </span>
                </div>

                <div className="flex items-center mb-3">
                  <MapPin className="h-4 w-4 text-gray-400 mr-1" />
                  <span className="text-sm text-gray-600">
                    {service.location}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  {renderStars(service.rating)}
                  <span className="text-gray-500 text-sm">
                    {service.reviews} reviews
                  </span>
                </div>

                <button className="mt-4 w-full bg-[#68b5c2] hover:bg-[#4a9ba8] text-white font-medium py-2 rounded-md">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center">
          <nav className="inline-flex rounded-md shadow">
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Previous
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-[#68b5c2] text-sm font-medium text-white hover:bg-[#4a9ba8]"
            >
              1
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              2
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              3
            </a>
            <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
              ...
            </span>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              8
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Next
            </a>
          </nav>
        </div>

        {/* No Results Message (conditionally shown) */}
        {services.length === 0 && (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="flex justify-center mb-4">
              <svg
                className="h-16 w-16 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No services found
            </h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your search or filter to find what you're looking
              for.
            </p>
            <button className="bg-[#68b5c2] hover:bg-[#4a9ba8] text-white font-medium px-4 py-2 rounded-md">
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServicesPage;
