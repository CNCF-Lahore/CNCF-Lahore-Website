import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./logo.svg";
import Container from "./Container";
const Navbar = () => {
  const links = [
    {
      name: "Our Speakers",
      url: "/",
    },
    {
      name: "Event Agenda",
      url: "/",
    },
    {
      name: "Our Partners",
      url: "/",
    },
    {
      name: "Code of Conduct",
      url: "/CodeofConduct",
    },
  ];

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="py-[32px] z-[100] w-full absolute">
      <Container className="flex items-center justify-between">
        <div className="flex items-center justify-start gap-[42px]">
          <div className="w-[64px] h-[64px] md:w-[74px] md:h-[74px]">
            <Link to="/">
              <img className="w-full h-full" src={logo} alt="" />
            </Link>
          </div>
          <div className="relative block lg:hidden">
            <div
              className="text-white flex items-center gap-1"
              onClick={() => setToggleMenu(!toggleMenu)}
            >
              <p className="text-white text-[16px]">Menu</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-chevron-down"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>
            {toggleMenu && (
              <div className="absolute top-[36px] w-[240px] py-[10px] bg-black border-t-[1px] border-white border-solid flex flex-col justify-center items-start">
                {links?.map((eachLink, index) => (
                  <Link
                    key={index}
                    to={eachLink.url}
                    className="text-[16px] text-white opacity-80 hover:opacity-100 px-[20px] py-[20px]"
                  >
                    {eachLink.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <div className="hidden lg:flex justify-start items-center gap-[32px]">
            {links?.map((eachLink, index) => (
              <Link
                key={index}
                to={eachLink.url}
                className="text-[16px] text-white opacity-80 hover:opacity-100"
              >
                {eachLink.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center gap-[20px] md:gap-[40px]">
          <div className="hidden  justify-center items-center gap-[20px] md:gap-[40px] md:flex">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-search"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-bell"
            >
              <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
              <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
            </svg>
          </div>

          <div className="flex justify-center items-center gap-[10px]">
            <img
              src="https://i.pinimg.com/564x/1b/a2/e6/1ba2e6d1d4874546c70c91f1024e17fb.jpg"
              width={46}
              height={46}
              alt="Avatar"
              className="object-contain rounded-[6px] w-[42px] h-[42px] md:w-[44px] md:h-[44px]"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-chevron-down"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
