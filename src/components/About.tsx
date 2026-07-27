import { useLanguage } from '../contexts/LanguageContext';
import { User } from 'lucide-react';
import { motion } from 'framer-motion';

export const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="container">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">
          <User className="contact-icon" size={32} />
          {t.about.title}
        </h2>
        <div className="glass-panel" style={{ padding: '40px' }}>
          <p className="about-text" style={{ lineHeight: '1.8' }}>
            {t.about.description}
          </p>
        </div>
      </motion.div>
    </section>
  );
};
