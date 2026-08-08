# 🚀 Guide de Déploiement Complet - ZyatrIA Global

## 📋 Vue d'Ensemble

Vous allez déployer votre site en 3 étapes :
1. ✅ **Push vers GitHub** (automatique)
2. ✅ **Configuration Cloudflare Pages** (interface web)
3. ✅ **Ligne de commande** (déploiements futurs)

---

## 🎯 ÉTAPE 1 : Push vers GitHub

### Votre Repository
- **URL** : https://github.com/stephanetako/zyatria-global
- **Branche** : master
- **Statut** : ✅ Commit prêt

### Commande à Exécuter

```bash
git push origin master
```

⚠️ **Note** : Si vous avez une authentification 2FA sur GitHub, vous aurez besoin d'un Personal Access Token.

### Si le Push Échoue

Créez un Personal Access Token :
1. Allez sur https://github.com/settings/tokens
2. **Generate new token** → **Classic**
3. Cochez : `repo` (tous les sous-items)
4. Générez et copiez le token
5. Utilisez-le comme mot de passe lors du push

---

## 🖥️ ÉTAPE 2 : Configuration Cloudflare Pages

### 2.1 Connexion GitHub

1. Allez sur https://dash.cloudflare.com
2. **Workers & Pages** → **Create Application**
3. **Pages** → **Connect to Git**
4. Sélectionnez **GitHub**
5. Autorisez l'accès à votre compte
6. Sélectionnez le repository **zyatria-global**

### 2.2 Configuration Build

```yaml
Project name: zyatria-global
Production branch: master
Build command: npm run build
Build output directory: dist
Root directory: /
```

### 2.3 Variables d'Environnement

Ajoutez ces variables (Settings → Environment Variables) :

#### 🔑 Variables Obligatoires

```bash
# Formspree (Formulaires)
FORMSPREE_FORM_ID=votre_form_id_ici

# Stripe (Paiements)
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Mistral AI (Chatbot)
MISTRAL_API_KEY=votre_cle_mistral_ici
```

#### 📊 Variables Optionnelles

```bash
# Webflow CMS (si utilisé)
WEBFLOW_CMS_SITE_API_TOKEN=votre_token_ici
WEBFLOW_API_HOST=https://api.webflow.com

# Twilio (Agent vocal - optionnel)
TWILIO_ACCOUNT_SID=votre_sid_ici
TWILIO_AUTH_TOKEN=votre_token_ici
TWILIO_PHONE_NUMBER=+1234567890

# Analytics (optionnel)
GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
```

### 2.4 Déploiement

1. Cliquez sur **Save and Deploy**
2. Attendez 2-5 minutes
3. Votre site sera disponible sur : `https://zyatria-global.pages.dev`

---

## 💻 ÉTAPE 3 : Ligne de Commande (Futurs Déploiements)

### 3.1 Installation Wrangler

```bash
npm install -g wrangler
```

### 3.2 Authentification

```bash
wrangler login
```

Cela ouvrira votre navigateur pour autoriser l'accès.

### 3.3 Déploiement Rapide

```bash
# Build
npm run build

# Deploy
npx wrangler pages deploy dist --project-name=zyatria-global
```

### 3.4 Avec Token API (Alternative)

```bash
export CLOUDFLARE_API_TOKEN="votre_token_ici"
npx wrangler pages deploy dist --project-name=zyatria-global
```

---

## 🎯 Checklist Complète

### Avant le Déploiement
- [x] Code commité sur Git
- [x] Repository GitHub configuré
- [ ] Push vers GitHub effectué
- [ ] Variables d'environnement prêtes

### Configuration Cloudflare
- [ ] Repository connecté
- [ ] Build settings configurés
- [ ] Variables d'environnement ajoutées
- [ ] Premier déploiement lancé

### Vérification Post-Déploiement
- [ ] Site accessible
- [ ] Formulaires fonctionnels (Formspree)
- [ ] Paiements testés (Stripe)
- [ ] Chatbot opérationnel (Mistral)
- [ ] Navigation fluide
- [ ] Responsive design OK

---

## 🔧 Dépannage

### Erreur de Build

```bash
# Vérifier localement
npm run build

# Si erreur, nettoyer et réinstaller
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Variables Manquantes

Si le site ne fonctionne pas :
1. Vérifiez les variables dans Cloudflare Dashboard
2. **Settings** → **Environment Variables**
3. Ajoutez les variables manquantes
4. **Redeploy** le site

### Problème de Permissions GitHub

Si le push échoue :
```bash
# Vérifier l'authentification
git config --global user.name "Votre Nom"
git config --global user.email "votre@email.com"

# Utiliser HTTPS avec token
git remote set-url origin https://VOTRE_TOKEN@github.com/stephanetako/zyatria-global.git
```

---

## 📊 Commandes Utiles

### Vérifier le Statut
```bash
git status
git log --oneline -5
```

### Voir les Déploiements
```bash
npx wrangler pages deployments list --project-name=zyatria-global
```

### Logs en Direct
```bash
npx wrangler pages deployment tail --project-name=zyatria-global
```

---

## 🎉 Prochaines Étapes

Une fois déployé :

1. **Domaine Personnalisé**
   - Cloudflare Dashboard → Pages → Custom Domains
   - Ajoutez votre domaine

2. **SSL/TLS**
   - Automatiquement configuré par Cloudflare
   - Certificat gratuit inclus

3. **Analytics**
   - Activez Web Analytics dans Cloudflare
   - Gratuit et respectueux de la vie privée

4. **Optimisations**
   - Activez Cloudflare CDN
   - Configurez le cache
   - Activez Brotli compression

---

## 📞 Support

- **Documentation Cloudflare** : https://developers.cloudflare.com/pages
- **Wrangler Docs** : https://developers.cloudflare.com/workers/wrangler
- **GitHub Issues** : https://github.com/stephanetako/zyatria-global/issues

---

✅ **Vous êtes prêt !** Commencez par l'Étape 1 : Push vers GitHub
