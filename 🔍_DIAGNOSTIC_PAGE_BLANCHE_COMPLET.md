# 🔍 DIAGNOSTIC PAGE BLANCHE - GUIDE COMPLET

## 🎯 PROBLÈME IDENTIFIÉ

Vous voyez une **page blanche** au lieu de votre site. Voici comment identifier et résoudre le problème.

---

## 📋 ÉTAPE 1 : TESTS RAPIDES (2 minutes)

### Test 1 : Page HTML Simple
```bash
# Ouvrez dans votre navigateur :
https://votre-site.pages.dev/test-page-blanche.html
```

**✅ Si ça fonctionne :** Cloudflare Workers répond correctement
**❌ Si ça ne fonctionne pas :** Problème de déploiement Cloudflare

---

### Test 2 : Page de Diagnostic
```bash
# Ouvrez dans votre navigateur :
https://votre-site.pages.dev/diagnostic
```

**Cette page va :**
- ✅ Charger chaque composant un par un
- ✅ Identifier celui qui cause l'erreur
- ✅ Afficher les détails dans la console

---

### Test 3 : Version Minimale
```bash
# Dans votre terminal local :
./switch-to-minimal.sh
npm run build
npm run preview
```

**✅ Si ça fonctionne :** Le problème vient d'un composant spécifique
**❌ Si ça ne fonctionne pas :** Problème de configuration React/Astro

---

## 🔧 ÉTAPE 2 : SOLUTIONS SELON LE PROBLÈME

### Problème A : Erreur JavaScript dans la Console

**Symptômes :**
- Page blanche
- Erreur dans la console du navigateur (F12)
- Message type "Cannot read property..." ou "undefined is not a function"

**Solution :**
```bash
# 1. Ouvrez la console (F12)
# 2. Notez l'erreur exacte
# 3. Identifiez le composant problématique
# 4. Vérifiez ce composant :

# Exemple : Si l'erreur vient de NavigationDesignSystem
cat src/components/NavigationDesignSystem.tsx
```

**Corrections courantes :**
- ✅ Vérifier les imports manquants
- ✅ Vérifier les props undefined
- ✅ Vérifier les hooks React mal utilisés

---

### Problème B : Erreur de Build

**Symptômes :**
- `npm run build` échoue
- Erreurs TypeScript
- Modules non trouvés

**Solution :**
```bash
# 1. Nettoyer le cache
rm -rf node_modules dist .astro
npm install

# 2. Rebuild
npm run build

# 3. Si erreur TypeScript, vérifier :
npx astro check
```

---

### Problème C : Problème de Cache Cloudflare

**Symptômes :**
- Build réussit localement
- Page blanche sur Cloudflare
- Ancienne version visible

**Solution :**
```bash
# 1. Purger le cache Cloudflare
# Dans le dashboard Cloudflare Pages :
# Deployments > ... > Purge Cache

# 2. Forcer un nouveau déploiement
git commit --allow-empty -m "Force redeploy"
git push origin main

# 3. Attendre 2-3 minutes
```

---

### Problème D : Variables d'Environnement Manquantes

**Symptômes :**
- Erreurs API
- Fonctionnalités qui ne marchent pas
- Console montre "undefined" pour les clés API

**Solution :**
```bash
# 1. Vérifier les variables locales
cat .env

# 2. Vérifier dans Cloudflare Pages :
# Settings > Environment Variables

# 3. Variables requises :
MISTRAL_API_KEY=votre_clé
FORMSPREE_FORM_ID=votre_id
STRIPE_PUBLIC_KEY=pk_live_...
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...
```

---

## 🎯 ÉTAPE 3 : DIAGNOSTIC AVANCÉ

### Méthode 1 : Désactiver les Composants Un par Un

```typescript
// Dans src/components/AppWrapper.tsx
// Commentez les composants un par un :

import React from 'react';
import { LanguageProvider } from '../lib/language-context';
import NavigationDesignSystem from './NavigationDesignSystem';
// import HeroDesignSystem from './HeroDesignSystem'; // ← DÉSACTIVÉ
// import TrustStatsSimple from './TrustStatsSimple'; // ← DÉSACTIVÉ
// ... etc

const AppWrapper: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <NavigationDesignSystem />
        {/* <HeroDesignSystem /> */}
        {/* <TrustStatsSimple /> */}
        {/* ... */}
      </div>
    </LanguageProvider>
  );
};
```

**Processus :**
1. ✅ Désactivez TOUS les composants sauf Navigation
2. ✅ Build et test
3. ✅ Réactivez un composant à la fois
4. ✅ Identifiez celui qui cause l'erreur

