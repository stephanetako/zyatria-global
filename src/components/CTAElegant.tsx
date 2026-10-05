import React from 'react';
import { useLanguage } from '../lib/language-context';

const CTAElegant: React.FC = () => {
  const { t } = useLanguage();

  const content = {
    en: {
      title: "Ready to Transform Your Business?",
      subtitle: "Join 500+ companies automating their growth with intelligent AI agents",
      primaryButton: "Schedule Free Consultation",
      secondaryButton: "View Live Demo",
      features: [
        "30-min free consultation",
        "No commitment required",
        "Deploy in 7-15 days",
        "24h response time"
      ]
    },
    fr: {
      title: "Prêt à Transformer Votre Entreprise ?",
      subtitle: "Rejoignez 500+ entreprises qui automatisent leur croissance avec des agents IA intelligents",
      primaryButton: "Réserver une Consultation Gratuite",
      secondaryButton: "Voir la Démo en Direct",
      features: [
        "Consultation gratuite 30 min",
        "Sans engagement",
        "Déployé en 7-15 jours",
        "Réponse en 24h"
      ]
    },
    es: {
      title: "¿Listo para Transformar su Negocio?",
      subtitle: "Únase a 500+ empresas que automatizan su crecimiento con agentes IA inteligentes",
      primaryButton: "Reservar Consulta Gratuita",
      secondaryButton: "Ver Demo en Vivo",
      features: [
        "Consulta gratuita 30 min",
        "Sin compromiso",
        "Desplegado en 7-15 días",
        "Respuesta en 24h"
      ]
    },
    pt: {
      title: "Pronto para Transformar Seu Negócio?",
      subtitle: "Junte-se a 500+ empresas que automatizam seu crescimento com agentes IA inteligentes",
      primaryButton: "Agendar Consulta Gratuita",
      secondaryButton: "Ver Demo ao Vivo",
      features: [
        "Consulta gratuita 30 min",
        "Sem compromisso",
        "Implantado em 7-15 dias",
        "Resposta em 24h"
      ]
    }
  };

  const lang = t('lang') as 'en' | 'fr' | 'es' | 'pt';
  const text = content[lang];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Gradient Background - Soft and Professional */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F8FAFC] via-[#F1F5F9] to-[#E2E8F0]" />
      
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-heading">
            {text.title}
          </h2>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {text.subtitle}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-primary rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/25"
            >
              <span className="relative z-10">{text.primaryButton}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 transition-transform duration-300 group-hover:scale-110" />
            </a>

            <a
              href="/demo"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-foreground bg-white border-2 border-input rounded-lg transition-all duration-300 hover:border-primary hover:text-primary hover:shadow-lg"
            >
              {text.secondaryButton}
            </a>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {text.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-2 text-sm text-muted-foreground bg-white/60 backdrop-blur-sm rounded-lg px-4 py-3 border border-border/50 transition-all duration-300 hover:border-primary/30 hover:bg-white/80"
              >
                <svg
                  className="w-5 h-5 text-primary flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="font-medium">{feature}</span>
              </div>
            ))}
          </div>

          {/* Trust Badge */}
          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="font-medium">
              {lang === 'fr' ? 'Données sécurisées • Conformité RGPD • Support 24/7' : 
               lang === 'es' ? 'Datos seguros • Cumplimiento GDPR • Soporte 24/7' :
               lang === 'pt' ? 'Dados seguros • Conformidade GDPR • Suporte 24/7' :
               'Secure data • GDPR compliant • 24/7 support'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAElegant;
