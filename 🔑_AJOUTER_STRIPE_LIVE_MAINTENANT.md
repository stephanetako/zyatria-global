# 🔑 AJOUTER LES CLÉS STRIPE LIVE

## 🎯 OBJECTIF

Remplacer les clés Stripe TEST par les clés LIVE pour accepter de vrais paiements.

---

## 📋 ÉTAPE 1 : OBTENIR VOS CLÉS STRIPE LIVE

### 1. Connectez-vous à Stripe Dashboard
👉 https://dashboard.stripe.com/

### 2. Activez le mode LIVE
- En haut à droite, basculez de **"Test mode"** à **"Live mode"**
- Le bouton doit afficher **"Viewing live data"**

### 3. Allez dans les clés API
👉 https://dashboard.stripe.com/apikeys

### 4. Copiez vos clés LIVE

Vous verrez deux clés :

#### 🔓 Clé Publique (Publishable key)
```
pk_live_51...
```
**Utilisée côté client (navigateur)**

#### 🔒 Clé Secrète (Secret key)
```
sk_live_51...
```
**⚠️ CONFIDENTIELLE - Utilisée côté serveur uniquement**

---

## 📋 ÉTAPE 2 : OBTENIR LE WEBHOOK SECRET

### 1. Allez dans les Webhooks
👉 https://dashboard.stripe.com/webhooks

### 2. Créez un nouveau webhook (si pas déjà fait)
- Cliquez sur **"Add endpoint"**
- URL du webhook : `https://votre-domaine.com/api/stripe/webhook`
- Événements à écouter :
  - `checkout.session.completed`
  - `payment_intent.succeeded`
  - `payment_intent.payment_failed`
  - `customer.subscription.created`
  - `customer.subscription.updated`
  - `customer.subscription.deleted`

### 3. Copiez le Signing Secret
```
whsec_...
```

---

## 📋 ÉTAPE 3 : METTRE À JOUR LE FICHIER .ENV

### Option A : Édition manuelle

Ouvrez le fichier `.env` et remplacez les clés TEST par les clés LIVE :

```bash
# === STRIPE (Paiements) - MODE LIVE ===
STRIPE_PUBLIC_KEY="pk_live_51XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
STRIPE_SECRET_KEY="sk_live_51XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
STRIPE_WEBHOOK_SECRET="whsec_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
```

### Option B : Script automatique

Créez un fichier `update-stripe-live.sh` :

```bash
#!/bin/bash

echo "🔑 Configuration des clés Stripe LIVE"
echo ""

# Demander les clés
read -p "Clé publique LIVE (pk_live_...): " STRIPE_PUBLIC_KEY
read -p "Clé secrète LIVE (sk_live_...): " STRIPE_SECRET_KEY
read -p "Webhook secret (whsec_...): " STRIPE_WEBHOOK_SECRET

# Créer un backup
cp .env .env.before-live

# Mettre à jour le .env
sed -i.bak "s|STRIPE_PUBLIC_KEY=.*|STRIPE_PUBLIC_KEY=\"$STRIPE_PUBLIC_KEY\"|g" .env
sed -i.bak "s|STRIPE_SECRET_KEY=.*|STRIPE_SECRET_KEY=\"$STRIPE_SECRET_KEY\"|g" .env
sed -i.bak "s|STRIPE_WEBHOOK_SECRET=.*|STRIPE_WEBHOOK_SECRET=\"$STRIPE_WEBHOOK_SECRET\"|g" .env

echo ""
echo "✅ Clés Stripe LIVE configurées !"
echo "📦 Backup créé : .env.before-live"
```

Puis exécutez :
```bash
chmod +x update-stripe-live.sh
./update-stripe-live.sh
```

---

## 📋 ÉTAPE 4 : CONFIGURER CLOUDFLARE WORKERS

### 1. Allez dans votre Dashboard Cloudflare
👉 https://dash.cloudflare.com/

### 2. Naviguez vers votre projet
**Workers & Pages** > **Votre projet** > **Settings** > **Variables and Secrets**

### 3. Ajoutez les variables d'environnement

Cliquez sur **"Add variable"** pour chaque clé :

| Variable Name | Type | Value |
|---------------|------|-------|
| `STRIPE_PUBLIC_KEY` | Text | `pk_live_51...` |
| `STRIPE_SECRET_KEY` | **Secret** | `sk_live_51...` |
| `STRIPE_WEBHOOK_SECRET` | **Secret** | `whsec_...` |

⚠️ **Important** : Marquez `STRIPE_SECRET_KEY` et `STRIPE_WEBHOOK_SECRET` comme **"Encrypt"** (Secret)

### 4. Sauvegardez
Cliquez sur **"Save and Deploy"**

---

## 📋 ÉTAPE 5 : VÉRIFIER LA CONFIGURATION

