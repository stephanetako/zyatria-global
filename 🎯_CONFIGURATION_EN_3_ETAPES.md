# 🎯 CONFIGURATION EN 3 ÉTAPES

## ✅ Fichier .env créé !

Le fichier `.env` a été créé à la racine du projet. Il ne reste plus qu'à ajouter votre clé API Mistral.

---

## 📋 ÉTAPE 1 : OBTENIR LA CLÉ API (5 minutes)

### 🌐 Aller sur Mistral AI

**URL :** https://console.mistral.ai/

### 📝 Créer un compte

1. Cliquez sur **"Sign Up"**
2. Entrez votre email
3. Créez un mot de passe
4. Confirmez votre email

### 🔑 Créer une clé API

1. Une fois connecté, allez dans **"API Keys"** (menu de gauche)
2. Cliquez sur **"Create new key"**
3. Donnez un nom : **"ZyatrIA Production"**
4. Cliquez sur **"Create"**
5. **COPIEZ LA CLÉ IMMÉDIATEMENT** (vous ne pourrez plus la voir après !)

**Format de la clé :** `sk-abc123def456ghi789...`

⚠️ **IMPORTANT** : La clé commence toujours par `sk-`

---

## 📝 ÉTAPE 2 : MODIFIER LE FICHIER .env (1 minute)

### Option A : Éditeur de texte (Recommandé)

1. **Ouvrir le fichier `.env`** à la racine du projet
2. **Remplacer** `votre_clé_api_ici` par votre vraie clé
3. **Sauvegarder** le fichier

**Avant :**
```env
MISTRAL_API_KEY=votre_clé_api_ici
```

**Après :**
```env
MISTRAL_API_KEY=sk-abc123def456ghi789jkl012mno345pqr678stu901vwx234yz
```

### Option B : Ligne de commande

```bash
# Remplacez sk-VOTRE_CLE par votre vraie clé
echo "MISTRAL_API_KEY=sk-abc123def456..." > .env
```

---

## 🧪 ÉTAPE 3 : TESTER (2 minutes)

### Test automatique

Exécutez le script de vérification :

```bash
./test-mistral-config.sh
```

**Résultat attendu :**
```
✅ Fichier .env trouvé
✅ MISTRAL_API_KEY est défini
✅ Format correct
```

### Test manuel

1. **Ouvrir le preview** (le serveur est déjà en cours)
2. **Cliquer sur l'icône ✨** en bas à droite (chatbot)
3. **Poser une question :** "Quels sont vos services ?"
4. **Vérifier la réponse :**
   - ✅ Réponse intelligente et détaillée → **Configuration OK !**
   - ❌ Message de fallback générique → **Vérifier la clé**

### Vérifier les logs

Dans la console du serveur, vous devriez voir :

```
🚀 Appel API Mistral
✅ Réponse reçue de Mistral
💾 Mise en cache de la réponse
```

Si vous voyez une erreur :
```
❌ Erreur API Mistral: 401 Unauthorized
```
→ La clé est invalide, vérifiez-la dans `.env`

---

## 🎉 C'EST TOUT !

### Checklist finale :

- [ ] Compte Mistral créé
- [ ] Clé API créée et copiée
- [ ] Fichier `.env` modifié
- [ ] Script de test exécuté avec succès
- [ ] Chatbot testé et fonctionne

---

## 🚀 PROCHAINES ÉTAPES

### 1️⃣ Tester le cache (2 minutes)

1. Poser une question : "Quels sont vos services ?"
2. Attendre la réponse (1-2 secondes)
3. Poser **LA MÊME question**
4. Vérifier : La 2ème réponse doit être **instantanée** (<10ms) ⚡

**Dans les logs, vous devriez voir :**
```
💾 Cache HIT pour la question normalisée
⚡ Réponse depuis le cache (0.005s)
```

### 2️⃣ Vérifier les statistiques (1 minute)

Ouvrir dans le navigateur : `/api/cache-stats`

**Résultat attendu :**
```json
{
  "stats": {
    "size": 2,
    "maxSize": 100,
    "hits": 1,
    "misses": 1,
    "hitRate": 50.0,
    "usage": "2%"
  },
  "topQuestions": [
    {
      "question": "quels sont vos services ?",
      "hits": 1,
      "age": 123
    }
  ]
}
```

### 3️⃣ Préparer le déploiement

Une fois que tout fonctionne localement :

1. Lire le guide : `🚀_DEPLOIEMENT_MAINTENANT.md`
2. Installer Wrangler CLI
3. Configurer Cloudflare Workers
4. Déployer en production

---

## 🔍 DÉPANNAGE

### Problème : "401 Unauthorized"

**Cause :** Clé API invalide

**Solutions :**
1. Vérifier que la clé commence par `sk-`
2. Vérifier qu'il n'y a pas d'espaces avant/après
3. Créer une nouvelle clé sur console.mistral.ai
4. Remplacer dans `.env`
5. Exécuter `./test-mistral-config.sh`

### Problème : "API key not found"

**Cause :** Le fichier `.env` n'est pas lu

**Solutions :**
1. Vérifier que `.env` est à la racine du projet
2. Vérifier que la ligne commence par `MISTRAL_API_KEY=`
3. Pas de guillemets autour de la clé
4. Pas d'espaces

### Problème : Messages de fallback uniquement

**Cause :** La clé n'est pas configurée ou invalide

**Solutions :**
1. Ouvrir `.env` et vérifier la clé
2. Exécuter `./test-mistral-config.sh`
3. Vérifier les logs du serveur
4. Tester avec une nouvelle clé

---

## 💡 CONSEILS

### Sécurité :
- ⚠️ **Ne jamais commiter `.env` dans Git** (déjà dans `.gitignore`)
- ⚠️ **Ne jamais partager votre clé API**
- ⚠️ **Utiliser des clés différentes pour dev/prod**

### Coûts :
- 💰 **Crédits gratuits** : Mistral offre des crédits pour tester
- 💰 **Avec cache** : Économie de 50-70% sur les coûts
- 💰 **Coût moyen** : ~0.001€ par requête (avec cache)

### Performance :
- ⚡ **1ère requête** : 1-2s (appel API)
- ⚡ **Requêtes suivantes** : <10ms (cache)
- ⚡ **Hit Rate attendu** : 60-80%

---

## 📊 RÉSUMÉ

| Étape | Temps | Status |
|-------|-------|--------|
| 1. Obtenir clé API | 5 min | ⏳ À faire |
| 2. Modifier .env | 1 min | ⏳ À faire |
| 3. Tester | 2 min | ⏳ À faire |
| **TOTAL** | **8 min** | |

---

## 🎯 PROCHAINE ÉTAPE

**Une fois la configuration terminée :**

→ Lire : `✅_TOUT_EST_PRET.md` pour les prochaines étapes

→ Ou directement : Tester le cache et préparer le déploiement

**Votre système sera alors 100% opérationnel ! 🚀**
