#!/bin/bash

# 🚀 Script de Déploiement Rapide - ZyatrIA Global
# Ce script automatise le déploiement sur GitHub

echo "🚀 Déploiement ZyatrIA Global"
echo "=============================="
echo ""

# Vérifier si Git est installé
if ! command -v git &> /dev/null; then
    echo "❌ Git n'est pas installé. Installe-le d'abord :"
    echo "   - Windows: https://git-scm.com/download/win"
    echo "   - Mac: brew install git"
    echo "   - Linux: sudo apt install git"
    exit 1
fi

echo "✅ Git est installé"
echo ""

# Vérifier si c'est déjà un repo Git
if [ -d .git ]; then
    echo "✅ Repo Git déjà initialisé"
else
    echo "📦 Initialisation du repo Git..."
    git init
    echo "✅ Repo Git initialisé"
fi

echo ""

# Demander le nom d'utilisateur GitHub
echo "📝 Configuration GitHub"
echo "----------------------"
read -p "Entre ton nom d'utilisateur GitHub : " GITHUB_USERNAME

if [ -z "$GITHUB_USERNAME" ]; then
    echo "❌ Nom d'utilisateur requis"
    exit 1
fi

# Demander le nom du repo
read -p "Nom du repo (défaut: zyatria-global) : " REPO_NAME
REPO_NAME=${REPO_NAME:-zyatria-global}

echo ""
echo "📋 Résumé :"
echo "  - Utilisateur : $GITHUB_USERNAME"
echo "  - Repo : $REPO_NAME"
echo "  - URL : https://github.com/$GITHUB_USERNAME/$REPO_NAME"
echo ""

read -p "Continuer ? (o/n) : " CONFIRM
if [ "$CONFIRM" != "o" ] && [ "$CONFIRM" != "O" ]; then
    echo "❌ Annulé"
    exit 0
fi

echo ""
echo "📦 Préparation des fichiers..."

# Créer .gitignore si nécessaire
if [ ! -f .gitignore ]; then
    cat > .gitignore << 'EOF'
# Dependencies
node_modules/
.pnpm-store/

# Build outputs
dist/
.astro/

# Environment
.env
.env.local
.env.production

# Logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*

# OS
.DS_Store
Thumbs.db

# IDE
.vscode/
.idea/
*.swp
*.swo

# Cloudflare
.wrangler/
wrangler.toml
EOF
    echo "✅ .gitignore créé"
fi

# Ajouter tous les fichiers
echo "📦 Ajout des fichiers..."
git add .

# Créer le commit
echo "📝 Création du commit..."
git commit -m "Initial commit - ZyatrIA Global site complet

- 12 pages Astro (Home, Services, Pricing, About, etc.)
- 26 composants React
- Système de traduction FR/EN
- Intégration Formspree et Stripe
- Design premium et responsive
- SEO optimisé
- Prêt pour déploiement Cloudflare Pages"

echo "✅ Commit créé"
echo ""

# Vérifier si le remote existe déjà
if git remote | grep -q "^origin$"; then
    echo "⚠️  Remote 'origin' existe déjà"
    read -p "Remplacer ? (o/n) : " REPLACE
    if [ "$REPLACE" = "o" ] || [ "$REPLACE" = "O" ]; then
        git remote remove origin
        git remote add origin "https://github.com/$GITHUB_USERNAME/$REPO_NAME.git"
        echo "✅ Remote mis à jour"
    fi
else
    git remote add origin "https://github.com/$GITHUB_USERNAME/$REPO_NAME.git"
    echo "✅ Remote ajouté"
fi

echo ""
echo "🌐 Prochaines étapes :"
echo "====================="
echo ""
echo "1️⃣  Crée le repo sur GitHub :"
echo "   👉 https://github.com/new"
echo "   - Nom : $REPO_NAME"
echo "   - Description : ZyatrIA Global - AI Agents & Automation Platform"
echo "   - Public ou Private (ton choix)"
echo "   - NE COCHE PAS 'Initialize with README'"
echo ""
echo "2️⃣  Une fois le repo créé, reviens ici et appuie sur Entrée..."
read -p ""

echo ""
echo "📤 Push vers GitHub..."

# Renommer la branche en main
git branch -M main

# Pousser le code
if git push -u origin main; then
    echo ""
    echo "🎉 SUCCÈS ! Code poussé sur GitHub !"
    echo ""
    echo "🔗 Voir ton repo : https://github.com/$GITHUB_USERNAME/$REPO_NAME"
    echo ""
    echo "📋 Prochaine étape : Déployer sur Cloudflare Pages"
    echo "=================================================="
    echo ""
    echo "1. Va sur https://dash.cloudflare.com"
    echo "2. Clique sur 'Workers & Pages'"
    echo "3. Clique sur 'Create application' > 'Pages' > 'Connect to Git'"
    echo "4. Sélectionne ton repo : $REPO_NAME"
    echo "5. Configuration :"
    echo "   - Framework preset : Astro"
    echo "   - Build command : npm run build"
    echo "   - Build output : dist"
    echo "6. Clique sur 'Save and Deploy'"
    echo ""
    echo "⏳ Attends 2-3 minutes et ton site sera en ligne ! 🚀"
    echo ""
else
    echo ""
    echo "❌ Erreur lors du push"
    echo ""
    echo "Causes possibles :"
    echo "1. Le repo n'existe pas encore sur GitHub"
    echo "2. Tu n'as pas les droits d'accès"
    echo "3. Problème d'authentification"
    echo ""
    echo "Solutions :"
    echo "1. Vérifie que le repo existe : https://github.com/$GITHUB_USERNAME/$REPO_NAME"
    echo "2. Configure ton authentification GitHub :"
    echo "   git config --global user.name 'Ton Nom'"
    echo "   git config --global user.email 'ton@email.com'"
    echo "3. Utilise un Personal Access Token si nécessaire"
    echo ""
    echo "Puis réessaye : git push -u origin main"
fi
