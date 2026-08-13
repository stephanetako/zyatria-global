# 🚀 Déployer le Chatbot Mistral - Guide Rapide

## ⚡ Déploiement en 3 Commandes

### 1. **Build le Projet**

```bash
npm run build
```

✅ Vérifie que le build se termine sans erreur

### 2. **Déployer sur Cloudflare Pages**

```bash
wrangler pages deploy dist
```

✅ Suis les instructions à l'écran

### 3. **Vérifier le Déploiement**

Ouvre ton site et teste le chatbot !

---

## 🔍 Vérification Post-Déploiement

### 1. **Tester le Chatbot**

1. Ouvre ton site déployé
2. Clique sur l'icône du chatbot (en bas à droite)
3. Envoie un message : "Bonjour, peux-tu m'aider ?"
4. Vérifie que tu reçois une réponse intelligente

### 2. **Vérifier les Logs Cloudflare**

1. Va sur le **Dashboard Cloudflare Pages**
2. Sélectionne ton projet **zyatria-global**
3. Va dans **Observability** > **Logs**
4. Cherche ces messages :

```
🔑 Clé API trouvée via locals.runtime.env (Cloudflare Workers)
✅ Réponse Mistral reçue avec succès
```

### 3. **Tester les Fonctionnalités**

#### ✅ Test 1 : Réponse Normale
- **Message :** "Quels sont vos services ?"
- **Attendu :** Réponse détaillée sur les services ZyatrIA

#### ✅ Test 2 : Cache
- **Message :** "Quels sont vos services ?" (même message)
- **Attendu :** Réponse instantanée (depuis le cache)
- **Log attendu :** `💾 Réponse trouvée dans le cache`

#### ✅ Test 3 : Rate Limiting
- **Action :** Envoie 15 messages rapidement
- **Attendu :** Après 10 messages, tu reçois un message de patience
- **Log attendu :** `⏱️ Rate limit atteint`

---

## 🐛 Dépannage

### Problème : "API key not configured"

**Solution :**
1. Vérifie que `MISTRAL_API_KEY` est bien configurée sur Cloudflare
2. Va dans **Settings** > **Environment variables**
3. Vérifie que la variable existe et est de type `secret_text`

### Problème : Réponses Fallback Uniquement

**Symptôme :** Le chatbot répond toujours avec des messages génériques

**Solution :**
1. Vérifie les logs Cloudflare
2. Cherche `❌ Configuration manquante`
3. Si présent, vérifie que `platformProxy.enabled = true` dans `astro.config.mjs`

### Problème : Rate Limit Trop Strict

**Symptôme :** Le chatbot bloque après quelques messages

**Solution :**
1. C'est normal ! Le rate limiting protège ton quota API
2. Attends 60 secondes entre les tests
3. Ou augmente la limite dans `src/lib/rate-limiter.ts`

---

## 📊 Statistiques du Chatbot

Après quelques jours d'utilisation, vérifie les stats dans les logs :

```
📊 Cache stats: 45 hits, 12 misses, 78.9% hit rate
⏱️ Rate limiter: 127 requêtes, 3 bloquées
```

**Interprétation :**
- **Hit rate élevé (>70%)** = Bon cache, économie d'API calls
- **Requêtes bloquées** = Protection active contre les abus

---

## 🎯 Checklist Finale

Avant de considérer le déploiement comme réussi :

- [ ] Build sans erreur
- [ ] Déploiement Cloudflare réussi
- [ ] Chatbot visible sur le site
- [ ] Réponse intelligente reçue (pas fallback)
- [ ] Logs Cloudflare montrent `🔑 Clé API trouvée`
- [ ] Cache fonctionne (réponse instantanée au 2e message identique)
- [ ] Rate limiting actif (message de patience après 10 requêtes)

---

## 🎉 Succès !

Si tous les tests passent, ton chatbot Mistral est **100% opérationnel** ! 🚀

### Prochaines Étapes

1. **Monitorer les logs** pendant 24h pour détecter les problèmes
2. **Ajuster le rate limiting** si nécessaire
3. **Personnaliser les réponses fallback** dans `src/pages/api/mistral-chat.ts`
4. **Ajouter des analytics** pour suivre l'utilisation

---

**Date :** 2025-01-27  
**Status :** 🚀 Prêt pour déploiement
