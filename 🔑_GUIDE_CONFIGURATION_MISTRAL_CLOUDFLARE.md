# 🔑 Guide Configuration Mistral API sur Cloudflare Pages

## 📋 Étape 1 : Obtenir votre clé API Mistral

### 1.1 Créer un compte Mistral AI

1. **Allez sur** : https://console.mistral.ai/
2. **Cliquez sur** : "Sign Up" (ou "Sign In" si vous avez déjà un compte)
3. **Créez votre compte** avec :
   - Email professionnel
   - Mot de passe sécurisé
4. **Vérifiez votre email**

### 1.2 Créer une clé API

1. **Une fois connecté**, allez dans le menu de gauche
2. **Cliquez sur** : "API Keys" 🔑
3. **Cliquez sur** : "Create new key" ou "+ New API Key"
4. **Donnez un nom** : `ZyatrIA-Chatbot-Production`
5. **Cliquez sur** : "Create"
6. **⚠️ IMPORTANT** : Copiez immédiatement la clé (elle ne sera plus visible après)

```
Exemple de clé : sk-proj-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

### 1.3 Vérifier votre crédit

- Mistral offre **5€ de crédit gratuit** pour commencer
- Vérifiez dans : "Billing" → "Credits"
- Pour un usage normal du chatbot : ~0.01€ par conversation
- 5€ = environ **500 conversations**

---

## 🌐 Étape 2 : Configurer Cloudflare Pages

### 2.1 Accéder à votre projet Cloudflare

1. **Allez sur** : https://dash.cloudflare.com/
2. **Connectez-vous** avec votre compte Cloudflare
3. **Dans le menu de gauche**, cliquez sur : **"Workers & Pages"**
4. **Trouvez votre projet** : `zyatria-global` (ou le nom de votre site)
5. **Cliquez dessus** pour ouvrir les détails

### 2.2 Ajouter la variable d'environnement

1. **Cliquez sur l'onglet** : **"Settings"** ⚙️
2. **Dans le menu de gauche**, cliquez sur : **"Environment variables"**
3. **Cliquez sur** : **"Add variable"** ou **"+ Add"**

4. **Remplissez le formulaire** :

   ```
   Variable name:  MISTRAL_API_KEY
   Value:          [Collez votre clé API Mistral ici]
   ```

5. **Sélectionnez l'environnement** :
   - ✅ **Production** (obligatoire)
   - ✅ **Preview** (recommandé pour tester)

6. **Cliquez sur** : **"Save"** ou **"Add variable"**

### 2.3 Vérification visuelle

Vous devriez voir :

```
┌─────────────────────┬──────────────────────────┬─────────────┐
│ Variable name       │ Value                    │ Environment │
├─────────────────────┼──────────────────────────┼─────────────┤
│ MISTRAL_API_KEY     │ sk-proj-xxxxx... (hidden)│ Production  │
│                     │                          │ Preview     │
└─────────────────────┴──────────────────────────┴─────────────┘
```

---

## 🚀 Étape 3 : Redéployer le site

### Option A : Redéploiement automatique (recommandé)

1. **Dans Cloudflare Pages**, allez dans : **"Deployments"**
2. **Trouvez le dernier déploiement** (en haut de la liste)
3. **Cliquez sur les 3 points** ⋮ à droite
4. **Cliquez sur** : **"Retry deployment"** ou **"Redeploy"**
5. **Attendez** 2-3 minutes que le déploiement se termine

### Option B : Push Git (si vous préférez)

```bash
# Dans votre terminal
git add .
git commit -m "Configure Mistral API for chatbot"
git push origin main
```

Cloudflare détectera automatiquement le push et redéploiera.

---

## ✅ Étape 4 : Tester le chatbot

### 4.1 Attendre la fin du déploiement

1. **Dans Cloudflare Pages** → **"Deployments"**
2. **Attendez que le statut** passe à : ✅ **"Success"**
3. **Notez l'URL** de votre site (ex: `https://zyatria-global.pages.dev`)

### 4.2 Tester le chatbot

1. **Ouvrez votre site** dans un navigateur
2. **Cherchez l'icône du chatbot** ✨ en bas à droite
3. **Cliquez dessus** pour ouvrir le chat
4. **Testez avec** :

   ```
   Bonjour, je suis intéressé par vos agents IA
   ```

