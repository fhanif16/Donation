import React, { useState } from 'react';
import Navbar from '../components/navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const HomeLayout = () => {

    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
      setIsDarkMode(!isDarkMode);
    };
    return (
        <div>
            <Navbar  toggleTheme={toggleTheme} isDarkMode={isDarkMode}></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default HomeLayout;