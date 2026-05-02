# 🤖 ZyatrIA Global - AI Agents & Automation Platform

> **Agents IA intelligents et automatisation avancée pour entreprises**  
> Déploiement rapide en 7-15 jours | Support multilingue | Sans frontières

---

## 🌟 À Propos

ZyatrIA Global est une plateforme complète d'agents IA et d'automatisation conçue pour transformer les entreprises avec :

- 🤖 **Micro-agents spécialisés** (immobilier, e-commerce, support client, etc.)
- ⚡ **Déploiement ultra-rapide** (7-15 jours)
- 🌍 **Support multilingue** (EN, FR, ES, PT)
- 🔗 **Intégrations avancées** (CRM, email, analytics)

---

## 🛠️ Technologies

- **Framework** : [Astro](https://astro.build) 5.x
- **UI** : React 19 + TypeScript
- **Styling** : Tailwind CSS 4 + shadcn/ui
- **Deployment** : Cloudflare Pages
- **Forms** : Formspree
- **Payments** : Stripe

---

## 🚀 Installation Locale

```bash
# Cloner le projet
git clone https://github.com/TON-USERNAME/zyatria-global.git
cd zyatria-global

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur : **http://localhost:3000**

---

## 📦 Build de Production

```bash
npm run build
```

Les fichiers optimisés seront dans le dossier `dist/`

---

## 🌐 Déploiement

### Déploiement sur Cloudflare Pages

1. **Pousse le code sur GitHub** (ce dépôt)
2. **Connecte-toi à Cloudflare** : https://dash.cloudflare.com
3. **Crée un nouveau projet Pages**
4. **Connecte ce dépôt GitHub**
5. **Configure le build** :
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Build output directory: `dist`
6. **Ajoute les variables d'environnement** :
   ```
   NODE_VERSION=20
   FORMSPREE_FORM_ID=xeelvrdl
   ```
7. **Déploie !** 🚀

Le site sera en ligne en 2-5 minutes avec HTTPS automatique et CDN mondial.

---

## 🔧 Configuration

### Formspree (Formulaire de Contact)

1. Crée un compte sur [Formspree](https://formspree.io)
2. Crée un nouveau formulaire
3. Copie ton Form ID
4. Configure dans `.env` :
   ```
   FORMSPREE_FORM_ID=ton-form-id
   ```

### Stripe (Paiements)

1. Configure tes produits dans [Stripe](https://stripe.com)
2. Crée des Payment Links pour chaque produit
3. Mets à jour `src/config/stripe-links.ts` avec tes liens

---

## 📁 Structure du Projet

```
/
├── src/
│   ├── components/       # Composants React
│   │   ├── ui/          # Composants shadcn/ui
│   │   └── pages/       # Composants de pages
│   ├── layouts/         # Layouts Astro
│   ├── pages/           # Pages du site
│   │   ├── index.astro  # Page d'accueil
│   │   ├── services.astro
│   │   ├── pricing.astro
│   │   └── ...
│   ├── config/          # Configuration
│   │   ├── formspree.ts
│   │   └── stripe-links.ts
│   └── styles/          # Styles globaux
├── public/              # Assets statiques
│   ├── favicon.svg
│   ├── og-image.svg
│   └── ...
└── generated/           # Fichiers générés par Webflow
```

---

## 🎨 Personnalisation

### Couleurs et Thème

Les variables CSS sont dans `generated/webflow.css` :
- `--_apps---colors--primary` : Couleur primaire (#C98769)
- `--_apps---colors--background` : Fond (#F5F1EB)
- Etc.

Tu peux override ces variables dans `src/styles/color-override.css`

### Polices

Les polices sont configurées dans `generated/fonts.css` :
- **Heading** : Instrument Sans
- **Body** : Instrument Sans
- **Button** : Instrument Sans

---

## 📧 Contact

- **Email** : zyatria.contact@gmail.com
- **Site** : https://zyatria.global (une fois déployé)

---

## 📄 Licence

© 2024-2026 ZyatrIA Global. Tous droits réservés.

---

## 🎯 Prochaines Étapes

Après déploiement :

1. ✅ Configure un domaine personnalisé
2. ✅ Teste tous les formulaires
3. ✅ Vérifie les liens Stripe
4. ✅ Active les analytics Cloudflare
5. ✅ Optimise les images si nécessaire

---

**🚀 Prêt à transformer ton business avec l'IA ? C'est parti !**
