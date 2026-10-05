# 🚀 WORKER RAG CLOUDFLARE - DÉMARRAGE RAPIDE

## ✅ FICHIERS CRÉÉS (7/7)

Tous les fichiers du Worker avec RAG (Vectorize) ont été créés dans `worker-chat/` :

```
worker-chat/
├── index.js              ✅ Worker principal (RAG + Claude + Mistral + Pexels)
├── wrangler.toml         ✅ Configuration Cloudflare
├── setup-secrets.sh      ✅ Script configuration secrets (Linux/Mac)
├── setup-secrets.ps1     ✅ Script configuration secrets (Windows)
├── deploy.sh             ✅ Script déploiement (Linux/Mac)
├── deploy.ps1            ✅ Script déploiement (Windows)
└── README.md             ✅ Documentation complète
```

---

## 🎯 DÉMARRAGE EN 3 ÉTAPES

### ÉTAPE 1 : Configurer les secrets (5 min)

**Windows PowerShell :**
```powershell
cd worker-chat
.\setup-secrets.ps1
```

**Linux/Mac :**
```bash
cd worker-chat
chmod +x setup-secrets.sh
./setup-secrets.sh
```

**Ou manuellement :**
```bash
npx wrangler secret put CLAUDE_API_KEY
npx wrangler secret put MISTRAL_API_KEY
npx wrangler secret put PEXELS_API_KEY
```

### ÉTAPE 2 : Créer l'index Vectorize (1 min)

```bash
npx wrangler vectorize create zyatria-knowledge --dimensions=1024 --metric=cosine
```

### ÉTAPE 3 : Déployer (2 min)

**Windows PowerShell :**
```powershell
.\deploy.ps1
```

**Linux/Mac :**
```bash
chmod +x deploy.sh
./deploy.sh
```

**Ou manuellement :**
```bash
npx wrangler deploy
```

---

## 🧪 TESTER LE WORKER

### Test du chatbot
```bash
curl -X POST https://zyatria-api.<votre-subdomain>.workers.dev/chat \
  -H "Content-Type: application/json" \
  -d '{"messages":[{"role":"user","content":"Bonjour"}],"lang":"fr"}'
```

### Test de l'API images
```bash
curl https://zyatria-api.<votre-subdomain>.workers.dev/image?q=technology
```

---

## 🔑 CLÉS API REQUISES

1. **Claude API Key** → https://console.anthropic.com/
2. **Mistral API Key** → https://console.mistral.ai/
3. **Pexels API Key** → https://www.pexels.com/api/ (gratuit)

---

## 🎨 ARCHITECTURE DU SITE

```
┌────────────────────────────────────────────┐
│  [Z] ZyatrIA Global    Services  Agents   │
│                        Roadmap  Tarifs  FR│
├────────────────────────────────────────────┤
│  ⚡ Déploiement en 7-15 jours               │
│  Déployez des agents IA intelligents       │
│  [Démarrer démo]  [Voir tarifs]            │
│  7-15j   24/7   4 langues   -70%           │
│  [🎯 Lead]  [💬 Réponse]  [📈 +265%]      │
├────────────────────────────────────────────┤
│  NOS SOLUTIONS                             │
│  [🤖 Agents IA] [⚡ Auto] [🚀 Micro-agents]│
├────────────────────────────────────────────┤
│  MICRO-AGENTS (Bento Grid)                 │
│  [🎯 Lead] [💬 Support] [📅 RDV]           │
│  [📨 Suivi] [🏠 Immo]  [🛒 Commerce]      │
├────────────────────────────────────────────┤
│  ROADMAP (timeline animée)                 │
│  🎯 Maintenant → 🚀 60j → 🌟 90j          │
├────────────────────────────────────────────┤
│  TARIFS (3 cartes)                         │
│  Starter 102$ | Pro 146$ | Enterprise      │
├────────────────────────────────────────────┤
│  SIMULATEUR ROI (interactif)               │
│  DIAGNOSTIC IA (5 questions)               │
│  TÉMOIGNAGES + FAQ + CTA + Footer          │
│                              [💬 Chatbot]  │
└────────────────────────────────────────────┘
```

---

## 🚀 FONCTIONNALITÉS DU WORKER

### ✅ Chatbot Intelligent
- **RAG** avec recherche vectorielle (Vectorize)
- **Claude 3.5 Sonnet** (IA principale)
- **Mistral Large** (fallback automatique)
- **Multilingue** (FR/EN)
- **Réponses courtes** (2-4 phrases)

### ✅ API Images
- **Proxy Pexels** pour images dynamiques
- Route `/image?q=technology`

### ✅ Routes API

**POST /chat** - Chatbot avec RAG
```json
{
  "messages": [{"role": "user", "content": "Bonjour"}],
  "lang": "fr"
}
```

**GET /image?q=...** - Images Pexels
```json
{
  "url": "https://images.pexels.com/..."
}
```

---

## 📊 PROCHAINES ÉTAPES

### 1. Créer la base de connaissances
Créez un fichier `knowledge.json` avec vos données :
```json
{
  "vectors": [
    {
      "id": "1",
      "values": [...],
      "metadata": {"text": "Votre documentation..."}
    }
  ]
}
```

### 2. Charger dans Vectorize
```bash
npx wrangler vectorize insert zyatria-knowledge --file=knowledge.json
```

### 3. Intégrer au site
Le chatbot existant (`EnhancedClaudeChatBot`) peut être connecté à ce Worker :
```typescript
const response = await fetch('https://zyatria-api.<subdomain>.workers.dev/chat', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ messages, lang: 'fr' })
});
```

---

## 🎯 AVANTAGES DU WORKER RAG

✅ **Recherche vectorielle** - Réponses basées sur votre documentation
✅ **Dual AI** - Claude + Mistral pour haute disponibilité
✅ **Serverless** - Scalabilité automatique
✅ **Rapide** - < 500ms avec cache
✅ **Économique** - Pay-as-you-go
✅ **Multilingue** - FR/EN automatique

---

## 📞 SUPPORT

- **Email** : ZyatrIA.contact@gmail.com
- **Téléphone** : +1 438 887 4507
- **Documentation** : `worker-chat/README.md`

---

## ✅ RÉCAPITULATIF

| Étape | Commande | Durée |
|-------|----------|-------|
| 1. Secrets | `./setup-secrets.sh` | 5 min |
| 2. Vectorize | `wrangler vectorize create` | 1 min |
| 3. Déployer | `./deploy.sh` | 2 min |
| **TOTAL** | | **8 min** |

🚀 **Votre Worker RAG sera en ligne en moins de 10 minutes !**
