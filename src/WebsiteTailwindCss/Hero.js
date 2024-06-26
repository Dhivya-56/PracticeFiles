import React from "react";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[1240px] mt-[-96px] w-full h-screen mx-auto text-center flex- flex-col">
        <p className="text-[#00df9a] font-bold p-2 mt-[130px]">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Grow with data.
        </h1>
        <div>
          <p className="md:text-5xl sm:text-4xl text-xl font-bold">
            fast,flexible financing for
          </p>
        
        <p className="md:text-2xl text-2xl font-bold text-gray-500 mt-4">Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.</p>
        <button className="bg-[#00df9a] w-[200px] my-6 py-3  font-medium rounded-md text-black">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
