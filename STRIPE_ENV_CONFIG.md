# 🔐 CONFIGURATION STRIPE - VARIABLES D'ENVIRONNEMENT

## 📝 FICHIER À CRÉER/MODIFIER : `.env`

Ajoutez ces lignes à votre fichier `.env` :

```bash
# =============================================================================
# STRIPE CONFIGURATION
# =============================================================================
# Get your keys from: https://dashboard.stripe.com/apikeys
# IMPORTANT: Use TEST keys first (pk_test_... and sk_test_...)

# Stripe Public Key (safe to expose in frontend)
PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_YOUR_KEY_HERE"

# Stripe Secret Key (NEVER expose in frontend, server-only)
STRIPE_SECRET_KEY="sk_test_YOUR_KEY_HERE"

# =============================================================================
# STRIPE PRICE IDs
# =============================================================================
# Get from: Dashboard → Products → Your Product → Copy Price ID

# Starter Plan (49€, $52, $69 CAD)
PUBLIC_STRIPE_STARTER_PRICE_EUR="price_xxxxx"
PUBLIC_STRIPE_STARTER_PRICE_USD="price_xxxxx"
PUBLIC_STRIPE_STARTER_PRICE_CAD="price_xxxxx"

# Business Plan (149€, $159, $199 CAD)
PUBLIC_STRIPE_BUSINESS_PRICE_EUR="price_xxxxx"
PUBLIC_STRIPE_BUSINESS_PRICE_USD="price_xxxxx"
PUBLIC_STRIPE_BUSINESS_PRICE_CAD="price_xxxxx"
```

---

## 🔑 OÙ TROUVER VOS CLÉS STRIPE

### 1. Clés API (Publishable & Secret Key)

**Dans le Dashboard Stripe :**
1. Allez sur : https://dashboard.stripe.com/test/apikeys
2. Vous verrez :
   - **Publishable key** : `pk_test_...` (visible)
   - **Secret key** : `sk_test_...` (cliquez "Reveal" pour voir)

**Copiez-les dans `.env` :**
```bash
PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_51Abc..."
STRIPE_SECRET_KEY="sk_test_51Abc..."
```

---

### 2. Price IDs

**Dans le Dashboard Stripe :**
1. Menu → **Products**
2. Cliquez sur votre produit (ex: "Starter Plan")
3. Vous verrez une section **Pricing**
4. À côté de chaque prix (EUR, USD, CAD), cliquez sur **"..."** → **Copy Price ID**

**Format :** `price_1Abc123XyZ...`

**Exemple pour Starter Plan :**
```bash
PUBLIC_STRIPE_STARTER_PRICE_EUR="price_1Abc123starter_eur"
PUBLIC_STRIPE_STARTER_PRICE_USD="price_1Xyz456starter_usd"
PUBLIC_STRIPE_STARTER_PRICE_CAD="price_1Def789starter_cad"
```

---

## 🚨 IMPORTANT : TEST vs LIVE

### Mode TEST (Développement)
```bash
# Utilisez les clés TEST
PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_..."
STRIPE_SECRET_KEY="sk_test_..."
```

**Avantages :**
- ✅ Aucun vrai paiement
- ✅ Testez avec cartes test
- ✅ Sandbox sécurisé

**Cartes de test Stripe :**
```
Carte Visa réussie : 4242 4242 4242 4242
Date expiration : n'importe quelle date future
CVC : n'importe quel 3 chiffres
```

---

### Mode LIVE (Production)

⚠️ **NE PAS utiliser avant d'avoir :**
- ✅ Tout testé en mode test
- ✅ Activé votre compte Stripe (vérification identité)
- ✅ Configuré webhooks
- ✅ Testé tous les scénarios

**Clés LIVE :**
```bash
PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_live_..."
STRIPE_SECRET_KEY="sk_live_..."
```

---

## ✅ CHECKLIST DE CONFIGURATION

- [ ] Compte Stripe créé
- [ ] Mode TEST activé
- [ ] API Keys copiées (pk_test_ et sk_test_)
- [ ] Produits créés (Starter, Business)
- [ ] Prix ajoutés (EUR, USD, CAD pour chaque)
- [ ] Price IDs copiés (6 au total)
- [ ] Fichier `.env` modifié avec vos valeurs
- [ ] Redémarrage du serveur de dev

---

## 🧪 TESTER LA CONFIGURATION

### 1. Redémarrez le serveur

```bash
# Arrêtez le serveur (Ctrl+C)
# Puis relancez
npm run dev
```

### 2. Vérifiez les variables

Le terminal devrait charger vos variables sans erreur.

### 3. Testez un paiement

1. Allez sur `http://localhost:3000/pricing`
2. Cliquez sur "Start Free Trial" (Starter ou Business)
3. Vous devriez être redirigé vers Stripe Checkout
4. Utilisez la carte test : `4242 4242 4242 4242`
5. Complétez le paiement
6. Vous devriez revenir sur `/success`

---

## 🐛 PROBLÈMES COURANTS

### Erreur : "STRIPE_SECRET_KEY is not configured"

**Solution :**
- Vérifiez que `.env` contient bien `STRIPE_SECRET_KEY="sk_test_..."`
- Redémarrez le serveur (`npm run dev`)

---

### Erreur : "No price ID found"

**Solution :**
- Vérifiez que les 6 `PUBLIC_STRIPE_*_PRICE_*` sont bien définis
- Vérifiez que les Price IDs sont corrects (format `price_xxxxx`)

---

### Checkout ne s'ouvre pas

**Solution :**
- Ouvrez la console du navigateur (F12)
- Regardez les erreurs
- Vérifiez que `PUBLIC_STRIPE_PUBLISHABLE_KEY` est correct

---

## 📞 BESOIN D'AIDE ?

Si vous avez des erreurs :
1. Copiez le message d'erreur exact
2. Vérifiez la console du navigateur (F12)
3. Vérifiez les logs du terminal
4. Demandez-moi de l'aide avec les détails !

---

**Document créé le :** 2026-02-08  
**Status :** Configuration requise
