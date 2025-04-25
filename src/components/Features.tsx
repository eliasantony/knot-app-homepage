import React from 'react';
import { motion } from 'framer-motion';

// Example feature data - adapt based on your PRD
const knotFeatures = [
  { icon: '❓', title: 'Custom Questions', description: 'Start real conversations with personalized questions tailored to your group’s vibe.' },
  { icon: '🔔', title: 'Smart Notifications', description: 'Only get notified about what truly matters—no noise, no distractions.' },
  { icon: '📨', title: 'Group Invites', description: 'Bring your favorite people together. Invite friends, family, or your crew with ease.' },
  { icon: '👍', title: 'Reactions', description: 'Say more with less—respond with quick reactions that show you’re there.' },
  { icon: '✨', title: 'Private Newsletters', description: 'Share updates, stories, and reflections in a calm, private space built for closeness.' },
  { icon: '🎨', title: 'Custom Styling', description: 'Make it yours. Style your newsletters to reflect your personality and tone.' },
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