5. **Le chatbot devrait** :
   - ✅ Répondre en français
   - ✅ Poser des questions de qualification
   - ✅ Recommander un plan adapté
   - ✅ Donner des informations détaillées

### 4.3 Tester en plusieurs langues

**Anglais** :
```
Hello, I'm interested in your AI agents
```

**Espagnol** :
```
Hola, estoy interesado en sus agentes IA
```

**Portugais** :
```
Olá, estou interessado em seus agentes IA
```

---

## 🔍 Étape 5 : Vérifier que ça fonctionne

### Signes que le chatbot utilise Mistral API :

✅ **Réponses détaillées et personnalisées** (pas juste des templates)  
✅ **Questions de qualification intelligentes**  
✅ **Recommandations de plans spécifiques**  
✅ **Gestion des objections professionnelle**  
✅ **Adaptation au contexte de la conversation**  

### Signes que le chatbot utilise le fallback :

❌ Réponses génériques et courtes  
❌ Pas de questions de suivi  
❌ Pas de recommandations personnalisées  

---

## 🐛 Dépannage

### Problème : Le chatbot ne répond pas

**Solution** :
1. Vérifiez que la variable `MISTRAL_API_KEY` est bien ajoutée
2. Vérifiez que vous avez redéployé le site
3. Videz le cache du navigateur (Ctrl+Shift+R)
4. Attendez 5 minutes (propagation DNS)

### Problème : Réponses en anglais seulement

**Solution** :
- Le chatbot détecte automatiquement la langue
- Essayez de commencer par "Bonjour" ou "Hola"
- Vérifiez que votre message est dans la langue souhaitée

### Problème : Erreur "API key invalid"

**Solution** :
1. Vérifiez que vous avez copié la clé complète
2. Vérifiez qu'il n'y a pas d'espaces avant/après
3. Créez une nouvelle clé API sur Mistral
4. Remplacez la variable dans Cloudflare

### Problème : "Insufficient credits"

**Solution** :
1. Allez sur https://console.mistral.ai/
2. Menu "Billing" → "Add credits"
3. Ajoutez 10-20€ pour commencer
4. Le chatbot coûte ~0.01€ par conversation

---

## 📊 Monitoring et Utilisation

### Vérifier l'utilisation de l'API

1. **Allez sur** : https://console.mistral.ai/
2. **Cliquez sur** : "Usage" ou "API Usage"
3. **Vous verrez** :
   - Nombre de requêtes
   - Coût par jour
   - Tokens utilisés

### Définir des alertes

1. **Dans Mistral Console** → "Billing"
2. **Activez** : "Email alerts"
3. **Définissez un seuil** : Ex: "Alert me at 80% of credits"

---

## 🎯 Récapitulatif des URLs importantes

| Service | URL |
|---------|-----|
| **Mistral Console** | https://console.mistral.ai/ |
| **Cloudflare Dashboard** | https://dash.cloudflare.com/ |
| **Votre site** | https://[votre-projet].pages.dev |
| **Documentation Mistral** | https://docs.mistral.ai/ |

---

## ✅ Checklist finale

Avant de considérer la configuration terminée :

- [ ] ✅ Compte Mistral AI créé
- [ ] ✅ Clé API Mistral générée et copiée
- [ ] ✅ Variable `MISTRAL_API_KEY` ajoutée dans Cloudflare
- [ ] ✅ Site redéployé avec succès
- [ ] ✅ Chatbot testé en français
- [ ] ✅ Chatbot testé en anglais
- [ ] ✅ Réponses intelligentes et personnalisées
- [ ] ✅ Questions de qualification fonctionnent
- [ ] ✅ Recommandations de plans adaptées

---

## 🎉 Félicitations !

Votre chatbot intelligent est maintenant configuré et prêt à :

✨ **Qualifier les leads automatiquement**  
💰 **Gérer les objections de prix**  
🎯 **Recommander les bons plans**  
🌍 **Répondre en 4 langues**  
🚀 **Guider les clients vers l'achat**  

---

## 📞 Besoin d'aide ?

Si vous rencontrez des problèmes :

1. **Vérifiez ce guide** étape par étape
2. **Consultez les logs** dans Cloudflare Pages → Deployments → View logs
3. **Testez l'API** directement sur https://console.mistral.ai/
4. **Contactez le support** Mistral ou Cloudflare si nécessaire

---

**Dernière mise à jour** : Janvier 2025  
**Version** : 1.0  
**Auteur** : ZyatrIA Global Team
