import { ArrowRight, Sparkles } from 'lucide-react';
import { baseUrl } from '../lib/base-url';
import { useLanguage } from '../lib/language-context';
import { stripeLinks } from '../config/stripe-links';

const DEFAULT_STRIPE_LINK = stripeLinks.plans.starterMonthly;

const translations = {
  en: {
    title: "Your Competitors Are Already Using AI Automation",
    description: "Don't get left behind. Join 500+ companies automating their growth with intelligent agents. Deploy in 7-15 days and see measurable results.",
    cta: "Start Your Free Demo",
    guarantee: "✓ Free 30-min consultation  ✓ No commitment  ✓ Deploy in 7-15 days",
    payNow: "Already decided? Subscribe now"
  },
  fr: {
    title: "Vos Concurrents Utilisent Déjà l'Automatisation IA",
    description: "Ne restez pas en arrière. Rejoignez 500+ entreprises qui automatisent leur croissance avec des agents intelligents. Déployez en 7-15 jours et voyez des résultats mesurables.",
    cta: "Démarrez Votre Démo Gratuite",
    guarantee: "✓ Consultation gratuite 30 min  ✓ Sans engagement  ✓ Déployé en 7-15 jours",
    payNow: "Déjà décidé ? S'abonner maintenant"
  },
  es: {
    title: "Sus Competidores Ya Están Usando Automatización IA",
    description: "No se quede atrás. Únase a 500+ empresas que automatizan su crecimiento con agentes inteligentes. Implemente en 7-15 días y vea resultados medibles.",
    cta: "Comience Su Demo Gratuita",
    guarantee: "✓ Consulta gratuita 30 min  ✓ Sin compromiso  ✓ Implantado en 7-15 días",
    payNow: "¿Ya decidido? Suscribirse ahora"
  },
  pt: {
    title: "Seus Concorrentes Já Estão Usando Automação IA",
    description: "Não fique para trás. Junte-se a 500+ empresas que automatizam seu crescimento com agentes inteligentes. Implemente em 7-15 dias e veja resultados mensuráveis.",
    cta: "Inicie Sua Demo Gratuita",
    guarantee: "✓ Consulta gratuita 30 min  ✓ Sem compromisso  ✓ Implantado em 7-15 dias",
    payNow: "Já decidiu? Assinar agora"
  }
};

export default function CTAFinal() {
  const { language } = useLanguage();
  const t = translations[language];

  const goToDemo = () => {
    window.location.href = `${baseUrl}/demo`;
  };

  return (
    <section className="py-24 bg-gradient-to-br from-blue-400/10 via-violet-400/10 to-cyan-400/10 relative overflow-hidden">
      <div className="container relative z-10">
        {/* Language Switcher */}
        <div className="flex justify-center gap-2 mb-8 animate-fade-in">
          {(['en', 'fr', 'es', 'pt'] as const).map((l) => (
            <button
              key={l}
              onClick={() => {}}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                language === l
                  ? 'bg-white text-blue-500 shadow-lg'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Sparkles Icon */}
          <div className="flex justify-center animate-fade-in-up">
            <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white animate-fade-in-up delay-200">
            {t.title}
          </h2>

          {/* Description */}
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-300">
            {t.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 animate-fade-in-up delay-400">
            <button
              onClick={goToDemo}
              className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-lg text-lg font-semibold hover:bg-zinc-50 transition-all shadow-xl hover:shadow-2xl hover:scale-105 font-button"
            >
              {t.cta}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={goToDemo}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-lg text-lg font-semibold hover:bg-white/20 transition-all"
            >
              {t.guarantee}
            </button>
          </div>

          {/* Trust indicators */}
          <div className="pt-8 flex flex-wrap justify-center gap-8 text-white/80 text-sm animate-fade-in-up delay-500">
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>Free demo</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>No commitment</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>24h response</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>4 languages</span>
            </div>
          </div>

          {/* Secondary Link: Direct Payment */}
          <div className="pt-6 animate-fade-in-up delay-600">
            <a
              href={DEFAULT_STRIPE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/70 hover:text-white transition-colors inline-flex items-center gap-1 border-b border-white/30 hover:border-white pb-1"
            >
              {t.payNow}
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


















