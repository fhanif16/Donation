import React, { useContext } from 'react';
import { AuthContext } from '../providers/Authprovider';
import Swal from 'sweetalert2';

const AddChampaing = () => {
  const authInfo = useContext(AuthContext);
  const {user} = authInfo;

  const handleAddDonation = event => {

    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
   
    const photo = form.photo.value;
    const option = form.option.value;
    const description = form.description.value;
    const donation = form.donation.value;
    const date = form.date.value;
    const email = form.email.value;
    const name = form.name.value;
    

    const newDonation = {title,photo,option,description,donation,date,email,name};
    console.log(newDonation)

    fetch('http://localhost:3000/donation', {
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(newDonation)

    })
    .then(res => res.json())
    .then(data =>{console.log(data)
      if(data.insertedId){

        Swal.fire({
          title: 'Donation successful',
          text: 'Thank you for your support',
          icon: 'success',
      });

      form.reset();
       
      }
    } 
  )

  }



    return (
        <div>
           
        <div className="hero bg-base-200 min-h-screen">
           
        
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mt-10 mb-10">
              <form className="card-body" onSubmit={handleAddDonation}>
              <h1 className='text-center text-3xl font-bold'>Add your donation</h1>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Image/Thumbnail (URL)</span>
                  </label>
                  <input
                    type="url"
                    placeholder="Enter image URL"
                    className="input input-bordered"
                    required
                    name='photo'
                  />
                </div>
  
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Campaign Title</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter campaign title"
                    className="input input-bordered"
                    required
                    name='title'
                  />
                </div>
  
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Campaign Type</span>
                  </label>
                  <select className="select select-bordered" required name='option'>
                    <option value="" disabled selected>
                      Select campaign type
                    </option>
                    <option value="personal-issue">Personal Issue</option>
                    <option value="startup">Study</option>
                    <option value="business">Medical</option>
                    <option value="creative-ideas">Creative Ideas</option>
                    <option value="Food">Food</option>
                  </select>
                </div>
  
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Description</span>
                  </label>
                  <textarea
                    placeholder="Enter campaign description"
                    className="textarea textarea-bordered"
                    rows={4}
                    required
                    name='description'
                  ></textarea>
                </div>
  
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Minimum Donation Amount</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Enter minimum donation amount"
                    className="input input-bordered"
                    required
                    name='donation'
                  />
                </div>
  
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Deadline</span>
                  </label>
                  <input
                    type="date"
                    className="input input-bordered"
                    required
                    name='date'
                  />
                </div>
  
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">User Email</span>
                  </label>
                  <input
                    type="email"
                    value={user?.email} 
                    className="input input-bordered"
                    readOnly
                    name='email'
                  />
                </div>
  
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">User Name</span>
                  </label>
                  <input
                    type="text"
                    value={user?.displayName || 'Anonymous'} 
                    className="input input-bordered"
                    readOnly
                    name='name'
                  />
                </div>
  
                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary">
                    Add Campaign
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
     
    );
};

export default AddChampaing;

