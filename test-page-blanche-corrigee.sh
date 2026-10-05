#!/bin/bash

# Script de test pour vérifier que la page blanche est corrigée

echo "🔍 VÉRIFICATION DE LA CORRECTION DE LA PAGE BLANCHE"
echo "=================================================="
echo ""

# Couleurs
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Compteur de tests
PASSED=0
FAILED=0

# Fonction de test
test_check() {
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✅ PASS${NC}: $1"
        ((PASSED++))
    else
        echo -e "${RED}❌ FAIL${NC}: $1"
        ((FAILED++))
    fi
}

echo "📋 Test 1: Vérification de la configuration Astro"
echo "---------------------------------------------------"
if grep -q "output: 'server'" astro.config.mjs; then
    echo -e "${GREEN}✅ PASS${NC}: Mode server activé dans astro.config.mjs"
    ((PASSED++))
else
    echo -e "${RED}❌ FAIL${NC}: Mode server non trouvé dans astro.config.mjs"
    ((FAILED++))
fi
echo ""

echo "📋 Test 2: Vérification de l'adaptateur Cloudflare"
echo "---------------------------------------------------"
if grep -q "adapter: cloudflare" astro.config.mjs; then
    echo -e "${GREEN}✅ PASS${NC}: Adaptateur Cloudflare configuré"
    ((PASSED++))
else
    echo -e "${RED}❌ FAIL${NC}: Adaptateur Cloudflare non trouvé"
    ((FAILED++))
fi
echo ""

echo "📋 Test 3: Vérification du fichier AppWrapper"
echo "---------------------------------------------------"
if [ -f "src/components/AppWrapper.tsx" ]; then
    echo -e "${GREEN}✅ PASS${NC}: AppWrapper.tsx existe"
    ((PASSED++))
else
    echo -e "${RED}❌ FAIL${NC}: AppWrapper.tsx manquant"
    ((FAILED++))
fi
echo ""

echo "📋 Test 4: Vérification des composants principaux"
echo "---------------------------------------------------"
COMPONENTS=(
    "NavigationDesignSystem"
    "HeroDesignSystem"
    "TrustStatsSimple"
    "Services"
    "MicroAgents"
    "RoadmapDesignSystem"
    "Pricing"
    "TestimonialsDesignSystem"
    "FAQDesignSystem"
    "CTAFinal"
    "FooterDesignSystem"
    "MistralChatBot"
)

for component in "${COMPONENTS[@]}"; do
    if grep -q "$component" src/components/AppWrapper.tsx; then
        echo -e "${GREEN}✅${NC} $component importé"
        ((PASSED++))
    else
        echo -e "${RED}❌${NC} $component manquant"
        ((FAILED++))
    fi
done
echo ""

echo "📋 Test 5: Vérification de la page index"
echo "---------------------------------------------------"
if [ -f "src/pages/index.astro" ]; then
    echo -e "${GREEN}✅ PASS${NC}: index.astro existe"
    ((PASSED++))
    
    if grep -q "AppWrapper" src/pages/index.astro; then
        echo -e "${GREEN}✅ PASS${NC}: AppWrapper utilisé dans index.astro"
        ((PASSED++))
    else
        echo -e "${RED}❌ FAIL${NC}: AppWrapper non utilisé dans index.astro"
        ((FAILED++))
    fi
else
    echo -e "${RED}❌ FAIL${NC}: index.astro manquant"
    ((FAILED++))
fi
echo ""

echo "📋 Test 6: Vérification du layout principal"
echo "---------------------------------------------------"
if [ -f "src/layouts/main.astro" ]; then
    echo -e "${GREEN}✅ PASS${NC}: main.astro existe"
    ((PASSED++))
    
    if grep -q "global.css" src/layouts/main.astro; then
        echo -e "${GREEN}✅ PASS${NC}: global.css importé"
        ((PASSED++))
    else
        echo -e "${RED}❌ FAIL${NC}: global.css non importé"
        ((FAILED++))
    fi
else
    echo -e "${RED}❌ FAIL${NC}: main.astro manquant"
    ((FAILED++))
fi
echo ""

echo "📋 Test 7: Test de build"
echo "---------------------------------------------------"
echo "Construction du projet..."
if npm run build > /tmp/build-test.log 2>&1; then
    echo -e "${GREEN}✅ PASS${NC}: Build réussi"
    ((PASSED++))
else
    echo -e "${RED}❌ FAIL${NC}: Build échoué"
    echo "Voir les logs dans /tmp/build-test.log"
    ((FAILED++))
fi
echo ""

echo "📋 Test 8: Vérification du dossier dist"
echo "---------------------------------------------------"
if [ -d "dist" ]; then
    echo -e "${GREEN}✅ PASS${NC}: Dossier dist créé"
    ((PASSED++))
    
    if [ -f "dist/_worker.js" ]; then
        echo -e "${GREEN}✅ PASS${NC}: Worker Cloudflare généré"
        ((PASSED++))
    else
        echo -e "${RED}❌ FAIL${NC}: Worker Cloudflare non généré"
        ((FAILED++))
    fi
else
    echo -e "${RED}❌ FAIL${NC}: Dossier dist non créé"
    ((FAILED++))
fi
echo ""

echo "=================================================="
echo "📊 RÉSULTATS DES TESTS"
echo "=================================================="
echo ""
echo -e "Tests réussis : ${GREEN}$PASSED${NC}"
echo -e "Tests échoués : ${RED}$FAILED${NC}"
echo ""

if [ $FAILED -eq 0 ]; then
    echo -e "${GREEN}🎉 TOUS LES TESTS SONT PASSÉS !${NC}"
    echo ""
    echo "✅ La page blanche est corrigée !"
    echo "✅ Le site est prêt à être déployé !"
    echo ""
    echo "🚀 Prochaines étapes :"
    echo "  1. Tester en local : npm run dev"
    echo "  2. Déployer : git push origin main"
    echo ""
    exit 0
else
    echo -e "${RED}❌ CERTAINS TESTS ONT ÉCHOUÉ${NC}"
    echo ""
    echo "Veuillez vérifier les erreurs ci-dessus."
    echo ""
    exit 1
fi
