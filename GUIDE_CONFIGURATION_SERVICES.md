# 🔧 Guide de Configuration des Services - ZyatrIA Global

## 📋 Table des Matières
1. [Formspree - Formulaires](#1-formspree---formulaires)
2. [Stripe - Paiements](#2-stripe---paiements)
3. [Mistral AI - Chatbot](#3-mistral-ai---chatbot)

---

## 1. 📧 Formspree - Formulaires

### ✅ Status Actuel
- **Form ID configuré:** `xbdedonn`
- **Fichier de config:** `src/config/formspree.ts`
- **Formulaires actifs:**
  - Contact principal
  - Newsletter
  - Lead qualification

### 🚀 Configuration Étape par Étape

#### Étape 1: Créer un compte Formspree
1. Allez sur https://formspree.io
2. Créez un compte gratuit
3. Vérifiez votre email

#### Étape 2: Créer vos formulaires
1. Dans le dashboard Formspree, cliquez sur **"New Form"**
2. Créez 3 formulaires:
   - **Contact Form** (formulaire principal)
   - **Newsletter Form** (inscription newsletter)
   - **Lead Qualification** (qualification de leads)

#### Étape 3: Récupérer les Form IDs
Chaque formulaire a un ID unique (format: `xbdedonn`)

#### Étape 4: Mettre à jour la configuration

**Fichier: `src/config/formspree.ts`**
```typescript
export const FORMSPREE_CONFIG = {
  // Remplacez par vos vrais Form IDs
  contactFormId: 'VOTRE_CONTACT_FORM_ID',
  newsletterFormId: 'VOTRE_NEWSLETTER_FORM_ID',
  leadQualificationFormId: 'VOTRE_LEAD_FORM_ID',
};
```

#### Étape 5: Mettre à jour le .env
```env
PUBLIC_FORMSPREE_FORM_ID=VOTRE_CONTACT_FORM_ID
```

### 🧪 Tester Formspree

1. **En local:**
   ```bash
   npm run dev
   ```
2. Allez sur le formulaire de contact
3. Remplissez et soumettez
4. Vérifiez la réception sur https://formspree.io/forms

### 📊 Fonctionnalités Formspree

- ✅ **Gratuit jusqu'à 50 soumissions/mois**
- ✅ Protection anti-spam
- ✅ Notifications email automatiques
- ✅ Export des données
- ✅ Intégrations (Slack, Zapier, etc.)

### 💡 Plan Gratuit vs Payant

**Gratuit:**
- 50 soumissions/mois
- Protection spam basique
- 1 utilisateur

**Payant ($10/mois):**
- 1000 soumissions/mois
- Protection spam avancée
- Plusieurs utilisateurs
- Webhooks
- Intégrations avancées

---

## 2. 💳 Stripe - Paiements

### ✅ Status Actuel
- **Clés API:** ✅ Configurées (mode test)
- **Fichier de config:** `src/config/stripe-links.ts`
- **Plans configurés:**
  - Starter: 2499€ (one-time) / 299€ (monthly)
  - Professional: 7999€ (one-time) / 799€ (monthly)
  - Enterprise: 45000€ (one-time) / 3999€ (monthly)

### 🚀 Configuration Étape par Étape

#### Étape 1: Créer un compte Stripe
1. Allez sur https://stripe.com
2. Créez un compte
3. Activez le mode test

#### Étape 2: Récupérer les clés API

1. Dans le dashboard Stripe: **Developers > API keys**
2. Copiez:
   - **Publishable key** (commence par `pk_test_`)
   - **Secret key** (commence par `sk_test_`)

#### Étape 3: Créer les Payment Links

**Pour chaque plan (Starter, Professional, Enterprise):**

1. Dans Stripe: **Products > Payment links**
2. Cliquez sur **"Create payment link"**
3. Configurez:
   - **Nom:** Starter Monthly / Starter One-time
   - **Prix:** 299€ / 2499€
   - **Type:** Recurring / One-time
   - **Success URL:** `https://votre-domaine.com/success`
   - **Cancel URL:** `https://votre-domaine.com/pricing`

4. Copiez le lien généré (format: `https://buy.stripe.com/test_XXXXXXXX`)

#### Étape 4: Mettre à jour stripe-links.ts

**Fichier: `src/config/stripe-links.ts`**
```typescript
export const stripeLinks = {
  starter: {
    oneTime: 'https://buy.stripe.com/test_VOTRE_LIEN_STARTER_ONETIME',
    monthly: 'https://buy.stripe.com/test_VOTRE_LIEN_STARTER_MONTHLY'
  },
  professional: {
    oneTime: 'https://buy.stripe.com/test_VOTRE_LIEN_PRO_ONETIME',
    monthly: 'https://buy.stripe.com/test_VOTRE_LIEN_PRO_MONTHLY'
  },
  enterprise: {
    oneTime: 'https://buy.stripe.com/test_VOTRE_LIEN_ENTERPRISE_ONETIME',
    monthly: 'https://buy.stripe.com/test_VOTRE_LIEN_ENTERPRISE_MONTHLY'
  }
};
```

#### Étape 5: Configurer les Webhooks

1. Dans Stripe: **Developers > Webhooks**
2. Cliquez sur **"Add endpoint"**
3. URL: `https://votre-domaine.com/api/stripe/webhook`
4. Sélectionnez les événements:
   - `checkout.session.completed`
   - `payment_intent.succeeded`
   - `payment_intent.payment_failed`
   - `customer.subscription.created`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`

5. Copiez le **Signing secret** (commence par `whsec_`)

#### Étape 6: Mettre à jour le .env

```env
# Stripe Configuration
STRIPE_SECRET_KEY=sk_test_VOTRE_CLE_SECRETE
STRIPE_PUBLISHABLE_KEY=pk_test_VOTRE_CLE_PUBLIQUE
STRIPE_WEBHOOK_SECRET=whsec_VOTRE_WEBHOOK_SECRET
```

### 🧪 Tester Stripe

#### Cartes de test Stripe:
```
Succès: 4242 4242 4242 4242
Échec: 4000 0000 0000 0002
3D Secure: 4000 0027 6000 3184

Date: N'importe quelle date future
CVC: N'importe quel 3 chiffres
```

#### Test en local avec Stripe CLI:

1. **Installer Stripe CLI:**
   ```bash
   # Windows (avec Scoop)
   scoop install stripe
   
   # Mac
   brew install stripe/stripe-cli/stripe
   ```

2. **Se connecter:**
   ```bash
   stripe login
   ```

3. **Écouter les webhooks:**
   ```bash
   stripe listen --forward-to localhost:4321/api/stripe/webhook
   ```

4. **Tester un paiement:**
   ```bash
   stripe trigger checkout.session.completed
   ```

### 📊 Vérifications Stripe

- [ ] Clés API configurées
- [ ] Payment Links créés pour tous les plans
- [ ] Webhooks configurés
- [ ] Test de paiement réussi
- [ ] Webhook reçu et traité
- [ ] Email de confirmation envoyé

---

## 3. 🤖 Mistral AI - Chatbot

### ✅ Status Actuel
- **API Key:** ✅ Configurée
- **Fichier composant:** `src/components/MistralChatBot.tsx`
- **API endpoint:** `src/pages/api/mistral-chat.ts`
- **Modèle:** `mistral-small-latest`

### 🚀 Configuration Étape par Étape

#### Étape 1: Créer un compte Mistral AI

1. Allez sur https://console.mistral.ai
2. Créez un compte
3. Vérifiez votre email

#### Étape 2: Récupérer la clé API

1. Dans le dashboard: **API Keys**
2. Cliquez sur **"Create new key"**
3. Donnez un nom: "ZyatrIA Production"
4. Copiez la clé (commence par `mistral_`)

⚠️ **Important:** Sauvegardez cette clé immédiatement, elle ne sera plus visible !

#### Étape 3: Mettre à jour le .env

```env
# Mistral AI Configuration
MISTRAL_API_KEY=VOTRE_CLE_API_MISTRAL
```

#### Étape 4: Configurer le contexte du chatbot

**Fichier: `src/pages/api/mistral-chat.ts`**

Le système prompt est déjà configuré pour ZyatrIA. Vous pouvez le personnaliser:

```typescript
const systemPrompt = `Tu es l'assistant virtuel de ZyatrIA Global...
// Personnalisez selon vos besoins
`;
```

### 🧪 Tester Mistral AI

1. **En local:**
   ```bash
   npm run dev
   ```

2. Cliquez sur l'icône du chatbot (bas à droite)

3. Testez ces questions:
   - "Quels sont vos services ?"
   - "Combien coûte le plan Professional ?"
   - "Comment fonctionne le déploiement ?"
   - "Quels sont les délais ?"

4. Vérifiez que les réponses sont:
   - ✅ Pertinentes
   - ✅ En français
   - ✅ Rapides (< 3 secondes)
   - ✅ Contextuelles à ZyatrIA

### 📊 Fonctionnalités du Chatbot

- ✅ **Support multilingue** (FR/EN/ES/PT)
- ✅ **Contexte ZyatrIA** (services, prix, processus)
- ✅ **Historique de conversation**
- ✅ **Interface moderne**
- ✅ **Responsive mobile**
- ✅ **Animations fluides**

### 💡 Tarification Mistral AI

**Modèle: mistral-small-latest**
- Input: ~$0.001 / 1K tokens
- Output: ~$0.003 / 1K tokens

**Estimation mensuelle:**
- 1000 conversations/mois
- ~10 messages par conversation
- ~500 tokens par message
- **Coût estimé: ~$15-30/mois**

### 🎨 Personnalisation du Chatbot

**Couleurs et style:**
Le chatbot utilise les variables CSS de votre thème:
- `--primary` pour les boutons
- `--background` pour le fond
- `--foreground` pour le texte

**Position:**
Par défaut en bas à droite. Modifiable dans `MistralChatBot.tsx`:
```tsx
className="fixed bottom-4 right-4 z-50"
```

---

## 🚀 Déploiement sur Cloudflare

### Variables d'environnement à configurer:

1. Allez sur **Cloudflare Pages > Votre projet > Settings > Environment variables**

2. Ajoutez ces variables:

```env
# Formspree
PUBLIC_FORMSPREE_FORM_ID=votre_form_id

# Stripe (utilisez les clés LIVE en production)
STRIPE_SECRET_KEY=sk_live_VOTRE_CLE
STRIPE_PUBLISHABLE_KEY=pk_live_VOTRE_CLE
STRIPE_WEBHOOK_SECRET=whsec_VOTRE_SECRET

# Mistral AI
MISTRAL_API_KEY=VOTRE_CLE_MISTRAL
```

3. **Important:** Créez des webhooks Stripe pour votre domaine de production:
   - URL: `https://votre-domaine.com/api/stripe/webhook`

---

## ✅ Checklist Finale

### Formspree:
- [ ] Compte créé
- [ ] 3 formulaires créés
- [ ] Form IDs copiés
- [ ] Configuration mise à jour
- [ ] Test de soumission réussi

### Stripe:
- [ ] Compte créé
- [ ] Clés API récupérées
- [ ] 6 Payment Links créés (3 plans × 2 types)
- [ ] Webhooks configurés
- [ ] Test de paiement réussi
- [ ] Webhook reçu

### Mistral AI:
- [ ] Compte créé
- [ ] Clé API récupérée
- [ ] Configuration mise à jour
- [ ] Test du chatbot réussi
- [ ] Réponses pertinentes

### Déploiement:
- [ ] Variables d'environnement configurées sur Cloudflare
- [ ] Webhooks Stripe pointent vers le domaine de production
- [ ] Tests en production réussis

---

## 📞 Support

**Formspree:** https://help.formspree.io
**Stripe:** https://stripe.com/docs
**Mistral AI:** https://docs.mistral.ai

---

## 🎯 Prochaines Étapes

1. ✅ Configurer Formspree
2. ✅ Configurer Stripe
3. ✅ Configurer Mistral AI
4. 🚀 Déployer sur Cloudflare
5. 🧪 Tester en production
6. 📊 Monitorer les performances

**Temps estimé:** 2-3 heures pour tout configurer

---

**Dernière mise à jour:** 2024
**Version:** 1.0.0