---

### Méthode 2 : Vérifier les Dépendances

```bash
# Vérifier que toutes les dépendances sont installées
npm list --depth=0

# Vérifier les versions
cat package.json

# Réinstaller si nécessaire
rm -rf node_modules package-lock.json
npm install
```

---

### Méthode 3 : Logs Détaillés

```bash
# Build avec logs détaillés
npm run build -- --verbose

# Preview avec logs
npm run preview -- --verbose

# Vérifier les logs Cloudflare
# Dans le dashboard : Deployments > View logs
```

---

## 📊 CHECKLIST DE VÉRIFICATION

### ✅ Configuration de Base
- [ ] `npm install` sans erreur
- [ ] `npm run build` réussit
- [ ] `npm run preview` fonctionne localement
- [ ] Fichier `.env` présent avec toutes les clés
- [ ] Fichier `wrangler.toml` correct

### ✅ Composants React
- [ ] Tous les imports sont corrects
- [ ] Pas d'utilisation de `window` ou `document` au niveau racine
- [ ] Tous les composants ont `client:only="react"` dans .astro
- [ ] Pas de hooks React en dehors de composants

### ✅ Cloudflare
- [ ] Variables d'environnement configurées
- [ ] Build réussit sur Cloudflare
- [ ] Pas d'erreurs dans les logs de déploiement
- [ ] Cache purgé si nécessaire

### ✅ Assets
- [ ] Images présentes dans `/public`
- [ ] Logos accessibles
- [ ] Pas de liens cassés vers des assets

---

## 🚀 SOLUTIONS RAPIDES

### Solution 1 : Revenir à une Version qui Marche
```bash
# Si vous avez un backup qui fonctionnait :
cp src/components/AppWrapper.backup.tsx src/components/AppWrapper.tsx
npm run build
```

### Solution 2 : Version Minimale Temporaire
```bash
# Activer la version minimale
./switch-to-minimal.sh
npm run build

# Déployer
git add .
git commit -m "Switch to minimal version for debugging"
git push
```

### Solution 3 : Désactiver le Chatbot
```typescript
// Dans AppWrapper.tsx, commentez :
// import MistralChatBot from './MistralChatBot';
// ...
// <MistralChatBot />
```

---

## 🔍 OUTILS DE DIAGNOSTIC

### Console du Navigateur (F12)
```javascript
// Vérifier les erreurs
console.log('Test');

// Vérifier les variables
console.log(window.location);
console.log(navigator.userAgent);
```

### Network Tab
- ✅ Vérifier que tous les fichiers se chargent
- ✅ Chercher les erreurs 404
- ✅ Vérifier les requêtes API

### React DevTools
- ✅ Installer l'extension React DevTools
- ✅ Vérifier l'arbre des composants
- ✅ Identifier les composants qui ne se montent pas

---

## 📞 BESOIN D'AIDE ?

### Informations à Fournir
1. **Message d'erreur exact** (console F12)
2. **URL du site** (Cloudflare Pages)
3. **Dernière modification** effectuée
4. **Résultat des tests** ci-dessus

### Commandes de Diagnostic
```bash
# Générer un rapport complet
echo "=== BUILD ===" > diagnostic.log
npm run build >> diagnostic.log 2>&1
echo "=== ENV ===" >> diagnostic.log
cat .env >> diagnostic.log
echo "=== PACKAGE ===" >> diagnostic.log
cat package.json >> diagnostic.log

# Envoyer diagnostic.log
```

---

## ✅ APRÈS LA RÉSOLUTION

### 1. Tester Complètement
```bash
# Local
npm run build
npm run preview
# Tester toutes les pages

# Production
# Tester sur Cloudflare
# Vérifier toutes les fonctionnalités
```

### 2. Documenter
```bash
# Créer un fichier de notes
echo "Problème résolu le $(date)" > RESOLUTION.md
echo "Cause: [décrire]" >> RESOLUTION.md
echo "Solution: [décrire]" >> RESOLUTION.md
```

### 3. Backup
```bash
# Sauvegarder la version qui marche
cp src/components/AppWrapper.tsx src/components/AppWrapper.working.tsx
git add .
git commit -m "Working version - backup"
git push
```

---

## 🎯 PROCHAINES ÉTAPES

1. **Commencez par le Test 1** (page HTML simple)
2. **Puis le Test 2** (page de diagnostic)
3. **Identifiez le composant problématique**
4. **Appliquez la solution appropriée**
5. **Testez et documentez**

---

**Dernière mise à jour :** $(date)
**Version :** 1.0
