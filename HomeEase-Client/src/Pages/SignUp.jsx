import { useState } from "react";
import { FaUser, FaEnvelope, FaLock, FaPhone, FaBriefcase, FaTools } from "react-icons/fa";
import { AiOutlineEye, AiOutlineEyeInvisible, AiOutlineArrowRight } from "react-icons/ai";
import Lottie from "lottie-react";
import animationData from "../assets/annimation/login.json";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import axios from "axios";

const SignUpForm = ({ userType }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });
  const navigate = useNavigate();
  const { createUser, updateUserProfile } = useAuth();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const pass = form.password.value;

    try {
      const result = await createUser(email, pass);
      
      if (result.user) {
        const userData = {
          email: result.user.email,
          name: form.name.value,
          mobile: form.mobile.value,
          photo: result.user.photoURL || "https://i.ibb.co/ScLz5b5/pic1.jpg",
          createdAt: new Date().toISOString(),
          role: userType === "service_provider" ? "provider" : "receiver",
        };
        
        // const response = await axios.post(`${import.meta.env.VITE_API_URL}/users`, userData);

        const response = await axios.post(`http://localhost:9000/users`, userData);

        if (response.data.insertedId) {
          console.log("User successfully added to the database:", response.data);
          navigate("/"); // Navigate after successful addition
        } else {
          console.error("Failed to add user to the database.");
        }
      } else {
        console.error("User creation failed, no user object returned.");
      }
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  const getRoleTitle = () => {
    return userType === "service_provider" ? "Service Provider" : "Service Receiver";
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
      {/* Left Side Animation */}
      <div className="lg:w-1/2 flex items-center justify-center p-6">
        <div className="text-center">
          <div className="mb-4">
            <Lottie animationData={animationData} loop={true} className="w-full max-w-lg" />
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md inline-block">
            <div className="flex items-center space-x-2">
              {userType === "service_provider" ? (
                <FaTools className="text-blue-600 text-xl" />
              ) : (
                <FaBriefcase className="text-blue-600 text-xl" />
              )}
              <span className="font-medium text-gray-800">
                Signing up as a <span className="text-blue-600 font-bold">{getRoleTitle()}</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side Form */}
      <div className="lg:w-1/2 flex items-center justify-center p-6 bg-white shadow-lg rounded-lg">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
            Create Your {getRoleTitle()} Account
          </h2>
          <p className="text-center text-gray-600 mb-6">
            {userType === "service_provider" 
              ? "Join us to offer your services to potential clients!"
              : "Join us to discover and hire top service providers!"}
          </p>

          {/* Signup Form */}
          <form onSubmit={handleSubmit}>
            {/* Full Name */}
            <div className="relative mb-4">
              <FaUser className="absolute left-3 top-3 text-gray-500" />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#68b5c2] transition"
                required
              />
            </div>

            {/* Email */}
            <div className="relative mb-4">
              <FaEnvelope className="absolute left-3 top-3 text-gray-500" />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#68b5c2] transition"
                required
              />
            </div>

            {/* Mobile */}
            <div className="relative mb-4">
              <FaPhone className="absolute left-3 top-3 text-gray-500" />
              <input
                type="text"
                name="mobile"
                placeholder="Mobile Number"
                value={formData.mobile}
                onChange={handleChange}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#68b5c2] transition"
                required
              />
            </div>

            {/* Password */}
            <div className="relative mb-4">
              <FaLock className="absolute left-3 top-3 text-gray-500" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#68b5c2] transition"
                required
              />
              <div
                className="absolute right-3 top-3 text-gray-500 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-start mb-4">
              <input type="checkbox" required className="mt-1 mr-2" />
              <p className="text-gray-600 text-sm">
                I agree to the{" "}
                <a href="#" className="text-[#68b5c2] underline">
                  Terms and Conditions
                </a>
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#68b5c2] text-white rounded-lg py-2 hover:bg-[#5aa1ad] transition flex items-center justify-center"
            >
              Create Account
              <AiOutlineArrowRight className="ml-2" />
            </button>
          </form>

          {/* Already have an account */}
          <p className="text-center text-gray-600 mt-4">
            Already have an account?{" "}
            <a href="/signin" className="text-[#68b5c2] underline">
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;