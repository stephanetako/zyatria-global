#!/bin/bash

echo "🚀 Déploiement sur Cloudflare Pages (branche master)..."

# Build
echo ""
echo "📦 Build du projet..."
npm run build

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Build réussi!"
    
    # Deploy
    echo ""
    echo "🌐 Déploiement..."
    npx wrangler pages deploy dist --project-name=zyatria-global-cve --branch=master --commit-dirty=true
    
    if [ $? -eq 0 ]; then
        echo ""
        echo "🎉 DÉPLOIEMENT RÉUSSI!"
        echo ""
        echo "📍 URLs:"
        echo "   Production: https://zyatria-global-cve.pages.dev"
        echo "   Master: https://master.zyatria-global-cve.pages.dev"
    else
        echo ""
        echo "❌ Erreur lors du déploiement"
    fi
else
    echo ""
    echo "❌ Erreur lors du build"
fi
