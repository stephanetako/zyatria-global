#!/bin/bash

# 🚀 Script de déploiement automatique - ZyatrIA Global
# Ce script automatise le déploiement sur Cloudflare Pages via GitHub

echo "🚀 DÉPLOIEMENT ZYATRIA GLOBAL"
echo "=============================="
echo ""

# Couleurs pour le terminal
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Fonction pour afficher les étapes
step() {
    echo -e "${BLUE}▶ $1${NC}"
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

# Vérifier que nous sommes dans le bon dossier
if [ ! -f "package.json" ]; then
    error "Erreur : package.json non trouvé. Es-tu dans le bon dossier ?"
    exit 1
fi

success "Dossier du projet trouvé !"
echo ""

# Étape 1 : Vérifier Git
step "Étape 1/6 : Vérification de Git..."
if ! command -v git &> /dev/null; then
    error "Git n'est pas installé. Installe-le d'abord : https://git-scm.com/"
    exit 1
fi
success "Git est installé !"
echo ""

# Étape 2 : Initialiser Git si nécessaire
step "Étape 2/6 : Initialisation de Git..."
if [ ! -d ".git" ]; then
    git init
    success "Git initialisé !"
else
    success "Git déjà initialisé !"
fi
echo ""

# Étape 3 : Ajouter tous les fichiers
step "Étape 3/6 : Ajout des fichiers..."
git add .
success "Fichiers ajoutés !"
echo ""

# Étape 4 : Créer le commit
step "Étape 4/6 : Création du commit..."
echo "Entre un message de commit (ou appuie sur Entrée pour utiliser le message par défaut) :"
read -p "Message : " commit_message

if [ -z "$commit_message" ]; then
    commit_message="ZyatrIA Global - Ready for launch 🚀"
fi

git commit -m "$commit_message"
success "Commit créé : $commit_message"
echo ""

# Étape 5 : Configurer le remote
step "Étape 5/6 : Configuration du repository GitHub..."
echo ""
warning "IMPORTANT : Tu dois d'abord créer un repo sur GitHub.com"
echo ""
echo "1. Va sur https://github.com/new"
echo "2. Nom du repo : zyatria-global"
echo "3. Visibilité : Private (recommandé)"
echo "4. NE COCHE PAS 'Initialize with README'"
echo "5. Clique sur 'Create repository'"
echo ""
read -p "As-tu créé le repo sur GitHub ? (o/n) : " repo_created

if [ "$repo_created" != "o" ] && [ "$repo_created" != "O" ]; then
    warning "Crée d'abord le repo sur GitHub, puis relance ce script."
    exit 0
fi

echo ""
read -p "Entre ton username GitHub : " github_username

if [ -z "$github_username" ]; then
    error "Username GitHub requis !"
    exit 1
fi

# Vérifier si le remote existe déjà
if git remote | grep -q "origin"; then
    warning "Remote 'origin' existe déjà. Suppression..."
    git remote remove origin
fi

# Ajouter le remote
git remote add origin "https://github.com/$github_username/zyatria-global.git"
success "Remote GitHub configuré !"
echo ""

# Étape 6 : Pousser le code
step "Étape 6/6 : Push vers GitHub..."
git branch -M main

echo ""
warning "Tu vas être invité à te connecter à GitHub..."
echo ""

if git push -u origin main; then
    success "Code poussé sur GitHub avec succès !"
else
    error "Erreur lors du push. Vérifie tes identifiants GitHub."
    exit 1
fi

echo ""
echo "=============================="
success "🎉 DÉPLOIEMENT GITHUB TERMINÉ !"
echo "=============================="
echo ""

# Instructions pour Cloudflare Pages
echo -e "${BLUE}📋 PROCHAINES ÉTAPES :${NC}"
echo ""
echo "1. Va sur https://dash.cloudflare.com"
echo "2. Clique sur 'Pages' → 'Create a project'"
echo "3. Clique sur 'Connect to Git'"
echo "4. Sélectionne le repo 'zyatria-global'"
echo "5. Configure le build :"
echo "   - Framework preset: Astro"
echo "   - Build command: npm run build"
echo "   - Build output directory: dist"
echo "6. Clique sur 'Save and Deploy'"
echo ""
echo "⏳ Attends 2-5 minutes pour le déploiement..."
echo ""
success "Ton site sera disponible sur : https://zyatria-global.pages.dev"
echo ""

# Demander si on veut ouvrir les URLs
read -p "Veux-tu ouvrir Cloudflare Pages maintenant ? (o/n) : " open_cloudflare

if [ "$open_cloudflare" = "o" ] || [ "$open_cloudflare" = "O" ]; then
    if command -v xdg-open &> /dev/null; then
        xdg-open "https://dash.cloudflare.com" &> /dev/null
    elif command -v open &> /dev/null; then
        open "https://dash.cloudflare.com"
    else
        echo "Ouvre manuellement : https://dash.cloudflare.com"
    fi
fi

echo ""
success "✨ Bon lancement ! 🚀"
echo ""
