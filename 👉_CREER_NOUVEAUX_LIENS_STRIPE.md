# 🔑 CRÉER LES NOUVEAUX LIENS STRIPE

## ⚠️ PROBLÈME

Les anciens liens Stripe ne sont plus actifs. Il faut créer de nouveaux Payment Links.

---

## 📋 ÉTAPES À SUIVRE

### 1️⃣ Connecte-toi à Stripe Dashboard

👉 **https://dashboard.stripe.com/test/payment-links**

(Ou en mode LIVE : https://dashboard.stripe.com/payment-links)

---

### 2️⃣ Crée les Payment Links

Clique sur **"+ New"** pour chaque produit ci-dessous :

---

## 📦 PRODUITS À CRÉER (14 au total)

### 🎯 PLANS PRINCIPAUX (6 liens)

#### 1. Starter - Monthly
- **Nom:** Bot IA Starter - Abonnement Mensuel
- **Prix:** 299 CAD / mois
- **Type:** Récurrent (mensuel)
- **Description:** Support continu, mises à jour mensuelles, maintenance incluse

#### 2. Starter - One-Time
- **Nom:** Bot IA Starter - Paiement Unique
- **Prix:** 5000 CAD
- **Type:** Paiement unique
- **Description:** Déploiement complet, support inclus

#### 3. Professional - Monthly
- **Nom:** Bot IA Professional - Abonnement Mensuel
- **Prix:** 799 CAD / mois
- **Type:** Récurrent (mensuel)
- **Description:** Support prioritaire, optimisations continues, analytics avancés

#### 4. Professional - One-Time
- **Nom:** Bot IA Professional - Paiement Unique
- **Prix:** 15000 CAD
- **Type:** Paiement unique
- **Description:** 3 agents IA, automatisation avancée, déploiement rapide

#### 5. Enterprise - Monthly
- **Nom:** Bot IA Enterprise - Abonnement Mensuel
- **Prix:** 2499 CAD / mois
- **Type:** Récurrent (mensuel)
- **Description:** Support dédié 24/7, SLA garanti, développement continu

#### 6. Enterprise - One-Time
- **Nom:** Bot IA Enterprise - Paiement Unique
- **Prix:** 45000 CAD
- **Type:** Paiement unique
- **Description:** Solution complète, 7 agents IA, déploiement rapide

---

### 🛠️ SERVICES (3 liens)

#### 7. Audit IA Complet
- **Nom:** Audit IA Complet + Plan d'Action 90 jours
- **Prix:** 2500 CAD
- **Type:** Paiement unique
- **Description:** Analyse complète de vos processus, recommandations personnalisées

#### 8. Consultation Stratégique
- **Nom:** Consultation Stratégique IA
- **Prix:** 500 CAD
- **Type:** Paiement unique
- **Description:** Session de consultation avec nos experts IA

#### 9. Formation
- **Nom:** Formation IA pour Équipes
- **Prix:** 2500 CAD
- **Type:** Paiement unique
- **Description:** Formation complète pour transformer vos équipes avec l'IA

---

### 🤖 MICRO-AGENTS (6 liens)

#### 10. Lead Qualification
- **Nom:** Micro-Agent - Qualification Automatique des Leads
- **Prix:** 97 CAD / mois
- **Type:** Récurrent (mensuel)
- **Description:** Qualification intelligente 24/7, scoring automatique

#### 11. Customer Support
- **Nom:** Micro-Agent - Réponses Clients 24/7
- **Prix:** 97 CAD / mois
- **Type:** Récurrent (mensuel)
- **Description:** Réponses instantanées 24/7, support multilingue

#### 12. Appointments
- **Nom:** Micro-Agent - Gestion des Rendez-vous
- **Prix:** 97 CAD / mois
- **Type:** Récurrent (mensuel)
- **Description:** Réservation en ligne directe, rappels automatiques

#### 13. Prospect Follow-up
- **Nom:** Micro-Agent - Suivi des Prospects
- **Prix:** 197 CAD / mois
- **Type:** Récurrent (mensuel)
- **Description:** Séquences automatisées, multi-canal

#### 14. Real Estate
- **Nom:** Micro-Agent - Immobilier
- **Prix:** 297 CAD / mois
- **Type:** Récurrent (mensuel)
- **Description:** Planification des visites, qualification des acheteurs

#### 15. E-commerce
- **Nom:** Micro-Agent - E-commerce
- **Prix:** 297 CAD / mois
- **Type:** Récurrent (mensuel)
- **Description:** Récupération de paniers abandonnés, suivi de commandes

---

## 3️⃣ COPIE LES LIENS

Après avoir créé chaque Payment Link, copie l'URL complète.

Elle ressemblera à :
```
https://buy.stripe.com/XXXXXXXXXXXXXXX
```

---

## 4️⃣ ENVOIE-MOI LES LIENS

Envoie-moi les 14 liens dans ce format :

```
STARTER_MONTHLY=https://buy.stripe.com/...
STARTER_ONETIME=https://buy.stripe.com/...
PROFESSIONAL_MONTHLY=https://buy.stripe.com/...
PROFESSIONAL_ONETIME=https://buy.stripe.com/...
ENTERPRISE_MONTHLY=https://buy.stripe.com/...
ENTERPRISE_ONETIME=https://buy.stripe.com/...
AUDIT=https://buy.stripe.com/...
CONSULTATION=https://buy.stripe.com/...
FORMATION=https://buy.stripe.com/...
LEAD_QUALIFICATION=https://buy.stripe.com/...
CUSTOMER_SUPPORT=https://buy.stripe.com/...
APPOINTMENTS=https://buy.stripe.com/...
PROSPECT_FOLLOWUP=https://buy.stripe.com/...
REAL_ESTATE=https://buy.stripe.com/...
ECOMMERCE=https://buy.stripe.com/...
```

---

## ✅ JE METTRAI À JOUR LE CODE

Une fois que tu m'auras envoyé les liens, je mettrai à jour automatiquement :
- `src/config/stripe-links.ts`
- Build du projet
- Vérification complète

---

## 💡 ASTUCE

**Mode Test vs Live:**
- Pour tester : Utilise le mode TEST de Stripe
- Pour production : Utilise le mode LIVE de Stripe

**Je te recommande de commencer en mode TEST** pour vérifier que tout fonctionne ! 🧪

---

## 🆘 BESOIN D'AIDE ?

Si tu as des questions sur la création des Payment Links, dis-le moi ! 😊
