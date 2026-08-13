# 🔑 CONFIGURER FORMSPREE MAINTENANT

## ✅ **VOTRE FORM ID FORMSPREE**

```
xbdedonn
```

---

## 📝 **ÉTAPE 1 : Ajouter dans .env (LOCAL)**

Ouvrez le fichier `.env` à la racine du projet et ajoutez cette ligne :

```bash
# Formspree Configuration
FORMSPREE_FORM_ID=xbdedonn
```

**Fichier .env complet :**
```bash
# Secrets are private credentials, like API keys or passwords
# Store secrets here as KEY="value" pairs (e.g., MY_SECRET_KEY="sec123456")
# AI Assistant uses these only when necessary to complete your requests

WEBFLOW_API_HOST=<votre_valeur>
WEBFLOW_SITE_API_TOKEN=<votre_valeur>
WEBFLOW_CMS_SITE_API_TOKEN=<votre_valeur>

# Formspree Configuration
FORMSPREE_FORM_ID=xbdedonn
```

---

## ☁️ **ÉTAPE 2 : Ajouter dans Cloudflare Workers**

### **Option A : Via le Dashboard Cloudflare**

1. Allez sur https://dash.cloudflare.com
2. Sélectionnez votre projet **"zyatria-global"**
3. Allez dans **"Settings"** → **"Environment variables"**
4. Cliquez sur **"Add variable"**
5. Ajoutez :
   - **Name:** `FORMSPREE_FORM_ID`
   - **Value:** `xbdedonn`
6. Cliquez sur **"Save"**

### **Option B : Via Wrangler CLI**

```bash
npx wrangler pages secret put FORMSPREE_FORM_ID
# Quand demandé, entrez: xbdedonn
```

---

## 🧪 **ÉTAPE 3 : Tester en local**

1. **Redémarrez le serveur de développement :**
   ```bash
   npm run dev
   ```

2. **Allez sur la page de contact :**
   ```
   http://localhost:3000/contact-simple
   ```

3. **Remplissez le formulaire et envoyez**

4. **Vérifiez dans Formspree :**
   - Allez sur https://formspree.io/forms/xbdedonn/submissions
   - Vous devriez voir votre soumission

---

## 🚀 **ÉTAPE 4 : Déployer**

Une fois que ça fonctionne en local :

```bash
# Commit
git add .
git commit -m "Configuration Formspree ajoutée"

# Push
git push origin master

# Build et déploiement
npm run build
npx wrangler pages deploy dist
```

---

## 📋 **FORMULAIRES QUI UTILISENT FORMSPREE**

Voici les formulaires de votre site qui utilisent Formspree :

### **1. Formulaire de contact simple**
**Page :** `/contact-simple`  
**Fichier :** `src/pages/contact-simple.astro`

### **2. Formulaire de qualification de leads**
**Page :** `/lead-qualification`  
**Fichier :** `src/pages/lead-qualification.astro`

### **3. Composant SimpleContactForm**
**Fichier :** `src/components/SimpleContactForm.tsx`

### **4. Composant LeadQualificationFormSimple**
**Fichier :** `src/components/LeadQualificationFormSimple.tsx`

---

## 🔍 **VÉRIFIER LA CONFIGURATION**

### **Vérifier que le Form ID est bien utilisé :**

```bash
# Chercher dans le code
grep -r "FORMSPREE_FORM_ID" src/
grep -r "xbdedonn" src/
```

### **Vérifier les variables d'environnement :**

```bash
# En local
cat .env | grep FORMSPREE

# Sur Cloudflare (via wrangler)
npx wrangler pages secret list
```

---

## ✅ **CHECKLIST**

- [ ] Form ID ajouté dans `.env`
- [ ] Serveur redémarré (`npm run dev`)
- [ ] Formulaire testé en local
- [ ] Soumission visible dans Formspree
- [ ] Form ID ajouté dans Cloudflare Workers
- [ ] Site déployé
- [ ] Formulaire testé en production

---

## 🎯 **RÉSULTAT ATTENDU**

### **Avant :**
- ❌ Formulaires ne fonctionnent pas
- ❌ Erreur "Form ID manquant"

### **Après :**
- ✅ Formulaires fonctionnent
- ✅ Soumissions reçues dans Formspree
- ✅ Email de confirmation envoyé
- ✅ Données stockées dans Formspree

---

## 📧 **CONFIGURATION EMAIL (OPTIONNEL)**

Dans Formspree, vous pouvez configurer :

1. **Email de notification :**
   - Recevez un email à chaque soumission
   - Allez dans Settings → Notifications

2. **Email de confirmation :**
   - Envoyez un email automatique au client
   - Allez dans Settings → Autoresponder

3. **Redirection après soumission :**
   - Redirigez vers une page "Merci"
   - Allez dans Settings → Redirect

---

## 🐛 **DÉPANNAGE**

### **Problème : "Form ID manquant"**
**Solution :**
1. Vérifiez que `.env` contient `FORMSPREE_FORM_ID=xbdedonn`
2. Redémarrez le serveur (`npm run dev`)

### **Problème : "Formulaire ne s'envoie pas"**
**Solution :**
1. Ouvrez la console du navigateur (F12)
2. Vérifiez les erreurs
3. Vérifiez que le Form ID est correct dans le code

### **Problème : "Pas de soumission dans Formspree"**
**Solution :**
1. Vérifiez que vous êtes connecté au bon compte Formspree
2. Vérifiez l'URL : https://formspree.io/forms/xbdedonn/submissions
3. Attendez quelques secondes et rafraîchissez

---

## 🎊 **PROCHAINES ÉTAPES**

Une fois Formspree configuré :

1. ✅ **Testez tous les formulaires**
   - Contact simple
   - Lead qualification
   - Newsletter (si applicable)

2. ✅ **Configurez les notifications**
   - Email de notification
   - Email de confirmation
   - Redirection

3. ✅ **Déployez en production**
   - Ajoutez la variable dans Cloudflare
   - Déployez le site
   - Testez en production

---

**Votre Form ID Formspree est prêt à être utilisé !** 🚀

**Form ID :** `xbdedonn`  
**Endpoint :** `https://formspree.io/f/xbdedonn`  
**Dashboard :** https://formspree.io/forms/xbdedonn

---

**Date :** 12 août 2025  
**Status :** ✅ FORM ID REÇU - À CONFIGURER
