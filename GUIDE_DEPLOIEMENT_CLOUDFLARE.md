# 🚀 GUIDE DE DÉPLOIEMENT CLOUDFLARE PAGES

## ✅ STATUT : Code prêt et committé sur Git

Ton code est maintenant prêt à être poussé sur GitHub et déployé sur Cloudflare !

---

## 📋 ÉTAPE 1 : CRÉER UN DÉPÔT GITHUB

### 1. Va sur GitHub
👉 https://github.com/new

### 2. Crée un nouveau dépôt
- **Nom du dépôt** : `zyatria-global` (ou ton choix)
- **Visibilité** : **Private** (recommandé pour les projets clients)
- **NE COCHE PAS** "Initialize this repository with:"
- Clique sur **"Create repository"**

### 3. Copie l'URL de ton dépôt
Tu vas voir une URL comme :
```
https://github.com/TON-USERNAME/zyatria-global.git
```

**Copie cette URL** (tu en auras besoin à l'étape suivante)

---

## 💻 ÉTAPE 2 : POUSSER LE CODE SUR GITHUB

### Option A : Depuis ton ordinateur

Si tu télécharges le projet sur ton ordinateur, exécute ces commandes dans le terminal :

```bash
# Navigue vers le dossier du projet
cd /chemin/vers/ton/projet

# Ajoute le dépôt distant (remplace par TON URL)
git remote add origin https://github.com/TON-USERNAME/zyatria-global.git

# Pousse le code
git branch -M main
git push -u origin main
```

### Option B : Depuis cette sandbox

Si tu veux pousser directement depuis ici, donne-moi ton URL GitHub et je le ferai pour toi.

**⚠️ IMPORTANT :** Tu auras besoin d'un **Personal Access Token** GitHub.

#### Comment créer un Personal Access Token :
1. Va sur : https://github.com/settings/tokens
2. Clique sur **"Generate new token"** → **"Generate new token (classic)"**
3. Donne-lui un nom : `zyatria-deploy`
4. Coche : **repo** (toutes les permissions)
5. Clique sur **"Generate token"**
6. **COPIE LE TOKEN** (tu ne le verras qu'une fois !)

---

## 🌐 ÉTAPE 3 : DÉPLOYER SUR CLOUDFLARE PAGES

### 1. Connecte-toi à Cloudflare
👉 https://dash.cloudflare.com/

### 2. Crée un nouveau projet Pages
- Clique sur **"Workers & Pages"** dans le menu de gauche
- Clique sur **"Create application"**
- Sélectionne **"Pages"**
- Clique sur **"Connect to Git"**

### 3. Connecte ton dépôt GitHub
- Autorise Cloudflare à accéder à ton GitHub
- Sélectionne le dépôt **`zyatria-global`**
- Clique sur **"Begin setup"**

### 4. Configure le build
Cloudflare devrait détecter automatiquement que c'est un projet Astro. Vérifie que :

```
Framework preset: Astro
Build command: npm run build
Build output directory: dist
```

**Variables d'environnement à ajouter :**

Clique sur **"Environment variables"** et ajoute :

| Nom de la variable | Valeur |
|-------------------|--------|
| `WEBFLOW_CMS_SITE_API_TOKEN` | (laisse vide pour l'instant si tu n'utilises pas CMS) |
| `FORMSPREE_FORM_ID` | `xeelvrdl` |
| `NODE_VERSION` | `20` |

### 5. Déploie !
- Clique sur **"Save and Deploy"**
- Attends 2-5 minutes (le temps du build)
- 🎉 **Ton site est en ligne !**

---

## 🔧 ÉTAPE 4 : CONFIGURER TON DOMAINE PERSONNALISÉ (optionnel)

### Si tu as un domaine (ex: zyatria.com)

1. Dans Cloudflare Pages, va dans ton projet
2. Clique sur **"Custom domains"**
3. Clique sur **"Set up a custom domain"**
4. Entre ton domaine : `zyatria.com` ou `www.zyatria.com`
5. Suis les instructions pour configurer le DNS

---

## 📧 ÉTAPE 5 : VÉRIFIER QUE TOUT FONCTIONNE

Une fois déployé, teste :

### ✅ Navigation
- [ ] Toutes les pages se chargent
- [ ] Les liens fonctionnent
- [ ] Le menu mobile fonctionne

### ✅ Formulaire de contact
- [ ] Le formulaire s'affiche
- [ ] Tu peux soumettre un message
- [ ] Tu reçois l'email sur `zyatria.contact@gmail.com`

### ✅ Stripe
- [ ] Les boutons "Acheter" fonctionnent
- [ ] Tu es redirigé vers Stripe
- [ ] Les bons prix s'affichent

### ✅ Performance
- [ ] Le site se charge rapidement
- [ ] Les images se chargent
- [ ] Pas d'erreurs dans la console

---

## 🔄 ÉTAPE 6 : DÉPLOIEMENTS FUTURS

Chaque fois que tu voudras mettre à jour le site :

```bash
# Fais tes modifications
# Puis :

git add .
git commit -m "Description des changements"
git push
```

**Cloudflare déploiera automatiquement** la nouvelle version en 2-5 minutes ! 🚀

---

## 🆘 DÉPANNAGE

### Erreur de build ?
- Vérifie que `NODE_VERSION` est bien à `20`
- Vérifie les logs de build dans Cloudflare

### Formulaire ne fonctionne pas ?
- Vérifie que `FORMSPREE_FORM_ID` est bien configuré
- Vérifie dans Formspree que ton domaine Cloudflare est autorisé

### Stripe ne fonctionne pas ?
- Vérifie que tes liens Stripe sont corrects dans `src/config/stripe-links.ts`
- Teste en mode "test" Stripe d'abord

---

## 📞 BESOIN D'AIDE ?

Si tu rencontres un problème, dis-moi :
- L'étape où tu bloques
- Le message d'erreur (si applicable)
- Des captures d'écran si possible

---

## 🎯 PROCHAINES ÉTAPES RECOMMANDÉES

Une fois déployé :

1. **Configure un domaine personnalisé** (zyatria.com)
2. **Active les analytics** Cloudflare (gratuit)
3. **Configure les redirections** si nécessaire
4. **Optimise les images** pour de meilleures performances
5. **Active le cache Cloudflare** pour une vitesse maximale

---

## 🎉 FÉLICITATIONS !

Une fois déployé, ton site sera :
- ✅ **Ultra-rapide** (CDN mondial Cloudflare)
- ✅ **Sécurisé** (HTTPS automatique)
- ✅ **Scalable** (supporte des millions de visiteurs)
- ✅ **Gratuit** (ou très peu coûteux)

**Ton site ZyatrIA Global sera en ligne et professionnel ! 🚀**
