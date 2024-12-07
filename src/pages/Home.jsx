import React from 'react';
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

const Home = () => {
    return (
        <div>
  
         <Banner></Banner>
         <Carousel></Carousel>
         <HeartLift></HeartLift>
         <HowItWorks></HowItWorks>
         <AllCampaign></AllCampaign>
         <Whyus></Whyus>
         <UserReview></UserReview>
      
        </div>
    );
};

export default Home;