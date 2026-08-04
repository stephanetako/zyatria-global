#!/bin/bash

# Script de test des boutons de tarification
# Vérifie que tous les liens Stripe sont valides

echo "🧪 Test des Boutons de Tarification - ZyatrIA Global"
echo "=================================================="
echo ""

# Couleurs
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Compteurs
TOTAL=0
SUCCESS=0
FAILED=0

# Fonction de test
test_link() {
    local name=$1
    local url=$2
    TOTAL=$((TOTAL + 1))
    
    echo -n "Testing $name... "
    
    if [[ $url == \#* ]]; then
        echo -e "${YELLOW}INTERNAL${NC} (scroll to $url)"
        SUCCESS=$((SUCCESS + 1))
        return
    fi
    
    # Test HTTP avec curl (HEAD request)
    if curl -s -o /dev/null -w "%{http_code}" --head "$url" | grep -q "200\|302\|303"; then
        echo -e "${GREEN}✅ OK${NC}"
        SUCCESS=$((SUCCESS + 1))
    else
        echo -e "${RED}❌ FAILED${NC}"
        FAILED=$((FAILED + 1))
    fi
}

echo "📦 Plans Mensuels"
echo "----------------"
test_link "Starter (68 \$CA/mois)" "https://buy.stripe.com/9B6cMX6mPaTD5450VS9oc0n"
test_link "Professional (208 \$CA/mois)" "https://buy.stripe.com/28E3cn5iL0eZ1RT1ZW9oc0C"
test_link "Enterprise (698 \$CA/mois)" "https://buy.stripe.com/bJeeV57qT1j3eEFcEA9oc0E"
test_link "Essai Gratuit" "#contact"
echo ""

echo "🎓 Services Professionnels"
echo "-------------------------"
test_link "Audit IA (497 \$CA)" "https://buy.stripe.com/5kQeV5cLd2n76894849oc0G"
test_link "Consultation (149 \$CA)" "https://buy.stripe.com/aFabIT9z10eZ7cd1ZW9oc0K"
test_link "Formation (995 \$CA)" "https://buy.stripe.com/00wfZ9eTle5P0NP9so9oc0s"
echo ""

echo "🤖 Micro-Agents"
echo "--------------"
test_link "Qualification Leads (69 \$CA/mois)" "https://buy.stripe.com/bJeaEPcLdaTD7cd1ZW9oc0H"
test_link "Support 24/7 (69 \$CA/mois)" "https://buy.stripe.com/00wdR13aDe5P7cd8ok9oc0w"
test_link "Rendez-vous (68 \$CA/mois)" "https://buy.stripe.com/8x228jbH9f9T545gUQ9oc0I"
test_link "Suivi Prospects (180 \$CA/mois)" "https://buy.stripe.com/5kQeV5cLdaTD2VXeMI9oc0y"
test_link "Immobilier (208 \$CA/mois)" "https://buy.stripe.com/6oUaEP9z14vf9kl6gc9oc0z"
test_link "E-commerce (195 \$CA/mois)" "https://buy.stripe.com/aFa28j3aD6Dn4017kg9oc0A"
echo ""

echo "=================================================="
echo "📊 Résultats"
echo "=================================================="
echo -e "Total de tests: $TOTAL"
echo -e "${GREEN}Succès: $SUCCESS${NC}"
echo -e "${RED}Échecs: $FAILED${NC}"
echo ""

if [ $FAILED -eq 0 ]; then
    echo -e "${GREEN}✅ Tous les tests sont passés !${NC}"
    echo ""
    echo "🚀 Prochaines étapes:"
    echo "  1. Teste manuellement dans le navigateur"
    echo "  2. Vérifie les effets hover"
    echo "  3. Teste sur mobile"
    echo "  4. Deploy en production"
    exit 0
else
    echo -e "${RED}❌ Certains tests ont échoué${NC}"
    echo ""
    echo "🔍 Actions à prendre:"
    echo "  1. Vérifie les liens dans src/config/stripe-links.ts"
    echo "  2. Vérifie que Stripe est en mode LIVE"
    echo "  3. Teste manuellement les liens qui ont échoué"
    exit 1
fi
