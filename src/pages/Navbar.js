import React from "react";
import { Link } from "react-scroll";
import logo from "../assets/logo.png";
import { MdKeyboardArrowDown } from "react-icons/md";

function Navbar() {
  return (
    <div className="flex justify-around w-[full] h-[90px] mx-auto">
      <div className="flex justify-center items-center">
        <img src={logo} className="w-20" />
      </div>
      <div className="flex justify-center items-center">
        <ul className="hidden md:flex flex-row font-header ">
          <Link to="home" smooth="true" duration={500}>
            <li>Home</li>
          </Link>
          <Link to="about" smooth="true" duration={500}>
            <li>About Us</li>
          </Link>
          <Link to="skills" smooth="true" duration={500}>
            <li className="flex items-center">
              Services
              <MdKeyboardArrowDown className="ml-1" />
            </li>
          </Link>
          <Link to="work" smooth="true" duration={500}>
            <li>Careers</li>
          </Link>
          <Link to="contact" smooth="true" duration={500}>
            <li>Conatct us</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
