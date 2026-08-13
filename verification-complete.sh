#!/bin/bash

echo "╔══════════════════════════════════════════════════════════════╗"
echo "║     🔍 VÉRIFICATION COMPLÈTE - ZYATRIA GLOBAL 🔍            ║"
echo "╚══════════════════════════════════════════════════════════════╝"
echo ""

# 1. Vérifier le build
echo "1️⃣  VÉRIFICATION DU BUILD"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
if [ -d "dist" ]; then
    echo "✅ Dossier dist/ présent"
    echo "   📦 Taille: $(du -sh dist 2>/dev/null | cut -f1)"
    
    if [ -d "dist/_worker.js" ]; then
        echo "✅ Cloudflare Worker généré"
    else
        echo "❌ Worker manquant"
    fi
    
    if [ -f "dist/_routes.json" ]; then
        echo "✅ Configuration des routes"
    else
        echo "❌ _routes.json manquant"
    fi
else
    echo "❌ Dossier dist/ manquant - BUILD REQUIS"
fi
echo ""

# 2. Vérifier les composants
echo "2️⃣  VÉRIFICATION DES COMPOSANTS"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
if [ -f "src/components/AppWrapper.tsx" ]; then
    echo "✅ AppWrapper.tsx présent"
    
    # Vérifier les imports du Design System
    if grep -q "NavigationDesignSystem" src/components/AppWrapper.tsx; then
        echo "✅ NavigationDesignSystem importé"
    else
        echo "⚠️  NavigationDesignSystem manquant"
    fi
    
    if grep -q "HeroDesignSystem" src/components/AppWrapper.tsx; then
        echo "✅ HeroDesignSystem importé"
    else
        echo "⚠️  HeroDesignSystem manquant"
    fi
    
    if grep -q "PricingDesignSystem" src/components/AppWrapper.tsx; then
        echo "✅ PricingDesignSystem importé"
    else
        echo "⚠️  PricingDesignSystem manquant"
    fi
    
    if grep -q "MistralChatBot" src/components/AppWrapper.tsx; then
        echo "✅ MistralChatBot importé"
    else
        echo "⚠️  MistralChatBot manquant"
    fi
else
    echo "❌ AppWrapper.tsx manquant"
fi
echo ""

# 3. Vérifier les variables d'environnement
echo "3️⃣  VÉRIFICATION DES VARIABLES D'ENVIRONNEMENT"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
if [ -f ".env" ]; then
    echo "✅ Fichier .env présent"
    
    if grep -q "MISTRAL_API_KEY=" .env && [ -n "$(grep MISTRAL_API_KEY= .env | cut -d'=' -f2)" ]; then
        echo "✅ MISTRAL_API_KEY configuré"
    else
        echo "⚠️  MISTRAL_API_KEY manquant ou vide"
    fi
    
    if grep -q "FORMSPREE_FORM_ID=" .env && [ -n "$(grep FORMSPREE_FORM_ID= .env | cut -d'=' -f2)" ]; then
        echo "✅ FORMSPREE_FORM_ID configuré"
    else
        echo "⚠️  FORMSPREE_FORM_ID manquant ou vide"
    fi
    
    if grep -q "STRIPE_SECRET_KEY=" .env && [ -n "$(grep STRIPE_SECRET_KEY= .env | cut -d'=' -f2)" ]; then
        echo "✅ STRIPE_SECRET_KEY configuré"
    else
        echo "⚠️  STRIPE_SECRET_KEY manquant ou vide"
    fi
else
    echo "❌ Fichier .env manquant"
fi
echo ""

# 4. Vérifier Git
echo "4️⃣  VÉRIFICATION GIT"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
if [ -d ".git" ]; then
    echo "✅ Repository Git présent"
    
    current_branch=$(git branch --show-current 2>/dev/null || echo "unknown")
    echo "   📍 Branche actuelle: $current_branch"
    
    if [ -n "$(git status --porcelain 2>/dev/null)" ]; then
        changed=$(git status --porcelain 2>/dev/null | wc -l)
        echo "   📝 Fichiers modifiés: $changed"
        echo "   ⚠️  COMMIT REQUIS"
    else
        echo "   ✅ Aucun changement (tout est commité)"
    fi
    
    # Vérifier le remote
    if git remote -v | grep -q "origin"; then
        echo "   ✅ Remote origin configuré"
        remote_url=$(git remote get-url origin 2>/dev/null)
        echo "   🔗 URL: $remote_url"
    else
        echo "   ❌ Remote origin manquant"
    fi
else
    echo "❌ Pas de repository Git"
fi
echo ""

# 5. Vérifier la configuration Stripe
echo "5️⃣  VÉRIFICATION STRIPE"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
if [ -f "src/config/stripe-links.ts" ]; then
    echo "✅ Configuration Stripe présente"
    
    link_count=$(grep -c "https://buy.stripe.com" src/config/stripe-links.ts 2>/dev/null || echo "0")
    echo "   🔗 Liens Stripe configurés: $link_count"
else
    echo "❌ Configuration Stripe manquante"
fi
echo ""

# 6. Résumé final
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📊 RÉSUMÉ"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Compter les problèmes
problems=0

if [ ! -d "dist" ]; then
    problems=$((problems + 1))
fi

if [ ! -f "src/components/AppWrapper.tsx" ]; then
    problems=$((problems + 1))
fi

if [ ! -f ".env" ]; then
    problems=$((problems + 1))
fi

if [ ! -d ".git" ]; then
    problems=$((problems + 1))
fi

if [ $problems -eq 0 ]; then
    echo "✅ TOUT EST CORRECT !"
    echo ""
    echo "🚀 PRÊT POUR LE DÉPLOIEMENT"
    echo ""
    echo "Votre site devrait fonctionner à:"
    echo "https://zyatria-global.zyatria-contact.workers.dev/"
else
    echo "⚠️  $problems PROBLÈME(S) DÉTECTÉ(S)"
    echo ""
    echo "Consultez les détails ci-dessus"
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
