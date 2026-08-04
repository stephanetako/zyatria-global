# 🔐 Configuration des Variables d'Environnement - Cloudflare Pages

## 📋 Variables à Configurer dans Cloudflare Pages Dashboard

### 1️⃣ **Accéder aux Variables d'Environnement**

```
1. Allez sur https://dash.cloudflare.com
2. Sélectionnez votre projet "zyatria-global"
3. Allez dans Settings > Environment Variables
```

---

## 🔑 **Variables OBLIGATOIRES**

### **Webflow API** (Déjà configurées localement)
```
WEBFLOW_API_HOST=https://api-cdn.webflow.com/v2
WEBFLOW_SITE_API_TOKEN=8160da8face945f9fb1e1515f445592076f5481aabc0aeb7a7a11e9fdb118ed0
WEBFLOW_CMS_SITE_API_TOKEN=177d18c2c624850e2dd7deb5c159dc319b90ef7c9cad86464217b2346a6f3c64
```

### **Mistral AI** (Pour le chatbot)
```
MISTRAL_API_KEY=votre_clé_mistral_ici
```
📖 **Obtenir la clé :** https://console.mistral.ai/api-keys/

### **Stripe** (Pour les paiements)
```
STRIPE_PUBLISHABLE_KEY=pk_live_votre_clé_ici
STRIPE_SECRET_KEY=sk_live_votre_clé_ici
STRIPE_WEBHOOK_SECRET=whsec_votre_secret_ici
```
📖 **Obtenir les clés :** https://dashboard.stripe.com/apikeys

### **Formspree** (Pour les formulaires)
```
FORMSPREE_FORM_ID=votre_form_id_ici
FORMSPREE_CONTACT_FORM_ID=votre_contact_form_id_ici
FORMSPREE_LEAD_QUALIFICATION_FORM_ID=votre_lead_form_id_ici
```
📖 **Obtenir les IDs :** https://formspree.io/forms

---

## 🔧 **Variables OPTIONNELLES**

### **Twilio** (Agent vocal - si activé)
```
TWILIO_ACCOUNT_SID=votre_account_sid_ici
TWILIO_AUTH_TOKEN=votre_auth_token_ici
TWILIO_PHONE_NUMBER=votre_numero_ici
```

### **Analytics**
```
GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
PLAUSIBLE_DOMAIN=zyatria.global
```

### **Environment**
```
NODE_ENV=production
ENVIRONMENT=production
```

---

## 📝 **Comment Ajouter les Variables dans Cloudflare**

### **Méthode 1 : Via le Dashboard (Recommandé)**

1. **Allez dans Settings > Environment Variables**
2. **Cliquez sur "Add variable"**
3. **Pour chaque variable :**
   - Nom : `MISTRAL_API_KEY`
   - Valeur : `votre_clé_ici`
   - Type : `Plain text` (ou `Secret` pour les clés sensibles)
   - Environment : `Production` et `Preview`
4. **Cliquez sur "Save"**

### **Méthode 2 : Via Wrangler CLI**

```bash
# Ajouter une variable
wrangler pages secret put MISTRAL_API_KEY

# Lister les variables
wrangler pages secret list

# Supprimer une variable
wrangler pages secret delete MISTRAL_API_KEY
```

---

## ⚠️ **IMPORTANT : Sécurité**

### ✅ **À FAIRE :**
- ✅ Utilisez les clés **LIVE** en production
- ✅ Utilisez les clés **TEST** en preview/dev
- ✅ Marquez les clés sensibles comme "Secret"
- ✅ Ne commitez JAMAIS le fichier `.env`
- ✅ Utilisez `.env.example` pour la documentation

### ❌ **À NE PAS FAIRE :**
- ❌ Ne partagez jamais vos clés API
- ❌ Ne commitez pas les secrets dans Git
- ❌ N'utilisez pas les clés de test en production
- ❌ Ne stockez pas les secrets en clair dans le code

---

## 🧪 **Tester la Configuration**

### **1. Test Local**
```bash
# Copier .env.example vers .env
cp .env.example .env

# Éditer .env avec vos vraies clés
nano .env

# Tester
npm run dev
```

### **2. Test avec Wrangler**
```bash
# Build
npm run build

# Preview local avec Cloudflare
npm run preview
```

### **3. Test en Production**
```bash
# Déployer
npm run deploy

# Vérifier les logs
wrangler pages deployment tail
```

---

## 📊 **Checklist de Déploiement**

- [ ] Variables Webflow configurées
- [ ] Clé Mistral AI ajoutée
- [ ] Clés Stripe configurées (live mode)
- [ ] Webhook Stripe configuré
- [ ] Formspree IDs ajoutés
- [ ] Variables d'environnement testées
- [ ] Build réussi
- [ ] Déploiement effectué
- [ ] Tests en production OK

---

## 🆘 **Dépannage**

### **Erreur : "Missing API Key"**
```bash
# Vérifier que la variable existe
wrangler pages secret list

# Ajouter la variable manquante
wrangler pages secret put NOM_VARIABLE
```

### **Erreur : "Unauthorized"**
- Vérifiez que vous utilisez les bonnes clés (test vs live)
- Vérifiez que les clés n'ont pas expiré
- Vérifiez les permissions des clés API

### **Erreur : "Build Failed"**
```bash
# Nettoyer et rebuilder
rm -rf node_modules dist .astro
npm install
npm run build
```

---

## 📚 **Ressources**

- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/)
- [Stripe API Keys](https://stripe.com/docs/keys)
- [Mistral AI Docs](https://docs.mistral.ai/)
- [Formspree Docs](https://help.formspree.io/)

---

**Besoin d'aide ?** Contactez le support ou consultez la documentation.
