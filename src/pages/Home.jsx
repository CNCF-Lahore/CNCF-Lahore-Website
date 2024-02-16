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
import WhyJoin from "../components/WhyJoin";

const Home = () => {
  return (
    <main className="flex flex-col gap-[120px] w-full relative overflow-hidden">
      <Main />

      <Row
        rowID="1"
        title="Our Popular Tools"
        data={tools}
      />

      <Row
        rowID="2"
        title="Our Speakers"
        data={speakers}
        className="overflow-hidden"
      />

      <NoSlide
        rowID="2"
        title="Our Team"
        data={speakers}
        className="overflow-hidden"
      />

      <Sponsors />

      <WhyJoin />

      <Faq />

      <Footer />
    </main>
  );
};

export default Home;
