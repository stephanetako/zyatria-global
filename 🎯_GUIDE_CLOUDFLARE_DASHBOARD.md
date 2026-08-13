# 🎯 GUIDE COMPLET DU DASHBOARD CLOUDFLARE

## 📊 VUE D'ENSEMBLE DE VOTRE CONFIGURATION

Votre site **zyatria-global** est configuré sur Cloudflare Pages avec toutes les variables d'environnement nécessaires.

---

## 🔐 VARIABLES ET SECRETS CONFIGURÉS

### ✅ Variables Actuellement Configurées

| Type | Nom | Statut | Utilisation |
|------|-----|--------|-------------|
| 🔒 Secret | `CLAUDE_API_KEY` | ✅ Chiffré | API Claude (optionnel) |
| 🔒 Secret | `FORMSPREE_FORM_ID` | ✅ Chiffré | Formulaires de contact |
| 🔒 Secret | `MISTRAL_API_KEY` | ✅ Chiffré | Chatbot IA |
| 🔒 Secret | `STRIPE_PUBLIC_KEY` | ✅ Chiffré | Paiements Stripe (public) |
| 🔒 Secret | `STRIPE_SECRET_KEY` | ✅ Chiffré | Paiements Stripe (privé) |
| 🔒 Secret | `STRIPE_WEBHOOK_SECRET` | ✅ Chiffré | Webhooks Stripe |

### 📝 Comment Vérifier/Modifier les Variables

1. **Accéder aux variables** :
   ```
   Dashboard Cloudflare → Workers & Pages → zyatria-global → Settings → Variables and Secrets
   ```

2. **Ajouter une nouvelle variable** :
   - Cliquez sur "Add variable"
   - Choisissez le type (Text ou Secret)
   - Entrez le nom et la valeur
   - Cliquez sur "Save"

3. **Modifier une variable existante** :
   - Cliquez sur "Edit" à côté de la variable
   - Entrez la nouvelle valeur
   - Cliquez sur "Save"

4. **Supprimer une variable** :
   - Cliquez sur "Delete" à côté de la variable
   - Confirmez la suppression

---

## 📊 OBSERVABILITÉ

### Journaux Workers (Logs)

**Configuration actuelle** :
- ✅ Journaux activés : **100%**
- ✅ Logs d'invocation inclus
- ✅ Conservation sur le tableau de bord

**Comment accéder aux logs** :
```
Dashboard → Workers & Pages → zyatria-global → Logs
```

**Types de logs disponibles** :
- 🔵 **Info** : Informations générales
- 🟡 **Warning** : Avertissements
- 🔴 **Error** : Erreurs critiques
- 🟢 **Success** : Opérations réussies

**Exemples de logs utiles** :
```javascript
// Dans votre code, vous verrez :
console.log('[STRIPE] Payment succeeded!');
console.log('[MISTRAL] API call successful');
console.error('[ERROR] Something went wrong');
```

### Workers Traces

**Configuration actuelle** :
- ✅ Traces activées : **100%**
- ✅ Échantillonnage complet

**Utilité** :
- Suivre les performances de vos API
- Identifier les goulots d'étranglement
- Déboguer les problèmes de latence

---

## ⚙️ EXÉCUTION (RUNTIME)

### Positionnement
- **Statut** : `off` (par défaut)
- **Utilité** : Contrôle où vos Workers s'exécutent géographiquement

### Date de Compatibilité
- **Configurée** : `2024-01-29`
- **Utilité** : Garantit la compatibilité avec les fonctionnalités Cloudflare

### Indicateurs de Compatibilité
- ✅ `nodejs_compat` : Activé
- **Utilité** : Permet l'utilisation de modules Node.js

---

## 🏗️ BUILD

### Configuration Git

**Repository connecté** :
```
📦 Repository : stephanetako/zyatria-global
🌿 Branche : master
```

**Configuration de build** :
```yaml
Commande de build: npm run build
Commande de déploiement: npx wrangler deploy
Commande de version: npx wrangler versions upload
Répertoire racine: /
```

### Contrôle de Branche

**Branche en production** : `master`

Tout push sur `master` déclenche automatiquement :
1. 🔄 Pull du code depuis GitHub
2. 🏗️ Build avec `npm run build`
3. 🚀 Déploiement automatique
4. ✅ Mise en ligne

### Chemins de Surveillance

**Inclure** : `*` (tous les fichiers)

**Exclure** :
- `node_modules/**`
- `.git/`

**Utilité** : Évite de rebuilder pour des changements non pertinents

### Jeton d'API
- **ID** : `3695f6b0-cdab-4934-a80a-5bb5a9967415`
- **Utilité** : Authentification pour les déploiements automatiques

### Cache du Build
- **Statut** : ✅ Activé
- **Utilité** : Accélère les builds en réutilisant les dépendances

---

## 🎯 ÉVÉNEMENTS DÉCLENCHEURS

### Déclencheurs Cron
- **Statut** : Aucun configuré
- **Utilité potentielle** : Tâches planifiées (backups, rapports, etc.)

