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
    <section className="section" style={{ 
      background: 'linear-gradient(135deg, #3B82F6 0%, #6366F1 50%, #8B5CF6 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative elements */}
      <div style={{
        position: 'absolute',
        top: '-50%',
        right: '-10%',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-30%',
        left: '-5%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none'
      }} />

      <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        
        {/* Icon */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          marginBottom: '30px',
          animation: 'float 3s ease-in-out infinite'
        }}>
          <div style={{
            width: '80px',
            height: '80px',
            background: 'rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(10px)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '2px solid rgba(255, 255, 255, 0.2)'
          }}>
            <Sparkles size={40} style={{ color: 'white' }} />
          </div>
        </div>

        {/* Title */}
        <h2 style={{ 
          fontSize: 'clamp(32px, 5vw, 56px)', 
          fontWeight: '800', 
          color: 'white', 
          marginBottom: '25px',
          lineHeight: '1.2',
          textShadow: '0 2px 20px rgba(0,0,0,0.1)'
        }}>
          {t.title}
        </h2>

        {/* Description */}
        <p style={{ 
          fontSize: 'clamp(16px, 2vw, 20px)', 
          color: 'rgba(255, 255, 255, 0.95)', 
          marginBottom: '40px',
          lineHeight: '1.6',
          maxWidth: '800px',
          margin: '0 auto 40px'
        }}>
          {t.description}
        </p>

        {/* CTA Buttons */}
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '15px', 
          alignItems: 'center',
          marginBottom: '40px'
        }}>
          <button
            onClick={goToDemo}
            className="btn-primary"
            style={{
              background: 'white',
              color: '#3B82F6',
              fontSize: '18px',
              padding: '16px 40px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 15px 50px rgba(0,0,0,0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.2)';
            }}
          >
            {t.cta}
            <ArrowRight size={20} />
          </button>

          <button
            onClick={goToDemo}
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              color: 'white',
              border: '2px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '10px',
              padding: '14px 32px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
            }}
          >
            {t.guarantee}
          </button>
        </div>

        {/* Trust Indicators */}
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          justifyContent: 'center', 
          gap: '30px',
          marginBottom: '30px'
        }}>
          {[
            'Free demo',
            'No commitment',
            '24h response',
            '4 languages'
          ].map((item, index) => (
            <div key={index} style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '8px',
              color: 'rgba(255, 255, 255, 0.9)',
              fontSize: '14px',
              fontWeight: '500'
            }}>
              <span style={{ fontSize: '20px' }}>✓</span>
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* Secondary Link */}
        <div>
          <a
            href={DEFAULT_STRIPE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '14px',
              textDecoration: 'none',
              borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
              paddingBottom: '2px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '5px',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'white';
              e.currentTarget.style.borderBottomColor = 'white';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
              e.currentTarget.style.borderBottomColor = 'rgba(255, 255, 255, 0.3)';
            }}
          >
            {t.payNow}
            <ArrowRight size={14} />
          </a>
        </div>

      </div>
    </section>
  );
}



















