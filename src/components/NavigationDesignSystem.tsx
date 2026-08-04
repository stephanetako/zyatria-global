import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../lib/language-context';
import { baseUrl } from '../lib/base-url';

const translations = {
  fr: {
    links: [
      { label: 'Accueil', href: '/' },
      { label: 'Services', href: '/services' },
      { label: 'Micro-agents', href: '/micro-agents' },
      { label: 'Tarifs', href: '/pricing' },
      { label: 'Ressources', href: '/knowledge-base' }
    ],
    cta: 'Démo Gratuite',
    ctaHref: '/demo'
  },
  en: {
    links: [
      { label: 'Home', href: '/' },
      { label: 'Services', href: '/services' },
      { label: 'Micro-agents', href: '/micro-agents' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Resources', href: '/knowledge-base' }
    ],
    cta: 'Free Demo',
    ctaHref: '/demo'
  }
};

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  mobile?: boolean;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, mobile = false, onClick }) => {
  const fullHref = href.startsWith('http') ? href : `${baseUrl}${href}`;
  
  const baseStyle: React.CSSProperties = {
    color: '#374151',
    fontWeight: 600,
    textDecoration: 'none',
    transition: 'color 0.3s'
  };

  const mobileStyle: React.CSSProperties = mobile ? {
    display: 'block',
    padding: '10px 0',
    borderBottom: '1px solid #E5E7EB'
  } : {};

  return (
    <a 
      href={fullHref}
      style={{ ...baseStyle, ...mobileStyle }}
      onClick={onClick}
      onMouseEnter={(e) => {
        if (!mobile) {
          e.currentTarget.style.color = '#3B82F6';
        }
      }}
      onMouseLeave={(e) => {
        if (!mobile) {
          e.currentTarget.style.color = '#374151';
        }
      }}
    >
      {children}
    </a>
  );
};

const NavigationDesignSystem: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const t = translations[language as 'en' | 'fr'];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const languages = [
    { code: 'fr' as const, name: 'Français', flag: '🇫🇷' },
    { code: 'en' as const, name: 'English', flag: '🇬🇧' }
  ];

  const currentLang = languages.find(lang => lang.code === language);

  return (
    <nav style={{
      background: 'white',
      padding: '15px 20px',
      boxShadow: isScrolled ? '0 4px 6px rgba(0, 0, 0, 0.1)' : '0 2px 4px rgba(0, 0, 0, 0.05)',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      transition: 'box-shadow 0.3s'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {/* Logo */}
        <a href={baseUrl || '/'}>
          <img 
            src={`${baseUrl}/zyatria-global-logo.svg`}
            alt="ZyatrIA Global" 
            style={{ width: '180px', height: 'auto' }}
            onError={(e) => {
              // Fallback si l'image n'existe pas
              const fallback = document.createElement('span');
              fallback.textContent = 'ZyatrIA Global';
              fallback.style.fontSize = '24px';
              fallback.style.fontWeight = 'bold';
              fallback.style.color = '#3B82F6';
              e.currentTarget.parentNode?.replaceChild(fallback, e.currentTarget);
            }}
          />
        </a>

        {/* Menu Desktop */}
        <div style={{
          display: 'flex',
          gap: '30px',
          alignItems: 'center'
        }}
        className="desktop-menu"
        >
          {t.links.map((link: { label: string; href: string }, index: number) => (
            <NavLink key={index} href={link.href}>
              {link.label}
            </NavLink>
          ))}
          
          {/* Language Selector */}
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 12px',
                background: 'white',
                border: '1px solid #E5E7EB',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: 600,
                color: '#374151',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#3B82F6';
                e.currentTarget.style.color = '#3B82F6';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#E5E7EB';
                e.currentTarget.style.color = '#374151';
              }}
            >
              <Globe size={16} />
              <span>{currentLang?.flag}</span>
              <span style={{ display: typeof window !== 'undefined' && window.innerWidth > 1024 ? 'inline' : 'none' }}>
                {currentLang?.name}
              </span>
            </button>
            
            {isLangMenuOpen && (
              <div style={{
                position: 'absolute',
                top: '100%',
                right: 0,
                marginTop: '8px',
                background: 'white',
                border: '1px solid #E5E7EB',
                borderRadius: '6px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                minWidth: '150px',
                zIndex: 1000
              }}>
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setIsLangMenuOpen(false);
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      width: '100%',
                      padding: '10px 16px',
                      background: language === lang.code ? '#F3F4F6' : 'white',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: '14px',
                      fontWeight: language === lang.code ? 600 : 400,
                      color: '#374151',
                      textAlign: 'left',
                      transition: 'background 0.2s'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#F3F4F6';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = language === lang.code ? '#F3F4F6' : 'white';
                    }}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <a 
            href={`${baseUrl}${t.ctaHref}`}
            className="btn-primary" 
            style={{ 
              padding: '8px 16px', 
              fontSize: '14px',
              textDecoration: 'none',
              display: 'inline-block'
            }}
          >
            {t.cta}
          </a>
        </div>

        {/* Bouton Menu Mobile */}
        <button
          onClick={toggleMobileMenu}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            color: '#374151'
          }}
          className="mobile-menu-button"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu Mobile */}
      <div 
        style={{
          display: isMobileMenuOpen ? 'block' : 'none',
          background: 'white',
          padding: '20px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          marginTop: '15px',
          borderRadius: '8px'
        }}
        className="mobile-menu"
      >
        {t.links.map((link: { label: string; href: string }, index: number) => (
          <NavLink key={index} href={link.href} mobile onClick={closeMobileMenu}>
            {link.label}
          </NavLink>
        ))}
        
        {/* Language Selector Mobile */}
        <div style={{
          padding: '10px 0',
          borderBottom: '1px solid #E5E7EB'
        }}>
          <div style={{
            display: 'flex',
            gap: '10px'
          }}>
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code);
                  closeMobileMenu();
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 12px',
                  background: language === lang.code ? '#3B82F6' : 'white',
                  color: language === lang.code ? 'white' : '#374151',
                  border: '1px solid #E5E7EB',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: 600,
                  flex: 1
                }}
              >
                <span>{lang.flag}</span>
                <span>{lang.name}</span>
              </button>
            ))}
          </div>
        </div>
        
        <a 
          href={`${baseUrl}${t.ctaHref}`}
          onClick={closeMobileMenu}
          style={{
            display: 'block',
            padding: '10px 0',
            color: '#3B82F6',
            fontWeight: 600,
            textDecoration: 'none'
          }}
        >
          {t.cta}
        </a>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-menu {
            display: none !important;
          }
          .mobile-menu-button {
            display: block !important;
          }
        }

        @media (min-width: 769px) {
          .mobile-menu {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default NavigationDesignSystem;






