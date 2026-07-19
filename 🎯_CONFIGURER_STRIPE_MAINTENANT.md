# 🎯 CONFIGURATION STRIPE - GUIDE RAPIDE (15 MIN)

**Date:** $(date)

---

## 📋 ÉTAPE 1 : CRÉER UN COMPTE STRIPE (5 min)

### 1.1 Inscription
1. Allez sur https://dashboard.stripe.com/register
2. Créez votre compte (email + mot de passe)
3. Vérifiez votre email
4. **Mode Test** sera activé par défaut (parfait pour commencer !)

### 1.2 Récupérer vos clés API
1. Dans le dashboard Stripe, cliquez sur **"Developers"** (en haut à droite)
2. Cliquez sur **"API keys"**
3. Vous verrez 2 clés :
   - **Publishable key** (commence par `pk_test_...`)
   - **Secret key** (commence par `sk_test_...`) - Cliquez sur "Reveal test key"

**📝 Copiez ces 2 clés, vous en aurez besoin !**

---

## 📋 ÉTAPE 2 : CRÉER LES PAYMENT LINKS (5 min)

### 2.1 Créer le lien pour "Starter" (97€/mois)

1. Dans le dashboard Stripe, cliquez sur **"Products"** (menu gauche)
2. Cliquez sur **"+ Add product"**
3. Remplissez :
   - **Name:** `ZyatrIA Starter`
   - **Description:** `Plan Starter - 1 micro-agent + support email`
   - **Pricing model:** `Standard pricing`
   - **Price:** `97` EUR
   - **Billing period:** `Monthly`
4. Cliquez sur **"Save product"**
5. Cliquez sur **"Create payment link"**
6. **Copiez le lien** (ressemble à `https://buy.stripe.com/test_xxxxx`)

### 2.2 Créer le lien pour "Professional" (297€/mois)

Répétez les mêmes étapes avec :
- **Name:** `ZyatrIA Professional`
- **Description:** `Plan Professional - 3 micro-agents + support prioritaire`
- **Price:** `297` EUR
- **Billing period:** `Monthly`

**Copiez le lien**

### 2.3 Créer le lien pour "Enterprise" (797€/mois)

Répétez avec :
- **Name:** `ZyatrIA Enterprise`
- **Description:** `Plan Enterprise - Micro-agents illimités + support dédié`
- **Price:** `797` EUR
- **Billing period:** `Monthly`

**Copiez le lien**

---

## 📋 ÉTAPE 3 : CONFIGURER LE PROJET (5 min)

### 3.1 Ajouter les clés API dans `.env`

Ouvrez le fichier `.env` et ajoutez :

```bash
# Stripe Configuration
STRIPE_PUBLISHABLE_KEY=pk_test_VOTRE_CLE_ICI
STRIPE_SECRET_KEY=sk_test_VOTRE_CLE_ICI
PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_VOTRE_CLE_ICI
```

### 3.2 Ajouter les Payment Links

Ouvrez `src/config/stripe-links.ts` et remplacez les liens :

```typescript
export const STRIPE_PAYMENT_LINKS = {
  starter: 'https://buy.stripe.com/test_VOTRE_LIEN_STARTER',
  professional: 'https://buy.stripe.com/test_VOTRE_LIEN_PRO',
  enterprise: 'https://buy.stripe.com/test_VOTRE_LIEN_ENTERPRISE'
} as const;
```

---

## ✅ ÉTAPE 4 : TESTER

### 4.1 Lancer le serveur local

```bash
npm run dev
```

### 4.2 Tester un paiement

1. Allez sur http://localhost:4321/pricing
2. Cliquez sur "Commencer" pour un plan
3. Vous serez redirigé vers Stripe
4. Utilisez la carte de test :
   - **Numéro:** `4242 4242 4242 4242`
   - **Date:** N'importe quelle date future
   - **CVC:** N'importe quel 3 chiffres
   - **Code postal:** N'importe lequel

5. Validez le paiement
6. Vous devriez être redirigé vers `/success`

---

## 🎉 C'EST FAIT !

Votre intégration Stripe est maintenant configurée !

### 📊 Vérifier les paiements

1. Retournez sur le dashboard Stripe
2. Cliquez sur **"Payments"**
3. Vous verrez votre paiement de test

---

## 🔄 PASSER EN MODE PRODUCTION (Plus tard)

Quand vous serez prêt à accepter de vrais paiements :

1. Dans Stripe, activez votre compte (fournir infos entreprise)
2. Récupérez les clés **LIVE** (commencent par `pk_live_` et `sk_live_`)
3. Créez les mêmes Payment Links en mode LIVE
4. Remplacez les clés dans `.env` en production

---

## 📞 BESOIN D'AIDE ?

Si vous avez des questions :
- Documentation Stripe : https://stripe.com/docs
- Support Stripe : https://support.stripe.com

---

**Temps total : ~15 minutes**
**Status : ✅ PRÊT À TESTER**
