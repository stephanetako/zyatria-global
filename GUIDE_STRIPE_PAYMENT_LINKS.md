# 🎯 Guide Complet : Configuration Stripe Payment Links

## 📋 Table des Matières

1. [Créer vos Payment Links](#1-créer-vos-payment-links)
2. [Obtenir vos Price IDs](#2-obtenir-vos-price-ids)
3. [Configurer les fichiers](#3-configurer-les-fichiers)
4. [Tester l'intégration](#4-tester-lintégration)
5. [Passer en production](#5-passer-en-production)

---

## 1️⃣ Créer vos Payment Links

### Étape 1 : Accéder au Dashboard Stripe

1. **Connectez-vous** à : https://dashboard.stripe.com
2. **Assurez-vous** d'être en **mode Test** (toggle en haut à droite)
3. **Allez dans** : **Produits** → **Payment Links**

### Étape 2 : Créer un Payment Link

1. **Cliquez sur** : `+ Nouveau lien de paiement`

2. **Configurez le produit** :
   - **Nom** : `Starter Plan` (ou le nom de votre choix)
   - **Description** : `Paiement unique pour démarrer avec ZyatrIA`
   - **Prix** : `99` EUR
   - **Type** : `Paiement unique` ou `Abonnement`

3. **Options avancées** (optionnel) :
   - ✅ Autoriser les codes promo
   - ✅ Collecter l'adresse de facturation
   - ✅ Collecter le numéro de téléphone

4. **Cliquez sur** : `Créer le lien`

5. **Copiez l'URL** générée (ressemble à `https://buy.stripe.com/test_XXXXXXXX`)

### Étape 3 : Répéter pour chaque plan

Créez des Payment Links pour :
- ✅ **Starter** (99€ - paiement unique)
- ✅ **Pro** (299€/mois - abonnement)
- ✅ **Enterprise** (2999€/an - abonnement)
- ✅ **Micro-Agent** (49€/mois - abonnement)
- ✅ **Consultation** (199€ - paiement unique)

---

## 2️⃣ Obtenir vos Price IDs

### Méthode 1 : Depuis les Produits

1. **Allez dans** : **Produits** → **Tous les produits**
2. **Cliquez** sur un produit
3. **Copiez** le **Price ID** (commence par `price_`)

### Méthode 2 : Depuis l'API

1. **Allez dans** : **Développeurs** → **Clés API**
2. **Utilisez** l'API Explorer pour lister vos prix :

```bash
curl https://api.stripe.com/v1/prices \
  -u sk_test_VOTRE_CLE_SECRETE:
```

---

## 3️⃣ Configurer les fichiers

### Fichier 1 : `.env`

**Vérifiez** que vos clés Stripe sont bien configurées :

```env
# Stripe Keys (Test Mode)
STRIPE_PUBLISHABLE_KEY=pk_test_VOTRE_CLE_PUBLIQUE
STRIPE_SECRET_KEY=sk_test_VOTRE_CLE_SECRETE
```

### Fichier 2 : `src/config/stripe-links.ts`

**Remplacez** les URLs et Price IDs :

```typescript
export const stripePaymentLinks = {
  starter: {
    name: 'Starter',
    price: '99€',
    url: 'https://buy.stripe.com/test_XXXXXXXX', // ← REMPLACER ICI
    // ...
  },
  // ...
};

export const stripePriceIds = {
  starter: 'price_XXXXXXXXXXXXXXXXXXXXXXXX', // ← REMPLACER ICI
  // ...
};
```

### Fichier 3 : `src/components/pages/PaymentDemoPage.tsx`

**Remplacez** les Price IDs dans les plans :

```typescript
const plans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    priceId: 'price_VOTRE_VRAI_PRICE_ID', // ← REMPLACER ICI
    // ...
  },
  // ...
];
```

---

## 4️⃣ Tester l'intégration

### Test 1 : Payment Links directs

1. **Ouvrez** votre site : `http://localhost:4321/pricing`
2. **Cliquez** sur un bouton de paiement
3. **Vérifiez** que vous êtes redirigé vers Stripe

### Test 2 : Stripe Checkout API

1. **Ouvrez** : `http://localhost:4321/payment-demo`
2. **Cliquez** sur un plan
3. **Vérifiez** la console pour les logs
4. **Testez** avec une carte de test :
   - **Numéro** : `4242 4242 4242 4242`
   - **Date** : N'importe quelle date future
   - **CVC** : N'importe quel code à 3 chiffres

### Test 3 : Page de succès

1. **Complétez** un paiement test
2. **Vérifiez** que vous êtes redirigé vers `/success`
3. **Vérifiez** que le `session_id` est affiché

### Test 4 : Vérifier dans Stripe

1. **Allez dans** : **Paiements** → **Tous les paiements**
2. **Vérifiez** que votre paiement test apparaît
3. **Cliquez** dessus pour voir les détails

---

## 5️⃣ Passer en production

### Étape 1 : Créer les produits en mode Live

1. **Basculez** en mode **Live** (toggle en haut à droite)
2. **Recréez** tous vos Payment Links
3. **Notez** les nouvelles URLs et Price IDs

### Étape 2 : Obtenir les clés de production

1. **Allez dans** : **Développeurs** → **Clés API**
2. **Copiez** :
   - **Clé publique** (commence par `pk_live_`)
   - **Clé secrète** (commence par `sk_live_`)

### Étape 3 : Configurer les variables d'environnement

**Sur Cloudflare Pages** :

1. **Allez dans** : Settings → Environment variables
2. **Ajoutez** :
   ```
   STRIPE_PUBLISHABLE_KEY = pk_live_VOTRE_CLE
   STRIPE_SECRET_KEY = sk_live_VOTRE_CLE
   ```

### Étape 4 : Mettre à jour les fichiers

1. **Mettez à jour** `src/config/stripe-links.ts` avec les URLs Live
2. **Mettez à jour** les Price IDs avec les IDs Live
3. **Changez** `mode: 'live'` dans `stripeConfig`

### Étape 5 : Déployer

```bash
npm run build
git add .
git commit -m "🚀 Stripe en production"
git push
```

---

## 🎯 Checklist Finale

Avant de passer en production, vérifiez :

- [ ] Tous les Payment Links sont créés en mode Live
- [ ] Tous les Price IDs sont mis à jour
- [ ] Les clés API Live sont configurées
- [ ] Les tests en mode Test fonctionnent
- [ ] Les URLs de redirection sont correctes
- [ ] Les emails de confirmation sont configurés dans Stripe
- [ ] Les webhooks sont configurés (optionnel)
- [ ] La page de succès fonctionne
- [ ] Les montants et devises sont corrects

---

## 🆘 Dépannage

### Problème : "Stripe n'a pas pu être chargé"

**Solution** : Vérifiez que `STRIPE_PUBLISHABLE_KEY` est bien dans `.env`

### Problème : "Price ID manquant"

**Solution** : Vérifiez que vous avez bien remplacé `price_XXXXXXXX` par votre vrai Price ID

### Problème : "Session ID manquant"

**Solution** : Vérifiez que votre clé secrète est correcte dans `.env`

### Problème : Redirection ne fonctionne pas

**Solution** : Vérifiez les URLs de succès/annulation dans le code

---

## 📚 Ressources

- **Documentation Stripe** : https://stripe.com/docs
- **Payment Links** : https://stripe.com/docs/payment-links
- **Checkout** : https://stripe.com/docs/payments/checkout
- **Cartes de test** : https://stripe.com/docs/testing

---

## ✅ Prochaines Étapes

1. **Créez vos Payment Links** sur Stripe
2. **Copiez les URLs** et Price IDs
3. **Mettez à jour** `src/config/stripe-links.ts`
4. **Testez** sur `/payment-demo`
5. **Déployez** ! 🚀

---

**Besoin d'aide ?** Consultez la documentation Stripe ou contactez le support ! 💪
