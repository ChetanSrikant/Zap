import React from "react";
import { Link } from "react-router-dom";

const Riding = (props) => {
  return (
    <div className="h-screen flex flex-col relative">
      {/* Home Icon Link - Ensure z-index is high enough */}
      <Link to="/home" className="absolute top-4 right-4 z-50 bg-white p-2 rounded-full shadow-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 text-gray-800"
        >
          <path d="M12 3l9 8-1.5 1.5L12 5 4.5 12.5 3 11l9-8zm0 3l6 5.2V19a1 1 0 01-1 1h-3v-5h-4v5H7a1 1 0 01-1-1v-7.8l6-5.2z"/>
        </svg>
      </Link>

      {/* Ride Animation */}
      <div className="relative h-1/2">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt="Riding Animation"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
      </div>

      {/* Ride Details */}
      <div className="h-1/2 p-5 bg-white rounded-t-2xl shadow-lg">
        {/* Driver & Vehicle Info */}
        <div className="flex items-center justify-between pb-4 border-b">
          <img
            className="h-14 object-cover"
            src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg"
            alt="Driver"
          />
          <div className="text-right">
            <h2 className="text-lg font-semibold">Sarthak</h2>
            <h4 className="text-xl font-bold text-gray-800">TG 07 H 2356</h4>
            <p className="text-sm text-gray-500">Maruti Suzuki Alto</p>
          </div>
        </div>

        {/* Ride Route */}
        <div className="space-y-4 mt-5">
          <div className="flex items-center gap-4">
            <i className="ri-map-pin-2-fill text-lg text-red-600"></i>
            <div>
              <h3 className="text-lg font-medium">456 Central Park West</h3>
              <p className="text-sm text-gray-500">New York, NY 10023</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <i className="ri-currency-line text-lg text-yellow-500"></i>
            <div>
              <h3 className="text-lg font-medium">₹100</h3>
              <p className="text-sm text-gray-500">Cash Payment</p>
            </div>
          </div>
        </div>

        {/* Payment Button */}
        <button className="w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg">
          Make Payment
        </button>
      </div>
    </div>
  );
};

export default Riding;
