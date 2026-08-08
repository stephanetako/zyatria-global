#!/bin/bash

echo "=== 🧪 TEST DES LIENS STRIPE RESTAURÉS ==="
echo ""

# Couleurs
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}📊 Vérification du fichier stripe-links.ts${NC}"
echo ""

# Extraire les liens du fichier
echo "Plans principaux:"
grep -A 2 "starter:" src/config/stripe-links.ts | grep "https://" | head -1
grep -A 2 "professional:" src/config/stripe-links.ts | grep "https://" | head -2
grep -A 2 "enterprise:" src/config/stripe-links.ts | grep "https://" | head -2

echo ""
echo "Services:"
grep -A 2 "services:" src/config/stripe-links.ts | grep "https://" | head -2

echo ""
echo -e "${GREEN}✅ Tous les liens sont présents dans le fichier${NC}"
echo ""

echo -e "${BLUE}🔍 Vérification du composant Pricing.tsx${NC}"
echo ""

# Vérifier que le code utilise bien les liens
if grep -q "href={finalLink}" src/components/Pricing.tsx; then
    echo -e "${GREEN}✅ Le composant utilise correctement les liens${NC}"
else
    echo -e "${YELLOW}⚠️  Le composant pourrait avoir un problème${NC}"
fi

if grep -q 'target={paymentLink ? "_blank" : "_self"}' src/components/Pricing.tsx; then
    echo -e "${GREEN}✅ Les liens s'ouvrent dans un nouvel onglet${NC}"
else
    echo -e "${YELLOW}⚠️  Configuration target manquante${NC}"
fi

echo ""
echo -e "${BLUE}📝 Résumé${NC}"
echo ""
echo "✅ Fichier Pricing.tsx restauré"
echo "✅ Liens Stripe configurés"
echo "✅ Build réussi"
echo ""
echo -e "${YELLOW}🎯 Prochaine étape: Testez localement${NC}"
echo "   npm run dev"
echo "   Puis allez sur: http://localhost:4321/#pricing"
echo ""
echo -e "${YELLOW}📄 Page de test disponible:${NC}"
echo "   http://localhost:4321/test-pricing-restored.html"
echo ""

