# 👉 DÉPLOIEMENT EN 5 ÉTAPES SIMPLES

## 🎯 Objectif : Mettre votre site en ligne en 10 minutes

---

## ✅ ÉTAPE 1 : Ouvrir Cloudflare
**Temps : 1 minute**

1. Allez sur : **https://dash.cloudflare.com/**
2. Connectez-vous (ou créez un compte gratuit)
3. Cliquez sur **"Workers & Pages"** dans le menu de gauche

---

## ✅ ÉTAPE 2 : Créer le projet
**Temps : 2 minutes**

1. Cliquez sur **"Create application"**
2. Cliquez sur l'onglet **"Pages"**
3. Cliquez sur **"Connect to Git"**
4. Cliquez sur **"Connect GitHub"**
5. Autorisez Cloudflare
6. Sélectionnez **"zyatria-global"**
7. Cliquez sur **"Begin setup"**

---

## ✅ ÉTAPE 3 : Configuration
**Temps : 2 minutes**

### Remplissez ces champs :

```
Project name: zyatria-global
Production branch: main
Framework preset: Astro
Build command: npm run build
Build output directory: dist
```

---

## ✅ ÉTAPE 4 : Variables d'environnement
**Temps : 3 minutes**

Cliquez sur **"Add environment variable"** et ajoutez ces 3 variables :

### 1️⃣ MISTRAL_API_KEY
```
Name: MISTRAL_API_KEY
Value: [Votre clé API Mistral - celle que vous avez dans .env]
```

### 2️⃣ FORMSPREE_ENDPOINT
```
Name: FORMSPREE_ENDPOINT
Value: https://formspree.io/f/xnnqnoqy
```

### 3️⃣ FORMSPREE_EMAIL
```
Name: FORMSPREE_EMAIL
Value: contact@zyatria.global
```

---

## ✅ ÉTAPE 5 : Déployer !
**Temps : 2 minutes (+ 3-5 min de build)**

1. Vérifiez que tout est correct
2. Cliquez sur **"Save and Deploy"**
3. ☕ Attendez 3-5 minutes pendant le build
4. 🎉 Votre site est en ligne !

---

## 🎊 RÉSULTAT

Cloudflare vous donnera une URL comme :
```
https://zyatria-global.pages.dev
```

**Testez votre site :**
- ✅ Ouvrez l'URL
- ✅ Testez le chatbot
- ✅ Testez un formulaire
- ✅ Naviguez sur les pages

---

## 🔄 MISES À JOUR AUTOMATIQUES

Maintenant, chaque fois que vous faites un push sur GitHub :
```powershell
.\push-manuel.ps1
```

Cloudflare détecte automatiquement et redéploie ! 🚀

---

## 🆘 PROBLÈME ?

### Le build échoue ?
- Vérifiez les logs dans Cloudflare
- Assurez-vous que les 3 variables d'environnement sont définies

### Le chatbot ne marche pas ?
- Vérifiez que `MISTRAL_API_KEY` est correcte
- Ouvrez la console du navigateur (F12) pour voir les erreurs

### Les formulaires ne marchent pas ?
- Confirmez votre email sur Formspree
- Vérifiez le dashboard Formspree : https://formspree.io/forms

---

## 📞 BESOIN D'AIDE ?

Dites-moi où vous êtes bloqué et je vous aide ! 😊

---

**🎯 PRÊT ? Allez sur https://dash.cloudflare.com/ et commencez !**
