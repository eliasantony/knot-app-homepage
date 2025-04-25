<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import whiteHat from '../assets/whiteHat.png';

const Header = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll("section").forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="sticky-navbar">
      <div className="logo">
        <img src={whiteHat} alt="logo" />
        <h1>FoodFellas'</h1>
      </div>
      <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <a
          href="#hero"
          className={activeSection === "hero" ? "active" : ""}
          onClick={() => setIsMenuOpen(false)}
        >
          Hero
        </a>
        <a
          href="#features"
          className={activeSection === "features" ? "active" : ""}
          onClick={() => setIsMenuOpen(false)}
        >
          Features
        </a>
        <a
          href="#faq"
          className={activeSection === "faq" ? "active" : ""}
          onClick={() => setIsMenuOpen(false)}
        >
          FAQ
        </a>
        <a
          href="#download"
          className={activeSection === "download" ? "active" : ""}
          onClick={() => setIsMenuOpen(false)}
        >
          Download
        </a>
      </div>
      <button className="hamburger-menu" onClick={toggleMenu}>
        ☰
      </button>
    </nav>
  );
};

export default Header;
=======
import React, { useState, useEffect } from "react";
import whiteHat from "../assets/whiteHat.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll("section").forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const navigateToSection = (sectionId) => {
    if (window.location.pathname !== "/") {
      // Navigiere zurück zur Hauptseite und setze das Hash
      navigate(`/#${sectionId}`);
      setTimeout(() => {
        scrollToSection(sectionId); // Scrollt nach dem Laden zur Section
      }, 300);
    } else {
      scrollToSection(sectionId);
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    const navbarHeight = document.querySelector(".sticky-navbar")?.offsetHeight || 0;

    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div className="release-banner">
        🚧 FoodFellas App - Release planned for February 2025! 🚧
      </div>
      <nav className="sticky-navbar">
        <div className="logo" onClick={() => navigate("/")}>
          <img src={whiteHat} alt="logo" />
          <h1>FoodFellas'</h1>
        </div>
        <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              navigateToSection("hero");
            }}
            className={activeSection === "hero" ? "active" : ""}
          >
            Hero
          </a>
          <a
            href="#features"
            onClick={(e) => {
              e.preventDefault();
              navigateToSection("features");
            }}
            className={activeSection === "features" ? "active" : ""}
          >
            Features
          </a>
          <a
            href="#faq"
            onClick={(e) => {
              e.preventDefault();
              navigateToSection("faq");
            }}
            className={activeSection === "faq" ? "active" : ""}
          >
            FAQ
          </a>
          <a
            href="#preview"
            onClick={(e) => {
              e.preventDefault();
              navigateToSection("preview");
            }}
            className={activeSection === "preview" ? "active" : ""}
          >
            Preview
          </a>
          <a
            href="#download"
            onClick={(e) => {
              e.preventDefault();
              navigateToSection("download");
            }}
            className={activeSection === "download" ? "active" : ""}
          >
            Download
          </a>
        </div>
        <button className="hamburger-menu" onClick={toggleMenu}>
          ☰
        </button>
      </nav>
    </>
  );
};

export default Header;
>>>>>>> f182036 (preview section, updated privacy policy and terms)
