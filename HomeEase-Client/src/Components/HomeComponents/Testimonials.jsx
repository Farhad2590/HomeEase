import DynamicHeader from "../SharedComponets/DynamicHeader"
const Testimonials = () => {
  const testimonials = [
    {
      rating: 5,
      quote:
        "The cleaning service was exceptional. The team was professional, efficient, and left my home spotless. Booking was so easy through the platform!",
      name: "Sarah Johnson",
      service: "Home Cleaning Service",
    },
    {
      rating: 5,
      quote:
        "The electrician was prompt, knowledgeable, and fixed our issues quickly. Fair pricing and excellent service - would definitely use again!",
      name: "Michael Thompson",
      service: "Electrical Repair Service",
    },
    {
      rating: 5,
      quote:
        "The plumbing service was outstanding! They arrived on time, diagnosed the problem quickly, and fixed it for a reasonable price. Great experience!",
      name: "Jennifer Davis",
      service: "Plumbing Service",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <DynamicHeader title="What Our Customers Say" />
          {/* <h2 className="text-3xl font-bold text-gray-900">What Our Customers Say</h2> */}
          <p className="mt-4 text-lg text-gray-600">
            Read testimonials from our satisfied customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">`{testimonial.quote}`</p>
              <div className="flex items-center">
                <img
                  src="/api/placeholder/50/50"
                  alt="Customer"
                  className="h-10 w-10 rounded-full"
                />
                <div className="ml-3">
                  <h4 className="text-sm font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">{testimonial.service}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
