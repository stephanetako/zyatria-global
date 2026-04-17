# 🔍 GUIDE DE DÉBOGAGE - PAGE BLANCHE

## Le site se charge mais affiche une page blanche ?

### ✅ ÉTAPES DE DÉBOGAGE

#### 1️⃣ **Ouvrir la Console du Navigateur**

**Sur Chrome/Edge/Brave:**
1. Appuyez sur **F12** (ou clic droit > Inspecter)
2. Cliquez sur l'onglet **Console**
3. Recherchez les erreurs en rouge

**Sur Firefox:**
1. Appuyez sur **F12**
2. Cliquez sur **Console**
3. Recherchez les messages d'erreur

#### 2️⃣ **Vérifier les Erreurs Courantes**

**Erreur possible 1:** `Cannot read property 'price' of undefined`
- **Cause:** Les données de prix ne se chargent pas
- **Solution:** Vérifier que `stripe-links.ts` est bien configuré

**Erreur possible 2:** `Module not found`
- **Cause:** Import manquant
- **Solution:** Rebuild le projet

**Erreur possible 3:** `Unexpected token`
- **Cause:** Erreur de syntaxe
- **Solution:** Vérifier les dernières modifications

#### 3️⃣ **Vérifier le Network**

1. Dans les DevTools, cliquez sur **Network** (Réseau)
2. Rechargez la page (**Ctrl+R** ou **Cmd+R**)
3. Vérifiez qu'il n'y a pas de fichiers en **rouge** (erreur 404)

#### 4️⃣ **Tester en Mode Incognito**

1. Ouvrez une **fenêtre de navigation privée**
2. Allez sur votre site
3. Si ça fonctionne → Problème de cache
   - **Solution:** Vider le cache (Ctrl+Shift+Delete)

---

## 🔧 SOLUTIONS RAPIDES

### Solution 1: Rebuild Complet
\`\`\`bash
cd /app
rm -rf dist node_modules/.vite
npm run build
\`\`\`

### Solution 2: Clear Cache
**Dans le navigateur:**
1. Ouvrez DevTools (F12)
2. Clic droit sur le bouton Refresh
3. Sélectionnez "Empty Cache and Hard Reload"

### Solution 3: Restart Preview Server
Si vous utilisez le serveur de preview Webflow, essayez de restart.

---

## 📸 CE QUE VOUS DEVRIEZ VOIR

### ✅ Console SANS erreurs:
\`\`\`
No errors found
\`\`\`

### ❌ Console AVEC erreurs (exemple):
\`\`\`
Uncaught TypeError: Cannot read property 'price' of undefined
    at Pricing.tsx:177
\`\`\`

---

## 📋 CHECKLIST DE VÉRIFICATION

- [ ] La console du navigateur est ouverte (F12)
- [ ] Il n'y a pas d'erreurs rouges dans la console
- [ ] Tous les fichiers se chargent dans Network (pas de 404)
- [ ] Le cache du navigateur a été vidé
- [ ] Le site a été rebuild récemment

---

## 🆘 SI LE PROBLÈME PERSISTE

### Envoyez-moi les informations suivantes:

1. **Screenshot de la console** (F12 > Console)
2. **Screenshot de Network** (F12 > Network)
3. **Message d'erreur exact** (copier-coller le texte)

### Informations utiles:
- **Navigateur:** Chrome / Firefox / Edge / Safari ?
- **Mode:** Normal / Incognito ?
- **Page:** Quelle page affiche une page blanche ?

---

## 🎯 CORRECTION APPLIQUÉE

**J'ai déjà ajouté une vérification de sécurité** dans le fichier `Pricing.tsx`:

\`\`\`typescript
// Safety check
if (!pricing) {
  console.error(\`No pricing found for \${plan.key} with billing type \${billingType}\`);
  return null;
}
\`\`\`

Cela devrait empêcher le crash si les données ne sont pas disponibles.

---

**Prochain test:** Ouvrez le site avec F12 déjà ouvert pour voir les erreurs immédiatement ! 🔍
