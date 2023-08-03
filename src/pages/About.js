import React from "react";
import about from "../assets/about-us_03.jpg";
function About() {
  return (
    <div className="max-w-[800px] h-[full] mx-auto ">
      <div className="flex items-center justify-around my-7">
        <div className="flex items-start mx-4 ">
          <img src={about} className="w-[full] h-96 brightness-75" />
        </div>
        <div className="w-96">
          <h1 className="text-lg text-black mb-3">ABOUT US</h1>
          <h1 className="text-3xl font-extrabold text-[#162c53] mb-5">
            We Work With You
          </h1>
          <p className="text-[#7a7b7b] font-header">
            Namar Al Ghubairaa Trading was established in 2011 as a Food Stuff
            Trading company. But our continuous efforts and business have
            expanded into Food Stuff Trading, Building Materials, and General
            Trading based in the Sultanate of Oman. We import goods from many
            parts of the world and neighboring GCC countries.
          </p>
          <button className="bg-[#162c53] p-2 mt-20 rounded-sm w-32 text-white font-header">
            View More
          </button>
        </div>
      </div>

      {/* <div className="my-10 flex justify-around">
        <div>
          <img src={about} className="w-96 h-96" />
        </div>
        <div>
          <h1>ABOUT US</h1>
          <h1>We Work With You</h1>
          <p className="w-60">
            Namar Al Ghubairaa Trading was established in 2011 as Food Stuff
            Trading company. But our continuous efforts and business we have
            expended in Food Stuff Trading, Building Materials and General
            Trading based at the Sultanate of Oman. The imports were started
            from many part of the world and neighboring GCC countries,
          </p>
          <button>View More</button>
        </div>
      </div> */}
    </div>
  );
}

export default About;
