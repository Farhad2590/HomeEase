import { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaTools, FaInfoCircle, FaUserCircle } from "react-icons/fa";
import { AiOutlineLogout } from "react-icons/ai";
import { MdDashboard } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import useAuth from "../../hooks/useAuth";

function Navbar() {
  const { logOut, user } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <nav
      className="px-4 py-3 flex items-center justify-between relative shadow-md"
      style={{ backgroundColor: "#68b5c2" }}
    >
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <FaTools className="text-2xl text-white" />
        <h1 className="text-xl font-bold text-white">HomeEase</h1>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-6">
        <Link
          to="/"
          className="flex items-center text-white hover:bg-[#2997a9] px-3 py-2 rounded"
        >
          <FaHome className="mr-2" />
          Home
        </Link>
        <Link
          to="/services"
          className="flex items-center text-white hover:bg-[#2997a9] px-3 py-2 rounded"
        >
          <FaTools className="mr-2" />
          Services
        </Link>
        <Link
          to="/howItWorks"
          className="flex items-center text-white hover:bg-[#2997a9] px-3 py-2 rounded"
        >
          <FaInfoCircle className="mr-2" />
          How It Works
        </Link>

        {user?.email ? (
          <div className="relative flex items-center ml-4">
            {/* Avatar and Dropdown */}
            <button
              onClick={toggleDropdown}
              className="flex items-center space-x-2"
              aria-label="User menu"
            >
              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  alt={user.displayName || "User"}
                  className="rounded-full w-10 h-10 border-2 border-white"
                />
              ) : (
                <FaUserCircle className="text-3xl text-white" />
              )}
            </button>

            {isDropdownOpen && (
              <div
                className="absolute bg-white text-black rounded-lg shadow-lg right-0 mt-2 w-48 z-50"
                style={{ top: "100%" }}
              >
                <div className="px-4 py-3 border-b border-gray-200">
                  <p className="text-sm font-medium">{user.displayName || user.email}</p>
                  <p className="text-xs text-gray-500 truncate">{user.email}</p>
                </div>

                <Link
                  to="/profile"
                  className="px-4 py-2 hover:bg-gray-100 w-full text-left flex items-center space-x-2 transition"
                >
                  <CgProfile className="text-gray-600" />
                  <span>Profile</span>
                </Link>

                <Link
                  to="/dashboard"
                  className="px-4 py-2 hover:bg-gray-100 w-full text-left flex items-center space-x-2 transition"
                >
                  <MdDashboard className="text-gray-600" />
                  <span>Dashboard</span>
                </Link>

                <button
                  onClick={logOut}
                  className="px-4 py-2 hover:bg-gray-100 w-full text-left flex items-center space-x-2 text-red-600 transition border-t border-gray-200"
                >
                  <AiOutlineLogout />
                  <span>Logout</span>
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link
            to="/signin"
            className="bg-white text-[#2997a9] hover:bg-gray-100 px-4 py-2 rounded-md font-medium"
          >
            Sign In
          </Link>
        )}
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center space-x-4">
        {user?.email && (
          <button
            onClick={toggleDropdown}
            className="flex items-center"
            aria-label="User menu"
          >
            {user.photoURL ? (
              <img
                src={user.photoURL}
                alt={user.displayName || "User"}
                className="rounded-full w-8 h-8 border-2 border-white"
              />
            ) : (
              <FaUserCircle className="text-2xl text-white" />
            )}
          </button>
        )}

        <button
          className="text-xl text-white p-1"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div
          className="absolute top-full left-0 w-full flex flex-col items-start space-y-1 p-4 z-50 shadow-lg"
          style={{ backgroundColor: "#68b5c2" }}
        >
          <Link
            to="/"
            className="flex items-center text-white hover:bg-[#2997a9] px-3 py-2 rounded w-full"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <FaHome className="mr-2" />
            Home
          </Link>
          <Link
            to="/services"
            className="flex items-center text-white hover:bg-[#2997a9] px-3 py-2 rounded w-full"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <FaTools className="mr-2" />
            Services
          </Link>
          <Link
            to="/howItWorks"
            className="flex items-center text-white hover:bg-[#2997a9] px-3 py-2 rounded w-full"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <FaInfoCircle className="mr-2" />
            How It Works
          </Link>

          {!user?.email && (
            <Link
              to="/signin"
              className="bg-white text-[#2997a9] hover:bg-gray-100 px-3 py-2 rounded w-full flex items-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FaUserCircle className="mr-2" />
              Sign In
            </Link>
          )}
        </div>
      )}

      {/* Mobile User Dropdown */}
      {isDropdownOpen && user?.email && (
        <div className="md:hidden absolute top-full right-0 mt-1 bg-white rounded-lg shadow-lg z-50 w-60 mr-2">
          <div className="p-3 border-b border-gray-200">
            <p className="font-medium">{user.displayName || "User"}</p>
            <p className="text-sm text-gray-500 truncate">{user.email}</p>
          </div>
          
          <Link
            to="/profile"
            className="flex items-center px-4 py-3 hover:bg-gray-50"
            onClick={() => setIsDropdownOpen(false)}
          >
            <CgProfile className="text-gray-600 mr-3" />
            <span>Profile</span>
          </Link>
          
          <Link
            to="/dashboard"
            className="flex items-center px-4 py-3 hover:bg-gray-50"
            onClick={() => setIsDropdownOpen(false)}
          >
            <MdDashboard className="text-gray-600 mr-3" />
            <span>Dashboard</span>
          </Link>
          
          <button
            onClick={() => {
              logOut();
              setIsDropdownOpen(false);
            }}
            className="flex items-center px-4 py-3 hover:bg-gray-50 text-red-600 w-full border-t border-gray-200"
          >
            <AiOutlineLogout className="mr-3" />
            <span>Logout</span>
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;