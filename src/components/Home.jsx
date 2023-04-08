import React from "react";
import banner from "./../assets/hero.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="h-screen flex  justify-center text-center bg-slate-200">
        <div className="space-y-6 pt-32">
          <h1 className="text-4xl lg:text-5xl py-2 font-bold lg:font-extrabold lg:tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-violet-500 animate-text">
            Welcome To Crystal Gadgets
          </h1>
          <p className="text-lg lg:text-xl text-gray-600">
            Best E-commerce platform for buying high quality <br /> Smart Home
            Appliances at extremely affordable Price.
          </p>
          <div className="inline-flex space-x-3">
            <Link
              to="/shop"
              className="text-xl font-semibold text-white bg-sky-400 transition duration-300 hover:bg-sky-500 py-3 px-6 rounded-3xl"
            >
              Shop now
            </Link>
            <Link
              to="/shop"
              className="text-xl font-semibold text-black hover:text-white border border-sky-500  transition duration-300  hover:bg-sky-500 py-3 px-6 rounded-3xl"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
      <div className="relative">
        <img
          className="w-4/5 mx-auto rounded-lg absolute -top-36 inset-0"
          src={banner}
          alt=""
        />
      </div>
    </>
  );
};

export default Home;
