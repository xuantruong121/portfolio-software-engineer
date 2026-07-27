import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Code2, Server, Database, Wrench } from 'lucide-react';

export const Skills = () => {
  const { t } = useLanguage();

  const skills = [
    {
      title: t.skills.backend,
      icon: <Server size={28} />,
      items: ['Java', 'Node.js', 'Spring Boot 3', 'Spring Security', 'REST API']
    },
    {
      title: t.skills.frontend,
      icon: <Code2 size={28} />,
      items: ['TypeScript', 'ReactJS / React 19', 'React Native (Expo)', 'Ant Design', 'Framer Motion']
    },
    {
      title: t.skills.database,
      icon: <Database size={28} />,
      items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'AWS S3']
    },
    {
      title: t.skills.tools,
      icon: <Wrench size={28} />,
      items: ['Git / GitHub', 'Docker', 'Postman', 'Swagger / OpenAPI', 'VS Code']
    }
  ];

  return (
    <section id="skills" className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">
          <span className="text-gradient">{t.skills.title}</span>
        </h2>
        
        <div className="skills-grid">
          {skills.map((category, idx) => (
            <div key={idx} className={`glass-panel skill-category ${idx === 0 || idx === 1 ? 'glass-panel-glow' : ''}`}>
              <h3>
                <div className="skill-icon-wrapper">
                  {category.icon}
                </div>
                {category.title}
              </h3>
              <ul className="skill-list">
                {category.items.map((item, i) => (
                  <li key={i} className="skill-item">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
