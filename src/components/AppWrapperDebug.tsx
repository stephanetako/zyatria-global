import React from 'react';
import { LanguageProvider } from '../lib/language-context';

// Import des composants un par un pour identifier le problème
import NavigationDesignSystem from './NavigationDesignSystem';
import HeroDesignSystem from './HeroDesignSystem';
import TrustStatsSimple from './TrustStatsSimple';
import ServicesAvailable from './ServicesAvailable';
import HowItWorks from './HowItWorks';
import MicroAgents from './MicroAgents';
import RoadmapDesignSystem from './RoadmapDesignSystem';
import PricingDesignSystem from './PricingDesignSystem';
import TestimonialsDesignSystem from './TestimonialsDesignSystem';
import FAQDesignSystem from './FAQDesignSystem';
import CTAFinal from './CTAFinal';
import FooterDesignSystem from './FooterDesignSystem';

const AppWrapperDebug: React.FC = () => {
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    console.log('🚀 AppWrapper mounted successfully');
  }, []);

  if (error) {
    return (
      <div className="min-h-screen bg-red-50 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Erreur détectée</h1>
          <pre className="bg-red-100 p-4 rounded overflow-auto text-sm">
            {error}
          </pre>
        </div>
      </div>
    );
  }

  try {
    return (
      <LanguageProvider>
        <div className="min-h-screen bg-background">
          <NavigationDesignSystem />
          <main>
            <HeroDesignSystem />
            <TrustStatsSimple />
            <ServicesAvailable />
            <HowItWorks />
            <MicroAgents />
            <PricingDesignSystem />
            <TestimonialsDesignSystem />
            <FAQDesignSystem />
            <CTAFinal />
          </main>
          <FooterDesignSystem />
          {/* MistralChatBot temporairement désactivé pour diagnostic */}
        </div>
      </LanguageProvider>
    );
  } catch (err) {
    console.error('❌ Error in AppWrapper:', err);
    setError(err instanceof Error ? err.message : String(err));
    return null;
  }
};

export default AppWrapperDebug;
