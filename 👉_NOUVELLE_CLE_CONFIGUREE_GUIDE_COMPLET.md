# 👉 NOUVELLE CLÉ MISTRAL - GUIDE COMPLET

## ✅ STATUT ACTUEL

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│   🔑 NOUVELLE CLÉ MISTRAL CONFIGURÉE                   │
│                                                         │
│   ✅ Fichier .env mis à jour                           │
│   ✅ Scripts de configuration créés                    │
│   ⚠️ Redémarrage du serveur requis                     │
│   ⚠️ Configuration Cloudflare requise                  │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

## 🚀 ÉTAPE 1 : CONFIGURATION LOCALE (DÉVELOPPEMENT)

### 1️⃣ Redémarrez le serveur

**Important :** La nouvelle clé ne sera active qu'après redémarrage.

```bash
# Arrêtez le serveur actuel (Ctrl+C)
# Puis relancez :
npm run dev
```

Attendez de voir :
```
🚀 astro v5.x.x started in XXXms
  ➜ Local:   http://localhost:4321/
```

---

### 2️⃣ Testez immédiatement

**Ouvrez la page de test :**
```
http://localhost:4321/test-mistral-final.html
```

**Cliquez sur "Tester en Français"**

**Vérifiez le badge :**
- ✅ **API** (vert) = La nouvelle clé fonctionne parfaitement
- ⚠️ **FALLBACK** (orange) = Problème avec la nouvelle clé

---

### 3️⃣ Vérifiez les logs

**Dans la console du serveur (terminal) :**

✅ **Si la clé fonctionne :**
```
🔑 Clé API trouvée via import.meta.env (développement local)
🔍 Debug - Sources de variables disponibles: {
  hasImportMetaEnv: true,
  apiKeyFound: true,
  apiKeyLength: XX
}
🚀 Appel API Mistral - Détection automatique de la langue
✅ Requête réussie
```

❌ **Si la clé ne fonctionne pas :**
```
❌ Erreur API Mistral: 401
🔑 Erreur d'authentification : Clé API invalide ou révoquée
```

---

## 🌐 ÉTAPE 2 : CONFIGURATION CLOUDFLARE (PRODUCTION)

### Option A : Script Automatique (RECOMMANDÉ)

**Windows (PowerShell) :**
```powershell
.\update-mistral-key-cloudflare.ps1
```

**Linux/Mac (Bash) :**
```bash
./update-mistral-key-cloudflare.sh
```

Le script va :
1. ✅ Lire la clé depuis `.env`
2. ✅ Copier la clé dans le presse-papiers
3. ✅ Afficher les instructions
4. ✅ Ouvrir le dashboard Cloudflare (optionnel)

---

### Option B : Configuration Manuelle

#### 1. Allez sur le dashboard Cloudflare
```
https://dash.cloudflare.com/
```

#### 2. Naviguez vers votre projet
- Cliquez sur **"Workers & Pages"**
- Sélectionnez votre projet (ex: `zyatria-global`)

#### 3. Accédez aux variables d'environnement
- Cliquez sur **"Settings"**
- Allez dans **"Environment variables"**

#### 4. Modifiez la variable MISTRAL_API_KEY
- Trouvez `MISTRAL_API_KEY` dans la liste
- Cliquez sur **"Edit"** (icône crayon)
- Remplacez par votre nouvelle clé
- Cliquez sur **"Save"**

#### 5. Redéployez le site
- Allez dans **"Deployments"**
- Cliquez sur **"Retry deployment"** sur le dernier déploiement
- Ou faites un nouveau commit pour déclencher un déploiement

---

## 🧪 ÉTAPE 3 : TESTS COMPLETS

### Test 1 : Local (Développement)

**Page de test :**
```
http://localhost:4321/test-mistral-final.html
```

