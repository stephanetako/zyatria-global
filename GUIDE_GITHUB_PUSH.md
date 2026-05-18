# 📦 GUIDE GITHUB - SAUVEGARDER ET DÉPLOYER

## 🎯 POURQUOI GITHUB ?

### Avantages :
- ✅ **Sauvegarde** : Code sécurisé dans le cloud
- ✅ **Historique** : Toutes les versions sauvegardées
- ✅ **Déploiement auto** : Push → Déploiement automatique
- ✅ **Collaboration** : Travail en équipe facile
- ✅ **Gratuit** : Dépôts publics et privés

---

## 📋 PRÉREQUIS

### 1. Installer Git
**Windows :**
- Télécharger : https://git-scm.com/download/win
- Installer avec les options par défaut

**Vérifier l'installation :**
```powershell
git --version
# Devrait afficher : git version 2.x.x
```

### 2. Créer un compte GitHub
- Aller sur https://github.com/join
- Créer un compte gratuit
- Vérifier votre email

---

## 🚀 ÉTAPE 1 : INITIALISER GIT LOCALEMENT

### Ouvrir PowerShell dans le dossier du projet
```powershell
# Naviguer vers le projet
cd C:\Users\VOTRE_NOM\zyatria-global

# Initialiser Git
git init

# Configurer votre identité (première fois seulement)
git config --global user.name "Votre Nom"
git config --global user.email "votre.email@gmail.com"
```

---

## 🚀 ÉTAPE 2 : CRÉER UN DÉPÔT GITHUB

### Via l'interface web :
1. Aller sur https://github.com/new
2. **Repository name :** `zyatria-global`
3. **Description :** "ZyatrIA Global - AI Agents Without Borders"
4. **Visibilité :** 
   - ✅ **Public** (recommandé pour portfolio)
   - ou **Private** (si vous voulez garder le code privé)
5. ❌ **NE PAS** cocher "Initialize with README"
6. Cliquer **"Create repository"**

### Copier l'URL du dépôt
```
https://github.com/VOTRE_USERNAME/zyatria-global.git
```

---

## 🚀 ÉTAPE 3 : POUSSER LE CODE SUR GITHUB

### Dans PowerShell (dans le dossier du projet) :

```powershell
# Ajouter tous les fichiers
git add .

# Créer le premier commit
git commit -m "Initial commit - ZyatrIA Global ready for launch 🚀"

# Renommer la branche en 'main'
git branch -M main

# Connecter au dépôt GitHub (remplacer VOTRE_USERNAME)
git remote add origin https://github.com/VOTRE_USERNAME/zyatria-global.git

# Pousser le code
git push -u origin main
```

### Authentification GitHub
Lors du premier push, GitHub vous demandera de vous authentifier :

**Option 1 : Personal Access Token (Recommandé)**
1. Aller sur https://github.com/settings/tokens
2. **Generate new token (classic)**
3. Nom : "ZyatrIA Deploy"
4. Cocher : `repo` (Full control)
5. Générer et copier le token
6. Utiliser le token comme mot de passe lors du push

**Option 2 : GitHub CLI**
```powershell
# Installer GitHub CLI
winget install --id GitHub.cli

# Se connecter
gh auth login
```

---

## 🚀 ÉTAPE 4 : CONNECTER À CLOUDFLARE PAGES

### Via l'interface Cloudflare :

1. **Aller sur Cloudflare Dashboard**
   - https://dash.cloudflare.com/

2. **Pages → Create a project**

3. **Connect to Git**
   - Cliquer "Connect to Git"
   - Autoriser Cloudflare à accéder à GitHub
   - Sélectionner le dépôt `zyatria-global`

4. **Configuration du build**
   ```
   Project name: zyatria-global
   Production branch: main
   Framework preset: Astro
   Build command: npm run build
   Build output directory: dist
   ```

5. **Environment variables (optionnel)**
   ```
   NODE_VERSION = 18
   ```

6. **Save and Deploy**

### Résultat :
- ✅ Déploiement automatique en 2-3 minutes
- ✅ URL : `https://zyatria-global.pages.dev`
- ✅ Chaque push sur `main` → redéploiement automatique

