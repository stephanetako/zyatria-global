


import React from 'react';
import { Card } from './ui/card';
import { ArrowRight, Target, Zap, Building, Briefcase, Smartphone, Heart, GraduationCap, ShoppingCart } from 'lucide-react';
import { Button } from './ui/button';
import { useLanguage } from '../lib/language-context';

const content: Record<'en' | 'fr', any> = {
  en: {
    badge: 'Industry Solutions',
    title: 'Built For Your Industry, Not Generic Software',
    subtitle: 'Real solutions for real challenges in your sector',
    solutions: [
      {
        icon: ShoppingCart,
        title: 'E-commerce & Retail',
        subtitle: 'Turn Browsers Into Buyers',
        challenge: 'Losing sales to cart abandonment and slow customer service?',
        solution: 'Recover 30% of abandoned carts with instant follow-ups. Answer product questions 24/7. Automate order tracking and shipping notifications.',
        results: [
          '↑ 30% cart recovery rate',
          '↓ 80% response time',
          '↑ 42% customer satisfaction',
          '24/7 multilingual support'
        ]
      },
      {
        icon: Building,
        title: 'Real Estate',
        subtitle: 'Convert More Property Inquiries',
        challenge: 'Can\'t respond fast enough to property inquiries and losing deals?',
        solution: 'Instant responses to listing questions. Auto-schedule property visits. Qualify serious buyers before your first call. Never miss a hot lead again.',
        results: [
          '↑ 65% lead response speed',
          '↑ 38% qualified appointments',
          '↓ 50% time on admin work',
          'Track every property inquiry'
        ]
      },
      {
        icon: GraduationCap,
        title: 'Coaching & Consulting',
        subtitle: 'Scale Your Expertise Without Burnout',
        challenge: 'Trading time for money and can\'t scale your impact?',
        solution: 'Automate client onboarding. Send personalized follow-ups. Schedule sessions automatically. Focus on coaching, not admin work.',
        results: [
          '↑ 3x more clients without hiring',
          '↓ 70% admin time',
          '↑ 100% on-time payments',
          'Automated client journey'
        ]
      },
      {
        icon: Briefcase,
        title: 'Professional Services',
        subtitle: 'Win More Deals, Waste Less Time',
        challenge: 'Spending more time on proposals than delivering value?',
        solution: 'Auto-qualify leads. Generate proposals faster. Automate follow-ups and contract reminders. Close deals while you sleep.',
        results: [
          '↑ 45% proposal win rate',
          '↓ 60% time on proposals',
          '↑ 55% client retention',
          'Automated contract renewals'
        ]
      },
      {
        icon: Smartphone,
        title: 'SaaS & Tech',
        subtitle: 'Grow Users, Reduce Churn',
        challenge: 'Users signing up but not sticking around?',
        solution: 'Personalized onboarding sequences. Proactive churn prevention. Automated upsell campaigns. Support tickets resolved faster.',
        results: [
          '↓ 40% churn rate',
          '↑ 85% onboarding completion',
          '↑ 32% upgrade conversions',
          '24/7 first-line support'
        ]
      },
      {
        icon: Heart,
        title: 'Healthcare & Wellness',
        subtitle: 'Better Patient Care, Less Paperwork',
        challenge: 'Staff overwhelmed with booking and admin tasks?',
        solution: 'Automated appointment booking and reminders. Insurance verification. Follow-up care messages. HIPAA-compliant communication.',
        results: [
          '↓ 45% no-show rate',
          '↑ 60% booking efficiency',
          '↓ 70% admin workload',
          'HIPAA compliant automation'
        ]
      }
    ],
    cta: {
      title: 'Don\'t See Your Industry?',
      description: 'We customize solutions for any business. Let\'s talk about your specific challenges.',
      button: 'Schedule a Free Consultation'
    }
  },
  fr: {
    badge: 'Solutions Par Secteur',
    title: 'Conçu Pour Votre Industrie, Pas un Logiciel Générique',
    subtitle: 'Solutions réelles pour défis réels dans votre secteur',
    solutions: [
      {
        icon: ShoppingCart,
        title: 'E-commerce & Retail',
        subtitle: 'Transformez les Visiteurs en Acheteurs',
        challenge: 'Vous perdez des ventes à cause des paniers abandonnés et du service client lent ?',
        solution: 'Récupérez 30% des paniers abandonnés avec des relances instantanées. Répondez aux questions produits 24/7. Automatisez le suivi des commandes et les notifications d\'expédition.',
        results: [
          '↑ 30% taux de récupération panier',
          '↓ 80% temps de réponse',
          '↑ 42% satisfaction client',
          'Support multilingue 24/7'
        ]
      },
      {
        icon: Building,
        title: 'Immobilier',
        subtitle: 'Convertissez Plus de Demandes Immobilières',
        challenge: 'Impossible de répondre assez vite aux demandes et vous perdez des affaires ?',
        solution: 'Réponses instantanées aux questions sur les biens. Auto-planification des visites. Qualification des acheteurs sérieux avant votre premier appel. Ne ratez plus jamais un lead chaud.',
        results: [
          '↑ 65% vitesse de réponse aux leads',
          '↑ 38% rendez-vous qualifiés',
          '↓ 50% temps sur tâches admin',
          'Suivez chaque demande immobilière'
        ]
      },
      {
        icon: GraduationCap,
        title: 'Coaching & Consulting',
        subtitle: 'Développez Votre Expertise Sans Burn-out',
        challenge: 'Vous échangez temps contre argent et ne pouvez pas scaler votre impact ?',
        solution: 'Automatisez l\'onboarding clients. Envoyez des relances personnalisées. Planifiez les sessions automatiquement. Concentrez-vous sur le coaching, pas l\'admin.',
        results: [
          '↑ 3x plus de clients sans embaucher',
          '↓ 70% temps admin',
          '↑ 100% paiements à temps',
          'Parcours client automatisé'
        ]
      },
      {
        icon: Briefcase,
        title: 'Services Professionnels',
        subtitle: 'Gagnez Plus d\'Affaires, Perdez Moins de Temps',
        challenge: 'Vous passez plus de temps sur les propositions que sur la livraison de valeur ?',
        solution: 'Auto-qualification des leads. Génération de propositions plus rapide. Automatisation des relances et rappels de contrats. Concluez des affaires pendant que vous dormez.',
        results: [
          '↑ 45% taux de gain de propositions',
          '↓ 60% temps sur propositions',
          '↑ 55% rétention client',
          'Renouvellements de contrats automatisés'
        ]
      },
      {
        icon: Smartphone,
        title: 'SaaS & Tech',
        subtitle: 'Faites Croître les Utilisateurs, Réduisez le Churn',
        challenge: 'Les utilisateurs s\'inscrivent mais ne restent pas ?',
        solution: 'Séquences d\'onboarding personnalisées. Prévention proactive du churn. Campagnes d\'upsell automatisées. Tickets de support résolus plus vite.',
        results: [
          '↓ 40% taux de churn',
          '↑ 85% complétion onboarding',
          '↑ 32% conversions upgrade',
          'Support première ligne 24/7'
        ]
      },
      {
        icon: Heart,
        title: 'Santé & Bien-être',
        subtitle: 'Meilleurs Soins, Moins de Paperasse',
        challenge: 'Personnel submergé par les réservations et tâches admin ?',
        solution: 'Réservation et rappels de rendez-vous automatisés. Vérification d\'assurance. Messages de suivi de soins. Communication conforme HIPAA.',
        results: [
          '↓ 45% taux d\'absence',
          '↑ 60% efficacité de réservation',
          '↓ 70% charge admin',
          'Automatisation conforme HIPAA'
        ]
      }
    ],
    cta: {
      title: 'Vous Ne Voyez Pas Votre Secteur ?',
      description: 'Nous personnalisons des solutions pour toute entreprise. Parlons de vos défis spécifiques.',
      button: 'Planifier Une Consultation Gratuite'
    }
  },
};

