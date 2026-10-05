# 🚀 GUIDE DE DÉPLOIEMENT FINAL - CLOUDFLARE PAGES

**Date:** 28 septembre 2025  
**Statut:** ✅ Prêt pour déploiement  
**Durée estimée:** 10-15 minutes

---

## 🎯 MÉTHODE RECOMMANDÉE : GitHub + Cloudflare

Cette méthode est la plus simple et permet les déploiements automatiques.

---

## 📋 ÉTAPE 1 : PRÉPARER LE CODE

### 1.1 Vérifier que tout est prêt
```bash
# Lancer le test complet
./test-tout-final.sh
```

**Résultat attendu:** ✅ 18/18 tests réussis (100%)

### 1.2 Créer un commit
```bash
git add .
git commit -m "✅ Site complet - Tous agents activés - Prêt production"
```

---

## 📋 ÉTAPE 2 : POUSSER SUR GITHUB

### 2.1 Si vous n'avez pas encore de repository GitHub

```bash
# Créer un nouveau repository sur GitHub.com
# Puis exécuter:

git remote add origin https://github.com/VOTRE-USERNAME/zyatria-global.git
git branch -M main
git push -u origin main
```

### 2.2 Si vous avez déjà un repository

```bash
git push origin main
```

---

## 📋 ÉTAPE 3 : CONFIGURER CLOUDFLARE PAGES

### 3.1 Aller sur Cloudflare Dashboard
1. Connectez-vous sur https://dash.cloudflare.com
2. Cliquez sur **"Workers & Pages"** dans le menu de gauche
3. Cliquez sur **"Create application"**
4. Sélectionnez **"Pages"**
5. Cliquez sur **"Connect to Git"**

### 3.2 Connecter GitHub
1. Sélectionnez votre repository **zyatria-global**
2. Cliquez sur **"Begin setup"**

### 3.3 Configuration du build

**Framework preset:** `Astro`

**Build command:**
```bash
npm run build
```

**Build output directory:**
```
dist
```

**Root directory:** (laisser vide)

**Environment variables (Node.js version):**
```
NODE_VERSION=18
```

### 3.4 Cliquer sur "Save and Deploy"

⏳ Le premier déploiement prendra 2-3 minutes.

---

## 📋 ÉTAPE 4 : CONFIGURER LES VARIABLES D'ENVIRONNEMENT

### 4.1 Aller dans Settings > Environment variables

Ajouter ces variables (une par une):

#### Variables de Production

**MISTRAL_API_KEY**
```
Hy1Ja5hxTfLBsgJVJgAvrUdVtQL5OdWD2aRB31Z0bgY8pHsWrczFMBt68nkTzje9u96WCnuAyBjf7TFw3Jqb000Cfx4xRu
```

**STRIPE_PUBLIC_KEY**
```
pk_live_51TANJR1KuPEygLyRld1fRaAfZbuYIH1q0O5utsczs27opHGGVI8TataL5cSOdTI0hg4hVmLB6uHNLU7lgjBhwxcT00FU3wKGFS
```

**STRIPE_SECRET_KEY**
```
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
```

**STRIPE_WEBHOOK_SECRET**
```
whsec_d29277bba1b75a2b488b3ecc1c4ca969e497e2d9aa40231d3d11df56b5724564
```

**FORMSPREE_FORM_ID**
```
xbdedonn
```

### 4.2 Sauvegarder

Cliquez sur **"Save"** après chaque variable.

---

## 📋 ÉTAPE 5 : REDÉPLOYER AVEC LES VARIABLES

1. Retournez sur l'onglet **"Deployments"**
2. Cliquez sur **"Retry deployment"** sur le dernier déploiement
3. Ou faites un nouveau commit et push pour déclencher un nouveau déploiement

---

## 📋 ÉTAPE 6 : CONFIGURER LE DOMAINE (OPTIONNEL)

### 6.1 Domaine personnalisé

1. Allez dans **"Custom domains"**
2. Cliquez sur **"Set up a custom domain"**
3. Entrez votre domaine (ex: `zyatria.global`)
4. Suivez les instructions pour configurer les DNS

### 6.2 Domaine Cloudflare Pages (gratuit)

Votre site sera automatiquement disponible sur:
```
https://zyatria-global.pages.dev
```

Ou un nom similaire généré par Cloudflare.

---

## 📋 ÉTAPE 7 : VÉRIFIER LE DÉPLOIEMENT

### 7.1 Ouvrir le site

Cliquez sur le lien fourni par Cloudflare (ex: `https://zyatria-global.pages.dev`)

### 7.2 Tests à effectuer

#### ✅ Test 1: Page d'accueil
- [ ] La page s'affiche correctement
- [ ] Les couleurs sont bonnes (orange/terracotta)
- [ ] Les sections sont visibles

