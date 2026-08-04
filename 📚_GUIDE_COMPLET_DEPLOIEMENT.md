# 📚 GUIDE COMPLET DE DÉPLOIEMENT

## 🎯 OBJECTIF

Déployer votre site ZyatrIA Global en production avec Stripe en **LIVE MODE** et tous les services configurés.

---

## 📋 TABLE DES MATIÈRES

1. [Fichiers de déploiement](#fichiers-de-déploiement)
2. [Prérequis](#prérequis)
3. [Déploiement rapide](#déploiement-rapide)
4. [Configuration détaillée](#configuration-détaillée)
5. [Vérification](#vérification)
6. [Dépannage](#dépannage)

---

## 📁 FICHIERS DE DÉPLOIEMENT

Voici tous les fichiers créés pour vous aider :

### 🚀 Scripts de déploiement
- **`deploy-live-mode.ps1`** - Script PowerShell automatique (Windows)
- **`deploy-live-mode.sh`** - Script Bash automatique (Linux/Mac)

### 📖 Guides
- **`👉_LANCER_DEPLOIEMENT.md`** - Guide de démarrage rapide
- **`🚀_DEPLOIEMENT_FINAL_LIVE_MODE.md`** - Guide complet étape par étape
- **`✅_PRET_POUR_DEPLOIEMENT.md`** - Checklist de vérification
- **`📚_GUIDE_COMPLET_DEPLOIEMENT.md`** - Ce fichier (guide complet)

### 📋 Références
- **`📋_VARIABLES_CLOUDFLARE.md`** - Liste des variables d'environnement
- **`🔍_AUDIT_ENVIRONNEMENT_COMPLET.md`** - Audit de configuration

---

## ✅ PRÉREQUIS

Avant de commencer, assurez-vous d'avoir :

### 1. Comptes et accès
- [ ] Compte GitHub avec accès au repository
- [ ] Compte Cloudflare Pages
- [ ] Compte Stripe en mode production
- [ ] Compte Formspree
- [ ] Compte Mistral AI

### 2. Clés API
- [ ] Stripe Secret Key (sk_live_...)
- [ ] Stripe Publishable Key (pk_live_...)
- [ ] Formspree Form ID (mldekqbz)
- [ ] Mistral API Key

### 3. Outils installés
- [ ] Git
- [ ] Node.js (v18+)
- [ ] npm
- [ ] PowerShell (Windows) ou Bash (Linux/Mac)

---

## ⚡ DÉPLOIEMENT RAPIDE (3 MINUTES)

### Option 1 : Script automatique (RECOMMANDÉ)

**Windows (PowerShell) :**
```powershell
.\deploy-live-mode.ps1
```

**Linux/Mac (Bash) :**
```bash
./deploy-live-mode.sh
```

Le script va :
1. ✅ Vérifier le statut Git
2. ✅ Builder le projet
3. ✅ Commit et push vers GitHub
4. ✅ Vous guider pour la configuration Cloudflare
5. ✅ Vous guider pour le webhook Stripe

### Option 2 : Commandes manuelles

```bash
# 1. Build
npm run build

# 2. Commit et push
git add .
git commit -m "🚀 Déploiement LIVE MODE - Stripe configuré"
git push origin master

# 3. Cloudflare déploiera automatiquement
```

---

## 🔧 CONFIGURATION DÉTAILLÉE

### Étape 1 : Configurer les variables d'environnement sur Cloudflare

1. **Aller sur Cloudflare Dashboard**
   - https://dash.cloudflare.com
   - Workers & Pages → Votre projet → Settings → Environment variables

2. **Ajouter les variables (Production ET Preview)**

#### 💳 Stripe (LIVE MODE)
```
STRIPE_SECRET_KEY = sk_live_51QhRRhP3bMl...
PUBLIC_STRIPE_PUBLISHABLE_KEY = pk_live_51QhRRhP3bMl...
STRIPE_WEBHOOK_SECRET = whsec_... (à obtenir après création du webhook)
```

#### 📧 Formspree
```
FORMSPREE_FORM_ID = mldekqbz
```

#### 🤖 Mistral AI
```
MISTRAL_API_KEY = Ij0Aq3Ot3zzJ...
```

#### 🌐 Webflow (optionnel)
```
WEBFLOW_API_HOST = https://api.webflow.com
WEBFLOW_SITE_API_TOKEN = (si vous en avez un)
WEBFLOW_CMS_SITE_API_TOKEN = (si vous en avez un)
```

3. **Sauvegarder**
   - Cliquez sur "Save" pour chaque variable
   - Vérifiez qu'elles sont bien dans "Production" ET "Preview"

### Étape 2 : Configurer le Webhook Stripe

1. **Aller sur Stripe Dashboard**
   - https://dashboard.stripe.com/webhooks
   - Assurez-vous d'être en **LIVE MODE** (pas Test mode)

2. **Créer un nouveau endpoint**
   - Cliquez sur "Add endpoint"

3. **Configurer l'endpoint**
   - **URL** : `https://votre-domaine.pages.dev/api/stripe/webhook`
   - Remplacez `votre-domaine` par votre vrai domaine Cloudflare

4. **Sélectionner les événements**
   - checkout.session.completed
   - payment_intent.succeeded
   - payment_intent.payment_failed
   - customer.subscription.created
   - customer.subscription.updated
   - customer.subscription.deleted
   - invoice.paid
   - invoice.payment_failed

5. **Copier le Signing Secret**
   - Après création, cliquez sur l'endpoint
   - Copiez le "Signing secret" (commence par `whsec_...`)

6. **Ajouter le secret dans Cloudflare**
   - Retournez dans Cloudflare → Environment variables
   - Ajoutez/mettez à jour : `STRIPE_WEBHOOK_SECRET = whsec_...`

### Étape 3 : Vérifier le déploiement

1. **Attendre le déploiement**
   - Cloudflare déploie automatiquement après le push
   - Cela prend généralement 2-5 minutes

2. **Vérifier le statut**
   - Allez dans Cloudflare → Workers & Pages → Votre projet
   - Vérifiez que le déploiement est "Success"

3. **Tester le site**
   - Ouvrez `https://votre-domaine.pages.dev`
   - Vérifiez que tout fonctionne

---

## ✅ VÉRIFICATION FINALE

### Checklist de test

- [ ] **Page d'accueil** : `https://votre-domaine.pages.dev`
  - [ ] Le site s'affiche correctement
  - [ ] La navigation fonctionne
  - [ ] Les animations sont fluides

- [ ] **Page Pricing** : `https://votre-domaine.pages.dev/pricing`
  - [ ] Les prix sont corrects
  - [ ] Les boutons "Commencer" fonctionnent
  - [ ] Redirection vers Stripe en LIVE MODE

- [ ] **Test de paiement Stripe**
  - [ ] Cliquez sur un bouton "Commencer"
  - [ ] Vérifiez qu'il n'y a PAS de bandeau "TEST MODE"
  - [ ] Vérifiez que le montant est correct
  - [ ] NE PAS compléter le paiement (sauf si vous voulez vraiment payer)

- [ ] **Formulaire de contact** : `https://votre-domaine.pages.dev/contact-simple`
  - [ ] Le formulaire s'affiche
  - [ ] Vous pouvez remplir les champs
  - [ ] L'envoi fonctionne

- [ ] **Micro-agents** : `https://votre-domaine.pages.dev/micro-agents`
  - [ ] La page s'affiche
  - [ ] Les boutons fonctionnent
  - [ ] Redirection vers Stripe en LIVE MODE

- [ ] **Chatbot IA**
  - [ ] Le chatbot s'affiche
  - [ ] Vous pouvez envoyer des messages
  - [ ] Les réponses sont générées

---

## 🆘 DÉPANNAGE

### Problème : "Invalid binding SESSION"

**Solution :**
Ajoutez dans `wrangler.jsonc` :
```json
"kv_namespaces": [
  { "binding": "SESSION", "id": "votre_kv_id" }
]
```

Puis redéployez :
```bash
npm run build
git add wrangler.jsonc
git commit -m "Fix: Add SESSION KV binding"
git push origin master
```

### Problème : Les liens Stripe ne fonctionnent pas

**Vérifications :**
1. Les variables `STRIPE_SECRET_KEY` et `PUBLIC_STRIPE_PUBLISHABLE_KEY` sont-elles configurées ?
2. Commencent-elles par `sk_live_` et `pk_live_` (pas `sk_test_`) ?
3. Sont-elles dans "Production" ET "Preview" ?

**Solution :**
- Vérifiez les variables dans Cloudflare
- Redéployez si nécessaire

### Problème : Le webhook ne fonctionne pas

**Vérifications :**
1. L'URL du webhook est-elle correcte ?
2. Le `STRIPE_WEBHOOK_SECRET` est-il configuré ?
3. Les événements sont-ils bien sélectionnés ?

**Solution :**
- Vérifiez l'URL : `https://votre-domaine.pages.dev/api/stripe/webhook`
- Vérifiez le secret dans Cloudflare
- Vérifiez les événements dans Stripe

### Problème : Le formulaire ne fonctionne pas

**Vérifications :**
1. `FORMSPREE_FORM_ID` est-il configuré ?
2. Est-il correct : `mldekqbz` ?

**Solution :**
- Vérifiez la variable dans Cloudflare
- Vérifiez que le formulaire existe sur Formspree

### Problème : Le chatbot ne fonctionne pas

**Vérifications :**
1. `MISTRAL_API_KEY` est-elle configurée ?
2. Est-elle valide ?

**Solution :**
- Vérifiez la clé dans Cloudflare
- Testez la clé sur https://console.mistral.ai

---

## 📊 RÉCAPITULATIF DES LIENS STRIPE

### Plans Principaux (14 liens au total)

| Catégorie | Produit | Prix | Type | Statut |
|-----------|---------|------|------|--------|
| **Plans** | Starter | 68 CAD/mois | Récurrent | ✅ Live |
| **Plans** | Professional | 697 CAD | Unique | ✅ Live |
| **Plans** | Professional | 208 CAD/mois | Récurrent | ✅ Live |
| **Plans** | Enterprise | 997 CAD | Unique | ✅ Live |
| **Plans** | Enterprise | 698 CAD/mois | Récurrent | ✅ Live |
| **Micro-Agents** | Qualification Leads | 69 CAD/mois | Récurrent | ✅ Live |
| **Micro-Agents** | Support Client | 69 CAD/mois | Récurrent | ✅ Live |
| **Micro-Agents** | Rendez-vous | 68 CAD/mois | Récurrent | ✅ Live |
| **Micro-Agents** | Suivi Prospects | 180 CAD/mois | Récurrent | ✅ Live |
| **Micro-Agents** | Immobilier | 208 CAD/mois | Récurrent | ✅ Live |
| **Micro-Agents** | E-commerce | 195 CAD/mois | Récurrent | ✅ Live |
| **Services** | Audit IA | 497 CAD | Unique | ✅ Live |
| **Services** | Consultation | 149 CAD | Unique | ✅ Live |
| **Services** | Formation | 995 CAD | Unique | ✅ Live |

**Tous les liens sont en LIVE MODE et prêts à accepter de vrais paiements !** ✅

---

## 🎉 FÉLICITATIONS !

Si vous avez suivi toutes les étapes, votre site est maintenant :

- ✅ **Déployé en production**
- ✅ **Stripe en LIVE MODE**
- ✅ **Prêt à accepter de vrais paiements**
- ✅ **Formulaires fonctionnels**
- ✅ **Chatbot IA actif**
- ✅ **SEO optimisé**
- ✅ **Performance optimisée**

**Votre site est prêt à générer des revenus ! 🚀**

---

## 📞 SUPPORT

Si vous rencontrez des problèmes :

1. Consultez la section [Dépannage](#dépannage)
2. Vérifiez les logs dans Cloudflare
3. Vérifiez les logs dans Stripe
4. Consultez les guides de référence

---

## 📚 RESSOURCES

- **Cloudflare Pages** : https://pages.cloudflare.com
- **Stripe Dashboard** : https://dashboard.stripe.com
- **Formspree** : https://formspree.io
- **Mistral AI** : https://console.mistral.ai

---

**Dernière mise à jour** : Aujourd'hui
**Version** : 1.0 - LIVE MODE
**Statut** : ✅ Prêt pour la production
