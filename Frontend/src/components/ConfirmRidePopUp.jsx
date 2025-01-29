import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const ConfirmRidePopUp = (props) => {

    const [otp, setOtp] = useState("")

    const submitHandler = (e)=>{
        e.preventDefault()
    }

  return (
    <div>
      <div
        onClick={() => {
          props.setRidePopPanel(false);
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

      <h3 className="text-2xl font-semibold mb-5">Confirm this ride to start</h3>
      <div className='flex items-center justify-between p-3 bg-yellow-200 rounded-lg'>
        <div className='flex items-center gap-3'>
            <img className='h-12 w-12 rounded-full object-cover' src="https://media.proprofs.com/images/QM/user_images/2503852/-Type-Of-Person-.webp" alt="" />
            <h2 className='text-lg font-medium'>Harsh Patel</h2>
        </div>
        <h5 className='text-lg font-semibold'>2.2 KM</h5>
      </div>
      <div className="flex gap-2 flex-col justify-between items-center">
        
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

       

        <div className='mt-6 w-full'>
        <form onSubmit={(e)=>{
            submitHandler(e)
        }}>
            <input value={otp} onChange={()=>setOtp(e.target.value)} className="bg-[#eee] px-6 py-4 font-mono text-base rounded-lg w-full mt-5" type="text" name="" id="" placeholder='Enter OTP'/>

        <Link to='/captain-riding'
        className="w-full text-lg mt-5 flex justify-center bg-green-600 text-white font-semibold p-3 rounded-lg">
          Confirm
        </Link>

        <button 
        onClick={()=> {props.setConfirmRidePopPanel(false)
            props.setRidePopPanel(false)
        }}
        className="w-full text-lg mt-2 bg-red-600 text-white font-semibold p-3 rounded-lg">
          Cancel
        </button>
        </form>        
        </div>
      </div>
    </div>
  )
}

export default ConfirmRidePopUp
