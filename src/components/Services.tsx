import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Agents IA Intelligents',
      description: 'Automatisez vos processus avec des agents IA personnalisés',
      icon: '🤖',
    },
    {
      title: 'Automatisation Avancée',
      description: 'Optimisez vos workflows et gagnez en productivité',
      icon: '⚡',
    },
    {
      title: 'Support Multilingue',
      description: 'Disponible en FR, EN, ES, PT pour vos marchés internationaux',
      icon: '🌍',
    },
    {
      title: 'Déploiement Rapide',
      description: 'Mise en production en 7-15 jours seulement',
      icon: '🚀',
    },
  ];

  return (
    <section id="services" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Nos Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
