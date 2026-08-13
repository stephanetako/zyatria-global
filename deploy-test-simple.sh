#!/bin/bash

echo "🚀 DÉPLOIEMENT DE TEST SIMPLE"
echo "=============================="
echo ""

# Couleurs
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${BLUE}Étape 1/4 : Build du projet${NC}"
npm run build

if [ $? -ne 0 ]; then
    echo -e "${YELLOW}❌ Build échoué${NC}"
    exit 1
fi

echo ""
echo -e "${GREEN}✅ Build réussi${NC}"
echo ""

echo -e "${BLUE}Étape 2/4 : Vérification des fichiers${NC}"
if [ -f "dist/index.html" ]; then
    echo -e "${GREEN}✅ index.html généré${NC}"
else
    echo -e "${YELLOW}❌ index.html manquant${NC}"
    exit 1
fi

if [ -f "dist/test-site-final.html" ]; then
    echo -e "${GREEN}✅ test-site-final.html présent${NC}"
else
    echo -e "${YELLOW}⚠️  test-site-final.html manquant${NC}"
fi

echo ""
echo -e "${BLUE}Étape 3/4 : Préparation Git${NC}"
git add .
git status --short

echo ""
echo -e "${BLUE}Étape 4/4 : Instructions de déploiement${NC}"
echo ""
echo "Pour déployer sur Cloudflare :"
echo ""
echo "1. Commitez les changements :"
echo "   git commit -m \"Add diagnostic pages and fixes\""
echo ""
echo "2. Poussez vers GitHub :"
echo "   git push origin main"
echo ""
echo "3. Attendez 2-3 minutes que Cloudflare build"
echo ""
echo "4. Testez ces URLs :"
echo "   https://votre-site.pages.dev/test-site-final.html"
echo "   https://votre-site.pages.dev/diagnostic"
echo "   https://votre-site.pages.dev/"
echo ""
echo "5. Si la page d'accueil est blanche :"
echo "   - Ouvrez F12 (Console)"
echo "   - Notez les erreurs"
echo "   - Purgez le cache Cloudflare"
echo ""
echo -e "${GREEN}✅ Prêt pour le déploiement !${NC}"
