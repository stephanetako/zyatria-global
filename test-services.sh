#!/bin/bash

# Script de test des services - ZyatrIA Global
# Ce script vérifie que tous les services sont correctement configurés

echo "🧪 Test des Services - ZyatrIA Global"
echo "======================================"
echo ""

# Couleurs pour l'affichage
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Fonction pour vérifier une variable d'environnement
check_env_var() {
    local var_name=$1
    local var_value=$(grep "^$var_name=" .env 2>/dev/null | cut -d '=' -f2-)
    
    if [ -z "$var_value" ]; then
        echo -e "${RED}✗${NC} $var_name: Non configurée"
        return 1
    else
        echo -e "${GREEN}✓${NC} $var_name: Configurée"
        return 0
    fi
}

# Test 1: Vérification du fichier .env
echo "📋 Test 1: Vérification du fichier .env"
echo "----------------------------------------"

if [ ! -f .env ]; then
    echo -e "${RED}✗ Fichier .env non trouvé${NC}"
    echo "Créez un fichier .env à la racine du projet"
    exit 1
else
    echo -e "${GREEN}✓ Fichier .env trouvé${NC}"
fi
echo ""

# Test 2: Vérification Formspree
echo "📧 Test 2: Configuration Formspree"
echo "-----------------------------------"
check_env_var "PUBLIC_FORMSPREE_FORM_ID"
echo ""

# Test 3: Vérification Stripe
echo "💳 Test 3: Configuration Stripe"
echo "--------------------------------"
check_env_var "STRIPE_SECRET_KEY"
check_env_var "STRIPE_PUBLISHABLE_KEY"
check_env_var "STRIPE_WEBHOOK_SECRET"
echo ""

# Test 4: Vérification Mistral AI
echo "🤖 Test 4: Configuration Mistral AI"
echo "------------------------------------"
check_env_var "MISTRAL_API_KEY"
echo ""

# Test 5: Vérification des fichiers de configuration
echo "📁 Test 5: Fichiers de configuration"
echo "-------------------------------------"

files=(
    "src/config/formspree.ts"
    "src/config/stripe-links.ts"
    "src/components/MistralChatBot.tsx"
    "src/pages/api/mistral-chat.ts"
    "src/pages/api/stripe/webhook.ts"
)

for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        echo -e "${GREEN}✓${NC} $file"
    else
        echo -e "${RED}✗${NC} $file manquant"
    fi
done
echo ""

# Test 6: Vérification des dépendances
echo "📦 Test 6: Dépendances npm"
echo "--------------------------"

dependencies=(
    "@formspree/react"
    "stripe"
    "@stripe/stripe-js"
)

for dep in "${dependencies[@]}"; do
    if grep -q "\"$dep\"" package.json; then
        echo -e "${GREEN}✓${NC} $dep installé"
    else
        echo -e "${RED}✗${NC} $dep manquant"
    fi
done
echo ""

# Résumé
echo "======================================"
echo "📊 Résumé des Tests"
echo "======================================"
echo ""
echo "Pour tester les services en local:"
echo "1. ${YELLOW}npm run dev${NC}"
echo "2. Ouvrez http://localhost:4321"
echo "3. Testez chaque service:"
echo "   - Formulaire de contact"
echo "   - Boutons de paiement Stripe"
echo "   - Chatbot Mistral AI"
echo ""
echo "Pour plus d'informations, consultez:"
echo "📖 GUIDE_CONFIGURATION_SERVICES.md"
echo ""
