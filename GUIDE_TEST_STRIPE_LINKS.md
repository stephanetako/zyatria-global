# ✅ Guide de Test - Liens Stripe Corrigés

## 🎯 Corrections Effectuées

### 1. **Prix Corrigés** ✅
- **Professional** : 1 500 $CA → **15 000 $CA** ✅
- Tous les autres prix sont corrects

### 2. **Code Corrigé** ✅
Les boutons redirigent maintenant vers les **vrais liens Stripe** au lieu du formulaire de contact.

---

## 📋 Tarifs Actuels

| Plan | Paiement Unique | Mensuel |
|------|----------------|---------|
| **Starter** | 5 000 $CA | 299 $CA/mois |
| **Professional** | 15 000 $CA | 799 $CA/mois |
| **Enterprise** | 45 000 $CA | 2 499 $CA/mois |

### Services Additionnels
- **Audit IA Complet** : 2 500 $CA
- **Consultation Stratégique** : 500 $CA

---

## 🧪 Comment Tester

### 1️⃣ Lance le serveur
```bash
npm run dev
```

### 2️⃣ Ouvre la page d'accueil
```
http://localhost:4321
```

### 3️⃣ Scroll jusqu'à la section "Tarification"

### 4️⃣ Teste les boutons

**Ce qui devrait se passer :**

✅ **Si le lien Stripe est configuré :**
- Clic sur "Payer et Déployer" → Redirection vers Stripe

❌ **Si le lien n'est pas configuré :**
- Clic sur le bouton → Scroll vers le formulaire de contact
- Message d'erreur dans la console

---

## 🔗 Liens Stripe Actuels

### Configurés ✅
```typescript
starter.oneTime: 'https://buy.stripe.com/8x26oz6mP7Hr689eMI9oc00'
// Prix: 5 000 $CA
```

### À Configurer ⬜
```typescript
starter.monthly: 'https://buy.stripe.com/28EfZ9fXp2n7cwxeMI9oc01'
professional.oneTime: 'https://buy.stripe.com/28E4gr9z12n7gMN1ZW9oc02'
professional.monthly: 'https://buy.stripe.com/14A4grbH9aTDaopaws9oc03'
enterprise.oneTime: 'https://buy.stripe.com/7sYfZ93aDbXHgMN5c89oc05'
enterprise.monthly: 'https://buy.stripe.com/fZu5kv3aD5zjdABeMI9oc06'
services.audit: 'https://buy.stripe.com/eVqfZ99z14vf9kl9so9oc04'
services.consultation: 'https://buy.stripe.com/4gM00b7qT6DndAB9so9oc07'
```

---

## 🚀 Prochaines Étapes

### Option A : Créer les Liens Stripe (Recommandé)
1. Va sur https://dashboard.stripe.com/test/payment-links
2. Crée un lien pour chaque plan
3. Copie les URLs
4. Remplace dans `src/config/stripe-links.ts`

### Option B : Utiliser le Formulaire de Contact
Les boutons redirigent automatiquement vers le contact si le lien n'est pas configuré.

---

## 🔍 Vérification Console

Ouvre la console (F12) et cherche :

**Si lien configuré :**
```
Redirecting to Stripe: https://buy.stripe.com/...
```

**Si lien non configuré :**
```
No payment link found for professional - oneTime
```

---

## ✅ Checklist de Test

- [ ] Starter - Paiement unique → Redirige vers Stripe
- [ ] Starter - Mensuel → Redirige vers Stripe ou Contact
- [ ] Professional - Paiement unique → Redirige vers Stripe ou Contact
- [ ] Professional - Mensuel → Redirige vers Stripe ou Contact
- [ ] Enterprise - Paiement unique → Redirige vers Stripe ou Contact
- [ ] Enterprise - Mensuel → Redirige vers Stripe ou Contact
- [ ] Audit IA → Redirige vers Stripe ou Contact
- [ ] Consultation → Redirige vers Stripe ou Contact

---

## 📝 Notes Importantes

1. **Mode Test** : Les liens actuels sont des exemples
2. **Fallback** : Si un lien n'existe pas, redirection vers le contact
3. **Console** : Tous les clics sont loggés pour debug
4. **Prix** : Tous affichés en CAD (dollars canadiens)

---

## 🎯 Résultat Attendu

**Comportement actuel :**
- ✅ Prix corrects affichés
- ✅ Boutons fonctionnels
- ✅ Redirection Stripe si lien configuré
- ✅ Fallback vers contact si lien manquant
- ✅ Logs console pour debug

**Tout est prêt pour tester !** 🚀
