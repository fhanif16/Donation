import React from 'react';
import { Link, NavLink, useLoaderData } from 'react-router-dom';

const AllCampaign = () => {
  const donations = useLoaderData();
 
  

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">All Our Campaigns</h1>

      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left">Campaign Name</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Campaign For</th>
             
              <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Donated BY</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Date</th>
              

            </tr>
          </thead>
          <tbody>
            {Array.isArray(donations) && donations.length > 0 ? (
              donations.map((donation) => (
                <tr key={donation._id} className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">{donation.title}</td>
                  <td className="border border-gray-300 px-4 py-2">{donation.option}</td>
                  <td className="border border-gray-300 px-4 py-2">{donation.description}</td>
                  <td className="border border-gray-300 px-4 py-2">{donation.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{donation.date}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <button  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition">
                    <Link to={`/details/${donation._id}`} >See More</Link>
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center border border-gray-300 px-4 py-2">
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

export default AllCampaign;
