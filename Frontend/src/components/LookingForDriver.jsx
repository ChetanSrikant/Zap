import React from 'react'

const LookingForDriver = (props) => {
    return (
        <div>
          <div
            onClick={() => {
              props.setVehiclePanel(false);
            }}
            className="p-3 flex justify-center w-[93%] absolute top-0 "
          >
            <svg
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
            </svg>
          </div>
    
          <h3 className="text-2xl font-semibold mb-5">Looking for a Driver</h3>
          <div className="flex gap-2 flex-col justify-between items-center">
            <img
              className="h-20"
              src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_638/v1682350114/assets/c2/296eac-574a-4a81-a787-8a0387970755/original/UberBlackXL.png"
              alt=""
            />
            <div className="w-full">
              <div className="flex items-center gap-5 p-3 border-b-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6 text-gray-700"
                >
                  <path d="M12 21c4.97-4.97 8-9 8-12a8 8 0 10-16 0c0 3 3.03 7.03 8 12z" />
                  <circle cx="12" cy="9" r="3" />
                </svg>
                <div>
                  <h3 className="text-lg font-medium">123 Main St </h3>
                  <p className="text-sm -mt-1 text-gray-600">New York, NY 10001</p>
                </div>
              </div>
              <div className="flex items-center gap-5 p-3 border-b-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 text-red-500"
                  fill="currentColor"
                >
                  <path d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                </svg>
    
                <div>
                  <h3 className="text-lg font-medium">123 Main St </h3>
                  <p className="text-sm -mt-1 text-gray-600">New York, NY 10001</p>
                </div>
              </div>
              <div className="flex items-center gap-5 p-3 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6 text-green-600"
                >
                  <rect
                    x="2"
                    y="7"
                    width="20"
                    height="10"
                    rx="2"
                    stroke="black"
                    fill="none"
                  />
                  <circle cx="12" cy="12" r="2" stroke="black" fill="none" />
                  <circle cx="6" cy="12" r="1" stroke="black" fill="black" />
                  <circle cx="18" cy="12" r="1" stroke="black" fill="black" />
                  <circle cx="18" cy="5" r="4" stroke="black" fill="none" />
                  <text x="17" y="7" fontSize="4" fontWeight="bold" fill="black">
                    5
                  </text>
                </svg>
                <div>
                  <h3 className="text-lg font-medium">123 Main St </h3>
                  <p className="text-sm -mt-1 text-gray-600">New York, NY 10001</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}

export default LookingForDriver
