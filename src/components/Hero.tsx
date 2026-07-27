import { useLanguage } from '../contexts/LanguageContext';
import { FileText } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="hero-section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        <motion.div 
          className="hero-content"
          style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="text-label" style={{ marginBottom: '24px' }}>
            {t.hero.greeting}
          </div>
          
          <h1 className="hero-name" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', marginBottom: '16px' }}>
            {t.hero.name}
          </h1>
          
          <h2 className="hero-role text-gradient" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '32px' }}>
            {t.hero.role}
          </h2>
          
          <p className="hero-subtitle" style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '48px', lineHeight: '1.8' }}>
            {t.hero.subtitle}
          </p>
          
          <div className="hero-actions" style={{ display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap' }}>
            <a href="#contact" className="btn-primary">
              <FileText size={20} />
              {t.hero.resumeBtn}
            </a>
            <a href="https://github.com/xuantruong121" target="_blank" rel="noreferrer" className="btn-secondary">
              <FaGithub size={20} />
              {t.hero.githubBtn}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
