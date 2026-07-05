# ⚡ Stripe Quick Start - 5 Minutes

## 🎯 Configuration Ultra-Rapide

### 1️⃣ Vérifier le fichier `.env` (FAIT ✅)

Ton fichier `.env` contient déjà :
```env
STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
```

### 2️⃣ Ajouter la clé publique dans `.env` pour le client

**IMPORTANT** : Ajoute cette ligne dans ton `.env` :

```env
PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_COPIE_TA_CLE_PUBLIQUE_ICI
```

⚠️ **Note** : Le préfixe `PUBLIC_` est nécessaire pour que la clé soit accessible côté client dans Astro.

---

## 🚀 Tester Immédiatement

### Option 1 : Page de Démonstration (Recommandé)

1. **Démarre le serveur** :
   ```bash
   npm run dev
   ```

2. **Ouvre** : http://localhost:4321/payment-demo

3. **Clique** sur un plan

4. **Utilise une carte de test** :
   - **Numéro** : `4242 4242 4242 4242`
   - **Date** : N'importe quelle date future (ex: 12/25)
   - **CVC** : N'importe quel code (ex: 123)
   - **Code postal** : N'importe lequel (ex: 12345)

5. **Valide** le paiement

6. **Tu seras redirigé** vers `/success` 🎉

---

## 📝 Configurer tes vrais produits (Optionnel)

### Créer un Payment Link sur Stripe

1. **Va sur** : https://dashboard.stripe.com/test/payment-links

2. **Clique** : `+ Nouveau lien de paiement`

3. **Configure** :
   - **Nom** : `Starter Plan`
   - **Prix** : `99` EUR
   - **Type** : `Paiement unique`

4. **Copie l'URL** générée (ex: `https://buy.stripe.com/test_abc123`)

5. **Remplace dans** `src/config/stripe-links.ts` :
   ```typescript
   starter: {
     url: 'https://buy.stripe.com/test_abc123', // ← Colle ici
   }
   ```

---

## 🎨 Intégrer dans ta page Pricing

### Utiliser les Payment Links

**Dans** `src/components/Pricing.tsx` ou ta page de tarification :

```typescript
import { stripePaymentLinks } from '../config/stripe-links';

// Dans ton composant
<Button 
  onClick={() => window.location.href = stripePaymentLinks.starter.url}
>
  Acheter Starter
</Button>
```

### Utiliser l'API Checkout (Plus avancé)

**Exemple déjà dans** `src/components/pages/PaymentDemoPage.tsx` :

```typescript
const response = await fetch('/api/create-checkout-session', {
  method: 'POST',
  body: JSON.stringify({ priceId: 'price_...' })
});
```

---

## ✅ Checklist Rapide

- [x] Clés Stripe dans `.env` ✅
- [ ] Ajouter `PUBLIC_STRIPE_PUBLISHABLE_KEY` dans `.env`
- [ ] Tester sur `/payment-demo`
- [ ] Créer tes Payment Links sur Stripe
- [ ] Mettre à jour `src/config/stripe-links.ts`
- [ ] Intégrer dans ta page Pricing

---

## 🆘 Problèmes Courants

### "Stripe n'a pas pu être chargé"

**Solution** : Ajoute `PUBLIC_STRIPE_PUBLISHABLE_KEY` dans `.env`

### "Price ID manquant"

**Solution** : Remplace `price_XXXXXXXX` par ton vrai Price ID depuis Stripe

### Console montre des erreurs

**Solution** : Ouvre la console (F12) et vérifie les logs détaillés

---

## 📚 Fichiers Créés

- ✅ `src/pages/api/create-checkout-session.ts` - API Stripe
- ✅ `src/pages/payment-demo.astro` - Page de démo
- ✅ `src/components/pages/PaymentDemoPage.tsx` - Composant React
- ✅ `src/pages/success.astro` - Page de succès
- ✅ `src/config/stripe-links.ts` - Configuration
- ✅ `GUIDE_STRIPE_PAYMENT_LINKS.md` - Guide complet

---

## 🎯 Prochaine Étape

**Teste maintenant** :

```bash
npm run dev
```

Puis ouvre : http://localhost:4321/payment-demo

---

**C'est tout ! Tu es prêt à accepter des paiements ! 🚀**
