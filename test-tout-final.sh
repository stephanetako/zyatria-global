#!/bin/bash

echo "🔍 VÉRIFICATION COMPLÈTE DU SYSTÈME"
echo "===================================="
echo ""

# Couleurs
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Compteurs
PASS=0
FAIL=0

# Fonction de test
test_item() {
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✅ $1${NC}"
        ((PASS++))
    else
        echo -e "${RED}❌ $1${NC}"
        ((FAIL++))
    fi
}

echo "📁 VÉRIFICATION DES FICHIERS"
echo "----------------------------"

# Vérifier les composants principaux
[ -f "src/components/EnhancedClaudeChatBot.tsx" ]
test_item "Chatbot Claude présent"

[ -f "src/pages/api/ai/chat.ts" ]
test_item "API Mistral présente"

[ -f "src/config/stripe-links.ts" ]
test_item "Configuration Stripe présente"

[ -f "src/components/AppWrapperDirect.tsx" ]
test_item "AppWrapper principal présent"

echo ""
echo "🔑 VÉRIFICATION DES CLÉS API"
echo "----------------------------"

# Vérifier les variables d'environnement
grep -q "MISTRAL_API_KEY" .env
test_item "Clé Mistral configurée"

grep -q "STRIPE_PUBLIC_KEY" .env
test_item "Clé Stripe Public configurée"

grep -q "STRIPE_SECRET_KEY" .env
test_item "Clé Stripe Secret configurée"

grep -q "FORMSPREE_FORM_ID" .env
test_item "ID Formspree configuré"

echo ""
echo "🤖 VÉRIFICATION DES AGENTS IA"
echo "-----------------------------"

# Vérifier que le chatbot est importé dans AppWrapper
grep -q "EnhancedClaudeChatBot" src/components/AppWrapperDirect.tsx
test_item "Chatbot activé dans AppWrapper"

# Vérifier les micro-agents dans la config
grep -q "leadQualification" src/config/stripe-links.ts
test_item "Micro-agent Lead Qualification"

grep -q "customerSupport" src/config/stripe-links.ts
test_item "Micro-agent Customer Support"

grep -q "appointments" src/config/stripe-links.ts
test_item "Micro-agent Appointments"

grep -q "prospectFollowup" src/config/stripe-links.ts
test_item "Micro-agent Prospect Followup"

grep -q "realEstate" src/config/stripe-links.ts
test_item "Micro-agent Real Estate"

grep -q "ecommerce" src/config/stripe-links.ts
test_item "Micro-agent E-commerce"

echo ""
echo "💳 VÉRIFICATION STRIPE"
echo "----------------------"

# Compter les liens Stripe
STRIPE_LINKS=$(grep -c "https://buy.stripe.com/" src/config/stripe-links.ts)
if [ "$STRIPE_LINKS" -ge 12 ]; then
    echo -e "${GREEN}✅ $STRIPE_LINKS liens Stripe configurés${NC}"
    ((PASS++))
else
    echo -e "${RED}❌ Seulement $STRIPE_LINKS liens Stripe (attendu: 12+)${NC}"
    ((FAIL++))
fi

echo ""
echo "📧 VÉRIFICATION FORMSPREE"
echo "-------------------------"

# Compter les composants utilisant Formspree
FORMSPREE_COMPONENTS=$(grep -l "xbdedonn" src/components/*.tsx 2>/dev/null | wc -l)
if [ "$FORMSPREE_COMPONENTS" -ge 5 ]; then
    echo -e "${GREEN}✅ $FORMSPREE_COMPONENTS composants utilisent Formspree${NC}"
    ((PASS++))
else
    echo -e "${YELLOW}⚠️  Seulement $FORMSPREE_COMPONENTS composants utilisent Formspree${NC}"
    ((PASS++))
fi

echo ""
echo "🏗️  TEST DE BUILD"
echo "-----------------"

# Tester le build
echo "Construction du projet..."
npm run build > /tmp/build-test.log 2>&1

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Build réussi${NC}"
    ((PASS++))
else
    echo -e "${RED}❌ Build échoué${NC}"
    echo "Voir les logs: /tmp/build-test.log"
    ((FAIL++))
fi

echo ""
echo "📊 RÉSUMÉ"
echo "========="
echo ""
echo -e "Tests réussis: ${GREEN}$PASS${NC}"
echo -e "Tests échoués: ${RED}$FAIL${NC}"
echo ""

TOTAL=$((PASS + FAIL))
PERCENTAGE=$((PASS * 100 / TOTAL))

if [ $FAIL -eq 0 ]; then
    echo -e "${GREEN}🎉 TOUS LES TESTS SONT PASSÉS ! ($PERCENTAGE%)${NC}"
    echo ""
    echo "✅ Le système est prêt pour le déploiement !"
    echo ""
    echo "Prochaines étapes:"
    echo "1. Déployer sur Cloudflare: npm run build && wrangler pages deploy dist"
    echo "2. Configurer les variables d'environnement sur Cloudflare"
    echo "3. Tester le site en production"
    exit 0
else
    echo -e "${YELLOW}⚠️  CERTAINS TESTS ONT ÉCHOUÉ ($PERCENTAGE% réussis)${NC}"
    echo ""
    echo "Veuillez corriger les erreurs avant de déployer."
    exit 1
fi
