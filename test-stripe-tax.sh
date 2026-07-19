#!/bin/bash

# 🧾 Script de test pour Stripe Tax
# Ce script vérifie que la taxation automatique est bien configurée

echo "🧾 Test de configuration Stripe Tax"
echo "===================================="
echo ""

# Couleurs
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Vérifier que les variables d'environnement sont configurées
echo "📋 Vérification des variables d'environnement..."
if [ -z "$STRIPE_SECRET_KEY" ]; then
    echo -e "${RED}❌ STRIPE_SECRET_KEY n'est pas configurée${NC}"
    echo "   Ajoutez-la dans votre fichier .env"
    exit 1
else
    echo -e "${GREEN}✅ STRIPE_SECRET_KEY configurée${NC}"
fi

if [ -z "$STRIPE_PUBLIC_KEY" ]; then
    echo -e "${RED}❌ STRIPE_PUBLIC_KEY n'est pas configurée${NC}"
    echo "   Ajoutez-la dans votre fichier .env"
    exit 1
else
    echo -e "${GREEN}✅ STRIPE_PUBLIC_KEY configurée${NC}"
fi

echo ""
echo "🔍 Vérification de la configuration Stripe Tax..."
echo ""

# Vérifier si Stripe Tax est activé (nécessite l'API Stripe)
echo "Pour vérifier si Stripe Tax est activé :"
echo "1. Allez sur : https://dashboard.stripe.com/settings/tax"
echo "2. Vérifiez que 'Stripe Tax' est activé"
echo ""

echo -e "${YELLOW}📝 Checklist de configuration :${NC}"
echo ""
echo "[ ] 1. Stripe Tax activé dans le dashboard"
echo "[ ] 2. Juridictions fiscales configurées (Canada, USA, etc.)"
echo "[ ] 3. Tax codes appliqués aux produits"
echo "[ ] 4. Payment Links mis à jour avec taxation automatique"
echo "[ ] 5. Tests effectués en mode test"
echo ""

echo -e "${GREEN}🎯 Prochaines étapes :${NC}"
echo ""
echo "1. Activez Stripe Tax :"
echo "   → https://dashboard.stripe.com/settings/tax"
echo ""
echo "2. Configurez vos Payment Links (14 au total) :"
echo "   → https://dashboard.stripe.com/payment-links"
echo "   → Pour chaque lien : Edit → Tax → Activer 'Collect tax automatically'"
echo ""
echo "3. Testez avec une transaction :"
echo "   → Utilisez une carte de test : 4242 4242 4242 4242"
echo "   → Adresse de test au Canada (Toronto, ON)"
echo "   → Vérifiez que les taxes sont calculées"
echo ""
echo "4. Consultez le guide complet :"
echo "   → Ouvrez GUIDE_STRIPE_TAX.md"
echo ""

echo -e "${YELLOW}💡 Conseil :${NC}"
echo "Vous pouvez utiliser soit :"
echo "  • Les Payment Links existants (avec taxation activée)"
echo "  • La nouvelle API route : /api/stripe/create-checkout"
echo ""

echo "✅ Script terminé"
