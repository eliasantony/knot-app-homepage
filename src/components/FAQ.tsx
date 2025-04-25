import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  { question: "What is Knot?", answer: "Knot is a private newsletter app designed to help you maintain meaningful connections with the important people in your life through shared updates and thoughtful interactions." },
  { question: "Is Knot free to use?", answer: "Yes, Knot offers a free plan with core features. We may introduce optional premium features in the future." },
  { question: "Can I create multiple groups?", answer: "Absolutely! You can create separate private groups for different circles, like family, close friends, or colleagues." },
  { question: "How is Knot different from social media?", answer: "Knot focuses on deeper, asynchronous communication within private groups, free from the noise and public nature of traditional social media feeds." },
  { question: "Is my data private?", answer: "Yes, privacy is a core principle. Your content is shared only within your private groups. Please refer to our Privacy Policy for details." },
];

const FAQ: React.FC = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="faq-container">
        <div className="faq-heading">
          <h1>
            <span>F</span>requently<br />
            <span>A</span>sked<br />
            <span>Q</span>uestions
          </h1>
        </div>
        <div className="faq-questions">
          {faqData.map((q, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`faq-item ${openQuestion === index ? "open" : ""}`}
              onClick={() => toggleQuestion(index)}
            >
              <h3 className="faq-question">
                {q.question}
                <span>{openQuestion === index ? '-' : '+'}</span>
              </h3>
              <AnimatePresence>
                {openQuestion === index && (
                  <motion.p
                    className="faq-answer"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {q.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;