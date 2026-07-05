# 🎯 CRÉER VOS LIENS STRIPE - GUIDE COMPLET

## ⚠️ Problème Résolu

**Avant :** Les liens Stripe étaient des placeholders → Page blanche ❌  
**Maintenant :** Liens vides → Redirection vers formulaire de contact ✅

---

## 🚀 Comment Créer les Vrais Liens Stripe

### Étape 1 : Connexion à Stripe

1. Va sur **https://dashboard.stripe.com**
2. Connecte-toi à ton compte
3. **IMPORTANT** : Assure-toi d'être en **mode Test** (toggle en haut à droite)

---

### Étape 2 : Créer un Payment Link

1. Dans le menu de gauche, clique sur **"Produits"** ou **"Payment Links"**
2. Clique sur **"+ Nouveau lien de paiement"** ou **"+ New payment link"**

---

### Étape 3 : Configuration du Lien

#### Pour **Starter - Paiement Unique** (5 000 $CA)

**Informations du produit :**
- Nom : `Bot IA Starter - Paiement Unique`
- Description : `Déploiement initial d'un agent IA personnalisé`
- Prix : `5000`
- Devise : `CAD` (Dollar canadien)
- Type : **Paiement unique** (One-time payment)

**Options avancées (optionnel) :**
- ✅ Collecter l'adresse de facturation
- ✅ Collecter le numéro de téléphone
- ✅ Permettre les codes promo

**Après paiement :**
- URL de redirection : `https://votre-site.com/success` (ou laisse vide)

**Cliquez sur "Créer le lien"**

---

### Étape 4 : Copier le Lien

Une fois créé, tu verras :
```
https://buy.stripe.com/test_xxxxxxxxxxxxx
```

**Copie ce lien !**

---

### Étape 5 : Répéter pour Tous les Plans

Crée un lien pour chaque plan :

#### 📋 Checklist des Liens à Créer

**Plans Starter :**
- [ ] Starter - Paiement unique (5 000 $CA)
- [ ] Starter - Mensuel (299 $CA/mois)

**Plans Professional :**
- [ ] Professional - Paiement unique (15 000 $CA)
- [ ] Professional - Mensuel (799 $CA/mois)

**Plans Enterprise :**
- [ ] Enterprise - Paiement unique (45 000 $CA)
- [ ] Enterprise - Mensuel (2 499 $CA/mois)

**Services :**
- [ ] Audit IA Complet (2 500 $CA)
- [ ] Consultation Stratégique (500 $CA)

---

### Étape 6 : Mettre à Jour le Code

Ouvre `src/config/stripe-links.ts` et remplace :

```typescript
export const stripeLinks = {
  starter: {
    oneTime: 'https://buy.stripe.com/test_xxxxx', // ← Colle ton lien ici
    monthly: 'https://buy.stripe.com/test_xxxxx',  // ← Colle ton lien ici
  },
  professional: {
    oneTime: 'https://buy.stripe.com/test_xxxxx',  // ← Colle ton lien ici
    monthly: 'https://buy.stripe.com/test_xxxxx',  // ← Colle ton lien ici
  },
  enterprise: {
    oneTime: 'https://buy.stripe.com/test_xxxxx',  // ← Colle ton lien ici
    monthly: 'https://buy.stripe.com/test_xxxxx',  // ← Colle ton lien ici
  },
  services: {
    audit: 'https://buy.stripe.com/test_xxxxx',        // ← Colle ton lien ici
    consultation: 'https://buy.stripe.com/test_xxxxx', // ← Colle ton lien ici
  },
} as const;
```

---

## 🧪 Tester les Liens

### 1. Lance le serveur
```bash
npm run dev
```

### 2. Ouvre la page
```
http://localhost:4321
```

### 3. Clique sur un bouton de tarification

**Si lien configuré :**
```
✅ Redirecting to Stripe: https://buy.stripe.com/test_xxxxx
→ Page Stripe s'ouvre
```

**Si lien non configuré :**
```
⚠️ Lien Stripe non configuré, redirection vers le formulaire de contact
→ Scroll vers le formulaire
```

---

## 💳 Cartes de Test Stripe

Une fois sur la page Stripe, utilise ces cartes pour tester :

**Paiement réussi :**
```
4242 4242 4242 4242
```

**Paiement refusé :**
```
4000 0000 0000 0002
```

**Authentification 3D Secure :**
```
4000 0027 6000 3184
```

**Pour tous les tests :**
- Date d'expiration : N'importe quelle date future (ex: 12/25)
- CVC : N'importe quel code à 3 chiffres (ex: 123)
- Code postal : N'importe quel code postal valide

---

## 🔄 Mode Test vs Production

### Mode Test (Développement)
- URL : `https://buy.stripe.com/test_xxxxx`
- Utilise les cartes de test
- Aucun vrai paiement

### Mode Production (Live)
- URL : `https://buy.stripe.com/xxxxx` (sans "test_")
- Vrais paiements
- À activer quand tout est prêt

---

## ✅ Comportement Actuel

**Maintenant, quand tu cliques sur un bouton :**

1. **Si le lien est vide** → Scroll vers le formulaire de contact ✅
2. **Si le lien existe** → Redirection vers Stripe ✅
3. **Console (F12)** → Affiche ce qui se passe ✅

**Plus de page blanche !** 🎉

---

## 📝 Notes Importantes

1. **Mode Test** : Commence toujours en mode test
2. **Liens différents** : Test et Production ont des liens différents
3. **Sécurité** : Les liens sont publics, c'est normal
4. **Webhooks** : Pour recevoir les confirmations de paiement (optionnel)

---

## 🎯 Prochaine Étape

**Option A : Créer les liens maintenant**
→ Suis ce guide étape par étape

**Option B : Utiliser le formulaire de contact**
→ Ça fonctionne déjà ! Les boutons redirigent vers le contact

---

**Besoin d'aide ? Demande-moi !** 🚀
