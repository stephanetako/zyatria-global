import React from 'react';

const HeroDesignSystem: React.FC = () => {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          Agents IA & Automation Sans Frontières
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Transformez votre entreprise avec des agents IA intelligents et une automatisation avancée. Déploiement en 7-15 jours.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity">
            Démarrer maintenant
          </a>
          <a href="#services" className="border-2 border-primary text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors">
            Découvrir nos services
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroDesignSystem;
