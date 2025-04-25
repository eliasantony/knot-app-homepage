<<<<<<< HEAD
import { BsInstagram } from "react-icons/bs";
import whiteHat from '../assets/whiteHat.png';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-brand">
            <img
              src={whiteHat}
              alt="FoodFellas Logo"
              className="footer-logo"
            />
            <p className="footer-tagline">Delicious recipes for food enthusiasts!</p>
          </div>

          {/* Links Section */}
          <div className="footer-links">
            {/* Follow Us Section */}
            <div>
              <h5 className="footer-title">Follow Us</h5>
              <ul>
                <li>
                  <a href="https://github.com/eliasantony" className="footer-link">
                    Github
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/foodfellas.app" className="footer-link">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal Section */}
            <div>
              <h5 className="footer-title">Legal</h5>
              <ul>
                <li>
                  <a href="/privacy" className="footer-link">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms" className="footer-link">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="footer-divider" />

        {/* Social Icons and Copyright */}
        <div className="footer-bottom">
          <p>© 2024 FoodFellas. All rights reserved.</p>
          <div className="footer-icons">
            <a href="https://instagram.com/foodfellas.app">
              <BsInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

=======
import { BsInstagram } from "react-icons/bs";
import whiteHat from '../assets/whiteHat.png';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-brand">
            <img
              src={whiteHat}
              alt="FoodFellas Logo"
              className="footer-logo"
            />
            <p className="footer-tagline">Delicious recipes for food enthusiasts!</p>
          </div>

          {/* Links Section */}
          <div className="footer-links">
            {/* Follow Us Section */}
            <div>
              <h5 className="footer-title">Follow Us</h5>
              <ul>
                <li>
                  <a href="https://instagram.com/foodfellas.app" className="footer-link">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal Section */}
            <div>
              <h5 className="footer-title">Legal</h5>
              <ul>
                <li>
                  <a href="/#/privacy" className="footer-link">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/#/terms" className="footer-link">
                    Terms & Conditions
                  </a>
                </li>
                                <li>
                  <a href="/#/support" className="footer-link">
                    Support
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="footer-divider" />

        {/* Social Icons and Copyright */}
        <div className="footer-bottom">
          <p>© 2024 FoodFellas. All rights reserved.</p>
          <div className="footer-icons">
            <a href="https://instagram.com/foodfellas.app">
              <BsInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

>>>>>>> f182036 (preview section, updated privacy policy and terms)
export default Footer;