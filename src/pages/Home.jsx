import React from "react";

// Components
import Main from "../components/Main";
import Row from "../components/Row";
import Faq from "../components/faq";
import Footer from "../components/Footer";
import NoSlide from "../components/NoSlide";
// Mocks
import speakers from "../mocks/speakers";
import { tools } from "../mocks/tools";
import Sponsors from "../components/Sponsors";

const Home = () => {
  return (
    <>
      <Main />
      <Row rowID="1" title="Our Popular Tools" data={tools} className="mt-[64px]" />
      <div id="our-speakers">
        <NoSlide
          rowID="2"
          title="Our Speakers"
          data={speakers}
          className="mt-[90px] speaker md:mt-[140px] overflow-hidden"
        />
      </div>
      <Sponsors className="mt-[140px]" />
      <Faq className="mt-[120px]" />
      <Footer className="mt-[64px] md:mt-0" />
    </>
  );
};

export default Home;
