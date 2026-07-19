import React from 'react';
import { Phone, Mail, Facebook, Twitter, Linkedin } from 'lucide-react';
import { useLanguage } from '../lib/language-context';
import { baseUrl } from '../lib/base-url';

const translations = {
  fr: {
    tagline: 'IA sans frontières. Entreprise Canadienne | Québec 🇨🇦',
    description: 'Agence internationale spécialisée en agents IA, automatisation et micro-agents IA.',
    navigation: {
      title: 'Navigation',
      links: [
        { label: 'Accueil', href: '/' },
        { label: 'Services', href: '/services' },
        { label: 'Micro-agents IA', href: '/micro-agents' },
        { label: 'Tarifs', href: '/pricing' },
        { label: 'Démo', href: '/demo' },
        { label: 'Contact', href: '/contact-simple' }
      ]
    },
    services: {
      title: 'Services',
      links: [
        { label: 'Audit IA', href: '/services#audit' },
        { label: 'Consultation', href: '/services#consultation' },
        { label: 'Formation', href: '/services#formation' }
      ]
    },
    sectors: {
      title: 'Secteurs',
      links: [
        { label: 'E-commerce', href: '/services#ecommerce' },
        { label: 'Immobilier', href: '/services#immobilier' },
        { label: 'Coaching', href: '/services#coaching' },
        { label: 'SaaS & Tech', href: '/services#saas' },
        { label: 'Santé & Bien-être', href: '/services#sante' },
        { label: 'Services Professionnels', href: '/services#professionnels' }
      ]
    },
    contact: {
      title: 'Contact',
      phone: '+1 (438) 887-4507',
      email: 'ZyatrIA.contact@gmail.com'
    },
    copyright: {
      text: '© 2026 ZyatrIA Global. Tous droits réservés.',
      privacy: 'Politique de Confidentialité',
      terms: 'Conditions d\'Utilisation',
      regions: 'Opère en Amérique du Nord, Europe, Afrique francophone et Amérique latine',
      powered: 'Propulsé par l\'innovation et l\'intelligence artificielle.'
    }
  },
  en: {
    tagline: 'AI without borders. Canadian Company | Quebec 🇨🇦',
    description: 'International agency specialized in AI agents, automation and AI micro-agents.',
    navigation: {
      title: 'Navigation',
      links: [
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: 'AI Micro-agents', href: '/micro-agents' },
        { label: 'Pricing', href: '/pricing' },
        { label: 'Demo', href: '/demo' },
        { label: 'Contact', href: '/contact-simple' }
      ]
    },
    services: {
      title: 'Services',
      links: [
        { label: 'AI Audit', href: '/services#audit' },
        { label: 'Consultation', href: '/services#consultation' },
        { label: 'Training', href: '/services#formation' }
      ]
    },
    sectors: {
      title: 'Sectors',
      links: [
        { label: 'E-commerce', href: '/services#ecommerce' },
        { label: 'Real Estate', href: '/services#immobilier' },
        { label: 'Coaching', href: '/services#coaching' },
        { label: 'SaaS & Tech', href: '/services#saas' },
        { label: 'Health & Wellness', href: '/services#sante' },
        { label: 'Professional Services', href: '/services#professionnels' }
      ]
    },
    contact: {
      title: 'Contact',
      phone: '+1 (438) 887-4507',
      email: 'ZyatrIA.contact@gmail.com'
    },
    copyright: {
      text: '© 2026 ZyatrIA Global. All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      regions: 'Operating in North America, Europe, Francophone Africa and Latin America',
      powered: 'Powered by innovation and artificial intelligence.'
    }
  }
};

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => {
  const fullHref = href.startsWith('http') ? href : `${baseUrl}${href}`;
  
  return (
    <a 
      href={fullHref}
      style={{
        color: '#CBD5E1',
        textDecoration: 'none',
        transition: 'color 0.3s'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = '#3B82F6';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = '#CBD5E1';
      }}
    >
      {children}
    </a>
  );
};

