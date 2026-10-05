#!/bin/bash
# ============================================================
# Déploiement du Worker ZyatrIA avec RAG (Vectorize)
# ============================================================

echo "🚀 Déploiement du Worker ZyatrIA..."
echo ""

# Étape 1 : Créer l'index Vectorize (si pas déjà fait)
echo "📊 Création de l'index Vectorize..."
npx wrangler vectorize create zyatria-knowledge --dimensions=1024 --metric=cosine 2>/dev/null || echo "⚠️  Index déjà existant (normal si déjà créé)"

echo ""

# Étape 2 : Déployer le Worker
echo "📦 Déploiement du Worker..."
npx wrangler deploy

echo ""

# Étape 3 : Charger la base de connaissances
if [ -f "knowledge.json" ]; then
  echo "📚 Chargement de la base de connaissances dans Vectorize..."
  npx wrangler vectorize insert zyatria-knowledge --file=knowledge.json
  echo "✅ Base de connaissances chargée !"
else
  echo "⚠️  Fichier knowledge.json introuvable"
  echo "💡 Créez d'abord votre base de connaissances avec : node create-knowledge.js"
fi

echo ""
echo "✅ Déploiement terminé !"
echo ""
echo "🌐 Votre Worker est maintenant en ligne !"
echo "📝 URL : https://zyatria-api.<votre-subdomain>.workers.dev"
echo ""
echo "🧪 Tester le chatbot :"
echo 'curl -X POST https://zyatria-api.<votre-subdomain>.workers.dev/chat \'
echo '  -H "Content-Type: application/json" \'
echo '  -d '"'"'{"messages":[{"role":"user","content":"Bonjour"}],"lang":"fr"}'"'"
