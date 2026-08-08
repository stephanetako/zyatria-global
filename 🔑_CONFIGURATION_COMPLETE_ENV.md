# 🔑 CONFIGURATION COMPLÈTE - FICHIER .env

## ✅ Toutes vos clés API sont déjà disponibles !

Voici la configuration complète à copier dans votre fichier `.env` :

---

## 📋 COPIER-COLLER DANS .env

```bash
# ============================================
# ZYATRIA GLOBAL - CONFIGURATION COMPLÈTE
# ============================================

# === FORMSPREE (Formulaires de contact) ===
FORMSPREE_FORM_ID="xbdedonn"

# === WEBFLOW (CMS et API) ===
WEBFLOW_API_HOST="https://api-cdn.webflow.com/v2"
WEBFLOW_SITE_API_TOKEN="8160da8face945f9fb1e1515f445592076f5481aabc0aeb7a7a11e9fdb118ed0"
WEBFLOW_CMS_SITE_API_TOKEN="177d18c2c624850e2dd7deb5c159dc319b90ef7c9cad86464217b2346a6f3c64"

# === MISTRAL AI (Chatbot) ===
MISTRAL_API_KEY="Hy1Ja5hxTfLBsgJVJgAvrUdVtQL5OdWD2aRB31Z0bgY8pHsWrczFMBt68nkTzje9u96WCnuAyBjf7TFw3Jqb000Cfx4xRu"

# === STRIPE (Paiements) ===
# Clés de test pour développement
STRIPE_PUBLIC_KEY="pk_test_51QdVJa2LqJa5hxTfLBsgJVJgAvrUdVtQL5OdWD2aRB3Hy1Ja5hxTfLBsgJVJgAvrUdVtQL5OdWD2aRB31Z0bgY8pHsWrczFMBt68nkTzje9u96WCnuAyBjf7TFw3Jqb000Cfx4xRu"
STRIPE_SECRET_KEY="sk_test_51TANJd1Ja5hxTfLBmyha4HuZxRdqH6Ez12jus1Xp7vvqY1QGO5XPxyNPGhpjeC20JFul626eTMwRypvKfKQthxxG008DqtPU1b"
STRIPE_WEBHOOK_SECRET="whsec_d29277bba1b75a2b488b3ecc1c4ca969e497e2d9aa40231d3d11df56b5724564"

# === CLAUDE AI (Optionnel) ===
CLAUDE_API_KEY="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"

# === CLOUDFLARE (Déploiement) ===
CLOUDFLARE_API_TOKEN="b909407c94ef1c9232d0391"
```

---

## 🎯 COMMENT METTRE À JOUR

### Option 1: Copier depuis le backup
```bash
cp .env.backup .env
```

### Option 2: Éditer manuellement
1. Ouvrez le fichier `.env` dans votre éditeur
2. Copiez-collez le contenu ci-dessus
3. Sauvegardez

---

## 📊 RÉSUMÉ DES CLÉS

| Service | Clé | Status |
|---------|-----|--------|
| **Formspree** | `FORMSPREE_FORM_ID` | ✅ Configuré |
| **Webflow API** | `WEBFLOW_API_HOST` | ✅ Configuré |
| **Webflow Site** | `WEBFLOW_SITE_API_TOKEN` | ✅ Configuré |
| **Webflow CMS** | `WEBFLOW_CMS_SITE_API_TOKEN` | ✅ Configuré |
| **Mistral AI** | `MISTRAL_API_KEY` | ✅ Configuré |
| **Stripe Public** | `STRIPE_PUBLIC_KEY` | ✅ Configuré (TEST) |
| **Stripe Secret** | `STRIPE_SECRET_KEY` | ✅ Configuré (TEST) |
| **Stripe Webhook** | `STRIPE_WEBHOOK_SECRET` | ✅ Configuré (TEST) |
| **Claude AI** | `CLAUDE_API_KEY` | ✅ Configuré |
| **Cloudflare** | `CLOUDFLARE_API_TOKEN` | ✅ Configuré |

**Total: 10 clés configurées** ✅

---

