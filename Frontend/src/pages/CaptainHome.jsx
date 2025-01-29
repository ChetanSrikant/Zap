import React from "react";
import { Link } from "react-router-dom";
import CaptainDetails from "../components/CaptainDetails";

const CaptainHome = () => {
  return (
    <div className="h-screen flex flex-col relative">
      {/* Home Icon Link - Ensure z-index is high enough */}
      <Link
        to="/home"
        className="absolute top-4 right-4 z-50 bg-white p-2 rounded-full shadow-md"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 text-gray-800"
        >
          <path d="M16 13v-2H7V9l-5 4 5 4v-2h9zm2-10h-6v2h6v16h-6v2h6a2 2 0 002-2V5a2 2 0 00-2-2z" />
        </svg>
      </Link>

      <div className="relative h-3/5">
        <img className="w-20 absolute left-5 top-5" src="Zap.png" alt="" />
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt="Riding Animation"
        />
      </div>

      {/* Ride Details */}
      <CaptainDetails/>
    </div>
  );
};

export default CaptainHome;
