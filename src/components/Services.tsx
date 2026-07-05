




import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Bot, Zap, Cog, Brain, Network, Sparkles, Workflow, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { useLanguage } from '../lib/language-context';

interface ServicesProps {
  lang?: string;
}

const translations = {
  en: {
    badge: "Our Solutions",
    title: "Everything You Need to Scale Your Business",
    subtitle: "Discover how our AI solutions transform your business, regardless of your industry",
    cta: "See How It Works",
    services: [
      {
        icon: Brain,
        title: "Intelligent AI Agents",
        subtitle: "Smart Automation",
        description: "Agents capable of analyzing, responding, deciding, and executing tasks at the heart of your business operations.",
        features: [
          "Automated responses",
          "Intelligent analysis",
          "Task execution",
          "Adapts to your business"
        ],
        cta: "See How It Works"
      },
      {
        icon: Workflow,
        title: "Eliminate Manual Work",
        subtitle: "Advanced Automation",
        description: "Connect your tools, sync your data, automate your workflows. Spend your time on what truly matters: your clients and your growth.",
        features: [
          "CRM & tool integrations",
          "Automated follow-ups",
          "Real-time data sync",
          "Zero errors, always on time"
        ],
        cta: "Discover"
      },
      {
        icon: Zap,
        title: "Results in 7 Days",
        subtitle: "Specialized Micro-Agents",
        description: "Pre-built solutions for common challenges. Choose your micro-agent, we configure it, and it's live in a week. Fast, affordable, effective.",
        features: [
          "Deployed in 7-10 days",
          "Lower cost than custom solutions",
          "Proven results in your sector",
          "Ready to use immediately"
        ],
        cta: "View Micro-Agents"
      }
    ]
  },
  fr: {
    badge: "Nos Solutions",
    title: "Tout Ce Dont Vous Avez Besoin Pour Faire Grandir Votre Entreprise",
    subtitle: "Découvrez comment nos solutions IA transforment votre entreprise, quel que soit votre secteur",
    cta: "Voir Comment Ça Marche",
    services: [
      {
        icon: Brain,
        title: "Agents IA Intelligents",
        subtitle: "Automatisation Intelligente",
        description: "Des agents capables d'analyser, répondre, décider et exécuter des tâches au cœur de votre activité.",
        features: [
          "Réponses automatiques",
          "Analyse intelligente",
          "Exécution de tâches",
          "Adaptation à votre entreprise"
        ],
        cta: "Voir Comment Ça Marche"
      },
      {
        icon: Workflow,
        title: "Éliminez Le Travail Manuel",
        subtitle: "Automatisation Avancée",
        description: "Connectez vos outils, synchronisez vos données, automatisez vos workflows. Passez votre temps sur ce qui compte vraiment : vos clients et votre croissance.",
        features: [
          "Intégrations CRM & outils",
          "Relances automatisées",
          "Sync des données en temps réel",
          "Zéro erreur, toujours à l'heure"
        ],
        cta: "Découvrir"
      },
      {
        icon: Zap,
        title: "Résultats en 7 Jours",
        subtitle: "Micro-Agents Spécialisés",
        description: "Solutions pré-construites pour défis courants. Choisissez votre micro-agent, nous le configurons, et il est en ligne en une semaine. Rapide, abordable, efficace.",
        features: [
          "Déployé en 7-10 jours",
          "Coût inférieur aux solutions sur-mesure",
          "Résultats prouvés dans votre secteur",
          "Prêt à l'emploi immédiatement"
        ],
        cta: "Voir Les Micro-Agents"
      }
    ]
  }
};

const Services: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const baseUrl = language === 'fr' ? '/fr' : '/';

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white via-blue-50/20 to-white dark:from-zinc-950 dark:via-blue-950/10 dark:to-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block px-4 py-2 bg-blue-400/10 border border-blue-400/30 rounded-full mb-4">
            <span className="text-sm font-semibold text-blue-500">{t.badge}</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-zinc-100 dark:to-zinc-400 bg-clip-text text-transparent">
            {t.title}
          </h2>
          <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Services Grid with Images */}
        <div className="space-y-16">
          {t.services.map((service: any, index: number) => {
            const Icon = service.icon;
            const solidColors = [
              'bg-blue-600',
              'bg-violet-600',
              'bg-cyan-600'
            ];
            const delays = ['delay-200', 'delay-300', 'delay-400'];
            const images = [
              'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=500&fit=crop&q=80',
              'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop&q=80',
              'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=500&fit=crop&q=80'
            ];
            
            return (
              <div key={index} className={`grid md:grid-cols-2 gap-8 items-center animate-fade-in-up ${delays[index]}`}>
                {/* Image on left for even, right for odd */}
                {index % 2 === 0 && (
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <img 
                      src={images[index]} 
                      alt={service.title}
                      className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                )}
                
                <Card className="p-8 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 group border-2 hover:border-blue-400/40 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm">
                  <div className={`w-16 h-16 ${solidColors[index]} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <Icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                  </div>
                  
                  <div className="mb-2">
                    <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                      {service.subtitle}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold font-heading mb-4 group-hover:text-blue-600 transition-colors leading-tight">
                    {service.title}
                  </h3>
                  
                  <p className="text-zinc-700 dark:text-zinc-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-3 group/item">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                        <span className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    asChild
                    variant="outline" 
                    className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all"
                  >
                    <a href={`${baseUrl}/demo`}>
                      {t.cta}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                </Card>

                {/* Image on right for odd */}
                {index % 2 !== 0 && (
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <img 
                      src={images[index]} 
                      alt={service.title}
                      className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in-up delay-500">
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6">
            {language === 'fr' ? "Vous ne trouvez pas ce que vous cherchez ?" : "Can't find what you're looking for?"}
          </p>
          <Button size="lg" className="group">
            {language === 'fr' ? "Parlons de Votre Projet" : "Let's Talk About Your Project"}
            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;

















