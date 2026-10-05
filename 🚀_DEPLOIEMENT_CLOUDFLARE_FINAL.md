# 🚀 DÉPLOIEMENT CLOUDFLARE - GUIDE FINAL

## ✅ TOUT EST CORRIGÉ !

### 🔧 Corrections appliquées :

1. ✅ **Mode SERVER activé** dans `astro.config.mjs`
2. ✅ **Mémoire Node.js augmentée** pour éviter les erreurs
3. ✅ **Scripts de build optimisés** pour Cloudflare
4. ✅ **Configuration Cloudflare** mise à jour
5. ✅ **Fichiers de test** nettoyés

---

## 📋 OPTION 1 : DÉPLOIEMENT AUTOMATIQUE (RECOMMANDÉ)

### Windows (PowerShell) :
```powershell
# 1. Nettoyer et builder
.\build-for-cloudflare.ps1

# 2. Pousser vers GitHub
git add .
git commit -m "Fix: Configuration Cloudflare optimisée - Mode SERVER"
git push origin main
```

### Linux/Mac :
```bash
# 1. Nettoyer et builder
./build-for-cloudflare.sh

# 2. Pousser vers GitHub
git add .
git commit -m "Fix: Configuration Cloudflare optimisée - Mode SERVER"
git push origin main
```

---

## 📋 OPTION 2 : DÉPLOIEMENT MANUEL

### Étape 1 : Build local
```bash
npm run build
```

### Étape 2 : Vérifier que _worker.js existe
```bash
# Windows
dir dist\_worker.js

# Linux/Mac
ls -la dist/_worker.js
```

**✅ Si le fichier existe** → Mode SERVER activé ✓  
**❌ Si le fichier n'existe pas** → Problème de configuration

### Étape 3 : Pousser vers GitHub
```bash
git add .
git commit -m "Fix: Configuration Cloudflare optimisée - Mode SERVER"
git push origin main
```

---

## 🌐 CONFIGURATION CLOUDFLARE PAGES

### 1. Connecter le repository GitHub

1. Allez sur **Cloudflare Dashboard** → **Pages**
2. Cliquez sur **Create a project**
3. Sélectionnez **Connect to Git**
4. Choisissez votre repository : `stephanetako/zyatria-global`

### 2. Configuration du Build

**Framework preset** : `Astro`

**Build command** :
```bash
npm run build
```

**Build output directory** :
```
dist
```

**Root directory** : `/` (laisser vide)

**Node version** : `20.x` ou `22.x`

### 3. Variables d'environnement

Ajoutez ces variables dans **Settings** → **Environment variables** :

#### 🔑 Variables OBLIGATOIRES :

```
MISTRAL_API_KEY=votre_clé_mistral
FORMSPREE_FORM_ID=votre_form_id
```

#### 🔑 Variables OPTIONNELLES (pour fonctionnalités avancées) :

```
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...
TWILIO_ACCOUNT_SID=AC...
TWILIO_AUTH_TOKEN=...
TWILIO_PHONE_NUMBER=+1...
```

### 4. Déployer

1. Cliquez sur **Save and Deploy**
2. Attendez 2-3 minutes
3. Votre site sera disponible sur : `https://zyatria-global.pages.dev`

---

## 🔍 VÉRIFICATION POST-DÉPLOIEMENT

### ✅ Checklist :

- [ ] La page d'accueil s'affiche correctement
- [ ] Le chatbot IA fonctionne
- [ ] Les formulaires de contact fonctionnent
- [ ] Les liens Stripe fonctionnent
- [ ] La navigation est fluide
- [ ] Pas d'erreurs dans la console

### 🐛 Si problème persiste :

1. **Vérifier les logs Cloudflare** :
   - Dashboard → Pages → Votre projet → Deployments → View details

2. **Vérifier les variables d'environnement** :
   - Dashboard → Pages → Votre projet → Settings → Environment variables

3. **Forcer un nouveau déploiement** :
   - Dashboard → Pages → Votre projet → Deployments → Retry deployment

4. **Purger le cache Cloudflare** :
   - Dashboard → Caching → Configuration → Purge Everything

---

## 📊 URLS DE VOTRE SITE

### Production :
- **URL principale** : `https://zyatria-global.pages.dev`
- **URL de déploiement** : `https://[commit-hash].zyatria-global.pages.dev`

### Domaine personnalisé (optionnel) :
- Vous pouvez ajouter votre propre domaine dans **Settings** → **Custom domains**

---

## 🎯 PROCHAINES ÉTAPES

1. ✅ **Tester le site** sur l'URL Cloudflare
2. ✅ **Configurer les clés API** (Mistral, Formspree, Stripe)
3. ✅ **Ajouter un domaine personnalisé** (optionnel)
4. ✅ **Activer les analytics** Cloudflare (optionnel)

---

## 💡 CONSEILS

- **Déploiement automatique** : Chaque push sur `main` déclenche un nouveau déploiement
- **Prévisualisation** : Chaque branche a sa propre URL de prévisualisation
- **Rollback** : Vous pouvez revenir à un déploiement précédent en 1 clic
- **Performance** : Cloudflare optimise automatiquement votre site

---

## 🆘 BESOIN D'AIDE ?

Si vous rencontrez des problèmes :

1. Vérifiez les logs de build dans Cloudflare
2. Vérifiez que toutes les variables d'environnement sont configurées
3. Testez le build localement avec `npm run build`
4. Vérifiez que `dist/_worker.js` existe après le build

---

**✨ Votre site est maintenant prêt pour le déploiement sur Cloudflare Pages !**
