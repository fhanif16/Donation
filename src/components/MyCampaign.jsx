import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../providers/Authprovider';
import { Link } from 'react-router-dom';

const MyCampaign = () => {
  const { user, loading } = useContext(AuthContext);

  const [donations, setDonations] = useState([]);

  const handleDelete = (_id) => {
    //console.log(_id)
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
      });
      swalWithBootstrapButtons.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
        //   swalWithBootstrapButtons.fire({
        //     title: "Deleted!",
        //     text: "Your file has been deleted.",
        //     icon: "success"
        //   });


        fetch(`http://localhost:3000/donation/${_id}`, {
            
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.deletedCount >0){
                swalWithBootstrapButtons.fire({
                        title: "Deleted!",
                         text: "Your file has been deleted.",
                        icon: "success"
                      });


                      const remaining = donations.filter(don=>don._id!==_id)
   setDonations(remaining)


                      

            }
        })

        

       


        


       
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your imaginary file is safe :)",
            icon: "error"
          });
        }
      });
  
  }
  

  useEffect(() => {
    if (user && user.email) {
      fetch(`http://localhost:3000/myDonation?email=${user.email}`)
        .then((response) => response.json())
        .then((data) => setDonations(data))
        .catch((error) => console.error('Error fetching donations:', error));
    }
  }, [user]);

  if (loading) {
    return (
      <div>
        <span className="loading loading-spinner text-primary"></span>
        <span className="loading loading-spinner text-secondary"></span>
        <span className="loading loading-spinner text-accent"></span>
        <span className="loading loading-spinner text-neutral"></span>
        <span className="loading loading-spinner text-info"></span>
        <span className="loading loading-spinner text-success"></span>
        <span className="loading loading-spinner text-warning"></span>
        <span className="loading loading-spinner text-error"></span>
      </div>
    );
  }

 

  




  return (
    


    <div className="campaign-table container mx-auto px-4 py-8">
  <h2 className="text-2xl font-bold mb-4 text-center">My Campaigns</h2>
  <div className="overflow-x-auto">
    <table className="table-auto w-full border-collapse border border-gray-300 shadow-lg">
      <thead className="bg-gray-200">
        <tr>
          <th className="border border-gray-300 px-4 py-2 text-left">Campaign Name</th>
          <th className="border border-gray-300 px-4 py-2 text-left">Donated By</th>
          
          <th className="border border-gray-300 px-4 py-2 text-left">Start Date</th>
          <th className="border border-gray-300 px-4 py-2 text-left">Amount</th>
          <th className="border border-gray-300 px-4 py-2 text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        {donations.length > 0 ? (
          donations.map( (campaign) => (
            
            <tr key={campaign.id} className="odd:bg-white even:bg-gray-50 hover:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2">{campaign.title}</td>
              
              <td className="border border-gray-300 px-4 py-2">{campaign.name}</td>
              
              <td className="border border-gray-300 px-4 py-2">{campaign.date}</td>
              <td className="border border-gray-300 px-4 py-2">${campaign.donation}</td>
              <td className="border border-gray-300 px-4 py-2 text-center space-x-2">
                <Link to={`/updateMyCampaign/${campaign._id}`}>
                <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition">
                  Update
                </button>
                
                
                </Link>
                <button onClick={()=> handleDelete(campaign._id)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition">
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="5" className="text-center text-gray-500 py-4">
              No campaigns found. 
            </td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
</div>

  );
};

export default MyCampaign;