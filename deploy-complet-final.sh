#!/bin/bash

# Script de déploiement complet pour zyatria-global
# Corrige le problème du mode server

echo "========================================"
echo "  DÉPLOIEMENT ZYATRIA GLOBAL"
echo "  Restauration mode server"
echo "========================================"
echo ""

# Couleurs
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Étape 1 : Vérifier la configuration
echo -e "${YELLOW}1. Vérification de la configuration...${NC}"
if grep -q "output: 'server'" astro.config.mjs; then
    echo -e "   ${GREEN}✅ Configuration correcte (mode server)${NC}"
else
    echo -e "   ${RED}❌ Configuration incorrecte${NC}"
    echo -e "   ${YELLOW}Correction en cours...${NC}"
    # Backup
    cp astro.config.mjs astro.config.mjs.backup
    # Correction (si nécessaire)
    sed -i "s/output: 'static'/output: 'server'/g" astro.config.mjs
    echo -e "   ${GREEN}✅ Configuration corrigée${NC}"
fi
echo ""

# Étape 2 : Clean
echo -e "${YELLOW}2. Nettoyage...${NC}"
rm -rf dist node_modules/.vite
echo -e "   ${GREEN}✅ Nettoyage terminé${NC}"
echo ""

# Étape 3 : Build
echo -e "${YELLOW}3. Build du projet...${NC}"
npm run build
if [ $? -ne 0 ]; then
    echo -e "   ${RED}❌ Le build a échoué${NC}"
    exit 1
fi
echo -e "   ${GREEN}✅ Build réussi${NC}"
echo ""

# Étape 4 : Vérifier la structure
echo -e "${YELLOW}4. Vérification de la structure...${NC}"
if [ -f "dist/server/entry.mjs" ]; then
    echo -e "   ${GREEN}✅ entry.mjs présent (Worker Cloudflare)${NC}"
else
    echo -e "   ${RED}❌ entry.mjs manquant${NC}"
    exit 1
fi

if [ -f "dist/client/_routes.json" ]; then
    echo -e "   ${GREEN}✅ _routes.json présent${NC}"
else
    echo -e "   ${RED}❌ _routes.json manquant${NC}"
    exit 1
fi
echo ""

# Étape 5 : Git status
echo -e "${YELLOW}5. Fichiers modifiés :${NC}"
git status --short
echo ""

# Étape 6 : Confirmation
echo -e "${CYAN}Voulez-vous déployer ces changements ? (o/N)${NC}"
read -r confirmation
if [[ ! "$confirmation" =~ ^[oO]$ ]]; then
    echo -e "${YELLOW}Déploiement annulé.${NC}"
    exit 0
fi

# Étape 7 : Git add
echo ""
echo -e "${YELLOW}6. Ajout des fichiers...${NC}"
git add .
echo -e "   ${GREEN}✅ Fichiers ajoutés${NC}"

# Étape 8 : Git commit
echo ""
echo -e "${YELLOW}7. Commit...${NC}"
git commit -m "Fix: Restauration mode server - configuration correcte"
echo -e "   ${GREEN}✅ Commit créé${NC}"

# Étape 9 : Git push
echo ""
echo -e "${YELLOW}8. Push vers GitHub...${NC}"
git push origin main
if [ $? -ne 0 ]; then
    echo -e "   ${RED}❌ Le push a échoué${NC}"
    exit 1
fi
echo -e "   ${GREEN}✅ Push réussi${NC}"

# Étape 10 : Informations finales
echo ""
echo "========================================"
echo -e "  ${GREEN}DÉPLOIEMENT EN COURS${NC}"
echo "========================================"
echo ""
echo -e "${GREEN}✅ Votre code a été envoyé sur GitHub${NC}"
echo -e "${YELLOW}⏳ Cloudflare va déployer votre site dans 2-3 minutes${NC}"
echo ""
echo -e "${CYAN}📊 Pour suivre le déploiement :${NC}"
echo "   https://dash.cloudflare.com/b909407c9d4fcef1c9232d039138b851"
echo ""
echo -e "${CYAN}🌐 Votre site sera bientôt disponible sur :${NC}"
echo "   https://zyatria-global-cve.pages.dev"
echo ""
echo -e "${CYAN}🔍 Vérifiez que :${NC}"
echo "   - Le site s'affiche (pas de page blanche)"
echo "   - La navigation fonctionne"
echo "   - Le chatbot est visible"
echo ""
echo "========================================"
echo ""
