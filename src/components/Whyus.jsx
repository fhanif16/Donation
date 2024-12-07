import React from 'react';
import { Fade, Zoom } from "react-awesome-reveal";
import { BiZoomIn } from 'react-icons/bi';


const Whyus = () => {
    return (
        <div className='mt-10 mb-10 ml-10 mr-10'>
            <h1 className='text-center text-2xl'>Why Show Mercy</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 '>
            <Zoom>
            <div className="card bg-base-100 w-full h-96 shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src="https://img.freepik.com/free-photo/smiley-volunteer-with-gloves-holding-box-food-donations_23-2148733757.jpg?t=st=1733604428~exp=1733608028~hmac=cd410a0c1a24c36bd832e1258c3fafbe9d89998a5d5f09a4742ff9247fa9ebf5&w=1060"
      
      className="rounded-xl object-cover h-32 w-full" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Direct Impact</h2>
    <p>Your donations directly reach individuals and families in need, ensuring they stay warm and protected during the harsh winter months.</p>
    <div className="card-actions">
      <button className="btn btn-primary">Details</button>
    </div>
  </div>
</div>
            </Zoom>

<Zoom>
    
<div className="card bg-base-100 w-full h-96 shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src="https://img.freepik.com/free-photo/friends-having-fun-together_23-2149329766.jpg?t=st=1733604474~exp=1733608074~hmac=65eb468d204a5ed426003cf6ed7b7f87e306c3061d3d5a4370091812711a45b6&w=1060"
      alt="Shoes"
      className="rounded-xl object-cover h-32 w-full"/>
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Transparent Process</h2>
    <p>We prioritize accountability and provide clear updates on where and how your contributions are making a difference.</p>
    <div className="card-actions">
      <button className="btn btn-primary">Details</button>
    </div>
  </div>
</div>
</Zoom>


<Zoom>
<div className="card bg-base-100 w-full h-96 shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src="https://img.freepik.com/free-photo/front-view-smiley-little-girl-home-online-school-with-laptop_23-2148827497.jpg?t=st=1733604508~exp=1733608108~hmac=6d760ff677d268c9961cb880591334881b465705062600f99e73f8345839156e&w=1060"
      alt="Shoes"
      className="rounded-xl object-cover h-32 w-full" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Community-Driven Mission</h2>
    <p>By donating, you’re joining a compassionate community dedicated to helping others and spreading warmth and kindness.</p>
    <div className="card-actions">
      <button className="btn btn-primary">Details</button>
    </div>
  </div>
</div>
</Zoom>

<Zoom>
<div className="card bg-base-100 w-full h-96 shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src="https://img.freepik.com/free-photo/woman-holding-folded-shirt-hand_169016-3866.jpg?t=st=1731967144~exp=1731970744~hmac=a000674cb0c1a47955a85a16447ba4de28ecb57d04f8f35647fc9ab6bd5ef78f&w=1380"
      
      className="rounded-xl object-cover h-32 w-full" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Easy and Accessible</h2>
    <p>We make it simple for you to contribute, whether through clothing donations, volunteering, or starting your own campaign with our support.</p>
    <div className="card-actions">
      <button className="btn btn-primary">Details</button>
    </div>
  </div>
</div>
</Zoom>
            </div>
            
        </div>
       
    );
};

export default Whyus;