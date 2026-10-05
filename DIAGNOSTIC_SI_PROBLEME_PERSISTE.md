# 🔍 DIAGNOSTIC - Si le Problème Persiste

## 🎯 UTILISEZ CE GUIDE SI...

- ❌ Vous voyez encore une page blanche
- ❌ Le site ne charge pas
- ❌ Erreurs dans la console
- ❌ Build échoue

---

## 🔧 DIAGNOSTIC AUTOMATIQUE

Exécutez ce script pour un diagnostic complet :

```bash
./test-page-blanche-corrigee.sh
```

Ou manuellement :

```bash
bash test-page-blanche-corrigee.sh
```

---

## 📋 VÉRIFICATIONS MANUELLES

### 1. Vérifier la Configuration Astro

```bash
cat astro.config.mjs | grep "output:"
```

**Résultat attendu** :
```javascript
output: 'server',
```

**Si vous voyez** `output: 'static'` → C'est le problème !

**Solution** :
```bash
# Ouvrir le fichier
nano astro.config.mjs

# Changer la ligne
output: 'server',

# Sauvegarder : Ctrl+O, Enter, Ctrl+X
```

---

### 2. Vérifier les Dépendances

```bash
npm list @astrojs/cloudflare
```

**Résultat attendu** : Version installée

**Si erreur** :
```bash
npm install @astrojs/cloudflare@latest
```

---

### 3. Vérifier le Fichier AppWrapper

```bash
ls -la src/components/AppWrapper.tsx
```

**Résultat attendu** : Fichier existe

**Si manquant** :
```bash
# Le fichier devrait être présent
# Vérifier qu'il n'a pas été supprimé
```

---

### 4. Vérifier la Page Index

```bash
cat src/pages/index.astro | grep "AppWrapper"
```

**Résultat attendu** :
```astro
<AppWrapper client:only="react" />
```

---

### 5. Test de Build

```bash
npm run build 2>&1 | tee build-diagnostic.log
```

**Analyser les erreurs** :
```bash
cat build-diagnostic.log | grep -i "error"
```

---

## 🐛 ERREURS COMMUNES

### Erreur 1 : "Cannot find module"

**Symptôme** :
```
Error: Cannot find module '@astrojs/cloudflare'
```

**Solution** :
```bash
npm install
npm run build
```

---

### Erreur 2 : "output must be 'server'"

**Symptôme** :
```
Error: output must be 'server' when using @astrojs/cloudflare
```

**Solution** :
```bash
# Éditer astro.config.mjs
# Changer output: 'static' → output: 'server'
```

---

### Erreur 3 : "React component not rendering"

**Symptôme** : Page blanche, aucune erreur dans les logs

**Solution** :
```bash
# Vérifier que client:only="react" est présent
cat src/pages/index.astro | grep "client:only"
```

**Devrait afficher** :
```astro
<AppWrapper client:only="react" />
```

---

### Erreur 4 : "Port 3000 already in use"

**Symptôme** :
```
Error: Port 3000 is already in use
```

**Solution** :
```bash
# Tuer le processus sur le port 3000
npx kill-port 3000

# Ou utiliser un autre port
npm run dev -- --port 3001
```

---

### Erreur 5 : "Build failed with exit code 1"

**Symptôme** : Build échoue sans message clair

**Solution** :
```bash
# Nettoyer complètement
rm -rf dist .astro node_modules/.vite

# Rebuilder
npm run build
```

---

## 🔍 DIAGNOSTIC APPROFONDI

### Vérifier les Logs du Navigateur

1. Ouvrir le site en local : http://localhost:3000
2. Appuyer sur **F12**
3. Onglet **Console**
4. Chercher les erreurs en **rouge**

**Erreurs communes** :

| Erreur | Cause | Solution |
|--------|-------|----------|
| `Failed to fetch` | API non accessible | Vérifier les routes API |
| `Hydration mismatch` | SSR/Client mismatch | Utiliser `client:only` |
| `Module not found` | Import manquant | Vérifier les imports |
| `Unexpected token` | Erreur de syntaxe | Vérifier le code |

---

### Vérifier la Structure des Fichiers

```bash
# Vérifier que tous les fichiers essentiels existent
ls -la src/pages/index.astro
ls -la src/components/AppWrapper.tsx
ls -la src/layouts/main.astro
ls -la astro.config.mjs
ls -la package.json
```

**Tous devraient exister**. Si un manque :
```bash
# Restaurer depuis Git
git checkout HEAD -- <fichier-manquant>
```

---

### Vérifier les Imports dans AppWrapper

```bash
cat src/components/AppWrapper.tsx | grep "^import"
```

**Résultat attendu** : Tous les composants importés

**Si erreur d'import** :
```bash
# Vérifier que le composant existe
ls -la src/components/<NomDuComposant>.tsx
```

