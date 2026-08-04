# 🎯 DÉPLOIEMENT ÉTAPE PAR ÉTAPE

## Guide visuel complet pour déployer ZyatrIA Global

---

## 📋 AVANT DE COMMENCER

### Ce dont vous avez besoin :
- [ ] Un ordinateur (Windows, Mac ou Linux)
- [ ] Une connexion Internet
- [ ] 5-10 minutes de temps
- [ ] Un compte Cloudflare (gratuit - on va le créer ensemble)

### Ce que vous allez obtenir :
- ✅ Votre site en ligne sur Internet
- ✅ Une URL accessible partout : `https://zyatria-global.pages.dev`
- ✅ Hébergement gratuit et illimité

---

## 🚀 ÉTAPE 1 : OUVRIR LE TERMINAL

### Sur Windows :

**Option A : PowerShell (Recommandé)**
1. Appuyez sur `Windows + X`
2. Cliquez sur "Windows PowerShell" ou "Terminal"

**Option B : Invite de commandes**
1. Appuyez sur `Windows + R`
2. Tapez `cmd`
3. Appuyez sur Entrée

### Sur Mac :

1. Appuyez sur `Cmd + Espace`
2. Tapez "Terminal"
3. Appuyez sur Entrée

### Sur Linux :

1. Appuyez sur `Ctrl + Alt + T`

---

## 📂 ÉTAPE 2 : ALLER DANS LE DOSSIER DU PROJET

### Dans le terminal, tapez :

```bash
cd /app
```

**Note :** Si vous avez téléchargé le projet ailleurs, remplacez `/app` par le chemin vers votre dossier.

### Vérifier que vous êtes au bon endroit :

```bash
ls
```

Vous devriez voir des fichiers comme :
- `package.json`
- `astro.config.mjs`
- `deploy-now.sh`
- etc.

✅ **Vous êtes au bon endroit !**

---

## 🔧 ÉTAPE 3 : LANCER LE SCRIPT DE DÉPLOIEMENT

### Tapez cette commande :

```bash
./deploy-now.sh
```

### Si vous avez une erreur "permission denied" :

```bash
chmod +x deploy-now.sh
./deploy-now.sh
```

### Ou utilisez :

```bash
bash deploy-now.sh
```

---

## ⏳ ÉTAPE 4 : LE SCRIPT SE LANCE

Vous allez voir quelque chose comme ça :

```
╔════════════════════════════════════════════════════════╗
║                                                        ║
║     🚀 DÉPLOIEMENT ZYATRIA GLOBAL                     ║
║                                                        ║
╚════════════════════════════════════════════════════════╝

▶ 1️⃣  Vérification des prérequis
────────────────────────────────────────────────────────
✅ Node.js installé: v20.x.x
✅ npm installé: 10.x.x
```

**Laissez le script travailler...**

---

## 📦 ÉTAPE 5 : INSTALLATION DES DÉPENDANCES

Le script va installer les dépendances (si nécessaire) :

```
▶ 2️⃣  Installation des dépendances
────────────────────────────────────────────────────────
✅ node_modules existe déjà
```

ou

```
Installation en cours...
✅ Dépendances installées
```

**Patience, ça peut prendre 1-2 minutes...**

---

## 🏗️ ÉTAPE 6 : BUILD DU SITE

Le script va construire votre site :

```
▶ 3️⃣  Build de production
────────────────────────────────────────────────────────
Construction du site...

✅ Build réussi (173 fichiers générés)
```

**C'est bon signe !**

---

## 🎯 ÉTAPE 7 : CHOISIR LA PLATEFORME

Le script va vous demander où déployer :

```
▶ 5️⃣  Mode de déploiement
────────────────────────────────────────────────────────

Choisissez votre méthode de déploiement:

  1) Cloudflare Pages (Recommandé) ⭐
  2) Vercel
  3) Netlify
  4) Annuler

Votre choix (1-4):
```

### Tapez `1` puis appuyez sur Entrée

```
Votre choix (1-4): 1
```

---

## 🔐 ÉTAPE 8 : CONNEXION À CLOUDFLARE

