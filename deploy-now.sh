#!/bin/bash

# 🚀 Script de déploiement rapide - ZyatrIA Global
# Ce script déploie votre site sur Cloudflare Pages en 2 minutes

set -e  # Arrêter en cas d'erreur

echo "╔════════════════════════════════════════════════════════╗"
echo "║                                                        ║"
echo "║     🚀 DÉPLOIEMENT ZYATRIA GLOBAL                     ║"
echo "║                                                        ║"
echo "╚════════════════════════════════════════════════════════╝"
echo ""

# Couleurs
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Fonction pour afficher les étapes
step() {
    echo ""
    echo -e "${BLUE}▶ $1${NC}"
    echo "────────────────────────────────────────────────────────"
}

success() {
    echo -e "${GREEN}✅ $1${NC}"
}

warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

error() {
    echo -e "${RED}❌ $1${NC}"
}

# Vérifier qu'on est dans le bon dossier
if [ ! -f "package.json" ]; then
    error "Erreur: package.json non trouvé"
    echo "Assurez-vous d'être dans le dossier du projet"
    exit 1
fi

# Étape 1: Vérification des prérequis
step "1️⃣  Vérification des prérequis"

# Vérifier Node.js
if command -v node &> /dev/null; then
    NODE_VERSION=$(node -v)
    success "Node.js installé: $NODE_VERSION"
else
    error "Node.js n'est pas installé"
    echo "Installez Node.js depuis: https://nodejs.org"
    exit 1
fi

# Vérifier npm
if command -v npm &> /dev/null; then
    NPM_VERSION=$(npm -v)
    success "npm installé: $NPM_VERSION"
else
    error "npm n'est pas installé"
    exit 1
fi

# Étape 2: Installation des dépendances
step "2️⃣  Installation des dépendances"

if [ -d "node_modules" ]; then
    success "node_modules existe déjà"
else
    echo "Installation en cours..."
    npm install
    success "Dépendances installées"
fi

# Étape 3: Build de production
step "3️⃣  Build de production"

echo "Construction du site..."
npm run build

if [ -d "dist" ]; then
    FILE_COUNT=$(find dist -type f | wc -l)
    success "Build réussi ($FILE_COUNT fichiers générés)"
else
    error "Erreur lors du build"
    exit 1
fi

# Étape 4: Vérification de Wrangler
step "4️⃣  Vérification de Wrangler"

if command -v wrangler &> /dev/null; then
    WRANGLER_VERSION=$(wrangler --version)
    success "Wrangler installé: $WRANGLER_VERSION"
else
    warning "Wrangler n'est pas installé globalement"
    echo "Utilisation de npx wrangler..."
fi

# Étape 5: Choix du mode de déploiement
step "5️⃣  Mode de déploiement"

echo ""
echo "Choisissez votre méthode de déploiement:"
echo ""
echo "  1) Cloudflare Pages (Recommandé) ⭐"
echo "  2) Vercel"
echo "  3) Netlify"
echo "  4) Annuler"
echo ""
read -p "Votre choix (1-4): " choice

case $choice in
    1)
        step "🚀 Déploiement sur Cloudflare Pages"
        
        # Vérifier si l'utilisateur est connecté
        echo ""
        echo "Vérification de la connexion Cloudflare..."
        
        if npx wrangler whoami &> /dev/null; then
            success "Connecté à Cloudflare"
        else
            warning "Non connecté à Cloudflare"
            echo ""
            echo "Connexion à Cloudflare..."
            npx wrangler login
        fi
        
        echo ""
        echo "Déploiement en cours..."
        echo ""
        
        npx wrangler pages deploy dist --project-name=zyatria-global
        
        success "Déploiement terminé !"
        echo ""
        echo "🎉 Votre site est en ligne !"
        echo ""
        echo "URL: https://zyatria-global.pages.dev"
        echo ""
        ;;
        
    2)
        step "🚀 Déploiement sur Vercel"
        
        if command -v vercel &> /dev/null; then
            vercel --prod
            success "Déploiement terminé !"
        else
            warning "Vercel CLI n'est pas installé"
            echo ""
            echo "Installation de Vercel CLI..."
            npm install -g vercel
            echo ""
            echo "Déploiement..."
            vercel --prod
        fi
        ;;
        
    3)
        step "🚀 Déploiement sur Netlify"
        
        if command -v netlify &> /dev/null; then
            netlify deploy --prod --dir=dist
            success "Déploiement terminé !"
        else
            warning "Netlify CLI n'est pas installé"
            echo ""
            echo "Installation de Netlify CLI..."
            npm install -g netlify-cli
            echo ""
            echo "Déploiement..."
            netlify deploy --prod --dir=dist
        fi
        ;;
        
    4)
        echo "Déploiement annulé"
        exit 0
        ;;
        
    *)
        error "Choix invalide"
        exit 1
        ;;
esac

# Étape 6: Instructions post-déploiement
step "📋 Prochaines étapes"

echo ""
echo "✅ Votre site est maintenant en ligne !"
echo ""
echo "🔍 Vérifications à faire:"
echo "   • Tester toutes les pages (7 pages)"
echo "   • Vérifier les liens Stripe"
echo "   • Tester le formulaire de contact"
echo "   • Vérifier sur mobile"
echo ""
echo "🌐 Pour configurer votre domaine personnalisé:"
echo "   1. Acheter zyatria.global (si pas déjà fait)"
echo "   2. Aller sur Cloudflare Dashboard"
echo "   3. Pages → Custom domains → Add domain"
echo "   4. Entrer: zyatria.global"
echo ""
echo "📚 Documentation complète:"
echo "   Voir: 🚀_GUIDE_DEPLOIEMENT_COMPLET.md"
echo ""
echo "╔════════════════════════════════════════════════════════╗"
echo "║                                                        ║"
echo "║     🎉 DÉPLOIEMENT RÉUSSI !                           ║"
echo "║                                                        ║"
echo "╚════════════════════════════════════════════════════════╝"
echo ""
