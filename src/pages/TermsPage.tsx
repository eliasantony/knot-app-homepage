import React, { useEffect } from 'react';
import './PageStyles.css'; // Re-use the same CSS file

const TermsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-container">
      <h1>Terms of Service</h1>
      <p><em>Last Updated: April 25, 2025</em></p> {/* Update with actual date */}
<article>
  <h2>1. Agreement to Terms</h2>
  <p>These Terms of Service (“Terms”) govern your use of the Knot app and website. By using the app or site, you agree to be bound by these Terms.</p>
</article>

<article>
  <h2>2. Operator Information</h2>
  <p>This app is developed and operated as part of a university project by:</p>
  <p>
    Elias Antony<br />
    University of [Your Uni], Department [Your Department]<br />
    Email: [your-email@example.com]
  </p>
</article>

<article>
  <h2>3. Use of the App</h2>
  <p>You may use the app to create groups, respond to questions, and share updates. You are responsible for any content you post and agree not to misuse the service.</p>
</article>

<article>
  <h2>4. Age Requirement</h2>
  <p>The app is intended for users aged 16 and over in accordance with Article 8 GDPR.</p>
</article>

<article>
  <h2>5. Account and Authentication</h2>
  <p>You may create an account using your email address or via supported providers (Google, Apple). You are responsible for safeguarding your login credentials.</p>
</article>

<article>
  <h2>6. Intellectual Property</h2>
  <p>All content, code, and visuals of the Knot app are protected by copyright. You may not reproduce or reuse any part without permission.</p>
</article>

<article>
  <h2>7. Privacy</h2>
  <p>Your privacy is governed by our Privacy Policy. Please review it to understand how your data is handled.</p>
</article>

<article>
  <h2>8. Changes to These Terms</h2>
  <p>We may update these Terms from time to time. If significant changes are made, you’ll be informed within the app.</p>
</article>

<article>
  <h2>9. Governing Law</h2>
  <p>These Terms shall be governed by the laws of Austria. Any disputes shall be subject to the exclusive jurisdiction of the courts in Vienna, Austria.</p>
</article>

<article>
  <h2>10. Contact</h2>
  <p>If you have questions about these Terms, contact Elias Antony at [your-email@example.com].</p>
</article>

    </div>
  );
};

export default TermsPage;