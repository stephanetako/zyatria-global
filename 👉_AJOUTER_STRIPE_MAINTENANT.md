# 🚀 AJOUTER LES SECRETS STRIPE MAINTENANT

## ⚡ ACTION IMMÉDIATE

**Votre script est prêt !**

---

## 🎯 ÉTAPE 1 : RÉCUPÉRER VOS CLÉS STRIPE (5 minutes)

### A) Secret Key (sk_live_...)

1. **Allez sur** https://dashboard.stripe.com/apikeys
2. **Vérifiez le mode** : Toggle "Live" en haut à droite (PAS "Test")
3. **Copiez** la **Secret key** (commence par `sk_live_...`)
4. **Gardez-la** dans un fichier texte temporaire

---

### B) Publishable Key (pk_live_...)

1. **Sur la même page** (apikeys)
2. **Copiez** la **Publishable key** (commence par `pk_live_...`)
3. **Gardez-la** dans le même fichier texte

---

### C) Webhook Secret (whsec_...)

**Option 1 : Si vous avez déjà un webhook**
1. **Allez sur** https://dashboard.stripe.com/webhooks
2. **Cliquez** sur votre endpoint existant
3. **Copiez** le **Signing secret** (commence par `whsec_...`)

**Option 2 : Si vous n'avez pas encore de webhook**
1. **Utilisez temporairement** : `whsec_temp_will_configure_after_deploy`
2. Vous le configurerez après le déploiement

---

## 🎯 ÉTAPE 2 : LANCER LE SCRIPT (3 minutes)

### Commande :

```bash
./add-stripe-secrets.sh
```

---

### Le script va :

1. ✅ Vérifier que wrangler est installé
2. ✅ Vérifier votre authentification Cloudflare
3. ✅ Vérifier que le projet existe
4. ✅ Vous demander les 3 clés (masquées pendant la saisie)
5. ✅ Ajouter les secrets dans Cloudflare Pages
6. ✅ Vérifier que tout est bien configuré
7. ✅ Vous proposer de déployer immédiatement

---

## 📋 CE QUE LE SCRIPT VA VOUS DEMANDER

### Question 1 :
```
Avez-vous récupéré vos 3 clés Stripe? (o/n)
```
**Répondez :** `o` (si vous avez les 3 clés)

---

### Question 2 :
```
STRIPE_SECRET_KEY: 
```
**Collez :** `sk_live_...` (la valeur sera masquée)

---

### Question 3 :
```
STRIPE_PUBLIC_KEY: 
```
**Collez :** `pk_live_...` (la valeur sera masquée)

---

### Question 4 :
```
STRIPE_WEBHOOK_SECRET: 
```
**Collez :** `whsec_...` ou `whsec_temp_will_configure_after_deploy`

---

### Question 5 :
```
Voulez-vous déployer maintenant? (o/n)
```
**Répondez :** `o` (pour déployer immédiatement)

---

## ✅ RÉSULTAT ATTENDU

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎉 CONFIGURATION TERMINÉE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✅ Les 3 secrets Stripe ont été ajoutés avec succès!

Secrets ajoutés:
  ✅ STRIPE_SECRET_KEY
  ✅ STRIPE_PUBLIC_KEY
  ✅ STRIPE_WEBHOOK_SECRET
```

---

## 🚀 APRÈS LE SCRIPT

### Si vous avez choisi de déployer (o) :

Le site sera déployé automatiquement et vous verrez :

```
✅ Build réussi
✅ Déploiement sur Cloudflare Pages
✅ URL: https://zyatria-global.pages.dev
```

---

### Si vous avez choisi de ne pas déployer (n) :

Déployez manuellement plus tard :

```bash
./deploy-now.sh
```

Ou :

```bash
npm run build
wrangler pages deploy dist --project-name=zyatria-global
```

---

## 🎯 ÉTAPE 3 : CONFIGURER LE WEBHOOK (5 minutes)

**APRÈS le déploiement, configurez le webhook Stripe :**

### A) Créer l'endpoint

1. **Allez sur** https://dashboard.stripe.com/webhooks
2. **Cliquez** sur **"Add endpoint"**
3. **URL :** `https://zyatria-global.pages.dev/api/stripe/webhook`
4. **Description :** "ZyatrIA Global - Production Webhook"

---

### B) Sélectionner les événements

**Cochez ces 6 événements :**

- ✅ `checkout.session.completed`
- ✅ `payment_intent.succeeded`
- ✅ `payment_intent.payment_failed`
- ✅ `customer.subscription.created`
- ✅ `customer.subscription.updated`
- ✅ `customer.subscription.deleted`

---

### C) Récupérer le Signing Secret

1. **Cliquez** sur **"Add endpoint"**
2. **Copiez** le **Signing secret** (commence par `whsec_...`)
3. **Si différent** de celui que vous avez utilisé, mettez-le à jour :

```bash
wrangler pages secret put STRIPE_WEBHOOK_SECRET --project-name=zyatria-global
# Collez le nouveau whsec_...
```

