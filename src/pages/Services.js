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
    <div name="services" className="max-w-[800px] h-[full] mx-auto my-10">
      <div className="flex flex-col items-center mt-20">
        <h1 className="text-base sm:text-lg text-black mb-3">OUR SERVICES</h1>
        <h1 className="text-xl sm:text-3xl font-extrabold text-[#162c53] mb-1">
          What We Are Offering To
        </h1>
        <h1 className="text-xl sm:text-3xl font-extrabold text-[#162c53] mb-5">
          Customers
        </h1>
      </div>
      <div className="md:grid md:grid-cols-2 grid-cols-1 gap-4 flex flex-col justify-center items-center">
        <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
          <div class="h-96 w-96">
            <img
              class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
              src={one}
              alt=""
            />
          </div>
          <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
          <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
            <img src={food} className="h-10 w-12" />
            <h1 class="font-dmserif text-3xl font-bold text-white">
              Food Stuff Trading
            </h1>
          </div>
        </div>

        <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
          <div class="h-96 w-96">
            <img
              class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
              src={two}
              alt=""
            />
          </div>
          <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
          <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
            <img src={blogo} className="h-10 w-12" />
            <h1 class="font-dmserif text-3xl font-bold text-white">
              Building Materail
            </h1>
          </div>
        </div>

        <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
          <div class="h-96 w-96">
            <img
              class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
              src={three}
              alt=""
            />
          </div>
          <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
          <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
            <img src={slogo} className="h-11 w-12" />
            <h1 class="font-dmserif text-3xl font-bold text-white">
              Import & Export
            </h1>
          </div>
        </div>

        <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
          <div class="h-96 w-96">
            <img
              class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
              src={four}
              alt=""
            />
          </div>
          <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
          <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
            <img src={spanner} className="h-10 w-12" />
            <h1 class="font-dmserif text-3xl font-bold text-white">
              General Contracting
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
