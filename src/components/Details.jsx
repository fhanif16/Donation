// import React from 'react';
// import { Link, useLoaderData } from 'react-router-dom';

// const Details = () => {
//   const detail = useLoaderData();
//   return (
//     <div className="container mx-auto px-4 py-8">
//     <h1 className="text-3xl font-bold text-center mb-6">Details about donation</h1>

//     <div className="overflow-x-auto">
//       <table className="table-auto w-full border-collapse border border-gray-300">
//         <thead className="bg-gray-100">
//           <tr>
//             <th className="border border-gray-300 px-4 py-2 text-left">Campaign Name</th>
//             <th className="border border-gray-300 px-4 py-2 text-left">Picture</th>
//             <th className="border border-gray-300 px-4 py-2 text-left">Campaign For</th>
           
//             <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
//             <th className="border border-gray-300 px-4 py-2 text-left">Amount</th>
//             <th className="border border-gray-300 px-4 py-2 text-left">Donated BY</th>
//             <th className="border border-gray-300 px-4 py-2 text-left">Email</th>
//             <th className="border border-gray-300 px-4 py-2 text-left">Date</th>
            

//           </tr>
//         </thead>
//         <tbody>
          
//               <tr key={detail._id} className="hover:bg-gray-50">
//                 <td className="border border-gray-300 px-4 py-2">{detail.title}</td>
//                 <td className="border border-gray-300 px-4 py-2">{detail.picture}</td>
//                 <td className="border border-gray-300 px-4 py-2">{detail.option}</td>
//                 <td className="border border-gray-300 px-4 py-2">{detail.description}</td>
//                 <td className="border border-gray-300 px-4 py-2">{detail.donation}</td>
//                 <td className="border border-gray-300 px-4 py-2">{detail.name}</td>
//                 <td className="border border-gray-300 px-4 py-2">{detail.email}</td>
//                 <td className="border border-gray-300 px-4 py-2">{detail.date}</td>
//                 <td className="border border-gray-300 px-4 py-2">
//                   <button  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition">
//                     Donate
                  
//                   </button>

                 
//                 </td>
//               </tr>
          
          
//         </tbody>
//       </table>
//     </div>
//   </div>
//   );
// };

// export default Details;


// import React from 'react';
// import { useLoaderData } from 'react-router-dom';

// const Details = () => {
//   const detail = useLoaderData();

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold text-center mb-6">Details about Donation</h1>

//       <div className="max-w-md mx-auto bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden">
//         <div className="p-4">
         
//           <h2 className="text-2xl font-semibold mb-4 text-gray-800">{detail.title}</h2>

         
//           {detail.picture ? (
//             <img
//               src={detail.picture}
//               alt={detail.title}
//               className="w-full h-48 object-cover mb-4 rounded"
//             />
//           ) : (
//             <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500">
//               No Image Available
//             </div>
//           )}

         
//           <p className="text-gray-600 mb-2">
//             <strong>Campaign For:</strong> {detail.option}
//           </p>
//           <p className="text-gray-600 mb-2">
//             <strong>Description:</strong> {detail.description}
//           </p>
//           <p className="text-gray-600 mb-2">
//             <strong>Amount:</strong> ${detail.donation}
//           </p>
//           <p className="text-gray-600 mb-2">
//             <strong>Donated By:</strong> {detail.name}
//           </p>
//           <p className="text-gray-600 mb-2">
//             <strong>Email:</strong> {detail.email}
//           </p>
//           <p className="text-gray-600 mb-4">
//             <strong>Date:</strong> {detail.date}
//           </p>

         
//           <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
//             Donate
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Details;


import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import toast from 'react-hot-toast';
import { AuthContext } from '../providers/Authprovider';
import Swal from 'sweetalert2';

const Details = () => {
  const detail = useLoaderData();
  const { user } = useContext(AuthContext); 

  const currentDate = new Date();
  const deadlineDate = new Date(detail.date);
  const isDeadlinePassed = currentDate > deadlineDate;

  const handleDonate = async () => {

    if (isDeadlinePassed) {
      
      Swal.fire({
        title: "Campaign Expired",
        text: "This campaign has expired, and you cannot donate to it anymore.",
        icon: "warning",
      });
      return; 
    }

    
    

    const donationData = {
      title: detail.title,
      email: user.email,
      name: user.displayName || 'Anonymous',
      donation: detail.donation,
      date: new Date().toISOString(),
      photo:detail.photo
    };

    try {
      const response = await fetch('http://localhost:3000/money', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(donationData),
      });

      if (response.ok) {
        Swal.fire({
          title: "Donation added successfully",
          text: "You clicked the button!",
          icon: "success"
        });
      } else {
        Swal.fire({
          title: "Something went wrong",
          text: "You clicked the button!",
          icon: "Error"
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Something went wrong",
        text: "You clicked the button!",
        icon: "error"
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Details about Donation</h1>

      <div className="max-w-md mx-auto bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden">
        <div className="p-4">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">{detail.title}</h2>
          {detail.picture ? (
            <img
              src={detail.photo}
              alt={detail.title}
              className="w-full h-48 object-cover mb-4 rounded"
            />
          ) : (
            <div className="w-full  bg-gray-200 flex items-center justify-center text-gray-500">
             <img src={detail.photo} alt="" srcset="" />
            </div>
          )}
          <p className="text-gray-600 mb-2">
            <strong>Campaign For:</strong> {detail.option}
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Description:</strong> {detail.description}
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Amount:</strong> ${detail.donation}
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Donated By:</strong> {detail.name}
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Email:</strong> {detail.email}
          </p>
          <p className="text-gray-600 mb-4">
            <strong>Date:</strong> {detail.date}
          </p>
          {/* <button
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
            onClick={handleDonate}
          >
            Donate
          </button> */}

<button
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
            onClick={handleDonate}
           
          >
            Donate
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;

