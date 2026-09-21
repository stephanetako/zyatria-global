# 🚀 DÉPLOYER MAINTENANT - GUIDE SIMPLE

## ✅ PROBLÈME CORRIGÉ

**Le problème était :** Configuration `cloudflareModules` qui créait un conflit avec le binding `ASSETS` réservé par Cloudflare Pages.

**✅ Corrigé dans `astro.config.mjs`**

---

## 🎯 MÉTHODE 1 : COMMANDES DIRECTES (RECOMMANDÉ)

**Copiez ces 3 commandes dans PowerShell :**

```powershell
# 1. Nettoyer
Remove-Item -Recurse -Force dist, .astro, node_modules/.vite -ErrorAction SilentlyContinue

# 2. Build
npm run build

# 3. Déployer
wrangler pages deploy dist/client --project-name=zyatria-global-cve
```

---

## 🎯 MÉTHODE 2 : SCRIPT AUTOMATIQUE

**1. Télécharger le fichier `deploy-now.ps1` depuis le sandbox**

**2. Lancer le script :**

```powershell
.\deploy-now.ps1
```

---

## 📋 CE QUI VA SE PASSER

1. **🧹 Nettoyage** : Suppression de `dist`, `.astro`, `node_modules/.vite`
2. **🏗️ Build** : Compilation du projet en mode `server`
3. **🔍 Détection** : Le script détecte automatiquement `dist/client` (mode hybrid)
4. **🚀 Déploiement** : Upload vers Cloudflare Pages

---

## ✅ RÉSULTAT ATTENDU

```
🎉 DÉPLOIEMENT RÉUSSI !
=========================

🔗 URL: https://zyatria-global-cve.pages.dev
```

---

## ❌ EN CAS D'ERREUR

### Erreur: "Not logged in"

```powershell
wrangler login
```

### Erreur: "Project not found"

```powershell
wrangler pages project create zyatria-global-cve
```

### Erreur: "Build failed"

```powershell
# Nettoyer complètement
Remove-Item -Recurse -Force node_modules, dist, .astro

# Réinstaller
npm install

# Relancer
npm run build
```

---

## 🔧 VÉRIFICATIONS

### Vérifier la configuration

```powershell
# Voir le mode de build
Get-Content astro.config.mjs | Select-String "output"
```

**Résultat attendu :**
```
output: 'server',
```

### Vérifier la structure après build

```powershell
npm run build
Get-ChildItem dist -Recurse -Depth 1
```

**Résultat attendu :**
```
dist/
├── client/          ← Déployer ce dossier
│   ├── _astro/
│   └── ...
└── server/
    └── ...
```

---

## 🎉 C'EST TOUT !

**Le problème du binding `ASSETS` est maintenant corrigé.**

**Lancez simplement :**

```powershell
Remove-Item -Recurse -Force dist, .astro -ErrorAction SilentlyContinue
npm run build
wrangler pages deploy dist/client --project-name=zyatria-global-cve
```

**🚀 Votre site sera en ligne en quelques minutes !**