### 1. Vérifiez localement

```bash
# Testez en local
npm run dev
```

Ouvrez : http://localhost:4321/#pricing

### 2. Testez un paiement

- Cliquez sur un bouton de pricing
- Vérifiez que vous êtes redirigé vers Stripe
- **NE COMPLÉTEZ PAS LE PAIEMENT** (sauf si vous voulez vraiment payer)

### 3. Vérifiez les logs Stripe

👉 https://dashboard.stripe.com/logs

Vous devriez voir les tentatives de paiement.

---

## 📋 ÉTAPE 6 : DÉPLOYER

```bash
# Build de production
npm run build

# Commit et push
git add .
git commit -m "🔑 Clés Stripe LIVE configurées"
git push origin main
```

---

## ✅ CHECKLIST FINALE

Avant de passer en production :

- [ ] Clés Stripe LIVE obtenues depuis le Dashboard
- [ ] Clés ajoutées dans `.env` local
- [ ] Clés ajoutées dans Cloudflare Workers (en mode Secret)
- [ ] Webhook configuré avec la bonne URL
- [ ] Test local réussi
- [ ] Build réussi
- [ ] Déployé sur Cloudflare
- [ ] Test en production réussi

---

## 🔒 SÉCURITÉ

### ⚠️ NE JAMAIS :
- ❌ Commiter les clés LIVE dans Git
- ❌ Partager les clés secrètes
- ❌ Exposer les clés dans le code client

### ✅ TOUJOURS :
- ✅ Utiliser des variables d'environnement
- ✅ Marquer les clés comme "Secret" dans Cloudflare
- ✅ Vérifier que `.env` est dans `.gitignore`
- ✅ Créer des backups avant modification

---

## 📊 COMPARAISON TEST vs LIVE

| Aspect | Mode TEST | Mode LIVE |
|--------|-----------|-----------|
| **Clé publique** | `pk_test_...` | `pk_live_...` |
| **Clé secrète** | `sk_test_...` | `sk_live_...` |
| **Webhook** | `whsec_...` (test) | `whsec_...` (live) |
| **Paiements** | Simulés | Réels |
| **Cartes** | Cartes de test | Vraies cartes |
| **Argent** | Fictif | Réel |

---

## 🎯 TEMPLATE .ENV COMPLET

```bash
# ============================================
# ZYATRIA GLOBAL - CONFIGURATION LIVE
# ============================================

# === FORMSPREE (Formulaires de contact) ===
FORMSPREE_FORM_ID="xbdedonn"

# === WEBFLOW (CMS et API) ===
WEBFLOW_API_HOST="https://api-cdn.webflow.com/v2"
WEBFLOW_SITE_API_TOKEN="8160da8face945f9fb1e1515f445592076f5481aabc0aeb7a7a11e9fdb118ed0"
WEBFLOW_CMS_SITE_API_TOKEN="177d18c2c624850e2dd7deb5c159dc319b90ef7c9cad86464217b2346a6f3c64"

# === MISTRAL AI (Chatbot) ===
MISTRAL_API_KEY="Hy1Ja5hxTfLBsgJVJgAvrUdVtQL5OdWD2aRB31Z0bgY8pHsWrczFMBt68nkTzje9u96WCnuAyBjf7TFw3Jqb000Cfx4xRu"

# === STRIPE (Paiements) - MODE LIVE ===
STRIPE_PUBLIC_KEY="pk_live_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
STRIPE_SECRET_KEY="sk_live_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
STRIPE_WEBHOOK_SECRET="whsec_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"

# === CLAUDE AI (Optionnel) ===
CLAUDE_API_KEY="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"

# === CLOUDFLARE (Déploiement) ===
CLOUDFLARE_API_TOKEN="b909407c94ef1c9232d0391"
```

---

## 🚀 PROCHAINES ÉTAPES

1. **Obtenez vos clés LIVE** depuis Stripe Dashboard
2. **Mettez à jour `.env`** avec les nouvelles clés
3. **Configurez Cloudflare Workers** avec les clés
4. **Testez localement** avant de déployer
5. **Déployez en production**

---

## 📞 SUPPORT

### Liens utiles
- **Stripe Dashboard** : https://dashboard.stripe.com/
- **Clés API** : https://dashboard.stripe.com/apikeys
- **Webhooks** : https://dashboard.stripe.com/webhooks
- **Documentation** : https://stripe.com/docs

### En cas de problème
1. Vérifiez que vous êtes en mode LIVE dans Stripe
2. Vérifiez que les clés commencent par `pk_live_` et `sk_live_`
3. Vérifiez les logs Stripe pour les erreurs
4. Testez avec une carte de test Stripe

---

**Date** : $(date)
**Status** : 📝 Guide prêt
**Action** : Obtenez vos clés LIVE depuis Stripe Dashboard
