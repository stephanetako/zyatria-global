import React from 'react';
import { Brain, Workflow, Zap, CheckCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { baseUrl } from '../../lib/base-url';

const translations = {
  en: {
    hero: {
      badge: "Our Services",
      title: "Our Services",
      subtitle: "Discover how our AI solutions transform your business, no matter your industry."
    },
    services: [
      {
        icon: Brain,
        title: "Intelligent AI Agents",
        description: "Agents capable of analyzing, responding, deciding, and executing tasks at the heart of your business.",
        features: [
          "Automatic responses",
          "Intelligent analysis",
          "Task execution",
          "Adapts to your business"
        ]
      },
      {
        icon: Workflow,
        title: "Advanced Automation",
        description: "We connect your tools, data, and processes to create smooth, automated workflows.",
        features: [
          "CRM integration",
          "Email automation",
          "Data synchronization",
          "Smart workflows"
        ]
      },
      {
        icon: Zap,
        title: "Micro-Agents AI",
        description: "Fast, efficient solutions tailored to your industry.",
        features: [
          "Rapid deployment",
          "Reduced cost",
          "Immediate results",
          "Adapted to each sector"
        ]
      }
    ],
    cta: {
      title: "Ready to Get Started?",
      button: "Request a Demo"
    }
  },
  fr: {
    hero: {
      badge: "Nos Services",
      title: "Nos services",
      subtitle: "Découvrez comment nos solutions IA transforment votre entreprise, quel que soit votre secteur."
    },
    services: [
      {
        icon: Brain,
        title: "Agents IA intelligents",
        description: "Des agents capables d'analyser, répondre, décider et exécuter des tâches au cœur de votre activité.",
        features: [
          "Réponses automatiques",
          "Analyse intelligente",
          "Exécution de tâches",
          "Adaptation à votre entreprise"
        ]
      },
      {
        icon: Workflow,
        title: "Automatisation avancée",
        description: "Nous connectons vos outils, vos données et vos processus pour créer des workflows fluides et automatisés.",
        features: [
          "Intégration CRM",
          "Automatisation des emails",
          "Synchronisation des données",
          "Workflows intelligents"
        ]
      },
      {
        icon: Zap,
        title: "Micro-agents IA",
        description: "Des solutions rapides, efficaces et adaptées à votre secteur d'activité.",
        features: [
          "Déploiement rapide",
          "Coût réduit",
          "Résultats immédiats",
          "Adaptés à chaque secteur"
        ]
      }
    ],
    cta: {
      title: "Prêt à commencer ?",
      button: "Request a demo"
    }
  },
  es: {
    hero: {
      badge: "Nuestros Servicios",
      title: "Nuestros servicios",
      subtitle: "Descubra cómo nuestras soluciones IA transforman su negocio, sin importar su industria."
    },
    services: [
      {
        icon: Brain,
        title: "Agentes IA inteligentes",
        description: "Agentes capaces de analizar, responder, decidir y ejecutar tareas en el corazón de su negocio.",
        features: [
          "Respuestas automáticas",
          "Análisis inteligente",
          "Ejecución de tareas",
          "Se adapta a su negocio"
        ]
      },
      {
        icon: Workflow,
        title: "Automatización avanzada",
        description: "Conectamos sus herramientas, datos y procesos para crear flujos de trabajo fluidos y automatizados.",
        features: [
          "Integración CRM",
          "Automatización de emails",
          "Sincronización de datos",
          "Flujos de trabajo inteligentes"
        ]
      },
      {
        icon: Zap,
        title: "Micro-agentes IA",
        description: "Soluciones rápidas, eficientes y adaptadas a su sector de actividad.",
        features: [
          "Implementación rápida",
          "Costo reducido",
          "Resultados inmediatos",
          "Adaptados a cada sector"
        ]
      }
    ],
    cta: {
      title: "¿Listo para empezar?",
      button: "Request a demo"
    }
  },
  pt: {
    hero: {
      badge: "Nossos Serviços",
      title: "Nossos serviços",
      subtitle: "Descubra como nossas soluções IA transformam seu negócio, independentemente do seu setor."
    },
    services: [
      {
        icon: Brain,
        title: "Agentes IA inteligentes",
        description: "Agentes capazes de analisar, responder, decidir e executar tarefas no coração do seu negócio.",
        features: [
          "Respostas automáticas",
          "Análise inteligente",
          "Execução de tarefas",
          "Adapta-se ao seu negócio"
        ]
      },
      {
        icon: Workflow,
        title: "Automação avançada",
        description: "Conectamos suas ferramentas, dados e processos para criar fluxos de trabalho fluidos e automatizados.",
        features: [
          "Integração CRM",
          "Automação de emails",
          "Sincronização de dados",
          "Fluxos de trabalho inteligentes"
        ]
      },
      {
        icon: Zap,
        title: "Micro-agentes IA",
        description: "Soluções rápidas, eficientes e adaptadas ao seu setor de atividade.",
        features: [
          "Implementação rápida",
          "Custo reduzido",
          "Resultados imediatos",
          "Adaptados a cada setor"
        ]
      }
    ],
    cta: {
      title: "Pronto para começar?",
      button: "Request a demo"
    }
  }
};

export default function ServicesPage() {
  const [language, setLanguage] = React.useState<'en' | 'fr' | 'es' | 'pt'>('en');
  const t = translations[language];

  React.useEffect(() => {
    const savedLang = localStorage.getItem('language') as 'en' | 'fr' | 'es' | 'pt';
    if (savedLang) setLanguage(savedLang);

    const handleLanguageChange = (e: CustomEvent) => {
      setLanguage(e.detail);
    };

    window.addEventListener('languageChange', handleLanguageChange as EventListener);
    return () => window.removeEventListener('languageChange', handleLanguageChange as EventListener);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6 animate-fade-in">
            <span className="text-sm font-medium text-primary">{t.hero.badge}</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up font-heading">
            {t.hero.title}
          </h1>
          <p className="text-xl text-muted-foreground animate-fade-in-up delay-200">
            {t.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-1 gap-12">
            {t.services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-card border border-border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3 font-heading">{service.title}</h3>
                      <p className="text-muted-foreground mb-6">{service.description}</p>
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-background border border-primary/20 rounded-3xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
              {t.cta.title}
            </h2>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-button"
              onClick={() => window.location.href = `${baseUrl}/demo`}
            >
              {t.cta.button}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
