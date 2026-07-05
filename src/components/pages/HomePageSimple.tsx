import React from 'react';
import HeroSimple from '../HeroSimple';
import TrustStatsSimple from '../TrustStatsSimple';
import About from '../About';
import Services from '../Services';
import Pricing from '../Pricing';
import FAQ from '../FAQ';
import Contact from '../Contact';
import CTAFinal from '../CTAFinal';

const HomePageSimple: React.FC = () => {
  return (
    <>
      <HeroSimple />
      <TrustStatsSimple />
      <About />
      <Services />
      <Pricing />
      <FAQ />
      <Contact />
      <CTAFinal />
    </>
  );
};

export default HomePageSimple;

