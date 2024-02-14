import React from "react";

// Components
import Main from "../components/Main";
import Row from "../components/Row";
import Faq from "../components/faq";
import Footer from "../components/Footer";

// Mocks
import speakers from "../mocks/speakers";
import { tools } from "../mocks/tools";
import Sponsors from "../components/Sponsors";

const Home = () => {
  return (
    <>
      <Main />
      <Sponsors />
      <Row
        rowID="1"
        title="Our Popular Tools"
        data={tools}
        className="mt-[140px]"
      />
      <Row
        rowID="1"
        title="Our Speakers"
        data={speakers}
        className="mt-[140px] "
      />
      <Faq className="mt-[120px]" />
      <Footer />
    </>
  );
};

export default Home;
