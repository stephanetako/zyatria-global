#!/bin/bash

# Script de déploiement GitHub + Cloudflare Pages
# Pour Linux/Mac

# Couleurs
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
GRAY='\033[0;37m'
NC='\033[0m' # No Color

echo -e "${CYAN}🚀 DÉPLOIEMENT ZYATRIA GLOBAL${NC}"
echo -e "${CYAN}=============================${NC}"
echo ""

# Vérifier si Git est installé
if ! command -v git &> /dev/null; then
    echo -e "${RED}❌ Git n'est pas installé. Veuillez installer Git d'abord.${NC}"
    echo -e "${YELLOW}Installation: sudo apt-get install git (Ubuntu/Debian)${NC}"
    echo -e "${YELLOW}Installation: brew install git (Mac)${NC}"
    exit 1
fi

echo -e "${GREEN}📋 ÉTAPE 1: Vérification du projet${NC}"
echo -e "${GRAY}-----------------------------------${NC}"

# Vérifier que nous sommes dans le bon dossier
if [ ! -f "package.json" ]; then
    echo -e "${RED}❌ Erreur: package.json non trouvé${NC}"
    echo -e "${YELLOW}Assurez-vous d'être dans le dossier du projet${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Dossier du projet trouvé${NC}"

# Vérifier le build
echo ""
echo -e "${GREEN}📋 ÉTAPE 2: Test du build${NC}"
echo -e "${GRAY}-------------------------${NC}"

