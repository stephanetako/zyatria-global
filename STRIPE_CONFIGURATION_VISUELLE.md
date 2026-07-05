# 🎨 CONFIGURATION STRIPE - GUIDE VISUEL

## 🎯 Objectif
Configurer les paiements Stripe pour tester les 3 plans tarifaires de ZyatrIA Global.

---

## 📦 Les 3 Plans à Configurer

```
┌─────────────────────────────────────────────────────────────┐
│                    PLAN STARTER                              │
│  💰 Prix : 5 000 $CA (paiement unique)                      │
│  📝 Nom : Bot IA Starter                                     │
│  🎯 Description : Déploiement Initial                        │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                  PLAN PROFESSIONAL                           │
│  💰 Prix : 1 500 $CA (paiement unique)                      │
│  📝 Nom : Bot IA Professional                                │
│  🎯 Description : Déploiement 3 Bots                         │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                   PLAN ENTERPRISE                            │
│  💰 Prix : 45 000 $CA (paiement unique)                     │
│  📝 Nom : Bot IA Enterprise                                  │
│  🎯 Description : Suite Complète 7 Bots                      │
└─────────────────────────────────────────────────────────────┘
```

---

## 🔗 Méthode 1 : Payment Links (RECOMMANDÉ)

### ✅ Avantages
- ✅ Aucun code à écrire
- ✅ Configuration en 2 minutes
- ✅ Interface Stripe simple
- ✅ Parfait pour débuter

### 📋 Étapes

```
1. Dashboard Stripe
   ↓
2. Payment Links
   ↓
3. Créer un lien
   ↓
4. Copier l'URL
   ↓
5. Coller dans stripe-links.ts
```

### 🎯 Exemple de Configuration

**Dans Stripe Dashboard :**
```
Nom du produit : Bot IA Starter
Prix : 5000.00 CAD
Type : Paiement unique
```

**Résultat :**
```
URL générée : https://buy.stripe.com/test_xxxxxxxxxxxxx
```

**Dans ton code (`src/config/stripe-links.ts`) :**
```typescript
export const stripeLinks = {
  starter: {
    oneTime: 'https://buy.stripe.com/test_xxxxxxxxxxxxx', // ← COLLE ICI
  },
  // ...
};
```

---

## 🔧 Méthode 2 : Checkout Sessions (Avancé)

### ✅ Avantages
- ✅ Plus de contrôle
- ✅ Personnalisation avancée
- ✅ Webhooks intégrés

### ⚠️ Inconvénients
- ⚠️ Nécessite des clés API
- ⚠️ Plus de code à écrire
- ⚠️ Configuration plus complexe

### 📋 Configuration

**1. Récupérer les clés API**
```
Dashboard Stripe → Developers → API Keys

Publishable key : pk_test_xxxxxxxxxxxxx
Secret key      : sk_test_xxxxxxxxxxxxx
```

**2. Ajouter dans `.env`**
```bash
STRIPE_PUBLIC_KEY=pk_test_xxxxxxxxxxxxx
STRIPE_SECRET_KEY=sk_test_xxxxxxxxxxxxx
```

**3. Le code est déjà prêt !**
- API Route : `src/pages/api/create-checkout-session.ts`
- Composant : `src/components/pages/PaymentDemoPage.tsx`

---

## 🧪 Test avec Cartes Stripe

### Carte de Test Principale
```
┌─────────────────────────────────────┐
│  Numéro : 4242 4242 4242 4242       │
│  Date   : 12/25 (future)            │
│  CVC    : 123                       │
│  Résultat : ✅ SUCCÈS               │
└─────────────────────────────────────┘
```

### Autres Cartes de Test
```
┌─────────────────────────────────────┐
│  4000 0000 0000 0002                │
│  Résultat : ❌ REFUSÉ               │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│  4000 0027 6000 3184                │
│  Résultat : 🔐 3D SECURE            │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│  4000 0000 0000 9995                │
│  Résultat : ⚠️ FONDS INSUFFISANTS   │
└─────────────────────────────────────┘
```

---

## 🎯 Workflow de Test

