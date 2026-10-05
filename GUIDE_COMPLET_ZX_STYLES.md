# 📘 Guide Complet : Système ZX Styles pour ZyatrIA Global

## 🎯 Vue d'ensemble

Ce guide contient **tout ce dont vous avez besoin** pour utiliser le système de design ZX dans votre projet.

---

## 📦 Installation (DÉJÀ FAIT ✅)

Les fichiers suivants ont été créés/modifiés :

1. ✅ `src/styles/zx-styles.css` - Système de design complet
2. ✅ `src/styles/global.css` - Import ajouté

---

## 🎨 Palette de couleurs

```css
/* Couleurs principales */
--zx-primary: #635bff;        /* Violet/Indigo principal */
--zx-primary-hover: #5851ec;  /* Hover state */

/* Backgrounds */
--zx-bg-main: #f5f4f2;         /* Gris perle clair */
--zx-bg-alt: #edebe8;          /* Gris perle foncé */
--zx-bg-dark: #0f172a;         /* Bleu nuit */

/* Texte */
--zx-text-primary: #0f172a;    /* Texte principal */
--zx-text-secondary: #64748b;  /* Texte secondaire */
--zx-text-muted: #94a3b8;      /* Texte atténué */

/* Accents */
--zx-accent: #5b6b8c;          /* Bleu-gris */
--zx-border: #e2e5ea;          /* Bordures */
```

---

## 🧩 Composants disponibles

### 1. **NAVBAR STICKY** (Header)

```tsx
// Navbar complète avec logo, liens et sélecteur de langue
<header className="zx-header">
  <nav className="zx-nav">
    {/* Logo */}
    <div className="zx-logo">
      Zyatr<span>IA</span>
    </div>

    {/* Navigation principale */}
    <div className="zx-nav-links">
      <a href="#services">Services</a>
      <a href="#micro-agents">Micro-Agents</a>
      <a href="#pricing">Tarifs</a>
      <a href="#about">À propos</a>
      <a href="#contact">Contact</a>
    </div>

    {/* Actions à droite */}
    <div className="zx-nav-right">
      {/* Sélecteur de langue */}
      <div className="zx-lang">
        <div className="zx-lang-current">🇫🇷 FR</div>
        <div className="zx-lang-menu">
          <a href="/en">🇬🇧 English</a>
          <a href="/es">🇪🇸 Español</a>
          <a href="/pt">🇵🇹 Português</a>
        </div>
      </div>
      
      {/* Bouton CTA */}
      <a href="#demo" className="zx-btn zx-btn-sm">Démo gratuite</a>
    </div>
  </nav>
</header>
```

**Caractéristiques :**
- ✅ Position sticky (reste en haut au scroll)
- ✅ Backdrop blur (effet de flou)
- ✅ Responsive (menu caché sur mobile)
- ✅ Sélecteur de langue avec dropdown

---

### 2. **HERO SECTION**

```tsx
<section className="zx-hero zx-sec">
  <div className="zx-wrap">
    {/* Kicker (petit texte au-dessus du titre) */}
    <div className="zx-kicker">NOUVEAU • DÉPLOIEMENT EN 7-15 JOURS</div>
    
    {/* Titre principal */}
    <h1 className="zx-h1">
      Agents IA & Automatisation <span>Sans Frontières</span>
    </h1>
    
    {/* Description */}
    <p className="zx-lead">
      Transformez votre entreprise avec des agents IA intelligents et une 
      automatisation avancée. Disponible en Amérique du Nord, Europe, 
      Afrique et Amérique Latine.
    </p>
    
    {/* Boutons CTA */}
    <div className="zx-cta-row">
      <a href="#contact" className="zx-btn">Commencer maintenant</a>
      <a href="#demo" className="zx-btn zx-btn-ghost">Voir la démo</a>
    </div>
    
    {/* Statistiques */}
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
```

---

### 3. **CARDS GRID** (Services, Features)

