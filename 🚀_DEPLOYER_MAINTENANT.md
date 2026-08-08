# 🚀 DÉPLOYER MAINTENANT - COMMANDES RAPIDES

## ✅ PRÉ-REQUIS COMPLÉTÉS

- ✅ Build réussi (4.4 MB)
- ✅ Variables configurées dans Cloudflare
- ✅ Projet prêt pour production

---

## 🎯 MÉTHODE 1 : WRANGLER CLI (RECOMMANDÉ)

### Étape 1 : Vérifier Wrangler

```bash
wrangler --version
```

**Si non installé :**
```bash
npm install -g wrangler
```

---

### Étape 2 : Se Connecter

```bash
wrangler login
```

Cela ouvrira votre navigateur pour l'authentification Cloudflare.

---

### Étape 3 : Déployer

```bash
wrangler pages deploy dist --project-name=zyatria-global
```

**Résultat attendu :**
```
✨ Success! Uploaded 245 files (4.4 MB total)
✨ Deployment complete! 
🌎 https://zyatria-global.pages.dev
```

---

## 🎯 MÉTHODE 2 : VIA GIT (AUTOMATIQUE)

Si vous avez connecté GitHub à Cloudflare :

```bash
# Commiter les changements
git add .
git commit -m "🚀 Production deployment with all variables configured"
git push origin main
```

Cloudflare déploiera automatiquement !

---

## 🎯 MÉTHODE 3 : UPLOAD MANUEL

### Créer une archive

```bash
cd dist
zip -r ../zyatria-global-dist.zip .
cd ..
```

### Upload sur Cloudflare

1. Allez sur https://dash.cloudflare.com/
2. **Workers & Pages** → `zyatria-global`
3. **Deployments** → **Upload assets**
4. Glissez-déposez `zyatria-global-dist.zip`

---

## ✅ APRÈS LE DÉPLOIEMENT

### 1. Vérifier le Site

Ouvrez : `https://zyatria-global.pages.dev`

**Checklist :**
- [ ] Page d'accueil charge
- [ ] Logo visible
- [ ] Navigation fonctionne
- [ ] Design correct

---

### 2. Tester le Chatbot

```bash
curl https://zyatria-global.pages.dev/api/ai/chat \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"message":"Bonjour, comment ça va?"}'
```

**Résultat attendu :** Réponse JSON avec le message du chatbot

---

### 3. Tester le Formulaire

1. Allez sur `https://zyatria-global.pages.dev/contact-simple`
2. Remplissez le formulaire
3. Soumettez
4. Vérifiez votre email Formspree

---

### 4. Tester Stripe

```bash
curl https://zyatria-global.pages.dev/api/stripe/test
```

**Résultat attendu :** `{"status":"ok","stripe":"connected"}`

---

### 5. Voir les Logs

```bash
wrangler pages deployment tail --project-name=zyatria-global
```

Cela affichera les logs en temps réel.

---

## 🐛 DÉPANNAGE RAPIDE

### Problème : "Project not found"

**Solution :**
```bash
# Créer le projet d'abord
wrangler pages project create zyatria-global

# Puis déployer
wrangler pages deploy dist --project-name=zyatria-global
```

---

### Problème : "Authentication required"

**Solution :**
```bash
wrangler logout
wrangler login
```

---

### Problème : Site blanc après déploiement

**Solutions :**
1. Vérifier les logs :
```bash
wrangler pages deployment tail --project-name=zyatria-global
```

2. Vérifier les variables dans Cloudflare Dashboard

3. Redéployer :
```bash
wrangler pages deploy dist --project-name=zyatria-global
```

---

### Problème : Chatbot ne répond pas

**Vérifications :**
1. `MISTRAL_API_KEY` est bien configuré
2. Tester l'API Mistral directement :
```bash
curl https://api.mistral.ai/v1/models \
  -H "Authorization: Bearer VOTRE_CLE_MISTRAL"
```

3. Vérifier les crédits Mistral sur https://console.mistral.ai/

---

### Problème : Formulaire ne s'envoie pas

**Vérifications :**
1. `FORMSPREE_FORM_ID` est correct
2. Quota Formspree non dépassé (50/mois gratuit)
3. Vérifier sur https://formspree.io/forms

---

## 📊 COMMANDES UTILES

```bash
# Lister les déploiements
wrangler pages deployment list --project-name=zyatria-global

# Voir les détails d'un déploiement
wrangler pages deployment view <deployment-id> --project-name=zyatria-global

# Promouvoir un déploiement (rollback)
wrangler pages deployment promote <deployment-id> --project-name=zyatria-global

# Voir les logs en temps réel
wrangler pages deployment tail --project-name=zyatria-global

# Ouvrir le dashboard
wrangler pages project view zyatria-global
```

---

## 🎉 FÉLICITATIONS !

Une fois déployé, votre site sera :

✅ **Accessible mondialement** via CDN Cloudflare
✅ **Ultra-rapide** avec edge computing
✅ **Sécurisé** avec SSL automatique
✅ **Scalable** automatiquement
✅ **Gratuit** jusqu'à 500 builds/mois

**URL de production :** https://zyatria-global.pages.dev

---

## 🔄 DÉPLOIEMENTS FUTURS

Pour les prochains déploiements, c'est encore plus simple :

```bash
# Build + Deploy en 2 commandes
npm run build
wrangler pages deploy dist --project-name=zyatria-global
```

Ou si vous utilisez Git :
```bash
git add .
git commit -m "Update"
git push
```

---

## 📞 PROCHAINES ÉTAPES RECOMMANDÉES

1. **Configurer un domaine personnalisé**
   - Dashboard → Custom domains → Add domain

2. **Activer les Analytics**
   - Dashboard → Analytics → Enable

3. **Configurer les Webhooks Stripe**
   - URL: `https://zyatria-global.pages.dev/api/stripe/webhook`

4. **Tester tous les formulaires**
   - Contact, Lead Qualification, etc.

5. **Optimiser le SEO**
   - Vérifier avec Lighthouse
   - Soumettre le sitemap à Google

---

**👉 PRÊT À DÉPLOYER ? LANCEZ LA COMMANDE !** 🚀

```bash
wrangler pages deploy dist --project-name=zyatria-global
```
