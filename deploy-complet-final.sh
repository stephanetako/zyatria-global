#!/bin/bash

# Couleurs
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m'

clear
echo -e "${PURPLE}"
echo "╔════════════════════════════════════════════════════════════╗"
echo "║                                                            ║"
echo "║        🚀 DÉPLOIEMENT COMPLET - ZYATRIA GLOBAL 🚀        ║"
echo "║                                                            ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo -e "${NC}"
echo ""

# Fonction pour afficher les étapes
step() {
    echo -e "${CYAN}▶ $1${NC}"
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

# ÉTAPE 1 : Nettoyage
step "ÉTAPE 1/8 : Nettoyage des anciens builds"
rm -rf dist/
rm -rf .astro/
success "Nettoyage terminé"
echo ""

# ÉTAPE 2 : Vérification des dépendances
step "ÉTAPE 2/8 : Vérification des dépendances"
if [ -d "node_modules" ]; then
    success "node_modules présent"
else
    warning "Installation des dépendances..."
    npm install
fi
echo ""

# ÉTAPE 3 : Vérification de l'environnement
step "ÉTAPE 3/8 : Vérification des variables d'environnement"
if [ -f ".env" ]; then
    success ".env trouvé"
    
    # Vérifier les clés importantes
    if grep -q "MISTRAL_API_KEY=" .env; then
        success "MISTRAL_API_KEY configuré"
    else
        warning "MISTRAL_API_KEY manquant"
    fi
    
    if grep -q "FORMSPREE_FORM_ID=" .env; then
        success "FORMSPREE_FORM_ID configuré"
    else
        warning "FORMSPREE_FORM_ID manquant"
    fi
else
    error ".env manquant"
fi
echo ""

# ÉTAPE 4 : Build du projet
step "ÉTAPE 4/8 : Build du projet"
npm run build > build-log.txt 2>&1

if [ $? -eq 0 ]; then
    success "Build réussi !"
    
    # Afficher les dernières lignes du build
    echo ""
    echo -e "${BLUE}Dernières lignes du build :${NC}"
    tail -5 build-log.txt
else
    error "Build échoué !"
    echo ""
    echo -e "${RED}Erreurs du build :${NC}"
    tail -20 build-log.txt
    exit 1
fi
echo ""

# ÉTAPE 5 : Vérification des fichiers générés
step "ÉTAPE 5/8 : Vérification des fichiers générés"

if [ -f "dist/index.html" ]; then
    success "index.html généré ($(du -h dist/index.html | cut -f1))"
else
    error "index.html manquant !"
    exit 1
fi

if [ -d "dist/_worker.js" ] || [ -f "dist/_worker.js" ]; then
    success "Worker Cloudflare généré"
else
    warning "Worker Cloudflare non trouvé"
fi

if [ -f "dist/_routes.json" ]; then
    success "_routes.json généré"
    echo ""
    echo -e "${BLUE}Contenu de _routes.json :${NC}"
    cat dist/_routes.json | head -20
else
    warning "_routes.json manquant"
fi
echo ""

# ÉTAPE 6 : Vérification des pages de test
step "ÉTAPE 6/8 : Vérification des pages de test"

test_pages=(
    "test-site-final.html"
    "test-page-blanche.html"
    "test-stripe-final.html"
)

for page in "${test_pages[@]}"; do
    if [ -f "dist/$page" ]; then
        success "$page présent"
    else
        warning "$page manquant"
    fi
done
echo ""

# ÉTAPE 7 : Préparation Git
step "ÉTAPE 7/8 : Préparation Git"

# Vérifier si on est dans un repo git
if [ -d ".git" ]; then
    success "Repository Git détecté"
    
    # Ajouter tous les fichiers
    git add .
    
    # Afficher le statut
    echo ""
    echo -e "${BLUE}Fichiers modifiés :${NC}"
    git status --short | head -20
    
    if [ -n "$(git status --porcelain)" ]; then
        success "Changements détectés, prêt pour commit"
    else
        warning "Aucun changement à commiter"
    fi
else
    error "Pas de repository Git trouvé"
    echo ""
    echo "Pour initialiser Git :"
    echo "  git init"
    echo "  git add ."
    echo "  git commit -m 'Initial commit'"
    echo "  git remote add origin <votre-repo-url>"
fi
echo ""

# ÉTAPE 8 : Résumé et instructions
step "ÉTAPE 8/8 : Résumé et prochaines étapes"
echo ""
echo -e "${GREEN}╔════════════════════════════════════════════════════════════╗${NC}"
echo -e "${GREEN}║                    ✅ BUILD RÉUSSI !                       ║${NC}"
echo -e "${GREEN}╚════════════════════════════════════════════════════════════╝${NC}"
echo ""

echo -e "${CYAN}📦 FICHIERS GÉNÉRÉS :${NC}"
echo "  • dist/index.html (page principale)"
echo "  • dist/_worker.js (Cloudflare Worker)"
echo "  • dist/_routes.json (configuration des routes)"
echo "  • Pages de test disponibles"
echo ""

echo -e "${CYAN}🚀 POUR DÉPLOYER SUR CLOUDFLARE :${NC}"
echo ""
echo -e "${YELLOW}Option 1 - Via GitHub (Recommandé) :${NC}"
echo "  1. git commit -m \"Deploy: Complete build with all fixes\""
echo "  2. git push origin main"
echo "  3. Attendez 2-3 minutes"
echo "  4. Cloudflare déploiera automatiquement"
echo ""

echo -e "${YELLOW}Option 2 - Via Wrangler CLI :${NC}"
echo "  npx wrangler pages deploy dist"
echo ""

echo -e "${CYAN}🧪 PAGES DE TEST À VÉRIFIER :${NC}"
echo "  • https://votre-site.pages.dev/test-site-final.html"
echo "  • https://votre-site.pages.dev/test-page-blanche.html"
echo "  • https://votre-site.pages.dev/diagnostic"
echo "  • https://votre-site.pages.dev/ (page principale)"
echo ""

echo -e "${CYAN}🔍 SI LA PAGE EST BLANCHE :${NC}"
echo "  1. Ouvrez F12 (DevTools)"
echo "  2. Allez dans l'onglet Console"
echo "  3. Notez les erreurs"
echo "  4. Purgez le cache Cloudflare :"
echo "     Dashboard > Caching > Purge Everything"
echo ""

echo -e "${CYAN}📊 STATISTIQUES DU BUILD :${NC}"
if [ -d "dist" ]; then
    echo "  • Taille totale : $(du -sh dist | cut -f1)"
    echo "  • Nombre de fichiers : $(find dist -type f | wc -l)"
    echo "  • Fichiers JS : $(find dist -name "*.js" | wc -l)"
    echo "  • Fichiers CSS : $(find dist -name "*.css" | wc -l)"
fi
echo ""

echo -e "${GREEN}✅ Tout est prêt pour le déploiement !${NC}"
echo ""

# Demander si on doit commiter
read -p "Voulez-vous commiter les changements maintenant ? (o/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[OoYy]$ ]]; then
    echo ""
    read -p "Message de commit : " commit_msg
    
    if [ -z "$commit_msg" ]; then
        commit_msg="Deploy: Complete build with all fixes"
    fi
    
    git commit -m "$commit_msg"
    
    if [ $? -eq 0 ]; then
        success "Commit réussi !"
        echo ""
        echo "Pour pousser vers GitHub :"
        echo "  git push origin main"
    else
        error "Commit échoué"
    fi
fi

echo ""
echo -e "${PURPLE}════════════════════════════════════════════════════════════${NC}"
echo -e "${PURPLE}         Déploiement préparé avec succès ! 🎉${NC}"
echo -e "${PURPLE}════════════════════════════════════════════════════════════${NC}"
