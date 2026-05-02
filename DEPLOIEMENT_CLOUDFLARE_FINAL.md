# ☁️ DÉPLOIEMENT CLOUDFLARE - GUIDE COMPLET

## 🎯 **MÉTHODE RECOMMANDÉE: CLOUDFLARE PAGES via GITHUB**

---

## 📋 **PRÉ-REQUIS**

### **Vérifications avant déploiement:**
- [x] Build réussit localement (`npm run build`)
- [x] Formspree configuré (xeelvrdl)
- [x] Stripe links configurés (8 produits)
- [x] Pas d'erreurs TypeScript
- [x] Tests locaux OK

---

## 🚀 **ÉTAPE 1: CRÉER UN DÉPÔT GITHUB**

### **Option A: Depuis GitHub.com (Recommandé)**

1. **Aller sur GitHub:**
   ```
   https://github.com/new
   ```

2. **Créer le repository:**
   ```
   Repository name: zyatria-global
   Description: ZyatrIA Global - AI Agents Platform
   Visibility: Private (ou Public)
   ⚠️ NE PAS initialiser avec README/gitignore
   ```

3. **Cliquer "Create repository"**

4. **Copier l'URL du repo:**
   ```
   https://github.com/TON_USERNAME/zyatria-global.git
   ```

---

### **Option B: Via GitHub CLI (si installé)**

```bash
# Créer le repo directement
gh repo create zyatria-global --private --source=. --remote=origin --push
```

---

## 📤 **ÉTAPE 2: POUSSER LE CODE SUR GITHUB**

### **Depuis ton projet local:**

```bash
# 1. Initialiser Git (si pas déjà fait)
git init

# 2. Ajouter tous les fichiers
git add .

# 3. Premier commit
git commit -m "Initial commit - ZyatrIA Global site complet"

# 4. Ajouter le remote GitHub
git remote add origin https://github.com/TON_USERNAME/zyatria-global.git

# 5. Pousser le code
git push -u origin main
```

### **⚠️ En cas d'erreur "branch main doesn't exist":**

```bash
# Renommer la branche en main
git branch -M main

# Puis pousser
git push -u origin main
```

---

## ☁️ **ÉTAPE 3: CONNECTER À CLOUDFLARE PAGES**

### **1. Aller sur Cloudflare Dashboard:**
```
https://dash.cloudflare.com
```

### **2. Créer un nouveau projet Pages:**

1. **Cliquer sur "Workers & Pages"** (menu gauche)
2. **Cliquer "Create application"**
3. **Sélectionner "Pages"**
4. **Cliquer "Connect to Git"**

### **3. Connecter GitHub:**

1. **Sélectionner "GitHub"**
2. **Autoriser Cloudflare à accéder à GitHub**
3. **Sélectionner ton repository:** `zyatria-global`
4. **Cliquer "Begin setup"**

### **4. Configurer le build:**

```yaml
Project name: zyatria-global
Production branch: main

Build settings:
  Framework preset: Astro
  Build command: npm run build
  Build output directory: dist
  Root directory: /

Environment variables: (laisser vide pour l'instant)
```

### **5. Sauvegarder et déployer:**

1. **Cliquer "Save and Deploy"**
2. **Attendre le build (2-5 minutes)**
3. **Noter l'URL générée:** `https://zyatria-global.pages.dev`

---

## 🔧 **ÉTAPE 4: CONFIGURATION ENVIRONNEMENT**

### **Ajouter les variables d'environnement:**

1. **Dans Cloudflare Dashboard → Pages → zyatria-global**
2. **Aller dans "Settings" → "Environment variables"**
3. **Ajouter:**

```bash
# Production
FORMSPREE_FORM_ID = xeelvrdl
NODE_VERSION = 20
```

### **⚠️ Important:**
- Les liens Stripe sont déjà dans le code (pas besoin de variables)
- Formspree utilise l'ID public (pas de secret)

---

## 🌐 **ÉTAPE 5: DOMAINE PERSONNALISÉ (OPTIONNEL)**

### **Si tu as un domaine (ex: zyatria.com):**

1. **Dans Cloudflare Pages → Custom domains**
2. **Cliquer "Set up a custom domain"**
3. **Entrer ton domaine:** `zyatria.com`
4. **Suivre les instructions pour configurer les DNS**

### **Si ton domaine est déjà sur Cloudflare:**
- Configuration automatique ! 🎉

### **Si ton domaine est ailleurs:**
- Changer les nameservers vers Cloudflare
- Ou ajouter un CNAME record

---

## 📊 **VÉRIFICATIONS POST-DÉPLOIEMENT**

### **Checklist complète:**

