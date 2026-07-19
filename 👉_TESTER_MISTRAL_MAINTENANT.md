# 👉 TESTER MISTRAL MAINTENANT

## 🚀 Test Rapide en 3 Étapes

### 1️⃣ Définir votre clé API

#### **Linux/Mac :**
```bash
export MISTRAL_API_KEY='sk-VOTRE_CLE_API_ICI'
```

#### **Windows PowerShell :**
```powershell
$env:MISTRAL_API_KEY='sk-VOTRE_CLE_API_ICI'
```

#### **Ou créer un fichier .env :**
```bash
# Créer le fichier .env à la racine du projet
echo "MISTRAL_API_KEY=sk-VOTRE_CLE_API_ICI" > .env
```

---

### 2️⃣ Lancer le script de test

#### **Linux/Mac :**
```bash
# Rendre le script exécutable
chmod +x test-mistral-api.sh

# Lancer le test
./test-mistral-api.sh
```

#### **Windows PowerShell :**
```powershell
# Lancer le test
.\test-mistral-api.ps1
```

---

### 3️⃣ Vérifier les résultats

**✅ Si tout fonctionne, vous verrez :**
```
🧪 Test de l'API Mistral
=======================

✅ Clé API trouvée : sk-abc123...

📡 Test 1 : Appel API simple
----------------------------
Code HTTP : 200

✅ Succès ! L'API fonctionne correctement

📝 Réponse :
Bonjour ! 👋 Comment puis-je vous aider aujourd'hui ?

📡 Test 2 : Test avec le contexte ZyatrIA
----------------------------------------
Code HTTP : 200

✅ Succès ! Le contexte ZyatrIA fonctionne

📝 Réponse :
[Réponse détaillée sur les services ZyatrIA]

📡 Test 3 : Modèles disponibles
------------------------------
Code HTTP : 200

✅ Modèles disponibles :
   - mistral-tiny
   - mistral-small
   - mistral-medium
   - mistral-large

================================
📊 Résumé des tests
================================

✅ Tous les tests sont passés !
```

---

## 🧪 Test Manuel avec curl

Si vous préférez tester manuellement :

```bash
curl -X POST https://api.mistral.ai/v1/chat/completions \
  -H "Authorization: Bearer sk-VOTRE_CLE_API_ICI" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "mistral-medium",
    "messages": [
      {
        "role": "user",
        "content": "Bonjour !"
      }
    ],
    "temperature": 0.7
  }'
```

**Réponse attendue :**
```json
{
  "id": "cmpl-...",
  "object": "chat.completion",
  "created": 1234567890,
  "model": "mistral-medium",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "Bonjour ! 👋 Comment puis-je vous aider aujourd'hui ?"
      },
      "finish_reason": "stop"
    }
  ],
  "usage": {
    "prompt_tokens": 10,
    "completion_tokens": 15,
    "total_tokens": 25
  }
}
```

---

## 🐛 Dépannage

### ❌ Erreur 401 (Unauthorized)

**Problème :** Clé API invalide ou révoquée

**Solutions :**
1. Vérifier que la clé commence par `sk-`
2. Vérifier qu'il n'y a pas d'espaces avant/après
3. Générer une nouvelle clé sur https://console.mistral.ai/

### ❌ Erreur 429 (Too Many Requests)

**Problème :** Limite de taux dépassée

**Solutions :**
1. Attendre 1-2 minutes
2. Vérifier votre quota sur https://console.mistral.ai/usage
3. Passer à un plan payant si nécessaire

### ❌ Erreur 500/502/503

**Problème :** Problème serveur Mistral

**Solutions :**
1. Réessayer dans quelques minutes
2. Vérifier le status : https://status.mistral.ai/
3. Contacter le support Mistral si le problème persiste

### ❌ "MISTRAL_API_KEY n'est pas définie"

**Problème :** Variable d'environnement non définie

**Solutions :**
1. Définir la variable : `export MISTRAL_API_KEY='sk-...'`
2. Ou créer un fichier `.env` avec la clé
3. Redémarrer le terminal après avoir défini la variable

---

## 🎯 Tester le Chatbot sur le Site

Une fois que l'API fonctionne :

### 1. Démarrer le serveur de développement
```bash
npm run dev
```

### 2. Ouvrir le site
```
http://localhost:4321
```

### 3. Tester le chatbot
- Cliquer sur l'icône ✨ en bas à droite
- Envoyer un message : "Bonjour !"
- Vérifier que le chatbot répond

### 4. Questions de test suggérées
```
✅ "Bonjour !"
✅ "Quels sont vos services ?"
✅ "Combien coûte le plan Business ?"
✅ "Comment fonctionne un micro-agent ?"
✅ "Quel est le délai de déploiement ?"
✅ "Je veux une démo"
```

---

## 📊 Vérifier l'Usage

### Dashboard Mistral
1. Aller sur https://console.mistral.ai/usage
2. Voir le nombre de requêtes
3. Voir les tokens utilisés
4. Voir les coûts

### Logs en temps réel
```bash
# Voir les logs du serveur de développement
npm run dev

# Dans un autre terminal, surveiller les requêtes
tail -f .astro/logs/dev.log
```

---

## 💡 Conseils

### ✅ Bonnes Pratiques

1. **Tester d'abord avec le script**
   - Valider que l'API fonctionne
   - Avant de tester sur le site

2. **Surveiller l'usage**
   - Vérifier régulièrement le dashboard
   - Configurer des alertes de budget

3. **Sécuriser la clé**
   - Ne jamais commiter dans Git
   - Utiliser des variables d'environnement
   - Rotation tous les 3-6 mois

4. **Optimiser les coûts**
   - Utiliser `mistral-tiny` pour les tests
   - Limiter `max_tokens` si possible
   - Implémenter un cache pour les questions fréquentes

### 🎨 Personnaliser le Chatbot

Modifier le prompt system dans `src/pages/api/mistral-chat.ts` :

```typescript
{
  role: 'system',
  content: `
    Tu es un assistant IA pour ZyatrIA Global.
    
    [Ajouter vos instructions personnalisées ici]
    
    - Ton de voix : [professionnel/amical/technique]
    - Longueur des réponses : [courtes/détaillées]
    - Utilisation d'emojis : [oui/non]
  `
}
```

---

## 📚 Ressources

- **Documentation Mistral** : https://docs.mistral.ai/
- **API Reference** : https://docs.mistral.ai/api/
- **Console Mistral** : https://console.mistral.ai/
- **Status Page** : https://status.mistral.ai/
- **Pricing** : https://mistral.ai/pricing/

---

## 🎯 Checklist Complète

- [ ] Obtenir la clé API Mistral
- [ ] Définir `MISTRAL_API_KEY` dans `.env`
- [ ] Lancer le script de test
- [ ] Vérifier que tous les tests passent
- [ ] Démarrer le serveur de développement
- [ ] Tester le chatbot sur le site
- [ ] Vérifier l'usage dans le dashboard
- [ ] Configurer Cloudflare pour la production
- [ ] Déployer en production
- [ ] Tester en production

---

**Besoin d'aide ?**
- 📧 Email : ZyatrIA.contact@gmail.com
- 📞 Téléphone : +1 (438) 887-4507
- 📚 Documentation : 🔑_CONFIGURATION_MISTRAL_API.md
