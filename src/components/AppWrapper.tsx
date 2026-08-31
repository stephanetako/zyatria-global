import React from 'react';
import { LanguageProvider } from '../lib/language-context';
import NavigationDesignSystem from './NavigationDesignSystem';
import HeroDesignSystem from './HeroDesignSystem';
import TrustStatsSimple from './TrustStatsSimple';
import Services from './Services';
import MicroAgents from './MicroAgents';
import RoadmapDesignSystem from './RoadmapDesignSystem';
import PricingDesignSystem from './PricingDesignSystem';
import TestimonialsDesignSystem from './TestimonialsDesignSystem';
import FAQDesignSystem from './FAQDesignSystem';
import CTAFinal from './CTAFinal';
import FooterDesignSystem from './FooterDesignSystem';
import IntelligentChatBot from './IntelligentChatBot';
import CookieConsent from './CookieConsent';

const AppWrapper: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background text-foreground">
        <NavigationDesignSystem />
        <main>
          <HeroDesignSystem />
          <TrustStatsSimple />
          <Services />
          <MicroAgents />
          <RoadmapDesignSystem />
          <PricingDesignSystem />
          <TestimonialsDesignSystem />
          <FAQDesignSystem />
          <CTAFinal />
        </main>
        <FooterDesignSystem />
        <IntelligentChatBot />
        <CookieConsent />
      </div>
    </LanguageProvider>
  );
};

export default AppWrapper;
