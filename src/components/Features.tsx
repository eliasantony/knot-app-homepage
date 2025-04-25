import React from 'react';
import { motion } from 'framer-motion';

// Example feature data - adapt based on your PRD
const knotFeatures = [
  { icon: '❓', title: 'Custom Questions', description: 'Spark meaningful conversations with personalized prompts for your group.' },
  { icon: '🔔', title: 'Smart Notifications', description: 'Stay updated without the noise. Get notified about the things that matter most.' },
  { icon: '📨', title: 'Group Invites', description: 'Easily bring your friends, family, or team together in a private space.' },
  { icon: '👍', title: 'Reactions', description: 'Engage quickly and show appreciation with simple, fun reactions.' },
  { icon: '✨', title: 'Private Newsletters', description: 'Share life updates, thoughts, and moments in a focused, intimate format.' },
  { icon: '🎨', title: 'Custom Styling', description: 'Personalize the look and feel of your newsletters to match your vibe.' },
];

const Features: React.FC = () => (
  <section id="features" className="features-section">
    <h1>Why Knot?</h1>
    <div className="features-grid">
      {knotFeatures.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="feature"
        >
          <span role="img" aria-label={feature.title}>{feature.icon}</span>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Features;