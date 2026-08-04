#!/bin/bash

# 🚀 Script de déploiement automatique pour Cloudflare Workers
# ZyatrIA Global - Déploiement en production

set -e  # Arrêter en cas d'erreur

echo "🚀 DÉPLOIEMENT ZYATRIA GLOBAL SUR CLOUDFLARE"
echo "=============================================="
echo ""

# Couleurs pour les messages
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Étape 1 : Vérifier que Wrangler est installé
echo -e "${BLUE}📦 Étape 1/5 : Vérification de Wrangler...${NC}"
if ! command -v wrangler &> /dev/null; then
    echo -e "${RED}❌ Wrangler n'est pas installé${NC}"
    echo "Installation de Wrangler..."
    npm install -g wrangler
fi
echo -e "${GREEN}✅ Wrangler installé (version $(wrangler --version))${NC}"
echo ""

# Étape 2 : Build du projet
echo -e "${BLUE}🔨 Étape 2/5 : Build du projet...${NC}"
npm run build
echo -e "${GREEN}✅ Build réussi${NC}"
echo ""

# Étape 3 : Vérifier les fichiers de build
echo -e "${BLUE}📁 Étape 3/5 : Vérification des fichiers...${NC}"
if [ ! -d "dist" ]; then
    echo -e "${RED}❌ Le dossier dist/ n'existe pas${NC}"
    exit 1
fi
if [ ! -f "dist/_worker.js/index.js" ]; then
    echo -e "${RED}❌ Le fichier worker n'existe pas${NC}"
    exit 1
fi
echo -e "${GREEN}✅ Fichiers de build OK${NC}"
echo ""

# Étape 4 : Vérifier la connexion Cloudflare
echo -e "${BLUE}🔐 Étape 4/5 : Vérification de la connexion Cloudflare...${NC}"
echo -e "${YELLOW}ℹ️  Si vous n'êtes pas connecté, une fenêtre de navigateur va s'ouvrir${NC}"
wrangler whoami || wrangler login
echo -e "${GREEN}✅ Connecté à Cloudflare${NC}"
echo ""

# Étape 5 : Déploiement
echo -e "${BLUE}🚀 Étape 5/5 : Déploiement sur Cloudflare Workers...${NC}"
wrangler deploy

echo ""
echo -e "${GREEN}=============================================="
echo "🎉 DÉPLOIEMENT RÉUSSI !"
echo "=============================================="
echo ""
echo "📋 PROCHAINES ÉTAPES :"
echo ""
echo "1️⃣  Configurer les secrets (variables sensibles) :"
echo "   wrangler secret put MISTRAL_API_KEY"
echo "   wrangler secret put FORMSPREE_FORM_ID"
echo "   wrangler secret put STRIPE_PUBLIC_KEY"
echo "   wrangler secret put STRIPE_SECRET_KEY"
echo "   wrangler secret put STRIPE_WEBHOOK_SECRET"
echo ""
echo "2️⃣  Tester votre site :"
echo "   https://zyatria-global.workers.dev"
echo ""
echo "3️⃣  Configurer un domaine personnalisé :"
echo "   https://dash.cloudflare.com"
echo ""
echo -e "${GREEN}✨ Votre site est maintenant en ligne !${NC}"
