# 🔑 Guide Complet - Obtenir les Clés API

## 📋 Vue d'ensemble

Vous avez besoin de 3 clés API principales pour que votre site fonctionne en production :

1. **Formspree** - Pour les formulaires de contact
2. **Stripe** - Pour les paiements
3. **Mistral AI** - Pour le chatbot intelligent

---

## 1️⃣ FORMSPREE - Formulaires de Contact

### 🎯 Pourquoi ?
Formspree gère tous vos formulaires de contact sans backend.

### 📝 Étapes pour obtenir la clé

#### A. Créer un compte
1. Allez sur : **https://formspree.io**
2. Cliquez sur **"Sign Up"** (en haut à droite)
3. Créez un compte avec votre email professionnel

#### B. Créer un formulaire
1. Une fois connecté, cliquez sur **"+ New Form"**
2. Donnez un nom : `ZyatrIA Contact Form`
3. Cliquez sur **"Create Form"**

#### C. Obtenir votre Form ID
1. Vous verrez votre **Form ID** qui ressemble à : `xyzabc123`
2. **COPIEZ cette valeur** - c'est votre clé !

#### D. Configuration recommandée
Dans les paramètres du formulaire :
- ✅ Activez **Email Notifications** (pour recevoir les soumissions)
- ✅ Configurez votre **Reply-To Email**
- ✅ Ajoutez votre domaine dans **Allowed Domains** (après déploiement)

### 💰 Prix
- **Gratuit** : 50 soumissions/mois
- **Gold** : 10$/mois - 1000 soumissions/mois (recommandé)
- **Platinum** : 40$/mois - 10,000 soumissions/mois

### 🔐 Où mettre la clé ?
```env
FORMSPREE_FORM_ID=xyzabc123
```

---

## 2️⃣ STRIPE - Paiements en Ligne

### 🎯 Pourquoi ?
Stripe gère tous vos paiements de manière sécurisée.

### 📝 Étapes pour obtenir les clés

#### A. Créer un compte
1. Allez sur : **https://dashboard.stripe.com/register**
2. Créez un compte avec votre email professionnel
3. Complétez les informations de votre entreprise

#### B. Activer votre compte
1. Allez dans **Settings** → **Business Settings**
2. Complétez toutes les informations requises :
   - Informations légales de l'entreprise
   - Coordonnées bancaires
   - Vérification d'identité

#### C. Obtenir vos clés API

##### Mode Test (pour développement)
1. Allez sur : **https://dashboard.stripe.com/test/apikeys**
2. Vous verrez :
   - **Publishable key** : `pk_test_...` (clé publique)
   - **Secret key** : `sk_test_...` (clé secrète) ⚠️ **GARDEZ-LA SECRÈTE !**

##### Mode Production (pour le site en ligne)
1. Allez sur : **https://dashboard.stripe.com/apikeys**
2. Vous verrez :
   - **Publishable key** : `pk_live_...`
   - **Secret key** : `sk_live_...` ⚠️ **GARDEZ-LA SECRÈTE !**

#### D. Créer vos Payment Links

##### Pour chaque plan tarifaire :

**Plan Starter (97€/mois)**
1. Allez dans **Products** → **+ Add Product**
2. Nom : `ZyatrIA Starter`
3. Prix : `97 EUR` / mois
4. Cliquez sur **Save**
5. Cliquez sur **Create payment link**
6. Copiez le lien généré

**Plan Growth (297€/mois)**
1. Répétez pour `ZyatrIA Growth` à `297 EUR`

**Plan Enterprise (997€/mois)**
1. Répétez pour `ZyatrIA Enterprise` à `997 EUR`

#### E. Configurer les Webhooks
1. Allez dans **Developers** → **Webhooks**
2. Cliquez sur **+ Add endpoint**
3. URL : `https://votre-site.com/api/stripe/webhook`
4. Sélectionnez les événements :
   - `checkout.session.completed`
   - `customer.subscription.created`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
   - `invoice.payment_succeeded`
   - `invoice.payment_failed`
5. Copiez le **Signing secret** : `whsec_...`

### 💰 Prix
- **Gratuit** pour commencer
- **2.9% + 0.30€** par transaction réussie
- Pas de frais mensuels

