#!/bin/bash

# ============================================================================
# 🔐 SCRIPT D'AJOUT DES SECRETS STRIPE DANS CLOUDFLARE PAGES
# ============================================================================
# 
# Ce script vous guide pour ajouter les 3 variables Stripe nécessaires
# dans votre projet Cloudflare Pages.
#
# Prérequis:
# - wrangler CLI installé (npm install -g wrangler)
# - Authentifié avec Cloudflare (wrangler login)
# - Accès au Stripe Dashboard
#
# ============================================================================

set -e  # Arrêter en cas d'erreur

# Couleurs pour l'affichage
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color
BOLD='\033[1m'

# Nom du projet
PROJECT_NAME="zyatria-global"

# ============================================================================
# FONCTIONS UTILITAIRES
# ============================================================================

print_header() {
    echo ""
    echo -e "${BOLD}${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo -e "${BOLD}${CYAN}$1${NC}"
    echo -e "${BOLD}${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo ""
}

print_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_info() {
    echo -e "${CYAN}ℹ️  $1${NC}"
}

print_step() {
    echo -e "${PURPLE}▶ $1${NC}"
}

# ============================================================================
# VÉRIFICATIONS PRÉLIMINAIRES
# ============================================================================

print_header "🔍 VÉRIFICATIONS PRÉLIMINAIRES"

# Vérifier que wrangler est installé
print_step "Vérification de wrangler CLI..."
if ! command -v wrangler &> /dev/null; then
    print_error "wrangler n'est pas installé"
    echo ""
    echo "Installation:"
    echo "  npm install -g wrangler"
    echo ""
    exit 1
fi
print_success "wrangler est installé"

# Vérifier l'authentification
print_step "Vérification de l'authentification Cloudflare..."
if ! wrangler whoami &> /dev/null; then
    print_error "Vous n'êtes pas authentifié avec Cloudflare"
    echo ""
    echo "Authentification:"
    echo "  wrangler login"
    echo ""
    exit 1
fi
print_success "Authentifié avec Cloudflare"

# Vérifier que le projet existe
print_step "Vérification du projet $PROJECT_NAME..."
if ! wrangler pages project list 2>&1 | grep -q "$PROJECT_NAME"; then
    print_warning "Le projet '$PROJECT_NAME' n'a pas été trouvé"
    print_info "Le script continuera quand même - les secrets seront ajoutés lors de la création du projet"
else
    print_success "Projet '$PROJECT_NAME' trouvé"
fi

# ============================================================================
# GUIDE POUR RÉCUPÉRER LES CLÉS STRIPE
# ============================================================================

print_header "📋 GUIDE - RÉCUPÉRER VOS CLÉS STRIPE"

echo -e "${BOLD}Avant de continuer, vous devez récupérer 3 clés depuis Stripe Dashboard:${NC}"
echo ""
echo -e "${YELLOW}1. Secret Key (sk_live_...)${NC}"
echo "   → https://dashboard.stripe.com/apikeys"
echo "   → Assurez-vous d'être en MODE LIVE (toggle en haut à droite)"
echo "   → Copiez la 'Secret key'"
echo ""
echo -e "${YELLOW}2. Publishable Key (pk_live_...)${NC}"
echo "   → Même page que ci-dessus"
echo "   → Copiez la 'Publishable key'"
echo ""
echo -e "${YELLOW}3. Webhook Secret (whsec_...)${NC}"
echo "   → https://dashboard.stripe.com/webhooks"
echo "   → Si vous avez déjà un endpoint, cliquez dessus et copiez le 'Signing secret'"
echo "   → Sinon, utilisez temporairement: whsec_temp_will_configure_after_deploy"
echo ""
echo -e "${RED}${BOLD}⚠️  IMPORTANT: Utilisez les clés LIVE (pas TEST)${NC}"
echo ""

read -p "Avez-vous récupéré vos 3 clés Stripe? (o/n) " -n 1 -r
echo ""
if [[ ! $REPLY =~ ^[OoYy]$ ]]; then
    print_warning "Script annulé. Récupérez vos clés et relancez le script."
    exit 0
fi

# ============================================================================
# AJOUT DES SECRETS
# ============================================================================

print_header "🔐 AJOUT DES SECRETS STRIPE"

echo -e "${BOLD}Nous allons maintenant ajouter les 3 secrets dans Cloudflare Pages.${NC}"
echo -e "${CYAN}Les valeurs seront masquées pendant la saisie pour plus de sécurité.${NC}"
echo ""

# ============================================================================
# 1. STRIPE_SECRET_KEY
# ============================================================================

