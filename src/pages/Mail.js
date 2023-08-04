import React from "react";
import msg from "../assets/message.png";

function Mail() {
  return (
    <div
      name="contact"
      className="w-[full] h-[350px] mx-auto flex justify-center items-center "
    >
      <div className="relative flex flex-col sm:flex-row  ">
        <input
          type="text"
          placeholder="Your e-mail Address"
          className="shadow-md w-72 pl-12 rounded focus:outline-none focus:border-blue-500"
        />
        <img src={msg} className="w-6 absolute left-4 top-3" />
        <button className="bg-[#162c53] p-2 rounded w-20 text-white font-header mt-5 sm:mt-0 ">
          Submit
        </button>
      </div>
    </div>
  );
}

export default Mail;
