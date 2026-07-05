#!/bin/bash

echo "🧪 Test Formspree - ZyatrIA Global"
echo "=================================="
echo ""

# Couleurs
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}📋 Configuration Formspree${NC}"
echo "ID: xeelvrdl"
echo "Endpoint: https://formspree.io/f/xeelvrdl"
echo ""

echo -e "${YELLOW}🔍 Vérification des fichiers...${NC}"
if [ -f "src/components/LeadQualificationForm.tsx" ]; then
    echo "✅ LeadQualificationForm.tsx trouvé"
else
    echo "❌ LeadQualificationForm.tsx manquant"
fi

if [ -f "src/pages/test-formspree.astro" ]; then
    echo "✅ test-formspree.astro trouvé"
else
    echo "❌ test-formspree.astro manquant"
fi
echo ""

echo -e "${YELLOW}📦 Vérification des dépendances...${NC}"
if grep -q "@formspree/react" package.json; then
    echo "✅ @formspree/react installé"
else
    echo "❌ @formspree/react manquant"
    echo "   Installez avec: npm install @formspree/react"
fi
echo ""

echo -e "${GREEN}🚀 Lancement du serveur de développement...${NC}"
echo ""
echo "Ouvrez votre navigateur sur:"
echo "  👉 http://localhost:4321/test-formspree"
echo ""
echo "Instructions:"
echo "  1. Ouvrez la console (F12)"
echo "  2. Remplissez le formulaire"
echo "  3. Cliquez sur 'Envoyer ma demande'"
echo "  4. Vérifiez les logs dans la console"
echo "  5. Vérifiez votre dashboard Formspree"
echo ""
echo "Dashboard Formspree:"
echo "  👉 https://formspree.io/forms/xeelvrdl/submissions"
echo ""

# Lancer le serveur
npm run dev
