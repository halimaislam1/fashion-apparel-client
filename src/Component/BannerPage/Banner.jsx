import React from "react";
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
            <h1 className="mb-5 text-3xl  md:text-5xl ">LATEST COLLECTION</h1>
            <button className="btn btn-sm px-1 text-sm md:text-md md:px-8">Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
