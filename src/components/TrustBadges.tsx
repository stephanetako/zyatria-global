




import React from 'react';
import { Shield, Lock, Award, CheckCircle2, Zap, Globe } from 'lucide-react';
import { Card } from './ui/card';
import { useLanguage } from '../lib/language-context';

const content: Record<'en' | 'fr', any> = {
  en: {
    title: 'Your Success, ',
    titleHighlight: 'Our Priority',
    moneyBackTitle: 'Satisfaction or Money-Back Guarantee',
    moneyBackDesc: '30 days to try risk-free. Not satisfied? Full refund.',
    badges: [
      {
        icon: Shield,
        title: 'GDPR Compliant',
        description: 'Enterprise-grade security'
      },
      {
        icon: Lock,
        title: 'Data Encryption',
        description: 'Bank-level protection'
      },
      {
        icon: Award,
        title: '30-Day Guarantee',
        description: 'Risk-free trial'
      },
      {
        icon: CheckCircle2,
        title: 'ISO Certified',
        description: 'International standards'
      },
      {
        icon: Zap,
        title: '99.9% Uptime',
        description: 'Always available'
      },
      {
        icon: Globe,
        title: 'Global Support',
        description: '24/7 multilingual'
      }
    ]
  },
  fr: {
    title: 'Votre Succès, ',
    titleHighlight: 'Notre Priorité',
    moneyBackTitle: 'Garantie Satisfait ou Remboursé',
    moneyBackDesc: '30 jours pour essayer sans risque. Pas satisfait ? Remboursement intégral.',
    badges: [
      {
        icon: Shield,
        title: 'Conforme RGPD',
        description: 'Sécurité entreprise'
      },
      {
        icon: Lock,
        title: 'Chiffrement Data',
        description: 'Protection bancaire'
      },
      {
        icon: Award,
        title: 'Garantie 30 Jours',
        description: 'Essai sans risque'
      },
      {
        icon: CheckCircle2,
        title: 'Certifié ISO',
        description: 'Normes internationales'
      },
      {
        icon: Zap,
        title: '99.9% Disponibilité',
        description: 'Toujours actif'
      },
      {
        icon: Globe,
        title: 'Support Global',
        description: '24/7 multilingue'
      }
    ]
  },
};

const TrustBadges: React.FC = () => {
  const { language } = useLanguage();
  const t = content[language as 'en' | 'fr'];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50/30 dark:from-zinc-950 dark:to-blue-950/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading">
            {t.title}
            <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">{t.titleHighlight}</span>
          </h2>
        </div>

        {/* Badges Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {t.badges.map((badge: any, index: number) => {
            const Icon = badge.icon;
            const colors = [
              'bg-gradient-primary',
              'bg-gradient-accent', 
              'bg-gradient-warm',
              'bg-gradient-cool',
              'bg-gradient-sunset',
              'bg-gradient-ocean'
            ];
            const glows = [
              'glow-primary',
              'glow-purple',
              'glow-orange',
              'glow-cyan',
              'glow-pink',
              'glow-cyan'
            ];
            return (
              <Card 
                key={index}
                className={`p-6 text-center hover:shadow-xl hover:shadow-blue-600/10 hover:scale-105 transition-all duration-300 border-2 hover:border-blue-500/30 group hover:${glows[index]}`}
              >
                <div className={`w-12 h-12 mx-auto mb-4 ${colors[index]} rounded-full flex items-center justify-center shadow-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-sm mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {badge.title}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {badge.description}
                </p>
              </Card>
            );
          })}
        </div>

        {/* Money-Back Guarantee Banner */}
        <div className="mt-12 max-w-3xl mx-auto">
          <Card className="p-6 bg-gradient-to-r from-blue-600 via-violet-600 to-blue-700 text-white border-0 shadow-xl shadow-blue-600/30">
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Award className="w-8 h-8 flex-shrink-0" />
              <div className="text-center sm:text-left">
                <h3 className="font-bold text-xl mb-1 text-white">
                  {t.moneyBackTitle}
                </h3>
                <p className="text-white text-base">
                  {t.moneyBackDesc}
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;










