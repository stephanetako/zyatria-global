#!/bin/bash

echo "🔍 VÉRIFICATION FINALE - ZYATRIA GLOBAL"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Vérifier dist/
if [ -d "dist" ]; then
    echo "✅ Dossier dist/ présent"
    echo "   Taille: $(du -sh dist | cut -f1)"
else
    echo "❌ Dossier dist/ manquant"
    exit 1
fi

# Vérifier _worker.js
if [ -d "dist/_worker.js" ]; then
    echo "✅ Cloudflare Worker présent"
else
    echo "❌ Worker manquant"
    exit 1
fi

# Vérifier _routes.json
if [ -f "dist/_routes.json" ]; then
    echo "✅ Configuration des routes présente"
else
    echo "❌ _routes.json manquant"
    exit 1
fi

# Vérifier les assets
if [ -d "dist/_astro" ]; then
    js_count=$(find dist/_astro -name "*.js" | wc -l)
    css_count=$(find dist/_astro -name "*.css" | wc -l)
    echo "✅ Assets compilés ($js_count JS, $css_count CSS)"
else
    echo "❌ Assets manquants"
    exit 1
fi

# Vérifier Git
if [ -d ".git" ]; then
    echo "✅ Repository Git présent"
    
    # Vérifier les changements
    if [ -n "$(git status --porcelain)" ]; then
        changed=$(git status --porcelain | wc -l)
        echo "   📝 $changed fichiers modifiés"
    else
        echo "   ℹ️  Aucun changement à commiter"
    fi
else
    echo "❌ Pas de repository Git"
fi

# Vérifier .env
if [ -f ".env" ]; then
    echo "✅ Fichier .env présent"
    
    if grep -q "MISTRAL_API_KEY=" .env; then
        echo "   ✅ MISTRAL_API_KEY configuré"
    else
        echo "   ⚠️  MISTRAL_API_KEY manquant"
    fi
    
    if grep -q "FORMSPREE_FORM_ID=" .env; then
        echo "   ✅ FORMSPREE_FORM_ID configuré"
    else
        echo "   ⚠️  FORMSPREE_FORM_ID manquant"
    fi
else
    echo "⚠️  Fichier .env manquant"
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✅ VÉRIFICATION TERMINÉE"
echo ""
echo "🚀 PRÊT POUR LE DÉPLOIEMENT !"
echo ""
echo "Exécutez :"
echo "  git add ."
echo "  git commit -m \"Deploy: Complete SSR build\""
echo "  git push origin main"
echo ""
