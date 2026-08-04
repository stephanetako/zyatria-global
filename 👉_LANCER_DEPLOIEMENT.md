# 👉 LANCER LE DÉPLOIEMENT MAINTENANT

## 🚀 TOUT EST PRÊT !

Votre site est configuré et prêt à être déployé en production avec Stripe en **LIVE MODE**.

---

## ⚡ DÉPLOIEMENT RAPIDE (3 OPTIONS)

### Option 1 : Script automatique PowerShell (Windows)
```powershell
.\deploy-live-mode.ps1
```

### Option 2 : Script automatique Bash (Linux/Mac)
```bash
./deploy-live-mode.sh
```

### Option 3 : Commandes manuelles
```bash
# 1. Build
npm run build

# 2. Commit et push
git add .
git commit -m "🚀 Déploiement LIVE MODE"
git push origin master

# 3. Cloudflare déploiera automatiquement
```

---

## 🔑 VARIABLES À CONFIGURER SUR CLOUDFLARE

Après le push, allez sur **Cloudflare Pages** et ajoutez ces variables :

### https://dash.cloudflare.com
**Workers & Pages → Votre projet → Settings → Environment variables**

```
STRIPE_SECRET_KEY = sk_live_51QhRRhP3bMl...
PUBLIC_STRIPE_PUBLISHABLE_KEY = pk_live_51QhRRhP3bMl...
STRIPE_WEBHOOK_SECRET = whsec_...
FORMSPREE_FORM_ID = mldekqbz
MISTRAL_API_KEY = Ij0Aq3Ot3zzJ...
```

---

## 🔗 CONFIGURER LE WEBHOOK STRIPE

### https://dashboard.stripe.com/webhooks

1. **Add endpoint**
2. **URL** : `https://votre-domaine.pages.dev/api/stripe/webhook`
3. **Événements** :
   - checkout.session.completed
   - payment_intent.succeeded
   - payment_intent.payment_failed
   - customer.subscription.created
   - customer.subscription.updated
   - customer.subscription.deleted
   - invoice.paid
   - invoice.payment_failed
4. **Copier le Signing secret** (whsec_...)
5. **L'ajouter dans Cloudflare** comme `STRIPE_WEBHOOK_SECRET`

---

## ✅ VÉRIFICATION FINALE

Une fois déployé, testez :

- [ ] Page d'accueil : `https://votre-domaine.pages.dev`
- [ ] Page Pricing : `https://votre-domaine.pages.dev/pricing`
- [ ] Cliquez sur un bouton Stripe → Vérifiez que c'est en **LIVE MODE**
- [ ] Formulaire de contact : `https://votre-domaine.pages.dev/contact-simple`
- [ ] Micro-agents : `https://votre-domaine.pages.dev/micro-agents`

---

## 📊 RÉCAPITULATIF DES PRIX (LIVE MODE)

### Plans principaux
- **Starter** : 68 CAD/mois
- **Professional** : 697 CAD (unique) ou 208 CAD/mois
- **Enterprise** : 997 CAD (unique) ou 698 CAD/mois

### Micro-agents (tous mensuels)
- Qualification Leads : 69 CAD/mois
- Support Client : 69 CAD/mois
- Rendez-vous : 68 CAD/mois
- Suivi Prospects : 180 CAD/mois
- Immobilier : 208 CAD/mois
- E-commerce : 195 CAD/mois

### Services (paiements uniques)
- Audit IA : 497 CAD
- Consultation : 149 CAD
- Formation : 995 CAD

---

## 🎉 C'EST PARTI !

Lancez le script de déploiement et votre site sera en ligne dans quelques minutes !

**Tous les liens Stripe sont en LIVE MODE et prêts à accepter de vrais paiements.**

Pour plus de détails : **🚀_DEPLOIEMENT_FINAL_LIVE_MODE.md**
