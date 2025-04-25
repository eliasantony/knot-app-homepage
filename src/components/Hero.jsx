<<<<<<< HEAD
// Hero.jsx
import { Fade, Slide } from 'react-reveal';
import appStoreButton from '../assets/appStore_button.svg';
import playStoreButton from '../assets/playStore_button.png';
import heroImage from '../assets/hero_image.png';

const Hero = () => (
  <section id="hero" className="hero-section">
    <div className="hero-content">
      <Fade>
        <h2>FoodFellas</h2>
      </Fade>
      <Fade>
        <h1>Creating recipes has never been this easy!</h1>
      </Fade>
      <Fade>
        <p>
          Your ultimate recipe-sharing app powered by AI! <br />
          Discover new dishes, share your creations, and let our smart features elevate your cooking game. <br />
          Ready to transform your kitchen adventures?
        </p>
      </Fade>
      <Slide bottom>
        <div className="app-buttons">
          <button>
            <img src={appStoreButton} alt="Download on App Store" />
          </button>
          <button>
            <img src={playStoreButton} alt="Get it on Google Play" />
          </button>
        </div>
      </Slide>
    </div>
    <Slide bottom>
      <div className="hero-image">
        <img src={heroImage} alt="App Mockup" />
      </div>
    </Slide>
  </section>
);

=======
// Hero.jsx
import { Fade, Slide } from 'react-reveal';
import appStoreButton from '../assets/appStore_button.svg';
import playStoreButton from '../assets/playStore_button.png';
import heroImage from '../assets/hero_image.png';

const Hero = () => (
  <section id="hero" className="hero-section">
    <div className="hero-content">
      <Fade>
        <h2>FoodFellas</h2>
      </Fade>
      <Fade>
        <h1>Creating recipes has never been this easy!</h1>
      </Fade>
      <Fade>
        <p>FoodFellas App - Release planned for February 2025!</p>
      </Fade>
      <Fade>
        <p>
          Your ultimate recipe-sharing app powered by AI! <br />
          Discover new dishes, share your creations, and let our smart features elevate your cooking game. <br />
          Ready to transform your kitchen adventures?
        </p>
      </Fade>
      <Slide bottom>
        <div className="app-buttons">
          <button>
            <img src={appStoreButton} alt="Download on App Store" />
          </button>
          <button>
            <img src={playStoreButton} alt="Get it on Google Play" />
          </button>
        </div>
      </Slide>
    </div>
    <Slide bottom>
      <div className="hero-image">
        <img src={heroImage} alt="App Mockup" />
      </div>
    </Slide>
  </section>
);

>>>>>>> f182036 (preview section, updated privacy policy and terms)
export default Hero;