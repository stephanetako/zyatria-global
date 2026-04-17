
# 🚀 FORMSPREE - DÉMARRAGE RAPIDE

## ⚡ 3 minutes pour activer les formulaires

---

## ✅ CE QUI EST DÉJÀ FAIT

Votre email : **zyatria.contact@gmail.com** ✨

Les formulaires sont déjà intégrés dans le code :
- ✅ Formulaire Contact (page d'accueil)
- ✅ Formulaire Demo (page /demo)

---

## 🎯 CE QU'IL VOUS RESTE À FAIRE

### 1️⃣ Créer un compte Formspree (2 min)

**👉 https://formspree.io/signup**

- Inscrivez-vous avec : `zyatria.contact@gmail.com`
- Confirmez votre email

### 2️⃣ Créer un formulaire (1 min)

1. Cliquez sur **"+ New Form"**
2. Nom : **ZyatrIA Contact**
3. Email : **zyatria.contact@gmail.com**
4. Cliquez **"Create"**

### 3️⃣ Copier le Form ID (30 sec)

Vous verrez une URL comme :
```
https://formspree.io/f/mldekqzg
                      ^^^^^^^^
                    Form ID
```

**Copiez le Form ID** (ex: `mldekqzg`)

### 4️⃣ Mettre à jour le code (30 sec)

Ouvrez : `src/config/formspree.ts`

Remplacez :
```typescript
contactFormId: 'mldekqzg',  // ← ICI
```

Par :
```typescript
contactFormId: 'VOTRE_FORM_ID',  // ← Collez votre Form ID
```

**SAUVEGARDEZ** ✅

---

## 🧪 TESTER

```bash
npm run dev
```

1. Ouvrez : `http://localhost:3000`
2. Allez au formulaire Contact
3. Envoyez un message
4. Vérifiez votre email ! 📧

---

## 📊 PLAN GRATUIT

✅ **50 soumissions/mois**
✅ Anti-spam inclus
✅ Notifications instantanées
✅ Export CSV

**Largement suffisant pour démarrer !**

---

## 🎉 C'EST TOUT !

Temps total : **~3 minutes**

Une fois fait, vos visiteurs peuvent vous contacter ! ✨

---

## 🆘 Besoin d'aide ?

Lisez le guide complet : **ETAPE_1_FORMSPREE_COMPLETE.md**

Ou dites-moi où vous bloquez ! 😊

