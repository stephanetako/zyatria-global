# 🎯 Guide : Créer les Liens Stripe pour les Micro-Agents

## 📋 Situation Actuelle

✅ **Fonctionnels (8/14):**
- Starter Monthly
- Professional One-time & Monthly
- Enterprise One-time & Monthly
- Audit
- Consultation
- Formation

⚠️ **À créer (6/14):**
- Lead Qualification
- Customer Support
- Appointments
- Prospect Followup
- Real Estate
- E-commerce

**Actuellement**, les boutons des micro-agents redirigent vers le formulaire de contact (#contact).

---

## 🚀 Comment Créer les Liens Stripe

### Étape 1 : Accéder au Dashboard Stripe

1. Allez sur : https://dashboard.stripe.com/payment-links
2. Assurez-vous d'être en **MODE LIVE** (pas Test)
3. Cliquez sur **"+ New"** ou **"Créer un lien"**

---

### Étape 2 : Créer Chaque Produit

Créez 6 Payment Links avec ces informations :

#### 1️⃣ **Lead Qualification**
```
Nom: Micro-Agent - Qualification Automatique des Leads
Prix: 69.00 CAD
Type: Récurrent (mensuel)
Description: Qualification intelligente 24/7, scoring automatique, routage vers les bonnes équipes
```

#### 2️⃣ **Customer Support**
```
Nom: Micro-Agent - Réponses Clients 24/7
Prix: 69.00 CAD
Type: Récurrent (mensuel)
Description: Réponses instantanées 24/7, support multilingue, base de connaissances FAQ
```

#### 3️⃣ **Appointments**
```
Nom: Micro-Agent - Gestion des Rendez-vous
Prix: 68.00 CAD
Type: Récurrent (mensuel)
Description: Réservation en ligne directe, rappels automatiques, synchronisation agenda
```

#### 4️⃣ **Prospect Followup**
```
Nom: Micro-Agent - Suivi des Prospects
Prix: 180.00 CAD
Type: Récurrent (mensuel)
Description: Séquences automatisées, multi-canal (email, SMS, WhatsApp), timing intelligent
```

#### 5️⃣ **Real Estate**
```
Nom: Micro-Agent - Immobilier
Prix: 208.00 CAD
Type: Récurrent (mensuel)
Description: Planification des visites, qualification des acheteurs, réponses sur les biens
```

#### 6️⃣ **E-commerce**
```
Nom: Micro-Agent - E-commerce
Prix: 195.00 CAD
Type: Récurrent (mensuel)
Description: Récupération de paniers abandonnés, suivi de commandes, FAQ produits
```

---

### Étape 3 : Copier les Liens

Après avoir créé chaque Payment Link :

1. Cliquez sur le lien créé
2. Copiez l'URL complète (ex: `https://buy.stripe.com/XXXXXXXXXX`)
3. Notez-la quelque part

---

### Étape 4 : Mettre à Jour le Code

Ouvrez le fichier `src/config/stripe-links.ts` et remplacez :

```typescript
microAgents: {
  leadQualification: '#contact', // ← REMPLACER
  customerSupport: '#contact',    // ← REMPLACER
  appointments: '#contact',       // ← REMPLACER
  prospectFollowup: '#contact',   // ← REMPLACER
  realEstate: '#contact',         // ← REMPLACER
  ecommerce: '#contact',          // ← REMPLACER
},
```

Par vos vrais liens :

```typescript
microAgents: {
  leadQualification: 'https://buy.stripe.com/VOTRE_LIEN_ICI',
  customerSupport: 'https://buy.stripe.com/VOTRE_LIEN_ICI',
  appointments: 'https://buy.stripe.com/VOTRE_LIEN_ICI',
  prospectFollowup: 'https://buy.stripe.com/VOTRE_LIEN_ICI',
  realEstate: 'https://buy.stripe.com/VOTRE_LIEN_ICI',
  ecommerce: 'https://buy.stripe.com/VOTRE_LIEN_ICI',
},
```

---

### Étape 5 : Tester

1. Sauvegardez le fichier
2. Redémarrez le serveur de développement :
   ```bash
   npm run dev
   ```
3. Testez chaque bouton sur la page

---

## 📊 Template de Copier-Coller

Une fois vos liens créés, copiez ce template et remplissez-le :

```typescript
microAgents: {
  leadQualification: 'https://buy.stripe.com/_______________',
  customerSupport: 'https://buy.stripe.com/_______________',
  appointments: 'https://buy.stripe.com/_______________',
  prospectFollowup: 'https://buy.stripe.com/_______________',
  realEstate: 'https://buy.stripe.com/_______________',
  ecommerce: 'https://buy.stripe.com/_______________',
},
```

---

## ✅ Checklist

- [ ] Créer Payment Link : Lead Qualification (69 CAD/mois)
- [ ] Créer Payment Link : Customer Support (69 CAD/mois)
- [ ] Créer Payment Link : Appointments (68 CAD/mois)
- [ ] Créer Payment Link : Prospect Followup (180 CAD/mois)
- [ ] Créer Payment Link : Real Estate (208 CAD/mois)
- [ ] Créer Payment Link : E-commerce (195 CAD/mois)
- [ ] Copier tous les liens dans `stripe-links.ts`
- [ ] Tester chaque bouton
- [ ] Déployer sur Cloudflare

---

## 🆘 Besoin d'Aide ?

Si vous avez des questions ou des problèmes :
1. Vérifiez que vous êtes en **MODE LIVE** dans Stripe
2. Vérifiez que les liens commencent par `https://buy.stripe.com/`
3. Vérifiez qu'il n'y a pas d'espaces ou de caractères spéciaux

---

## 🎉 Une Fois Terminé

Tous vos boutons Stripe seront fonctionnels ! 🚀

**Total : 14/14 liens Stripe actifs**
- 5 Plans principaux ✅
- 3 Services ✅
- 6 Micro-Agents ✅
