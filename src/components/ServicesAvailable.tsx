import React from 'react';
import { CheckCircle2, Calendar, FileText, GraduationCap, Target, TrendingUp, Users } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { useLanguage } from '../lib/language-context';

const translations = {
  fr: {
    badge: 'Disponible Immédiatement',
    title: 'Services Disponibles Dès Aujourd\'hui',
    subtitle: 'Commencez votre transformation IA maintenant avec nos services de consultation professionnels',
    services: [
      {
        icon: Target,
        title: 'Audit Stratégique IA',
        price: '497$',
        duration: '2-3 heures',
        description: 'Analyse complète de vos processus et identification des opportunités d\'automatisation',
        features: [
          'Analyse de vos processus actuels',
          'Identification des opportunités IA',
          'ROI estimé pour chaque solution',
          'Roadmap d\'implémentation détaillée',
          'Rapport complet (20-30 pages)'
        ],
        color: 'from-blue-500 to-indigo-500',
        cta: 'Réserver un Audit'
      },
      {
        icon: Users,
        title: 'Consultation Stratégique',
        price: '297$',
        duration: '1 heure',
        description: 'Session personnalisée pour définir votre stratégie d\'automatisation IA',
        features: [
          'Analyse de vos besoins spécifiques',
          'Recommandations personnalisées',
          'Plan d\'action prioritaire',
          'Estimation budgétaire',
          'Suivi par email (7 jours)'
        ],
        color: 'from-purple-500 to-pink-500',
        cta: 'Réserver une Consultation'
      },
      {
        icon: GraduationCap,
        title: 'Formation IA pour Équipes',
        price: '997$',
        duration: 'Demi-journée',
        description: 'Formation pratique pour votre équipe sur l\'utilisation de l\'IA dans votre secteur',
        features: [
          'Formation sur mesure (4 heures)',
          'Cas pratiques de votre industrie',
          'Exercices hands-on',
          'Documentation complète',
          'Support post-formation (30 jours)'
        ],
        color: 'from-primary to-primary/80',
        cta: 'Réserver une Formation'
      }
    ],
    benefits: {
      title: 'Pourquoi Commencer par une Consultation ?',
      items: [
        {
          icon: TrendingUp,
          title: 'ROI Immédiat',
          description: 'Identifiez les gains rapides et les économies potentielles dès la première session'
        },
        {
          icon: FileText,
          title: 'Plan Clair',
          description: 'Recevez une roadmap détaillée adaptée à votre entreprise et votre budget'
        },
        {
          icon: CheckCircle2,
          title: 'Sans Engagement',
          description: 'Aucune obligation d\'achat. Décidez après avoir vu le potentiel pour votre entreprise'
        }
      ]
    },
    guarantee: {
      title: '💯 Garantie Satisfait ou Remboursé',
      description: 'Si vous n\'êtes pas satisfait de votre consultation, nous vous remboursons intégralement. Sans questions.'
    }
  },
  en: {
    badge: 'Available Immediately',
    title: 'Services Available Today',
    subtitle: 'Start your AI transformation now with our professional consulting services',
    services: [
      {
        icon: Target,
        title: 'Strategic AI Audit',
        price: '$497',
        duration: '2-3 hours',
        description: 'Complete analysis of your processes and identification of automation opportunities',
        features: [
          'Analysis of your current processes',
          'AI opportunity identification',
          'Estimated ROI for each solution',
          'Detailed implementation roadmap',
          'Complete report (20-30 pages)'
        ],
        color: 'from-blue-500 to-indigo-500',
        cta: 'Book an Audit'
      },
      {
        icon: Users,
        title: 'Strategic Consultation',
        price: '$297',
        duration: '1 hour',
        description: 'Personalized session to define your AI automation strategy',
        features: [
          'Analysis of your specific needs',
          'Personalized recommendations',
          'Priority action plan',
          'Budget estimation',
          'Email follow-up (7 days)'
        ],
        color: 'from-purple-500 to-pink-500',
        cta: 'Book a Consultation'
      },
      {
        icon: GraduationCap,
        title: 'AI Training for Teams',
        price: '$997',
        duration: 'Half-day',
        description: 'Practical training for your team on using AI in your industry',
        features: [
          'Custom training (4 hours)',
          'Industry-specific case studies',
          'Hands-on exercises',
          'Complete documentation',
          'Post-training support (30 days)'
        ],
        color: 'from-primary to-primary/80',
        cta: 'Book Training'
      }
    ],
    benefits: {
      title: 'Why Start with a Consultation?',
      items: [
        {
          icon: TrendingUp,
          title: 'Immediate ROI',
          description: 'Identify quick wins and potential savings from the first session'
        },
        {
          icon: FileText,
          title: 'Clear Plan',
          description: 'Receive a detailed roadmap tailored to your business and budget'
        },
        {
          icon: CheckCircle2,
          title: 'No Commitment',
          description: 'No purchase obligation. Decide after seeing the potential for your business'
        }
      ]
    },
    guarantee: {
      title: '💯 Satisfaction Guaranteed',
      description: 'If you\'re not satisfied with your consultation, we\'ll refund you in full. No questions asked.'
    }
  }
};

const ServicesAvailable: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="py-24 bg-gradient-to-b from-white via-secondary/30 to-white dark:from-zinc-950 dark:via-muted/10 dark:to-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted border border-border rounded-full mb-4">
            <CheckCircle2 className="w-4 h-4 text-foreground" />
            <span className="text-sm font-medium text-foreground">{t.badge}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            {t.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {t.services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="relative overflow-hidden p-8 hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary"
              >
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-br ${service.color} text-white shadow-lg`}>
                  <Icon className="w-8 h-8" />
                </div>

                {/* Title & Price */}
                <div className="mb-4">
                  <h3 className="text-2xl font-bold font-heading mb-2">{service.title}</h3>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-3xl font-bold text-primary">{service.price}</span>
                    <span className="text-sm text-muted-foreground">• {service.duration}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6">{service.description}</p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-foreground flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contact"
                  className={`block w-full text-center px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 bg-gradient-to-r ${service.color} text-white shadow-lg hover:shadow-xl`}
                >
                  {service.cta}
                </a>
              </Card>
            );
          })}
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold font-heading text-center mb-12">
            {t.benefits.title}
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {t.benefits.items.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold font-heading mb-2">{benefit.title}</h4>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Guarantee */}
        <Card className="bg-gradient-to-br from-secondary to-muted dark:from-muted dark:to-muted border-2 border-border p-8 text-center">
          <h3 className="text-2xl font-bold font-heading mb-3">{t.guarantee.title}</h3>
          <p className="text-lg text-muted-foreground">{t.guarantee.description}</p>
        </Card>
      </div>
    </section>
  );
};

export default ServicesAvailable;
