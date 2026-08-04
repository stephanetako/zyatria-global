# 📥 TÉLÉCHARGER ET DÉPLOYER LE PROJET

## 🎯 GUIDE COMPLET POUR DÉPLOYER DEPUIS VOTRE ORDINATEUR

---

## MÉTHODE 1 : TÉLÉCHARGEMENT DIRECT (LE PLUS SIMPLE)

### Étape 1 : Télécharger le projet

#### Option A : Via l'interface Webflow
1. Dans l'interface Webflow où vous voyez ce fichier
2. Cherchez le bouton **"Download"** ou **"Export"**
3. Téléchargez tout le projet en ZIP
4. Décompressez le fichier ZIP sur votre ordinateur

#### Option B : Via Git (si disponible)
```bash
# Si le projet est sur GitHub
git clone [URL_DU_REPO]
cd zyatria-global
```

---

### Étape 2 : Installer les dépendances

Ouvrez un terminal dans le dossier du projet et exécutez :

```bash
# Installer Node.js si ce n'est pas déjà fait
# Téléchargez depuis : https://nodejs.org/

# Vérifier que Node.js est installé
node --version
npm --version

# Installer les dépendances du projet
npm install
```

---

### Étape 3 : Configurer les variables d'environnement

Créez un fichier `.env` à la racine du projet avec vos clés :

```bash
# Copier le fichier d'exemple
cp .env.example .env

# Ou créer manuellement le fichier .env avec ce contenu :
```

```env
# Mistral AI (Chatbot)
MISTRAL_API_KEY=votre_cle_mistral_ici

# Formspree (Formulaires)
FORMSPREE_FORM_ID=votre_form_id_ici

# Stripe (Paiements)
STRIPE_PUBLIC_KEY=pk_test_votre_cle_publique
STRIPE_SECRET_KEY=sk_test_votre_cle_secrete
STRIPE_WEBHOOK_SECRET=whsec_votre_webhook_secret

# Webflow (optionnel)
WEBFLOW_API_HOST=https://api.webflow.com
WEBFLOW_SITE_API_TOKEN=votre_token_ici
WEBFLOW_CMS_SITE_API_TOKEN=votre_token_cms_ici
```

---

### Étape 4 : Tester en local (optionnel mais recommandé)

```bash
# Lancer le serveur de développement
npm run dev

# Ouvrir dans le navigateur
# Le site sera disponible sur : http://localhost:4321
```

Testez que tout fonctionne correctement avant de déployer.

---

### Étape 5 : Déployer sur Cloudflare

```bash
# Rendre le script exécutable (Mac/Linux)
chmod +x deploy-now.sh

# Lancer le déploiement
./deploy-now.sh
```

**Sur Windows :**
```bash
# Utiliser Git Bash ou WSL, ou exécuter manuellement :
wrangler login
npm run build
wrangler deploy
```

---

## MÉTHODE 2 : CRÉATION D'UN NOUVEAU PROJET

Si vous préférez repartir de zéro avec les mêmes fichiers :

### Étape 1 : Créer un nouveau dossier
```bash
mkdir zyatria-global
cd zyatria-global
```

### Étape 2 : Copier les fichiers essentiels

Copiez ces fichiers depuis le sandbox Webflow :

**Fichiers de configuration :**
- `package.json`
- `astro.config.mjs`
- `wrangler.jsonc`
- `tsconfig.json`
- `components.json`
- `.env` (avec vos clés)

**Dossiers :**
- `src/` (tout le code source)
- `public/` (assets statiques)
- `generated/` (fichiers Webflow)

### Étape 3 : Installer et déployer
```bash
npm install
npm run build
wrangler login
wrangler deploy
```

---

## 📋 CHECKLIST AVANT DÉPLOIEMENT

### ✅ Prérequis installés
- [ ] Node.js (version 18 ou supérieure)
- [ ] npm (inclus avec Node.js)
- [ ] Git (optionnel mais recommandé)

### ✅ Fichiers présents
- [ ] `package.json`
- [ ] `wrangler.jsonc`
- [ ] `astro.config.mjs`
- [ ] Dossier `src/`
- [ ] Dossier `public/`
- [ ] Fichier `.env` avec vos clés

### ✅ Configuration
- [ ] Account ID Cloudflare dans `wrangler.jsonc`
- [ ] Clés API dans `.env`
- [ ] `npm install` exécuté avec succès
- [ ] `npm run build` fonctionne sans erreur

### ✅ Compte Cloudflare
- [ ] Compte créé sur https://dash.cloudflare.com
- [ ] Account ID récupéré
- [ ] Wrangler CLI installé (`npm install -g wrangler`)

---

## 🔧 INSTALLATION DE WRANGLER

Si Wrangler n'est pas installé globalement :

