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
        Staying connected with your people has never been this meaningful.
      </motion.h1>

      <motion.p
        initial={fadeUp.initial}
        whileInView={fadeUp.animate}
        viewport={{ once: true }}
        transition={fadeUp.transition(0.2)}
      >
        Deepen your relationships with private, thoughtful newsletters. Share updates, ask questions, and stay close, effortlessly.
      </motion.p>

      <motion.div
        className="app-buttons"
        initial={fadeUp.initial}
        whileInView={fadeUp.animate}
        viewport={{ once: true }}
        transition={fadeUp.transition(0.3)}
      >
        <button disabled>
          <img src={appStoreButton} alt="Download on App Store (coming soon)" />
        </button>
        <button disabled>
          <img src={playStoreButton} alt="Get it on Google Play (coming soon)" />
        </button>
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