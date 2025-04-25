import React, { useState } from 'react';
import './CookieBanner.css';

const CookieBanner = () => {
  const [visible, setVisible] = useState(!localStorage.getItem('cookiesAccepted'));

  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', true);
    setVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookiesAccepted', false);
    setVisible(false);
  };

  return visible ? (
    <div className="cookie-banner">
      <div className="cookie-banner-content">
        <p>
          This website uses cookies to enhance the user experience. <br /> Do you accept cookies for analytics?
        </p>
        <div className="cookie-banner-buttons">
          <button className="cookie-button accept" onClick={acceptCookies}>
            Accept
          </button>
          <button className="cookie-button decline" onClick={declineCookies}>
            Decline
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

export default CookieBanner;