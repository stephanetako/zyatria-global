# 📋 CRÉER LES LIENS STRIPE - NOUVEAUX PRIX

## 🎯 Liste Complète des Produits à Créer

### ⚠️ IMPORTANT
Tu dois créer **6 nouveaux Payment Links** sur Stripe avec les nouveaux prix.

---

## 📊 STARTER - Meilleure Valeur

### 1️⃣ Starter - Abonnement Mensuel
```
Nom du produit : Bot IA Starter - Abonnement Mensuel
Prix : 97.00 CAD
Type : Recurring (Mensuel)
Description : Support continu, mises à jour mensuelles, maintenance incluse
```

**Lien Stripe à créer** :
1. Va sur https://dashboard.stripe.com/test/payment-links
2. Clique sur "+ New"
3. Entre les infos ci-dessus
4. Coche "Recurring" → "Monthly"
5. Copie le lien généré

---

### 2️⃣ Starter - Paiement Unique
```
Nom du produit : Bot IA Starter - Paiement Unique
Prix : 997.00 CAD
Type : One-time
Description : Déploiement complet, support inclus
```

**Lien Stripe à créer** :
1. Va sur https://dashboard.stripe.com/test/payment-links
2. Clique sur "+ New"
3. Entre les infos ci-dessus
4. Laisse "One-time" sélectionné
5. Copie le lien généré

---

## 📊 PROFESSIONAL - Recommandé

### 3️⃣ Professional - Abonnement Mensuel
```
Nom du produit : Bot IA Professional - Abonnement Mensuel
Prix : 297.00 CAD
Type : Recurring (Mensuel)
Description : Support prioritaire, optimisations continues, analytics avancés
```

**Lien Stripe à créer** :
1. Va sur https://dashboard.stripe.com/test/payment-links
2. Clique sur "+ New"
3. Entre les infos ci-dessus
4. Coche "Recurring" → "Monthly"
5. Copie le lien généré

---

### 4️⃣ Professional - Paiement Unique
```
Nom du produit : Bot IA Professional - Paiement Unique
Prix : 2,997.00 CAD
Type : One-time
Description : 3 agents IA, automatisation avancée, déploiement rapide
```

**Lien Stripe à créer** :
1. Va sur https://dashboard.stripe.com/test/payment-links
2. Clique sur "+ New"
3. Entre les infos ci-dessus
4. Laisse "One-time" sélectionné
5. Copie le lien généré

---

## 📊 ENTERPRISE - Premium

### 5️⃣ Enterprise - Abonnement Mensuel
```
Nom du produit : Bot IA Enterprise - Abonnement Mensuel
Prix : 997.00 CAD
Type : Recurring (Mensuel)
Description : Support dédié 24/7, SLA garanti, développement continu
```

**Lien Stripe à créer** :
1. Va sur https://dashboard.stripe.com/test/payment-links
2. Clique sur "+ New"
3. Entre les infos ci-dessus
4. Coche "Recurring" → "Monthly"
5. Copie le lien généré

---

### 6️⃣ Enterprise - Paiement Unique
```
Nom du produit : Bot IA Enterprise - Paiement Unique
Prix : 9,997.00 CAD
Type : One-time
Description : Solution complète, 7 agents IA, déploiement rapide
```

**Lien Stripe à créer** :
1. Va sur https://dashboard.stripe.com/test/payment-links
2. Clique sur "+ New"
3. Entre les infos ci-dessus
4. Laisse "One-time" sélectionné
5. Copie le lien généré

---

## 📝 Template pour Copier-Coller dans le Code

Une fois que tu as créé les 6 liens, remplace-les dans `src/config/stripe-links.ts` :

```typescript
export const stripeLinks = {
  plans: {
    // STARTER
    starterMonthly: 'https://buy.stripe.com/XXXXX',      // ← Ton lien Starter Mensuel
    starterOneTime: 'https://buy.stripe.com/XXXXX',      // ← Ton lien Starter Unique
    
    // PROFESSIONAL
    professionalMonthly: 'https://buy.stripe.com/XXXXX', // ← Ton lien Pro Mensuel
    professionalOneTime: 'https://buy.stripe.com/XXXXX', // ← Ton lien Pro Unique
    
    // ENTERPRISE
    enterpriseMonthly: 'https://buy.stripe.com/XXXXX',   // ← Ton lien Enterprise Mensuel
    enterpriseOneTime: 'https://buy.stripe.com/XXXXX',   // ← Ton lien Enterprise Unique
  },
  
  // Services (déjà créés, ne pas toucher)
  services: {
    audit: 'https://buy.stripe.com/9B600b9z11j3gMNbAw',
    consultation: 'https://buy.stripe.com/aFabIT9z10eZ7cd1ZW',
    formation: 'https://buy.stripe.com/00wfZ9eTle5P0NP9so',
  },
  
  // Micro-agents (déjà créés, ne pas toucher)
  microAgents: {
    leadQualification: 'https://buy.stripe.com/5kQeV59z1bXH4018ok',
    customerSupport: 'https://buy.stripe.com/00wdR13aDe5P7cd8ok',
    appointments: 'https://buy.stripe.com/28E9ALbH92n7gMN484',
    prospectFollowup: 'https://buy.stripe.com/5kQeV5cLdaTD2VXeMI',
    realEstate: 'https://buy.stripe.com/6oUaEP9z14vf9kl6gc',
    ecommerce: 'https://buy.stripe.com/aFa28j3aD6Dn4017kg',
  },
};
```

