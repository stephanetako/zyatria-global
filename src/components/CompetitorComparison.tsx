import React from 'react';
import { Check, X, Zap } from 'lucide-react';
import { Button } from './ui/button';
import { baseUrl } from '../lib/base-url';
import { useLanguage } from '../lib/language-context';

const translations = {
  en: {
    badge: "Comparison",
    title: "Why Choose ZyatrIA?",
    titleHighlight: "Why Choose ZyatrIA?",
    subtitle: "See how we compare to other AI automation providers",
    us: "ZyatrIA Global",
    competitors: "Other Providers",
    getStarted: "Get Started Today"
  },
  fr: {
    badge: "Comparaison",
    title: "Pourquoi choisir ZyatrIA ?",
    titleHighlight: "Pourquoi choisir ZyatrIA ?",
    subtitle: "Voyez comment nous nous comparons aux autres fournisseurs d'automatisation IA",
    us: "ZyatrIA Global",
    competitors: "Autres fournisseurs",
    getStarted: "Commencer aujourd'hui"
  },
  es: {
    badge: "Comparación",
    title: "¿Por qué elegir ZyatrIA?",
    titleHighlight: "¿Por qué elegir ZyatrIA?",
    subtitle: "Vea cómo nos comparamos con otros proveedores de automatización IA",
    us: "ZyatrIA Global",
    competitors: "Otros proveedores",
    getStarted: "Comenzar hoy"
  },
  pt: {
    badge: "Comparação",
    title: "Por que escolher a ZyatrIA?",
    titleHighlight: "Por que escolher a ZyatrIA?",
    subtitle: "Veja como nos comparamos com outros provedores de automação IA",
    us: "ZyatrIA Global",
    competitors: "Outros provedores",
    getStarted: "Começar hoje"
  }
};

const features = [
  {
    en: "Multilingual Support (4 languages)",
    fr: "Support multilingue (4 langues)",
    es: "Soporte multilingüe (4 idiomas)",
    pt: "Suporte multilíngue (4 idiomas)",
    zyatria: true,
    competitors: false
  },
  {
    en: "Deployment in 7-15 days",
    fr: "Déploiement en 7-15 jours",
    es: "Implementación en 7-15 días",
    pt: "Implantação em 7-15 dias",
    zyatria: true,
    competitors: false,
    highlight: true
  },
  {
    en: "24/7 Human + AI Support",
    fr: "Support humain + IA 24/7",
    es: "Soporte humano + IA 24/7",
    pt: "Suporte humano + IA 24/7",
    zyatria: true,
    competitors: false
  },
  {
    en: "Transparent Pricing",
    fr: "Tarification transparente",
    es: "Precios transparentes",
    pt: "Preços transparentes",
    zyatria: true,
    competitors: false
  },
  {
    en: "Custom Workflow Creation",
    fr: "Création de workflows personnalisés",
    es: "Creación de flujos de trabajo personalizados",
    pt: "Criação de fluxos de trabalho personalizados",
    zyatria: true,
    competitors: true
  },
  {
    en: "Pre-built Integrations (20+)",
    fr: "Intégrations pré-construites (20+)",
    es: "Integraciones preconstruidas (20+)",
    pt: "Integrações pré-construídas (20+)",
    zyatria: true,
    competitors: false
  },
  {
    en: "Free Trial Available",
    fr: "Essai gratuit disponible",
    es: "Prueba gratuita disponible",
    pt: "Teste gratuito disponível",
    zyatria: true,
    competitors: false
  },
  {
    en: "No Long-term Contracts",
    fr: "Pas de contrats à long terme",
    es: "Sin contratos a largo plazo",
    pt: "Sem contratos de longo prazo",
    zyatria: true,
    competitors: false
  },
  {
    en: "Dedicated Account Manager",
    fr: "Gestionnaire de compte dédié",
    es: "Gerente de cuenta dedicado",
    pt: "Gerente de conta dedicado",
    zyatria: true,
    competitors: false
  },
  {
    en: "99.8% Uptime SLA",
    fr: "SLA de disponibilité de 99,8%",
    es: "SLA de tiempo de actividad del 99,8%",
    pt: "SLA de disponibilidade de 99,8%",
    zyatria: true,
    competitors: true
  },
  {
    en: "SOC 2 & GDPR Compliant",
    fr: "Conforme SOC 2 et RGPD",
    es: "Cumple con SOC 2 y GDPR",
    pt: "Compatível com SOC 2 e GDPR",
    zyatria: true,
    competitors: true
  },
  {
    en: "API Access Included",
    fr: "Accès API inclus",
    es: "Acceso API incluido",
    pt: "Acesso à API incluído",
    zyatria: true,
    competitors: false
  }
];

export default function CompetitorComparison() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="py-20 bg-background">
      <div className="container max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full mb-4">
            <span className="text-sm font-semibold text-blue-600">{t.badge}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">{t.titleHighlight}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-xl">
          {/* Header */}
          <div className="grid grid-cols-3 bg-muted">
            <div className="p-6"></div>
            <div className="p-6 text-center border-x border-border bg-blue-500/5">
              <div className="font-bold text-lg text-blue-600">
                {t.us}
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                Fast & Reliable
              </div>
            </div>
            <div className="p-6 text-center">
              <div className="font-bold text-lg text-muted-foreground">
                {t.competitors}
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                Average
              </div>
            </div>
          </div>

          {/* Features */}
          {features.map((feature, index) => (
            <div
              key={index}
              className={`grid grid-cols-3 items-center ${
                index % 2 === 0 ? 'bg-background' : 'bg-muted/30'
              } ${feature.highlight ? 'border-l-4 border-blue-600' : ''}`}
            >
              {/* Feature name */}
              <div className={`p-4 font-medium ${feature.highlight ? 'pl-6 text-blue-600' : ''}`}>
                {feature[language]}
                {feature.highlight && (
                  <span className="ml-2 text-xs bg-blue-500/10 text-blue-600 px-2 py-1 rounded">
                    Key Differentiator
                  </span>
                )}
              </div>

              {/* ZyatrIA */}
              <div className="p-4 text-center border-x border-border bg-blue-500/5">
                {feature.zyatria ? (
                  <Check className="w-6 h-6 text-green-600 mx-auto" />
                ) : (
                  <X className="w-6 h-6 text-red-500 mx-auto opacity-30" />
                )}
              </div>

              {/* Competitors */}
              <div className="p-4 text-center">
                {feature.competitors ? (
                  <Check className="w-6 h-6 text-green-600 mx-auto opacity-50" />
                ) : (
                  <X className="w-6 h-6 text-red-500 mx-auto" />
                )}
              </div>
            </div>
          ))}

          {/* Footer CTA */}
          <div className="bg-gradient-to-r from-blue-500/10 via-violet-500/5 to-cyan-500/10 p-8 text-center">
            <p className="text-lg font-semibold mb-4">
              Ready to experience the ZyatrIA difference?
            </p>
            <a
              href="/demo"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-violet-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-violet-700 transition-all hover:scale-105 shadow-lg shadow-blue-600/30"
            >
              {t.getStarted} →
            </a>
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-green-600" />
            <span>SOC 2 Certified</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-green-600" />
            <span>GDPR Compliant</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-green-600" />
            <span>ISO 27001</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-green-600" />
            <span>99.8% Uptime</span>
          </div>
        </div>
      </div>
    </section>
  );
}







