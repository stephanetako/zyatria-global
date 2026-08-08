# 🚀 GUIDE COMPLET - DÉPLOIEMENT CLOUDFLARE PAGES

## 📋 PRÉ-REQUIS

- ✅ Build terminé (`npm run build`)
- ✅ Variables d'environnement configurées
- ✅ Compte Cloudflare créé
- ✅ Wrangler CLI installé

---

## 🎯 MÉTHODE 1 : DÉPLOIEMENT VIA WRANGLER (RECOMMANDÉ)

### Étape 1 : Vérifier Wrangler

```bash
# Vérifier que Wrangler est installé
wrangler --version

# Si non installé
npm install -g wrangler
```

### Étape 2 : Se Connecter à Cloudflare

```bash
# Authentification
wrangler login
```

Cela ouvrira votre navigateur pour vous connecter à Cloudflare.

### Étape 3 : Déployer

```bash
# Déployer le dossier dist
wrangler pages deploy dist --project-name=zyatria-global
```

**Résultat attendu:**
```
✨ Success! Uploaded 245 files (4.4 MB total)
✨ Deployment complete! Take a peek over at https://zyatria-global.pages.dev
```

### Étape 4 : Vérifier le Déploiement

```bash
# Ouvrir le site dans le navigateur
wrangler pages deployment list --project-name=zyatria-global
```

---

## 🎯 MÉTHODE 2 : DÉPLOIEMENT VIA GIT (AUTOMATIQUE)

### Étape 1 : Connecter GitHub à Cloudflare

1. **Allez sur Cloudflare Dashboard**
   - https://dash.cloudflare.com/

2. **Workers & Pages** → **Create application**

3. **Pages** → **Connect to Git**

4. **Sélectionnez votre repository GitHub**
   - Autorisez Cloudflare à accéder à votre repo

### Étape 2 : Configurer le Build

```yaml
Build command: npm run build
Build output directory: dist
Root directory: /
Node version: 18
```

### Étape 3 : Configurer les Variables

Ajoutez toutes vos variables d'environnement dans:
**Settings** → **Environment Variables**

### Étape 4 : Déployer

```bash
# Commitez vos changements
git add .
git commit -m "🚀 Ready for production"
git push origin main
```

**Cloudflare déploiera automatiquement à chaque push !**

---

## 🎯 MÉTHODE 3 : DÉPLOIEMENT MANUEL (DRAG & DROP)

### Étape 1 : Créer une Archive

```bash
# Créer un zip du dossier dist
cd dist
zip -r ../zyatria-global-dist.zip .
cd ..
```

### Étape 2 : Upload sur Cloudflare

1. **Allez sur Cloudflare Dashboard**
2. **Workers & Pages** → **Create application**
3. **Pages** → **Upload assets**
4. **Glissez-déposez** `zyatria-global-dist.zip`
5. **Deploy**

---

## ✅ VÉRIFICATION POST-DÉPLOIEMENT

### 1. Tester la Page d'Accueil

```bash
curl https://zyatria-global.pages.dev/
```

### 2. Tester le Chatbot

```bash
curl https://zyatria-global.pages.dev/api/ai/chat \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"message":"Bonjour"}'
```

### 3. Tester Stripe

```bash
curl https://zyatria-global.pages.dev/api/stripe/test
```

### 4. Vérifier les Logs

```bash
# Voir les logs en temps réel
wrangler pages deployment tail --project-name=zyatria-global
```

---

## 🔧 CONFIGURATION AVANCÉE

### Custom Domain (Domaine Personnalisé)

1. **Cloudflare Dashboard** → **Workers & Pages** → `zyatria-global`
2. **Custom domains** → **Set up a custom domain**
3. Ajoutez votre domaine (ex: `zyatria.global`)
4. Cloudflare configurera automatiquement le DNS

### Preview Deployments (Déploiements de Prévisualisation)

Chaque branche Git aura son propre URL de prévisualisation:
```
main → https://zyatria-global.pages.dev
dev → https://dev.zyatria-global.pages.dev
feature-x → https://feature-x.zyatria-global.pages.dev
```

### Rollback (Retour en Arrière)

```bash
# Lister les déploiements
wrangler pages deployment list --project-name=zyatria-global

# Promouvoir un ancien déploiement
wrangler pages deployment promote <deployment-id> --project-name=zyatria-global
```

---

## 🐛 DÉPANNAGE

