# ✅ Checklist de Déploiement - ZyatrIA Global

## 📋 AVANT DE COMMENCER

### Prérequis
- [ ] Git est installé sur mon ordinateur
- [ ] J'ai un compte GitHub (ou je vais en créer un)
- [ ] J'ai un compte Cloudflare (ou je vais en créer un)
- [ ] J'ai lu le guide de déploiement

---

## 🚀 ÉTAPE 1 : PRÉPARATION GIT (2 min)

### Actions
- [ ] Ouvrir le terminal/PowerShell dans le dossier du projet
- [ ] Exécuter : `git init`
- [ ] Exécuter : `git add .`
- [ ] Exécuter : `git commit -m "Initial commit - ZyatrIA Global"`

### Vérification
- [ ] La commande `git status` affiche "nothing to commit, working tree clean"

---

## 🌐 ÉTAPE 2 : CRÉATION REPO GITHUB (3 min)

### Actions
- [ ] Aller sur https://github.com/new
- [ ] Nom du repo : `zyatria-global`
- [ ] Description : `ZyatrIA Global - AI Agents Platform`
- [ ] Choisir Public ou Private
- [ ] **NE PAS** cocher "Initialize with README"
- [ ] Cliquer sur "Create repository"

### Vérification
- [ ] Le repo est créé et visible sur GitHub

---

## 📤 ÉTAPE 3 : PUSH SUR GITHUB (2 min)

### Actions
- [ ] Copier l'URL du repo : `https://github.com/USERNAME/zyatria-global.git`
- [ ] Exécuter : `git remote add origin URL_DU_REPO`
- [ ] Exécuter : `git branch -M main`
- [ ] Exécuter : `git push -u origin main`

### Vérification
- [ ] Le code est visible sur GitHub
- [ ] Tous les fichiers sont présents

---

## ☁️ ÉTAPE 4 : COMPTE CLOUDFLARE (3 min)

### Actions
- [ ] Aller sur https://dash.cloudflare.com/sign-up
- [ ] Créer un compte (si pas déjà fait)
- [ ] Vérifier l'email
- [ ] Se connecter au dashboard

### Vérification
- [ ] Je suis connecté au dashboard Cloudflare

---

## 🚀 ÉTAPE 5 : DÉPLOIEMENT CLOUDFLARE (5 min)

### Actions
- [ ] Cliquer sur "Workers & Pages" (menu de gauche)
- [ ] Cliquer sur "Create application"
- [ ] Sélectionner l'onglet "Pages"
- [ ] Cliquer sur "Connect to Git"
- [ ] Cliquer sur "Connect GitHub"
- [ ] Autoriser Cloudflare à accéder à GitHub
- [ ] Sélectionner le repo "zyatria-global"
- [ ] Cliquer sur "Begin setup"

### Configuration
- [ ] Project name : `zyatria-global`
- [ ] Production branch : `main`
- [ ] Framework preset : `Astro`
- [ ] Build command : `npm run build`
- [ ] Build output directory : `dist`

### Déploiement
- [ ] Cliquer sur "Save and Deploy"
- [ ] Attendre 2-3 minutes (le build se fait)

### Vérification
- [ ] Le build est terminé avec succès
- [ ] Message "Success! Your site is live!" s'affiche
- [ ] URL du site : `https://zyatria-global.pages.dev`

---

## ✅ ÉTAPE 6 : VÉRIFICATION DU SITE (5 min)

### Tests à faire
- [ ] Ouvrir l'URL : `https://zyatria-global.pages.dev`
- [ ] La page d'accueil s'affiche correctement
- [ ] Le changement de langue FR/EN fonctionne
- [ ] La navigation fonctionne (toutes les pages)
- [ ] Les images se chargent
- [ ] Le site est responsive (tester sur mobile)
- [ ] Les formulaires s'affichent
- [ ] Les boutons Stripe fonctionnent

### Problèmes courants
- [ ] Si le site est blanc : vérifier les logs de build
- [ ] Si les images ne chargent pas : vérifier les chemins
- [ ] Si le build échoue : vérifier la configuration

---

## 🎁 ÉTAPE 7 : CONFIGURATION OPTIONNELLE

### Domaine Personnalisé (Optionnel)
- [ ] Aller dans "Custom domains" sur Cloudflare
- [ ] Cliquer sur "Set up a custom domain"
- [ ] Entrer le domaine (ex: zyatria.com)
- [ ] Suivre les instructions DNS

### Variables d'Environnement (Optionnel)
- [ ] Aller dans "Settings" > "Environment variables"
- [ ] Ajouter : `FORMSPREE_FORM_ID=xeelvrdl`
- [ ] Ajouter d'autres variables si nécessaire

### Analytics (Optionnel)
- [ ] Activer Cloudflare Web Analytics
- [ ] Configurer Google Analytics (si souhaité)

---

## 🔄 MISES À JOUR FUTURES

### Pour mettre à jour le site
- [ ] Faire des modifications dans le code
- [ ] Exécuter : `git add .`
- [ ] Exécuter : `git commit -m "Description des changements"`
- [ ] Exécuter : `git push`
- [ ] Cloudflare redéploie automatiquement !

---

## 📊 RÉCAPITULATIF

### Temps Total : ~15 minutes

| Étape | Temps | Statut |
|-------|-------|--------|
| 1. Préparation Git | 2 min | ⬜ |
| 2. Création repo GitHub | 3 min | ⬜ |
| 3. Push sur GitHub | 2 min | ⬜ |
| 4. Compte Cloudflare | 3 min | ⬜ |
| 5. Déploiement Cloudflare | 5 min | ⬜ |
| 6. Vérification du site | 5 min | ⬜ |
| **TOTAL** | **20 min** | ⬜ |

---

## 🎉 FÉLICITATIONS !

Une fois toutes les cases cochées, ton site est en ligne ! 🚀

### Informations Importantes

**URL du site** : `https://zyatria-global.pages.dev`

**Repo GitHub** : `https://github.com/USERNAME/zyatria-global`

**Dashboard Cloudflare** : https://dash.cloudflare.com

---

## 🆘 BESOIN D'AIDE ?

Si tu es bloqué à une étape :

1. Vérifie que tu as bien suivi toutes les étapes précédentes
2. Consulte les guides détaillés :
   - `🚀_DEPLOIEMENT_MAINTENANT.md`
   - `DEPLOIEMENT_ETAPE_PAR_ETAPE.md`
3. Dis-moi où tu es bloqué et je t'aide ! 😄

---

## 📝 NOTES

Espace pour tes notes personnelles :

```
URL du site : 
Repo GitHub : 
Compte Cloudflare : 
Domaine personnalisé : 
Date de déploiement : 
```

---

**Bonne chance ! 🎉**
