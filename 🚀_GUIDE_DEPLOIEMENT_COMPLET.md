# 🚀 GUIDE DE DÉPLOIEMENT COMPLET - ZYATRIA GLOBAL

## ✅ Statut : Prêt pour le déploiement

Votre site est **100% prêt** à être mis en ligne !

---

## 🎯 CHOIX DE LA PLATEFORME

Vous avez 3 options (je recommande **Cloudflare Pages**) :

| Plateforme | Avantages | Prix | Recommandation |
|------------|-----------|------|----------------|
| **Cloudflare Pages** ⭐ | Très rapide, CDN mondial, gratuit | Gratuit | ⭐⭐⭐⭐⭐ |
| Vercel | Simple, bon pour Astro | Gratuit (limites) | ⭐⭐⭐⭐ |
| Netlify | Interface simple | Gratuit (limites) | ⭐⭐⭐ |

---

## 📦 OPTION 1 : CLOUDFLARE PAGES (Recommandé)

### Prérequis
- Compte Cloudflare (gratuit) : https://dash.cloudflare.com/sign-up
- Compte GitHub (pour connecter le repo)

### Méthode A : Déploiement Direct (Plus Rapide)

#### 1. Installer Wrangler (si pas déjà fait)
```bash
npm install -g wrangler
```

#### 2. Se connecter à Cloudflare
```bash
wrangler login
```
→ Une page web s'ouvrira pour vous connecter

#### 3. Créer le build de production
```bash
cd /app
npm run build
```

#### 4. Déployer sur Cloudflare Pages
```bash
npx wrangler pages deploy dist --project-name=zyatria-global
```

✅ **C'est tout !** Votre site sera en ligne en ~2 minutes !

---

### Méthode B : Via GitHub + Cloudflare (Déploiement Automatique)

#### 1. Créer un repo GitHub

**Sur GitHub.com :**
1. Aller sur https://github.com/new
2. Nom du repo : `zyatria-global`
3. Visibilité : Public ou Private
4. Cliquer "Create repository"

#### 2. Pousser le code sur GitHub

```bash
cd /app

# Initialiser git (si pas déjà fait)
git init

# Ajouter tous les fichiers
git add .

# Créer le commit
git commit -m "🚀 Initial commit - ZyatrIA Global ready for production"

# Ajouter le remote (remplacer VOTRE-USERNAME)
git remote add origin https://github.com/VOTRE-USERNAME/zyatria-global.git

# Pousser sur GitHub
git branch -M main
git push -u origin main
```

#### 3. Connecter à Cloudflare Pages

**Sur Cloudflare Dashboard :**
1. Aller sur https://dash.cloudflare.com
2. Cliquer "Workers & Pages" dans le menu
3. Cliquer "Create application"
4. Onglet "Pages" → "Connect to Git"
5. Sélectionner votre repo `zyatria-global`
6. Configuration :
   ```
   Framework preset: Astro
   Build command: npm run build
   Build output directory: dist
   ```
7. Cliquer "Save and Deploy"

✅ **Déploiement automatique activé !** Chaque push sur GitHub déploiera automatiquement.

---

## 🔐 CONFIGURER LES VARIABLES D'ENVIRONNEMENT

### Sur Cloudflare Pages

1. Aller dans votre projet Cloudflare Pages
2. Onglet "Settings" → "Environment variables"
3. Ajouter ces variables :

```bash
# Formspree
FORMSPREE_FORM_ID=xdkoqgqy

# Stripe (si vous utilisez les webhooks)
STRIPE_SECRET_KEY=sk_live_VOTRE_CLE_SECRETE
STRIPE_WEBHOOK_SECRET=whsec_VOTRE_SECRET_WEBHOOK

# Autres (optionnel)
PUBLIC_SITE_URL=https://zyatria.global
```

⚠️ **Important** : Ne jamais commiter les clés secrètes dans Git !

---

## 🌐 CONFIGURER LE DOMAINE PERSONNALISÉ

### Étape 1 : Acheter le domaine (si pas déjà fait)

Vous pouvez acheter `zyatria.global` sur :
- Cloudflare Registrar (recommandé) : https://www.cloudflare.com/products/registrar/
- Namecheap : https://www.namecheap.com
- Google Domains : https://domains.google
- OVH : https://www.ovh.com

**Prix estimé** : 10-15€/an

### Étape 2 : Ajouter le domaine sur Cloudflare

#### Si le domaine est chez Cloudflare :
1. Aller dans votre projet Pages
2. Onglet "Custom domains"
3. Cliquer "Set up a custom domain"
4. Entrer : `zyatria.global`
5. Cloudflare configure automatiquement les DNS ✅

#### Si le domaine est ailleurs :
1. Aller sur Cloudflare Dashboard
2. "Add a site" → Entrer `zyatria.global`
3. Choisir le plan Free
4. Cloudflare vous donnera 2 nameservers :
   ```
   exemple: 
   ns1.cloudflare.com
   ns2.cloudflare.com
   ```
5. Aller chez votre registrar (Namecheap, etc.)
6. Changer les nameservers pour ceux de Cloudflare
7. Attendre 24-48h pour la propagation DNS