```tsx
<section className="zx-sec">
  <div className="zx-wrap">
    <div className="zx-kicker">NOS SERVICES</div>
    <h2 className="zx-h2">Solutions IA complètes</h2>
    <p className="zx-lead">
      Des agents intelligents pour chaque besoin de votre entreprise
    </p>
    
    {/* Grid de 3 colonnes */}
    <div className="zx-cards">
      {/* Card 1 */}
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
          <li>Support multilingue</li>
        </ul>
        <a href="#" className="zx-link">En savoir plus →</a>
      </div>

      {/* Card 2 */}
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
          <li>Intégrations API</li>
          <li>Rapports en temps réel</li>
        </ul>
        <a href="#" className="zx-link">En savoir plus →</a>
      </div>

      {/* Card 3 */}
      <div className="zx-card">
        <h3>🎯 Micro-Agents Spécialisés</h3>
        <p>
          Agents dédiés pour des tâches spécifiques : immobilier, 
          e-commerce, support client.
        </p>
        <ul>
          <li>Qualification de leads</li>
          <li>Gestion de rendez-vous</li>
          <li>Support client 24/7</li>
          <li>Analyse de données</li>
        </ul>
        <a href="#" className="zx-link">En savoir plus →</a>
      </div>
    </div>
  </div>
</section>
```

---

### 4. **PRICING SECTION** (Tarifs)

```tsx
<section className="zx-sec">
  <div className="zx-wrap">
    <div className="zx-kicker">TARIFS TRANSPARENTS</div>
    <h2 className="zx-h2">Choisissez votre plan</h2>
    <p className="zx-lead">
      Pas de frais cachés. Annulez à tout moment.
    </p>
    
    {/* Grid de pricing cards */}
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
          <li>SLA garanti</li>
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
```

---

### 5. **TESTIMONIALS** (Témoignages)

```tsx
<section className="zx-sec">
  <div className="zx-wrap">
    <div className="zx-kicker">TÉMOIGNAGES</div>
    <h2 className="zx-h2">Ce que disent nos clients</h2>
    
    <div className="zx-cards">
      {/* Témoignage 1 */}
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
          gèrent 80% des demandes automatiquement, et notre équipe 
          peut se concentrer sur les cas complexes."
        </p>
        <div className="zx-results">
          <div>📈 +150% de productivité</div>
          <div>⏱️ -60% de temps de réponse</div>
          <div>😊 98% de satisfaction client</div>
        </div>
      </div>

      {/* Témoignage 2 */}
      <div className="zx-card">
        <div className="zx-stars">★★★★★</div>
        <div className="zx-author">
          <div className="zx-avatar">JD</div>
          <div>
            <b>Jean Dupont</b>
            <small>Directeur Marketing, E-Shop Pro</small>
          </div>
        </div>
        <p className="zx-quote">
          "Le micro-agent e-commerce a doublé notre taux de conversion. 
          L'installation a pris 10 jours et le ROI était positif dès 
          le premier mois."
        </p>
        <div className="zx-results">
          <div>💰 +120% de revenus</div>
          <div>🛒 +85% de taux de conversion</div>
          <div>⚡ ROI en 30 jours</div>
        </div>
      </div>

      {/* Témoignage 3 */}
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
          "L'agent immobilier IA qualifie nos leads 24/7 et prend les 
          rendez-vous automatiquement. Nous avons triplé notre volume 
          de visites sans embaucher."
        </p>
        <div className="zx-results">
          <div>📅 +200% de rendez-vous</div>
          <div>🎯 90% de leads qualifiés</div>
          <div>💼 -50% de coûts opérationnels</div>
        </div>
      </div>
    </div>
  </div>
</section>
```

---

### 6. **FAQ SECTION**

