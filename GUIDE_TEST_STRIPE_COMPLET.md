# 🧪 GUIDE DE TEST COMPLET - STRIPE PAYMENT LINKS

## 📋 CHECKLIST DE TEST

### ✅ ÉTAPE 1 : VÉRIFICATION DES FICHIERS

#### 1.1 Vérifier `src/config/stripe-links.ts`
```bash
cat src/config/stripe-links.ts
```

**À vérifier :**
- ✅ Tous les liens commencent par `https://buy.stripe.com/test_`
- ✅ Aucun lien vide (`''`)
- ✅ 8 liens au total (6 plans + 2 services)

---

### ✅ ÉTAPE 2 : DÉMARRER LE SERVEUR

```bash
npm run dev
```

**Attendre que le serveur démarre sur** `http://localhost:4321`

---

### ✅ ÉTAPE 3 : TESTS VISUELS SUR LA PAGE PRICING

#### 3.1 Ouvrir la page Pricing
```
http://localhost:4321/pricing
```

#### 3.2 Vérifier l'affichage des cartes
- ✅ 3 cartes de pricing visibles (Starter, Professional, Enterprise)
- ✅ Prix affichés correctement
- ✅ Boutons "Mensuel" et "Paiement Unique" présents
- ✅ Pas d'erreurs dans la console (F12)

---

### ✅ ÉTAPE 4 : TESTS DES BOUTONS (MODE TEST)

#### 4.1 Plan STARTER

**Test 1 : Starter - Mensuel (299$/mois)**
1. Cliquer sur l'onglet "Mensuel"
2. Cliquer sur le bouton du plan Starter
3. **Résultat attendu :** Redirection vers Stripe avec le prix 299$/mois
4. **URL attendue :** `https://buy.stripe.com/test_aFa14fbGS0HL1xe02r`

**Test 2 : Starter - Paiement Unique (5000$)**
1. Cliquer sur l'onglet "Paiement Unique"
2. Cliquer sur le bouton du plan Starter
3. **Résultat attendu :** Redirection vers Stripe avec le prix 5000$
4. **URL attendue :** `https://buy.stripe.com/test_7sYaEP5iudux2BicPd`

---

#### 4.2 Plan PROFESSIONAL

**Test 3 : Professional - Mensuel (799$/mois)**
1. Cliquer sur l'onglet "Mensuel"
2. Cliquer sur le bouton du plan Professional
3. **Résultat attendu :** Redirection vers Stripe avec le prix 799$/mois
4. **URL attendue :** `https://buy.stripe.com/test_eVq5kv6my8ada3K7uT`

**Test 4 : Professional - Paiement Unique (1500$)**
1. Cliquer sur l'onglet "Paiement Unique"
2. Cliquer sur le bouton du plan Professional
3. **Résultat attendu :** Redirection vers Stripe avec le prix 1500$
4. **URL attendue :** `https://buy.stripe.com/test_28EdR17qC769a3KdTh`

---

#### 4.3 Plan ENTERPRISE

**Test 5 : Enterprise - Mensuel (2499$/mois)**
1. Cliquer sur l'onglet "Mensuel"
2. Cliquer sur le bouton du plan Enterprise
3. **Résultat attendu :** Redirection vers Stripe avec le prix 2499$/mois
4. **URL attendue :** `https://buy.stripe.com/test_9B6cMX4eq625b7OaH5`

**Test 6 : Enterprise - Paiement Unique (45000$)**
1. Cliquer sur l'onglet "Paiement Unique"
2. Cliquer sur le bouton du plan Enterprise
3. **Résultat attendu :** Redirection vers Stripe avec le prix 45000$
4. **URL attendue :** `https://buy.stripe.com/test_4gM00b6myeyB0ta16v`

---

### ✅ ÉTAPE 5 : TESTS DES SERVICES

#### 5.1 Consultation Stratégique IA (500$)

**Où trouver ce bouton :**
- Page d'accueil (section Services)
- Page Services
- Page Contact

**Test 7 : Consultation**
1. Trouver le bouton "Réserver une Consultation"
2. Cliquer dessus
3. **Résultat attendu :** Redirection vers Stripe avec le prix 500$
4. **URL attendue :** `https://buy.stripe.com/test_aFafZ94eqeyBek09D1`

---

#### 5.2 Audit IA Complet (2500$)

**Où trouver ce bouton :**
- Page d'accueil (section Services)
- Page Services

