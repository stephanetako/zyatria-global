# 🚀 DÉPLOYER MAINTENANT - GUIDE COMPLET

## ✅ PROBLÈMES CORRIGÉS

1. ✅ **Script postbuild** ne plante plus si `_routes.json` n'existe pas
2. ✅ **Configuration wrangler.toml** optimisée pour Cloudflare Pages
3. ✅ **Détection automatique** du mode de build (server/hybrid/static)
4. ✅ **Nettoyage complet** avant chaque build

---

## 🎯 COMMANDE RAPIDE

```powershell
.\deploy-fix-cloudflare.ps1
```

**C'est tout ! Le script fait tout automatiquement :**
- ✅ Nettoie les anciens builds
- ✅ Corrige les fichiers problématiques
- ✅ Build le projet
- ✅ Détecte le bon dossier à déployer
- ✅ Déploie sur Cloudflare

---

## 📋 ÉTAPES DÉTAILLÉES

### Étape 1: Vérifier la connexion Cloudflare

```powershell
wrangler whoami
```

**Résultat attendu :**
```
You are logged in with an OAuth Token, associated with the email 'zyatria.contact@gmail.com'!
```

**Si pas connecté :**
```powershell
wrangler login
```

---

### Étape 2: Lancer le déploiement

```powershell
.\deploy-fix-cloudflare.ps1
```

**Le script va :**

1. **🧹 Nettoyer** les fichiers de build
   ```
   Suppression de: dist, .astro, node_modules/.vite
   ```

2. **🔧 Corriger** les fichiers problématiques
   - `fix-routes.js` : Ne plante plus si `_routes.json` manque
   - `wrangler.toml` : Configuration optimale

3. **🏗️ Builder** le projet
   ```
   npm run build
   ```

4. **🔍 Détecter** le mode de build
   - Mode `server` → déploie `dist`
   - Mode `hybrid` → déploie `dist/client`
   - Mode `static` → déploie `dist`

5. **🚀 Déployer** sur Cloudflare
   ```
   wrangler pages deploy [dossier] --project-name=zyatria-global-cve
   ```

---

## 🎉 RÉSULTAT ATTENDU

```
🎉 DÉPLOIEMENT RÉUSSI !
=================================================

✅ Votre site est maintenant en ligne !

🔗 URL de déploiement:
   https://zyatria-global-cve.pages.dev
```

---

## ❌ EN CAS D'ERREUR

### Erreur: "Not logged in"

**Solution :**
```powershell
wrangler login
```

---

### Erreur: "Project not found"

**Solution :**
```powershell
wrangler pages project create zyatria-global-cve
```

---

### Erreur: "Build failed"

**Solution :**
```powershell
# Nettoyer complètement
Remove-Item -Recurse -Force dist, .astro, node_modules/.vite, node_modules/.cache

# Réinstaller les dépendances
npm install

# Relancer le script
.\deploy-fix-cloudflare.ps1
```

---

## 🔧 CONFIGURATION MANUELLE (si besoin)

### Vérifier le mode de build

```powershell
# Voir le contenu de astro.config.mjs
Get-Content astro.config.mjs | Select-String "output"
```

**Résultat attendu :**
```
output: 'server',
```

---

### Vérifier la structure de dist après build

```powershell
npm run build
Get-ChildItem dist -Recurse -Depth 1
```

**Mode server :**
```
dist/
├── _worker.js          ← Fichier principal
├── _astro/
└── ...
```

**Mode hybrid :**
```
dist/
├── client/             ← Déployer ce dossier
│   ├── _astro/
│   └── ...
└── server/
```

---

## 📊 VÉRIFICATION POST-DÉPLOIEMENT

### 1. Tester l'URL de déploiement

```powershell
# Ouvrir dans le navigateur
Start-Process "https://zyatria-global-cve.pages.dev"
```

### 2. Vérifier les logs Cloudflare

```powershell
wrangler pages deployment list --project-name=zyatria-global-cve
```

### 3. Tester les routes API

```powershell
# Tester une route API
Invoke-WebRequest -Uri "https://zyatria-global-cve.pages.dev/api/test" -Method GET
```

---

## 🎯 COMMANDES UTILES

### Voir les déploiements récents

```powershell
wrangler pages deployment list --project-name=zyatria-global-cve
```

### Voir les logs en temps réel

```powershell
wrangler pages deployment tail --project-name=zyatria-global-cve
```

### Supprimer un déploiement

```powershell
wrangler pages deployment delete [DEPLOYMENT_ID] --project-name=zyatria-global-cve
```

---

## 📝 NOTES IMPORTANTES

1. **Mode server** : Le fichier `_routes.json` n'existe pas, c'est normal
2. **Variables d'environnement** : Configurées dans le dashboard Cloudflare
3. **Secrets** : Ne jamais les commiter dans Git
4. **Cache** : Cloudflare met en cache les assets statiques automatiquement

---

## 🆘 BESOIN D'AIDE ?

### Vérifier la configuration complète

```powershell
# Voir toute la configuration
Get-Content astro.config.mjs
Get-Content wrangler.toml
Get-Content package.json | Select-String "scripts"
```

### Nettoyer complètement et recommencer

```powershell
# Supprimer tous les fichiers de build et cache
Remove-Item -Recurse -Force dist, .astro, node_modules/.vite, node_modules/.cache

# Réinstaller
npm install

# Relancer le déploiement
.\deploy-fix-cloudflare.ps1
```

---

## ✅ CHECKLIST FINALE

- [ ] Connecté à Cloudflare (`wrangler whoami`)
- [ ] Projet existe sur Cloudflare Pages
- [ ] Variables d'environnement configurées
- [ ] Script `deploy-fix-cloudflare.ps1` exécuté
- [ ] URL de déploiement accessible
- [ ] Routes API fonctionnelles
- [ ] Formulaires fonctionnels

---

**🎉 VOTRE SITE EST MAINTENANT EN LIGNE ! 🎉**
