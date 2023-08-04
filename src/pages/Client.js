import React from "react";
import bastil from "../assets/bastil_03.jpg";
import boiler from "../assets/bolier_03.jpg";
import dankside from "../assets/dankside_03.jpg";
import dig from "../assets/dig-it_03.jpg";
import fifth from "../assets/Namar-home-page_03.jpg";

function Client() {
  return (
    <div name="careers" className="w-[full] h-[450px] mx-auto mt-10 bg-[#162c53] flex flex-col justify-center items-center">
      <div className="max-w-[800px]">
        <div className="flex flex-col justify-center items-center my-7">
          <h1 className="text-base sm:text-lg text-white mb-3">OUR CLIENTELE</h1>
          <h1 className="text-xl sm:text-3xl font-bold text-white mb-1">
            Our Client Base has increased by
          </h1>
          <h1 className="text-xl sm:text-3xl font-bold text-white mb-1">
            by 40% Annually
          </h1>
        </div>
        <div className="grid md:grid-cols-6 grid-cols-3 gap-2 my-7">
          <img src={fifth} className="w-36 h-24" />
          <img src={bastil} className="w-36 h-24" />
          <img src={boiler} className="w-36 h-24" />
          <img src={dankside} className="w-36 h-24" />
          <img src={dig} className="w-36 h-24" />
          <img src={fifth} className="w-36 h-24" />
        </div>
      </div>
    </div>
  );
}

export default Client;
