import React, { useState } from 'react';
import { Check, ArrowRight, DollarSign, Sparkles, Users } from 'lucide-react';
import { useLanguage } from '../lib/language-context';
import { Card } from './ui/card';

const translations = {
  fr: {
    badge: 'Tarifs Transparents',
    title: 'Des Prix Simples et Honnêtes',
    subtitle: 'Choisissez le plan qui correspond à vos besoins. Aucun frais caché.',
    monthly: 'Mensuel',
    annual: 'Annuel',
    perMonth: 'mois',
    recommended: 'Recommandé',
    plans: {
      starter: {
        name: 'Starter',
        description: 'Parfait pour tester nos services',
        price: '297',
        annualPrice: '247',
        originalPrice: '497',
        originalAnnualPrice: '397',
        discount: '-40%',
        savings: 'Économisez 600$/an',
        billing: 'Facturation mensuelle',
        features: [
          '1 Agent IA intelligent',
          'Support par email',
          'Intégrations de base',
          'Rapports mensuels',
          'Formation initiale incluse'
        ],
        cta: {
          text: 'Commencer',
          link: 'https://buy.stripe.com/test_28o5lA0Hy0Hy0Ug4gg'
        }
      },
      professional: {
        name: 'Professional',
        description: 'Pour les entreprises en croissance',
        price: '697',
        annualPrice: '597',
        originalPrice: '997',
        originalAnnualPrice: '897',
        discount: '-30%',
        savings: 'Économisez 1,200$/an',
        billing: 'Facturation mensuelle',
        features: [
          '3 Agents IA intelligents',
          'Support prioritaire 24/7',
          'Toutes les intégrations',
          'Rapports en temps réel',
          'Formation avancée',
          'Optimisation mensuelle'
        ],
        cta: {
          text: 'Démarrer maintenant',
          link: 'https://buy.stripe.com/test_6oE15k0Hy7a0bqM5kl'
        }
      },
      enterprise: {
        name: 'Enterprise',
        description: 'Solution sur mesure pour grandes entreprises',
        price: '1,497',
        annualPrice: '1,297',
        originalPrice: '1,997',
        originalAnnualPrice: '1,797',
        discount: '-25%',
        savings: 'Économisez 2,400$/an',
        billing: 'Facturation mensuelle',
        features: [
          'Agents IA illimités',
          'Support dédié 24/7',
          'Intégrations personnalisées',
          'Rapports avancés',
          'Formation sur mesure',
          'Optimisation continue',
          'SLA garanti'
        ],
        cta: {
          text: 'Contactez-nous',
          link: 'https://buy.stripe.com/test_9AQ6pw0Hy0Hy5aA6oq'
        }
      }
    },
    professionalServices: {
      title: 'Services Professionnels',
      subtitle: 'Des services experts pour maximiser votre retour sur investissement',
      audit: {
        title: 'Audit IA Complet',
        subtitle: 'Analyse approfondie',
        description: 'Analyse complète de vos processus et recommandations personnalisées pour l\'automatisation IA.',
        price: '497',
        currency: 'CAD',
        cta: {
          text: 'Réserver un audit',
          link: 'https://buy.stripe.com/test_dR6bJY0Hy0Hy0Ug3cd'
        }
      },
      consultation: {
        title: 'Consultation Stratégique',
        subtitle: 'Session de 2 heures',
        description: 'Session stratégique avec nos experts pour définir votre roadmap d\'automatisation IA.',
        price: '197',
        currency: 'CAD',
        cta: {
          text: 'Réserver une consultation',
          link: 'https://buy.stripe.com/test_5kA01g0Hy0Hy0Ug28a'
        }
      }
    }
  },
  en: {
    badge: 'Transparent Pricing',
    title: 'Simple and Honest Pricing',
    subtitle: 'Choose the plan that fits your needs. No hidden fees.',
    monthly: 'Monthly',
    annual: 'Annual',
    perMonth: 'month',
    recommended: 'Recommended',
    plans: {
      starter: {
        name: 'Starter',
        description: 'Perfect to test our services',
        price: '297',
        annualPrice: '247',
        originalPrice: '497',
        originalAnnualPrice: '397',
        discount: '-40%',
        savings: 'Save $600/year',
        billing: 'Monthly billing',
        features: [
          '1 Intelligent AI Agent',
          'Email support',
          'Basic integrations',
          'Monthly reports',
          'Initial training included'
        ],
        cta: {
          text: 'Get Started',
          link: 'https://buy.stripe.com/test_28o5lA0Hy0Hy0Ug4gg'
        }
      },
      professional: {
        name: 'Professional',
        description: 'For growing businesses',
        price: '697',
        annualPrice: '597',
        originalPrice: '997',
        originalAnnualPrice: '897',
        discount: '-30%',
        savings: 'Save $1,200/year',
        billing: 'Monthly billing',
        features: [
          '3 Intelligent AI Agents',
          '24/7 priority support',
          'All integrations',
          'Real-time reports',
          'Advanced training',
          'Monthly optimization'
        ],
        cta: {
          text: 'Start Now',
          link: 'https://buy.stripe.com/test_6oE15k0Hy7a0bqM5kl'
        }
      },
      enterprise: {
        name: 'Enterprise',
        description: 'Custom solution for large businesses',
        price: '1,497',
        annualPrice: '1,297',
        originalPrice: '1,997',
        originalAnnualPrice: '1,797',
        discount: '-25%',
        savings: 'Save $2,400/year',
        billing: 'Monthly billing',
        features: [
          'Unlimited AI Agents',
          '24/7 dedicated support',
          'Custom integrations',
          'Advanced reports',
          'Custom training',
          'Continuous optimization',
          'Guaranteed SLA'
        ],
        cta: {
          text: 'Contact Us',
          link: 'https://buy.stripe.com/test_9AQ6pw0Hy0Hy5aA6oq'
        }
      }
    },
    professionalServices: {
      title: 'Professional Services',
      subtitle: 'Expert services to maximize your ROI',
      audit: {
        title: 'Complete AI Audit',
        subtitle: 'In-depth analysis',
        description: 'Complete analysis of your processes and personalized recommendations for AI automation.',
        price: '497',
        currency: 'CAD',
        cta: {
          text: 'Book an audit',
          link: 'https://buy.stripe.com/test_dR6bJY0Hy0Hy0Ug3cd'
        }
      },
      consultation: {
        title: 'Strategic Consultation',
        subtitle: '2-hour session',
        description: 'Strategic session with our experts to define your AI automation roadmap.',
        price: '197',
        currency: 'CAD',
        cta: {
          text: 'Book a consultation',
          link: 'https://buy.stripe.com/test_5kA01g0Hy0Hy0Ug28a'
        }
      }
    }
  }
};

