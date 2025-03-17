import React from "react";
import Image1 from "../assets/Tutor1.webp";
import Image2 from "../assets/Tech-enthuse.webp";
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <div className=" bg-gray-100 mx-auto flex justify-center items-center min-h-screen h-full w-full ">
    
      <div className=" bg-white w-200 h-100 shadow-md  rounded p-4">
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <div className=" p-2 h-80 ">
              <div className="hover:shadow-md rounded p-6 h-full transform transition-transform duration-300 hover:scale-105">
                <div className=" flex justify-center items-center w-full h-40 p-2">
                  <img
                    src={Image1}
                    alt=""
                    className=" bg-amber-400 h-full w-40 rounded-2xl"
                  ></img>
                </div>
                <h1 className="mt-1 font-semibold capitalize text-2xl">
                  Tutor{" "}
                </h1>
                <p className="text-sm ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                  perferendis omnis obcaecati rem officiis fugit error quasi.
                  Porro, voluptatibus rerum.
                </p>
              </div>
            </div>
            <div className=" p-2 h-80">
              <div className="hover:shadow-md  rounded p-6 h-full transform transition-transform duration-300 hover:scale-105">
                <div className=" flex justify-center items-center w-full h-40 p-2">
                  <img
                    src={Image2}
                    alt=""
                    className=" bg-amber-400 h-full w-40 rounded-2xl"
                  ></img>
                </div>
                <h1 className="mt-1 font-semibold capitalize text-2xl">
                  Learning{" "}
                </h1>
                <p className="text-sm ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                  perferendis omnis obcaecati rem officiis fugit error quasi.
                  Porro, voluptatibus rerum.
                </p>
              </div>
            </div>
          </div>
          <div className=" w-full p-2 mt-2 flex">
            <Link
              to={"/signup"}
              className="bg-indigo-500 hover:bg-indigo-600 px-4 py-1 rounded-full w-fit text-white  ml-auto cursor-pointer"
            >
              Signup
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
