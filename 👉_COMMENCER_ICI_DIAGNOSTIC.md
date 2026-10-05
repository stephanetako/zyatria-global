# 👉 COMMENCER ICI - DIAGNOSTIC CHATBOT

## 🚀 ÉTAPE 1 : VÉRIFICATION DES FICHIERS

### Sur Windows (PowerShell)

1. **Ouvrir PowerShell** dans le dossier du projet
   - Clic droit sur le dossier → "Ouvrir dans le terminal"
   - OU : `Win + X` → "Windows PowerShell"

2. **Exécuter le script de diagnostic**
   ```powershell
   .\verifier-chatbots.ps1
   ```

3. **Si erreur "script désactivé"**, exécutez d'abord :
   ```powershell
   Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
   ```
   Puis réessayez :
   ```powershell
   .\verifier-chatbots.ps1
   ```

---

### Sur Mac/Linux (Terminal)

```bash
./verifier-chatbots.sh
```

---

## 📊 RÉSULTATS ATTENDUS

Vous devriez voir :

```
✅ SimpleChatbot.tsx (12088 bytes)
✅ EnhancedClaudeChatBot.tsx (30455 bytes)
✅ Imports trouvés
✅ Rendus trouvés
✅ 6 emojis trouvés
✅ Z-index optimal: z-[9999]
✅ TOUT EST OK !
```

---

## 🎯 ÉTAPE 2 : TESTER DANS LE NAVIGATEUR

### A. Lancer le serveur

```bash
npm run dev
```

### B. Ouvrir le navigateur

Allez sur : **http://localhost:4321**

### C. Chercher le chatbot

**Où ?** En bas à droite de la page

**À quoi ça ressemble ?**
- 🔵 Bouton rond avec dégradé bleu-violet-rose
- 💬 Emoji bulle de conversation
- ✨ Badge rouge avec étoile
- Animation de pulse

---

## 🔍 ÉTAPE 3 : DIAGNOSTIC NAVIGATEUR

Si vous ne voyez **PAS** le chatbot :

### 1. Ouvrir la console du navigateur
- **Windows** : `F12`
- **Mac** : `Cmd + Option + I`

### 2. Coller ce script dans la console

```javascript
// === DIAGNOSTIC CHATBOT RAPIDE ===
const chatbot = document.querySelector('[aria-label="Ouvrir le chat IA"]');
console.log('Chatbot trouvé:', chatbot ? '✅ OUI' : '❌ NON');

if (chatbot) {
  const rect = chatbot.getBoundingClientRect();
  console.log('Position:', {
    bottom: rect.bottom + 'px',
    right: rect.right + 'px',
    visible: rect.width > 0 && rect.height > 0
  });
  console.log('Z-index:', window.getComputedStyle(chatbot).zIndex);
  console.log('Display:', window.getComputedStyle(chatbot).display);
  console.log('Visibility:', window.getComputedStyle(chatbot).visibility);
} else {
  console.log('❌ Le chatbot n\'est pas dans le DOM');
  console.log('Vérifiez que le serveur dev tourne (npm run dev)');
}
```

### 3. Interpréter les résultats

#### ✅ Si "Chatbot trouvé: ✅ OUI"
Le chatbot est chargé ! Vérifiez :
- Position : devrait être en bas à droite
- Z-index : devrait être 9999
- Visible : devrait être true

#### ❌ Si "Chatbot trouvé: ❌ NON"
Le chatbot n'est pas chargé. Causes possibles :
1. Le serveur dev ne tourne pas → `npm run dev`
2. Erreur de build → Vérifier la console pour les erreurs rouges
3. Mauvaise page → Vérifier que vous êtes sur `http://localhost:4321`

---

## 🆘 SOLUTIONS PAR PROBLÈME

### Problème 1 : Script PowerShell bloqué
```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
```

### Problème 2 : Serveur ne démarre pas
```bash
# Tuer les processus sur le port 4321
npx kill-port 4321

# Relancer
npm run dev
```

### Problème 3 : Chatbot invisible mais présent
- Vérifier le z-index (devrait être 9999)
- Vérifier qu'aucun autre élément ne le cache
- Essayer de scroller en bas de la page

### Problème 4 : Erreurs dans la console
- Copier les erreurs rouges
- Vérifier les imports dans `HomePageComplete.tsx`
- Vérifier que `SimpleChatbot.tsx` existe

---

## 📋 CHECKLIST COMPLÈTE

Cochez au fur et à mesure :

### Fichiers
- [ ] `verifier-chatbots.ps1` exécuté avec succès
- [ ] Tous les fichiers de chatbot présents
- [ ] SimpleChatbot importé dans HomePageComplete
- [ ] SimpleChatbot rendu dans HomePageComplete

### Serveur
- [ ] `npm run dev` lancé sans erreur
- [ ] Page accessible sur http://localhost:4321
- [ ] Aucune erreur rouge dans la console

### Visuel
- [ ] Bouton rond visible en bas à droite
- [ ] Emoji 💬 visible
- [ ] Badge ✨ visible
- [ ] Animation de pulse active
- [ ] Tooltip au survol : "Agent IA ZyatrIA..."

### Fonctionnel
- [ ] Clic sur le bouton ouvre la fenêtre
- [ ] Fenêtre de chat s'affiche
- [ ] Possibilité de taper un message
- [ ] Bouton de fermeture fonctionne

---

## 🎉 SI TOUT FONCTIONNE

Félicitations ! Votre chatbot est opérationnel ! 🚀

**Prochaines étapes :**
1. Tester l'envoi de messages
2. Vérifier les réponses de l'IA
3. Personnaliser les couleurs si besoin
4. Déployer sur Cloudflare Pages

---

## 📸 BESOIN D'AIDE ?

Si le problème persiste, prenez des captures d'écran de :

1. **Résultat du script PowerShell** (copier/coller le texte)
2. **Console du navigateur** (F12 → Console)
3. **Résultat du script JavaScript** dans la console
4. **La page complète** (pour voir le layout)

Et partagez-les pour un diagnostic approfondi ! 💪

---

**Dernière mise à jour :** Script PowerShell créé avec support UTF-8 pour les emojis
