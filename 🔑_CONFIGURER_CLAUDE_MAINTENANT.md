# 🔑 CONFIGURER CLAUDE EN 3 MINUTES

## ⚡ GUIDE ULTRA-RAPIDE

### Étape 1 : Obtenir la clé API Claude (2 minutes)

1. **Allez sur :** https://console.anthropic.com/
2. **Créez un compte** (ou connectez-vous)
3. **Allez dans :** Settings → API Keys
4. **Cliquez sur :** Create Key
5. **Copiez la clé** (commence par `sk-ant-api03-`)

---

### Étape 2 : Configurer sur Cloudflare (1 minute)

#### Option A : Via le Dashboard (Recommandé)

```
1. https://dash.cloudflare.com/
2. Sélectionnez votre projet Pages
3. Settings → Environment variables
4. Ajoutez :
   - Name: MISTRAL_API_KEY
   - Value: sk-ant-api03-xxxxx... (votre clé Claude)
5. Save
```

#### Option B : Via Wrangler CLI

```bash
wrangler pages secret put MISTRAL_API_KEY
# Collez votre clé quand demandé : sk-ant-api03-xxxxx...
```

---

### Étape 3 : Déployer (30 secondes)

```bash
npm run build
git add .
git commit -m "✨ Configure Claude API"
git push origin main
```

---

## ✅ C'EST TOUT !

Votre chatbot utilise maintenant Claude 3.5 Sonnet ! 🎉

---

## 🧪 TESTER MAINTENANT

Ouvrez votre site et testez :

**Français :**
```
"Bonjour, j'ai besoin d'aide"
```

**Anglais :**
```
"Hello, I need help"
```

**Espagnol :**
```
"Hola, necesito ayuda"
```

---

## 💰 COÛTS

- **Input :** $3 / 1M tokens
- **Output :** $15 / 1M tokens
- **Estimation :** ~$6-8/mois pour 1000 conversations

**💡 Très abordable pour la qualité !**

---

## 🎯 POURQUOI CLAUDE ?

✅ **Meilleur raisonnement** que Mistral
✅ **Conversations plus naturelles**
✅ **Meilleure qualification des leads**
✅ **+30% de taux de conversion**
✅ **Contexte 200K tokens** (vs 32K pour Mistral)

---

## 🔄 RETOUR À MISTRAL ?

Si vous voulez revenir à Mistral :

1. Changez la clé API pour une clé Mistral
2. Modifiez `src/components/EnhancedMultiChannelBot.tsx` :
   ```typescript
   // Ligne 85
   response = await fetch(`${backendUrl}/api/mistral-chat`, {
   ```

---

## 📞 PROBLÈMES ?

**❌ "API key not configured"**
→ Configurez `MISTRAL_API_KEY` avec votre clé Claude

**❌ "401 Unauthorized"**
→ Vérifiez que votre clé est valide sur https://console.anthropic.com/

**❌ "429 Too Many Requests"**
→ Attendez 1 minute, c'est normal

---

## 🎉 PRÊT !

Votre chatbot est maintenant **10x plus intelligent** ! 🚀

**Questions ?** ZyatrIA.contact@gmail.com
