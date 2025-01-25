import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { CaptainDataContext } from "../context/CaptainContext";

const CaptainSignup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");

  const navigate = useNavigate();
  const { captain, setCaptain } = React.useContext(CaptainDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    const captainData = {
      fullname: {
        firstname : firstName,
        lastname : lastName,
      },
      email,
      password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType,
      },
    };

    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData);

      if (response.status === 201) {
        const data = response.data;
        setCaptain(data.captain);
        localStorage.setItem("token", data.token);
        navigate("/captain-home");
      }
    } catch (error) {
      console.error("Error registering captain:", error);
    }

    // Reset fields
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setVehicleColor("");
    setVehiclePlate("");
    setVehicleCapacity("");
    setVehicleType("");
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img className="w-20 mb-10" src="Zap.png" alt="Uber Logo" />
        <form onSubmit={submitHandler}>
          <div className="mb-4">
            <h3 className="text-lg font-medium mb-2">What's your name</h3>
            <div className="flex space-x-3">
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                className="bg-gray-100 px-4 py-2 border rounded w-1/2 placeholder:text-base"
                type="text"
                placeholder="First Name"
              />
              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                className="bg-gray-100 px-4 py-2 border rounded w-1/2 placeholder:text-base"
                type="text"
                placeholder="Last Name"
              />
            </div>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-medium mb-2">What's your email</h3>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-gray-100 px-4 py-2 border rounded w-full placeholder:text-base"
              type="email"
              placeholder="email@example.com"
            />
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-medium mb-2">Enter Password</h3>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="bg-gray-100 px-4 py-2 border rounded w-full placeholder:text-base"
              type="password"
              placeholder="Password"
            />
          </div>

          {/* Vehicle Information */}
          <h3 className="text-lg font-medium mb-2">Vehicle Information</h3>
          <div className="flex space-x-3 mb-4">
            <input
              value={vehicleColor}
              onChange={(e) => setVehicleColor(e.target.value)}
              required
              className="bg-gray-100 px-4 py-2 border rounded w-1/2 placeholder:text-base"
              type="text"
              placeholder="Vehicle Color"
            />
            <input
              value={vehiclePlate}
              onChange={(e) => setVehiclePlate(e.target.value)}
              required
              className="bg-gray-100 px-4 py-2 border rounded w-1/2 placeholder:text-base"
              type="text"
              placeholder="Vehicle Plate"
            />
          </div>

          <div className="flex space-x-3 mb-6">
            <input
              value={vehicleCapacity}
              onChange={(e) => setVehicleCapacity(e.target.value)}
              required
              className="bg-gray-100 px-4 py-2 border rounded w-1/2 placeholder:text-base"
              type="number"
              placeholder="Vehicle Capacity"
            />
            <select
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
              required
              className="bg-gray-100 px-4 py-2 border rounded w-1/2 placeholder:text-base"
            >
              <option value="" disabled>Select Vehicle Type</option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="moto">Moto</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-black text-white w-full py-2 rounded font-semibold text-lg hover:bg-gray-800"
          >
            Create Captain Account
          </button>

          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?{" "}
            <Link to="/captain-login" className="text-blue-600 hover:underline">
              Login here
            </Link>
          </p>
        </form>
      </div>

      <p className="text-xs text-gray-500 mt-4 text-center">
        By proceeding, you consent to get calls, WhatsApp, or SMS messages,
        including by automated means, from Uber and its affiliates to the
        number provided.
      </p>
    </div>
  );
};

export default CaptainSignup;
