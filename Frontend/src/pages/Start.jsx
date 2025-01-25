import React from "react";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div className="bg-cover bg-center bg-[url(https://images.pexels.com/photos/4543112/pexels-photo-4543112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] h-screen pt-5  flex justify-between flex-col w-ful">
      <img className="w-20 ml-8" src="Zap.png" alt="" />
      <div className="bg-white pb-7 py-4 px-4">
        <h2 className="text-3xl font-bold">Get Started with ZAP</h2>
        <Link
          to="/login"
          className="flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5"
        >
          Continue
          <span className="ml-2 text-white text-lg">&rarr;</span>
        </Link>
      </div>
    </div>
  );
};

export default Start;
