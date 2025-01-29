import React from 'react'

const CaptainDetails = () => {
  return (
    <div>
      <div className="h-1/2 p-5 bg-white rounded-t-2xl shadow-lg ">
        {/* Driver & Vehicle Info */}
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start gap-3">
            <img
              className="h-10 w-10 rounded-full object-cover"
              src="https://images.healthshots.com/healthshots/en/uploads/2020/12/08182549/positive-person.jpg"
              alt=""
            />
            <h4 className="text-lg font-medium">Ria Patel</h4>
          </div>
          <div className="text-center">
            <h4 className="text-xl font-semibold">₹245.56</h4>
            <p className="text-sm text-gray-600">Earned</p>
          </div>
        </div>
        <div className="flex p-5 justify-center bg-gray-100 gap-8 items-start rounded-xl shadow-md mt-5">
          {/* Hours Online */}
          <div className="text-center flex flex-col items-center">
            <div className="bg-blue-100 p-3 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8 text-blue-600"
              >
                <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM13 12H17V14H11V7H13V12Z"></path>
              </svg>
            </div>
            <h5 className="text-xl font-semibold mt-2 text-gray-900">10.2</h5>
            <p className="text-sm text-gray-600">Hours Online</p>
          </div>

          {/* Completed Rides */}
          <div className="text-center flex flex-col items-center">
            <div className="bg-green-100 p-3 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8 text-green-600"
              >
                <path d="M20 13C20 15.2091 19.1046 17.2091 17.6569 18.6569L19.0711 20.0711C20.8807 18.2614 22 15.7614 22 13 22 7.47715 17.5228 3 12 3 6.47715 3 2 7.47715 2 13 2 15.7614 3.11929 18.2614 4.92893 20.0711L6.34315 18.6569C4.89543 17.2091 4 15.2091 4 13 4 8.58172 7.58172 5 12 5 16.4183 5 20 8.58172 20 13ZM15.293 8.29297 10.793 12.793 12.2072 14.2072 16.7072 9.70718 15.293 8.29297Z"></path>
              </svg>
            </div>
            <h5 className="text-xl font-semibold mt-2 text-gray-900">48</h5>
            <p className="text-sm text-gray-600">Completed Rides</p>
          </div>

          {/* Earnings */}
          <div className="text-center flex flex-col items-center">
            <div className="bg-yellow-100 p-3 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8 text-yellow-600"
              >
                <path d="M20.0049 2C21.1068 2 22 2.89821 22 3.9908V20.0092C22 21.1087 21.1074 22 20.0049 22H4V18H2V16H4V13H2V11H4V8H2V6H4V2H20.0049ZM8 4H6V20H8V4ZM20 4H10V20H20V4Z"></path>
              </svg>
            </div>
            <h5 className="text-xl font-semibold mt-2 text-gray-900">
              ₹2456.56
            </h5>
            <p className="text-sm text-gray-600">Total Earnings</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CaptainDetails
