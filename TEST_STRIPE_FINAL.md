# 💳 TEST STRIPE - GUIDE VISUEL

## 🎯 OBJECTIF
Vérifier que les liens de paiement Stripe fonctionnent correctement

---

## 📋 LIENS À TESTER

### 🟢 PLAN STARTER

#### Paiement unique - 5 000 $CA
```
https://buy.stripe.com/8x26oz6mP7Hr689eMI9oc00
```

**Copie ce lien** → **Colle dans ton navigateur** → **Appuie sur Entrée**

**✅ Résultat attendu :**
- Page Stripe qui s'ouvre
- Titre : "Bot IA Starter - Déploiement Initial" (ou similaire)
- Prix : 5 000,00 $CA
- Bouton "Payer" ou "Subscribe"

---

#### Abonnement mensuel - 299 $CA/mois
```
https://buy.stripe.com/28EfZ9fXp2n7cwxeMI9oc01
```

**✅ Résultat attendu :**
- Page Stripe qui s'ouvre
- Prix : 299,00 $CA / mois
- Mention "Abonnement mensuel"

---

### 🔵 PLAN PROFESSIONAL

#### Paiement unique - 1 500 $CA
```
https://buy.stripe.com/28E4gr9z12n7gMN1ZW9oc02
```

**✅ Résultat attendu :**
- Page Stripe qui s'ouvre
- Titre : "Bot IA Professional - Déploiement 3 Bots" (ou similaire)
- Prix : 1 500,00 $CA

---

#### Abonnement mensuel - 799 $CA/mois
```
https://buy.stripe.com/14A4grbH9aTDaopaws9oc03
```

**✅ Résultat attendu :**
- Page Stripe qui s'ouvre
- Prix : 799,00 $CA / mois

---

### 🟣 PLAN ENTERPRISE

#### Paiement unique - 45 000 $CA
```
https://buy.stripe.com/7sYfZ93aDbXHgMN5c89oc05
```

**✅ Résultat attendu :**
- Page Stripe qui s'ouvre
- Titre : "Bot IA Enterprise - Suite Complète 7 Bots" (ou similaire)
- Prix : 45 000,00 $CA

---

#### Abonnement mensuel - 2 499 $CA/mois
```
https://buy.stripe.com/fZu5kv3aD5zjdABeMI9oc06
```

**✅ Résultat attendu :**
- Page Stripe qui s'ouvre
- Prix : 2 499,00 $CA / mois

---

### 🎯 SERVICES COMPLÉMENTAIRES

#### Audit IA Complet - 2 500 $CA
```
https://buy.stripe.com/eVqfZ99z14vf9kl9so9oc04
```

**✅ Résultat attendu :**
- Page Stripe qui s'ouvre
- Titre : "Audit IA Complet + Plan d'Action 90 jours" (ou similaire)
- Prix : 2 500,00 $CA

---

#### Consultation Stratégique - 500 $CA
```
https://buy.stripe.com/4gM00b7qT6DndAB9so9oc07
```

**✅ Résultat attendu :**
- Page Stripe qui s'ouvre
- Titre : "Consultation Stratégique IA" (ou similaire)
- Prix : 500,00 $CA

---

## 📊 CHECKLIST DE TEST

### Test Minimum (3 liens - 1 minute)
- [ ] Starter - Paiement unique (5 000 $CA)
- [ ] Professional - Paiement unique (1 500 $CA)
- [ ] Enterprise - Paiement unique (45 000 $CA)

### Test Complet (8 liens - 3 minutes)
- [ ] Starter - Paiement unique
- [ ] Starter - Mensuel
- [ ] Professional - Paiement unique
- [ ] Professional - Mensuel
- [ ] Enterprise - Paiement unique
- [ ] Enterprise - Mensuel
- [ ] Audit IA
- [ ] Consultation

---

## ✅ RÉSULTATS ATTENDUS

### ✅ SUCCÈS
**Si les pages Stripe s'ouvrent avec les bons prix :**
```
✅ STRIPE FONCTIONNE PARFAITEMENT !
```

**Tu peux passer au déploiement ! 🚀**

---

### ⚠️ AVERTISSEMENT
**Si 1-2 liens ne fonctionnent pas :**
```
⚠️ STRIPE FONCTIONNE PARTIELLEMENT
```

**Ce n'est pas grave !** Tu peux quand même déployer.

**On corrigera les liens cassés après le déploiement.**

---

### ❌ ERREUR
**Si AUCUN lien ne fonctionne :**
```
❌ PROBLÈME AVEC STRIPE
```

**Voir la section Dépannage ci-dessous.**

---

## ❌ DÉPANNAGE

