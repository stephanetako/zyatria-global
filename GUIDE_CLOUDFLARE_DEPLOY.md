# 🚀 GUIDE DÉPLOIEMENT CLOUDFLARE PAGES

## 📋 PRÉREQUIS
- ✅ Compte Cloudflare (gratuit)
- ✅ Build du projet réussi (`npm run build`)
- ✅ Dossier `dist/` généré

---

## 🎯 MÉTHODE 1 : DÉPLOIEMENT DIRECT (Le plus rapide - 5 min)

### Étape 1 : Installer Wrangler
```powershell
npm install -g wrangler
```

### Étape 2 : Se connecter à Cloudflare
```powershell
npx wrangler login
```
→ Une page web s'ouvrira pour vous connecter

### Étape 3 : Déployer
```powershell
npx wrangler pages deploy dist --project-name=zyatria-global
```

### Résultat
```
✅ Site en ligne sur : https://zyatria-global.pages.dev
```

---

## 🎯 MÉTHODE 2 : VIA INTERFACE WEB (Plus visuel - 10 min)

### Étape 1 : Créer un compte
1. Aller sur https://dash.cloudflare.com/sign-up
2. Créer un compte gratuit
3. Vérifier votre email

### Étape 2 : Créer un projet Pages
1. Dans le dashboard → **Pages**
2. Cliquer **"Create a project"**
3. Choisir **"Upload assets"**

### Étape 3 : Upload le dossier dist
1. Glisser-déposer le dossier `dist/`
2. Nom du projet : `zyatria-global`
3. Cliquer **"Deploy site"**

### Étape 4 : Attendre le déploiement
- ⏱️ Temps : 2-3 minutes
- ✅ URL : `https://zyatria-global.pages.dev`

---

## 🌐 CONNECTER UN DOMAINE PERSONNALISÉ

### Si vous avez acheté `zyatria.global` :

#### Dans Cloudflare Pages :
1. Aller dans votre projet
2. **Custom domains** → **Add domain**
3. Entrer : `zyatria.global`
4. Suivre les instructions DNS

#### Configuration DNS :
```
Type: CNAME
Name: www
Target: zyatria-global.pages.dev

Type: CNAME  
Name: @
Target: zyatria-global.pages.dev
```

**Propagation :** 5-30 minutes

---

## ⚙️ VARIABLES D'ENVIRONNEMENT (Optionnel)

### Dans Cloudflare Pages :
1. Settings → **Environment variables**
2. Ajouter :
```
NODE_VERSION = 18
FORMSPREE_FORM_ID = xeelvrdl
```

---

## ✅ VÉRIFICATIONS POST-DÉPLOIEMENT

### 1. Tester le site
- [ ] Ouvrir l'URL de production
- [ ] Vérifier toutes les pages (9 pages)
- [ ] Tester la navigation
- [ ] Tester sur mobile

### 2. Tester le formulaire
- [ ] Aller sur `/demo`
- [ ] Remplir le formulaire
- [ ] Vérifier la réception de l'email

### 3. Vérifier le SEO
- [ ] Tester sur https://pagespeed.web.dev/
- [ ] Vérifier l'image OG sur https://developers.facebook.com/tools/debug/

---

## 🚨 DÉPANNAGE

### Problème : "wrangler: command not found"
```powershell
npm install -g wrangler
```

### Problème : "Unauthorized"
```powershell
npx wrangler logout
npx wrangler login
```

### Problème : Build échoue
```powershell
rm -rf dist
npm run build
```

### Problème : 404 sur les pages
→ Vérifier que le `baseUrl` est configuré dans `astro.config.mjs`

---

## 📊 STATISTIQUES ATTENDUES

### Performance
- **PageSpeed Score :** 90-95/100
- **Temps de chargement :** < 2s
- **First Contentful Paint :** < 1s

### Disponibilité
- **Uptime :** 99.9%
- **CDN :** 200+ datacenters
- **SSL :** Automatique

---

## 🎉 FÉLICITATIONS !

Votre site est maintenant en ligne et accessible dans le monde entier ! 🌍

**Prochaines étapes :**
1. Partager l'URL sur les réseaux sociaux
2. Soumettre à Google Search Console
3. Configurer Google Analytics
4. Créer du contenu (blog, case studies)

---

**Dernière mise à jour :** 11 Mai 2025
