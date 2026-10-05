#!/bin/bash
# ============================================================
# Configuration des secrets Cloudflare pour ZyatrIA Worker
# ============================================================

echo "🔑 Configuration des secrets Cloudflare..."
echo ""

# Claude API Key
echo "📝 Configuration de CLAUDE_API_KEY"
echo "Obtenir votre clé sur : https://console.anthropic.com/"
npx wrangler secret put CLAUDE_API_KEY

echo ""

# Mistral API Key
echo "📝 Configuration de MISTRAL_API_KEY"
echo "Obtenir votre clé sur : https://console.mistral.ai/"
npx wrangler secret put MISTRAL_API_KEY

echo ""

# Pexels API Key
echo "📝 Configuration de PEXELS_API_KEY"
echo "Obtenir votre clé gratuite sur : https://www.pexels.com/api/"
npx wrangler secret put PEXELS_API_KEY

echo ""
echo "✅ Configuration des secrets terminée !"
echo ""
echo "🚀 Prochaines étapes :"
echo "1. Créer l'index Vectorize : npx wrangler vectorize create zyatria-knowledge --dimensions=1024 --metric=cosine"
echo "2. Peupler la base de connaissances : node populate-vectorize.js"
echo "3. Déployer le worker : npx wrangler deploy"
