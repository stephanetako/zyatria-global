# 🎯 Guide Complet : Créer vos Payment Links Stripe

## 📋 Prérequis

- [ ] Compte Stripe créé (https://dashboard.stripe.com/register)
- [ ] Compte vérifié (pour le mode production)
- [ ] Informations bancaires ajoutées

---

## 🔧 Étape 1 : Accéder au Dashboard Stripe

1. **Connectez-vous** à https://dashboard.stripe.com
2. **Activez le mode Test** (toggle en haut à droite) pour commencer
3. Dans le menu de gauche, cliquez sur **"Payment Links"** ou **"Liens de paiement"**

---

## 💳 Étape 2 : Créer les Payment Links

### 🟢 STARTER - Paiement Unique (2499 CAD)

1. Cliquez sur **"+ New"** ou **"+ Nouveau"**
2. Remplissez les informations :

```
Nom du produit : ZyatrIA Starter - Déploiement Complet
Description : Pack Starter avec déploiement complet en 7-15 jours
Prix : 2499.00 CAD
Type : Paiement unique (One-time payment)
```

3. **Options recommandées** :
   - ✅ Collecter l'adresse de facturation
   - ✅ Permettre les codes promo
   - ✅ Collecter le numéro de téléphone
   - ✅ Demander le nom de l'entreprise

4. **URL de redirection après paiement** :
   - Success URL : `https://votre-domaine.com/success`
   - Cancel URL : `https://votre-domaine.com/pricing`

5. Cliquez sur **"Create link"**
6. **COPIEZ LE LIEN** généré (format : `https://buy.stripe.com/test_XXXXXXXX`)

---

### 🟢 STARTER - Abonnement Mensuel (299 CAD/mois)

1. Cliquez sur **"+ New"**
2. Remplissez :

```
Nom du produit : ZyatrIA Starter - Abonnement Mensuel
Description : Abonnement mensuel sans engagement
Prix : 299.00 CAD
Type : Recurring (Récurrent)
Fréquence : Monthly (Mensuel)
```

3. **Options** :
   - ✅ Permettre l'annulation à tout moment
   - ✅ Période d'essai : 0 jours (ou 7 jours si vous voulez offrir un essai)
   - ✅ Codes promo activés

4. **COPIEZ LE LIEN**

---

### 🔵 PROFESSIONAL - Paiement Unique (7999 CAD)

```
Nom : ZyatrIA Professional - Déploiement Complet
Description : Pack Professional avec automatisation avancée
Prix : 7999.00 CAD
Type : One-time payment
```

**COPIEZ LE LIEN**

---

### 🔵 PROFESSIONAL - Abonnement Mensuel (799 CAD/mois)

```
Nom : ZyatrIA Professional - Abonnement Mensuel
Description : Abonnement mensuel Professional
Prix : 799.00 CAD
Type : Recurring - Monthly
```

**COPIEZ LE LIEN**

---

### 🟣 ENTERPRISE - Paiement Unique (45000 CAD)

```
Nom : ZyatrIA Enterprise - Déploiement Complet
Description : Solution Enterprise complète avec support dédié
Prix : 45000.00 CAD
Type : One-time payment
```

**COPIEZ LE LIEN**

---

### 🟣 ENTERPRISE - Abonnement Mensuel (3999 CAD/mois)

```
Nom : ZyatrIA Enterprise - Abonnement Mensuel
Description : Abonnement mensuel Enterprise
Prix : 3999.00 CAD
Type : Recurring - Monthly
```

**COPIEZ LE LIEN**

---

### 🎯 SERVICES - Audit IA (499 CAD)

```
Nom : Audit IA Complet
Description : Analyse approfondie de vos processus avec recommandations
Prix : 499.00 CAD
Type : One-time payment
```

**COPIEZ LE LIEN**

---

### 🎯 SERVICES - Consultation (199 CAD)

```
Nom : Consultation Stratégique IA
Description : Session de 2 heures avec nos experts
Prix : 199.00 CAD
Type : One-time payment
```

**COPIEZ LE LIEN**

---

## 📝 Étape 3 : Copier vos liens

Une fois tous les liens créés, vous devriez avoir **8 liens** au total :

```
✅ Starter - One-time: https://buy.stripe.com/test_XXXXXXXX1
✅ Starter - Monthly: https://buy.stripe.com/test_XXXXXXXX2
✅ Professional - One-time: https://buy.stripe.com/test_XXXXXXXX3
✅ Professional - Monthly: https://buy.stripe.com/test_XXXXXXXX4
✅ Enterprise - One-time: https://buy.stripe.com/test_XXXXXXXX5
✅ Enterprise - Monthly: https://buy.stripe.com/test_XXXXXXXX6
✅ Audit IA: https://buy.stripe.com/test_XXXXXXXX7
✅ Consultation: https://buy.stripe.com/test_XXXXXXXX8
```

---

## 🔄 Étape 4 : Intégrer les liens dans le code

Une fois vos liens créés, **DITES-MOI** et je mettrai à jour automatiquement le fichier de configuration !

Ou vous pouvez le faire manuellement en éditant `src/config/stripe-links.ts`

---

## 🧪 Étape 5 : Tester en mode Test

### Cartes de test Stripe :

**✅ Paiement réussi :**
```
Numéro : 4242 4242 4242 4242
Date : N'importe quelle date future (ex: 12/25)
CVC : N'importe quel 3 chiffres (ex: 123)
```

**❌ Paiement refusé :**
```
Numéro : 4000 0000 0000 0002
```

**⚠️ Authentification 3D Secure requise :**
```
Numéro : 4000 0027 6000 3184
```

---

## 🚀 Étape 6 : Passer en Production

Quand vous êtes prêt :

1. **Vérifiez votre compte Stripe** (ajoutez infos bancaires)
2. **Basculez en mode Live** (toggle en haut à droite)
3. **Recréez les mêmes Payment Links** en mode Live
4. **Remplacez les liens** dans le code
5. **Mettez à jour** la variable `mode: 'live'` dans `stripe-links.ts`

---

## 📊 Suivi des paiements

Dans le Dashboard Stripe, vous pouvez :
- ✅ Voir tous les paiements en temps réel
- ✅ Gérer les abonnements
- ✅ Créer des remboursements
- ✅ Exporter les données
- ✅ Configurer des webhooks pour automatiser

---

## 🆘 Besoin d'aide ?

**Questions fréquentes :**

**Q : Puis-je modifier les prix plus tard ?**
R : Oui, mais vous devrez créer de nouveaux Payment Links

**Q : Comment gérer les taxes ?**
R : Dans Stripe Dashboard > Settings > Tax

**Q : Les clients peuvent-ils payer en plusieurs fois ?**
R : Oui, activez "Installments" dans les options du Payment Link

**Q : Comment recevoir les notifications de paiement ?**
R : Configurez les webhooks dans Settings > Webhooks

---

## ✅ Checklist finale

- [ ] 8 Payment Links créés
- [ ] Tous les liens copiés
- [ ] Liens intégrés dans le code
- [ ] Test effectué avec carte de test
- [ ] URLs de redirection configurées
- [ ] Webhooks configurés (optionnel)
- [ ] Mode production activé (quand prêt)

---

## 🎯 Prochaine étape

**Une fois vos liens créés, partagez-les moi et je mettrai à jour automatiquement votre configuration !**

Format attendu :
```
Starter One-time: https://buy.stripe.com/test_...
Starter Monthly: https://buy.stripe.com/test_...
Professional One-time: https://buy.stripe.com/test_...
Professional Monthly: https://buy.stripe.com/test_...
Enterprise One-time: https://buy.stripe.com/test_...
Enterprise Monthly: https://buy.stripe.com/test_...
Audit: https://buy.stripe.com/test_...
Consultation: https://buy.stripe.com/test_...
```
