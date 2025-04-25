import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom'; // Use NavLink for active styles
import knotLogo from '../assets/images/KnotLogo.svg'; // Replace with your actual logo path

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(''); // State to track scrolling

  // Logic to close menu on link click and scroll
  const handleNavClick = (sectionId?: string) => {
    setIsMenuOpen(false);
    if (sectionId) {
      // Smooth scroll to section only if it's on the current page
      const element = document.getElementById(sectionId);
      if (element) {
         element.scrollIntoView({ behavior: "smooth" });
      } else {
          // If element not found (e.g., on /privacy page), just navigate
          // The Router will handle the navigation
      }
    } else {
         // If no sectionId (like clicking the main logo), scroll to top
         window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

 // Optional: Update active section based on scroll (similar to FoodFellas)
 useEffect(() => {
   const sections = document.querySelectorAll('section[id]'); // Only track sections with IDs
   const observer = new IntersectionObserver(
     (entries) => {
       entries.forEach((entry) => {
         if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
           setActiveSection(entry.target.id);
         }
       });
     },
     { threshold: 0.5 } // Trigger when 50% visible
   );

   sections.forEach((section) => observer.observe(section));

   return () => sections.forEach((section) => observer.disconnect());
 }, []);


  return (
    <nav className="sticky-navbar">
      <Link to="/" className="logo" onClick={() => handleNavClick()}>
        <img src={knotLogo} alt="Knot Logo" />
        <h1>Knot</h1>
      </Link>

      {/* Desktop Navigation */}
      <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
         {/* Use NavLink for sections if you want active state based on scroll */}
         {/* Or use regular Link/anchor tags if active state is not needed or handled differently */}
         <a href="/#hero" className={activeSection === 'hero' ? 'active' : ''} onClick={() => handleNavClick('hero')}>Home</a>
         <a href="/#features" className={activeSection === 'features' ? 'active' : ''} onClick={() => handleNavClick('features')}>Features</a>
         <a href="/#faq" className={activeSection === 'faq' ? 'active' : ''} onClick={() => handleNavClick('faq')}>FAQ</a>
         <a href="/#preview" className={activeSection === 'preview' ? 'active' : ''} onClick={() => handleNavClick('preview')}>Preview</a>
         <a href="/#download" className={activeSection === 'download' ? 'active' : ''} onClick={() => handleNavClick('download')}>Download</a>
         {/* Add other links like Blog, etc. if needed */}
      </div>

       {/* Hamburger Menu Button */}
       <button className="hamburger-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? '✕' : '☰'} {/* Toggle icon */}
        </button>
    </nav>
  );
};

export default Header;