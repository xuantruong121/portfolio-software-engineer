import { useLanguage } from '../contexts/LanguageContext';
import { User } from 'lucide-react';
import { motion } from 'framer-motion';

export const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="container">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">
          <span className="text-gradient">{t.about.title}</span>
        </h2>
        
        <div className="glass-panel" style={{ padding: '60px', maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', padding: '16px', borderRadius: '50%', background: 'var(--gradient-glow)', marginBottom: '32px' }}>
            <User size={40} className="contact-icon" />
          </div>
          <p className="about-text" style={{ 
            fontSize: '1.2rem', 
            lineHeight: '1.9', 
            color: 'var(--text-secondary)'
          }}>
            {t.about.description}
          </p>
        </div>
      </motion.div>
    </section>
  );
};
