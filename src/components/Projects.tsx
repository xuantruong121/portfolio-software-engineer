import { useLanguage } from '../contexts/LanguageContext';
import { FolderGit2, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

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
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">
          <FolderGit2 className="contact-icon" size={32} />
          {t.projects.title}
        </h2>

        <div className="projects-grid">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx} 
              className="glass-panel project-card"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
            >
              <div className="project-header">
                <div>
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-role">{project.role}</div>
                </div>
                <a href={project.link} target="_blank" rel="noreferrer" className="btn-secondary" style={{ padding: '8px 16px' }}>
                  <ExternalLink size={18} />
                  {t.projects.viewProject}
                </a>
              </div>
              
              <p className="project-desc">{project.desc}</p>
              
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {project.tags.map((tag, i) => (
                  <span key={i} style={{ 
                    background: 'rgba(99, 102, 241, 0.1)', 
                    color: 'var(--accent-primary)',
                    padding: '4px 12px',
                    borderRadius: '12px',
                    fontSize: '0.85rem',
                    fontWeight: 500
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
