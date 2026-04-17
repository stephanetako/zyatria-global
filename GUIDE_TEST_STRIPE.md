# 🧪 GUIDE DE TEST DES LIENS STRIPE

## ✅ OBJECTIF
Vérifier que tous les boutons de paiement Stripe fonctionnent correctement et redirigent vers les bonnes pages de paiement.

---

## 📋 CHECKLIST DE TEST

### **1️⃣ ACCÉDER À LA PAGE PRICING**

**Sur votre site local :**
- Ouvrez votre navigateur
- Allez sur : `http://localhost:4321` (ou l'URL de preview)
- Scrollez jusqu'à la section **"Choisissez Votre Solution IA"**

---

### **2️⃣ TESTER LE TOGGLE PAIEMENT**

**Vérifiez que le toggle fonctionne :**

1. **Par défaut** → Mode "Abonnement Mensuel" actif
   - ✅ Starter : **299 $/mois**
   - ✅ Professional : **799 $/mois**
   - ✅ Enterprise : **2 499 $/mois**

2. **Cliquez sur "Paiement Unique"**
   - ✅ Starter : **5 000 $**
   - ✅ Professional : **1 500 $**
   - ✅ Enterprise : **45 000 $**

3. **Recliquez sur "Abonnement Mensuel"**
   - ✅ Les prix mensuels reviennent

---

### **3️⃣ TESTER LES LIENS STRIPE - MODE MENSUEL**

**Cliquez sur chaque bouton en mode MENSUEL et vérifiez la redirection :**

#### **Starter - Mensuel**
- **Bouton** : "Démarrer Plan Mensuel"
- **Devrait rediriger vers** : `https://buy.stripe.com/28EfZ9fXp2n7cwxeMI9oc01`
- **Page Stripe attendue** : Bot IA Starter - 299,00 $CA/mois
- **✅ Fonctionne ?** : Oui ☐ / Non ☐

#### **Professional - Mensuel**
- **Bouton** : "Démarrer Plan Mensuel"
- **Devrait rediriger vers** : `https://buy.stripe.com/14A4grbH9aTDaopaws9oc03`
- **Page Stripe attendue** : Bot IA Professional - 799,00 $CA/mois
- **✅ Fonctionne ?** : Oui ☐ / Non ☐

#### **Enterprise - Mensuel**
- **Bouton** : "Démarrer Plan Mensuel"
- **Devrait rediriger vers** : `https://buy.stripe.com/fZu5kv3aD5zjdABeMI9oc06`
- **Page Stripe attendue** : Bot IA Enterprise - 2 499,00 $CA/mois
- **✅ Fonctionne ?** : Oui ☐ / Non ☐

---

### **4️⃣ TESTER LES LIENS STRIPE - MODE PAIEMENT UNIQUE**

**Basculez sur "Paiement Unique" et cliquez sur chaque bouton :**

#### **Starter - Paiement Unique**
- **Bouton** : "Payer et Déployer"
- **Devrait rediriger vers** : `https://buy.stripe.com/8x26oz6mP7Hr689eMI9oc00`
- **Page Stripe attendue** : Bot IA Starter - 5 000,00 $CA
- **✅ Fonctionne ?** : Oui ☐ / Non ☐

#### **Professional - Paiement Unique**
- **Bouton** : "Payer et Déployer"
- **Devrait rediriger vers** : `https://buy.stripe.com/28E4gr9z12n7gMN1ZW9oc02`
- **Page Stripe attendue** : Bot IA Professional - 1 500,00 $CA
- **✅ Fonctionne ?** : Oui ☐ / Non ☐

#### **Enterprise - Paiement Unique**
- **Bouton** : "Payer et Déployer"
- **Devrait rediriger vers** : `https://buy.stripe.com/7sYfZ93aDbXHgMN5c89oc05`
- **Page Stripe attendue** : Bot IA Enterprise - 45 000,00 $CA
- **✅ Fonctionne ?** : Oui ☐ / Non ☐

---

### **5️⃣ TESTER LES SERVICES PROFESSIONNELS**

**Scrollez en bas de la section Pricing vers "Services Professionnels" :**

#### **Audit IA Complet**
- **Bouton** : "Commander l'Audit"
- **Devrait rediriger vers** : `https://buy.stripe.com/eVqfZ99z14vf9kl9so9oc04`
- **Page Stripe attendue** : Audit IA Complet - 2 500,00 $CA
- **✅ Fonctionne ?** : Oui ☐ / Non ☐

#### **Consultation Stratégique**
- **Bouton** : "Réserver une Consultation"
- **Devrait rediriger vers** : `https://buy.stripe.com/4gM00b7qT6DndAB9so9oc07`
- **Page Stripe attendue** : Consultation Stratégique IA - 500,00 $CA
- **✅ Fonctionne ?** : Oui ☐ / Non ☐

---

## 🎯 RÉSUMÉ DES TESTS

**Total de liens à tester : 8**

| # | Produit | Type | Statut |
|---|---------|------|--------|
| 1 | Starter | Mensuel (299$/mois) | ☐ |
| 2 | Starter | Unique (5 000$) | ☐ |
| 3 | Professional | Mensuel (799$/mois) | ☐ |
| 4 | Professional | Unique (1 500$) | ☐ |
| 5 | Enterprise | Mensuel (2 499$/mois) | ☐ |
| 6 | Enterprise | Unique (45 000$) | ☐ |
| 7 | Audit IA | Unique (2 500$) | ☐ |
| 8 | Consultation | Unique (500$) | ☐ |

---

## 🔧 EN CAS DE PROBLÈME

### **Problème 1 : Le bouton ne fait rien**
**Solution** :
- Ouvrez la console du navigateur (F12)
- Vérifiez s'il y a des erreurs JavaScript
- Testez à nouveau

### **Problème 2 : Mauvais lien Stripe**
**Solution** :
1. Notez le lien qui s'ouvre
2. Comparez avec le lien attendu ci-dessus
3. Si différent, signalez-le

### **Problème 3 : Page Stripe vide ou erreur**
**Solution** :
- Vérifiez que vous êtes en **mode Test** sur Stripe
- Vérifiez que les liens de paiement sont bien **activés** dans Stripe
- Allez sur : https://dashboard.stripe.com/test/payment-links

---

## ✅ PROCHAINES ÉTAPES APRÈS LES TESTS

**Si tous les tests fonctionnent :**
1. ✅ Marquer tous les liens comme validés
2. 🚀 Passer en mode LIVE sur Stripe (quand prêt)
3. 🌐 Déployer sur Cloudflare Pages

**Si des problèmes sont détectés :**
1. Noter les liens qui ne fonctionnent pas
2. Me les signaler pour correction
3. Retester après correction

---

## 📞 CONTACT SUPPORT

**Si besoin d'aide :**
- Email technique : support@zyatria.global
- Stripe Dashboard : https://dashboard.stripe.com/test/payment-links

---

**Bonne chance pour les tests ! 🚀**

Date de création : ${new Date().toLocaleDateString('fr-CA')}
