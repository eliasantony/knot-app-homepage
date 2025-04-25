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

      <section>
        <h2>1. Agreement to Terms</h2>
        <p>
          These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and [Your Company Name/Your Name] (“we,” “us” or “our”), concerning your access to and use of the Knot mobile application as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the “App”) and our website at why-knot.app ("Website").
        </p>
         {/* --- Add your full Terms of Service content here --- */}
         <p>You agree that by accessing the App and/or Website, you have read, understood, and agree to be bound by all of these Terms of Service. IF YOU DO NOT AGREE WITH ALL OF THESE TERMS OF SERVICE, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE APP AND WEBSITE AND YOU MUST DISCONTINUE USE IMMEDIATELY.</p>
      </section>

       <section>
        <h2>2. Intellectual Property Rights</h2>
        <p>
         Unless otherwise indicated, the App and Website are our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the App and Website (collectively, the “Content”) and the trademarks, service marks, and logos contained therein (the “Marks”) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws [...]
        </p>
         {/* Add more sections like: User Representations, Prohibited Activities, User Generated Contributions, App License, Submissions, Third-Party Websites and Content, Term and Termination, Governing Law, Dispute Resolution, Corrections, Disclaimer, Limitations of Liability, Indemnification, User Data, Miscellaneous, Contact Us */}
      </section>

      {/* ... other sections of your terms ... */}

    </div>
  );
};

export default TermsPage;