import React, { useState } from "react";
import Container from "./Container";
import SectionContainer from "./sectionContainer";

function Faq({
  className=""
}) {
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
      question: "How do I get started with this app?",
      answer:
        "To get started with this app, simply sign up for an account and follow the on-screen instructions.",
    },
    {
      question: "What are the system requirements?",
      answer:
        "The system requirements for this app vary depending on the platform. Please refer to our documentation for detailed information.",
    },
    {
      question: "Can I use this app on multiple devices?",
      answer:
        "Yes, you can use this app on multiple devices. Simply log in to your account on each device.",
    },
    {
      question: "How do I reset my password?",
      answer:
        "To reset your password, go to the login page and click on the 'Forgot Password' link. Follow the instructions sent to your email.",
    },
    {
      question: "Where can I find help documentation?",
      answer:
        "You can find help documentation on our website's support page. If you need further assistance, please contact our support team.",
    },
  ];

  return (
    <div className={`${className}`}>
      <SectionContainer title="Frequently Asked Questions">
        <Container>
          <div className="mx-auto flex flex-col gap-[24px] w-full max-w-[600px]">
            {faqs.map((faq, index) => (
              <div className="rounded-[16px] p-[24px] bg-[#222222]" key={index}>
                <div
                  className="flex justify-between cursor-pointer"
                  onClick={() => toggleAccordion(index)}
                >
                  <p className="text-white text-[16px] font-semibold">{faq.question}</p>
                  <div className="text-white font-semibold text-[20px]">{accordionStates[index] ? "-" : "+"}</div>
                </div>
                {accordionStates[index] && <div className="mt-[20px]"><p className="text-[16px] font-normal text-white opacity-90 leading-[140%]">{faq.answer}</p></div>}
              </div>
            ))}
          </div>
        </Container>
      </SectionContainer>
    </div>
  );
}

export default Faq;
