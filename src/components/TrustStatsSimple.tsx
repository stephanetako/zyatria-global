import React from 'react';

const TrustStatsSimple: React.FC = () => {
  const stats = [
    { value: '500+', label: 'Clients satisfaits' },
    { value: '98%', label: 'Taux de satisfaction' },
    { value: '7-15j', label: 'Déploiement rapide' },
    { value: '24/7', label: 'Support disponible' },
  ];

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStatsSimple;
