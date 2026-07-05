# 🎯 TESTER STRIPE MAINTENANT - GUIDE COMPLET

## 📋 Étape 1 : Créer un compte Stripe (si pas déjà fait)

1. Aller sur : https://dashboard.stripe.com/register
2. Créer un compte gratuit
3. Activer le **mode test** (toggle en haut à droite)

## 🔗 Étape 2 : Créer des Payment Links

### Option A : Payment Links (RECOMMANDÉ - Plus Simple)

1. **Aller dans Stripe Dashboard**
   - https://dashboard.stripe.com/test/payment-links

2. **Créer un Payment Link pour chaque plan :**

   **Plan Starter (5 000 $CA)**
   - Cliquer sur "Nouveau lien de paiement"
   - Nom du produit : `Bot IA Starter`
   - Prix : `5000 CAD`
   - Type : Paiement unique
   - Cliquer sur "Créer le lien"
   - **COPIER L'URL** (format: `https://buy.stripe.com/test_xxxxx`)

   **Plan Professional (1 500 $CA)**
   - Nom du produit : `Bot IA Professional`
   - Prix : `1500 CAD`
   - Type : Paiement unique
   - **COPIER L'URL**

   **Plan Enterprise (45 000 $CA)**
   - Nom du produit : `Bot IA Enterprise`
   - Prix : `45000 CAD`
   - Type : Paiement unique
   - **COPIER L'URL**

### Option B : Checkout Sessions (Plus Avancé)

Si tu veux utiliser l'API Stripe :

1. **Récupérer tes clés API**
   - Aller sur : https://dashboard.stripe.com/test/apikeys
   - Copier la **Publishable key** (commence par `pk_test_`)
   - Copier la **Secret key** (commence par `sk_test_`)

2. **Ajouter dans `.env`**
   ```bash
   STRIPE_PUBLIC_KEY=pk_test_xxxxxxxxxxxxx
   STRIPE_SECRET_KEY=sk_test_xxxxxxxxxxxxx
   ```

## 🔧 Étape 3 : Configurer les liens dans le code

### Si tu utilises Payment Links (Option A) :

Éditer `src/config/stripe-links.ts` :

```typescript
export const stripeLinks = {
  starter: {
    oneTime: 'https://buy.stripe.com/test_xxxxx', // TON LIEN ICI
    monthly: 'https://buy.stripe.com/test_xxxxx',
  },
  professional: {
    oneTime: 'https://buy.stripe.com/test_xxxxx', // TON LIEN ICI
    monthly: 'https://buy.stripe.com/test_xxxxx',
  },
  enterprise: {
    oneTime: 'https://buy.stripe.com/test_xxxxx', // TON LIEN ICI
    monthly: 'https://buy.stripe.com/test_xxxxx',
  },
};
```

## 🧪 Étape 4 : Tester

### 1. Lancer le serveur de dev
```bash
npm run dev
```

### 2. Ouvrir la page de test
```
http://localhost:4321/payment-demo
```

### 3. Cliquer sur "Choisir ce plan"
- Tu seras redirigé vers Stripe Checkout

### 4. Utiliser une carte de test
```
Numéro : 4242 4242 4242 4242
Date : 12/25 (n'importe quelle date future)
CVC : 123 (n'importe quel code à 3 chiffres)
```

### 5. Compléter le paiement
- Remplir les informations
- Cliquer sur "Payer"

### 6. Vérifier dans Stripe Dashboard
- Aller sur : https://dashboard.stripe.com/test/payments
- Tu devrais voir ton paiement test !

## 📊 Cartes de Test Stripe

### ✅ Paiement Réussi
```
4242 4242 4242 4242
```

### ❌ Paiement Refusé
```
4000 0000 0000 0002
```

### 🔐 Authentification 3D Secure
```
4000 0027 6000 3184
```

### ⚠️ Fonds Insuffisants
```
4000 0000 0000 9995
```

## 🎨 Pages où Stripe est utilisé

1. **Page de Pricing**
   - URL : `http://localhost:4321/pricing`
   - Boutons "Commencer" redirigent vers Stripe

2. **Page de Démo Paiements**
   - URL : `http://localhost:4321/payment-demo`
   - Page de test complète avec instructions

3. **Page d'Accueil**
   - Section pricing avec boutons Stripe

## 🔍 Vérifier que tout fonctionne

### Checklist :
- [ ] Compte Stripe créé
- [ ] Mode test activé
- [ ] Payment Links créés
- [ ] URLs copiées dans `stripe-links.ts`
- [ ] Serveur de dev lancé
- [ ] Page `/payment-demo` accessible
- [ ] Clic sur bouton redirige vers Stripe
- [ ] Paiement test complété
- [ ] Paiement visible dans Dashboard Stripe

## 🚨 Dépannage

### Problème : "Le lien de paiement n'est pas configuré"
**Solution :** Vérifier que les URLs dans `stripe-links.ts` sont bien remplies

### Problème : Redirection ne fonctionne pas
**Solution :** Vérifier la console (F12) pour les erreurs

### Problème : Paiement refusé
**Solution :** Utiliser la carte de test `4242 4242 4242 4242`

## 📝 Prochaines Étapes

Une fois les tests réussis :

1. **Passer en mode production**
   - Créer des vrais Payment Links (sans `test_`)
   - Remplacer les URLs dans `stripe-links.ts`

2. **Configurer les webhooks** (optionnel)
   - Pour recevoir des notifications de paiement
   - URL : `https://votre-site.com/api/stripe-webhook`

3. **Personnaliser les pages de succès/échec**
   - Créer `src/pages/success.astro`
   - Créer `src/pages/cancel.astro`

## 🎯 Action Immédiate

**COMMENCE PAR ÇA :**

1. Va sur : https://dashboard.stripe.com/test/payment-links
2. Crée UN SEUL Payment Link pour tester (Plan Starter - 5000 CAD)
3. Copie l'URL
4. Colle-la dans `src/config/stripe-links.ts` à la place de `stripeLinks.starter.oneTime`
5. Sauvegarde
6. Va sur `http://localhost:4321/payment-demo`
7. Clique sur "Choisir ce plan" du plan Starter
8. Utilise la carte `4242 4242 4242 4242`

**Si ça marche, tu peux créer les autres Payment Links !** 🚀

---

**Besoin d'aide ?** Dis-moi où tu bloques et je t'aide ! 💪
