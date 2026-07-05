import React from 'react';
import { LanguageProvider } from '../lib/language-context';
import Navigation from './Navigation';
import HeroSimple from './HeroSimple';
import TrustStatsSimple from './TrustStatsSimple';
import Roadmap from './Roadmap';
import ServicesAvailable from './ServicesAvailable';
import Solutions from './Solutions';
import MicroAgents from './MicroAgents';
import HowItWorks from './HowItWorks';
import Pricing from './Pricing';
import AdvancedTestimonials from './AdvancedTestimonials';
import FAQ from './FAQ';
import ContactSection from './ContactSection';
import Footer from './Footer';
import MultiChannelChatbot from './MultiChannelChatbot';

/**
 * AppWrapper - Version fusionnée optimale
 * 
 * Combine le meilleur des deux versions:
 * - HeroSimple: Plus moderne et épuré
 * - TrustStatsSimple: Plus léger et performant
 * - Roadmap: Montre la vision et progression
 * - ServicesAvailable: Services clairs et directs
 * - Solutions: Détails complets des solutions
 * - AdvancedTestimonials: Preuve sociale forte
 * - ContactSection: Formulaire optimisé
 * - MultiChannelChatbot: Engagement client
 */
export default function AppWrapper() {
  console.log('🚀 AppWrapper (Version Fusionnée Optimale) loaded successfully');
  
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background text-foreground">
        {/* Navigation fixe */}
        <Navigation />
        
        {/* Hero moderne et épuré */}
        <HeroSimple />
        
        {/* Stats de confiance (version légère) */}
        <TrustStatsSimple />
        
        {/* Roadmap - Vision et progression */}
        <Roadmap />
        
        {/* Services disponibles - Clair et direct */}
        <ServicesAvailable />
        
        {/* Solutions détaillées */}
        <Solutions />
        
        {/* Micro-agents spécialisés */}
        <MicroAgents />
        
        {/* Comment ça marche */}
        <HowItWorks />
        
        {/* Tarification */}
        <Pricing />
        
        {/* Témoignages avancés */}
        <AdvancedTestimonials />
        
        {/* FAQ */}
        <FAQ />
        
        {/* Contact optimisé */}
        <ContactSection />
        
        {/* Footer */}
        <Footer />
      </div>
      
      {/* Chatbot multicanal (flottant) */}
      <MultiChannelChatbot />
    </LanguageProvider>
  );
}
