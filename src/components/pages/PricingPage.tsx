import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '../ui/button';
import { baseUrl } from '../../lib/base-url';

const translations = {
  en: {
    hero: {
      title: "Our Plans",
      subtitle: "Solutions tailored to every business, available in EUR, USD, and CAD."
    },
    currency: {
      label: "Currency:"
    },
    plans: [
      {
        name: "Starter",
        price: { eur: 49, usd: 52, cad: 69 },
        period: "/month",
        features: [
          "1 AI micro-agent",
          "24/7 responses",
          "Email support"
        ],
        cta: "Get Started",
        popular: false
      },
      {
        name: "Business",
        price: { eur: 149, usd: 159, cad: 199 },
        period: "/month",
        features: [
          "3 AI micro-agents",
          "Advanced automation",
          "CRM integrations",
          "Priority support"
        ],
        cta: "Get Started",
        popular: true
      },
      {
        name: "Enterprise",
        price: "Custom",
        period: "",
        features: [
          "Personalized AI agents",
          "Complete automation",
          "Dedicated support"
        ],
        cta: "Contact Us",
        popular: false
      }
    ],
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          q: "How does billing work?",
          a: "Simple monthly billing. You can cancel anytime with no penalties."
        },
        {
          q: "Can I change plans?",
          a: "Yes, you can upgrade or downgrade your plan at any time."
        },
        {
          q: "How long to deploy an AI agent?",
          a: "Most agents are deployed in 7-14 days, depending on complexity."
        }
      ]
    },
    cta: {
      title: "Need Help Choosing?",
      button: "Request a Demo"
    }
  },
  fr: {
    hero: {
      title: "Nos forfaits",
      subtitle: "Des solutions adaptées à chaque entreprise, disponibles en EUR, USD et CAD."
    },
    currency: {
      label: "Devise :"
    },
    plans: [
      {
        name: "Starter",
        price: { eur: 49, usd: 52, cad: 69 },
        period: "/mois",
        features: [
          "1 micro-agent IA",
          "Réponses 24/7",
          "Support email"
        ],
        cta: "Commencer",
        popular: false
      },
      {
        name: "Business",
        price: { eur: 149, usd: 159, cad: 199 },
        period: "/mois",
        features: [
          "3 micro-agents IA",
          "Automatisations avancées",
          "Intégrations CRM",
          "Support prioritaire"
        ],
        cta: "Commencer",
        popular: true
      },
      {
        name: "Enterprise",
        price: "Sur mesure",
        period: "",
        features: [
          "Agents IA personnalisés",
          "Automatisation complète",
          "Support dédié"
        ],
        cta: "Nous contacter",
        popular: false
      }
    ],
    faq: {
      title: "Questions fréquentes",
      items: [
        {
          q: "Comment fonctionne la facturation ?",
          a: "Facturation mensuelle simple. Vous pouvez annuler à tout moment sans pénalités."
        },
        {
          q: "Puis-je changer de plan ?",
          a: "Oui, vous pouvez mettre à niveau ou rétrograder votre plan à tout moment."
        },
        {
          q: "Combien de temps pour déployer un agent IA ?",
          a: "La plupart des agents sont déployés en 7-14 jours, selon la complexité."
        }
      ]
    },
    cta: {
      title: "Besoin d'aide pour choisir ?",
      button: "Request a demo"
    }
  },
  es: {
    hero: {
      title: "Nuestros planes",
      subtitle: "Soluciones adaptadas a cada negocio, disponibles en EUR, USD y CAD."
    },
    currency: {
      label: "Moneda:"
    },
    plans: [
      {
        name: "Starter",
        price: { eur: 49, usd: 52, cad: 69 },
        period: "/mes",
        features: [
          "1 micro-agente IA",
          "Respuestas 24/7",
          "Soporte por email"
        ],
        cta: "Comenzar",
        popular: false
      },
      {
        name: "Business",
        price: { eur: 149, usd: 159, cad: 199 },
        period: "/mes",
        features: [
          "3 micro-agentes IA",
          "Automatizaciones avanzadas",
          "Integraciones CRM",
          "Soporte prioritario"
        ],
        cta: "Comenzar",
        popular: true
      },
      {
        name: "Enterprise",
        price: "Personalizado",
        period: "",
        features: [
          "Agentes IA personalizados",
          "Automatización completa",
          "Soporte dedicado"
        ],
        cta: "Contactarnos",
        popular: false
      }
    ],
    faq: {
      title: "Preguntas frecuentes",
      items: [
        {
          q: "¿Cómo funciona la facturación?",
          a: "Facturación mensual simple. Puede cancelar en cualquier momento sin penalizaciones."
        },
        {
          q: "¿Puedo cambiar de plan?",
          a: "Sí, puede actualizar o degradar su plan en cualquier momento."
        },
        {
          q: "¿Cuánto tiempo para implementar un agente IA?",
          a: "La mayoría de los agentes se implementan en 7-14 días, según la complejidad."
        }
      ]
    },
    cta: {
      title: "¿Necesita ayuda para elegir?",
      button: "Request a demo"
    }
  },
  pt: {
    hero: {
      title: "Nossos planos",
      subtitle: "Soluções adaptadas a cada negócio, disponíveis em EUR, USD e CAD."
    },
    currency: {
      label: "Moeda:"
    },
    plans: [
      {
        name: "Starter",
        price: { eur: 49, usd: 52, cad: 69 },
        period: "/mês",
        features: [
          "1 micro-agente IA",
          "Respostas 24/7",
          "Suporte por email"
        ],
        cta: "Começar",
        popular: false
      },
      {
        name: "Business",
        price: { eur: 149, usd: 159, cad: 199 },
        period: "/mês",
        features: [
          "3 micro-agentes IA",
          "Automações avançadas",
          "Integrações CRM",
          "Suporte prioritário"
        ],
        cta: "Começar",
        popular: true
      },
      {
        name: "Enterprise",
        price: "Personalizado",
        period: "",
        features: [
          "Agentes IA personalizados",
          "Automação completa",
          "Suporte dedicado"
        ],
        cta: "Fale conosco",
        popular: false
      }
    ],
    faq: {
      title: "Perguntas frequentes",
      items: [
        {
          q: "Como funciona a cobrança?",
          a: "Cobrança mensal simples. Você pode cancelar a qualquer momento sem penalidades."
        },
        {
          q: "Posso mudar de plano?",
          a: "Sim, você pode fazer upgrade ou downgrade do seu plano a qualquer momento."
        },
        {
          q: "Quanto tempo para implementar um agente IA?",
          a: "A maioria dos agentes é implementada em 7-14 dias, dependendo da complexidade."
        }
      ]
    },
    cta: {
      title: "Precisa de ajuda para escolher?",
      button: "Request a demo"
    }
  }
};

