<<<<<<< HEAD
// GetApp.jsx
import React from 'react';
import { Fade } from 'react-reveal'; // Import Fade from react-reveal
import appStoreButton from '../assets/appStore_button.svg';
import playStoreButton from '../assets/playStore_button.png';
import mockUp from '../assets/mockUp.png'; // Ensure this import exists

const GetApp = () => (
  <section id="download" className="download-section">
    {/* Fade-in for Heading */}
    <Fade bottom>
      <h2>Soon in your favourite App Store</h2>
    </Fade>

    {/* Fade-in for Title */}
    <Fade bottom delay={200}>
      <h1>Download FoodFellas</h1>
    </Fade>

    {/* Fade-in for Description */}
    <Fade bottom delay={400}>
      <p>
        Get ready to discover, create, and share amazing recipes with FoodFellas. <br />
      </p>
    </Fade>

    {/* Fade-in for App Buttons */}
    <Fade bottom delay={600}>
      <div className="app-buttons">
        <button>
          <img src={appStoreButton} alt="Download on App Store" />
        </button>
        <button>
          <img src={playStoreButton} alt="Get it on Google Play" />
        </button>
      </div>
    </Fade>

    {/* Fade-in for Download Image */}
    <Fade bottom delay={800}>
      <div className="download-image">
        <img src={mockUp} alt="App Mockup" />
      </div>
    </Fade>
  </section>
);

=======
// GetApp.jsx
import React from 'react';
import { Fade } from 'react-reveal'; // Import Fade from react-reveal
import appStoreButton from '../assets/appStore_button.svg';
import playStoreButton from '../assets/playStore_button.png';
import mockUp from '../assets/mockUp.png'; // Ensure this import exists

const GetApp = () => (
  <section id="download" className="download-section">
    {/* Fade-in for Heading */}
    <Fade bottom>
      <h2>Soon in your favourite App Store</h2>
    </Fade>

    {/* Fade-in for Title */}
    <Fade bottom delay={100}>
      <h1>Download FoodFellas</h1>
    </Fade>

    {/* Fade-in for Description */}
    <Fade bottom delay={250}>
      <p>
        Get ready to discover, create, and share amazing recipes with FoodFellas. <br />
        <strong>Release planned for February 2025!</strong>
      </p>
    </Fade>

    {/* Fade-in for App Buttons */}
    <Fade bottom delay={400}>
      <div className="app-buttons">
        <button>
          <img src={appStoreButton} alt="Download on App Store" />
        </button>
        <button>
          <img src={playStoreButton} alt="Get it on Google Play" />
        </button>
      </div>
    </Fade>

    {/* Fade-in for Download Image */}
    <Fade bottom delay={550}>
      <div className="download-image">
        <img src={mockUp} alt="App Mockup" />
      </div>
    </Fade>
  </section>
);

>>>>>>> f182036 (preview section, updated privacy policy and terms)
export default GetApp;