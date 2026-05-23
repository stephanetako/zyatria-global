# 🚀 DÉPLOIEMENT CLOUDFLARE PAGES - GUIDE COMPLET

## ✅ Prérequis
- ✅ Projet sur GitHub : https://github.com/votre-username/zyatria-global
- ✅ Compte Cloudflare (gratuit)
- ✅ Clé API Mistral
- ✅ Endpoint Formspree

---

## 📝 ÉTAPE 1 : Connexion à Cloudflare

1. Allez sur : https://dash.cloudflare.com/
2. Connectez-vous ou créez un compte gratuit
3. Dans le menu de gauche, cliquez sur **"Workers & Pages"**
4. Cliquez sur **"Create application"**
5. Sélectionnez l'onglet **"Pages"**
6. Cliquez sur **"Connect to Git"**

---

## 📝 ÉTAPE 2 : Connecter GitHub

1. Cliquez sur **"Connect GitHub"**
2. Autorisez Cloudflare à accéder à votre compte GitHub
3. Sélectionnez le repository **"zyatria-global"**
4. Cliquez sur **"Begin setup"**

---

## 📝 ÉTAPE 3 : Configuration du Build

### Paramètres de build :

```
Project name: zyatria-global
Production branch: main
Build command: npm run build
Build output directory: dist
```

### Framework preset :
Sélectionnez **"Astro"** dans la liste déroulante

---

## 📝 ÉTAPE 4 : Variables d'environnement

Cliquez sur **"Add environment variable"** et ajoutez :

### Variable 1 : MISTRAL_API_KEY
```
Name: MISTRAL_API_KEY
Value: [Votre clé API Mistral]
```

### Variable 2 : FORMSPREE_ENDPOINT
```
Name: FORMSPREE_ENDPOINT
Value: https://formspree.io/f/xnnqnoqy
```

### Variable 3 : FORMSPREE_EMAIL
```
Name: FORMSPREE_EMAIL
Value: contact@zyatria.global
```

---

## 📝 ÉTAPE 5 : Lancer le déploiement

1. Vérifiez tous les paramètres
2. Cliquez sur **"Save and Deploy"**
3. Attendez 2-5 minutes (le build prend du temps)

---

## 📝 ÉTAPE 6 : Vérification

Une fois le déploiement terminé :

1. Cloudflare vous donnera une URL : `https://zyatria-global.pages.dev`
2. Cliquez sur l'URL pour ouvrir votre site
3. Testez :
   - ✅ Navigation
   - ✅ Formulaires
   - ✅ Chatbot Mistral
   - ✅ Responsive design

---

## 🔧 ÉTAPE 7 : Configuration du domaine personnalisé (Optionnel)

Si vous avez un domaine (ex: zyatria.global) :

1. Dans Cloudflare Pages, allez dans **"Custom domains"**
2. Cliquez sur **"Set up a custom domain"**
3. Entrez votre domaine : `zyatria.global`
4. Suivez les instructions pour configurer les DNS

---

## 🎯 DÉPLOIEMENTS AUTOMATIQUES

Maintenant, chaque fois que vous poussez sur GitHub :
- ✅ Cloudflare détecte automatiquement les changements
- ✅ Lance un nouveau build
- ✅ Déploie la nouvelle version
- ✅ Votre site est mis à jour en 2-5 minutes

---

## 🐛 DÉPANNAGE

### Erreur de build ?
1. Vérifiez les logs dans Cloudflare
2. Assurez-vous que toutes les variables d'environnement sont définies
3. Vérifiez que le build fonctionne localement : `npm run build`

### Chatbot ne fonctionne pas ?
1. Vérifiez que `MISTRAL_API_KEY` est bien définie
2. Testez l'API localement
3. Vérifiez les logs du navigateur (F12 > Console)

### Formulaires ne fonctionnent pas ?
1. Confirmez votre email sur Formspree
2. Vérifiez que `FORMSPREE_ENDPOINT` est correct
3. Testez en mode développement d'abord

---

## 📊 MONITORING

### Cloudflare Analytics
- Visitez **"Analytics & Logs"** dans votre projet
- Voyez le trafic, les erreurs, les performances

### Formspree Dashboard
- https://formspree.io/forms
- Voyez toutes les soumissions de formulaires

---

## 🎉 FÉLICITATIONS !

Votre site est maintenant en ligne ! 🚀

**URL de production :** `https://zyatria-global.pages.dev`

---

## 📞 BESOIN D'AIDE ?

- Documentation Cloudflare Pages : https://developers.cloudflare.com/pages/
- Documentation Astro : https://docs.astro.build/
- Support Formspree : https://help.formspree.io/

---

**Créé le :** 2026-05-23
**Dernière mise à jour :** 2026-05-23
