#!/bin/bash

# 🔐 Script de configuration des secrets Cloudflare
# ZyatrIA Global - Configuration des variables d'environnement

set -e

echo "🔐 CONFIGURATION DES SECRETS CLOUDFLARE"
echo "========================================"
echo ""

# Couleurs
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m'

# Charger les variables depuis .env
if [ ! -f ".env" ]; then
    echo -e "${YELLOW}⚠️  Fichier .env non trouvé${NC}"
    echo "Création d'un fichier .env..."
    touch .env
fi

echo -e "${BLUE}📋 Lecture des variables depuis .env...${NC}"
source .env

echo ""
echo -e "${YELLOW}ℹ️  Ce script va configurer les secrets suivants :${NC}"
echo "   1. MISTRAL_API_KEY"
echo "   2. FORMSPREE_FORM_ID"
echo "   3. STRIPE_PUBLIC_KEY"
echo "   4. STRIPE_SECRET_KEY"
echo "   5. STRIPE_WEBHOOK_SECRET"
echo ""

# Fonction pour configurer un secret
configure_secret() {
    local secret_name=$1
    local secret_value=$2
    
    if [ -z "$secret_value" ]; then
        echo -e "${YELLOW}⚠️  $secret_name non trouvé dans .env${NC}"
        echo "Voulez-vous le configurer manuellement ? (o/n)"
        read -r response
        if [ "$response" = "o" ]; then
            echo "Entrez la valeur pour $secret_name :"
            read -r secret_value
        else
            echo "Ignoré."
            return
        fi
    fi
    
    echo -e "${BLUE}🔐 Configuration de $secret_name...${NC}"
    echo "$secret_value" | wrangler secret put "$secret_name"
    echo -e "${GREEN}✅ $secret_name configuré${NC}"
    echo ""
}

# Configurer chaque secret
configure_secret "MISTRAL_API_KEY" "$MISTRAL_API_KEY"
configure_secret "FORMSPREE_FORM_ID" "$FORMSPREE_FORM_ID"
configure_secret "STRIPE_PUBLIC_KEY" "$STRIPE_PUBLIC_KEY"
configure_secret "STRIPE_SECRET_KEY" "$STRIPE_SECRET_KEY"
configure_secret "STRIPE_WEBHOOK_SECRET" "$STRIPE_WEBHOOK_SECRET"

echo ""
echo -e "${GREEN}=============================================="
echo "🎉 CONFIGURATION DES SECRETS TERMINÉE !"
echo "=============================================="
echo ""
echo "📋 VÉRIFICATION :"
echo "   Vous pouvez vérifier vos secrets avec :"
echo "   wrangler secret list"
echo ""
echo -e "${GREEN}✨ Tous les secrets sont configurés !${NC}"
