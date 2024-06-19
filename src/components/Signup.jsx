import React, { useState } from "react";
import { BiHide, BiShow } from "react-icons/bi";
import { Link } from "react-router-dom";

function Signup() {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [passwordType, setPasswordType] = useState(false);
  const togglePassword = () => {
    setIsPasswordShown(!isPasswordShown);
    setPasswordType(!passwordType);
  };
  const [isConfirmPasswordShown, setIsConfirmPasswordShown] = useState(false);
  const [confirmPasswordType, setConfirmPasswordType] = useState(false);
  const toggleConfirmPassword = () => {
    setIsConfirmPasswordShown(!isConfirmPasswordShown);
    setConfirmPasswordType(!confirmPasswordType);
  };

  return (
    <div className=" ">
      <form className="bg-gray-100 min-w-96 w-1/3 m-auto p-10 rounded-lg">
        <h2 className="text-2xl mb-5">Signup</h2>
        <div className="flex flex-col gap-5">
          <input
            type="text"
            className="p-3 rounded-lg text-black placeholder:text-teal-800 shadow-md"
            placeholder="Enter your full name"
          />
          <input
            type="email"
            className="p-3 rounded-lg text-black placeholder:text-teal-800 shadow-md"
            placeholder="Enter your email"
          />
          <div className=" relative">
            <input
              type={passwordType ? "text" : "password"}
              className="p-3 rounded-lg w-full text-black placeholder:text-teal-800 shadow-md"
              placeholder="Enter your password"
            />
            <div
              className="absolute right-5 top-1/2 -translate-y-1/2 p-2 select-none text-xl"
              onClick={togglePassword}
            >
              {isPasswordShown ? <BiHide /> : <BiShow />}
            </div>
          </div>

          <div className=" relative">
            <input
              type={confirmPasswordType ? "text" : "password"}
              className="p-3 rounded-lg w-full text-black placeholder:text-teal-800 shadow-md"
              placeholder="Confirm your password"
            />
            <div
              className="absolute right-5 top-1/2 -translate-y-1/2 p-2 select-none text-xl"
              onClick={toggleConfirmPassword}
            >
              {isConfirmPasswordShown ? <BiHide /> : <BiShow />}
            </div>
          </div>

          <hr></hr>
          <div className="flex flex-col items-center ">
            <button className="px-6 py-2 text-white rounded-md shadow-lg hover:shadow-xl bg-amber-500 min-w-56">
              Login
            </button>
            <p className="text-sm">
              Already have account?
              <Link to="/signup" className="text-blue-600 italic">
                login
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Signup;
