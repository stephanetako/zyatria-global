#!/bin/bash

# 🧪 Test Rapide des Liens Stripe
# Ce script vérifie si vos liens Stripe sont valides

echo "🔍 VÉRIFICATION DES LIENS STRIPE"
echo "================================"
echo ""

# Couleurs
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Compteurs
TOTAL=0
TEST_MODE=0
PRODUCTION=0
INVALID=0

echo "📋 Analyse du fichier stripe-links.ts..."
echo ""

# Extraire tous les liens du fichier
LINKS=$(grep -o "https://buy.stripe.com/[^'\"]*" src/config/stripe-links.ts)

# Analyser chaque lien
while IFS= read -r link; do
    if [ ! -z "$link" ]; then
        TOTAL=$((TOTAL + 1))
        
        if [[ $link == *"test_"* ]]; then
            echo -e "${RED}❌ MODE TEST:${NC} $link"
            TEST_MODE=$((TEST_MODE + 1))
        elif [[ $link == *"VOTRE_LIEN_ICI"* ]]; then
            echo -e "${YELLOW}⚠️  NON CONFIGURÉ:${NC} Lien manquant"
            INVALID=$((INVALID + 1))
        else
            echo -e "${GREEN}✅ PRODUCTION:${NC} $link"
            PRODUCTION=$((PRODUCTION + 1))
        fi
    fi
done <<< "$LINKS"

echo ""
echo "================================"
echo "📊 RÉSUMÉ"
echo "================================"
echo -e "Total de liens: ${TOTAL}"
echo -e "${GREEN}✅ Production: ${PRODUCTION}${NC}"
echo -e "${RED}❌ Mode Test: ${TEST_MODE}${NC}"
echo -e "${YELLOW}⚠️  Non configurés: ${INVALID}${NC}"
echo ""

if [ $TEST_MODE -gt 0 ]; then
    echo -e "${RED}🚨 PROBLÈME DÉTECTÉ !${NC}"
    echo ""
    echo "Vos liens sont en MODE TEST et ne fonctionneront pas en production."
    echo ""
    echo "📋 SOLUTION:"
    echo "1. Allez sur https://dashboard.stripe.com/payment-links"
    echo "2. Assurez-vous d'être en mode PRODUCTION (pas TEST)"
    echo "3. Créez de nouveaux Payment Links"
    echo "4. Remplacez les liens dans src/config/stripe-links.ts"
    echo ""
    echo "📖 Consultez: 🔍_DIAGNOSTIC_BOUTONS_STRIPE.md pour plus de détails"
elif [ $PRODUCTION -eq $TOTAL ]; then
    echo -e "${GREEN}🎉 PARFAIT !${NC}"
    echo ""
    echo "Tous vos liens Stripe sont en mode PRODUCTION."
    echo "Les boutons devraient fonctionner correctement !"
else
    echo -e "${YELLOW}⚠️  ATTENTION${NC}"
    echo ""
    echo "Certains liens ne sont pas encore configurés."
    echo "Complétez la configuration pour que tous les boutons fonctionnent."
fi

echo ""
