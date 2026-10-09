# 🤖 Chatbot Zyra - Documentation

## Vue d'ensemble

Zyra est l'assistante IA intelligente de ZyatrIA Global, propulsée par **Mistral AI** et **Claude (Anthropic)** avec système RAG (Retrieval Augmented Generation).

## 🎯 Fonctionnalités

### ✅ Intelligence hybride
- **Mistral AI** (priorité) : Rapide et économique pour les réponses courantes
- **Claude** (fallback) : Intelligence avancée pour les questions complexes
- **RAG** : Recherche dans la base de connaissances pour des réponses précises

### ✅ Multilingue
- Français 🇫🇷
- Anglais 🇬🇧
- Espagnol 🇪🇸
- Portugais 🇵🇹

### ✅ Intégration
- Widget flottant sur toutes les pages
- Page de test dédiée : `/test-chat`
- API REST : `/api/chat`

## 📁 Structure des fichiers

```
src/
├── pages/
│   ├── api/
│   │   └── chat.ts              # API principale (Mistral + Claude + RAG)
│   └── test-chat.astro          # Page de test du chatbot
├── components/
│   └── ChatbotWidget.astro      # Widget flottant
├── data/
│   └── knowledge-base.json      # Base de connaissances (15 entrées)
└── styles/
    └── chatbot-isolation.css    # Styles isolés (legacy)

public/
└── 15-chatbot-widget.html       # Version standalone (legacy)

netlify/
└── functions/
    └── chat.js                  # API Netlify (Mistral uniquement)
```

## 🚀 Utilisation

### 1. Widget sur une page

```astro
---
import ChatbotWidget from '../components/ChatbotWidget.astro';
---

<html>
  <body>
    <!-- Votre contenu -->
    
    <ChatbotWidget />
  </body>
</html>
```

### 2. Appel API direct

```javascript
const response = await fetch('/api/chat', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    messages: [
      { role: 'user', content: 'Quels sont vos tarifs ?' }
    ],
    lang: 'fr' // ou 'en', 'es', 'pt'
  })
});

const data = await response.json();
console.log(data.reply);      // Réponse du chatbot
console.log(data.model);      // 'mistral', 'claude' ou 'fallback'
console.log(data.hasKnowledge); // true si RAG utilisé
```

## 🔧 Configuration

### Variables d'environnement

Fichier `.env` :

```env
MISTRAL_API_KEY="votre_clé_mistral"
CLAUDE_API_KEY="votre_clé_claude"
```

### Base de connaissances

Fichier `src/data/knowledge-base.json` :

```json
[
  {
    "id": "lead",
    "text": "Micro-agent Qualification des leads. Prix 69 dollars CA par mois...",
    "category": "micro-agent"
  },
  {
    "id": "support",
    "text": "Micro-agent Réponses clients 24/7. Prix 69 dollars CA par mois...",
    "category": "micro-agent"
  }
]
```

**Catégories disponibles :**
- `micro-agent` : Descriptions des micro-agents
- `plan` : Plans tarifaires (Starter, Professional, Enterprise)
- `service` : Services additionnels (Audit, Consultation)
- `info` : Informations générales (contact, garantie, langues)

## 🎨 Personnalisation

### Modifier les couleurs

Dans `ChatbotWidget.astro`, section `<style>` :

```css
.chatbot-toggle {
  background: linear-gradient(135deg, #C98769 0%, #A86F53 100%);
}

.chatbot-header {
  background: linear-gradient(135deg, #C98769 0%, #A86F53 100%);
}
```

### Modifier les actions rapides

Dans `ChatbotWidget.astro`, section HTML :

```html
<div class="quick-actions" id="quick-actions">
  <button class="quick-action" data-message="Votre message">🎯 Label</button>
  <button class="quick-action" data-message="Autre message">💡 Autre</button>
</div>
```

### Modifier le prompt système

Dans `src/pages/api/chat.ts`, variable `systemPrompts` :

