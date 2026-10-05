# 🎯 Guide Windows - Résolution des Problèmes

## 🚨 Problèmes Identifiés

### 1. Serveur Astro Déjà en Cours
```
Another astro dev server is already running.
PID: 33368
```

### 2. Erreur ASSETS Réservé
```
The name 'ASSETS' is reserved in Pages projects.
```

## ✅ Solutions

### Solution 1 : Arrêter le Serveur

**Option A : Commande Astro**
```powershell
npx astro dev stop
```

**Option B : Script PowerShell**
```powershell
.\restart-dev-clean.ps1
```

**Option C : Manuel**
```powershell
# Arrêter tous les processus Node
Get-Process -Name node | Stop-Process -Force

# Attendre 2 secondes
Start-Sleep -Seconds 2

# Redémarrer
npm run dev
```

### Solution 2 : Corriger l'Erreur ASSETS

Le script `fix-wrangler-config.js` a été amélioré pour :
- ✅ Renommer `ASSETS` en `STATIC_ASSETS`
- ✅ Supprimer le champ `connect` qui cause un warning
- ✅ Corriger toutes les références dans entry.mjs

**Le build devrait maintenant fonctionner !**

## 🚀 Procédure Complète

### Étape 1 : Arrêter le Serveur
```powershell
npx astro dev stop
```

### Étape 2 : Nettoyer (Optionnel)
```powershell
.\restart-dev-clean.ps1
```

### Étape 3 : Build
```powershell
npm run build
```

### Étape 4 : Vérifier
Le build devrait se terminer avec :
```
✅ Configuration complète mise à jour
```

### Étape 5 : Déployer
```powershell
wrangler pages deploy dist
```

## 🔧 Si le Script PowerShell Ne Fonctionne Pas

### Activer l'Exécution de Scripts
```powershell
# En tant qu'administrateur
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Ou Utiliser les Commandes Manuelles
```powershell
# 1. Arrêter Astro
npx astro dev stop

# 2. Arrêter Node
Get-Process -Name node | Stop-Process -Force

# 3. Nettoyer
Remove-Item -Path ".astro" -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item -Path "node_modules\.vite" -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item -Path "dist" -Recurse -Force -ErrorAction SilentlyContinue

# 4. Build
npm run build
```

## 📊 Vérification du Build

### Build Réussi
Vous devriez voir :
```
✓ built in 555ms
✓ built in 104ms
✓ built in 396ms
✅ Binding ASSETS renommé en STATIC_ASSETS dans wrangler.json
✅ Champ "connect" supprimé de wrangler.json
✅ Configuration complète mise à jour
```

### Pas d'Erreur ASSETS
Le message suivant **ne devrait plus apparaître** :
```
❌ The name 'ASSETS' is reserved in Pages projects.
```

## 🎯 Commandes Rapides

### Arrêter le Serveur
```powershell
npx astro dev stop
```

### Nettoyer et Redémarrer
```powershell
.\restart-dev-clean.ps1
npm run dev
```

### Build Production
```powershell
npm run build
```

### Déployer
```powershell
wrangler pages deploy dist
```

## 💡 Conseils

### 1. Toujours Arrêter Proprement
Utilisez `npx astro dev stop` au lieu de Ctrl+C

### 2. Nettoyer Régulièrement
Si vous rencontrez des problèmes, nettoyez les caches :
```powershell
.\restart-dev-clean.ps1
```

### 3. Vérifier les Processus
Si le port est toujours occupé :
```powershell
Get-NetTCPConnection -LocalPort 3000
Get-NetTCPConnection -LocalPort 4321
```

### 4. Forcer le Redémarrage
Si rien ne fonctionne :
```powershell
Get-Process -Name node | Stop-Process -Force
npm run dev
```

## 🎉 Résultat Attendu

Après avoir suivi ces étapes :

1. ✅ Le serveur démarre sans erreur
2. ✅ Le build se termine avec succès
3. ✅ Pas d'erreur ASSETS
4. ✅ Déploiement fonctionne

## 📚 Fichiers Créés

- **restart-dev-clean.ps1** - Script PowerShell pour Windows
- **fix-wrangler-config.js** - Corrige automatiquement ASSETS

## 🚀 Prochaines Étapes

1. Arrêter le serveur actuel
2. Faire un build propre
3. Vérifier qu'il n'y a pas d'erreur
4. Déployer sur Cloudflare

**Tout devrait maintenant fonctionner sur Windows !** 🎉
