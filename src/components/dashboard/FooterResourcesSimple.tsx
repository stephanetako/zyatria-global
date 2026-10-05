import React from 'react';
import { Phone, Mail } from 'lucide-react';
import { baseUrl } from '../../lib/base-url';

interface FooterResourcesSimpleProps {
  lang?: 'en' | 'fr' | 'es' | 'pt';
}

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

export default function FooterResourcesSimple({ lang = 'fr' }: FooterResourcesSimpleProps) {
  const t = translations[lang];

  return (
    <footer style={{
      marginTop: '60px',
      padding: '40px 20px',
      background: 'linear-gradient(to bottom, #F8FAFC, #F1F5F9)',
      borderTop: '1px solid #E2E8F0',
      borderRadius: '12px'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Header with Logo */}
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            marginBottom: '15px' 
          }}>
            <img 
              src={`${baseUrl}/zyatria-global-logo.svg`}
              alt="ZyatrIA Global" 
              style={{ 
                height: '50px', 
                width: 'auto'
              }}
              onError={(e) => {
                // Fallback si le logo n'existe pas
                const target = e.currentTarget as HTMLImageElement;
                target.style.display = 'none';
                const fallback = document.createElement('h3');
                fallback.textContent = 'ZyatrIA Global';
                fallback.style.fontSize = '24px';
                fallback.style.fontWeight = '700';
                fallback.style.color = '#1E293B';
                fallback.style.marginBottom = '8px';
                target.parentNode?.insertBefore(fallback, target);
              }}
            />
          </div>
          <p style={{ 
            fontSize: '14px', 
            color: '#64748B',
            marginBottom: '8px'
          }}>
            {t.location}
          </p>
          <p style={{ 
            fontSize: '14px', 
            color: '#475569',
            fontWeight: '500'
          }}>
            {t.description}
          </p>
        </div>

        {/* Navigation Links */}
        <div style={{ marginBottom: '30px' }}>
          <h4 style={{ 
            fontSize: '14px', 
            fontWeight: '700', 
            color: '#1E293B',
            marginBottom: '15px',
            textAlign: 'center'
          }}>
            {t.navigation}
          </h4>
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            justifyContent: 'center', 
            gap: '15px',
            marginBottom: '10px'
          }}>
            {t.links.map((link, index) => (
              <a
                key={index}
                href={`${baseUrl}${link.href}`}
                style={{
                  fontSize: '14px',
                  color: '#3B82F6',
                  textDecoration: 'none',
                  fontWeight: '500',
                  transition: 'color 0.3s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#2563EB'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#3B82F6'}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '40px',
          marginBottom: '30px',
          flexWrap: 'wrap'
        }}>
          <div style={{ textAlign: 'center' }}>
            <p style={{ 
              fontSize: '12px', 
              fontWeight: '700', 
              color: '#64748B',
              marginBottom: '6px',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              {t.phone}
            </p>
            <a 
              href={`tel:${t.phoneNumber.replace(/\s/g, '')}`}
              style={{
                fontSize: '14px',
                color: '#1E293B',
                textDecoration: 'none',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                justifyContent: 'center'
              }}
            >
              <Phone size={16} style={{ color: '#3B82F6' }} />
              {t.phoneNumber}
            </a>
          </div>

          <div style={{ textAlign: 'center' }}>
            <p style={{ 
              fontSize: '12px', 
              fontWeight: '700', 
              color: '#64748B',
              marginBottom: '6px',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              {t.email}
            </p>
            <a 
              href={`mailto:${t.emailAddress}`}
              style={{
                fontSize: '14px',
                color: '#1E293B',
                textDecoration: 'none',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                justifyContent: 'center'
              }}
            >
              <Mail size={16} style={{ color: '#3B82F6' }} />
              {t.emailAddress}
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div style={{ 
          textAlign: 'center',
          paddingTop: '20px',
          borderTop: '1px solid #E2E8F0'
        }}>
          <p style={{ 
            fontSize: '14px', 
            color: '#475569',
            marginBottom: '8px',
            fontWeight: '600'
          }}>
            {t.copyright}
          </p>
          <p style={{ 
            fontSize: '13px', 
            color: '#64748B',
            marginBottom: '12px'
          }}>
            {t.rights}
          </p>
          <p style={{ 
            fontSize: '13px', 
            color: '#64748B',
            marginBottom: '15px'
          }}>
            {t.regions}
          </p>

          {/* Legal Links */}
          <div style={{ marginBottom: '15px' }}>
            <p style={{ 
              fontSize: '12px', 
              fontWeight: '700', 
              color: '#64748B',
              marginBottom: '8px',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              {t.legal}
            </p>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '15px',
              flexWrap: 'wrap'
            }}>
              <a
                href={`${baseUrl}/privacy`}
                style={{
                  fontSize: '13px',
                  color: '#3B82F6',
                  textDecoration: 'none',
                  fontWeight: '500'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#2563EB'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#3B82F6'}
              >
                {t.privacy}
              </a>
              <a
                href={`${baseUrl}/terms`}
                style={{
                  fontSize: '13px',
                  color: '#3B82F6',
                  textDecoration: 'none',
                  fontWeight: '500'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#2563EB'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#3B82F6'}
              >
                {t.terms}
              </a>
            </div>
          </div>

          {/* Powered by */}
          <p style={{ 
            fontSize: '12px', 
            color: '#94A3B8',
            fontStyle: 'italic'
          }}>
            {t.powered}
          </p>
        </div>
      </div>
    </footer>
  );
}


