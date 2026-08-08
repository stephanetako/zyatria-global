# 🚀 Configuration Cloudflare Pages - Guide Visuel

## ✅ Étape 1 Complétée
Votre code est sur GitHub : https://github.com/stephanetako/zyatria-global

---

## 🎯 ÉTAPE 2 : Connecter GitHub à Cloudflare

### **2.1 Accéder à Cloudflare Dashboard**

1. Ouvrez votre navigateur
2. Allez sur : **https://dash.cloudflare.com**
3. Connectez-vous avec votre compte

---

### **2.2 Créer une Application Pages**

1. Dans le menu de gauche, cliquez sur **"Workers & Pages"**
2. Cliquez sur le bouton **"Create Application"** (en haut à droite)
3. Choisissez l'onglet **"Pages"**
4. Cliquez sur **"Connect to Git"**

---

### **2.3 Connecter GitHub**

1. Cliquez sur **"GitHub"**
2. Une fenêtre popup s'ouvre pour autoriser Cloudflare
3. Cliquez sur **"Authorize Cloudflare"**
4. Sélectionnez votre compte : **stephanetako**
5. Autorisez l'accès au repository **zyatria-global**

---

### **2.4 Sélectionner le Repository**

1. Dans la liste, trouvez : **stephanetako/zyatria-global**
2. Cliquez sur **"Begin setup"**

---

### **2.5 Configuration du Build**

Remplissez les champs suivants :

```
┌─────────────────────────────────────────────────┐
│ Project name                                    │
│ zyatria-global                                  │
├─────────────────────────────────────────────────┤
│ Production branch                               │
│ master                                          │
├─────────────────────────────────────────────────┤
│ Framework preset                                │
│ Astro                                           │
├─────────────────────────────────────────────────┤
│ Build command                                   │
│ npm run build                                   │
├─────────────────────────────────────────────────┤
│ Build output directory                          │
│ dist                                            │
├─────────────────────────────────────────────────┤
│ Root directory (advanced)                       │
│ /                                               │
└─────────────────────────────────────────────────┘
```

---

### **2.6 Variables d'Environnement**

⚠️ **IMPORTANT** : Avant de cliquer sur "Save and Deploy", ajoutez vos variables !

Cliquez sur **"Environment variables (advanced)"** pour les déplier.

#### **Variables à Ajouter**

Pour chaque variable, cliquez sur **"Add variable"** :

##### 🔑 **1. Formspree (Formulaires)**
```
Variable name: FORMSPREE_FORM_ID
Value: [VOTRE_FORM_ID_ICI]
```

##### 💳 **2. Stripe (Paiements)**
```
Variable name: STRIPE_SECRET_KEY
Value: sk_test_... ou sk_live_...

Variable name: STRIPE_WEBHOOK_SECRET
Value: whsec_...
```

##### 🤖 **3. Mistral AI (Chatbot)**
```
Variable name: MISTRAL_API_KEY
Value: [VOTRE_CLE_MISTRAL]
```

##### 📊 **4. Optionnelles (si vous les avez)**
```
Variable name: WEBFLOW_CMS_SITE_API_TOKEN
Value: [VOTRE_TOKEN_WEBFLOW]

Variable name: WEBFLOW_API_HOST
Value: https://api.webflow.com

Variable name: TWILIO_ACCOUNT_SID
Value: [VOTRE_SID_TWILIO]

Variable name: TWILIO_AUTH_TOKEN
Value: [VOTRE_TOKEN_TWILIO]

Variable name: TWILIO_PHONE_NUMBER
Value: +1234567890
```

---

### **2.7 Lancer le Déploiement**

1. Vérifiez que toutes les informations sont correctes
2. Cliquez sur **"Save and Deploy"**
3. Attendez 2-5 minutes ⏳

---

## 📊 **Pendant le Build**

Vous verrez :
- ✅ Initializing build environment
- ✅ Cloning repository
- ✅ Installing dependencies
- ✅ Building application
- ✅ Deploying to Cloudflare's global network

---

## 🎉 **Déploiement Réussi !**

Une fois terminé, vous verrez :
```
✅ Success! Deployed to https://zyatria-global.pages.dev
```

---

## 🔗 **Votre Site est en Ligne !**

Votre site sera accessible sur :
- **URL Cloudflare** : `https://zyatria-global.pages.dev`
- **URL Custom** (à configurer) : `https://zyatria.global`

---

## 📋 **Checklist de Vérification**

Testez ces fonctionnalités :

- [ ] Page d'accueil s'affiche correctement
- [ ] Navigation fonctionne
- [ ] Formulaire de contact (Formspree)
- [ ] Boutons de paiement (Stripe)
- [ ] Chatbot (Mistral AI)
- [ ] Responsive design (mobile/tablette)
- [ ] Vitesse de chargement

---

## 🔧 **Si le Build Échoue**

### **Erreur : "Build failed"**

1. Cliquez sur le déploiement échoué
2. Consultez les logs
3. Vérifiez les erreurs courantes :
   - Variables d'environnement manquantes
   - Erreur de syntaxe dans le code
   - Dépendances manquantes

### **Solution Rapide**

1. Allez dans **Settings** → **Environment Variables**
2. Vérifiez que toutes les variables sont présentes
3. Cliquez sur **"Retry deployment"**

---

## 🎯 **Prochaines Étapes**

Une fois le site déployé :

1. **Tester toutes les fonctionnalités**
2. **Configurer un domaine personnalisé**
3. **Activer les analytics**
4. **Optimiser les performances**

---

## 📞 **Besoin d'Aide ?**

- **Logs de build** : Cloudflare Dashboard → Pages → Deployments
- **Variables** : Settings → Environment Variables
- **Domaine** : Custom Domains → Add Domain

---

## ✅ **Vous êtes Prêt !**

Suivez les étapes ci-dessus et revenez me dire :
- **"ok"** → Déploiement réussi !
- **"erreur"** → J'ai une erreur : [message]
- **"variables"** → J'ai besoin d'aide pour les variables
- **"attends"** → Je n'ai pas encore toutes les clés API

---

🚀 **Bonne chance !**