### Problème : Erreur 404 "Payment link not found"

**Cause :** Le lien de paiement n'existe pas ou a été supprimé

**Solution :**

1. **Va sur ton tableau de bord Stripe**
   ```
   https://dashboard.stripe.com/payment-links
   ```

2. **Vérifie que les liens existent**
   - Tu devrais voir 8 liens de paiement
   - Vérifie qu'ils sont actifs (toggle vert)

3. **Si un lien manque, crée-le**
   - Clique sur "New payment link"
   - Configure le produit et le prix
   - Copie le nouveau lien
   - Mets à jour `src/config/stripe-links.ts`

4. **Si les liens sont désactivés, active-les**
   - Clique sur le toggle pour activer
   - Rafraîchis la page
   - Teste à nouveau

---

### Problème : Mauvais prix affiché

**Cause :** Le lien pointe vers un ancien produit

**Solution :**

1. Clique sur le lien de paiement dans Stripe
2. Vérifie le prix configuré
3. Si le prix est incorrect :
   - Crée un nouveau lien avec le bon prix
   - Mets à jour `src/config/stripe-links.ts`
   - Commit et push les changements

---

### Problème : Page Stripe en anglais au lieu de français

**Cause :** Stripe détecte la langue du navigateur

**Solution :**

**Ce n'est pas un problème !** Stripe adapte automatiquement la langue selon :
1. La langue du navigateur du client
2. La localisation IP du client
3. Les paramètres du compte Stripe

**Pour forcer le français :**
- Dans Stripe Dashboard → Settings → Business settings
- Configure "Default language" sur "Français"

---

## 🔍 VÉRIFICATION AVANCÉE

### Voir les détails d'un lien de paiement

1. Va sur https://dashboard.stripe.com/payment-links
2. Clique sur un lien de paiement
3. Vérifie :
   - ✅ Nom du produit
   - ✅ Prix
   - ✅ Devise (CAD)
   - ✅ Type (one-time ou recurring)
   - ✅ Statut (Active)

---

### Tester un paiement (MODE TEST)

**⚠️ IMPORTANT : Ne fais PAS de vrai paiement !**

**Si tu veux tester le processus complet :**

1. Active le mode TEST dans Stripe
2. Utilise une carte de test :
   ```
   Numéro : 4242 4242 4242 4242
   Date : N'importe quelle date future
   CVC : N'importe quel 3 chiffres
   ```
3. Complète le paiement
4. Vérifie dans Stripe Dashboard → Payments (TEST mode)

---

## 📊 TABLEAU RÉCAPITULATIF

| Plan | Type | Prix | Lien | Statut |
|------|------|------|------|--------|
| Starter | Unique | 5 000 $CA | `...9oc00` | ⬜ À tester |
| Starter | Mensuel | 299 $CA | `...9oc01` | ⬜ À tester |
| Professional | Unique | 1 500 $CA | `...9oc02` | ⬜ À tester |
| Professional | Mensuel | 799 $CA | `...9oc03` | ⬜ À tester |
| Enterprise | Unique | 45 000 $CA | `...9oc05` | ⬜ À tester |
| Enterprise | Mensuel | 2 499 $CA | `...9oc06` | ⬜ À tester |
| Audit IA | Unique | 2 500 $CA | `...9oc04` | ⬜ À tester |
| Consultation | Unique | 500 $CA | `...9oc07` | ⬜ À tester |

**Coche ✅ chaque lien testé avec succès**

---

## 🎯 CRITÈRES DE SUCCÈS

**Pour passer au déploiement, il faut :**

**Minimum :**
- ✅ Au moins 3 liens fonctionnent (1 par plan)

**Idéal :**
- ✅ Tous les 8 liens fonctionnent

**Acceptable :**
- ✅ 6-7 liens fonctionnent
- ⚠️ 1-2 liens à corriger après déploiement

---

## 🎉 SI TOUT FONCTIONNE

**STRIPE EST PRÊT ! ✅**

**Prochaine étape : Test Formspree puis DÉPLOIEMENT ! 🚀**

---

## 📞 BESOIN D'AIDE ?

Si les liens Stripe ne fonctionnent pas :

1. **Vérifie ton compte Stripe**
   - Es-tu connecté au bon compte ?
   - Les liens sont-ils actifs ?

2. **Vérifie les liens**
   - Copie-colle correctement (pas d'espace)
   - Utilise un navigateur en navigation privée

3. **Crée de nouveaux liens si nécessaire**
   - Dashboard Stripe → Payment Links → New
   - Configure et copie le nouveau lien

---

**Temps estimé : 1-3 minutes**

**Bon test ! 🍀**
