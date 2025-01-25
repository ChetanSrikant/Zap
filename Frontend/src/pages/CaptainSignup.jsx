import React, { useState } from "react";
import { Link } from "react-router-dom";


const CaptainSignup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const userData = {
      fullName: {
        firstName,
        lastName,
      },
      email,
      password,
    };
    console.log(userData);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img className="w-20 mb-10" src="Zap.png" alt="Uber Logo" />
        <form onSubmit={(e) => submitHandler(e)}>
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

          <button
            type="submit"
            className="bg-black text-white w-full py-2 rounded font-semibold text-lg hover:bg-gray-800"
          >
            Create Account
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
