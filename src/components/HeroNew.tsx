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
    stats: {
      companies: 'Entreprises',
      days: 'Jours',
      satisfaction: 'Satisfaction',
      available: 'Disponible',
      clients: 'Clients actifs'
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
    stats: {
      companies: 'Companies',
      days: 'Days',
      satisfaction: 'Satisfaction',
      available: 'Available',
      clients: 'Active clients'
    }
  }
};

export default function HeroNew() {
  const { language } = useLanguage();
  const supportedLanguage = (language === 'en' || language === 'fr') ? language : 'en';
  const t = translations[supportedLanguage];

  return (
    <section 
      id="home" 
      className="relative text-center py-20 px-5 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
        fontFamily: "'Inter', sans-serif"
      }}
    >
      {/* Logo */}
      <div className="mb-10">
        <img
          src="/zyatria-global-logo.svg"
          alt="ZyatrIA Global — Agents IA Intelligents pour les Entreprises Modernes"
          className="w-[220px] h-auto mx-auto block"
        />
        <p className="text-[#64748b] mt-2.5 text-base">
          {t.tagline}
        </p>
      </div>

      {/* Titre principal */}
      <h1 className="text-5xl font-extrabold text-[#1e293b] mb-5 leading-tight">
        {t.title1}
        <br />
        <span className="text-[#3b82f6]">{t.title2}</span>
      </h1>

      {/* Sous-titre avec bénéfices clés */}
      <p className="text-xl text-[#64748b] mb-8 max-w-[700px] mx-auto leading-relaxed">
        {t.description}
        <br />
        <strong>{t.benefits}</strong>
      </p>

      {/* Boutons CTA */}
      <div className="flex justify-center gap-5 mb-16 flex-wrap">
        <a
          href="#contact"
          className="group inline-flex items-center gap-2 px-8 py-3.5 bg-[#3b82f6] text-white border-none rounded-lg text-base font-semibold cursor-pointer shadow-[0_4px_12px_rgba(59,130,246,0.3)] transition-all duration-300 hover:transform hover:-translate-y-0.5 hover:shadow-[0_6px_16px_rgba(59,130,246,0.4)]"
        >
          <Calendar className="w-5 h-5" />
          {t.ctaConsultation}
        </a>
        <a
          href="#roadmap"
          className="group inline-flex items-center gap-2 px-8 py-3.5 bg-white text-[#3b82f6] border-2 border-[#3b82f6] rounded-lg text-base font-semibold cursor-pointer transition-all duration-300 hover:bg-[#f1f5f9] hover:transform hover:-translate-y-0.5"
        >
          <Clock className="w-5 h-5" />
          {t.ctaRoadmap}
        </a>
      </div>

      {/* Illustration */}
      <div className="max-w-[900px] mx-auto relative">
        <img
          src="https://via.placeholder.com/900x500/ffffff/3b82f6?text=Agents+IA+Intelligents"
          alt="Illustration des agents IA de ZyatrIA Global"
          className="w-full rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] animate-float"
        />
      </div>

      {/* Stats clés */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-5 max-w-[800px] mx-auto mt-16 text-center">
        {[
          { value: '50+', label: t.stats.companies },
          { value: '10-15', label: t.stats.days },
          { value: '+42%', label: t.stats.satisfaction },
          { value: '24/7', label: t.stats.available },
          { value: '150+', label: t.stats.clients }
        ].map((stat, index) => (
          <div 
            key={index}
            className="p-4 bg-white rounded-xl shadow-[0_4px_6px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_12px_rgba(0,0,0,0.1)] transition-shadow duration-300"
          >
            <p className="text-3xl font-extrabold text-[#1e293b] m-0">{stat.value}</p>
            <p className="text-[#64748b] mt-1 mb-0 text-sm">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Animation CSS */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

