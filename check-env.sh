#!/bin/bash

echo "🔍 Vérification des Variables d'Environnement"
echo "=============================================="
echo ""

# Couleurs
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Fonction de vérification
check_var() {
    local var_name=$1
    local var_value="${!var_name}"
    
    if [ -z "$var_value" ]; then
        echo -e "${RED}❌ $var_name${NC} - Non définie"
        return 1
    else
        # Masquer la valeur pour la sécurité
        local masked_value="${var_value:0:10}..."
        echo -e "${GREEN}✅ $var_name${NC} - Définie ($masked_value)"
        return 0
    fi
}

# Charger .env si présent
if [ -f .env ]; then
    export $(cat .env | grep -v '^#' | xargs)
    echo "📁 Fichier .env chargé"
    echo ""
fi

# Variables obligatoires
echo "🔑 Variables OBLIGATOIRES :"
echo "----------------------------"
check_var "WEBFLOW_API_HOST"
check_var "WEBFLOW_SITE_API_TOKEN"
check_var "WEBFLOW_CMS_SITE_API_TOKEN"
echo ""

echo "🤖 Mistral AI :"
echo "----------------------------"
check_var "MISTRAL_API_KEY"
echo ""

echo "💳 Stripe :"
echo "----------------------------"
check_var "STRIPE_PUBLISHABLE_KEY"
check_var "STRIPE_SECRET_KEY"
check_var "STRIPE_WEBHOOK_SECRET"
echo ""

echo "📧 Formspree :"
echo "----------------------------"
check_var "FORMSPREE_FORM_ID"
check_var "FORMSPREE_CONTACT_FORM_ID"
check_var "FORMSPREE_LEAD_QUALIFICATION_FORM_ID"
echo ""

# Variables optionnelles
echo "🔧 Variables OPTIONNELLES :"
echo "----------------------------"
check_var "TWILIO_ACCOUNT_SID" || echo -e "${YELLOW}⚠️  TWILIO_ACCOUNT_SID - Optionnel (Agent vocal)${NC}"
check_var "TWILIO_AUTH_TOKEN" || echo -e "${YELLOW}⚠️  TWILIO_AUTH_TOKEN - Optionnel (Agent vocal)${NC}"
check_var "GOOGLE_ANALYTICS_ID" || echo -e "${YELLOW}⚠️  GOOGLE_ANALYTICS_ID - Optionnel (Analytics)${NC}"
echo ""

echo "=============================================="
echo "✅ Vérification terminée"
