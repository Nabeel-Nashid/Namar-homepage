import React from "react";
import location from "../assets/loc.png";
import phone from "../assets/phone.png";
import mail from "../assets/mail.png";
import fb from "../assets/fb.png";
import insta from "../assets/insta.png";
import twitter from "../assets/twitter.png";

function Footer() {
  return (
    <div className="w-full h-[400px] bg-[#e7f0f8] flex flex-col justify-center">
      <div className="  flex flex-row justify-evenly text-[#162c53]">
        <div className="flex flex-col ">
          <h1 className="text-2xl  font-semibold mb-3">Quick Links</h1>
          <h1 className="mb-2 font-medium">Home</h1>
          <h1 className="mb-2 font-medium">About Us</h1>
          <h1 className="mb-2 font-medium">Contact US</h1>
          <h1 className="mb-2 font-medium">Careers</h1>
        </div>
        <div className="flex flex-col">
          <h1 className="text-2xl  font-medium mb-3">Services</h1>
          <h1 className="mb-2 font-medium">Food Stuff</h1>
          <h1 className="mb-2 font-medium">Building Materail</h1>
          <h1 className="mb-2 font-medium">Import & Export</h1>
          <h1 className="mb-2 font-medium">General Contracting</h1>
        </div>
        <div className="flex flex-col">
          <h1 className="text-2xl  font-medium mb-3">Contact US</h1>
          <div className="flex items-center mb-3">
            <img src={location} className="w-6 h-5" />
            <h1 className="font-medium">311,C 496,Suhar,Mascut</h1>
          </div>
          <div className="flex items-center mb-3">
            <img src={phone} className="w-6 h-5" />
            <h1 className="font-medium">+96826759366</h1>
          </div>
          <div className="flex items-center mb-3">
            <img src={mail} className="w-6 h-5 mr-2 flex-shrink-0" />
            <h1 className="font-medium">info@namaralghubairaa.com</h1>
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="text-2xl  font-medium mb-3">Follow US</h1>
          <div className="flex">
            <img src={fb} className="w-6 h-6 mr-3" />
            <img src={insta} className="w-6 h-6 mr-3" />
            <img src={twitter} className="w-6 h-6 mr-3" />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="border-b border-zinc-400 mt-20 w-[75%] mb-10"></div>
        <div className="text-[#162c53] font-medium text-lg">© 2020 NAMAR AL GHUBAIRRA TRADING. All Right Reserved</div>
      </div>
    </div>
  );
}

export default Footer;
