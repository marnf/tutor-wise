import React from 'react';
import pic1 from '../assets/icon.png'

const Dashboard = () => {
    return (
        <div className='container  flex gap-4  '>
            <div className='  w-2/3 border-black rounded '>
                <div className='bg-slate-300 rounded text-start m-5  p-4'>
                    <p className='text-inherit	py-1'>welcome back</p>
                    <div className='flex items-center space-x-4'>
                        <h2 className='font-bold'>Mr.Munir</h2>
                        <button className='bg-blue-400 p-1 rounded'>Varified Referrer</button>
                    </div>
                    <p className='py-2 text-inherit	'>glad to see you again !</p>
                    <p className='py-2 text-inherit	'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores voluptate rerum nesciunt alias,
                        sapiente laborum quod. Atque velit voluptates aut.</p>
                </div>
                <div className='grid grid-cols-2 gap-5 m-5  '>
                    <div className='bg-slate-300 rounded flex justify-between p-3 items-center'>
                        <div>
                            <p className='text-2xl'>Total Referrals</p>
                            <p className='text-3xl'>22</p>
                        </div>
                        <div>
                            <img src={pic1} alt="" />
                        </div>
                    </div>
                    <div className='bg-slate-300 rounded flex justify-between p-3 items-center'>
                        <div>
                            <p className='text-2xl'>Total Referrals</p>
                            <p className='text-3xl'>22</p>
                        </div>
                        <div>
                            <img src={pic1} alt="" />
                        </div>
                    </div>
                    <div className='bg-slate-300 rounded flex justify-between p-3 items-center'>
                        <div>
                            <p className='text-2xl'>Total Referrals</p>
                            <p className='text-3xl'>22</p>
                        </div>
                        <div>
                            <img src={pic1} alt="" />
                        </div>
                    </div>
                    <div className='bg-slate-300 rounded flex justify-between p-3 items-center'>
                        <div>
                            <p className='text-2xl'>Total Referrals</p>
                            <p className='text-3xl'>22</p>
                        </div>
                        <div>
                            <img src={pic1} alt="" />
                        </div>
                    </div>

                </div>
            </div>
            <div className='  w-1/3 border-black rounded'>
                <div>
                    <h1>animation</h1>
                </div>
                <div className='bg-slate-300 rounded flex justify-between p-3 items-center'>
                    <div>
                        <p className='text-2xl'>Total Referrals</p>
                        <p className='text-3xl'>22</p>
                    </div>
                    <div>
                        <img src={pic1} alt="" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;