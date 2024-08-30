import React, { useState } from "react";
import "./helpdesk.css";
// import icon from "./chatbot.png";
import Sidebar from '../components/Sidebar.js'

const faqs = [
  {
    question: "lorem ipsum , shig , isibdibicb?",
    answer: "HII i am working ",
  },
  {
    question: "lorem ipsum , shig , isibdibicb?",
    answer: "lorem20",
  },
  {
    question: "lorem ipsum , shig , isibdibicb?",
    answer: "lorem20",
  },
];

function HelpdeskContact() {
  const [showAnswer, setShowAnswer] = useState({});

  const toggleAnswer = (index) => {
    setShowAnswer((prevShowAnswer) => ({
      ...prevShowAnswer,
      [index]: !prevShowAnswer[index],
    }));
  };

  return (
    <>
    <Sidebar />
    <div className="helpdesk-contact-container">
      <div className="helpdesk-section">
        <h2>Helpdesk</h2>
        <h3>FAQs</h3>
        <div className="faqs-container">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <p onClick={() => toggleAnswer(index)}>{faq.question}</p>
              {showAnswer[index] && <p>{faq.answer}</p>}
              <button onClick={() => toggleAnswer(index)}>+</button>
            </div>
          ))}
        </div>
      </div>

      <div className="contact-section">
        <h3>Contact</h3>
        <div className="contact-info">
          <p>
            <i className="fas fa-envelope"></i> : parakh@aicte-india.org
          </p>
          <p>
            <i className="fas fa-phone"></i> : (011)29581333, 29581338, 29581342
          </p>
        </div>
        <div className="bot-icon">
          {/* <img src={icon} alt="Chatbot Icon" /> */}
        </div>
      </div>
    </div>

    </>
  );
}

export default HelpdeskContact;