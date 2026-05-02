


import React, { useState } from 'react';
import { Check, ArrowRight, Sparkles, Zap, Rocket, DollarSign, Gift, CreditCard, Calendar } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { stripeLinks, productDetails } from '../config/stripe-links';
import { cn } from '../lib/utils';
import { baseUrl } from '../lib/base-url';

interface PricingProps {
  lang?: 'en' | 'fr' | 'es' | 'pt';
}

type PlanKey = 'starter' | 'professional' | 'enterprise';
type BillingType = 'oneTime' | 'monthly';

type TranslationKey = 'en' | 'fr' | 'es' | 'pt';

const translations: Record<TranslationKey, any> = {
  en: {
    badge: "Transparent Pricing",
    title: "Choose Your AI Solution",
    subtitle: "Flexible pricing. No hidden fees. Choose one-time or monthly.",
    billingToggle: {
      oneTime: "One-time Payment",
      monthly: "Monthly Subscription"
    },
    cta: {
      oneTime: "Pay Once & Deploy",
      monthly: "Start Monthly Plan",
      enterprise: "Contact Sales"
    },
    services: {
      title: "Professional Services",
      subtitle: "Expert consulting to maximize your AI ROI"
    },
    note: "All prices in Canadian Dollars (CAD). 30-day money-back guarantee.",
    paymentSecure: "🔒 Secure payments powered by Stripe",
  },
  fr: {
    badge: "Tarification Transparente",
    title: "Choisissez Votre Solution IA",
    subtitle: "Tarification flexible. Sans frais cachés. Choisissez paiement unique ou mensuel.",
    billingToggle: {
      oneTime: "Paiement Unique",
      monthly: "Abonnement Mensuel"
    },
    cta: {
      oneTime: "Payer et Déployer",
      monthly: "Démarrer Plan Mensuel",
      enterprise: "Contacter les Ventes"
    },
    services: {
      title: "Services Professionnels",
      subtitle: "Conseil d'expert pour maximiser votre ROI IA"
    },
    note: "Tous les prix en dollars canadiens (CAD). Garantie satisfait ou remboursé 30 jours.",
    paymentSecure: "🔒 Paiements sécurisés par Stripe",
  }
};

