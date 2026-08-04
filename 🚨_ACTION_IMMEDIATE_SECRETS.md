# 🚨 ACTION IMMÉDIATE - SECRETS DÉTECTÉS

## ⚠️ **SITUATION ACTUELLE**

Des **secrets réels** ont été détectés dans vos fichiers de documentation :

| Type | Fichier | Secret |
|------|---------|--------|
| 🔑 Webflow Site API | `FORMSPREE_CONFIGURATION.md` | `8160da8f...` |
| 🔑 Webflow CMS API | `FORMSPREE_CONFIGURATION.md` | `177d18c2...` |
| 🔐 Stripe Webhook | `📋_CONFIGURATION_ETAPE_PAR_ETAPE.md` | `whsec_d292...` |

---

## 🎯 **ACTIONS SELON VOTRE SITUATION**

### ❓ **Avez-vous déjà pushé sur GitHub/GitLab ?**

#### ✅ **NON - Projet local uniquement**

**Vous avez de la chance ! 🎉**

Nettoyez simplement les fichiers avant le premier push :

```bash
# Nettoyer automatiquement
./clean-secrets-from-docs.sh

# Vérifier les changements
git diff

# Commiter
git add .
git commit -m "docs: remove secrets from documentation"

# Maintenant vous pouvez push en toute sécurité
git push
```

**✅ TERMINÉ ! Vos secrets sont protégés.**

---

#### 🚨 **OUI - Déjà pushé sur GitHub/GitLab**

**⚠️ VOS SECRETS SONT EXPOSÉS PUBLIQUEMENT !**

**Actions IMMÉDIATES requises :**

---

### 🔄 **ÉTAPE 1 : ROTATION DES CLÉS (URGENT)**

#### **1.1 Webflow Site API Token**

1. Allez sur https://webflow.com/dashboard/account/api
2. Trouvez le token qui commence par `8160da8f`
3. Cliquez sur **"Revoke"** ou **"Delete"**
4. Créez un **nouveau token**
5. Copiez le nouveau token

```bash
# Mettre à jour .env
WEBFLOW_SITE_API_TOKEN="NOUVEAU_TOKEN_ICI"
```

#### **1.2 Webflow CMS API Token**

1. Sur la même page https://webflow.com/dashboard/account/api
2. Trouvez le token qui commence par `177d18c2`
3. Cliquez sur **"Revoke"** ou **"Delete"**
4. Créez un **nouveau token**
5. Copiez le nouveau token

```bash
# Mettre à jour .env
WEBFLOW_CMS_SITE_API_TOKEN="NOUVEAU_TOKEN_ICI"
```

#### **1.3 Stripe Webhook Secret**

1. Allez sur https://dashboard.stripe.com/webhooks
2. Trouvez le webhook avec le secret `whsec_d292...`
3. Cliquez sur **"Delete"** ou créez un nouveau webhook
4. Configurez l'URL : `https://votre-domaine.pages.dev/api/stripe/webhook`
5. Sélectionnez les événements :
   - `checkout.session.completed`
   - `customer.subscription.created`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
   - `invoice.payment_succeeded`
   - `invoice.payment_failed`
6. Copiez le nouveau **Signing secret**

```bash
# Mettre à jour .env
STRIPE_WEBHOOK_SECRET="whsec_NOUVEAU_SECRET_ICI"
```

---

### 🧹 **ÉTAPE 2 : NETTOYER LA DOCUMENTATION**

```bash
# Nettoyer les fichiers
./clean-secrets-from-docs.sh

# Vérifier
git diff

# Commiter
git add .
git commit -m "docs: remove exposed secrets from documentation"
git push
```

---

### 🗑️ **ÉTAPE 3 : NETTOYER L'HISTORIQUE GIT (OPTIONNEL)**

**⚠️ ATTENTION : Ceci réécrit l'historique Git !**

Si vous voulez supprimer complètement les secrets de l'historique :

#### **Option A : BFG Repo-Cleaner (Recommandé)**

```bash
# Installer BFG
brew install bfg  # macOS
# ou télécharger depuis https://rtyley.github.io/bfg-repo-cleaner/

# Créer un fichier avec les secrets à supprimer
cat > secrets.txt << 'EOF'
8160da8face945f9fb1e1515f445592076f5481aabc0aeb7a7a11e9fdb118ed0
177d18c2c624850e2dd7deb5c159dc319b90ef7c9cad86464217b2346a6f3c64
whsec_d29277bba1b75a2b488b3ecc1c4ca969e497e2d9aa40231d3d11df56b5724564
EOF

# Nettoyer
bfg --replace-text secrets.txt

# Finaliser
git reflog expire --expire=now --all
git gc --prune=now --aggressive

# Forcer le push
git push --force --all
```

#### **Option B : git filter-branch**

```bash
# Supprimer les secrets de l'historique
git filter-branch --force --index-filter \
  "git rm --cached --ignore-unmatch FORMSPREE_CONFIGURATION.md '📋_CONFIGURATION_ETAPE_PAR_ETAPE.md'" \
  --prune-empty --tag-name-filter cat -- --all

# Forcer le push
git push --force --all
```

