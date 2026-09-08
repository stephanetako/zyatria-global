import React from 'react';
import { Target, Bell, ShoppingCart, MessageSquare, Calendar, Home, CheckCircle2, Zap, CreditCard, ArrowRight } from 'lucide-react';
import { Card } from './ui/card';
import { useLanguage } from '../lib/language-context';
import { baseUrl } from '../lib/base-url';
import { STRIPE_PAYMENT_LINKS } from '../config/stripe-links';

const translations = {
  en: {
    badge: "Digital Micro-Agents",
    title: "Our AI Micro-Agents",
    subtitle: "Choose the micro-agent suited to your business",
    intro: "Pre-configured solutions ready to deploy. Choose your micro-agent, we set it up, and you see results within a week.",
    buttons: {
      buyNow: "Buy Now",
      requestDemo: "Request Demo"
    },
    cta: {
      button: "Request a Demo",
      link: "Or contact us to discuss your needs"
    },
    agents: [
      {
        icon: Target,
        name: "Automatic Lead Qualification",
        description: "Automatically qualify your prospects, score them based on their interest, and alert your team only for serious leads.",
        features: ["Auto-scoring of prospects", "Instant qualification", "Smart alerts for hot leads", "CRM integration"],
        price: "69 $CA/month",
        stripeLink: STRIPE_PAYMENT_LINKS.microAgents.leadQualification
      },
      {
        icon: MessageSquare,
        name: "24/7 Customer Responses",
        description: "Never leave a customer waiting. Instant responses to common questions, day and night, in multiple languages.",
        features: ["Instant replies 24/7", "Multi-language support", "FAQ database", "Human escalation when needed"],
        price: "69 $CA/month",
        stripeLink: STRIPE_PAYMENT_LINKS.microAgents.customerSupport
      },
      {
        icon: Calendar,
        name: "Appointment Management",
        description: "Automate booking management. Clients schedule directly, receive automatic reminders, no more back-and-forth emails.",
        features: ["Direct online booking", "Automatic reminders", "Calendar sync", "Confirmation management"],
        price: "68 $CA/month",
        stripeLink: STRIPE_PAYMENT_LINKS.microAgents.appointments
      },
      {
        icon: Bell,
        name: "Prospect Follow-up",
        description: "Never let a prospect go cold. Automatic follow-ups via email, SMS, or WhatsApp at the right time.",
        features: ["Automated sequences", "Multi-channel (email, SMS, WhatsApp)", "Smart timing", "Engagement tracking"],
        price: "180 $CA/month",
        stripeLink: STRIPE_PAYMENT_LINKS.microAgents.prospectFollowup
      },
      {
        icon: Home,
        name: "Real Estate Micro-Agent",
        description: "Manage property visits, qualify buyers, answer questions about listings 24/7. All automated.",
        features: ["Visit scheduling", "Buyer qualification", "Property Q&A", "Lead management"],
        price: "208 $CA/month",
        stripeLink: STRIPE_PAYMENT_LINKS.microAgents.realEstate
      },
      {
        icon: ShoppingCart,
        name: "E-commerce Micro-Agent",
        description: "Recover abandoned carts, track orders, answer product questions. Increase your conversion rate.",
        features: ["Cart recovery", "Order tracking", "Product FAQ", "Personalized recommendations"],
        price: "195 $CA/month",
        stripeLink: STRIPE_PAYMENT_LINKS.microAgents.ecommerce
      }
    ]
  },
  fr: {
    badge: "Micro-Agents Digitaux",
    title: "Nos Micro-Agents IA",
    subtitle: "Choisissez le micro-agent adapté à votre activité",
    intro: "Des solutions pré-configurées prêtes à déployer. Choisissez votre micro-agent, nous le configurons, et vous voyez des résultats en une semaine.",
    buttons: {
      buyNow: "Acheter maintenant",
      requestDemo: "Demander une démo"
    },
    cta: {
      button: "Demander une Démo",
      link: "Ou contactez-nous pour discuter de vos besoins"
    },
    agents: [
      {
        icon: Target,
        name: "Qualification Automatique des Leads",
        description: "Qualifiez automatiquement vos prospects, scorez-les selon leur intérêt, et alertez votre équipe uniquement pour les leads sérieux.",
        features: ["Auto-scoring des prospects", "Qualification instantanée", "Alertes intelligentes leads chauds", "Intégration CRM"],
        price: "69 $CA/mois",
        stripeLink: STRIPE_PAYMENT_LINKS.microAgents.leadQualification
      },
      {
        icon: MessageSquare,
        name: "Réponses Clients 24/7",
        description: "Ne laissez jamais un client attendre. Réponses instantanées aux questions courantes, jour et nuit, en plusieurs langues.",
        features: ["Réponses instantanées 24/7", "Support multilingue", "Base de connaissances FAQ", "Escalade humaine si besoin"],
        price: "69 $CA/mois",
        stripeLink: STRIPE_PAYMENT_LINKS.microAgents.customerSupport
      },
      {
        icon: Calendar,
        name: "Gestion des Rendez-vous",
        description: "Automatisez la gestion des réservations. Les clients prennent RDV directement, reçoivent des rappels automatiques, fini les allers-retours.",
        features: ["Réservation en ligne directe", "Rappels automatiques", "Synchronisation agenda", "Gestion des confirmations"],
        price: "68 $CA/mois",
        stripeLink: STRIPE_PAYMENT_LINKS.microAgents.appointments
      },
      {
        icon: Bell,
        name: "Suivi des Prospects",
        description: "Ne laissez plus jamais refroidir un prospect. Relances automatiques par email, SMS ou WhatsApp au bon moment.",
        features: ["Séquences automatisées", "Multi-canal (email, SMS, WhatsApp)", "Timing intelligent", "Suivi d'engagement"],
        price: "180 $CA/mois",
        stripeLink: STRIPE_PAYMENT_LINKS.microAgents.prospectFollowup
      },
      {
        icon: Home,
        name: "Micro-Agent Immobilier",
        description: "Gérez les visites de biens, qualifiez les acheteurs, répondez aux questions sur les annonces 24/7. Tout en automatique.",
        features: ["Planification des visites", "Qualification des acheteurs", "Réponses sur les biens", "Gestion des leads"],
        price: "208 $CA/mois",
        stripeLink: STRIPE_PAYMENT_LINKS.microAgents.realEstate
      },
      {
        icon: ShoppingCart,
        name: "Micro-Agent Commerce",
        description: "Récupérez les paniers abandonnés, suivez les commandes, répondez aux questions produits. Augmentez votre taux de conversion.",
        features: ["Récupération de paniers", "Suivi de commandes", "FAQ produits", "Recommandations personnalisées"],
        price: "195 $CA/mois",
        stripeLink: STRIPE_PAYMENT_LINKS.microAgents.ecommerce
      }
    ]
  }
};

