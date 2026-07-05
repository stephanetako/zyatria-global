# 📋 COMMENCER ICI - ÉTAPE 1

## 🎯 Objectif
Tester les webhooks Stripe avec de vrais événements en 10 minutes

---

## ⚡ DÉMARRAGE ULTRA-RAPIDE

### 1️⃣ Installer Stripe CLI (1 min)

**macOS:**
```bash
brew install stripe/stripe-cli/stripe
```

**Windows (PowerShell en admin):**
```powershell
scoop install stripe
```

**Linux:**
```bash
wget https://github.com/stripe/stripe-cli/releases/latest/download/stripe_linux_x86_64.tar.gz
tar -xvf stripe_linux_x86_64.tar.gz
sudo mv stripe /usr/local/bin/
```

---

### 2️⃣ Configurer (2 min)

```bash
# Se connecter à Stripe
stripe login

# Obtenir le secret webhook
stripe listen --print-secret
```

**Copier le secret** qui commence par `whsec_...`

**Ouvrir `.env`** et ajouter/modifier:
```bash
STRIPE_WEBHOOK_SECRET=whsec_votre_secret_ici
```

**⚠️ IMPORTANT:** Redémarrer le serveur après !

---

### 3️⃣ Lancer les Tests (5 min)

**Terminal 1:**
```bash
npm run dev
```

**Terminal 2:**
```bash
stripe listen --forward-to localhost:4321/api/stripe/webhook
```

**Terminal 3:**
```bash
# Option A: Script automatique
./test-stripe-webhooks.sh

# Option B: Tests manuels
stripe trigger payment_intent.succeeded
stripe trigger customer.subscription.created
stripe trigger payment_intent.payment_failed
```

---

## ✅ Vérifier les Résultats

### Terminal 2 doit afficher:
```
✔ [200] POST http://localhost:4321/api/stripe/webhook
```

### Terminal 1 doit afficher:
```
🎯 Webhook reçu: customer.subscription.created
📊 Score de santé: 100/100
🟢 Santé: [██████████] 100%
```

---

## 🎉 C'est Tout !

Si vous voyez `[200]` → **Succès !** 🎊

---

## 📚 Besoin d'Aide ?

- **Guide rapide (3 min):** `🚀_DEMARRAGE_RAPIDE_STRIPE_CLI.md`
- **Guide complet (10 min):** `GUIDE_TEST_STRIPE_CLI.md`
- **Plan 4 étapes:** `PLAN_COMPLET_4_ETAPES.md`

---

## 🚀 Prochaine Étape

Une fois les tests réussis → **Étape 2: Dashboard** 📊

---

**Commencez maintenant:**
```bash
stripe login
```
