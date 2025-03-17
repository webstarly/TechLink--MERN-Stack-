import React, { useState } from "react";
import Image3 from "../assets/login.webp";
import { Link } from "react-router-dom";


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleOnClick = (e) => {
    setShowPassword((preve) => !preve);
  };

const handleOnSubmit =(e)=>{
    e.preventDefault;
}

  return (
    <div
      className="cointainer mx-auto min-h-screen w-full flex   justify-center items-center opacity-  bg-gradient-to-r from-indigo-200 to-gray-100 "
    >
      <div className="w-125 max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl   bg-white p-4 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold ">Login </h2>
        
          <form>
            <div className="mt-3 flex flex-col sm:flex-row sm:items-center ">
              <label htmlFor="email" className="text-lg sm:w-1/4">
                Email:{" "}
              </label>
              <input
                type="text"
                name="email"
                //value={}
                placeholder="enter your email"
                className="rounded focus:shadow-md outline-none text-md  bg-slate-100 h-10 w-full p-2"
                required
              />
            </div>
            <div className="mt-3">
              <div className="flex flex-col sm:flex-row sm:items-center relative">
                <label htmlFor="password" className="text-lg sm:w-1/4">
                  Password:{" "}
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  //value={}
                  placeholder="enter your password"
                  className="rounded focus:shadow-md outline-none text-md bg-slate-100 h-10 w-full p-2"
                  required
                />
                <div className="absolute text-sm right-3 bottom-2">
                  <span
                    className="underline  cursor-pointer"
                    onClick={handleOnClick}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </span>
                </div>
              </div>
            </div>

            <div className="text-indigo-500 hover:text-indigo-600 hover:underline text-sm mt-2 w-fit ml-auto cursor-pointer ">
                <Link to={"/forgetpassword"} className="">
                    Forget Password
                </Link>
            </div>
            <button className="bg-indigo-500 hover:bg-indigo-600 px-4 py-1 rounded-full mt-3 text-white block ml-auto cursor-pointer " onSubmit={handleOnSubmit}>
              Login
            </button>
          </form>
          <p className="mt-1 text-sm">
            Don't have an account ?
            <Link
              to={"/signup"}
              className="m-1 text-indigo-500 hover:text-indigo-600 hover:underline"
            >
              Signup
            </Link>
          </p>
       
      </div>
    </div>
  );
};

export default Login;
