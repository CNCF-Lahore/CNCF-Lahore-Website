import React, { useState } from "react";
import SpeakerDetailModal from "./SpeakerDetailModal";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import SectionContainer from "./sectionContainer";
import logo from "./logo.svg";
const NoSlide = ({ className = "", title, data }) => {
  const hasData = data && data.length > 0;
  const [modalDisplay, setModalDisplay] = useState(false);

  return (
    <>
      {modalDisplay && (
        <SpeakerDetailModal onClose={() => setModalDisplay(false)} />
      )}
      <SectionContainer title={title}>
        {hasData ? (
          <Swiper
            style={{ marginTop: "10px" }}
            slidesPerView={4}
            spaceBetween={16}
            loop={true}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            {data.map((item, index) => (
              <SwiperSlide key={index} className="z-[-1] hover:z-[1000]">
                <div
                  className={`relative group inline-block ${
                    index + 1 >= 10 ? "w-[345px]" : "w-[314px]"
                  }  rounded-[12px] m-1`}
                >
                  <div className="container mx-auto p-8 relative">
                    <div className="relative flex items-center justify-between ">
                      <div
                        className="text-[#222222] text-[190px] font-bold z-0 transform-y-150 OurTeamSection"
                        style={{
                          WebkitTextStrokeWidth: "3px",
                          WebkitTextStrokeColor: "gray",
                          textShadow: "0px 0px 5px #aaaaaa",
                          lineHeight: "0.4",
                        }}
                      >
                        {index + 1}
                      </div>
                      <div
                        className={`ImgDiv absolute top-[-50px]  ${
                          index + 1 >= 10 ? "left-[140px]" : "left-[60px]"
                        } z-10`}
                      >
                        {item?.image ? (
                          <img
                            className="h-40 w-auto object-cover rounded-[7px] relative"
                            src={item.image}
                            alt={item.title}
                          />
                        ) : (
                          <div className="w-[100px] h-[180px] bg-[#222222] rounded-[7px]"></div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="bg-[#222222] text-center">
            <h2 className="p-2">Coming Soon</h2>
          </div>
        )}
      </SectionContainer>
    </>
  );
};

export default NoSlide;
