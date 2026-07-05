# 👉 TESTE LES LIENS STRIPE MAINTENANT !

## ⚡ Test en 3 Minutes

### 1️⃣ Lance le serveur
```bash
npm run dev
```

### 2️⃣ Ouvre ton navigateur
```
http://localhost:4321
```

### 3️⃣ Scroll vers "Tarification"

### 4️⃣ Vérifie les prix
```
✅ Starter : 5 000 $CA
✅ Professional : 15 000 $CA (CORRIGÉ !)
✅ Enterprise : 45 000 $CA
```

### 5️⃣ Clique sur un bouton
- **Si lien Stripe configuré** → Redirection vers Stripe ✅
- **Si lien non configuré** → Scroll vers Contact ✅

### 6️⃣ Ouvre la console (F12)
Tu verras :
```javascript
"Redirecting to: https://buy.stripe.com/..."
// OU
"No payment link found for [plan] - [type]"
```

---

## 🎯 Ce Qui a Été Corrigé

1. **Prix Professional** : 1 500 → **15 000 $CA** ✅
2. **Boutons** : Utilisent maintenant les liens Stripe ✅
3. **Fallback** : Redirige vers contact si lien manquant ✅

---

## 🔗 Lien Configuré

```
Starter - Paiement unique
https://buy.stripe.com/8x26oz6mP7Hr689eMI9oc00
```

Les autres liens sont des placeholders et redirigeront vers le contact.

---

## 🚀 Pour Configurer les Autres Liens

1. Va sur https://dashboard.stripe.com/test/payment-links
2. Crée un lien pour chaque plan
3. Copie l'URL
4. Remplace dans `src/config/stripe-links.ts`

---

## ✅ Tout Est Prêt !

**Lance `npm run dev` et teste maintenant !** 🎉
