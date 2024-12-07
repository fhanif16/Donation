import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <div
  className="hero min-h-screen"
  style={{
    backgroundImage: "url(https://img.freepik.com/free-photo/charity-foodbank-volunteer-group_23-2149012184.jpg?t=st=1733358028~exp=1733361628~hmac=01e5478c4ddd0d048f03264df50ed33894d83cd96e6db10e99f46364d950fd7e&w=1060)",
  }}>
  <div className="hero-overlay bg-opacity-40"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-3xl font-bold text-center">Uplifting lives through giving</h1>
      <p className="mb-5">
      For Individuals and charities. No startup fees. No hidden fees.
      </p>
      <button className="btn btn-primary"><Link to="/getStarted" >Get Started</Link> </button>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Banner;