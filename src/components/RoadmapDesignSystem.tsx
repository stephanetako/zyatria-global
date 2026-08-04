import React from 'react';
import { CheckCircle, Wrench, Rocket } from 'lucide-react';
import { useLanguage } from '../lib/language-context';

const translations = {
  fr: {
    title: 'Roadmap de Développement',
    subtitle: 'Transparence totale sur notre développement. Nous construisons des agents IA de haute qualité.',
    phase1: {
      badge: '🎯 Disponible Maintenant',
      description: 'Commencez dès aujourd\'hui avec nos services clés en main :',
      items: [
        'Consultations stratégiques IA',
        'Audits de processus complets',
        'Formation sur l\'IA pour équipes',
        'Recommandations personnalisées',
        'Roadmap d\'automatisation'
      ],
      cta: 'Réserver Maintenant'
    },
    phase2: {
      badge: '🚀 En Développement (60 jours)',
      description: 'Vos clients pourront :',
      items: [
        'Agent vocal (Vapi.ai)',
        'Chatbot intelligent (GPT-4)',
        'Automatisation CRM',
        'Intégrations API',
        'Dashboard analytics'
      ],
      cta: 'Pré-Commander (-30%)'
    },
    phase3: {
      badge: '🌟 Lancement Complet (90 jours)',
      description: 'Bénéficiez de :',
      items: [
        '7 Micro-Agents spécialisés',
        'Support 24/7',
        'Déploiement en 7-15 jours',
        'Formation personnalisée',
        'SLA garantis'
      ],
      cta: 'Réserver Votre Place'
    }
  },
  en: {
    title: 'Development Roadmap',
    subtitle: 'Full transparency on our development. We build high-quality AI agents.',
    phase1: {
      badge: '🎯 Available Now',
      description: 'Start today with our turnkey services:',
      items: [
        'Strategic AI consultations',
        'Complete process audits',
        'AI training for teams',
        'Personalized recommendations',
        'Automation roadmap'
      ],
      cta: 'Book Now'
    },
    phase2: {
      badge: '🚀 In Development (60 days)',
      description: 'Your clients will be able to:',
      items: [
        'Voice agent (Vapi.ai)',
        'Intelligent chatbot (GPT-4)',
        'CRM automation',
        'API integrations',
        'Analytics dashboard'
      ],
      cta: 'Pre-Order (-30%)'
    },
    phase3: {
      badge: '🌟 Full Launch (90 days)',
      description: 'Benefit from:',
      items: [
        '7 specialized Micro-Agents',
        '24/7 support',
        'Deployment in 7-15 days',
        'Personalized training',
        'Guaranteed SLAs'
      ],
      cta: 'Reserve Your Spot'
    }
  }
};

interface PhaseProps {
  badge: string;
  badgeClass?: string;
  description: string;
  items: string[];
  icon: React.ReactNode;
  iconColor: string;
  cta: string;
  ctaClass: string;
}

const RoadmapPhase: React.FC<PhaseProps> = ({ 
  badge, 
  badgeClass = '', 
  description, 
  items, 
  icon, 
  iconColor, 
  cta, 
  ctaClass 
}) => {
  return (
    <div className="roadmap-phase">
      <div className="phase-title">
        <span className={`phase-badge ${badgeClass}`}>{badge}</span>
      </div>
      <p style={{ color: '#64748B', marginBottom: '20px' }}>{description}</p>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {items.map((item, index) => (
          <li 
            key={index} 
            style={{ 
              marginBottom: '10px', 
              display: 'flex', 
              alignItems: 'center', 
              color: '#374151' 
            }}
          >
            <span style={{ color: iconColor, marginRight: '10px', display: 'flex', alignItems: 'center' }}>
              {icon}
            </span>
            {item}
          </li>
        ))}
      </ul>
      <a href="#contact" className={ctaClass} style={{ marginTop: '20px' }}>
        {cta}
      </a>
    </div>
  );
};

const RoadmapDesignSystem: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language as 'en' | 'fr'];

  return (
    <section className="section" id="roadmap">
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

      {/* Phase 1 - Disponible Maintenant */}
      <RoadmapPhase
        badge={t.phase1.badge}
        badgeClass=""
        description={t.phase1.description}
        items={t.phase1.items}
        icon={<CheckCircle size={18} />}
        iconColor="#10B981"
        cta={t.phase1.cta}
        ctaClass="btn-primary"
      />

      {/* Phase 2 - En Développement */}
      <RoadmapPhase
        badge={t.phase2.badge}
        badgeClass="developing"
        description={t.phase2.description}
        items={t.phase2.items}
        icon={<Wrench size={18} />}
        iconColor="#8B5CF6"
        cta={t.phase2.cta}
        ctaClass="btn-secondary"
      />

      {/* Phase 3 - Lancement Complet */}
      <RoadmapPhase
        badge={t.phase3.badge}
        badgeClass="coming"
        description={t.phase3.description}
        items={t.phase3.items}
        icon={<Rocket size={18} />}
        iconColor="#10B981"
        cta={t.phase3.cta}
        ctaClass="btn-primary"
      />
    </section>
  );
};

export default RoadmapDesignSystem;

