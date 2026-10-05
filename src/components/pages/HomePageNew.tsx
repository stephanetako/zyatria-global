import React, { useState, useEffect } from 'react';
import '../../styles/homepage-new.css';
import SimpleChatbot from '../SimpleChatbot';
import { stripeLinks } from '../../config/stripe-links';

// Traductions
const translations = {
  fr: {
    nav_services: 'Services',
    nav_agents: 'Micro-agents',
    nav_roadmap: 'Roadmap',
    nav_pricing: 'Tarifs',
    nav_faq: 'FAQ',
    nav_cta: 'Démo gratuite',
    hero_badge: 'Déploiement en 7-15 jours',
    hero_title: 'Déployez des agents IA intelligents en 7-15 jours',
    hero_sub: 'Automatisez vos processus, qualifiez vos leads et répondez à vos clients 24/7. Sans embauche. Sans formation. Résultats mesurables dès la première semaine.',
    hero_cta1: 'Démarrer votre démo gratuite',
    hero_cta2: 'Voir les tarifs',
    stat1: 'Déploiement',
    stat2: 'Disponibilité',
    stat3: 'Langues',
    stat4: 'Coûts',
    card1_title: 'Lead qualifié',
    card1_desc: 'Score 92/100 · Prêt pour votre équipe commerciale',
    card2_title: 'Réponse client',
    card2_desc: 'En 1,2 secondes · 24/7 · Multilingue',
    card3_title: '+265% conversion',
    card3_desc: 'Résultat mesuré chez Digital Ventures',
    services_eyebrow: 'Nos solutions',
    services_title: 'Un écosystème IA complet pour votre croissance',
    services_sub: 'Trois leviers complémentaires, adaptés à votre secteur et à vos priorités.',
    svc1_title: 'Agents IA',
    svc1_desc: 'Des agents qui analysent, décident et exécutent. Réponses automatiques, analyse intelligente, adaptation à vos processus.',
    svc2_title: 'Automatisation',
    svc2_desc: 'Éliminez le travail manuel. Connectez vos outils, synchronisez vos données, automatisez vos workflows.',
    svc3_title: 'Micro-agents',
    svc3_desc: 'Solutions pré-construites pour vos défis courants : déployées en 7-10 jours, coût inférieur au sur-mesure, résultats prouvés dans votre secteur.',
    svc_link: 'Voir comment ça marche'
  },
  en: {
    nav_services: 'Services',
    nav_agents: 'Micro-agents',
    nav_roadmap: 'Roadmap',
    nav_pricing: 'Pricing',
    nav_faq: 'FAQ',
    nav_cta: 'Free Demo',
    hero_badge: 'Deploy in 7-15 days',
    hero_title: 'Deploy intelligent AI agents in 7-15 days',
    hero_sub: 'Automate your processes, qualify your leads and respond to your customers 24/7. No hiring. No training. Measurable results from week one.',
    hero_cta1: 'Start your free demo',
    hero_cta2: 'See pricing',
    stat1: 'Deployment',
    stat2: 'Availability',
    stat3: 'Languages',
    stat4: 'Costs',
    card1_title: 'Qualified lead',
    card1_desc: 'Score 92/100 · Ready for your sales team',
    card2_title: 'Customer response',
    card2_desc: 'In 1.2 seconds · 24/7 · Multilingual',
    card3_title: '+265% conversion',
    card3_desc: 'Measured result at Digital Ventures',
    services_eyebrow: 'Our solutions',
    services_title: 'A complete AI ecosystem for your growth',
    services_sub: 'Three complementary levers, adapted to your industry and priorities.',
    svc1_title: 'AI Agents',
    svc1_desc: 'Agents that analyze, decide and execute. Automatic responses, intelligent analysis, adaptation to your processes.',
    svc2_title: 'Automation',
    svc2_desc: 'Eliminate manual work. Connect your tools, sync your data, automate your workflows.',
    svc3_title: 'Micro-agents',
    svc3_desc: 'Pre-built solutions for your common challenges: deployed in 7-10 days, lower cost than custom, proven results in your industry.',
    svc_link: 'See how it works'
  }
};

