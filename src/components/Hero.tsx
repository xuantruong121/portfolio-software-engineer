import { useLanguage } from '../contexts/LanguageContext';
import { FileText } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="hero-section">
      <div className="container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="hero-greeting">{t.hero.greeting}</div>
          <h1 className="hero-name text-gradient">{t.hero.name}</h1>
          <h2 className="hero-role">{t.hero.role}</h2>
          <p className="hero-subtitle">{t.hero.subtitle}</p>
          
          <div className="hero-actions">
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
