# 🚀 Déploiement du Worker ZyatrIA API

## Prérequis
- Compte Cloudflare avec Workers activé
- Clés API : Claude, Mistral, Pexels (optionnel)
- Wrangler CLI installé (`npm install -g wrangler`)

---

## ÉTAPE 1 : Créer l'index Vectorize

Avant de déployer, créez l'index vectoriel :

```bash
npx wrangler vectorize create zyatria-knowledge \
  --dimensions=1024 \
  --metric=cosine
```

**Réponse attendue :** `✅ Successfully created index 'zyatria-knowledge'`

---

## ÉTAPE 2 : Déployer le Worker

```bash
npx wrangler deploy
```

**Réponse attendue :** `Published zyatria-api (X.X sec)`  
**URL du worker :** `https://zyatria-api.TON-SOUS-DOMAINE.workers.dev`

---

## ÉTAPE 3 : Configurer les secrets

```bash
# Claude API (priorité)
npx wrangler secret put CLAUDE_API_KEY
# Entrez votre clé : sk-ant-...

# Mistral API (fallback)
npx wrangler secret put MISTRAL_API_KEY
# Entrez votre clé : ...

# Clé admin (inventez un mot de passe fort)
npx wrangler secret put ADMIN_KEY
# Exemple : MonMotDePasseSecretPourIndexation2024!

# Pexels (optionnel, pour /image)
npx wrangler secret put PEXELS_API_KEY
# Entrez votre clé si vous voulez les images
```

---

## ÉTAPE 4 : Indexer la base de connaissances

**Remplacez :**
- `TON-SOUS-DOMAINE` par votre sous-domaine Cloudflare
- `TA_CLE_ADMIN` par le mot de passe que vous avez défini à l'étape 3

```bash
curl -X POST https://zyatria-api.TON-SOUS-DOMAINE.workers.dev/admin/index \
  -H "Content-Type: application/json" \
  -H "X-Admin-Key: TA_CLE_ADMIN" \
  --data-binary @knowledge.json
```

**Réponse attendue :** `{"inserted":15}`

---

## ÉTAPE 5 : Tester le chatbot

```bash
curl -X POST https://zyatria-api.TON-SOUS-DOMAINE.workers.dev/chat \
  -H "Content-Type: application/json" \
  --data '{"messages":[{"role":"user","content":"Quel est le prix du plan Professional ?"}],"lang":"fr"}'
```

**Réponse attendue :**
```json
{
  "reply": "Le plan Professional coûte 208$ CA/mois et inclut 3 bots IA spécialisés, des intégrations CRM, un support prioritaire sous 24h et 5000 interactions/mois. C'est notre plan le plus populaire ! Souhaitez-vous que je vous envoie le lien d'achat direct ?"
}
```

---

## ÉTAPE 6 : Intégrer au site web

Mettez à jour la variable `ENDPOINT` dans votre widget chatbot :

```javascript
const ENDPOINT = "https://zyatria-api.TON-SOUS-DOMAINE.workers.dev/chat";
```

---

## 🔄 Mettre à jour le contenu

Pour ajouter ou modifier des connaissances :

1. Éditez `knowledge.json`
2. Relancez l'étape 4 (les ID identiques écrasent l'ancienne entrée)

---

## 🛠️ Dépannage

### Erreur "Non autorisé" lors de l'indexation
→ Vérifiez que `X-Admin-Key` correspond au secret configuré

### Erreur "VECTORIZE binding not found"
→ Vérifiez que l'index `zyatria-knowledge` existe : `npx wrangler vectorize list`

### Le chatbot ne répond pas
→ Vérifiez les logs : `npx wrangler tail`

### Erreur CORS
→ Ajoutez votre domaine dans `ALLOWED_ORIGINS` dans `worker.js`

---

## 📞 Support

En cas de problème : ZyatrIA.contact@gmail.com
