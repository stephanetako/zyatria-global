# 🚀 GUIDE DE DÉPLOIEMENT COMPLET - ZYATRIA GLOBAL

## 📋 TABLE DES MATIÈRES

1. [Prérequis](#prérequis)
2. [Déploiement Automatique](#déploiement-automatique)
3. [Déploiement Manuel](#déploiement-manuel)
4. [Configuration des Secrets](#configuration-des-secrets)
5. [Domaine Personnalisé](#domaine-personnalisé)
6. [Vérification](#vérification)
7. [Dépannage](#dépannage)

---

## 🎯 PRÉREQUIS

### 1. Compte Cloudflare
- Créez un compte gratuit sur [Cloudflare](https://dash.cloudflare.com/sign-up)
- Notez votre **Account ID** (visible dans le dashboard)

### 2. Clés API Nécessaires

#### Mistral AI (Chatbot)
- Créez un compte sur [Mistral AI](https://console.mistral.ai/)
- Générez une clé API dans "API Keys"
- Coût : ~0.25€ par 1M tokens (très économique)

#### Formspree (Formulaires)
- Créez un compte sur [Formspree](https://formspree.io/)
- Créez un formulaire et notez le **Form ID**
- Plan gratuit : 50 soumissions/mois

#### Stripe (Paiements)
- Créez un compte sur [Stripe](https://stripe.com/)
- Récupérez vos clés dans "Developers > API Keys"
- Créez un webhook endpoint et notez le **Webhook Secret**

---

## 🚀 DÉPLOIEMENT AUTOMATIQUE (RECOMMANDÉ)

### Méthode 1 : Script Automatique

```bash
# 1. Rendre le script exécutable
chmod +x deploy-cloudflare.sh

# 2. Lancer le déploiement
./deploy-cloudflare.sh
```

Le script va :
1. ✅ Vérifier que Wrangler est installé
2. ✅ Builder le projet
3. ✅ Vérifier les fichiers
4. ✅ Vous connecter à Cloudflare
5. ✅ Déployer le site

### Méthode 2 : Commandes NPM

```bash
# Build + Deploy en une commande
npm run build && wrangler deploy
```

---

## 🔧 DÉPLOIEMENT MANUEL (ÉTAPE PAR ÉTAPE)

### Étape 1 : Installation de Wrangler

```bash
# Installer Wrangler globalement
npm install -g wrangler

# Vérifier l'installation
wrangler --version
```

### Étape 2 : Connexion à Cloudflare

```bash
# Se connecter (ouvre le navigateur)
wrangler login

# Vérifier la connexion
wrangler whoami
```

### Étape 3 : Build du Projet

```bash
# Builder le projet
npm run build

# Vérifier que dist/ existe
ls -la dist/
```

### Étape 4 : Déploiement

```bash
# Déployer sur Cloudflare Workers
wrangler deploy

# Votre site sera disponible sur :
# https://zyatria-global.workers.dev
```

---

## 🔐 CONFIGURATION DES SECRETS

### Méthode 1 : Script Automatique

```bash
# 1. Créer/éditer le fichier .env
nano .env

# 2. Ajouter vos clés :
MISTRAL_API_KEY=votre_clé_mistral
FORMSPREE_FORM_ID=votre_form_id
STRIPE_PUBLIC_KEY=pk_live_...
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...

# 3. Lancer le script de configuration
chmod +x configure-secrets.sh
./configure-secrets.sh
```

### Méthode 2 : Configuration Manuelle

```bash
# Configurer chaque secret individuellement
wrangler secret put MISTRAL_API_KEY
# Entrez votre clé quand demandé

wrangler secret put FORMSPREE_FORM_ID
wrangler secret put STRIPE_PUBLIC_KEY
wrangler secret put STRIPE_SECRET_KEY
wrangler secret put STRIPE_WEBHOOK_SECRET
```

### Vérifier les Secrets

```bash
# Lister tous les secrets configurés
wrangler secret list
```

---

## 🌐 DOMAINE PERSONNALISÉ

### Option 1 : Sous-domaine Cloudflare (Gratuit)

1. Allez sur [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Sélectionnez votre Worker `zyatria-global`
3. Cliquez sur "Triggers" > "Custom Domains"
4. Ajoutez votre domaine (ex: `app.votredomaine.com`)

### Option 2 : Domaine Personnalisé

```bash
# Via Wrangler CLI
wrangler domains add votredomaine.com

# Ou via le dashboard Cloudflare
# Workers > zyatria-global > Triggers > Custom Domains
```

### Configuration DNS

Si vous utilisez un domaine externe :

```
Type: CNAME
Name: @
Target: zyatria-global.workers.dev
Proxy: Activé (orange cloud)
```

---

## ✅ VÉRIFICATION

### 1. Vérifier le Déploiement

```bash
# Voir les détails du déploiement
wrangler deployments list

# Voir les logs en temps réel
wrangler tail
```

### 2. Tester le Site

Ouvrez votre navigateur et testez :

- **URL de base** : https://zyatria-global.workers.dev
- **Page d'accueil** : Doit charger correctement
- **Chatbot** : Cliquez sur l'icône de chat
- **Formulaires** : Testez le formulaire de contact
- **Pricing** : Vérifiez les liens Stripe

### 3. Vérifier les Fonctionnalités

#### Chatbot Mistral
```bash
# Tester l'API Mistral
curl https://zyatria-global.workers.dev/api/mistral-chat \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"message":"Bonjour"}'
```

#### Formulaire Formspree
- Remplissez le formulaire de contact
- Vérifiez la réception dans Formspree

#### Paiements Stripe
- Cliquez sur un bouton de pricing
- Vérifiez la redirection vers Stripe

---

## 🔍 MONITORING

### Logs en Temps Réel

```bash
# Voir tous les logs
wrangler tail

# Filtrer par niveau
wrangler tail --status error
```

### Statistiques

```bash
# Voir les statistiques d'utilisation
wrangler metrics

# Voir les déploiements
wrangler deployments list
```

### Dashboard Cloudflare

1. Allez sur [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Workers & Pages > zyatria-global
3. Consultez :
   - **Analytics** : Trafic, requêtes, erreurs
   - **Logs** : Logs en temps réel
   - **Metrics** : Performance

---

## 🐛 DÉPANNAGE

### Problème : "Not authenticated"

```bash
# Se reconnecter
wrangler logout
wrangler login
```

### Problème : "Build failed"

```bash
# Nettoyer et rebuilder
rm -rf dist/ node_modules/.astro
npm run build
```

### Problème : "Secret not found"

```bash
# Vérifier les secrets
wrangler secret list

# Reconfigurer un secret
wrangler secret put NOM_DU_SECRET
```

### Problème : "Worker exceeded CPU time"

- Vérifiez les logs : `wrangler tail`
- Optimisez le code qui prend trop de temps
- Utilisez le cache pour les requêtes répétées

### Problème : "CORS errors"

Vérifiez que les headers CORS sont configurés dans `src/middleware.ts`

### Problème : "404 on routes"

```bash
# Vérifier la configuration Astro
cat astro.config.mjs | grep output

# Doit être : output: 'server'
```

---

## 📊 CHECKLIST DE DÉPLOIEMENT

### Avant le Déploiement

- [ ] Compte Cloudflare créé
- [ ] Wrangler installé et connecté
- [ ] Clés API obtenues (Mistral, Formspree, Stripe)
- [ ] Fichier .env configuré
- [ ] Build réussi localement

### Pendant le Déploiement

- [ ] `npm run build` réussi
- [ ] `wrangler deploy` réussi
- [ ] Secrets configurés
- [ ] URL de production accessible

### Après le Déploiement

- [ ] Page d'accueil charge correctement
- [ ] Navigation fonctionne
- [ ] Chatbot répond
- [ ] Formulaires envoient
- [ ] Liens Stripe redirigent
- [ ] Domaine personnalisé configuré (optionnel)
- [ ] Monitoring activé

---

## 🎯 COMMANDES RAPIDES

```bash
# Déploiement complet
./deploy-cloudflare.sh

# Configuration des secrets
./configure-secrets.sh

# Build + Deploy manuel
npm run build && wrangler deploy

# Voir les logs
wrangler tail

# Lister les secrets
wrangler secret list

# Voir les déploiements
wrangler deployments list

# Rollback vers une version précédente
wrangler rollback [deployment-id]
```

---

## 📞 SUPPORT

### Documentation Officielle

- [Cloudflare Workers](https://developers.cloudflare.com/workers/)
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/)
- [Astro Cloudflare](https://docs.astro.build/en/guides/integrations-guide/cloudflare/)

### Communauté

- [Discord Cloudflare](https://discord.gg/cloudflaredev)
- [Forum Cloudflare](https://community.cloudflare.com/)

---

## 🎉 FÉLICITATIONS !

Votre site ZyatrIA Global est maintenant déployé sur Cloudflare Workers !

**URL de production** : https://zyatria-global.workers.dev

### Prochaines Étapes

1. ✅ Configurer un domaine personnalisé
2. ✅ Activer Google Analytics
3. ✅ Configurer les emails de notification
4. ✅ Optimiser le SEO
5. ✅ Ajouter plus de contenu

---

**Besoin d'aide ?** Consultez les logs avec `wrangler tail` ou contactez le support Cloudflare.
