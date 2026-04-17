# ⚡ STRIPE - DÉMARRAGE RAPIDE (5 MINUTES)

Guide ultra-simplifié pour créer vos liens de paiement Stripe en 5 minutes chrono ! ⏱️

---

## 🎯 OBJECTIF

Créer 2 liens de paiement :
- ✅ **Starter Plan** : 49€/mois
- ✅ **Business Plan** : 149€/mois

---

## 📝 ÉTAPE 1 : STRIPE DASHBOARD (2 min)

### 1.1 Connexion
👉 **https://dashboard.stripe.com**

### 1.2 Activer Mode Test
En haut à gauche : **Toggle sur "Test mode"** 🔵

---

## 🛍️ ÉTAPE 2 : CRÉER PRODUIT STARTER (1 min)

1. Menu gauche → **Products**
2. Bouton **"+ Add product"**
3. Remplir :
   ```
   Name: Starter Plan
   Price: 49
   Currency: EUR €
   Billing: Monthly (Recurring)
   ```
4. **Save product** ✅

---

## 🛍️ ÉTAPE 3 : CRÉER PRODUIT BUSINESS (1 min)

Même chose :
```
Name: Business Plan
Price: 149
Currency: EUR €
Billing: Monthly (Recurring)
```

**Save product** ✅

---

## 🔗 ÉTAPE 4 : GÉNÉRER LES LIENS (1 min)

### Pour Starter :
1. Cliquez sur **"Starter Plan"**
2. Bouton **"Create payment link"** (en haut à droite)
3. Configuration :
   - ☑ Email address
   - ☑ Name
   - After payment: **Redirect to URL** → `https://votre-site.com/success`
   - ☑ Allow promotion codes
4. **Create link**
5. **📋 COPIER LE LIEN**

### Pour Business :
Répéter exactement pareil.

---

## 💾 ÉTAPE 5 : INTÉGRER DANS LE SITE (30 secondes)

Ouvrir le fichier : **`src/config/stripe-links.ts`**

Remplacer les liens :

```typescript
export const STRIPE_TEST_LINKS = {
  starter: {
    eur: 'COLLEZ_VOTRE_LIEN_STARTER_ICI',
    usd: 'COLLEZ_VOTRE_LIEN_STARTER_ICI',  // Même lien si une seule devise
    cad: 'COLLEZ_VOTRE_LIEN_STARTER_ICI',
  },
  business: {
    eur: 'COLLEZ_VOTRE_LIEN_BUSINESS_ICI',
    usd: 'COLLEZ_VOTRE_LIEN_BUSINESS_ICI',
    cad: 'COLLEZ_VOTRE_LIEN_BUSINESS_ICI',
  },
};
```

**SAUVEGARDER** ✅

---

## 🧪 ÉTAPE 6 : TESTER

1. Allez sur votre site → Section **Pricing**
2. Cliquez sur **"Payer maintenant"**
3. Utilisez la carte de test :
   ```
   Numéro : 4242 4242 4242 4242
   Date : 12/25
   CVC : 123
   ```
4. Validez

✅ **Si ça marche, c'est parfait !**

---

## 🚀 PASSAGE EN LIVE (Plus tard)

Quand vous êtes prêt :

1. **Désactiver Mode Test** dans Stripe
2. **Recréer les produits** en mode LIVE
3. **Générer de nouveaux liens** LIVE
4. **Mettre à jour** `STRIPE_LIVE_LINKS` dans le code
5. **Changer** `USE_TEST_MODE = false`

---

## 🆘 PROBLÈMES ?

| Problème | Solution |
|----------|----------|
| Lien ne fonctionne pas | Vérifier qu'il commence par `https://buy.stripe.com/` |
| Page Stripe vide | Désactiver bloqueur de pub |
| Paiement refusé en test | Utiliser carte `4242 4242 4242 4242` |

---

## 📚 DOCUMENTATION COMPLÈTE

Pour plus de détails, voir : **`GUIDE_STRIPE_PAYMENT_LINKS.md`**

---

## ✅ CHECKLIST

- [ ] Compte Stripe créé
- [ ] Mode Test activé
- [ ] 2 produits créés (Starter, Business)
- [ ] 2 liens générés
- [ ] Liens intégrés dans `stripe-links.ts`
- [ ] Test réussi avec carte `4242...`

---

**🎉 C'EST FAIT !**

Vos clients peuvent maintenant payer directement sur votre site ! 💰

---

**⏱️ Temps total : ~5 minutes**
