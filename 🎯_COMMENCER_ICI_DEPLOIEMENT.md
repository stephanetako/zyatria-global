# 🎯 GUIDE DE DÉPLOIEMENT - COMMENCEZ ICI

## 🚀 DÉPLOIEMENT EN 4 ÉTAPES SIMPLES

---

## 📋 ÉTAPE 1 : CRÉER LE REPOSITORY GITHUB (2 minutes)

### 1️⃣ Ouvrez GitHub

Cliquez sur ce lien :
```
👉 https://github.com/new
```

### 2️⃣ Remplissez le formulaire

| Champ | Valeur |
|-------|--------|
| **Repository name** | `zyatria-global` |
| **Description** | `ZyatrIA Global - AI Agents & Automation Platform` |
| **Visibility** | ✅ **Private** (recommandé) |
| **Initialize this repository** | ❌ **NE COCHEZ RIEN** |

### 3️⃣ Créez le repository

Cliquez sur le bouton vert **"Create repository"**

### 4️⃣ Copiez l'URL

Vous verrez une page avec une URL comme :
```
https://github.com/stephanetako/zyatria-global.git
```

**📋 COPIEZ CETTE URL** (vous en aurez besoin dans l'étape suivante)

---

## 📋 ÉTAPE 2 : POUSSER LE CODE (1 minute)

### 🪟 Sur Windows

1. **Double-cliquez** sur le fichier :
   ```
   push-github-maintenant.ps1
   ```

2. **Collez l'URL** de votre repository (celle que vous avez copiée)

3. **Appuyez sur Entrée**

4. **Attendez** que le script termine (30 secondes)

### 🐧 Sur Linux/Mac

1. **Ouvrez le Terminal**

2. **Tapez** :
   ```bash
   ./push-github-maintenant.sh
   ```

3. **Collez l'URL** de votre repository

4. **Appuyez sur Entrée**

5. **Attendez** que le script termine

### ✅ Vérification

Allez sur votre repository GitHub :
```
https://github.com/VOTRE-USERNAME/zyatria-global
```

Vous devriez voir tous vos fichiers ! 🎉

---

## 📋 ÉTAPE 3 : CONNECTER À CLOUDFLARE (3 minutes)

### 1️⃣ Ouvrez Cloudflare Dashboard

```
👉 https://dash.cloudflare.com
```

### 2️⃣ Créez un nouveau projet

1. Cliquez sur **"Workers & Pages"** (dans le menu de gauche)
2. Cliquez sur **"Create application"**
3. Cliquez sur **"Pages"**
4. Cliquez sur **"Connect to Git"**

### 3️⃣ Connectez GitHub

1. Sélectionnez **"GitHub"**
2. Cliquez sur **"Connect GitHub"**
3. **Autorisez** Cloudflare à accéder à votre compte
4. Sélectionnez votre repository **"zyatria-global"**

### 4️⃣ Configurez le build

| Paramètre | Valeur |
|-----------|--------|
| **Project name** | `zyatria-global` |
| **Production branch** | `main` |
| **Build command** | `npm run build` |
| **Build output directory** | `dist` |
| **Root directory** | `/` (laisser vide) |

### 5️⃣ Lancez le déploiement

Cliquez sur **"Save and Deploy"**

⏳ **Attendez 2-3 minutes** que le déploiement se termine...

---

## 📋 ÉTAPE 4 : CONFIGURER LES VARIABLES (2 minutes)

### 1️⃣ Allez dans les paramètres

1. Dans votre projet Cloudflare
2. Cliquez sur **"Settings"**
3. Cliquez sur **"Environment variables"**

### 2️⃣ Ajoutez les variables

Cliquez sur **"Add variable"** pour chaque variable :

#### Variable 1 : Mistral AI
```
Variable name: MISTRAL_API_KEY
Value: votre_clé_mistral_ici
```

#### Variable 2 : Formspree
```
Variable name: FORMSPREE_FORM_ID
Value: votre_id_formspree_ici
```

#### Variable 3 : Stripe Secret
```
Variable name: STRIPE_SECRET_KEY
Value: sk_test_... ou sk_live_...
```

#### Variable 4 : Stripe Public
```
Variable name: STRIPE_PUBLISHABLE_KEY
Value: pk_test_... ou pk_live_...
```

#### Variable 5 : Stripe Webhook
```
Variable name: STRIPE_WEBHOOK_SECRET
Value: whsec_...
```

### 3️⃣ Sauvegardez

Cliquez sur **"Save"**

### 4️⃣ Redéployez

1. Retournez dans **"Deployments"**
2. Cliquez sur **"Retry deployment"** sur le dernier déploiement
3. Attendez 2-3 minutes

---

## ✅ C'EST TERMINÉ !

Votre site est maintenant en ligne ! 🎉

### 🌐 URL de votre site

```
https://zyatria-global.pages.dev
```

---

## 🔑 OÙ OBTENIR LES CLÉS API ?

### Mistral AI
1. Allez sur : https://console.mistral.ai/
2. Créez un compte (si nécessaire)
3. Allez dans **"API Keys"**
4. Cliquez sur **"Create new key"**
5. Copiez la clé

### Formspree
1. Allez sur : https://formspree.io/
2. Créez un compte (si nécessaire)
3. Cliquez sur **"New Form"**
4. Copiez l'ID du formulaire (dans l'URL ou les settings)

