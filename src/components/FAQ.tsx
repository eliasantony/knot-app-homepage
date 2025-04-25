import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    question: "What is Knot?",
    answer: "Knot is a private newsletter app made for close circles. It helps you stay connected with friends and family by sharing updates, asking questions, and reflecting together—without the chaos of social media."
  },
  {
    question: "Is Knot free to use?",
    answer: "Yes! You can use Knot for free with all the core features. We might add optional premium features down the road, but the heart of Knot will stay accessible."
  },
  {
    question: "Can I create multiple groups?",
    answer: "Definitely. Create as many groups as you like—for your family, your best friends, your study group, or any circle you want to keep close."
  },
  {
    question: "How is Knot different from social media?",
    answer: "Knot is slower, more intentional. Instead of fast feeds and endless scrolling, it's about meaningful updates within private, trusted spaces. No likes, no followers—just connection."
  },
  {
    question: "Is my data private?",
    answer: "Absolutely. What you share stays within your private groups. We take privacy seriously—check out our Privacy Policy if you’d like the full details."
  },
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