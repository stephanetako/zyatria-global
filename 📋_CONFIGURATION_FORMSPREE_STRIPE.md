# 📋 Guide de Configuration Formspree & Stripe

## 🎯 Vue d'ensemble

Ce guide vous explique comment **personnaliser** et **configurer** Formspree et Stripe pour votre site ZyatrIA Global.

---

## 📧 CONFIGURATION FORMSPREE

### Étape 1 : Créer un compte Formspree

1. **Allez sur** : https://formspree.io
2. **Créez un compte gratuit** (ou connectez-vous)
3. **Créez un nouveau formulaire** :
   - Cliquez sur "New Form"
   - Donnez-lui un nom : "ZyatrIA Contact Form"
   - Choisissez votre email de réception

### Étape 2 : Récupérer votre Form ID

Après création, vous obtiendrez un **Form ID** qui ressemble à :
```
xeelvrdl
```

Votre endpoint complet sera :
```
https://formspree.io/f/xeelvrdl
```

### Étape 3 : Configurer dans votre site

**Fichier à modifier** : `src/config/formspree.ts`

```typescript
// Remplacez par VOTRE Form ID
export const FORMSPREE_ENDPOINT = 'https://formspree.io/f/VOTRE_FORM_ID';
```

### Étape 4 : Options avancées Formspree

Dans le dashboard Formspree, vous pouvez configurer :

- ✅ **Email de confirmation** : Envoyer un email automatique au client
- ✅ **Redirection** : Rediriger vers une page de remerciement
- ✅ **Spam protection** : Activer reCAPTCHA
- ✅ **Webhooks** : Intégrer avec d'autres services
- ✅ **Notifications** : Recevoir des alertes Slack/Discord

### Exemple de configuration avancée :

```typescript
// src/config/formspree.ts
export const FORMSPREE_CONFIG = {
  endpoint: 'https://formspree.io/f/xeelvrdl',
  
  // Options
  options: {
    replyTo: true, // Permet de répondre directement
    subject: 'Nouveau contact depuis ZyatrIA Global',
    redirectUrl: '/merci', // Page de remerciement
  },
  
  // Champs personnalisés
  fields: {
    name: 'required',
    email: 'required',
    company: 'optional',
    message: 'required',
  }
};
```

---

## 💳 CONFIGURATION STRIPE

### Étape 1 : Créer un compte Stripe