### Erreur: "Invalid binding `SESSION`"

**Solution:** Ajoutez dans `wrangler.toml`:
```toml
[[kv_namespaces]]
binding = "SESSION"
id = "votre_kv_namespace_id"
```

Créez le namespace:
```bash
wrangler kv:namespace create "SESSION"
```

### Erreur: "Build failed"

**Vérifiez:**
1. `npm run build` fonctionne localement
2. Node version = 18 ou 20
3. Toutes les dépendances sont dans `package.json`

### Erreur: "Environment variable not found"

**Solution:**
1. Vérifiez que les variables sont ajoutées dans Cloudflare
2. Redéployez après avoir ajouté les variables
3. Vérifiez l'orthographe des noms de variables

### Site Blanc / Erreur 500

**Vérifiez:**
1. Les logs: `wrangler pages deployment tail`
2. Les variables d'environnement
3. Les routes API dans `_routes.json`

---

## 📊 MONITORING

### Analytics Cloudflare

1. **Dashboard** → **Workers & Pages** → `zyatria-global`
2. **Analytics** → Voir les métriques:
   - Requêtes par seconde
   - Temps de réponse
   - Erreurs
   - Bande passante

### Web Analytics (Gratuit)

1. **Dashboard** → **Analytics & Logs** → **Web Analytics**
2. Ajoutez le snippet à votre site
3. Suivez les visiteurs en temps réel

---

## 🔒 SÉCURITÉ

### Headers de Sécurité

Ajoutez dans `wrangler.toml`:
```toml
[env.production]
routes = [
  { pattern = "/*", custom_headers = [
    { name = "X-Frame-Options", value = "DENY" },
    { name = "X-Content-Type-Options", value = "nosniff" },
    { name = "Referrer-Policy", value = "strict-origin-when-cross-origin" },
    { name = "Permissions-Policy", value = "geolocation=(), microphone=(), camera=()" }
  ]}
]
```

### Rate Limiting

Cloudflare offre un rate limiting gratuit:
1. **Security** → **WAF** → **Rate limiting rules**
2. Créez une règle (ex: 100 req/min par IP)

---

## 💰 COÛTS

### Cloudflare Pages (Gratuit)
- ✅ Bande passante illimitée
- ✅ 500 builds/mois
- ✅ Déploiements illimités
- ✅ SSL gratuit
- ✅ DDoS protection

### Cloudflare Workers (Gratuit)
- ✅ 100,000 requêtes/jour
- ✅ 10ms CPU time par requête

**Dépassement:** 5$/mois pour 10M requêtes supplémentaires

---

## 🎯 CHECKLIST FINALE

### Avant le Déploiement
- [ ] Build local réussi
- [ ] Variables d'environnement configurées
- [ ] Tests locaux passés
- [ ] `.env` dans `.gitignore`
- [ ] Documentation à jour

### Après le Déploiement
- [ ] Site accessible
- [ ] Chatbot fonctionne
- [ ] Formulaires fonctionnent
- [ ] Paiements Stripe fonctionnent
- [ ] Analytics configurés
- [ ] Custom domain configuré (optionnel)
- [ ] SSL actif (automatique)

---

## 🚀 COMMANDES RAPIDES

```bash
# Build
npm run build

# Déployer
wrangler pages deploy dist --project-name=zyatria-global

# Voir les logs
wrangler pages deployment tail --project-name=zyatria-global

# Lister les déploiements
wrangler pages deployment list --project-name=zyatria-global

# Ouvrir le dashboard
wrangler pages project view zyatria-global
```

---

## 📚 RESSOURCES

- **Cloudflare Pages Docs:** https://developers.cloudflare.com/pages/
- **Wrangler CLI:** https://developers.cloudflare.com/workers/wrangler/
- **Astro + Cloudflare:** https://docs.astro.build/en/guides/deploy/cloudflare/
- **Support Cloudflare:** https://community.cloudflare.com/

---

## 🎉 FÉLICITATIONS !

Votre site est maintenant déployé sur Cloudflare Pages avec:
- ⚡ Performance mondiale (CDN)
- 🔒 SSL automatique
- 🚀 Déploiements automatiques
- 📊 Analytics intégrés
- 💰 Gratuit jusqu'à 500 builds/mois

**URL de production:** https://zyatria-global.pages.dev

---

**👉 Prochaine étape : Configurez votre domaine personnalisé !**
