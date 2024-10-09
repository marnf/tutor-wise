import React from 'react';
import { MdInfoOutline } from "react-icons/md";
import { IoMdShareAlt } from "react-icons/io";
import educationPicture from "../assets/graduation.png"
import profilePic from "../assets/Logo or icon.png"
import male from "../assets/image 15.png"
import calender from "../assets/uis_calender.png"
import english from "../assets/exam.png"
import person from "../assets/computer.png"
import location from "../assets/carbon_location.png"
import money from "../assets/tabler_coin-taka-filled.png"
import fire from "../assets/mingcute_fire-line.png"



const Jobs = () => {


    return (
        <div>
            <div className='p-2'>
                <h1 className='text-2xl font-bold text-start'>Referrer Dashboard</h1>
                <p className='text-start '>Empowering Your Tutor Referrals: Track, Manage, and Reward Your Success!</p>

            </div>
            <div className="container m-auto">
                <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3">
                    <div className="bg-white shadow-md  border-2 border-black rounded-3xl w-full ">
                        <div className="flex items-center p-4 gap-2">
                            <img
                                className="w-16 h-16 rounded-full"
                                src={profilePic}
                            />
                            <div className='w-full'>

                                <div className='flex justify-between p-2'>
                                    <div>
                                        <p className='text-xl font-bold'>Mr.Arif Hasan</p>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <button className=''>
                                            <MdInfoOutline size={25} />
                                        </button>
                                        <button>
                                            <IoMdShareAlt size={25} />
                                        </button>


                                    </div>
                                </div>
                                <div className=' grid grid-cols-4 md:grid-cols-3 max-sm:grid-cols-2 gap-1'>
                                    <div className='flex items-center gap-2 text-start'>
                                        <img src={educationPicture} alt="" />
                                        <p className='text-xs'> SSC/ Dakhil</p>
                                    </div>
                                    <div className='flex items-center gap-2 text-start'>
                                        <img src={english} alt="" />
                                        <p className='text-xs'>English Medium</p>
                                    </div>
                                    <div className='flex items-center gap-2 text-start'>
                                        <img src={person} alt="" />
                                        <p className='text-xs'>In Person Mode</p>
                                    </div>
                                    <div className='flex items-center gap-2 text-start'>
                                        <img src={location} alt="" />
                                        <p className='text-xs'> Mohakhali, Dohs, Dhaka 1207</p>
                                    </div>

                                </div>


                            </div>
                        </div>

                        <div className="px-4 py-2 flex justify-between text-gray-600">
                            <div className="flex items-center gap-2">
                                <img src={male} alt="" />
                                <span>Male</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <img src={calender} alt="" />
                                <span>4 Days/Week</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <img src={money} alt="" />
                                <span>12,000/Month</span>
                            </div>
                        </div>

                        <div className="px-4 text-start py-2 text-gray-600">
                            Student From Glenrich International School - Senior English Medium Experienced Tutor Needed!!
                        </div>

                        <div className="flex flex-wrap gap-2 px-4 py-2">
                            <span className="px-3 py-1 border border-black  text-gray-700 rounded-full">Math</span>
                            <span className="px-3 py-1 border border-black  text-gray-700 rounded-full">Information Community Technology</span>
                            <span className="px-3 py-1 border border-black  text-gray-700 rounded-full">Science</span>
                            <span className="px-3 py-1 border border-black  text-gray-700 rounded-full">Biology</span>
                        </div>

                        <div className="flex justify-center p-4 gap-2">
                            <button className="bg-slate-200 border-red-600 text-orange-700 text-xl px-4 py-4 rounded hover:bg-slate-300 w-1/2 ">View Profile</button>
                            <button className="bg-orange-500 text-white px-4 py-4 rounded hover:bg-orange-600 w-1/2 flex items-center justify-center gap-2">
                            <div>
                                <img src={fire} alt="" />
                            </div>
                            <div>Refer</div>
                            </button>
                        </div>
                    </div>
                   

                </div>
            </div>


        </div>
    );
};

export default Jobs;