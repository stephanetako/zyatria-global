# 🔑 VARIABLES D'ENVIRONNEMENT POUR CLOUDFLARE PAGES

## 📋 VARIABLES À AJOUTER

Lors du déploiement sur Cloudflare Pages, ajoute ces variables dans **"Environment variables"** :

---

### **1. MISTRAL_API_KEY** (Chatbot IA)

```
Name:  MISTRAL_API_KEY
Value: [Copie la valeur depuis ton fichier .env local]
```

**Où trouver :** Dans ton fichier `.env`, ligne `MISTRAL_API_KEY=...`

**Format :** Commence généralement par `sk-...` ou similaire

**Utilisé pour :** Le chatbot Mistral AI sur ton site

---

### **2. PUBLIC_FORMSPREE_FORM_ID** (Formulaires)

```
Name:  PUBLIC_FORMSPREE_FORM_ID
Value: [Copie la valeur depuis ton fichier .env local]
```

**Où trouver :** Dans ton fichier `.env`, ligne `PUBLIC_FORMSPREE_FORM_ID=...`

**Format :** Un ID alphanumérique (ex: `xyzabc123`)

**Utilisé pour :** Les formulaires de contact

---

### **3. STRIPE_SECRET_KEY** (Paiements)

```
Name:  STRIPE_SECRET_KEY
Value: [Copie la valeur depuis ton fichier .env local]
```

**Où trouver :** Dans ton fichier `.env`, ligne `STRIPE_SECRET_KEY=...`

**Format :** Commence par `sk_test_...` (test) ou `sk_live_...` (production)

**Utilisé pour :** Créer les sessions de paiement Stripe

---

### **4. STRIPE_PUBLISHABLE_KEY** (Paiements - Public)

```
Name:  STRIPE_PUBLISHABLE_KEY
Value: [Copie la valeur depuis ton fichier .env local]
```

**Où trouver :** Dans ton fichier `.env`, ligne `STRIPE_PUBLISHABLE_KEY=...`

**Format :** Commence par `pk_test_...` (test) ou `pk_live_...` (production)

**Utilisé pour :** Initialiser Stripe côté client

---

### **5. STRIPE_WEBHOOK_SECRET** (Webhooks Stripe)

```
Name:  STRIPE_WEBHOOK_SECRET
Value: [Copie la valeur depuis ton fichier .env local]
```

**Où trouver :** Dans ton fichier `.env`, ligne `STRIPE_WEBHOOK_SECRET=...`

**Format :** Commence par `whsec_...`

**Utilisé pour :** Vérifier les webhooks Stripe (sécurité)

---

### **6. WEBFLOW_API_HOST** (Optionnel - CMS)

```
Name:  WEBFLOW_API_HOST
Value: [Copie la valeur depuis ton fichier .env local]
```

**Où trouver :** Dans ton fichier `.env`, ligne `WEBFLOW_API_HOST=...`

**Utilisé pour :** Si tu utilises le CMS Webflow (optionnel)

---

### **7. WEBFLOW_SITE_API_TOKEN** (Optionnel - CMS)

```
Name:  WEBFLOW_SITE_API_TOKEN
Value: [Copie la valeur depuis ton fichier .env local]
```

**Où trouver :** Dans ton fichier `.env`, ligne `WEBFLOW_SITE_API_TOKEN=...`

**Utilisé pour :** Si tu utilises le CMS Webflow (optionnel)

---

### **8. WEBFLOW_CMS_SITE_API_TOKEN** (Optionnel - CMS)

```
Name:  WEBFLOW_CMS_SITE_API_TOKEN
Value: [Copie la valeur depuis ton fichier .env local]
```

**Où trouver :** Dans ton fichier `.env`, ligne `WEBFLOW_CMS_SITE_API_TOKEN=...`

**Utilisé pour :** Si tu utilises le CMS Webflow (optionnel)

---

## 🎯 VARIABLES ESSENTIELLES (MINIMUM)

Pour que ton site fonctionne, tu DOIS ajouter au minimum :

✅ **MISTRAL_API_KEY** - Pour le chatbot
✅ **PUBLIC_FORMSPREE_FORM_ID** - Pour les formulaires
✅ **STRIPE_SECRET_KEY** - Pour les paiements
✅ **STRIPE_PUBLISHABLE_KEY** - Pour les paiements

Les autres sont optionnelles.

---

## 📝 COMMENT AJOUTER SUR CLOUDFLARE

### **Pendant le setup initial :**

1. Lors de la configuration du projet
2. Scroll jusqu'à **"Environment variables"**
3. Clique sur **"Add variable"** pour chaque variable
4. Entre le **Name** et la **Value**
5. Clique sur **"Save and Deploy"**

### **Après le déploiement :**

1. Va sur ton projet Cloudflare Pages
2. Clique sur **"Settings"**
3. Clique sur **"Environment variables"**
4. Clique sur **"Add variable"**
5. Entre le **Name** et la **Value**
6. Clique sur **"Save"**
7. Redéploie le site (automatique ou manuel)

---

## ⚠️ SÉCURITÉ

**IMPORTANT :**
- ❌ Ne partage JAMAIS ces clés publiquement
- ❌ Ne les commit JAMAIS sur GitHub
- ✅ Garde-les uniquement dans `.env` (local) et Cloudflare (production)
- ✅ Le fichier `.env` est déjà dans `.gitignore` (sécurisé)

---

## 🔄 ENVIRONNEMENTS

Cloudflare Pages te permet de définir des variables pour :
- **Production** : Utilisées sur le site en ligne
- **Preview** : Utilisées pour les branches de test

**Conseil :** Ajoute les mêmes variables pour les deux environnements.

---

## ✅ CHECKLIST

Avant de déployer, vérifie que tu as :

- [ ] Copié `MISTRAL_API_KEY` depuis `.env`
- [ ] Copié `PUBLIC_FORMSPREE_FORM_ID` depuis `.env`
- [ ] Copié `STRIPE_SECRET_KEY` depuis `.env`
- [ ] Copié `STRIPE_PUBLISHABLE_KEY` depuis `.env`
- [ ] Copié `STRIPE_WEBHOOK_SECRET` depuis `.env`
- [ ] Ajouté toutes les variables sur Cloudflare
- [ ] Cliqué sur "Save and Deploy"

---

## 🎉 C'EST TOUT !

Une fois ces variables ajoutées, ton site aura accès à :
- ✅ Chatbot Mistral AI fonctionnel
- ✅ Formulaires de contact fonctionnels
- ✅ Paiements Stripe fonctionnels

**Bonne chance ! 🚀**
