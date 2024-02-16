import React, { useState } from "react";
import SpeakerDetailModal from "./SpeakerDetailModal";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import Container from "./Container";

const NoSlide = ({ className = "", title, data }) => {
  const hasData = data && data.length > 0;
  const [modalDisplay, setModalDisplay] = useState(false);

  return (
    <>
      {modalDisplay && (
        <SpeakerDetailModal onClose={() => setModalDisplay(false)} />
      )}
      <Container className={className}>
        <h2 className="text-white font-medium md:text-3xl z-[-1] relative">
          {title}
        </h2>
      </Container>
      {hasData ? (
        <Swiper
          style={{
            marginTop: "20px",
          }}
          slidesPerView={6}
          spaceBetween={16}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <div>
            {data.map((item, index) => (
              <SwiperSlide key={index} className="z-[-1] hover:z-[1000]">
                <div className="relative group inline-block w-[314px] border border-[#292929] rounded-[12px] m-1">
                  <div className="container mx-auto p-8 relative ">
                    <div className="relative flex items-center justify-between ">
                      <div
                        className="text-[#b20710] text-9xl font-bold z-0 transform-y-150"
                        style={{
                          textShadow:
                            "0 0 5px #fff, 0 0 5px #fff, 0 0 5px #fff, 0 0 5px #fff",
                        }}
                      >
                        {index + 1}
                      </div>
                      <div
                        className={`ImgDiv absolute top-[-45px] ${
                          index + 1 >= 10 ? "left-[120px]" : "left-[48px]"
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
          </div>
        </Swiper>
      ) : (
        <div className="bg-[#222222] text-center m-2">
          <h2 className="p-2">Coming Soon</h2>
        </div>
      )}
    </>
  );
};

export default NoSlide;