### Étape 3 : Configurer le domaine dans Pages

1. Dans votre projet Cloudflare Pages
2. "Custom domains" → "Set up a custom domain"
3. Entrer : `zyatria.global`
4. Cloudflare créera automatiquement :
   - Certificat SSL (HTTPS) ✅
   - Redirection www → non-www ✅
   - CDN mondial ✅

---

## 📊 VÉRIFIER LE DÉPLOIEMENT

### 1. Tester l'URL temporaire
Après le déploiement, vous aurez une URL comme :
```
https://zyatria-global.pages.dev
```

### 2. Vérifier les pages
```
✅ https://zyatria-global.pages.dev/
✅ https://zyatria-global.pages.dev/pricing
✅ https://zyatria-global.pages.dev/services
✅ https://zyatria-global.pages.dev/micro-agents
✅ https://zyatria-global.pages.dev/demo
✅ https://zyatria-global.pages.dev/about
✅ https://zyatria-global.pages.dev/knowledge-base
```

### 3. Tester les fonctionnalités
- [ ] Navigation fonctionne
- [ ] Sélecteur de langue FR/EN
- [ ] Boutons Stripe redirigent correctement
- [ ] Formulaire Formspree envoie les emails
- [ ] Design responsive sur mobile

---

## 🔧 OPTION 2 : VERCEL (Alternative)

### 1. Installer Vercel CLI
```bash
npm install -g vercel
```

### 2. Se connecter
```bash
vercel login
```

### 3. Déployer
```bash
cd /app
vercel --prod
```

### 4. Configurer le domaine
```bash
vercel domains add zyatria.global
```

---

## 🔧 OPTION 3 : NETLIFY (Alternative)

### 1. Installer Netlify CLI
```bash
npm install -g netlify-cli
```

### 2. Se connecter
```bash
netlify login
```

### 3. Déployer
```bash
cd /app
netlify deploy --prod --dir=dist
```

### 4. Configurer le domaine
Dans le dashboard Netlify :
1. "Domain settings"
2. "Add custom domain"
3. Entrer `zyatria.global`

---

## 📋 CHECKLIST POST-DÉPLOIEMENT

### Immédiatement après le déploiement
- [ ] Site accessible sur l'URL temporaire
- [ ] Toutes les pages chargent (7/7)
- [ ] Navigation fonctionne
- [ ] Images s'affichent
- [ ] Formulaires fonctionnent

### Dans les 24-48h (si domaine personnalisé)
- [ ] DNS propagés
- [ ] HTTPS activé (certificat SSL)
- [ ] Redirection www → non-www
- [ ] Site accessible sur zyatria.global

### Tests fonctionnels
- [ ] Tester un paiement Stripe (mode test)
- [ ] Envoyer un formulaire de contact
- [ ] Vérifier les emails Formspree
- [ ] Tester sur mobile
- [ ] Tester sur différents navigateurs

---

## 🎯 PROCHAINES ÉTAPES (Optionnel)

### 1. Analytics
```bash
# Ajouter Google Analytics
# ou Plausible Analytics (privacy-friendly)
```

### 2. Monitoring
- Cloudflare Analytics (inclus gratuit)
- Sentry pour les erreurs
- Uptime monitoring

### 3. SEO
- Soumettre à Google Search Console
- Créer un sitemap.xml
- Configurer robots.txt

### 4. Performance
- Activer Cloudflare Cache
- Optimiser les images (WebP)
- Minifier CSS/JS (déjà fait par Astro)

---

## 🆘 DÉPANNAGE

### Erreur : "Build failed"
```bash
# Vérifier les logs
npm run build

# Vérifier les erreurs TypeScript
npx astro check
```

### Erreur : "Environment variables not found"
→ Configurer les variables dans Cloudflare Pages Settings

### Erreur : "Domain not resolving"
→ Attendre 24-48h pour la propagation DNS
→ Vérifier les nameservers chez votre registrar

### Site lent
→ Activer Cloudflare CDN
→ Optimiser les images
→ Vérifier le cache

---

## 📞 SUPPORT

### Documentation
- Cloudflare Pages : https://developers.cloudflare.com/pages
- Astro : https://docs.astro.build
- Stripe : https://stripe.com/docs

### Communauté
- Discord Astro : https://astro.build/chat
- Forum Cloudflare : https://community.cloudflare.com

---

## 🎊 RÉSUMÉ RAPIDE

### Pour déployer MAINTENANT (2 minutes) :

```bash
# 1. Build
npm run build

# 2. Deploy
npx wrangler pages deploy dist --project-name=zyatria-global

# 3. C'est en ligne ! 🎉
```

### Pour le domaine personnalisé (plus tard) :

1. Acheter `zyatria.global`
2. Ajouter sur Cloudflare
3. Configurer dans Pages → Custom domains
4. Attendre 24-48h

---

**Vous êtes prêt ! Quelle méthode voulez-vous utiliser ?** 🚀

1. **Cloudflare Direct** (le plus rapide - 2 min)
2. **GitHub + Cloudflare** (déploiement auto)
3. **Vercel** (alternative simple)
4. **Netlify** (alternative simple)

Dites-moi et je vous guide pas à pas ! 😊
