#!/bin/bash

echo "🧪 TEST DE L'INTÉGRATION STRIPE"
echo "================================"
echo ""

# Couleurs
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Compteurs
total=0
passed=0
failed=0

# Fonction de test
test_link() {
  local name=$1
  local link=$2
  total=$((total + 1))
  
  if [[ $link == *"buy.stripe.com/test_"* ]]; then
    echo -e "${GREEN}✅${NC} $name"
    passed=$((passed + 1))
  else
    echo -e "${RED}❌${NC} $name - Lien invalide: $link"
    failed=$((failed + 1))
  fi
}

echo "📋 VÉRIFICATION DES LIENS STRIPE"
echo "--------------------------------"
echo ""

echo "🟢 PLANS PRINCIPAUX:"
test_link "Starter - Paiement unique" "$(grep -A 1 'starter:' src/config/stripe-links.ts | grep 'oneTime:' | cut -d"'" -f2)"
test_link "Starter - Mensuel" "$(grep -A 2 'starter:' src/config/stripe-links.ts | grep 'monthly:' | cut -d"'" -f2)"
test_link "Professional - Paiement unique" "$(grep -A 1 'professional:' src/config/stripe-links.ts | grep 'oneTime:' | cut -d"'" -f2)"
test_link "Professional - Mensuel" "$(grep -A 2 'professional:' src/config/stripe-links.ts | grep 'monthly:' | cut -d"'" -f2)"
test_link "Enterprise - Paiement unique" "$(grep -A 1 'enterprise:' src/config/stripe-links.ts | grep 'oneTime:' | cut -d"'" -f2)"
test_link "Enterprise - Mensuel" "$(grep -A 2 'enterprise:' src/config/stripe-links.ts | grep 'monthly:' | cut -d"'" -f2)"

echo ""
echo "🤖 MICRO-AGENTS:"
test_link "Lead Qualification" "$(grep 'leadQualification:' src/config/stripe-links.ts | cut -d"'" -f2)"
test_link "Customer Support" "$(grep 'customerSupport:' src/config/stripe-links.ts | cut -d"'" -f2)"
test_link "Appointments" "$(grep 'appointments:' src/config/stripe-links.ts | cut -d"'" -f2)"
test_link "Prospect Followup" "$(grep 'prospectFollowup:' src/config/stripe-links.ts | cut -d"'" -f2)"
test_link "Real Estate" "$(grep 'realEstate:' src/config/stripe-links.ts | cut -d"'" -f2)"
test_link "E-commerce" "$(grep 'ecommerce:' src/config/stripe-links.ts | cut -d"'" -f2)"

echo ""
echo "🎯 SERVICES ADDITIONNELS:"
test_link "Audit IA" "$(grep -A 1 'services:' src/config/stripe-links.ts | grep 'audit:' | cut -d"'" -f2)"
test_link "Consultation" "$(grep -A 2 'services:' src/config/stripe-links.ts | grep 'consultation:' | cut -d"'" -f2)"

echo ""
echo "================================"
echo "📊 RÉSULTATS"
echo "================================"
echo ""
echo -e "Total de tests: $total"
echo -e "${GREEN}✅ Réussis: $passed${NC}"
echo -e "${RED}❌ Échoués: $failed${NC}"
echo ""

if [ $failed -eq 0 ]; then
  echo -e "${GREEN}🎉 PARFAIT ! Tous les liens Stripe sont valides !${NC}"
  echo ""
  echo "🚀 Prochaines étapes:"
  echo "1. Démarrer le serveur: npm run dev"
  echo "2. Tester les boutons de paiement"
  echo "3. Vérifier que les liens Stripe s'ouvrent correctement"
  echo ""
  exit 0
else
  echo -e "${RED}⚠️  Certains liens sont invalides. Vérifiez stripe-links.ts${NC}"
  echo ""
  exit 1
fi
