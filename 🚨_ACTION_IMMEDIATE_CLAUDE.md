# 🚨 ACTION IMMÉDIATE - CONFIGURER CLAUDE

## ❌ PROBLÈME IDENTIFIÉ

Le chatbot utilise les **réponses de fallback** au lieu d'appeler Claude.

**Raison :** La clé API Claude n'est pas configurée.

---

## ✅ SOLUTION EN 2 MINUTES

### Étape 1 : Créer le fichier .env.local

Dans le dossier racine du projet, créez un fichier `.env.local` :

```bash
# Créer le fichier
touch .env.local

# Ou sur Windows
type nul > .env.local
```

### Étape 2 : Ajouter votre clé API

Ouvrez `.env.local` et ajoutez :

```bash
MISTRAL_API_KEY=sk-ant-api03-VOTRE_CLE_ICI
```

**⚠️ IMPORTANT :**
- Remplacez `VOTRE_CLE_ICI` par votre vraie clé Claude
- La clé commence par `sk-ant-api03-`
- Pas d'espaces, pas de guillemets

### Étape 3 : Obtenir une clé Claude

Si vous n'avez pas encore de clé :

1. **Allez sur :** https://console.anthropic.com/
2. **Créez un compte** (gratuit)
3. **Allez dans :** Settings → API Keys
4. **Cliquez sur :** Create Key
5. **Copiez la clé** (commence par `sk-ant-api03-`)

### Étape 4 : Redémarrer le serveur

```bash
# Arrêtez le serveur (Ctrl+C)
# Puis relancez
npm run dev
```

---

## 🧪 TESTER

Ouvrez http://localhost:4321 et testez :

```
"Bonjour, j'ai besoin d'aide"
```

**Vous devriez voir une réponse de Claude, PAS le fallback !**

---

## 📋 EXEMPLE DE .env.local

```bash
# Clé API Claude (Anthropic)
MISTRAL_API_KEY=sk-ant-api03-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

---

## 🔍 VÉRIFIER QUE ÇA MARCHE

### Dans la console du navigateur (F12)

**AVANT (fallback) :**
```
❌ Configuration manquante : MISTRAL_API_KEY (Claude) non définie
📋 Intention: Générique - Retour réponse par défaut
```

**APRÈS (Claude) :**
```
🔑 Clé API trouvée via import.meta.env (développement local)
🚀 Appel API Claude (Anthropic) - Détection automatique de la langue
✅ Requête réussie - Stats: ...
```

---

## 🚨 SI ÇA NE MARCHE TOUJOURS PAS

### Vérifiez le fichier .env.local

```bash
# Afficher le contenu
cat .env.local

# Ou sur Windows
type .env.local
```

**Doit afficher :**
```
MISTRAL_API_KEY=sk-ant-api03-xxxxx...
```

### Vérifiez que le serveur a redémarré

```bash
# Arrêtez complètement (Ctrl+C)
# Attendez 2 secondes
# Relancez
npm run dev
```

### Vérifiez la clé API

1. Allez sur https://console.anthropic.com/settings/keys
2. Vérifiez que votre clé est active
3. Si elle est révoquée, créez-en une nouvelle

---

## 💡 ASTUCE

Pour vérifier que la clé est bien chargée, ajoutez temporairement dans le code :

```typescript
console.log('Clé API:', import.meta.env.MISTRAL_API_KEY ? 'TROUVÉE' : 'MANQUANTE');
```

---

## 📞 BESOIN D'AIDE ?

**Email :** ZyatrIA.contact@gmail.com

**Documentation :**
- 👉_COMMENCER_ICI_CLAUDE.md
- 🔑_CONFIGURER_CLAUDE_MAINTENANT.md

**Scripts :**
```bash
# Linux/Mac
./configure-claude.sh

# Windows
.\configure-claude.ps1
```

---

## ✅ CHECKLIST

- [ ] Fichier `.env.local` créé
- [ ] Clé API Claude ajoutée (commence par `sk-ant-api03-`)
- [ ] Serveur redémarré (`npm run dev`)
- [ ] Chatbot testé
- [ ] Réponse de Claude (pas fallback)

---

**🎯 Une fois configuré, le chatbot sera 10x plus intelligent !**
