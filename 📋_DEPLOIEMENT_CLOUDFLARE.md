# 📋 DÉPLOIEMENT CLOUDFLARE - GUIDE COMPLET

## ✅ INFORMATIONS DE VOTRE COMPTE

```
Account ID: b909407c9d4fcef1c9232d039138b851
Sous-domaine: zyatria-contact.workers.dev
```

## 🚀 MÉTHODE 1 : DÉPLOIEMENT VIA GITHUB (RECOMMANDÉ)

### Étape 1 : Vérifier que tout fonctionne localement
```bash
npm run dev
```
→ Ouvrez http://localhost:3000 et vérifiez que tout s'affiche

### Étape 2 : Tester le build
```bash
npm run build
```
→ Doit se terminer par "Complete!"

### Étape 3 : Push vers GitHub
```bash
git add .
git commit -m "Fix: Page blanche corrigée - configuration simplifiée"
git push origin main
```

### Étape 4 : Vérifier sur Cloudflare
1. Allez sur https://dash.cloudflare.com/b909407c9d4fcef1c9232d039138b851
2. Workers & Pages → Votre projet
3. Attendez le déploiement (2-3 minutes)
4. Cliquez sur le lien de votre site

## 🔧 MÉTHODE 2 : DÉPLOIEMENT DIRECT AVEC WRANGLER

### Étape 1 : Installer Wrangler (si pas déjà fait)
```bash
npm install -g wrangler
```

### Étape 2 : Se connecter à Cloudflare
```bash
wrangler login
```

### Étape 3 : Déployer
```bash
npm run build
wrangler pages deploy dist --project-name=zyatria-global
```

## 📊 VÉRIFICATION APRÈS DÉPLOIEMENT

### Checklist :
- [ ] Le site s'affiche (pas de page blanche)
- [ ] La navigation fonctionne
- [ ] Les sections s'affichent correctement
- [ ] Le chatbot apparaît en bas à droite
- [ ] Les boutons Pricing fonctionnent
- [ ] Le formulaire de contact fonctionne

## 🔍 SI LA PAGE EST BLANCHE SUR CLOUDFLARE

### 1. Vérifier les logs de déploiement
1. Dashboard Cloudflare
2. Pages → Votre projet → Deployments
3. Cliquez sur le dernier déploiement
4. Regardez les logs pour voir les erreurs

### 2. Vérifier les variables d'environnement
1. Dashboard Cloudflare
2. Pages → Votre projet → Settings → Environment variables
3. Ajoutez si manquant :
   ```
   FORMSPREE_FORM_ID = votre_id_formspree
   ```

### 3. Purger le cache et redéployer
1. Dans le déploiement, cliquez "Retry deployment"
2. Attendez 2-3 minutes
3. Testez à nouveau

### 4. Vérifier la configuration du build
Dans Settings → Builds and deployments :
```
Build command: npm run build
Build output directory: dist
Root directory: /
```

## ��� URLS DE VOTRE SITE

Après le déploiement, votre site sera accessible sur :

### URL Cloudflare Pages (automatique)
```
https://zyatria-global.pages.dev
```
ou
```
https://[nom-branche].[nom-projet].pages.dev
```

### URL Workers (si configuré)
```
https://zyatria-contact.workers.dev
```

### Domaine personnalisé (si configuré)
```
https://votre-domaine.com
```

## 🔑 VARIABLES D'ENVIRONNEMENT REQUISES

### Production (obligatoire)
```
FORMSPREE_FORM_ID = votre_id_formspree
```

### Optionnel (pour le chatbot)
```
MISTRAL_API_KEY = votre_clé_mistral
```

## 📝 COMMANDES UTILES

### Déployer
```bash
git push origin main
```

### Voir les logs
```bash
wrangler pages deployment tail
```

### Lister les déploiements
```bash
wrangler pages deployment list --project-name=zyatria-global
```

## 🆘 PROBLÈMES COURANTS

### Erreur : "Build failed"
→ Vérifiez que `npm run build` fonctionne localement

### Erreur : "Module not found"
→ Vérifiez que toutes les dépendances sont dans package.json

### Page blanche après déploiement
→ Vérifiez les variables d'environnement
→ Regardez les logs de déploiement
→ Testez en local d'abord

### Erreur 500
→ Vérifiez les logs Cloudflare
→ Vérifiez que le mode "server" est activé dans astro.config.mjs

## ✅ CHECKLIST FINALE

Avant de déployer :
- [ ] `npm run dev` fonctionne localement
- [ ] `npm run build` réussit sans erreur
- [ ] Tous les fichiers sont commités
- [ ] Les variables d'environnement sont configurées sur Cloudflare
- [ ] Le projet est connecté à GitHub

Après le déploiement :
- [ ] Le site s'affiche sur l'URL Cloudflare
- [ ] Toutes les sections sont visibles
- [ ] Les liens fonctionnent
- [ ] Le formulaire fonctionne
- [ ] Le chatbot fonctionne

## 🎯 PROCHAINES ÉTAPES

1. **Testez localement** : `npm run dev`
2. **Buildez** : `npm run build`
3. **Déployez** : `git push origin main`
4. **Vérifiez** : Ouvrez votre URL Cloudflare

---

**Votre Account ID :** b909407c9d4fcef1c9232d039138b851  
**Dashboard :** https://dash.cloudflare.com/b909407c9d4fcef1c9232d039138b851
