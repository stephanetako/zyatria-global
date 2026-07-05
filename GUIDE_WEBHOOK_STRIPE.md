# 🎯 Guide Complet - Webhooks Stripe

## ✅ Infrastructure Créée

Votre infrastructure webhooks Stripe est maintenant **100% opérationnelle** !

### 📁 Fichiers Créés

1. **`src/pages/api/stripe/webhook.ts`** - Endpoint webhook principal
2. **`src/lib/stripe-webhook-helpers.ts`** - Fonctions utilitaires

---

## 🚀 Configuration Stripe Dashboard

### Étape 1: Obtenir le Webhook Secret

1. Allez sur [Stripe Dashboard](https://dashboard.stripe.com/webhooks)
2. Cliquez sur **"Add endpoint"**
3. URL du webhook: `https://votre-domaine.com/api/stripe/webhook`
4. Sélectionnez les événements:
   - ✅ `checkout.session.completed`
   - ✅ `payment_intent.succeeded`
   - ✅ `payment_intent.payment_failed`
   - ✅ `customer.subscription.created`
   - ✅ `customer.subscription.updated`
   - ✅ `customer.subscription.deleted`
5. Cliquez sur **"Add endpoint"**
6. Copiez le **Signing secret** (commence par `whsec_...`)

### Étape 2: Ajouter la Variable d'Environnement

Ajoutez dans votre fichier `.env`:

```bash
STRIPE_WEBHOOK_SECRET=whsec_votre_secret_ici
```

---

## 🧪 Test en Local avec Stripe CLI

### Installation Stripe CLI

**Windows:**
```powershell
scoop install stripe
```

**macOS:**
```bash
brew install stripe/stripe-cli/stripe
```

**Linux:**
```bash
wget https://github.com/stripe/stripe-cli/releases/download/v1.19.4/stripe_1.19.4_linux_x86_64.tar.gz
tar -xvf stripe_1.19.4_linux_x86_64.tar.gz
sudo mv stripe /usr/local/bin
```

### Connexion et Test

```bash
# 1. Connexion à votre compte Stripe
stripe login

# 2. Démarrer votre serveur local
npm run dev

# 3. Dans un autre terminal, forwarder les webhooks
stripe listen --forward-to localhost:4321/api/stripe/webhook

# 4. Tester un paiement
stripe trigger checkout.session.completed
```

---

## 📊 Événements Gérés

### ✅ checkout.session.completed
**Déclenché:** Quand un paiement est complété via Checkout

**Données reçues:**
- ID de session
- Email client
- Montant payé
- Devise
- Métadonnées

**Actions automatiques:**
- ✅ Log des détails de paiement
- ✅ Extraction des données client
- 🔜 Envoi email de confirmation
- 🔜 Mise à jour CRM
- 🔜 Notification équipe

### 💰 payment_intent.succeeded
**Déclenché:** Quand un paiement réussit

**Données reçues:**
- ID du paiement
- Montant
- Email client

**Actions automatiques:**
- ✅ Log de confirmation
- 🔜 Mise à jour statut commande

### ❌ payment_intent.payment_failed
**Déclenché:** Quand un paiement échoue

**Données reçues:**
- ID du paiement
- Raison de l'échec
- Montant

**Actions automatiques:**
- ✅ Log de l'erreur
- 🔜 Notification client
- 🔜 Alerte équipe

### 🎉 customer.subscription.created
**Déclenché:** Nouvel abonnement créé

**Données reçues:**
- ID abonnement
- ID client
- Date de fin de période
- Statut

**Actions automatiques:**
- ✅ Log de l'abonnement
- 🔜 Email de bienvenue
- 🔜 Activation des accès

### 🔄 customer.subscription.updated
**Déclenché:** Abonnement modifié

**Données reçues:**
- Nouveau statut
- Changements de plan
- Annulation programmée

**Actions automatiques:**
- ✅ Log des changements
- 🔜 Notification client

### 🚫 customer.subscription.deleted
**Déclenché:** Abonnement annulé

**Données reçues:**
- Date d'annulation
- Raison

**Actions automatiques:**
- ✅ Log de l'annulation
- 🔜 Désactivation des accès
- 🔜 Email de confirmation

---

## 🔐 Sécurité

### Vérification de Signature

Le webhook vérifie automatiquement la signature Stripe:

```typescript
if (webhookSecret && signature) {
  event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  console.log('✅ Signature webhook vérifiée');
}
```

**Protection contre:**
- ❌ Requêtes non autorisées
- ❌ Attaques man-in-the-middle
- ❌ Replay attacks

### Mode Développement

En développement (sans `STRIPE_WEBHOOK_SECRET`):
- ⚠️ Signature non vérifiée
- ✅ Événements traités quand même
- 📝 Log d'avertissement

---

## 📧 Prochaines Étapes - Emails Automatiques

### Option 1: SendGrid (Recommandé)

```bash
npm install @sendgrid/mail
```

```typescript
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

await sgMail.send({
  to: customerEmail,
  from: 'noreply@zyatria.global',
  subject: 'Confirmation de paiement',
  html: generateEmailHTML(paymentData),
});
```

### Option 2: Resend (Moderne)

```bash
npm install resend
```

```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: 'ZyatrIA <noreply@zyatria.global>',
  to: customerEmail,
  subject: 'Confirmation de paiement',
  html: generateEmailHTML(paymentData),
});
```

### Option 3: Mailgun

```bash
npm install mailgun.js form-data
```

---

## 💾 Intégration Base de Données

### Exemple avec Supabase

```typescript
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_KEY!
);

await supabase.from('payments').insert({
  session_id: paymentData.session_id,
  customer_email: paymentData.customer_email,
  amount: paymentData.amount,
  currency: paymentData.currency,
  status: paymentData.payment_status,
  created_at: paymentData.timestamp,
});
```

---

## 🔔 Notifications Équipe

### Slack

```typescript
await fetch(process.env.SLACK_WEBHOOK_URL!, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    text: `💰 Nouveau paiement: ${paymentData.amount} ${paymentData.currency}`,
    blocks: [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `*Paiement reçu*\nClient: ${paymentData.customer_email}\nMontant: ${paymentData.amount} ${paymentData.currency}`,
        },
      },
    ],
  }),
});
```

### Discord

```typescript
await fetch(process.env.DISCORD_WEBHOOK_URL!, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    content: `💰 Nouveau paiement de ${paymentData.amount} ${paymentData.currency}`,
    embeds: [{
      title: 'Détails du paiement',
      fields: [
        { name: 'Client', value: paymentData.customer_email },
        { name: 'Montant', value: `${paymentData.amount} ${paymentData.currency}` },
        { name: 'Date', value: new Date(paymentData.timestamp).toLocaleString() },
      ],
      color: 0xC98769,
    }],
  }),
});
```

---

## 📊 Monitoring et Logs

### Vérifier les Webhooks dans Stripe

1. Allez sur [Stripe Dashboard > Webhooks](https://dashboard.stripe.com/webhooks)
2. Cliquez sur votre endpoint
3. Consultez l'onglet **"Events"**
4. Vérifiez les statuts:
   - ✅ **Succeeded** - Tout va bien
   - ⚠️ **Failed** - Vérifier les logs
   - 🔄 **Pending** - En cours

### Logs Cloudflare

Après déploiement, consultez les logs:

```bash
wrangler tail
```

---

## 🐛 Dépannage

### Webhook ne reçoit rien

1. ✅ Vérifier l'URL du webhook dans Stripe Dashboard
2. ✅ Vérifier que le serveur est accessible publiquement
3. ✅ Tester avec Stripe CLI: `stripe listen --forward-to localhost:4321/api/stripe/webhook`

### Erreur "Signature invalide"

1. ✅ Vérifier `STRIPE_WEBHOOK_SECRET` dans `.env`
2. ✅ Copier le bon secret depuis Stripe Dashboard
3. ✅ Redémarrer le serveur après modification

### Événements en double

- ✅ Normal - Stripe peut renvoyer les événements
- ✅ Implémenter l'idempotence avec `event.id`

---

## ✅ Checklist de Production

Avant de déployer:

- [ ] `STRIPE_SECRET_KEY` configurée
- [ ] `STRIPE_WEBHOOK_SECRET` configurée
- [ ] Webhook endpoint créé dans Stripe Dashboard
- [ ] URL du webhook correcte (HTTPS obligatoire)
- [ ] Événements sélectionnés dans Stripe
- [ ] Tests effectués avec Stripe CLI
- [ ] Logs vérifiés
- [ ] Emails de confirmation configurés (optionnel)
- [ ] Notifications équipe configurées (optionnel)
- [ ] Base de données connectée (optionnel)

---

## 🎯 Résumé

### ✅ Ce qui fonctionne maintenant

- ✅ Réception des webhooks Stripe
- ✅ Vérification cryptographique des signatures
- ✅ Traitement de 6 types d'événements
- ✅ Logs détaillés de tous les paiements
- ✅ Extraction des données clients
- ✅ Gestion des erreurs

### 🔜 À implémenter selon vos besoins

- 🔜 Envoi d'emails automatiques
- 🔜 Sauvegarde en base de données
- 🔜 Mise à jour CRM
- 🔜 Notifications Slack/Discord
- 🔜 Tableau de bord analytics

---

## 📞 Support

**Questions?** Consultez:
- [Documentation Stripe Webhooks](https://stripe.com/docs/webhooks)
- [Stripe CLI](https://stripe.com/docs/stripe-cli)
- [Événements Stripe](https://stripe.com/docs/api/events/types)

---

**🎉 Votre infrastructure Webhooks est prête!**

Testez maintenant avec:
```bash
stripe listen --forward-to localhost:4321/api/stripe/webhook
stripe trigger checkout.session.completed
```
