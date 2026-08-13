#!/bin/bash

# Script de vérification complète pour Cloudflare Pages
# Ce script vérifie que tout est prêt pour le déploiement

echo "🔍 VÉRIFICATION COMPLÈTE DU SITE ZYATRIA GLOBAL"
echo "================================================"
echo ""

# Couleurs
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Compteurs
PASSED=0
FAILED=0
WARNINGS=0

# Fonction de vérification
check() {
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✅ $1${NC}"
        ((PASSED++))
    else
        echo -e "${RED}❌ $1${NC}"
        ((FAILED++))
    fi
}

warn() {
    echo -e "${YELLOW}⚠️  $1${NC}"
    ((WARNINGS++))
}

echo "📦 1. VÉRIFICATION DES DÉPENDANCES"
echo "-----------------------------------"

# Vérifier Node.js
if command -v node &> /dev/null; then
    NODE_VERSION=$(node -v)
    echo -e "${GREEN}✅ Node.js installé : $NODE_VERSION${NC}"
    ((PASSED++))
else
    echo -e "${RED}❌ Node.js non installé${NC}"
    ((FAILED++))
fi

# Vérifier npm
if command -v npm &> /dev/null; then
    NPM_VERSION=$(npm -v)
    echo -e "${GREEN}✅ npm installé : $NPM_VERSION${NC}"
    ((PASSED++))
else
    echo -e "${RED}❌ npm non installé${NC}"
    ((FAILED++))
fi

# Vérifier node_modules
if [ -d "node_modules" ]; then
    echo -e "${GREEN}✅ node_modules présent${NC}"
    ((PASSED++))
else
    echo -e "${RED}❌ node_modules manquant - Exécutez 'npm install'${NC}"
    ((FAILED++))
fi

echo ""
echo "🏗️  2. VÉRIFICATION DE LA CONFIGURATION"
echo "----------------------------------------"

# Vérifier wrangler.toml
if [ -f "wrangler.toml" ]; then
    echo -e "${GREEN}✅ wrangler.toml présent${NC}"
    ((PASSED++))
    
    # Vérifier le contenu
    if grep -q "name = \"zyatria-global\"" wrangler.toml; then
        echo -e "${GREEN}✅ Nom du projet configuré${NC}"
        ((PASSED++))
    else
        echo -e "${RED}❌ Nom du projet non configuré${NC}"
        ((FAILED++))
    fi
    
    if grep -q "pages_build_output_dir = \"dist\"" wrangler.toml; then
        echo -e "${GREEN}✅ Répertoire de sortie configuré${NC}"
        ((PASSED++))
    else
        echo -e "${RED}❌ Répertoire de sortie non configuré${NC}"
        ((FAILED++))
    fi
else
    echo -e "${RED}❌ wrangler.toml manquant${NC}"
    ((FAILED++))
fi

# Vérifier astro.config.mjs
if [ -f "astro.config.mjs" ]; then
    echo -e "${GREEN}✅ astro.config.mjs présent${NC}"
    ((PASSED++))
else
    echo -e "${RED}❌ astro.config.mjs manquant${NC}"
    ((FAILED++))
fi

# Vérifier package.json
if [ -f "package.json" ]; then
    echo -e "${GREEN}✅ package.json présent${NC}"
    ((PASSED++))
    
    # Vérifier les scripts
    if grep -q "\"build\": \"astro build\"" package.json; then
        echo -e "${GREEN}✅ Script de build configuré${NC}"
        ((PASSED++))
    else
        echo -e "${RED}❌ Script de build manquant${NC}"
        ((FAILED++))
    fi
else
    echo -e "${RED}❌ package.json manquant${NC}"
    ((FAILED++))
fi

echo ""
echo "🔨 3. TEST DU BUILD"
echo "-------------------"

# Nettoyer le dossier dist
if [ -d "dist" ]; then
    echo "🧹 Nettoyage du dossier dist..."
    rm -rf dist
fi

# Lancer le build
echo "🏗️  Lancement du build..."
npm run build > /tmp/build-check.log 2>&1

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Build réussi${NC}"
    ((PASSED++))
    
    # Vérifier que dist existe
    if [ -d "dist" ]; then
        echo -e "${GREEN}✅ Dossier dist créé${NC}"
        ((PASSED++))
        
        # Vérifier la taille
        DIST_SIZE=$(du -sh dist | cut -f1)
        echo -e "${GREEN}✅ Taille du build : $DIST_SIZE${NC}"
        ((PASSED++))
        
        # Vérifier les fichiers essentiels
        if [ -f "dist/_worker.js" ]; then
            echo -e "${GREEN}✅ Worker Cloudflare généré${NC}"
            ((PASSED++))
        else
            echo -e "${YELLOW}⚠️  Worker Cloudflare non trouvé${NC}"
            ((WARNINGS++))
        fi
        
        if [ -f "dist/_routes.json" ]; then
            echo -e "${GREEN}✅ Routes configurées${NC}"
            ((PASSED++))
        else
            echo -e "${RED}❌ Routes manquantes${NC}"
            ((FAILED++))
        fi
    else
        echo -e "${RED}❌ Dossier dist non créé${NC}"
        ((FAILED++))
    fi
