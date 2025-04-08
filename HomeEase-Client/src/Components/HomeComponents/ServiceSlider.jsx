import { useState, useEffect } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const ServiceBubbles = () => {
  const bubbles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 100 + 50,
    left: Math.random() * 100,
    top: Math.random() * 100,
    duration: Math.random() * 20 + 10,
  }));

  return (
    <div className="absolute w-full h-full overflow-hidden z-0">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute bg-[#68b5c2] rounded-full opacity-10 animate-float"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: `${bubble.left}%`,
            top: `${bubble.top}%`,
            animationDuration: `${bubble.duration}s`,
          }}
        ></div>
      ))}
    </div>
  );
};




const serviceData = [
  {
    image: "https://i.ibb.co.com/cKpD5mn1/cleaning-service.png",
    title: "Professional Cleaning",
    subtitle:
      "Our certified cleaners provide thorough home cleaning with eco-friendly products to ensure a healthy living space.",
    buttonLabel: "Book Now",
    price: "$50/hour"
  },
  {
    image: "https://i.ibb.co.com/5qzDTnD/plumbing-service.png",
    title: "24/7 Plumbing",
    subtitle:
      "Emergency plumbing services available round the clock. We fix leaks, clogs, and installations with expert precision.",
    buttonLabel: "Call Plumber",
    price: "From $75"
  },
  {
    image: "https://i.ibb.co.com/czy0nZg/electrician-service.png",
    title: "Electrical Repairs",
    subtitle:
      "Licensed electricians for all your wiring, lighting, and electrical system needs. Safety guaranteed.",
    buttonLabel: "Schedule Service",
    price: "$65/hour"
  },
  {
    image: "https://i.ibb.co.com/PszYyBKP/handyman-service.png",
    title: "Handyman Services",
    subtitle:
      "From furniture assembly to minor repairs, our skilled handymen can handle all your home maintenance tasks.",
    buttonLabel: "Get Help",
    price: "$45/hour"
  },
];

const ServiceSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev === serviceData.length - 1 ? 0 : prev + 1));
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev === 0 ? serviceData.length - 1 : prev - 1));
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  // Auto-rotate slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="relative w-full overflow-hidden rounded-lg shadow-lg bg-white">
      <div className="relative h-[500px]">
        {serviceData.map((service, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-transform duration-500 ${
              index === currentSlide ? "translate-x-0 opacity-100" : "hidden"
            }`}
          >
            <ServiceBubbles />
            <div className="relative z-10 h-full flex flex-col md:flex-row items-center justify-center gap-8 px-4 md:px-12">
              <div className="w-full flex items-center justify-center md:w-1/2 mb-6 md:mb-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="rounded-lg shadow-md w-full max-w-md h-72 object-cover"
                />
              </div>
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h2 className="text-3xl font-bold text-[#68b5c2] mb-4">
                  {service.title}
                </h2>
                <p className="text-gray-600 mb-4 text-lg">{service.subtitle}</p>
                <p className="text-xl font-semibold text-gray-800 mb-6">
                  Starting at {service.price}
                </p>
                <button className="bg-[#68b5c2] text-white px-8 py-3 rounded-lg hover:bg-[#3e8e41] transition-colors text-lg font-medium">
                  {service.buttonLabel}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-[#68b5c2] p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
        aria-label="Previous service"
      >
        <FiArrowLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-[#68b5c2] p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
        aria-label="Next service"
      >
        <FiArrowRight size={24} />
      </button>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
        {serviceData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-8 h-2 rounded-full cursor-pointer transition-colors ${
              index === currentSlide ? "bg-[#68b5c2]" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ServiceSlider;