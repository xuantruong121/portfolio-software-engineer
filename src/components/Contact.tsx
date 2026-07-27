import { useLanguage } from '../contexts/LanguageContext';
import { Mail, Phone, Send } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

export const Contact = () => {
  const { t } = useLanguage();

  const contacts = [
    {
      label: t.contact.email,
      value: "xtruong121.work@gmail.com",
      icon: <Mail size={24} />,
      href: "mailto:xtruong121.work@gmail.com"
    },
    {
      label: t.contact.phone,
      value: "0352359401",
      icon: <Phone size={24} />,
      href: "tel:+84352359401"
    },
    {
      label: t.contact.linkedin,
      value: "LinkedIn Profile",
      icon: <FaLinkedin size={24} />,
      href: "https://www.linkedin.com/in/nguyen-do-xuan-truong-7865b7285/"
    },
    {
      label: t.contact.github,
      value: "github.com/xuantruong121",
      icon: <FaGithub size={24} />,
      href: "https://github.com/xuantruong121"
    }
  ];

  return (
    <section id="contact" className="container" style={{ paddingBottom: '120px' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">
          <Send className="contact-icon" size={32} />
          {t.contact.title}
        </h2>
        
        <div className="contact-grid">
          {contacts.map((contact, idx) => (
            <motion.a 
              href={contact.href}
              target={contact.href.startsWith('http') ? '_blank' : '_self'}
              rel="noreferrer"
              key={idx} 
              className="glass-panel contact-card"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="contact-icon">{contact.icon}</div>
              <div>
                <div style={{ fontSize: '0.85rem', marginBottom: '4px', opacity: 0.8 }}>{contact.label}</div>
                <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{contact.value}</div>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