1. **Allez sur** : https://dashboard.stripe.com
2. **Créez un compte** (ou connectez-vous)
3. **Activez votre compte** (vérification d'identité)

### Étape 2 : Créer vos produits

#### Pour chaque plan (Starter, Professional, Enterprise) :

1. **Allez dans** : Produits → Créer un produit
2. **Remplissez** :
   ```
   Nom : Bot IA Starter
   Description : Solution idéale pour démarrer avec l'IA
   ```
3. **Ajoutez 2 prix** :
   - **Paiement unique** : 5 000 $CA
   - **Abonnement mensuel** : 299 $CA/mois

### Étape 3 : Créer les Payment Links

Pour chaque prix créé :

1. **Cliquez sur** : "Créer un lien de paiement"
2. **Configurez** :
   - ✅ Collecter l'adresse de facturation
   - ✅ Permettre les codes promo
   - ✅ Personnaliser le message de confirmation
3. **Copiez le lien généré**

Vous obtiendrez des liens comme :
```
https://buy.stripe.com/test_XXXXXXXXXX
```

### Étape 4 : Configurer dans votre site

**Fichier à modifier** : `src/config/stripe-links.ts`

```typescript
export const stripeLinks = {
  // Plans principaux
  starter: {
    oneTime: 'https://buy.stripe.com/VOTRE_LIEN_STARTER_UNIQUE',
    monthly: 'https://buy.stripe.com/VOTRE_LIEN_STARTER_MENSUEL',
  },
  professional: {
    oneTime: 'https://buy.stripe.com/VOTRE_LIEN_PRO_UNIQUE',
    monthly: 'https://buy.stripe.com/VOTRE_LIEN_PRO_MENSUEL',
  },
  enterprise: {
    oneTime: 'https://buy.stripe.com/VOTRE_LIEN_ENTERPRISE_UNIQUE',
    monthly: 'https://buy.stripe.com/VOTRE_LIEN_ENTERPRISE_MENSUEL',
  },
  
  // Services complémentaires
  services: {
    audit: 'https://buy.stripe.com/VOTRE_LIEN_AUDIT',
    consultation: 'https://buy.stripe.com/VOTRE_LIEN_CONSULTATION',
  },
};
```

### Étape 5 : Mettre à jour les prix

**Fichier à modifier** : `src/config/stripe-links.ts`

```typescript
export const productDetails = {
  starter: {
    name: 'Bot IA Starter',
    subtitle: 'Déploiement Initial',
    description: 'Solution idéale pour démarrer avec l\'IA',
    oneTime: {
      price: 5000, // ← Modifiez ici
      currency: 'CAD',
      label: 'Paiement unique',
    },
    monthly: {
      price: 299, // ← Modifiez ici
      currency: 'CAD',
      label: 'Abonnement mensuel',
    },
  },
  // ... répétez pour les autres plans
};
```

---

## 🔐 VARIABLES D'ENVIRONNEMENT

### Fichier `.env` (optionnel pour fonctionnalités avancées)

```bash
# Formspree
FORMSPREE_FORM_ID=xeelvrdl

# Stripe (pour API avancée)
STRIPE_PUBLIC_KEY=pk_test_XXXXXXXXXX
STRIPE_SECRET_KEY=sk_test_XXXXXXXXXX
STRIPE_WEBHOOK_SECRET=whsec_XXXXXXXXXX

# Stripe (production)
STRIPE_PUBLIC_KEY_LIVE=pk_live_XXXXXXXXXX
STRIPE_SECRET_KEY_LIVE=sk_live_XXXXXXXXXX
```

### Comment obtenir les clés Stripe :

1. **Dashboard Stripe** → Développeurs → Clés API
2. **Copiez** :
   - Clé publique (commence par `pk_`)
   - Clé secrète (commence par `sk_`)

---

## 🎨 PERSONNALISATION AVANCÉE

### 1. Personnaliser les emails Formspree

Dans le dashboard Formspree :
- **Settings** → **Email Templates**
- Personnalisez le sujet et le contenu

### 2. Personnaliser la page de paiement Stripe

Dans chaque Payment Link :
- **Branding** : Ajoutez votre logo
- **Couleurs** : Personnalisez les couleurs
- **Messages** : Personnalisez les messages de confirmation

### 3. Ajouter des webhooks Stripe

Pour recevoir des notifications en temps réel :

1. **Dashboard Stripe** → Développeurs → Webhooks
2. **Ajoutez un endpoint** : `https://votre-site.com/api/stripe-webhook`
3. **Sélectionnez les événements** :
   - `checkout.session.completed`
   - `payment_intent.succeeded`
   - `customer.subscription.created`

---

## 📊 TABLEAU RÉCAPITULATIF

| Service | Fichier de config | Ce qu'il faut changer |
|---------|-------------------|----------------------|
| **Formspree** | `src/config/formspree.ts` | Form ID |
| **Stripe Links** | `src/config/stripe-links.ts` | URLs des Payment Links |
| **Prix** | `src/config/stripe-links.ts` | Montants dans `productDetails` |
| **Variables d'env** | `.env` | Clés API (optionnel) |

---

## ✅ CHECKLIST DE CONFIGURATION

### Formspree :
- [ ] Compte créé sur Formspree.io
- [ ] Formulaire créé
- [ ] Form ID copié
- [ ] `src/config/formspree.ts` mis à jour
- [ ] Email de réception configuré
- [ ] Test du formulaire effectué

### Stripe :
- [ ] Compte créé sur Stripe
- [ ] Compte activé (vérification)
- [ ] 3 produits créés (Starter, Pro, Enterprise)
- [ ] 6 prix créés (2 par produit)
- [ ] 8 Payment Links créés (6 plans + 2 services)
- [ ] `src/config/stripe-links.ts` mis à jour
- [ ] Branding Stripe personnalisé
- [ ] Test de paiement effectué

---

## 🚀 COMMANDES UTILES

### Tester localement :
```bash
npm run dev
```

### Vérifier la configuration :
```bash
# Vérifier que les liens Stripe sont valides
node test-stripe-links.js
```

### Déployer les changements :
```bash
npm run build
```

---

## 🆘 DÉPANNAGE

### Formspree ne reçoit pas les emails :
1. Vérifiez le Form ID dans `src/config/formspree.ts`
2. Vérifiez les spams de votre boîte email
3. Vérifiez le quota Formspree (50 soumissions/mois en gratuit)

### Stripe ne redirige pas :
1. Vérifiez que les liens sont corrects
2. Vérifiez que vous êtes en mode test (cartes de test)
3. Vérifiez les logs dans le dashboard Stripe

### Les prix ne s'affichent pas :
1. Vérifiez `src/config/stripe-links.ts`
2. Vérifiez que `productDetails` est à jour
3. Rechargez la page avec Ctrl+F5

---

## 📞 SUPPORT

- **Formspree** : https://help.formspree.io
- **Stripe** : https://support.stripe.com
- **Documentation Stripe** : https://stripe.com/docs

---

## 🎯 PROCHAINES ÉTAPES

Après configuration :

1. ✅ Testez tous les formulaires
2. ✅ Testez tous les paiements (mode test)
3. ✅ Passez en mode production Stripe
4. ✅ Configurez les webhooks
5. ✅ Configurez les emails de confirmation
6. ✅ Ajoutez Google Analytics pour suivre les conversions

---

**Dernière mise à jour** : Janvier 2025
**Version** : 1.0
