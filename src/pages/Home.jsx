import React from "react";

// Components
import Main from "../components/Main";
import Row from "../components/Row";
import Faq from "../components/faq";
import Footer from "../components/Footer";
import WhyJoin from "../components/WhyJoin";
import NoSlide from "../components/NoSlide";
// Mocks
import speakers from "../mocks/speakers";
import { tools } from "../mocks/tools";
import Sponsors from "../components/Sponsors";

const Home = () => {
  return (
    <>
      <Main />
      <Row
        rowID="1"
        title="Our Popular Tools"
        data={[]}
        className="mt-[90px]"
      />
      <WhyJoin />
      <div id="our-speakers">
        {/* <Row
          rowID="2"
          title="Our Speakers"
          data={[]}
          className="mt-[90px] speaker md:mt-[140px]"
        /> */}
        <NoSlide
          rowID="2"
          title="Our Speakers"
          data={speakers}
          className="mt-[90px] speaker md:mt-[140px] overflow-hidden"
        />
      </div>
      <div id="event-agenda">
        <Row
          rowID="3"
          title="Event Agenda"
          data={[]}
          className="mt-[90px] agenda md:mt-[140px]"
        />
      </div>
      <div id="sponsors">
        <Sponsors className="mt-[90px] md:mt-[140px]" />
      </div>

      <Faq className="mt-[90px] md:mt-[120px]" />
      <Footer className="mt-[90px] md:mt-0" />
    </>
  );
};

export default Home;
