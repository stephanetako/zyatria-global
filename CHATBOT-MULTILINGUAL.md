# 🤖 Chatbot Multilingue ZyatrIA - Documentation

## ✅ Fonctionnalités Implémentées

### 1. **Sélecteur de Langue Intégré**
- 🇫🇷 Français
- 🇬🇧 English
- 🇪🇸 Español
- 🇵🇹 Português

Le sélecteur est situé dans l'en-tête du chatbot, entre les informations de Zyra et le bouton de fermeture.

### 2. **Messages Multilingues**
Tous les éléments de l'interface s'adaptent automatiquement à la langue sélectionnée :
- Message de bienvenue
- Actions rapides (Tarifs, Micro-agents, Démo)
- Placeholder du champ de saisie
- Messages d'erreur

### 3. **API Intelligente avec RAG**
L'API `/api/chat` utilise :
- **Recherche RAG** dans la base de connaissances (`knowledge-base.json`)
- **Mistral AI** comme modèle principal (rapide et économique)
- **Claude AI** comme fallback de secours
- **Prompts système** adaptés à chaque langue

### 4. **Base de Connaissances Complète**
Le fichier `src/data/knowledge-base.json` contient :
- 6 micro-agents (Lead, Support 24/7, RDV, Follow-up, Immobilier, Commerce)
- 3 plans tarifaires (Starter, Professional, Enterprise)
- Services additionnels (Audit IA, Consultation)
- Informations générales (déploiement, langues, garantie, contact)

### 5. **Guidage Vers la Vente**
Le chatbot est configuré pour :
- ✅ Qualifier les besoins du client
- ✅ Recommander le bon micro-agent ou plan
- ✅ Fournir les tarifs précis
- ✅ Inviter à réserver une démo gratuite
- ✅ Donner les coordonnées de contact

## 📋 Structure des Fichiers

```
src/
├── components/
│   └── ChatbotWidget.astro          # Widget complet avec UI et logique
├── data/
│   └── knowledge-base.json          # Base de connaissances RAG
├── pages/
│   └── api/
│       └── chat.ts                  # API backend avec Mistral + Claude
└── lib/
    └── base-url.ts                  # Configuration des URLs
```

## 🎨 Design

Le chatbot utilise les couleurs de la marque ZyatrIA :
- **Primary**: `#C98769` (terracotta)
- **Background**: `#F5F1EB` (beige clair)
- **Text**: `#373D36` (vert foncé)

Animations fluides :
- Slide-up à l'ouverture
- Pulse sur le bouton flottant
- Typing indicator pendant le chargement
- Transitions douces sur tous les éléments

## 🔧 Configuration Requise

### Variables d'Environnement (.env)
```env
MISTRAL_API_KEY=votre_clé_mistral
CLAUDE_API_KEY=votre_clé_claude_backup
```

### Dépendances
Toutes les dépendances sont déjà installées dans `package.json`.

## 🚀 Utilisation

### Intégration dans une Page
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

Le widget est déjà intégré dans :
- ✅ `src/pages/index.astro` (page d'accueil)

### Personnalisation des Actions Rapides

Dans `ChatbotWidget.astro`, modifiez l'objet `quickActionsData` :

```javascript
const quickActionsData = {
  fr: [
    { emoji: '💰', text: 'Tarifs', message: 'Quels sont vos tarifs ?' },
    { emoji: '🤖', text: 'Micro-agents', message: 'Comment fonctionnent les micro-agents ?' },
    { emoji: '📅', text: 'Démo', message: 'Je veux une démo' }
  ],
  // ... autres langues
};
```

### Ajout de Connaissances

Éditez `src/data/knowledge-base.json` :

```json
{
  "id": "nouveau-service",
  "text": "Description complète du service avec prix et détails",
  "category": "service"
}
```

## 📊 Métriques et Suivi

Le chatbot retourne des métadonnées utiles :
```json
{
  "reply": "Réponse de l'IA",
  "model": "mistral|claude|fallback",
  "hasKnowledge": true
}
```

Vous pouvez tracker :
- Quel modèle IA a été utilisé
- Si la base de connaissances a été utilisée
- Taux de succès des réponses

## 🔒 Sécurité

- ✅ CORS configuré pour les requêtes cross-origin
- ✅ Validation des entrées utilisateur
- ✅ Rate limiting recommandé (à implémenter si nécessaire)
- ✅ Clés API stockées en variables d'environnement

## 🐛 Dépannage

### Le chatbot ne répond pas
1. Vérifiez que les clés API sont configurées dans `.env`
2. Vérifiez les logs du serveur : `npm run dev`
3. Testez l'API directement : `POST /api/chat`

### Les messages ne s'affichent pas
1. Vérifiez la console du navigateur (F12)
2. Assurez-vous que `baseUrl` est correctement configuré
3. Vérifiez que le CSS est chargé

### Erreur "No space left on device"
1. Nettoyez le cache : `rm -rf .astro-cache`
2. Nettoyez npm : `npm cache clean --force`
3. Réinstallez : `npm install`

## 📞 Support

Pour toute question technique :
- **Email** : ZyatrIA.contact@gmail.com
- **Téléphone** : +1 (438) 887-4507

## 🎯 Prochaines Améliorations Possibles

1. **Analytics** : Tracker les conversations et les conversions
2. **Historique** : Sauvegarder les conversations dans localStorage
3. **Notifications** : Alertes pour les nouveaux messages
4. **Intégrations** : Connexion directe avec CRM (HubSpot, Salesforce)
5. **Voice** : Support de la saisie vocale
6. **Emojis** : Réactions rapides pour améliorer l'engagement

---

**Version** : 1.0.0  
**Dernière mise à jour** : 2025-01-27  
**Statut** : ✅ Production Ready
