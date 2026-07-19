# 🔑 Configuration de l'API Mistral

## 📋 Étapes de Configuration

### 1️⃣ Obtenir votre clé API Mistral

1. **Créer un compte Mistral AI :**
   - Aller sur : https://console.mistral.ai/
   - Créer un compte gratuit
   - Vérifier votre email

2. **Générer une clé API :**
   - Aller dans "API Keys" dans le menu
   - Cliquer sur "Create new key"
   - Copier la clé (elle commence par `sk-...`)
   - ⚠️ **IMPORTANT** : Sauvegarder la clé immédiatement, elle ne sera plus visible !

### 2️⃣ Configuration Locale (.env)

Créer/modifier le fichier `.env` à la racine du projet :

```bash
# API Mistral
MISTRAL_API_KEY=sk-VOTRE_CLE_API_ICI
```

**Exemple :**
```bash
MISTRAL_API_KEY=sk-abc123def456ghi789jkl012mno345pqr678stu901vwx234yz
```

### 3️⃣ Configuration Cloudflare (Production)

#### Via le Dashboard Cloudflare :

1. **Aller dans votre projet Cloudflare Pages**
2. **Settings → Environment Variables**
3. **Ajouter la variable :**
   - Name : `MISTRAL_API_KEY`
   - Value : `sk-VOTRE_CLE_API_ICI`
   - Environment : `Production` et `Preview`
4. **Sauvegarder**
5. **Redéployer** votre application

#### Via Wrangler CLI :

```bash
# Ajouter la variable d'environnement
wrangler pages secret put MISTRAL_API_KEY

# Quand demandé, coller votre clé API
# Puis appuyer sur Entrée deux fois
```

### 4️⃣ Vérification de la Configuration

#### Test Local :

```bash
# Démarrer le serveur de développement
npm run dev

# Ouvrir le site dans votre navigateur
# Cliquer sur le chatbot en bas à droite
# Envoyer un message de test : "Bonjour !"
```

#### Test de l'API directement :

```bash
# Test avec curl
curl -X POST http://localhost:4321/api/mistral-chat \
  -H "Content-Type: application/json" \
  -d '{"messages":[{"role":"user","content":"Bonjour !"}]}'
```

**Réponse attendue :**
```json
{
  "response": "Bonjour ! 👋 Comment puis-je vous aider aujourd'hui ?"
}
```

## 🎯 Configuration de l'API

### Modèle Utilisé : `mistral-medium`

**Caractéristiques :**
- ⚡ **Performance** : Équilibre parfait entre vitesse et qualité
- 💰 **Coût** : ~$0.002 par 1K tokens (très abordable)
- 🧠 **Intelligence** : Comprend le contexte et les nuances
- 🌍 **Multilingue** : Excellent en français et anglais

### Paramètres :

```typescript
{
  model: 'mistral-medium',
  messages: [...],
  temperature: 0.7,      // Créativité modérée
  max_tokens: 800        // Réponses complètes
}
```

### Prompt System :

Le chatbot est configuré avec un prompt system complet qui inclut :

✅ **Informations sur ZyatrIA Global :**
- Localisation (Québec, Canada)
- Services offerts
- Plans tarifaires
- Secteurs d'expertise
- Coordonnées de contact

✅ **Instructions comportementales :**
- Courtois et professionnel
- Concis mais informatif
- Utilise des emojis
- Propose des démos gratuites
- Répond en français ou anglais selon le contexte

## 🔒 Sécurité

### ✅ Bonnes Pratiques :

1. **Ne jamais commiter la clé API dans Git**
   - Le fichier `.env` est dans `.gitignore`
   - Utiliser des variables d'environnement

2. **Rotation des clés**
   - Changer la clé tous les 3-6 mois
   - Révoquer immédiatement si compromise

3. **Limites de taux**
   - Mistral a des limites par défaut
   - Surveiller l'utilisation dans le dashboard

4. **Validation côté serveur**
   - L'API est appelée uniquement côté serveur
   - Jamais exposée au client

### ⚠️ Si la clé est compromise :

1. **Révoquer immédiatement** dans le dashboard Mistral
2. **Générer une nouvelle clé**
3. **Mettre à jour** `.env` et Cloudflare
4. **Redéployer** l'application

## 📊 Monitoring

### Dashboard Mistral :

- **Usage** : https://console.mistral.ai/usage
- **Voir** : Nombre de requêtes, tokens utilisés, coûts
- **Alertes** : Configurer des alertes de budget

### Logs Cloudflare :

```bash
# Voir les logs en temps réel
wrangler pages deployment tail

# Filtrer les erreurs
wrangler pages deployment tail --status error
```

## 🐛 Dépannage

### Erreur : "Configuration manquante"

**Cause :** La clé API n'est pas définie

**Solution :**
1. Vérifier que `MISTRAL_API_KEY` est dans `.env`
2. Redémarrer le serveur de développement
3. Pour production, vérifier Cloudflare Environment Variables

### Erreur : "Erreur API" (502)

**Causes possibles :**
1. Clé API invalide ou révoquée
2. Quota dépassé
3. Problème réseau avec l'API Mistral

**Solutions :**
1. Vérifier la clé dans le dashboard Mistral
2. Vérifier le quota et l'usage
3. Réessayer après quelques minutes

### Erreur : "Erreur serveur" (500)

**Cause :** Erreur interne du serveur

**Solution :**
1. Vérifier les logs : `wrangler pages deployment tail`
2. Vérifier le format des messages envoyés
3. Contacter le support si le problème persiste

## 💡 Conseils d'Optimisation

### 1. Réduire les coûts :

```typescript
// Utiliser mistral-tiny pour les requêtes simples
model: 'mistral-tiny'  // Gratuit jusqu'à 1M tokens/mois

// Limiter max_tokens pour les réponses courtes
max_tokens: 300
```

### 2. Améliorer la qualité :

```typescript
// Augmenter temperature pour plus de créativité
temperature: 0.9

// Augmenter max_tokens pour des réponses détaillées
max_tokens: 1500
```

### 3. Caching :

Implémenter un cache pour les questions fréquentes :

```typescript
// Exemple de cache simple
const cache = new Map();
const cacheKey = messages[messages.length - 1].content;

if (cache.has(cacheKey)) {
  return cache.get(cacheKey);
}

// ... appel API ...

cache.set(cacheKey, response);
```

## 📚 Ressources

- **Documentation Mistral** : https://docs.mistral.ai/
- **API Reference** : https://docs.mistral.ai/api/
- **Pricing** : https://mistral.ai/pricing/
- **Status Page** : https://status.mistral.ai/

## 🎯 Prochaines Étapes

1. ✅ Obtenir la clé API Mistral
2. ✅ Configurer `.env` localement
3. ✅ Tester le chatbot en local
4. ✅ Configurer Cloudflare Environment Variables
5. ✅ Déployer en production
6. ✅ Tester en production
7. ✅ Monitorer l'usage

---

**Besoin d'aide ?**
- 📧 Email : ZyatrIA.contact@gmail.com
- 📞 Téléphone : +1 (438) 887-4507
