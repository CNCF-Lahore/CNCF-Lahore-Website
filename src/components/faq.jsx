import React, { useState } from "react";
import Container from "./Container";
import SectionContainer from "./sectionContainer";

function Faq({ className = "" }) {
  const [accordionStates, setAccordionStates] = useState(
    new Array(5).fill(false)
  );

  const toggleAccordion = (index) => {
    const newAccordionStates = accordionStates.map((state, i) =>
      i === index ? !state : false
    );
    setAccordionStates(newAccordionStates);
  };

  const faqs = [
    {
      question: "What is KCD?",
      answer:
        "KCD stands for Kubernetes Community Days. Its a community-organized event that aims to foster the growth and sustainability of the Kubernetes and cloud-native community, with the support of the Cloud Native Computing Foundation (CNCF).",
    },
    {
      question: "When and where is KCD Lahore 2024 being held?",
      answer:
        "The event will be held at Trace Expert City in Lahore on the 9th of September.",
    },
    {
      question: "Will there be pizza at the event?",
      answer:
        "Come and find out ;) But remember, be hungry for knowledge not for food!",
    },
    {
      question: "Why its worth to attend?",
      answer:
        "By joining the flagship event of the Kubernetes community, you will get the opportunity to learn from the best and brightest in the cloud native community. You will also get the chance to network with the community members and experts in the field.",
    },
    {
      question:
        "Do we tolerate any kind of gender discrimination or harassment?",
      answer:
        "Absolutely not! We are a community that respects and values everyone. Refer our code of conduct for more information.",
    },
  ];

  return (
    <div className={`${className}`}>
      <SectionContainer title="Frequently Asked Questions">
        <Container>
          <p className="w-[100%] md:w-[40vw] mb-10 text-lg ">
            Answers to all your BIG questions about KCD Lahore 2024. Still have
            a question? Feel free to reach out to us!
          </p>
          <div className="mx-auto flex flex-col gap-[24px] w-full max-w-[600px]">
            {faqs.map((faq, index) => (
              <div className="rounded-[16px] p-[24px] bg-[#222222]" key={index}>
                <div
                  className="flex justify-between cursor-pointer"
                  onClick={() => toggleAccordion(index)}
                >
                  <p className="text-white text-[16px] font-semibold">
                    {faq.question}
                  </p>
                  <div className="text-white font-semibold text-[20px]">
                    {accordionStates[index] ? "-" : "+"}
                  </div>
                </div>
                {accordionStates[index] && (
                  <div className="mt-[20px]">
                    <p className="text-[16px] font-normal text-white opacity-90 leading-[140%]">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </Container>
      </SectionContainer>
    </div>
  );
}

export default Faq;