---

### ☁️ **ÉTAPE 4 : METTRE À JOUR CLOUDFLARE PAGES**

```bash
# Mettre à jour les variables d'environnement
wrangler pages secret put WEBFLOW_SITE_API_TOKEN
# Entrer le nouveau token

wrangler pages secret put WEBFLOW_CMS_SITE_API_TOKEN
# Entrer le nouveau token

wrangler pages secret put STRIPE_WEBHOOK_SECRET
# Entrer le nouveau secret
```

Ou via l'interface Cloudflare :
1. Allez sur https://dash.cloudflare.com
2. Sélectionnez votre projet **zyatria-global**
3. Allez dans **Settings** > **Environment variables**
4. Mettez à jour les 3 variables

---

## ✅ **VÉRIFICATION FINALE**

```bash
# Vérifier qu'aucun secret n'est dans Git
git grep -E "(8160da8f|177d18c2|whsec_d292)" || echo "✅ Aucun secret trouvé"

# Vérifier le .env local
cat .env | grep -E "(WEBFLOW|STRIPE_WEBHOOK)"

# Tester le site
npm run build
npm run dev
```

---

## 📋 **CHECKLIST**

- [ ] Tokens Webflow révoqués et régénérés
- [ ] Webhook Stripe supprimé et recréé
- [ ] Nouveau webhook secret Stripe obtenu
- [ ] `.env` local mis à jour
- [ ] Cloudflare Pages variables mises à jour
- [ ] Documentation nettoyée
- [ ] Changements commités et pushés
- [ ] (Optionnel) Historique Git nettoyé
- [ ] Site testé et fonctionnel

---

## 🆘 **BESOIN D'AIDE ?**

### **Vérifier si vos secrets sont exposés publiquement :**

1. Allez sur votre repo GitHub/GitLab
2. Utilisez la recherche : `8160da8f` ou `177d18c2` ou `whsec_d292`
3. Si vous trouvez des résultats → **ROTATION IMMÉDIATE**

### **Vérifier l'historique :**

```bash
# Chercher dans l'historique
git log --all --full-history --source -- FORMSPREE_CONFIGURATION.md
git log --all --full-history --source -- "📋_CONFIGURATION_ETAPE_PAR_ETAPE.md"
```

---

## 🔐 **PRÉVENTION FUTURE**

### **1. Créer un pre-commit hook**

```bash
cat > .git/hooks/pre-commit << 'HOOK'
#!/bin/bash

# Vérifier les secrets avant commit
if git diff --cached --name-only | xargs grep -l -E "(sk_live_|pk_live_|whsec_|[0-9a-f]{64})" 2>/dev/null; then
    echo "❌ ERREUR: Secrets détectés dans les fichiers à commiter"
    echo "Vérifiez les fichiers ci-dessus et supprimez les secrets."
    exit 1
fi
HOOK

chmod +x .git/hooks/pre-commit
```

### **2. Utiliser git-secrets**

```bash
# Installer
brew install git-secrets  # macOS

# Configurer
git secrets --install
git secrets --register-aws

# Ajouter des patterns personnalisés
git secrets --add 'whsec_[a-zA-Z0-9]+'
git secrets --add '[0-9a-f]{64}'
```

### **3. Scanner régulièrement**

```bash
# Installer gitleaks
brew install gitleaks  # macOS

# Scanner
gitleaks detect --source . --verbose
```

---

## 📊 **IMPACT DE L'EXPOSITION**

### **Webflow Tokens :**
- ✅ **Faible risque** si site non publié
- ⚠️ **Risque moyen** si site publié
- 🚨 **Risque élevé** si CMS avec données sensibles

**Actions possibles par un attaquant :**
- Lire les données du site
- Modifier le contenu CMS
- Accéder aux collections

### **Stripe Webhook Secret :**
- ⚠️ **Risque moyen** en général
- 🚨 **Risque élevé** si paiements actifs

**Actions possibles par un attaquant :**
- Envoyer de faux événements webhook
- Simuler des paiements réussis
- Créer de faux abonnements

---

## 🎯 **RÉSUMÉ**

| Situation | Action | Urgence |
|-----------|--------|---------|
| Pas encore pushé | Nettoyer avant push | ⚠️ Moyen |
| Pushé sur repo privé | Rotation + nettoyage | 🚨 Élevé |
| Pushé sur repo public | **ROTATION IMMÉDIATE** | 🔥 CRITIQUE |

---

## ✅ **APRÈS LA ROTATION**

Une fois tous les secrets régénérés :

```bash
# Tester localement
npm run build
npm run dev

# Tester Stripe
npm run test:stripe

# Déployer
git push

# Vérifier le déploiement
curl https://votre-domaine.pages.dev/api/stripe/webhook
```

---

**🔒 La sécurité est une priorité ! Ne prenez aucun risque avec vos secrets.**

**📞 En cas de doute, contactez immédiatement le support de chaque service.**
