import React from "react";
import location from "../assets/loc.png";
import phone from "../assets/phone.png";
import mail from "../assets/mail.png";
import fb from "../assets/fb.png";
import insta from "../assets/insta.png";
import twitter from "../assets/twitter.png";
import { Link } from "react-scroll";

function Footer() {
  return (
    <div className="w-full md:h-[400px] h-full bg-[#e7f0f8] flex flex-col justify-center">
      <div className="grid grid-cols-2 ml-7 mt-7 md:mt-0 md:ml-0 md:flex flex-row md:justify-evenly text-[#162c53]">
        <div className="flex flex-col ">
          <h1 className="md:text-2xl text-lg  font-semibold mb-3">Quick Links</h1>
          <Link to="home" smooth="true" duration={500}>
          <h1 className="mb-2 font-medium md:text-base text-xs cursor-pointer">Home</h1>
          </Link>
          <Link to="about" smooth="true" duration={500}>
          <h1 className="mb-2 font-medium md:text-base text-xs cursor-pointer">About Us</h1>
          </Link>
          <Link to="contact" smooth="true" duration={500}>
          <h1 className="mb-2 font-medium md:text-base text-xs cursor-pointer">Contact US</h1>
          </Link>
          <Link to="careers" smooth="true" duration={500}>
          <h1 className="mb-2 font-medium md:text-base text-xs cursor-pointer">Careers</h1>
          </Link>
        </div>
        <div className="flex flex-col">
          <h1 className="md:text-2xl text-lg  font-medium mb-3">Services</h1>
          <h1 className="mb-2 font-medium md:text-base text-xs">Food Stuff</h1>
          <h1 className="mb-2 font-medium md:text-base text-xs">Building Materail</h1>
          <h1 className="mb-2 font-medium md:text-base text-xs">Import & Export</h1>
          <h1 className="mb-2 font-medium md:text-base text-xs">General Contracting</h1>
        </div>
        <div className="flex flex-col">
          <h1 className="md:text-2xl text-lg font-medium mb-3">Contact US</h1>
          <div className="flex items-center mb-3">
            <img src={location} className="md:w-6 w-4 md:h-5 h-3" />
            <h1 className="font-medium md:text-base text-xs">311,C 496,Suhar,Mascut</h1>
          </div>
          <div className="flex items-center mb-3">
            <img src={phone} className="md:w-6 w-4 md:h-5 h-3" />
            <h1 className="font-medium md:text-base text-xs">+96826759366</h1>
          </div>
          <div className="flex items-center mb-3">
            <img src={mail} className="md:w-6 w-4 md:h-5 h-3 mr-2 " />
            <h1 className="font-medium md:text-base text-xs">info@namaralghubairaa.com</h1>
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="md:text-2xl text-lg font-medium mb-3">Follow US</h1>
          <div className="flex">
            <img src={fb} className="md:w-6 w-4 md:h-6 h-4 mr-3" />
            <img src={insta} className="md:w-6 w-4 md:h-6 h-4 mr-3" />
            <img src={twitter} className="md:w-6 w-4 md:h-6 h-4 mr-3" />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="border-b border-zinc-400 mt-20 w-[75%] mb-10"></div>
        <div className="text-[#162c53] font-medium text-[11px] mb-4 md:mb-0 sm:text-lg">© 2020 NAMAR AL GHUBAIRRA TRADING. All Right Reserved</div>
      </div>
    </div>
  );
}

export default Footer;
