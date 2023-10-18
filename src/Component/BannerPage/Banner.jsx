import React from "react";
import LatestProduct from "../LatestProduct/LatestProduct";
// import Home from "../Home/Home";

const Banner = () => {
  return (
    <div>
      <div
        className="hero h-[100%] md:min-h-screen"
        style={{
          backgroundImage: "url(https://i.imgur.com/88bPj8y.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h5 className="mb-2  text-md md:text-xl font-mono">DISCOVER OUR STORE </h5>
            <h1 className="mb-5 text-md  md:text-3xl md:font-extralight text-slate-100">FASHION & APPAREL COLLECTION </h1>
            <button className="btn  btm-sm  text-sm md:text-lg px-2  md:px-8 ">Shop Now</button>
          </div>
        </div>
      </div>
      <LatestProduct ></LatestProduct>
    </div>
    
  );
};

export default Banner;
