import React from 'react';
import { TrendingUp, Users, Globe, Award } from 'lucide-react';

const TrustStatsSimple: React.FC = () => {
  const stats = [
    { value: "150+", label: "Clients actifs", icon: Users },
    { value: "98%", label: "Taux de satisfaction", icon: Award },
    { value: "45+", label: "Pays desservis", icon: Globe },
    { value: "2.5M+", label: "Tâches automatisées", icon: TrendingUp }
  ];

  return (
    <section id="trust-stats" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/20 mb-4">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-4xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustStatsSimple;
