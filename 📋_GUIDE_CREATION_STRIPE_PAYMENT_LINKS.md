# 🎯 Guide de Création des Payment Links Stripe

## 📍 Étape 1 : Accéder au Dashboard Stripe

1. Allez sur : https://dashboard.stripe.com/test/payment-links
2. Assurez-vous d'être en **mode TEST** (toggle en haut à droite)
3. Cliquez sur **"+ New"** pour créer un nouveau Payment Link

---

## 🟢 STARTER - Paiement Unique

### Configuration :
- **Nom du produit** : `ZyatrIA Starter - Déploiement Complet`
- **Prix** : `2499.00 CAD`
- **Type** : `One-time payment`

### Description :
```
✅ 1 agent IA intelligent personnalisé
✅ Automatisation de base (workflows essentiels)
✅ Déploiement en 7 jours
✅ Formation de votre équipe (2h)
✅ Support 30 jours post-déploiement
✅ Documentation complète

Idéal pour : PME, startups, premiers pas en IA
```

### Paramètres avancés :
- ✅ Collect customer email
- ✅ Collect billing address
- ✅ Allow promotion codes
- Success URL : `https://votre-domaine.com/success?plan=starter-onetime`
- Cancel URL : `https://votre-domaine.com/pricing`

---

## 🟢 STARTER - Mensuel

### Configuration :
- **Nom du produit** : `ZyatrIA Starter - Abonnement Mensuel`
- **Prix** : `299.00 CAD`
- **Type** : `Recurring - Monthly`

### Description :
```
📊 Support continu et maintenance
📊 Mises à jour mensuelles de l'agent
📊 Optimisations basées sur les données
📊 Accès au dashboard analytics
📊 Email support (réponse sous 48h)

Engagement minimum : 3 mois
Annulation possible avec préavis de 30 jours
```

### Paramètres avancés :
- ✅ Collect customer email
- ✅ Collect billing address
- ✅ Allow promotion codes
- Billing cycle : `Monthly`
- Free trial : `None` (ou 14 jours si vous voulez)
- Success URL : `https://votre-domaine.com/success?plan=starter-monthly`

---

## 🔵 PROFESSIONAL - Paiement Unique

### Configuration :
- **Nom du produit** : `ZyatrIA Professional - Déploiement Complet`
- **Prix** : `7999.00 CAD`
- **Type** : `One-time payment`

### Description :
```
🚀 3 agents IA intelligents personnalisés
🚀 5 micro-agents spécialisés
🚀 Automatisation avancée (workflows complexes)
🚀 Intégrations CRM/ERP
🚀 Déploiement en 10 jours
🚀 Formation approfondie (1 journée)
🚀 Support 60 jours post-déploiement
🚀 Analytics et reporting avancés

Idéal pour : Entreprises en croissance, multi-départements
```

### Paramètres avancés :
- ✅ Collect customer email
- ✅ Collect billing address
- ✅ Collect phone number
- ✅ Allow promotion codes
- Success URL : `https://votre-domaine.com/success?plan=professional-onetime`

---

## 🔵 PROFESSIONAL - Mensuel

### Configuration :
- **Nom du produit** : `ZyatrIA Professional - Abonnement Mensuel`
- **Prix** : `799.00 CAD`
- **Type** : `Recurring - Monthly`

### Description :
```
⚡ Support prioritaire (réponse sous 24h)
⚡ Optimisations continues hebdomadaires
⚡ Nouveaux micro-agents sur demande (1/mois)
⚡ Analytics avancés avec insights IA
⚡ Revues stratégiques mensuelles
⚡ Accès aux nouvelles fonctionnalités en avant-première

Engagement minimum : 6 mois
```

### Paramètres avancés :
- Billing cycle : `Monthly`
- Success URL : `https://votre-domaine.com/success?plan=professional-monthly`

---

## 🟣 ENTERPRISE - Paiement Unique

### Configuration :
- **Nom du produit** : `ZyatrIA Enterprise - Déploiement Complet`
- **Prix** : `45000.00 CAD`
- **Type** : `One-time payment`

### Description :
```
💎 Solution complète sur mesure
💎 Agents IA illimités
💎 Micro-agents illimités
💎 Architecture personnalisée
💎 Intégrations complexes (API, legacy systems)
💎 Déploiement en 15 jours
💎 Formation complète de l'équipe (3 jours)
💎 Support dédié 90 jours
💎 Infrastructure scalable
💎 Sécurité et conformité avancées

Idéal pour : Grandes entreprises, besoins complexes
```

### Paramètres avancés :
- ✅ Collect customer email
- ✅ Collect billing address
- ✅ Collect phone number
- ✅ Collect company name
- ✅ Allow promotion codes
- Success URL : `https://votre-domaine.com/success?plan=enterprise-onetime`

