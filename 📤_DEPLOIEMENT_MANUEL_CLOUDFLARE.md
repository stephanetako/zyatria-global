# 📤 DÉPLOIEMENT MANUEL VIA CLOUDFLARE DASHBOARD

## 🔴 PROBLÈME
Wrangler ne déploie que 21 fichiers au lieu de 174.

## ✅ SOLUTION : Upload manuel via le dashboard

---

## 🚀 ÉTAPES

### 1️⃣ Créer le ZIP
```powershell
# Dans PowerShell
Compress-Archive -Path "dist\*" -DestinationPath "zyatria-dist.zip" -Force
```

### 2️⃣ Aller sur Cloudflare
1. Ouvrez https://dash.cloudflare.com
2. Cliquez sur **Pages** (menu de gauche)
3. Sélectionnez **zyatria-global**

### 3️⃣ Upload manuel
1. Cliquez sur **"Upload assets"** (bouton en haut à droite)
2. Glissez-déposez le fichier **zyatria-dist.zip**
3. Attendez la fin de l'upload
4. Cloudflare va automatiquement décompresser et déployer

### 4️⃣ Vérifier
- URL de production : https://zyatria-global.pages.dev
- Vérifiez que toutes les pages fonctionnent

---

## 🎯 ALTERNATIVE : Connexion GitHub

Si vous préférez un déploiement automatique :

1. **Pusher sur GitHub** (déjà fait ✅)
2. **Connecter le repo à Cloudflare Pages** :
   - Dashboard Cloudflare → Pages
   - "Connect to Git"
   - Sélectionner votre repo GitHub
   - Build command: `npm run build`
   - Build output directory: `dist`

Cloudflare déploiera automatiquement à chaque push !

---

## 💡 RECOMMANDATION

**Upload manuel** pour tester maintenant, puis **connexion GitHub** pour les futurs déploiements.