#### ✅ Test 2: Chatbot
- [ ] Le bouton chatbot est visible en bas à droite
- [ ] Il pulse avec un dégradé bleu→violet→rose
- [ ] En cliquant, le chatbot s'ouvre
- [ ] Le message de bienvenue s'affiche
- [ ] Les suggestions sont cliquables

#### ✅ Test 3: Paiements Stripe
- [ ] Aller sur la section Pricing
- [ ] Cliquer sur "Commencer" pour Professional
- [ ] Vérifier la redirection vers Stripe
- [ ] L'URL doit contenir `buy.stripe.com`

#### ✅ Test 4: Formulaires
- [ ] Remplir le formulaire de contact
- [ ] Vérifier la soumission
- [ ] Tester la newsletter

---

## 🔧 DÉPANNAGE

### Problème: Le site affiche une page blanche

**Solution:**
1. Vérifier les logs de build dans Cloudflare
2. S'assurer que toutes les variables d'environnement sont configurées
3. Vérifier que `NODE_VERSION=18` est défini

### Problème: Le chatbot ne s'affiche pas

**Solution:**
1. Ouvrir la console du navigateur (F12)
2. Vérifier s'il y a des erreurs JavaScript
3. S'assurer que `MISTRAL_API_KEY` est configurée

### Problème: Les paiements Stripe ne fonctionnent pas

**Solution:**
1. Vérifier que `STRIPE_PUBLIC_KEY` est configurée
2. Vérifier que les liens Stripe sont corrects dans `src/config/stripe-links.ts`
3. Tester avec une carte de test: `4242 4242 4242 4242`

### Problème: Les formulaires ne s'envoient pas

**Solution:**
1. Vérifier que `FORMSPREE_FORM_ID=xbdedonn` est configurée
2. Vérifier sur Formspree.io que le formulaire est actif
3. Vérifier les logs de soumission sur Formspree

---

## 📊 MÉTRIQUES DE SUCCÈS

Après le déploiement, vous devriez voir:

- ✅ **Build time:** 2-3 minutes
- ✅ **Deploy time:** 30-60 secondes
- ✅ **Page load:** < 2 secondes
- ✅ **Lighthouse score:** > 90/100
- ✅ **Chatbot visible:** Immédiatement
- ✅ **Formulaires fonctionnels:** 100%
- ✅ **Paiements Stripe:** Opérationnels

---

## 🎯 DÉPLOIEMENTS FUTURS

### Déploiement automatique

Chaque fois que vous faites un `git push`, Cloudflare déploiera automatiquement:

```bash
# Faire des modifications
git add .
git commit -m "Amélioration XYZ"
git push origin main

# Cloudflare déploie automatiquement en 2-3 minutes
```

### Déploiement manuel

Si vous préférez déployer manuellement:

```bash
npm run build
wrangler pages deploy dist
```

---

## 📞 SUPPORT

### Logs de build
```
Cloudflare Dashboard > Workers & Pages > Votre projet > Deployments > Cliquer sur un déploiement
```

### Logs en temps réel
```
Cloudflare Dashboard > Workers & Pages > Votre projet > Logs
```

### Variables d'environnement
```
Cloudflare Dashboard > Workers & Pages > Votre projet > Settings > Environment variables
```

---

## ✅ CHECKLIST FINALE

Avant de considérer le déploiement comme terminé:

- [ ] Le site est accessible via l'URL Cloudflare
- [ ] La page d'accueil s'affiche correctement
- [ ] Le chatbot est visible et fonctionne
- [ ] Les liens Stripe redirigent correctement
- [ ] Les formulaires s'envoient
- [ ] Toutes les variables d'environnement sont configurées
- [ ] Le domaine personnalisé est configuré (optionnel)
- [ ] Les tests de performance sont bons (Lighthouse)

---

## 🎉 FÉLICITATIONS !

Une fois tous les tests passés, votre site est **EN PRODUCTION** ! 🚀

**URL de production:** `https://zyatria-global.pages.dev`  
(ou votre domaine personnalisé)

---

## 📈 PROCHAINES ÉTAPES

1. **Analytics:** Configurer Cloudflare Web Analytics
2. **Monitoring:** Activer les alertes de disponibilité
3. **SEO:** Soumettre le sitemap à Google Search Console
4. **Marketing:** Partager le site sur les réseaux sociaux
5. **Support:** Configurer les notifications Formspree
6. **Stripe:** Activer les webhooks pour les paiements

---

**Dernière mise à jour:** 28 septembre 2025  
**Statut:** ✅ Prêt pour déploiement  
**Temps estimé:** 10-15 minutes