```tsx
<section className="zx-sec">
  <div className="zx-wrap">
    <div className="zx-kicker">FAQ</div>
    <h2 className="zx-h2">Questions fréquentes</h2>
    
    <div className="zx-faq">
      <details>
        <summary>Combien de temps prend le déploiement ?</summary>
        <p>
          Le déploiement complet prend entre 7 et 15 jours selon la 
          complexité de votre projet. Nous commençons par une phase 
          de découverte (2-3 jours), suivie de la configuration (3-5 jours), 
          des tests (2-3 jours) et de la formation de votre équipe (2-4 jours).
        </p>
      </details>

      <details>
        <summary>Quelles langues sont supportées ?</summary>
        <p>
          Nos agents IA supportent plus de 50 langues, incluant :
        </p>
        <ul>
          <li>Français, Anglais, Espagnol, Portugais</li>
          <li>Allemand, Italien, Néerlandais</li>
          <li>Arabe, Chinois, Japonais, Coréen</li>
          <li>Et bien d'autres...</li>
        </ul>
      </details>

      <details>
        <summary>Puis-je changer de plan à tout moment ?</summary>
        <p>
          Oui, absolument ! Vous pouvez upgrader ou downgrader votre plan 
          à tout moment. Les changements prennent effet immédiatement et 
          nous calculons le prorata pour la facturation.
        </p>
      </details>

      <details>
        <summary>Offrez-vous une garantie de remboursement ?</summary>
        <p>
          Oui, nous offrons une garantie satisfait ou remboursé de 30 jours 
          sur tous nos plans. Si vous n'êtes pas satisfait, nous vous 
          remboursons intégralement, sans poser de questions.
        </p>
      </details>

      <details>
        <summary>Comment fonctionne le support technique ?</summary>
        <p>
          Le support varie selon votre plan :
        </p>
        <ul>
          <li><strong>Starter :</strong> Support email (réponse sous 24h)</li>
          <li><strong>Pro :</strong> Support prioritaire 24/7 (chat + email)</li>
          <li><strong>Enterprise :</strong> Support dédié + gestionnaire de compte</li>
        </ul>
      </details>

      <details>
        <summary>Mes données sont-elles sécurisées ?</summary>
        <p>
          Absolument. Nous utilisons un chiffrement de niveau bancaire 
          (AES-256), nos serveurs sont certifiés SOC 2 et ISO 27001, et 
          nous sommes conformes au RGPD. Vos données ne sont jamais 
          partagées avec des tiers.
        </p>
      </details>
    </div>

    {/* CTA dans la FAQ */}
    <div className="zx-faq-cta">
      <p>Vous avez d'autres questions ?</p>
      <a href="#contact">Contactez notre équipe →</a>
    </div>
  </div>
</section>
```

---

### 7. **TRUST ZONE** (Logos partenaires, certifications)

```tsx
<section className="zx-sec">
  <div className="zx-wrap">
    <div className="zx-kicker">ILS NOUS FONT CONFIANCE</div>
    <h2 className="zx-h2">Nos partenaires et certifications</h2>
    
    <div className="zx-tz">
      <a href="#">
        <h3>🏆 Certifié ISO 27001</h3>
        <p>Sécurité de l'information</p>
        <em>Certification internationale</em>
      </a>

      <a href="#">
        <h3>🔒 Conforme RGPD</h3>
        <p>Protection des données</p>
        <em>Union Européenne</em>
      </a>

      <a href="#">
        <h3>☁️ AWS Partner</h3>
        <p>Infrastructure cloud</p>
        <em>Partenaire avancé</em>
      </a>

      <a href="#">
        <h3>⚡ Stripe Verified</h3>
        <p>Paiements sécurisés</p>
        <em>Partenaire vérifié</em>
      </a>
    </div>
  </div>
</section>
```

---

### 8. **CTA FINAL** (Call-to-Action de fin de page)

```tsx
<section className="zx-cta-final zx-sec">
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
```

---

### 9. **FOOTER COMPLET**

```tsx
<footer className="zx-footer">
  <div className="zx-wrap">
    {/* Grid principale */}
    <div className="zx-footer-grid">
      {/* Colonne 1 : À propos */}
      <div>
        <div className="zx-logo">
          Zyatr<span>IA</span>
        </div>
        <p>
          Agents IA et automatisation sans frontières. Transformez votre 
          entreprise avec l'intelligence artificielle.
        </p>
      </div>

      {/* Colonne 2 : Produits */}
      <div>
        <h4>Produits</h4>
        <ul>
          <li><a href="#agents">Agents IA</a></li>
          <li><a href="#automation">Automatisation</a></li>
          <li><a href="#micro-agents">Micro-Agents</a></li>
          <li><a href="#integrations">Intégrations</a></li>
        </ul>
      </div>

      {/* Colonne 3 : Entreprise */}
      <div>
        <h4>Entreprise</h4>
        <ul>
          <li><a href="#about">À propos</a></li>
          <li><a href="#careers">Carrières</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#press">Presse</a></li>
        </ul>
      </div>

      {/* Colonne 4 : Support */}
      <div>
        <h4>Support</h4>
        <ul>
          <li><a href="#help">Centre d'aide</a></li>
          <li><a href="#docs">Documentation</a></li>
          <li><a href="#api">API</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </div>

    {/* Contact */}
    <div className="zx-footer-contact">
      <p>
        📧 <a href="mailto:contact@zyatria.global">contact@zyatria.global</a>
        {' • '}
        📞 <a href="tel:+14388874507">+1 (438) 887-4507</a>
      </p>
    </div>

    {/* Copyright */}
    <div className="zx-copy">
      © 2024 ZyatrIA Global. Tous droits réservés.
      <br />
      <a href="#privacy">Politique de confidentialité</a>
      {' • '}
      <a href="#terms">Conditions d'utilisation</a>
      {' • '}
      <a href="#cookies">Cookies</a>
    </div>
  </div>
</footer>
```

