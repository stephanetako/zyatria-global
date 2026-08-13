#!/bin/bash

echo "🔍 DIAGNOSTIC COMPLET DE LA PAGE BLANCHE"
echo "========================================"
echo ""

# Couleurs
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Fonction de test
test_step() {
    echo -e "${BLUE}▶${NC} $1"
}

test_ok() {
    echo -e "${GREEN}✓${NC} $1"
}

test_fail() {
    echo -e "${RED}✗${NC} $1"
}

test_warn() {
    echo -e "${YELLOW}⚠${NC} $1"
}

# Test 1 : Vérifier les fichiers essentiels
test_step "Test 1 : Fichiers essentiels"
if [ -f "src/pages/index.astro" ]; then
    test_ok "index.astro existe"
else
    test_fail "index.astro MANQUANT !"
    exit 1
fi

if [ -f "src/components/AppWrapper.tsx" ]; then
    test_ok "AppWrapper.tsx existe"
else
    test_fail "AppWrapper.tsx MANQUANT !"
    exit 1
fi

if [ -f ".env" ]; then
    test_ok ".env existe"
else
    test_warn ".env manquant (optionnel)"
fi

echo ""

# Test 2 : Vérifier les dépendances
test_step "Test 2 : Dépendances Node.js"
if [ -d "node_modules" ]; then
    test_ok "node_modules existe"
else
    test_fail "node_modules manquant - Exécutez: npm install"
    exit 1
fi

echo ""

# Test 3 : Build
test_step "Test 3 : Build Astro"
echo "   Building..."
if npm run build > /tmp/build.log 2>&1; then
    test_ok "Build réussi"
    
    # Vérifier que dist existe
    if [ -d "dist" ]; then
        test_ok "Dossier dist créé"
        
        # Compter les fichiers
        file_count=$(find dist -type f | wc -l)
        test_ok "$file_count fichiers générés"
    else
        test_fail "Dossier dist non créé"
    fi
else
    test_fail "Build échoué - Voir /tmp/build.log"
    echo ""
    echo "Dernières lignes du log :"
    tail -20 /tmp/build.log
    exit 1
fi

echo ""

# Test 4 : Vérifier les composants
test_step "Test 4 : Composants React"
components=(
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

missing_components=0
for comp in "${components[@]}"; do
    if [ -f "src/components/$comp.tsx" ]; then
        test_ok "$comp.tsx"
    else
        test_fail "$comp.tsx MANQUANT"
        missing_components=$((missing_components + 1))
    fi
done

if [ $missing_components -gt 0 ]; then
    test_warn "$missing_components composant(s) manquant(s)"
fi

echo ""

# Test 5 : Vérifier les routes
test_step "Test 5 : Configuration des routes"
if [ -f "dist/_routes.json" ]; then
    test_ok "_routes.json existe"
    
    # Vérifier que "/" n'est pas exclu
    if grep -q '"/"' dist/_routes.json; then
        if grep -A 10 '"exclude"' dist/_routes.json | grep -q '"/"'; then
            test_fail '"/" est dans la liste exclude !'
        else
            test_ok '"/" n\'est pas exclu'
        fi
    else
        test_ok 'Configuration des routes OK'
    fi
else
    test_fail "_routes.json manquant"
fi

echo ""

# Test 6 : Vérifier les assets
test_step "Test 6 : Assets publics"
assets=(
    "public/zyatria-global-logo.svg"
    "public/logo.svg"
    "public/favicon.svg"
)

for asset in "${assets[@]}"; do
    if [ -f "$asset" ]; then
        test_ok "$(basename $asset)"
    else
        test_warn "$(basename $asset) manquant"
    fi
done

echo ""

# Test 7 : Variables d'environnement
test_step "Test 7 : Variables d'environnement"
if [ -f ".env" ]; then
    required_vars=(
        "FORMSPREE_FORM_ID"
        "MISTRAL_API_KEY"
    )
    
    for var in "${required_vars[@]}"; do
        if grep -q "^$var=" .env; then
            test_ok "$var configuré"
        else
            test_warn "$var manquant dans .env"
        fi
    done
else
    test_warn "Fichier .env non trouvé"
fi

echo ""

# Test 8 : Vérifier la structure du build
test_step "Test 8 : Structure du build"
if [ -f "dist/index.html" ]; then
    test_ok "index.html généré"
    
    # Vérifier que le fichier n'est pas vide
    if [ -s "dist/index.html" ]; then
        test_ok "index.html non vide"
        
        # Vérifier qu'il contient du contenu React
        if grep -q "astro" dist/index.html; then
            test_ok "Contenu Astro détecté"
        else
            test_warn "Pas de contenu Astro détecté"
        fi
    else
        test_fail "index.html est vide !"
    fi
else
    test_fail "index.html non généré"
fi

echo ""

# Test 9 : Vérifier les fichiers JavaScript
test_step "Test 9 : Fichiers JavaScript"
js_files=$(find dist/_astro -name "*.js" 2>/dev/null | wc -l)
if [ $js_files -gt 0 ]; then
    test_ok "$js_files fichiers JavaScript générés"
    
    # Vérifier AppWrapper
    if find dist/_astro -name "*AppWrapper*.js" | grep -q .; then
        test_ok "AppWrapper compilé"
    else
        test_fail "AppWrapper non trouvé dans le build"
    fi
else
    test_fail "Aucun fichier JavaScript généré"
fi

echo ""

# Résumé
echo "========================================"
echo -e "${BLUE}📊 RÉSUMÉ DU DIAGNOSTIC${NC}"
echo "========================================"
echo ""

if [ $missing_components -eq 0 ] && [ -f "dist/index.html" ] && [ $js_files -gt 0 ]; then
    echo -e "${GREEN}✅ TOUS LES TESTS SONT PASSÉS${NC}"
    echo ""
    echo "Le build est correct. Si vous voyez une page blanche :"
    echo ""
    echo "1. 🌐 Testez localement :"
    echo "   npm run preview"
    echo "   Ouvrez http://localhost:4321"
    echo ""
    echo "2. 🔍 Testez la page de diagnostic :"
    echo "   http://localhost:4321/diagnostic"
    echo ""
    echo "3. 📋 Testez la page HTML simple :"
    echo "   http://localhost:4321/test-page-blanche.html"
    echo ""
    echo "4. 🚀 Si local fonctionne mais pas Cloudflare :"
    echo "   - Purgez le cache Cloudflare"
    echo "   - Vérifiez les variables d'environnement"
    echo "   - Vérifiez les logs de déploiement"
    echo ""
else
    echo -e "${RED}❌ PROBLÈMES DÉTECTÉS${NC}"
    echo ""
    echo "Actions recommandées :"
    echo ""
    if [ $missing_components -gt 0 ]; then
        echo "1. ⚠️  Composants manquants - Restaurez depuis backup"
    fi
    if [ ! -f "dist/index.html" ]; then
        echo "2. ⚠️  Build incomplet - Vérifiez les erreurs"
    fi
    if [ $js_files -eq 0 ]; then
        echo "3. ⚠️  JavaScript non généré - Problème de compilation"
    fi
    echo ""
    echo "Consultez le guide complet :"
    echo "cat 🔍_DIAGNOSTIC_PAGE_BLANCHE_COMPLET.md"
fi

echo ""
echo "========================================"
echo -e "${BLUE}📝 LOGS SAUVEGARDÉS${NC}"
echo "========================================"
echo ""
echo "Build log : /tmp/build.log"
echo ""
echo "Pour voir les détails :"
echo "cat /tmp/build.log"
echo ""
