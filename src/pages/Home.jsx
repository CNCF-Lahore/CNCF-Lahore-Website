import React from "react";

// Components
import Main from "../components/Main";
import Row from "../components/Row";
import Faq from "../components/faq";

// Mocks
import speakers from "../mocks/speakers";

const Home = () => {
  return (
    <>
      <Main />
      <Row rowID="1" title="Lists" data={speakers} className="mt-[5px]" />
      <Faq className="mt-[120px]" />
    </>
  );
};

export default Home;
