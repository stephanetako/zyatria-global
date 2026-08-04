#!/bin/bash

echo "🚀 Configuration des Variables Cloudflare Pages"
echo "================================================"
echo ""
echo "Ce script va vous aider à ajouter les variables manquantes."
echo ""

# Couleurs
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${YELLOW}📝 Variables à ajouter :${NC}"
echo "1. STRIPE_PUBLISHABLE_KEY"
echo "2. FORMSPREE_CONTACT_FORM_ID"
echo "3. FORMSPREE_LEAD_QUALIFICATION_FORM_ID"
echo ""

echo -e "${GREEN}Méthode 1 : Via Wrangler CLI (Recommandé)${NC}"
echo "-------------------------------------------"
echo "wrangler pages secret put STRIPE_PUBLISHABLE_KEY"
echo "wrangler pages secret put FORMSPREE_CONTACT_FORM_ID"
echo "wrangler pages secret put FORMSPREE_LEAD_QUALIFICATION_FORM_ID"
echo ""

echo -e "${GREEN}Méthode 2 : Via Dashboard${NC}"
echo "-------------------------------------------"
echo "1. Allez sur https://dash.cloudflare.com"
echo "2. Sélectionnez 'zyatria-global'"
echo "3. Settings > Environment Variables"
echo "4. Add variable (pour chaque variable)"
echo ""

echo "================================================"
echo "✅ Consultez VARIABLES_MANQUANTES.md pour plus de détails"
