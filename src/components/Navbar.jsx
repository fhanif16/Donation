
import { Link, NavLink } from 'react-router-dom';
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css"


import { useContext } from 'react';
import { AuthContext } from '../providers/Authprovider';

const Navbar = () => {


  const authInfo = useContext(AuthContext);
   // console.log(authInfo)

    const {name} = authInfo;
    const {signOutUser , user } = authInfo;
    //console.log(user);

    const handleSignOut = () => {
      signOutUser()
      .then(() => {
       
      }).catch((error) => {
     
      });
    }

    const link = <>
    <Link to='/'>Home</Link>
    <Link to='/allCampaign'>All Campaign</Link>
    <Link to='/myCampaign'>My Campaign</Link>
   
    <Link to ='/tredingCampaings'>Treding Campaings</Link>
    <Link to='/addNewCampaign'>Add New Campaign</Link>
    
    <Link to='/myDonations'>My Donations</Link>
   
   
                
    
    </>
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {link}
            </ul>
          </div>
          
          <img className='w-20 rounded-full' src='https://img.freepik.com/free-vector/charity-logo-hands-supporting-heart-icon-flat-design-vector-illustration_53876-136266.jpg?t=st=1733437552~exp=1733441152~hmac=8228213b82e6ae70fdbb4fe83974a913baaf42ff599070360a7660b9efb3c028&w=740' alt=""  />
          <h1>HeartLift</h1>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5">
            {link}
          </ul>
        </div>
        <div className="navbar-end">
        {user ? (
          <>
           
            <div>
              <img
                src={user?.photoURL || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}
                alt="User Avatar"
                className="w-10 h-10 rounded-full cursor-pointer"
                data-tooltip-id="user-tooltip"
                data-tooltip-content={user?.displayName || "No Name is Found"}
              />
              <ReactTooltip id="user-tooltip" place="bottom" />
            </div>
            <button className="btn ml-3" onClick={handleSignOut}>
              Sign out
            </button>
          </>
        ) : (
          <Link to="/login" className="btn">
            Login
          </Link> )}
        </div>
      </div>
    );
};

export default Navbar;