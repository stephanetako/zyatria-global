




import React from 'react';
import { Headphones, Target, Users, Bell, ShoppingCart, ArrowRight, MessageSquare, Calendar, Home, CheckCircle2, Zap, CreditCard, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { useLanguage } from '../lib/language-context';
import { baseUrl } from '../lib/base-url';
import { stripeLinks } from '../config/stripe-links';

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
    buttons: {
      buyNow: "Buy Now",
      requestDemo: "Request Demo"
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
        price: "69 $CA/month",
        category: "Basic",
        stripeLink: stripeLinks.microAgents.leadQualification
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
        price: "69 $CA/month",
        category: "Basic",
        stripeLink: stripeLinks.microAgents.customerSupport
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
        price: "68 $CA/month",
        category: "Basic",
        stripeLink: stripeLinks.microAgents.appointments
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
        price: "180 $CA/month",
        category: "Advanced",
        stripeLink: stripeLinks.microAgents.prospectFollowup
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
        price: "208 $CA/month",
        category: "Advanced",
        stripeLink: stripeLinks.microAgents.realEstate
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
        price: "195 $CA/month",
        category: "Advanced",
        stripeLink: stripeLinks.microAgents.ecommerce
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
    buttons: {
      buyNow: "Acheter maintenant",
      requestDemo: "Demander une démo"
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
        price: "69 $CA/mois",
        category: "Basique",
        stripeLink: stripeLinks.microAgents.leadQualification
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
        price: "69 $CA/mois",
        category: "Basique",
        stripeLink: stripeLinks.microAgents.customerSupport
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
        price: "68 $CA/mois",
        category: "Basique",
        stripeLink: stripeLinks.microAgents.appointments
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
        price: "180 $CA/mois",
        category: "Avancé",
        stripeLink: stripeLinks.microAgents.prospectFollowup
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
        price: "208 $CA/mois",
        category: "Avancé",
        stripeLink: stripeLinks.microAgents.realEstate
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
        price: "195 $CA/mois",
        category: "Avancé",
        stripeLink: stripeLinks.microAgents.ecommerce
      }
    ]
  }
};

export default function MicroAgents() {
  const { language } = useLanguage();
  const t = translations[language as 'en' | 'fr'];

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

        {/* Micro-Agents Illustration */}
        <div className="flex justify-center mb-16 animate-fade-in-up delay-500">
          <img 
            src="/micro-agents-illustration.svg" 
            alt="Micro-Agents Illustration" 
            className="w-full max-w-3xl h-auto drop-shadow-xl opacity-90 hover:opacity-100 transition-opacity duration-300"
          />
        </div>

        {/* Micro-Agents Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.agents.map((agent: any, index: number) => {
            const Icon = agent.icon;
            const solidColors = [
              'bg-blue-600',
              'bg-violet-600',
              'bg-cyan-600',
              'bg-blue-600',
              'bg-violet-600',
              'bg-cyan-600'
            ];
            const textColors = [
              'text-blue-600',
              'text-violet-600',
              'text-cyan-600',
              'text-blue-600',
              'text-violet-600',
              'text-cyan-600'
            ];
            return (
              <Card 
                key={index}
                className="group p-8 rounded-2xl border-2 hover:border-blue-400/40 bg-white dark:bg-zinc-900 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500"
              >
                <div className={`w-16 h-16 ${solidColors[index % solidColors.length]} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold font-heading mb-3 group-hover:text-blue-600 transition-colors">
                  {agent.name}
                </h3>
                <p className="text-zinc-700 dark:text-zinc-300 mb-6">
                  {agent.description}
                </p>
                <ul className="space-y-3 mb-6">
                  {agent.features.map((feature: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className={`w-5 h-5 ${textColors[index % textColors.length]} flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform`} />
                      <span className="text-sm text-zinc-700 dark:text-zinc-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800">
                  <div className="mb-4">
                    <span className={`text-lg font-bold ${textColors[index % textColors.length]}`}>{agent.price}</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <a
                      href={agent.stripeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r ${solidColors[index % solidColors.length].replace('bg-', 'from-')} to-violet-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105`}
                    >
                      <CreditCard className="w-4 h-4" />
                      {t.buttons.buyNow}
                    </a>
                    <button
                      onClick={scrollToContact}
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 border-2 border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 rounded-lg font-semibold hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
                    >
                      <MessageSquare className="w-4 h-4" />
                      {t.buttons.requestDemo}
                    </button>
                  </div>
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



























