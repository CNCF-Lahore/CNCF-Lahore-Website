import React from 'react'
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";


const Sponsors = () => {
  return (
    <Splide
        options={{
          type: "loop",
          gap: "20px",
          drag: false,
          arrows: false,
          pagination: false,
          perPage: 12,
          autoScroll: {
            pauseOnHover: false,
            pauseOnFocus: false,
            rewind: false,
            speed: 0.4,
          },
          breakpoints: {
            1550: { perPage: 12 },
            1280: { perPage: 10 },
            1024: { perPage: 4 },
            768: { perPage: 2 },
            380: { perPage: 1 },
          },
        }}
        extensions={{ AutoScroll }}
      >
        {
            ["/sponsors/1.png","/sponsors/2.png","/sponsors/3.png","/sponsors/4.png","/sponsors/5.png"].map((item, i) => (
                <SplideSlide
                    className="flex flex-row items-center justify-between"
                >
                    <img src={item} alt="Sponsor" width="160px" height="80px" className="object-contain" />
                </SplideSlide>
            ))
        }
    </Splide>
  )
}

export default Sponsors