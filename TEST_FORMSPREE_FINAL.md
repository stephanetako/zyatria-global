# 📧 TEST FORMSPREE - GUIDE VISUEL

## 🎯 OBJECTIF
Vérifier que le formulaire de contact envoie bien les emails

---

## 📋 ÉTAPES

### 1️⃣ Lance le serveur (si pas déjà fait)

```bash
npm run dev
```

**Attends de voir :**
```
🚀 astro v5.x.x ready in XXX ms

┃ Local    http://localhost:4321/
┃ Network  use --host to expose
```

---

### 2️⃣ Ouvre le site

**Dans ton navigateur, va sur :**
```
http://localhost:4321
```

---

### 3️⃣ Trouve le formulaire

**Option A : Scroll vers le bas**
- Scroll jusqu'à la section "Contact"
- Tu verras un formulaire avec 3 champs

**Option B : Clique sur "Contact" dans le menu**
- En haut de la page, clique sur "Contact"
- Ça te scrollera automatiquement au formulaire

---

### 4️⃣ Remplis le formulaire

**Champs à remplir :**

```
Nom complet : Test ZyatrIA
Email : ton-vrai-email@example.com  ← IMPORTANT : Utilise ton vrai email !
Message : Test du formulaire de contact - Déploiement imminent 🚀
```

---

### 5️⃣ Envoie le formulaire

**Clique sur le bouton "Envoyer le message"**

**Tu devrais voir :**
- ✅ Un message de confirmation
- ✅ Le formulaire se vide
- ✅ Un message "Merci ! Votre message a été envoyé."

---

### 6️⃣ Vérifie ton email

**Ouvre ta boîte email** (celle que tu as utilisée dans le formulaire)

**Cherche un email de :**
- Expéditeur : `noreply@formspree.io`
- Sujet : `New submission from your form`

**⏱️ Délai :** 30 secondes à 2 minutes

**❌ Pas d'email ?**
- Vérifie tes **SPAMS** / **Courrier indésirable**
- Attends encore 1-2 minutes
- Vérifie que tu as utilisé le bon email

---

### 7️⃣ Vérifie le contenu de l'email

**L'email devrait contenir :**
```
Name: Test ZyatrIA
Email: ton-vrai-email@example.com
Message: Test du formulaire de contact - Déploiement imminent 🚀
```

---

## ✅ RÉSULTAT ATTENDU

**Si tu as reçu l'email :**
```
✅ FORMSPREE FONCTIONNE PARFAITEMENT !
```

**Tu peux passer au déploiement ! 🚀**

---

## ❌ DÉPANNAGE

### Problème : Pas d'email reçu

**Solution 1 : Vérifie ton compte Formspree**

1. Va sur https://formspree.io/forms
2. Connecte-toi
3. Cherche le formulaire `xeelvrdl`
4. Vérifie l'email associé au formulaire
5. Vérifie que le formulaire est actif

**Solution 2 : Vérifie les spams**

- Ouvre ton dossier SPAM
- Cherche "formspree"
- Marque comme "Non spam" si trouvé

**Solution 3 : Teste avec un autre email**

- Utilise un autre email (Gmail, Outlook, etc.)
- Renvoie le formulaire
- Vérifie la réception

**Solution 4 : Vérifie la console du navigateur**

1. Ouvre les DevTools (F12)
2. Va dans l'onglet "Console"
3. Envoie le formulaire
4. Cherche des erreurs en rouge
5. Copie l'erreur si tu en vois une

---

## 🔍 VÉRIFICATION AVANCÉE

### Voir les soumissions sur Formspree

1. Va sur https://formspree.io/forms
2. Clique sur ton formulaire `xeelvrdl`
3. Va dans l'onglet "Submissions"
4. Tu devrais voir ta soumission de test

**Si tu la vois :**
- ✅ Le formulaire fonctionne
- ❌ Mais l'email n'est pas envoyé
- → Vérifie les paramètres email du formulaire

---

## 📊 CHECKLIST

- [ ] Serveur lancé (`npm run dev`)
- [ ] Site ouvert (http://localhost:4321)
- [ ] Formulaire trouvé (section Contact)
- [ ] Formulaire rempli avec un vrai email
- [ ] Formulaire envoyé (bouton cliqué)
- [ ] Message de confirmation affiché
- [ ] Email reçu (vérifie spams)
- [ ] Contenu de l'email correct

---

## 🎉 SI TOUT FONCTIONNE

**FORMSPREE EST PRÊT ! ✅**

**Prochaine étape : DÉPLOIEMENT ! 🚀**

---

## 📞 BESOIN D'AIDE ?

Si le formulaire ne fonctionne pas :

1. **Copie l'erreur** (si tu en vois une)
2. **Vérifie ton compte Formspree**
3. **Teste avec un autre email**
4. **Demande de l'aide** avec les détails de l'erreur

---

**Temps estimé : 1-2 minutes**

**Bonne chance ! 🍀**
