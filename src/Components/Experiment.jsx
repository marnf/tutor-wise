import React from 'react';
import Marquee from "react-fast-marquee";
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
import vector from "../assets/Vector (1).png"




const Experiment = () => {
    return (
        <div>
            <marquee behavior="scroll" direction="left" scrollamount="10">

                <div className='flex space-x-3'>
                    <img src={profilePic} alt="" />
                    <img src={profilePic} alt="" />
                    <img src={profilePic} alt="" />
                    <img src={profilePic} alt="" />
                    <img src={profilePic} alt="" />
                    <img src={profilePic} alt="" />
                    <img src={profilePic} alt="" />
                    <img src={profilePic} alt="" />
                    <img src={profilePic} alt="" />
                    <img src={profilePic} alt="" />
                    <img src={profilePic} alt="" />
                    <img src={profilePic} alt="" />
                    <img src={profilePic} alt="" />
                    <img src={profilePic} alt="" />
                    <img src={profilePic} alt="" />
                    <img src={profilePic} alt="" />
                    <img src={profilePic} alt="" />
                    <img src={profilePic} alt="" />
                    <img src={profilePic} alt="" />
                    <img src={profilePic} alt="" />
                    <img src={profilePic} alt="" />
                    <img src={profilePic} alt="" />
                    <img src={profilePic} alt="" />
                </div>


            </marquee>
        </div>
    );
};

export default Experiment;