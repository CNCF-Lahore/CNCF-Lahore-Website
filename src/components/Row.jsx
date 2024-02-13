import React, { useState } from "react";
import Container from "./Container";

import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import SpeakerDetailModal from "./SpeakerDetailModal";

const Row = ({ title, data, rowID, className = "" }) => {
  const slideLeft = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  const [contentToShow, setContentToShow] = useState(
    Array(data.length).fill(false)
  );

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

  console.log("isHovered", isHovered);

  return (
    <>
      {modalDisplay && (
        <SpeakerDetailModal onClose={() => setModalDisplay(false)} />
      )}
      <div className={className}>
        <Container>
          <h2 className="text-white font-bold md:text-3xl">{title}</h2>
        </Container>
        <div
          className={` mt-[42px] relative flex items-center group`}
          onMouseEnter={handleSliderMouseEnter}
          onMouseLeave={handleSliderMouseLeave}
        >
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
              <div className="relative group inline-block w-[314px] bg-[#141414] border border-[#292929] rounded-[12px] m-1">
                <img
                  className="hoveredCard mt-2 w-fit h-[180px] object-contain block rounded-[7px] relative mx-auto"
                  src={item.image}
                  alt={item.title}
                />
                <div
                  key={index}
                  className={`hidden group-hover:block w-[314px] absolute top-0 scale-[1] transition-all duration-300 ease-in-out ${
                    contentToShow[index] &&
                    "  cursor-pointer p-2 transform  hover:scale-[1.2] overflow-hidden border border-[#292929] rounded-[12px] bg-[#141414] hover:z-[10] group"
                  }`}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                >
                  <img
                    className="mt-2 w-fit h-[180px] object-contain block rounded-[7px] relative mx-auto"
                    src={item.image}
                    alt={item.title}
                  />
                  {contentToShow[index] && (
                    <div className="mt-2 p-[18px] opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-300">
                      <div className="flex justify-between items-center">
                        <button
                          onClick={() => setModalDisplay(true)}
                          className="rounded-full w-[auto] h-[28px] bg-white overflow-hidden flex justify-center items-center text-[12px] text-black pr-[12px] pl-[4px]"
                        >
                          <svg
                            className=""
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#000"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="lucide lucide-badge-info"
                          >
                            <line x1="12" x2="12" y1="16" y2="12" />
                            <line x1="12" x2="12.01" y1="8" y2="8" />
                          </svg>
                          More Info
                        </button>
                      </div>

                      <div className="mt-4 flex flex-col gap-2">
                        <p className="text-[14px] text-[#4ebe16] font-semibold">
                          {item.title}
                        </p>
                        <div className="flex gap-3 items-center">
                          {["Cricket", "Coding", "Busienss"].map(
                            (item, index) => (
                              <>
                                <p className="text-[12px] text-white font-semibold">
                                  {item}
                                </p>
                                {index !== 2 && (
                                  <div className="w-[5px] h-[5px] bg-[rgba(255,255,255,0.4)] mt-[2px] rounded-full"></div>
                                )}
                              </>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
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
