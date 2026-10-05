import React from 'react';
import { Phone, Mail, MapPin, Globe } from 'lucide-react';
import { useLanguage } from '../lib/language-context';
import { baseUrl } from '../lib/base-url';

const translations = {
  fr: {
    company: 'ZyatrIA Global',
    tagline: 'IA sans frontières.',
    location: 'Entreprise Canadienne | Québec 🇨🇦',
    description: 'Agence internationale spécialisée en agents IA, automatisation et micro‑agents IA.',
    navigation: 'Navigation',
    links: [
      { label: 'Accueil', href: '/' },
      { label: 'Services', href: '/services' },
      { label: 'Micro‑agents IA', href: '/micro-agents' },
      { label: 'Tarifs', href: '/pricing' },
      { label: 'À propos', href: '/about' },
      { label: 'Démo', href: '/demo' },
      { label: 'Contact', href: '/contact-simple' }
    ],
    contact: 'Contact',
    phone: 'Téléphone',
    phoneNumber: '+1 (438) 887-4507',
    email: 'Courriel',
    emailAddress: 'ZyatrIA.contact@gmail.com',
    copyright: '© 2026 ZyatrIA Global',
    rights: 'Tous droits réservés',
    regions: 'Opère en Amérique du Nord, Europe, Afrique francophone et Amérique latine',
    legal: 'Légal',
    privacy: 'Politique de confidentialité',
    terms: 'Conditions d\'utilisation',
    powered: 'Propulsé par l\'innovation et l\'intelligence artificielle.'
  },
  en: {
    company: 'ZyatrIA Global',
    tagline: 'AI without borders.',
    location: 'Canadian Company | Quebec 🇨🇦',
    description: 'International agency specialized in AI agents, automation and AI micro-agents.',
    navigation: 'Navigation',
    links: [
      { label: 'Home', href: '/' },
      { label: 'Services', href: '/services' },
      { label: 'AI Micro-agents', href: '/micro-agents' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'About', href: '/about' },
      { label: 'Demo', href: '/demo' },
      { label: 'Contact', href: '/contact-simple' }
    ],
    contact: 'Contact',
    phone: 'Phone',
    phoneNumber: '+1 (438) 887-4507',
    email: 'Email',
    emailAddress: 'ZyatrIA.contact@gmail.com',
    copyright: '© 2026 ZyatrIA Global',
    rights: 'All rights reserved',
    regions: 'Operating in North America, Europe, Francophone Africa and Latin America',
    legal: 'Legal',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    powered: 'Powered by innovation and artificial intelligence.'
  },
  es: {
    company: 'ZyatrIA Global',
    tagline: 'IA sin fronteras.',
    location: 'Empresa Canadiense | Quebec 🇨🇦',
    description: 'Agencia internacional especializada en agentes IA, automatización y micro-agentes IA.',
    navigation: 'Navegación',
    links: [
      { label: 'Inicio', href: '/' },
      { label: 'Servicios', href: '/services' },
      { label: 'Micro-agentes IA', href: '/micro-agents' },
      { label: 'Precios', href: '/pricing' },
      { label: 'Acerca de', href: '/about' },
      { label: 'Demo', href: '/demo' },
      { label: 'Contacto', href: '/contact-simple' }
    ],
    contact: 'Contacto',
    phone: 'Teléfono',
    phoneNumber: '+1 (438) 887-4507',
    email: 'Correo',
    emailAddress: 'ZyatrIA.contact@gmail.com',
    copyright: '© 2026 ZyatrIA Global',
    rights: 'Todos los derechos reservados',
    regions: 'Opera en América del Norte, Europa, África francófona y América Latina',
    legal: 'Legal',
    privacy: 'Política de Privacidad',
    terms: 'Términos de Servicio',
    powered: 'Impulsado por la innovación y la inteligencia artificial.'
  },
  pt: {
    company: 'ZyatrIA Global',
    tagline: 'IA sem fronteiras.',
    location: 'Empresa Canadense | Quebec 🇨🇦',
    description: 'Agência internacional especializada em agentes IA, automação e micro-agentes IA.',
    navigation: 'Navegação',
    links: [
      { label: 'Início', href: '/' },
      { label: 'Serviços', href: '/services' },
      { label: 'Micro-agentes IA', href: '/micro-agents' },
      { label: 'Preços', href: '/pricing' },
      { label: 'Sobre', href: '/about' },
      { label: 'Demo', href: '/demo' },
      { label: 'Contato', href: '/contact-simple' }
    ],
    contact: 'Contato',
    phone: 'Telefone',
    phoneNumber: '+1 (438) 887-4507',
    email: 'Email',
    emailAddress: 'ZyatrIA.contact@gmail.com',
    copyright: '© 2026 ZyatrIA Global',
    rights: 'Todos os direitos reservados',
    regions: 'Opera na América do Norte, Europa, África francófona e América Latina',
    legal: 'Legal',
    privacy: 'Política de Privacidade',
    terms: 'Termos de Serviço',
    powered: 'Impulsado pela inovação e inteligência artificial.'
  }
};

