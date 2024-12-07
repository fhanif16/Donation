import React from 'react';

const HeartLift = () => {
    return (
        <div className='text-center bg-slate-100 w-full h-96 mt-10'>

            <h1 className='text-3xl font-bold mb-4 mt-4 py-8'>Nonprofits around the world are reaching their goals, you should too!</h1>

            <div>
            <div className="stats shadow">
  <div className="stat place-items-center">
    <div className="stat-title">Downloads</div>
    <div className="stat-value">31K</div>
    <div className="stat-desc">From January 1st to February 1st</div>
  </div>

  <div className="stat place-items-center">
    <div className="stat-title">Users</div>
    <div className="stat-value text-secondary">4,200</div>
    <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
  </div>

  <div className="stat place-items-center">
    <div className="stat-title">New Registers</div>
    <div className="stat-value">1,200</div>
    <div className="stat-desc">↘︎ 90 (14%)</div>
  </div>
</div>
            </div>
            
        </div>
    );
};

export default HeartLift;