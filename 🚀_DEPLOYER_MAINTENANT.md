# 🚀 DÉPLOYER MAINTENANT - GUIDE RAPIDE

## ⚡ DÉPLOIEMENT EN 3 COMMANDES

### Étape 1 : Se connecter à Cloudflare
```bash
wrangler login
```
- Une fenêtre de navigateur va s'ouvrir
- Connectez-vous avec votre compte Cloudflare
- Autorisez Wrangler

### Étape 2 : Déployer le site
```bash
wrangler deploy
```
- Le déploiement prend environ 30 secondes
- Votre site sera disponible sur : **https://zyatria-global.workers.dev**

### Étape 3 : Configurer les secrets
```bash
# Mistral AI (Chatbot)
echo "VOTRE_CLE_MISTRAL" | wrangler secret put MISTRAL_API_KEY

# Formspree (Formulaires)
echo "VOTRE_FORM_ID" | wrangler secret put FORMSPREE_FORM_ID

# Stripe (Paiements)
echo "VOTRE_STRIPE_PUBLIC_KEY" | wrangler secret put STRIPE_PUBLIC_KEY
echo "VOTRE_STRIPE_SECRET_KEY" | wrangler secret put STRIPE_SECRET_KEY
echo "VOTRE_STRIPE_WEBHOOK_SECRET" | wrangler secret put STRIPE_WEBHOOK_SECRET
```

---

## 📋 SCRIPT AUTOMATIQUE

### Utiliser le script de déploiement

```bash
# 1. Rendre le script exécutable
chmod +x deploy-cloudflare.sh

# 2. Lancer le déploiement
./deploy-cloudflare.sh
```

---

## 🔐 RÉCUPÉRER VOS CLÉS API

### Mistral AI
1. Allez sur https://console.mistral.ai/
2. Créez un compte (gratuit)
3. Allez dans "API Keys"
4. Créez une nouvelle clé
5. Copiez la clé (commence par `sk-...`)

### Formspree
1. Allez sur https://formspree.io/
2. Créez un compte (gratuit)
3. Créez un nouveau formulaire
4. Copiez le Form ID (format : `xyzabc123`)

### Stripe
1. Allez sur https://dashboard.stripe.com/
2. Créez un compte
3. Allez dans "Developers" > "API Keys"
4. Copiez :
   - **Publishable key** (commence par `pk_live_...` ou `pk_test_...`)
   - **Secret key** (commence par `sk_live_...` ou `sk_test_...`)
5. Pour le webhook secret :
   - Allez dans "Developers" > "Webhooks"
   - Créez un endpoint : `https://zyatria-global.workers.dev/api/stripe/webhook`
   - Copiez le **Signing secret** (commence par `whsec_...`)

---

## ✅ VÉRIFICATION APRÈS DÉPLOIEMENT

### 1. Tester le site
```bash
# Ouvrir le site dans le navigateur
open https://zyatria-global.workers.dev
```

### 2. Vérifier les logs
```bash
# Voir les logs en temps réel
wrangler tail
```

### 3. Vérifier les secrets
```bash
# Lister tous les secrets configurés
wrangler secret list
```

### 4. Tester le chatbot
```bash
curl https://zyatria-global.workers.dev/api/mistral-chat \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"message":"Bonjour"}'
```

---

## 🌐 CONFIGURER UN DOMAINE PERSONNALISÉ

### Via Wrangler CLI
```bash
wrangler domains add votredomaine.com
```

### Via Dashboard Cloudflare
1. Allez sur https://dash.cloudflare.com
2. Workers & Pages > zyatria-global
3. Triggers > Custom Domains
4. Add Custom Domain
5. Entrez votre domaine

---

## 🐛 DÉPANNAGE

### Erreur : "Not authenticated"
```bash
wrangler logout
wrangler login
```

### Erreur : "Account ID not found"
1. Allez sur https://dash.cloudflare.com
2. Copiez votre Account ID (dans la barre latérale)
3. Mettez-le à jour dans `wrangler.jsonc`

### Erreur : "Build failed"
```bash
# Nettoyer et rebuilder
rm -rf dist/ node_modules/.astro
npm install
npm run build
```

### Le site ne charge pas
```bash
# Vérifier les logs
wrangler tail

# Vérifier le déploiement
wrangler deployments list
```

---

## 📊 COMMANDES UTILES

```bash
# Voir les déploiements
wrangler deployments list

# Voir les logs en temps réel
wrangler tail

# Voir les statistiques
wrangler metrics

# Rollback vers une version précédente
wrangler rollback [deployment-id]

# Supprimer un secret
wrangler secret delete NOM_DU_SECRET

# Lister les domaines
wrangler domains list
```

---

## 🎉 C'EST FAIT !

Votre site est maintenant en ligne sur :
**https://zyatria-global.workers.dev**

### Prochaines étapes :
1. ✅ Configurer un domaine personnalisé
2. ✅ Activer Google Analytics
3. ✅ Tester toutes les fonctionnalités
4. ✅ Partager le lien avec vos clients !

---

**Besoin d'aide ?** Consultez le guide complet : `📖_GUIDE_DEPLOIEMENT_COMPLET.md`
