#!/bin/bash

# Script de vérification de la configuration ZyatrIA Global

echo ""
echo "🔍 VÉRIFICATION DE LA CONFIGURATION ZYATRIA GLOBAL"
echo ""
echo "============================================================"

# Couleurs
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Compteurs
configured=0
missing=0

echo ""
echo "📋 FORMSPREE (Formulaires de Contact)"
echo "------------------------------------------------------------"
if grep -q "PUBLIC_FORMSPREE_FORM_ID=" .env 2>/dev/null; then
    value=$(grep "PUBLIC_FORMSPREE_FORM_ID=" .env | cut -d'=' -f2 | tr -d '"' | tr -d "'")
    if [ "$value" != "VOTRE_FORM_ID_ICI" ] && [ ! -z "$value" ]; then
        echo -e "${GREEN}✅ PUBLIC_FORMSPREE_FORM_ID configuré${NC}"
        ((configured++))
    else
        echo -e "${YELLOW}⚠️  PUBLIC_FORMSPREE_FORM_ID manquant${NC}"
        ((missing++))
    fi
else
    echo -e "${YELLOW}⚠️  PUBLIC_FORMSPREE_FORM_ID manquant${NC}"
    ((missing++))
fi

echo ""
echo "💳 STRIPE (Paiements)"
echo "------------------------------------------------------------"
if grep -q "STRIPE_SECRET_KEY=" .env 2>/dev/null; then
    value=$(grep "STRIPE_SECRET_KEY=" .env | cut -d'=' -f2 | tr -d '"' | tr -d "'")
    if [[ $value == sk_* ]]; then
        echo -e "${GREEN}✅ STRIPE_SECRET_KEY configuré${NC}"
        ((configured++))
    else
        echo -e "${YELLOW}⚠️  STRIPE_SECRET_KEY invalide${NC}"
        ((missing++))
    fi
else
    echo -e "${YELLOW}⚠️  STRIPE_SECRET_KEY manquant${NC}"
    ((missing++))
fi

if grep -q "STRIPE_PUBLISHABLE_KEY=" .env 2>/dev/null; then
    value=$(grep "STRIPE_PUBLISHABLE_KEY=" .env | cut -d'=' -f2 | tr -d '"' | tr -d "'")
    if [[ $value == pk_* ]]; then
        echo -e "${GREEN}✅ STRIPE_PUBLISHABLE_KEY configuré${NC}"
        ((configured++))
    else
        echo -e "${YELLOW}⚠️  STRIPE_PUBLISHABLE_KEY invalide${NC}"
        ((missing++))
    fi
else
    echo -e "${YELLOW}⚠️  STRIPE_PUBLISHABLE_KEY manquant${NC}"
    ((missing++))
fi

echo ""
echo "🤖 MISTRAL AI (Chatbot)"
echo "------------------------------------------------------------"
if grep -q "MISTRAL_API_KEY=" .env 2>/dev/null; then
    value=$(grep "MISTRAL_API_KEY=" .env | cut -d'=' -f2 | tr -d '"' | tr -d "'")
    if [ ! -z "$value" ] && [ ${#value} -gt 10 ]; then
        echo -e "${GREEN}✅ MISTRAL_API_KEY configuré${NC}"
        ((configured++))
    else
        echo -e "${YELLOW}⚠️  MISTRAL_API_KEY invalide${NC}"
        ((missing++))
    fi
else
    echo -e "${YELLOW}⚠️  MISTRAL_API_KEY manquant${NC}"
    ((missing++))
fi

echo ""
echo "============================================================"
echo ""
echo "📊 RÉSUMÉ"
echo ""
echo -e "${GREEN}✅ Configuré : $configured${NC}"
echo -e "${YELLOW}⚠️  Manquant : $missing${NC}"
echo ""
echo "============================================================"
echo ""

if [ $missing -gt 0 ]; then
    echo "💡 ACTIONS REQUISES :"
    echo ""
    
    if ! grep -q "PUBLIC_FORMSPREE_FORM_ID=" .env 2>/dev/null || grep -q "PUBLIC_FORMSPREE_FORM_ID=\"VOTRE_FORM_ID_ICI\"" .env 2>/dev/null; then
        echo "🔴 1. FORMSPREE (URGENT) :"
        echo "   → Allez sur https://formspree.io/register"
        echo "   → Créez un formulaire"
        echo "   → Copiez le Form ID"
        echo "   → Ajoutez dans .env : PUBLIC_FORMSPREE_FORM_ID=\"votre_id\""
        echo ""
    fi
    
    echo "📖 Consultez le guide complet : 🎯_COMMENCER_ICI.md"
else
    echo "✅ Tout est configuré !"
    echo ""
    echo "🚀 PROCHAINES ÉTAPES :"
    echo "   1. npm install"
    echo "   2. npm run dev"
    echo "   3. Ouvrez http://localhost:4321"
fi

echo ""
echo "============================================================"
echo ""