---

## 🧪 Tester les Liens

### Après avoir créé les liens :

1. **Copie chaque lien** dans le fichier `stripe-links.ts`
2. **Relance le serveur** : `npm run dev`
3. **Va sur la page Pricing** : http://localhost:4321/pricing
4. **Clique sur chaque bouton** pour vérifier que :
   - Le lien s'ouvre correctement
   - Le prix affiché sur Stripe correspond
   - Le type (mensuel/unique) est correct

---

## 📊 Tableau Récapitulatif

| Plan | Type | Prix | Variable dans le code |
|------|------|------|----------------------|
| Starter | Mensuel | 97 $ | `starterMonthly` |
| Starter | Unique | 997 $ | `starterOneTime` |
| Professional | Mensuel | 297 $ | `professionalMonthly` |
| Professional | Unique | 2,997 $ | `professionalOneTime` |
| Enterprise | Mensuel | 997 $ | `enterpriseMonthly` |
| Enterprise | Unique | 9,997 $ | `enterpriseOneTime` |

---

## ✅ Checklist de Création

### Avant de commencer
- [ ] Je suis connecté à mon compte Stripe
- [ ] Je suis en mode **Test** (pour tester) ou **Live** (pour production)
- [ ] J'ai ouvert https://dashboard.stripe.com/payment-links

### Pour chaque produit
- [ ] Créer le Payment Link
- [ ] Vérifier le nom du produit
- [ ] Vérifier le prix (attention aux décimales)
- [ ] Vérifier la devise (CAD)
- [ ] Vérifier le type (One-time ou Recurring Monthly)
- [ ] Copier le lien généré
- [ ] Coller dans `stripe-links.ts`

### Après avoir créé tous les liens
- [ ] Tous les 6 liens sont dans le code
- [ ] Relancer le serveur (`npm run dev`)
- [ ] Tester chaque bouton sur /pricing
- [ ] Vérifier que les prix correspondent
- [ ] Vérifier que les types (mensuel/unique) sont corrects

---

## 🚨 Erreurs Courantes

### ❌ Le lien ne fonctionne pas
**Solution** : Vérifie que tu as bien copié le lien COMPLET (commence par `https://buy.stripe.com/`)

### ❌ Le prix affiché sur Stripe ne correspond pas
**Solution** : Tu as peut-être inversé les liens. Vérifie que :
- `starterMonthly` → 97 $ (pas 997 $)
- `starterOneTime` → 997 $ (pas 97 $)

### ❌ Le type (mensuel/unique) est incorrect
**Solution** : Vérifie dans Stripe que :
- Les mensuels ont "Recurring" coché
- Les uniques ont "One-time" sélectionné

---

## 💡 Conseils

### Mode Test vs Live
- **Test** : Pour tester sans vraiment payer (utilise les cartes de test Stripe)
- **Live** : Pour accepter de vrais paiements (nécessite un compte Stripe activé)

### Commencer en Test
Je recommande de créer d'abord les liens en **mode Test** pour vérifier que tout fonctionne, puis de les recréer en **mode Live** quand tu es prêt.

### Garder une Trace
Note quelque part (Excel, Google Sheets, etc.) :
- Le nom du produit
- Le prix
- Le lien généré
- La date de création

---

## 🎯 Prochaines Étapes

1. ✅ Créer les 6 liens Stripe (ce document)
2. ✅ Remplacer les liens dans `stripe-links.ts`
3. ✅ Tester localement (`npm run dev`)
4. ✅ Déployer sur Cloudflare (`npm run build && wrangler pages deploy dist`)
5. ✅ Tester en production

---

## 📞 Besoin d'Aide ?

Si tu as des questions :
- Comment créer un Payment Link sur Stripe ?
- Comment tester les paiements ?
- Comment passer en mode Live ?
- Autre chose ?

**Dis-moi et je t'aide ! 🚀**

---

**Date** : $(date)  
**Statut** : ⏳ En attente de création des liens Stripe  
**Fichier à modifier** : `src/config/stripe-links.ts`
