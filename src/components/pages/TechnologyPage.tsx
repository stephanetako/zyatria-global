import React from 'react';
import { 
  Brain, 
  Workflow, 
  Database, 
  Plug, 
  Shield, 
  Zap,
  CheckCircle2,
  ArrowRight,
  Code,
  GitBranch,
  Lock,
  Cpu,
  Cloud,
  Network
} from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';

interface TechnologyPageProps {
  lang?: 'en' | 'fr' | 'es' | 'pt';
}

export default function TechnologyPage({ lang = 'en' }: TechnologyPageProps) {
  const translations = {
    en: {
      hero: {
        badge: "Our Technology",
        title: "Enterprise-Grade AI Infrastructure",
        subtitle: "Built on industry-leading platforms with military-grade security and 99.9% uptime guarantee",
        cta: "Request Technical Documentation"
      },
      stack: {
        title: "Our Technology Stack",
        subtitle: "We use the best tools in the industry to build your AI agents",
        categories: [
          {
            title: "AI Brain",
            icon: Brain,
            description: "Multiple AI models for maximum flexibility",
            tools: [
              { name: "OpenAI GPT-4", logo: "🤖", description: "Latest GPT models for advanced reasoning" },
              { name: "Azure OpenAI", logo: "☁️", description: "Enterprise security with Microsoft infrastructure" },
              { name: "Anthropic Claude", logo: "🧠", description: "Ethical AI with extended context" },
              { name: "Mistral AI", logo: "🚀", description: "European alternative with multilingual support" }
            ]
          },
          {
            title: "Orchestration",
            icon: Workflow,
            description: "Automation platforms for complex workflows",
            tools: [
              { name: "Make", logo: "⚡", description: "Visual automation with 1000+ integrations" },
              { name: "Zapier", logo: "🔗", description: "Enterprise automation platform" },
              { name: "n8n", logo: "🔧", description: "Self-hosted workflow automation" }
            ]
          },
          {
            title: "Data Storage",
            icon: Database,
            description: "Secure and scalable databases",
            tools: [
              { name: "Notion", logo: "📝", description: "Collaborative knowledge base" },
              { name: "Airtable", logo: "🗂️", description: "Flexible database with API" },
              { name: "HubSpot", logo: "🎯", description: "CRM integration for sales & marketing" },
              { name: "PostgreSQL", logo: "🐘", description: "Enterprise-grade SQL database" }
            ]
          },
          {
            title: "Integrations",
            icon: Plug,
            description: "Connect with your existing tools",
            tools: [
              { name: "Webflow API", logo: "🌐", description: "Native CMS integration" },
              { name: "REST APIs", logo: "🔌", description: "Universal API connections" },
              { name: "Webhooks", logo: "🪝", description: "Real-time event triggers" },
              { name: "OAuth 2.0", logo: "🔐", description: "Secure authentication" }
            ]
          }
        ]
      },
      architecture: {
        title: "How Our AI Agents Work",
        subtitle: "A complete autonomous system from input to action",
        steps: [
          {
            icon: Zap,
            title: "1. Input Capture",
            description: "Forms, emails, chat, or API calls trigger the agent",
            features: ["Multi-channel input", "Real-time processing", "Data validation"]
          },
          {
            icon: Brain,
            title: "2. AI Processing",
            description: "GPT-4 or Claude analyzes context and determines action",
            features: ["Natural language understanding", "Context awareness", "Multi-language support"]
          },
          {
            icon: GitBranch,
            title: "3. Decision Logic",
            description: "Pre-configured rules guide the agent's behavior",
            features: ["Custom business rules", "Conditional workflows", "Fallback scenarios"]
          },
          {
            icon: Workflow,
            title: "4. Action Execution",
            description: "Agent performs tasks automatically across platforms",
            features: ["CRM updates", "Email sending", "Data synchronization"]
          },
          {
            icon: Shield,
            title: "5. Monitoring & Learning",
            description: "Continuous tracking and optimization",
            features: ["Performance analytics", "Error detection", "Self-improvement"]
          }
        ]
      },
      security: {
        title: "Enterprise Security",
        subtitle: "Your data is protected with military-grade encryption",
        features: [
          { icon: Lock, title: "End-to-End Encryption", description: "AES-256 encryption for all data" },
          { icon: Shield, title: "SOC 2 Compliant", description: "Certified security standards" },
          { icon: Cloud, title: "Azure Infrastructure", description: "Microsoft's secure cloud" },
          { icon: Network, title: "Private Networks", description: "Isolated VPN connections" }
        ]
      },
      autonomy: {
        title: "Autonomy Rules",
        subtitle: "Intelligent agents that know when to act and when to ask",
        levels: [
          {
            level: "Level 1: Supervised",
            description: "Agent suggests actions, human approves",
            useCase: "High-value sales, legal matters"
          },
          {
            level: "Level 2: Semi-Autonomous",
            description: "Agent acts automatically on routine tasks, escalates complex ones",
            useCase: "Customer support, data entry"
          },
          {
            level: "Level 3: Fully Autonomous",
            description: "Agent handles everything independently within defined parameters",
            useCase: "Lead qualification, appointment booking"
          }
        ]
      },
      cta: {
        title: "Ready to Deploy Your AI Agents?",
        subtitle: "Get access to our complete technical documentation and deployment guide",
        button: "Request Documentation",
        note: "Available for customers and partners only"
      }
    },
    fr: {
      hero: {
        badge: "Notre Technologie",
        title: "Infrastructure IA de Niveau Enterprise",
        subtitle: "Construite sur des plateformes leaders avec sécurité militaire et garantie de disponibilité 99,9%",
        cta: "Demander la Documentation Technique"
      },
      stack: {
        title: "Notre Stack Technologique",
        subtitle: "Nous utilisons les meilleurs outils de l'industrie pour construire vos agents IA",
        categories: [
          {
            title: "Cerveau IA",
            icon: Brain,
            description: "Plusieurs modèles IA pour une flexibilité maximale",
            tools: [
              { name: "OpenAI GPT-4", logo: "🤖", description: "Derniers modèles GPT pour raisonnement avancé" },
              { name: "Azure OpenAI", logo: "☁️", description: "Sécurité enterprise avec infrastructure Microsoft" },
              { name: "Anthropic Claude", logo: "🧠", description: "IA éthique avec contexte étendu" },
              { name: "Mistral AI", logo: "🚀", description: "Alternative européenne avec support multilingue" }
            ]
          },
          {
            title: "Orchestration",
            icon: Workflow,
            description: "Plateformes d'automation pour workflows complexes",
            tools: [
              { name: "Make", logo: "⚡", description: "Automation visuelle avec 1000+ intégrations" },
              { name: "Zapier", logo: "🔗", description: "Plateforme d'automation enterprise" },
              { name: "n8n", logo: "🔧", description: "Automation de workflow auto-hébergée" }
            ]
          },
          {
            title: "Stockage",
            icon: Database,
            description: "Bases de données sécurisées et scalables",
            tools: [
              { name: "Notion", logo: "📝", description: "Base de connaissances collaborative" },
              { name: "Airtable", logo: "🗂️", description: "Base de données flexible avec API" },
              { name: "HubSpot", logo: "🎯", description: "Intégration CRM pour ventes & marketing" },
              { name: "PostgreSQL", logo: "🐘", description: "Base de données SQL enterprise" }
            ]
          },
          {
            title: "Intégrations",
            icon: Plug,
            description: "Connectez vos outils existants",
            tools: [
              { name: "Webflow API", logo: "🌐", description: "Intégration CMS native" },
              { name: "REST APIs", logo: "🔌", description: "Connexions API universelles" },
              { name: "Webhooks", logo: "🪝", description: "Déclencheurs d'événements temps réel" },
              { name: "OAuth 2.0", logo: "🔐", description: "Authentification sécurisée" }
            ]
          }
        ]
      },
      architecture: {
        title: "Comment Fonctionnent Nos Agents IA",
        subtitle: "Un système autonome complet de l'entrée à l'action",
        steps: [
          {
            icon: Zap,
            title: "1. Capture d'Entrée",
            description: "Formulaires, emails, chat ou appels API déclenchent l'agent",
            features: ["Entrée multi-canal", "Traitement temps réel", "Validation des données"]
          },
          {
            icon: Brain,
            title: "2. Traitement IA",
            description: "GPT-4 ou Claude analyse le contexte et détermine l'action",
            features: ["Compréhension du langage naturel", "Conscience du contexte", "Support multilingue"]
          },
          {
            icon: GitBranch,
            title: "3. Logique de Décision",
            description: "Règles pré-configurées guident le comportement de l'agent",
            features: ["Règles métier personnalisées", "Workflows conditionnels", "Scénarios de secours"]
          },
          {
            icon: Workflow,
            title: "4. Exécution d'Action",
            description: "L'agent effectue des tâches automatiquement sur toutes les plateformes",
            features: ["Mises à jour CRM", "Envoi d'emails", "Synchronisation des données"]
          },
          {
            icon: Shield,
            title: "5. Surveillance & Apprentissage",
            description: "Suivi continu et optimisation",
            features: ["Analytiques de performance", "Détection d'erreurs", "Auto-amélioration"]
          }
        ]
      },
      security: {
        title: "Sécurité Enterprise",
        subtitle: "Vos données sont protégées avec un cryptage de grade militaire",
        features: [
          { icon: Lock, title: "Cryptage de Bout en Bout", description: "Cryptage AES-256 pour toutes les données" },
          { icon: Shield, title: "Conforme SOC 2", description: "Normes de sécurité certifiées" },
          { icon: Cloud, title: "Infrastructure Azure", description: "Cloud sécurisé de Microsoft" },
          { icon: Network, title: "Réseaux Privés", description: "Connexions VPN isolées" }
        ]
      },
      autonomy: {
        title: "Règles d'Autonomie",
        subtitle: "Agents intelligents qui savent quand agir et quand demander",
        levels: [
          {
            level: "Niveau 1 : Supervisé",
            description: "L'agent suggère des actions, l'humain approuve",
            useCase: "Ventes à haute valeur, questions juridiques"
          },
          {
            level: "Niveau 2 : Semi-Autonome",
            description: "L'agent agit automatiquement sur les tâches routinières, escalade les complexes",
            useCase: "Support client, saisie de données"
          },
          {
            level: "Niveau 3 : Totalement Autonome",
            description: "L'agent gère tout indépendamment dans des paramètres définis",
            useCase: "Qualification de leads, prise de rendez-vous"
          }
        ]
      },
      cta: {
        title: "Prêt à Déployer Vos Agents IA ?",
        subtitle: "Accédez à notre documentation technique complète et guide de déploiement",
        button: "Demander la Documentation",
        note: "Disponible uniquement pour les clients et partenaires"
      }
    },
    es: {
      hero: {
        badge: "Nuestra Tecnología",
        title: "Infraestructura de IA de Nivel Empresarial",
        subtitle: "Construida sobre plataformas líderes con seguridad militar y garantía de disponibilidad del 99,9%",
        cta: "Solicitar Documentación Técnica"
      },
      stack: {
        title: "Nuestro Stack Tecnológico",
        subtitle: "Utilizamos las mejores herramientas de la industria para construir sus agentes de IA",
        categories: [
          {
            title: "Cerebro IA",
            icon: Brain,
            description: "Múltiples modelos de IA para máxima flexibilidad",
            tools: [
              { name: "OpenAI GPT-4", logo: "🤖", description: "Últimos modelos GPT para razonamiento avanzado" },
              { name: "Azure OpenAI", logo: "☁️", description: "Seguridad empresarial con infraestructura Microsoft" },
              { name: "Anthropic Claude", logo: "🧠", description: "IA ética con contexto extendido" },
              { name: "Mistral AI", logo: "🚀", description: "Alternativa europea con soporte multilingüe" }
            ]
          },
          {
            title: "Orquestación",
            icon: Workflow,
            description: "Plataformas de automatización para flujos complejos",
            tools: [
              { name: "Make", logo: "⚡", description: "Automatización visual con más de 1000 integraciones" },
              { name: "Zapier", logo: "🔗", description: "Plataforma de automatización empresarial" },
              { name: "n8n", logo: "🔧", description: "Automatización de flujo auto-alojada" }
            ]
          },
          {
            title: "Almacenamiento",
            icon: Database,
            description: "Bases de datos seguras y escalables",
            tools: [
              { name: "Notion", logo: "📝", description: "Base de conocimientos colaborativa" },
              { name: "Airtable", logo: "🗂️", description: "Base de datos flexible con API" },
              { name: "HubSpot", logo: "🎯", description: "Integración CRM para ventas y marketing" },
              { name: "PostgreSQL", logo: "🐘", description: "Base de datos SQL empresarial" }
            ]
          },
          {
            title: "Integraciones",
            icon: Plug,
            description: "Conecte sus herramientas existentes",
            tools: [
              { name: "Webflow API", logo: "🌐", description: "Integración CMS nativa" },
              { name: "REST APIs", logo: "🔌", description: "Conexiones API universales" },
              { name: "Webhooks", logo: "🪝", description: "Disparadores de eventos en tiempo real" },
              { name: "OAuth 2.0", logo: "🔐", description: "Autenticación segura" }
            ]
          }
        ]
      },
      architecture: {
        title: "Cómo Funcionan Nuestros Agentes de IA",
        subtitle: "Un sistema autónomo completo desde la entrada hasta la acción",
        steps: [
          {
            icon: Zap,
            title: "1. Captura de Entrada",
            description: "Formularios, correos, chat o llamadas API activan el agente",
            features: ["Entrada multicanal", "Procesamiento en tiempo real", "Validación de datos"]
          },
          {
            icon: Brain,
            title: "2. Procesamiento IA",
            description: "GPT-4 o Claude analiza el contexto y determina la acción",
            features: ["Comprensión del lenguaje natural", "Conciencia del contexto", "Soporte multilingüe"]
          },
          {
            icon: GitBranch,
            title: "3. Lógica de Decisión",
            description: "Reglas preconfiguradas guían el comportamiento del agente",
            features: ["Reglas de negocio personalizadas", "Flujos condicionales", "Escenarios de respaldo"]
          },
          {
            icon: Workflow,
            title: "4. Ejecución de Acción",
            description: "El agente realiza tareas automáticamente en todas las plataformas",
            features: ["Actualizaciones de CRM", "Envío de correos", "Sincronización de datos"]
          },
          {
            icon: Shield,
            title: "5. Monitoreo y Aprendizaje",
            description: "Seguimiento continuo y optimización",
            features: ["Análisis de rendimiento", "Detección de errores", "Automejora"]
          }
        ]
      },
      security: {
        title: "Seguridad Empresarial",
        subtitle: "Sus datos están protegidos con cifrado de grado militar",
        features: [
          { icon: Lock, title: "Cifrado de Extremo a Extremo", description: "Cifrado AES-256 para todos los datos" },
          { icon: Shield, title: "Cumplimiento SOC 2", description: "Estándares de seguridad certificados" },
          { icon: Cloud, title: "Infraestructura Azure", description: "Nube segura de Microsoft" },
          { icon: Network, title: "Redes Privadas", description: "Conexiones VPN aisladas" }
        ]
      },
      autonomy: {
        title: "Reglas de Autonomía",
        subtitle: "Agentes inteligentes que saben cuándo actuar y cuándo preguntar",
        levels: [
          {
            level: "Nivel 1: Supervisado",
            description: "El agente sugiere acciones, el humano aprueba",
            useCase: "Ventas de alto valor, asuntos legales"
          },
          {
            level: "Nivel 2: Semi-Autónomo",
            description: "El agente actúa automáticamente en tareas rutinarias, escala las complejas",
            useCase: "Soporte al cliente, entrada de datos"
          },
          {
            level: "Nivel 3: Totalmente Autónomo",
            description: "El agente maneja todo independientemente dentro de parámetros definidos",
            useCase: "Calificación de prospectos, reserva de citas"
          }
        ]
      },
      cta: {
        title: "¿Listo para Desplegar Sus Agentes de IA?",
        subtitle: "Obtenga acceso a nuestra documentación técnica completa y guía de implementación",
        button: "Solicitar Documentación",
        note: "Disponible solo para clientes y socios"
      }
    },
    pt: {
      hero: {
        badge: "Nossa Tecnologia",
        title: "Infraestrutura de IA de Nível Empresarial",
        subtitle: "Construída em plataformas líderes com segurança militar e garantia de disponibilidade de 99,9%",
        cta: "Solicitar Documentação Técnica"
      },
      stack: {
        title: "Nosso Stack Tecnológico",
        subtitle: "Usamos as melhores ferramentas da indústria para construir seus agentes de IA",
        categories: [
          {
            title: "Cérebro IA",
            icon: Brain,
            description: "Múltiplos modelos de IA para máxima flexibilidade",
            tools: [
              { name: "OpenAI GPT-4", logo: "🤖", description: "Últimos modelos GPT para raciocínio avançado" },
              { name: "Azure OpenAI", logo: "☁️", description: "Segurança empresarial com infraestrutura Microsoft" },
              { name: "Anthropic Claude", logo: "🧠", description: "IA ética com contexto estendido" },
              { name: "Mistral AI", logo: "🚀", description: "Alternativa europeia com suporte multilíngue" }
            ]
          },
          {
            title: "Orquestração",
            icon: Workflow,
            description: "Plataformas de automação para fluxos complexos",
            tools: [
              { name: "Make", logo: "⚡", description: "Automação visual com mais de 1000 integrações" },
              { name: "Zapier", logo: "🔗", description: "Plataforma de automação empresarial" },
              { name: "n8n", logo: "🔧", description: "Automação de fluxo auto-hospedada" }
            ]
          },
          {
            title: "Armazenamento",
            icon: Database,
            description: "Bancos de dados seguros e escaláveis",
            tools: [
              { name: "Notion", logo: "📝", description: "Base de conhecimento colaborativa" },
              { name: "Airtable", logo: "🗂️", description: "Banco de dados flexível com API" },
              { name: "HubSpot", logo: "🎯", description: "Integração CRM para vendas e marketing" },
              { name: "PostgreSQL", logo: "🐘", description: "Banco de dados SQL empresarial" }
            ]
          },
          {
            title: "Integrações",
            icon: Plug,
            description: "Conecte suas ferramentas existentes",
            tools: [
              { name: "Webflow API", logo: "🌐", description: "Integração CMS nativa" },
              { name: "REST APIs", logo: "🔌", description: "Conexões API universais" },
              { name: "Webhooks", logo: "🪝", description: "Gatilhos de eventos em tempo real" },
              { name: "OAuth 2.0", logo: "🔐", description: "Autenticação segura" }
            ]
          }
        ]
      },
      architecture: {
        title: "Como Funcionam Nossos Agentes de IA",
        subtitle: "Um sistema autônomo completo da entrada à ação",
        steps: [
          {
            icon: Zap,
            title: "1. Captura de Entrada",
            description: "Formulários, e-mails, chat ou chamadas API acionam o agente",
            features: ["Entrada multicanal", "Processamento em tempo real", "Validação de dados"]
          },
          {
            icon: Brain,
            title: "2. Processamento IA",
            description: "GPT-4 ou Claude analisa o contexto e determina a ação",
            features: ["Compreensão de linguagem natural", "Consciência do contexto", "Suporte multilíngue"]
          },
          {
            icon: GitBranch,
            title: "3. Lógica de Decisão",
            description: "Regras pré-configuradas orientam o comportamento do agente",
            features: ["Regras de negócio personalizadas", "Fluxos condicionais", "Cenários de fallback"]
          },
          {
            icon: Workflow,
            title: "4. Execução de Ação",
            description: "O agente realiza tarefas automaticamente em todas as plataformas",
            features: ["Atualizações de CRM", "Envio de e-mails", "Sincronização de dados"]
          },
          {
            icon: Shield,
            title: "5. Monitoramento e Aprendizado",
            description: "Rastreamento contínuo e otimização",
            features: ["Análise de desempenho", "Detecção de erros", "Auto-aperfeiçoamento"]
          }
        ]
      },
      security: {
        title: "Segurança Empresarial",
        subtitle: "Seus dados são protegidos com criptografia de grau militar",
        features: [
          { icon: Lock, title: "Criptografia Ponta a Ponta", description: "Criptografia AES-256 para todos os dados" },
          { icon: Shield, title: "Conformidade SOC 2", description: "Padrões de segurança certificados" },
          { icon: Cloud, title: "Infraestrutura Azure", description: "Nuvem segura da Microsoft" },
          { icon: Network, title: "Redes Privadas", description: "Conexões VPN isoladas" }
        ]
      },
      autonomy: {
        title: "Regras de Autonomia",
        subtitle: "Agentes inteligentes que sabem quando agir e quando perguntar",
        levels: [
          {
            level: "Nível 1: Supervisionado",
            description: "O agente sugere ações, o humano aprova",
            useCase: "Vendas de alto valor, questões jurídicas"
          },
          {
            level: "Nível 2: Semi-Autônomo",
            description: "O agente age automaticamente em tarefas rotineiras, escalona as complexas",
            useCase: "Suporte ao cliente, entrada de dados"
          },
          {
            level: "Nível 3: Totalmente Autônomo",
            description: "O agente gerencia tudo independentemente dentro de parâmetros definidos",
            useCase: "Qualificação de leads, agendamento de consultas"
          }
        ]
      },
      cta: {
        title: "Pronto para Implantar Seus Agentes de IA?",
        subtitle: "Obtenha acesso à nossa documentação técnica completa e guia de implantação",
        button: "Solicitar Documentação",
        note: "Disponível apenas para clientes e parceiros"
      }
    }
  };

  const t = translations[lang];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-gradient-primary text-white border-0">
              {t.hero.badge}
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 text-gradient-hero">
              {t.hero.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {t.hero.subtitle}
            </p>
            <Button size="lg" className="bg-gradient-primary hover:opacity-90">
              {t.hero.cta}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
              {t.stack.title}
            </h2>
            <p className="text-xl text-muted-foreground">
              {t.stack.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {t.stack.categories.map((category: any, idx: number) => {
              const Icon = category.icon;
              const gradients = ['bg-gradient-primary', 'bg-gradient-accent', 'bg-gradient-warm', 'bg-gradient-cool'];
              return (
                <Card key={idx} className="p-8 hover:shadow-xl transition-all duration-300">
                  <div className={`w-16 h-16 ${gradients[idx]} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold font-heading mb-2">{category.title}</h3>
                  <p className="text-muted-foreground mb-6">{category.description}</p>
                  
                  <div className="space-y-4">
                    {category.tools.map((tool: any, toolIdx: number) => (
                      <div key={toolIdx} className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                        <span className="text-2xl">{tool.logo}</span>
                        <div>
                          <h4 className="font-semibold">{tool.name}</h4>
                          <p className="text-sm text-muted-foreground">{tool.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
              {t.architecture.title}
            </h2>
            <p className="text-xl text-muted-foreground">
              {t.architecture.subtitle}
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {t.architecture.steps.map((step: any, idx: number) => {
              const Icon = step.icon;
              return (
                <Card key={idx} className="p-8 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold font-heading mb-2">{step.title}</h3>
                      <p className="text-muted-foreground mb-4">{step.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {step.features.map((feature: string, fIdx: number) => (
                          <Badge key={fIdx} variant="secondary">
                            <CheckCircle2 className="w-3 h-3 mr-1" />
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
              {t.security.title}
            </h2>
            <p className="text-xl text-muted-foreground">
              {t.security.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.security.features.map((feature: any, idx: number) => {
              const Icon = feature.icon;
              return (
                <Card key={idx} className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Autonomy Levels */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
              {t.autonomy.title}
            </h2>
            <p className="text-xl text-muted-foreground">
              {t.autonomy.subtitle}
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {t.autonomy.levels.map((level: any, idx: number) => (
              <Card key={idx} className="p-8 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg text-white font-bold text-xl">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-heading mb-2">{level.level}</h3>
                    <p className="text-muted-foreground mb-3">{level.description}</p>
                    <Badge variant="secondary">
                      <Code className="w-3 h-3 mr-1" />
                      {level.useCase}
                    </Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="p-12 bg-gradient-hero text-white text-center border-0 shadow-2xl">
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
              {t.cta.title}
            </h2>
            <p className="text-xl mb-8 opacity-90">
              {t.cta.subtitle}
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              {t.cta.button}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <p className="mt-4 text-sm opacity-75">{t.cta.note}</p>
          </Card>
        </div>
      </section>
    </div>
  );
}
