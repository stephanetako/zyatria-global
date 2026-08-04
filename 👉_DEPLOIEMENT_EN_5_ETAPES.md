# 🚀 DÉPLOIEMENT CLOUDFLARE EN 5 ÉTAPES

## ✅ PRÉREQUIS (DÉJÀ FAIT)
- ✅ Code sur GitHub
- ✅ Liens Stripe en mode LIVE
- ✅ Build réussi

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 📋 ÉTAPE 1 : CONNEXION À CLOUDFLARE

1. **Allez sur :** https://dash.cloudflare.com/
2. **Connectez-vous** avec votre compte
3. **Cliquez sur "Workers & Pages"** dans le menu de gauche

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 📋 ÉTAPE 2 : CRÉER UN NOUVEAU PROJET

1. **Cliquez sur "Create application"**
2. **Sélectionnez l'onglet "Pages"**
3. **Cliquez sur "Connect to Git"**
4. **Sélectionnez "GitHub"**
5. **Autorisez Cloudflare** à accéder à votre GitHub
6. **Sélectionnez le repository :** `stephanetako/zyatria-global`
7. **Cliquez sur "Begin setup"**

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 📋 ÉTAPE 3 : CONFIGURATION DU BUILD

### **Paramètres de build :**

**Project name :** `zyatria-global` (ou ce que vous voulez)

**Production branch :** `master`

**Framework preset :** `Astro`

**Build command :** `npm run build`

**Build output directory :** `dist`

**Root directory :** `/` (laisser vide)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 📋 ÉTAPE 4 : VARIABLES D'ENVIRONNEMENT

**⚠️ IMPORTANT : Ajoutez ces variables AVANT de déployer !**

Cliquez sur **"Add environment variable"** et ajoutez :

### **Variables Stripe (OBLIGATOIRES) :**

```
STRIPE_SECRET_KEY
Valeur : sk_live_VOTRE_CLE_SECRETE_LIVE
```

```
STRIPE_PUBLISHABLE_KEY
Valeur : pk_live_VOTRE_CLE_PUBLIQUE_LIVE
```

```
STRIPE_WEBHOOK_SECRET
Valeur : whsec_VOTRE_SECRET_WEBHOOK
```

### **Variables Formspree (OBLIGATOIRES) :**

```
FORMSPREE_FORM_ID
Valeur : VOTRE_FORM_ID
```

### **Variables Mistral AI (OPTIONNELLES) :**

```
MISTRAL_API_KEY
Valeur : VOTRE_CLE_MISTRAL
```

### **Variables Twilio (OPTIONNELLES) :**

```
TWILIO_ACCOUNT_SID
Valeur : VOTRE_ACCOUNT_SID
```

```
TWILIO_AUTH_TOKEN
Valeur : VOTRE_AUTH_TOKEN
```

```
TWILIO_PHONE_NUMBER
Valeur : VOTRE_NUMERO_TWILIO
```

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 📋 ÉTAPE 5 : DÉPLOIEMENT

1. **Vérifiez que toutes les variables sont ajoutées**
2. **Cliquez sur "Save and Deploy"**
3. **Attendez la fin du build** (2-5 minutes)
4. **Cloudflare vous donnera une URL** : `https://zyatria-global.pages.dev`

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━���━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 🎯 APRÈS LE DÉPLOIEMENT

### **1. Testez votre site :**
- Ouvrez l'URL fournie par Cloudflare
- Testez les boutons Stripe
- Vérifiez les formulaires

### **2. Configurez le webhook Stripe :**
- Allez sur : https://dashboard.stripe.com/webhooks
- Cliquez "Add endpoint"
- URL : `https://VOTRE-URL.pages.dev/api/stripe/webhook`
- Événements : `checkout.session.completed`, `payment_intent.succeeded`
- Copiez le **Signing secret**
- Ajoutez-le dans Cloudflare comme `STRIPE_WEBHOOK_SECRET`

### **3. Domaine personnalisé (optionnel) :**
- Dans Cloudflare Pages, allez dans "Custom domains"
- Ajoutez votre domaine (ex: zyatria.global)
- Suivez les instructions DNS

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 🔧 REDÉPLOIEMENT AUTOMATIQUE

**Chaque fois que vous pushez sur GitHub, Cloudflare redéploie automatiquement !**

Pour forcer un redéploiement :
1. Allez dans votre projet Cloudflare
2. Cliquez sur "Deployments"
3. Cliquez sur "Retry deployment"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 📊 CHECKLIST FINALE

Avant de dire "C'EST EN LIGNE" :

- [ ] Site accessible sur l'URL Cloudflare
- [ ] Boutons Stripe fonctionnent (testez avec une vraie carte)
- [ ] Formulaires Formspree fonctionnent
- [ ] Webhook Stripe configuré
- [ ] Pas d'erreurs dans les logs Cloudflare
- [ ] Design correct sur mobile et desktop

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 🆘 EN CAS DE PROBLÈME

### **Build échoue :**
- Vérifiez les logs dans Cloudflare
- Assurez-vous que `npm run build` fonctionne localement

### **Variables d'environnement manquantes :**
- Allez dans Settings → Environment variables
- Ajoutez les variables manquantes
- Redéployez

### **Erreur 500 :**
- Vérifiez les logs dans Cloudflare
- Vérifiez que toutes les clés API sont correctes

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🚀 COMMENCEZ MAINTENANT !

Allez sur : https://dash.cloudflare.com/
