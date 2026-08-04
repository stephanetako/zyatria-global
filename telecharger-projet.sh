#!/bin/bash

# 📥 Script pour préparer le projet pour le téléchargement
# Ce script crée une archive ZIP prête à être déployée

set -e

echo "📥 PRÉPARATION DU PROJET POUR TÉLÉCHARGEMENT"
echo "============================================="
echo ""

# Couleurs
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m'

info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

success() {
    echo -e "${GREEN}✅ $1${NC}"
}

warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

# Nom du fichier ZIP
ZIP_NAME="zyatria-global-$(date +%Y%m%d-%H%M%S).zip"

info "Création de l'archive : $ZIP_NAME"
echo ""

# Créer un dossier temporaire
TEMP_DIR="zyatria-global-deploy"
rm -rf "$TEMP_DIR"
mkdir -p "$TEMP_DIR"

info "Copie des fichiers essentiels..."

# Copier les fichiers de configuration
cp package.json "$TEMP_DIR/"
cp astro.config.mjs "$TEMP_DIR/"
cp wrangler.jsonc "$TEMP_DIR/"
cp tsconfig.json "$TEMP_DIR/"
cp components.json "$TEMP_DIR/" 2>/dev/null || true
cp .npmrc "$TEMP_DIR/" 2>/dev/null || true

# Copier les dossiers source
cp -r src "$TEMP_DIR/"
cp -r public "$TEMP_DIR/" 2>/dev/null || true
cp -r generated "$TEMP_DIR/" 2>/dev/null || true

# Copier les scripts de déploiement
cp deploy-now.sh "$TEMP_DIR/"
cp 🚀_DEPLOYER_MAINTENANT.md "$TEMP_DIR/"
cp 📥_TELECHARGER_ET_DEPLOYER.md "$TEMP_DIR/"

# Créer un fichier .env.example
cat > "$TEMP_DIR/.env.example" << 'EOF'
# Mistral AI (Chatbot)
MISTRAL_API_KEY=votre_cle_mistral_ici

# Formspree (Formulaires)
FORMSPREE_FORM_ID=votre_form_id_ici

# Stripe (Paiements)
STRIPE_PUBLIC_KEY=pk_test_votre_cle_publique
STRIPE_SECRET_KEY=sk_test_votre_cle_secrete
STRIPE_WEBHOOK_SECRET=whsec_votre_webhook_secret

# Webflow (optionnel)
WEBFLOW_API_HOST=https://api.webflow.com
WEBFLOW_SITE_API_TOKEN=votre_token_ici
WEBFLOW_CMS_SITE_API_TOKEN=votre_token_cms_ici
EOF

# Créer un README pour le déploiement
cat > "$TEMP_DIR/README_DEPLOIEMENT.md" << 'EOF'
# 🚀 ZyatrIA Global - Déploiement

## Démarrage rapide

1. **Installer les dépendances**
   ```bash
   npm install
   ```

2. **Configurer les variables d'environnement**
   ```bash
   cp .env.example .env
   # Éditez .env avec vos vraies clés API
   ```

3. **Tester en local (optionnel)**
   ```bash
   npm run dev
   # Ouvrir http://localhost:4321
   ```

4. **Déployer sur Cloudflare**
   ```bash
   chmod +x deploy-now.sh
   ./deploy-now.sh
   ```

## Documentation complète

Consultez les fichiers suivants pour plus de détails :
- `🚀_DEPLOYER_MAINTENANT.md` - Guide de déploiement rapide
- `📥_TELECHARGER_ET_DEPLOYER.md` - Guide complet étape par étape

## Support

Pour toute question, consultez la documentation Cloudflare :
https://developers.cloudflare.com/workers/

Bon déploiement ! 🎉
EOF

success "Fichiers copiés avec succès"
echo ""

# Créer l'archive ZIP
info "Création de l'archive ZIP..."
if command -v zip &> /dev/null; then
    # Utiliser zip si disponible
    zip -r "$ZIP_NAME" "$TEMP_DIR" -x "*.DS_Store" -x "*node_modules/*" -x "*.git/*" > /dev/null
    success "Archive créée : $ZIP_NAME"
else
    # Utiliser tar si zip n'est pas disponible
    TAR_NAME="zyatria-global-$(date +%Y%m%d-%H%M%S).tar.gz"
    tar -czf "$TAR_NAME" "$TEMP_DIR" --exclude="*.DS_Store" --exclude="node_modules" --exclude=".git"
    success "Archive créée : $TAR_NAME"
fi

# Nettoyer le dossier temporaire
rm -rf "$TEMP_DIR"

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
success "🎉 PROJET PRÊT POUR LE TÉLÉCHARGEMENT !"
echo ""
echo "📦 Fichier créé : $ZIP_NAME"
echo ""
echo "📋 Contenu de l'archive :"
echo "   ✅ Code source complet (src/)"
echo "   ✅ Fichiers de configuration"
echo "   ✅ Scripts de déploiement"
echo "   ✅ Documentation complète"
echo "   ✅ Fichier .env.example"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "📥 Prochaines étapes :"
echo ""
echo "   1. Téléchargez le fichier : $ZIP_NAME"
echo "   2. Décompressez-le sur votre ordinateur"
echo "   3. Suivez les instructions dans README_DEPLOIEMENT.md"
echo "   4. Exécutez : ./deploy-now.sh"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
success "Bon déploiement ! 🚀"
echo ""
