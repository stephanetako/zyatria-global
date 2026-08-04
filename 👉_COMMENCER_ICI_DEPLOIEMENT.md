# 👉 COMMENCER ICI - DÉPLOIEMENT EN 3 ÉTAPES

## 🎯 Objectif : Mettre votre site en ligne en 5 minutes

---

## ⚡ MÉTHODE RAPIDE (Recommandée)

### Étape 1 : Ouvrir le terminal
```bash
cd /app
```

### Étape 2 : Lancer le script de déploiement
```bash
./deploy-now.sh
```

### Étape 3 : Suivre les instructions
Le script va :
1. ✅ Vérifier que tout est prêt
2. ✅ Construire le site
3. ✅ Vous demander où déployer
4. ✅ Déployer automatiquement

**C'est tout ! Votre site sera en ligne en 2-5 minutes.** 🎉

---

## 📖 MÉTHODE MANUELLE (Si vous préférez)

### Option A : Cloudflare Pages (Recommandé ⭐)

#### 1. Build
```bash
npm run build
```

#### 2. Deploy
```bash
npx wrangler pages deploy dist --project-name=zyatria-global
```

#### 3. Connexion
Si demandé, connectez-vous à Cloudflare :
```bash
npx wrangler login
```
→ Une page web s'ouvrira pour vous connecter

✅ **Terminé !** Votre site sera sur : `https://zyatria-global.pages.dev`

---

### Option B : Via GitHub (Déploiement automatique)

#### 1. Créer un repo sur GitHub
- Aller sur https://github.com/new
- Nom : `zyatria-global`
- Cliquer "Create repository"

#### 2. Pousser le code
```bash
git init
git add .
git commit -m "🚀 Initial commit"
git remote add origin https://github.com/VOTRE-USERNAME/zyatria-global.git
git push -u origin main
```

#### 3. Connecter à Cloudflare
- Aller sur https://dash.cloudflare.com
- Workers & Pages → Create → Connect to Git
- Sélectionner votre repo
- Configuration :
  - Framework: **Astro**
  - Build command: `npm run build`
  - Output directory: `dist`
- Cliquer "Save and Deploy"

✅ **Terminé !** Chaque push déploiera automatiquement.

---

## 🌐 CONFIGURER VOTRE DOMAINE (Plus tard)

### Vous avez déjà un domaine ?

#### Si OUI :
1. Aller sur Cloudflare Dashboard
2. Votre projet → Custom domains
3. Add domain → `zyatria.global`
4. Suivre les instructions DNS

#### Si NON :
1. Acheter `zyatria.global` sur :
   - Cloudflare Registrar (recommandé)
   - Namecheap
   - Google Domains
2. Prix : ~10-15€/an
3. Puis suivre les étapes ci-dessus

---

## ✅ VÉRIFICATIONS APRÈS DÉPLOIEMENT

### 1. Tester l'URL
Ouvrir dans le navigateur :
```
https://zyatria-global.pages.dev
```

### 2. Vérifier les pages
- [ ] `/` - Accueil
- [ ] `/pricing` - Tarifs
- [ ] `/services` - Services
- [ ] `/micro-agents` - Micro-agents
- [ ] `/demo` - Démo
- [ ] `/about` - À propos
- [ ] `/knowledge-base` - Documentation

### 3. Tester les fonctionnalités
- [ ] Navigation fonctionne
- [ ] Sélecteur de langue FR/EN
- [ ] Boutons Stripe (mode test)
- [ ] Formulaire de contact
- [ ] Responsive mobile

---

## 🆘 BESOIN D'AIDE ?

### Erreur de build ?
```bash
npm run build
```
→ Vérifier les erreurs dans le terminal

### Wrangler pas installé ?
```bash
npm install -g wrangler
```

### Pas de compte Cloudflare ?
→ Créer un compte gratuit : https://dash.cloudflare.com/sign-up

---

## 📚 DOCUMENTATION COMPLÈTE

Pour plus de détails, voir :
- **`🚀_GUIDE_DEPLOIEMENT_COMPLET.md`** - Guide détaillé
- **`✅_SITE_100_POURCENT_FONCTIONNEL.md`** - Rapport de tests
- **`🎊_RAPPORT_FINAL_COMPLET.md`** - Rapport technique

---

## 🎯 RÉSUMÉ ULTRA-RAPIDE

```bash
# 1 commande pour tout faire :
./deploy-now.sh

# Ou manuellement :
npm run build
npx wrangler pages deploy dist --project-name=zyatria-global
```

**Temps estimé : 2-5 minutes** ⏱️

---

## 🎉 APRÈS LE DÉPLOIEMENT

Votre site sera accessible sur :
```
https://zyatria-global.pages.dev
```

Pour utiliser votre propre domaine :
```
https://zyatria.global
```
→ Voir la section "Configurer votre domaine" ci-dessus

---

**Prêt ? Lancez `./deploy-now.sh` maintenant !** 🚀
