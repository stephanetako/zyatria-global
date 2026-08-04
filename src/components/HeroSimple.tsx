import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Zap, Globe2, Calendar, Clock } from 'lucide-react';
import { useLanguage } from '../lib/language-context';

const translations = {
  fr: {
    title1: 'Transformez Votre Entreprise',
    title2: "Avec L'IA Intelligente",
    description: "Des solutions d'automatisation IA qui travaillent 24/7 pour faire grandir votre entreprise. Déploiement en 10-15 jours. Résultats dès le premier jour.",
    ctaConsultation: 'Réserver une Consultation Gratuite',
    ctaRoadmap: 'Voir la Roadmap',
    stats: {
      companies: 'Entreprises',
      days: 'Jours',
      satisfaction: 'Satisfaction',
      available: 'Disponible'
    }
  },
  en: {
    title1: 'Transform Your Business',
    title2: 'With Intelligent AI',
    description: 'AI automation solutions that work 24/7 to grow your business. Deployment in 10-15 days. Results from day one.',
    ctaConsultation: 'Book Free Consultation',
    ctaRoadmap: 'View Roadmap',
    stats: {
      companies: 'Companies',
      days: 'Days',
      satisfaction: 'Satisfaction',
      available: 'Available'
    }
  }
};

export default function HeroSimple() {
  const { language } = useLanguage();
  const supportedLanguage = (language === 'en' || language === 'fr') ? language : 'en';
  const t = translations[supportedLanguage];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-50 via-white to-orange-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 opacity-20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-500 opacity-25 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-cyan-400 opacity-20 rounded-full blur-3xl animate-float" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 text-foreground">
            {t.title1}
            <br />
            <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
              {t.title2}
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12">
            {t.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <Calendar className="w-5 h-5" />
              {t.ctaConsultation}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#roadmap"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-zinc-800 text-foreground border-2 border-amber-500 rounded-lg font-semibold text-lg hover:bg-amber-50 dark:hover:bg-zinc-700 transition-all duration-300"
            >
              <Clock className="w-5 h-5" />
              {t.ctaRoadmap}
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { value: '50+', label: t.stats.companies },
              { value: '10-15', label: t.stats.days },
              { value: '+42%', label: t.stats.satisfaction },
              { value: '24/7', label: t.stats.available }
            ].map((stat, index) => (
              <div key={index} className="p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl hover:bg-white/20 transition-all">
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Icons */}
        <div className="absolute top-1/4 left-1/4 animate-float hidden lg:block">
          <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/20">
            <Zap className="w-6 h-6 text-white" />
          </div>
        </div>
        <div className="absolute bottom-1/3 right-1/4 animate-float hidden lg:block">
          <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/20">
            <Globe2 className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>
    </section>
  );
}






