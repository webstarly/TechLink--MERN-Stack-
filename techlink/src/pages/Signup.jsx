import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Image4 from "../assets/profile1.png"
import imageToBase64 from "../helpers/imageToBase64";
import getState from "../helpers/getState";

const Signup = () => {
  const [showPassword, setShowPassword] = useState("false");
  const [showConfirmPassword , setShowConfirmPassword] = useState("false")
  const [showSelectedInterestOption, setShowSelectedInterestOption] = useState("false")
  const [data , setData] = useState({
    name : "",
    email : "",
    phone : "",
    state : "",
    city : "",
    interest : "",
    specialty : "",
    password : "",
    confirmPassword : "",
    profileImg : ""
  })

  const [showState, setShowState] = useState([])


  useEffect(()=>{
    getState();
  },[])

  const handleUploadPhoto = async (e) =>{
    const file = e.target.files[0];
    const profilePic = await imageToBase64(file);

    console.log("profilePic", profilePic)

    setData((preve)=>{
        return {
        ...preve,
        profileImg : profilePic
        }
    })

  }

  const handleOnSubmit = (e) =>{
    e.preventDefault;
    
  }

  

  return (
    <section>
    <div
      className=" cointainer mx-auto h-full flex justify-center items-center bg-gradient-to-r from-indigo-200 to-gray-100 " >
       <div className="w-140 max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mt-30 mb-10  bg-white p-6 rounded-2xl shadow-lg ">
            <h2 className="text-2xl font-semibold ">Signup </h2>
        
          
            <div className="mt-4  w-full flex flex-col justify-center items-center p-2">
                    <div className="relative overflow-hidden h-30 w-30  cursor-pointer hover:transform transition-transform duration-300 hover:scale-105 ">
                        <div className="  rounded-full ">
                            <img src={ data.profileImg || Image4 } alt="" className="outline-gray-100 shadow-md rounded-full object-cover"/>
                        </div>
                        <div>
                        
                            <form >
                                <label className="">
                                    {
                                        !data.profileImg && (
                                            <div className="absolute bottom-12 text-xs text-center pb-4 pt-2 w-full cursor-pointer">
                                                Upload Photo
                                        </div>
                                        )
                                    }
                                    
                                    <input type="file" name="profileimg" className="hidden" onChange={handleUploadPhoto}/>
                                </label>
                                
                            </form>
                            
                            
                        
                        </div>
                    </div>
            </div>        
            <form>
                <div className="mt-4 flex flex-col sm:flex-row sm:items-center ">
                <label htmlFor="name" className="text-lg  ">
                    Name: {" "}
                </label>
                <input
                    type="text"
                    name="name"
                    //value={}
                    placeholder="enter your name"
                    className="rounded focus:shadow-md outline-none text-md  bg-slate-100 h-10 w-full p-2"
                    required
                />
                </div>
                <div className="mt-3 flex flex-col sm:flex-row sm:items-center ">
                <label htmlFor="email" className="text-lg ">
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
                <div className="mt-3 flex flex-col sm:flex-row sm:items-center ">
                <label htmlFor="phone" className="text-lg ">
                    Phone: {" "}
                </label>
                <input
                    type="string"
                    name="phone"
                    //value={}
                    placeholder="enter your phone number"
                    className="rounded focus:shadow-md outline-none text-md  bg-slate-100 h-10 w-full p-2"
                    required
                />
                </div>
                <div className="mt-3">
                    <div className="flex flex-col sm:flex-row sm:items-center relative">
                            <label htmlFor="state" className="text-lg sm:w-1/4">
                            State:{" "}
                            </label>
                            <select>
                                <option value="" className="rounded  text-md  bg-slate-100 h-10 w-full p-2">
                                    --Select State--
                                </option>
                                {
                                    showState.map((state,index) =>
                                        (
                                            <option key={index} value={state} className="rounded  text-md  bg-slate-100 h-10 w-full p-2">
                                                {state}
                                            </option>
                                        )
                                    )
                                    
                                }
                                
                            </select>
                    </div>        
                </div>
                <div className="mt-3">
                    <div className="flex flex-col sm:flex-row sm:items-center relative">
                            <label htmlFor="city" className="text-lg sm:w-1/4">
                            City:{" "}
                            </label>
                            <select >
                                <option className="rounded  outline-none text-md  bg-slate-100 h-10 w-full p-2  disabled={cities.length === 0">
                                    Select city
                                </option>
                            </select>
                    </div>        
                </div>
                <div className="mt-3">
                    <div className="flex flex-col sm:flex-row sm:items-center">
                        <h1 className="text-lg ">Interest: </h1>
                        <div className="flex m-2 space-x-4">
                            <label className="flex items-center space-x-2">
                                <input 
                                type="radio" 
                                name="interest" 
                                value="tutor"
                                className="h-5 w-5 text-indigo-600 focus:ring-indigo-500"
                                onChange={(e)=>{setShowSelectedInterestOption("tutor")}}
                                />
                                <span className="text-md">Tutor</span>
                            </label>
                            
                            <label className="flex items-center space-x-2">
                                <input 
                                type="radio" 
                                name="interest" 
                                value="learner"
                                className="h-5 w-5 text-indigo-600 focus:ring-indigo-500"
                                onChange={(e)=>{setShowSelectedInterestOption("learner")}}
                                />
                                <span className="text-md">Learner</span>
                            </label>
                        </div>
                    </div>
                </div>

                {
                    showSelectedInterestOption === "tutor" && (
                        <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            style={{ overflow: "hidden" }}
                            className="mt-3 overflow-hidden"
                        >
                            <div className="flex flex-col sm:flex-row sm:items-center relative">
                                <label htmlFor="specialty" className="text-lg sm:w-1/4">
                                    Specialty:{" "}
                                </label>
                                <select>
                                    <option className="rounded  outline-none text-md  bg-slate-100 h-10 w-full p-2">
                                        Select specialty
                                    </option>
                                </select>
                </div>
                </motion.div >
                    )
                }
                

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
                            onClick={(e)=>{setShowPassword((preve) => !preve); }}
                        >
                            {showPassword ? "Hide" : "Show"}
                        </span>
                        </div>
                </div>
                </div>
                <div className="mt-3">
                <div className="flex flex-col sm:flex-row sm:items-center relative">
                        <label htmlFor="confirmpassword" className="text-lg sm:w-1/4">
                        Confirm Password:{" "}
                        </label>
                        <input
                        type={showConfirmPassword ? "text" : "password"}
                        name="confirmpassword"
                        //value={}
                        placeholder="re-enter your password"
                        className="rounded focus:shadow-md outline-none text-md bg-slate-100 h-10 w-full p-2"
                        required
                        />
                        <div className="absolute text-sm right-3 bottom-2">
                        <span
                            className="underline  cursor-pointer"
                            onClick={(e)=>{setShowConfirmPassword((preve) => !preve); }}
                        >
                            {showConfirmPassword ? "Hide" : "Show"}
                        </span>
                        </div>
                </div>
                </div>

                <button className="bg-indigo-500 hover:bg-indigo-600 px-4 py-1 rounded-full mt-3 text-white block ml-auto " onSubmit={handleOnSubmit}>
                Signup
                </button>
            </form>
            <p className="mt-1 text-sm">
                Have an account already ?
                <Link
                to={"/login"}
                className="m-1 text-indigo-500 hover:text-indigo-600 hover:underline"
                >
                Login
                </Link>
            </p>
        
        </div>
    </div>
    </section>
  );
  
};

export default Signup;
