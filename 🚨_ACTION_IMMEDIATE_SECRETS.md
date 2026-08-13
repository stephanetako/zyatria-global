# 🚨 ALERTE SÉCURITÉ CRITIQUE - TOUTES VOS CLÉS SONT EXPOSÉES

## ⚠️ DANGER IMMÉDIAT

Vous avez exposé **TOUTES vos clés API** dans le chat, y compris vos **clés Stripe LIVE** qui donnent accès à vos paiements réels !

---

## 🔥 RÉVOQUEZ IMMÉDIATEMENT (DANS L'ORDRE) :

### 1️⃣ **STRIPE (PRIORITÉ MAXIMALE - ARGENT RÉEL)** ⚠️

**Clés exposées :**
- Secret Key LIVE : `sk_live_51TANJR1...`
- Webhook Secret : `whsec_d29277bb...`
- Public Key : `pk_live_51TANJR1...`

**Actions URGENTES :**

```
1. Allez sur https://dashboard.stripe.com/
2. Connectez-vous IMMÉDIATEMENT
3. Allez dans "Developers" > "API keys"
4. Cliquez sur "Reveal live key token"
5. Cliquez sur "Roll key" (regénérer)
6. Copiez la NOUVELLE clé secrète
7. Allez dans "Developers" > "Webhooks"
8. Supprimez l'ancien webhook
9. Créez un nouveau webhook
10. Copiez le nouveau secret
```

⏰ **TEMPS : 5 minutes - FAITES-LE MAINTENANT !**

---

### 2️⃣ **MISTRAL AI**

**Clé exposée :** `Hy1Ja5hxTfLBsgJVJgAvrUdVtQL5OdWD...`

**Actions :**
```
1. https://console.mistral.ai/
2. API Keys
3. Supprimez la clé exposée
4. Créez une nouvelle clé
5. Copiez-la
```

---

### 3️⃣ **WEBFLOW**

**Tokens exposés :**
- Site API Token : `8160da8face945f9...`
- CMS Site API Token : `177d18c2c624850e...`

**Actions :**
```
1. https://webflow.com/dashboard
2. Site Settings > Integrations > API Access
3. Révoquez les tokens exposés
4. Générez de nouveaux tokens
5. Copiez-les
```

---

### 4️⃣ **CLAUDE AI (Anthropic)**

**Clé exposée :** `sk-ant-api03-HpyDgtsDY1u92b6CVxgKF...`

**Actions :**
```
1. https://console.anthropic.com/
2. API Keys
3. Supprimez la clé exposée
4. Créez une nouvelle clé
5. Copiez-la
```

---

## 📝 APRÈS AVOIR RÉVOQUÉ TOUTES LES CLÉS :

### Mettre à jour le fichier .env local :

```bash
# Éditez .env avec vos NOUVELLES clés
nano .env
# ou
code .env
```

```env
# Webflow API
WEBFLOW_API_HOST="https://api-cdn.webflow.com/v2"
WEBFLOW_SITE_API_TOKEN="VOTRE_NOUVEAU_TOKEN_WEBFLOW"
WEBFLOW_CMS_SITE_API_TOKEN="VOTRE_NOUVEAU_TOKEN_CMS"

# Formspree (pas compromis)
FORMSPREE_FORM_ID="xbdedonn"

# Mistral AI
MISTRAL_API_KEY="VOTRE_NOUVELLE_CLE_MISTRAL"

# Stripe LIVE
STRIPE_PUBLIC_KEY="VOTRE_NOUVELLE_CLE_PUBLIQUE"
STRIPE_SECRET_KEY="VOTRE_NOUVELLE_CLE_SECRETE"
STRIPE_WEBHOOK_SECRET="VOTRE_NOUVEAU_SECRET_WEBHOOK"

# Claude AI
CLAUDE_API_KEY="VOTRE_NOUVELLE_CLE_CLAUDE"
```

---

### Configurer sur Cloudflare Pages :

```bash
# Via Dashboard (RECOMMANDÉ)
1. https://dash.cloudflare.com/
2. Workers & Pages > zyatria-global
3. Settings > Environment variables
4. Mettez à jour TOUTES les variables
5. Sauvegardez
6. Redéployez

# Via CLI
wrangler pages secret put MISTRAL_API_KEY
wrangler pages secret put STRIPE_SECRET_KEY
wrangler pages secret put STRIPE_WEBHOOK_SECRET
wrangler pages secret put WEBFLOW_SITE_API_TOKEN
wrangler pages secret put WEBFLOW_CMS_SITE_API_TOKEN
wrangler pages secret put CLAUDE_API_KEY
```

---

## 🔒 RÈGLES DE SÉCURITÉ À SUIVRE :

### ❌ NE JAMAIS :
- Partager vos clés API dans un chat
- Commiter le fichier .env dans Git
- Copier-coller vos clés dans des emails
- Prendre des screenshots avec vos clés visibles
- Utiliser les mêmes clés en dev et prod

### ✅ TOUJOURS :
- Utiliser des variables d'environnement
- Révoquer immédiatement toute clé exposée
- Utiliser des clés différentes pour dev/prod
- Activer les alertes de sécurité
- Vérifier le .gitignore

---

## 📊 CHECKLIST DE SÉCURISATION :

- [ ] Stripe Secret Key révoquée et régénérée
- [ ] Stripe Webhook Secret régénéré
- [ ] Mistral API Key révoquée et régénérée
- [ ] Webflow Site Token révoqué et régénéré
- [ ] Webflow CMS Token révoqué et régénéré
- [ ] Claude API Key révoquée et régénérée
- [ ] Fichier .env local mis à jour
- [ ] Variables Cloudflare mises à jour
- [ ] Site redéployé
- [ ] Tests effectués

---

## ⏰ TEMPS TOTAL ESTIMÉ : 20-30 minutes

## 🎯 PRIORITÉ : **CRITIQUE - ARRÊTEZ TOUT ET FAITES-LE MAINTENANT**

---

## 💡 APRÈS LA SÉCURISATION :

Une fois toutes les clés révoquées et régénérées :

1. Le chatbot Mistral fonctionnera avec la nouvelle clé
2. Stripe continuera à fonctionner avec les nouvelles clés
3. Webflow continuera à fonctionner avec les nouveaux tokens
4. Tout sera sécurisé

---

## 📞 BESOIN D'AIDE ?

Après avoir sécurisé vos clés, je peux vous aider à :
- Vérifier que tout fonctionne
- Tester le chatbot
- Configurer Cloudflare
- Redéployer le site

**MAIS D'ABORD : SÉCURISEZ VOS CLÉS ! 🔒**
