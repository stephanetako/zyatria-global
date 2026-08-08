#!/bin/bash

# 🚀 Script de déploiement automatique pour ZyatrIA Global
# Exécutez ce script pour déployer sur Cloudflare Pages

set -e

echo "🚀 DÉPLOIEMENT ZYATRIA GLOBAL"
echo "=============================="
echo ""

# Vérifier que wrangler est installé
if ! command -v wrangler &> /dev/null; then
    echo "❌ Wrangler n'est pas installé"
    echo "📦 Installation de Wrangler..."
    npm install -g wrangler
fi

echo "✅ Wrangler version: $(wrangler --version)"
echo ""

# Vérifier que le build existe
if [ ! -d "dist" ]; then
    echo "❌ Le dossier dist n'existe pas"
    echo "🔨 Lancement du build..."
    npm run build
fi

echo "✅ Build trouvé ($(du -sh dist | cut -f1))"
echo ""

# Vérifier l'authentification
echo "🔐 Vérification de l'authentification..."
if ! wrangler whoami &> /dev/null; then
    echo "⚠️  Vous n'êtes pas connecté à Cloudflare"
    echo "🔑 Lancement de l'authentification..."
    wrangler login
else
    echo "✅ Déjà connecté à Cloudflare"
    wrangler whoami
fi

echo ""
echo "📤 DÉPLOIEMENT EN COURS..."
echo "=========================="
echo ""

# Déployer
wrangler pages deploy dist --project-name=zyatria-global

echo ""
echo "🎉 DÉPLOIEMENT TERMINÉ !"
echo "======================="
echo ""
echo "🌎 Votre site est en ligne à :"
echo "   https://zyatria-global.pages.dev"
echo ""
echo "📊 Prochaines étapes :"
echo "   1. Tester le site"
echo "   2. Configurer le webhook Stripe"
echo "   3. Vérifier le chatbot"
echo ""
