#!/bin/bash

echo "🔍 VÉRIFICATION RAPIDE - ZyatrIA Global"
echo "======================================"
echo ""

# Couleurs
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Fonction de vérification
check() {
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✅ $1${NC}"
        return 0
    else
        echo -e "${RED}❌ $1${NC}"
        return 1
    fi
}

# 1. Vérifier que dist existe
echo "📦 Vérification du build..."
if [ -d "dist" ]; then
    check "Dossier dist/ existe"
    FILE_COUNT=$(find dist -type f | wc -l)
    echo "   → $FILE_COUNT fichiers générés"
else
    echo -e "${YELLOW}⚠️  Dossier dist/ manquant - Exécution du build...${NC}"
    npm run build > /dev/null 2>&1
    check "Build exécuté"
fi
echo ""

# 2. Vérifier les fichiers critiques
echo "📄 Vérification des fichiers critiques..."
CRITICAL_FILES=(
    "src/pages/index.astro"
    "src/components/AppWrapper.tsx"
    "src/components/Pricing.tsx"
    "src/config/stripe-links.ts"
    "src/layouts/main.astro"
)

for file in "${CRITICAL_FILES[@]}"; do
    if [ -f "$file" ]; then
        echo -e "${GREEN}✅${NC} $file"
    else
        echo -e "${RED}❌${NC} $file manquant"
    fi
done
echo ""

# 3. Vérifier les erreurs TypeScript
echo "🔍 Vérification TypeScript..."
npx astro check 2>&1 | grep "error ts" > /tmp/ts-check.log
ERROR_COUNT=$(wc -l < /tmp/ts-check.log)

if [ "$ERROR_COUNT" -eq 0 ]; then
    echo -e "${GREEN}✅ Aucune erreur TypeScript critique${NC}"
else
    echo -e "${YELLOW}⚠️  $ERROR_COUNT erreurs TypeScript (fichiers de test)${NC}"
fi
echo ""

# 4. Vérifier package.json
echo "📦 Vérification des dépendances..."
if [ -f "package.json" ]; then
    check "package.json existe"
    if [ -d "node_modules" ]; then
        check "node_modules installé"
    else
        echo -e "${YELLOW}⚠️  node_modules manquant - Exécutez 'npm install'${NC}"
    fi
else
    echo -e "${RED}❌ package.json manquant${NC}"
fi
echo ""

# 5. Résumé final
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "🎯 RÉSUMÉ"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

if [ -d "dist" ] && [ "$ERROR_COUNT" -eq 0 ]; then
    echo -e "${GREEN}✅ Le site est PRÊT pour le déploiement !${NC}"
    echo ""
    echo "Commandes disponibles :"
    echo "  → npm run build     # Rebuild si nécessaire"
    echo "  → npm run preview   # Tester localement"
    echo "  → npm run deploy    # Déployer sur Cloudflare"
else
    echo -e "${YELLOW}⚠️  Quelques vérifications nécessaires${NC}"
    echo ""
    if [ ! -d "dist" ]; then
        echo "  → Exécutez : npm run build"
    fi
    if [ "$ERROR_COUNT" -gt 0 ]; then
        echo "  → Vérifiez : npx astro check"
    fi
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
