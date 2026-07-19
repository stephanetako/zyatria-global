# 🚀 PASSER EN MODE LIVE - GUIDE RAPIDE

## ❌ PROBLÈME ACTUEL
Vous êtes en **MODE TEST** dans Stripe. Tous vos liens contiennent `test_` et ne fonctionnent pas en production.

## ✅ SOLUTION EN 3 ÉTAPES

### ÉTAPE 1 : Activer le Mode Live dans Stripe

1. Ouvrez votre Dashboard Stripe : https://dashboard.stripe.com
2. **En haut à droite**, trouvez le toggle **"Test mode"**
3. **CLIQUEZ pour le DÉSACTIVER** → Vous passez en mode LIVE
4. Vous verrez maintenant vos données de PRODUCTION

### ÉTAPE 2 : Créer vos produits en Mode Live

Allez dans **Products** et créez :

#### 🟢 STARTER
- **Paiement unique** : 997 CAD
- **Mensuel** : 97 CAD/mois

#### 🔵 PROFESSIONAL  
- **Paiement unique** : 2997 CAD
- **Mensuel** : 297 CAD/mois

#### 🟣 ENTERPRISE
- **Paiement unique** : 9997 CAD
- **Mensuel** : 997 CAD/mois (ou 2499 CAD comme dans votre test)

#### 🤖 MICRO-AGENTS
- Lead Qualification : 197 CAD/mois
- Customer Support : 147 CAD/mois
- Appointments : 127 CAD/mois
- Prospect Followup : 177 CAD/mois
- Real Estate : 247 CAD/mois
- E-commerce : 197 CAD/mois

#### 🎯 SERVICES
- Audit : 497 CAD
- Consultation : 147 CAD

### ÉTAPE 3 : Créer les Payment Links

Pour CHAQUE produit :

1. Allez dans **Payment Links** (en mode Live)
2. Cliquez **"+ New"**
3. Sélectionnez le produit
4. Copiez le lien (format : `https://buy.stripe.com/XXXXXX` **SANS** `test_`)

### ÉTAPE 4 : Mettre à jour le code

Ouvrez `src/config/stripe-links.ts` et remplacez :

```typescript
export const STRIPE_PAYMENT_LINKS = {
  starter: {
    oneTime: 'https://buy.stripe.com/VOTRE_LIEN_LIVE_ICI',
    monthly: 'https://buy.stripe.com/VOTRE_LIEN_LIVE_ICI',
  },
  professional: {
    oneTime: 'https://buy.stripe.com/VOTRE_LIEN_LIVE_ICI',
    monthly: 'https://buy.stripe.com/VOTRE_LIEN_LIVE_ICI',
  },
  enterprise: {
    oneTime: 'https://buy.stripe.com/VOTRE_LIEN_LIVE_ICI',
    monthly: 'https://buy.stripe.com/VOTRE_LIEN_LIVE_ICI',
  },
  microAgents: {
    leadQualification: 'https://buy.stripe.com/VOTRE_LIEN_LIVE_ICI',
    customerSupport: 'https://buy.stripe.com/VOTRE_LIEN_LIVE_ICI',
    appointments: 'https://buy.stripe.com/VOTRE_LIEN_LIVE_ICI',
    prospectFollowup: 'https://buy.stripe.com/VOTRE_LIEN_LIVE_ICI',
    realEstate: 'https://buy.stripe.com/VOTRE_LIEN_LIVE_ICI',
    ecommerce: 'https://buy.stripe.com/VOTRE_LIEN_LIVE_ICI',
  },
  services: {
    audit: 'https://buy.stripe.com/VOTRE_LIEN_LIVE_ICI',
    consultation: 'https://buy.stripe.com/VOTRE_LIEN_LIVE_ICI',
  },
};
```

### ÉTAPE 5 : Configurer les clés API Live

1. Dans Stripe (mode Live) → **Developers** → **API keys**
2. Copiez :
   - **Publishable key** : `pk_live_...`
   - **Secret key** : `sk_live_...` (cliquez "Reveal")

3. Mettez à jour votre `.env` :

```env
STRIPE_SECRET_KEY=sk_live_VOTRE_CLE_ICI
PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_VOTRE_CLE_ICI
```

4. **Sur Cloudflare Pages** → Settings → Environment variables :
   - Ajoutez les mêmes variables avec les clés LIVE

## 🎯 CHECKLIST FINALE

- [ ] Mode Test DÉSACTIVÉ dans Stripe
- [ ] Tous les produits créés en mode Live
- [ ] Tous les Payment Links créés en mode Live
- [ ] Fichier `stripe-links.ts` mis à jour avec les liens Live
- [ ] Clés API Live dans `.env`
- [ ] Variables d'environnement Cloudflare mises à jour
- [ ] Test d'un paiement réel (petit montant)

## ⚠️ IMPORTANT

- Les liens `test_` ne fonctionnent QUE en mode test
- Les liens Live ne contiennent PAS `test_`
- Ne commitez JAMAIS vos clés API sur GitHub
- Testez avec une vraie carte (vous serez facturé)

## 🆘 BESOIN D'AIDE ?

Si vous avez des questions, demandez-moi !