print_step "1/3 - Ajout de STRIPE_SECRET_KEY"
echo ""
echo -e "${YELLOW}Collez votre Secret Key (commence par sk_live_...)${NC}"
echo -e "${CYAN}La valeur sera masquée pendant la saisie${NC}"
echo ""

# Créer un fichier temporaire pour stocker la clé
TEMP_FILE=$(mktemp)
trap "rm -f $TEMP_FILE" EXIT

# Demander la clé (masquée)
read -s -p "STRIPE_SECRET_KEY: " STRIPE_SECRET_KEY
echo ""

# Vérifier le format
if [[ ! $STRIPE_SECRET_KEY =~ ^sk_live_ ]]; then
    print_warning "La clé ne commence pas par 'sk_live_'"
    read -p "Voulez-vous continuer quand même? (o/n) " -n 1 -r
    echo ""
    if [[ ! $REPLY =~ ^[OoYy]$ ]]; then
        print_error "Ajout annulé"
        exit 1
    fi
fi

# Ajouter le secret
echo "$STRIPE_SECRET_KEY" | wrangler pages secret put STRIPE_SECRET_KEY --project-name="$PROJECT_NAME" > /dev/null 2>&1

if [ $? -eq 0 ]; then
    print_success "STRIPE_SECRET_KEY ajouté avec succès"
else
    print_error "Erreur lors de l'ajout de STRIPE_SECRET_KEY"
    exit 1
fi

echo ""

# ============================================================================
# 2. STRIPE_PUBLIC_KEY
# ============================================================================

print_step "2/3 - Ajout de STRIPE_PUBLIC_KEY"
echo ""
echo -e "${YELLOW}Collez votre Publishable Key (commence par pk_live_...)${NC}"
echo -e "${CYAN}La valeur sera masquée pendant la saisie${NC}"
echo ""

read -s -p "STRIPE_PUBLIC_KEY: " STRIPE_PUBLIC_KEY
echo ""

# Vérifier le format
if [[ ! $STRIPE_PUBLIC_KEY =~ ^pk_live_ ]]; then
    print_warning "La clé ne commence pas par 'pk_live_'"
    read -p "Voulez-vous continuer quand même? (o/n) " -n 1 -r
    echo ""
    if [[ ! $REPLY =~ ^[OoYy]$ ]]; then
        print_error "Ajout annulé"
        exit 1
    fi
fi

# Ajouter le secret
echo "$STRIPE_PUBLIC_KEY" | wrangler pages secret put STRIPE_PUBLIC_KEY --project-name="$PROJECT_NAME" > /dev/null 2>&1

if [ $? -eq 0 ]; then
    print_success "STRIPE_PUBLIC_KEY ajouté avec succès"
else
    print_error "Erreur lors de l'ajout de STRIPE_PUBLIC_KEY"
    exit 1
fi

echo ""

# ============================================================================
# 3. STRIPE_WEBHOOK_SECRET
# ============================================================================

print_step "3/3 - Ajout de STRIPE_WEBHOOK_SECRET"
echo ""
echo -e "${YELLOW}Collez votre Webhook Secret (commence par whsec_...)${NC}"
echo -e "${CYAN}Ou utilisez: whsec_temp_will_configure_after_deploy${NC}"
echo -e "${CYAN}La valeur sera masquée pendant la saisie${NC}"
echo ""

read -s -p "STRIPE_WEBHOOK_SECRET: " STRIPE_WEBHOOK_SECRET
echo ""

# Vérifier le format
if [[ ! $STRIPE_WEBHOOK_SECRET =~ ^whsec_ ]]; then
    print_warning "Le secret ne commence pas par 'whsec_'"
    read -p "Voulez-vous continuer quand même? (o/n) " -n 1 -r
    echo ""
    if [[ ! $REPLY =~ ^[OoYy]$ ]]; then
        print_error "Ajout annulé"
        exit 1
    fi
fi

# Ajouter le secret
echo "$STRIPE_WEBHOOK_SECRET" | wrangler pages secret put STRIPE_WEBHOOK_SECRET --project-name="$PROJECT_NAME" > /dev/null 2>&1

if [ $? -eq 0 ]; then
    print_success "STRIPE_WEBHOOK_SECRET ajouté avec succès"
else
    print_error "Erreur lors de l'ajout de STRIPE_WEBHOOK_SECRET"
    exit 1
fi

echo ""

# ============================================================================
# VÉRIFICATION
# ============================================================================

print_header "✅ VÉRIFICATION DES SECRETS"

print_step "Liste des variables d'environnement du projet..."
echo ""

# Afficher les variables (sans les valeurs)
wrangler pages project view "$PROJECT_NAME" 2>&1 | grep -A 20 "Environment Variables" || print_warning "Impossible d'afficher les variables"

