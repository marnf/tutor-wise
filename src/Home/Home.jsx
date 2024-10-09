import React from 'react';
import Header from '../Components/Header';
import LeftNavigationBar from '../Components/LeftNavigationBar';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>


        </div>
    );
};

export default Home;