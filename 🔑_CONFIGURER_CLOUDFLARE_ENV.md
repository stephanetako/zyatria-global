# 🔑 Configuration des Variables d'Environnement Cloudflare

## 🎯 Pourquoi C'est Important

Votre site local fonctionne avec les variables du fichier `.env`, mais Cloudflare Workers a besoin de ses propres variables configurées dans le dashboard.

## 📋 Variables à Configurer

### Variables Essentielles

```bash
# API Mistral (pour le chatbot IA)
MISTRAL_API_KEY=votre_cle_mistral_ici

# Formspree (pour les formulaires de contact)
FORMSPREE_FORM_ID=votre_form_id_ici

# Stripe (pour les paiements)
STRIPE_SECRET_KEY=sk_live_votre_cle_stripe
STRIPE_WEBHOOK_SECRET=whsec_votre_webhook_secret

# Optionnel: Twilio (pour l'agent vocal)
TWILIO_ACCOUNT_SID=votre_account_sid
TWILIO_AUTH_TOKEN=votre_auth_token
TWILIO_PHONE_NUMBER=votre_numero
```

## 🚀 Comment Configurer sur Cloudflare

### Méthode 1: Via le Dashboard (Recommandé)

#### Étape 1: Accéder au Dashboard
1. Allez sur: https://dash.cloudflare.com/
2. Connectez-vous avec votre compte
3. Cliquez sur **Workers & Pages** dans le menu de gauche

#### Étape 2: Sélectionner Votre Projet
1. Trouvez et cliquez sur **zyatria-global**
2. Vous devriez voir votre projet avec l'URL: `zyatria-global.zyatria-contact.workers.dev`

#### Étape 3: Configurer les Variables
1. Cliquez sur l'onglet **Settings**
2. Faites défiler jusqu'à **Environment Variables**
3. Cliquez sur **Add variable**

#### Étape 4: Ajouter Chaque Variable
Pour chaque variable:

1. **Variable name**: `MISTRAL_API_KEY`
2. **Value**: Collez votre clé API Mistral
3. **Type**: Sélectionnez **Text** (ou **Secret** pour les clés sensibles)
4. **Environment**: Sélectionnez **Production** et **Preview**
5. Cliquez sur **Save**

Répétez pour toutes les variables.

#### Étape 5: Redéployer
Après avoir ajouté toutes les variables:
1. Allez dans l'onglet **Deployments**
2. Cliquez sur **Retry deployment** sur le dernier déploiement
3. OU redéployez avec: `./deploy-fix-cloudflare.sh`

### Méthode 2: Via Wrangler CLI

```bash
# Se connecter à Cloudflare
npx wrangler login

# Ajouter une variable (une par une)
npx wrangler pages secret put MISTRAL_API_KEY --project-name=zyatria-global

# Vous serez invité à entrer la valeur
# Collez votre clé et appuyez sur Entrée
```

Répétez pour chaque variable:

```bash
npx wrangler pages secret put FORMSPREE_FORM_ID --project-name=zyatria-global
npx wrangler pages secret put STRIPE_SECRET_KEY --project-name=zyatria-global
npx wrangler pages secret put STRIPE_WEBHOOK_SECRET --project-name=zyatria-global
```

### Méthode 3: Script Automatisé

Créez un fichier `.dev.vars` (pour le développement local):

```bash
# .dev.vars
MISTRAL_API_KEY=votre_cle_mistral
FORMSPREE_FORM_ID=votre_form_id
STRIPE_SECRET_KEY=sk_test_votre_cle_stripe
STRIPE_WEBHOOK_SECRET=whsec_votre_webhook_secret
```

⚠️ **IMPORTANT**: Ne commitez JAMAIS ce fichier sur Git!

Ajoutez-le au `.gitignore`:
```bash
echo ".dev.vars" >> .gitignore
```

## 🔍 Vérifier les Variables Configurées

### Via le Dashboard
1. Allez sur https://dash.cloudflare.com/
2. **Workers & Pages** > **zyatria-global**
3. **Settings** > **Environment Variables**
4. Vous devriez voir toutes vos variables listées

### Via Wrangler CLI
```bash
# Lister toutes les variables (masquées pour sécurité)
npx wrangler pages secret list --project-name=zyatria-global
```

## 🧪 Tester Après Configuration

### 1. Redéployer le Site
```bash
./deploy-fix-cloudflare.sh
```

### 2. Attendre 2-3 Minutes
Les variables prennent effet après le redéploiement.

### 3. Tester le Chatbot
1. Allez sur: https://zyatria-global.zyatria-contact.workers.dev
2. Cliquez sur le bouton du chatbot (✨)
3. Envoyez un message: "Bonjour"
4. Vous devriez recevoir une réponse intelligente (pas juste un fallback)

