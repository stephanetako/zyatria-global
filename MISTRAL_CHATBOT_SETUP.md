# 🤖 Configuration du Chatbot Mistral AI

## ✅ Installation Complète

Le chatbot Mistral AI a été intégré avec succès à votre site ZyatrIA Global !

## 📋 Ce qui a été fait

### 1. Composant React (`src/components/MistralChatBot.tsx`)
- ✅ Bouton flottant en bas à droite
- ✅ Interface de chat moderne et responsive
- ✅ Animation et design professionnel
- ✅ Gestion des messages en temps réel
- ✅ Indicateur de chargement

### 2. API Endpoint (`src/pages/api/mistral-chat.ts`)
- ✅ Connexion à l'API Mistral AI
- ✅ Utilisation du modèle gratuit `mistral-tiny`
- ✅ Gestion des erreurs
- ✅ Contexte personnalisé pour ZyatrIA

### 3. Intégration (`src/components/AppWrapper.tsx`)
- ✅ Chatbot ajouté sur toutes les pages
- ✅ Disponible globalement sur le site

## 🔑 Configuration Requise

### Étape 1 : Obtenir une clé API Mistral

1. Allez sur [https://console.mistral.ai/](https://console.mistral.ai/)
2. Créez un compte gratuit
3. Générez une clé API
4. Copiez votre clé API

### Étape 2 : Ajouter la clé à votre projet

Ajoutez cette ligne à votre fichier `.env` :

```env
MISTRAL_API_KEY=votre_cle_api_mistral_ici
```

### Étape 3 : Configuration Cloudflare (pour la production)

Quand vous déployez sur Cloudflare, ajoutez la variable d'environnement :

1. Allez dans votre dashboard Cloudflare
2. Sélectionnez votre projet
3. Allez dans **Settings** > **Environment Variables**
4. Ajoutez :
   - **Name:** `MISTRAL_API_KEY`
   - **Value:** Votre clé API Mistral

## 🎨 Fonctionnalités

### Interface Utilisateur
- 💬 Bouton flottant avec animation pulse
- 🎨 Design cohérent avec votre charte graphique
- 📱 Responsive (mobile, tablette, desktop)
- ⌨️ Support du clavier (Entrée pour envoyer)
- 🕐 Horodatage des messages

### Intelligence Artificielle
- 🤖 Modèle Mistral Tiny (gratuit)
- 🎯 Contexte personnalisé ZyatrIA
- 💡 Réponses intelligentes et contextuelles
- 🌍 Support multilingue

### Sécurité
- 🔒 Clé API sécurisée côté serveur
- ✅ Validation des entrées
- 🛡️ Gestion des erreurs robuste

## 🚀 Test Local

1. Ajoutez votre clé API dans `.env`
2. Redémarrez le serveur de développement :
   ```bash
   npm run dev
   ```
3. Ouvrez votre navigateur
4. Cliquez sur le bouton de chat en bas à droite
5. Testez une conversation !

## 📊 Modèle Gratuit vs Payant

### Mistral Tiny (Gratuit)
- ✅ Parfait pour commencer
- ✅ Bonnes performances
- ✅ Limite de tokens généreuse
- ⚠️ Peut être plus lent aux heures de pointe

### Mistral Small/Medium (Payant)
Pour upgrader, modifiez dans `src/pages/api/mistral-chat.ts` :
```typescript
model: 'mistral-small' // ou 'mistral-medium'
```

## 🎯 Personnalisation

### Modifier le message de bienvenue
Dans `src/components/MistralChatBot.tsx`, ligne 13 :
```typescript
content: 'Votre message personnalisé ici'
```

### Modifier le contexte système
Dans `src/pages/api/mistral-chat.ts`, ligne 28 :
```typescript
content: 'Votre contexte personnalisé ici'
```

### Modifier les couleurs
Le chatbot utilise automatiquement vos couleurs de thème :
- `primary` : Couleur principale
- `primary-foreground` : Texte sur fond principal
- `card` : Fond des cartes
- `border` : Bordures

## 🔧 Dépannage

### Le chatbot ne s'affiche pas
- ✅ Vérifiez que le serveur est démarré
- ✅ Vérifiez la console du navigateur pour les erreurs

### Erreur "Configuration manquante"
- ✅ Vérifiez que `MISTRAL_API_KEY` est dans `.env`
- ✅ Redémarrez le serveur après avoir ajouté la clé

### Erreur API
- ✅ Vérifiez que votre clé API est valide
- ✅ Vérifiez votre quota Mistral AI
- ✅ Vérifiez votre connexion internet

### Messages lents
- ⏱️ Normal avec le tier gratuit
- 💡 Considérez un upgrade vers Mistral Small

## 📈 Prochaines Étapes

### Améliorations Possibles
1. **Historique persistant** : Sauvegarder les conversations
2. **Analytics** : Tracker les questions fréquentes
3. **Multi-langue** : Détection automatique de la langue
4. **Suggestions** : Questions suggérées
5. **Feedback** : Système de notation des réponses

### Intégration CRM
Connectez le chatbot à votre CRM pour :
- Capturer les leads
- Qualifier les prospects
- Automatiser le suivi

## 💡 Conseils d'Utilisation

### Pour les Visiteurs
- Le chatbot peut répondre aux questions sur vos services
- Il peut expliquer les micro-agents
- Il peut aider à choisir le bon plan

### Pour Vous
- Surveillez les questions fréquentes
- Ajustez le contexte système selon les besoins
- Utilisez les insights pour améliorer votre site

## 🎉 C'est Prêt !

Votre chatbot Mistral AI est maintenant opérationnel ! 

Il apparaîtra sur toutes les pages de votre site avec un bouton flottant en bas à droite.

---

**Besoin d'aide ?** Consultez la [documentation Mistral AI](https://docs.mistral.ai/)
