import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Bot, Zap, Cog, Brain, Network, Sparkles, Workflow, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

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
  },
  es: {
    badge: "Nuestras Soluciones",
    title: "Todo Lo Que Necesita Para Hacer Crecer Su Negocio",
    subtitle: "Descubra cómo nuestras soluciones IA transforman su empresa, sin importar su sector",
    cta: "Ver Cómo Funciona",
    services: [
      {
        icon: Brain,
        title: "Agentes IA Inteligentes",
        subtitle: "Automatización Inteligente",
        description: "Agentes capaces de analizar, responder, decidir y ejecutar tareas en el corazón de su actividad empresarial.",
        features: [
          "Respuestas automáticas",
          "Análisis inteligente",
          "Ejecución de tareas",
          "Adaptación a su empresa"
        ],
        cta: "Ver Cómo Funciona"
      },
      {
        icon: Workflow,
        title: "Elimine El Trabajo Manual",
        subtitle: "Automatización Avanzada",
        description: "Conecte sus herramientas, sincronice sus datos, automatice sus flujos de trabajo. Dedique su tiempo a lo que realmente importa: sus clientes y su crecimiento.",
        features: [
          "Integraciones CRM y herramientas",
          "Seguimientos automatizados",
          "Sincronización de datos en tiempo real",
          "Cero errores, siempre a tiempo"
        ],
        cta: "Descubrir"
      },
      {
        icon: Zap,
        title: "Resultados en 7 Días",
        subtitle: "Micro-Agentes Especializados",
        description: "Soluciones pre-construidas para desafíos comunes. Elija su micro-agente, lo configuramos y está en línea en una semana. Rápido, asequible, efectivo.",
        features: [
          "Implementado en 7-10 días",
          "Costo menor que soluciones personalizadas",
          "Resultados probados en su sector",
          "Listo para usar de inmediato"
        ],
        cta: "Voir Les Micro-Agents"
      }
    ]
  },
  pt: {
    badge: "Nossas Soluções",
    title: "Tudo O Que Você Precisa Para Fazer Seu Negócio Crescer",
    subtitle: "Descubra como nossas soluções IA transformam sua empresa, independentemente do seu setor",
    cta: "Ver Como Funciona",
    services: [
      {
        icon: Brain,
        title: "Agentes IA Inteligentes",
        subtitle: "Automação Inteligente",
        description: "Agentes capazes de analisar, responder, decidir e executar tarefas no coração da sua atividade empresarial.",
        features: [
          "Respostas automáticas",
          "Análise inteligente",
          "Execução de tarefas",
          "Adaptação à sua empresa"
        ],
        cta: "Ver Como Funciona"
      },
      {
        icon: Workflow,
        title: "Elimine O Trabalho Manual",
        subtitle: "Automação Avançada",
        description: "Conecte suas ferramentas, sincronize seus dados, automatize seus fluxos de trabalho. Gaste seu tempo no que realmente importa: seus clientes e seu crescimento.",
        features: [
          "Integrações CRM e ferramentas",
          "Follow-ups automatizados",
          "Sincronização de dados em tempo real",
          "Zero erros, sempre no prazo"
        ],
        cta: "Descobrir"
      },
      {
        icon: Zap,
        title: "Resultados em 7 Dias",
        subtitle: "Micro-Agentes Especializados",
        description: "Soluções pré-construídas para desafios comuns. Escolha seu micro-agente, configuramos e está no ar em uma semana. Rápido, acessível, eficaz.",
        features: [
          "Implementado em 7-10 dias",
          "Custo menor que soluções personalizadas",
          "Resultados comprovados no seu setor",
          "Pronto para usar imediatamente"
        ],
        cta: "Voir Les Micro-Agents"
      }
    ]
  }
};

const Services: React.FC<ServicesProps> = ({ lang = 'en' }) => {
  const t = translations[lang as keyof typeof translations];
  const baseUrl = lang === 'fr' ? '/fr' : lang === 'es' ? '/es' : lang === 'pt' ? '/pt' : '/';

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

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {t.services.map((service: any, index: number) => {
            const Icon = service.icon;
            const gradients = [
              'bg-gradient-to-br from-blue-500 to-violet-500',
              'bg-gradient-to-br from-violet-500 to-cyan-500',
              'bg-gradient-to-br from-cyan-500 to-blue-500'
            ];
            const delays = ['delay-200', 'delay-300', 'delay-400'];
            
            return (
              <Card 
                key={index}
                className={`p-8 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 group border-2 hover:border-blue-400/40 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm animate-fade-in-up ${delays[index]}`}
              >
                <div className={`w-16 h-16 ${gradients[index]} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <Icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                </div>
                
                <div className="mb-2">
                  <span className="text-xs font-semibold text-blue-500 uppercase tracking-wider">
                    {service.subtitle}
                  </span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold font-heading mb-4 group-hover:text-blue-500 transition-colors leading-tight">
                  {service.title}
                </h3>
                
                <p className="text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3 group/item">
                      <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  asChild
                  variant="outline" 
                  className="w-full group-hover:bg-blue-500 group-hover:text-white group-hover:border-blue-500 transition-all"
                >
                  <a href={`${baseUrl}/demo`}>
                    {t.cta}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in-up delay-500">
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6">
            {lang === 'fr' ? "Vous ne trouvez pas ce que vous cherchez ?" :
             lang === 'es' ? "¿No encuentra lo que busca?" :
             lang === 'pt' ? "Não encontra o que procura?" :
             "Can't find what you're looking for?"}
          </p>
          <Button size="lg" className="group">
            {lang === 'fr' ? "Parlons de Votre Projet" :
             lang === 'es' ? "Hablemos de Su Proyecto" :
             lang === 'pt' ? "Vamos Falar Sobre Seu Projeto" :
             "Let's Talk About Your Project"}
            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;










