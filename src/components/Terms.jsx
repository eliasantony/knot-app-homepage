import React from 'react';
import './LegalPages.css';

const Terms = () => {
  return (
    <div className="legal-container">
      <h1>Terms and Conditions</h1>
      <p>Welcome to FoodFellas! By accessing and using our website and mobile app, you agree to these Terms and Conditions.</p>

      <h2>1. Use of the Platform</h2>
      <p>
        FoodFellas provides a recipe-sharing platform where users can create, share, and discover recipes. By using our platform, you agree to:
      </p>
      <ul>
        <li>Use the platform lawfully and respectfully</li>
        <li>Not post illegal, offensive, or harmful content</li>
        <li>Not use automated bots or scripts to collect data</li>
      </ul>

      <h2>2. User Accounts</h2>
      <p>
        If you create an account, you are responsible for maintaining its security. You must notify us immediately if you suspect unauthorized access.
      </p>

      <h2>3. User-Generated Content</h2>
      <p>
        Users may submit recipes, comments, and other content. By posting, you grant us a non-exclusive, worldwide license to use, display, and share this content within the FoodFellas platform.  
        <strong>You remain the owner of your content.</strong>
      </p>
      <p>We reserve the right to remove content that violates these Terms.</p>

      <h2>4. Intellectual Property</h2>
      <p>
        All content on FoodFellas, including text, images, graphics, and software, is protected by copyright. Users may not copy, distribute, or modify any material without prior written permission.
      </p>

      <h2>5. Liability Disclaimer</h2>
      <p>
        We strive to provide accurate and up-to-date information. However, we do not guarantee the correctness, completeness, or availability of the content.  
        <strong>We are not liable for any damages resulting from the use of our platform, except in cases of gross negligence or intent.</strong>
      </p>
      <p>External links are provided for convenience. We do not endorse or take responsibility for their content.</p>

      <h2>6. Termination</h2>
      <p>
        We reserve the right to suspend or delete accounts that violate our Terms or applicable laws. Users can delete their accounts at any time in the app settings.
      </p>

      <h2>7. Changes to Terms</h2>
      <p>
        We may update these Terms as needed. Users will be notified of significant changes. Continued use of FoodFellas after updates means acceptance of the new Terms.
      </p>

      <h2>8. Governing Law & Jurisdiction</h2>
      <p>
        These Terms are governed by the laws of Austria. Any disputes shall be resolved in the competent courts of Vienna, Austria.
      </p>

      <h2>9. Contact</h2>
      <p>If you have questions about these Terms, contact us at:</p>
      <p>Email: info@foodfellas.app</p>

      <p className="last-updated">These Terms and Conditions were last updated on February 15, 2025.</p>
    </div>
  );
};

export default Terms;