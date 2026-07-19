# 📊 COMPARAISON CONFIGURATION LIENS STRIPE

## ✅ ANCIEN CODE (qui fonctionnait)

```tsx
const handlePurchase = (planKey: PlanKey, type: BillingType) => {
  const link = stripeLinks[planKey][type];
  if (link) {
    window.location.href = link;
  }
};

// Bouton
<Button
  onClick={() => handlePurchase(plan.key, billingType)}
  className="..."
>
  {t.cta.monthly}
</Button>
```

**Utilisation**: `stripeLinks` (objet local dans le fichier)

---

## ✅ CODE ACTUEL (devrait fonctionner)

```tsx
// Lien direct
<a
  href={STRIPE_PAYMENT_LINKS[plan.key][billingType]}
  target="_blank"
  rel="noopener noreferrer"
  className="..."
>
  {t.cta.monthly}
  <ArrowRight className="w-5 h-5" />
</a>
```

**Utilisation**: `STRIPE_PAYMENT_LINKS` (importé depuis `config/stripe-links.ts`)

---

## 🔍 DIFFÉRENCES CLÉS

| Aspect | Ancien | Actuel |
|--------|--------|--------|
| **Type** | `<Button onClick>` | `<a href>` |
| **Source** | `stripeLinks` (local) | `STRIPE_PAYMENT_LINKS` (importé) |
| **Navigation** | `window.location.href` | Navigation native `<a>` |
| **Target** | Même onglet | `target="_blank"` (nouvel onglet) |

---

## 🎯 HYPOTHÈSES SUR LE PROBLÈME

### 1. **Les liens sont-ils identiques ?**
- Ancien: `stripeLinks[plan.key][billingType]`
- Actuel: `STRIPE_PAYMENT_LINKS[plan.key][billingType]`

**À vérifier**: Est-ce que `STRIPE_PAYMENT_LINKS` contient les mêmes URLs que l'ancien `stripeLinks` ?

### 2. **Le `target="_blank"` pose-t-il problème ?**
- Certains navigateurs bloquent les popups
- Solution: Retirer `target="_blank"` pour ouvrir dans le même onglet

### 3. **Les classes CSS empêchent-elles le clic ?**
- Le `<a>` a les mêmes classes qu'un `<Button>`
- Possible conflit de `pointer-events` ou `z-index`

---

## 🔧 SOLUTIONS À TESTER

### Solution 1: Retirer `target="_blank"`
```tsx
<a
  href={STRIPE_PAYMENT_LINKS[plan.key][billingType]}
  className="..."
>
```

### Solution 2: Revenir à `<Button onClick>` avec `window.location.href`
```tsx
<Button
  onClick={() => {
    const link = STRIPE_PAYMENT_LINKS[plan.key][billingType];
    if (link) window.location.href = link;
  }}
  className="..."
>
```

### Solution 3: Vérifier que `STRIPE_PAYMENT_LINKS` est bien défini
```tsx
console.log('STRIPE_PAYMENT_LINKS:', STRIPE_PAYMENT_LINKS);
console.log('Link:', STRIPE_PAYMENT_LINKS[plan.key][billingType]);
```

---

## 🧪 TEST IMMÉDIAT

Ouvre la console du navigateur (F12) et tape:
```javascript
// Vérifier si les liens existent
console.log(document.querySelectorAll('a[href*="stripe"]'));

// Vérifier si les liens sont cliquables
document.querySelectorAll('a[href*="stripe"]').forEach(link => {
  console.log('Link:', link.href, 'Clickable:', !link.disabled);
});
```

---

## 📋 PROCHAINE ÉTAPE

**Je vais maintenant**:
1. ✅ Vérifier le contenu exact de `STRIPE_PAYMENT_LINKS`
2. ✅ Comparer avec l'ancien `stripeLinks`
3. ✅ Tester une solution hybride si nécessaire
