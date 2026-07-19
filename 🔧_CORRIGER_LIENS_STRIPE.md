# 🔧 Correction des Liens Stripe

## 🎯 Problème Identifié

**Seuls les micro-agents fonctionnent** parce que:

### ✅ MicroAgents.tsx (FONCTIONNE)
```typescript
import { STRIPE_PAYMENT_LINKS } from '../config/stripe-links';
// Utilise directement: STRIPE_PAYMENT_LINKS.microAgents.leadQualification
```

### ❌ Pricing.tsx (PROBLÈME POSSIBLE)
```typescript
import { stripeLinks } from '../config/stripe-links';
// Utilise: stripeLinks[planKey][type]
```

## 🔍 Vérification Nécessaire

1. **Ouvrir le navigateur** avec `npm run dev`
2. **Tester chaque bouton** dans la section Pricing:
   - Starter (Paiement Unique)
   - Starter (Mensuel)
   - Professional (Paiement Unique)
   - Professional (Mensuel)
   - Enterprise (Paiement Unique)
   - Enterprise (Mensuel)
   - Audit IA
   - Consultation

3. **Vérifier la console** du navigateur (F12) pour voir les logs:
   ```
   🎯 Redirection vers Stripe: { planKey, type, link }
   ```

## 🛠️ Solution Possible

Si les boutons ne s'ouvrent pas, le problème peut être:

### Option 1: Uniformiser les imports
Changer dans `Pricing.tsx`:
```typescript
import { STRIPE_PAYMENT_LINKS } from '../config/stripe-links';
// Au lieu de: import { stripeLinks } from '../config/stripe-links';
```

### Option 2: Vérifier window.open
Le code actuel:
```typescript
window.open(paymentLink, '_blank');
```

Devrait fonctionner, mais on peut ajouter un fallback:
```typescript
const newWindow = window.open(paymentLink, '_blank');
if (!newWindow) {
  // Fallback si popup bloquée
  window.location.href = paymentLink;
}
```

## 📝 Test Rapide

Dans la console du navigateur (F12), tape:
```javascript
console.log(window.stripeLinks);
```

Si c'est `undefined`, c'est un problème d'import.

## ✅ Prochaine Étape

Dis-moi ce que tu vois quand tu cliques sur un bouton Pricing:
1. ✅ Ça ouvre Stripe dans un nouvel onglet
2. ❌ Rien ne se passe
3. ❌ Erreur dans la console
4. ❌ Autre chose

Je pourrai alors corriger précisément ! 🎯
