# 🚨 CORRECTIONS URGENTES POUR .ENV

## ❌ PROBLÈMES DANS VOTRE .ENV ACTUEL

### 1. Variable manquante
```
FORMSPREE_FORM_ID="xbdedonn"
```
**Ajoutez cette ligne en haut du fichier**

### 2. Nom de variable incorrect
```
❌ STRIPE_PUBLIC_KEY
✅ STRIPE_PUBLISHABLE_KEY
```
**Renommez `STRIPE_PUBLIC_KEY` en `STRIPE_PUBLISHABLE_KEY`**

### 3. Duplication
```
WEBFLOW_CMS_SITE_API_TOKEN apparaît 2 fois
```
**Supprimez la ligne dupliquée**

---

## ✅ VOTRE .ENV DEVRAIT RESSEMBLER À ÇA

```env
# Formspree Configuration
FORMSPREE_FORM_ID="xbdedonn"

# Webflow Configuration
WEBFLOW_API_HOST="https://api-cdn.webflow.com/v2"
WEBFLOW_SITE_API_TOKEN="8160da8face945f9fb1e1515f445592076f5481aabc0aeb7a7a11e9fdb118ed0"
WEBFLOW_CMS_SITE_API_TOKEN="177d18c2c624850e2dd7deb5c159dc319b90ef7c9cad86464217b2346a6f3c64"

# Mistral AI Configuration
MISTRAL_API_KEY="Hy1Ja5hxTfLBsgJVJgAvrUdVtQL5OdWD2aRB31Z0bgY8pHsWrczFMBt68nkTzje9u96WCnuAyBjf7TFw3Jqb000Cfx4xRu"

# Stripe Configuration (LIVE MODE)
STRIPE_PUBLISHABLE_KEY="pk_live_51TANJR1KuPEygLyRld1fRaAfZbuYIH1q0O5utsczs27opHGGVI8TataL5cSOdTI0hg4hVmLB6uHNLU7lgjBhwxcT00FU3wKGFS"
STRIPE_SECRET_KEY="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"
STRIPE_WEBHOOK_SECRET="whsec_d29277bba1b75a2b488b3ecc1c4ca969e497e2d9aa40231d3d11df56b5724564"

# Claude AI Configuration (optionnel)
CLAUDE_API_KEY="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"
```

---

## 🎯 ACTIONS À FAIRE (2 MINUTES)

1. **Ouvrez** le fichier `.env`
2. **Ajoutez** `FORMSPREE_FORM_ID="xbdedonn"` en haut
3. **Renommez** `STRIPE_PUBLIC_KEY` → `STRIPE_PUBLISHABLE_KEY`
4. **Supprimez** la ligne dupliquée de `WEBFLOW_CMS_SITE_API_TOKEN`
5. **Sauvegardez** le fichier

---

## ⚠️ POURQUOI C'EST IMPORTANT

Sans ces corrections :
- ❌ Les formulaires ne fonctionnent pas (FORMSPREE_FORM_ID manquant)
- ❌ Stripe ne trouve pas la clé publique (mauvais nom)
- ⚠️ Conflit possible avec la duplication

---

## ✅ APRÈS CORRECTION

Une fois corrigé, dites-moi "OK" et je vérifierai que tout est bon !
