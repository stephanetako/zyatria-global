import React from 'react';
import { LanguageProvider } from '../lib/language-context';
import NavigationDesignSystem from './NavigationDesignSystem';
import HeroDesignSystem from './HeroDesignSystem';
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
import MistralChatBot from './MistralChatBot';

const AppWrapperSimple: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <NavigationDesignSystem />
        <HeroDesignSystem />
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
        <MistralChatBot />
      </div>
    </LanguageProvider>
  );
};

export default AppWrapperSimple;









