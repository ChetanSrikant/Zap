import React from 'react';

const LocationSearchPanel = (props) => {
  // Sample array for locations
  const locations = [
    "123 Main St, New York, NY 10001",
    "456 Elm Ave, Los Angeles, CA 90012",
    "789 Oak Dr, Chicago, IL 60605",
    "101 Maple Rd, Houston, TX 77002",
    "202 Pine Ln, Miami, FL 33101"
  ];

  return (
    <div>
      {locations.map((elem, index) => (
        <div
        onClick={()=>{
            props.setVehiclePanel(true)
            props.setPanelOpen(false)
        }} 
          key={index} 
          className="border-2 p-3 rounded-xl flex items-center justify-start gap-2 mt-2 border-gray-50 active:border-black"
        >
          <h2>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth="2" 
              stroke="currentColor" 
              className="w-6 h-6"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M12 21c4.97-4.97 8-9 8-12a8 8 0 10-16 0c0 3 3.03 7.03 8 12z" 
              />
              <circle cx="12" cy="9" r="2.5" fill="currentColor" />
            </svg>
          </h2>
          <h4>{elem}</h4>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPanel;
