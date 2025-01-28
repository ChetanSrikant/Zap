import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
      <div onClick={()=>{props.setVehiclePanel(false)}} className="p-3 flex justify-center w-[93%] absolute top-0 "><svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              opacity={0.6}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 9l6 6 6-6"
                stroke="grey"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg></div>
        <h3 className="text-2xl font-semibold mb-5">Choose a Vehicle</h3>
        <div className="flex w-full border-2 mb-2 active:border-black rounded-xl items-center justify-between p-3">
          <img
            className="h-16"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_638/v1682350114/assets/c2/296eac-574a-4a81-a787-8a0387970755/original/UberBlackXL.png"
            alt=""
          />
          <div className="ml-2 w-1/2">
           <h4 className="font-medium text-base flex items-center gap-1">Cab 
            <span> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" > <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-3.33 0-8 1.67-8 5v2h16v-2c0-3.33-4.67-5-8-5z" /> </svg> </span> 4 </h4>

           <h5  className="font-medium text-sm">2 mins away</h5>
            <p  className="font-normal text-xs text-gray-600">Affordable Compact rides</p>
          </div>
          <h2 className="text-lg font-semibold">₹193.20</h2>
        </div>

        <div className="flex w-full border-2 mb-2 active:border-black rounded-xl items-center justify-between p-3">
          <img
            className="h-16"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
            alt=""
          />
          <div className="-ml-4 w-1/2">
           <h4 className="font-medium text-base flex items-center gap-1">Bike 
            <span> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" > <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-3.33 0-8 1.67-8 5v2h16v-2c0-3.33-4.67-5-8-5z" /> </svg> </span> 1 </h4>

           <h5  className="font-medium text-sm">2 mins away</h5>
            <p  className="font-normal text-xs text-gray-600">Affordable Motercycle rides</p>
          </div>
          <h2 className="text-xtext-lg font-semibold">₹65</h2>
        </div>

        <div className="flex w-full border-2 mb-2 active:border-black rounded-xl items-center justify-between p-3">
          <img
            className="h-16"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
            alt=""
          />
          <div className="ml-2 w-1/2">
           <h4 className="font-medium text-base flex items-center gap-1">Auto 
            <span> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" > <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-3.33 0-8 1.67-8 5v2h16v-2c0-3.33-4.67-5-8-5z" /> </svg> </span> 3 </h4>

           <h5  className="font-medium text-sm">2 mins away</h5>
            <p  className="font-normal text-xs text-gray-600">Affordable Auto rides</p>
          </div>
          <h2 className="text-xtext-lg font-semibold">₹118.60</h2>
        </div>
    </div>
  )
}

export default VehiclePanel
