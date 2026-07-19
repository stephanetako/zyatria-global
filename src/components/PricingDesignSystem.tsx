import React from 'react';
import { Check, Shield } from 'lucide-react';
import { useLanguage } from '../lib/language-context';

const translations = {
  fr: {
    title: 'Tarification Transparente',
    subtitle: 'Choisissez le plan qui correspond à vos besoins. Sans frais cachés.',
    plans: {
      trial: {
        name: '🆕 Essai Gratuit',
        description: 'Testez sans risque pendant 7 jours',
        price: 'Gratuit',
        period: '',
        features: [
          '1 Bot IA (Support Client 24/7)',
          '100 interactions/mois',
          'Pas de carte bancaire requise'
        ],
        cta: 'Commencer l\'Essai Gratuit',
        ctaClass: 'btn-primary'
      },
      starter: {
        name: '💡 Starter',
        description: 'Parfait pour démarrer',
        price: '68 $ CAD',
        period: '/mois',
        features: [
          '1 Bot IA spécialisé',
          'Déploiement en 7-15 jours',
          'Support email (48h)',
          'Jusqu\'à 1 000 interactions/mois'
        ],
        cta: 'Démarrer Plan Mensuel',
        ctaClass: 'btn-primary'
      },
      professional: {
        name: '⭐ Professional',
        description: 'Le plus populaire',
        price: '208 $ CAD',
        period: '/mois',
        badge: '⭐ Recommandé',
        features: [
          '3 Bots IA spécialisés',
          'Déploiement en 7-15 jours',
          'Automatisation avancée',
          'Intégrations CRM',
          'Support prioritaire (24h)',
          'Jusqu\'à 5 000 interactions/mois'
        ],
        cta: 'Démarrer Plan Mensuel',
        ctaClass: 'btn-primary',
        highlighted: true
      },
      enterprise: {
        name: '🏆 Enterprise',
        description: 'Solution complète',
        price: '698 $ CAD',
        period: '/mois',
        features: [
          '7 Bots IA - Suite complète',
          'Déploiement personnalisé',
          'Automatisation complète',
          'Gestionnaire dédié',
          'Support 24/7'
        ],
        cta: 'Contacter les Ventes',
        ctaClass: 'btn-secondary'
      }
    },
    services: {
      title: 'Services Professionnels',
      subtitle: 'Conseil d\'expert pour maximiser votre ROI IA',
      items: [
        {
          name: 'Audit IA Complet',
          description: 'Analyse approfondie',
          price: '497 $ CAD',
          period: 'Paiement unique',
          cta: 'Commander l\'Audit'
        },
        {
          name: 'Consultation Stratégique',
          description: '60 minutes avec un expert',
          price: '147 $ CAD',
          period: 'Paiement unique',
          cta: 'Réserver une Consultation'
        },
        {
          name: 'Formation IA pour Équipes',
          description: 'Demi-journée',
          price: '997 $ CAD',
          period: 'Paiement unique',
          cta: 'Réserver une Formation'
        }
      ]
    },
    footer: {
      secure: 'Paiements sécurisés par Stripe',
      guarantee: 'Tous les prix en dollars canadiens (CAD). Garantie satisfait ou remboursé 30 jours.'
    }
  },
  en: {
    title: 'Transparent Pricing',
    subtitle: 'Choose the plan that fits your needs. No hidden fees.',
    plans: {
      trial: {
        name: '🆕 Free Trial',
        description: 'Test risk-free for 7 days',
        price: 'Free',
        period: '',
        features: [
          '1 AI Bot (24/7 Customer Support)',
          '100 interactions/month',
          'No credit card required'
        ],
        cta: 'Start Free Trial',
        ctaClass: 'btn-primary'
      },
      starter: {
        name: '💡 Starter',
        description: 'Perfect to get started',
        price: '$68 CAD',
        period: '/month',
        features: [
          '1 specialized AI Bot',
          'Deployment in 7-15 days',
          'Email support (48h)',
          'Up to 1,000 interactions/month'
        ],
        cta: 'Start Monthly Plan',
        ctaClass: 'btn-primary'
      },
      professional: {
        name: '⭐ Professional',
        description: 'Most popular',
        price: '$208 CAD',
        period: '/month',
        badge: '⭐ Recommended',
        features: [
          '3 specialized AI Bots',
          'Deployment in 7-15 days',
          'Advanced automation',
          'CRM integrations',
          'Priority support (24h)',
          'Up to 5,000 interactions/month'
        ],
        cta: 'Start Monthly Plan',
        ctaClass: 'btn-primary',
        highlighted: true
      },
      enterprise: {
        name: '🏆 Enterprise',
        description: 'Complete solution',
        price: '$698 CAD',
        period: '/month',
        features: [
          '7 AI Bots - Complete suite',
          'Custom deployment',
          'Complete automation',
          'Dedicated manager',
          '24/7 support'
        ],
        cta: 'Contact Sales',
        ctaClass: 'btn-secondary'
      }
    },
    services: {
      title: 'Professional Services',
      subtitle: 'Expert advice to maximize your AI ROI',
      items: [
        {
          name: 'Complete AI Audit',
          description: 'In-depth analysis',
          price: '$497 CAD',
          period: 'One-time payment',
          cta: 'Order Audit'
        },
        {
          name: 'Strategic Consultation',
          description: '60 minutes with an expert',
          price: '$147 CAD',
          period: 'One-time payment',
          cta: 'Book Consultation'
        },
        {
          name: 'AI Training for Teams',
          description: 'Half-day session',
          price: '$997 CAD',
          period: 'One-time payment',
          cta: 'Book Training'
        }
      ]
    },
    footer: {
      secure: 'Secure payments by Stripe',
      guarantee: 'All prices in Canadian dollars (CAD). 30-day money-back guarantee.'
    }
  }
};

