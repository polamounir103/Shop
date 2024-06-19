import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiShow, BiHide } from "react-icons/bi";

function Login() {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [passwordType, setPasswordType] = useState(false);
  const togglePassword = () => {
    setIsPasswordShown(!isPasswordShown);
    setPasswordType(!passwordType);
  };

  return (
    <div className=" ">
      <form className="bg-gray-100 min-w-96 w-1/3 m-auto p-10 rounded-lg">
        <h2 className="text-2xl mb-5">Login</h2>
        <div className="flex flex-col gap-5">
          <input
            type="email"
            className="p-3 rounded-lg text-black placeholder:text-teal-800 shadow-md"
            placeholder="Enter Your Email"
          />
          <div className=" relative">
            <input
              type={passwordType ? "text" : "password"}
              className="p-3 rounded-lg w-full text-black placeholder:text-teal-800 shadow-md"
              placeholder="Enter Your Password"
            />
            <div
              className="absolute right-5 top-1/2 -translate-y-1/2 p-2 select-none text-xl"
              onClick={togglePassword}
            >
              {isPasswordShown ? <BiHide /> : <BiShow />}
            </div>
          </div>
          <hr></hr>
          <div className="flex flex-col items-center ">
            <button className="px-6 py-2 text-white rounded-md shadow-lg hover:shadow-xl bg-amber-500 min-w-56">
              Login
            </button>
            <p className="text-sm">
              Create new account?
              <Link to="/signup" className="text-blue-600 italic">
                signup
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
