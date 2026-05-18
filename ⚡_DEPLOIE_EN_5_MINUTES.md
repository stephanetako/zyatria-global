# ⚡ DÉPLOIE TON SITE EN 5 MINUTES

## 🎯 MÉTHODE ULTRA-RAPIDE

### **Étape 1 : Lance le script** (1 min)

#### **Windows** :
1. Ouvre PowerShell dans ce dossier
2. Tape :
```powershell
.\deploy-quick.ps1
```
3. Appuie sur Entrée

#### **Mac / Linux** :
1. Ouvre le Terminal dans ce dossier
2. Tape :
```bash
./deploy-quick.sh
```
3. Appuie sur Entrée

---

### **Étape 2 : Réponds aux questions** (1 min)

Le script te demande :

1. **Ton nom d'utilisateur GitHub** : `ton-username`
2. **Nom du repo** : `zyatria-global` (ou laisse par défaut)
3. **Confirmer** : `o` (pour oui)

---

### **Étape 3 : Crée le repo GitHub** (2 min)

Le script t'ouvre cette page : https://github.com/new

1. **Repository name** : `zyatria-global`
2. **Description** : `ZyatrIA Global - AI Agents Platform`
3. **Public** ou **Private** (ton choix)
4. ⚠️ **NE COCHE PAS** "Initialize with README"
5. Clique sur **"Create repository"**
6. Reviens au terminal et appuie sur **Entrée**

---

### **Étape 4 : Déploie sur Cloudflare** (1 min)

Le script te donne le lien : https://dash.cloudflare.com

1. Clique sur **"Workers & Pages"**
2. Clique sur **"Create application"** > **"Pages"**
3. Clique sur **"Connect to Git"**
4. Sélectionne ton repo : **"zyatria-global"**
5. Configuration :
   - Framework : **Astro**
   - Build : **npm run build**
   - Output : **dist**
6. Clique sur **"Save and Deploy"**

---

### **Étape 5 : C'EST EN LIGNE !** 🎉

⏳ Attends 2-3 minutes...

✅ Ton site est en ligne : `https://zyatria-global.pages.dev`

---

## 🎯 RÉCAPITULATIF

```
1. Lance le script           ⚡ 1 min
2. Réponds aux questions     ⚡ 1 min
3. Crée le repo GitHub       ⚡ 2 min
4. Déploie sur Cloudflare    ⚡ 1 min
5. Site en ligne !           ⚡ 0 min
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TOTAL                        ⚡ 5 min
```

---

## 🆘 PROBLÈME ?

### **Git n'est pas installé**
Installe-le d'abord :
- Windows : https://git-scm.com/download/win
- Mac : `brew install git`
- Linux : `sudo apt install git`

### **Le script ne se lance pas**
Essaye la méthode manuelle :
📖 Ouvre : `🚀_DEPLOIEMENT_MAINTENANT.md`

### **Erreur lors du push**
```bash
git config --global user.name "Ton Nom"
git config --global user.email "ton@email.com"
git push -u origin main
```

---

## 🚀 PRÊT ?

### **Lance maintenant :**

**Windows** :
```powershell
.\deploy-quick.ps1
```

**Mac / Linux** :
```bash
./deploy-quick.sh
```

---

**C'est parti ! 🎉**
