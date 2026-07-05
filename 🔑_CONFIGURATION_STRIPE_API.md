# 🔑 CONFIGURATION STRIPE API - GUIDE COMPLET

## 🎯 Pourquoi Utiliser l'API au Lieu des Payment Links ?

### ✅ Avantages de l'API :
- Plus flexible et professionnel
- Meilleur contrôle sur le processus de paiement
- Peut créer des sessions personnalisées
- Meilleure expérience utilisateur
- Tracking et analytics avancés

### ❌ Inconvénients des Payment Links :
- Liens statiques
- Moins de contrôle
- Difficile à maintenir (8 liens différents)

---

## 📋 ÉTAPE 1 : Obtenir Tes Clés API

### 1️⃣ Va sur Stripe Dashboard
```
https://dashboard.stripe.com/test/apikeys
```

### 2️⃣ Assure-toi d'être en MODE TEST
- Toggle en haut à droite doit être sur "Test mode"

### 3️⃣ Tu verras 2 clés :

#### **Publishable key (Clé publique)** ✅ SAFE
```
pk_test_51xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```
→ Commence par `pk_test_`
→ **Tu peux la partager** (elle est publique)
→ Utilisée dans le navigateur

#### **Secret key (Clé secrète)** ⚠️ DANGER
```
sk_test_51xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```
→ Commence par `sk_test_`
→ **NE JAMAIS la partager publiquement**
→ Utilisée uniquement côté serveur

### 4️⃣ Copie les 2 clés
- Clique sur "Reveal test key" pour voir la clé secrète
- Copie-les dans un endroit sûr (Notepad, Notes, etc.)

---

## 📋 ÉTAPE 2 : Configurer le Fichier .env

### 1️⃣ Ouvre le fichier `.env` à la racine du projet

### 2️⃣ Ajoute ces lignes à la fin :

```env
# Stripe API Keys
# Get them from: https://dashboard.stripe.com/test/apikeys
STRIPE_PUBLISHABLE_KEY=pk_test_COLLE_TA_CLE_PUBLIQUE_ICI
STRIPE_SECRET_KEY=sk_test_COLLE_TA_CLE_SECRETE_ICI
```

### 3️⃣ Remplace les valeurs :

**AVANT :**
```env
STRIPE_PUBLISHABLE_KEY=pk_test_COLLE_TA_CLE_PUBLIQUE_ICI
STRIPE_SECRET_KEY=sk_test_COLLE_TA_CLE_SECRETE_ICI
```

**APRÈS (exemple) :**
```env
STRIPE_PUBLISHABLE_KEY=pk_test_51JxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxK
STRIPE_SECRET_KEY=sk_test_51JxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxK
```

### 4️⃣ Sauvegarde le fichier

---

## 📋 ÉTAPE 3 : Créer les Price IDs

Maintenant qu'on a les clés API, on a besoin des **Price IDs** pour chaque plan.

### Tu as déjà créé un prix :
```
price_1TDbrC1Ja5hxTfLBd8UUbOzx
```
→ C'est parfait ! On va utiliser ça !

### Crée les autres prix :

#### 1️⃣ Va sur Stripe Dashboard → Products
```
https://dashboard.stripe.com/test/products
```

#### 2️⃣ Pour chaque plan, crée un prix :

**STARTER - Paiement Unique** (déjà fait ✅)
```
Price ID: price_1TDbrC1Ja5hxTfLBd8UUbOzx
```

**STARTER - Mensuel**
```
Nom: Bot IA Starter - Mensuel
Prix: 299 CAD
Type: Recurring → Monthly
→ Copie le Price ID généré
```

**PROFESSIONAL - Paiement Unique**
```
Nom: Bot IA Professional - Paiement Unique
Prix: 15000 CAD
Type: One-time
→ Copie le Price ID généré
```

**PROFESSIONAL - Mensuel**
```
Nom: Bot IA Professional - Mensuel
Prix: 799 CAD
Type: Recurring → Monthly
→ Copie le Price ID généré
```

**ENTERPRISE - Paiement Unique**
```
Nom: Bot IA Enterprise - Paiement Unique
Prix: 45000 CAD
Type: One-time
→ Copie le Price ID généré
```

**ENTERPRISE - Mensuel**
```
Nom: Bot IA Enterprise - Mensuel
Prix: 2499 CAD
Type: Recurring → Monthly
→ Copie le Price ID généré
```

**AUDIT IA**
```
Nom: Audit IA Complet
Prix: 2500 CAD
Type: One-time
→ Copie le Price ID généré
```

**CONSULTATION**
```
Nom: Consultation Stratégique
Prix: 500 CAD
Type: One-time
→ Copie le Price ID généré
```

---

## 📋 ÉTAPE 4 : Me Donner les Informations

Une fois que tu as :
1. ✅ Les 2 clés API (publique et secrète)
2. ✅ Les 8 Price IDs

**Donne-moi tout dans ce format :**

```
CLÉS API:
Publishable: pk_test_51xxxxx
Secret: sk_test_51xxxxx

PRICE IDS:
Starter One-time: price_1TDbrC1Ja5hxTfLBd8UUbOzx
Starter Monthly: price_xxxxx
Professional One-time: price_xxxxx
Professional Monthly: price_xxxxx
Enterprise One-time: price_xxxxx
Enterprise Monthly: price_xxxxx
Audit: price_xxxxx
Consultation: price_xxxxx
```

---

## 🔒 SÉCURITÉ IMPORTANTE

### ⚠️ NE JAMAIS :
- Partager ta clé secrète publiquement
- La mettre dans le code frontend
- La commiter sur GitHub (le .env est déjà dans .gitignore)

### ✅ TOUJOURS :
- Garder la clé secrète dans le .env
- L'utiliser uniquement côté serveur (API routes)
- La clé publique peut être dans le code frontend

---

## 🎯 Prochaine Étape

Une fois que tu me donnes les clés et Price IDs, je vais :

1. ✅ Créer une API route sécurisée pour Stripe
2. ✅ Configurer le checkout dynamique
3. ✅ Mettre à jour les boutons de tarification
4. ✅ Ajouter la gestion des webhooks (optionnel)

---

## 📝 Checklist

- [ ] Obtenir la clé publique (pk_test_...)
- [ ] Obtenir la clé secrète (sk_test_...)
- [ ] Ajouter les clés dans le fichier .env
- [ ] Créer les 8 Price IDs sur Stripe
- [ ] Me donner toutes les informations

---

**Commence par obtenir tes clés API sur https://dashboard.stripe.com/test/apikeys** 🚀

**Ensuite, crée les autres Price IDs et donne-moi tout !** 💪
