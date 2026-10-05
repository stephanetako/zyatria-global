# ⚡ DÉPLOYER EN 3 COMMANDES

**Temps:** 5 minutes  
**Difficulté:** Très facile

---

## 🚀 MÉTHODE ULTRA-RAPIDE

### Windows

```powershell
# 1. Tester
npm run build

# 2. Commit
git add . && git commit -m "✅ Production ready"

# 3. Déployer
.\deploy-github-cloudflare.ps1
```

### Linux/Mac

```bash
# 1. Tester
npm run build

# 2. Commit
git add . && git commit -m "✅ Production ready"

# 3. Déployer
./deploy-github-cloudflare.sh
```

---

## 🖱️ MÉTHODE ENCORE PLUS SIMPLE

**Windows:**
Double-cliquez sur `DEPLOYER_MAINTENANT.bat`

**C'est tout !** 🎉

---

## ⚙️ APRÈS LE DÉPLOIEMENT

Sur Cloudflare Pages, ajoutez ces 5 variables:

```
MISTRAL_API_KEY
STRIPE_PUBLIC_KEY
STRIPE_SECRET_KEY
STRIPE_WEBHOOK_SECRET
FORMSPREE_FORM_ID
```

**Les valeurs sont dans `.env`**

---

## ✅ VÉRIFICATION

Votre site sera sur: `https://zyatria-global.pages.dev`

**Tests:**
- [ ] Page d'accueil s'affiche
- [ ] Chatbot visible en bas à droite
- [ ] Boutons Stripe fonctionnent
- [ ] Formulaires s'envoient

---

## 📖 BESOIN D'AIDE ?

Voir le guide complet: `🚀_DEPLOYER_MAINTENANT_GUIDE_FINAL.md`

---

**C'est tout ! Votre site sera en ligne en 10 minutes.** 🚀
