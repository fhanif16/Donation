import React from 'react';
import ReactSlider from 'react-slider';
import '../components/TredingCamp.css'

const TredingCampaings = () => {
    return (
        <div>

{/* <div className="card card-side bg-base-100 shadow-xl">
    <div className='flex justify-between'>
        <h1>Helloo</h1>
        <img></img>
    </div>

    <div className="card-body">
    <h2 className="card-title">Life hack</h2>
    <p>How to park your car at your garage?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Learn now!</button>
    </div>
    </div>

    

  
  
</div> */}

<div className="card glass w-96">
    <div className='flex items-center'>
    <figure className='w-1/2 ml-4'>
    <img className='w-full'
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="car!" />
  </figure>
  <h1 className='w-1/2 text-center font-bold'>Hi</h1>
    </div>
 
  <div className="card-body">
    <h2 className="card-title">Life hack</h2>
    <p>How to park your car at your garage?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Learn now!</button>
    </div>
  </div>

  <ReactSlider
  defaultValue={50} 
    className="horizontal-slider"
    thumbClassName="example-thumb"
    trackClassName="example-track"
    renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
/>
</div>
            
        </div>
    );
};

export default TredingCampaings;