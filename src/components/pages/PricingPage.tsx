import React from 'react';
import { LanguageProvider } from '../../lib/language-context';
import NavigationDesignSystem from '../NavigationDesignSystem';
import Pricing from '../Pricing';
import FooterDesignSystem from '../FooterDesignSystem';
import SuperChatbotFamily from '../SuperChatbotFamily';

const PricingPage: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <NavigationDesignSystem />
        <main>
          <Pricing />
        </main>
        <FooterDesignSystem />
        <SuperChatbotFamily />
      </div>
    </LanguageProvider>
  );
};

export default PricingPage;

