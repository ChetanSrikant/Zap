import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import CaptainDetails from "../components/CaptainDetails";
import RidePopUp from "../components/RidePopUp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ConfirmRidePopUp from "../components/ConfirmRidePopUp";

const CaptainHome = () => {

  const [ridePopPanel, setRidePopPanel] = useState(true)
  const [confirmridePopPanel, setConfirmRidePopPanel] = useState(false)

  const ridePopPanelRef = useRef(null)
  const confirmridePopPanelRef = useRef(null)

  useGSAP(function(){
    if (ridePopPanel) {
      gsap.to(ridePopPanelRef.current,{
        transform:'translateY(0)'
      })
    }else{
      gsap.to(ridePopPanelRef.current,{
        transform:'translateY(100%)'
      })
    }
  },[ridePopPanel])

  useGSAP(function(){
    if (confirmridePopPanel) {
      gsap.to(confirmridePopPanelRef.current,{
        transform:'translateY(0)'
      })
    }else{
      gsap.to(confirmridePopPanelRef.current,{
        transform:'translateY(100%)'
      })
    }
  },[confirmridePopPanel])

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

      <div className="h-1/2 p-5 bg-white rounded-t-2xl shadow-lg ">
        <CaptainDetails />
      </div>

      <div ref={ridePopPanelRef} className="fixed w-full bg-white z-10 bottom-0 translate-y-full px-3 py-6 pt-14">
        <RidePopUp setRidePopPanel={setRidePopPanel} setConfirmRidePopPanel={setConfirmRidePopPanel}/>
      </div>

      <div ref={confirmridePopPanelRef} className="fixed w-full h-screen bg-white z-10 bottom-0 translate-y-full px-3 py-6 pt-14">
        <ConfirmRidePopUp setConfirmRidePopPanel={setConfirmRidePopPanel} setRidePopPanel={setRidePopPanel}/>
      </div>
    </div>
  );
};

export default CaptainHome;
