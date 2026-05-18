# ✅ TEST RAPIDE - AVANT DÉPLOIEMENT

## 🎯 Tests à faire MAINTENANT (10 min)

### Test 1 : Build local (2 min)

```bash
# Vérifie que le build fonctionne
npm run build
```

**✅ Résultat attendu :**
```
✓ Completed in XXXms.
```

**❌ Si erreur :**
- Lis le message d'erreur
- Vérifie qu'il n'y a pas de fautes de syntaxe
- Relance `npm install` puis `npm run build`

---

### Test 2 : Serveur local (3 min)

```bash
# Lance le serveur de développement
npm run dev
```

**Ouvre :** http://localhost:4321

**Vérifie :**
- [ ] La page d'accueil s'affiche correctement
- [ ] Le menu de navigation fonctionne
- [ ] Les images se chargent
- [ ] Pas d'erreurs dans la console (F12)

---

### Test 3 : Liens Stripe (2 min)

**Ouvre ces 3 liens dans ton navigateur :**

1. **Starter :** https://buy.stripe.com/8x26oz6mP7Hr689eMI9oc00
2. **Professional :** https://buy.stripe.com/28E4gr9z12n7gMN1ZW9oc02
3. **Enterprise :** https://buy.stripe.com/7sYfZ93aDbXHgMN5c89oc05

**✅ Si les pages Stripe s'ouvrent → Parfait !**
**❌ Si erreur 404 → Note-le, on corrigera après**

---

### Test 4 : Formulaire Formspree (3 min)

**Sur http://localhost:4321 :**

1. Scroll vers le bas jusqu'au formulaire de contact
2. Remplis les champs :
   - Nom : Test
   - Email : ton-email@example.com
   - Message : Test de formulaire
3. Clique sur "Envoyer"
4. Vérifie ton email

**✅ Email reçu → Formspree fonctionne !**
**❌ Pas d'email → Vérifie ton compte Formspree**

---

## 🚀 SI TOUS LES TESTS SONT OK

**Tu es prêt pour le déploiement !**

### Option A : Script automatique (RECOMMANDÉ)

**Linux/Mac :**
```bash
./deploy-now.sh
```

**Windows PowerShell :**
```powershell
.\deploy-now.ps1
```

### Option B : Manuel

Suis le guide : `🚀_LANCEMENT_MAINTENANT.md`

---

## ❌ SI UN TEST ÉCHOUE

### Problème : Build échoue

```bash
# Nettoyer et réinstaller
rm -rf node_modules package-lock.json dist .astro
npm install
npm run build
```

### Problème : Liens Stripe ne fonctionnent pas

1. Va sur https://dashboard.stripe.com/payment-links
2. Vérifie que les liens sont actifs
3. Si besoin, crée de nouveaux liens
4. Mets à jour `src/config/stripe-links.ts`

### Problème : Formspree ne fonctionne pas

1. Va sur https://formspree.io/forms
2. V��rifie que le formulaire `xeelvrdl` existe
3. Vérifie l'email associé
4. Si besoin, crée un nouveau formulaire
5. Mets à jour l'ID dans `src/config/formspree.ts`

---

## 📊 CHECKLIST FINALE

Avant de déployer, vérifie que :

- [ ] `npm run build` fonctionne sans erreur
- [ ] Le site s'affiche correctement en local
- [ ] Au moins 1 lien Stripe fonctionne
- [ ] Le formulaire Formspree est configuré
- [ ] Tu as un compte GitHub
- [ ] Tu as un compte Cloudflare

**✅ Tout est OK ? → Lance le déploiement ! 🚀**

---

## 🎯 APRÈS LE DÉPLOIEMENT

Une fois déployé sur Cloudflare Pages :

1. **Teste l'URL de production**
   - Vérifie que toutes les pages fonctionnent
   - Teste le formulaire
   - Teste les liens Stripe

2. **PageSpeed Insights**
   - Va sur https://pagespeed.web.dev/
   - Entre l'URL de ton site
   - Objectif : Score > 85

3. **Mobile-Friendly Test**
   - Va sur https://search.google.com/test/mobile-friendly
   - Entre l'URL de ton site
   - Vérifie que c'est mobile-friendly

4. **Google Search Console**
   - Va sur https://search.google.com/search-console
   - Ajoute ton site
   - Soumets le sitemap : `https://ton-site.pages.dev/sitemap.xml`

---

## 🎉 PRÊT ?

**Lance les tests maintenant, puis déploie ! 🚀**

**Temps total estimé : 10 min de tests + 30 min de déploiement = 40 min**

**Bon lancement ! 🍀**
