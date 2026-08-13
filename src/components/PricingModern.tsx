import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Check, Sparkles, Zap, Crown, Gift } from 'lucide-react';

interface PricingPlan {
  id: string;
  name: string;
  icon: React.ReactNode;
  price: string;
  priceCAD: string;
  priceEUR: string;
  savings?: string;
  description: string;
  features: string[];
  cta: string;
  ctaLink: string;
  recommended?: boolean;
  badge?: string;
  variant?: 'default' | 'primary' | 'premium' | 'free';
}

const plans: PricingPlan[] = [
  {
    id: 'free-trial',
    name: 'Essai Gratuit',
    icon: <Gift className="w-6 h-6" />,
    price: 'Gratuit',
    priceCAD: '0',
    priceEUR: '0',
    description: 'Testez sans risque pendant 7 jours',
    features: [
      '1 Bot IA (Support Client 24/7)',
      '100 interactions/mois',
      'Accès à toutes les fonctionnalités',
      'Pas de carte bancaire requise'
    ],
    cta: "Commencer l'Essai Gratuit",
    ctaLink: '#contact',
    variant: 'free'
  },
  {
    id: 'starter',
    name: 'Starter',
    icon: <Zap className="w-6 h-6" />,
    price: '68',
    priceCAD: '68',
    priceEUR: '50',
    savings: 'Économisez 29 $ avec l\'offre pré-lancement',
    description: 'Parfait pour démarrer',
    features: [
      '1 Bot IA spécialisé',
      'Déploiement en 7-15 jours',
      'Support email (48h)',
      'Jusqu\'à 1 000 interactions/mois'
    ],
    cta: 'Démarrer Plan Mensuel',
    ctaLink: '#contact',
    variant: 'default'
  },
  {
    id: 'professional',
    name: 'Professional',
    icon: <Sparkles className="w-6 h-6" />,
    price: '208',
    priceCAD: '208',
    priceEUR: '150',
    savings: 'Économisez 89 $ avec l\'offre pré-lancement',
    description: 'Le plus populaire',
    features: [
      '3 Bots IA spécialisés',
      'Déploiement en 7-15 jours',
      'Automatisation avancée',
      'Intégrations CRM',
      'Support prioritaire (24h)',
      'Jusqu\'à 5 000 interactions/mois',
      'Rapports avancés'
    ],
    cta: 'Démarrer Plan Mensuel',
    ctaLink: '#contact',
    recommended: true,
    badge: 'Recommandé',
    variant: 'primary'
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    icon: <Crown className="w-6 h-6" />,
    price: '698',
    priceCAD: '698',
    priceEUR: '500',
    savings: 'Économisez 299 $ avec l\'offre pré-lancement',
    description: 'Solution complète',
    features: [
      '7 Bots IA - Suite complète',
      'Déploiement personnalisé',
      'Automatisation complète',
      'Gestionnaire dédié',
      'Support 24/7',
      'Interactions illimitées',
      'Formation personnalisée',
      'SLA 99.9%'
    ],
    cta: 'Contacter les Ventes',
    ctaLink: '#contact',
    variant: 'premium'
  }
];

export default function PricingModern() {
  const [currency, setCurrency] = useState<'CAD' | 'EUR'>('CAD');

  const getVariantStyles = (variant?: string, recommended?: boolean) => {
    if (recommended) {
      return {
        card: 'border-2 border-blue-500 shadow-xl shadow-blue-500/20 relative',
        button: 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg'
      };
    }

    switch (variant) {
      case 'free':
        return {
          card: 'border border-gray-200',
          button: 'bg-green-500 hover:bg-green-600 text-white'
        };
      case 'premium':
        return {
          card: 'border border-gray-200',
          button: 'bg-gray-900 hover:bg-gray-800 text-white'
        };
      default:
        return {
          card: 'border border-gray-200',
          button: 'bg-blue-500 hover:bg-blue-600 text-white'
        };
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            💰 Tarification Transparente
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Choisissez le plan qui correspond à vos besoins. <strong>Sans frais cachés.</strong>
          </p>

          {/* Currency Toggle */}
          <div className="flex items-center justify-center gap-3">
            <button
              onClick={() => setCurrency('CAD')}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                currency === 'CAD'
                  ? 'bg-blue-500 text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              CAD ($)
            </button>
            <button
              onClick={() => setCurrency('EUR')}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                currency === 'EUR'
                  ? 'bg-blue-500 text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              EUR (€)
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {plans.map((plan) => {
            const styles = getVariantStyles(plan.variant, plan.recommended);
            const displayPrice = currency === 'CAD' ? plan.priceCAD : plan.priceEUR;
            const currencySymbol = currency === 'CAD' ? '$' : '€';

            return (
              <Card key={plan.id} className={`${styles.card} flex flex-col h-full`}>
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-blue-500 text-white px-4 py-1 text-sm font-bold shadow-lg">
                      ⭐ {plan.badge}
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  <div className="flex items-center justify-center mb-3 text-blue-500">
                    {plan.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {plan.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-grow">
                  {/* Price */}
                  <div className="text-center mb-6">
                    {plan.id === 'free-trial' ? (
                      <p className="text-3xl font-bold text-green-500 mb-2">
                        {plan.price}
                      </p>
                    ) : (
                      <>
                        <p className="text-3xl md:text-4xl font-bold text-blue-500 mb-2">
                          {displayPrice} {currencySymbol} <span className="text-lg text-gray-600">/mois</span>
                        </p>
                        {plan.savings && (
                          <p className="text-sm text-gray-500">
                            {currency === 'CAD' ? `~${plan.priceEUR}€` : `~${plan.priceCAD}$ CAD`} | {plan.savings}
                          </p>
                        )}
                      </>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="pt-6">
                  <Button
                    asChild
                    className={`w-full ${styles.button} font-semibold py-6 text-base`}
                  >
                    <a href={plan.ctaLink}>{plan.cta}</a>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Besoin d'un plan personnalisé ? Contactez-nous pour une solution sur mesure.
          </p>
          <Button asChild variant="outline" size="lg">
            <a href="#contact">Parler à un Expert</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