const FooterDesignSystem: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="footer">
      <div className="footer-grid">
        {/* Colonne 1 : À propos */}
        <div className="footer-column">
          <img 
            src={`${baseUrl}/zyatria-global-logo-white.svg`}
            alt="ZyatrIA Global" 
            style={{ width: '180px', height: 'auto', marginBottom: '20px' }}
            onError={(e) => {
              // Fallback si l'image n'existe pas
              e.currentTarget.style.display = 'none';
              const fallback = document.createElement('h3');
              fallback.textContent = 'ZyatrIA Global';
              fallback.style.color = '#FFFFFF';
              fallback.style.marginBottom = '20px';
              e.currentTarget.parentNode?.insertBefore(fallback, e.currentTarget);
            }}
          />
          <p style={{ color: '#CBD5E1', lineHeight: '1.6', marginBottom: '20px' }}>
            {t.tagline}
          </p>
          <p style={{ color: '#CBD5E1', lineHeight: '1.6' }}>
            {t.description}
          </p>
        </div>

        {/* Colonne 2 : Navigation */}
        <div className="footer-column">
          <h3>{t.navigation.title}</h3>
          <ul>
            {t.navigation.links.map((link, index) => (
              <li key={index}>
                <FooterLink href={link.href}>{link.label}</FooterLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Colonne 3 : Services */}
        <div className="footer-column">
          <h3>{t.services.title}</h3>
          <ul>
            {t.services.links.map((link, index) => (
              <li key={index}>
                <FooterLink href={link.href}>{link.label}</FooterLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Colonne 4 : Secteurs */}
        <div className="footer-column">
          <h3>{t.sectors.title}</h3>
          <ul>
            {t.sectors.links.map((link, index) => (
              <li key={index}>
                <FooterLink href={link.href}>{link.label}</FooterLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Colonne 5 : Contact */}
        <div className="footer-column">
          <h3>{t.contact.title}</h3>
          <p style={{ 
            color: '#CBD5E1', 
            marginBottom: '10px', 
            display: 'flex', 
            alignItems: 'center',
            gap: '10px'
          }}>
            <Phone size={18} style={{ color: '#3B82F6' }} />
            <a 
              href={`tel:${t.contact.phone.replace(/\s/g, '')}`}
              style={{ color: '#CBD5E1', textDecoration: 'none' }}
            >
              {t.contact.phone}
            </a>
          </p>
          <p style={{ 
            color: '#CBD5E1', 
            marginBottom: '20px', 
            display: 'flex', 
            alignItems: 'center',
            gap: '10px'
          }}>
            <Mail size={18} style={{ color: '#3B82F6' }} />
            <a 
              href={`mailto:${t.contact.email}`}
              style={{ color: '#CBD5E1', textDecoration: 'none' }}
            >
              {t.contact.email}
            </a>
          </p>
          <div className="social-icons">
            <a 
              href="https://facebook.com/zyatriaglobal" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Facebook"
              style={{
                color: '#CBD5E1',
                transition: 'color 0.3s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#3B82F6';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#CBD5E1';
              }}
            >
              <Facebook size={24} />
            </a>
            <a 
              href="https://twitter.com/zyatriaglobal" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Twitter"
              style={{
                color: '#CBD5E1',
                transition: 'color 0.3s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#3B82F6';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#CBD5E1';
              }}
            >
              <Twitter size={24} />
            </a>
            <a 
              href="https://linkedin.com/company/zyatria-global" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              style={{
                color: '#CBD5E1',
                transition: 'color 0.3s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#3B82F6';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#CBD5E1';
              }}
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="copyright">
        <p>
          {t.copyright.text} |{' '}
          <FooterLink href="/privacy">{t.copyright.privacy}</FooterLink> |{' '}
          <FooterLink href="/terms">{t.copyright.terms}</FooterLink> |{' '}
          {t.copyright.regions}
        </p>
        <p style={{ marginTop: '10px', fontSize: '12px' }}>
          {t.copyright.powered}
        </p>
      </div>
    </footer>
  );
};

export default FooterDesignSystem;
