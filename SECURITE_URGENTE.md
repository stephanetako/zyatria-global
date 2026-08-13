# 🚨 SÉCURITÉ - ACTION IMMÉDIATE REQUISE

## ⚠️ CLÉ API MISTRAL EXPOSÉE

Votre clé API Mistral a été exposée dans le chat et doit être **IMMÉDIATEMENT révoquée**.

### 📋 ÉTAPES À SUIVRE MAINTENANT :

#### 1️⃣ Révoquer la clé exposée (URGENT)
```
1. Allez sur https://console.mistral.ai/
2. Connectez-vous à votre compte
3. Allez dans "API Keys"
4. Trouvez la clé qui commence par "Hy1Ja5hx..."
5. Cliquez sur "Revoke" ou "Delete"
```

#### 2️⃣ Générer une nouvelle clé API
```
1. Sur https://console.mistral.ai/
2. Cliquez sur "Create new API key"
3. Donnez-lui un nom (ex: "ZyatrIA Production")
4. Copiez la nouvelle clé (elle ne sera affichée qu'une fois !)
```

#### 3️⃣ Configurer la nouvelle clé sur Cloudflare

**Option A - Via Dashboard Cloudflare (RECOMMANDÉ) :**
```
1. Allez sur https://dash.cloudflare.com/
2. Sélectionnez votre compte
3. Allez dans "Workers & Pages"
4. Sélectionnez votre projet "zyatria-global"
5. Allez dans "Settings" > "Environment variables"
6. Trouvez "MISTRAL_API_KEY"
7. Cliquez sur "Edit"
8. Collez votre NOUVELLE clé
9. Cliquez sur "Save"
10. Redéployez votre site
```

**Option B - Via Wrangler CLI :**
```bash
# Installer wrangler si nécessaire
npm install -g wrangler

# Se connecter
wrangler login

# Ajouter la nouvelle clé
wrangler pages secret put MISTRAL_API_KEY
# Collez votre nouvelle clé quand demandé
```

#### 4️⃣ Mettre à jour le fichier .env local
```bash
# Éditez le fichier .env
MISTRAL_API_KEY="VOTRE_NOUVELLE_CLE_ICI"
```

⚠️ **IMPORTANT** : Ne partagez JAMAIS vos clés API dans :
- Les chats
- Les emails
- Les messages Slack/Discord
- Les commits Git
- Les screenshots

### 🔒 Bonnes pratiques de sécurité :

1. **Toujours** utiliser des variables d'environnement
2. **Jamais** commiter les fichiers .env
3. **Révoquer** immédiatement toute clé exposée
4. **Utiliser** des clés différentes pour dev/prod
5. **Activer** les alertes de sécurité sur vos comptes

### ✅ Une fois la nouvelle clé configurée :

Le chatbot fonctionnera automatiquement avec la nouvelle clé !

### 📞 Besoin d'aide ?

Si vous avez des questions sur la configuration, demandez-moi après avoir sécurisé votre clé.

---

**⏰ TEMPS ESTIMÉ : 5-10 minutes**

**🎯 PRIORITÉ : CRITIQUE - À FAIRE MAINTENANT**
