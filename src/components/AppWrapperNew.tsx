import React from 'react';
import { LanguageProvider } from '../lib/language-context';
import Navigation from './Navigation';
import HeroNew from './HeroNew';
import Footer from './Footer';

const AppWrapperNew: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <HeroNew />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default AppWrapperNew;