**Tests à effectuer :**
- [ ] 🇫🇷 Test Français → Badge **API**
- [ ] 🇬🇧 Test Anglais → Badge **API**
- [ ] 🇪🇸 Test Espagnol → Badge **API**
- [ ] 🇵🇹 Test Portugais → Badge **API**
- [ ] 🎯 Test Question Complexe → Badge **API**

**Chatbot sur le site :**
```
http://localhost:4321/
```

**Tests à effectuer :**
- [ ] Icône visible en bas à droite
- [ ] Chatbot s'ouvre au clic
- [ ] Réponses intelligentes
- [ ] Détection de langue fonctionne

---

### Test 2 : Production (Cloudflare)

**Après déploiement, testez sur votre URL de production :**
```
https://votre-site.pages.dev/
```

**Tests à effectuer :**
- [ ] Chatbot fonctionne en production
- [ ] Réponses intelligentes (pas de fallback)
- [ ] Multilingue fonctionne
- [ ] Pas d'erreurs dans la console

---

## 📊 VÉRIFICATION DE LA CLÉ API

### Sur le dashboard Mistral

1. **Allez sur :**
   ```
   https://console.mistral.ai/api-keys/
   ```

2. **Vérifiez que votre clé :**
   - ✅ Est listée
   - ✅ Est active (pas révoquée)
   - ✅ A les bonnes permissions
   - ✅ N'a pas atteint les limites

---

### Test direct de la clé

**Via curl :**
```bash
curl https://api.mistral.ai/v1/models \
  -H "Authorization: Bearer VOTRE_NOUVELLE_CLE"
```

**Résultat attendu :**
```json
{
  "object": "list",
  "data": [
    {
      "id": "mistral-medium",
      ...
    }
  ]
}
```

Si vous voyez une erreur 401, la clé n'est pas valide.

---

## ⚠️ DÉPANNAGE

### Problème 1 : Badge "FALLBACK" au lieu de "API"

**Causes possibles :**
- Le serveur n'a pas été redémarré
- La nouvelle clé n'est pas valide
- La clé a été révoquée

**Solutions :**
1. Redémarrez le serveur : `npm run dev`
2. Vérifiez la clé sur https://console.mistral.ai/
3. Vérifiez le fichier `.env`

---

### Problème 2 : Erreur 401 "Unauthorized"

**Cause :** La clé API n'est pas valide

**Solutions :**
1. Vérifiez que la clé est correcte dans `.env`
2. Vérifiez que la clé est active sur Mistral
3. Générez une nouvelle clé si nécessaire
4. Redémarrez le serveur

---

### Problème 3 : Erreur 429 "Too Many Requests"

**Cause :** Limite de taux dépassée

**Solutions :**
1. Attendez quelques minutes
2. Vérifiez votre plan Mistral
3. Le rate limiter va gérer automatiquement

---

### Problème 4 : Clé non détectée

**Cause :** Format incorrect dans `.env`

**Vérifiez le format :**
```bash
MISTRAL_API_KEY="votre_cle_ici"
```

**Pas de :**
- ❌ Espaces avant ou après
- ❌ Guillemets simples
- ❌ Commentaires sur la même ligne

---

## 🔒 SÉCURITÉ

### ⚠️ IMPORTANT - RÉVOCATION DE L'ANCIENNE CLÉ

**Après avoir vérifié que la nouvelle clé fonctionne :**

1. Allez sur https://console.mistral.ai/api-keys/
2. Trouvez l'ancienne clé
3. Cliquez sur **"Revoke"**
4. Confirmez la révocation

**Pourquoi ?**
- 🔒 Éviter l'utilisation non autorisée
- 🔒 Réduire les risques de sécurité
- 🔒 Nettoyer les clés inutilisées

---

### ✅ BONNES PRATIQUES

**Fichier .env :**
- ✅ Ne jamais committer dans Git
- ✅ Ajouter à `.gitignore`
- ✅ Garder local uniquement

**Clés API :**
- ✅ Utiliser des clés différentes dev/prod
- ✅ Révoquer les anciennes clés
- ✅ Surveiller l'utilisation
- ✅ Configurer des limites

