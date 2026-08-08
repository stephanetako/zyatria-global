# 🚀 DÉPLOIEMENT FINAL - INSTRUCTIONS DÉFINITIVES

## ✅ FICHIERS CORRIGÉS

1. ✅ `wrangler.toml` - Configuration Cloudflare correcte
2. ✅ `.github/workflows/deploy.yml` - GitHub Actions pour déploiement automatique

---

## 🎯 MÉTHODE 1 : DÉPLOIEMENT AUTOMATIQUE VIA GITHUB (RECOMMANDÉ)

### Étape 1 : Ajouter le token Cloudflare à GitHub

1. Allez sur : https://dash.cloudflare.com/profile/api-tokens
2. Créez un token avec les permissions :
   - Account > Cloudflare Pages > Edit
3. Copiez le token

4. Allez sur votre repo GitHub : https://github.com/stephanetako/zyatria-global/settings/secrets/actions
5. Cliquez "New repository secret"
6. Nom : `CLOUDFLARE_API_TOKEN`
7. Valeur : Collez votre token
8. Sauvegardez

### Étape 2 : Push le code

```powershell
git add .
git commit -m "🚀 Configuration finale déploiement"
git push origin master
```

GitHub Actions déploiera automatiquement ! ✨

---

## 🎯 MÉTHODE 2 : DÉPLOIEMENT MANUEL (SI GITHUB ACTIONS NE FONCTIONNE PAS)

### Configuration Cloudflare Pages (À FAIRE UNE SEULE FOIS)

1. Allez sur : https://dash.cloudflare.com/b909407c9d4fcef1c9232d039138b851/pages/view/zyatria-global/settings/builds

2. **DÉSACTIVEZ** "Enable build configuration" ou configurez comme suit :
   - Framework preset : **None** (ou Astro)
   - Build command : **npm run build**
   - Build output directory : **dist**
   - Root directory : **(vide)**
   - **Deploy command : (VIDE - NE RIEN METTRE)**

3. Sauvegardez

### Déploiement manuel

```powershell
npm run build
npx wrangler pages deploy dist --project-name=zyatria-global --branch=master
```

---

## 🎯 MÉTHODE 3 : DÉPLOIEMENT DIRECT (SANS GITHUB)

Si vous ne voulez PAS utiliser GitHub :

1. **Déconnectez GitHub** du projet Cloudflare :
   - Allez dans Settings → Builds & deployments
   - Cliquez "Disconnect from Git"

2. **Déployez manuellement** :
```powershell
npm run build
npx wrangler pages deploy dist --project-name=zyatria-global --branch=master
```

---

## 📊 RÉSUMÉ DES URLS

Après déploiement, votre site sera disponible sur :
- **Production** : https://zyatria-global.pages.dev
- **Master branch** : https://master.zyatria-global.pages.dev

---

## 🔑 VARIABLES D'ENVIRONNEMENT

Après le premier déploiement réussi, ajoutez vos variables :

https://dash.cloudflare.com/b909407c9d4fcef1c9232d039138b851/pages/view/zyatria-global/settings/environment-variables

```
FORMSPREE_FORM_ID=votre_form_id
STRIPE_SECRET_KEY=votre_stripe_key
STRIPE_WEBHOOK_SECRET=votre_webhook_secret
MISTRAL_API_KEY=votre_mistral_key
WEBFLOW_CMS_SITE_API_TOKEN=votre_webflow_token
```

---

## ⚠️ PROBLÈMES COURANTS

### "Missing Pages project name"
→ Vous avez une "Deploy command" dans Cloudflare. SUPPRIMEZ-LA.

### "Project already exists"
→ Normal, utilisez `--project-name=zyatria-global`

### Build échoue sur Cloudflare
→ Utilisez la MÉTHODE 1 (GitHub Actions) ou MÉTHODE 3 (déploiement manuel)

---

## 🎉 C'EST TOUT !

Choisissez UNE méthode et suivez-la. Ne mélangez pas les méthodes.

**Recommandation : MÉTHODE 1 (GitHub Actions) pour un déploiement automatique à chaque push.**
