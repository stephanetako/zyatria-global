

import { Headphones, Target, Users, Bell, ShoppingCart, ArrowRight, MessageSquare, Calendar, Home, CheckCircle2, Zap } from 'lucide-react';
import { useState } from 'react';
import { Card } from './ui/card';
import { baseUrl } from '../lib/base-url';

const translations = {
  en: {
    badge: "Digital Micro-Agents",
    title: "Our AI Micro-Agents",
    subtitle: "Choose the micro-agent suited to your business",
    description: "Pre-configured solutions ready to deploy. Choose your micro-agent, we set it up, and you see results within a week.",
    intro: "Pre-configured solutions ready to deploy. Choose your micro-agent, we set it up, and you see results within a week.",
    cta: {
      button: "Request a Demo",
      link: "Or contact us to discuss your needs"
    },
    agents: [
      {
        icon: Target,
        name: "Automatic Lead Qualification",
        subtitle: "Lead Scoring",
        description: "Automatically qualify your prospects, score them based on their interest, and alert your team only for serious leads.",
        features: [
          "Auto-scoring of prospects",
          "Instant qualification",
          "Smart alerts for hot leads",
          "CRM integration"
        ],
        price: "From 197€/month"
      },
      {
        icon: MessageSquare,
        name: "24/7 Customer Responses",
        subtitle: "Instant Support",
        description: "Never leave a customer waiting. Instant responses to common questions, day and night, in multiple languages.",
        features: [
          "Instant replies 24/7",
          "Multi-language support",
          "FAQ database",
          "Human escalation when needed"
        ],
        price: "From 147€/month"
      },
      {
        icon: Calendar,
        name: "Appointment Management",
        subtitle: "Smart Booking",
        description: "Automate booking management. Clients schedule directly, receive automatic reminders, no more back-and-forth emails.",
        features: [
          "Direct online booking",
          "Automatic reminders",
          "Calendar sync",
          "Confirmation management"
        ],
        price: "From 127€/month"
      },
      {
        icon: Bell,
        name: "Prospect Follow-up",
        subtitle: "Automated Nurturing",
        description: "Never let a prospect go cold. Automatic follow-ups via email, SMS, or WhatsApp at the right time.",
        features: [
          "Automated sequences",
          "Multi-channel (email, SMS, WhatsApp)",
          "Smart timing",
          "Engagement tracking"
        ],
        price: "From 177€/month"
      },
      {
        icon: Home,
        name: "Real Estate Micro-Agent",
        subtitle: "Properties, Visits, Leads",
        description: "Manage property visits, qualify buyers, answer questions about listings 24/7. All automated.",
        features: [
          "Visit scheduling",
          "Buyer qualification",
          "Property Q&A",
          "Lead management"
        ],
        price: "From 247€/month"
      },
      {
        icon: ShoppingCart,
        name: "E-commerce Micro-Agent",
        subtitle: "Cart, Orders, FAQ",
        description: "Recover abandoned carts, track orders, answer product questions. Increase your conversion rate.",
        features: [
          "Cart recovery",
          "Order tracking",
          "Product FAQ",
          "Personalized recommendations"
        ],
        price: "From 197€/month"
      }
    ]
  },
  fr: {
    badge: "Micro-Agents Digitaux",
    title: "Nos Micro-Agents IA",
    subtitle: "Choisissez le micro-agent adapté à votre activité",
    description: "Des solutions pré-configurées prêtes à déployer. Choisissez votre micro-agent, nous le configurons, et vous voyez des résultats en une semaine.",
    intro: "Des solutions pré-configurées prêtes à déployer. Choisissez votre micro-agent, nous le configurons, et vous voyez des résultats en une semaine.",
    cta: {
      button: "Demander une Démo",
      link: "Ou contactez-nous pour discuter de vos besoins"
    },
    agents: [
      {
        icon: Target,
        name: "Qualification Automatique des Leads",
        subtitle: "Scoring de Leads",
        description: "Qualifiez automatiquement vos prospects, scorez-les selon leur intérêt, et alertez votre équipe uniquement pour les leads sérieux.",
        features: [
          "Auto-scoring des prospects",
          "Qualification instantanée",
          "Alertes intelligentes leads chauds",
          "Intégration CRM"
        ],
        price: "À partir de 197€/mois"
      },
      {
        icon: MessageSquare,
        name: "Réponses Clients 24/7",
        subtitle: "Support Instantané",
        description: "Ne laissez jamais un client attendre. Réponses instantanées aux questions courantes, jour et nuit, en plusieurs langues.",
        features: [
          "Réponses instantanées 24/7",
          "Support multilingue",
          "Base de connaissances FAQ",
          "Escalade humaine si besoin"
        ],
        price: "À partir de 147€/mois"
      },
      {
        icon: Calendar,
        name: "Gestion des Rendez-vous",
        subtitle: "Prise de RDV Intelligente",
        description: "Automatisez la gestion des réservations. Les clients prennent RDV directement, reçoivent des rappels automatiques, fini les allers-retours.",
        features: [
          "Réservation en ligne directe",
          "Rappels automatiques",
          "Synchronisation agenda",
          "Gestion des confirmations"
        ],
        price: "À partir de 127€/mois"
      },
      {
        icon: Bell,
        name: "Suivi des Prospects",
        subtitle: "Nurturing Automatisé",
        description: "Ne laissez plus jamais refroidir un prospect. Relances automatiques par email, SMS ou WhatsApp au bon moment.",
        features: [
          "Séquences automatisées",
          "Multi-canal (email, SMS, WhatsApp)",
          "Timing intelligent",
          "Suivi d'engagement"
        ],
        price: "À partir de 177€/mois"
      },
      {
        icon: Home,
        name: "Micro-Agent Immobilier",
        subtitle: "Visites, Leads, Réponses",
        description: "Gérez les visites de biens, qualifiez les acheteurs, répondez aux questions sur les annonces 24/7. Tout en automatique.",
        features: [
          "Planification des visites",
          "Qualification des acheteurs",
          "Réponses sur les biens",
          "Gestion des leads"
        ],
        price: "À partir de 247€/mois"
      },
      {
        icon: ShoppingCart,
        name: "Micro-Agent Commerce",
        subtitle: "Panier, Commandes, FAQ",
        description: "Récupérez les paniers abandonnés, suivez les commandes, répondez aux questions produits. Augmentez votre taux de conversion.",
        features: [
          "Récupération de paniers",
          "Suivi de commandes",
          "FAQ produits",
          "Recommandations personnalisées"
        ],
        price: "À partir de 197€/mois"
      }
    ]
  },
  es: {
    badge: "Micro-Agentes Digitales",
    title: "Nuestros Micro-Agentes IA",
    subtitle: "Elija el micro-agente adaptado a su actividad",
    description: "Soluciones preconfiguradas listas para implementar. Elija su micro-agente, lo configuramos y ve resultados en una semana.",
    intro: "Soluciones preconfiguradas listas para implementar. Elija su micro-agente, lo configuramos y ve resultados en una semana.",
    cta: {
      button: "Solicitar una Demo",
      link: "O contáctenos para discutir sus necesidades"
    },
    agents: [
      {
        icon: Target,
        name: "Calificación Automática de Leads",
        subtitle: "Scoring de Leads",
        description: "Califique automáticamente sus prospectos, puntúelos según su interés y alerte a su equipo solo para leads serios.",
        features: [
          "Auto-puntuación de prospectos",
          "Calificación instantánea",
          "Alertas inteligentes leads calientes",
          "Integración CRM"
        ],
        price: "Desde 197€/mes"
      },
      {
        icon: MessageSquare,
        name: "Respuestas a Clientes 24/7",
        subtitle: "Soporte Instantáneo",
        description: "Nunca deje a un cliente esperando. Respuestas instantáneas a preguntas comunes, día y noche, en varios idiomas.",
        features: [
          "Respuestas instantáneas 24/7",
          "Soporte multilingüe",
          "Base de conocimientos FAQ",
          "Escalación humana si es necesario"
        ],
        price: "Desde 147€/mes"
      },
      {
        icon: Calendar,
        name: "Gestión de Citas",
        subtitle: "Reserva Inteligente",
        description: "Automatice la gestión de reservas. Los clientes programan directamente, reciben recordatorios automáticos, sin más idas y venidas.",
        features: [
          "Reserva en línea directa",
          "Recordatorios automáticos",
          "Sincronización de calendario",
          "Gestión de confirmaciones"
        ],
        price: "Desde 127€/mes"
      },
      {
        icon: Bell,
        name: "Seguimiento de Prospectos",
        subtitle: "Nurturing Automatizado",
        description: "Nunca deje que un prospecto se enfríe. Seguimientos automáticos por email, SMS o WhatsApp en el momento adecuado.",
        features: [
          "Secuencias automatizadas",
          "Multi-canal (email, SMS, WhatsApp)",
          "Timing inteligente",
          "Seguimiento de compromiso"
        ],
        price: "Desde 177€/mes"
      },
      {
        icon: Home,
        name: "Micro-Agente Inmobiliario",
        subtitle: "Visitas, Leads, Respuestas",
        description: "Gestione visitas de propiedades, califique compradores, responda preguntas sobre listados 24/7. Todo automatizado.",
        features: [
          "Planificación de visitas",
          "Calificación de compradores",
          "Respuestas sobre propiedades",
          "Gestión de leads"
        ],
        price: "Desde 247€/mes"
      },
      {
        icon: ShoppingCart,
        name: "Micro-Agente Comercio",
        subtitle: "Carrito, Pedidos, FAQ",
        description: "Recupere carritos abandonados, rastree pedidos, responda preguntas sobre productos. Aumente su tasa de conversión.",
        features: [
          "Recuperación de carritos",
          "Seguimiento de pedidos",
          "FAQ de productos",
          "Recomendaciones personalizadas"
        ],
        price: "Desde 197€/mes"
      }
    ]
  },
  pt: {
    badge: "Micro-Agentes Digitais",
    title: "Nossos Micro-Agentes IA",
    subtitle: "Escolha o micro-agente adaptado à sua atividade",
    description: "Soluções pré-configuradas prontas para implementar. Escolha seu micro-agente, configuramos e você vê resultados em uma semana.",
    intro: "Soluções pré-configuradas prontas para implementar. Escolha seu micro-agente, configuramos e você vê resultados em uma semana.",
    cta: {
      button: "Solicitar uma Demo",
      link: "Ou entre em contato para discutir suas necessidades"
    },
    agents: [
      {
        icon: Target,
        name: "Qualificação Automática de Leads",
        subtitle: "Scoring de Leads",
        description: "Qualifique automaticamente seus prospects, pontue-os de acordo com seu interesse e alerte sua equipe apenas para leads sérios.",
        features: [
          "Auto-pontuação de prospects",
          "Qualificação instantânea",
          "Alertas inteligentes leads quentes",
          "Integração CRM"
        ],
        price: "A partir de 197€/mês"
      },
      {
        icon: MessageSquare,
        name: "Respostas a Clientes 24/7",
        subtitle: "Suporte Instantâneo",
        description: "Nunca deixe um cliente esperando. Respostas instantâneas a perguntas comuns, dia e noite, em vários idiomas.",
        features: [
          "Respostas instantâneas 24/7",
          "Suporte multilíngue",
          "Base de conhecimento FAQ",
          "Escalação humana se necessário"
        ],
        price: "A partir de 147€/mês"
      },
      {
        icon: Calendar,
        name: "Gestão de Agendamentos",
        subtitle: "Reserva Inteligente",
        description: "Automatize a gestão de reservas. Clientes agendam diretamente, recebem lembretes automáticos, sem mais idas e vindas.",
        features: [
          "Reserva online direta",
          "Lembretes automáticos",
          "Sincronização de calendário",
          "Gestão de confirmações"
        ],
        price: "A partir de 127€/mês"
      },
      {
        icon: Bell,
        name: "Acompanhamento de Prospects",
        subtitle: "Nurturing Automatizado",
        description: "Nunca deixe um prospect esfriar. Follow-ups automáticos por email, SMS ou WhatsApp no momento certo.",
        features: [
          "Sequências automatizadas",
          "Multi-canal (email, SMS, WhatsApp)",
          "Timing inteligente",
          "Rastreamento de engajamento"
        ],
        price: "A partir de 177€/mês"
      },
      {
        icon: Home,
        name: "Micro-Agente Imobiliário",
        subtitle: "Visitas, Leads, Respostas",
        description: "Gerencie visitas a imóveis, qualifique compradores, responda perguntas sobre anúncios 24/7. Tudo automatizado.",
        features: [
          "Planejamento de visitas",
          "Qualificação de compradores",
          "Respostas sobre imóveis",
          "Gestão de leads"
        ],
        price: "A partir de 247€/mês"
      },
      {
        icon: ShoppingCart,
        name: "Micro-Agente Comércio",
        subtitle: "Carrinho, Pedidos, FAQ",
        description: "Recupere carrinhos abandonados, rastreie pedidos, responda perguntas sobre produtos. Aumente sua taxa de conversão.",
        features: [
          "Recuperação de carrinhos",
          "Rastreamento de pedidos",
          "FAQ de produtos",
          "Recomendações personalizadas"
        ],
        price: "A partir de 197€/mês"
      }
    ]
  }
};