else
    echo -e "${RED}❌ Build échoué${NC}"
    echo "📋 Voir les logs : /tmp/build-check.log"
    ((FAILED++))
fi

echo ""
echo "📁 4. VÉRIFICATION DES FICHIERS ESSENTIELS"
echo "------------------------------------------"

# Liste des fichiers essentiels
ESSENTIAL_FILES=(
    "src/pages/index.astro"
    "src/layouts/main.astro"
    "src/components/AppWrapper.tsx"
    "src/lib/base-url.ts"
    "public/logo.svg"
)

for file in "${ESSENTIAL_FILES[@]}"; do
    if [ -f "$file" ]; then
        echo -e "${GREEN}✅ $file${NC}"
        ((PASSED++))
    else
        echo -e "${RED}❌ $file manquant${NC}"
        ((FAILED++))
    fi
done

echo ""
echo "🔌 5. VÉRIFICATION DES API ENDPOINTS"
echo "-------------------------------------"

# Liste des endpoints API
API_ENDPOINTS=(
    "src/pages/api/mistral-chat.ts"
    "src/pages/api/stripe/webhook.ts"
    "src/pages/api/stripe/create-checkout.ts"
)

for endpoint in "${API_ENDPOINTS[@]}"; do
    if [ -f "$endpoint" ]; then
        echo -e "${GREEN}✅ $endpoint${NC}"
        ((PASSED++))
    else
        echo -e "${YELLOW}⚠️  $endpoint manquant${NC}"
        ((WARNINGS++))
    fi
done

echo ""
echo "🎨 6. VÉRIFICATION DES STYLES"
echo "-----------------------------"

# Vérifier les fichiers CSS
if [ -f "src/styles/global.css" ]; then
    echo -e "${GREEN}✅ Styles globaux présents${NC}"
    ((PASSED++))
else
    echo -e "${RED}❌ Styles globaux manquants${NC}"
    ((FAILED++))
fi

if [ -f "generated/webflow.css" ]; then
    echo -e "${GREEN}✅ Styles Webflow présents${NC}"
    ((PASSED++))
else
    echo -e "${YELLOW}⚠️  Styles Webflow manquants${NC}"
    ((WARNINGS++))
fi

echo ""
echo "🔐 7. VÉRIFICATION DES VARIABLES D'ENVIRONNEMENT"
echo "------------------------------------------------"

# Vérifier .env.example
if [ -f ".env.example" ]; then
    echo -e "${GREEN}✅ .env.example présent${NC}"
    ((PASSED++))
else
    echo -e "${YELLOW}⚠️  .env.example manquant${NC}"
    ((WARNINGS++))
fi

# Vérifier que .env n'est pas commité
if [ -f ".env" ]; then
    if grep -q ".env" .gitignore 2>/dev/null; then
        echo -e "${GREEN}✅ .env dans .gitignore${NC}"
        ((PASSED++))
    else
        echo -e "${RED}❌ .env pas dans .gitignore - RISQUE DE SÉCURITÉ${NC}"
        ((FAILED++))
    fi
fi

echo ""
echo "📊 RÉSUMÉ DE LA VÉRIFICATION"
echo "============================"
echo ""
echo -e "${GREEN}✅ Tests réussis : $PASSED${NC}"
echo -e "${YELLOW}⚠️  Avertissements : $WARNINGS${NC}"
echo -e "${RED}❌ Tests échoués : $FAILED${NC}"
echo ""

# Résultat final
if [ $FAILED -eq 0 ]; then
    echo -e "${GREEN}🎉 TOUT EST PRÊT POUR LE DÉPLOIEMENT !${NC}"
    echo ""
    echo "Prochaines étapes :"
    echo "1. Vérifiez vos variables d'environnement sur Cloudflare"
    echo "2. Push vers GitHub : git push origin master"
    echo "3. Le déploiement se fera automatiquement"
    echo ""
    exit 0
else
    echo -e "${RED}⚠️  ATTENTION : Des problèmes ont été détectés${NC}"
    echo ""
    echo "Veuillez corriger les erreurs avant de déployer."
    echo ""
    exit 1
fi