```bash
# 1. Site accessible
✅ https://zyatria-global.pages.dev (ou ton domaine)

# 2. Pages fonctionnelles
✅ Page d'accueil
✅ /pricing
✅ /services
✅ /about
✅ /technology
✅ /micro-agents
✅ /docs
✅ /knowledge-base
✅ /demo
✅ /privacy
✅ /terms
✅ /success

# 3. Formulaires
✅ Contact form envoie emails
✅ Formspree button fonctionne
✅ Emails reçus sur zyatria.contact@gmail.com

# 4. Stripe
✅ Tous les boutons Stripe redirigent correctement
✅ Prix corrects affichés
✅ Checkout Stripe fonctionne

# 5. Performance
✅ Pas d'erreurs console
✅ Images chargent
✅ Navigation fluide
✅ Mobile responsive
```

---

## 🔄 **DÉPLOIEMENTS FUTURS**

### **Chaque modification:**

```bash
# 1. Modifier tes fichiers
# 2. Commit
git add .
git commit -m "Description des changements"

# 3. Push
git push

# 4. Cloudflare redéploie automatiquement ! 🚀
```

### **Rollback si problème:**

1. **Aller dans Cloudflare Pages → Deployments**
2. **Voir l'historique des déploiements**
3. **Cliquer "Rollback" sur un déploiement précédent**

---

## 🐛 **TROUBLESHOOTING**

### **Erreur: "Build failed"**

**Solution:**
```bash
# Vérifier le build local d'abord
npm run build

# Si ça marche localement, vérifier:
# - Node version dans Cloudflare (doit être 18+)
# - Variables d'environnement
```

### **Erreur: "Function not found"**

**Solution:**
- Vérifier que `wrangler.jsonc` est correct
- Vérifier `astro.config.mjs` a `@astrojs/cloudflare`

### **Site affiche blanc**

**Solution:**
```bash
# Vérifier console browser pour erreurs
# Vérifier que le build output est 'dist'
# Vérifier base path configuration
```

### **Formulaires ne fonctionnent pas**

**Solution:**
- Vérifier que Form ID est correct
- Tester manuellement: `https://formspree.io/f/xeelvrdl`
- Vérifier settings anti-spam Formspree

---

## 📈 **ANALYTICS & MONITORING**

### **Cloudflare Web Analytics (Gratuit):**

1. **Aller dans "Workers & Pages" → ton site**
2. **Onglet "Analytics"**
3. **Voir:**
   - Visiteurs
   - Page views
   - Temps de chargement
   - Géolocalisation

---

## 🎯 **COMMANDES UTILES**

### **Build local:**
```bash
npm run build
```

### **Preview local (simule Cloudflare):**
```bash
npm run preview
```

### **Test du site de prod:**
```bash
curl -I https://zyatria-global.pages.dev
```

### **Vérifier Git status:**
```bash
git status
git log --oneline -5
```

---

## 📚 **RESSOURCES**

### **Documentation:**
- Cloudflare Pages: https://developers.cloudflare.com/pages/
- Astro + Cloudflare: https://docs.astro.build/en/guides/deploy/cloudflare/
- GitHub: https://docs.github.com/en/get-started

### **Support:**
- Cloudflare Discord: https://discord.cloudflare.com
- Cloudflare Community: https://community.cloudflare.com

---

## ✅ **CHECKLIST FINALE AVANT LANCEMENT**

### **Technique:**
- [ ] Build réussit sans erreurs
- [ ] Toutes les pages accessibles
- [ ] Formulaires testés et fonctionnels
- [ ] Stripe testé (test mode)
- [ ] Responsive vérifié (mobile/tablet/desktop)
- [ ] Performance OK (Lighthouse > 90)

### **Contenu:**
- [ ] Tous les textes vérifiés
- [ ] Images optimisées
- [ ] SEO meta tags corrects
- [ ] Favicon présent
- [ ] OG image présent

### **Légal:**
- [ ] Privacy Policy complète
- [ ] Terms of Service complets
- [ ] Mentions légales si nécessaire

### **Business:**
- [ ] Stripe en LIVE mode (quand prêt)
- [ ] Email notifications testées
- [ ] Support email configuré
- [ ] Processus de suivi client défini

---

## 🚀 **PRÊT À DÉPLOYER ?**

### **Résumé des étapes:**

1. ✅ Créer repo GitHub
2. ✅ Pousser le code
3. ✅ Connecter Cloudflare Pages
4. ✅ Configurer le build
5. ✅ Ajouter variables d'environnement
6. ✅ Tester le site en production
7. ✅ (Optionnel) Configurer domaine personnalisé
8. 🎉 LANCEMENT !

---

**Date:** 2025-05-02
**Status:** Prêt pour déploiement
**Méthode:** Cloudflare Pages + GitHub
**Durée estimée:** 15-30 minutes
