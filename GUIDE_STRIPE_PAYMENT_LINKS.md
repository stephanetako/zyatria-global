# 🔗 GUIDE COMPLET : CRÉATION DES PAYMENT LINKS STRIPE

Ce guide vous accompagne étape par étape pour créer vos liens de paiement Stripe et les intégrer sur votre site.

---

## 📋 TABLE DES MATIÈRES

1. [Prérequis](#prérequis)
2. [Connexion à Stripe](#connexion-à-stripe)
3. [Création des produits](#création-des-produits)
4. [Génération des Payment Links](#génération-des-payment-links)
5. [Intégration dans le site](#intégration-dans-le-site)
6. [Tests](#tests)
7. [Passage en LIVE](#passage-en-live)
8. [Dépannage](#dépannage)

---

## 🔧 PRÉREQUIS

Avant de commencer, assurez-vous d'avoir :

- ✅ Un compte Stripe (gratuit)
- ✅ Les informations de votre entreprise
- ✅ Accès au code de votre site

**Budget** : Gratuit (Stripe prend 2.9% + 0.30€ par transaction)

---

## 1. CONNEXION À STRIPE

### 1.1 Créer un compte (si nécessaire)

1. Allez sur : **https://dashboard.stripe.com/register**
2. Remplissez le formulaire avec :
   - **Email professionnel** : votre-email@entreprise.com
   - **Nom de l'entreprise** : ZyatrIA Global
   - **Pays** : Canada (ou votre pays)
3. Validez votre email
4. Complétez votre profil d'entreprise

### 1.2 Se connecter

1. Allez sur : **https://dashboard.stripe.com**
2. Connectez-vous

---

## 2. CRÉATION DES PRODUITS

### ⚠️ MODE TEST IMPORTANT

**Avant toute chose**, assurez-vous d'être en **Mode Test** :

```
┌─────────────────────────────┐
│  🔵 Mode Test   [Toggle]    │  ← Doit être ACTIVÉ
└─────────────────────────────┘
```

En haut à gauche du dashboard, le toggle doit afficher **"Test mode"** avec un badge bleu.

---

### 2.1 Créer le plan STARTER

1. **Cliquez sur "Products"** dans le menu de gauche
2. **Cliquez sur "+ Add product"**

**Remplissez le formulaire :**

#### **Informations du produit**

```
┌─────────────────────────────────────────────┐
│ Product information                         │
├─────────────────────────────────────────────┤
│                                             │
│ Name (Required):                            │
│ ┌─────────────────────────────────────────┐ │
│ │ Starter Plan                            │ │
│ └─────────────────────────────────────────┘ │
│                                             │
│ Description (Optional):                     │
│ ┌─────────────────────────────────────────┐ │
│ │ 1 micro-agent IA                        │ │
│ │ Réponses automatiques 24/7              │ │
│ │ Support email                           │ │
│ └─────────────────────────────────────────┘ │
│                                             │
│ Statement descriptor (Optional):            │
│ [Laissez vide]                              │
│                                             │
│ Unit label (Optional):                      │
│ [Laissez vide]                              │
└─────────────────────────────────────────────┘
```

#### **Pricing (Tarification)**

```
┌─────────────────────────────────────────────┐
│ Pricing                                     │
├─────────────────────────────────────────────┤
│                                             │
│ Pricing model:                              │
│ ● Standard pricing                          │
│ ○ Package pricing                           │
│ ○ Graduated pricing                         │
│                                             │
│ Price:                                      │
│ ┌──────┐  ┌──────────────┐                 │
│ │  49  │  │     EUR €    │                 │
│ └──────┘  └──────────────┘                 │
│                                             │
│ Billing period:                             │
│ ● Recurring                                 │
│   ┌──────────────┐                         │
│   │   Monthly    │                         │
│   └──────────────┘                         │
│                                             │
│ ☐ Usage is metered                          │  ← DÉCOCHER
│                                             │
└─────────────────────────────────────────────┘
```

3. **Cliquez sur "Save product"** en haut à droite

✅ **Votre premier produit est créé !**

---

### 2.2 Créer le plan BUSINESS

Répétez exactement le même processus :

**Product information:**
```
Name: Business Plan

Description:
3 micro-agents IA
Automatisations avancées
Intégrations CRM (HubSpot, Salesforce, etc.)
Support prioritaire
```

**Pricing:**
```
Price: 149
Currency: EUR €
Billing period: Monthly (Recurring)
```

**Cliquez sur "Save product"**

✅ **Votre deuxième produit est créé !**

---

### 2.3 Plan ENTERPRISE

⚠️ **NE CRÉEZ PAS** de produit pour Enterprise, car c'est un plan **sur mesure** (custom pricing).

Les clients Enterprise contactent directement via la page `/demo`.

---

## 3. GÉNÉRATION DES PAYMENT LINKS

Maintenant, nous allons créer les liens de paiement publics pour chaque produit.

### 3.1 Payment Link pour STARTER (EUR)

1. **Allez dans "Products"** → Cliquez sur **"Starter Plan"**
2. En haut à droite, **cliquez sur "Create payment link"**

**Configurez le Payment Link :**

```
┌─────────────────────────────────────────────┐
│ Payment link                                │
├─────────────────────────────────────────────┤
│                                             │
│ Product:                                    │
│ Starter Plan - €49.00 / month               │
│                                             │
│ Quantity:                                   │
│ ○ Fixed quantity (1)                        │
│ ● Customer chooses quantity                 │
│   ☐ Allow quantity adjustment               │
│                                             │
│ Collect customer information:               │
│ ☑ Email address (required)                  │
│ ☑ Name                                      │
│ ☐ Phone number                              │
│ ☐ Billing address                           │
│ ☐ Shipping address                          │
│                                             │
│ After payment:                              │
│ ○ Show a confirmation page                  │
│ ● Redirect to a URL                         │
│   ┌─────────────────────────────────────┐   │
│   │ https://votre-site.com/success      │   │
│   └─────────────────────────────────────┘   │
│                                             │
│ Allow promotion codes:                      │
│ ☑ Yes                                       │
│                                             │
│ Require billing address:                    │
│ ○ Always                                    │
│ ● Only if necessary for taxes               │
│ ○ Never                                     │
│                                             │
│ Collect tax IDs:                            │
│ ☐ Optional                                  │
│                                             │
└─────────────────────────────────────────────┘
```

**Paramètres recommandés :**
- ✅ Email & Name (requis)
- ✅ Redirect vers votre page `/success`
- ✅ Allow promotion codes (pour les coupons)
- ✅ Billing address uniquement si nécessaire

3. **Cliquez sur "Create link"**

**🎉 Votre lien est généré !**

Il ressemble à ceci :
```
https://buy.stripe.com/test_XXXXXXXXXXXXXXXXX
```

4. **COPIEZ CE LIEN** et gardez-le précieusement ! 📋

---

### 3.2 Payment Link pour BUSINESS (EUR)

Répétez exactement le même processus pour le plan Business :

1. Products → **"Business Plan"** → **"Create payment link"**
2. Mêmes paramètres que Starter
3. **Copiez le lien généré** 📋

---

### 3.3 Créer les liens pour USD et CAD (Optionnel)

Si vous voulez offrir plusieurs devises :

#### **Option 1 : Multi-Currency Payment Links** (Recommandé)

Stripe peut afficher automatiquement les prix dans la devise locale du client :

1. Allez dans **Settings** → **Payment methods**
2. Activez **"Presentment currencies"**
3. Sélectionnez : EUR, USD, CAD

Avec cette option, **un seul lien suffit** ! Stripe affichera automatiquement le prix dans la devise du client.

#### **Option 2 : Créer des prix séparés** (Plus de contrôle)

Pour créer des prix spécifiques en USD et CAD :

1. Allez dans le produit (ex: Starter Plan)
2. Cliquez sur **"Add another price"**
3. Créez un prix à **52 USD**
4. Créez un autre prix à **69 CAD**
5. Générez des Payment Links pour chaque devise

---

## 4. INTÉGRATION DANS LE SITE

Maintenant que vous avez vos liens, il est temps de les intégrer !

### 4.1 Ouvrir le fichier de configuration

Le fichier **`src/config/stripe-links.ts`** a déjà été créé pour vous.

Ouvrez-le et vous verrez :

```typescript
export const STRIPE_TEST_LINKS = {
  starter: {
    eur: 'https://buy.stripe.com/test_REMPLACEZ_PAR_VOTRE_LIEN_STARTER_EUR',
    usd: 'https://buy.stripe.com/test_REMPLACEZ_PAR_VOTRE_LIEN_STARTER_USD',
    cad: 'https://buy.stripe.com/test_REMPLACEZ_PAR_VOTRE_LIEN_STARTER_CAD',
  },
  business: {
    eur: 'https://buy.stripe.com/test_REMPLACEZ_PAR_VOTRE_LIEN_BUSINESS_EUR',
    usd: 'https://buy.stripe.com/test_REMPLACEZ_PAR_VOTRE_LIEN_BUSINESS_USD',
    cad: 'https://buy.stripe.com/test_REMPLACEZ_PAR_VOTRE_LIEN_BUSINESS_CAD',
  },
};
```

### 4.2 Remplacer les liens

**Remplacez** les liens par vos vrais liens Stripe :

```typescript
export const STRIPE_TEST_LINKS = {
  starter: {
    eur: 'https://buy.stripe.com/test_14k8wA7EQ0aQ5by001',  // ✅ Votre vrai lien
    usd: 'https://buy.stripe.com/test_14k8wA7EQ0aQ5by002',  // Si vous en avez un
    cad: 'https://buy.stripe.com/test_14k8wA7EQ0aQ5by003',  // Si vous en avez un
  },
  business: {
    eur: 'https://buy.stripe.com/test_28o4gk0gofZG2Vm004',  // ✅ Votre vrai lien
    usd: 'https://buy.stripe.com/test_28o4gk0gofZG2Vm005',  // Si vous en avez un
    cad: 'https://buy.stripe.com/test_28o4gk0gofZG2Vm006',  // Si vous en avez un
  },
};
```

**Si vous n'avez qu'un lien EUR**, vous pouvez mettre le même lien pour toutes les devises :

```typescript
export const STRIPE_TEST_LINKS = {
  starter: {
    eur: 'https://buy.stripe.com/test_14k8wA7EQ0aQ5by001',
    usd: 'https://buy.stripe.com/test_14k8wA7EQ0aQ5by001',  // Même lien
    cad: 'https://buy.stripe.com/test_14k8wA7EQ0aQ5by001',  // Même lien
  },
  // ...
};
```

### 4.3 Sauvegarder le fichier

✅ **C'est tout !** Tous les liens de paiement sur votre site sont maintenant à jour !

Les liens apparaissent dans :
- ✅ Section Pricing (bouton "Payer maintenant")
- ✅ Section CTA Final (lien "Déjà décidé ? S'abonner maintenant")
- ✅ Toute autre section où vous ajoutez des liens de paiement

---

## 5. TESTS

### 5.1 Tester les liens en mode TEST

1. **Allez sur votre site** (local ou déployé)
2. **Cliquez sur le bouton "Payer maintenant"** dans la section Pricing
3. **Vous devriez être redirigé** vers la page de paiement Stripe

### 5.2 Effectuer un paiement test

Utilisez les **cartes de test Stripe** :

**Carte de crédit qui fonctionne :**
```
Numéro : 4242 4242 4242 4242
Date : N'importe quelle date future (ex: 12/25)
CVC : N'importe quel 3 chiffres (ex: 123)
Code postal : N'importe lequel
```

**Carte qui sera refusée :**
```
Numéro : 4000 0000 0000 0002
```

Plus de cartes de test : https://stripe.com/docs/testing

### 5.3 Vérifier le paiement dans Stripe

1. Allez dans **Stripe Dashboard** → **Payments**
2. Vous devriez voir votre paiement test
3. Le statut doit être **"Succeeded"** (Réussi)

✅ **Si vous voyez le paiement, tout fonctionne !**

---

## 6. PASSAGE EN LIVE

Une fois que tout fonctionne en mode TEST, vous pouvez passer en production.

### 6.1 Activer votre compte Stripe

Avant de passer en LIVE, Stripe vous demandera de :

1. **Vérifier votre identité** (pièce d'identité)
2. **Fournir les informations bancaires** (pour recevoir l'argent)
3. **Compléter les informations fiscales**

Allez dans : **Settings** → **Business settings** → **Complete your profile**

### 6.2 Créer les produits LIVE

1. **Désactivez le Mode Test** (toggle en haut à gauche)
2. **Répétez les étapes 2 et 3** pour créer vos produits en LIVE
3. **Copiez les nouveaux liens LIVE**

### 6.3 Mettre à jour le code

Dans `src/config/stripe-links.ts` :

```typescript
export const STRIPE_LIVE_LINKS = {
  starter: {
    eur: 'https://buy.stripe.com/VOTRE_LIEN_LIVE_STARTER',  // Sans "test_"
    // ...
  },
  business: {
    eur: 'https://buy.stripe.com/VOTRE_LIEN_LIVE_BUSINESS',  // Sans "test_"
    // ...
  },
};

// ⚠️ CHANGEZ CETTE VALEUR POUR PASSER EN LIVE
export const USE_TEST_MODE = false;  // ← false = Mode LIVE
```

### 6.4 Déployer

1. **Commitez et pushez** vos changements sur GitHub
2. **Cloudflare Pages** va automatiquement déployer votre site
3. **Testez avec une vraie carte** (vous serez réellement débité !)

---

## 7. DÉPANNAGE

### ❌ "Le lien ne fonctionne pas"

**Solutions :**
1. Vérifiez que le lien commence par `https://buy.stripe.com/`
2. Vérifiez qu'il n'y a pas d'espace avant ou après
3. Vérifiez que vous êtes en Mode Test si c'est un lien test

### ❌ "Page Stripe ne se charge pas"

**Solutions :**
1. Vérifiez votre connexion internet
2. Essayez dans un autre navigateur
3. Désactivez les bloqueurs de publicité

### ❌ "Paiement refusé"

**Solutions :**
- En **Mode Test** : Utilisez une carte de test valide (4242...)
- En **Mode Live** : Vérifiez les informations de la carte

### ❌ "Je ne reçois pas l'argent"

**Solutions :**
1. Vérifiez que votre compte Stripe est **activé**
2. Vérifiez vos **informations bancaires** dans Settings
3. Les paiements Stripe prennent **2-7 jours** pour arriver sur votre compte

---

## 📞 BESOIN D'AIDE ?

### Ressources Stripe

- **Documentation officielle** : https://stripe.com/docs
- **Support Stripe** : https://support.stripe.com
- **Cartes de test** : https://stripe.com/docs/testing

### Support ZyatrIA

Si vous avez besoin d'aide pour l'intégration technique :
- Consultez le README.md
- Vérifiez les fichiers de documentation dans le projet

---

## ✅ CHECKLIST FINALE

Avant de passer en production, vérifiez :

- [ ] Compte Stripe créé et vérifié
- [ ] Produits créés en Mode Test
- [ ] Payment Links générés en Mode Test
- [ ] Liens intégrés dans `src/config/stripe-links.ts`
- [ ] Tests réussis avec cartes de test
- [ ] Paiements visibles dans Stripe Dashboard
- [ ] Page `/success` fonctionne correctement
- [ ] Compte Stripe activé (informations bancaires)
- [ ] Produits recréés en Mode Live
- [ ] Liens LIVE intégrés
- [ ] `USE_TEST_MODE = false` dans le code
- [ ] Site déployé en production
- [ ] Test final avec une vraie carte

---

## 🎉 FÉLICITATIONS !

Votre système de paiement est maintenant opérationnel ! 💰

Vos clients peuvent acheter vos plans directement depuis votre site, et vous recevez l'argent automatiquement sur votre compte bancaire.

**Prochaines étapes recommandées :**
1. Créer des coupons de réduction dans Stripe
2. Configurer les emails de confirmation
3. Mettre en place des webhooks pour l'automatisation
4. Analyser vos ventes dans le Dashboard Stripe

---

**Fait avec ❤️ pour ZyatrIA Global**
