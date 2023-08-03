import React from "react";
import one from "../assets/food_003.jpg";
import two from "../assets/building-material_003.jpg";
import three from "../assets/import_003.jpg";
import four from "../assets/contract_003.jpg";
import food from "../assets/leaf.png";
import blogo from "../assets/building.png";
import slogo from "../assets/ship.png";
import spanner from "../assets/spanner.png";

function Services() {
  return (
    <div className="max-w-[800px] h-[full] mx-auto my-10">
      <div className="flex flex-col items-center mt-20">
        <h1 className="text-lg text-black mb-3">OUR SERVICES</h1>
        <h1 className="text-3xl font-extrabold text-[#162c53] mb-1">
          What We Are Offering To
        </h1>
        <h1 className="text-3xl font-extrabold text-[#162c53] mb-5">
          Customers
        </h1>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
        <div
          className="bg-cover bg-center flex flex-col justify-center items-center w-96 h-96"
          style={{ backgroundImage: `url(${one})` }}
        >
          <img src={food} className="h-12 w-12" />
          <h1 className="text-xl text-white font-extrabold ">
            Food Stuff Trading
          </h1>
        </div>
        <div
          className="bg-cover bg-center flex flex-col justify-center items-center  w-96 h-96"
          style={{ backgroundImage: `url(${two})` }}
        >
          <img src={blogo} className="h-12 w-12" />
          <h1 className="text-xl text-white font-extrabold ">
            Building Materail
          </h1>
        </div>
        <div
          className="bg-cover bg-center flex flex-col justify-center items-center w-96 h-96"
          style={{ backgroundImage: `url(${three})` }}
        >
          <img src={slogo} className="h-12 w-12" />
          <h1 className="text-xl text-[#fefffe] font-extrabold ">
            Import & Export
          </h1>
        </div>
        <div
          className="bg-cover bg-center flex flex-col justify-center items-center  w-96 h-96"
          style={{ backgroundImage: `url(${four})`,  }}
        >
          <img src={spanner} className="h-12 w-12" />
          <h1 className="text-xl text-white font-extrabold ">
            General Contracting
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Services;