---

## 🔄 WORKFLOW DE DÉVELOPPEMENT

### Faire des modifications :

```powershell
# 1. Modifier les fichiers dans VS Code

# 2. Voir les changements
git status

# 3. Ajouter les changements
git add .

# 4. Créer un commit
git commit -m "Description des changements"

# 5. Pousser sur GitHub
git push

# → Cloudflare redéploie automatiquement ! 🚀
```

---

## 📁 FICHIERS À IGNORER (.gitignore)

Le projet a déjà un `.gitignore` configuré :

```gitignore
# Dépendances
node_modules/

# Build
dist/
.astro/

# Environnement
.env
.env.local

# OS
.DS_Store
Thumbs.db

# IDE
.vscode/
.idea/
```

---

## 🌿 BRANCHES (Avancé)

### Créer une branche de développement :

```powershell
# Créer et basculer sur une nouvelle branche
git checkout -b dev

# Faire des modifications
# ...

# Pousser la branche
git push -u origin dev

# Revenir sur main
git checkout main

# Fusionner dev dans main
git merge dev
git push
```

---

## 🚨 DÉPANNAGE

### Problème : "git: command not found"
→ Installer Git : https://git-scm.com/download/win

### Problème : "Permission denied"
→ Utiliser un Personal Access Token au lieu du mot de passe

### Problème : "Repository not found"
→ Vérifier l'URL du dépôt :
```powershell
git remote -v
```

### Problème : Conflit lors du push
```powershell
# Récupérer les changements distants
git pull origin main

# Résoudre les conflits dans VS Code
# Puis :
git add .
git commit -m "Résolution des conflits"
git push
```

### Problème : Annuler le dernier commit
```powershell
# Annuler le commit mais garder les changements
git reset --soft HEAD~1

# Annuler le commit ET les changements
git reset --hard HEAD~1
```

---

## 📊 COMMANDES GIT UTILES

### Voir l'historique
```powershell
git log --oneline --graph --all
```

### Voir les changements
```powershell
git diff
```

### Annuler les changements non commités
```powershell
git checkout -- .
```

### Voir les branches
```powershell
git branch -a
```

### Supprimer une branche
```powershell
git branch -d nom-branche
```

---

## 🎯 BONNES PRATIQUES

### Messages de commit clairs :
```powershell
✅ git commit -m "Add contact form validation"
✅ git commit -m "Fix responsive menu on mobile"
✅ git commit -m "Update pricing plans"

❌ git commit -m "fix"
❌ git commit -m "update"
❌ git commit -m "changes"
```

### Commits fréquents :
- Commiter après chaque fonctionnalité
- Commiter avant de grandes modifications
- Commiter à la fin de chaque session de travail

### Branches pour les features :
```powershell
# Nouvelle fonctionnalité
git checkout -b feature/blog-section

# Correction de bug
git checkout -b fix/mobile-menu

# Amélioration
git checkout -b improve/seo-meta-tags
```

---

## 🔗 RESSOURCES

### Documentation
- **Git :** https://git-scm.com/doc
- **GitHub :** https://docs.github.com/
- **Cloudflare Pages :** https://developers.cloudflare.com/pages/

### Tutoriels
- **Git en 15 min :** https://www.youtube.com/watch?v=USjZcfj8yxE
- **GitHub pour débutants :** https://www.youtube.com/watch?v=RGOj5yH7evk

### Outils
- **GitHub Desktop :** https://desktop.github.com/ (Interface graphique)
- **GitKraken :** https://www.gitkraken.com/ (Client Git avancé)

---

## 🎉 FÉLICITATIONS !

Votre code est maintenant :
- ✅ Sauvegardé sur GitHub
- ✅ Versionné (historique complet)
- ✅ Déployé automatiquement sur Cloudflare
- ✅ Accessible dans le monde entier

**Workflow final :**
```
Modifier le code → git add . → git commit -m "..." → git push
→ Cloudflare redéploie automatiquement ! 🚀
```

---

**Dernière mise à jour :** 11 Mai 2025
