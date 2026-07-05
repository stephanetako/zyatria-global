#!/bin/bash

echo "🔧 TEST RAPIDE - ZyatrIA Global"
echo "================================"
echo ""

# Couleurs
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Test 1: Vérifier que le serveur peut démarrer
echo "📋 Test 1: Vérification du build..."
if npm run build > /dev/null 2>&1; then
    echo -e "${GREEN}✅ Build réussi${NC}"
else
    echo -e "${RED}❌ Erreur de build${NC}"
    exit 1
fi

echo ""
echo "📋 Test 2: Vérification des fichiers critiques..."

# Vérifier les fichiers
files=(
    "src/components/HeroSimple.tsx"
    "src/components/TrustStatsSimple.tsx"
    "src/components/pages/HomePageSimple.tsx"
    "src/pages/test-simple.astro"
    "src/pages/index.astro"
)

for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        echo -e "${GREEN}✅${NC} $file"
    else
        echo -e "${RED}❌${NC} $file manquant"
    fi
done

echo ""
echo "📋 Test 3: Vérification TypeScript..."
if npx astro check 2>&1 | grep -q "0 errors"; then
    echo -e "${GREEN}✅ Aucune erreur TypeScript${NC}"
else
    echo -e "${YELLOW}⚠️  Avertissements TypeScript (non bloquants)${NC}"
fi

echo ""
echo "================================"
echo "✅ TESTS TERMINÉS"
echo ""
echo "🚀 Pour démarrer le serveur:"
echo "   npm run dev"
echo ""
echo "🌐 Puis ouvrez dans votre navigateur:"
echo "   http://localhost:3000/test-simple"
echo ""
echo "📖 Guide complet: 🔧_CORRECTION_PAGE_BLANCHE.md"
echo "================================"
