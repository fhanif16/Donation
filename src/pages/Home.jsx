import React, { useState } from 'react';
import Navbar from '../components/navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import Carousel from '../components/Carousel';
import TredingCampaings from '../components/TredingCampaings';
import Whyus from '../components/WhyUs';
import HeartLift from '../components/HeartLift';
import UserReview from '../components/UserReview';
import HowItWorks from '../components/HowItWorks';
import AllCampaign from '../components/AllCampaign';
import RunningCham from '../components/RunningCham';


const Home = () => {

    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
      setIsDarkMode(!isDarkMode);
    };

    
    return (
        // <div>
  
        //  <Banner></Banner>
        //  <Carousel></Carousel>
        //  <HeartLift></HeartLift>
        //  <HowItWorks></HowItWorks>
        //  <AllCampaign></AllCampaign>
        //  <Whyus></Whyus>
        //  <UserReview></UserReview>
      
        // </div>

       // <div className={isDarkMode ? 'dark' : 'light'}>
           <div>

            <div className="bg-white dark:bg-gray-900 text-black dark:text-white">
            <Banner></Banner>
         <Carousel></Carousel>
         <HeartLift></HeartLift>
          <HowItWorks></HowItWorks>
          <RunningCham></RunningCham>
          <Whyus></Whyus>
          <UserReview></UserReview>

            </div>

        </div>
    );
};

export default Home;