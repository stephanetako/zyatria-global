# 🔧 Configuration des Services Externes

## Vue d'ensemble
Ce guide vous aide à configurer les 3 services externes pour votre site ZyatrIA.

---

## 1️⃣ FORMSPREE - Formulaires de Contact

### Pourquoi Formspree ?
- ✅ Gratuit jusqu'à 50 soumissions/mois
- ✅ Pas de backend nécessaire
- ✅ Protection anti-spam intégrée
- ✅ Notifications par email

### Étapes de configuration :

#### A. Créer un compte Formspree
1. Allez sur : https://formspree.io/
2. Cliquez sur **"Sign Up"**
3. Créez un compte (gratuit)

#### B. Créer un formulaire
1. Une fois connecté, cliquez sur **"+ New Form"**
2. Donnez un nom : `ZyatrIA Contact Form`
3. Copiez le **Form ID** (format : `xyzabc123`)

#### C. Configurer dans votre projet
1. Ouvrez le fichier `.env` à la racine du projet
2. Ajoutez votre Form ID :
```env
# Formspree Configuration
PUBLIC_FORMSPREE_FORM_ID=votre_form_id_ici
```

#### D. Tester
1. Lancez `npm run dev`
2. Allez sur http://localhost:4321
3. Remplissez le formulaire de contact
4. Vérifiez votre email Formspree pour la confirmation

### 📍 Où sont les formulaires dans le code ?
- `src/components/Contact.tsx` - Formulaire de contact principal
- `src/components/Newsletter.tsx` - Inscription newsletter
- `src/config/formspree.ts` - Configuration centralisée

---

## 2️⃣ STRIPE - Paiements

### Pourquoi Stripe ?
- ✅ Leader mondial des paiements en ligne
- ✅ Sécurisé et conforme PCI
- ✅ Support multi-devises
- ✅ Payment Links (pas de code nécessaire)

### Étapes de configuration :

#### A. Créer un compte Stripe
1. Allez sur : https://stripe.com/
2. Cliquez sur **"Start now"**
3. Créez un compte (gratuit)

#### B. Créer vos Payment Links
1. Dans le dashboard Stripe, allez dans **"Payment Links"**
2. Cliquez sur **"+ New"**
3. Créez 3 liens pour vos offres :

**Offre Starter (997€/mois)**
- Nom : ZyatrIA Starter
- Prix : 997 EUR
- Type : Récurrent (mensuel)
- Description : 1 agent IA + Support standard

**Offre Growth (2,497€/mois)**
- Nom : ZyatrIA Growth
- Prix : 2497 EUR
- Type : Récurrent (mensuel)
- Description : 3 agents IA + Support prioritaire

**Offre Enterprise (Sur mesure)**
- Nom : ZyatrIA Enterprise
- Type : Lien vers formulaire de contact

#### C. Configurer dans votre projet
1. Copiez vos Payment Links
2. Ouvrez `src/config/stripe-links.ts`
3. Remplacez les liens :

```typescript
export const stripeLinks = {
  starter: 'https://buy.stripe.com/votre_lien_starter',
  growth: 'https://buy.stripe.com/votre_lien_growth',
  enterprise: 'https://buy.stripe.com/votre_lien_enterprise'
};
```

#### D. Mode Test vs Production
- **Mode Test** : Utilisez les liens de test pour développement
- **Mode Production** : Activez votre compte Stripe et utilisez les vrais liens

### 💳 Cartes de test Stripe
Pour tester les paiements :
- Carte valide : `4242 4242 4242 4242`
- Date : N'importe quelle date future
- CVC : N'importe quel 3 chiffres

### 📍 Où sont les liens Stripe dans le code ?
- `src/config/stripe-links.ts` - Configuration des liens
- `src/components/Pricing.tsx` - Boutons de paiement
- `src/pages/success.astro` - Page de confirmation

---

## 3️⃣ MISTRAL AI - Chatbot Intelligent

### Pourquoi Mistral AI ?
- ✅ IA française de pointe
- ✅ Multilingue (FR, EN, ES, PT)
- ✅ Gratuit pour commencer
- ✅ Respecte le RGPD

### Étapes de configuration :

#### A. Créer un compte Mistral AI
1. Allez sur : https://console.mistral.ai/
2. Cliquez sur **"Sign Up"**
3. Créez un compte (gratuit)

#### B. Obtenir votre clé API
1. Une fois connecté, allez dans **"API Keys"**
2. Cliquez sur **"Create new key"**
3. Donnez un nom : `ZyatrIA Chatbot`
4. Copiez la clé (format : `sk-...`)

#### C. Configurer dans votre projet
1. Ouvrez le fichier `.env`
2. Ajoutez votre clé API :

```env
# Mistral AI Configuration
MISTRAL_API_KEY=votre_cle_api_ici
```

#### D. Tester le chatbot
1. Lancez `npm run dev`
2. Cliquez sur l'icône de chat en bas à droite
3. Posez une question en français ou anglais
4. Le chatbot devrait répondre intelligemment

