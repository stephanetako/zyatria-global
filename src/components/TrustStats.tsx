import { TrendingUp, Clock, Languages, Building } from 'lucide-react';
import { useEffect, useState } from 'react';

const translations = {
  en: {
    title: "Numbers that speak",
    stats: [
      {
        number: "+30%",
        label: "Average productivity gain",
        icon: TrendingUp
      },
      {
        number: "24/7",
        label: "AI agent availability",
        icon: Clock
      },
      {
        number: "4",
        label: "Native languages (FR • EN • ES • PT)",
        icon: Languages
      },
      {
        number: "12+",
        label: "Industries served",
        icon: Building
      }
    ]
  },
  fr: {
    title: "Les chiffres qui parlent",
    stats: [
      {
        number: "+30%",
        label: "Gain de productivité moyen",
        icon: TrendingUp
      },
      {
        number: "24/7",
        label: "Disponibilité de vos agents IA",
        icon: Clock
      },
      {
        number: "4",
        label: "Langues natives (FR • EN • ES • PT)",
        icon: Languages
      },
      {
        number: "12+",
        label: "Secteurs d'activité servis",
        icon: Building
      }
    ]
  },
  es: {
    title: "Los números que hablan",
    stats: [
      {
        number: "+30%",
        label: "Ganancia de productividad promedio",
        icon: TrendingUp
      },
      {
        number: "24/7",
        label: "Disponibilidad de agentes IA",
        icon: Clock
      },
      {
        number: "4",
        label: "Idiomas nativos (FR • EN • ES • PT)",
        icon: Languages
      },
      {
        number: "12+",
        label: "Industrias servidas",
        icon: Building
      }
    ]
  },
  pt: {
    title: "Os números que falam",
    stats: [
      {
        number: "+30%",
        label: "Ganho de produtividade médio",
        icon: TrendingUp
      },
      {
        number: "24/7",
        label: "Disponibilidade de agentes IA",
        icon: Clock
      },
      {
        number: "4",
        label: "Idiomas nativos (FR • EN • ES • PT)",
        icon: Languages
      },
      {
        number: "12+",
        label: "Setores atendidos",
        icon: Building
      }
    ]
  }
};

function CountUpAnimation({ end }: { end: string }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasAnimated(true);
          
          // Extract number from string like "+30%" or "12+"
          const numMatch = end.match(/\d+/);
          if (!numMatch) return;
          
          const target = parseInt(numMatch[0]);
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('trust-stats');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [end, hasAnimated]);

  // Format the display with prefix/suffix
  const prefix = end.startsWith('+') ? '+' : '';
  const suffix = end.includes('%') ? '%' : end.includes('+') && !end.startsWith('+') ? '+' : '';
  
  // Special handling for "24/7"
  if (end === '24/7') {
    return <span>{end}</span>;
  }

  return <span>{prefix}{count}{suffix}</span>;
}

export default function TrustStats() {
  const [lang, setLang] = useState<'en' | 'fr' | 'es' | 'pt'>('en');
  const t = translations[lang];

  return (
    <section id="trust-stats" className="py-20 md:py-32 bg-muted/30">
      <div className="container">
        {/* Language Switcher */}
        <div className="flex justify-center gap-2 mb-12 animate-fade-in">
          {(['en', 'fr', 'es', 'pt'] as const).map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                lang === l
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-zinc-800 border-2 border-zinc-200 dark:bg-zinc-900 dark:text-white dark:border-zinc-700'
              }`}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 animate-fade-in-up">
          {t.title}
        </h2>

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
                <div className="text-5xl md:text-6xl font-bold font-heading mb-3 bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
                  <CountUpAnimation end={stat.number} />
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