**Cloudflare :**
- ✅ Utiliser les variables d'environnement
- ✅ Ne jamais exposer dans le code
- ✅ Vérifier les logs régulièrement

---

## 📋 CHECKLIST COMPLÈTE

### Configuration Locale
- [ ] Nouvelle clé ajoutée dans `.env`
- [ ] Serveur redémarré
- [ ] Tests effectués sur `test-mistral-final.html`
- [ ] Tous les badges sont **API** (pas FALLBACK)
- [ ] Chatbot testé sur le site local
- [ ] Tests multilingues effectués
- [ ] Logs vérifiés (pas d'erreurs)

### Configuration Cloudflare
- [ ] Variable `MISTRAL_API_KEY` mise à jour
- [ ] Site redéployé
- [ ] Tests en production effectués
- [ ] Chatbot fonctionne en production
- [ ] Pas d'erreurs dans les logs Cloudflare

### Sécurité
- [ ] Ancienne clé révoquée sur Mistral
- [ ] Fichier `.env` dans `.gitignore`
- [ ] Clé non exposée dans le code
- [ ] Limites configurées sur Mistral

---

## 📊 RÉSUMÉ VISUEL

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│   CONFIGURATION NOUVELLE CLÉ MISTRAL                    │
│                                                         │
│   DÉVELOPPEMENT (Local)                                 │
│   ✅ Fichier .env mis à jour                           │
│   ✅ Serveur redémarré                                 │
│   ✅ Tests effectués                                   │
│   ✅ Badge API visible                                 │
│                                                         │
│   PRODUCTION (Cloudflare)                               │
│   ⚠️ Variable à mettre à jour                          │
│   ⚠️ Site à redéployer                                 │
│   ⚠️ Tests à effectuer                                 │
│                                                         │
│   SÉCURITÉ                                              │
│   ⚠️ Ancienne clé à révoquer                           │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

## 🚀 ACTIONS IMMÉDIATES

### 1. MAINTENANT (Local)
```bash
# Redémarrez le serveur
npm run dev
```

### 2. ENSUITE (Test)
```
# Ouvrez dans votre navigateur
http://localhost:4321/test-mistral-final.html
```

### 3. PUIS (Cloudflare)
```powershell
# Windows
.\update-mistral-key-cloudflare.ps1

# Linux/Mac
./update-mistral-key-cloudflare.sh
```

### 4. ENFIN (Sécurité)
```
# Révoquez l'ancienne clé sur
https://console.mistral.ai/api-keys/
```

---

## 📚 DOCUMENTATION

| Fichier | Description |
|---------|-------------|
| `🔑_NOUVELLE_CLE_MISTRAL_CONFIGUREE.md` | Guide de configuration |
| `👉_NOUVELLE_CLE_CONFIGUREE_GUIDE_COMPLET.md` | Ce fichier |
| `update-mistral-key-cloudflare.ps1` | Script Windows |
| `update-mistral-key-cloudflare.sh` | Script Linux/Mac |
| `test-mistral-final.html` | Page de test |

---

## 📧 SUPPORT

**Besoin d'aide ?**

1. Consultez la documentation ci-dessus
2. Vérifiez les logs dans la console
3. Testez la clé sur https://console.mistral.ai/
4. Contactez : ZyatrIA.contact@gmail.com

---

## 🎉 CONCLUSION

Votre nouvelle clé Mistral est configurée localement.

**Prochaines étapes :**
1. ✅ Testez localement (FAIT ou À FAIRE)
2. ⚠️ Configurez sur Cloudflare (À FAIRE)
3. ⚠️ Testez en production (À FAIRE)
4. ⚠️ Révoquez l'ancienne clé (À FAIRE)

---

**Commencez maintenant ! 🚀**

```bash
npm run dev
```

Puis ouvrez : http://localhost:4321/test-mistral-final.html