**Exemple de configuration** :
```
0 0 * * * → Tous les jours à minuit
0 */6 * * * → Toutes les 6 heures
```

### Queues
- **Statut** : Aucune configurée
- **Utilité potentielle** : Traitement asynchrone de tâches

---

## ⚙️ GÉNÉRAL

### Nom du Worker
```
zyatria-global
```

### Zone Dangereuse

⚠️ **ATTENTION** : Actions irréversibles

**Supprimer le Worker** :
- ❌ Supprime définitivement votre site
- ❌ Supprime tous les déploiements
- ❌ Supprime toutes les variables
- ❌ **IRRÉVERSIBLE**

**Quand l'utiliser** :
- Uniquement si vous voulez supprimer complètement le projet
- Jamais en production

---

## 📈 MONITORING ET MÉTRIQUES

### Accéder aux Métriques

```
Dashboard → Workers & Pages → zyatria-global → Metrics
```

**Métriques disponibles** :
- 📊 **Requêtes** : Nombre de requêtes par période
- ⏱️ **Latence** : Temps de réponse moyen
- 💾 **Bande passante** : Données transférées
- ❌ **Erreurs** : Taux d'erreur

**Périodes disponibles** :
- Dernières 24 heures
- Derniers 7 jours
- Derniers 30 jours

---

## 🚀 DÉPLOIEMENTS

### Accéder aux Déploiements

```
Dashboard → Workers & Pages → zyatria-global → Deployments
```

**Informations par déploiement** :
- 🕐 Date et heure
- 🌿 Branche source
- 📝 Commit message
- ✅ Statut (Success/Failed)
- 🔗 URL de preview
- 📊 Logs de build

**Actions disponibles** :
- 👁️ **View** : Voir les détails
- 🔄 **Rollback** : Revenir à cette version
- 🗑️ **Delete** : Supprimer ce déploiement

---

## 🌐 DOMAINES

### Configurer un Domaine Personnalisé

1. **Accéder aux domaines** :
   ```
   Dashboard → Workers & Pages → zyatria-global → Custom domains
   ```

2. **Ajouter un domaine** :
   - Cliquez sur "Set up a custom domain"
   - Entrez votre domaine (ex: `www.zyatria.com`)
   - Suivez les instructions DNS

3. **Configuration DNS** :
   ```
   Type: CNAME
   Name: www (ou @)
   Target: zyatria-global.pages.dev
   ```

4. **Vérification** :
   - Cloudflare vérifie automatiquement
   - Certificat SSL généré automatiquement
   - Domaine actif en quelques minutes

---

## 🔧 DÉPANNAGE

### Le Build Échoue

**Vérifier** :
1. Les logs de build dans "Deployments"
2. Les variables d'environnement
3. Le fichier `wrangler.toml`

**Solutions courantes** :
```bash
# Vérifier localement
npm run build

# Vérifier les types
npx astro check

# Nettoyer et rebuilder
rm -rf dist node_modules
npm install
npm run build
```

### Les Variables ne Fonctionnent Pas

**Vérifier** :
1. Que les variables sont bien configurées
2. Que les noms correspondent exactement
3. Qu'il n'y a pas d'espaces dans les noms

**Redéployer** :
```bash
# Forcer un nouveau déploiement
git commit --allow-empty -m "Trigger rebuild"
git push origin master
```

### Les Logs ne S'Affichent Pas

**Vérifier** :
1. Que l'observabilité est activée (100%)
2. Que les logs d'invocation sont inclus
3. Attendre quelques minutes après le déploiement

**Activer les logs** :
```
Settings → Observability → Enable logs
```

---

## 📊 RÉSUMÉ DE VOTRE CONFIGURATION

```
✅ Nom du projet : zyatria-global
✅ Repository : stephanetako/zyatria-global
✅ Branche : master
✅ Build : Automatique
✅ Variables : 6 configurées
✅ Logs : Activés (100%)
✅ Traces : Activées (100%)
✅ Cache : Activé
✅ Déploiement : Automatique via GitHub
```

---

## 🎯 PROCHAINES ÉTAPES

### 1. Vérifier le Dernier Déploiement
```
Dashboard → Deployments → Voir le dernier build
```

### 2. Tester le Site
```
Ouvrir : https://zyatria-global.pages.dev
```

### 3. Configurer un Domaine (Optionnel)
```
Dashboard → Custom domains → Set up a custom domain
```

### 4. Monitorer les Performances
```
Dashboard → Metrics → Analyser les statistiques
```

---

## 📧 SUPPORT

**En cas de problème** :
1. Vérifier les logs Cloudflare
2. Consulter la documentation : https://developers.cloudflare.com/pages
3. Contacter le support Cloudflare

**Pour le code** :
- Repository : https://github.com/stephanetako/zyatria-global
- Email : ZyatrIA.contact@gmail.com

---

**🎉 Votre site est maintenant configuré et prêt sur Cloudflare Pages !**
