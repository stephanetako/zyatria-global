# ✅ ÉTAPE 1 PRÊTE - TEST STRIPE CLI

## 🎯 Vous Êtes Ici

```
┌─────────────────────────────────────────────────────────────┐
│  ✅ ÉTAPE 1: Test Stripe CLI (Webhooks Réels)              │
│  📍 VOUS ÊTES ICI - PRÊT À EXÉCUTER                         │
└─────────────────────────────────────────────────────────────┘
```

---

## 📦 Ce Qui Est Prêt

### ✅ Code
- [x] Webhook handler (`src/pages/api/stripe/webhook.ts`)
- [x] Logique métier (`src/lib/stripe-subscription-logic.ts`)
- [x] Helpers (`src/lib/stripe-webhook-helpers.ts`)
- [x] Tests unitaires (`test-subscription-logic.js`)

### ✅ Documentation
- [x] Guide rapide (`🚀_DEMARRAGE_RAPIDE_STRIPE_CLI.md`)
- [x] Guide complet (`GUIDE_TEST_STRIPE_CLI.md`)
- [x] Plan 4 étapes (`PLAN_COMPLET_4_ETAPES.md`)
- [x] Script de test (`test-stripe-webhooks.sh`)

### ✅ Configuration
- [x] Variables d'environnement (`.env`)
- [x] Stripe configuré
- [x] Serveur prêt

---

## 🚀 3 FAÇONS DE COMMENCER

### Option 1: Ultra Rapide (3 minutes) ⚡
```bash
# Lire le guide rapide
cat 🚀_DEMARRAGE_RAPIDE_STRIPE_CLI.md

# Suivre les 3 étapes
```

### Option 2: Guide Complet (10 minutes) 📚
```bash
# Lire le guide détaillé
cat GUIDE_TEST_STRIPE_CLI.md

# Suivre toutes les étapes avec explications
```

### Option 3: Automatique (1 minute) 🤖
```bash
# Terminal 1
npm run dev

# Terminal 2
stripe listen --forward-to localhost:4321/api/stripe/webhook

# Terminal 3
./test-stripe-webhooks.sh
```

---

## 📋 Checklist de Démarrage

### Avant de Commencer
- [ ] Stripe CLI installé (`stripe --version`)
- [ ] Compte Stripe créé (gratuit)
- [ ] 3 terminaux ouverts
- [ ] 10 minutes de disponible

### Installation (1 min)
- [ ] Stripe CLI installé
- [ ] Version vérifiée

### Configuration (2 min)
- [ ] `stripe login` exécuté
- [ ] Secret webhook obtenu (`stripe listen --print-secret`)
- [ ] Secret ajouté dans `.env`
- [ ] Serveur redémarré

### Tests (5 min)
- [ ] Serveur démarré (`npm run dev`)
- [ ] Stripe listen actif
- [ ] Tests lancés (script ou manuel)
- [ ] Tous les événements reçus (6/6)
- [ ] Logs vérifiés
- [ ] Scores de santé validés

---

## 🎯 Commandes Essentielles

### Installation
```bash
# macOS
brew install stripe/stripe-cli/stripe

# Windows
scoop install stripe

# Linux
wget https://github.com/stripe/stripe-cli/releases/latest/download/stripe_linux_x86_64.tar.gz
tar -xvf stripe_linux_x86_64.tar.gz
sudo mv stripe /usr/local/bin/
```

### Configuration
```bash
# Se connecter
stripe login

# Obtenir le secret
stripe listen --print-secret

# Ajouter dans .env
echo "STRIPE_WEBHOOK_SECRET=whsec_votre_secret" >> .env
```

### Lancement
```bash
# Terminal 1: Serveur
npm run dev

# Terminal 2: Webhooks
stripe listen --forward-to localhost:4321/api/stripe/webhook

# Terminal 3: Tests
./test-stripe-webhooks.sh
```

---

## ✅ Résultats Attendus

### Dans Terminal 2 (stripe listen)
```
✔ Ready! Your webhook signing secret is whsec_...
✔ [200] POST http://localhost:4321/api/stripe/webhook [evt_xxx]
✔ [200] POST http://localhost:4321/api/stripe/webhook [evt_yyy]
✔ [200] POST http://localhost:4321/api/stripe/webhook [evt_zzz]
```

### Dans Terminal 1 (npm run dev)
```
🎯 Webhook reçu: payment_intent.succeeded
✅ Paiement traité: $10.00

🎯 Webhook reçu: customer.subscription.created
📊 ANALYSE:
   Status: trialing
   Score de santé: 100/100
   🟢 Santé: [██████████] 100%

🎯 Webhook reçu: payment_intent.payment_failed
🚨 PAIEMENT ÉCHOUÉ
   Score de santé: 50/100
   🟡 Santé: [█████░░░░░] 50%
```

