import React from 'react'
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";


const Sponsors = () => {
  return (
    <Splide
        options={{
          type: "loop",
          gap: "0",
          drag: false,
          arrows: false,
          pagination: false,
          perPage: 5,
          autoScroll: {
            pauseOnHover: false,
            pauseOnFocus: false,
            rewind: false,
            speed: 1,
          },
          breakpoints: {
            1550: { perPage: 7 },
            1280: { perPage: 5 },
            1024: { perPage: 4 },
            768: { perPage: 2 },
            380: { perPage: 1 },
          },
        }}
        extensions={{ AutoScroll }}
      >
        <SplideSlide
            className="flex flex-row items-center justify-between"
        >
            <div className="relative group inline-block w-[260px] bg-[#141414] border border-[#292929] rounded-[12px] m-1">
               <div className="w-full h-[140px] bg-[#222222]"></div>
            </div>
        </SplideSlide>
        <SplideSlide
            className="flex flex-row items-center justify-between"
        >
            <div className="relative group inline-block w-[260px] bg-[#141414] border border-[#292929] rounded-[12px] m-1">
               <div className="w-full h-[140px] bg-[#222222]"></div>
            </div>
        </SplideSlide>
        <SplideSlide
            className="flex flex-row items-center justify-between"
        >
            <div className="relative group inline-block w-[260px] bg-[#141414] border border-[#292929] rounded-[12px] m-1">
               <div className="w-full h-[140px] bg-[#222222]"></div>
            </div>
        </SplideSlide>
        <SplideSlide
            className="flex flex-row items-center justify-between"
        >
            <div className="relative group inline-block w-[260px] bg-[#141414] border border-[#292929] rounded-[12px] m-1">
               <div className="w-full h-[140px] bg-[#222222]"></div>
            </div>
        </SplideSlide>
        <SplideSlide
            className="flex flex-row items-center justify-between"
        >
            <div className="relative group inline-block w-[260px] bg-[#141414] border border-[#292929] rounded-[12px] m-1">
               <div className="w-full h-[140px] bg-[#222222]"></div>
            </div>
        </SplideSlide>
        <SplideSlide
            className="flex flex-row items-center justify-between"
        >
            <div className="relative group inline-block w-[260px] bg-[#141414] border border-[#292929] rounded-[12px] m-1">
               <div className="w-full h-[140px] bg-[#222222]"></div>
            </div>
        </SplideSlide>
        <SplideSlide
            className="flex flex-row items-center justify-between"
        >
            <div className="relative group inline-block w-[260px] bg-[#141414] border border-[#292929] rounded-[12px] m-1">
               <div className="w-full h-[140px] bg-[#222222]"></div>
            </div>
        </SplideSlide>
        <SplideSlide
            className="flex flex-row items-center justify-between"
        >
            <div className="relative group inline-block w-[260px] bg-[#141414] border border-[#292929] rounded-[12px] m-1">
               <div className="w-full h-[140px] bg-[#222222]"></div>
            </div>
        </SplideSlide>
        <SplideSlide
            className="flex flex-row items-center justify-between"
        >
            <div className="relative group inline-block w-[260px] bg-[#141414] border border-[#292929] rounded-[12px] m-1">
               <div className="w-full h-[140px] bg-[#222222]"></div>
            </div>
        </SplideSlide>
        <SplideSlide
            className="flex flex-row items-center justify-between"
        >
            <div className="relative group inline-block w-[260px] bg-[#141414] border border-[#292929] rounded-[12px] m-1">
               <div className="w-full h-[140px] bg-[#222222]"></div>
            </div>
        </SplideSlide>
      </Splide>
    // <Swiper
    //     spaceBetween={30}
    //     centeredSlides={true}
    //     autoplay={{
    //     delay: 2500,
    //     disableOnInteraction: false,
    //     }}
    //     pagination={{
    //     clickable: true,
    //     }}
    //     navigation={true}
    //     modules={[Autoplay]}
    //     className="mySwiper"
    //   >
    //       <SwiperSlide>
    //         <div className="relative group inline-block w-[260px] bg-[#141414] border border-[#292929] rounded-[12px] m-1">
    //           <div className="w-full h-[140px] bg-[#222222]"></div>
    //         </div>
    //       </SwiperSlide>
    //       <SwiperSlide>
    //         <div className="relative group inline-block w-[260px] bg-[#141414] border border-[#292929] rounded-[12px] m-1">
    //           <div className="w-full h-[140px] bg-[#222222]"></div>
    //         </div>
    //       </SwiperSlide>
    //       <SwiperSlide>
    //         <div className="relative group inline-block w-[260px] bg-[#141414] border border-[#292929] rounded-[12px] m-1">
    //           <div className="w-full h-[140px] bg-[#222222]"></div>
    //         </div>
    //       </SwiperSlide>
    //       <SwiperSlide>
    //         <div className="relative group inline-block w-[260px] bg-[#141414] border border-[#292929] rounded-[12px] m-1">
    //           <div className="w-full h-[140px] bg-[#222222]"></div>
    //         </div>
    //       </SwiperSlide>
    //       <SwiperSlide>
    //         <div className="relative group inline-block w-[260px] bg-[#141414] border border-[#292929] rounded-[12px] m-1">
    //           <div className="w-full h-[140px] bg-[#222222]"></div>
    //         </div>
    //       </SwiperSlide>
    //       <SwiperSlide>
    //         <div className="relative group inline-block w-[260px] bg-[#141414] border border-[#292929] rounded-[12px] m-1">
    //           <div className="w-full h-[140px] bg-[#222222]"></div>
    //         </div>
    //       </SwiperSlide>
     
    //   </Swiper>
  )
}

export default Sponsors