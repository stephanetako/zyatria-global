# ⚡ TEST ULTRA-RAPIDE (3 MINUTES)

## ✅ ÉTAPE 1 : Build (30 secondes)

```bash
npm run build
```

**✅ Si tu vois :** `✓ Completed in X.XXs` → **PARFAIT !**

**❌ Si erreur :** Copie l'erreur et demande de l'aide

---

## ✅ ÉTAPE 2 : Test Stripe (1 minute)

**Ouvre ces 3 liens dans ton navigateur :**

### 1. Starter (5 000 $CA)
```
https://buy.stripe.com/8x26oz6mP7Hr689eMI9oc00
```

### 2. Professional (1 500 $CA)
```
https://buy.stripe.com/28E4gr9z12n7gMN1ZW9oc02
```

### 3. Enterprise (45 000 $CA)
```
https://buy.stripe.com/7sYfZ93aDbXHgMN5c89oc05
```

**✅ Si les pages Stripe s'ouvrent → PARFAIT !**

**❌ Si erreur 404 → Note-le, on corrigera après**

---

## ✅ ÉTAPE 3 : Test Formspree (1 minute 30)

```bash
# Lance le serveur
npm run dev
```

**Ouvre :** http://localhost:4321

**Scroll vers le bas** → Trouve le formulaire de contact

**Remplis :**
- Nom : Test
- Email : ton-email@example.com
- Message : Test rapide

**Clique sur "Envoyer"**

**Vérifie ton email** (peut prendre 1-2 minutes)

**✅ Email reçu → PARFAIT !**

**❌ Pas d'email → Vérifie tes spams ou ton compte Formspree**

---

## 🚀 SI TOUT EST OK

**TU ES PRÊT ! Lance le déploiement :**

### Linux/Mac
```bash
./deploy-now.sh
```

### Windows PowerShell
```powershell
.\deploy-now.ps1
```

---

## 📊 RÉSUMÉ

- ✅ Build : **OK**
- ✅ Stripe : **OK** (au moins 1 lien fonctionne)
- ✅ Formspree : **OK** (email reçu)

**→ DÉPLOIEMENT AUTORISÉ ! 🚀**

---

## ❌ SI UN TEST ÉCHOUE

### Build échoue
```bash
rm -rf node_modules dist .astro
npm install
npm run build
```

### Stripe ne fonctionne pas
- Va sur https://dashboard.stripe.com/payment-links
- Vérifie que les liens sont actifs
- Copie les nouveaux liens si besoin

### Formspree ne fonctionne pas
- Va sur https://formspree.io/forms
- Vérifie que le formulaire `xeelvrdl` existe
- Vérifie l'email associé
- Vérifie tes spams

---

## ⏱️ TEMPS TOTAL : 3 MINUTES

**C'est parti ! 🚀**
