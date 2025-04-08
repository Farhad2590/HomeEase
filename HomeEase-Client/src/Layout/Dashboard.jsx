import { useState } from 'react';
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { FaUser, FaUsers, FaBullhorn, FaPen, FaPlusSquare, FaTags, FaHome, FaSignOutAlt } from "react-icons/fa";
import { FcMenu } from 'react-icons/fc';
import useAuth from '../hooks/useAuth';
import UseAdmin from '../hooks/useAdmin';
import UseWriter from '../hooks/UseWriter';

const Dashboard = () => {
  const { user, logOut } = useAuth();
  const [isAdmin] = UseAdmin();
  const [isWriter] = UseWriter();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const adminLinks = [
    { name: 'Admin Profile', path: '/dashboard/adminProfile', icon: <FaUser /> },
    { name: 'Manage Members', path: '/dashboard/manageUsers', icon: <FaUsers /> },
    { name: 'Manage Writer', path: '/dashboard/manageWriter', icon: <FaPen /> },
    { name: 'Add Product', path: '/dashboard/addProduct', icon: <FaPlusSquare /> },
    { name: 'Add Coupons', path: '/dashboard/manageCoupons', icon: <FaTags /> },
    { name: 'Make Announcement', path: '/dashboard/makeAnnouncement', icon: <FaBullhorn /> },
  ];

  const writerLinks = [
    { name: 'Writer Profile', path: '/dashboard/writerProfile', icon: <FaUser /> },
    // { name: 'Write Article', path: '/dashboard/manageBlogs', icon: <FaPen /> },
    { name: 'Manage Blogs', path: '/dashboard/manageBlogs', icon: <FaTags /> },
    { name: 'Purchase Products', path: '/dashboard/purchasedProducts', icon: <FaPlusSquare /> },
    { name: 'Payment History', path: '/dashboard/paymentHistory', icon: <FaTags /> },

  ];

  const userLinks = [
    { name: 'User Profile', path: '/dashboard/userProfile', icon: <FaUser /> },
    { name: 'Purchase Products', path: '/dashboard/purchasedProducts', icon: <FaPlusSquare /> },
    { name: 'Payment History', path: '/dashboard/paymentHistory', icon: <FaTags /> },
    // { name: 'Manage Blogs', path: '/dashboard/purchasedProducts', icon: <FaTags /> },
  ];

  const linksToShow = isAdmin ? adminLinks : isWriter ? writerLinks : userLinks;

  const handleLogOut = () => {
    logOut();
    navigate("/");
  };

  return (
    <div className="flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside
        className={`flex flex-col w-full md:w-64 px-2 py-4 ${isSidebarOpen ? 'block' : 'hidden md:block'}`}
        style={{ backgroundColor: "#68b5c2" }}
      >
        {/* User Profile Section */}
        <div className="flex flex-col items-center mt-6 -mx-2">
          <img
            className="object-cover w-24 h-24 mx-2 rounded-full border-4 border-white"
            src={user?.photoURL || "https://via.placeholder.com/40"}
            alt="user avatar"
          />
          <h4 className="mx-2 mt-2 font-medium text-white">{user?.displayName || 'User'}</h4>
          <p className="mx-2 mt-1 text-sm font-medium text-white">{user?.email}</p>
        </div>

        {/* Navigation Links */}
        <div className="mt-8">
          <ul className="flex flex-col gap-3">
            {linksToShow.map((link, index) => (
              <Link
                to={link.path}
                key={index}
                className="group flex items-center px-4 py-3 text-white transition-all duration-200 ease-in-out rounded-lg hover:bg-white hover:text-[#68b5c2]"
              >
                <span className="inline-flex items-center justify-center w-8 h-8 mr-2">
                  {link.icon}
                </span>
                <span className="text-sm font-medium">{link.name}</span>
              </Link>
            ))}

            {/* Divider */}
            <div className="border-t border-white/20 my-4"></div>

            {/* Home Link */}
            <li>
              <NavLink
                to="/"
                onClick={() => setIsSidebarOpen(false)}
                className="flex items-center justify-center gap-2 p-2 text-white hover:bg-white hover:text-[#68b5c2] rounded-lg transition-colors duration-200"
              >
                <FaHome />
                Home
              </NavLink>
            </li>

            {/* Logout Button */}
            <li>
              <button
                onClick={handleLogOut}
                className="w-full flex items-center justify-center gap-2 p-2 text-white hover:bg-white hover:text-[#68b5c2] rounded-lg transition-colors duration-200"
              >
                <FaSignOutAlt />
                Logout
              </button>
            </li>
          </ul>
        </div>
      </aside>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-md text-white"
        style={{ backgroundColor: "#68b5c2" }}
      >
        <FcMenu size={24} />
      </button>

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
