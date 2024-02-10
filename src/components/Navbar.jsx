import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.svg";
import Container from "./Container";

const Navbar = () => {
  const links = [
    {
      name: "Our Speakers",
      url: "/"
    },
    {
      name: "Event Agenda",
      url: "/"
    },
    {
      name: "Our Partners",
      url: "/"
    },
  ]

  return (
    <div className="py-[32px] z-[100] w-full absolute">
      <Container className="flex items-center justify-between">
        <div className="flex items-center justify-start gap-[42px]">
          <div className="w-[74px] h-[74px]">
            <Link to="/">
              <img className="w-full h-full" src={logo} alt="" />
            </Link>
          </div>
          <div className="flex justify-start items-center gap-[32px]">
            {
              links?.map((eachLink, index) => <Link key={index} to={eachLink.url} className="text-[16px] text-white opacity-80 hover:opacity-100">{eachLink.name}</Link>)
            }
          </div>
        </div>

            <img src="https://i.pinimg.com/564x/1b/a2/e6/1ba2e6d1d4874546c70c91f1024e17fb.jpg" width={46} height={46} alt="Avatar" className="object-contain rounded-[6px]" />

        {/* <Link to="/signup">
          <button className="bg-primary px-6 py-3 cursor-pointer rounded-[8px] text-white">
            Get in touch
          </button>
        </Link> */}
      </Container>
    </div>
  );
};

export default Navbar;
