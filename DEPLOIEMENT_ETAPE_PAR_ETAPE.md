# 🚀 Déploiement ZyatrIA Global - Guide Complet

## ✅ Prérequis Vérifiés
- 12 pages Astro
- 26 composants React
- Configuration complète
- Assets (favicon, og-image)

---

## 📋 **ÉTAPE 1 : Créer un Compte GitHub** (5 min)

### Si tu n'as pas de compte GitHub :
1. Va sur https://github.com
2. Clique sur **"Sign up"**
3. Crée ton compte (gratuit)
4. Vérifie ton email

### Si tu as déjà un compte :
✅ Passe à l'étape 2

---

## 📋 **ÉTAPE 2 : Initialiser Git** (2 min)

### Ouvre un terminal dans le dossier du projet et exécute :

```bash
# Initialiser Git
git init

# Ajouter tous les fichiers
git add .

# Créer le premier commit
git commit -m "Initial commit - ZyatrIA Global site complet"
```

### ✅ Vérification :
```bash
git status
```
Tu devrais voir : `nothing to commit, working tree clean`

---

## 📋 **ÉTAPE 3 : Créer un Repo GitHub** (3 min)

### Option A : Via l'interface GitHub (Recommandé)
1. Va sur https://github.com/new
2. **Repository name** : `zyatria-global`
3. **Description** : `ZyatrIA Global - AI Agents & Automation Platform`
4. Choisis **Public** ou **Private**
5. **NE COCHE PAS** "Initialize with README"
6. Clique sur **"Create repository"**

### Option B : Via GitHub CLI (si installé)
```bash
gh repo create zyatria-global --public --source=. --remote=origin
```

---

## 📋 **ÉTAPE 4 : Pousser le Code sur GitHub** (2 min)

### Copie les commandes affichées sur GitHub, ou utilise :

```bash
# Ajouter le remote (remplace USERNAME par ton nom d'utilisateur GitHub)
git remote add origin https://github.com/USERNAME/zyatria-global.git

# Renommer la branche en main
git branch -M main

# Pousser le code
git push -u origin main
```

### ✅ Vérification :
Va sur `https://github.com/USERNAME/zyatria-global` - tu devrais voir tous tes fichiers !

---

## 📋 **ÉTAPE 5 : Créer un Compte Cloudflare** (3 min)

1. Va sur https://dash.cloudflare.com/sign-up
2. Crée ton compte (gratuit)
3. Vérifie ton email
4. Connecte-toi au dashboard

---

## 📋 **ÉTAPE 6 : Déployer sur Cloudflare Pages** (5 min)

### 1. Dans le Dashboard Cloudflare :
- Clique sur **"Workers & Pages"** dans le menu de gauche
- Clique sur **"Create application"**
- Sélectionne l'onglet **"Pages"**
- Clique sur **"Connect to Git"**

### 2. Connecter GitHub :
- Clique sur **"Connect GitHub"**
- Autorise Cloudflare à accéder à GitHub
- Sélectionne le repo **"zyatria-global"**
- Clique sur **"Begin setup"**

### 3. Configuration du Build :

**Project name** : `zyatria-global` (ou ce que tu veux)

**Production branch** : `main`

**Build settings** :
- **Framework preset** : `Astro`
- **Build command** : `npm run build`
- **Build output directory** : `dist`

**Environment variables** (optionnel pour l'instant) :
```
FORMSPREE_FORM_ID=xeelvrdl
```

### 4. Déployer :
- Clique sur **"Save and Deploy"**
- ⏳ Attends 2-3 minutes (le build se fait automatiquement)

---

## 📋 **ÉTAPE 7 : Vérifier le Déploiement** (2 min)

### Une fois le build terminé :
1. Tu verras un message **"Success! Your site is live!"**
2. Cloudflare te donne une URL : `https://zyatria-global.pages.dev`
3. Clique sur l'URL pour voir ton site en ligne ! 🎉

### ✅ Checklist de Vérification :
- [ ] La page d'accueil s'affiche
- [ ] Le changement de langue fonctionne (FR/EN)
- [ ] La navigation fonctionne
- [ ] Les images se chargent
- [ ] Le site est responsive (teste sur mobile)

---

## 📋 **ÉTAPE 8 : Configurer un Domaine Personnalisé** (Optionnel - 10 min)

### Si tu as un domaine (ex: zyatria.com) :

1. Dans Cloudflare Pages, va dans **"Custom domains"**
2. Clique sur **"Set up a custom domain"**
3. Entre ton domaine : `zyatria.com` ou `www.zyatria.com`
4. Suis les instructions pour configurer les DNS

### Si tu n'as pas de domaine :
- Tu peux utiliser l'URL Cloudflare : `https://zyatria-global.pages.dev`
- Ou acheter un domaine sur Cloudflare, Namecheap, GoDaddy, etc.

---

## 🎉 **FÉLICITATIONS !**

Ton site est maintenant en ligne ! 🚀

### 🔗 **Liens Utiles**

- **Site en ligne** : `https://zyatria-global.pages.dev`
- **Dashboard Cloudflare** : https://dash.cloudflare.com
- **Repo GitHub** : `https://github.com/USERNAME/zyatria-global`

---

## 🔄 **Mises à Jour Futures**

Pour mettre à jour le site :

```bash
# Faire des modifications dans le code
# ...

# Ajouter les changements
git add .

# Créer un commit
git commit -m "Description des changements"

# Pousser sur GitHub
git push

# Cloudflare redéploie automatiquement ! 🎉
```

---

## 🆘 **Besoin d'Aide ?**

### Problèmes courants :

**Build échoue sur Cloudflare :**
- Vérifie que `package.json` contient bien `"build": "astro build"`
- Vérifie que `astro.config.mjs` est correct

**Site blanc après déploiement :**
- Vérifie les logs de build dans Cloudflare
- Vérifie que `dist` est bien le dossier de sortie

**Images ne se chargent pas :**
- Vérifie que les images sont dans `public/`
- Vérifie les chemins (pas de `/` au début)

---

## 📞 **Support**

Si tu rencontres un problème, dis-moi et je t'aide ! 😄

---

**Prêt à déployer ? Commence par l'ÉTAPE 2 (Git) ! 🚀**
