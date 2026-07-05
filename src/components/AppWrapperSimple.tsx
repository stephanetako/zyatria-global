import React from 'react';
import { LanguageProvider } from '../lib/language-context';
import Navigation from './Navigation';
import HeroSimple from './HeroSimple';
import Roadmap from './Roadmap';
import ServicesAvailable from './ServicesAvailable';
import TrustStatsSimple from './TrustStatsSimple';
import Intro from './Intro';
import MicroAgents from './MicroAgents';
import HowItWorks from './HowItWorks';
import Pricing from './Pricing';
import FAQ from './FAQ';
import ContactSection from './ContactSection';
import Footer from './Footer';

const AppWrapperSimple: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Navigation />
        <HeroSimple />
        <Roadmap />
        <ServicesAvailable />
        <TrustStatsSimple />
        <Intro />
        <MicroAgents />
        <HowItWorks />
        <Pricing />
        <FAQ />
        <ContactSection />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default AppWrapperSimple;



