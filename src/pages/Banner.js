import React, { useState } from "react";
import bgImage from "../assets/banner_02.jpg";
import larrow from "../assets/left arrow.png";
import rarrow from "../assets/arrow right.png";
import bgImage2 from "../assets/building-material_03.jpg";
import bgImage3 from "../assets/about-us_03.jpg";

function Banner() {
  const slides = [
    {
      url: bgImage,
    },
    {
      url: bgImage3,
    },
    {
      url: bgImage2,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div
      name="home"
      className="flex justify-between w-[full] bg-cover bg-center h-[600px] duration-500 relative"
      style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
    >
      <div
        className="hidden w-10 h-10 rounded-md bg-[#162c53] md:flex items-center justify-center absolute top-[45%] left-10 transform -translate-y-1/2 cursor-pointer "
        onClick={prevSlide}
      >
        <img src={larrow} className="w-3 h-5" />
      </div>
      <div
        className="hidden w-10 h-10 rounded-md bg-[#162c53] md:flex items-center justify-center absolute top-[45%] right-10 transform -translate-y-1/2 cursor-pointer"
        onClick={nextSlide}
      >
        <img src={rarrow} className="w-3 h-5" />
      </div>
      <div className="max-w-[800px] flex flex-col justify-center ml-5 sm:mx-[27%]">
        <div className="">
          <h1 className="text-xl sm:text-2xl text-[#63c2da] font-bold">OUR SERVICES</h1>
          <h1 className="text-3xl sm:text-5xl tracking-wide text-white font-extrabold my-3">
            Building Materials
          </h1>
          <p className="text-white text-lg ">
            We Distributes & Represents major Brands
          </p>
          <button className="bg-[#162c53] sm:p-2 p-1 sm:my-3 text-xs sm:text-base rounded-sm sm:w-32 w-20 text-white font-header">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