---

## 📊 Tests à Effectuer

| # | Test | Commande | Score Attendu |
|---|------|----------|---------------|
| 1 | Paiement réussi | `stripe trigger payment_intent.succeeded` | - |
| 2 | Checkout complété | `stripe trigger checkout.session.completed` | - |
| 3 | Nouvel abonnement | `stripe trigger customer.subscription.created` | 100% |
| 4 | Mise à jour | `stripe trigger customer.subscription.updated` | 100% |
| 5 | Paiement échoué | `stripe trigger payment_intent.payment_failed` | 50% |
| 6 | Annulation | `stripe trigger customer.subscription.deleted` | 0% |

---

## 🐛 Dépannage Rapide

### Problème: "Command not found: stripe"
```bash
# Vérifier l'installation
which stripe

# Si vide, réinstaller
brew install stripe/stripe-cli/stripe  # macOS
```

### Problème: "Webhook signature verification failed"
```bash
# 1. Obtenir nouveau secret
stripe listen --print-secret

# 2. Mettre à jour .env
STRIPE_WEBHOOK_SECRET=whsec_nouveau_secret

# 3. Redémarrer serveur
# Ctrl+C puis npm run dev
```

### Problème: "Connection refused"
```bash
# Vérifier que le serveur tourne
curl http://localhost:4321

# Si erreur, démarrer
npm run dev
```

---

## 🎉 Après les Tests Réussis

### Vous Aurez Validé
- ✅ Webhooks Stripe fonctionnels
- ✅ Signature vérifiée
- ✅ Événements traités correctement
- ✅ Scores de santé précis
- ✅ Logs détaillés

### Prochaine Étape
```
┌─────────────────────────────────────────────────────────────┐
│  📊 ÉTAPE 2: Dashboard de Visualisation                    │
│  Créer l'interface pour voir les abonnements               │
└─────────────────────────────────────────────────────────────┘
```

---

## 📚 Documentation

### Pour l'Étape 1
- `🚀_DEMARRAGE_RAPIDE_STRIPE_CLI.md` - Guide rapide (3 min)
- `GUIDE_TEST_STRIPE_CLI.md` - Guide complet (10 min)
- `test-stripe-webhooks.sh` - Script automatisé

### Vue d'Ensemble
- `PLAN_COMPLET_4_ETAPES.md` - Plan complet
- `GUIDE_FONCTIONNALITES_AVANCEES.md` - Toutes les fonctionnalités
- `README.md` - Documentation générale

### Technique
- `src/pages/api/stripe/webhook.ts` - Code du webhook
- `src/lib/stripe-subscription-logic.ts` - Logique métier
- `test-subscription-logic.js` - Tests unitaires

---

## 💡 Conseils Pro

1. **Gardez stripe listen actif** pendant le développement
2. **Vérifiez les logs** dans les 2 terminaux
3. **Testez tous les scénarios** avant de passer à l'étape 2
4. **Notez les comportements** inattendus
5. **Demandez de l'aide** si vous êtes bloqué

---

## ⏱️ Temps Estimé

- **Installation:** 1 minute
- **Configuration:** 2 minutes
- **Tests:** 5 minutes
- **Vérification:** 2 minutes

**Total: 10 minutes maximum**

---

## 🚀 COMMENCER MAINTENANT

### Étape par Étape

```bash
# 1. Installer Stripe CLI (si pas déjà fait)
brew install stripe/stripe-cli/stripe  # macOS
# ou
scoop install stripe  # Windows

# 2. Se connecter
stripe login

# 3. Obtenir le secret
stripe listen --print-secret
# → Copier le secret qui commence par whsec_

# 4. Ajouter dans .env
# Ouvrir .env et ajouter:
# STRIPE_WEBHOOK_SECRET=whsec_votre_secret

# 5. Démarrer le serveur
npm run dev

# 6. Dans un autre terminal, écouter les webhooks
stripe listen --forward-to localhost:4321/api/stripe/webhook

# 7. Dans un 3ème terminal, lancer les tests
./test-stripe-webhooks.sh
# ou
stripe trigger payment_intent.succeeded
```

---

## ✅ Validation

### Vous Avez Réussi Si:
- [ ] Tous les événements retournent `[200]`
- [ ] Les logs montrent les bonnes données
- [ ] Les scores de santé sont corrects:
  - Abonnement créé: 100%
  - Abonnement actif: 100%
  - Paiement échoué: 50%
  - Abonnement annulé: 0%

### Prochaine Action
```bash
# Une fois validé, passez à l'étape 2
echo "Étape 1 validée ! Prêt pour le dashboard 📊"
```

---

**Prêt ? C'est parti ! 🚀**

```bash
stripe login
```
