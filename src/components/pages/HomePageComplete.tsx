

import React from 'react';
import '../../styles/zx-styles.css';
import SimpleChatbot from '../SimpleChatbot';
import { stripeLinks } from '../../config/stripe-links';

export default function HomePageComplete() {
  return (
    <div className="zx">
      {/* Header */}
      <header className="zx-header">
        <div className="zx-wrap zx-nav">
          <a href="#accueil" className="zx-logo">
            <img 
              src="/zyatria-global-logo.svg" 
              alt="ZyatrIA Global" 
              style={{ height: '48px', width: 'auto' }}
            />
          </a>
          <nav className="zx-nav-links">
            <a href="#accueil">Accueil</a>
            <a href="#services">Services</a>
            <a href="#micro-agents">Micro-agents</a>
            <a href="#roadmap">Roadmap</a>
            <a href="#tarifs">Tarifs</a>
            <a href="#faq">FAQ</a>
          </nav>
          <div className="zx-nav-right">
            <div className="zx-lang">
              <div className="zx-lang-current">🇫🇷 FR ▾</div>
              <div className="zx-lang-menu">
                <a href="#fr">🇫🇷 Français</a>
                <a href="#en">🇬🇧 English</a>
                <a href="#es">🇪🇸 Español</a>
                <a href="#pt">🇵🇹 Português</a>
              </div>
            </div>
            <a href="#contact" className="zx-btn zx-btn-sm">
              Démo gratuite
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="zx-sec zx-hero" id="accueil">
        <div className="zx-wrap">
          <h1 className="zx-h1">
            Déployez des <span>agents IA intelligents</span> en 7-15 jours
          </h1>
          <p className="zx-lead">
            Automatisez vos processus, qualifiez vos leads et répondez à vos clients 24/7. 
            Sans embauche. Sans formation. Résultats mesurables dès la première semaine.
          </p>
          <div className="zx-cta-row">
            <a href="#contact" className="zx-btn">
              Démarrer votre démo gratuite
            </a>
            <a href="#tarifs" className="zx-btn zx-btn-ghost">
              Voir les tarifs
            </a>
          </div>
          <div className="zx-stats">
            <div>
              <b>7-15 jours</b>
              <small>Déploiement rapide</small>
            </div>
            <div>
              <b>24/7</b>
              <small>Disponibilité continue</small>
            </div>
            <div>
              <b>4 langues</b>
              <small>FR · EN · ES · PT</small>
            </div>
            <div>
              <b>-70%</b>
              <small>Coûts opérationnels</small>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="zx-sec" id="services">
        <div className="zx-wrap">
          <p className="zx-kicker">Nos solutions</p>
          <h2 className="zx-h2">Un écosystème IA complet pour votre croissance</h2>
          <p className="zx-lead">
            Trois leviers complémentaires, adaptés à votre secteur et à vos priorités.
          </p>
          <div className="zx-cards">
            <div className="zx-card">
              <span className="zx-tag">Agents IA</span>
              <h3>Des agents qui analysent, décident et exécutent</h3>
              <p>
                Au cœur de vos opérations, en continu : réponses automatiques, analyse intelligente, 
                exécution de tâches, adaptation à vos processus.
              </p>
              <a href="#contact" className="zx-link">
                Voir comment ça marche →
              </a>
            </div>
            <div className="zx-card">
              <span className="zx-tag">Automatisation</span>
              <h3>Éliminez le travail manuel</h3>
              <p>
                Connectez vos outils, synchronisez vos données et automatisez vos workflows. 
                Intégrations CRM, relances automatisées, sync temps réel, zéro erreur.
              </p>
              <a href="#contact" className="zx-link">
                Voir comment ça marche →
              </a>
            </div>
            <div className="zx-card">
              <span className="zx-tag">Micro-agents</span>
              <h3>Résultats en 7 jours</h3>
              <p>
                Solutions pré-construites pour vos défis courants : déployées en 7-10 jours, 
                coût inférieur au sur-mesure, résultats prouvés dans votre secteur.
              </p>
              <a href="#micro-agents" className="zx-link">
                Voir comment ça marche →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Micro-agents */}
      <section className="zx-sec" id="micro-agents">
        <div className="zx-wrap">
          <p className="zx-kicker">Micro-agents digitaux</p>
          <h2 className="zx-h2">Choisissez le micro-agent adapté à votre activité</h2>
          <p className="zx-lead">
            Solutions pré-configurées, prêtes à déployer. Résultats en une semaine.
          </p>
          <div className="zx-cards zx-6">
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

      {/* Roadmap */}
      <section className="zx-sec" id="roadmap">
        <div className="zx-wrap">
          <p className="zx-kicker">Transparence totale</p>
          <h2 className="zx-h2">Roadmap de développement</h2>
          <p className="zx-lead">
            Nous construisons des agents IA de haute qualité, et nous vous montrons où nous en sommes.
          </p>
          <div className="zx-cards">
            <div className="zx-card zx-phase-now">
              <span className="zx-tag">🎯 Disponible maintenant</span>
              <ul>
                <li>Consultations stratégiques IA</li>
                <li>Audits de processus complets</li>
                <li>Formation IA pour équipes</li>
                <li>Recommandations personnalisées</li>
                <li>Roadmap d'automatisation</li>
              </ul>
              <a href="#contact" className="zx-btn zx-btn-sm">
                Réserver maintenant
              </a>
            </div>
            <div className="zx-card zx-phase-dev">
              <span className="zx-tag">🚀 En développement (60 jours)</span>
              <ul>
                <li>Agent vocal (Vapi.ai)</li>
                <li>Chatbot intelligent (GPT-4)</li>
                <li>Automatisation CRM</li>
                <li>Intégrations API</li>
                <li>Dashboard analytics</li>
              </ul>
              <a href="#contact" className="zx-btn zx-btn-sm">
                Pré-commander (-30%)
              </a>
            </div>
            <div className="zx-card">
              <span className="zx-tag">🌟 Lancement complet (90 jours)</span>
              <ul>
                <li>7 micro-agents spécialisés</li>
                <li>Support 24/7</li>
                <li>Déploiement en 7-15 jours</li>
                <li>Formation personnalisée</li>
                <li>SLA garantis</li>
              </ul>
              <a href="#contact" className="zx-btn zx-btn-sm">
                Réserver votre place
              </a>
            </div>
          </div>
          <div className="zx-promo">
            <h3>🎁 Offre pré-lancement : -30% sur tous les plans</h3>
            <p>Réservez maintenant : 30% de réduction + formation offerte (valeur 497 $).</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="zx-sec" id="tarifs">
        <div className="zx-wrap">
          <p className="zx-kicker">Tarification transparente</p>
          <h2 className="zx-h2">Choisissez votre solution IA</h2>
          <p className="zx-lead">
            Sans frais cachés. Tous les prix en dollars canadiens (CAD). 
            Garantie satisfait ou remboursé 30 jours.
          </p>
          <div className="zx-cards zx-plans">
            <div className="zx-card">
              <span className="zx-tag">-30% 🎁</span>
              <h3>Starter</h3>
              <p className="zx-sub">Parfait pour démarrer</p>
              <p className="zx-price">
                <s>146 $</s>102 $<small>/mois</small>
              </p>
              <p className="zx-desc">Idéal pour automatiser vos processus de base.</p>
              <ul>
                <li>1 bot IA spécialisé</li>
                <li>Déploiement en 7-15 jours</li>
                <li>Support email (48h)</li>
                <li>Tableau de bord analytique</li>
                <li>1 000 interactions/mois</li>
              </ul>
              <a 
                href={stripeLinks.plans.starterMonthly}
                target="_blank"
                rel="noopener noreferrer"
                className="zx-btn"
              >
                Démarrer l'essai gratuit
              </a>
            </div>

            <div className="zx-card zx-reco">
              <span className="zx-reco-tag">Recommandé</span>
              <span className="zx-tag">-30% 🎁</span>
              <h3>Professional</h3>
              <p className="zx-sub">Le plus populaire</p>
              <p className="zx-price">
                <s>208 $</s>146 $<small>/mois</small>
              </p>
              <p className="zx-desc">
                Automatisation avancée et intégrations pour entreprises en croissance.
              </p>
              <ul>
                <li>3 bots IA spécialisés</li>
                <li>Déploiement en 7-15 jours</li>
                <li>Automatisation avancée</li>
                <li>Intégrations CRM</li>
                <li>Support prioritaire (24h)</li>
                <li>5 000 interactions/mois</li>
                <li>Rapports avancés</li>
              </ul>
              <a 
                href={stripeLinks.plans.professionalMonthly}
                target="_blank"
                rel="noopener noreferrer"
                className="zx-btn"
              >
                Démarrer l'essai gratuit
              </a>
            </div>

            <div className="zx-card">
              <span className="zx-tag">-30% 🎁</span>
              <h3>Enterprise</h3>
              <p className="zx-sub">Solution complète</p>
              <p className="zx-price">Sur devis</p>
              <p className="zx-desc">
                Solution IA complète et personnalisée pour grandes organisations.
              </p>
              <ul>
                <li>7 bots IA — suite complète</li>
                <li>Déploiement personnalisé</li>
                <li>Gestionnaire dédié</li>
                <li>Support 24/7</li>
                <li>Interactions illimitées</li>
                <li>Formation personnalisée</li>
                <li>SLA 99,9%</li>
              </ul>
              <a href="#contact" className="zx-btn">
                Contacter notre équipe
              </a>
            </div>
          </div>

          <div className="zx-cards" style={{ marginTop: '40px' }}>
            <div className="zx-card">
              <h3>📋 Audit IA complet</h3>
              <p>
                Évaluation approfondie de vos processus et recommandations d'automatisation personnalisées.
              </p>
              <p className="zx-price">147 $CA</p>
              <a 
                href={stripeLinks.services.audit}
                target="_blank"
                rel="noopener noreferrer"
                className="zx-btn zx-btn-ghost zx-btn-sm"
              >
                Commander
              </a>
            </div>
            <div className="zx-card">
              <h3>📞 Consultation stratégique</h3>
              <p>60 minutes avec un expert pour définir votre stratégie d'automatisation IA.</p>
              <p className="zx-price">149 $CA</p>
              <a 
                href={stripeLinks.services.consultation}
                target="_blank"
                rel="noopener noreferrer"
                className="zx-btn zx-btn-ghost zx-btn-sm"
              >
                Réserver
              </a>
            </div>
          </div>

          <p className="zx-note">🔒 Paiements sécurisés par Stripe</p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="zx-sec" id="temoignages">
        <div className="zx-wrap">
          <p className="zx-kicker">Références</p>
          <h2 className="zx-h2">Ce que disent nos clients</h2>
          <p className="zx-lead">Des résultats mesurés, chez des entreprises réelles.</p>
          <div className="zx-cards">
            <div className="zx-card">
              <p className="zx-stars">★★★★★</p>
              <p className="zx-quote">
                « ZyatrIA a transformé notre service client. Le temps de réponse est passé de 4 heures 
                à 2 minutes. Notre équipe se concentre enfin sur les cas complexes. »
              </p>
              <div className="zx-author">
                <div className="zx-avatar">SM</div>
                <div>
                  <b>Sarah Mitchell</b>
                  <small>CEO, TechStart Inc. · San Francisco, USA</small>
                </div>
              </div>
              <div className="zx-results">
                <div>✅ -95% de temps de réponse</div>
                <div>✅ +87% de satisfaction client</div>
                <div>✅ 45 000 $CA économisés / mois</div>
              </div>
            </div>

            <div className="zx-card">
              <p className="zx-stars">★★★★★</p>
              <p className="zx-quote">
                « Nous avons automatisé 80% du traitement des commandes. Ce qui prenait 3 jours prend 
                maintenant 3 heures. ROI atteint en 4 mois. »
              </p>
              <div className="zx-author">
                <div className="zx-avatar">PD</div>
                <div>
                  <b>Pierre Dubois</b>
                  <small>Directeur des Opérations, Commerce Plus · Paris, France</small>
                </div>
              </div>
              <div className="zx-results">
                <div>✅ -92% de temps de traitement</div>
                <div>✅ 99,7% de précision</div>
                <div>✅ ROI en 4 mois</div>
              </div>
            </div>

            <div className="zx-card">
              <p className="zx-stars">★★★★★</p>
              <p className="zx-quote">
                « Les agents IA gèrent toute notre qualification de leads. Nous sommes passés de 20% 
                à 73% de taux de conversion. »
              </p>
              <div className="zx-author">
                <div className="zx-avatar">MG</div>
                <div>
                  <b>Maria González</b>
                  <small>Directora de Marketing, Digital Ventures · Barcelona, España</small>
                </div>
              </div>
              <div className="zx-results">
                <div>✅ +265% de conversion</div>
                <div>✅ &lt; 1 min de temps de réponse</div>
                <div>✅ +230 000 $CA de revenus</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="zx-sec" id="faq">
        <div className="zx-wrap">
          <p className="zx-kicker">Questions fréquentes</p>
          <h2 className="zx-h2">Tout ce que vous devez savoir</h2>
          <p className="zx-lead">
            Réponses claires aux questions les plus courantes sur nos agents IA et notre processus.
          </p>

          <details className="zx-faq">
            <summary>Combien de temps prend le déploiement ?</summary>
            <p>
              Entre 7 et 15 jours selon la complexité. Les micro-agents standards sont déployés en 7-10 jours. 
              Les solutions personnalisées peuvent prendre jusqu'à 15 jours.
            </p>
          </details>

          <details className="zx-faq">
            <summary>Quels outils pouvez-vous intégrer ?</summary>
            <p>
              Nous intégrons la plupart des CRM (HubSpot, Salesforce, Pipedrive), outils de communication 
              (Slack, Teams, WhatsApp), calendriers (Google, Outlook) et plateformes e-commerce (Shopify, WooCommerce).
            </p>
          </details>

          <details className="zx-faq">
            <summary>Puis-je annuler à tout moment ?</summary>
            <p>
              Oui, tous nos plans sont sans engagement. Vous pouvez annuler à tout moment. 
              Garantie satisfait ou remboursé de 30 jours sur tous les plans.
            </p>
          </details>

          <details className="zx-faq">
            <summary>Les agents IA parlent-ils plusieurs langues ?</summary>
            <p>
              Oui, nos agents supportent 4 langues : français, anglais, espagnol et portugais. 
              Ils détectent automatiquement la langue du client et répondent dans celle-ci.
            </p>
          </details>

          <details className="zx-faq">
            <summary>Quel support offrez-vous ?</summary>
            <p>
              Support email (48h) sur le plan Starter, support prioritaire (24h) sur Professional, 
              et support 24/7 avec gestionnaire dédié sur Enterprise.
            </p>
          </details>

          <details className="zx-faq">
            <summary>Comment mesurez-vous les résultats ?</summary>
            <p>
              Tableau de bord analytique en temps réel avec métriques clés : temps de réponse, 
              taux de résolution, satisfaction client, économies réalisées, et ROI.
            </p>
          </details>

          <div className="zx-faq-cta">
            <p>Vous avez d'autres questions ?</p>
            <a href="#contact" className="zx-btn zx-btn-sm">
              Contactez-nous
            </a>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="zx-sec" id="ressources">
        <div className="zx-wrap">
          <p className="zx-kicker">Centre de ressources</p>
          <h2 className="zx-h2">Guides, études de cas et documentation</h2>
          <p className="zx-lead">
            Tout ce dont vous avez besoin pour comprendre et maximiser l'impact de l'IA dans votre entreprise.
          </p>
          <div className="zx-cards">
            <div className="zx-card">
              <span className="zx-tag">Guide</span>
              <h3>📘 Guide complet de l'automatisation IA</h3>
              <p>
                De la stratégie au déploiement : tout ce que vous devez savoir pour automatiser 
                avec succès vos processus métier.
              </p>
              <a href="#contact" className="zx-link">
                Télécharger le guide →
              </a>
            </div>
            <div className="zx-card">
              <span className="zx-tag">Étude de cas</span>
              <h3>📊 E-commerce : +265% de conversion</h3>
              <p>
                Comment une boutique en ligne a triplé son taux de conversion grâce aux agents IA 
                de qualification et de relance.
              </p>
              <a href="#contact" className="zx-link">
                Lire l'étude de cas →
              </a>
            </div>
            <div className="zx-card">
              <span className="zx-tag">Documentation</span>
              <h3>🔧 API & Intégrations</h3>
              <p>
                Documentation technique complète pour intégrer nos agents IA avec vos outils existants 
                et personnaliser les workflows.
              </p>
              <a href="#contact" className="zx-link">
                Accéder à la documentation →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / CTA Final */}
      <section className="zx-sec zx-cta-final" id="contact">
        <div className="zx-wrap">
          <h2 className="zx-h2">Vos concurrents utilisent déjà l'automatisation IA</h2>
          <p className="zx-lead">
            Ne restez pas en arrière. Déployez en 7-15 jours et obtenez des résultats mesurables. 
            Rejoignez les entreprises qui automatisent leur croissance avec des agents intelligents.
          </p>
          <a href="mailto:ZyatrIA.contact@gmail.com" className="zx-btn">
            Démarrez votre démo gratuite
          </a>
          <div className="zx-checks">
            <span>✓ Consultation gratuite 30 min</span>
            <span>✓ Sans engagement</span>
            <span>✓ Réponse en 24h</span>
            <span>✓ 4 langues (FR, EN, ES, PT)</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="zx-footer">
        <div className="zx-wrap">
          <div className="zx-footer-grid">
            <div>
              <p className="zx-logo">
                Zyatr<span>IA</span> Global
              </p>
              <p>
                IA sans frontières. Entreprise canadienne | Québec 🇨🇦
                <br />
                Agence internationale spécialisée en agents IA, automatisation et micro-agents IA.
              </p>
            </div>
            <div>
              <h4>Navigation</h4>
              <ul>
                <li>
                  <a href="#accueil">Accueil</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#micro-agents">Micro-agents IA</a>
                </li>
                <li>
                  <a href="#tarifs">Tarifs</a>
                </li>
                <li>
                  <a href="#contact">Démo & contact</a>
                </li>
              </ul>
            </div>
            <div>
              <h4>Services</h4>
              <ul>
                <li>
                  <a href="#tarifs">Audit IA</a>
                </li>
                <li>
                  <a href="#tarifs">Consultation</a>
                </li>
                <li>
                  <a href="#roadmap">Formation</a>
                </li>
              </ul>
            </div>
            <div>
              <h4>Secteurs</h4>
              <ul>
                <li>
                  <a href="#micro-agents">E-commerce</a>
                </li>
                <li>
                  <a href="#micro-agents">Immobilier</a>
                </li>
                <li>
                  <a href="#micro-agents">Coaching</a>
                </li>
                <li>
                  <a href="#micro-agents">SaaS & Tech</a>
                </li>
                <li>
                  <a href="#micro-agents">Santé & bien-être</a>
                </li>
                <li>
                  <a href="#micro-agents">Services professionnels</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="zx-footer-contact">
            <p>
              +1 (438) 887-4507 ·{' '}
              <a href="mailto:ZyatrIA.contact@gmail.com">ZyatrIA.contact@gmail.com</a>
            </p>
          </div>
          <p className="zx-copy">
            © 2026 ZyatrIA Global. Tous droits réservés. |{' '}
            <a href="#">Politique de confidentialité</a> | <a href="#">Conditions d'utilisation</a>
            <br />
            Opère en Amérique du Nord, Europe, Afrique francophone et Amérique latine.
          </p>
        </div>
      </footer>

      {/* Chatbot IA Hybride */}
      <SimpleChatbot />
    </div>
  );
}

