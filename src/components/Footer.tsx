import React from 'react';
import { Link } from 'react-router-dom';
import { BsInstagram } from 'react-icons/bs'; // Example icons
import knotLogo from '../assets/images/KnotLogo.svg'; // Replace with your actual logo path

const Footer: React.FC = () => {
  // Scroll to top helper function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Links: Follow Us */}
        <div className="footer-links-section">
          <h5 className="footer-title">Follow Us</h5>
          <ul>
            <li>
              <a
                href="https://instagram.com/knot_app"
                className="footer-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            {/* Add other social links */}
          </ul>
        </div>

                {/* Brand Section */}
        <div className="footer-brand">
          <img src={knotLogo} alt="Knot Logo" className="footer-logo" />
          <p className="footer-tagline">
            Meaningful connections, made simple.
          </p>
        </div>

        {/* Links: Legal */}
        <div className="footer-links-section">
          <h5 className="footer-title">Legal</h5>
          <ul>
            <li>
              <Link to="/privacy" onClick={scrollToTop} className="footer-link">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" onClick={scrollToTop} className="footer-link"> {/* Add Terms route if needed */}
                Terms & Conditions
              </Link>
            </li>
             <li>
              <Link to="/support" onClick={scrollToTop} className="footer-link">
                Support
              </Link>
            </li>
          </ul>
        </div>

        {/* Links: Resources (Optional) */}
        {/* <div className="footer-links-section">
          <h5 className="footer-title">Resources</h5>
           <ul>
                <li><Link to="/blog" onClick={scrollToTop} className="footer-link">Blog</Link></li>
                <li><Link to="/faq-page" onClick={scrollToTop} className="footer-link">Help Center</Link></li>
            </ul>
        </div> */}


        {/* Bottom Section */}
        <div className="footer-bottom">
            <p>© {new Date().getFullYear()} Knot App. All rights reserved.</p>
             <div className="footer-icons">
                <a href="https://instagram.com/knot_app" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <BsInstagram />
                </a>
                {/* Add other icons */}
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;