```
┌─────────────────────────────────────────────────────────────┐
│  1. Créer Payment Link dans Stripe                          │
│     https://dashboard.stripe.com/test/payment-links         │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│  2. Copier l'URL générée                                     │
│     https://buy.stripe.com/test_xxxxx                        │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│  3. Coller dans src/config/stripe-links.ts                   │
│     stripeLinks.starter.oneTime = 'URL_ICI'                  │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│  4. Lancer le serveur                                        │
│     npm run dev                                              │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│  5. Ouvrir la page de test                                   │
│     http://localhost:4321/payment-demo                       │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│  6. Cliquer sur "Choisir ce plan"                            │
│     → Redirection vers Stripe Checkout                       │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│  7. Utiliser carte de test                                   │
│     4242 4242 4242 4242                                      │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│  8. Vérifier dans Dashboard Stripe                           │
│     https://dashboard.stripe.com/test/payments               │
└─────────────────────────────────────────────────────────────┘
```

---

## 📊 Structure des Fichiers

```
src/
├── config/
│   └── stripe-links.ts          ← CONFIGURER ICI
├── pages/
│   ├── payment-demo.astro       ← PAGE DE TEST
│   ├── pricing.astro            ← PAGE PRICING
│   └── api/
│       └── create-checkout-session.ts  ← API (optionnel)
└── components/
    └── pages/
        └── PaymentDemoPage.tsx  ← COMPOSANT DE TEST
```

---

## 🎨 Exemple Complet de Configuration

### Fichier : `src/config/stripe-links.ts`

```typescript
export const stripeLinks = {
  starter: {
    oneTime: 'https://buy.stripe.com/test_xxxxx',  // ← TON LIEN
    monthly: 'https://buy.stripe.com/test_xxxxx',  // ← TON LIEN
  },
  professional: {
    oneTime: 'https://buy.stripe.com/test_xxxxx',  // ← TON LIEN
    monthly: 'https://buy.stripe.com/test_xxxxx',  // ← TON LIEN
  },
  enterprise: {
    oneTime: 'https://buy.stripe.com/test_xxxxx',  // ← TON LIEN
    monthly: 'https://buy.stripe.com/test_xxxxx',  // ← TON LIEN
  },
  services: {
    audit: 'https://buy.stripe.com/test_xxxxx',        // ← TON LIEN
    consultation: 'https://buy.stripe.com/test_xxxxx', // ← TON LIEN
  },
} as const;
```

---

## ✅ Checklist de Test

```
[ ] Compte Stripe créé
[ ] Mode TEST activé (toggle en haut à droite)
[ ] Payment Link créé pour Starter
[ ] URL copiée
[ ] URL collée dans stripe-links.ts
[ ] Fichier sauvegardé
[ ] Serveur lancé (npm run dev)
[ ] Page /payment-demo ouverte
[ ] Bouton "Choisir ce plan" cliqué
[ ] Redirection vers Stripe OK
[ ] Carte 4242 4242 4242 4242 utilisée
[ ] Paiement complété
[ ] Paiement visible dans Dashboard Stripe
```

---

## 🚀 Action Immédiate

**COMMENCE PAR UN SEUL PLAN :**

1. Va sur : https://dashboard.stripe.com/test/payment-links
2. Clique sur "Nouveau lien de paiement"
3. Remplis :
   - Nom : `Bot IA Starter`
   - Prix : `5000 CAD`
   - Type : Paiement unique
4. Clique sur "Créer le lien"
5. Copie l'URL (commence par `https://buy.stripe.com/test_`)
6. Ouvre `src/config/stripe-links.ts`
7. Colle l'URL à la place de `stripeLinks.starter.oneTime`
8. Sauvegarde
9. Va sur `http://localhost:4321/payment-demo`
10. Teste !

**Si ça marche, crée les autres plans ! 🎉**

---

## 📞 Besoin d'Aide ?

Si tu bloques quelque part, dis-moi :
- À quelle étape tu es
- Quel message d'erreur tu vois
- Ce qui ne fonctionne pas

Je t'aide immédiatement ! 💪
