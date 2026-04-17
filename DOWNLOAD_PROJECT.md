# 📦 Télécharger Votre Projet ZyatrIA Global

## ✅ Version Actuelle : v2.0 - Couleurs Optimisées

### 🎨 Nouveautés de cette Version
- ✅ **Couleurs adoucies** - Liens "demo" en bleu doux (#60A5FA) au lieu de gris foncé
- ✅ **Meilleur confort visuel** - Moins de fatigue oculaire
- ✅ **Design moderne** - Palette harmonieuse bleu/violet/cyan
- ✅ **Build vérifié** - Aucune erreur TypeScript

---

## 📥 Option 1 : Télécharger l'Archive Complète

### Fichier Disponible
```
zyatria-global-complete.tar.gz
Taille : 5.6 MB
Contenu : Projet complet (code source, config, docs)
```

### Comment Télécharger

#### Via Interface Webflow
1. Cliquez sur l'icône **📁** en haut à droite
2. Recherchez le fichier **zyatria-global-complete.tar.gz**
3. Clic droit → Télécharger

#### Via Terminal (si accès SSH)
```bash
# Télécharger avec SCP
scp user@server:/app/zyatria-global-complete.tar.gz ./

# Ou via wget/curl si URL disponible
wget https://votre-url.com/zyatria-global-complete.tar.gz
```

---

## 📦 Option 2 : Créer une Nouvelle Archive

Si vous voulez créer votre propre archive mise à jour :

```bash
# Dans le terminal
cd /app

# Créer l'archive (exclut node_modules, dist, etc.)
tar -czf zyatria-project.tar.gz \
  --exclude='node_modules' \
  --exclude='.git' \
  --exclude='dist' \
  --exclude='.astro' \
  --exclude='*.tar.gz' \
  --exclude='ZYATRIA_EXPORT' \
  .

# Vérifier la taille
ls -lh zyatria-project.tar.gz
```

---

## 📤 Option 3 : Pousser sur GitHub (Recommandé)

### Pourquoi GitHub ?
- ✅ **Versioning** - Historique complet des modifications
- ✅ **Collaboration** - Travail en équipe facilité
- ✅ **Backup** - Sauvegarde automatique dans le cloud
- ✅ **CI/CD** - Déploiement automatique avec Cloudflare Pages

### Étapes Rapides

#### 1. Créer un Repo GitHub
1. Allez sur https://github.com/new
2. Nom du repo : `zyatria-global`
3. Visibilité : **Private** (recommandé)
4. Ne pas initialiser avec README (déjà existant)
5. Cliquez sur **Create repository**

#### 2. Connecter et Pousser le Code

```bash
cd /app

# Initialiser git (si pas déjà fait)
git init

# Ajouter le remote GitHub
git remote add origin https://github.com/VOTRE_USERNAME/zyatria-global.git

# Vérifier les fichiers
git status

# Ajouter tous les fichiers
git add .

# Commit initial
git commit -m "🎨 Version 2.0 - Couleurs optimisées + site complet"

# Pousser sur GitHub
git branch -M main
git push -u origin main
```

#### 3. Vérifier
1. Actualisez votre page GitHub
2. Tous vos fichiers doivent être visibles
3. Le README.md doit s'afficher automatiquement

---

## 🚀 Option 4 : Déployer Directement

### Via Cloudflare Pages (Recommandé)

#### À partir de GitHub
1. Allez sur https://dash.cloudflare.com/
2. **Pages** → **Create a project** → **Connect to Git**
3. Sélectionnez votre repo GitHub `zyatria-global`
4. Configuration automatique détectée (Astro)
5. Build command : `npm run build`
6. Output directory : `dist`
7. Cliquez sur **Save and Deploy**

✅ **Déploiement automatique** à chaque push sur `main` !

#### Configuration Build
```yaml
Build command: npm run build
Output directory: dist
Root directory: /
Build system: v2
Node version: 18 ou 20
```

---

## 📂 Structure de l'Archive

```
zyatria-global-complete.tar.gz
│
├── src/
│   ├── components/          # Composants React
│   │   ├── Hero.tsx
│   │   ├── Pricing.tsx      # ← Couleurs optimisées !
│   │   ├── MicroAgents.tsx
│   │   └── ...
│   ├── pages/               # Pages Astro
│   ├── layouts/             # Layouts
│   ├── styles/              # CSS global
│   └── config/              # Configuration
│
├── public/                  # Assets statiques
├── generated/               # CSS/Fonts Webflow
│
├── package.json             # Dépendances
├── astro.config.mjs         # Config Astro
├── tsconfig.json            # Config TypeScript
├── wrangler.jsonc           # Config Cloudflare
│
├── README.md                # Documentation principale
├── COULEURS_ADOUCIES.md     # ← Nouveau : Guide couleurs
├── DEPLOYMENT_GUIDE.md      # Guide de déploiement
├── STRIPE_INTEGRATION_COMPLETE.md
├── ✅_TOUT_EST_PRET.md
└── ...
```

---

## 🔧 Après Téléchargement

### 1. Extraire l'Archive

```bash
# Sur Linux/Mac
tar -xzf zyatria-global-complete.tar.gz

# Sur Windows (avec 7-Zip ou WinRAR)
# Clic droit → Extraire ici
```

### 2. Installer les Dépendances

```bash
cd zyatria-global-complete
npm install
```

### 3. Configurer les Variables d'Environnement

```bash
# Copier le template
cp .env.example .env

# Éditer avec vos valeurs
nano .env
```

Ajouter :
```env
# Formspree (Contact)
PUBLIC_FORMSPREE_FORM_ID=votre_id_formspree

# Stripe (Paiements)
PUBLIC_STRIPE_STARTER_LINK=https://buy.stripe.com/...
PUBLIC_STRIPE_BUSINESS_LINK=https://buy.stripe.com/...
PUBLIC_STRIPE_ENTERPRISE_LINK=https://buy.stripe.com/...
```

### 4. Lancer en Local

```bash
npm run dev
```

Ouvrez http://localhost:3000

### 5. Builder pour Production

```bash
npm run build
```

---

## ✅ Checklist Avant Déploiement

- [ ] **Variables d'environnement** configurées (.env)
- [ ] **Formspree** configuré (formulaire de contact)
- [ ] **Stripe** configuré (liens de paiement)
- [ ] **Build** réussi sans erreurs (`npm run build`)
- [ ] **Tests locaux** effectués (http://localhost:3000)
- [ ] **Images OG** personnalisées (public/og-image-*.svg)
- [ ] **Favicon** personnalisé (public/favicon.svg)
- [ ] **GitHub** configuré (repo créé et code poussé)
- [ ] **Cloudflare Pages** connecté à GitHub
- [ ] **Domaine personnalisé** configuré (optionnel)

---

## 🆘 Besoin d'Aide ?

### Documentation Complète
- 📖 **README.md** - Documentation principale
- 🚀 **DEPLOYMENT_GUIDE.md** - Guide de déploiement détaillé
- 💳 **STRIPE_INTEGRATION_COMPLETE.md** - Configuration Stripe
- 📧 **FORMSPREE_QUICK_START.md** - Configuration email
- 🎨 **COULEURS_ADOUCIES.md** - Guide des couleurs

### Support
- **GitHub Issues** : Ouvrez un ticket sur votre repo
- **Documentation Astro** : https://docs.astro.build/
- **Documentation Cloudflare** : https://developers.cloudflare.com/pages/
- **Documentation Stripe** : https://stripe.com/docs

---

## 🎯 Prochaines Étapes Recommandées

1. **Télécharger** l'archive ou pousser sur GitHub
2. **Configurer** Formspree + Stripe
3. **Déployer** sur Cloudflare Pages
4. **Personnaliser** images (OG, favicon, logos)
5. **Configurer** domaine personnalisé
6. **Tester** toutes les fonctionnalités
7. **Lancer** votre site ! 🚀

---

**Version actuelle : v2.0 - Couleurs Optimisées**
**Date : 1er mars 2026**
**Build Status : ✅ Vérifié et prêt**

🎉 **Votre site ZyatrIA Global est prêt à être déployé !**
