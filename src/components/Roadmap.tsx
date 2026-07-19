import React from 'react';
import { CheckCircle2, Clock, Rocket, Sparkles, Zap, Users, Calendar } from 'lucide-react';
import { Card } from './ui/card';
import { useLanguage } from '../lib/language-context';

const translations = {
  fr: {
    badge: 'Roadmap de Développement',
    title: 'Notre Plan de Lancement',
    subtitle: 'Transparence totale sur notre développement. Nous construisons des agents IA de haute qualité.',
    phases: [
      {
        phase: 'Phase 1',
        title: 'Disponible Maintenant',
        status: 'active',
        icon: CheckCircle2,
        color: 'from-primary to-primary/80',
        items: [
          '✅ Consultations stratégiques IA',
          '✅ Audits de processus complets',
          '✅ Formation sur l\'IA pour équipes',
          '✅ Recommandations personnalisées',
          '✅ Roadmap d\'automatisation'
        ],
        cta: 'Réserver Maintenant',
        link: '#contact'
      },
      {
        phase: 'Phase 2',
        title: 'En Développement (60 jours)',
        status: 'progress',
        icon: Zap,
        color: 'from-blue-500 to-indigo-500',
        items: [
          '🔧 Agent vocal (Vapi.ai)',
          '🔧 Chatbot intelligent (GPT-4)',
          '🔧 Automatisation CRM',
          '🔧 Intégrations API',
          '🔧 Dashboard analytics'
        ],
        cta: 'Pré-Commander (-30%)',
        link: '#contact'
      },
      {
        phase: 'Phase 3',
        title: 'Lancement Complet (90 jours)',
        status: 'upcoming',
        icon: Rocket,
        color: 'from-purple-500 to-pink-500',
        items: [
          '🚀 7 Micro-Agents spécialisés',
          '🚀 Support 24/7',
          '🚀 Déploiement en 7-15 jours',
          '🚀 Formation personnalisée',
          '🚀 SLA garantis'
        ],
        cta: 'Réserver Votre Place',
        link: '#contact'
      }
    ],
    commitment: {
      title: 'Notre Engagement',
      items: [
        {
          icon: Sparkles,
          title: 'Qualité Premium',
          description: 'Nous ne lançons que des produits testés et performants'
        },
        {
          icon: Users,
          title: 'Support Dédié',
          description: 'Accompagnement personnalisé à chaque étape'
        },
        {
          icon: Calendar,
          title: 'Transparence',
          description: 'Mises à jour hebdomadaires sur notre progression'
        }
      ]
    },
    earlyBird: {
      title: '🎁 Offre Pré-Lancement',
      benefits: [
        '30% de réduction sur tous les plans',
        'Accès prioritaire aux nouvelles fonctionnalités',
        'Formation gratuite (valeur 497$)',
        'Support VIP à vie',
        'Garantie satisfait ou remboursé 60 jours'
      ],
      cta: 'Profiter de l\'Offre',
      note: 'Offre limitée aux 50 premiers clients'
    }
  },
  en: {
    badge: 'Development Roadmap',
    title: 'Our Launch Plan',
    subtitle: 'Complete transparency on our development. We\'re building high-quality AI agents.',
    phases: [
      {
        phase: 'Phase 1',
        title: 'Available Now',
        status: 'active',
        icon: CheckCircle2,
        color: 'from-primary to-primary/80',
        items: [
          '✅ Strategic AI consultations',
          '✅ Complete process audits',
          '✅ AI training for teams',
          '✅ Personalized recommendations',
          '✅ Automation roadmap'
        ],
        cta: 'Book Now',
        link: '#contact'
      },
      {
        phase: 'Phase 2',
        title: 'In Development (60 days)',
        status: 'progress',
        icon: Zap,
        color: 'from-blue-500 to-indigo-500',
        items: [
          '🔧 Voice agent (Vapi.ai)',
          '🔧 Intelligent chatbot (GPT-4)',
          '🔧 CRM automation',
          '🔧 API integrations',
          '🔧 Analytics dashboard'
        ],
        cta: 'Pre-Order (-30%)',
        link: '#contact'
      },
      {
        phase: 'Phase 3',
        title: 'Full Launch (90 days)',
        status: 'upcoming',
        icon: Rocket,
        color: 'from-purple-500 to-pink-500',
        items: [
          '🚀 7 Specialized Micro-Agents',
          '🚀 24/7 Support',
          '🚀 7-15 day deployment',
          '🚀 Personalized training',
          '🚀 Guaranteed SLA'
        ],
        cta: 'Reserve Your Spot',
        link: '#contact'
      }
    ],
    commitment: {
      title: 'Our Commitment',
      items: [
        {
          icon: Sparkles,
          title: 'Premium Quality',
          description: 'We only launch tested and high-performing products'
        },
        {
          icon: Users,
          title: 'Dedicated Support',
          description: 'Personalized guidance at every step'
        },
        {
          icon: Calendar,
          title: 'Transparency',
          description: 'Weekly updates on our progress'
        }
      ]
    },
    earlyBird: {
      title: '🎁 Pre-Launch Offer',
      benefits: [
        '30% discount on all plans',
        'Priority access to new features',
        'Free training (worth $497)',
        'Lifetime VIP support',
        '60-day money-back guarantee'
      ],
      cta: 'Claim Offer',
      note: 'Limited to first 50 customers'
    }
  }
};

const Roadmap: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="roadmap" className="py-24 bg-gradient-to-b from-white via-blue-50/30 to-white dark:from-zinc-950 dark:via-blue-950/10 dark:to-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-4">
            <Calendar className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-600">{t.badge}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            {t.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Timeline */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {t.phases.map((phase, index) => {
            const Icon = phase.icon;
            return (
              <Card
                key={index}
                className={`relative overflow-hidden p-8 transition-all duration-300 hover:shadow-2xl ${
                  phase.status === 'active' ? 'border-border border-2 shadow-xl' : 'border-border'
                }`}
              >
                {/* Status Badge */}
                <div className={`absolute top-0 right-0 px-4 py-1.5 text-xs font-bold text-white rounded-bl-lg bg-gradient-to-r ${phase.color}`}>
                  {phase.phase}
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-br ${phase.color} text-white shadow-lg`}>
                  <Icon className="w-8 h-8" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold font-heading mb-6">{phase.title}</h3>

                {/* Items */}
                <ul className="space-y-3 mb-8">
                  {phase.items.map((item, idx) => (
                    <li key={idx} className="text-sm leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={phase.link}
                  className={`block w-full text-center px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 bg-gradient-to-r ${phase.color} text-white shadow-lg hover:shadow-xl`}
                >
                  {phase.cta}
                </a>
              </Card>
            );
          })}
        </div>

        {/* Early Bird Offer */}
        <Card className="relative overflow-hidden p-8 md:p-12 mb-16 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border-2 border-amber-500">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500 opacity-10 rounded-full blur-3xl" />
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold font-heading mb-6 text-center">
              {t.earlyBird.title}
            </h3>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <ul className="space-y-4">
                  {t.earlyBird.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-foreground flex-shrink-0 mt-0.5" />
                      <span className="text-lg">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-center">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg font-bold text-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
                >
                  <Sparkles className="w-6 h-6" />
                  {t.earlyBird.cta}
                </a>
                <p className="text-sm text-muted-foreground mt-4 font-medium">
                  {t.earlyBird.note}
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Commitment */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold font-heading mb-12">{t.commitment.title}</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {t.commitment.items.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold font-heading mb-2">{item.title}</h4>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
