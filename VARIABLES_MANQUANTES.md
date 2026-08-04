# 🔴 Variables d'Environnement Manquantes

## ❌ **Variables OBLIGATOIRES à Ajouter**

### 1. **STRIPE_PUBLISHABLE_KEY** (Clé publique Stripe)
```bash
# Dans .env local
STRIPE_PUBLISHABLE_KEY=pk_live_votre_clé_publique_ici

# Dans Cloudflare Pages Dashboard
Nom: STRIPE_PUBLISHABLE_KEY
Valeur: pk_live_votre_clé_publique_ici
Type: Plain text
```

**📖 Où trouver :**
1. Allez sur https://dashboard.stripe.com/apikeys
2. Copiez la clé "Publishable key" (commence par `pk_live_`)
3. Ajoutez-la dans `.env` ET dans Cloudflare Pages

---

### 2. **FORMSPREE_CONTACT_FORM_ID** (Formulaire de contact)
```bash
# Dans .env local
FORMSPREE_CONTACT_FORM_ID=votre_form_id_ici

# Dans Cloudflare Pages Dashboard
Nom: FORMSPREE_CONTACT_FORM_ID
Valeur: votre_form_id_ici
Type: Plain text
```

**📖 Où trouver :**
1. Allez sur https://formspree.io/forms
2. Créez un nouveau formulaire "Contact"
3. Copiez le Form ID (ex: `xbdedonn`)
4. Ajoutez-le dans `.env` ET dans Cloudflare Pages

---

### 3. **FORMSPREE_LEAD_QUALIFICATION_FORM_ID** (Qualification de leads)
```bash
# Dans .env local
FORMSPREE_LEAD_QUALIFICATION_FORM_ID=votre_form_id_ici

# Dans Cloudflare Pages Dashboard
Nom: FORMSPREE_LEAD_QUALIFICATION_FORM_ID
Valeur: votre_form_id_ici
Type: Plain text
```

**📖 Où trouver :**
1. Allez sur https://formspree.io/forms
2. Créez un nouveau formulaire "Lead Qualification"
3. Copiez le Form ID
4. Ajoutez-le dans `.env` ET dans Cloudflare Pages

---

## ✅ **Variables Déjà Configurées**

- ✅ WEBFLOW_API_HOST
- ✅ WEBFLOW_SITE_API_TOKEN
- ✅ WEBFLOW_CMS_SITE_API_TOKEN
- ✅ MISTRAL_API_KEY
- ✅ STRIPE_SECRET_KEY
- ✅ STRIPE_WEBHOOK_SECRET
- ✅ FORMSPREE_FORM_ID

---

## 🔧 **Variables Optionnelles** (Pas urgentes)

### Twilio (Agent vocal)
```bash
TWILIO_ACCOUNT_SID=votre_account_sid
TWILIO_AUTH_TOKEN=votre_auth_token
TWILIO_PHONE_NUMBER=votre_numero
```

### Analytics
```bash
GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
PLAUSIBLE_DOMAIN=zyatria.global
```

---

## 📝 **Actions à Faire MAINTENANT**

### **Étape 1 : Ajouter dans .env local**
```bash
# Éditer le fichier .env
nano .env

# Ajouter ces lignes :
STRIPE_PUBLISHABLE_KEY=pk_live_votre_clé_ici
FORMSPREE_CONTACT_FORM_ID=votre_form_id_ici
FORMSPREE_LEAD_QUALIFICATION_FORM_ID=votre_form_id_ici
```

### **Étape 2 : Ajouter dans Cloudflare Pages**
```bash
# Via le Dashboard
1. https://dash.cloudflare.com
2. Projet "zyatria-global"
3. Settings > Environment Variables
4. Add variable (pour chaque variable manquante)

# OU via Wrangler CLI
wrangler pages secret put STRIPE_PUBLISHABLE_KEY
wrangler pages secret put FORMSPREE_CONTACT_FORM_ID
wrangler pages secret put FORMSPREE_LEAD_QUALIFICATION_FORM_ID
```

### **Étape 3 : Vérifier**
```bash
# Vérifier localement
./check-env.sh

# Tester le build
npm run build

# Tester en local
npm run dev
```

---

## 🆘 **Besoin d'Aide ?**

### **Pour Stripe :**
- Dashboard : https://dashboard.stripe.com/apikeys
- Documentation : https://stripe.com/docs/keys

### **Pour Formspree :**
- Dashboard : https://formspree.io/forms
- Documentation : https://help.formspree.io/

### **Pour Cloudflare :**
- Dashboard : https://dash.cloudflare.com
- Documentation : https://developers.cloudflare.com/pages/

---

**Une fois ces 3 variables ajoutées, votre configuration sera COMPLÈTE ! 🎉**