const Pricing: React.FC<PricingProps> = ({ lang = 'en' }) => {
  const t = translations[lang];
  const [billingType, setBillingType] = useState<BillingType>('monthly');

  const plans: Array<{
    key: PlanKey;
    icon: any;
    popular?: boolean;
    features: string[];
  }> = [
    {
      key: 'starter',
      icon: Sparkles,
      features: [
        "1 Bot IA spécialisé",
        "Déploiement en 7-15 jours",
        "Support email (48h)",
        "Tableau de bord analytique",
        "Jusqu'à 1 000 interactions/mois"
      ]
    },
    {
      key: 'professional',
      icon: Zap,
      popular: true,
      features: [
        "3 Bots IA spécialisés",
        "Déploiement en 7-15 jours",
        "Automatisation avancée",
        "Intégrations CRM",
        "Support prioritaire (24h)",
        "Jusqu'à 5 000 interactions/mois",
        "Rapports avancés"
      ]
    },
    {
      key: 'enterprise',
      icon: Rocket,
      features: [
        "7 Bots IA - Suite complète",
        "Déploiement personnalisé",
        "Automatisation complète",
        "Gestionnaire dédié",
        "Support 24/7",
        "Interactions illimitées",
        "Formation personnalisée",
        "SLA 99.9%"
      ]
    }
  ];

  const handlePurchase = (planKey: PlanKey, type: BillingType) => {
    const link = stripeLinks[planKey][type];
    if (link) {
      window.location.href = link;
    }
  };

  const handleServicePurchase = (service: 'audit' | 'consultation') => {
    window.location.href = stripeLinks.services[service];
  };

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-white via-amber-50/30 to-white dark:from-zinc-950 dark:via-amber-950/10 dark:to-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-200 rounded-full mb-4">
            <DollarSign className="w-4 h-4 text-amber-600" />
            <span className="text-sm font-medium text-amber-600">{t.badge}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            {t.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-muted p-1 rounded-lg shadow-sm">
            <button
              onClick={() => setBillingType('oneTime')}
              className={cn(
                'px-6 py-3 rounded-md text-sm font-medium transition-all duration-200',
                billingType === 'oneTime'
                  ? 'bg-white dark:bg-zinc-800 text-foreground shadow-md'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              <CreditCard className="w-4 h-4 inline-block mr-2" />
              {t.billingToggle.oneTime}
            </button>
            <button
              onClick={() => setBillingType('monthly')}
              className={cn(
                'px-6 py-3 rounded-md text-sm font-medium transition-all duration-200',
                billingType === 'monthly'
                  ? 'bg-white dark:bg-zinc-800 text-foreground shadow-md'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              <Calendar className="w-4 h-4 inline-block mr-2" />
              {t.billingToggle.monthly}
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan) => {
            const Icon = plan.icon;
            const details = productDetails[plan.key];
            const pricing = details[billingType];
            
            // Safety check
            if (!pricing) {
              console.error(`No pricing found for ${plan.key} with billing type ${billingType}`);
              return null;
            }

            return (
              <Card
                key={plan.key}
                className={cn(
                  'relative overflow-hidden transition-all duration-300 hover:shadow-2xl group',
                  plan.popular
                    ? 'border-amber-500 border-2 shadow-xl shadow-amber-500/20 scale-105 md:scale-110'
                    : 'border-border hover:border-amber-400/50'
                )}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-1.5 text-xs font-bold rounded-bl-lg shadow-lg">
                    Recommandé
                  </div>
                )}

                <div className="p-8">
                  {/* Icon */}
                  <div className={cn(
                    "w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110",
                    plan.popular 
                      ? 'bg-gradient-to-br from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-500/30' 
                      : 'bg-amber-50 text-amber-600'
                  )}>
                    <Icon className="w-7 h-7" />
                  </div>

                  {/* Plan Name */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold font-heading mb-1">{details.name}</h3>
                    <p className="text-sm text-muted-foreground">{details.subtitle}</p>
                  </div>

                  {/* Price */}
                  <div className="mb-6 pb-6 border-b border-border">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-5xl font-bold font-heading text-foreground">
                        {pricing.price.toLocaleString('fr-CA')} $
                      </span>
                      {billingType === 'monthly' && (
                        <span className="text-muted-foreground text-lg">/mois</span>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground font-medium">
                      {pricing.label}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-6 font-medium">
                    {details.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3.5 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="mt-0.5">
                          <Check className="w-5 h-5 text-amber-500" />
                        </div>
                        <span className="text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button
                    onClick={() => handlePurchase(plan.key, billingType)}
                    className={cn(
                      'w-full font-button text-base h-12',
                      plan.popular
                        ? 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-lg shadow-amber-500/30'
                        : 'bg-amber-500 hover:bg-amber-600 text-white'
                    )}
                  >
                    {billingType === 'oneTime' ? t.cta.oneTime : t.cta.monthly}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Professional Services */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold font-heading mb-3">
              {t.services.title}
            </h3>
            <p className="text-muted-foreground text-lg">
              {t.services.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Audit IA */}
            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-amber-200 hover:border-amber-400">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold font-heading mb-1">
                    {productDetails.audit.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {productDetails.audit.subtitle}
                  </p>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground mb-6">
                {productDetails.audit.description}
              </p>

              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-bold font-heading">
                  {productDetails.audit.price.toLocaleString('fr-CA')} $
                </span>
                <span className="text-muted-foreground">CAD</span>
              </div>

              <Button
                onClick={() => handleServicePurchase('audit')}
                className="w-full bg-amber-500 hover:bg-amber-600 text-white"
              >
                Commander l'Audit
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Card>

            {/* Consultation */}
            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-amber-200 hover:border-amber-400">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Rocket className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold font-heading mb-1">
                    {productDetails.consultation.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {productDetails.consultation.subtitle}
                  </p>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground mb-6">
                {productDetails.consultation.description}
              </p>

              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-bold font-heading">
                  {productDetails.consultation.price.toLocaleString('fr-CA')} $
                </span>
                <span className="text-muted-foreground">CAD</span>
              </div>

              <Button
                onClick={() => handleServicePurchase('consultation')}
                className="w-full bg-amber-500 hover:bg-amber-600 text-white"
              >
                Réserver une Consultation
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Card>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-4">
            {t.paymentSecure}
          </p>
          <p className="text-xs text-muted-foreground max-w-2xl mx-auto">
            {t.note}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;



