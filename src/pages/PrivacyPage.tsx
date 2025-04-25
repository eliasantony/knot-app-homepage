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

      <section>
        <h2>1. Introduction</h2>
        <p>
          Welcome to Knot! We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us at [Your Support Email Address].
        </p>
        {/* --- Add your full Privacy Policy content here --- */}
        <p>
          This privacy notice describes how we might use your information if you use our mobile application ("App") or visit our website at why-knot.app ("Website").
        </p>
      </section>

      <section>
          <h2>2. What Information Do We Collect?</h2>
          <p>
            <strong>Personal Information You Disclose to Us:</strong> We collect personal information that you voluntarily provide to us when you register on the App, express an interest in obtaining information about us or our products and Services, when you participate in activities on the App or otherwise when you contact us.
          </p>
           {/* Add more sections like: How We Use Your Information, Will Your Information Be Shared?, How Long We Keep Your Information, How We Keep Your Information Safe, Your Privacy Rights, Updates To This Notice, How To Contact Us */}
           <p>The personal information that we collect depends on the context of your interactions with us and the App, the choices you make and the products and features you use. The personal information we collect may include the following: [...]</p>
      </section>

       {/* ... other sections of your policy ... */}

    </div>
  );
};

export default PrivacyPage;