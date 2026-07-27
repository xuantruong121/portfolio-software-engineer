import { useLanguage } from '../contexts/LanguageContext';

export const Header = () => {
  const { lang, setLang, t } = useLanguage();

  return (
    <header className="header">
      <div className="container header-container">
        <div className="text-gradient" style={{ fontFamily: 'Outfit', fontWeight: 700, fontSize: '1.5rem' }}>
          XT.
        </div>
        
        <div className="nav-links">
          <a href="#about">{t.nav.about}</a>
          <a href="#skills">{t.nav.skills}</a>
          <a href="#projects">{t.nav.projects}</a>
          <a href="#contact">{t.nav.contact}</a>
        </div>

        <div className="lang-switch">
          <button 
            className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
            onClick={() => setLang('en')}
          >
            EN
          </button>
          <button 
            className={`lang-btn ${lang === 'vi' ? 'active' : ''}`}
            onClick={() => setLang('vi')}
          >
            VI
          </button>
        </div>
      </div>
    </header>
  );
};
