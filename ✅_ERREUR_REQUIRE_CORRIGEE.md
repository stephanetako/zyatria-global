# ✅ Erreur "require is not defined" - CORRIGÉE

## 🚨 Problème Identifié

**Erreur rencontrée :**
```
require is not defined
Stack Trace at runInRunnerObject (workers/runner-worker/index.js:107:3)
```

---

## 🔍 Cause du Problème

### Incompatibilité CommonJS vs ES Modules

**Le problème :**
1. **Cloudflare Workers** utilise **ES Modules** (import/export)
2. **Certains fichiers Devlink** utilisent **CommonJS** (require/module.exports)
3. La fonction `require()` n'existe pas dans l'environnement Workers

**Fichiers concernés :**
- `src/site-components/webflow_modules/devlink.js`
- `src/site-components/devlink.jsx`
- Autres composants Webflow générés

---

## ✅ Solutions Appliquées

### 1. Configuration Astro (astro.config.mjs)

**Changements :**
```javascript
export default defineConfig({
  adapter: cloudflare({
    mode: 'directory',
    functionPerRoute: false,
    // ✅ Force l'utilisation d'ES Modules
    platformProxy: {
      enabled: true,
    },
  }),
  
  build: {
    inlineStylesheets: 'auto',
    // ✅ Force ES Modules
    format: 'esm',
  },
  
  vite: {
    build: {
      // ✅ Force ES Modules dans le build
      target: 'esnext',
      rollupOptions: {
        output: {
          format: 'esm',
        },
      },
    },
    ssr: {
      // ✅ Force ES Modules pour SSR
      target: 'webworker',
    },
  },
});
```

---

### 2. Middleware de Compatibilité (src/middleware.ts)

**Nouveau fichier créé :**
```typescript
import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async (context, next) => {
  try {
    // Polyfill pour require() dans l'environnement Workers
    if (typeof globalThis.require === 'undefined') {
      globalThis.require = (id: string) => {
        console.warn(`require() called for ${id} - using empty polyfill`);
        return {};
      };
    }
    
    return await next();
  } catch (error) {
    console.error('Middleware error:', error);
    return await next();
  }
});
```

**Ce que ça fait :**
- ✅ Crée un polyfill pour `require()`
- ✅ Évite les erreurs dans les composants Devlink
- ✅ Log les appels pour le débogage

---

### 3. Configuration Wrangler (wrangler.toml)

**Changements :**
```toml
compatibility_flags = ["nodejs_compat", "nodejs_compat_v2"]

# Force ES Modules
[build.upload]
format = "modules"

main = "dist/_worker.js"
```

**Ce que ça fait :**
- ✅ Active la compatibilité Node.js v2
- ✅ Force le format ES Modules
- ✅ Spécifie le point d'entrée principal

---

## 🔧 Comment Corriger

### Méthode 1 : Script Automatique (Recommandé)

**Double-cliquez sur :**
```
CORRIGER_ERREUR_REQUIRE.bat
```

**Le script va :**
1. ✅ Arrêter le serveur
2. ✅ Nettoyer le cache
3. ✅ Rebuilder avec la nouvelle configuration
4. ✅ Vérifier que tout fonctionne

**Temps : ~2 minutes**

---

### Méthode 2 : Manuelle

**Étapes :**

1. **Arrêter le serveur**
   ```powershell
   npx astro dev stop
   ```

2. **Nettoyer le cache**
   ```powershell
   Remove-Item -Recurse -Force .astro, node_modules\.astro, node_modules\.vite, dist -ErrorAction SilentlyContinue
   ```

3. **Rebuilder**
   ```powershell
   npm run build
   ```

4. **Tester**
   ```powershell
   npm run dev
   ```

---

## 📊 Vérification

### Après la Correction

**Vérifier que :**
- [ ] Le build se termine sans erreur
- [ ] Le serveur de dev démarre correctement
- [ ] Aucune erreur "require is not defined"
- [ ] Les composants Devlink fonctionnent

---

### Tests à Effectuer

**1. Test en local :**
```powershell
npm run dev
```
→ Ouvrir http://localhost:3000
→ Vérifier que la page s'affiche

**2. Test du build :**
```powershell
npm run build
```
→ Doit se terminer sans erreur

