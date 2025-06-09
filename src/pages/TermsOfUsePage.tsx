// src/TermsOfUsePage.tsx
import React, { useEffect } from 'react';
import './PageStyles.css';

const TermsOfUsePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-container">
      <h1>Terms of Use</h1>
      <p><em>Last Updated: May 30, 2025</em></p>

      <article>
        <h2>1. Introduction</h2>
        <p>
          These Terms of Use outline the basic rules and expectations for anyone using the Knot app or website. If you’d like to see all the legal details—including disclaimers, governing law, and intellectual property rules—please refer to our full&nbsp;
          <a href="/terms">
            Terms of Service
          </a>.
        </p>
      </article>

      <article>
        <h2>2. Age Requirement</h2>
        <p>
          You must be at least 17 years old to create an account or use Knot. By signing up, you confirm that you meet this requirement. We reserve the right to suspend or delete any account found to be underage.
        </p>
      </article>

      <article>
        <h2>3. User Conduct</h2>
        <h3>3.1 Be Respectful</h3>
        <p>
          Treat other users with courtesy. Harassment, hate speech, threatening language, or targeted intimidation is strictly prohibited. For example:
        </p>
        <ul>
          <li>Calling another user a racial, ethnic, or homophobic slur</li>
          <li>Posting messages to threaten or blackmail someone</li>
          <li>Stalking or repeatedly sending unwanted private messages</li>
        </ul>

        <h3>3.2 Content Restrictions</h3>
        <p>
          When you post text, images, or links, it must not include:
        </p>
        <ul>
          <li>Graphic violence, self-harm content, or gore</li>
          <li>Sexual content involving minors or non-consensual acts</li>
          <li>Illegal instructions (e.g., “how to build a bomb”) or facilitation of criminal acts</li>
        </ul>

        <h3>3.3 Spam & Misuse</h3>
        <p>
          Don’t use Knot to send unsolicited advertisements, phishing attempts, or malware. The following are examples of prohibited behaviors:
        </p>
        <ul>
          <li>Creating bot accounts to artificially inflate views or likes</li>
          <li>Posting the same message repeatedly across multiple groups</li>
          <li>Promoting scams or pyramid schemes</li>
        </ul>

        <h3>3.4 Intellectual Property</h3>
        <p>
          Only share content that you own or have permission to use. Uploading copyrighted photos, videos, or text without authorization is not allowed. If you violate someone else’s copyright, we may remove your content and terminate your account.
        </p>
      </article>

      <article>
        <h2>4. User Data & Privacy</h2>
        <p>
          Anything you post (text, images, links) is visible to other users in that group. Don’t share highly sensitive personal information—like your full government ID number or banking details—unless you understand the risk. For details on how we collect and store your data, please see our&nbsp;
          <a href="/privacy">
            Privacy Policy
          </a>.
        </p>
      </article>

      <article>
        <h2>5. Enforcement & Consequences</h2>
        <p>
          If you violate any of these rules, we may remove the offending content, suspend your account temporarily, or terminate your account altogether. In serious cases—such as threats of violence or sharing child exploitation material—we may report you to the authorities if required by law.
        </p>
      </article>

      <article>
        <h2>6. Account Suspension & Appeals</h2>
        <p>
          If your account is suspended or removed, you can request a review by emailing us within 14 days. Please provide relevant details (e.g., why you think the suspension was in error). Final decisions rest with the Knot moderation team.
        </p>
      </article>

      <article>
        <h2>7. Liability Disclaimer (Brief)</h2>
        <p>
          Knot is provided “as is.” We do not guarantee uptime, and we are not responsible for user-generated content. For full disclaimers, limitation of liability, and indemnification, please visit our complete&nbsp;
          <a href="/terms">
            Terms of Service
          </a>.
        </p>
      </article>

      <article>
        <h2>8. Changes to These Terms</h2>
        <p>
          We may update these Terms of Use from time to time. If significant changes are made, we’ll notify you within the app or via email. Your continued use of Knot after the update means you accept the new terms.
        </p>
      </article>

      <article>
        <h2>9. Contact Us</h2>
        <p>
          If you have questions about these rules or how we enforce them, please contact Elias Antony at&nbsp;
          <a href="mailto:info@why-knot-app">info@why-knot-app</a>.
        </p>
      </article>
    </div>
  );
};

export default TermsOfUsePage;
