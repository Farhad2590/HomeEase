import { ArrowRight } from "lucide-react";
import DynamicHeader from "../SharedComponets/DynamicHeader"

const FeaturedServices = () => {
  const featuredServices = [
    {
      id: 1,
      title: "Professional Home Cleaning",
      provider: "CleanCo Services",
      rating: 4.8,
      reviews: 156,
      price: 80,
      image: "/api/placeholder/400/300",
    },
    {
      id: 2,
      title: "Electrical System Checkup",
      provider: "PowerFix Electricians",
      rating: 4.9,
      reviews: 124,
      price: 120,
      image: "/api/placeholder/400/300",
    },
    {
      id: 3,
      title: "Plumbing Emergency Services",
      provider: "FastPlumb Solutions",
      rating: 4.7,
      reviews: 98,
      price: 95,
      image: "/api/placeholder/400/300",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <DynamicHeader title="Featured Services" />
            {/* <h2 className="text-3xl font-bold text-gray-900"></h2> */}
            <p className="mt-4 text-lg text-gray-600">
              Our top-rated services with verified professionals
            </p>
          </div>
          <a
            href="#"
            className="hidden md:flex items-center text-[#68b5c2] hover:text-[#5aa4b1] font-medium transition-colors"
          >
            <span>View All</span>
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">By {service.provider}</p>
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    <svg
                      className="h-5 w-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="ml-1 text-gray-900">{service.rating}</span>
                  </div>
                  <span className="mx-2 text-gray-400">•</span>
                  <span className="text-gray-600">
                    {service.reviews} reviews
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">
                    ${service.price}
                  </span>
                  <button className="bg-[#68b5c2] hover:bg-[#5aa4b1] text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <button className="bg-[#68b5c2] hover:bg-[#5aa4b1] text-white px-6 py-3 rounded-md font-medium transition-colors">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
