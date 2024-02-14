import React from "react";
import Container from "./Container";
import { Link } from "react-router-dom";
import logo from "./logo.svg";

function About({ className = "" }) {
  return (
    <div className={`${className}`}>
      <Container className="flex flex-col md:flex-row justify-between items-start gap-[24px] md:gap-0">
        <div className="flex flex-col gap-4">
          <h1 className="text-white font-bold md:text-5xl">About KCD Lahore</h1>
                <div className="w-[64px] h-[64px] md:w-[74px] md:h-[74px] ">
            <Link to="/">
              <img className="" src={logo} alt="" />
            </Link>
          </div>
        </div>
        <div className="hidden md:block bg-gray-300 w-2 h-full my-4" ></div>
        <div className="flex flex-col gap-[24px] w-full max-w-[600px] ">
          <p className="text-[16px] opacity-90 ">
            Kubernetes Community Days Lahore (KCD Lahore) 2024 is a
            community-organized event, with the support of the Cloud Native
            Computing Foundation (CNCF), aimed at fostering the growth and
            sustainability of the Kubernetes and cloud-native community. This
            remarkable gathering brings together adopters and technologists from
            open source and cloud-native communities, providing valuable
            opportunities for education, collaboration, and networking. Pakistan
            comprises a growing group of Cloud Native enthusiasts, students,
            professionals, and technology leaders. KCD Lahore serves as a
            platform for this community to come together, connecting with other
            tech communities in neighboring countries. Attendees are presented
            with the unique chance to experience conferences like KubeCon /
            CloudNativeCon alongside the rich cultural heritage of Pakistan.
          </p>
        </div>
      </Container>
    </div>
  );
}

export default About;