export default function MicroAgents() {
  const [lang, setLang] = useState<'en' | 'fr' | 'es' | 'pt'>('en');
  const t = translations[lang];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="micro-agents" className="py-24 bg-gradient-to-b from-white via-blue-50/20 to-white dark:from-zinc-950 dark:via-blue-950/10 dark:to-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-400/10 border border-blue-400/30 rounded-full mb-4">
            <Zap className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-semibold text-blue-500">{t.badge}</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold animate-fade-in-up delay-200">
            <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">{t.title}</span>
          </h2>
          
          <p className="text-xl text-muted-foreground animate-fade-in-up delay-300">
            {t.subtitle}
          </p>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up delay-400">
            {t.intro}
          </p>
        </div>

        {/* Micro-Agents Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.agents.map((agent: any, index: number) => {
            const Icon = agent.icon;
            const gradients = [
              'from-blue-500 to-violet-500',
              'from-violet-500 to-cyan-500',
              'from-cyan-500 to-blue-500',
              'from-blue-500 to-cyan-500',
              'from-violet-500 to-blue-500',
              'from-cyan-500 to-violet-500'
            ];
            const textGradients = [
              'text-blue-500',
              'text-violet-500',
              'text-cyan-500',
              'text-blue-500',
              'text-violet-500',
              'text-cyan-500'
            ];
            return (
              <Card 
                key={index}
                className="group p-8 rounded-2xl border-2 hover:border-blue-400/40 bg-white dark:bg-zinc-900 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${gradients[index % gradients.length]} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold font-heading mb-3 group-hover:text-blue-500 transition-colors">
                  {agent.name}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {agent.description}
                </p>
                <ul className="space-y-3 mb-6">
                  {agent.features.map((feature: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800">
                  <span className="text-lg font-bold text-blue-500">{agent.price}</span>
                </div>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center space-y-4 animate-fade-in-up delay-1000">
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-violet-500 text-white rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-violet-600 transition-all shadow-lg shadow-blue-500/30 hover:shadow-xl hover:scale-105"
          >
            {t.cta.button}
            <ArrowRight className="w-5 h-5" />
          </button>
          <div>
            <a 
              href={`${baseUrl}/demo`}
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-500 transition-colors text-sm"
            >
              {t.cta.link}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}














