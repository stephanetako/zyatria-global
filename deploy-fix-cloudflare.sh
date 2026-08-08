#!/bin/bash

echo "🚀 Déploiement ZyatrIA Global sur Cloudflare Workers"
echo "=================================================="
echo ""

# Couleurs
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Étape 1: Nettoyage
echo -e "${BLUE}📦 Étape 1/4: Nettoyage des anciens builds...${NC}"
rm -rf dist/
rm -rf .astro/
echo -e "${GREEN}✅ Nettoyage terminé${NC}"
echo ""

# Étape 2: Build
echo -e "${BLUE}🔨 Étape 2/4: Construction du projet...${NC}"
npm run build
if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Erreur lors du build${NC}"
    exit 1
fi
echo -e "${GREEN}✅ Build réussi${NC}"
echo ""

# Étape 3: Vérification du build
echo -e "${BLUE}🔍 Étape 3/4: Vérification du build...${NC}"
if [ ! -d "dist" ]; then
    echo -e "${RED}❌ Le dossier dist/ n'existe pas${NC}"
    exit 1
fi

if [ ! -f "dist/_worker.js" ]; then
    echo -e "${RED}❌ Le fichier _worker.js n'existe pas${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Build vérifié${NC}"
echo ""

# Étape 4: Déploiement
echo -e "${BLUE}🚀 Étape 4/4: Déploiement sur Cloudflare...${NC}"
echo -e "${YELLOW}⚠️  Assurez-vous d'être connecté à Cloudflare (wrangler login)${NC}"
echo ""

npx wrangler pages deploy dist --project-name=zyatria-global --branch=main

if [ $? -eq 0 ]; then
    echo ""
    echo -e "${GREEN}✅ Déploiement réussi!${NC}"
    echo ""
    echo -e "${BLUE}🌐 Votre site est maintenant en ligne:${NC}"
    echo -e "${GREEN}   https://zyatria-global.pages.dev${NC}"
    echo -e "${GREEN}   https://zyatria-global.zyatria-contact.workers.dev${NC}"
    echo ""
    echo -e "${YELLOW}⏱️  Attendez 1-2 minutes pour que les changements se propagent${NC}"
else
    echo -e "${RED}❌ Erreur lors du déploiement${NC}"
    exit 1
fi
