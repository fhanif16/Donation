import React, { useState, useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const RunningCham = () => {
  const originalDonations = useLoaderData();
  const [donations, setDonations] = useState(originalDonations);

  
  // useEffect(() => {
  //   const today = new Date().toISOString().split('T')[0]; 
  //   const filteredDonations = originalDonations.filter(donation => {
  //     const donationDate = donation.date.split('T')[0]; 
  //     return donationDate >= today; 
  //   });
  //   setDonations(filteredDonations);
  // }, [originalDonations]);
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
  
    if (Array.isArray(originalDonations)) {
      const filteredDonations = originalDonations.filter(donation => {
        const donationDate = donation.date.split('T')[0];
        return donationDate >= today;
      });
      setDonations(filteredDonations);
    } else {
      console.error('originalDonations is not an array:', originalDonations);
    }
  }, [originalDonations]);
  

  const sortByDonationAmount = () => {
    const sortedDonations = [...donations].sort((a, b) => {
      const amountA = a.donation || 0;
      const amountB = b.donation || 0;
      return amountA - amountB;
    });
    setDonations(sortedDonations);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">All Our Running Campaigns</h1>

      <div className="mb-4 text-center">
        <button
          onClick={sortByDonationAmount}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Sort by Minimum Donation Amount
        </button>
      </div>

      <div className="overflow-x-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ml-10 mr-10">
          {Array.isArray(donations) && donations.length > 0 ? (
            donations.map((donation) => (
              <div key={donation._id} className="hover:bg-gray-50">
                <div className="card bg-base-100 w-96 shadow-xl">
                  <figure className="px-10 pt-10">
                    <img
                      src={donation.photo}
                      alt="Campaign"
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title">Title: {donation.title}</h2>
                    <p>Description: {donation.description}</p>
                    <p>Amount: ${donation.donation}</p>
                    <p>Donation By: {donation.name}</p>
                    <p>Date: {donation.date}</p>
                    <div className="card-actions">
                      <button className="btn btn-primary">
                        <Link to={`/details/${donation._id}`}>See More</Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center">No campaigns found.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RunningCham;