---

## 🎯 EXEMPLE COMPLET : Page complète

```tsx
import React from 'react';

export default function ZXDemoPage() {
  return (
    <div className="zx">
      {/* NAVBAR */}
      <header className="zx-header">
        <nav className="zx-nav">
          <div className="zx-logo">Zyatr<span>IA</span></div>
          <div className="zx-nav-links">
            <a href="#services">Services</a>
            <a href="#pricing">Tarifs</a>
            <a href="#about">À propos</a>
          </div>
          <div className="zx-nav-right">
            <div className="zx-lang">
              <div className="zx-lang-current">🇫🇷 FR</div>
              <div className="zx-lang-menu">
                <a href="/en">🇬🇧 English</a>
                <a href="/es">🇪🇸 Español</a>
              </div>
            </div>
            <a href="#demo" className="zx-btn zx-btn-sm">Démo</a>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section className="zx-hero zx-sec">
        <div className="zx-wrap">
          <div className="zx-kicker">NOUVEAU • DÉPLOIEMENT EN 7-15 JOURS</div>
          <h1 className="zx-h1">
            Agents IA <span>Sans Frontières</span>
          </h1>
          <p className="zx-lead">
            Transformez votre entreprise avec des agents IA intelligents
          </p>
          <div className="zx-cta-row">
            <a href="#contact" className="zx-btn">Commencer</a>
            <a href="#demo" className="zx-btn zx-btn-ghost">Voir la démo</a>
          </div>
          <div className="zx-stats">
            <div><b>500+</b><small>Clients</small></div>
            <div><b>98%</b><small>Satisfaction</small></div>
            <div><b>7-15j</b><small>Déploiement</small></div>
            <div><b>24/7</b><small>Support</small></div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="zx-sec" id="services">
        <div className="zx-wrap">
          <div className="zx-kicker">NOS SERVICES</div>
          <h2 className="zx-h2">Solutions IA complètes</h2>
          <div className="zx-cards">
            <div className="zx-card">
              <div className="zx-tag">POPULAIRE</div>
              <h3>🤖 Agents IA</h3>
              <p>Automatisez vos processus</p>
              <ul>
                <li>Traitement du langage naturel</li>
                <li>Apprentissage continu</li>
                <li>Support multilingue</li>
              </ul>
            </div>
            <div className="zx-card">
              <h3>⚡ Automatisation</h3>
              <p>Workflows intelligents</p>
              <ul>
                <li>Workflows personnalisables</li>
                <li>Intégrations API</li>
                <li>Rapports temps réel</li>
              </ul>
            </div>
            <div className="zx-card">
              <h3>🎯 Micro-Agents</h3>
              <p>Agents spécialisés</p>
              <ul>
                <li>Qualification de leads</li>
                <li>Support client 24/7</li>
                <li>Analyse de données</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="zx-sec" id="pricing">
        <div className="zx-wrap">
          <div className="zx-kicker">TARIFS</div>
          <h2 className="zx-h2">Choisissez votre plan</h2>
          <div className="zx-cards zx-plans">
            <div className="zx-card">
              <div className="zx-tag">STARTER</div>
              <div className="zx-price">$99 <small>/mois</small></div>
              <ul>
                <li>2 agents IA</li>
                <li>1 000 interactions/mois</li>
                <li>Support email</li>
              </ul>
              <a href="#" className="zx-btn zx-btn-ghost">Commencer</a>
            </div>
            <div className="zx-card zx-reco">
              <div className="zx-reco-tag">⭐ RECOMMANDÉ</div>
              <div className="zx-tag">PRO</div>
              <div className="zx-price">
                <s>$299</s> $199 <small>/mois</small>
              </div>
              <ul>
                <li>5 agents IA</li>
                <li>10 000 interactions/mois</li>
                <li>Support 24/7</li>
              </ul>
              <a href="#" className="zx-btn">Choisir Pro</a>
            </div>
            <div className="zx-card">
              <div className="zx-tag">ENTERPRISE</div>
              <div className="zx-price">Sur mesure</div>
              <ul>
                <li>Agents illimités</li>
                <li>Support dédié</li>
                <li>SLA garanti</li>
              </ul>
              <a href="#" className="zx-btn zx-btn-ghost">Contact</a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="zx-cta-final zx-sec">
        <div className="zx-wrap">
          <h2 className="zx-h2">Prêt à transformer votre entreprise ?</h2>
          <p className="zx-lead">
            Rejoignez plus de 500 entreprises
          </p>
          <div className="zx-cta-row">
            <a href="#contact" className="zx-btn">Démarrer</a>
            <a href="#demo" className="zx-btn zx-btn-ghost">Démo</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="zx-footer">
        <div className="zx-wrap">
          <div className="zx-footer-grid">
            <div>
              <div className="zx-logo">Zyatr<span>IA</span></div>
              <p>Agents IA sans frontières</p>
            </div>
            <div>
              <h4>Produits</h4>
              <ul>
                <li><a href="#">Agents IA</a></li>
                <li><a href="#">Automatisation</a></li>
              </ul>
            </div>
            <div>
              <h4>Entreprise</h4>
              <ul>
                <li><a href="#">À propos</a></li>
                <li><a href="#">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4>Support</h4>
              <ul>
                <li><a href="#">Aide</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="zx-copy">
            © 2024 ZyatrIA Global
          </div>
        </div>
      </footer>
    </div>
  );
}
```