### Stripe
1. Allez sur : https://dashboard.stripe.com/
2. Créez un compte (si nécessaire)
3. Allez dans **"Developers"** → **"API keys"**
4. Copiez les clés (utilisez les clés de **test** pour commencer)

### Stripe Webhook
1. Dans Stripe Dashboard
2. Allez dans **"Developers"** → **"Webhooks"**
3. Cliquez sur **"Add endpoint"**
4. URL : `https://zyatria-global.pages.dev/api/stripe/webhook`
5. Events : `checkout.session.completed`, `payment_intent.succeeded`
6. Copiez le **Signing secret**

---

## 🧪 TESTER VOTRE SITE

### ✅ Checklist de test

- [ ] Le site s'affiche correctement
- [ ] La navigation fonctionne
- [ ] Le chatbot s'ouvre et répond
- [ ] Les formulaires envoient des messages
- [ ] Les boutons de paiement Stripe fonctionnent
- [ ] Le site est responsive sur mobile

---

## 🐛 PROBLÈMES COURANTS

### Le site affiche une page blanche

**Solution :**
1. Vérifiez que vous avez bien configuré les variables d'environnement
2. Videz le cache Cloudflare (Settings → Caching → Purge Everything)
3. Redéployez (Deployments → Retry deployment)

### Le chatbot ne répond pas

**Solution :**
1. Vérifiez que `MISTRAL_API_KEY` est bien configurée dans Cloudflare
2. Vérifiez que vous avez du crédit sur votre compte Mistral
3. Consultez les logs Cloudflare (Deployments → View logs)

### Les formulaires ne fonctionnent pas

**Solution :**
1. Vérifiez que `FORMSPREE_FORM_ID` est bien configuré
2. Vérifiez que le formulaire est activé sur Formspree
3. Consultez les submissions sur Formspree Dashboard

### Les paiements Stripe ne fonctionnent pas

**Solution :**
1. Vérifiez que vous utilisez les bonnes clés (test vs live)
2. Vérifiez que les Payment Links sont corrects
3. Testez avec une carte de test Stripe

---

## 📊 MONITORING

### Logs Cloudflare

Pour voir les logs en temps réel :
1. Allez dans votre projet Cloudflare
2. Cliquez sur **"Deployments"**
3. Cliquez sur **"View logs"** sur le dernier déploiement

### Analytics

Pour voir les statistiques :
1. Dans votre projet Cloudflare
2. Cliquez sur **"Analytics"**

---

## 🔄 FAIRE DES MISES À JOUR

### Méthode simple

1. Faites vos modifications dans le code
2. Commitez et poussez :
   ```bash
   git add .
   git commit -m "Description de vos changements"
   git push origin main
   ```
3. Cloudflare déploiera automatiquement ! ⚡

---

## 🌐 CONFIGURER UN DOMAINE PERSONNALISÉ

### Étapes

1. Dans Cloudflare Pages, allez dans **"Custom domains"**
2. Cliquez sur **"Set up a custom domain"**
3. Entrez votre domaine (ex: `zyatria.global`)
4. Suivez les instructions DNS
5. Attendez la propagation (quelques minutes à quelques heures)

---

## 🆘 BESOIN D'AIDE ?

### Documentation

- 📖 **README.md** - Vue d'ensemble
- 🚀 **DEPLOYMENT.md** - Guide détaillé
- 🔧 **.env.example** - Variables d'environnement

### Support

- 📧 Email : contact@zyatria.global
- 💬 Chatbot sur le site
- 📚 Documentation Cloudflare : https://developers.cloudflare.com/pages

---

## 🎊 FÉLICITATIONS !

Vous avez déployé avec succès ZyatrIA Global ! 🎉

### Prochaines étapes

1. ✅ Testez toutes les fonctionnalités
2. ✅ Configurez un domaine personnalisé
3. ✅ Passez aux clés de production Stripe
4. ✅ Partagez votre site !

---

**Fait avec ❤️ pour un déploiement facile et rapide**