interface PricingCardProps {
  name: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  cta: string;
  ctaClass: string;
  badge?: string;
  highlighted?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
  name,
  description,
  price,
  period,
  features,
  cta,
  ctaClass,
  badge,
  highlighted = false
}) => {
  const cardStyle = highlighted
    ? { border: '2px solid #3B82F6', position: 'relative' as const }
    : {};

  const ctaStyle = highlighted
    ? { width: '100%', background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)' }
    : { width: '100%' };

  return (
    <div className="card" style={cardStyle}>
      {badge && (
        <div style={{
          position: 'absolute',
          top: '-12px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: '#3B82F6',
          color: 'white',
          padding: '4px 12px',
          borderRadius: '12px',
          fontSize: '12px',
          fontWeight: 'bold'
        }}>
          {badge}
        </div>
      )}
      <h3 style={{ textAlign: 'center', marginBottom: '10px' }}>{name}</h3>
      <p style={{ textAlign: 'center', color: '#64748B', marginBottom: '15px' }}>
        {description}
      </p>
      <p style={{
        textAlign: 'center',
        fontSize: '28px',
        fontWeight: 'bold',
        color: price === 'Gratuit' || price === 'Free' ? '#10B981' : '#3B82F6',
        marginBottom: period ? '5px' : '20px'
      }}>
        {price}
      </p>
      {period && (
        <p style={{ textAlign: 'center', fontSize: '14px', color: '#64748B', marginBottom: '20px' }}>
          {period}
        </p>
      )}
      <ul style={{ listStyle: 'none', padding: 0, marginBottom: '25px' }}>
        {features.map((feature, index) => (
          <li
            key={index}
            style={{
              marginBottom: '8px',
              display: 'flex',
              alignItems: 'center',
              color: '#374151'
            }}
          >
            <span style={{ color: '#10B981', marginRight: '8px', display: 'flex', alignItems: 'center' }}>
              <Check size={16} />
            </span>
            {feature.includes('**') ? (
              <strong>{feature.replace(/\*\*/g, '')}</strong>
            ) : (
              feature
            )}
          </li>
        ))}
      </ul>
      <a href="#contact" className={ctaClass} style={ctaStyle}>
        {cta}
      </a>
    </div>
  );
};

interface ServiceCardProps {
  name: string;
  description: string;
  price: string;
  period: string;
  cta: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ name, description, price, period, cta }) => {
  return (
    <div className="card">
      <h4 style={{ textAlign: 'center', marginBottom: '10px' }}>{name}</h4>
      <p style={{ textAlign: 'center', color: '#64748B', marginBottom: '15px' }}>
        {description}
      </p>
      <p style={{
        textAlign: 'center',
        fontSize: '28px',
        fontWeight: 'bold',
        color: '#3B82F6',
        marginBottom: '5px'
      }}>
        {price}
      </p>
      <p style={{ textAlign: 'center', fontSize: '14px', color: '#64748B', marginBottom: '20px' }}>
        {period}
      </p>
      <a href="#contact" className="btn-primary" style={{ width: '100%' }}>
        {cta}
      </a>
    </div>
  );
};

const PricingDesignSystem: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="section" id="tarifs">
      <h2 style={{ textAlign: 'center', marginBottom: '10px' }}>
        {t.title}
      </h2>
      <p style={{
        textAlign: 'center',
        color: '#64748B',
        marginBottom: '40px',
        maxWidth: '700px',
        marginLeft: 'auto',
        marginRight: 'auto'
      }}>
        {t.subtitle}
      </p>

      {/* Grille des tarifs */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '20px',
        maxWidth: '1000px',
        margin: '0 auto'
      }}>
        <PricingCard {...t.plans.trial} />
        <PricingCard {...t.plans.starter} />
        <PricingCard {...t.plans.professional} />
        <PricingCard {...t.plans.enterprise} />
      </div>

      {/* Services Professionnels */}
      <div style={{ marginTop: '60px', textAlign: 'center' }}>
        <h3 style={{ fontSize: '28px', marginBottom: '10px' }}>
          {t.services.title}
        </h3>
        <p style={{ color: '#64748B', marginBottom: '40px' }}>
          {t.services.subtitle}
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {t.services.items.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>

      {/* Paiements sécurisés */}
      <div style={{ marginTop: '40px', textAlign: 'center' }}>
        <p style={{ color: '#64748B', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
          <Shield size={20} style={{ color: '#10B981' }} />
          <strong>{t.footer.secure}</strong>
        </p>
        <p style={{ color: '#64748B', marginTop: '5px' }}>
          {t.footer.guarantee}
        </p>
      </div>
    </section>
  );
};

export default PricingDesignSystem;
