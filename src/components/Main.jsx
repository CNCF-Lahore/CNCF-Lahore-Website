import React, { useEffect, useState } from "react";
import requests from "../Requests";
import Container from "./Container";

const Main = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const titles = ["Kuberneters Community Days Lahore", "Get Chance of Networking", "Meet Industry Professionals"]; // Add your third word here
  const [title, setTitle] = useState(titles[titleIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
      const targetTitle = titles[titleIndex];
      const newTitle = Array.from(targetTitle);

      // Clear the title after 2 seconds
      setTimeout(() => {
        setTitle("");
      }, 1000);

      let timeoutIndex = 0;
      newTitle.forEach((letter) => {
        // Add a delay for each letter
        setTimeout(() => {
          setTitle((prevTitle) => prevTitle + letter);
        }, 1000 + timeoutIndex * 80); // 2 seconds delay + 0.08-second delay for each letter
        timeoutIndex++;
      });
    }, 1080);

    return () => {
      clearInterval(interval);
    };
  }, [titles, titleIndex]);

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
              network, and share knowledge on all things cloud native
            </p>
            <div className="mt-[32px] flex">
              <button className="bg-white text-black px-5 rounded-[6px] flex justify-center items-center gap-2 h-[48px] font-medium text-[18px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ticket"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M13 5v2"/><path d="M13 17v2"/><path d="M13 11v2"/></svg> Get Your <span>Tickets</span>
              </button>
              <button className="border text-white border-[#3a3838] bg-[#3a3838] px-5 ml-4 rounded-[6px] flex justify-center items-center gap-2 h-[48px] font-medium text-[18px]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="ltr-4z3qvp e1svuwfo1" data-name="CircleI" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z" fill="currentColor"></path></svg> More Info
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
