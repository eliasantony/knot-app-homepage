import React, { useEffect } from 'react';
import './PageStyles.css'; // Re-use the same CSS file

const SupportPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-container">
      <h1>Support & Contact</h1>

      <article>
        <h2>Get Help</h2>
        <p>
          Need assistance with Knot? We're here to help! Please check our Frequently Asked Questions (FAQ) section first, as your question might already be answered there.
        </p>
      </article>

      <article>
        <h2>Contact Us</h2>
        <p>
          If you couldn't find the answer in the FAQ or need further assistance, please reach out to us:
        </p>
        <ul>
          <li>
            <strong>Instagram:</strong> (prefered) <a href="https://instagram.com/knot_app" target="_blank" rel="noopener noreferrer">@knot_app</a>
          </li>
          <li>
            <strong>Email:</strong> <a href="mailto:support@why-knot.app">support@why-knot.app</a> 
          </li>
        </ul>
        <p>
          We aim to respond to all inquiries within 48 business hours.
        </p>
      </article>

       <article>
        <h2>Feedback</h2>
        <p>
            Have suggestions or feedback on how we can improve Knot? We'd love to hear from you! Please email us at <a href="mailto:feedback@why-knot.app">feedback@why-knot.app</a>. {/* Replace or use support email */}
        </p>
       </article>
    </div>
  );
};

export default SupportPage;