# 🔧 Désactiver Temporairement le Chatbot

Si vous voulez déployer sans corriger Mistral AI maintenant :

## Option 1 : Masquer le Bouton du Chatbot

Éditez `src/components/AppWrapper.tsx` et commentez le bouton :

```tsx
{/* Chatbot temporairement désactivé
<button
  onClick={() => setIsChatOpen(true)}
  className="..."
>
  ...
</button>
*/}
```

## Option 2 : Afficher un Message d'Indisponibilité

Le chatbot a déjà un système de fallback qui fonctionne même sans Mistral AI.

Les utilisateurs verront des réponses pré-programmées au lieu de l'IA.

## ✅ Ce Qui Fonctionnera Quand Même

- ✅ Formulaires de contact (Formspree)
- ✅ Paiements Stripe
- ✅ Toutes les pages du site
- ✅ Navigation
- ✅ Réponses de fallback du chatbot

## ❌ Ce Qui Ne Fonctionnera Pas

- ❌ Réponses IA personnalisées du chatbot
- ❌ Conversations intelligentes

## 🚀 Recommandation

**Obtenez une nouvelle clé Mistral AI** - C'est gratuit et prend 2 minutes !

https://console.mistral.ai/api-keys/