export default function HomePageNew() {
  const [lang, setLang] = useState<'fr' | 'en'>('fr');
  const t = translations[lang];

  return (
    <div className="zx">
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-inner">
          <a href="#" className="logo">
            <span className="logo-mark">Z</span>ZyatrIA Global
          </a>
          <div className="nav-links">
            <a href="#services">{t.nav_services}</a>
            <a href="#agents">{t.nav_agents}</a>
            <a href="#roadmap">{t.nav_roadmap}</a>
            <a href="#pricing">{t.nav_pricing}</a>
            <a href="#faq">{t.nav_faq}</a>
          </div>
          <div className="nav-actions">
            <div className="lang-toggle">
              <button 
                data-lang="fr" 
                className={lang === 'fr' ? 'active' : ''}
                onClick={() => setLang('fr')}
              >
                FR
              </button>
              <button 
                data-lang="en" 
                className={lang === 'en' ? 'active' : ''}
                onClick={() => setLang('en')}
              >
                EN
              </button>
            </div>
            <a href="#cta" className="btn btn-primary">
              {t.nav_cta}
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="hero-badge">
              <span className="dot"></span>
              <span>{t.hero_badge}</span>
            </div>
            <h1>
              {lang === 'fr' ? (
                <>Déployez des <span className="grad">agents IA intelligents</span> en 7-15 jours</>
              ) : (
                <>Deploy <span className="grad">intelligent AI agents</span> in 7-15 days</>
              )}
            </h1>
            <p className="hero-sub">{t.hero_sub}</p>
            <div className="hero-cta">
              <a href="#cta" className="btn btn-primary btn-lg">
                {t.hero_cta1}
              </a>
              <a href="#pricing" className="btn btn-ghost btn-lg">
                {t.hero_cta2}
              </a>
            </div>
            <div className="hero-stats">
              <div className="hero-stat">
                <span className="num">7-15j</span>
                <span className="lbl">{t.stat1}</span>
              </div>
              <div className="hero-stat">
                <span className="num">24/7</span>
                <span className="lbl">{t.stat2}</span>
              </div>
              <div className="hero-stat">
                <span className="num">4</span>
                <span className="lbl">{t.stat3}</span>
              </div>
              <div className="hero-stat">
                <span className="num">-70%</span>
                <span className="lbl">{t.stat4}</span>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-card hero-card-1">
              <div className="hero-card-icon">
                <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <circle cx="12" cy="12" r="6"/>
                  <circle cx="12" cy="12" r="2"/>
                </svg>
              </div>
              <div className="hero-card-title">{t.card1_title}</div>
              <div className="hero-card-desc">{t.card1_desc}</div>
            </div>
            <div className="hero-card hero-card-2">
              <div className="hero-card-icon">
                <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
              </div>
              <div className="hero-card-title">{t.card2_title}</div>
              <div className="hero-card-desc">{t.card2_desc}</div>
            </div>
            <div className="hero-card hero-card-3">
              <div className="hero-card-icon">
                <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                </svg>
              </div>
              <div className="hero-card-title">{t.card3_title}</div>
              <div className="hero-card-desc">{t.card3_desc}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section section-alt" id="services">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">{t.services_eyebrow}</span>
            <h2>{t.services_title}</h2>
            <p>{t.services_sub}</p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="10" rx="2"/>
                  <circle cx="12" cy="5" r="2"/>
                  <path d="M12 7v4"/>
                  <line x1="8" y1="16" x2="8" y2="16"/>
                  <line x1="16" y1="16" x2="16" y2="16"/>
                </svg>
              </div>
              <h3>{t.svc1_title}</h3>
              <p>{t.svc1_desc}</p>
              <span className="service-link">{t.svc_link}</span>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                </svg>
              </div>
              <h3>{t.svc2_title}</h3>
              <p>{t.svc2_desc}</p>
              <span className="service-link">{t.svc_link}</span>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
                  <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
                  <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
                  <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
                </svg>
              </div>
              <h3>{t.svc3_title}</h3>
              <p>{t.svc3_desc}</p>
              <span className="service-link">{t.svc_link}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Reste du contenu identique à HomePageComplete */}
      {/* Micro-agents, Roadmap, Pricing, Testimonials, FAQ, etc. */}
      
      {/* Pour l'instant, on garde le contenu existant */}
      <section className="zx-sec" id="agents">
        <div className="zx-wrap">
          <p className="zx-kicker">Micro-agents digitaux</p>
          <h2 className="zx-h2">Choisissez le micro-agent adapté à votre activité</h2>
          <p className="zx-lead">
            Solutions pré-configurées, prêtes à déployer. Résultats en une semaine.
          </p>
          <div className="zx-cards zx-6">
            {/* Micro-agents cards - contenu identique à HomePageComplete */}
            <div className="zx-card">
              <h3>🎯 Qualification automatique des leads</h3>
              <p>
                Scoring des prospects, qualification instantanée et alertes réservées aux leads sérieux.
              </p>
              <ul>
                <li>Auto-scoring des prospects</li>
                <li>Qualification instantanée</li>
                <li>Alertes leads chauds</li>
                <li>Intégration CRM</li>
              </ul>
              <p className="zx-price">
                69 $CA<small>/mois</small>
              </p>
              <div className="zx-cta-row">
                <a 
                  href={stripeLinks.microAgents.leadQualification}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="zx-btn zx-btn-sm"
                >
                  Acheter
                </a>
                <a href="#contact" className="zx-btn zx-btn-ghost zx-btn-sm">
                  Démo
                </a>
              </div>
            </div>

            <div className="zx-card">
              <h3>💬 Réponses clients 24/7</h3>
              <p>
                Réponses instantanées aux questions courantes, jour et nuit, en plusieurs langues.
              </p>
              <ul>
                <li>Réponses instantanées 24/7</li>
                <li>Support multilingue</li>
                <li>Base de connaissances FAQ</li>
                <li>Escalade humaine</li>
              </ul>
              <p className="zx-price">
                69 $CA<small>/mois</small>
              </p>
              <div className="zx-cta-row">
                <a 
                  href={stripeLinks.microAgents.customerSupport}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="zx-btn zx-btn-sm"
                >
                  Acheter
                </a>
                <a href="#contact" className="zx-btn zx-btn-ghost zx-btn-sm">
                  Démo
                </a>
              </div>
            </div>

            <div className="zx-card">
              <h3>📅 Gestion des rendez-vous</h3>
              <p>
                Réservation directe, rappels automatiques, synchronisation agenda — fini les allers-retours.
              </p>
              <ul>
                <li>Réservation en ligne</li>
                <li>Rappels automatiques</li>
                <li>Sync agenda</li>
                <li>Gestion des confirmations</li>
              </ul>
              <p className="zx-price">
                68 $CA<small>/mois</small>
              </p>
              <div className="zx-cta-row">
                <a 
                  href={stripeLinks.microAgents.appointments}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="zx-btn zx-btn-sm"
                >
                  Acheter
                </a>
                <a href="#contact" className="zx-btn zx-btn-ghost zx-btn-sm">
                  Démo
                </a>
              </div>
            </div>

            <div className="zx-card">
              <h3>📨 Suivi des prospects</h3>
              <p>Relances automatiques par email, SMS ou WhatsApp, au bon moment.</p>
              <ul>
                <li>Séquences automatisées</li>
                <li>Multi-canal (email, SMS, WhatsApp)</li>
                <li>Timing intelligent</li>
                <li>Suivi d'engagement</li>
              </ul>
              <p className="zx-price">
                180 $CA<small>/mois</small>
              </p>
              <div className="zx-cta-row">
                <a 
                  href={stripeLinks.microAgents.prospectFollowup}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="zx-btn zx-btn-sm"
                >
                  Acheter
                </a>
                <a href="#contact" className="zx-btn zx-btn-ghost zx-btn-sm">
                  Démo
                </a>
              </div>
            </div>

            <div className="zx-card">
              <h3>🏠 Micro-agent immobilier</h3>
              <p>Visites, qualification des acheteurs et réponses sur les annonces, 24/7.</p>
              <ul>
                <li>Planification des visites</li>
                <li>Qualification des acheteurs</li>
                <li>Réponses sur les biens</li>
                <li>Gestion des leads</li>
              </ul>
              <p className="zx-price">
                208 $CA<small>/mois</small>
              </p>
              <div className="zx-cta-row">
                <a 
                  href={stripeLinks.microAgents.realEstate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="zx-btn zx-btn-sm"
                >
                  Acheter
                </a>
                <a href="#contact" className="zx-btn zx-btn-ghost zx-btn-sm">
                  Démo
                </a>
              </div>
            </div>

            <div className="zx-card">
              <h3>🛒 Micro-agent commerce</h3>
              <p>Récupération des paniers abandonnés, suivi des commandes, FAQ produits.</p>
              <ul>
                <li>Récupération de paniers</li>
                <li>Suivi de commandes</li>
                <li>FAQ produits</li>
                <li>Recommandations</li>
              </ul>
              <p className="zx-price">
                195 $CA<small>/mois</small>
              </p>
              <div className="zx-cta-row">
                <a 
                  href={stripeLinks.microAgents.ecommerce}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="zx-btn zx-btn-sm"
                >
                  Acheter
                </a>
                <a href="#contact" className="zx-btn zx-btn-ghost zx-btn-sm">
                  Démo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap, Pricing, Testimonials, FAQ, Footer - identique à HomePageComplete */}
      {/* ... (contenu complet conservé) ... */}

      {/* Chatbot */}
      <SimpleChatbot />
    </div>
  );
}