### 4. Tester les Formulaires
1. Allez sur la page de contact
2. Remplissez le formulaire
3. Soumettez
4. Vérifiez que vous recevez l'email

### 5. Tester Stripe
1. Cliquez sur un bouton "Acheter maintenant"
2. Vous devriez être redirigé vers Stripe Checkout
3. (Ne complétez pas le paiement en mode test)

## 🐛 Dépannage

### Problème: "Variable not found"

**Solution:**
1. Vérifiez que la variable est bien configurée dans Cloudflare
2. Vérifiez l'orthographe exacte (sensible à la casse)
3. Redéployez après avoir ajouté les variables

### Problème: Le chatbot ne répond pas intelligemment

**Cause:** `MISTRAL_API_KEY` manquante ou invalide

**Solution:**
1. Vérifiez votre clé API sur: https://console.mistral.ai/
2. Reconfigurez la variable dans Cloudflare
3. Redéployez

### Problème: Les formulaires ne fonctionnent pas

**Cause:** `FORMSPREE_FORM_ID` manquant ou invalide

**Solution:**
1. Vérifiez votre Form ID sur: https://formspree.io/forms
2. Le format doit être: `xyzabc123` (sans préfixe)
3. Reconfigurez et redéployez

### Problème: Les paiements Stripe échouent

**Cause:** Clés Stripe manquantes ou en mode test

**Solution:**
1. Vérifiez vos clés sur: https://dashboard.stripe.com/apikeys
2. Pour la production, utilisez les clés `sk_live_...`
3. Pour les tests, utilisez `sk_test_...`
4. Reconfigurez et redéployez

## 📊 Checklist de Configuration

Avant de déployer en production:

- [ ] `MISTRAL_API_KEY` configurée (clé valide)
- [ ] `FORMSPREE_FORM_ID` configuré (form créé sur Formspree)
- [ ] `STRIPE_SECRET_KEY` configurée (mode live pour production)
- [ ] `STRIPE_WEBHOOK_SECRET` configuré (webhook créé sur Stripe)
- [ ] Toutes les variables sont en mode **Production** ET **Preview**
- [ ] Site redéployé après configuration
- [ ] Chatbot testé et fonctionne
- [ ] Formulaires testés et fonctionnent
- [ ] Paiements testés (en mode test d'abord)

## 🔒 Sécurité

### ✅ Bonnes Pratiques

1. **Utilisez des secrets pour les clés sensibles**
   - Dans Cloudflare, sélectionnez "Secret" au lieu de "Text"
   - Les secrets sont masqués dans les logs

2. **Ne commitez JAMAIS les clés sur Git**
   ```bash
   # Vérifiez votre .gitignore
   cat .gitignore | grep -E "\.env|\.dev\.vars"
   ```

3. **Utilisez des clés différentes pour dev/prod**
   - Mode test Stripe pour le développement
   - Mode live Stripe pour la production

4. **Régénérez les clés si elles sont exposées**
   - Si une clé est accidentellement commitée
   - Régénérez-la immédiatement sur le service concerné

### ❌ À Éviter

- ❌ Ne partagez jamais vos clés API
- ❌ Ne les incluez pas dans le code source
- ❌ Ne les envoyez pas par email
- ❌ Ne les postez pas sur des forums/chat

## 🚀 Commandes Rapides

```bash
# Se connecter à Cloudflare
npx wrangler login

# Vérifier la connexion
npx wrangler whoami

# Lister les variables
npx wrangler pages secret list --project-name=zyatria-global

# Ajouter une variable
npx wrangler pages secret put VARIABLE_NAME --project-name=zyatria-global

# Supprimer une variable
npx wrangler pages secret delete VARIABLE_NAME --project-name=zyatria-global

# Redéployer
./deploy-fix-cloudflare.sh
```

## 📞 Obtenir les Clés API

### Mistral AI
1. Allez sur: https://console.mistral.ai/
2. Créez un compte (gratuit)
3. Allez dans **API Keys**
4. Créez une nouvelle clé
5. Copiez la clé (elle ne sera affichée qu'une fois)

### Formspree
1. Allez sur: https://formspree.io/
2. Créez un compte (gratuit)
3. Créez un nouveau formulaire
4. Copiez le Form ID (format: `xyzabc123`)

### Stripe
1. Allez sur: https://dashboard.stripe.com/
2. Créez un compte
3. Allez dans **Developers** > **API Keys**
4. Copiez la **Secret key** (commence par `sk_test_` ou `sk_live_`)
5. Pour le webhook secret:
   - Allez dans **Developers** > **Webhooks**
   - Créez un endpoint: `https://zyatria-global.zyatria-contact.workers.dev/api/stripe/webhook`
   - Copiez le **Signing secret** (commence par `whsec_`)

---

**Prochaine étape:** Configurez vos variables dans Cloudflare, puis exécutez `./deploy-fix-cloudflare.sh` ! 🚀