echo ""

# ============================================================================
# RÉSUMÉ
# ============================================================================

print_header "🎉 CONFIGURATION TERMINÉE"

print_success "Les 3 secrets Stripe ont été ajoutés avec succès!"
echo ""
echo -e "${BOLD}Secrets ajoutés:${NC}"
echo -e "  ${GREEN}✅${NC} STRIPE_SECRET_KEY"
echo -e "  ${GREEN}✅${NC} STRIPE_PUBLIC_KEY"
echo -e "  ${GREEN}✅${NC} STRIPE_WEBHOOK_SECRET"
echo ""

# ============================================================================
# PROCHAINES ÉTAPES
# ============================================================================

print_header "🚀 PROCHAINES ÉTAPES"

echo -e "${BOLD}1. Déployer votre site${NC}"
echo "   ./deploy-now.sh"
echo ""
echo -e "${BOLD}2. Configurer le webhook Stripe${NC}"
echo "   → Allez sur https://dashboard.stripe.com/webhooks"
echo "   → Cliquez sur 'Add endpoint'"
echo "   → URL: https://zyatria-global.pages.dev/api/stripe/webhook"
echo "   → Sélectionnez les événements:"
echo "     • checkout.session.completed"
echo "     • payment_intent.succeeded"
echo "     • payment_intent.payment_failed"
echo "     • customer.subscription.created"
echo "     • customer.subscription.updated"
echo "     • customer.subscription.deleted"
echo "   → Copiez le 'Signing secret' (whsec_...)"
echo "   → Si différent, mettez à jour STRIPE_WEBHOOK_SECRET:"
echo "     wrangler pages secret put STRIPE_WEBHOOK_SECRET --project-name=$PROJECT_NAME"
echo ""
echo -e "${BOLD}3. Tester Stripe${NC}"
echo "   → Allez sur https://zyatria-global.pages.dev/pricing"
echo "   → Cliquez sur un bouton de paiement"
echo "   → Vérifiez que vous êtes redirigé vers Stripe"
echo ""

# ============================================================================
# AVERTISSEMENTS
# ============================================================================

print_header "⚠️  AVERTISSEMENTS IMPORTANTS"

echo -e "${RED}${BOLD}MODE LIVE ACTIVÉ${NC}"
echo -e "${RED}• Les paiements seront RÉELS${NC}"
echo -e "${RED}• Les cartes seront DÉBITÉES${NC}"
echo -e "${RED}• L'argent ira sur votre compte Stripe${NC}"
echo ""
echo -e "${YELLOW}Recommandations:${NC}"
echo "• Testez d'abord avec votre propre carte"
echo "• Vérifiez les montants dans Stripe Dashboard"
echo "• Configurez les webhooks immédiatement"
echo "• Surveillez les transactions les premiers jours"
echo ""

# ============================================================================
# SÉCURITÉ
# ============================================================================

print_header "🔐 RAPPEL SÉCURITÉ"

echo -e "${GREEN}✅${NC} Les secrets sont stockés de manière sécurisée dans Cloudflare"
echo -e "${GREEN}✅${NC} Ils ne sont jamais exposés dans le code ou les logs"
echo -e "${GREEN}✅${NC} Seul le runtime Cloudflare y a accès"
echo ""
echo -e "${YELLOW}Bonnes pratiques:${NC}"
echo "• Ne jamais commiter les clés dans Git"
echo "• Activer 2FA sur Stripe Dashboard"
echo "• Surveiller les accès API dans Stripe"
echo "• Renouveler les clés régulièrement"
echo ""

# ============================================================================
# FIN
# ============================================================================

print_header "✨ SCRIPT TERMINÉ"

echo -e "${GREEN}${BOLD}Votre configuration Stripe est maintenant complète!${NC}"
echo ""
echo -e "${CYAN}Voulez-vous déployer maintenant? (o/n)${NC}"
read -p "> " -n 1 -r
echo ""

if [[ $REPLY =~ ^[OoYy]$ ]]; then
    print_step "Lancement du déploiement..."
    echo ""
    if [ -f "./deploy-now.sh" ]; then
        chmod +x ./deploy-now.sh
        ./deploy-now.sh
    else
        print_warning "Script deploy-now.sh non trouvé"
        echo ""
        echo "Déploiement manuel:"
        echo "  npm run build"
        echo "  wrangler pages deploy dist --project-name=$PROJECT_NAME"
    fi
else
    print_info "Déploiement annulé"
    echo ""
    echo "Pour déployer plus tard:"
    echo "  ./deploy-now.sh"
    echo ""
fi

print_success "Terminé!"
echo ""
