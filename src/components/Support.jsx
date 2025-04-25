import React from 'react';
import { useNavigate } from 'react-router-dom';

function Support() {
  const navigate = useNavigate();

  const goToFAQ = () => {
    navigate("/#faq"); // Navigate to home and scroll to FAQ
    setTimeout(() => {
      const faqElement = document.getElementById("faq");
      if (faqElement) {
        faqElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>FoodFellas Support</h1>
      <p>If you have any questions, feel free to reach out:</p>
      <p>Email: <a href="mailto:support@foodfellas.app">support@foodfellas.app</a></p>
      <p>Or visit our <a href="#faq" onClick={(e) => { e.preventDefault(); goToFAQ(); }}>FAQ section</a> for common questions.</p>
    </div>
  );
}

export default Support;