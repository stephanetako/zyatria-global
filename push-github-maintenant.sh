#!/bin/bash

echo "🚀 DÉPLOIEMENT ZYATRIA GLOBAL"
echo "=============================="
echo ""
echo "📝 Collez l'URL de votre repository GitHub ici :"
echo "   (Exemple: https://github.com/stephanetako/zyatria-global.git)"
echo ""
read -p "URL: " REPO_URL

if [ -z "$REPO_URL" ]; then
    echo "❌ URL requise!"
    exit 1
fi

echo ""
echo "📦 Préparation du déploiement..."
cd zyatria-global-clean

# Initialiser Git si nécessaire
if [ ! -d .git ]; then
    echo "🔧 Initialisation de Git..."
    git init
    git branch -M main
fi

# Ajouter le remote
echo "🔗 Configuration du remote..."
git remote remove origin 2>/dev/null
git remote add origin "$REPO_URL"

# Ajouter les fichiers
echo "📁 Ajout des fichiers..."
git add .

# Commit
echo "💾 Création du commit..."
git commit -m "🚀 Initial commit - ZyatrIA Global clean version"

# Push
echo "⬆️  Push vers GitHub..."
git push -u origin main --force

echo ""
echo "✅ CODE POUSSÉ AVEC SUCCÈS!"
echo ""
echo "🎯 PROCHAINE ÉTAPE:"
echo "1. Allez sur https://dash.cloudflare.com"
echo "2. Workers & Pages → Create application"
echo "3. Pages → Connect to Git"
echo "4. Sélectionnez votre repository"
echo ""
