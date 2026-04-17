# 🚀 Sauvegarder ZyatrIA Global sur GitHub

## Étape 1 : Créer un repository GitHub

1. Va sur [github.com](https://github.com)
2. Clique sur "New repository"
3. Nom : `zyatria-global`
4. Description : "ZyatrIA Global - AI Agents & Automation Platform"
5. **Privé** (recommandé) ou Public
6. **NE COCHE PAS** "Initialize with README"
7. Clique "Create repository"

---

## Étape 2 : Depuis ce terminal

Copie et colle ces commandes **une par une** :

```bash
# Initialiser Git
cd /app
git init

# Ajouter tous les fichiers
git add .

# Premier commit
git commit -m "Initial commit - ZyatrIA Global complete website"

# Connecter à ton repository GitHub
# ⚠️ REMPLACE 'TON-USERNAME' par ton nom d'utilisateur GitHub
git remote add origin https://github.com/TON-USERNAME/zyatria-global.git

# Renommer la branche en 'main'
git branch -M main

# Pousser le code
git push -u origin main
```

---

## Étape 3 : Authentification GitHub

Quand il te demande tes identifiants :
- **Username** : Ton nom d'utilisateur GitHub
- **Password** : Utilise un **Personal Access Token** (pas ton mot de passe)

### Créer un Token :
1. Va sur : [github.com/settings/tokens](https://github.com/settings/tokens)
2. "Generate new token" → "Classic"
3. Nom : `zyatria-deploy`
4. Coche : `repo` (tous les sous-items)
5. Durée : 90 jours
6. "Generate token"
7. **COPIE LE TOKEN** (tu ne le reverras plus !)

---

## ✅ Une fois sur GitHub

Tu peux :
1. **Cloner** sur n'importe quel ordinateur
2. **Collaborer** avec d'autres développeurs
3. **Déployer automatiquement** sur Cloudflare Pages
4. **Versionner** tes changements

---

## 📥 Cloner sur ton ordinateur local

```bash
# Sur ton Mac/PC
git clone https://github.com/TON-USERNAME/zyatria-global.git
cd zyatria-global
npm install
npm run dev
```

---

## 🔒 Fichiers sensibles

Le `.gitignore` est déjà configuré pour **NE PAS** pousser :
- ✅ `node_modules/` 
- ✅ `.env` (secrets)
- ✅ `dist/` (build)
- ✅ `.astro/` (cache)

**Toujours vérifier que ton `.env` n'est PAS poussé sur GitHub !**

---

## 🆘 Besoin d'aide ?

Si tu as des erreurs, vérifie :
1. Que tu as bien remplacé `TON-USERNAME`
2. Que tu utilises un **token**, pas un mot de passe
3. Que le repository existe sur GitHub
