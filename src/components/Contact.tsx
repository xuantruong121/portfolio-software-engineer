import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export const Contact = () => {
  const { t } = useLanguage();

  const contacts = [
    {
      label: t.contact.email,
      value: "xtruong121.work@gmail.com",
      href: "mailto:xtruong121.work@gmail.com",
      icon: <Mail size={32} />
    },
    {
      label: t.contact.phone,
      value: "0352359401",
      href: "tel:+84352359401",
      icon: <Phone size={32} />
    },
    {
      label: t.contact.linkedin,
      value: "LinkedIn Profile",
      href: "https://www.linkedin.com/in/nguyen-do-xuan-truong-7865b7285/",
      icon: <FaLinkedin size={32} />
    },
    {
      label: t.contact.github,
      value: "xuantruong121",
      href: "https://github.com/xuantruong121",
      icon: <FaGithub size={32} />
    }
  ];

  return (
    <section id="contact" className="container" style={{ paddingBottom: '160px' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">
          <span className="text-gradient">{t.contact.title}</span>
        </h2>
        
        <div className="contact-grid">
          {contacts.map((contact, idx) => (
            <a 
              href={contact.href}
              target={contact.href.startsWith('http') ? '_blank' : '_self'}
              rel="noreferrer"
              key={idx} 
              className="glass-panel contact-card"
            >
              <div className="skill-icon-wrapper" style={{ marginBottom: '16px' }}>
                {contact.icon}
              </div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                {contact.label}
              </div>
              <div style={{ fontSize: '1.25rem', fontFamily: 'Outfit', fontWeight: 600 }}>
                {contact.value}
              </div>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
