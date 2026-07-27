import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      ...t.projects.sebook,
      link: "https://github.com/xuantruong121/SEBook-E-Commerce-Bookstore-Platform",
      tags: ['Spring Boot 3', 'Redis', 'React 19', 'TanStack Query']
    },
    {
      ...t.projects.minizalo,
      link: "https://github.com/xuantruong121/MiniZalo",
      tags: ['React Native (Expo)', 'Zustand', 'WebSocket', 'AWS S3']
    },
    {
      ...t.projects.haitebooks,
      link: "https://github.com/xuantruong121/HaiTeBooks_Backend",
      tags: ['Spring Boot 3.3', 'VNPay', 'Cohere API', 'Docker']
    }
  ];

  return (
    <section id="projects" className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">
          <span className="text-gradient">{t.projects.title}</span>
        </h2>

        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div key={idx} className="glass-panel project-card">
              <div className="project-header">
                <div>
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-role">{project.role}</div>
                </div>
                <a href={project.link} target="_blank" rel="noreferrer" className="btn-secondary">
                  <ExternalLink size={18} />
                  {t.projects.viewProject}
                </a>
              </div>
              
              <p className="project-desc">{project.desc}</p>
              
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                {project.tags.map((tag, i) => (
                  <span key={i} className="tech-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