### Si c'est votre première fois :

Le script va afficher :

```
⚠️  Non connecté à Cloudflare

Connexion à Cloudflare...
```

**Une page web va s'ouvrir automatiquement dans votre navigateur.**

### Dans le navigateur :

#### A. Si vous n'avez PAS de compte Cloudflare :

1. Cliquez sur "Sign Up" (S'inscrire)
2. Entrez votre email
3. Créez un mot de passe
4. Vérifiez votre email
5. Revenez à la page d'autorisation

#### B. Si vous AVEZ déjà un compte :

1. Entrez votre email
2. Entrez votre mot de passe
3. Cliquez sur "Log In"

#### C. Autoriser Wrangler :

Vous verrez une page qui dit :

```
Wrangler wants to access your Cloudflare account

This will allow Wrangler to:
- Deploy to Cloudflare Pages
- Manage your Workers
- etc.

[Allow] [Deny]
```

**Cliquez sur "Allow" (Autoriser)**

### Retour au terminal :

Vous verrez :

```
✅ Connecté à Cloudflare
```

---

## 🚀 ÉTAPE 9 : DÉPLOIEMENT EN COURS

Le script va maintenant déployer votre site :

```
Déploiement en cours...

Uploading... (173 files)
[====================] 100%

✨ Success! Deployed to Cloudflare Pages
```

**Patience, ça peut prendre 2-5 minutes...**

Vous verrez défiler :
- Upload des fichiers
- Optimisation
- Déploiement
- Configuration du CDN

---

## 🎉 ÉTAPE 10 : DÉPLOIEMENT RÉUSSI !

Quand c'est terminé, vous verrez :

```
✅ Déploiement terminé !

🎉 Votre site est en ligne !

URL: https://zyatria-global.pages.dev
```

### Copiez cette URL et ouvrez-la dans votre navigateur !

---

## ✅ ÉTAPE 11 : VÉRIFIER VOTRE SITE

### Ouvrez votre navigateur et allez sur :

```
https://zyatria-global.pages.dev
```

### Vous devriez voir :

- ✅ La page d'accueil de ZyatrIA Global
- ✅ Le design moderne et responsive
- ✅ La navigation qui fonctionne
- ✅ Le sélecteur de langue FR/EN

### Testez les pages :

- [ ] `/` - Accueil
- [ ] `/pricing` - Tarifs
- [ ] `/services` - Services
- [ ] `/micro-agents` - Micro-agents
- [ ] `/demo` - Démo
- [ ] `/about` - À propos
- [ ] `/knowledge-base` - Documentation

**Tout fonctionne ? Félicitations ! 🎊**

---

## 📊 ÉTAPE 12 : TABLEAU DE BORD CLOUDFLARE

### Accéder au dashboard :

1. Allez sur https://dash.cloudflare.com
2. Connectez-vous avec votre compte
3. Cliquez sur "Workers & Pages"
4. Vous verrez votre projet `zyatria-global`

### Dans le dashboard, vous pouvez :

- 📊 Voir les statistiques de trafic
- 🔄 Voir l'historique des déploiements
- ⚙️ Configurer les variables d'environnement
- 🌐 Ajouter un domaine personnalisé
- 📈 Voir les analytics

---

## 🌐 ÉTAPE 13 : DOMAINE PERSONNALISÉ (OPTIONNEL)

### Vous voulez utiliser `zyatria.global` au lieu de `zyatria-global.pages.dev` ?

Consultez le guide complet :

```
🌐_GUIDE_DOMAINE_PERSONNALISE.md
```

**Résumé rapide :**

1. Acheter le domaine `zyatria.global` (~10-15€/an)
2. Dans Cloudflare Pages → Custom domains
3. Cliquer "Set up a custom domain"
4. Entrer `zyatria.global`
5. Suivre les instructions DNS
6. Attendre 2-48h pour la propagation

---

## 🎯 PROCHAINES ÉTAPES

### Maintenant que votre site est en ligne :

#### 1. Tester les fonctionnalités

- [ ] Tester le formulaire de contact
- [ ] Vérifier les liens Stripe
- [ ] Tester sur mobile
- [ ] Tester sur différents navigateurs

#### 2. Configurer les services (si pas déjà fait)

- [ ] Vérifier Formspree (déjà configuré ✅)
- [ ] Vérifier Stripe (déjà configuré ✅)
- [ ] Configurer Google Analytics (optionnel)

#### 3. SEO et Marketing

- [ ] Soumettre à Google Search Console
- [ ] Créer un sitemap.xml
- [ ] Partager sur les réseaux sociaux
- [ ] Configurer les emails professionnels

#### 4. Optimisations

- [ ] Activer le cache Cloudflare
- [ ] Optimiser les images
- [ ] Configurer les redirections
- [ ] Activer HSTS (sécurité)

---

## 🆘 DÉPANNAGE

### Problème : "npm: command not found"

**Solution :**
1. Installer Node.js : https://nodejs.org
2. Télécharger la version LTS (recommandée)
3. Installer et redémarrer le terminal
4. Vérifier : `node -v` et `npm -v`

---

### Problème : "permission denied"

**Solution :**
```bash
chmod +x deploy-now.sh
./deploy-now.sh
```

---

### Problème : "Build failed"

**Solution :**
```bash
npm run build
```
Vérifier les erreurs dans le terminal et les corriger.

---

### Problème : "wrangler: command not found"

**Solution :**
Le script utilise automatiquement `npx wrangler`.
Si ça ne fonctionne pas :
```bash
npm install -g wrangler
```

---

### Problème : "Cannot connect to Cloudflare"

**Solution :**
1. Vérifier votre connexion Internet
2. Désactiver le VPN (si vous en utilisez un)
3. Réessayer : `npx wrangler login`

---

### Problème : Le site ne s'affiche pas correctement

**Solution :**
1. Vider le cache du navigateur (Ctrl+Shift+R)
2. Attendre 2-3 minutes (propagation CDN)
3. Essayer en navigation privée
4. Vérifier sur un autre navigateur

---

## 📞 BESOIN D'AIDE ?

### Documentation officielle

- **Cloudflare Pages** : https://developers.cloudflare.com/pages
- **Astro** : https://docs.astro.build
- **Wrangler** : https://developers.cloudflare.com/workers/wrangler

### Communautés

- **Discord Astro** : https://astro.build/chat
- **Forum Cloudflare** : https://community.cloudflare.com
- **Stack Overflow** : Tags `cloudflare-pages`, `astro`

### Support Cloudflare

- **Email** : support@cloudflare.com
- **Chat** : Dans le dashboard Cloudflare
- **Docs** : https://developers.cloudflare.com

---

## 🎊 FÉLICITATIONS !

Vous avez réussi à déployer votre site **ZyatrIA Global** !

### Ce que vous avez accompli :

✅ Installé et configuré l'environnement
✅ Construit le site en production
✅ Créé un compte Cloudflare
✅ Déployé sur Cloudflare Pages
✅ Obtenu une URL publique
✅ Site accessible partout dans le monde

### Votre site est maintenant :

- 🌍 Accessible mondialement
- ⚡ Ultra-rapide (CDN Cloudflare)
- 🔒 Sécurisé (HTTPS automatique)
- 📱 Responsive (mobile-friendly)
- 🆓 Hébergé gratuitement

---

## 📊 STATISTIQUES

### Temps total : ~5-10 minutes
### Coût : 0€ (hébergement gratuit)
### Fichiers déployés : 173
### Pages disponibles : 7
### Langues : FR + EN

---

## 🎯 PROCHAINE ÉTAPE RECOMMANDÉE

### Configurer votre domaine personnalisé :

```
Lire : 🌐_GUIDE_DOMAINE_PERSONNALISE.md
```

Pour avoir votre site sur :
```
https://zyatria.global
```

au lieu de :
```
https://zyatria-global.pages.dev
```

---

**Bravo et bon succès avec ZyatrIA Global ! 🚀✨**

*Votre site est maintenant en ligne et accessible partout dans le monde !*
