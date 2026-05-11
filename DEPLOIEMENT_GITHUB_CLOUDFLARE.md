# 🚀 DÉPLOIEMENT GITHUB + CLOUDFLARE - GUIDE COMPLET

---

## 📋 ÉTAPE 1 : NAVIGATION VERS LE PROJET

### Dans PowerShell, tape ces commandes UNE PAR UNE:

```powershell
cd Desktop
```

Appuie sur Entrée

```powershell
cd zyatria-production-clean
```

Appuie sur Entrée

```powershell
Get-Location
```

Appuie sur Entrée

**✅ Tu dois voir:** `C:\Users\steph\Desktop\zyatria-production-clean`

---

## 📋 ÉTAPE 2 : INITIALISATION GIT

### Commande 1:
```powershell
git init
```

**✅ Résultat attendu:** `Initialized empty Git repository`

---

### Commande 2:
```powershell
git add .
```

**✅ Résultat attendu:** Aucun message (c'est normal)

---

### Commande 3:
```powershell
git commit -m "Initial commit - ZyatrIA Global production ready"
```

**✅ Résultat attendu:** Liste des fichiers ajoutés

---

### Commande 4:
```powershell
git branch -M main
```

**✅ Résultat attendu:** Aucun message (c'est normal)

---

### Commande 5:
```powershell
git remote add origin https://github.com/stephanetako/-ZyatrIA-Global.git
```

**✅ Résultat attendu:** Aucun message (c'est normal)

---

### Commande 6:
```powershell
git push -u origin main
```

**✅ Résultat attendu:** Upload des fichiers vers GitHub

---

## 📋 ÉTAPE 3 : VÉRIFICATION GITHUB

1. Va sur: https://github.com/stephanetako/-ZyatrIA-Global
2. Actualise la page (F5)
3. Tu dois voir tous tes fichiers !

---

## 📋 ÉTAPE 4 : DÉPLOIEMENT CLOUDFLARE

### 1️⃣ Va sur: https://dash.cloudflare.com

### 2️⃣ Clique sur "Workers & Pages"

### 3️⃣ Clique sur "Create Application"

### 4️⃣ Clique sur "Pages"

### 5️⃣ Clique sur "Connect to Git"

### 6️⃣ Sélectionne ton repo: `-ZyatrIA-Global`

### 7️⃣ Configure le build:

**Framework preset:** Astro

**Build command:** `npm run build`

**Build output directory:** `dist`

---

### 8️⃣ VARIABLES D'ENVIRONNEMENT:

Ajoute ces variables:

```
FORMSPREE_FORM_ID = xeelvrdl
```

```
STRIPE_AUDIT_LINK = https://buy.stripe.com/test_28o5lq0Hy0Hy0EM5kk
```

```
STRIPE_STARTER_SETUP_LINK = https://buy.stripe.com/test_28o5lq0Hy0Hy0EM5kk
```

```
STRIPE_STARTER_MONTHLY_LINK = https://buy.stripe.com/test_28o5lq0Hy0Hy0EM5kk
```

```
STRIPE_PRO_SETUP_LINK = https://buy.stripe.com/test_28o5lq0Hy0Hy0EM5kk
```

```
STRIPE_PRO_MONTHLY_LINK = https://buy.stripe.com/test_28o5lq0Hy0Hy0EM5kk
```

```
STRIPE_ENTERPRISE_SETUP_LINK = https://buy.stripe.com/test_28o5lq0Hy0Hy0EM5kk
```

```
STRIPE_ENTERPRISE_MONTHLY_LINK = https://buy.stripe.com/test_28o5lq0Hy0Hy0EM5kk
```

```
STRIPE_CONSULTATION_LINK = https://buy.stripe.com/test_28o5lq0Hy0Hy0EM5kk
```

---

### 9️⃣ Clique sur "Save and Deploy"

---

## ✅ ÉTAPE 5 : VÉRIFICATION

Après 2-3 minutes, ton site sera en ligne !

Tu recevras une URL comme: `https://zyatria-global.pages.dev`

---

## 🎯 CHECKLIST FINALE

- [ ] Code poussé sur GitHub
- [ ] Déploiement Cloudflare configuré
- [ ] Variables d'environnement ajoutées
- [ ] Site en ligne et fonctionnel
- [ ] Formulaire de contact testé
- [ ] Boutons Stripe testés

---

## 📧 SUPPORT

**Email technique:** zyatria.contact@gmail.com

---

**🎉 TON SITE SERA EN LIGNE DANS QUELQUES MINUTES !**
