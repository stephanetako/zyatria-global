# 🚀 EXÉCUTER LE DÉPLOIEMENT MAINTENANT

## ⚡ MÉTHODE RAPIDE - 1 COMMANDE

Ouvrez votre terminal et exécutez :

```bash
./deploy-now.sh
```

**C'est tout !** Le script va :
1. ✅ Vérifier Wrangler
2. ✅ Vérifier le build
3. ✅ Vous connecter à Cloudflare (si nécessaire)
4. ✅ Déployer automatiquement
5. ✅ Afficher l'URL de votre site

---

## 📋 MÉTHODE MANUELLE - 2 COMMANDES

Si vous préférez le contrôle total :

### Étape 1 : Se connecter

```bash
wrangler login
```

**Résultat attendu :**
- Votre navigateur s'ouvre
- Vous autorisez Wrangler
- Message : "Successfully logged in"

---

### Étape 2 : Déployer

```bash
wrangler pages deploy dist --project-name=zyatria-global
```

**Résultat attendu :**
```
🌍  Uploading... (4.4 MB)
✨ Success! Uploaded 245 files
✨ Deployment complete!
🌎 https://zyatria-global.pages.dev
```

---

## 🎯 APRÈS LE DÉPLOIEMENT

### 1. Vérifier le Site

Ouvrez dans votre navigateur :
```
https://zyatria-global.pages.dev
```

**Checklist :**
- [ ] Page d'accueil charge
- [ ] Logo visible
- [ ] Navigation fonctionne
- [ ] Couleurs correctes

---

### 2. Tester le Chatbot

```bash
curl -X POST https://zyatria-global.pages.dev/api/ai/chat \
  -H "Content-Type: application/json" \
  -d '{"message":"Bonjour"}'
```

**Résultat attendu :** Réponse JSON du chatbot

---

### 3. Tester Stripe

```bash
curl https://zyatria-global.pages.dev/api/stripe/test
```

**Résultat attendu :** `{"status":"ok","stripe":"connected"}`

---

### 4. Configurer le Webhook Stripe (IMPORTANT)

**⚠️ À FAIRE IMMÉDIATEMENT :**

1. Allez sur https://dashboard.stripe.com/webhooks
2. Cliquez sur **Add endpoint**
3. URL : `https://zyatria-global.pages.dev/api/stripe/webhook`
4. Sélectionnez les événements :
   - `checkout.session.completed`
   - `payment_intent.succeeded`
   - `payment_intent.payment_failed`
   - `customer.subscription.*`
5. Cliquez sur **Add endpoint**
6. Copiez le **Signing Secret** (whsec_...)
7. Vérifiez qu'il correspond à `STRIPE_WEBHOOK_SECRET` dans Cloudflare

---

### 5. Voir les Logs

```bash
wrangler pages deployment tail --project-name=zyatria-global
```

Cela affiche les logs en temps réel.

---

## 🐛 DÉPANNAGE

### Erreur : "Project not found"

```bash
# Créer le projet d'abord
wrangler pages project create zyatria-global

# Puis déployer
wrangler pages deploy dist --project-name=zyatria-global
```

---

### Erreur : "Authentication required"

```bash
wrangler logout
wrangler login
```

---

### Site blanc après déploiement

1. **Vérifier les variables :**
   - Dashboard → Workers & Pages → zyatria-global
   - Settings → Environment Variables
   - Les 6 variables doivent être présentes

2. **Voir les logs :**
```bash
wrangler pages deployment tail --project-name=zyatria-global
```

3. **Redéployer :**
```bash
wrangler pages deploy dist --project-name=zyatria-global
```

---

## 📊 COMMANDES UTILES

```bash
# Lister les déploiements
wrangler pages deployment list --project-name=zyatria-global

# Voir les détails
wrangler whoami

# Ouvrir le dashboard
wrangler pages project view zyatria-global

# Logs en temps réel
wrangler pages deployment tail --project-name=zyatria-global
```

---

## 🎉 FÉLICITATIONS !

Une fois déployé, votre site sera :

✅ **En ligne** sur https://zyatria-global.pages.dev
✅ **Rapide** avec CDN global (200+ villes)
✅ **Sécurisé** avec SSL automatique
✅ **Scalable** automatiquement
✅ **Gratuit** jusqu'à 500 builds/mois

---

## 🚀 LANCEZ LE DÉPLOIEMENT MAINTENANT !

**Choisissez votre méthode :**

**Méthode rapide (recommandée) :**
```bash
./deploy-now.sh
```

**Méthode manuelle :**
```bash
wrangler login
wrangler pages deploy dist --project-name=zyatria-global
```

---

**Une fois terminé, revenez me dire :**
- ✅ "Déploiement réussi" + l'URL
- ❌ "Erreur" + le message d'erreur

**Je suis là pour vous aider ! 🎯**
