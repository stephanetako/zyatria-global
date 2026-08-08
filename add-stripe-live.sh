#!/bin/bash

echo ""
echo "╔══════════════════════════════════════════════════════════════╗"
echo "║                                                              ║"
echo "║     🔑 CONFIGURATION STRIPE LIVE                             ║"
echo "║                                                              ║"
echo "╚══════════════════════════════════════════════════════════════╝"
echo ""

# Couleurs
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${BLUE}📋 Instructions:${NC}"
echo ""
echo "1. Allez sur: https://dashboard.stripe.com/apikeys"
echo "2. Basculez en mode LIVE (en haut à droite)"
echo "3. Copiez vos clés LIVE"
echo ""
echo -e "${YELLOW}⚠️  Assurez-vous d'être en mode LIVE (pas TEST)${NC}"
echo ""

# Demander confirmation
read -p "Êtes-vous prêt à continuer? (o/n): " confirm
if [ "$confirm" != "o" ] && [ "$confirm" != "O" ]; then
    echo -e "${RED}❌ Annulé${NC}"
    exit 0
fi

echo ""
echo -e "${BLUE}🔑 Entrez vos clés Stripe LIVE:${NC}"
echo ""

# Demander la clé publique
read -p "Clé publique LIVE (pk_live_...): " STRIPE_PUBLIC_KEY
if [[ ! $STRIPE_PUBLIC_KEY == pk_live_* ]]; then
    echo -e "${RED}❌ Erreur: La clé publique doit commencer par 'pk_live_'${NC}"
    exit 1
fi

# Demander la clé secrète
read -p "Clé secrète LIVE (sk_live_...): " STRIPE_SECRET_KEY
if [[ ! $STRIPE_SECRET_KEY == sk_live_* ]]; then
    echo -e "${RED}❌ Erreur: La clé secrète doit commencer par 'sk_live_'${NC}"
    exit 1
fi

# Demander le webhook secret
read -p "Webhook secret (whsec_...): " STRIPE_WEBHOOK_SECRET
if [[ ! $STRIPE_WEBHOOK_SECRET == whsec_* ]]; then
    echo -e "${RED}❌ Erreur: Le webhook secret doit commencer par 'whsec_'${NC}"
    exit 1
fi

echo ""
echo -e "${BLUE}📦 Création d'un backup...${NC}"
cp .env .env.before-live
echo -e "${GREEN}✅ Backup créé: .env.before-live${NC}"
echo ""

echo -e "${BLUE}🔄 Mise à jour du fichier .env...${NC}"

# Créer le nouveau .env
cat > .env << ENVFILE
# ============================================
# ZYATRIA GLOBAL - CONFIGURATION LIVE
# ============================================

# === FORMSPREE (Formulaires de contact) ===
FORMSPREE_FORM_ID="xbdedonn"

# === WEBFLOW (CMS et API) ===
WEBFLOW_API_HOST="https://api-cdn.webflow.com/v2"
WEBFLOW_SITE_API_TOKEN="8160da8face945f9fb1e1515f445592076f5481aabc0aeb7a7a11e9fdb118ed0"
WEBFLOW_CMS_SITE_API_TOKEN="177d18c2c624850e2dd7deb5c159dc319b90ef7c9cad86464217b2346a6f3c64"

# === MISTRAL AI (Chatbot) ===
MISTRAL_API_KEY="Hy1Ja5hxTfLBsgJVJgAvrUdVtQL5OdWD2aRB31Z0bgY8pHsWrczFMBt68nkTzje9u96WCnuAyBjf7TFw3Jqb000Cfx4xRu"

# === STRIPE (Paiements) - MODE LIVE ===
STRIPE_PUBLIC_KEY="$STRIPE_PUBLIC_KEY"
STRIPE_SECRET_KEY="$STRIPE_SECRET_KEY"
STRIPE_WEBHOOK_SECRET="$STRIPE_WEBHOOK_SECRET"

# === CLAUDE AI (Optionnel) ===
CLAUDE_API_KEY="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"

# === CLOUDFLARE (Déploiement) ===
CLOUDFLARE_API_TOKEN="b909407c94ef1c9232d0391"
ENVFILE

echo -e "${GREEN}✅ Fichier .env mis à jour avec les clés LIVE${NC}"
echo ""

echo -e "${BLUE}📊 Vérification:${NC}"
echo ""
echo "  ✓ Clé publique: ${STRIPE_PUBLIC_KEY:0:20}..."
echo "  ✓ Clé secrète: ${STRIPE_SECRET_KEY:0:20}..."
echo "  ✓ Webhook secret: ${STRIPE_WEBHOOK_SECRET:0:20}..."
echo ""

echo -e "${GREEN}╔══════════════════════════════════════════════════════════════╗${NC}"
echo -e "${GREEN}║                                                              ║${NC}"
echo -e "${GREEN}║     ✅ CLÉS STRIPE LIVE CONFIGURÉES !                        ║${NC}"
echo -e "${GREEN}║                                                              ║${NC}"
echo -e "${GREEN}╚══════════════════════════════════════════════════════════════╝${NC}"
echo ""

echo -e "${YELLOW}🎯 Prochaines étapes:${NC}"
echo ""
echo "  1. Testez localement:"
echo "     $ npm run dev"
echo ""
echo "  2. Configurez Cloudflare Workers:"
echo "     - Allez sur: https://dash.cloudflare.com"
echo "     - Workers & Pages > Votre projet > Settings > Variables"
echo "     - Ajoutez les 3 variables Stripe (marquez les secrets comme 'Encrypt')"
echo ""
echo "  3. Déployez:"
echo "     $ npm run build"
echo "     $ git add ."
echo "     $ git commit -m '🔑 Clés Stripe LIVE configurées'"
echo "     $ git push origin main"
echo ""
echo -e "${RED}⚠️  IMPORTANT: N'oubliez pas de configurer les variables dans Cloudflare !${NC}"
echo ""

