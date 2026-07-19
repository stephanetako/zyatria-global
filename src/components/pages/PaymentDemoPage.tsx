import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { CreditCard, Loader2, CheckCircle, XCircle, Sparkles } from 'lucide-react';
import { baseUrl } from '../../lib/base-url';

// Initialiser Stripe avec la clé publique
const stripePromise = loadStripe(import.meta.env.PUBLIC_STRIPE_PUBLISHABLE_KEY || '');

interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: string;
  priceId: string;
  mode: 'payment' | 'subscription';
  features: string[];
  popular?: boolean;
}

const PaymentDemoPage: React.FC = () => {
  const [loading, setLoading] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  // Plans de démonstration
  const plans: PricingPlan[] = [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Paiement unique pour démarrer',
      price: '99€',
      priceId: 'price_STARTER_ID', // À remplacer par ton vrai Price ID
      mode: 'payment',
      features: [
        '1 Agent IA',
        'Support email',
        'Déploiement en 7 jours',
        'Formation incluse'
      ]
    },
    {
      id: 'pro',
      name: 'Pro',
      description: 'Abonnement mensuel',
      price: '299€/mois',
      priceId: 'price_PRO_ID', // À remplacer par ton vrai Price ID
      mode: 'subscription',
      features: [
        '3 Agents IA',
        'Support prioritaire',
        'Déploiement en 5 jours',
        'Formation avancée',
        'Mises à jour incluses'
      ],
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'Abonnement annuel',
      price: '2999€/an',
      priceId: 'price_ENTERPRISE_ID', // À remplacer par ton vrai Price ID
      mode: 'subscription',
      features: [
        'Agents IA illimités',
        'Support 24/7',
        'Déploiement immédiat',
        'Formation personnalisée',
        'API complète',
        'Intégrations sur mesure'
      ]
    }
  ];

  const handleCheckout = async (plan: PricingPlan) => {
    console.log('🔵 [Stripe] Début du processus de paiement pour:', plan.name);
    setLoading(plan.id);
    setError(null);
    setSuccess(null);

    try {
      // Charger Stripe
      const stripe = await stripePromise;
      if (!stripe) {
        throw new Error('Stripe n\'a pas pu être chargé');
      }

      console.log('🔄 [Stripe] Création de la session checkout...');

      // Créer la session de checkout
      const response = await fetch(`${baseUrl}/api/create-checkout-session`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          priceId: plan.priceId,
          mode: plan.mode,
          successUrl: `${window.location.origin}${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
          cancelUrl: `${window.location.origin}${baseUrl}/payment-demo`,
        }),
      });

      const data = await response.json();
      console.log('📦 [Stripe] Réponse reçue:', data);

      if (!response.ok) {
        throw new Error(data.error || 'Erreur lors de la création de la session');
      }

      if (!data.sessionId) {
        throw new Error('Session ID manquant dans la réponse');
      }

      console.log('✅ [Stripe] Session créée, redirection vers Stripe...');

      // Rediriger vers Stripe Checkout
      const { error: stripeError } = await stripe.redirectToCheckout({
        sessionId: data.sessionId,
      });

      if (stripeError) {
        throw stripeError;
      }

    } catch (err: any) {
      console.error('❌ [Stripe] Erreur:', err);
      setError(err.message || 'Une erreur est survenue');
      setLoading(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Header */}
      <div className="container-responsive section-spacing-sm">
        <div className="text-center max-w-3xl mx-auto">
          <Badge className="mb-4" variant="secondary">
            <Sparkles className="w-3 h-3 mr-1" />
            Démonstration Stripe
          </Badge>
          <h1 className="text-responsive-3xl font-heading font-bold mb-4">
            Testez Notre Intégration Stripe
          </h1>
          <p className="text-responsive-lg text-muted-foreground">
            Choisissez un plan et testez le processus de paiement complet avec Stripe Checkout
          </p>
        </div>
      </div>

      {/* Messages d'erreur/succès */}
      {error && (
        <div className="container-responsive mb-8">
          <Card className="border-destructive bg-destructive/10">
            <CardContent className="flex items-center gap-3 p-4">
              <XCircle className="w-5 h-5 text-destructive flex-shrink-0" />
              <p className="text-sm text-destructive">{error}</p>
            </CardContent>
          </Card>
        </div>
      )}

      {success && (
        <div className="container-responsive mb-8">
          <Card className="border-border bg-muted dark:bg-muted">
            <CardContent className="flex items-center gap-3 p-4">
              <CheckCircle className="w-5 h-5 text-foreground dark:text-foreground flex-shrink-0" />
              <p className="text-sm text-foreground dark:text-foreground">{success}</p>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Plans de tarification */}
      <div className="container-responsive section-spacing">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <Card 
              key={plan.id}
              className={`relative ${plan.popular ? 'border-primary shadow-lg' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground">
                    Plus Populaire
                  </Badge>
                </div>
              )}

              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={() => handleCheckout(plan)}
                  disabled={loading !== null}
                  className="w-full"
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {loading === plan.id ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Chargement...
                    </>
                  ) : (
                    <>
                      <CreditCard className="w-4 h-4 mr-2" />
                      {plan.mode === 'payment' ? 'Acheter' : 'S\'abonner'}
                    </>
                  )}
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  {plan.mode === 'payment' ? 'Paiement unique' : 'Facturation récurrente'}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Instructions */}
      <div className="container-responsive section-spacing-sm">
        <Card className="bg-muted/50">
          <CardHeader>
            <CardTitle className="text-xl">ℹ️ Mode Test</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-muted-foreground">
              Cette page est en mode test. Utilisez les cartes de test Stripe :
            </p>
            <div className="bg-background p-4 rounded-lg space-y-2">
              <p className="text-sm font-mono">
                <strong>Carte de test :</strong> 4242 4242 4242 4242
              </p>
              <p className="text-sm font-mono">
                <strong>Date d'expiration :</strong> N'importe quelle date future
              </p>
              <p className="text-sm font-mono">
                <strong>CVC :</strong> N'importe quel code à 3 chiffres
              </p>
              <p className="text-sm font-mono">
                <strong>Code postal :</strong> N'importe quel code postal
              </p>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              💡 Astuce : Les Price IDs dans ce code sont des exemples. Remplacez-les par vos vrais Price IDs depuis votre dashboard Stripe.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Debug Panel (Development only) */}
      {import.meta.env.DEV && (
        <div className="container-responsive section-spacing-sm">
          <Card className="bg-slate-900 text-white">
            <CardHeader>
              <CardTitle className="text-sm font-mono">🔧 Debug Panel</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-xs font-mono">
                <strong>Stripe Publishable Key:</strong>{' '}
                {import.meta.env.PUBLIC_STRIPE_PUBLISHABLE_KEY ? '✅ Configurée' : '❌ Manquante'}
              </p>
              <p className="text-xs font-mono">
                <strong>Base URL:</strong> {baseUrl}
              </p>
              <p className="text-xs font-mono">
                <strong>API Endpoint:</strong> {baseUrl}/api/create-checkout-session
              </p>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default PaymentDemoPage;
