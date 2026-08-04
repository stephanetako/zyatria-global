# 👉 COMMENCER ICI - Configuration Variables d'Environnement

## 🎯 **OBJECTIF**
Configurer les 3 variables manquantes pour que votre site soit 100% fonctionnel.

---

## ⚡ **ACTION RAPIDE (5 minutes)**

### **Étape 1 : Obtenir les clés**

#### 🔑 **Stripe Publishable Key**
```
1. Allez sur https://dashboard.stripe.com/apikeys
2. Copiez "Publishable key" (commence par pk_live_)
3. Gardez-la pour l'étape 2
```

#### 📧 **Formspree Form IDs**
```
1. Allez sur https://formspree.io/forms
2. Créez 2 formulaires :
   - "Contact Form"
   - "Lead Qualification Form"
3. Copiez les Form IDs (ex: xbdedonn)
4. Gardez-les pour l'étape 2
```

---

### **Étape 2 : Ajouter dans .env local**

```bash
# Ouvrir le fichier .env
nano .env

# Ajouter à la fin du fichier :
STRIPE_PUBLISHABLE_KEY=pk_live_votre_clé_ici
FORMSPREE_CONTACT_FORM_ID=votre_form_id_contact
FORMSPREE_LEAD_QUALIFICATION_FORM_ID=votre_form_id_lead

# Sauvegarder : Ctrl+O puis Entrée
# Quitter : Ctrl+X
```

---

### **Étape 3 : Ajouter dans Cloudflare Pages**

**Option A : Via Dashboard (Recommandé)**
```
1. https://dash.cloudflare.com
2. Cliquez sur "zyatria-global"
3. Settings > Environment Variables
4. Add variable (3 fois) :
   - STRIPE_PUBLISHABLE_KEY
   - FORMSPREE_CONTACT_FORM_ID
   - FORMSPREE_LEAD_QUALIFICATION_FORM_ID
5. Pour chaque variable :
   - Environment: Production + Preview
   - Type: Plain text
```

**Option B : Via CLI**
```bash
wrangler pages secret put STRIPE_PUBLISHABLE_KEY
# Entrez la valeur quand demandé

wrangler pages secret put FORMSPREE_CONTACT_FORM_ID
# Entrez la valeur quand demandé

wrangler pages secret put FORMSPREE_LEAD_QUALIFICATION_FORM_ID
# Entrez la valeur quand demandé
```

---

### **Étape 4 : Vérifier**

```bash
# Vérifier les variables
./check-env.sh

# Si tout est ✅, tester le build
npm run build
```

---

## ✅ **RÉSULTAT ATTENDU**

Après ces 4 étapes, vous devriez voir :

```
🔍 Vérification des Variables d'Environnement
==============================================

🔑 Variables OBLIGATOIRES :
----------------------------
✅ WEBFLOW_API_HOST - Définie
✅ WEBFLOW_SITE_API_TOKEN - Définie
✅ WEBFLOW_CMS_SITE_API_TOKEN - Définie

🤖 Mistral AI :
----------------------------
✅ MISTRAL_API_KEY - Définie

💳 Stripe :
----------------------------
✅ STRIPE_PUBLISHABLE_KEY - Définie
✅ STRIPE_SECRET_KEY - Définie
✅ STRIPE_WEBHOOK_SECRET - Définie

📧 Formspree :
----------------------------
✅ FORMSPREE_FORM_ID - Définie
✅ FORMSPREE_CONTACT_FORM_ID - Définie
✅ FORMSPREE_LEAD_QUALIFICATION_FORM_ID - Définie

==============================================
✅ Vérification terminée
```

---

## 🚀 **APRÈS LA CONFIGURATION**

Une fois toutes les variables configurées :

```bash
# 1. Build
npm run build

# 2. Déployer sur Cloudflare
npm run deploy

# 3. Vérifier en production
# Ouvrez votre site et testez :
# - Formulaire de contact
# - Formulaire de qualification
# - Boutons de paiement Stripe
# - Chatbot Mistral
```

---

## 📚 **BESOIN D'AIDE ?**

### **Guides détaillés :**
- 📖 `CLOUDFLARE_ENV_SETUP.md` - Guide complet
- 📋 `VARIABLES_MANQUANTES.md` - Détails des variables
- 📊 `RESUME_CONFIGURATION_ENV.md` - Résumé et checklist

### **Scripts utiles :**
- 🔍 `./check-env.sh` - Vérifier les variables
- 🚀 `./add-cloudflare-vars.sh` - Aide pour Cloudflare

### **Liens directs :**
- 🔑 [Stripe Dashboard](https://dashboard.stripe.com/apikeys)
- 📧 [Formspree Forms](https://formspree.io/forms)
- 🌐 [Cloudflare Dashboard](https://dash.cloudflare.com)

---

## ⚠️ **IMPORTANT**

- ✅ Utilisez les clés **LIVE** en production
- ✅ Utilisez les clés **TEST** en développement
- ❌ Ne commitez JAMAIS le fichier `.env`
- ✅ Les secrets sont dans `.gitignore`

---

## 🎉 **C'EST TOUT !**

Une fois ces 3 variables ajoutées, votre site sera **100% fonctionnel** ! 🚀

**Temps estimé : 5-10 minutes**

---

**Questions ?** Consultez les guides ou demandez de l'aide.
