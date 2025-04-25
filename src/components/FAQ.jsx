import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { Fade } from 'react-reveal';

const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const questions = [
    {
      question: "What is FoodFellas?",
      answer: "FoodFellas is your AI-powered recipe companion, designed to help you discover, create, and share amazing recipes. Whether you're a beginner or a seasoned chef, FoodFellas makes cooking fun and effortless."
    },
    {
      question: "Is the app free?",
      answer: "The app is free to use at launch. However, a subscription might be introduced in the future, priced between €5 and €10 per year to support ongoing development and maintenance."
    },
    {
      question: "Can I share my own recipes?",
      answer: "Absolutely! FoodFellas encourages users to share their culinary creations with the community. Inspire others by uploading your favorite recipes and exploring a world of flavors shared by others."
    },
    {
      question: "How does the AI work?",
      answer: "Our AI helps you find recipes based on your preferences, ingredients, or even a photo of your dish. It’s like having a personal chef and assistant at your fingertips!"
    },
    {
      question: "Which platforms is FoodFellas available on?",
      answer: "FoodFellas will be available on both iOS and Android. Download it soon from the App Store or Google Play and start your culinary journey!"
    },
    {
      question: "Can I save recipes for later?",
      answer: "Yes, you can save your favorite recipes into collections, making it easy to organize and access them anytime you need inspiration."
    },
  ];

  return (
    <section id="faq" className="faq-section">
      <div className="faq-container">
        <div className="faq-heading">
          <h1>
            <span className="fq-f">F</span>requently <br/>
            <span className="fq-a">A</span>sked <br />
            <span className="fq-q">Q</span>uestions
          </h1>
        </div>
        <div className="faq-questions">
          {questions.map((q, index) => (
            <Fade key={index} bottom>
              <div
                key={index}
                className={`faq-item ${openQuestion === index ? "open" : ""}`}
                onClick={() => toggleQuestion(index)}
              >
                <h3 className="faq-question">
                  {q.question}
                  {openQuestion === index ? <FaChevronUp /> : <FaChevronDown />}
                </h3>
                <Fade
                  when={openQuestion === index}
                  duration={300}
                  collapse
                >
                  <p className="faq-answer">{q.answer}</p>
                </Fade>
              </div>
            </ Fade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;