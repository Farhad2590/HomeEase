import { FaCalendar } from "react-icons/fa";
import { FaMailchimp } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../hooks/useAuth";

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    if (user?.email) {
      fetchUserData(user.email);
    }
  }, [user?.email]);

  const fetchUserData = async (email) => {
    try {
      const { data } = await axios.get(`http://localhost:9000/users/${email}`);
      setUserData(data);
    } catch (error) {
      console.error("Failed to fetch user:", error);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (!userData) {
    return (
      <div className="text-center mt-10 text-gray-600">
        Loading profile...
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Header Background */}
      <div className="h-32 bg-[#68b5c2]" />

      {/* Profile Content */}
      <div className="relative px-6 pb-6">
        {/* Profile Image */}
        <div className="absolute -top-36 left-1/2 transform -translate-x-1/2">
          <img
            src={userData.photo}
            alt={userData.name}
            className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
          />
        </div>

        {/* Profile Info */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl font-bold text-gray-800">{userData.name}</h2>
          <p className="text-[#68b5c2] font-medium capitalize">{userData.role}</p>
        </div>

        {/* Contact Info */}
        <div className="mt-6 space-y-3 text-sm">
          <div className="flex items-center text-gray-600">
            <FaMailchimp className="w-5 h-5 text-[#68b5c2]" />
            <span className="ml-3">{userData.email}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <FaPhoneAlt className="w-5 h-5 text-[#68b5c2]" />
            <span className="ml-3">{userData.mobile}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <FaCalendar className="w-5 h-5 text-[#68b5c2]" />
            <span className="ml-3">Joined on {formatDate(userData.createdAt)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
