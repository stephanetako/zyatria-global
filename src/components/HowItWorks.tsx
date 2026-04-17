import React from 'react';
import { Search, Wrench, Rocket, CheckCircle2, ArrowRight, Timer } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';

interface HowItWorksProps {
  lang?: string;
}

const translations = {
  en: {
    badge: "Simple & Fast",
    title: "How It Works",
    subtitle: "From idea to deployment in 3 simple steps",
    cta: "Start Your Project",
    steps: [
      {
        number: "1",
        icon: Search,
        title: "Analysis of Your Needs",
        description: "We discuss your challenges, analyze your processes, and identify the best opportunities for automation.",
        features: [
          "Free 30-minute consultation",
          "Process analysis",
          "Custom recommendations",
          "Clear quote"
        ],
        duration: "Day 1"
      },
      {
        number: "2",
        icon: Wrench,
        title: "Micro-Agent Creation",
        description: "Our team configures your micro-agent, integrates it with your tools, and tests it to ensure perfect operation.",
        features: [
          "Custom configuration",
          "Tool integrations (CRM, email, etc.)",
          "Complete testing",
          "Team training"
        ],
        duration: "Days 2-5"
      },
      {
        number: "3",
        icon: Rocket,
        title: "Deployment in Less Than 7 Days",
        description: "Your micro-agent goes live. You see immediate results while we monitor performance to optimize continuously.",
        features: [
          "Progressive deployment",
          "Performance monitoring",
          "Continuous optimization",
          "Ongoing support"
        ],
        duration: "Day 6-7"
      }
    ],
    timeline: {
      title: "Typical Timeline",
      total: "Total: 7 days from first contact to deployment"
    }
  },
  fr: {
    badge: "Simple & Rapide",
    title: "Comment Ça Fonctionne",
    subtitle: "De l'idée au déploiement en 3 étapes simples",
    cta: "Démarrer Votre Projet",
    steps: [
      {
        number: "1",
        icon: Search,
        title: "Analyse de Votre Besoin",
        description: "Nous discutons de vos défis, analysons vos processus et identifions les meilleures opportunités d'automatisation.",
        features: [
          "Consultation gratuite de 30 minutes",
          "Analyse de vos processus",
          "Recommandations personnalisées",
          "Devis clair et transparent"
        ],
        duration: "Jour 1"
      },
      {
        number: "2",
        icon: Wrench,
        title: "Création du Micro-Agent",
        description: "Notre équipe configure votre micro-agent, l'intègre avec vos outils et le teste pour garantir un fonctionnement parfait.",
        features: [
          "Configuration sur mesure",
          "Intégrations outils (CRM, email, etc.)",
          "Tests complets",
          "Formation de votre équipe"
        ],
        duration: "Jours 2-5"
      },
      {
        number: "3",
        icon: Rocket,
        title: "Déploiement en Moins de 7 Jours",
        description: "Votre micro-agent est mis en ligne. Vous voyez des résultats immédiats pendant que nous surveillons les performances pour optimiser en continu.",
        features: [
          "Déploiement progressif",
          "Surveillance des performances",
          "Optimisation continue",
          "Support permanent"
        ],
        duration: "Jour 6-7"
      }
    ],
    timeline: {
      title: "Chronologie Type",
      total: "Total : 7 jours du premier contact au déploiement"
    }
  },
  es: {
    badge: "Simple y Rápido",
    title: "Cómo Funciona",
    subtitle: "De la idea al despliegue en 3 pasos simples",
    cta: "Iniciar Su Proyecto",
    steps: [
      {
        number: "1",
        icon: Search,
        title: "Análisis de Su Necesidad",
        description: "Discutimos sus desafíos, analizamos sus procesos e identificamos las mejores oportunidades de automatización.",
        features: [
          "Consulta gratuita de 30 minutos",
          "Análisis de procesos",
          "Recomendaciones personalizadas",
          "Presupuesto claro"
        ],
        duration: "Día 1"
      },
      {
        number: "2",
        icon: Wrench,
        title: "Creación del Micro-Agente",
        description: "Nuestro equipo configura su micro-agente, lo integra con sus herramientas y lo prueba para garantizar un funcionamiento perfecto.",
        features: [
          "Configuración personalizada",
          "Integraciones de herramientas (CRM, email, etc.)",
          "Pruebas completas",
          "Formación de su equipo"
        ],
        duration: "Días 2-5"
      },
      {
        number: "3",
        icon: Rocket,
        title: "Despliegue en Menos de 7 Días",
        description: "Su micro-agente se pone en línea. Ve resultados inmediatos mientras monitoreamos el rendimiento para optimizar continuamente.",
        features: [
          "Despliegue progresivo",
          "Monitoreo de rendimiento",
          "Optimización continua",
          "Soporte permanente"
        ],
        duration: "Día 6-7"
      }
    ],
    timeline: {
      title: "Cronología Típica",
      total: "Total: 7 días desde el primer contacto hasta el despliegue"
    }
  },
  pt: {
    badge: "Simples e Rápido",
    title: "Como Funciona",
    subtitle: "Da ideia ao deployment em 3 passos simples",
    cta: "Iniciar Seu Projeto",
    steps: [
      {
        number: "1",
        icon: Search,
        title: "Análise da Sua Necessidade",
        description: "Discutimos seus desafios, analisamos seus processos e identificamos as melhores oportunidades de automação.",
        features: [
          "Consulta gratuita de 30 minutos",
          "Análise de processos",
          "Recomendações personalizadas",
          "Orçamento claro"
        ],
        duration: "Dia 1"
      },
      {
        number: "2",
        icon: Wrench,
        title: "Criação do Micro-Agente",
        description: "Nossa equipe configura seu micro-agente, integra com suas ferramentas e testa para garantir funcionamento perfeito.",
        features: [
          "Configuração personalizada",
          "Integrações de ferramentas (CRM, email, etc.)",
          "Testes completos",
          "Treinamento da sua equipe"
        ],
        duration: "Dias 2-5"
      },
      {
        number: "3",
        icon: Rocket,
        title: "Deployment em Menos de 7 Dias",
        description: "Seu micro-agente entra no ar. Você vê resultados imediatos enquanto monitoramos o desempenho para otimizar continuamente.",
        features: [
          "Deployment progressivo",
          "Monitoramento de desempenho",
          "Otimização contínua",
          "Suporte permanente"
        ],
        duration: "Dia 6-7"
      }
    ],
    timeline: {
      title: "Cronograma Típico",
      total: "Total: 7 dias do primeiro contato ao deployment"
    }
  }
};

