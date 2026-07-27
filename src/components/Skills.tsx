import { useLanguage } from '../contexts/LanguageContext';
import { Code2, Server, Database, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';

export const Skills = () => {
  const { t } = useLanguage();

  const skills = [
    {
      title: t.skills.backend,
      icon: <Server size={24} className="contact-icon" />,
      items: ['Java', 'Node.js', 'Spring Boot 3', 'Spring Security', 'REST API']
    },
    {
      title: t.skills.frontend,
      icon: <Code2 size={24} className="contact-icon" />,
      items: ['TypeScript', 'ReactJS / React 19', 'React Native (Expo)', 'Ant Design']
    },
    {
      title: t.skills.database,
      icon: <Database size={24} className="contact-icon" />,
      items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'AWS S3']
    },
    {
      title: t.skills.tools,
      icon: <Wrench size={24} className="contact-icon" />,
      items: ['Git & GitHub', 'Docker', 'Postman', 'Swagger / OpenAPI']
    }
  ];

  return (
    <section id="skills" className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">
          <Code2 className="contact-icon" size={32} />
          {t.skills.title}
        </h2>
        
        <div className="skills-grid">
          {skills.map((category, idx) => (
            <motion.div 
              key={idx} 
              className="glass-panel skill-category"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <h3>{category.icon} {category.title}</h3>
              <ul className="skill-list">
                {category.items.map((item, i) => (
                  <li key={i} className="skill-item">{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
