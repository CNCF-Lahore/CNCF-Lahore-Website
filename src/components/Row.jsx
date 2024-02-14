import React, { useState } from "react";

import SpeakerDetailModal from "./SpeakerDetailModal";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import Container from "./Container";

const Row = ({ className="", title, data }) => {
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

  const [modalDisplay, setModalDisplay] = useState(false);

  return (
    <>
      {modalDisplay && (
        <SpeakerDetailModal onClose={() => setModalDisplay(false)} />
      )}
      <Container className={className}>
        <h2 className="text-white font-medium md:text-3xl z-[-1] relative">{title}</h2>
      </Container>
      <Swiper
        style={{
          marginTop: "20px",
        }}
        slidesPerView={6}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {data.map((item, index) => (
          <SwiperSlide className="z-[-1] hover:z-[1000]">
            <div className="relative group inline-block w-[314px] bg-[#141414] border border-[#292929] rounded-[12px] m-1">
              {
                item?.image ? (
                  <img
                className="hoveredCard mt-2 w-fit h-[180px] object-contain block rounded-[7px] relative mx-auto"
                src={item.image}
                alt={item.title}
              />
                ) : (
                  <div className="w-full h-[180px] bg-[#222222]"></div>
                )
              }
              <div
                key={index}
                className={`hidden group-hover:block w-[314px] absolute top-0 scale-[1] transition-all duration-300 ease-in-out ${
                  contentToShow[index] &&
                  "  cursor-pointer p-2 transform  hover:scale-[1.2] overflow-hidden border border-[#292929] rounded-[12px] bg-[#141414] hover:z-[10] group"
                }`}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                {
                item?.image ? (
                  <img
                className="hoveredCard mt-2 w-fit h-[180px] object-contain block rounded-[7px] relative mx-auto"
                src={item.image}
                alt={item.title}
              />
                ) : (
                  <div className="w-full h-[180px] bg-[#222222]"></div>
                )
              }
                {contentToShow[index] && (
                  <div className="mt-2 p-[18px] opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-300">
                    <div className="flex justify-between items-center">
                      <div className="w-fit flex justify-between items-center gap-3">
                        <button
                          onClick={() => setModalDisplay(true)}
                          className="rounded-full w-[32px] h-[32px] bg-white overflow-hidden flex justify-center items-center text-[12px] text-black"
                        >
                          <svg
                            className=""
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
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
                        </button>
                        <button
                          onClick={() => setModalDisplay(true)}
                          className="rounded-full w-[32px] h-[32px] bg-[#222222] overflow-hidden flex justify-center items-center text-[12px] text-black border border-white"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                        </button>
                        <button
                          onClick={() => setModalDisplay(true)}
                          className="rounded-full w-[32px] h-[32px] bg-[#222222] overflow-hidden flex justify-center items-center text-[12px] text-black border border-white"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-thumbs-up"><path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"/></svg>
                        </button>
                      </div>
                      <button
                        onClick={() => setModalDisplay(true)}
                        className="rounded-full w-[32px] h-[32px] bg-[#fff] overflow-hidden flex justify-center items-center text-[12px] text-black border border-white"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
                      </button>
                    </div>

                    <div className="mt-5 flex flex-col gap-3">
                      <div className="flex justify-start items-center gap-4">
                        <div className="flex justify-start items-center gap-2">
                          <p className="text-[12px] text-[#81d855] font-light">
                            {item.title}
                          </p>
                          <div className="px-[8px] h-[18px] border-[2px] border-solid border-[#222222] text-[12px] font-light">18</div>
                        </div>
                        <div className="flex justify-start items-center gap-2">
                          <p className="text-[12px] text-[#757575] font-light">
                            2h 18m
                          </p>
                          <div className="px-[8px] h-[18px] border-[2px] border-solid border-[#222222] text-[12px] font-light">HD</div>
                        </div>
                      </div>
                      <div className="flex gap-3 items-center">
                        {["Cricket", "Coding", "Busienss"].map(
                          (item, index) => (
                            <>
                              <p className="text-[12px] text-white font-semibold">
                                {item}
                              </p>
                              {index !== 2 && (
                                <div className="w-[4px] h-[4px] bg-[rgba(255,255,255,0.4)] mt-[2px] rounded-full"></div>
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
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Row;
