# 🚀 GUIDE COMPLET - DÉPLOIEMENT ZYATRIA GLOBAL

## 📋 TABLE DES MATIÈRES

1. [Tester en Local](#1-tester-en-local)
2. [Pousser sur GitHub](#2-pousser-sur-github)
3. [Déployer sur Cloudflare Pages](#3-déployer-sur-cloudflare-pages)
4. [Configuration Post-Déploiement](#4-configuration-post-déploiement)
5. [Dépannage](#5-dépannage)

---

## 1️⃣ TESTER EN LOCAL

### Prérequis
- Node.js 18+ installé
- Terminal (PowerShell, CMD, ou Git Bash)

### Étapes

#### A. Installation des dépendances
```bash
npm install
```

#### B. Lancer le serveur de développement
```bash
npm run dev
```

#### C. Accéder au site
Ouvrez votre navigateur : **http://localhost:4321**

### ✅ Checklist de test local

- [ ] La page d'accueil se charge correctement
- [ ] La navigation fonctionne (tous les liens)
- [ ] Les formulaires s'affichent (Contact, Demo, etc.)
- [ ] Les animations sont fluides
- [ ] Le design responsive fonctionne (mobile/desktop)
- [ ] Les micro-agents s'affichent correctement
- [ ] Le calculateur ROI fonctionne
- [ ] Les sections de pricing sont visibles

### 🛑 Arrêter le serveur
Appuyez sur `Ctrl + C` dans le terminal

---

## 2️⃣ POUSSER SUR GITHUB

### Option A : Script Automatique (Recommandé)

#### Windows (PowerShell)
```powershell
.\push-to-github.ps1
```

#### Mac/Linux
```bash
chmod +x push-to-github.sh
./push-to-github.sh
```

### Option B : Commandes Manuelles

#### 1. Initialiser Git (si pas déjà fait)
```bash
git init
git branch -M main
```

#### 2. Créer un dépôt sur GitHub
1. Allez sur https://github.com/new
2. Nom du dépôt : `zyatria-global`
3. **NE PAS** cocher "Initialize with README"
4. Cliquez sur "Create repository"

#### 3. Ajouter et pousser le code
```bash
# Ajouter tous les fichiers
git add .

# Créer un commit
git commit -m "🚀 Initial commit - ZyatrIA Global site complet"

# Lier au dépôt GitHub (remplacez VOTRE-USERNAME)
git remote add origin https://github.com/VOTRE-USERNAME/zyatria-global.git

# Pousser le code
git push -u origin main
```

### 🔐 Authentification GitHub

Si demandé, utilisez un **Personal Access Token** :

1. Allez sur : https://github.com/settings/tokens
2. Cliquez sur "Generate new token (classic)"
3. Cochez : `repo` (accès complet)
4. Générez et copiez le token
5. Utilisez-le comme mot de passe lors du push

### ✅ Vérification
Allez sur `https://github.com/VOTRE-USERNAME/zyatria-global` pour voir votre code

---

## 3️⃣ DÉPLOYER SUR CLOUDFLARE PAGES

### Prérequis
- Compte Cloudflare (gratuit) : https://dash.cloudflare.com/sign-up
- Code poussé sur GitHub

### Étapes de déploiement

#### 1. Accéder à Cloudflare Pages
1. Connectez-vous à https://dash.cloudflare.com
2. Dans le menu latéral : **Workers & Pages**
3. Cliquez sur **Create application**
4. Onglet **Pages** → **Connect to Git**

#### 2. Connecter GitHub
1. Cliquez sur **Connect GitHub**
2. Autorisez Cloudflare à accéder à vos dépôts
3. Sélectionnez le dépôt `zyatria-global`

#### 3. Configuration du build

```yaml
Project name: zyatria-global
Production branch: main
Build command: npm run build
Build output directory: dist
Root directory: /
```

#### 4. Variables d'environnement (Important !)

Cliquez sur **Add variable** et ajoutez :

| Variable | Valeur | Description |
|----------|--------|-------------|
| `NODE_VERSION` | `18` | Version de Node.js |
| `FORMSPREE_FORM_ID` | `votre-form-id` | ID Formspree (optionnel) |
| `STRIPE_PUBLISHABLE_KEY` | `pk_live_...` | Clé Stripe (optionnel) |

> **Note** : Les variables Formspree et Stripe sont optionnelles pour le déploiement initial

#### 5. Déployer
1. Cliquez sur **Save and Deploy**
2. Attendez 2-5 minutes (première fois)
3. Votre site sera disponible sur : `https://zyatria-global.pages.dev`

### 🎯 Domaine personnalisé (Optionnel)

#### Si vous avez un domaine (ex: zyatria.com)

1. Dans Cloudflare Pages → **Custom domains**
2. Cliquez sur **Set up a custom domain**
3. Entrez votre domaine : `zyatria.com` ou `www.zyatria.com`
4. Suivez les instructions DNS

---

## 4️⃣ CONFIGURATION POST-DÉPLOIEMENT

### A. Configurer Formspree (Formulaires)

#### 1. Créer un compte Formspree
- Allez sur : https://formspree.io/register
- Plan gratuit : 50 soumissions/mois

#### 2. Créer un formulaire
1. Dashboard → **New Form**
2. Nom : `ZyatrIA Contact`
3. Copiez le **Form ID** (ex: `xyzabc123`)

#### 3. Mettre à jour le code
Éditez `src/config/formspree.ts` :
```typescript
export const FORMSPREE_FORM_ID = 'xyzabc123'; // Votre Form ID
```

#### 4. Redéployer
```bash
git add .
git commit -m "✉️ Configure Formspree"
git push
```

Cloudflare redéploiera automatiquement (1-2 min)

### B. Configurer Stripe (Paiements)

#### 1. Créer un compte Stripe
- Allez sur : https://dashboard.stripe.com/register

#### 2. Créer des Payment Links
1. Dashboard → **Payment Links**
2. Créez 3 liens pour :
   - **Starter** : $997/mois
   - **Professional** : $2,497/mois
   - **Enterprise** : $4,997/mois

#### 3. Mettre à jour le code
Éditez `src/config/stripe-links.ts` :
```typescript
export const STRIPE_PAYMENT_LINKS = {
  starter: 'https://buy.stripe.com/test_xxxxx',
  professional: 'https://buy.stripe.com/test_yyyyy',
  enterprise: 'https://buy.stripe.com/test_zzzzz',
};
```

#### 4. Redéployer
```bash
git add .
git commit -m "💳 Configure Stripe payment links"
git push
```

### C. Tester les formulaires et paiements

#### Formulaires
1. Allez sur votre site déployé
2. Remplissez le formulaire de contact
3. Vérifiez la réception dans Formspree Dashboard

#### Paiements (Mode Test)
1. Cliquez sur un bouton "Get Started"
2. Utilisez la carte test : `4242 4242 4242 4242`
3. Date : n'importe quelle date future
4. CVC : n'importe quel 3 chiffres

---

## 5️⃣ DÉPANNAGE

### Problème : Build échoue sur Cloudflare

#### Solution 1 : Vérifier Node.js version
```bash
# Dans Cloudflare Pages → Settings → Environment variables
NODE_VERSION = 18
```

#### Solution 2 : Vérifier les dépendances
```bash
# En local
npm install
npm run build
```

Si ça fonctionne en local, le problème vient de Cloudflare.

#### Solution 3 : Logs de build
1. Cloudflare Pages → Votre projet
2. Onglet **Deployments**
3. Cliquez sur le déploiement échoué
4. Consultez les logs pour l'erreur exacte

### Problème : Site déployé mais page blanche

#### Solution : Vérifier le chemin de base
Éditez `astro.config.mjs` :
```javascript
export default defineConfig({
  site: 'https://zyatria-global.pages.dev',
  base: '/', // Doit être '/' pour Cloudflare Pages
});
```

### Problème : Formulaires ne fonctionnent pas

#### Checklist :
- [ ] `FORMSPREE_FORM_ID` est correct dans `src/config/formspree.ts`
- [ ] Le formulaire est activé dans Formspree Dashboard
- [ ] Le site est redéployé après modification
- [ ] Pas d'erreurs dans la console du navigateur (F12)

### Problème : Paiements Stripe ne fonctionnent pas

#### Checklist :
- [ ] Les Payment Links sont corrects dans `src/config/stripe-links.ts`
- [ ] Les liens Stripe sont actifs (Dashboard Stripe)
- [ ] Mode Test activé pour les tests
- [ ] Mode Live activé pour la production

### Problème : Git push échoue

#### Solution 1 : Authentification
```bash
# Utiliser un Personal Access Token
# Voir section "Authentification GitHub" ci-dessus
```

#### Solution 2 : Remote existe déjà
```bash
# Supprimer et recréer
git remote remove origin
git remote add origin https://github.com/VOTRE-USERNAME/zyatria-global.git
git push -u origin main
```

### Problème : npm install échoue

#### Solution 1 : Nettoyer le cache
```bash
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

#### Solution 2 : Vérifier Node.js version
```bash
node --version
# Doit être 18.x ou supérieur
```

Si version incorrecte, téléchargez Node.js 18+ : https://nodejs.org

---

## 📊 RÉCAPITULATIF DES COMMANDES

### Développement local
```bash
npm install          # Installer les dépendances
npm run dev          # Lancer le serveur local
npm run build        # Build de production (test)
```

### Git & GitHub
```bash
git add .                                    # Ajouter les fichiers
git commit -m "Message"                      # Créer un commit
git push                                     # Pousser sur GitHub
git remote add origin https://github.com/... # Lier au dépôt
```

### Cloudflare
- Déploiement automatique à chaque `git push`
- Logs : Cloudflare Dashboard → Deployments
- Variables : Settings → Environment variables

---

## 🎯 WORKFLOW RECOMMANDÉ

### 1. Développement
```bash
# Faire des modifications
npm run dev          # Tester en local
```

### 2. Validation
```bash
npm run build        # Vérifier que le build fonctionne
```

### 3. Déploiement
```bash
git add .
git commit -m "Description des changements"
git push
```

### 4. Vérification
- Attendez 1-2 minutes
- Vérifiez sur `https://zyatria-global.pages.dev`
- Testez les fonctionnalités modifiées

---

## 📞 SUPPORT

### Ressources officielles
- **Astro** : https://docs.astro.build
- **Cloudflare Pages** : https://developers.cloudflare.com/pages
- **Formspree** : https://help.formspree.io
- **Stripe** : https://stripe.com/docs

### Fichiers de configuration importants
- `astro.config.mjs` - Configuration Astro
- `wrangler.jsonc` - Configuration Cloudflare
- `src/config/formspree.ts` - Configuration formulaires
- `src/config/stripe-links.ts` - Configuration paiements
- `package.json` - Dépendances et scripts

---

## ✅ CHECKLIST FINALE

### Avant le lancement en production

- [ ] Site testé en local (toutes les pages)
- [ ] Code poussé sur GitHub
- [ ] Déployé sur Cloudflare Pages
- [ ] Formspree configuré et testé
- [ ] Stripe configuré (mode Live)
- [ ] Domaine personnalisé configuré (optionnel)
- [ ] SSL/HTTPS actif (automatique avec Cloudflare)
- [ ] Tests sur mobile et desktop
- [ ] Tous les liens fonctionnent
- [ ] Images et assets chargent correctement
- [ ] Performance vérifiée (PageSpeed Insights)
- [ ] SEO vérifié (balises meta, sitemap)

---

## 🎉 FÉLICITATIONS !

Votre site ZyatrIA Global est maintenant en ligne et prêt à convertir des clients !

### Prochaines étapes suggérées :
1. **Analytics** : Ajouter Google Analytics ou Plausible
2. **Monitoring** : Configurer des alertes Cloudflare
3. **SEO** : Soumettre le sitemap à Google Search Console
4. **Marketing** : Lancer des campagnes publicitaires
5. **Contenu** : Créer des articles de blog (section à ajouter)

---

**Dernière mise à jour** : Janvier 2025  
**Version** : 2.0  
**Auteur** : ZyatrIA Global Team
