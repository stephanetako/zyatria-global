import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fr' | 'en' | 'es' | 'pt';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  fr: {
    'nav.home': 'Accueil',
    'nav.services': 'Services',
    'nav.pricing': 'Tarifs',
    'nav.about': 'À propos',
    'nav.contact': 'Contact',
    'hero.title': 'Agents IA & Automation Sans Frontières',
    'hero.subtitle': 'Transformez votre entreprise avec des agents IA intelligents',
    'hero.cta': 'Démarrer maintenant',
    'services.title': 'Nos Services',
    'pricing.title': 'Tarifs',
    'contact.title': 'Contactez-nous',
  },
  en: {
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.pricing': 'Pricing',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'hero.title': 'AI Agents & Automation Without Borders',
    'hero.subtitle': 'Transform your business with intelligent AI agents',
    'hero.cta': 'Get Started',
    'services.title': 'Our Services',
    'pricing.title': 'Pricing',
    'contact.title': 'Contact Us',
  },
  es: {
    'nav.home': 'Inicio',
    'nav.services': 'Servicios',
    'nav.pricing': 'Precios',
    'nav.about': 'Acerca de',
    'nav.contact': 'Contacto',
    'hero.title': 'Agentes IA y Automatización Sin Fronteras',
    'hero.subtitle': 'Transforme su negocio con agentes IA inteligentes',
    'hero.cta': 'Comenzar ahora',
    'services.title': 'Nuestros Servicios',
    'pricing.title': 'Precios',
    'contact.title': 'Contáctenos',
  },
  pt: {
    'nav.home': 'Início',
    'nav.services': 'Serviços',
    'nav.pricing': 'Preços',
    'nav.about': 'Sobre',
    'nav.contact': 'Contato',
    'hero.title': 'Agentes IA e Automação Sem Fronteiras',
    'hero.subtitle': 'Transforme seu negócio com agentes IA inteligentes',
    'hero.cta': 'Começar agora',
    'services.title': 'Nossos Serviços',
    'pricing.title': 'Preços',
    'contact.title': 'Entre em contato',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