---

## 🟣 ENTERPRISE - Mensuel

### Configuration :
- **Nom du produit** : `ZyatrIA Enterprise - Abonnement Mensuel`
- **Prix** : `3999.00 CAD`
- **Type** : `Recurring - Monthly`

### Description :
```
🏆 Support dédié 24/7 (Slack/Teams direct)
🏆 SLA garanti 99.9% uptime
🏆 Développement continu d'agents
🏆 Optimisations hebdomadaires
🏆 Revues stratégiques bi-hebdomadaires
🏆 Accès à l'équipe de R&D
🏆 Roadmap personnalisée
🏆 Formation continue de l'équipe

Engagement minimum : 12 mois
Account manager dédié
```

### Paramètres avancés :
- Billing cycle : `Monthly`
- Success URL : `https://votre-domaine.com/success?plan=enterprise-monthly`

---

## 🎯 SERVICES - Audit IA

### Configuration :
- **Nom du produit** : `Audit IA Complet`
- **Prix** : `499.00 CAD`
- **Type** : `One-time payment`

### Description :
```
🔍 Analyse complète de vos processus actuels
🔍 Identification des opportunités d'automatisation
🔍 Recommandations personnalisées
🔍 Estimation ROI détaillée
🔍 Roadmap d'implémentation
🔍 Rapport complet (20-30 pages)
🔍 Session de présentation (1h)

Livraison : 5-7 jours ouvrables
Valable 90 jours
```

### Paramètres avancés :
- Success URL : `https://votre-domaine.com/success?service=audit`

---

## 🎯 SERVICES - Consultation (Optionnel)

### Configuration :
- **Nom du produit** : `Consultation Stratégique IA`
- **Prix** : `199.00 CAD` (ou gratuit)
- **Type** : `One-time payment`

### Description :
```
💡 Session de 60 minutes avec un expert IA
💡 Analyse de vos besoins spécifiques
💡 Recommandations immédiates
💡 Q&A illimité pendant la session

Format : Visio (Zoom/Teams)
Planification sous 48h
```

---

## ✅ Après Création de TOUS les Liens

### Copiez les liens dans ce format :

```
🟢 STARTER
Starter One-time: https://buy.stripe.com/test_...
Starter Monthly: https://buy.stripe.com/test_...

🔵 PROFESSIONAL
Professional One-time: https://buy.stripe.com/test_...
Professional Monthly: https://buy.stripe.com/test_...

🟣 ENTERPRISE
Enterprise One-time: https://buy.stripe.com/test_...
Enterprise Monthly: https://buy.stripe.com/test_...

🎯 SERVICES
Audit: https://buy.stripe.com/test_...
Consultation: https://buy.stripe.com/test_...
```

---

## 🔧 Mise à Jour du Code

Une fois tous les liens créés, mettez à jour le fichier :
**`src/config/stripe-links.ts`**

Remplacez chaque `VOTRE_LIEN_ICI` par le lien réel.

---

## 🧪 Test des Liens

Utilisez ces cartes de test Stripe :

### ✅ Paiement Réussi
```
Numéro : 4242 4242 4242 4242
Date : N'importe quelle date future
CVC : N'importe quel 3 chiffres
```

### ❌ Paiement Refusé
```
Numéro : 4000 0000 0000 0002
```

### 🔐 Authentification 3D Secure
```
Numéro : 4000 0025 0000 3155
```

---

## 📊 Suivi des Conversions

Dans Stripe Dashboard, vous pourrez voir :
- Nombre de vues par lien
- Taux de conversion
- Revenus par produit
- Abandons de panier

---

## 🎨 Personnalisation Avancée (Optionnel)

### Ajouter un logo :
1. Dans Payment Link settings
2. Upload votre logo (recommandé : 512x512px, PNG)

### Couleurs de marque :
1. Settings → Branding
2. Ajoutez vos couleurs (#C98769 pour primary)

### Emails personnalisés :
1. Settings → Emails
2. Personnalisez les confirmations de paiement

---

## 🚨 Important

- ⚠️ Créez d'abord en **mode TEST**
- ⚠️ Testez chaque lien avant de passer en LIVE
- ⚠️ Vérifiez les webhooks (voir GUIDE_WEBHOOK_STRIPE.md)
- ⚠️ Configurez les emails de confirmation

---

## 📞 Besoin d'Aide ?

Si vous avez des questions :
1. Documentation Stripe : https://stripe.com/docs/payment-links
2. Support Stripe : https://support.stripe.com

---

**Prêt à créer vos liens ? Commencez par le Starter ! 🚀**
