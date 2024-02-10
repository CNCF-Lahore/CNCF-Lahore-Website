import React, { useEffect, useState, useMemo } from "react";
// Removed unused import: import requests from "../Requests";
import Container from "./Container";

const Main = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const titles = useMemo(() => [
    "Kuberneters Community Days Lahore", 
    "Get Chance of Networking", 
    "Meet Industry Professionals"
  ], []); // Use useMemo to initialize titles
  const [title, setTitle] = useState(titles[titleIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
      // Correctly access the current title based on updated titleIndex
      const targetTitle = titles[(prevIndex + 1) % titles.length];
      const newTitle = Array.from(targetTitle);

      // Clear the title after 1 second
      setTimeout(() => {
        setTitle("");
      }, 1000);

      let timeoutIndex = 0;
      newTitle.forEach((letter) => {
        // Add a delay for each letter
        setTimeout(() => {
          setTitle((prevTitle) => prevTitle + letter);
        }, 1000 + timeoutIndex * 80); // 1 second delay + 0.08-second delay for each letter
        timeoutIndex++;
      });
    }, titles.length * 1080); // Adjusted interval duration

    return () => {
      clearInterval(interval);
    };
  // titleIndex is the only dependency now
  }, [titleIndex]);

  return (
    <>
      <div className="relative w-full h-[700px] text-white">
        <div className="w-full h-full flex items-center">
          <div
            className="absolute w-full h-[700px] bg-gradient-to-r from-[#000]"
            style={{
              filter: "drop-shadow(2px 4px 6px black)",boxShadow: "rgb(0 0 0) 0px -20px 20px inset",
            }}
          ></div>
          <img
            className="absolute z-[-1] w-full h-full object-cover"
            src="https://www.opti.ro/images/new-post/medium_long-tech-conferences.jpg"
            alt="KCD Lahore"
          />
          <Container className="mt-[96px] relative z-[1]">
            <h1 className="text-3xl md:text-5xl font-semibold max-w-[600px] min-h-[96px]">
              {title}<span className="ml-[12px] mt-[6px] w-[24px] h-[40px] bg-[rgba(255,255,255,1)] absolute"></span>
            </h1>
            <p className="text-white text-[18px] max-w-[600px] mt-[24px] leading-[140%] shadow-md">
              Experience the power of community at the Kubernetes Community Days
              in Lahore! When a diverse group of experts comes together to learn,
              network, and share knowledge on all things cloud native.
            </p>
            <div className="mt-[32px] flex">
              <button className="bg-white text-black px-5 rounded-[6px] flex justify-center items-center gap-2 h-[48px] font-medium text-[18px]">
                {/* SVG and button content */}
                Get Your Tickets
              </button>
              <button className="border text-white border-[#3a3838] bg-[#3a3838] px-5 ml-4 rounded-[6px] flex justify-center items-center gap-2 h-[48px] font-medium text-[18px]">
                {/* SVG and button content */}
                More Info
              </button>
            </div>
          </Container>
          <div className="bg-[#000000b3] py-[14px] px-[24px] border-l-[4px] border-white absolute right-0 top-[50%] transform translate-y-[-50%]">Need any help?</div>
        </div>
      </div>
    </>
  );
};

export default Main;