export default function MicroAgents() {
  const { language } = useLanguage();
  const t = translations[language];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const solidColors = ['bg-blue-600', 'bg-violet-600', 'bg-cyan-600', 'bg-blue-600', 'bg-violet-600', 'bg-cyan-600'];
  const textColors = ['text-blue-600', 'text-violet-600', 'text-cyan-600', 'text-blue-600', 'text-violet-600', 'text-cyan-600'];

  return (
    <section id="micro-agents" className="py-24 bg-gradient-to-b from-white via-blue-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-400/10 border border-blue-400/30 rounded-full mb-4">
            <Zap className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-semibold text-blue-500">{t.badge}</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">{t.title}</span>
          </h2>
          <p className="text-xl text-muted-foreground">{t.subtitle}</p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.intro}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.agents.map((agent: any, index: number) => {
            const Icon = agent.icon;
            return (
              <Card key={index} className="group p-8 rounded-2xl border-2 hover:border-blue-400/40 bg-white hover:shadow-xl transition-all">
                <div className={`w-16 h-16 ${solidColors[index % solidColors.length]} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{agent.name}</h3>
                <p className="text-zinc-700 mb-6">{agent.description}</p>
                <ul className="space-y-3 mb-6">
                  {agent.features.map((feature: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className={`w-5 h-5 ${textColors[index % textColors.length]} flex-shrink-0`} />
                      <span className="text-sm text-zinc-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t">
                  <div className="mb-4">
                    <span className={`text-lg font-bold ${textColors[index % textColors.length]}`}>{agent.price}</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <a href={agent.stripeLink} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r ${solidColors[index % solidColors.length].replace('bg-', 'from-')} to-violet-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all`}>
                      <CreditCard className="w-4 h-4" />
                      {t.buttons.buyNow}
                    </a>
                    <button onClick={scrollToContact} className="inline-flex items-center justify-center gap-2 px-4 py-2.5 border-2 text-zinc-700 rounded-lg font-semibold hover:border-blue-400 transition-all">
                      <MessageSquare className="w-4 h-4" />
                      {t.buttons.requestDemo}
                    </button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <button onClick={scrollToContact} className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-violet-500 text-white rounded-lg text-lg font-semibold hover:shadow-xl transition-all">
            {t.cta.button}
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
