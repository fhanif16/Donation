import React from 'react';
import { Fade, Zoom } from "react-awesome-reveal";
import { BiZoomIn } from 'react-icons/bi';


const Whyus = () => {
    return (
        <div className='mt-10 mb-10'>
            <h1 className='text-center text-2xl'>Why Show Mercy</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
            <Zoom>
            <div className="card bg-base-100 w-70 shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src="https://img.freepik.com/free-photo/young-friends-with-shopping-bags-winter_329181-10866.jpg?t=st=1731966752~exp=1731970352~hmac=5b1026ce4c7ff191b88f455b29ecd27f93fd8b4cf134a2b9930fc40748ea68fb&w=1060"
      
      className="rounded-xl" />
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
    
<div className="card bg-base-100 w-70 shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src="https://img.freepik.com/free-photo/woman-holding-folded-shirt-hand_169016-3866.jpg?t=st=1731967144~exp=1731970744~hmac=a000674cb0c1a47955a85a16447ba4de28ecb57d04f8f35647fc9ab6bd5ef78f&w=1380"
      alt="Shoes"
      className="rounded-xl" />
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
<div className="card bg-base-100 w-70 shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src="https://img.freepik.com/free-photo/young-friends-with-shopping-bags-winter_329181-10866.jpg?t=st=1731966752~exp=1731970352~hmac=5b1026ce4c7ff191b88f455b29ecd27f93fd8b4cf134a2b9930fc40748ea68fb&w=1060"
      alt="Shoes"
      className="rounded-xl" />
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
<div className="card bg-base-100 w-70 shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src="https://img.freepik.com/free-photo/woman-holding-folded-shirt-hand_169016-3866.jpg?t=st=1731967144~exp=1731970744~hmac=a000674cb0c1a47955a85a16447ba4de28ecb57d04f8f35647fc9ab6bd5ef78f&w=1380"
      
      className="rounded-xl" />
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