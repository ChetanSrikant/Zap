import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import FinishRide from "../components/FinishRide";

const CaptainRiding = () => {

    const [finishRidePanel, setFinishRidePanel] = useState(false)
    const finishRidePanelRef = useRef(null)


    useGSAP(function(){
        if (finishRidePanel) {
          gsap.to(finishRidePanelRef.current,{
            transform:'translateY(0)'
          })
        }else{
          gsap.to(finishRidePanelRef.current,{
            transform:'translateY(100%)'
          })
        }
      },[finishRidePanel])

  return (
    <div className="h-screen relative flex flex-col justify-end">
      {/* Top Navigation */}
      <div className="fixed p-6 top-0 flex items-center justify-between w-screen">
        <img
          className="w-16"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="Uber Logo"
        />
        <Link
          to="/captain-home"
          className="h-10 w-10 bg-white flex items-center justify-center rounded-full shadow-md"
        >
          <i className="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>

      {/* Main Riding Animation */}
      <div className="relative h-4/5">
        <img
          className="w-20 absolute left-5 top-5"
          src="Zap.png"
          alt="Zap Icon"
        />
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt="Riding Animation"
        />
      </div>

      {/* Ride Info & Complete Ride Button */}
      <div className="h-1/5 p-6 flex items-center justify-between relative bg-red-100 rounded-t-2xl shadow-lg" 
      onClick={()=>{
        setFinishRidePanel(true)
      }}>
        <div
          onClick={() => {
            //   props.setRidePopPanel(false);
          }}
          className="p-3 flex justify-center w-[85%] absolute top-0 "
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 15l6-6 6 6"
              stroke="grey"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h4 className="text-xl font-semibold text-gray-800">4 KM away</h4>
        <button className="bg-black text-white font-semibold p-3 px-10 rounded-lg">
          Complete Ride
        </button>
      </div>
      <div ref={finishRidePanelRef} className="fixed w-full h-screen bg-white z-10 bottom-0 translate-y-full px-3 py-6 pt-14">
        <FinishRide setFinishRidePanel={setFinishRidePanel}/>
      </div>
    </div>
  );
};

export default CaptainRiding;
