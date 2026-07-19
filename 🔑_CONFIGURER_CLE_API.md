# 🔑 CONFIGURATION DE LA CLÉ API MISTRAL

## ✅ Fichier .env créé !

Le fichier `.env` a été créé à la racine du projet.

---

## 🎯 PROCHAINES ÉTAPES

### 1️⃣ Obtenir votre clé API Mistral

#### Option A : Compte gratuit (Recommandé pour tester)

1. **Aller sur :** https://console.mistral.ai/
2. **Créer un compte :**
   - Cliquez sur "Sign Up"
   - Utilisez votre email
   - Confirmez votre compte par email

3. **Créer une clé API :**
   - Une fois connecté, allez dans "API Keys"
   - Cliquez sur "Create new key"
   - Donnez un nom : "ZyatrIA Production"
   - **Copiez la clé immédiatement** (elle commence par `sk-...`)

4. **Crédits gratuits :**
   - Mistral offre des crédits gratuits pour commencer
   - Suffisant pour tester le système

#### Option B : Compte payant (Pour production)

1. Même processus que l'option A
2. Ajouter une carte de crédit dans "Billing"
3. Coût : ~0.002€ par requête (avec cache = 50% d'économie)

---

### 2️⃣ Modifier le fichier .env

Le fichier `.env` est à la racine du projet. Vous devez remplacer `votre_clé_api_ici` par votre vraie clé.

#### Méthode 1 : Éditeur de texte

1. Ouvrir le fichier `.env` dans votre éditeur
2. Remplacer `votre_clé_api_ici` par votre clé
3. Sauvegarder

**Exemple :**
```env
# AVANT
MISTRAL_API_KEY=votre_clé_api_ici

# APRÈS
MISTRAL_API_KEY=sk-abc123def456ghi789jkl012mno345pqr678stu901vwx234yz
```

#### Méthode 2 : Ligne de commande

```bash
# Remplacez SK_VOTRE_CLE par votre vraie clé
echo "MISTRAL_API_KEY=sk-abc123..." > .env
```

---

### 3️⃣ Vérifier la configuration

Une fois la clé ajoutée, vérifiez que tout est correct :

```bash
# Vérifier que le fichier existe
cat .env

# Devrait afficher :
# MISTRAL_API_KEY=sk-abc123...
```

⚠️ **IMPORTANT** : 
- La clé doit commencer par `sk-`
- Pas d'espaces avant ou après
- Pas de guillemets

---

## 🧪 TESTER LA CONFIGURATION

### Test 1 : Vérifier que la clé est chargée

Le serveur de développement est déjà en cours d'exécution. Une fois que vous avez modifié le fichier `.env`, le serveur devrait automatiquement recharger la configuration.

### Test 2 : Tester le chatbot

1. **Ouvrir le preview** (le site est déjà en cours d'exécution)
2. **Cliquer sur l'icône ✨** en bas à droite
3. **Poser une question :** "Quels sont vos services ?"
4. **Vérifier la réponse :**
   - ✅ Si vous obtenez une réponse intelligente → La clé fonctionne !
   - ❌ Si vous obtenez un message de fallback → Vérifier la clé

### Test 3 : Vérifier les logs

Dans la console du serveur, vous devriez voir :
```
🚀 Appel API Mistral
✅ Réponse reçue de Mistral
💾 Mise en cache de la réponse
```

Si vous voyez :
```
❌ Erreur API Mistral: 401 Unauthorized
```
→ La clé est invalide, vérifiez-la

---

## 🔍 DÉPANNAGE

### Problème 1 : "401 Unauthorized"

**Cause :** Clé API invalide ou expirée

**Solution :**
1. Vérifier que la clé commence par `sk-`
2. Vérifier qu'il n'y a pas d'espaces
3. Créer une nouvelle clé sur console.mistral.ai
4. Remplacer dans `.env`

### Problème 2 : "API key not found"

**Cause :** Le fichier `.env` n'est pas lu

**Solution :**
1. Vérifier que le fichier `.env` est à la racine du projet
2. Vérifier que la ligne commence par `MISTRAL_API_KEY=`
3. Redémarrer le serveur si nécessaire

### Problème 3 : Messages de fallback uniquement

**Cause :** La clé n'est pas configurée ou invalide

**Solution :**
1. Ouvrir `.env`
2. Vérifier que `MISTRAL_API_KEY` est défini
3. Vérifier que la clé est valide
4. Tester avec une nouvelle clé

---

## 📊 VÉRIFICATION FINALE

### Checklist :

- [ ] Compte Mistral créé
- [ ] Clé API créée et copiée
- [ ] Fichier `.env` modifié avec la vraie clé
- [ ] Clé commence par `sk-`
- [ ] Pas d'espaces ou de guillemets
- [ ] Chatbot testé et fonctionne
- [ ] Logs montrent "✅ Réponse reçue de Mistral"

---

## 🎯 PROCHAINE ÉTAPE

Une fois la clé configurée et testée :

1. **Tester le cache :**
   - Poser la même question 2 fois
   - La 2ème réponse doit être instantanée

2. **Vérifier les statistiques :**
   - Ouvrir `/api/cache-stats` dans le navigateur
   - Voir les hits/misses

3. **Préparer le déploiement :**
   - Lire `🚀_DEPLOIEMENT_MAINTENANT.md`
   - Configurer Cloudflare Workers

---

## 💡 CONSEILS

### Sécurité :
- ⚠️ **Ne jamais commiter le fichier `.env` dans Git**
- ⚠️ **Ne jamais partager votre clé API**
- ⚠️ **Utiliser des clés différentes pour dev/prod**

### Coûts :
- 💰 **Crédits gratuits** : Suffisants pour tester
- 💰 **Avec cache** : Économie de 50-70%
- 💰 **Coût moyen** : ~0.001€ par requête (avec cache)

### Performance :
- ⚡ **Cache HIT** : <10ms (gratuit)
- ⚡ **Cache MISS** : 1-2s (coût API)
- ⚡ **Hit Rate attendu** : 60-80%

---

## 🎉 C'EST TOUT !

Une fois la clé configurée, votre système sera **100% opérationnel** !

**Prochaine étape :** Tester le chatbot et vérifier que tout fonctionne ! 🚀