```bash
# Installation globale (recommandé)
npm install -g wrangler

# Vérifier l'installation
wrangler --version

# Se connecter à Cloudflare
wrangler login
```

---

## 🌐 RÉCUPÉRER VOTRE ACCOUNT ID CLOUDFLARE

1. Allez sur https://dash.cloudflare.com
2. Connectez-vous (ou créez un compte gratuit)
3. Dans la barre latérale droite, vous verrez **"Account ID"**
4. Copiez cet ID
5. Collez-le dans `wrangler.jsonc` :

```jsonc
{
  "account_id": "VOTRE_ACCOUNT_ID_ICI",
  // ... reste de la config
}
```

---

## 🔑 OBTENIR VOS CLÉS API

### Mistral AI (Chatbot)
1. Allez sur https://console.mistral.ai/
2. Créez un compte (gratuit)
3. Cliquez sur **"API Keys"**
4. Créez une nouvelle clé
5. Copiez la clé (commence par `sk-...`)

### Formspree (Formulaires)
1. Allez sur https://formspree.io/
2. Créez un compte (gratuit)
3. Créez un nouveau formulaire
4. Copiez le **Form ID** (format : `xyzabc123`)

### Stripe (Paiements)
1. Allez sur https://dashboard.stripe.com/
2. Créez un compte
3. Mode Test : **Developers** > **API Keys**
4. Copiez :
   - **Publishable key** : `pk_test_...`
   - **Secret key** : `sk_test_...`
5. Pour le webhook :
   - **Developers** > **Webhooks**
   - Créez un endpoint : `https://zyatria-global.workers.dev/api/stripe/webhook`
   - Copiez le **Signing secret** : `whsec_...`

---

## 🚀 COMMANDES DE DÉPLOIEMENT

### Déploiement complet (automatique)
```bash
./deploy-now.sh
```

### Déploiement manuel (étape par étape)
```bash
# 1. Se connecter
wrangler login

# 2. Builder le projet
npm run build

# 3. Déployer
wrangler deploy

# 4. Configurer les secrets
echo "VOTRE_CLE_MISTRAL" | wrangler secret put MISTRAL_API_KEY
echo "VOTRE_FORM_ID" | wrangler secret put FORMSPREE_FORM_ID
echo "VOTRE_STRIPE_PUBLIC" | wrangler secret put STRIPE_PUBLIC_KEY
echo "VOTRE_STRIPE_SECRET" | wrangler secret put STRIPE_SECRET_KEY
echo "VOTRE_WEBHOOK_SECRET" | wrangler secret put STRIPE_WEBHOOK_SECRET
```

---

## 🐛 RÉSOLUTION DE PROBLÈMES

### Erreur : "command not found: wrangler"
```bash
# Installer Wrangler globalement
npm install -g wrangler

# Ou utiliser npx
npx wrangler login
npx wrangler deploy
```

### Erreur : "Account ID not found"
1. Vérifiez que `wrangler.jsonc` contient votre Account ID
2. Récupérez-le sur https://dash.cloudflare.com

### Erreur : "Build failed"
```bash
# Nettoyer et réinstaller
rm -rf node_modules dist .astro
npm install
npm run build
```

### Erreur : "Not authenticated"
```bash
wrangler logout
wrangler login
```

### Le site ne charge pas après déploiement
```bash
# Vérifier les logs
wrangler tail

# Vérifier que les secrets sont configurés
wrangler secret list
```

---

## 📊 VÉRIFICATION APRÈS DÉPLOIEMENT

### 1. Tester le site
```bash
# Ouvrir dans le navigateur
open https://zyatria-global.workers.dev

# Ou sur Windows
start https://zyatria-global.workers.dev
```

### 2. Vérifier les logs
```bash
wrangler tail
```

### 3. Tester le chatbot
```bash
curl https://zyatria-global.workers.dev/api/mistral-chat \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"message":"Bonjour"}'
```

### 4. Vérifier les secrets
```bash
wrangler secret list
```

Vous devriez voir :
- MISTRAL_API_KEY
- FORMSPREE_FORM_ID
- STRIPE_PUBLIC_KEY
- STRIPE_SECRET_KEY
- STRIPE_WEBHOOK_SECRET

---

## 🎉 FÉLICITATIONS !

Votre site est maintenant en ligne sur :
**https://zyatria-global.workers.dev**

### Prochaines étapes :
1. ✅ Configurer un domaine personnalisé
2. ✅ Tester toutes les fonctionnalités
3. ✅ Activer Google Analytics
4. ✅ Partager avec vos clients !

---

## 📞 BESOIN D'AIDE ?

- Documentation Cloudflare : https://developers.cloudflare.com/workers/
- Documentation Wrangler : https://developers.cloudflare.com/workers/wrangler/
- Support Cloudflare : https://community.cloudflare.com/

---

**Bon déploiement ! 🚀**
