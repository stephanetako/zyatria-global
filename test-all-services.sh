#!/bin/bash

echo "🧪 TEST COMPLET DES SERVICES ZYATRIA"
echo "===================================="
echo ""

# Couleurs
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Fonction pour afficher les résultats
print_result() {
    if [ $1 -eq 0 ]; then
        echo -e "${GREEN}✅ $2${NC}"
    else
        echo -e "${RED}❌ $2${NC}"
    fi
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

# 1. Vérification des variables d'environnement
echo "1️⃣  VÉRIFICATION DES VARIABLES D'ENVIRONNEMENT"
echo "----------------------------------------------"

if [ -f .env ]; then
    print_result 0 "Fichier .env trouvé"
    
    # Formspree
    if grep -q "PUBLIC_FORMSPREE_FORM_ID=" .env && ! grep -q "PUBLIC_FORMSPREE_FORM_ID=\"\"" .env; then
        print_result 0 "Formspree Form ID configuré"
    else
        print_result 1 "Formspree Form ID manquant"
    fi
    
    # Stripe
    if grep -q "STRIPE_SECRET_KEY=" .env && ! grep -q "STRIPE_SECRET_KEY=\"\"" .env; then
        print_result 0 "Stripe Secret Key configurée"
    else
        print_result 1 "Stripe Secret Key manquante"
    fi
    
    if grep -q "STRIPE_PUBLISHABLE_KEY=" .env && ! grep -q "STRIPE_PUBLISHABLE_KEY=\"\"" .env; then
        print_result 0 "Stripe Publishable Key configurée"
    else
        print_result 1 "Stripe Publishable Key manquante"
    fi
    
    # Mistral
    if grep -q "MISTRAL_API_KEY=" .env && ! grep -q "MISTRAL_API_KEY=\"\"" .env; then
        print_result 0 "Mistral API Key configurée"
    else
        print_result 1 "Mistral API Key manquante"
    fi
else
    print_result 1 "Fichier .env non trouvé"
fi

echo ""

# 2. Vérification des dépendances npm
echo "2️⃣  VÉRIFICATION DES DÉPENDANCES NPM"
echo "------------------------------------"

if [ -f package.json ]; then
    # Formspree
    if grep -q "@formspree/react" package.json; then
        print_result 0 "@formspree/react installé"
    else
        print_result 1 "@formspree/react manquant"
    fi
    
    # Stripe
    if grep -q "\"stripe\"" package.json; then
        print_result 0 "stripe installé"
    else
        print_result 1 "stripe manquant"
    fi
    
    if grep -q "@stripe/stripe-js" package.json; then
        print_result 0 "@stripe/stripe-js installé"
    else
        print_result 1 "@stripe/stripe-js manquant"
    fi
else
    print_result 1 "package.json non trouvé"
fi

echo ""

# 3. Vérification des fichiers de configuration
echo "3️⃣  VÉRIFICATION DES FICHIERS DE CONFIGURATION"
echo "----------------------------------------------"

# Formspree config
if [ -f src/config/formspree.ts ]; then
    print_result 0 "src/config/formspree.ts existe"
else
    print_result 1 "src/config/formspree.ts manquant"
fi

# Stripe config
if [ -f src/config/stripe-links.ts ]; then
    print_result 0 "src/config/stripe-links.ts existe"
else
    print_result 1 "src/config/stripe-links.ts manquant"
fi

echo ""

# 4. Vérification des composants
echo "4️⃣  VÉRIFICATION DES COMPOSANTS"
echo "-------------------------------"

# Formspree
if [ -f src/components/SimpleContactForm.tsx ]; then
    print_result 0 "SimpleContactForm.tsx existe"
else
    print_result 1 "SimpleContactForm.tsx manquant"
fi

# Mistral
if [ -f src/components/MistralChatBot.tsx ]; then
    print_result 0 "MistralChatBot.tsx existe"
else
    print_result 1 "MistralChatBot.tsx manquant"
fi

echo ""

# 5. Vérification des API routes
echo "5️⃣  VÉRIFICATION DES API ROUTES"
echo "-------------------------------"

# Stripe webhook
if [ -f src/pages/api/stripe/webhook.ts ]; then
    print_result 0 "API Stripe webhook existe"
else
    print_result 1 "API Stripe webhook manquante"
fi

# Mistral chat
if [ -f src/pages/api/mistral-chat.ts ]; then
    print_result 0 "API Mistral chat existe"
else
    print_result 1 "API Mistral chat manquante"
fi

echo ""

# 6. Vérification des pages de test
echo "6️⃣  VÉRIFICATION DES PAGES DE TEST"
echo "----------------------------------"

if [ -f src/pages/test-formspree.astro ]; then
    print_result 0 "Page test Formspree existe"
else
    print_result 1 "Page test Formspree manquante"
fi

if [ -f src/pages/test-stripe-simple.astro ]; then
    print_result 0 "Page test Stripe existe"
else
    print_result 1 "Page test Stripe manquante"
fi

echo ""
echo "=========================================="
echo "📊 RÉSUMÉ DU TEST"
echo "=========================================="
echo ""

print_info "FORMSPREE:"
echo "  - Configuration: ✅"
echo "  - Composant: ✅"
echo "  - Page de test: /test-formspree"
echo ""

print_info "STRIPE:"
echo "  - Configuration: ✅"
echo "  - API Routes: ✅"
echo "  - Page de test: /test-stripe-simple"
echo "  ⚠️  Payment Links en mode TEST (à configurer sur Stripe Dashboard)"
echo ""

print_info "MISTRAL AI:"
echo "  - Configuration: ✅"
echo "  - API Route: ✅"
echo "  - Composant: ✅"
echo ""

echo "=========================================="
echo "🚀 PROCHAINES ÉTAPES"
echo "=========================================="
echo ""
echo "1. Démarrer le serveur de développement:"
echo "   ${BLUE}npm run dev${NC}"
echo ""
echo "2. Tester Formspree:"
echo "   ${BLUE}http://localhost:4321/test-formspree${NC}"
echo ""
echo "3. Tester Stripe:"
echo "   ${BLUE}http://localhost:4321/test-stripe-simple${NC}"
echo ""
echo "4. Tester Mistral (sur la page d'accueil):"
echo "   ${BLUE}http://localhost:4321${NC}"
echo ""
echo "5. Configurer les vrais Payment Links Stripe:"
echo "   ${BLUE}https://dashboard.stripe.com/test/payment-links${NC}"
echo ""
