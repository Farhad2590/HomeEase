import { FaStar } from "react-icons/fa";

const DynamicHeader = ({ title }) => {
  return (
    <div className="py-10 px-4 flex justify-center items-center bg-white text-[#68b5c2] relative overflow-hidden">
      {/* Sparkle Icons */}
      <FaStar className="absolute top-4 left-6 text-[#68b5c2] opacity-30 animate-pulse" />
      <FaStar className="absolute bottom-4 right-6 text-[#68b5c2] opacity-30 animate-pulse" />

      {/* Header Content */}
      <h1 className="relative text-2xl md:text-3xl font-bold border-2 border-[#68b5c2] px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
        {title}
      </h1>
    </div>
  );
};

export default DynamicHeader;
