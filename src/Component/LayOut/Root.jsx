import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Home from '../Home/Home';
import Footer from '../Footer/Footer';
// import Banner from '../BannerPage/Banner';

const Root = () => {
    return (
        <div>
            <NavBar></NavBar>
            {/* <Home></Home> */}
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;