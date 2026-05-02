# ⚡ DÉPLOIEMENT RAPIDE - 5 MINUTES

## 🎯 TU AS 2 OPTIONS

---

## 📦 OPTION 1 : DÉPLOIEMENT DEPUIS TON ORDINATEUR (RECOMMANDÉ)

### Étape 1 : Télécharge le projet
1. Télécharge le fichier **`zyatria-global-production.tar.gz`**
2. Extrais-le sur ton ordinateur
3. Ouvre le terminal dans le dossier

### Étape 2 : Installe les dépendances
```bash
npm install
```

### Étape 3 : Teste en local (optionnel)
```bash
npm run dev
```
Ouvre http://localhost:3000

### Étape 4 : Crée un dépôt GitHub
1. Va sur https://github.com/new
2. Nom : `zyatria-global`
3. Private
4. Clique "Create repository"

### Étape 5 : Pousse le code
```bash
git init
git add .
git commit -m "🚀 Initial commit"
git remote add origin https://github.com/TON-USERNAME/zyatria-global.git
git branch -M main
git push -u origin main
```

**Si demandé, utilise un Personal Access Token :**
👉 https://github.com/settings/tokens

### Étape 6 : Déploie sur Cloudflare
1. Va sur https://dash.cloudflare.com/
2. **Workers & Pages** → **Create application** → **Pages**
3. **Connect to Git** → Sélectionne `zyatria-global`
4. Configuration :
   - Framework: **Astro**
   - Build command: `npm run build`
   - Build output: `dist`
5. Variables d'environnement :
   - `NODE_VERSION` = `20`
   - `FORMSPREE_FORM_ID` = `xeelvrdl`
6. Clique **Save and Deploy**

### ✅ C'EST FINI !
Ton site sera en ligne dans 2-5 minutes ! 🎉

---

## 🚀 OPTION 2 : DÉPLOIEMENT DIRECT DEPUIS ICI

### Donne-moi ces infos :

1. **Ton username GitHub** : _________________
2. **Le nom du dépôt** : zyatria-global (ou autre)
3. **Ton Personal Access Token** : _________________

👉 Pour créer un token : https://github.com/settings/tokens
   - Coche : **repo** (toutes les permissions)

**Je pousserai le code pour toi !**

Ensuite, tu n'auras qu'à :
- Aller sur Cloudflare Pages
- Connecter le dépôt
- Déployer

---

## 🎯 QUE PRÉFÈRES-TU ?

**Option 1** : Je télécharge et je gère moi-même  
**Option 2** : Tu pousses le code pour moi

**Dis-moi ton choix !** 😊