### 🔐 Où mettre les clés ?
```env
# Mode Test (développement)
STRIPE_PUBLIC_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_test_...

# Mode Production (à remplacer après tests)
STRIPE_PUBLIC_KEY=pk_live_...
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Payment Links
STRIPE_STARTER_LINK=https://buy.stripe.com/...
STRIPE_GROWTH_LINK=https://buy.stripe.com/...
STRIPE_ENTERPRISE_LINK=https://buy.stripe.com/...
```

---

## 3️⃣ MISTRAL AI - Chatbot Intelligent

### 🎯 Pourquoi ?
Mistral AI alimente votre chatbot multicanal avec une IA française de pointe.

### 📝 Étapes pour obtenir la clé

#### A. Créer un compte
1. Allez sur : **https://console.mistral.ai**
2. Cliquez sur **"Sign Up"**
3. Créez un compte avec votre email

#### B. Obtenir votre clé API
1. Une fois connecté, allez dans **API Keys**
2. Cliquez sur **"Create new key"**
3. Donnez un nom : `ZyatrIA Production`
4. **COPIEZ la clé** : elle ressemble à `msk_...`
5. ⚠️ **IMPORTANT** : Vous ne pourrez plus la voir après !

#### C. Configuration recommandée
1. Allez dans **Settings** → **Usage Limits**
2. Configurez des limites de sécurité :
   - Budget mensuel maximum
   - Alertes par email

### 💰 Prix
- **Gratuit** : 5€ de crédits offerts
- **Pay as you go** : À partir de 0.25€ / 1M tokens
- **Mistral Small** : ~0.25€ / 1M tokens (recommandé pour démarrer)
- **Mistral Medium** : ~2.50€ / 1M tokens
- **Mistral Large** : ~8€ / 1M tokens

**Estimation** : ~100-200 conversations = 1€

### 🔐 Où mettre la clé ?
```env
MISTRAL_API_KEY=msk_...
```

---

## 4️⃣ CONFIGURATION DANS CLOUDFLARE

### Une fois que vous avez toutes vos clés :

#### A. Dans Cloudflare Pages
1. Allez dans votre projet Cloudflare Pages
2. **Settings** → **Environment Variables**
3. Ajoutez chaque variable :

```
FORMSPREE_FORM_ID = xyzabc123
STRIPE_PUBLIC_KEY = pk_live_...
STRIPE_SECRET_KEY = sk_live_...
STRIPE_WEBHOOK_SECRET = whsec_...
STRIPE_STARTER_LINK = https://buy.stripe.com/...
STRIPE_GROWTH_LINK = https://buy.stripe.com/...
STRIPE_ENTERPRISE_LINK = https://buy.stripe.com/...
MISTRAL_API_KEY = msk_...
```

4. ⚠️ **IMPORTANT** : Cochez **"Encrypt"** pour les clés secrètes !

#### B. Redéployer
1. Allez dans **Deployments**
2. Cliquez sur **"Retry deployment"** sur le dernier déploiement
3. Attendez que le build se termine

---

## ✅ CHECKLIST FINALE

Avant de passer au déploiement, vérifiez que vous avez :

- [ ] **Formspree Form ID** copié
- [ ] **Stripe Secret Key** copiée (mode live)
- [ ] **Stripe Webhook Secret** copié
- [ ] **3 Payment Links Stripe** créés
- [ ] **Mistral API Key** copiée
- [ ] Toutes les clés ajoutées dans Cloudflare
- [ ] Variables marquées comme "Encrypted"

---

## 🆘 BESOIN D'AIDE ?

### Formspree
- Documentation : https://help.formspree.io
- Support : support@formspree.io

### Stripe
- Documentation : https://stripe.com/docs
- Support : https://support.stripe.com

### Mistral AI
- Documentation : https://docs.mistral.ai
- Support : support@mistral.ai

---

## 🎯 PROCHAINE ÉTAPE

Une fois que vous avez toutes vos clés :
👉 **Passez à l'étape 2 : Déploiement sur Cloudflare**

Lisez le fichier : `🚀_GUIDE_DEPLOIEMENT_CLOUDFLARE.md`

---

## 💡 CONSEILS DE SÉCURITÉ

⚠️ **NE JAMAIS** :
- Partager vos clés secrètes publiquement
- Commiter vos clés dans Git
- Envoyer vos clés par email non chiffré

✅ **TOUJOURS** :
- Utiliser les variables d'environnement
- Activer l'encryption dans Cloudflare
- Régénérer les clés si elles sont compromises
- Utiliser le mode Test avant le mode Production

---

**Temps estimé pour obtenir toutes les clés : 30-45 minutes**

Bonne chance ! 🚀
