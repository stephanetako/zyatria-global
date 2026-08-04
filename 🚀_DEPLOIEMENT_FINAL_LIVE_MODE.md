# 🚀 DÉPLOIEMENT FINAL - MODE LIVE

## ✅ STATUT ACTUEL

Tout est prêt pour le déploiement en production !

- ✅ `.env` corrigé avec toutes les variables Stripe
- ✅ Build réussi sans erreurs
- ✅ 14 liens Stripe en LIVE MODE configurés
- ✅ Code à jour et fonctionnel

---

## 📋 ÉTAPE 1 : COMMIT ET PUSH VERS GITHUB

```bash
# Ajouter tous les fichiers modifiés
git add .

# Créer un commit
git commit -m "🚀 Configuration finale - Stripe LIVE MODE + tous les liens"

# Pousser vers GitHub
git push origin master
```

---

## 🌐 ÉTAPE 2 : CONFIGURER LES VARIABLES D'ENVIRONNEMENT SUR CLOUDFLARE

### Aller sur Cloudflare Pages :
1. Connectez-vous à https://dash.cloudflare.com
2. Allez dans **Workers & Pages**
3. Sélectionnez votre projet
4. Allez dans **Settings** → **Environment variables**

### Ajouter ces variables (pour Production ET Preview) :

#### 💳 STRIPE (LIVE MODE)
```
STRIPE_SECRET_KEY = sk_live_51QhRRhP3bMl... (votre clé secrète)
PUBLIC_STRIPE_PUBLISHABLE_KEY = pk_live_51QhRRhP3bMl... (votre clé publique)
STRIPE_WEBHOOK_SECRET = whsec_... (votre secret webhook)
```

#### 📧 FORMSPREE
```
FORMSPREE_FORM_ID = mldekqbz
```

#### 🤖 MISTRAL AI
```
MISTRAL_API_KEY = Ij0Aq3Ot3zzJ... (votre clé API)
```

#### 🌐 WEBFLOW (optionnel)
```
WEBFLOW_API_HOST = https://api.webflow.com
WEBFLOW_SITE_API_TOKEN = (si vous en avez un)
WEBFLOW_CMS_SITE_API_TOKEN = (si vous en avez un)
```

---

## 🔗 ÉTAPE 3 : CONFIGURER LE WEBHOOK STRIPE

### 1. Aller sur Stripe Dashboard
https://dashboard.stripe.com/webhooks

### 2. Cliquer sur "Add endpoint"

### 3. Entrer l'URL de votre endpoint :
```
https://votre-domaine.pages.dev/api/stripe/webhook
```

### 4. Sélectionner ces événements :
- ✅ `checkout.session.completed`
- ✅ `payment_intent.succeeded`
- ✅ `payment_intent.payment_failed`
- ✅ `customer.subscription.created`
- ✅ `customer.subscription.updated`
- ✅ `customer.subscription.deleted`
- ✅ `invoice.paid`
- ✅ `invoice.payment_failed`

### 5. Copier le "Signing secret"
Il commence par `whsec_...`

### 6. L'ajouter dans Cloudflare
Retournez dans **Environment variables** et ajoutez/mettez à jour :
```
STRIPE_WEBHOOK_SECRET = whsec_... (le secret que vous venez de copier)
```

---

## 🚀 ÉTAPE 4 : DÉPLOYER

### Option A : Déploiement automatique via GitHub
Une fois que vous avez poussé vers GitHub, Cloudflare déploiera automatiquement.

### Option B : Déploiement manuel via Wrangler
```bash
# Build le projet
npm run build

# Déployer
npx wrangler deploy
```

---

## ✅ ÉTAPE 5 : VÉRIFICATION FINALE

### 1. Tester la page d'accueil
```
https://votre-domaine.pages.dev
```

### 2. Tester la page Pricing
```
https://votre-domaine.pages.dev/pricing
```

### 3. Tester un lien Stripe
Cliquez sur un bouton "Commencer" et vérifiez que :
- ✅ Vous êtes redirigé vers Stripe
- ✅ Le montant est correct
- ✅ C'est bien en LIVE MODE (pas de bandeau "TEST MODE")

### 4. Tester le formulaire de contact
```
https://votre-domaine.pages.dev/contact-simple
```

### 5. Tester les micro-agents
```
https://votre-domaine.pages.dev/micro-agents
```

---

## 🎯 CHECKLIST FINALE

- [ ] Code poussé sur GitHub
- [ ] Variables d'environnement configurées sur Cloudflare
- [ ] Webhook Stripe configuré
- [ ] Déploiement effectué
- [ ] Page d'accueil fonctionne
- [ ] Page Pricing fonctionne
- [ ] Liens Stripe fonctionnent (LIVE MODE)
- [ ] Formulaire de contact fonctionne
- [ ] Micro-agents fonctionnent

---

## 🆘 EN CAS DE PROBLÈME

### Erreur "Invalid binding SESSION"
Ajoutez dans `wrangler.jsonc` :
```json
"kv_namespaces": [
  { "binding": "SESSION", "id": "votre_kv_id" }
]
```

### Les liens Stripe ne fonctionnent pas
Vérifiez que :
1. Les variables `STRIPE_SECRET_KEY` et `PUBLIC_STRIPE_PUBLISHABLE_KEY` sont bien configurées
2. Elles commencent par `sk_live_` et `pk_live_` (pas `sk_test_`)

### Le webhook ne fonctionne pas
Vérifiez que :
1. L'URL du webhook est correcte
2. Le `STRIPE_WEBHOOK_SECRET` est bien configuré
3. Les événements sont bien sélectionnés

---

## 📊 RÉSUMÉ DES LIENS STRIPE (LIVE MODE)

### Plans principaux :
- **Starter** : 68 CAD/mois
- **Professional** : 697 CAD (unique) ou 208 CAD/mois
- **Enterprise** : 997 CAD (unique) ou 698 CAD/mois

### Micro-agents :
- **Qualification Leads** : 69 CAD/mois
- **Support Client** : 69 CAD/mois
- **Rendez-vous** : 68 CAD/mois
- **Suivi Prospects** : 180 CAD/mois
- **Immobilier** : 208 CAD/mois
- **E-commerce** : 195 CAD/mois

### Services :
- **Audit IA** : 497 CAD
- **Consultation** : 149 CAD
- **Formation** : 995 CAD

---

## 🎉 FÉLICITATIONS !

Une fois toutes ces étapes complétées, votre site sera en production avec :
- ✅ Paiements Stripe en LIVE MODE
- ✅ Formulaires de contact fonctionnels
- ✅ Chatbot IA Mistral
- ✅ Tous les micro-agents configurés
- ✅ Design professionnel et responsive

**Votre site est prêt à accepter de vrais paiements ! 🚀**