---

## 📱 Responsive Design

Le système est **mobile-first** et s'adapte automatiquement :

```css
/* Breakpoint : 800px */
@media (max-width: 800px) {
  - Sections : padding réduit (60px au lieu de 88px)
  - Hero : padding-top réduit (90px au lieu de 130px)
  - Footer : grid 2 colonnes au lieu de 4
  - Navbar : liens cachés (à remplacer par menu burger)
}
```

---

## 🎨 Personnalisation rapide

### Changer la couleur principale

```css
/* Dans zx-styles.css, remplacez #635bff par votre couleur */
.zx-btn {
  background: #YOUR_COLOR;
}

.zx-tag {
  color: #YOUR_COLOR;
}

/* etc. */
```

### Changer les fonts

```css
.zx {
  font-family: 'Votre Font', sans-serif;
}
```

---

## ✅ Checklist d'utilisation

- [ ] Fichier `zx-styles.css` créé
- [ ] Import ajouté dans `global.css`
- [ ] Tester la navbar sticky
- [ ] Tester les cards hover
- [ ] Tester le responsive (< 800px)
- [ ] Vérifier les couleurs
- [ ] Tester les boutons CTA
- [ ] Vérifier le footer

---

## 🚀 Prochaines étapes

1. **Copier ce guide** dans votre notebook
2. **Tester les composants** un par un
3. **Personnaliser les couleurs** selon votre charte
4. **Créer vos pages** avec ces composants

---

## 💡 Conseils Pro

1. **Utilisez toujours `.zx-wrap`** pour centrer le contenu
2. **Alternez `.zx-sec`** pour les backgrounds alternés
3. **Combinez les classes** : `.zx-btn.zx-btn-ghost.zx-btn-sm`
4. **Testez sur mobile** régulièrement
5. **Gardez la cohérence** des espacements

---

## 📞 Support

Si vous avez des questions sur l'utilisation de ce système :
- Consultez les exemples ci-dessus
- Testez dans votre navigateur
- Ajustez selon vos besoins

---

**Créé pour ZyatrIA Global** • Version 1.0 • Janvier 2025