const HowItWorks: React.FC<HowItWorksProps> = ({ lang = 'en' }) => {
  const t = translations[lang as keyof typeof translations];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-b from-white via-violet-50/20 to-white dark:from-zinc-950 dark:via-violet-950/10 dark:to-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full mb-4">
            <span className="text-sm font-semibold text-blue-600">{t.badge}</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">
            {t.title}
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Illustration */}
        <div className="max-w-4xl mx-auto mb-16 animate-fade-in-up delay-300">
          <img 
            src="/how-it-works-illustration.svg" 
            alt="How it works process" 
            className="w-full h-auto"
          />
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line (desktop) */}
          <div className="hidden lg:block absolute top-32 left-0 right-0 h-1 bg-gradient-to-r from-blue-500/20 via-violet-500/40 to-cyan-500/20" style={{ top: '160px' }}></div>

          {/* Steps Grid */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
            {t.steps.map((step: any, index: number) => {
              const Icon = step.icon;
              const delays = ['delay-200', 'delay-400', 'delay-500'];
              const gradients = [
                'from-blue-600 to-violet-600',
                'from-violet-600 to-cyan-600',
                'from-cyan-600 to-blue-600'
              ];

              return (
                <div key={index} className={`relative animate-fade-in-up ${delays[index]}`}>
                  {/* Step Number Badge */}
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-10">
                    <div className={`w-16 h-16 bg-gradient-to-br ${gradients[index]} rounded-full flex items-center justify-center shadow-2xl border-4 border-white dark:border-zinc-950`}>
                      <span className="text-2xl font-bold text-white">{index + 1}</span>
                    </div>
                  </div>

                  <Card className="p-8 pt-16 hover:shadow-2xl hover:shadow-blue-600/10 transition-all duration-500 group border-2 hover:border-blue-500/40 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm h-full">
                    {/* Icon */}
                    <div className={`absolute -top-10 left-1/2 transform -translate-x-1/2`}>
                      <div className={`w-20 h-20 bg-gradient-to-br ${gradients[index]} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                        <Icon className="w-10 h-10 text-white" strokeWidth={2.5} />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-bold font-heading mb-3 text-center group-hover:text-blue-600 transition-colors">
                      {step.title}
                    </h3>

                    {/* Duration Badge */}
                    <div className="inline-block px-3 py-1 bg-blue-500/10 rounded-full mb-4 mx-auto block text-center">
                      <span className="text-xs font-semibold text-blue-600">{step.duration}</span>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-6 leading-relaxed text-center">
                      {step.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-3">
                      {step.features.map((feature: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-3 group/item">
                          <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                          <span className="text-sm leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>

        {/* Timeline Summary */}
        <div className="mt-16 text-center animate-fade-in-up delay-1000">
          <div className="inline-block p-8 bg-gradient-to-br from-blue-500/10 to-violet-500/5 rounded-2xl border-2 border-blue-500/30">
            <Timer className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <p className="text-3xl font-bold text-blue-600 mb-4">
              {t.timeline.total}
            </p>
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="group shadow-lg hover:shadow-xl"
            >
              {t.cta}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;