export default function PricingPage() {
  const [language, setLanguage] = React.useState<'en' | 'fr' | 'es' | 'pt'>('en');
  const [currency, setCurrency] = React.useState<'eur' | 'usd' | 'cad'>('eur');
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);
  const t = translations[language];

  React.useEffect(() => {
    const savedLang = localStorage.getItem('language') as 'en' | 'fr' | 'es' | 'pt';
    if (savedLang) setLanguage(savedLang);

    const handleLanguageChange = (e: CustomEvent) => {
      setLanguage(e.detail);
    };

    window.addEventListener('languageChange', handleLanguageChange as EventListener);
    return () => window.removeEventListener('languageChange', handleLanguageChange as EventListener);
  }, []);

  const getCurrencySymbol = () => {
    switch (currency) {
      case 'eur': return '€';
      case 'usd': return '$';
      case 'cad': return 'CA$';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in font-heading">
            {t.hero.title}
          </h1>
          <p className="text-xl text-muted-foreground mb-8 animate-fade-in-up delay-200">
            {t.hero.subtitle}
          </p>

          {/* Currency Selector */}
          <div className="flex items-center justify-center gap-4 animate-fade-in-up delay-300">
            <span className="text-sm font-medium">{t.currency.label}</span>
            <div className="flex gap-2">
              {(['eur', 'usd', 'cad'] as const).map((curr) => (
                <button
                  key={curr}
                  onClick={() => setCurrency(curr)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    currency === curr
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted hover:bg-muted/80'
                  }`}
                >
                  {curr.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {t.plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-card border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 animate-fade-in-up relative ${
                  plan.popular ? 'border-primary shadow-lg scale-105' : 'border-border'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}

                <h3 className="text-2xl font-bold mb-4 font-heading">{plan.name}</h3>
                
                <div className="mb-6">
                  {typeof plan.price === 'object' ? (
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold font-heading">{getCurrencySymbol()}{plan.price[currency]}</span>
                      <span className="text-muted-foreground ml-2">{plan.period}</span>
                    </div>
                  ) : (
                    <div className="text-4xl font-bold font-heading">{plan.price}</div>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full font-button ${
                    plan.popular
                      ? 'bg-primary hover:bg-primary/90 text-primary-foreground'
                      : 'bg-secondary hover:bg-secondary/80'
                  }`}
                  onClick={() => window.location.href = `${baseUrl}/demo`}
                >
                  {plan.cta}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-heading">
            {t.faq.title}
          </h2>

          <div className="space-y-4">
            {t.faq.items.map((item, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left font-semibold hover:bg-muted/50 transition-colors"
                >
                  {item.q}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4 text-muted-foreground">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-background border border-primary/20 rounded-3xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
              {t.cta.title}
            </h2>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-button"
              onClick={() => window.location.href = `${baseUrl}/demo`}
            >
              {t.cta.button}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
