# 🚀 DÉMARRAGE RAPIDE - TEST STRIPE CLI

## ⚡ En 3 Minutes Chrono !

### 📋 Prérequis
- [ ] Stripe CLI installé
- [ ] Compte Stripe (gratuit)
- [ ] 3 terminaux ouverts

---

## 🎯 ÉTAPE 1: Installation (1 minute)

### macOS
```bash
brew install stripe/stripe-cli/stripe
```

### Windows (PowerShell en admin)
```powershell
scoop bucket add stripe https://github.com/stripe/scoop-stripe-cli.git
scoop install stripe
```

### Linux
```bash
wget https://github.com/stripe/stripe-cli/releases/latest/download/stripe_linux_x86_64.tar.gz
tar -xvf stripe_linux_x86_64.tar.gz
sudo mv stripe /usr/local/bin/
```

### Vérifier
```bash
stripe --version
```

---

## 🔑 ÉTAPE 2: Configuration (1 minute)

### 1. Se connecter
```bash
stripe login
```
→ Suivez les instructions dans le navigateur

### 2. Obtenir le secret webhook
```bash
stripe listen --print-secret
```

### 3. Copier le secret dans .env
```bash
# Ouvrir .env et ajouter/modifier:
STRIPE_WEBHOOK_SECRET=whsec_votre_secret_ici
```

**⚠️ IMPORTANT:** Redémarrez le serveur après avoir modifié .env !

---

## 🧪 ÉTAPE 3: Lancer les Tests (1 minute)

### Terminal 1: Démarrer le serveur
```bash
npm run dev
```

### Terminal 2: Écouter les webhooks
```bash
stripe listen --forward-to localhost:4321/api/stripe/webhook
```

Vous devriez voir:
```
✔ Ready! Your webhook signing secret is whsec_...
```

### Terminal 3: Lancer les tests automatiques
```bash
./test-stripe-webhooks.sh
```

**OU** tester manuellement:
```bash
# Test 1: Paiement réussi
stripe trigger payment_intent.succeeded

# Test 2: Nouvel abonnement
stripe trigger customer.subscription.created

# Test 3: Paiement échoué
stripe trigger payment_intent.payment_failed
```

---

## ✅ Vérifier les Résultats

### Dans Terminal 2 (stripe listen)
```
✔ [200] POST http://localhost:4321/api/stripe/webhook
```

### Dans Terminal 1 (npm run dev)
```
🎯 Webhook reçu: payment_intent.succeeded
✅ Paiement traité: $10.00
```

---

## 🎯 Tests Essentiels

| Test | Commande | Score Attendu |
|------|----------|---------------|
| ✅ Paiement OK | `stripe trigger payment_intent.succeeded` | - |
| 🆕 Nouvel abonnement | `stripe trigger customer.subscription.created` | 100% |
| 🔄 Mise à jour | `stripe trigger customer.subscription.updated` | 100% |
| ❌ Paiement échoué | `stripe trigger payment_intent.payment_failed` | 50% |
| 🗑️ Annulation | `stripe trigger customer.subscription.deleted` | 0% |

---

## 🐛 Problèmes Courants

### ❌ "Webhook signature verification failed"
**Solution:**
```bash
# 1. Obtenir le nouveau secret
stripe listen --print-secret

# 2. Mettre à jour .env
STRIPE_WEBHOOK_SECRET=whsec_nouveau_secret

# 3. Redémarrer le serveur (Ctrl+C puis npm run dev)
```

### ❌ "Connection refused"
**Solution:**
```bash
# Vérifier que le serveur tourne
curl http://localhost:4321

# Si erreur, redémarrer:
npm run dev
```

### ❌ "Command not found: stripe"
**Solution:**
```bash
# Vérifier l'installation
which stripe

# Si vide, réinstaller (voir Étape 1)
```

---

## 📊 Exemple de Session Complète

```bash
# Terminal 1
$ npm run dev
> astro dev
  🚀 Server running on http://localhost:4321

# Terminal 2
$ stripe listen --forward-to localhost:4321/api/stripe/webhook
✔ Ready! Your webhook signing secret is whsec_...

# Terminal 3
$ stripe trigger payment_intent.succeeded
✔ Triggered payment_intent.succeeded

# Résultat dans Terminal 2:
✔ [200] POST http://localhost:4321/api/stripe/webhook

# Résultat dans Terminal 1:
🎯 Webhook reçu: payment_intent.succeeded
✅ Paiement traité avec succès
💰 Montant: $10.00
```

---

## 🎉 Succès !

Si vous voyez `[200]` dans le terminal stripe listen, **c'est gagné !** 🎊

### Prochaines Étapes:
1. ✅ **Webhooks fonctionnels** ← Vous êtes ici
2. 📊 **Créer le dashboard** (Étape 2)
3. 📧 **Configurer les emails** (Étape 3)
4. 🎨 **Personnaliser** (Étape 4)

---

## 📚 Ressources

- **Guide complet:** `GUIDE_TEST_STRIPE_CLI.md`
- **Fonctionnalités:** `GUIDE_FONCTIONNALITES_AVANCEES.md`
- **Documentation Stripe:** https://stripe.com/docs/stripe-cli

---

## 💡 Astuce Pro

Gardez `stripe listen` actif pendant tout le développement pour voir les webhooks en temps réel !

```bash
# Créer un alias pour gagner du temps
alias stripe-dev="stripe listen --forward-to localhost:4321/api/stripe/webhook"

# Utiliser:
stripe-dev
```

---

**Prêt ? C'est parti ! 🚀**

```bash
# Commencez maintenant:
stripe login
stripe listen --print-secret
# → Copiez le secret dans .env
npm run dev
# → Dans un autre terminal:
stripe listen --forward-to localhost:4321/api/stripe/webhook
# → Dans un 3ème terminal:
stripe trigger payment_intent.succeeded
```
