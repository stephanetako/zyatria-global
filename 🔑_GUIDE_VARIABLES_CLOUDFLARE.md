# 🔑 GUIDE COMPLET - VARIABLES D'ENVIRONNEMENT CLOUDFLARE

## 📋 VARIABLES REQUISES

### 1️⃣ MISTRAL AI (Chatbot)
```bash
MISTRAL_API_KEY=votre_clé_mistral_ici
```

**Comment l'obtenir:**
1. Allez sur https://console.mistral.ai/
2. Créez un compte ou connectez-vous
3. Allez dans **API Keys**
4. Créez une nouvelle clé
5. Copiez la clé (elle commence par `mistral-...`)

**Prix:** Gratuit pour commencer (crédits offerts)

---

### 2️⃣ FORMSPREE (Formulaires)
```bash
FORMSPREE_FORM_ID=votre_form_id_ici
```

**Comment l'obtenir:**
1. Allez sur https://formspree.io/
2. Créez un compte gratuit
3. Créez un nouveau formulaire
4. Copiez le **Form ID** (format: `xyzabc123`)

**Prix:** Gratuit jusqu'à 50 soumissions/mois

---

### 3️⃣ STRIPE (Paiements)
```bash
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...
```

**Comment les obtenir:**

**A. Secret Key:**
1. Allez sur https://dashboard.stripe.com/
2. **Developers** → **API Keys**
3. Copiez la **Secret key** (commence par `sk_live_` ou `sk_test_`)

**B. Webhook Secret:**
1. **Developers** → **Webhooks**
2. Cliquez **Add endpoint**
3. URL: `https://votre-site.pages.dev/api/stripe/webhook`
4. Événements: Sélectionnez tous les événements de paiement
5. Copiez le **Signing secret** (commence par `whsec_`)

**Prix:** Gratuit (commission sur transactions)

---

### 4️⃣ TWILIO (Agent Vocal) - OPTIONNEL
```bash
TWILIO_ACCOUNT_SID=AC...
TWILIO_AUTH_TOKEN=...
TWILIO_PHONE_NUMBER=+1...
```

**Comment les obtenir:**
1. Allez sur https://www.twilio.com/
2. Créez un compte
3. **Console** → Copiez Account SID et Auth Token
4. **Phone Numbers** → Achetez un numéro

**Prix:** ~1$/mois pour un numéro + usage

---

### 5️⃣ WEBFLOW CMS - OPTIONNEL
```bash
WEBFLOW_CMS_SITE_API_TOKEN=...
WEBFLOW_API_HOST=https://api.webflow.com
```

**Comment l'obtenir:**
1. Allez sur https://webflow.com/dashboard
2. **Site Settings** → **Integrations** → **API Access**
3. Générez un token

**Prix:** Inclus avec plan CMS Webflow

---

## 🚀 COMMENT AJOUTER LES VARIABLES DANS CLOUDFLARE

### Méthode 1: Via Dashboard (Recommandé)

1. **Allez sur Cloudflare Dashboard**
   - https://dash.cloudflare.com/

2. **Workers & Pages** → Sélectionnez `zyatria-global`

3. **Settings** → **Environment Variables**

4. **Ajoutez chaque variable:**
   - Cliquez **Add variable**
   - Nom: `MISTRAL_API_KEY`
   - Valeur: Votre clé
   - Type: **Encrypted** (recommandé)
   - Environnement: **Production** ET **Preview**
   - Cliquez **Save**

5. **Répétez pour chaque variable**

---

### Méthode 2: Via Wrangler CLI

```bash
# Mistral AI
wrangler pages secret put MISTRAL_API_KEY

# Formspree
wrangler pages secret put FORMSPREE_FORM_ID

# Stripe
wrangler pages secret put STRIPE_SECRET_KEY
wrangler pages secret put STRIPE_WEBHOOK_SECRET

# Twilio (optionnel)
wrangler pages secret put TWILIO_ACCOUNT_SID
wrangler pages secret put TWILIO_AUTH_TOKEN
wrangler pages secret put TWILIO_PHONE_NUMBER

# Webflow (optionnel)
wrangler pages secret put WEBFLOW_CMS_SITE_API_TOKEN
```

---

## ✅ CHECKLIST DE CONFIGURATION

### Variables Essentielles (Minimum)
- [ ] `MISTRAL_API_KEY` - Pour le chatbot
- [ ] `FORMSPREE_FORM_ID` - Pour les formulaires
- [ ] `STRIPE_SECRET_KEY` - Pour les paiements
- [ ] `STRIPE_WEBHOOK_SECRET` - Pour les webhooks Stripe

### Variables Optionnelles
- [ ] `TWILIO_ACCOUNT_SID` - Agent vocal
- [ ] `TWILIO_AUTH_TOKEN` - Agent vocal
- [ ] `TWILIO_PHONE_NUMBER` - Agent vocal
- [ ] `WEBFLOW_CMS_SITE_API_TOKEN` - CMS Webflow
- [ ] `WEBFLOW_API_HOST` - API Webflow

---

## 🔒 SÉCURITÉ

### ✅ BONNES PRATIQUES

1. **Utilisez toujours "Encrypted"** pour les secrets
2. **Ne commitez JAMAIS** les clés dans Git
3. **Utilisez des clés de test** en développement
4. **Rotez les clés** régulièrement
5. **Limitez les permissions** des clés API

### ⚠️ IMPORTANT

- Les variables sont **chiffrées** dans Cloudflare
- Elles sont **injectées** au runtime
- Elles ne sont **jamais exposées** au client
- Changez immédiatement toute clé exposée

---

## 🧪 TESTER LES VARIABLES

Après avoir ajouté les variables, testez-les:

```bash
# Déployez une nouvelle version
wrangler pages deploy dist

# Testez le chatbot
curl https://votre-site.pages.dev/api/ai/chat \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"message":"Hello"}'

# Testez Stripe
curl https://votre-site.pages.dev/api/stripe/test
```

---

## 📊 COÛTS ESTIMÉS

| Service | Plan Gratuit | Plan Payant |
|---------|--------------|-------------|
| **Mistral AI** | Crédits offerts | ~0.25$/1M tokens |
| **Formspree** | 50 soumissions/mois | 10$/mois (1000 soumissions) |
| **Stripe** | Gratuit | 2.9% + 0.30$ par transaction |
| **Twilio** | Crédits de test | ~1$/mois + usage |
| **Cloudflare Pages** | Gratuit | Gratuit (500 builds/mois) |

**Total minimum:** 0$ pour commencer avec les plans gratuits

---

## 🎯 PROCHAINES ÉTAPES

1. ✅ Build terminé
2. ⏳ **Configurer les variables** (vous êtes ici)
3. ⏳ Déployer sur Cloudflare
4. ⏳ Tester en production

---

## 💡 BESOIN D'AIDE ?

- **Mistral AI:** https://docs.mistral.ai/
- **Formspree:** https://help.formspree.io/
- **Stripe:** https://stripe.com/docs
- **Cloudflare:** https://developers.cloudflare.com/pages/

---

**👉 Une fois les variables configurées, passez à l'étape 3 : Déploiement !**
