import React from 'react';
import Hero from '../Hero';
import LiveStats from '../LiveStats';
import TrustedByLogos from '../TrustedByLogos';
import AsSeenIn from '../AsSeenIn';
import TrustStats from '../TrustStats';
import TrustBadges from '../TrustBadges';
import About from '../About';
import MicroAgents from '../MicroAgents';
import HowItWorks from '../HowItWorks';
import ConfigureMicroAgent from '../ConfigureMicroAgent';
import Services from '../Services';
import Pricing from '../Pricing';
import CompetitorComparison from '../CompetitorComparison';
import CaseStudies from '../CaseStudies';
import AdvancedTestimonials from '../AdvancedTestimonials';
import Solutions from '../Solutions';
import ROICalculator from '../ROICalculator';
import FAQ from '../FAQ';
import Contact from '../Contact';
import CTAFinal from '../CTAFinal';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <LiveStats />
      <TrustedByLogos />
      <AsSeenIn />
      <TrustStats />
      <TrustBadges />
      <About />
      <MicroAgents />
      <HowItWorks />
      <ConfigureMicroAgent />
      <Services />
      <Pricing />
      <CompetitorComparison />
      <CaseStudies />
      <AdvancedTestimonials />
      <Solutions />
      <ROICalculator />
      <FAQ />
      <Contact />
      <CTAFinal />
    </>
  );
};

export default HomePage;