**Test 8 : Audit IA**
1. Trouver le bouton "Commander un Audit"
2. Cliquer dessus
3. **Résultat attendu :** Redirection vers Stripe avec le prix 2500$
4. **URL attendue :** `https://buy.stripe.com/test_6oU14fdP08adgs8eXl`

---

### ✅ ÉTAPE 6 : VÉRIFICATION CONSOLE NAVIGATEUR

#### 6.1 Ouvrir la Console (F12)
- Onglet "Console"
- **Vérifier qu'il n'y a pas d'erreurs rouges**

#### 6.2 Erreurs courantes à surveiller
❌ `Cannot read property 'oneTime' of undefined`
❌ `stripeLinks is not defined`
❌ `404 Not Found`
❌ `TypeError: ...`

**Si tu vois ces erreurs :** Copie-les et envoie-les moi !

---

### ✅ ÉTAPE 7 : TEST DE PAIEMENT COMPLET (OPTIONNEL)

#### 7.1 Utiliser les cartes de test Stripe

**Carte de test qui fonctionne :**
```
Numéro : 4242 4242 4242 4242
Date : N'importe quelle date future (ex: 12/25)
CVC : N'importe quel 3 chiffres (ex: 123)
Code postal : N'importe quel code (ex: 12345)
```

**Carte de test qui échoue :**
```
Numéro : 4000 0000 0000 0002
```

#### 7.2 Processus de test
1. Cliquer sur un bouton de pricing
2. Remplir le formulaire Stripe avec la carte de test
3. Valider le paiement
4. **Résultat attendu :** Page de succès Stripe

---

## 📊 TABLEAU DE RÉSULTATS

Remplis ce tableau pendant tes tests :

| Test | Plan/Service | Type | Prix | ✅/❌ | Notes |
|------|-------------|------|------|-------|-------|
| 1 | Starter | Mensuel | 299$/mois | | |
| 2 | Starter | Unique | 5000$ | | |
| 3 | Professional | Mensuel | 799$/mois | | |
| 4 | Professional | Unique | 1500$ | | |
| 5 | Enterprise | Mensuel | 2499$/mois | | |
| 6 | Enterprise | Unique | 45000$ | | |
| 7 | Consultation | Service | 500$ | | |
| 8 | Audit IA | Service | 2500$ | | |

---

## 🐛 PROBLÈMES COURANTS ET SOLUTIONS

### Problème 1 : Bouton ne fait rien
**Solution :**
- Vérifier la console (F12)
- Vérifier que `stripe-links.ts` est bien importé
- Vérifier qu'il n'y a pas de fautes de frappe dans les liens

### Problème 2 : Redirection vers mauvais prix
**Solution :**
- Vérifier que le bon lien est utilisé dans `stripe-links.ts`
- Vérifier que l'onglet Mensuel/Unique est bien sélectionné

### Problème 3 : Erreur 404
**Solution :**
- Vérifier que le lien Stripe est complet
- Vérifier qu'il n'y a pas d'espaces dans le lien

### Problème 4 : Page blanche après clic
**Solution :**
- Vérifier la console pour les erreurs JavaScript
- Vérifier que `window.location.href` fonctionne

---

## ✅ VALIDATION FINALE

**Tous les tests passent si :**
- ✅ Aucune erreur dans la console
- ✅ Tous les boutons redirigent vers Stripe
- ✅ Les prix affichés sur Stripe correspondent
- ✅ Les cartes de test fonctionnent
- ✅ La navigation entre Mensuel/Unique fonctionne

---

## 📝 RAPPORT DE TEST

**Une fois tous les tests terminés, note ici :**

**Date du test :** _______________

**Navigateur utilisé :** _______________

**Résultat global :** ✅ SUCCÈS / ❌ ÉCHEC

**Nombre de tests réussis :** _____ / 8

**Problèmes rencontrés :**
- 
- 
- 

**Actions correctives nécessaires :**
- 
- 
- 

---

## 🚀 PROCHAINES ÉTAPES APRÈS VALIDATION

1. ✅ Tous les tests passent → Passer en mode PRODUCTION
2. ❌ Des tests échouent → Corriger les erreurs et retester
3. 📧 Configurer les emails de confirmation Stripe
4. 🔔 Configurer les webhooks Stripe (optionnel)

---

**Commence les tests et dis-moi ce que tu trouves !** 🧪