export default function FooterDesignSystem() {
  const { language } = useLanguage();
  const supportedLanguage = (language === 'en' || language === 'fr' || language === 'es' || language === 'pt') ? language : 'fr';
  const t = translations[supportedLanguage];

  return (
    <footer style={{
      marginTop: '80px',
      background: 'linear-gradient(135deg, #F5F1EB 0%, #F8F6F3 50%, #FAFAF9 100%)',
      borderTop: '1px solid #E6DCD4',
      boxShadow: '0 -4px 6px -1px rgba(0, 0, 0, 0.05)'
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '60px 40px 30px' }}>
        
        {/* Top Section - Logo & Description */}
        <div style={{ 
          textAlign: 'center', 
          marginBottom: '50px',
          paddingBottom: '40px',
          borderBottom: '2px solid #E6DCD4'
        }}>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            marginBottom: '20px' 
          }}>
            <img 
              src={`${baseUrl}/zyatria-global-logo.svg`}
              alt="ZyatrIA Global" 
              style={{ 
                height: '60px', 
                width: 'auto',
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
              }}
              onError={(e) => {
                const target = e.currentTarget as HTMLImageElement;
                target.style.display = 'none';
                const fallback = document.createElement('h3');
                fallback.textContent = 'ZyatrIA Global';
                fallback.style.fontSize = '28px';
                fallback.style.fontWeight = '700';
                fallback.style.color = '#1E293B';
                fallback.style.marginBottom = '12px';
                target.parentNode?.insertBefore(fallback, target);
              }}
            />
          </div>
          
          <div style={{ 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            marginBottom: '12px'
          }}>
            <MapPin size={18} style={{ color: '#C98769' }} />
            <p style={{ 
              fontSize: '15px', 
              color: '#64748B',
              fontWeight: '600',
              margin: 0
            }}>
              {t.location}
            </p>
          </div>
          
          <p style={{ 
            fontSize: '16px', 
            color: '#475569',
            fontWeight: '500',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            {t.description}
          </p>
        </div>

        {/* Middle Section - Grid Layout */}
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '40px',
          marginBottom: '50px'
        }}>
          
          {/* Navigation Column */}
          <div>
            <h4 style={{ 
              fontSize: '16px', 
              fontWeight: '700', 
              color: '#1E293B',
              marginBottom: '20px',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>
              {t.navigation}
            </h4>
            <div style={{ 
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              {t.links.map((link, index) => (
                <a
                  key={index}
                  href={`${baseUrl}${link.href}`}
                  style={{
                    fontSize: '15px',
                    color: '#64748B',
                    textDecoration: 'none',
                    fontWeight: '500',
                    transition: 'all 0.3s ease',
                    display: 'inline-block'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#C98769';
                    e.currentTarget.style.paddingLeft = '8px';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#64748B';
                    e.currentTarget.style.paddingLeft = '0';
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Column */}
          <div>
            <h4 style={{ 
              fontSize: '16px', 
              fontWeight: '700', 
              color: '#1E293B',
              marginBottom: '20px',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>
              {t.contact}
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <a 
                href={`tel:${t.phoneNumber.replace(/\s/g, '')}`}
                style={{
                  fontSize: '15px',
                  color: '#64748B',
                  textDecoration: 'none',
                  fontWeight: '500',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#C98769'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#64748B'}
              >
                <Phone size={18} style={{ color: '#C98769' }} />
                {t.phoneNumber}
              </a>

              <a 
                href={`mailto:${t.emailAddress}`}
                style={{
                  fontSize: '15px',
                  color: '#64748B',
                  textDecoration: 'none',
                  fontWeight: '500',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#C98769'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#64748B'}
              >
                <Mail size={18} style={{ color: '#C98769' }} />
                {t.emailAddress}
              </a>
            </div>
          </div>

          {/* Regions Column */}
          <div>
            <h4 style={{ 
              fontSize: '16px', 
              fontWeight: '700', 
              color: '#1E293B',
              marginBottom: '20px',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>
              <Globe size={18} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle', color: '#C98769' }} />
              Présence Mondiale
            </h4>
            <p style={{ 
              fontSize: '15px', 
              color: '#64748B',
              lineHeight: '1.7',
              margin: 0
            }}>
              {t.regions}
            </p>
          </div>

        </div>

        {/* Bottom Section - Copyright & Legal */}
        <div style={{ 
          paddingTop: '30px',
          borderTop: '1px solid #E6DCD4'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px'
          }}>
            
            {/* Copyright */}
            <div style={{ textAlign: 'center' }}>
              <p style={{ 
                fontSize: '15px', 
                color: '#1E293B',
                marginBottom: '6px',
                fontWeight: '600'
              }}>
                {t.copyright}
              </p>
              <p style={{ 
                fontSize: '14px', 
                color: '#64748B',
                margin: 0
              }}>
                {t.rights}
              </p>
            </div>

            {/* Legal Links */}
            <div style={{ 
              display: 'flex', 
              gap: '24px',
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}>
              <a
                href={`${baseUrl}/privacy`}
                style={{
                  fontSize: '14px',
                  color: '#64748B',
                  textDecoration: 'none',
                  fontWeight: '500',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#C98769'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#64748B'}
              >
                {t.privacy}
              </a>
              <span style={{ color: '#CBD5E1' }}>•</span>
              <a
                href={`${baseUrl}/terms`}
                style={{
                  fontSize: '14px',
                  color: '#64748B',
                  textDecoration: 'none',
                  fontWeight: '500',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#C98769'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#64748B'}
              >
                {t.terms}
              </a>
            </div>

            {/* Powered by */}
            <p style={{ 
              fontSize: '13px', 
              color: '#94A3B8',
              fontStyle: 'italic',
              margin: 0
            }}>
              {t.powered}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

