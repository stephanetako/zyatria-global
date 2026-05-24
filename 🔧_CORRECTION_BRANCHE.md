# 🔧 CORRECTION DE LA BRANCHE CLOUDFLARE

---

## ⚠️ PROBLÈME DÉTECTÉ

Votre configuration Cloudflare attend la branche **`main`**  
Mais votre code est sur la branche **`master`**

---

## ✅ SOLUTION AUTOMATIQUE

### **Exécutez ce script :**

```powershell
.\fix-branch-cloudflare.ps1
```

---

## 📋 CE QUE LE SCRIPT FAIT :

1. ✅ Renomme la branche locale `master` → `main`
2. ✅ Pousse la nouvelle branche `main` sur GitHub
3. ✅ Supprime l'ancienne branche `master` sur GitHub
4. ✅ Cloudflare redéploie automatiquement

---

## 🚀 ÉTAPES COMPLÈTES :

### **1. Ouvrez PowerShell dans votre projet**

```powershell
cd C:\Users\steph\OneDrive\Bureau\zyatria-global
```

### **2. Exécutez le script**

```powershell
.\fix-branch-cloudflare.ps1
```

### **3. Attendez le redéploiement**

- Allez sur https://dash.cloudflare.com
- Cliquez sur **Pages** → **zyatria-global**
- Cliquez sur **Deployments**
- Vous verrez un nouveau déploiement en cours

---

## 🎯 ALTERNATIVE MANUELLE

Si vous préférez ne pas renommer la branche :

### **Sur Cloudflare :**

1. Allez dans **Settings** → **Builds**
2. Trouvez **"Production branch"**
3. Changez `main` → `master`
4. Cliquez sur **Save**

---

## ⏳ APRÈS LA CORRECTION :

Votre site sera automatiquement redéployé avec :

- ✅ Chatbot Mistral fonctionnel
- ✅ Formulaires Formspree configurés
- ✅ Toutes les variables d'environnement

---

## 🌐 VOTRE SITE SERA ACCESSIBLE À :

`https://zyatria-global.pages.dev`

---

## 💡 BESOIN D'AIDE ?

Exécutez simplement :

```powershell
.\fix-branch-cloudflare.ps1
```

**Et tout sera corrigé automatiquement !** 🚀