---

## 🧪 ÉTAPE 4 : TESTER (2 minutes)

### Test 1 : Vérifier la connexion

```bash
curl https://zyatria-global.pages.dev/api/stripe/test
```

**Résultat attendu :**
```json
{
  "success": true,
  "message": "Test route works!"
}
```

---

### Test 2 : Tester un paiement

1. **Allez sur** https://zyatria-global.pages.dev/pricing
2. **Cliquez** sur un bouton "Commencer" ou "Choisir ce plan"
3. **Vérifiez** que vous êtes redirigé vers Stripe
4. **URL doit commencer par** `https://buy.stripe.com/`
5. **NE PAS PAYER** (sauf si vous voulez tester réellement)

---

### Test 3 : Vérifier le webhook

1. **Allez sur** https://dashboard.stripe.com/webhooks
2. **Cliquez** sur votre endpoint
3. **Cliquez** sur **"Send test webhook"**
4. **Sélectionnez** `checkout.session.completed`
5. **Cliquez** sur **"Send test webhook"**
6. **Vérifiez** que le statut est **"Succeeded"** (200)

---

## ⚠️ AVERTISSEMENTS IMPORTANTS

### 🔴 MODE LIVE ACTIVÉ

```
⚠️ Vos liens Stripe sont en MODE PRODUCTION
⚠️ Les paiements seront RÉELS
⚠️ Les cartes seront DÉBITÉES
⚠️ L'argent ira sur votre compte Stripe
```

**Recommandations :**
- Testez avec votre propre carte d'abord
- Vérifiez les montants dans Stripe Dashboard
- Surveillez les transactions les premiers jours
- Configurez les notifications par email dans Stripe

---

### 🔐 SÉCURITÉ

```
✅ Ne JAMAIS commiter les clés dans Git
✅ Les secrets sont chiffrés dans Cloudflare
✅ Activer 2FA sur Stripe Dashboard
✅ Surveiller les accès API
✅ Renouveler les clés régulièrement
```

---

## 📊 CHECKLIST COMPLÈTE

### Avant de lancer le script :

- [ ] J'ai récupéré `sk_live_...` de Stripe Dashboard
- [ ] J'ai récupéré `pk_live_...` de Stripe Dashboard
- [ ] J'ai récupéré `whsec_...` (ou j'utilise le temporaire)
- [ ] Je suis en MODE LIVE sur Stripe (pas Test)
- [ ] wrangler est installé (`wrangler --version`)
- [ ] Je suis authentifié (`wrangler whoami`)

---

### Pendant le script :

- [ ] Le script vérifie wrangler ✅
- [ ] Le script vérifie l'authentification ✅
- [ ] Le script vérifie le projet ✅
- [ ] J'ai collé les 3 clés correctement
- [ ] Les 3 secrets sont ajoutés avec succès ✅

---

### Après le script :

- [ ] Le site est déployé
- [ ] L'URL fonctionne : https://zyatria-global.pages.dev
- [ ] Le webhook est configuré dans Stripe
- [ ] Le test de connexion fonctionne
- [ ] Un bouton de paiement redirige vers Stripe
- [ ] Le webhook test est réussi (200)

---

## 🎉 RÉSUMÉ

**Temps total : 15-20 minutes**

1. **Récupérer les clés** (5 min) → Stripe Dashboard
2. **Lancer le script** (3 min) → `./add-stripe-secrets.sh`
3. **Configurer webhook** (5 min) → Stripe Dashboard
4. **Tester** (2 min) → curl + page /pricing

---

## 🚀 COMMANDE POUR COMMENCER

```bash
./add-stripe-secrets.sh
```

---

## 💡 AIDE

### Si le script échoue :

**Erreur : "wrangler not found"**
```bash
npm install -g wrangler
```

**Erreur : "Not authenticated"**
```bash
wrangler login
```

**Erreur : "Project not found"**
```bash
# C'est normal si vous n'avez pas encore déployé
# Le script continuera quand même
```

---

### Si vous voulez ajouter manuellement :

```bash
# Via CLI
wrangler pages secret put STRIPE_SECRET_KEY --project-name=zyatria-global
wrangler pages secret put STRIPE_PUBLIC_KEY --project-name=zyatria-global
wrangler pages secret put STRIPE_WEBHOOK_SECRET --project-name=zyatria-global
```

**Ou via Dashboard :**
- https://dash.cloudflare.com/
- Workers & Pages → zyatria-global
- Settings → Environment Variables
- Add variable (Type: Secret)

---

## 📞 SUPPORT

**Si vous avez des questions :**

1. Vérifiez le fichier `🔍_DIAGNOSTIC_STRIPE_COMPLET.md`
2. Consultez la documentation Stripe : https://stripe.com/docs
3. Consultez la documentation Cloudflare : https://developers.cloudflare.com/pages/

---

## ✨ PRÊT ?

**Lancez le script maintenant :**

```bash
./add-stripe-secrets.sh
```

**Bonne chance ! 🚀**
