import React, { useState } from "react";
import Container from "./Container"

import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import SpeakerDetailModal from "./SpeakerDetailModal";

const Row = ({ title, data, rowID, className="" }) => {
  const slideLeft = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  
  const slideRight = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  const [contentToShow, setContentToShow] = useState(Array(data.length).fill(false));

  const handleMouseEnter = (index) => {
    setContentToShow((prev) => {
      const newState = [...prev];
      newState[index] = true;
      return newState;
    });
  };

  const handleMouseLeave = (index) => {
    setContentToShow((prev) => {
      const newState = [...prev];
      newState[index] = false;
      return newState;
    });
  };
  const [isHovered, setIsHovered] = useState(false);

  const handleSliderMouseEnter = () => {
    setIsHovered(true);
  };

  const handleSliderMouseLeave = () => {
    setIsHovered(false);
  };

  const [modalDisplay, setModalDisplay] = useState(false);

    console.log("isHovered", isHovered)

  return (
    <>
    {
      modalDisplay && (
        <SpeakerDetailModal onClose={() => setModalDisplay(false)} />
      )
    }
    <div className={className}>
      <Container>
        <h2 className="text-white font-bold md:text-3xl">{title}</h2>
      </Container>
      <div className={`mt-[42px] relative flex items-center group`} onMouseEnter={handleSliderMouseEnter} onMouseLeave={handleSliderMouseLeave}>
        <MdChevronLeft
          onClick={slideLeft}
          className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-20 hidden group-hover:block"
          size={40}
        />
        <div
          id={"slider" + rowID}
          className="w-full h-full whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {data.map((item, index) => (
            <div
              key={index}
              className="w-[314px] hover:absolute scale-[1] inline-block cursor-pointer relative p-2 transform transition-all duration-300 ease-in-out hover:scale-[1.2] overflow-hidden border border-[#292929] rounded-[12px] m-1 bg-[#141414] hover:z-[10] group"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <img
                className="mt-2 w-fit h-[180px] object-contain block rounded-[7px] relative mx-auto"
                src={item.image}
                alt={item.title}
              />
            {
              contentToShow[index] && (
                <div className="mt-4 p-[18px] opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-300">
                <div className="flex justify-between items-center">
                  <button className="bg-white rounded-full w-[38px] h-[38px] flex justify-center items-center">
                  <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="ltr-4z3qvp e1svuwfo1" data-name="Play" aria-hidden="true"><path d="M5 2.69127C5 1.93067 5.81547 1.44851 6.48192 1.81506L23.4069 11.1238C24.0977 11.5037 24.0977 12.4963 23.4069 12.8762L6.48192 22.1849C5.81546 22.5515 5 22.0693 5 21.3087V2.69127Z" fill="#000"></path></svg>
                  </button>
                  <button onMouseEnter={() => setModalDisplay(true)} className="bg-white rounded-full w-[38px] h-[38px] flex justify-center items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
                  </button>
                </div>

                <div className="mt-4 flex flex-col gap-2">
                  <p className="text-[16px] text-[#4ebe16] font-semibold">{item.title}</p>
                  <div className="flex gap-3 items-center">
                    {["Cricket", "Coding", "Busienss"].map((item, index) => (
                      <>
                      <p className="text-[14px] text-white font-semibold">{item}</p>
                      {index !== 2 && <div className="w-[5px] h-[5px] bg-[rgba(255,255,255,0.4)] mt-[2px] rounded-full"></div>}
                      </>
                    ))}
                  </div>
                </div>
              </div>
              )
            }
            </div>
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-20 hidden group-hover:block"
          size={40}
        />
      </div>
    </div>
    </>
  );
};

export default Row;
