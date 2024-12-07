import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Home from "../pages/Home";
import HomeLayout from "../layouts/HomeLayout";
import ErrorPage from "../pages/ErrorPage";
import GetStarted from "../components/GetStarted";
import Login from "../components/Login";
import Register from "../components/Register";
import AddChampaing from "../components/AddChampaing";
import TredingCampaings from "../components/TredingCampaings";
import PrivateRoutes from "./privateRoutes";
// import MyCampaign from "../components/MyCampaign";
import MyDonations from "../components/MyDonations";
import AllCampaign from "../components/AllCampaign";
import Details from "../components/Details";
import MyCampaign from "../components/MyCampaign";
import UpdateMyCampaign from "../components/UpdateMyCampaign";
import RunningCham from "../components/RunningCham";

  const router = createBrowserRouter([
    {
      path: "/",
      element:<HomeLayout></HomeLayout>,
      errorElement:<ErrorPage></ErrorPage> ,
      
      children:[{
        path:'/',
        element:<Home></Home>,
        loader: () => fetch('https://heart-lift-serversite.vercel.app/donation')
        
        
      }, 
    {
      path:'/getStarted',
      element:<GetStarted></GetStarted>
    }
  
  ,
   
  {
    path:'/login',
    element:<Login></Login>
  },
  {
    path:'/register',
    element:<Register></Register>
  }, 
  {
    path:'/allCampaign',
    element: <AllCampaign></AllCampaign>,
    loader: () => fetch('https://heart-lift-serversite.vercel.app/donation')
  }
  , 
  {
    path:'/tredingCampaings',
    element:<TredingCampaings></TredingCampaings>
  }, 

  {
    path:'/runnigCampaign',
    element:<RunningCham></RunningCham>,
    loader: () => fetch('https://heart-lift-serversite.vercel.app/donation')

  },
  
    {
      path:'/addNewCampaign',
      element:<PrivateRoutes> <AddChampaing></AddChampaing> </PrivateRoutes>
    },

    {
      path:'/myCampaign',
      element:<PrivateRoutes> <MyCampaign></MyCampaign> </PrivateRoutes>
    },

    {
      path:'/myDonations',
      element:<PrivateRoutes> <MyDonations></MyDonations> </PrivateRoutes>
    },

    {
      path:'/details/:id',
      element:<PrivateRoutes><Details></Details></PrivateRoutes>,
      loader:({params}) => fetch(`https://heart-lift-serversite.vercel.app/donation/${params.id}`)
    },

    {
      path:'/updateMyCampaign/:id',
      element:<UpdateMyCampaign></UpdateMyCampaign>,
      loader: ({params}) => fetch(`https://heart-lift-serversite.vercel.app/donation/${params.id}`)
    }
  
]
    },
  ]);

  export default router;