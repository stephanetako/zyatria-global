# 🎯 CONFIGURATION ZYATRIA GLOBAL - GUIDE COMPLET

## ✅ CE QUI EST DÉJÀ CONFIGURÉ

Vous avez déjà configuré :
- ✅ Stripe (paiements)
- ✅ Mistral AI (chatbot)
- ✅ Webflow CMS

## 🔴 CE QU'IL RESTE À FAIRE

### ÉTAPE 1 : Configurer Formspree (5 minutes)

#### 1.1 Créer un compte Formspree
1. Allez sur : **https://formspree.io/register**
2. Inscrivez-vous avec votre email professionnel
3. Confirmez votre email

#### 1.2 Créer votre formulaire
1. Cliquez sur **"New Form"**
2. Nom du formulaire : `ZyatrIA Contact Form`
3. Email de réception : votre email professionnel
4. Cliquez sur **"Create Form"**

#### 1.3 Copier le Form ID
1. Vous verrez un ID comme : `xyzabc123` ou `mf12345678`
2. **COPIEZ CE CODE**

#### 1.4 Ajouter le Form ID dans votre .env
Ouvrez le fichier `.env` et ajoutez cette ligne :
```bash
PUBLIC_FORMSPREE_FORM_ID="COLLEZ_VOTRE_FORM_ID_ICI"
```

**Exemple :**
```bash
PUBLIC_FORMSPREE_FORM_ID="xyzabc123"
```

---

## 📝 VOTRE FICHIER .ENV COMPLET

Voici à quoi devrait ressembler votre fichier `.env` :

```bash
# ============================================
# FORMSPREE (Formulaires)
# ============================================
PUBLIC_FORMSPREE_FORM_ID="VOTRE_FORM_ID_ICI"

# ============================================
# STRIPE (Paiements)
# ============================================
STRIPE_SECRET_KEY="sk_test_51QdVJa2LqJa5hxTfLBsgJVJgAvrUdVtQL5OdWD2aRB31Z0bgY8pHsWrczFMBt68nkTzje9u96WCnuAyBjf7TFw3Jqb000Cfx4xRu"
STRIPE_PUBLISHABLE_KEY="pk_test_51QdVJa2LqJa5hxTfLBsgJVJgAvrUdVtQL5OdWD2aRB3..."
STRIPE_WEBHOOK_SECRET="whsec_d29277bba1b75a2b488b3ecc1c4ca969e497e2d9aa40231d3d11df56b5724564"

# ============================================
# MISTRAL AI (Chatbot)
# ============================================
MISTRAL_API_KEY="Hy1Ja5hxTfLBsgJVJgAvrUdVtQL5OdWD2aRB31Z0bgY8pHsWrczFMBt68nkTzje9u96WCnuAyBjf7TFw3Jqb000Cfx4xRu"

# ============================================
# WEBFLOW CMS
# ============================================
WEBFLOW_API_HOST="https://api.webflow.com"
WEBFLOW_SITE_API_TOKEN="votre_token"
WEBFLOW_CMS_SITE_API_TOKEN="votre_cms_token"
```

---

## 🧪 ÉTAPE 2 : Tester Localement (2 minutes)

### 2.1 Installer les dépendances
```bash
npm install
```

### 2.2 Lancer le serveur de développement
```bash
npm run dev
```

### 2.3 Ouvrir dans le navigateur
Allez sur : **http://localhost:4321**

### 2.4 Tester le formulaire
1. Allez sur la page de contact
2. Remplissez le formulaire
3. Cliquez sur "Envoyer"
4. Vérifiez votre email

---

## 🚀 ÉTAPE 3 : Déployer sur Cloudflare (10 minutes)

### 3.1 Créer un compte Cloudflare
1. Allez sur : **https://dash.cloudflare.com/sign-up**
2. Créez un compte gratuit

### 3.2 Installer Wrangler CLI
```bash
npm install -g wrangler
```

### 3.3 Se connecter à Cloudflare
```bash
wrangler login
```

### 3.4 Créer le projet Cloudflare
```bash
wrangler pages project create zyatria-global
```

### 3.5 Ajouter les variables d'environnement
Dans le dashboard Cloudflare :
1. Allez dans **Workers & Pages**
2. Sélectionnez votre projet **zyatria-global**
3. Allez dans **Settings** > **Environment Variables**
4. Ajoutez TOUTES les variables de votre `.env` :

**Variables à ajouter :**
- `PUBLIC_FORMSPREE_FORM_ID`
- `STRIPE_SECRET_KEY`
- `STRIPE_PUBLISHABLE_KEY`
- `STRIPE_WEBHOOK_SECRET`
- `MISTRAL_API_KEY`
- `WEBFLOW_API_HOST`
- `WEBFLOW_SITE_API_TOKEN`
- `WEBFLOW_CMS_SITE_API_TOKEN`

### 3.6 Déployer
```bash
npm run build
wrangler pages deploy dist
```

---

## 📊 RÉCAPITULATIF

### ✅ Déjà fait
- [x] Stripe configuré
- [x] Mistral AI configuré
- [x] Webflow CMS configuré

### 🔴 À faire maintenant
- [ ] Créer compte Formspree
- [ ] Ajouter Form ID dans .env
- [ ] Tester localement
- [ ] Déployer sur Cloudflare

---

## 🆘 BESOIN D'AIDE ?

### Problème avec Formspree ?
- Vérifiez que le Form ID est entre guillemets
- Format correct : `PUBLIC_FORMSPREE_FORM_ID="xyzabc123"`

### Le site ne démarre pas ?
```bash
# Nettoyer et réinstaller
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Erreur de build ?
```bash
# Vérifier les erreurs TypeScript
npm run astro check
```

---

## 🎯 PROCHAINES ÉTAPES

Une fois Formspree configuré :

1. **Tester tous les formulaires** :
   - Page de contact
   - Formulaire de qualification de leads
   - Newsletter

2. **Configurer les liens Stripe** :
   - Créer les Payment Links dans Stripe
   - Mettre à jour `src/config/stripe-links.ts`

3. **Personnaliser le contenu** :
   - Logos et images
   - Textes et traductions
   - Couleurs et styles

---

## 📞 CONTACT

Si vous êtes bloqué, dites-moi :
- "Je suis bloqué à l'étape X"
- "J'ai une erreur : [message d'erreur]"
- "Comment faire pour [action]"

Je vous aiderai immédiatement ! 🚀
