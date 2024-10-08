import React, { useState } from 'react';
import {
  FaHome,
  FaUser,
  FaCog,
  FaExpandAlt,
  FaChevronRight,
  FaBook,
  FaBriefcase,
  FaEdit,
  FaEnvelope,
  FaSignOutAlt,
  FaArrowLeft,
  FaArrowRight,
} from 'react-icons/fa'; // Importing additional icons
import { useNavigate } from 'react-router-dom'; // For navigation (if using react-router-dom)


const LeftNavigationBar = ({ onLogout, onClose }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate(); // Initialize navigation
  const [showLogoutModal1, setShowLogoutModal1] = useState(false);

  const handleLogoutClick = () => {
    setShowLogoutModal1(true);
  };
  const confirmLogout = () => {
    setShowLogoutModal1(false);
    onLogout(); // Call the logout function
    // Clear the token from localStorage
    // localStorage.removeItem('token');

    // Optionally redirect to the login page
    // window.location.href = '/login';
    navigate('/login');
  };

  const cancelLogout1 = () => {
    setShowLogoutModal1(false);
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  // Navigation handler
  const handleNavigation = path => {
    navigate(path);
  };

  return (
    <div
      className={`h-screen bg-gray-800 text-white p-5 2xl:p-7 ${
        isExpanded ? 'w-72 2xl:w-80' : '2xl:w-24 lg:w-20 w-14'
      } transition-width duration-300`}
    >
      {/* Sidebar Content */}
      <nav className="flex flex-col items-center">
        <div
          className="my-4 flex items-center justify-start w-full cursor-pointer relative group"
          onClick={() => handleNavigation('/')}
        >
          <FaHome size={24} />
          {isExpanded && <span className="ml-4 text-lg">Home</span>}
          {!isExpanded && (
            <span className="absolute -left-1 bottom-6 translate-y-0 bg-gray-800 text-white text-xs py-1 px-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Home
            </span>
          )}
        </div>
        {/* <div
          className="my-4 flex items-center justify-start w-full cursor-pointer relative group"
          onClick={() => handleNavigation('/user-profile')}
        >
          <FaUser size={24} />
          {isExpanded && <span className="ml-4 text-lg">User Profile</span>}
          {!isExpanded && (
            <span className="absolute -left-1 bottom-6 translate-y-0 bg-gray-800 text-white text-xs py-1 px-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              User Profile
            </span>
          )}
        </div>
        <div
          className="my-4 flex items-center justify-start w-full cursor-pointer relative group"
          onClick={() => handleNavigation('/applied-tuition')}
        >
          <FaBook size={24} />
          {isExpanded && <span className="ml-4 text-lg">Applied Tuition</span>}
          {!isExpanded && (
            <span className="absolute -left-2 bottom-6 translate-y-0 bg-gray-800 text-white text-xs py-1 px-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Applied Tuition
            </span>
          )}
        </div> */}
        <div
          className="my-4 flex items-center justify-start w-full cursor-pointer relative group"
          onClick={() => handleNavigation('/tuition-jobs')}
        >
          <FaBriefcase size={24} />
          {isExpanded && <span className="ml-4 text-lg">Tuition Jobs</span>}
          {!isExpanded && (
            <span className="absolute -left-1 bottom-6 translate-y-0 bg-gray-800 text-white text-xs py-1 px-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Tuition Jobs
            </span>
          )}
        </div>
        <div
          className="my-4 flex items-center justify-start w-full cursor-pointer relative group"
          // onClick={() => handleProfileDetails('/profile-edit')}
          onClick={() => handleNavigation('/profile-edit')}
        >
          <FaEdit size={24} />
          {isExpanded && <span className="ml-4 text-lg">Profile Edit</span>}
          {!isExpanded && (
            <span className="absolute -left-1 bottom-6 translate-y-0 bg-gray-800 text-white text-xs py-1 px-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Edit Profile
            </span>
          )}
        </div>
        {/* <div
          className="my-4 flex items-center justify-start w-full cursor-pointer relative group"
          onClick={() => handleNavigation('/messages')}
        >
          <FaEnvelope size={24} />
          {isExpanded && <span className="ml-4 text-lg">Messages</span>}
          {!isExpanded && (
            <span className="absolute -left-3 bottom-6 translate-y-0 bg-gray-800 text-white text-xs py-1 px-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Message
            </span>
          )}
        </div>
        <div
          className="my-4 flex items-center justify-start w-full cursor-pointer relative group"
          onClick={() => handleNavigation('/settings')}
        >
          <FaCog size={24} />
          {isExpanded && <span className="ml-4 text-lg">Settings</span>}
          {!isExpanded && (
            <span className="absolute -left-3 bottom-6 translate-y-0 bg-gray-800 text-white text-xs py-1 px-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Settings
            </span>
          )}
        </div> */}
        <div
          className="my-4 flex items-center justify-start w-full cursor-pointer relative group"
          // onClick={() => handleNavigation('/logout')}
          onClick={handleLogoutClick}
        >
          <FaSignOutAlt size={24} />
          {isExpanded && <span className="ml-4 text-lg">Logout</span>}
          {!isExpanded && (
            <span className="absolute -left-3 bottom-6 translate-y-0 bg-gray-800 text-white text-xs py-1 px-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Logout
            </span>
          )}
        </div>
        {showLogoutModal1 && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 md:px-0 px-10">
            <div className="bg-white max-w-2xl md:p-6 p-4 rounded-lg shadow-lg">
              <div className="flex justify-between">
                <div className="mb-8">
                  <h2 className="md:text-lg text-black text-sm font-bold md:mb-4 mb-1">
                    Sure you want to log out?
                  </h2>
                  <p className="text-xs text-gray-600">
                    This will end your session, and you’ll need to sign in
                    again. Any unsaved changes may be lost. Stay logged in to
                    keep working.
                  </p>
                </div>
                {/* Close button */}
                <button
                  onClick={cancelLogout1}
                  className="md:mr-0 mr-0 xl:-mt-24 -mt-28 text-black text-2xl font-bold "
                >
                  {/* &times; */}
                  <img
                    src={logoutCloseIcon}
                    alt=""
                    className=" xl:w-8  xl:h-6 h-4 w-12"
                  />
                </button>
              </div>

              <div className="flex justify-center space-x-4">
                <button
                  onClick={cancelLogout1}
                  className=" text-black border-2 border-gray-700 py-2 xl:px-6 px-2 text-xs xl:text-sm rounded-lg hover:border-red-400"
                >
                  No, Cancel
                </button>
                <button
                  onClick={confirmLogout}
                  className="bg-red-500 text-white py-2 rounded-lg xl:px-6 px-2 text-xs xl:text-sm hover:bg-red-600"
                >
                  Yes, Confirm
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Expand / Collapse Button */}
      <div className="justify-end p-4 mt-4 hidden lg:flex">
        <button
          onClick={toggleExpand}
          className="text-white focus:outline-none relative group"
        >
          {isExpanded ? <FaArrowLeft size={24} /> : <FaArrowRight size={24} />}
          <span className="absolute -left-3 bottom-6 translate-y-0 bg-gray-800 text-white text-xs py-1 px-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {isExpanded ? 'Close' : 'Expand'}
          </span>
        </button>
      </div>
    </div>
  );
};

export default LeftNavigationBar;