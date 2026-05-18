import React from 'react';
import { TrendingUp, Users, Globe, Award } from 'lucide-react';
import { useLanguage } from '../lib/language-context';

const translations = {
  en: {
    stats: [
      { value: "150+", label: "Active Clients", icon: Users },
      { value: "98%", label: "Satisfaction Rate", icon: Award },
      { value: "45+", label: "Countries Served", icon: Globe },
      { value: "2.5M+", label: "Tasks Automated", icon: TrendingUp }
    ]
  },
  fr: {
    stats: [
      { value: "150+", label: "Clients actifs", icon: Users },
      { value: "98%", label: "Taux de satisfaction", icon: Award },
      { value: "45+", label: "Pays desservis", icon: Globe },
      { value: "2.5M+", label: "Tâches automatisées", icon: TrendingUp }
    ]
  },
};

const TrustStats: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="trust-stats" className="py-20 md:py-32 bg-muted/30">
      <div className="container">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="relative p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-600/5 group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="mb-4 flex justify-center">
                  <div className={`inline-flex p-3 rounded-xl bg-blue-500/10 mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                </div>

                {/* Number */}
                <div className="text-5xl md:text-6xl font-bold font-heading mb-3 bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent text-center">
                  {stat.value}
                </div>

                {/* Label */}
                <p className="text-sm md:text-base text-muted-foreground text-center leading-snug">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default TrustStats;