export default function Pricing() {
  const { language } = useLanguage();
  const supportedLanguage = (language === 'en' || language === 'fr') ? language : 'en';
  const t = translations[supportedLanguage];
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly');

  const planKeys = ['starter', 'professional', 'enterprise'] as const;

  return (
    <section id="pricing" className="section" style={{ background: 'linear-gradient(135deg, #F8FAFC 0%, #E2E8F0 100%)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        
        {/* Header */}
        <div style={{ marginBottom: '50px' }}>
          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '8px', 
            background: '#EFF6FF', 
            border: '1px solid #BFDBFE',
            padding: '8px 16px', 
            borderRadius: '20px', 
            marginBottom: '20px' 
          }}>
            <DollarSign size={16} style={{ color: '#3B82F6' }} />
            <span style={{ fontSize: '14px', fontWeight: '600', color: '#3B82F6' }}>{t.badge}</span>
          </div>
          <h2 style={{ marginBottom: '15px' }}>{t.title}</h2>
          <p style={{ fontSize: '18px', maxWidth: '700px', margin: '0 auto', color: '#64748B' }}>
            {t.subtitle}
          </p>
        </div>

        {/* Billing Toggle */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '50px' }}>
          <div style={{ 
            display: 'inline-flex', 
            background: '#EFF6FF', 
            padding: '6px', 
            borderRadius: '12px',
            border: '1px solid #BFDBFE'
          }}>
            <button
              onClick={() => setBillingPeriod('monthly')}
              style={{
                padding: '10px 30px',
                borderRadius: '8px',
                border: 'none',
                fontWeight: '600',
                fontSize: '14px',
                cursor: 'pointer',
                transition: 'all 0.3s',
                background: billingPeriod === 'monthly' ? '#3B82F6' : 'transparent',
                color: billingPeriod === 'monthly' ? 'white' : '#64748B'
              }}
            >
              {t.monthly}
            </button>
            <button
              onClick={() => setBillingPeriod('annual')}
              style={{
                padding: '10px 30px',
                borderRadius: '8px',
                border: 'none',
                fontWeight: '600',
                fontSize: '14px',
                cursor: 'pointer',
                transition: 'all 0.3s',
                background: billingPeriod === 'annual' ? '#3B82F6' : 'transparent',
                color: billingPeriod === 'annual' ? 'white' : '#64748B'
              }}
            >
              {t.annual}
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '30px',
          marginBottom: '80px',
          paddingTop: '20px'
        }}>
          {planKeys.map((planKey, index) => {
            const plan = t.plans[planKey];
            const isRecommended = planKey === 'professional';
            const price = billingPeriod === 'monthly' ? plan.price : plan.annualPrice;
            const originalPrice = billingPeriod === 'monthly' ? plan.originalPrice : plan.originalAnnualPrice;

            return (
              <div
                key={index}
                className="card"
                style={{
                  position: 'relative',
                  textAlign: 'left',
                  border: isRecommended ? '2px solid #3B82F6' : '1px solid #E2E8F0',
                  transform: isRecommended ? 'scale(1.05)' : 'scale(1)',
                  background: isRecommended ? '#F8FAFC' : 'white',
                  paddingTop: '35px'
                }}
              >
                {/* Discount Badge */}
                {plan.discount && (
                  <div style={{
                    position: 'absolute',
                    top: '10px',
                    right: '20px',
                    background: 'linear-gradient(135deg, #3B82F6, #2563EB)',
                    color: 'white',
                    padding: '8px 14px',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: '700',
                    boxShadow: '0 4px 6px rgba(59, 130, 246, 0.3)',
                    zIndex: 10
                  }}>
                    {plan.discount}
                  </div>
                )}

                {/* Recommended Badge */}
                {isRecommended && (
                  <div style={{
                    position: 'absolute',
                    top: '10px',
                    left: '20px',
                    background: 'linear-gradient(135deg, #10B981, #059669)',
                    color: 'white',
                    padding: '8px 16px',
                    borderRadius: '20px',
                    fontSize: '13px',
                    fontWeight: '700',
                    boxShadow: '0 4px 6px rgba(16, 185, 129, 0.3)',
                    zIndex: 10
                  }}>
                    ⭐ {t.recommended}
                  </div>
                )}

                {/* Plan Header */}
                <div style={{ marginBottom: '25px', marginTop: isRecommended ? '10px' : '0' }}>
                  <h3 style={{ marginBottom: '10px', fontSize: '24px' }}>{plan.name}</h3>
                  <p style={{ fontSize: '14px', color: '#64748B' }}>{plan.description}</p>
                </div>

                {/* Pricing */}
                <div style={{ marginBottom: '25px' }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '10px' }}>
                    {originalPrice && (
                      <span style={{ fontSize: '18px', color: '#94A3B8', textDecoration: 'line-through' }}>
                        {originalPrice} $
                      </span>
                    )}
                    <span style={{ fontSize: '42px', fontWeight: '800', color: '#3B82F6' }}>
                      {price} $
                    </span>
                    <span style={{ fontSize: '14px', color: '#64748B' }}>/{t.perMonth}</span>
                  </div>
                  {plan.savings && billingPeriod === 'annual' && (
                    <div style={{
                      background: '#FEF3C7',
                      border: '1px solid #FDE68A',
                      color: '#92400E',
                      padding: '8px 12px',
                      borderRadius: '8px',
                      fontSize: '12px',
                      fontWeight: '600',
                      marginBottom: '10px'
                    }}>
                      💰 {plan.savings}
                    </div>
                  )}
                  <p style={{ fontSize: '13px', color: '#94A3B8' }}>{plan.billing}</p>
                </div>

                {/* Features */}
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '25px' }}>
                  {plan.features.map((feature, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '12px' }}>
                      <Check size={18} style={{ color: '#3B82F6', flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ fontSize: '14px', color: '#374151' }}>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href={plan.cta.link}
                  className={isRecommended ? 'btn-primary' : 'btn-secondary'}
                  style={{
                    width: '100%',
                    textAlign: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px'
                  }}
                >
                  {plan.cta.text}
                  <ArrowRight size={16} />
                </a>
              </div>
            );
          })}
        </div>

        {/* Professional Services */}
        <div style={{ marginTop: '80px' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h3 style={{ marginBottom: '15px', fontSize: '32px' }}>
              {t.professionalServices.title}
            </h3>
            <p style={{ fontSize: '18px', color: '#64748B', maxWidth: '700px', margin: '0 auto' }}>
              {t.professionalServices.subtitle}
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
            gap: '30px',
            maxWidth: '900px',
            margin: '0 auto'
          }}>
            {/* Audit Card */}
            <div className="card" style={{ textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px', marginBottom: '20px' }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  background: 'linear-gradient(135deg, #EFF6FF, #DBEAFE)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Sparkles size={24} style={{ color: '#3B82F6' }} />
                </div>
                <div>
                  <h4 style={{ marginBottom: '5px', fontSize: '20px' }}>
                    {t.professionalServices.audit.title}
                  </h4>
                  <p style={{ fontSize: '13px', color: '#3B82F6', fontWeight: '600' }}>
                    {t.professionalServices.audit.subtitle}
                  </p>
                </div>
              </div>
              <p style={{ fontSize: '14px', color: '#64748B', marginBottom: '20px' }}>
                {t.professionalServices.audit.description}
              </p>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '5px', marginBottom: '20px' }}>
                <span style={{ fontSize: '36px', fontWeight: '800', color: '#3B82F6' }}>
                  {t.professionalServices.audit.price}
                </span>
                <span style={{ fontSize: '14px', color: '#64748B' }}>
                  {t.professionalServices.audit.currency}
                </span>
              </div>
              <a
                href={t.professionalServices.audit.cta.link}
                className="btn-primary"
                style={{
                  width: '100%',
                  textAlign: 'center',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
              >
                {t.professionalServices.audit.cta.text}
                <ArrowRight size={16} />
              </a>
            </div>

            {/* Consultation Card */}
            <div className="card" style={{ textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px', marginBottom: '20px' }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  background: 'linear-gradient(135deg, #EFF6FF, #DBEAFE)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Users size={24} style={{ color: '#3B82F6' }} />
                </div>
                <div>
                  <h4 style={{ marginBottom: '5px', fontSize: '20px' }}>
                    {t.professionalServices.consultation.title}
                  </h4>
                  <p style={{ fontSize: '13px', color: '#3B82F6', fontWeight: '600' }}>
                    {t.professionalServices.consultation.subtitle}
                  </p>
                </div>
              </div>
              <p style={{ fontSize: '14px', color: '#64748B', marginBottom: '20px' }}>
                {t.professionalServices.consultation.description}
              </p>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '5px', marginBottom: '20px' }}>
                <span style={{ fontSize: '36px', fontWeight: '800', color: '#3B82F6' }}>
                  {t.professionalServices.consultation.price}
                </span>
                <span style={{ fontSize: '14px', color: '#64748B' }}>
                  {t.professionalServices.consultation.currency}
                </span>
              </div>
              <a
                href={t.professionalServices.consultation.cta.link}
                className="btn-primary"
                style={{
                  width: '100%',
                  textAlign: 'center',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
              >
                {t.professionalServices.consultation.cta.text}
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

