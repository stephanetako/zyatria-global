import React from 'react';
import { Facebook, Twitter, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const footerSections: FooterSection[] = [
  {
    title: 'Liens Rapides',
    links: [
      { label: 'Accueil', href: '/' },
      { label: 'Agents IA', href: '#services' },
      { label: 'Tarifs', href: '#pricing' },
      { label: 'Démo', href: '#demo' },
      { label: 'Blog', href: '#blog' },
      { label: 'Contact', href: '#contact' }
    ]
  },
  {
    title: 'Nos Services',
    links: [
      { label: 'Audit IA', href: '#audit' },
      { label: 'Consultation', href: '#consultation' },
      { label: 'Formation', href: '#formation' },
      { label: 'Micro-Agents', href: '#micro-agents' }
    ]
  },
  {
    title: 'Secteurs',
    links: [
      { label: 'E-commerce', href: '#ecommerce' },
      { label: 'Immobilier', href: '#immobilier' },
      { label: 'Coaching', href: '#coaching' },
      { label: 'SaaS', href: '#saas' },
      { label: 'Santé', href: '#sante' }
    ]
  }
];

const socialLinks = [
  { icon: <Facebook className="w-5 h-5" />, href: 'https://facebook.com/zyatriaglobal', label: 'Facebook' },
  { icon: <Twitter className="w-5 h-5" />, href: 'https://twitter.com/zyatriaglobal', label: 'Twitter' },
  { icon: <Linkedin className="w-5 h-5" />, href: 'https://linkedin.com/company/zyatria-global', label: 'LinkedIn' },
  { icon: <Youtube className="w-5 h-5" />, href: 'https://youtube.com/@zyatriaglobal', label: 'YouTube' }
];

const legalLinks = [
  { label: 'CGV', href: '/terms' },
  { label: 'Politique de Confidentialité', href: '/privacy' },
  { label: 'Mentions Légales', href: '/legal' }
];

export default function FooterModern() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16 max-w-7xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          {/* Column 1: About */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold mb-4">À propos de ZyatrIA</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Nous aidons les entreprises à <strong className="text-white">automatiser leur service client et leurs processus</strong> avec des agents IA intelligents.
            </p>
            <img
              src="/zyatria-global-logo-white.svg"
              alt="ZyatrIA Global"
              className="w-40 h-auto"
              onError={(e) => {
                // Fallback to text logo if image doesn't exist
                e.currentTarget.style.display = 'none';
                const textLogo = document.createElement('div');
                textLogo.className = 'text-2xl font-bold text-white';
                textLogo.textContent = 'ZyatrIA Global';
                e.currentTarget.parentElement?.appendChild(textLogo);
              }}
            />
          </div>

          {/* Columns 2-4: Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-bold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Column 5: Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3 text-gray-300">
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <a href="mailto:contact@zyatria.com" className="hover:text-white transition-colors">
                  contact@zyatria.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <a href="tel:+11234567890" className="hover:text-white transition-colors">
                  +1 (123) 456-7890
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>123 Rue de l'Innovation<br />Montréal, QC</span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-colors duration-200"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} ZyatrIA Global. Tous droits réservés.
            </p>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