---

## 🧪 TESTS ÉTAPE PAR ÉTAPE

### Test 1 : Build Minimal

```bash
# Créer une page de test minimale
cat > src/pages/test-minimal.astro << 'EOF'
---
---
<html>
  <body>
    <h1>Test Minimal</h1>
    <p>Si vous voyez ceci, Astro fonctionne.</p>
  </body>
</html>
EOF

# Tester
npm run dev
# Ouvrir http://localhost:3000/test-minimal
```

**Si ça fonctionne** → Le problème vient d'un composant React

---

### Test 2 : Test React Simple

```bash
# Créer un composant React minimal
cat > src/components/TestSimple.tsx << 'EOF'
import React from 'react';

const TestSimple: React.FC = () => {
  return <div>React fonctionne !</div>;
};

export default TestSimple;
EOF

# Créer une page de test
cat > src/pages/test-react.astro << 'EOF'
---
import TestSimple from '../components/TestSimple';
---
<html>
  <body>
    <TestSimple client:only="react" />
  </body>
</html>
EOF

# Tester
npm run dev
# Ouvrir http://localhost:3000/test-react
```

**Si ça fonctionne** → React fonctionne, le problème vient d'un composant spécifique

---

### Test 3 : Identifier le Composant Problématique

Commentez les composants un par un dans `AppWrapper.tsx` :

```typescript
// Commenter tous sauf Navigation
<NavigationDesignSystem />
{/* <HeroDesignSystem /> */}
{/* <TrustStatsSimple /> */}
// ... etc
```

Testez après chaque commentaire pour identifier le composant qui cause le problème.

---

## 🔧 SOLUTIONS RADICALES

### Solution 1 : Nettoyer Complètement

```bash
# Arrêter le serveur (Ctrl+C)

# Supprimer tous les caches
rm -rf dist
rm -rf .astro
rm -rf node_modules/.vite
rm -rf node_modules/.cache

# Rebuilder
npm run dev
```

---

### Solution 2 : Réinstaller les Dépendances

```bash
# Supprimer node_modules
rm -rf node_modules

# Supprimer package-lock.json
rm package-lock.json

# Réinstaller
npm install

# Tester
npm run dev
```

---

### Solution 3 : Vérifier la Version de Node

```bash
node --version
```

**Version requise** : >= 18.0.0

**Si version < 18** :
```bash
# Installer nvm (Node Version Manager)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Installer Node 18
nvm install 18
nvm use 18

# Vérifier
node --version
```

---

## 📊 CHECKLIST DE DIAGNOSTIC

- [ ] `output: 'server'` dans astro.config.mjs
- [ ] `@astrojs/cloudflare` installé
- [ ] AppWrapper.tsx existe
- [ ] index.astro utilise AppWrapper
- [ ] `client:only="react"` présent
- [ ] Tous les composants existent
- [ ] Node.js >= 18
- [ ] npm install réussi
- [ ] npm run build réussi
- [ ] Aucune erreur dans la console

---

## 🆘 DERNIER RECOURS

Si rien ne fonctionne :

### Option 1 : Restaurer depuis Git

```bash
# Voir les derniers commits
git log --oneline -10

# Restaurer à un commit qui fonctionnait
git checkout <commit-hash>

# Ou restaurer un fichier spécifique
git checkout HEAD -- astro.config.mjs
```

---

### Option 2 : Utiliser une Version de Backup

```bash
# Si vous avez un backup
cp astro.config.mjs.backup astro.config.mjs
```

---

### Option 3 : Recréer la Configuration

```bash
# Sauvegarder l'ancienne config
mv astro.config.mjs astro.config.mjs.old

# Créer une nouvelle config minimale
cat > astro.config.mjs << 'EOF'
import {defineConfig} from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '',
  output: 'server',
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
EOF

# Tester
npm run build
```

---

## 📞 OBTENIR DE L'AIDE

Si le problème persiste après toutes ces étapes :

1. **Copier les logs d'erreur**
   ```bash
   npm run build 2>&1 | tee error-log.txt
   ```

2. **Copier la console du navigateur**
   - F12 → Console
   - Clic droit → Save as...

3. **Vérifier les versions**
   ```bash
   node --version
   npm --version
   cat package.json | grep "astro"
   ```

4. **Partager ces informations** pour obtenir de l'aide

---

## ✅ CONFIRMATION

Votre problème est résolu si :

- ✅ `npm run dev` démarre sans erreur
- ✅ http://localhost:3000 affiche le site
- ✅ Toutes les sections sont visibles
- ✅ Aucune erreur dans la console (F12)
- ✅ `npm run build` réussit

---

**Si tout fonctionne** → Passez au déploiement ! 🚀

**Si problème persiste** → Utilisez ce guide pour diagnostiquer
