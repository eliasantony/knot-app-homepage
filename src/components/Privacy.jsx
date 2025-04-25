import React from 'react';
import './LegalPages.css';

const Privacy = () => {
  return (
    <div className="legal-container">
      <h1>Privacy Policy</h1>
      <p>
        We value your privacy and process your data in compliance with the General Data Protection Regulation (GDPR) and the Austrian Telecommunications Act (TKG 2021). 
        This privacy policy explains what personal data we collect, how we use it, and your rights.
      </p>

      <h2>1. Data Controller</h2>
      <p>
        The responsible entity for data processing is:<br />
        <strong>FoodFellas</strong><br />
        Elias Antony<br />
        Email: info@foodfellas.app
      </p>

      <h2>2. Personal Data We Collect</h2>
      <p>
        We collect the following personal data:
        <ul>
          <li><strong>Contact Information:</strong> Name, email address (when signing up)</li>
          <li><strong>Usage Data:</strong> IP address, device information, browser type</li>
          <li><strong>Cookies & Tracking:</strong> We use cookies for analytics (Google Analytics) and app functionality.</li>
        </ul>
      </p>

      <h2>3. Purpose & Legal Basis of Data Processing</h2>
      <p>We process your data for the following purposes:</p>
      <ul>
        <li>To provide our services and improve user experience (<strong>Art. 6(1)(b) GDPR – contract fulfillment</strong>)</li>
        <li>To analyze traffic via Google Analytics (<strong>Art. 6(1)(a) GDPR – consent</strong>)</li>
        <li>To comply with legal obligations (<strong>Art. 6(1)(c) GDPR</strong>)</li>
      </ul>

      <h2>4. Data Retention</h2>
      <p>
        We store your personal data only for as long as necessary:
        <ul>
          <li>Account data: Until your account is deleted</li>
          <li>Analytics data: Up to 26 months (Google Analytics)</li>
          <li>Legal retention periods: According to Austrian law</li>
        </ul>
      </p>

      <h2>5. Data Sharing & Third Parties</h2>
      <p>We share data with the following third-party services:</p>
      <ul>
        <li><strong>Google Analytics</strong> (Website analytics, IP anonymized, U.S. data transfer possible)</li>
        <li><strong>Firebase (Google Cloud)</strong> (Hosting and authentication, U.S. data transfer possible)</li>
        <li><strong>TypeSense</strong> (Search indexing, hosted on our own servers)</li>
      </ul>
      <p>These providers may process data outside the EU. We ensure compliance via Standard Contractual Clauses (SCCs).</p>

      <h2>6. Your Rights Under GDPR</h2>
      <p>You have the following rights:</p>
      <ul>
        <li>Access your personal data</li>
        <li>Correct or delete your data</li>
        <li>Restrict processing</li>
        <li>Data portability</li>
        <li>Withdraw consent at any time (e.g., for analytics cookies)</li>
        <li>File a complaint with the Austrian Data Protection Authority</li>
      </ul>

      <h2>7. Cookies & Tracking</h2>
      <p>We use essential and analytical cookies. You can opt out of tracking via our Cookie Settings.</p>

      <h2>8. Contact & Complaints</h2>
      <p>If you have concerns about data processing, contact us at:</p>
      <p>Email: info@foodfellas.app</p>
      <p>You can also file a complaint with the Austrian Data Protection Authority (<a href="https://www.dsb.gv.at">www.dsb.gv.at</a>).</p>

      <p className="last-updated">This privacy policy was last updated on February 15, 2025.</p>
    </div>
  );
};

export default Privacy;