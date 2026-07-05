# 🧪 GUIDE DE TEST AVEC STRIPE CLI

## 📋 Table des Matières
1. [Installation de Stripe CLI](#installation)
2. [Configuration](#configuration)
3. [Test des Webhooks](#test-webhooks)
4. [Scénarios de Test](#scenarios)
5. [Vérification des Résultats](#verification)

---

## 1️⃣ Installation de Stripe CLI {#installation}

### Windows (PowerShell)
```powershell
# Télécharger et installer
scoop bucket add stripe https://github.com/stripe/scoop-stripe-cli.git
scoop install stripe
```

### macOS (Homebrew)
```bash
brew install stripe/stripe-cli/stripe
```

### Linux
```bash
# Télécharger la dernière version
wget https://github.com/stripe/stripe-cli/releases/latest/download/stripe_linux_x86_64.tar.gz

# Extraire
tar -xvf stripe_linux_x86_64.tar.gz

# Déplacer vers /usr/local/bin
sudo mv stripe /usr/local/bin/
```

### Vérifier l'installation
```bash
stripe --version
```

---

## 2️⃣ Configuration {#configuration}

### Étape 1: Se connecter à Stripe
```bash
stripe login
```
Cela ouvrira votre navigateur pour autoriser l'accès.

### Étape 2: Obtenir votre clé webhook
```bash
stripe listen --print-secret
```

**IMPORTANT:** Copiez le secret qui commence par `whsec_...`

### Étape 3: Ajouter le secret dans .env
```bash
# Ouvrir .env et ajouter:
STRIPE_WEBHOOK_SECRET=whsec_votre_secret_ici
```

---

## 3️⃣ Test des Webhooks {#test-webhooks}

### Démarrer le serveur local
```bash
# Terminal 1: Démarrer Astro
npm run dev
```

### Écouter les webhooks Stripe
```bash
# Terminal 2: Écouter et forwarder vers votre serveur local
stripe listen --forward-to localhost:4321/api/stripe/webhook
```

Vous devriez voir:
```
> Ready! You are using Stripe API Version [2024-XX-XX]. 
> Your webhook signing secret is whsec_... (^C to quit)
```

---

## 4️⃣ Scénarios de Test {#scenarios}

### Test 1: Paiement Réussi
```bash
# Terminal 3: Déclencher un événement de paiement
stripe trigger payment_intent.succeeded
```

**Résultat attendu:**
```
✅ Paiement reçu: $10.00
📧 Email de confirmation envoyé
💾 CRM mis à jour
```

---

### Test 2: Checkout Session Complétée
```bash
stripe trigger checkout.session.completed
```

**Résultat attendu:**
```
✅ Checkout complété
📧 Email de bienvenue envoyé
💾 Client ajouté au CRM
```

---

### Test 3: Nouvel Abonnement (Période d'Essai)
```bash
stripe trigger customer.subscription.created
```

**Résultat attendu:**
```
📊 ANALYSE:
   Status: trialing
   Score de santé: 100/100
   🟢 Santé: [██████████] 100%

🤖 ACTIONS:
   📧 Email de bienvenue
   📧 Rappel d'essai programmé
```

---

### Test 4: Abonnement Mis à Jour
```bash
stripe trigger customer.subscription.updated
```

**Résultat attendu:**
```
📊 Abonnement mis à jour
💾 CRM synchronisé
```

---

### Test 5: Abonnement Supprimé
```bash
stripe trigger customer.subscription.deleted
```

**Résultat attendu:**
```
❌ Abonnement annulé
📧 Email de feedback
💾 CRM mis à jour (statut: canceled)
```

---

### Test 6: Paiement Échoué
```bash
stripe trigger payment_intent.payment_failed
```

**Résultat attendu:**
```
🚨 PAIEMENT ÉCHOUÉ
📧 Email de relance
⚠️ Alerte équipe
```

---

## 5️⃣ Vérification des Résultats {#verification}

### Dans le Terminal 2 (stripe listen)
Vous verrez les événements en temps réel:
```
2024-01-15 10:30:45   --> payment_intent.succeeded [evt_xxx]
2024-01-15 10:30:45   <-- [200] POST http://localhost:4321/api/stripe/webhook
```

### Dans le Terminal 1 (npm run dev)
Vous verrez les logs de votre application:
```
🎯 Webhook reçu: payment_intent.succeeded
✅ Paiement traité avec succès
💰 Montant: $10.00
```

### Dans le Dashboard Stripe
1. Allez sur https://dashboard.stripe.com/test/webhooks
2. Cliquez sur votre endpoint
3. Vérifiez les événements reçus

---

## 🎯 Checklist de Test Complet

### Préparation
- [ ] Stripe CLI installé
- [ ] Connecté avec `stripe login`
- [ ] Secret webhook dans .env
- [ ] Serveur local démarré (npm run dev)
- [ ] Stripe listen actif

### Tests de Base
- [ ] ✅ payment_intent.succeeded
- [ ] ✅ checkout.session.completed
- [ ] ❌ payment_intent.payment_failed

### Tests d'Abonnement
- [ ] 🆕 customer.subscription.created
- [ ] 🔄 customer.subscription.updated
- [ ] ❌ customer.subscription.deleted

### Vérifications
- [ ] Logs dans le terminal
- [ ] Événements dans Stripe Dashboard
- [ ] Données correctes dans les logs
- [ ] Scores de santé corrects (100% pour normal, 50% pour problèmes)

---

## 🐛 Dépannage

### Problème: "Command not found: stripe"
**Solution:** Réinstaller Stripe CLI ou ajouter au PATH

### Problème: "Webhook signature verification failed"
**Solution:** 
1. Vérifier que STRIPE_WEBHOOK_SECRET est correct dans .env
2. Redémarrer le serveur après modification de .env
3. Utiliser le secret de `stripe listen --print-secret`

### Problème: "Connection refused"
**Solution:**
1. Vérifier que le serveur tourne sur le bon port (4321)
2. Vérifier que --forward-to pointe vers le bon port
3. Essayer `localhost` au lieu de `127.0.0.1`

### Problème: "No events received"
**Solution:**
1. Vérifier que `stripe listen` est actif
2. Vérifier que vous utilisez `stripe trigger` dans un autre terminal
3. Vérifier les logs de stripe listen

---

## 📊 Exemple de Session Complète

```bash
# Terminal 1
npm run dev

# Terminal 2
stripe listen --forward-to localhost:4321/api/stripe/webhook

# Terminal 3
stripe trigger payment_intent.succeeded
stripe trigger customer.subscription.created
stripe trigger customer.subscription.updated
stripe trigger payment_intent.payment_failed
stripe trigger customer.subscription.deleted
```

---

## 🎉 Résultat Attendu

Après tous les tests, vous devriez voir:

```
✅ 5/5 événements reçus
✅ 5/5 webhooks traités avec succès
✅ Tous les logs corrects
✅ Scores de santé appropriés
```

---

## 🚀 Prochaines Étapes

Une fois les tests réussis:
1. ✅ Webhooks fonctionnels
2. 📊 Créer le dashboard (Étape 2)
3. 📧 Configurer les emails (Étape 3)
4. 🎨 Personnaliser (Étape 4)

---

## 💡 Conseils Pro

1. **Gardez stripe listen actif** pendant le développement
2. **Utilisez les logs** pour déboguer
3. **Testez tous les scénarios** avant la production
4. **Documentez** les comportements inattendus
5. **Vérifiez** les scores de santé pour chaque événement

---

## 📚 Ressources

- [Stripe CLI Documentation](https://stripe.com/docs/stripe-cli)
- [Stripe Webhooks Guide](https://stripe.com/docs/webhooks)
- [Stripe Events Reference](https://stripe.com/docs/api/events)
- [Notre Guide des Fonctionnalités](./GUIDE_FONCTIONNALITES_AVANCEES.md)

---

**Prêt à tester ? Suivez les étapes ci-dessus ! 🚀**
