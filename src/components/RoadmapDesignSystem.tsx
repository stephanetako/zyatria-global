import React from 'react';

const RoadmapDesignSystem: React.FC = () => {
  const steps = [
    { title: 'Consultation', description: 'Analyse de vos besoins', duration: '1-2 jours' },
    { title: 'Configuration', description: 'Mise en place des agents IA', duration: '3-5 jours' },
    { title: 'Tests', description: 'Validation et ajustements', duration: '2-3 jours' },
    { title: 'Déploiement', description: 'Mise en production', duration: '1-2 jours' },
  ];

  return (
    <section className="py-20 px-4 bg-muted/50">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Notre Processus</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground mb-2">{step.description}</p>
              <p className="text-sm text-primary font-semibold">{step.duration}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoadmapDesignSystem;
