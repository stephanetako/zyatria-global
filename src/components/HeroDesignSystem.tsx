import React from 'react';
import { Calendar, Clock } from 'lucide-react';
import { useLanguage } from '../lib/language-context';

const translations = {
  fr: {
    tagline: 'IA sans frontières. Entreprise Canadienne | Québec 🇨🇦',
    title1: 'Transformez Votre Entreprise',
    title2: "Avec l'IA Intelligente",
    description: "Des solutions d'automatisation IA qui travaillent 24/7 pour faire grandir votre entreprise.",
    benefits: 'Déploiement en 10-15 jours | Résultats dès le premier jour',
    ctaConsultation: 'Réserver une Consultation Gratuite',
    ctaRoadmap: 'Voir la Roadmap',
    imageAlt: 'Agents IA Intelligents',
    stats: {
      companies: { value: '50+', label: 'Entreprises' },
      days: { value: '10-15', label: 'Jours' },
      satisfaction: { value: '+42%', label: 'Satisfaction' },
      available: { value: '24/7', label: 'Disponible' },
      clients: { value: '150+', label: 'Clients actifs' }
    }
  },
  en: {
    tagline: 'AI without borders. Canadian Company | Quebec 🇨🇦',
    title1: 'Transform Your Business',
    title2: 'With Intelligent AI',
    description: 'AI automation solutions that work 24/7 to grow your business.',
    benefits: 'Deployment in 10-15 days | Results from day one',
    ctaConsultation: 'Book Free Consultation',
    ctaRoadmap: 'View Roadmap',
    imageAlt: 'Intelligent AI Agents',
    stats: {
      companies: { value: '50+', label: 'Companies' },
      days: { value: '10-15', label: 'Days' },
      satisfaction: { value: '+42%', label: 'Satisfaction' },
      available: { value: '24/7', label: 'Available' },
      clients: { value: '150+', label: 'Active clients' }
    }
  }
};

export default function HeroDesignSystem() {
  const { language } = useLanguage();
  const supportedLanguage = (language === 'en' || language === 'fr') ? language : 'en';
  const t = translations[supportedLanguage];

  const statsArray = [
    t.stats.companies,
    t.stats.days,
    t.stats.satisfaction,
    t.stats.available,
    t.stats.clients
  ];

  return (
    <section id="home" className="section section-gradient" style={{ textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
      {/* Logo */}
      <div style={{ marginBottom: '30px' }}>
        <img 
          src="/zyatria-global-logo.svg" 
          alt="ZyatrIA Global — Agents IA Intelligents" 
          style={{ width: '220px', height: 'auto', margin: '0 auto', display: 'block' }}
        />
        <p style={{ color: '#64748B', marginTop: '10px' }}>
          {t.tagline}
        </p>
      </div>

      {/* Titre et sous-titre */}
      <h1 style={{ marginBottom: '20px' }}>
        {t.title1}<br />
        <span style={{ color: '#3B82F6' }}>{t.title2}</span>
      </h1>
      <p style={{ fontSize: '20px', maxWidth: '700px', margin: '0 auto 30px', lineHeight: '1.6' }}>
        {t.description}
        <br />
        <strong>{t.benefits}</strong>
      </p>

      {/* Boutons CTA */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '60px', flexWrap: 'wrap' }}>
        <a href="#contact" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
          <Calendar size={20} />
          {t.ctaConsultation}
        </a>
        <a href="#roadmap" className="btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
          <Clock size={20} />
          {t.ctaRoadmap}
        </a>
      </div>

      {/* Image flottante (à remplacer par une image réelle) */}
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <img
          src="/hero-dashboard.svg"
          alt={t.imageAlt}
          className="floating-image"
          style={{ width: '100%', borderRadius: '16px', boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)' }}
        />
      </div>

      {/* Stats clés */}
      <div className="stats-grid">
        {statsArray.map((stat, index) => (
          <div key={index} className="stat-card">
            <p className="stat-number">{stat.value}</p>
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}