### 🤖 Personnaliser le chatbot
Ouvrez `src/pages/api/mistral-chat.ts` pour :
- Modifier le ton des réponses
- Ajouter des connaissances spécifiques
- Changer le modèle IA utilisé

### 📍 Où est le chatbot dans le code ?
- `src/components/MistralChatBot.tsx` - Interface du chatbot
- `src/pages/api/mistral-chat.ts` - API backend
- `src/components/LiveChat.tsx` - Bouton de lancement

---

## 📋 Checklist de Configuration

### Formspree
- [ ] Compte créé sur formspree.io
- [ ] Form ID copié
- [ ] `.env` mis à jour avec `PUBLIC_FORMSPREE_FORM_ID`
- [ ] Formulaire testé localement
- [ ] Email de confirmation reçu

### Stripe
- [ ] Compte créé sur stripe.com
- [ ] 3 Payment Links créés (Starter, Growth, Enterprise)
- [ ] `src/config/stripe-links.ts` mis à jour
- [ ] Paiement test effectué avec carte 4242...
- [ ] Page de succès testée

### Mistral AI
- [ ] Compte créé sur console.mistral.ai
- [ ] Clé API générée
- [ ] `.env` mis à jour avec `MISTRAL_API_KEY`
- [ ] Chatbot testé localement
- [ ] Réponses en français/anglais vérifiées

---

## 🔒 Sécurité - Variables d'environnement

### Fichier `.env` complet
Voici à quoi devrait ressembler votre fichier `.env` :

```env
# Formspree - Formulaires
PUBLIC_FORMSPREE_FORM_ID=xyzabc123

# Stripe - Paiements (optionnel si vous utilisez Payment Links)
# PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...

# Mistral AI - Chatbot
MISTRAL_API_KEY=sk-...

# Cloudflare (pour le déploiement)
# Ces variables seront configurées automatiquement par Cloudflare
```

### ⚠️ Important
- ✅ Le fichier `.env` est dans `.gitignore` (ne sera pas publié sur GitHub)
- ✅ Les clés `PUBLIC_*` sont visibles côté client (normal)
- ✅ Les clés sans `PUBLIC_` restent secrètes côté serveur
- ❌ Ne partagez JAMAIS vos clés API publiquement

---

## 🧪 Tests Rapides

### Test Formspree (2 min)
```bash
npm run dev
# Ouvrir http://localhost:4321
# Remplir le formulaire de contact
# Vérifier l'email
```

### Test Stripe (3 min)
```bash
npm run dev
# Aller sur la page Pricing
# Cliquer sur "Commencer" (Starter)
# Utiliser la carte 4242 4242 4242 4242
# Vérifier la redirection vers /success
```

### Test Mistral AI (2 min)
```bash
npm run dev
# Cliquer sur l'icône de chat
# Taper : "Quels sont vos services ?"
# Vérifier la réponse intelligente
```

---

## 🆘 Dépannage

### Formspree ne fonctionne pas
- Vérifiez que `PUBLIC_FORMSPREE_FORM_ID` est bien dans `.env`
- Redémarrez le serveur dev après modification du `.env`
- Vérifiez les logs dans la console du navigateur

### Stripe redirige vers une erreur
- Vérifiez que les liens dans `stripe-links.ts` sont corrects
- Assurez-vous d'utiliser les liens de TEST en développement
- Vérifiez que votre compte Stripe est activé

### Chatbot ne répond pas
- Vérifiez que `MISTRAL_API_KEY` est dans `.env`
- Vérifiez votre quota API sur console.mistral.ai
- Regardez les logs serveur dans le terminal

---

## 💰 Coûts Estimés

### Formspree
- **Gratuit** : 50 soumissions/mois
- **Gold** : 10$/mois pour 1000 soumissions

### Stripe
- **Gratuit** à configurer
- **Frais** : 1.4% + 0.25€ par transaction (Europe)

### Mistral AI
- **Gratuit** : 5€ de crédits offerts
- **Ensuite** : ~0.002€ par message (très économique)

**Total pour démarrer : 0€** 🎉

---

## 📞 Support

### Besoin d'aide ?
- 📧 Formspree : support@formspree.io
- 💳 Stripe : https://support.stripe.com
- 🤖 Mistral AI : https://docs.mistral.ai

### Documentation officielle
- Formspree : https://help.formspree.io
- Stripe Payment Links : https://stripe.com/docs/payment-links
- Mistral AI : https://docs.mistral.ai

---

## ✅ Prochaines Étapes

Une fois les 3 services configurés :
1. ✅ Testez chaque fonctionnalité localement
2. 🚀 Déployez sur Cloudflare Pages
3. 🌐 Configurez les mêmes variables d'environnement sur Cloudflare
4. 🎉 Votre site est 100% opérationnel !

---

**Temps total estimé : 15-20 minutes** ⏱️

Bonne configuration ! 🚀
