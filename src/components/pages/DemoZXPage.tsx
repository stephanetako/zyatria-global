import React from 'react';
import '../../styles/zx-styles.css';
import SuperChatbotFamily from '../SuperChatbotFamily';

/**
 * DemoZXPage - Page de démonstration complète du système ZX
 * Avec chatbot intégré
 */
export default function DemoZXPage() {
  return (
    <div className="zx">
      {/* ========================================
           NAVBAR STICKY
           ======================================== */}
      <header className="zx-header">
        <nav className="zx-nav">
          <div className="zx-logo">
            Zyatr<span>IA</span>
          </div>
          
          <div className="zx-nav-links">
            <a href="#services">Services</a>
            <a href="#micro-agents">Micro-Agents</a>
            <a href="#pricing">Tarifs</a>
            <a href="#testimonials">Témoignages</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Contact</a>
          </div>
          
          <div className="zx-nav-right">
            <div className="zx-lang">
              <div className="zx-lang-current">🇫🇷 FR</div>
              <div className="zx-lang-menu">
                <a href="/en/demo-zx">🇬🇧 English</a>
                <a href="/es/demo-zx">🇪🇸 Español</a>
                <a href="/pt/demo-zx">🇵🇹 Português</a>
              </div>
            </div>
            <a href="#demo" className="zx-btn zx-btn-sm">Démo gratuite</a>
          </div>
        </nav>
      </header>

      {/* ========================================
           HERO SECTION
           ======================================== */}
      <section className="zx-hero zx-sec">
        <div className="zx-wrap">
          <div className="zx-kicker">NOUVEAU • DÉPLOIEMENT EN 7-15 JOURS</div>
          
          <h1 className="zx-h1">
            Agents IA & Automatisation <span>Sans Frontières</span>
          </h1>
          
          <p className="zx-lead">
            Transformez votre entreprise avec des agents IA intelligents et une 
            automatisation avancée. Disponible en Amérique du Nord, Europe, 
            Afrique et Amérique Latine.
          </p>
          
          <div className="zx-cta-row">
            <a href="#contact" className="zx-btn">Commencer maintenant</a>
            <a href="#demo" className="zx-btn zx-btn-ghost">Voir la démo</a>
          </div>
          
          <div className="zx-stats">
            <div>
              <b>500+</b>
              <small>Entreprises clientes</small>
            </div>
            <div>
              <b>98%</b>
              <small>Satisfaction client</small>
            </div>
            <div>
              <b>7-15j</b>
              <small>Déploiement rapide</small>
            </div>
            <div>
              <b>24/7</b>
              <small>Support multilingue</small>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
           SERVICES SECTION
           ======================================== */}
      <section className="zx-sec" id="services">
        <div className="zx-wrap">
          <div className="zx-kicker">NOS SERVICES</div>
          <h2 className="zx-h2">Solutions IA complètes</h2>
          <p className="zx-lead">
            Des agents intelligents pour chaque besoin de votre entreprise
          </p>
          
          <div className="zx-cards">
            <div className="zx-card">
              <div className="zx-tag">POPULAIRE</div>
              <h3>🤖 Agents IA Intelligents</h3>
              <p>
                Automatisez vos processus avec des agents IA capables de 
                comprendre et d'agir de manière autonome.
              </p>
              <ul>
                <li>Traitement du langage naturel</li>
                <li>Apprentissage continu</li>
                <li>Intégration multi-plateforme</li>
                <li>Support multilingue (50+ langues)</li>
              </ul>
              <a href="#" className="zx-link">En savoir plus →</a>
            </div>

            <div className="zx-card">
              <div className="zx-tag">NOUVEAU</div>
              <h3>⚡ Automatisation Avancée</h3>
              <p>
                Workflows intelligents qui s'adaptent à vos besoins et 
                optimisent vos opérations.
              </p>
              <ul>
                <li>Workflows personnalisables</li>
                <li>Déclencheurs intelligents</li>
                <li>Intégrations API illimitées</li>
                <li>Rapports en temps réel</li>
              </ul>
              <a href="#" className="zx-link">En savoir plus →</a>
            </div>

            <div className="zx-card">
              <h3>🎯 Micro-Agents Spécialisés</h3>
              <p>
                Agents dédiés pour des tâches spécifiques : immobilier, 
                e-commerce, support client.
              </p>
              <ul>
                <li>Qualification de leads automatique</li>
                <li>Gestion de rendez-vous intelligente</li>
                <li>Support client 24/7</li>
                <li>Analyse de données avancée</li>
              </ul>
              <a href="#" className="zx-link">En savoir plus →</a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
           PRICING SECTION
           ======================================== */}
      <section className="zx-sec" id="pricing">
        <div className="zx-wrap">
          <div className="zx-kicker">TARIFS TRANSPARENTS</div>
          <h2 className="zx-h2">Choisissez votre plan</h2>
          <p className="zx-lead">
            Pas de frais cachés. Annulez à tout moment. Garantie 30 jours.
          </p>
          
          <div className="zx-cards zx-plans">
            {/* Plan Starter */}
            <div className="zx-card">
              <div className="zx-tag">STARTER</div>
              <p className="zx-sub">Pour les petites équipes</p>
              <div className="zx-price">
                $99 <small>/mois</small>
              </div>
              <p className="zx-desc">
                Idéal pour tester nos agents IA
              </p>
              <ul>
                <li>2 agents IA</li>
                <li>1 000 interactions/mois</li>
                <li>Support email</li>
                <li>Intégrations de base</li>
                <li>Tableau de bord</li>
              </ul>
              <a href="#" className="zx-btn zx-btn-ghost">Commencer</a>
            </div>

            {/* Plan Pro (RECOMMANDÉ) */}
            <div className="zx-card zx-reco">
              <div className="zx-reco-tag">⭐ RECOMMANDÉ</div>
              <div className="zx-tag">PRO</div>
              <p className="zx-sub">Pour les entreprises en croissance</p>
              <div className="zx-price">
                <s>$299</s> $199 <small>/mois</small>
              </div>
              <p className="zx-desc">
                Le meilleur rapport qualité-prix
              </p>
              <ul>
                <li>5 agents IA</li>
                <li>10 000 interactions/mois</li>
                <li>Support prioritaire 24/7</li>
                <li>Toutes les intégrations</li>
                <li>Analytics avancés</li>
                <li>API complète</li>
                <li>Formation incluse</li>
              </ul>
              <a href="#" className="zx-btn">Choisir Pro</a>
            </div>

            {/* Plan Enterprise */}
            <div className="zx-card">
              <div className="zx-tag">ENTERPRISE</div>
              <p className="zx-sub">Pour les grandes organisations</p>
              <div className="zx-price">
                Sur mesure
              </div>
              <p className="zx-desc">
                Solution personnalisée pour vos besoins
              </p>
              <ul>
                <li>Agents IA illimités</li>
                <li>Interactions illimitées</li>
                <li>Support dédié</li>
                <li>SLA garanti 99.9%</li>
                <li>Déploiement on-premise</li>
                <li>Personnalisation complète</li>
                <li>Formation sur site</li>
              </ul>
              <a href="#" className="zx-btn zx-btn-ghost">Nous contacter</a>
            </div>
          </div>

          {/* Promo box */}
          <div className="zx-promo">
            <h3>🎁 Offre de lancement</h3>
            <p>
              <strong>-33% sur tous les plans annuels</strong> + 2 mois offerts
              <br />
              Offre valable jusqu'au 31 décembre 2024
            </p>
          </div>

          {/* Note */}
          <p className="zx-note">
            💳 Tous les prix sont en USD • Facturation mensuelle ou annuelle • 
            Garantie satisfait ou remboursé 30 jours
          </p>
        </div>
      </section>

      {/* ========================================
           TESTIMONIALS SECTION
           ======================================== */}
      <section className="zx-sec" id="testimonials">
        <div className="zx-wrap">
          <div className="zx-kicker">TÉMOIGNAGES</div>
          <h2 className="zx-h2">Ce que disent nos clients</h2>
          
          <div className="zx-cards">
            <div className="zx-card">
              <div className="zx-stars">★★★★★</div>
              <div className="zx-author">
                <div className="zx-avatar">MR</div>
                <div>
                  <b>Marie Rousseau</b>
                  <small>CEO, TechStart Inc.</small>
                </div>
              </div>
              <p className="zx-quote">
                "ZyatrIA a transformé notre service client. Nos agents IA 
                gèrent 80% des demandes automatiquement."
              </p>
              <div className="zx-results">
                <div>📈 +150% de productivité</div>
                <div>⏱️ -60% de temps de réponse</div>
                <div>😊 98% de satisfaction</div>
              </div>
            </div>

            <div className="zx-card">
              <div className="zx-stars">★★★★★</div>
              <div className="zx-author">
                <div className="zx-avatar">JD</div>
                <div>
                  <b>Jean Dupont</b>
                  <small>Directeur Marketing</small>
                </div>
              </div>
              <p className="zx-quote">
                "Le micro-agent e-commerce a doublé notre taux de conversion. 
                ROI positif dès le premier mois."
              </p>
              <div className="zx-results">
                <div>💰 +120% de revenus</div>
                <div>🛒 +85% de conversion</div>
                <div>⚡ ROI en 30 jours</div>
              </div>
            </div>

            <div className="zx-card">
              <div className="zx-stars">★★★★★</div>
              <div className="zx-author">
                <div className="zx-avatar">SL</div>
                <div>
                  <b>Sophie Leblanc</b>
                  <small>Fondatrice, Immo Plus</small>
                </div>
              </div>
              <p className="zx-quote">
                "L'agent immobilier IA qualifie nos leads 24/7. Nous avons 
                triplé notre volume de visites."
              </p>
              <div className="zx-results">
                <div>📅 +200% de rendez-vous</div>
                <div>🎯 90% de leads qualifiés</div>
                <div>💼 -50% de coûts</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
           FAQ SECTION
           ======================================== */}
      <section className="zx-sec" id="faq">
        <div className="zx-wrap">
          <div className="zx-kicker">FAQ</div>
          <h2 className="zx-h2">Questions fréquentes</h2>
          
          <div className="zx-faq">
            <details>
              <summary>Combien de temps prend le déploiement ?</summary>
              <p>
                Le déploiement complet prend entre 7 et 15 jours selon la 
                complexité de votre projet.
              </p>
            </details>

            <details>
              <summary>Quelles langues sont supportées ?</summary>
              <p>
                Nos agents IA supportent plus de 50 langues, incluant français, 
                anglais, espagnol, portugais, allemand, italien, et bien d'autres.
              </p>
            </details>

            <details>
              <summary>Puis-je changer de plan à tout moment ?</summary>
              <p>
                Oui, absolument ! Vous pouvez upgrader ou downgrader votre plan 
                à tout moment.
              </p>
            </details>
          </div>

          <div className="zx-faq-cta">
            <p>Vous avez d'autres questions ?</p>
            <a href="#contact">Contactez notre équipe →</a>
          </div>
        </div>
      </section>

      {/* ========================================
           CTA FINAL
           ======================================== */}
      <section className="zx-cta-final zx-sec" id="contact">
        <div className="zx-wrap">
          <h2 className="zx-h2">Prêt à transformer votre entreprise ?</h2>
          <p className="zx-lead">
            Rejoignez plus de 500 entreprises qui ont déjà automatisé leurs 
            processus avec ZyatrIA Global.
          </p>
          
          <div className="zx-cta-row">
            <a href="#contact" className="zx-btn">Démarrer maintenant</a>
            <a href="#demo" className="zx-btn zx-btn-ghost">Planifier une démo</a>
          </div>
          
          <div className="zx-checks">
            <span>✓ Déploiement en 7-15 jours</span>
            <span>✓ Support multilingue 24/7</span>
            <span>✓ Garantie 30 jours</span>
            <span>✓ Sans engagement</span>
          </div>
        </div>
      </section>

      {/* ========================================
           FOOTER
           ======================================== */}
      <footer className="zx-footer">
        <div className="zx-wrap">
          <div className="zx-footer-grid">
            <div>
              <div className="zx-logo">
                Zyatr<span>IA</span>
              </div>
              <p>
                Agents IA et automatisation sans frontières. Transformez votre 
                entreprise avec l'intelligence artificielle.
              </p>
            </div>

            <div>
              <h4>Produits</h4>
              <ul>
                <li><a href="#agents">Agents IA</a></li>
                <li><a href="#automation">Automatisation</a></li>
                <li><a href="#micro-agents">Micro-Agents</a></li>
              </ul>
            </div>

            <div>
              <h4>Entreprise</h4>
              <ul>
                <li><a href="/about">À propos</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#press">Presse</a></li>
              </ul>
            </div>

            <div>
              <h4>Support</h4>
              <ul>
                <li><a href="#help">Centre d'aide</a></li>
                <li><a href="/docs">Documentation</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="zx-footer-contact">
            <p>
              📧 <a href="mailto:contact@zyatria.global">contact@zyatria.global</a>
              {' • '}
              📞 <a href="tel:+14388874507">+1 (438) 887-4507</a>
            </p>
          </div>

          <div className="zx-copy">
            © 2024 ZyatrIA Global. Tous droits réservés.
            <br />
            <a href="/privacy">Politique de confidentialité</a>
            {' • '}
            <a href="/terms">Conditions d'utilisation</a>
          </div>
        </div>
      </footer>

      {/* ========================================
           CHATBOT - TOUJOURS VISIBLE
           ======================================== */}
      <SuperChatbotFamily />
    </div>
  );
}