```typescript
const systemPrompts = {
  fr: `Tu es Zyra, l'assistante IA de ZyatrIA Global...`,
  en: `You are Zyra, the AI assistant of ZyatrIA Global...`,
  // ...
};
```

## 📊 Fonctionnement du RAG

### 1. Recherche de mots-clés

```typescript
function searchKnowledge(query: string): string {
  const keywords = query.toLowerCase().split(' ').filter(w => w.length > 3);
  
  const results = knowledgeBase
    .map(item => {
      const score = keywords.reduce((acc, keyword) => {
        return acc + (item.text.toLowerCase().includes(keyword) ? 1 : 0);
      }, 0);
      return { ...item, score };
    })
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);
  
  return results.map(r => r.text).join('\n\n');
}
```

### 2. Enrichissement du contexte

Le contexte pertinent est ajouté au prompt système :

```typescript
const contextualPrompt = relevantKnowledge
  ? `${systemPrompt}\n\nINFORMATIONS PERTINENTES :\n${relevantKnowledge}`
  : systemPrompt;
```

### 3. Génération de la réponse

1. **Tentative Mistral** (rapide, économique)
2. **Fallback Claude** (si Mistral échoue)
3. **Fallback texte** (si les deux échouent)

## 🧪 Tests

### Page de test

Accédez à `/test-chat` pour tester le chatbot avec :
- Interface complète
- Panneau d'informations
- Actions rapides
- Logs de debug (console)

### Questions de test suggérées

1. **Tarifs** : "Quels sont vos tarifs ?"
2. **Micro-agents** : "Comment fonctionnent les micro-agents ?"
3. **Déploiement** : "Quel est le délai de déploiement ?"
4. **Garantie** : "Proposez-vous une garantie ?"
5. **Démo** : "Je veux une démo gratuite"
6. **Langues** : "Quelles langues supportez-vous ?"
7. **Contact** : "Comment vous contacter ?"

### Vérification des modèles

Ouvrez la console du navigateur pour voir quel modèle a répondu :

```javascript
console.log(`Réponse générée par: ${data.model}`);
// Résultat : 'mistral', 'claude' ou 'fallback'
```

## 🔒 Sécurité

### CORS

L'API supporte CORS pour les requêtes cross-origin :

```typescript
export const OPTIONS: APIRoute = async () => {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  });
};
```

### Rate limiting

⚠️ **À implémenter** : Limitez le nombre de requêtes par IP pour éviter les abus.

### Validation des entrées

L'API valide les messages entrants :

```typescript
if (!messages || !Array.isArray(messages) || messages.length === 0) {
  return new Response(JSON.stringify({ error: 'Messages requis' }), {
    status: 400
  });
}
```

## 📈 Métriques

### Données retournées

```json
{
  "reply": "Réponse du chatbot",
  "model": "mistral",
  "hasKnowledge": true
}
```

- `reply` : Réponse générée
- `model` : Modèle utilisé (`mistral`, `claude`, `fallback`)
- `hasKnowledge` : `true` si le RAG a trouvé des informations pertinentes

### Logs recommandés

```javascript
// Côté client
console.log(`Modèle: ${data.model}`);
console.log(`RAG utilisé: ${data.hasKnowledge}`);

// Côté serveur
console.log(`Query: ${lastUserMessage}`);
console.log(`Knowledge found: ${!!relevantKnowledge}`);
console.log(`Model used: ${usedModel}`);
```

## 🐛 Dépannage

### Le chatbot ne répond pas

1. Vérifiez les clés API dans `.env`
2. Vérifiez la console pour les erreurs
3. Testez l'API directement : `POST /api/chat`

### Réponses génériques

1. Enrichissez `knowledge-base.json`
2. Améliorez les prompts système
3. Ajustez la fonction `searchKnowledge()`

### Widget ne s'affiche pas

1. Vérifiez que `ChatbotWidget.astro` est importé
2. Vérifiez le z-index (doit être > 9000)
3. Vérifiez les styles CSS

## 🚀 Améliorations futures

### Court terme
- [ ] Rate limiting par IP
- [ ] Analytics (nombre de messages, sujets populaires)
- [ ] Historique de conversation persistant
- [ ] Support des pièces jointes

### Moyen terme
- [ ] Intégration CRM (envoi de leads)
- [ ] Webhooks pour notifications
- [ ] Dashboard admin
- [ ] A/B testing des prompts

### Long terme
- [ ] Voice input/output
- [ ] Vidéo chat avec avatar
- [ ] Intégration WhatsApp/Telegram
- [ ] Multi-agents (spécialisés par domaine)

## 📞 Support

Pour toute question sur le chatbot :
- Email : ZyatrIA.contact@gmail.com
- Téléphone : +1 (438) 887-4507

---

**Dernière mise à jour** : Janvier 2025  
**Version** : 2.0  
**Auteur** : ZyatrIA Global