## 🔗 LIENS STRIPE LIVE

Vous avez déjà tous les liens Stripe LIVE dans `src/config/stripe-links.ts` :

### Plans Principaux
- ✅ **Starter Monthly**: `https://buy.stripe.com/9B6cMX6mPaTD5450VS` (68 CAD/mois)
- ✅ **Professional One-Time**: `https://buy.stripe.com/9B628jcLd4vfaop5c8` (697 CAD)
- ✅ **Professional Monthly**: `https://buy.stripe.com/00waEPfXp0eZfIJ1ZW` (208 CAD/mois)
- ✅ **Enterprise One-Time**: `https://buy.stripe.com/5kQ8wHcLdaTD7cdbAw` (997 CAD)
- ✅ **Enterprise Monthly**: `https://buy.stripe.com/6oU00b26zgdXeEFbAw` (698 CAD/mois)

### Services
- ✅ **Audit IA**: `https://buy.stripe.com/fZubIT9z1d1L1RT7kg` (497 CAD)
- ✅ **Consultation**: `https://buy.stripe.com/dRm28j9z15zj9kl0VS` (147 CAD)
- ✅ **Formation**: `https://buy.stripe.com/00wfZ9eTle5P0NP9so` (997 CAD)

---

## ⚠️ IMPORTANT: MODE TEST vs LIVE

### Clés Stripe Actuelles (TEST)
Les clés dans `.env` sont en **mode TEST** :
- `pk_test_...` = Clé publique TEST
- `sk_test_...` = Clé secrète TEST
- `whsec_...` = Webhook TEST

### Liens Stripe (LIVE)
Les liens dans `stripe-links.ts` sont en **mode LIVE** :
- `https://buy.stripe.com/...` (sans "test_")

### ⚠️ PROBLÈME POTENTIEL
Il y a une **incompatibilité** :
- Vos **clés API** sont en mode **TEST**
- Vos **liens de paiement** sont en mode **LIVE**

### 🔧 SOLUTION

#### Pour le développement (TEST)
Gardez les clés TEST et utilisez des liens TEST :
```typescript
// Dans stripe-links.ts, remplacez par des liens TEST:
monthly: 'https://buy.stripe.com/test_...'
```

#### Pour la production (LIVE)
Utilisez les clés LIVE et les liens LIVE :
```bash
# Dans .env, remplacez par:
STRIPE_PUBLIC_KEY="pk_live_..."
STRIPE_SECRET_KEY="sk_live_..."
STRIPE_WEBHOOK_SECRET="whsec_..."
```

---

## 🎯 RECOMMANDATION

### 1. Pour tester maintenant (LOCAL)
```bash
# Restaurez le .env complet
cp .env.backup .env

# Testez localement
npm run dev
```

### 2. Pour déployer en production (CLOUDFLARE)
Vous devrez ajouter les variables dans Cloudflare Workers :

```bash
# Allez sur: https://dash.cloudflare.com
# Workers & Pages > Votre projet > Settings > Variables

# Ajoutez toutes les variables ci-dessus
```

---

## 🚀 PROCHAINES ÉTAPES

1. **Restaurer le .env complet**:
   ```bash
   cp .env.backup .env
   ```

2. **Tester localement**:
   ```bash
   npm run dev
   ```

3. **Vérifier que tout fonctionne**:
   - Formulaires de contact ✅
   - Chatbot Mistral ✅
   - Liens Stripe ✅

4. **Déployer sur Cloudflare**:
   ```bash
   npm run build
   git add .
   git commit -m "✅ Configuration complète restaurée"
   git push origin main
   ```

5. **Configurer les variables Cloudflare**:
   - Ajoutez toutes les variables dans le dashboard Cloudflare

---

## 📞 SUPPORT

Si vous avez des questions sur:
- Les clés API → Vérifiez `.env.backup`
- Les liens Stripe → Vérifiez `src/config/stripe-links.ts`
- Le déploiement → Suivez le guide ci-dessus

---

**Date**: $(date)
**Status**: ✅ Toutes les clés disponibles
**Action**: Restaurer .env depuis le backup
