import React from 'react';

const PricingDesignSystem: React.FC = () => {
  const plans = [
    {
      name: 'Starter',
      price: '499€',
      period: '/mois',
      features: ['1 Agent IA', 'Support email', '100 requêtes/jour', 'Déploiement standard'],
    },
    {
      name: 'Business',
      price: '1499€',
      period: '/mois',
      features: ['5 Agents IA', 'Support prioritaire', '1000 requêtes/jour', 'Déploiement rapide', 'Personnalisation'],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Sur mesure',
      period: '',
      features: ['Agents IA illimités', 'Support 24/7', 'Requêtes illimitées', 'Déploiement dédié', 'SLA garanti'],
    },
  ];

  return (
    <section id="pricing" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Tarifs Transparents</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-card border rounded-lg p-8 ${
                plan.popular ? 'border-primary shadow-lg scale-105' : 'border-border'
              }`}
            >
              {plan.popular && (
                <div className="bg-primary text-primary-foreground text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                  Populaire
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <span className="text-primary mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`block text-center py-3 rounded-lg font-semibold transition-colors ${
                  plan.popular
                    ? 'bg-primary text-primary-foreground hover:opacity-90'
                    : 'border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground'
                }`}
              >
                Commencer
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingDesignSystem;