npm run build
if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Le build a échoué${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Build réussi${NC}"

# Initialiser Git si nécessaire
echo ""
echo -e "${GREEN}📋 ÉTAPE 3: Configuration Git${NC}"
echo -e "${GRAY}-----------------------------${NC}"

if [ ! -d ".git" ]; then
    echo -e "${YELLOW}Initialisation de Git...${NC}"
    git init
    git branch -M main
fi

echo -e "${GREEN}✅ Git configuré${NC}"

# Ajouter tous les fichiers
echo ""
echo -e "${GREEN}📋 ÉTAPE 4: Préparation du commit${NC}"
echo -e "${GRAY}---------------------------------${NC}"

git add .

# Créer le commit
COMMIT_MESSAGE="✅ Site complet - Tous agents activés - Prêt production - $(date '+%Y-%m-%d %H:%M')"
git commit -m "$COMMIT_MESSAGE"

echo -e "${GREEN}✅ Commit créé: $COMMIT_MESSAGE${NC}"

# Demander l'URL du repository
echo ""
echo -e "${GREEN}📋 ÉTAPE 5: Configuration du repository GitHub${NC}"
echo -e "${GRAY}----------------------------------------------${NC}"

# Vérifier si un remote existe déjà
REMOTE_URL=$(git remote get-url origin 2>/dev/null)

if [ -n "$REMOTE_URL" ]; then
    echo -e "${GREEN}✅ Repository GitHub déjà configuré: $REMOTE_URL${NC}"
    
    read -p "Voulez-vous pousser vers ce repository? (O/N): " response
    if [ "$response" != "O" ] && [ "$response" != "o" ]; then
        echo -e "${YELLOW}❌ Déploiement annulé${NC}"
        exit 0
    fi
else
    echo -e "${YELLOW}Aucun repository GitHub configuré.${NC}"
    echo ""
    echo -e "${CYAN}Pour créer un repository GitHub:${NC}"
    echo -e "${GRAY}1. Allez sur https://github.com/new${NC}"
    echo -e "${GRAY}2. Créez un nouveau repository (ex: zyatria-global)${NC}"
    echo -e "${GRAY}3. NE PAS initialiser avec README, .gitignore ou license${NC}"
    echo -e "${GRAY}4. Copiez l'URL du repository (ex: https://github.com/username/zyatria-global.git)${NC}"
    echo ""
    
    read -p "Entrez l'URL de votre repository GitHub: " REPO_URL
    
    if [ -z "$REPO_URL" ]; then
        echo -e "${RED}❌ URL non fournie. Déploiement annulé.${NC}"
        exit 1
    fi
    
    git remote add origin "$REPO_URL"
    echo -e "${GREEN}✅ Repository configuré: $REPO_URL${NC}"
fi

# Pousser vers GitHub
echo ""
echo -e "${GREEN}📋 ÉTAPE 6: Push vers GitHub${NC}"
echo -e "${GRAY}----------------------------${NC}"

echo -e "${YELLOW}Envoi du code vers GitHub...${NC}"

git push -u origin main

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Erreur lors du push vers GitHub${NC}"
    echo ""
    echo -e "${YELLOW}Solutions possibles:${NC}"
    echo -e "${GRAY}1. Vérifiez vos identifiants GitHub${NC}"
    echo -e "${GRAY}2. Vérifiez que le repository existe${NC}"
    echo -e "${GRAY}3. Vérifiez votre connexion internet${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Code poussé vers GitHub avec succès!${NC}"

# Instructions pour Cloudflare
echo ""
echo -e "${GREEN}🎉 SUCCÈS! Code sur GitHub${NC}"
echo -e "${GREEN}==========================${NC}"
echo ""
echo -e "${CYAN}📋 PROCHAINES ÉTAPES - CLOUDFLARE PAGES:${NC}"
echo ""
echo -e "${GRAY}1. Allez sur: https://dash.cloudflare.com${NC}"
echo -e "${GRAY}2. Cliquez sur 'Workers & Pages'${NC}"
echo -e "${GRAY}3. Cliquez sur 'Create application' > 'Pages'${NC}"
echo -e "${GRAY}4. Cliquez sur 'Connect to Git'${NC}"
echo -e "${GRAY}5. Sélectionnez votre repository${NC}"
echo -e "${GRAY}6. Configuration du build:${NC}"
echo -e "${YELLOW}   - Framework: Astro${NC}"
echo -e "${YELLOW}   - Build command: npm run build${NC}"
echo -e "${YELLOW}   - Build output: dist${NC}"
echo -e "${GRAY}7. Cliquez sur 'Save and Deploy'${NC}"
echo ""
echo -e "${YELLOW}⚠️  IMPORTANT: Après le premier déploiement:${NC}"
echo -e "${GRAY}   Allez dans Settings > Environment variables${NC}"
echo -e "${GRAY}   Et ajoutez ces variables:${NC}"
echo ""
echo -e "${CYAN}   MISTRAL_API_KEY${NC}"
echo -e "${CYAN}   STRIPE_PUBLIC_KEY${NC}"
echo -e "${CYAN}   STRIPE_SECRET_KEY${NC}"
echo -e "${CYAN}   STRIPE_WEBHOOK_SECRET${NC}"
echo -e "${CYAN}   FORMSPREE_FORM_ID${NC}"
echo ""
echo -e "${GRAY}   (Les valeurs sont dans le fichier .env)${NC}"
echo ""
echo -e "${CYAN}📖 Guide complet: Voir 🚀_DEPLOYER_MAINTENANT_GUIDE_FINAL.md${NC}"
echo ""
echo -e "${GREEN}✅ Déploiement GitHub terminé avec succès!${NC}"
echo ""

# Ouvrir le navigateur (si possible)
if command -v xdg-open &> /dev/null; then
    read -p "Voulez-vous ouvrir GitHub dans votre navigateur? (O/N): " response
    if [ "$response" = "O" ] || [ "$response" = "o" ]; then
        REPO_URL=$(git remote get-url origin | sed 's/\.git$//')
        xdg-open "$REPO_URL" 2>/dev/null
    fi
    
    read -p "Voulez-vous ouvrir Cloudflare Pages dans votre navigateur? (O/N): " response
    if [ "$response" = "O" ] || [ "$response" = "o" ]; then
        xdg-open "https://dash.cloudflare.com/?to=/:account/pages" 2>/dev/null
    fi
elif command -v open &> /dev/null; then
    read -p "Voulez-vous ouvrir GitHub dans votre navigateur? (O/N): " response
    if [ "$response" = "O" ] || [ "$response" = "o" ]; then
        REPO_URL=$(git remote get-url origin | sed 's/\.git$//')
        open "$REPO_URL"
    fi
    
    read -p "Voulez-vous ouvrir Cloudflare Pages dans votre navigateur? (O/N): " response
    if [ "$response" = "O" ] || [ "$response" = "o" ]; then
        open "https://dash.cloudflare.com/?to=/:account/pages"
    fi
fi

echo ""
echo -e "${GREEN}🎉 Terminé! Suivez les étapes ci-dessus pour déployer sur Cloudflare.${NC}"
