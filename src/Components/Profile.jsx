import React from 'react';
import educationPicture from "../assets/graduation.png"
import profilePic from "../assets/Logo or icon.png"

import vector from "../assets/Vector (1).png"


const Profile = () => {
    return (
        <div className="max-w-5xl mx-auto p-6">
            {/* Profile Section */}
            <div className='bg-white shadow-md rounded-lg'>
                <div className=" p-6 flex flex-col md:flex-row lg:flex-row gap-3  justify-between items-center">
                    {/* Left Content - Profile Picture and Basic Details */}
                    <div className="flex max-sm:flex-col items-center gap-2">
                        <img className="w-28 h-28 rounded-full" src={profilePic} alt="Profile" />
                        <div>
                            <div className="flex items-center gap-2 ">
                                <h2 className="text-2xl font-bold text-left">Mr. Arif Hasan</h2>
                                <span className="text-sm bg-blue-500 text-white p-2 rounded-full">Verified Referrer</span>
                            </div>
                            <p className="text-gray-600 mt-1 text-left">Experienced and Professional Referrer</p>
                            <p className="text-gray-500 text-sm text-left">
                                <i className="fas fa-map-marker-alt"></i> Mohakhali, Dohs, Dhaka 1207
                            </p>
                        </div>
                    </div>

                    {/* Right Content - Join Date */}
                    <div className="text-gray-500 text-sm flex flex-col items-end border border-gray-300 rounded p-3">
                        <div className="flex items-center gap-2">
                            <img src={vector} alt="" />
                            Joined 8 September, 2024
                        </div>
                    </div>

                    {/* About Section */}
                </div>
                <div className="mt-8  text-start   ">

                    <button className='text-xl font-semibold   border-orange-600 border-b-2 cursor-auto	 px-3  text-red-500 '>
                        About
                    </button>
                </div>
            </div>


            {/* Career Objective */}
            <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                <h4 className="font-bold  text-start text-xl">Career Objective</h4>
                <p className="text-gray-700 mt-2 text-start">
                    Dedicated and results-driven professional seeking to leverage strong networking skills and a passion for education to enhance the referral process.
                    Committed to connecting talented tutors with eager learners, while fostering relationships that drive mutual success and satisfaction.
                </p>
            </div>

            {/* Education Section */}
            <div className="mt-6 p-4 bg-gray-100 rounded-lg">
                <h4 className="font-bold  text-start text-xl">Education and Certification</h4>
                <div className="mt-2 text-gray-700 space-y-2 text-start">
                    <div className='flex items-center gap-2'>
                        <img src={educationPicture} alt="" />
                        <div>
                            <p> Higher Secondary Certificate at Khulna Public College in Science </p>
                            <p>(GPA: 4.25)</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <img src={educationPicture} alt="" />
                        <div>
                            <p> BSc in CSE is Bachelor of Science in Computer Science and
                                Engineering at United International University  </p>
                            <p>(CGPA: 3.33)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;