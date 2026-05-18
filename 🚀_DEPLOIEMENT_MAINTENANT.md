# 🚀 DÉPLOIEMENT EN 3 ÉTAPES SIMPLES

## ⚡ MÉTHODE RAPIDE (Recommandée)

### 🖥️ **Windows**
1. Ouvre PowerShell dans le dossier du projet
2. Exécute :
```powershell
.\deploy-quick.ps1
```
3. Suis les instructions à l'écran

### 🍎 **Mac / Linux**
1. Ouvre le Terminal dans le dossier du projet
2. Exécute :
```bash
./deploy-quick.sh
```
3. Suis les instructions à l'écran

---

## 📋 MÉTHODE MANUELLE (Si le script ne fonctionne pas)

### **ÉTAPE 1 : Préparer Git** (2 min)

```bash
# Initialiser Git
git init

# Ajouter tous les fichiers
git add .

# Créer le commit
git commit -m "Initial commit - ZyatrIA Global"
```

---

### **ÉTAPE 2 : Créer le Repo GitHub** (3 min)

1. **Va sur** : https://github.com/new

2. **Remplis** :
   - **Repository name** : `zyatria-global`
   - **Description** : `ZyatrIA Global - AI Agents Platform`
   - **Public** ou **Private** (ton choix)
   - ⚠️ **NE COCHE PAS** "Initialize with README"

3. **Clique** sur **"Create repository"**

4. **Copie les commandes** affichées, ou utilise :

```bash
# Remplace USERNAME par ton nom d'utilisateur GitHub
git remote add origin https://github.com/USERNAME/zyatria-global.git
git branch -M main
git push -u origin main
```

---

### **ÉTAPE 3 : Déployer sur Cloudflare** (5 min)

#### **A. Créer un compte Cloudflare** (si tu n'en as pas)
- Va sur : https://dash.cloudflare.com/sign-up
- Crée ton compte (gratuit)
- Vérifie ton email

#### **B. Déployer le site**

1. **Va sur** : https://dash.cloudflare.com

2. **Clique** sur **"Workers & Pages"** (menu de gauche)

3. **Clique** sur **"Create application"**

4. **Sélectionne** l'onglet **"Pages"**

5. **Clique** sur **"Connect to Git"**

6. **Connecte GitHub** :
   - Clique sur **"Connect GitHub"**
   - Autorise Cloudflare
   - Sélectionne le repo **"zyatria-global"**

7. **Configure le build** :
   ```
   Project name: zyatria-global
   Production branch: main
   Framework preset: Astro
   Build command: npm run build
   Build output directory: dist
   ```

8. **Clique** sur **"Save and Deploy"**

9. **⏳ Attends 2-3 minutes**

10. **🎉 TON SITE EST EN LIGNE !**

---

## ✅ VÉRIFICATION

Une fois le déploiement terminé :

1. Cloudflare te donne une URL : `https://zyatria-global.pages.dev`
2. Clique dessus pour voir ton site
3. Vérifie que tout fonctionne :
   - [ ] Page d'accueil s'affiche
   - [ ] Navigation fonctionne
   - [ ] Changement de langue FR/EN
   - [ ] Images se chargent
   - [ ] Responsive (teste sur mobile)

---

## 🔄 MISES À JOUR FUTURES

Pour mettre à jour le site après des modifications :

```bash
# Ajouter les changements
git add .

# Créer un commit
git commit -m "Description des changements"

# Pousser sur GitHub
git push

# ✨ Cloudflare redéploie automatiquement !
```

---

## 🌐 DOMAINE PERSONNALISÉ (Optionnel)

Si tu veux utiliser ton propre domaine (ex: zyatria.com) :

1. Dans Cloudflare Pages, va dans **"Custom domains"**
2. Clique sur **"Set up a custom domain"**
3. Entre ton domaine
4. Suis les instructions DNS

---

## 🆘 PROBLÈMES ?

### **Git n'est pas installé**
- **Windows** : https://git-scm.com/download/win
- **Mac** : `brew install git`
- **Linux** : `sudo apt install git`

### **Erreur lors du push GitHub**
```bash
# Configure ton identité Git
git config --global user.name "Ton Nom"
git config --global user.email "ton@email.com"

# Réessaye
git push -u origin main
```

### **Build échoue sur Cloudflare**
- Vérifie que la configuration est correcte :
  - Framework : **Astro**
  - Build command : **npm run build**
  - Output : **dist**

### **Site blanc après déploiement**
- Vérifie les logs de build dans Cloudflare
- Cherche les erreurs en rouge

---

## 📞 BESOIN D'AIDE ?

Si tu es bloqué, dis-moi où et je t'aide ! 😄

---

## 🎯 RÉCAPITULATIF

```
1. Git init + commit          ✅ (2 min)
2. Créer repo GitHub          ✅ (3 min)
3. Push sur GitHub            ✅ (2 min)
4. Créer compte Cloudflare    ✅ (3 min)
5. Déployer sur Cloudflare    ✅ (5 min)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TOTAL                         ✅ 15 min
```

---

## 🚀 PRÊT ?

**Choisis ta méthode :**

### ⚡ **Rapide** (Recommandé)
- Windows : `.\deploy-quick.ps1`
- Mac/Linux : `./deploy-quick.sh`

### 📋 **Manuel**
- Suis les étapes ci-dessus

---

**Bonne chance ! 🎉**
