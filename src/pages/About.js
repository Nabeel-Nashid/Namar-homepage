import React from "react";
import about from "../assets/about-us_03.jpg";
function About() {
  return (
    <div name="about" className="max-w-[800px] h-[full] mx-auto ">
      <div className="md:grid flex flex-col justify-center items-center md:grid-cols-2 my-12">
        <div className="flex items-start mx-4 ">
          <img src={about} className="w-[full] sm:h-96 h-60 brightness-75" />
        </div>
        <div className="sm:w-96 ml-2 mt-2 md:ml-0 md:mt-0">
          <h1 className="text-lg text-black mb-3">ABOUT US</h1>
          <h1 className="text-3xl font-extrabold text-[#162c53] mb-5">
            We Work With You
          </h1>
          <p className="text-[#7a7b7b] font-header sm:w-80">
            Namar Al Ghubairaa Trading was established in 2011 as a Food Stuff
            Trading company. But our continuous efforts and business have
            expanded into Food Stuff Trading, Building Materials, and General
            Trading based in the Sultanate of Oman. We import goods from many
            parts of the world and neighboring GCC countries.
          </p>
          <button className="bg-[#162c53] sm:p-2 p-1 text-xs sm:text-base mt-8 rounded-sm sm:w-32 w-20 text-white font-header">
            View More
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
