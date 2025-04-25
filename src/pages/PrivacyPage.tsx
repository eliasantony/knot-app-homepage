import React, { useEffect } from 'react';
import './PageStyles.css'; // Create this CSS file for common page styling

const PrivacyPage: React.FC = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-container">
      <h1>Privacy Policy</h1>
      <p><em>Last Updated: April 25, 2025</em></p> {/* Update with actual date */}
<article>
  <h2>1. Introduction</h2>
  <p>
    Welcome to Knot. We take the protection of your personal data seriously and treat your data confidentially and in accordance with the statutory data protection regulations, in particular the General Data Protection Regulation (GDPR) and the Austrian Data Protection Act (DSG).
  </p>
  <p>
    This Privacy Policy informs you about how we collect, process, and use personal data when you use our mobile app "Knot" or visit our website at why-knot.app.
  </p>
  <p>
    Responsible for data processing:
    <br />
    Elias Antony<br />
    University of [Your Uni], Department [Your Department]<br />
    Email: [your-email@example.com]
  </p>
</article>

<article>
  <h2>2. What Data We Collect</h2>
  <ul>
    <li><strong>Account Information:</strong> When registering, we collect your email address and optionally your name (if provided).</li>
    <li><strong>Login Data:</strong> When using Google or Apple login, we collect the necessary identifiers provided by the respective service.</li>
    <li><strong>Usage Data:</strong> Firebase automatically collects data such as app version, device model, crash reports and analytics events (if enabled).</li>
  </ul>
</article>

<article>
  <h2>3. Why We Collect Your Data</h2>
  <p>We process your personal data to:</p>
  <ul>
    <li>Provide and maintain the Knot App</li>
    <li>Enable authentication and account creation</li>
    <li>Improve app performance and user experience</li>
    <li>Notify users of important group updates or replies (optional)</li>
  </ul>
</article>

<article>
  <h2>4. Legal Basis</h2>
  <p>We process your data based on Art. 6 para. 1 lit. a (consent), lit. b (contract), and lit. f (legitimate interest) GDPR, depending on context. For analytics, consent is requested explicitly.</p>
</article>

<article>
  <h2>5. Data Storage and Transfer</h2>
  <p>All user data is stored in Google Firebase (Firestore), located in the EU (Region europe-west3). We do not transfer your data outside of the EU unless required by Firebase or its subprocessors. In such cases, standard contractual clauses apply.</p>
</article>

<article>
  <h2>6. Your Rights</h2>
  <p>You have the right to access, correct, delete or restrict processing of your personal data, as well as the right to data portability and to lodge a complaint with the Austrian Data Protection Authority (dsb.gv.at).</p>
</article>

<article>
  <h2>7. Data Retention</h2>
  <p>Your account and associated data are retained as long as you use the app. Upon deletion of your account, personal data will be removed unless legal retention periods apply.</p>
</article>

<article>
  <h2>8. Contact</h2>
  <p>If you have questions about data protection or want to exercise your rights, contact Elias Antony at [your-email@example.com].</p>
</article>

    </div>
  );
};

export default PrivacyPage;