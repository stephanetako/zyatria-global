# 🚀 ZyatrIA Worker - Chatbot RAG avec Vectorize

Worker Cloudflare avec recherche vectorielle (RAG), Claude 3.5 Sonnet, Mistral Large et API Pexels.

## 📋 Architecture

```
┌────────────────────────────────────────────┐
│  [Z] ZyatrIA Global    Services  Agents   │ ← Navigation claire
│                        Roadmap  Tarifs  FR│
├────────────────────────────────────────────┤
│                                            │
│  ⚡ Déploiement en 7-15 jours               │
│                                            │
│  Déployez des agents IA intelligents       │ ← Titre gradient bleu/cyan
│  en 7-15 jours                             │
│                                            │
│  Automatisez vos processus...              │ ← Sous-titre
│                                            │
│  [Démarrer démo]  [Voir tarifs]            │ ← Boutons
│                                            │
│  7-15j   24/7   4 langues   -70%           │ ← Compteurs animés
│                                            │
│  [🎯 Lead]  [💬 Réponse]  [📈 +265%]      │ ← Cartes flottantes animées
│                                            │
├────────────────────────────────────────────┤
│                                            │
│  NOS SOLUTIONS                             │
│  Un écosystème IA complet                  │
│                                            │
│  [🤖 Agents IA] [⚡ Auto] [🚀 Micro-agents]│ ← 3 cartes glassmorphism
│                                            │
├────────────────────────────────────────────┤
│  MICRO-AGENTS (Bento Grid 6 cartes)        │
│  [🎯 Lead] [💬 Support] [📅 RDV]           │
│  [📨 Suivi] [🏠 Immo]  [🛒 Commerce]      │
│                                            │
├───────────────────────────��────────────────┤
│  ROADMAP (timeline animée)                 │
│  🎯 Maintenant → 🚀 60j → 🌟 90j          │
│                                            │
├────────────────────────────────────────────┤
│  TARIFS (3 cartes)                         │
│  Starter 102$ | Pro 146$ | Enterprise      │
│                                            │
├────────────────────────────────────────────┤
│  SIMULATEUR ROI (interactif)               │ ← Nouveau
│  Vous entrez vos chiffres → économies      │
│                                            │
├────────────────────────────────────────────┤
│  DIAGNOSTIC IA (5 questions)               │ ← Nouveau
│  → Recommandation automatique              │
│                                            │
├────────────────────────────────────────────┤
│  TÉMOIGNAGES (3 clients)                   │
│  FAQ (6 questions)                         │
│  CTA final                                 │
���  Footer                                    │
│                                            │
│                              [💬 Chatbot]  │ ← Bouton flottant
└────────────────────────────────────────────┘
```

## 🎯 Fonctionnalités

### 🤖 Chatbot Intelligent
- **RAG (Retrieval-Augmented Generation)** avec Vectorize
- **Claude 3.5 Sonnet** (IA principale)
- **Mistral Large** (fallback)
- **Multilingue** (FR/EN automatique)
- **Recherche vectorielle** dans la base de connaissances

### 🖼️ API Images
- **Proxy Pexels** pour images dynamiques
- Route `/image?q=technology`

### 📊 Sections du Site

1. **Hero** - Déploiement 7-15 jours, compteurs animés
2. **Solutions** - 3 cartes glassmorphism (Agents IA, Automatisation, Micro-agents)
3. **Micro-Agents** - Bento Grid 6 cartes (Lead, Support, RDV, Suivi, Immo, Commerce)
4. **Roadmap** - Timeline animée (Maintenant → 60j → 90j)
5. **Tarifs** - 3 plans (Starter 102$, Pro 146$, Enterprise)
6. **Simulateur ROI** - Calculateur interactif d'économies
7. **Diagnostic IA** - 5 questions → recommandation automatique
8. **Témoignages** - 3 clients
9. **FAQ** - 6 questions
10. **CTA Final** - Appel à l'action
11. **Footer** - Liens et contact
12. **Chatbot** - Bouton flottant en bas à droite

## 🚀 Installation

### 1. Configurer les secrets

**Linux/Mac :**
```bash
chmod +x setup-secrets.sh
./setup-secrets.sh
```

**Windows PowerShell :**
```powershell
.\setup-secrets.ps1
```

**Ou manuellement :**
```bash
npx wrangler secret put CLAUDE_API_KEY
npx wrangler secret put MISTRAL_API_KEY
npx wrangler secret put PEXELS_API_KEY
```

### 2. Créer l'index Vectorize

```bash
npx wrangler vectorize create zyatria-knowledge --dimensions=1024 --metric=cosine
```

### 3. Déployer

**Linux/Mac :**
```bash
chmod +x deploy.sh
./deploy.sh
```

**Windows PowerShell :**
```powershell
.\deploy.ps1
```

**Ou manuellement :**
```bash
# Déployer le worker
npx wrangler deploy

# Charger la base de connaissances
npx wrangler vectorize insert zyatria-knowledge --file=knowledge.json
```

## 📡 API Routes

### POST /chat
Chatbot avec RAG

**Request :**
```json
{
  "messages": [
    {"role": "user", "content": "Bonjour"}
  ],
  "lang": "fr"
}
```

**Response :**
```json
{
  "reply": "Bonjour ! Je suis Zyra, votre assistante IA..."
}
```

### GET /image?q=technology
Proxy Pexels pour images

**Response :**
```json
{
  "url": "https://images.pexels.com/photos/..."
}
```

## 🧪 Tests

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

## 🔑 Clés API Requises

1. **Claude API Key** - https://console.anthropic.com/
2. **Mistral API Key** - https://console.mistral.ai/
3. **Pexels API Key** - https://www.pexels.com/api/ (gratuit)

## 📚 Base de Connaissances

Le fichier `knowledge.json` doit contenir vos données au format :

```json
{
  "vectors": [
    {
      "id": "1",
      "values": [...], // embedding 1024 dimensions
      "metadata": {
        "text": "Contenu de votre documentation..."
      }
    }
  ]
}
```

## 🎨 Design System

- **Couleurs** : Gradient bleu/cyan pour les titres
- **Cartes** : Glassmorphism avec ombres douces
- **Animations** : Compteurs, cartes flottantes, timeline
- **Responsive** : Mobile-first design
- **Accessibilité** : WCAG AA compliant

## 🔧 Configuration

### wrangler.toml
```toml
name = "zyatria-api"
main = "index.js"
compatibility_date = "2024-10-01"

[ai]
binding = "AI"

[[vectorize]]
binding = "VECTORIZE"
index_name = "zyatria-knowledge"
```

## 📊 Performance

- **Latence** : < 500ms (avec cache)
- **Disponibilité** : 99.9% (Cloudflare Workers)
- **Scalabilité** : Automatique (serverless)
- **Coût** : Pay-as-you-go

## 🛠️ Maintenance

### Mettre à jour la base de connaissances
```bash
npx wrangler vectorize insert zyatria-knowledge --file=knowledge.json
```

### Voir les logs
```bash
npx wrangler tail
```

### Supprimer l'index
```bash
npx wrangler vectorize delete zyatria-knowledge
```

## 📞 Support

- **Email** : ZyatrIA.contact@gmail.com
- **Téléphone** : +1 438 887 4507
- **Site** : https://zyatria-global-cve.pages.dev

## 📄 Licence

© 2024 ZyatrIA Global - Tous droits réservés