const Solutions: React.FC = () => {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section id="solutions" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full mb-4">
            <span className="text-sm font-semibold text-blue-600">{t.badge}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            {t.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.description}
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.solutions.map((solution: any, index: number) => {
            const Icon = solution.icon;
            const solidColors = [
              'bg-blue-600',
              'bg-violet-600',
              'bg-cyan-600',
              'bg-blue-600',
              'bg-violet-600',
              'bg-cyan-600'
            ];
            const borderColors = [
              'border-blue-600',
              'border-violet-600',
              'border-cyan-600',
              'border-blue-600',
              'border-violet-600',
              'border-cyan-600'
            ];
            return (
              <Card key={index} className="group relative overflow-hidden hover:shadow-xl hover:shadow-blue-600/10 transition-all duration-300 border-2 hover:border-blue-400/40">
                <div className={`absolute top-0 left-0 right-0 h-1 ${solidColors[index % solidColors.length]}`}></div>
                
                <div className="p-6">
                  <div className={`w-14 h-14 ${solidColors[index % solidColors.length]} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition shadow-lg`}>
                    <Icon className="w-7 h-7 text-white" strokeWidth={2.5} />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 font-heading">{solution.title}</h3>
                  <p className="text-sm font-semibold text-blue-600 mb-3">{solution.subtitle}</p>
                  
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-2">{solution.challenge}</p>
                    <p className="text-sm text-zinc-700 dark:text-zinc-300">{solution.solution}</p>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {solution.results.map((result: string, fIndex: number) => (
                      <li key={fIndex} className="flex items-start gap-2 text-sm">
                        <div className={`w-1.5 h-1.5 ${solidColors[index % solidColors.length]} rounded-full mt-2 flex-shrink-0`}></div>
                        <span className="text-zinc-700 dark:text-zinc-300 font-medium">{result}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button variant="ghost" className="w-full group-hover:bg-blue-500/10 transition">
                    {t.cta.button}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Card className="p-8 md:p-12 bg-zinc-900 dark:bg-zinc-950 border-2 border-zinc-800 shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{t.cta.title}</h3>
            <p className="text-white text-lg mb-6 max-w-2xl mx-auto">{t.cta.description}</p>
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-6 text-lg shadow-lg shadow-blue-600/30"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              {t.cta.button}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Solutions;









