import React from "react";
import logo from "./logo.svg";
// Components
import { Link } from "react-router-dom";
import Container from "./Container";

const Footer = ({ className = "" }) => {
  const socialLinks = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/CodieshubPK/",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/raheemedawar",
    },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/company/codieshub/mycompany/verification/",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/codieshub/",
    },
  ];

  const navLinks = [
    {
      name: "About",
      url: "/about",
    },
    {
      name: "Contact",
      url: "/contact",
    },
    {
      name: "Career",
      url: "/career",
    },
    {
      name: "Pricing",
      url: "/pricing",
    },
  ];

  return (
    <footer
      className={`${className} pt-[50px] lg:pt-0 border-t border-[#4F4F4F] mt-[2vw] md:mt-[1vw]`}
    >
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 lg:flex flex-row justify-between items-start lg:items-center">
          <div className="max-w-[270px] xl:max-w-[370px] flex flex-col gap-[20px] xxl:gap-[32px]">
            <div className="w-[74px] h-[74px]">
              <Link to="/">
                <img className="w-full h-full" src={logo} alt="" />
              </Link>
            </div>
            <p className="text-[14px] sm:text-[16px] font-normal leading-[26px] text-white">
              Experience the power of community at the Kubernetes Community Days
              in Lahore!
            </p>
          </div>
          <div className="flex-wrap justify-self-end max-w-[100%] md:max-w-[200px] xl:max-w-[244px] w-full flex flex-row">
            {socialLinks.map((link, index) => (
              <Link
                target="_blank"
                href={link.url}
                key={index}
                className={`
                hover:bg-[#171717]
                  h-[68px]
                  w-[50%] md:w-full xl:h-[78px] text-[14px]
                  xxl:h-[96px] xxl:text-[16px]
                  border-t border-l border-r border-[#4F4F4F] 
                  text-white uppercase flex justify-center items-center 
                  border-b lg:border-b-[0px]
                `}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </Container>
      <div className="mt-[30px] lg:mt-[0] md:border-t border-[#4F4F4F]">
        <Container>
          <div className="flex flex-col-reverse gap-y-[40px] lg:flex-row justify-between items-center py-[30px]">
            <p className="text-[12px] sm:text-[14px] md:text-[16px] xxl:text-[18px] text-white leading-[20px]">
              © 2023 | Alrights reserved by Codieshub
            </p>
            <div className="flex gap-[50px]">
              {navLinks.map((l, i) => (
                <Link
                  className="text-[12px] sm:text-[14px] md:text-[16px] xxl:text-[18px] text-white leading-[20px]"
                  href={l.url}
                  key={i}
                >
                  {l.name}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
