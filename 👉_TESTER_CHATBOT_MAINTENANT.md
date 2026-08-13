# 👉 TESTER LE CHATBOT MAINTENANT

## 🚀 DÉMARRAGE RAPIDE

### 1️⃣ Démarrez le serveur (si pas déjà fait)

```bash
npm run dev
```

Attendez de voir :
```
🚀 astro v5.x.x started in XXXms
  ➜ Local:   http://localhost:4321/
```

---

## 🧪 OPTION 1 : PAGE DE TEST COMPLÈTE (RECOMMANDÉ)

### Ouvrez dans votre navigateur :
```
http://localhost:4321/test-mistral-final.html
```

### Testez les 5 scénarios :

1. **🇫🇷 Test Français**
   - Cliquez sur "Tester en Français"
   - Vérifiez que la réponse est en français
   - Vérifiez le badge : doit être **API** (pas FALLBACK)

2. **🇬🇧 Test Anglais**
   - Cliquez sur "Test in English"
   - Vérifiez que la réponse est en anglais
   - Vérifiez le badge : doit être **API**

3. **🇪🇸 Test Espagnol**
   - Cliquez sur "Probar en Español"
   - Vérifiez que la réponse est en espagnol
   - Vérifiez le badge : doit être **API**

4. **🇵🇹 Test Portugais**
   - Cliquez sur "Testar em Português"
   - Vérifiez que la réponse est en portugais
   - Vérifiez le badge : doit être **API**

5. **🎯 Test Question Complexe**
   - Cliquez sur "Tester Question Complexe"
   - Vérifiez que la réponse est intelligente et personnalisée
   - Vérifiez le badge : doit être **API**

### ✅ Résultats attendus :

- ✅ Badge **API** (vert) = L'API Mistral fonctionne correctement
- ✅ Réponses intelligentes et personnalisées
- ✅ Détection automatique de la langue
- ✅ Temps de réponse < 3 secondes

### ⚠️ Si vous voyez un badge **FALLBACK** (orange) :

Cela signifie que l'API Mistral n'a pas été appelée. Vérifiez :
1. Que le serveur est bien démarré
2. Que la clé API est dans le `.env`
3. Les logs dans la console du navigateur (F12)

---

## 🧪 OPTION 2 : CHATBOT SUR LE SITE

### 1. Ouvrez la page d'accueil :
```
http://localhost:4321/
```

### 2. Cliquez sur l'icône du chatbot
- En bas à droite de l'écran
- Icône : ✨ (Sparkles)
- Couleur : Terracotta/Brown

### 3. Testez avec différentes langues :

**Français :**
```
Bonjour, quels sont vos tarifs ?
```

**Anglais :**
```
Hello, what are your prices?
```

**Espagnol :**
```
Hola, ¿cuáles son sus precios?
```

**Portugais :**
```
Olá, quais são os preços?
```

### 4. Testez des questions complexes :

```
I have a small e-commerce business with 3 employees. 
We get about 200 customer inquiries per day. 
What would you recommend?
```

### ✅ Résultats attendus :

- ✅ Le chatbot répond dans la langue de la question
- ✅ Les réponses sont intelligentes et personnalisées
- ✅ Le chatbot pose des questions de qualification
- ✅ Le chatbot recommande un plan spécifique
- ✅ Le chatbot guide vers l'achat

---

## 🔍 VÉRIFICATION DANS LA CONSOLE

### Ouvrez la console du navigateur (F12)

Vous devriez voir :
```
✅ MistralChatBot monté et prêt !
📍 Position: fixed bottom-6 right-6
🎨 Couleur: bg-primary (devrait être visible)
🔑 Clé API trouvée via import.meta.env (développement local)
🚀 Appel API Mistral - Détection automatique de la langue
✅ Requête réussie
```

### Dans la console du serveur (terminal)

Vous devriez voir :
```
🔑 Clé API trouvée via import.meta.env (développement local)
🔍 Debug - Sources de variables disponibles: {
  hasImportMetaEnv: true,
  apiKeyFound: true,
  apiKeyLength: 32
}
🌍 Langue détectée: EN
🚀 Appel API Mistral - Détection automatique de la langue
✅ Requête réussie - Stats: {
  requestsLastMinute: 1,
  successRate: "100.0%"
}
```

---

## ❌ DÉPANNAGE

### Problème : Badge "FALLBACK" au lieu de "API"

**Solution :**
1. Vérifiez que la clé API est dans le `.env` :
   ```bash
   grep "MISTRAL_API_KEY" .env
   ```

2. Redémarrez le serveur :
   ```bash
   # Ctrl+C pour arrêter
   npm run dev
   ```

### Problème : Erreur "API key not configured"

**Solution :**
1. Vérifiez le fichier `.env` :
   ```bash
   cat .env | grep MISTRAL
   ```

2. Si la clé n'est pas là, ajoutez-la :
   ```bash
   echo 'MISTRAL_API_KEY="T2sIivD4SEer0XlJWcwN8Yl6xU41an2C"' >> .env
   ```

3. Redémarrez le serveur

### Problème : Le chatbot ne s'ouvre pas

**Solution :**
1. Vérifiez que l'icône est visible en bas à droite
2. Ouvrez la console (F12) et cherchez des erreurs
3. Vérifiez que `AppWrapper.tsx` importe bien `MistralChatBot`

### Problème : Réponses toujours identiques

**Solution :**
1. C'est normal pour les mêmes questions (cache)
2. Testez avec des questions différentes
3. Le cache améliore les performances

---

## 📊 TESTS RECOMMANDÉS

### Test 1 : Détection de langue
- ✅ Posez la même question en 4 langues
- ✅ Vérifiez que les réponses sont dans la bonne langue

### Test 2 : Intelligence
- ✅ Posez une question complexe
- ✅ Vérifiez que le chatbot pose des questions de qualification
- ✅ Vérifiez qu'il recommande un plan spécifique

### Test 3 : Gestion des objections
- ✅ "C'est trop cher"
- ✅ "Je ne suis pas sûr que ça marche"
- ✅ "J'ai déjà une solution"

### Test 4 : Multilingue
- ✅ Commencez en français
- ✅ Continuez en anglais
- ✅ Vérifiez que le chatbot s'adapte

---

## 🎯 CRITÈRES DE SUCCÈS

Le chatbot fonctionne correctement si :

✅ Badge **API** (pas FALLBACK)
✅ Réponses intelligentes et personnalisées
✅ Détection automatique de la langue
✅ Questions de qualification pertinentes
✅ Recommandations de plans spécifiques
✅ Gestion professionnelle des objections
✅ Temps de réponse < 3 secondes

---

## 📧 BESOIN D'AIDE ?

Si le chatbot ne fonctionne toujours pas :

1. Vérifiez le fichier `✅_CHATBOT_CORRIGE_DETECTION_API.md`
2. Consultez les logs dans la console
3. Contactez : ZyatrIA.contact@gmail.com

---

**Prêt à tester ? Allez-y ! 🚀**

1. Ouvrez : http://localhost:4321/test-mistral-final.html
2. Cliquez sur les boutons de test
3. Vérifiez les badges (doivent être **API**)
4. Profitez de votre chatbot intelligent ! 🎉