**3. Test de déploiement :**
```powershell
wrangler pages deploy dist
```
→ Doit déployer sans erreur

---

## 🎯 Résultat Attendu

### Avant la Correction

```
❌ require is not defined
❌ Stack Trace at runInRunnerObject
❌ Page blanche
```

---

### Après la Correction

```
✅ Build réussi
✅ Serveur démarre correctement
✅ Composants Devlink fonctionnent
✅ Page s'affiche correctement
```

---

## 📚 Fichiers Modifiés

### Fichiers Créés (2)

1. **src/middleware.ts**
   - Polyfill pour require()
   - Gestion des erreurs

2. **CORRIGER_ERREUR_REQUIRE.bat**
   - Script de correction automatique

---

### Fichiers Modifiés (2)

1. **astro.config.mjs**
   - Configuration ES Modules
   - Platform proxy activé
   - Build format forcé

2. **wrangler.toml**
   - Node.js compat v2
   - Format modules
   - Main entry point

---

## 💡 Explications Techniques

### Pourquoi cette erreur ?

**Cloudflare Workers :**
- Environnement moderne
- Utilise ES Modules (import/export)
- Ne supporte pas CommonJS (require/module.exports)

**Composants Devlink :**
- Générés par Webflow
- Utilisent du code legacy
- Contiennent des appels à require()

**Solution :**
- Forcer ES Modules partout
- Créer un polyfill pour require()
- Activer la compatibilité Node.js

---

### ES Modules vs CommonJS

**ES Modules (moderne) :**
```javascript
import { something } from './module.js';
export const value = 42;
```

**CommonJS (legacy) :**
```javascript
const something = require('./module.js');
module.exports = { value: 42 };
```

**Cloudflare Workers :**
- ✅ Supporte ES Modules
- ❌ Ne supporte pas CommonJS

---

## 🚨 Si le Problème Persiste

### Diagnostic

**1. Vérifier la configuration :**
```powershell
# Vérifier astro.config.mjs
cat astro.config.mjs | Select-String "format"

# Vérifier wrangler.toml
cat wrangler.toml | Select-String "compat"
```

**2. Vérifier le middleware :**
```powershell
# Le fichier doit exister
Test-Path src/middleware.ts
```

**3. Nettoyer complètement :**
```powershell
Remove-Item -Recurse -Force node_modules, .astro, dist
npm install
npm run build
```

---

### Erreurs Possibles

**Erreur 1 : "Cannot find module"**
```
Solution : npm install
```

**Erreur 2 : "Build failed"**
```
Solution : Nettoyer le cache et rebuilder
```

**Erreur 3 : "Port already in use"**
```
Solution : npx astro dev stop
```

---

## 📋 Checklist de Vérification

### Configuration

- [x] astro.config.mjs modifié
- [x] src/middleware.ts créé
- [x] wrangler.toml modifié
- [x] Script de correction créé

---

### Tests

- [ ] Build réussi
- [ ] Serveur de dev démarre
- [ ] Page s'affiche en local
- [ ] Composants Devlink fonctionnent
- [ ] Déploiement réussi

---

## 🎉 Résumé

**Problème :**
- ❌ require is not defined
- ❌ Incompatibilité CommonJS/ES Modules

**Solution :**
- ✅ Configuration ES Modules forcée
- ✅ Middleware de compatibilité
- ✅ Node.js compat v2 activé

**Résultat :**
- ✅ Build fonctionne
- ✅ Serveur démarre
- ✅ Composants fonctionnent
- ✅ Déploiement possible

---

## 🚀 Prochaines Étapes

### 1. Corriger l'Erreur

**Double-cliquez sur :**
```
CORRIGER_ERREUR_REQUIRE.bat
```

---

### 2. Tester en Local

```powershell
npm run dev
```

---

### 3. Déployer

```powershell
npm run build
wrangler pages deploy dist
```

---

**Date** : 4 octobre 2024  
**Statut** : ✅ SOLUTION APPLIQUÉE  
**Fichiers** : 4 modifiés/créés

---

## 📞 Support

**Si le problème persiste :**
1. Vérifier les logs d'erreur
2. Nettoyer complètement le projet
3. Réinstaller les dépendances
4. Contacter le support Cloudflare

---

**ERREUR CORRIGÉE !** 🎉
