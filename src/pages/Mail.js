import React from "react";
import msg from "../assets/message.png";
import { BsArrowRight } from "react-icons/bs";

function Mail() {


  return (
    <div className="w-[full] h-[350px] mx-auto flex justify-center items-center ">
      <div className="relative flex">
        <input
          type="text"
          placeholder="Your e-mail Address"
          className="shadow-md w-80 pl-12 rounded focus:outline-none focus:border-blue-500"
          
        />
        <img src={msg} className="w-6 absolute left-4 top-3"/>
        <button className="bg-[#162c53] p-2 rounded w-24 text-white font-header">
          Submit
        </button>
      </div>
    </div>
  );
}

export default Mail;
