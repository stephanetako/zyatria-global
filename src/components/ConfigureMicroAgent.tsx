import React, { useState } from 'react';
import { Sparkles, ArrowRight, CheckCircle2, Zap, Clock, Shield, Wrench } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { useLanguage } from '../lib/language-context';

const translations = {
  en: {
    badge: "Ready to Start",
    title: "Configure Your Micro-Agent",
    subtitle: "Choose your micro-agent, we configure it, you see results in 7 days",
    benefits: [
      {
        icon: Clock,
        title: "Deployed in 7 Days",
        description: "From first contact to deployment, only one week"
      },
      {
        icon: Zap,
        title: "Immediate Results",
        description: "See concrete improvements from day one"
      },
      {
        icon: Shield,
        title: "Risk-Free",
        description: "30-day money-back guarantee"
      }
    ],
    cta: {
      primary: "Configure My Micro-Agent",
      secondary: "Or book a free 30-minute consultation"
    },
    trust: {
      title: "What You Get:",
      items: [
        "Free 30-minute consultation",
        "Custom configuration",
        "Team training",
        "Ongoing support",
        "Performance monitoring",
        "Continuous optimization"
      ]
    }
  },
  fr: {
    badge: "Prêt à Démarrer",
    title: "Configurez Votre Micro-Agent",
    subtitle: "Choisissez votre micro-agent, nous le configurons, vous voyez des résultats en 7 jours",
    benefits: [
      {
        icon: Clock,
        title: "Déployé en 7 Jours",
        description: "Du premier contact au déploiement, une seule semaine"
      },
      {
        icon: Zap,
        title: "Résultats Immédiats",
        description: "Voyez des améliorations concrètes dès le premier jour"
      },
      {
        icon: Shield,
        title: "Sans Risque",
        description: "Garantie satisfait ou remboursé 30 jours"
      }
    ],
    cta: {
      primary: "Configurer Mon Micro-Agent",
      secondary: "Ou réserver une consultation gratuite de 30 minutes"
    },
    trust: {
      title: "Ce Que Vous Obtenez :",
      items: [
        "Consultation gratuite de 30 minutes",
        "Configuration personnalisée",
        "Formation de votre équipe",
        "Support continu",
        "Surveillance des performances",
        "Optimisation continue"
      ]
    }
  },
  es: {
    badge: "Listo Para Empezar",
    title: "Configure Su Micro-Agente",
    subtitle: "Elija su micro-agente, lo configuramos, ve resultados en 7 días",
    benefits: [
      {
        icon: Clock,
        title: "Desplegado en 7 Días",
        description: "Del primer contacto al despliegue, solo una semana"
      },
      {
        icon: Zap,
        title: "Resultados Inmediatos",
        description: "Vea mejoras concretas desde el primer día"
      },
      {
        icon: Shield,
        title: "Sin Riesgo",
        description: "Garantía de devolución de dinero de 30 días"
      }
    ],
    cta: {
      primary: "Configurar Mi Micro-Agente",
      secondary: "O reservar una consulta gratuita de 30 minutos"
    },
    trust: {
      title: "Lo Que Obtiene:",
      items: [
        "Consulta gratuita de 30 minutos",
        "Configuración personalizada",
        "Formación de su equipo",
        "Soporte continuo",
        "Monitoreo de rendimiento",
        "Optimización continua"
      ]
    }
  },
  pt: {
    badge: "Pronto Para Começar",
    title: "Configure Seu Micro-Agente",
    subtitle: "Escolha seu micro-agente, configuramos, você vê resultados em 7 dias",
    benefits: [
      {
        icon: Clock,
        title: "Implementado em 7 Dias",
        description: "Do primeiro contato ao deployment, apenas uma semana"
      },
      {
        icon: Zap,
        title: "Resultados Imediatos",
        description: "Veja melhorias concretas desde o primeiro dia"
      },
      {
        icon: Shield,
        title: "Sem Risco",
        description: "Garantia de devolução do dinheiro em 30 dias"
      }
    ],
    cta: {
      primary: "Configurar Meu Micro-Agente",
      secondary: "Ou agendar uma consulta gratuita de 30 minutos"
    },
    trust: {
      title: "O Que Você Obtém:",
      items: [
        "Consulta gratuita de 30 minutos",
        "Configuração personalizada",
        "Treinamento da sua equipe",
        "Suporte contínuo",
        "Monitoramento de desempenho",
        "Otimização contínua"
      ]
    }
  }
};

const ConfigureMicroAgent: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [isHovered, setIsHovered] = useState(false);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="configure-micro-agent" className="py-24 bg-gradient-to-b from-blue-500/5 via-white to-violet-500/5 dark:from-blue-950/10 dark:via-zinc-950 dark:to-violet-950/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 rounded-full mb-4 shadow-lg">
            <Wrench className="w-4 h-4 text-white" />
            <span className="text-sm font-semibold text-white">{t.badge}</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">{t.title}</span>
          </h2>
          <p className="text-xl md:text-2xl text-zinc-700 dark:text-zinc-300 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Benefits Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {t.benefits.map((benefit: any, index: number) => {
            const Icon = benefit.icon;
            const delays = ['delay-200', 'delay-300', 'delay-400'];
            const solidColors = [
              'bg-blue-600',
              'bg-violet-600',
              'bg-cyan-600'
            ];

            return (
              <Card 
                key={index} 
                className={`p-8 text-center hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 group border-2 hover:border-blue-500/40 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm animate-fade-in-up ${delays[index]}`}
              >
                <div className={`w-16 h-16 ${solidColors[index]} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 mx-auto`}>
                  <Icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-xl font-bold font-heading mb-3 group-hover:text-blue-600 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  {benefit.description}
                </p>
              </Card>
            );
          })}
        </div>

        {/* Main CTA Card */}
        <div className="max-w-4xl mx-auto animate-fade-in-up delay-500">
          <Card className="p-12 bg-gradient-to-br from-white via-white/95 to-blue-500/5 dark:from-zinc-900 dark:via-zinc-900/95 dark:to-blue-950/10 border-2 border-blue-500/30 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Left: CTA */}
              <div className="flex flex-col justify-center">
                <Button 
                  size="lg" 
                  onClick={scrollToContact}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className="w-full border-blue-500/30 focus:border-blue-500 focus:ring-blue-500/20 text-lg py-8 group shadow-xl hover:shadow-2xl mb-6 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white"
                >
                  <Sparkles className={`mr-2 w-6 h-6 ${isHovered ? 'animate-spin' : ''}`} />
                  {t.cta.primary}
                  <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </Button>
                
                <p className="text-center text-muted-foreground">
                  {t.cta.secondary}
                </p>
              </div>

              {/* Right: Trust Elements */}
              <div>
                <h3 className="text-xl font-bold font-heading mb-6 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-blue-600" />
                  {t.trust.title}
                </h3>
                <ul className="space-y-4">
                  {t.trust.items.map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-3 group/item">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Trust Badge */}
            <div className="mt-8 pt-8 border-t border-border/50 flex items-center justify-center gap-8 flex-wrap">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4 text-blue-600" />
                <span>7 jours maximum</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="w-4 h-4 text-blue-600" />
                <span>30 jours garantie</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Zap className="w-4 h-4 text-blue-600" />
                <span>Résultats immédiats</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Social Proof */}
        <div className="text-center mt-12 animate-fade-in-up delay-1000">
          <p className="text-muted-foreground text-lg">
            ⭐⭐⭐⭐⭐ <span className="font-semibold">4.9/5</span> sur 200+ clients
          </p>
        </div>
      </div>
    </section>
  );
};

export default ConfigureMicroAgent;









