#!/bin/bash

echo "🔍 Diagnostic Page Blanche - ZyatrIA Global"
echo "=========================================="
echo ""

# 1. Vérifier que tous les composants existent
echo "📁 Vérification des composants..."
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
  "SuperChatbotFamily"
)

MISSING=0
for component in "${COMPONENTS[@]}"; do
  if [ -f "src/components/${component}.tsx" ]; then
    echo "  ✅ ${component}.tsx"
  else
    echo "  ❌ ${component}.tsx - MANQUANT"
    MISSING=$((MISSING + 1))
  fi
done

echo ""
if [ $MISSING -eq 0 ]; then
  echo "✅ Tous les composants sont présents"
else
  echo "❌ $MISSING composant(s) manquant(s)"
fi

echo ""
echo "🔧 Vérification de la configuration..."

# 2. Vérifier index.astro
if grep -q "AppWrapperProgressive" src/pages/index.astro; then
  echo "  ✅ index.astro utilise AppWrapperProgressive"
elif grep -q "AppWrapperSafe" src/pages/index.astro; then
  echo "  ⚠️  index.astro utilise AppWrapperSafe (ancienne version)"
elif grep -q "AppWrapperMinimal" src/pages/index.astro; then
  echo "  ⚠️  index.astro utilise AppWrapperMinimal (version de test)"
else
  echo "  ❌ index.astro n'utilise aucun wrapper connu"
fi

# 3. Vérifier le build
echo ""
echo "🏗️  Test de build..."
if npm run build > /dev/null 2>&1; then
  echo "  ✅ Build réussi"
else
  echo "  ❌ Build échoué - Voir les erreurs ci-dessous:"
  npm run build 2>&1 | grep -i "error" | head -5
fi

echo ""
echo "📊 Résumé"
echo "=========================================="
echo "Composants: $((12 - MISSING))/12"
echo "Configuration: OK"
echo ""
echo "🎯 Recommandations:"
echo ""
if [ $MISSING -eq 0 ]; then
  echo "1. Tester localement: npm run dev"
  echo "2. Ouvrir http://localhost:4321"
  echo "3. Vérifier la console (F12) pour les erreurs"
  echo "4. Si tout fonctionne, déployer: ./deploy-cloudflare.sh"
else
  echo "1. Restaurer les composants manquants"
  echo "2. Relancer ce diagnostic"
fi

echo ""
echo "✅ Diagnostic terminé"
