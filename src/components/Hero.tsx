import React from 'react';
import { motion } from 'framer-motion';
import appStoreButton from '../assets/images/appStore_button.svg';
import playStoreButton from '../assets/images/playStore_button.png';
import appPreview from '../assets/images/Knot_Hero.png';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: (delay = 0) => ({ duration: 0.6, delay }),
};

const Hero: React.FC = () => (
  <section id="hero" className="hero-section knot-gradient-bg">
    <div className="hero-content">
      <motion.h2
        initial={fadeUp.initial}
        whileInView={fadeUp.animate}
        viewport={{ once: true }}
        transition={fadeUp.transition(0)}
      >
        Knot
      </motion.h2>

      <motion.h1
        initial={fadeUp.initial}
        whileInView={fadeUp.animate}
        viewport={{ once: true }}
        transition={fadeUp.transition(0.1)}
      >
        Real connections. Private updates. Shared memories.
      </motion.h1>

      <motion.p
        initial={fadeUp.initial}
        whileInView={fadeUp.animate}
        viewport={{ once: true }}
        transition={fadeUp.transition(0.2)}
      >
        Send private questions, updates, and reflections—all in one place. No feeds. No noise. Just you and your people.
      </motion.p>

      <motion.div
        className="app-buttons"
        initial={fadeUp.initial}
        whileInView={fadeUp.animate}
        viewport={{ once: true }}
        transition={fadeUp.transition(0.3)}
      >
        <a href="https://apps.apple.com/us/app/knot-app/6746635520" target="_blank" rel="noopener noreferrer">
          <button>
            <img src={appStoreButton} alt="Download on App Store"/>
          </button>
        </a>
        <a href="https://play.google.com/store/apps/details?id=com.knotnewsletter.app" target="_blank" rel="noopener noreferrer">
        <button>
          <img src={playStoreButton} alt="Get it on Google Play" />
        </button>
        </a>
      </motion.div>
    </div>

    <motion.div
      className="hero-image"
      initial={fadeUp.initial}
      whileInView={fadeUp.animate}
      viewport={{ once: true }}
      transition={fadeUp.transition(0.4)}
    >
      <img src={appPreview} alt="Knot App Preview" />
    </motion.div>
  </section>
);

export default Hero;