import React, { useState } from "react";
import { slides } from "../Data";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
const Slider = () => {
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

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="max-w-screen h-[388px] w-full m-auto   mb-2 relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded-sm bg-center bg-cover duration-500  "
      >
        <div
          className="absolute  left-6 md:w-2/3 w-[95%] top-4 h-[85%]  bg-black/50 p-4 text-white text-center content-center rounded-2xl animate-fade-x-in duation-500 "
          key={currentIndex}
        >
          <p className="text-2xl italic">{slides[currentIndex].text}</p>
        </div>
      </div>
      <div
        size={30}
        onClick={prevSlide}
        className="hidden group-hover:block   absolute top-[50%] -translate-x-0 translate-y-[-50%] rounded-full p-2 left-5 bg-black/20 text-white cursor-pointer"
      >
        <BsChevronCompactLeft />
      </div>
      <div
        size={30}
        onClick={nextSlide}
        className="hidden group-hover:block   absolute top-[50%] -translate-x-0 translate-y-[-50%] rounded-full p-2 right-5 bg-black/20 text-white cursor-pointer"
      >
        <BsChevronCompactRight />
      </div>
      <div className="flex  justify-center items-center w-full absolute bottom-0 py-2">
        {slides.map((slide, sI) => (
          <div
            className={`text-3xl cursor-pointer hover:text-white text-blue-200   border-white ${
              sI === currentIndex ? "text-blue-700" : "text-blue-300"
            }`}
            key={sI}
          >
            <RxDotFilled
              onClick={() => {
                goToSlide(sI);
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
