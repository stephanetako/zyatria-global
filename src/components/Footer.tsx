

import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';
import { baseUrl } from '../lib/base-url';
import { useLanguage } from '../lib/language-context';

const translations = {
  en: {
    tagline: "Intelligent Automation for Modern Business.",
    companyLocation: 'Canadian Company | Quebec 🇨🇦',
    description: "International agency specializing in AI agents, automation and AI micro-agents.",
    navTitle: "Navigation",
    navLinks: [
      { label: "Home", href: `${baseUrl}/` },
      { label: "Services", href: `${baseUrl}/services` },
      { label: "AI Micro-agents", href: `${baseUrl}/micro-agents` },
      { label: "Pricing", href: `${baseUrl}/pricing` },
      { label: "About", href: `${baseUrl}/about` },
      { label: "Demo", href: `${baseUrl}/demo` }
    ],
    infoTitle: "Contact",
    phone: "Phone",
    email: "Email",
    copyright: "© 2026 ZyatrIA Global",
    rights: "All rights reserved",
    regions: "Operating in North America, Europe, French-speaking Africa and Latin America",
    poweredBy: "Powered by innovation and artificial intelligence."
  },
  fr: {
    tagline: "IA sans frontières.",
    companyLocation: 'Entreprise Canadienne | Québec 🇨🇦',
    description: "Agence internationale spécialisée en agents IA, automatisation et micro‑agents IA.",
    navTitle: "Navigation",
    navLinks: [
      { label: "Accueil", href: `${baseUrl}/` },
      { label: "Services", href: `${baseUrl}/services` },
      { label: "Micro‑agents IA", href: `${baseUrl}/micro-agents` },
      { label: "Tarifs", href: `${baseUrl}/pricing` },
      { label: "À propos", href: `${baseUrl}/about` },
      { label: "Démo", href: `${baseUrl}/demo` }
    ],
    infoTitle: "Contact",
    phone: "Téléphone",
    email: "Courriel",
    copyright: "© 2026 ZyatrIA Global",
    rights: "Tous droits réservés",
    regions: "Opère en Amérique du Nord, Europe, Afrique francophone et Amérique latine",
    poweredBy: "Propulsé par l'innovation et l'intelligence artificielle."
  },
  es: {
    tagline: "IA sin fronteras.",
    companyLocation: 'Empresa Canadiense | Quebec 🇨🇦',
    description: "Agencia internacional especializada en agentes IA, automatización y micro-agentes IA.",
    navTitle: "Navegación",
    navLinks: [
      { label: "Inicio", href: `${baseUrl}/` },
      { label: "Servicios", href: `${baseUrl}/services` },
      { label: "Micro-agentes IA", href: `${baseUrl}/micro-agents` },
      { label: "Precios", href: `${baseUrl}/pricing` },
      { label: "Acerca de", href: `${baseUrl}/about` },
      { label: "Demo", href: `${baseUrl}/demo` }
    ],
    infoTitle: "Contacto",
    phone: "Teléfono",
    email: "Correo",
    copyright: "© 2026 ZyatrIA Global",
    rights: "Todos los derechos reservados",
    regions: "Opera en América del Norte, Europa, África francófona y América Latina",
    poweredBy: "Impulsado por la innovación y la inteligencia artificial."
  },
  pt: {
    tagline: "IA sem fronteiras.",
    companyLocation: 'Empresa Canadense | Quebec 🇨🇦',
    description: "Agência internacional especializada em agentes IA, automação e micro-agentes IA.",
    navTitle: "Navegação",
    navLinks: [
      { label: "Início", href: `${baseUrl}/` },
      { label: "Serviços", href: `${baseUrl}/services` },
      { label: "Micro-agentes IA", href: `${baseUrl}/micro-agents` },
      { label: "Preços", href: `${baseUrl}/pricing` },
      { label: "Sobre", href: `${baseUrl}/about` },
      { label: "Demo", href: `${baseUrl}/demo` }
    ],
    infoTitle: "Contato",
    phone: "Telefone",
    email: "E-mail",
    copyright: "© 2026 ZyatrIA Global",
    rights: "Todos os direitos reservados",
    regions: "Opera na América do Norte, Europa, África francófona e América Latina",
    poweredBy: "Alimentado pela inovação e inteligência artificial."
  }
};

const content = {
  en: {
    legal: 'Legal',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service'
  },
  fr: {
    legal: 'Légal',
    privacy: 'Politique de confidentialité',
    terms: "Conditions d'utilisation"
  },
  es: {
    legal: 'Legal',
    privacy: 'Política de privacidad',
    terms: 'Términos de servicio'
  },
  pt: {
    legal: 'Legal',
    privacy: 'Política de privacidade',
    terms: 'Termos de serviço'
  }
};

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language];
  const legalContent = content[language];

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container py-12">
        {/* Footer Grid - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Column 1 - Identity */}
          <div className="footer-col space-y-4">
            <img 
              src="/zyatria-global-logo.svg" 
              alt="ZyatrIA Global Logo"
              style={{ width: '180px', height: 'auto' }}
            />
            
            {/* Tagline */}
            <p className="text-blue-600 font-semibold">
              {t.tagline}
            </p>
            
            {/* Canadian Company Badge */}
            {t.companyLocation && (
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-full">
                <MapPin className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-semibold text-blue-600">
                  {t.companyLocation}
                </span>
              </div>
            )}
            
            {/* Description */}
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t.description}
            </p>
          </div>

          {/* Column 2 - Navigation */}
          <div className="footer-col">
            <h4 className="text-lg font-bold mb-4">{t.navTitle}</h4>
            <ul className="space-y-3">
              {t.navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-blue-600 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-600 group-hover:bg-blue-600 transition-colors"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Legal Information */}
          <div className="footer-col">
            <h4 className="text-lg font-bold mb-4">{t.infoTitle}</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div>
                <p className="font-semibold text-foreground mb-1">{t.phone}</p>
                <a href="tel:+14388874507" className="hover:text-blue-600 transition-colors">
                  +1 (438) 887-4507
                </a>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">{t.email}</p>
                <a href="mailto:ZyatrIA.contact@gmail.com" className="hover:text-blue-600 transition-colors break-all">
                  ZyatrIA.contact@gmail.com
                </a>
              </div>
              <div className="pt-2 border-t border-border">
                <p className="font-semibold text-foreground">{t.copyright}</p>
                <p>{t.rights}</p>
              </div>
              <p className="leading-relaxed">
                {t.regions}
              </p>
              <div>
                <h4 className="font-semibold text-foreground mb-4">
                  {legalContent.legal}
                </h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="/privacy"
                      className="text-zinc-600 dark:text-zinc-400 hover:text-blue-600 transition-colors"
                    >
                      {legalContent.privacy}
                    </a>
                  </li>
                  <li>
                    <a
                      href="/terms"
                      className="text-zinc-600 dark:text-zinc-400 hover:text-blue-600 transition-colors"
                    >
                      {legalContent.terms}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Separator Line */}
        <div className="footer-line h-px bg-border my-8"></div>

        {/* Final Text */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground italic">
            {t.poweredBy}
          </p>
        </div>
      </div>
    </footer>
  );
}


























