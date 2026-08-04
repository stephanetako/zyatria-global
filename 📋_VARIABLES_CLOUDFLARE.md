# 🔑 VARIABLES D'ENVIRONNEMENT CLOUDFLARE

## ⚠️ À COPIER-COLLER DANS CLOUDFLARE

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 🔴 OBLIGATOIRES (STRIPE)

### Variable 1 : STRIPE_SECRET_KEY
```
Nom : STRIPE_SECRET_KEY
Valeur : sk_live_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```
**Où trouver :** https://dashboard.stripe.com/apikeys
**⚠️ Utilisez la clé LIVE (commence par sk_live_)**

---

### Variable 2 : STRIPE_PUBLISHABLE_KEY
```
Nom : STRIPE_PUBLISHABLE_KEY
Valeur : pk_live_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```
**Où trouver :** https://dashboard.stripe.com/apikeys
**⚠️ Utilisez la clé LIVE (commence par pk_live_)**

---

### Variable 3 : STRIPE_WEBHOOK_SECRET
```
Nom : STRIPE_WEBHOOK_SECRET
Valeur : whsec_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```
**Où trouver :** 
1. Allez sur https://dashboard.stripe.com/webhooks
2. Créez un endpoint avec l'URL : `https://VOTRE-URL.pages.dev/api/stripe/webhook`
3. Copiez le "Signing secret"

**⚠️ Créez le webhook APRÈS le premier déploiement !**

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 🟡 OBLIGATOIRES (FORMSPREE)

### Variable 4 : FORMSPREE_FORM_ID
```
Nom : FORMSPREE_FORM_ID
Valeur : VOTRE_FORM_ID
```
**Où trouver :** https://formspree.io/forms
**Format :** Généralement un code comme `xyzabcde`

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 🟢 OPTIONNELLES (MISTRAL AI)

### Variable 5 : MISTRAL_API_KEY
```
Nom : MISTRAL_API_KEY
Valeur : VOTRE_CLE_MISTRAL
```
**Où trouver :** https://console.mistral.ai/api-keys
**⚠️ Optionnel - Seulement si vous utilisez le chatbot**

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 🟢 OPTIONNELLES (TWILIO)

### Variable 6 : TWILIO_ACCOUNT_SID
```
Nom : TWILIO_ACCOUNT_SID
Valeur : ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

### Variable 7 : TWILIO_AUTH_TOKEN
```
Nom : TWILIO_AUTH_TOKEN
Valeur : VOTRE_AUTH_TOKEN
```

### Variable 8 : TWILIO_PHONE_NUMBER
```
Nom : TWILIO_PHONE_NUMBER
Valeur : +1XXXXXXXXXX
```

**Où trouver :** https://console.twilio.com/
**⚠️ Optionnel - Seulement si vous utilisez l'agent vocal**

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 📋 ORDRE DE CONFIGURATION

### **ÉTAPE 1 : Variables minimales pour démarrer**
1. STRIPE_SECRET_KEY
2. STRIPE_PUBLISHABLE_KEY
3. FORMSPREE_FORM_ID

**→ Déployez avec ces 3 variables**

### **ÉTAPE 2 : Après le premier déploiement**
4. STRIPE_WEBHOOK_SECRET (créez le webhook avec l'URL de production)

### **ÉTAPE 3 : Optionnelles (plus tard)**
5. MISTRAL_API_KEY (si chatbot)
6. TWILIO_* (si agent vocal)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 🎯 COMMENT AJOUTER DANS CLOUDFLARE

1. **Allez dans votre projet Cloudflare Pages**
2. **Cliquez sur "Settings"**
3. **Cliquez sur "Environment variables"**
4. **Cliquez sur "Add variable"**
5. **Entrez le nom et la valeur**
6. **Sélectionnez "Production" ET "Preview"**
7. **Cliquez sur "Save"**
8. **Répétez pour chaque variable**

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## ⚠️ SÉCURITÉ

- ❌ Ne partagez JAMAIS vos clés API
- ❌ Ne les commitez JAMAIS dans Git
- ✅ Utilisez toujours les variables d'environnement
- ✅ Régénérez les clés si elles sont exposées

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 📊 CHECKLIST

- [ ] STRIPE_SECRET_KEY ajoutée
- [ ] STRIPE_PUBLISHABLE_KEY ajoutée
- [ ] FORMSPREE_FORM_ID ajoutée
- [ ] Déploiement réussi
- [ ] Webhook Stripe créé
- [ ] STRIPE_WEBHOOK_SECRET ajoutée
- [ ] Redéploiement après webhook

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🚀 PRÊT À CONFIGURER !
