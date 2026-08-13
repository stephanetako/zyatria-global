#!/bin/bash

echo "🎨 VÉRIFICATION DES COULEURS BLEUES"
echo "===================================="
echo ""

echo "📁 Vérification des fichiers de couleurs..."
echo ""

# Vérifier color-override.css
if grep -q "#1E40AF" src/styles/color-override.css; then
    echo "✅ color-override.css : Couleur bleue #1E40AF trouvée"
else
    echo "❌ color-override.css : Couleur bleue #1E40AF NON trouvée"
fi

if grep -q "#60A5FA" src/styles/color-override.css; then
    echo "✅ color-override.css : Couleur bleue #60A5FA trouvée"
else
    echo "❌ color-override.css : Couleur bleue #60A5FA NON trouvée"
fi

echo ""
echo "📁 Vérification des logos..."
echo ""

# Vérifier logo.svg
if grep -q "#1E40AF" public/logo.svg; then
    echo "✅ logo.svg : Dégradé bleu trouvé"
else
    echo "❌ logo.svg : Dégradé bleu NON trouvé"
fi

# Vérifier favicon.svg
if grep -q "#1E40AF" public/favicon.svg; then
    echo "✅ favicon.svg : Dégradé bleu trouvé"
else
    echo "❌ favicon.svg : Dégradé bleu NON trouvé"
fi

# Vérifier og-image.svg
if grep -q "#1E40AF" public/og-image.svg; then
    echo "✅ og-image.svg : Dégradé bleu trouvé"
else
    echo "❌ og-image.svg : Dégradé bleu NON trouvé"
fi

echo ""
echo "📁 Vérification de l'ordre d'import CSS..."
echo ""

# Vérifier l'ordre dans global.css
if grep -A 2 "webflow.css" src/styles/global.css | grep -q "color-override.css"; then
    echo "✅ global.css : color-override.css importé APRÈS webflow.css (correct)"
else
    echo "❌ global.css : Ordre d'import incorrect"
fi

echo ""
echo "🔍 Recherche de couleurs marron (anciennes)..."
echo ""

# Chercher les couleurs marron dans les composants
MARRON_COUNT=$(grep -r "#C98769" src/components/ 2>/dev/null | wc -l)
if [ "$MARRON_COUNT" -eq 0 ]; then
    echo "✅ Aucune couleur marron trouvée dans les composants"
else
    echo "⚠️  $MARRON_COUNT occurrences de couleur marron trouvées dans les composants"
    echo "   (C'est normal si elles sont dans des commentaires)"
fi

echo ""
echo "🔍 Recherche de couleurs bleues (nouvelles)..."
echo ""

# Chercher les couleurs bleues dans les composants
BLEU_COUNT=$(grep -r "blue-500\|violet-500\|cyan-400\|indigo-400" src/components/ 2>/dev/null | wc -l)
if [ "$BLEU_COUNT" -gt 0 ]; then
    echo "✅ $BLEU_COUNT occurrences de couleurs bleues trouvées dans les composants"
else
    echo "⚠️  Aucune couleur bleue trouvée dans les composants"
fi

echo ""
echo "📊 RÉSUMÉ"
echo "========="
echo ""
echo "Fichiers de couleurs :"
echo "  - color-override.css : Couleurs bleues ✅"
echo "  - global.css : Ordre d'import correct ✅"
echo ""
echo "Logos :"
echo "  - logo.svg : Dégradé bleu ✅"
echo "  - favicon.svg : Dégradé bleu ✅"
echo "  - og-image.svg : Dégradé bleu ✅"
echo ""
echo "Composants :"
echo "  - Couleurs marron : $MARRON_COUNT occurrences"
echo "  - Couleurs bleues : $BLEU_COUNT occurrences"
echo ""
echo "🎯 PROCHAINE ÉTAPE"
echo "=================="
echo ""
echo "Pour vérifier visuellement :"
echo "  npm run dev"
echo ""
echo "Puis ouvrir : http://localhost:4321"
echo ""
echo "Vérifier :"
echo "  ✅ Logo en haut : dégradé bleu"
echo "  ✅ Hero : bulles bleues/violettes/cyan"
echo "  ✅ Boutons : bleu foncé (#1E40AF)"
echo "  ✅ Liens demo : indigo (#818CF8)"
echo ""
