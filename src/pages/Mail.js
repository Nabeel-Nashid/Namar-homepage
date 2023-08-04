import React from "react";
import msg from "../assets/message.png";

function Mail() {
  return (
    <div
      name="contact"
      className="w-[full] h-[350px] mx-auto flex justify-center items-center "
    >
      <div className="relative flex sm:flex-row  ">
        <input
          type="text"
          placeholder="Your e-mail Address"
          className="shadow-md sm:w-72 w-52 pl-12 p-2 rounded focus:outline-none focus:border-blue-500"
        />
        <img src={msg} className="w-6 absolute left-4 top-3" />
        <button className="bg-[#162c53] sm:p-2 p-1 rounded sm:w-20 w-16 text-white font-header ">
          Submit
        </button>
      </div>
    </div>
  );
}


export default Mail;
