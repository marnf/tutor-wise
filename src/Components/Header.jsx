import React, { useState, useEffect, useRef } from 'react';
import { FaBell, FaUserCircle, FaSignOutAlt } from 'react-icons/fa';

import { useNavigate } from 'react-router-dom';


// Custom hook for detecting clicks outside a specified element
function useOutsideClick(ref, callback) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [ref, callback]);
}

const Header = ({ onLogout }) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [showUserProfile, setShowUserProfile] = useState(false);
  const [language, setLanguage] = useState('English');
  const navigate = useNavigate();
  const notificationRef = useRef(null);
  const userInfoRef = useRef(null);

  useOutsideClick(notificationRef, () => setIsPopupVisible(false));
  useOutsideClick(userInfoRef, () => {
    setShowUserProfile(false);
  });

  const handleHomeNavigate = () => {
    navigate('/dashboard');
  };


  const handleBecomeProClick = () => {
    navigate('/becomePro-subscription');
    setShowUserProfile(false);
  };
  const handleBuyApplyClick = () => {
    navigate('/buyApply-subcription');
    setShowUserProfile(false);
  };

  const toggleUserModal = () => {
    setShowUserProfile(!showUserProfile);
  };

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

 
  const toggleLanguage = () => {
    setLanguage(prevLang => (prevLang === 'English' ? 'Bangla' : 'English'));
  };

  return (
    <div className="relative ">
      <div className="flex items-center justify-between bg-gray-700 shadow-md px-5 py-3 md:px-6 relative z-20">
        {/* Left: Logo */}
        <div className="flex items-center">
          <button onClick={handleHomeNavigate}>
            
          </button>
        </div>

        {/* Right: New Loan Application Button, Notification Icon, User Info */}
        <div className="flex items-center xl:space-x-4 space-x-2">
          {/* Notification Icon with Popup */}
          <div className="relative" ref={notificationRef}>
            <button
              className="text-DefaultColor hover:text-btnHover focus:outline-none"
              onClick={togglePopup}
            >
              <FaBell size={20} />
            </button>

            {isPopupVisible && (
              <div className="absolute -right-52 md:-right-16 mt-4 w-80 bg-NotificationBG border border-gray-800 shadow-xl rounded-md p-4 text-sm z-30 xl:w-[480px] 2xl:w-[520px] ">
                <h2 className="text-center text-lg font-bold mb-2">
                  Notification(1)
                </h2>
                <div className="flex items-center space-x-2  p-2 mb-1">
                  <img
                    src={NotificationPhoto}
                    alt="Notification Photo"
                    className="h-10 w-10 rounded-full"
                  />
                  <span className="text-black">
                    <p className="text-xs text-left">
                      <span className="font-semibold">Congratulation,</span>{' '}
                      Your Applied Job Post for{' '}
                      <span className="font-semibold">
                        “Looking for a butian with good humour”
                      </span>{' '}
                      has been confirmed. Contact Number :{' '}
                      <span className="font-semibold">0174328497.</span>
                    </p>
                  </span>
                </div>

                <h2 className="text-red-500 text-center ">
                  Which Method Do you want to pay for this tuition?
                </h2>

                <div
                  className="cursor-pointer"
                  // onClick={togglePopup}
                >
                  <PaymentMethodInNotification />
                </div>
              </div>
            )}
          </div>
          {/* Language Toggle as Tabs English to Bangla */}
          <div className="flex items-center space-x-4">
            <div className="flex border border-gray-300 rounded-lg overflow-hidden">
              <button
                onClick={toggleLanguage}
                className={`md:px-4 px-2 py-1 lg:w-20 w-16  md:text-lg font-bold text-xs ${
                  language === 'English'
                    ? 'bg-DefaultColor text-white'
                    : 'bg-white text-gray-700'
                } transition-colors duration-300 focus:outline-none`}
              >
                Eng
              </button>
              <button
                onClick={toggleLanguage}
                className={`md:px-4 px-2 py-1 lg:w-20 w-16   md:text-lg font-bold text-xs  ${
                  language === 'Bangla'
                    ? 'bg-DefaultColor text-white'
                    : 'bg-white text-gray-700'
                } transition-colors duration-300 focus:outline-none`}
              >
                বাংলা
              </button>
            </div>
          </div>

          {/* User Info */}
          <div
            className="relative border border-gray-300 p-1.5 pl-2 pr-2 rounded-md"
            ref={userInfoRef}
          >
            <div
              className="flex items-center gap-2.5 cursor-pointer"
              onClick={toggleUserModal}
            >
              <span className="text-DefaultColor text-left  hidden md:block">
                <h2 className="md:text-lg font-bold text-xs">Ovie Rahman</h2>
                <p className="text-xs">Tutor</p>
              </span>
            </div>

            {showUserProfile && (
              <div className="absolute right-0 mt-2 xl:w-48 w-40 bg-white border border-gray-300 shadow-lg rounded-md p-0 text-sm z-30">
                <div
                  className="cursor-pointer hover:bg-gray-100 p-3 rounded border-b"
                  onClick={handleBecomeProClick}
                >
                  <span className="font-semibold">Become Pro</span>
                </div>
                <div
                  className="cursor-pointer hover:bg-gray-100 p-3 rounded"
                  onClick={handleBuyApplyClick}
                >
                  <span className="font-semibold">Buy Apply</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;