import React from 'react';
import { LanguageProvider } from '../lib/language-context';
import Navigation from './Navigation';
import Footer from './Footer';
import LiveChat from './LiveChat';
import FormspreeButton from './FormspreeButton';
import MistralChatBot from './MistralChatBot';
import Newsletter from './Newsletter';

// Import pages
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import MicroAgentsPage from './pages/MicroAgentsPage';
import TechnologyPage from './pages/TechnologyPage';
import PricingPage from './pages/PricingPage';
import AboutPage from './pages/AboutPage';
import TechnicalDocsPage from './pages/TechnicalDocsPage';
import KnowledgeBasePage from './pages/KnowledgeBasePage';
import DemoPage from './pages/DemoPage';
import DashboardClientPage from './dashboard/DashboardClientPage';

type PageType = 'home' | 'services' | 'micro-agents' | 'technology' | 'pricing' | 'about' | 'docs' | 'knowledge-base' | 'demo' | 'dashboard';

const AppWrapper: React.FC = () => {
  const currentPage = 'home' as PageType; // This is a placeholder for the actual current page logic

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'services':
        return <ServicesPage />;
      case 'micro-agents':
        return <MicroAgentsPage />;
      case 'technology':
        return <TechnologyPage />;
      case 'pricing':
        return <PricingPage />;
      case 'about':
        return <AboutPage />;
      case 'docs':
        return <TechnicalDocsPage />;
      case 'knowledge-base':
        return <KnowledgeBasePage />;
      case 'demo':
        return <DemoPage />;
      case 'dashboard':
        return <DashboardClientPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <LanguageProvider>
      <div className="relative">
        <Navigation />
        {renderPage()}
        <Footer />
        <Newsletter />
        <LiveChat />
        <FormspreeButton />
        <MistralChatBot />
      </div>
    </LanguageProvider>
  );
};

export default AppWrapper;









