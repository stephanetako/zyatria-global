

import React, { useState } from 'react';
import { Button } from './ui/button';
import { Globe, Menu, X, Home, Briefcase, Bot, DollarSign } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { baseUrl } from '../lib/base-url';
import { useLanguage } from '../lib/language-context';

const Navigation: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: 'en' as const, name: 'English', flag: '🇬🇧' },
    { code: 'fr' as const, name: 'Français', flag: '🇫🇷' },
  ];

  const translations: Record<string, any> = {
    en: {
      home: 'Home',
      services: 'Services',
      microAgents: 'Micro-agents',
      pricing: 'Pricing',
      demo: 'Demo',
      about: 'About',
      getStarted: 'Get Started',
      resources: 'Resources',
      technology: 'Technology',
      docs: 'Documentation',
      help: 'Help Center',
    },
    fr: {
      home: 'Accueil',
      services: 'Services',
      microAgents: 'Micro-agents',
      pricing: 'Tarifs',
      demo: 'Démo',
      about: 'À propos',
      getStarted: 'Commencer',
      resources: 'Ressources',
      technology: 'Technologie',
      docs: 'Documentation',
      help: 'Centre d\'Aide',
    },
  };

  const t = translations[language];
  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#" className="flex items-center group">
            <img 
              src="/zyatria-global-logo.svg" 
              alt="ZyatrIA Global — Agents IA Intelligents pour les Entreprises Modernes"
              style={{ width: '200px', height: 'auto' }}
              className="transition-transform group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href={`${baseUrl}/`} className="text-foreground hover:text-primary transition flex items-center gap-1.5">
              <Home className="w-4 h-4" />
              {t.home}
            </a>
            <a href={`${baseUrl}/services`} className="text-foreground hover:text-primary transition flex items-center gap-1.5">
              <Briefcase className="w-4 h-4" />
              {t.services}
            </a>
            <a href={`${baseUrl}/micro-agents`} className="text-foreground hover:text-primary transition flex items-center gap-1.5">
              <Bot className="w-4 h-4" />
              {t.microAgents}
            </a>
            <a href={`${baseUrl}/pricing`} className="text-foreground hover:text-primary transition flex items-center gap-1.5">
              <DollarSign className="w-4 h-4" />
              {t.pricing}
            </a>
            
            {/* Resources Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="text-foreground hover:text-primary transition flex items-center gap-1">
                  {t.resources}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <a href={`${baseUrl}/technology`} className="cursor-pointer">
                    {t.technology}
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href={`${baseUrl}/docs`} className="cursor-pointer">
                    {t.docs}
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href={`${baseUrl}/knowledge-base`} className="cursor-pointer">
                    {t.help}
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="gap-2">
                  <Globe className="w-4 h-4" />
                  <span className="hidden sm:inline">{currentLanguage?.flag}</span>
                  <span className="hidden lg:inline">{currentLanguage?.name}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className="cursor-pointer"
                  >
                    <span className="mr-2">{lang.flag}</span>
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* CTA Button */}
            <Button asChild className="hidden md:inline-flex">
              <a href={`${baseUrl}/demo`}>{t.demo}</a>
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border">
            <a
              href={`${baseUrl}/`}
              className="block text-foreground hover:text-primary transition flex items-center gap-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Home className="w-4 h-4" />
              {t.home}
            </a>
            <a
              href={`${baseUrl}/services`}
              className="block text-foreground hover:text-primary transition flex items-center gap-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Briefcase className="w-4 h-4" />
              {t.services}
            </a>
            <a
              href={`${baseUrl}/micro-agents`}
              className="block text-foreground hover:text-primary transition flex items-center gap-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Bot className="w-4 h-4" />
              {t.microAgents}
            </a>
            <a
              href={`${baseUrl}/pricing`}
              className="block text-foreground hover:text-primary transition flex items-center gap-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <DollarSign className="w-4 h-4" />
              {t.pricing}
            </a>
            <a
              href={`${baseUrl}/technology`}
              className="block text-foreground hover:text-primary transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.technology}
            </a>
            <a
              href={`${baseUrl}/docs`}
              className="block text-foreground hover:text-primary transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.docs}
            </a>
            <a
              href={`${baseUrl}/knowledge-base`}
              className="block text-foreground hover:text-primary transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.help}
            </a>
            <Button asChild className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600 shadow-lg shadow-amber-500/30 hover:shadow-xl">
              <a href={`${baseUrl}/demo`}>{t.demo}</a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;




























