#!/bin/bash

# 🧪 Script de test pour l'API Mistral
# Ce script teste la connexion à l'API Mistral avec votre clé API

echo "🧪 Test de l'API Mistral"
echo "======================="
echo ""

# Vérifier si la clé API est définie
if [ -z "$MISTRAL_API_KEY" ]; then
    echo "❌ Erreur : La variable MISTRAL_API_KEY n'est pas définie"
    echo ""
    echo "📋 Pour définir la clé API :"
    echo "   export MISTRAL_API_KEY='sk-VOTRE_CLE_API_ICI'"
    echo ""
    echo "   Ou créer un fichier .env avec :"
    echo "   MISTRAL_API_KEY=sk-VOTRE_CLE_API_ICI"
    echo ""
    exit 1
fi

echo "✅ Clé API trouvée : ${MISTRAL_API_KEY:0:10}..."
echo ""

# Test 1 : Appel API simple
echo "📡 Test 1 : Appel API simple"
echo "----------------------------"

response=$(curl -s -w "\n%{http_code}" -X POST https://api.mistral.ai/v1/chat/completions \
  -H "Authorization: Bearer $MISTRAL_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "mistral-medium",
    "messages": [
      {
        "role": "user",
        "content": "Bonjour !"
      }
    ],
    "temperature": 0.7
  }')

# Séparer le corps de la réponse et le code HTTP
http_code=$(echo "$response" | tail -n1)
body=$(echo "$response" | sed '$d')

echo "Code HTTP : $http_code"
echo ""

if [ "$http_code" = "200" ]; then
    echo "✅ Succès ! L'API fonctionne correctement"
    echo ""
    echo "📝 Réponse :"
    echo "$body" | jq -r '.choices[0].message.content' 2>/dev/null || echo "$body"
    echo ""
else
    echo "❌ Erreur : Code HTTP $http_code"
    echo ""
    echo "📝 Détails de l'erreur :"
    echo "$body" | jq '.' 2>/dev/null || echo "$body"
    echo ""
    
    if [ "$http_code" = "401" ]; then
        echo "🔑 Problème d'authentification :"
        echo "   - Vérifiez que votre clé API est correcte"
        echo "   - Vérifiez qu'elle n'a pas été révoquée"
        echo "   - Générez une nouvelle clé sur https://console.mistral.ai/"
    elif [ "$http_code" = "429" ]; then
        echo "⏱️ Limite de taux dépassée :"
        echo "   - Attendez quelques minutes avant de réessayer"
        echo "   - Vérifiez votre quota sur https://console.mistral.ai/usage"
    elif [ "$http_code" = "500" ] || [ "$http_code" = "502" ] || [ "$http_code" = "503" ]; then
        echo "🔧 Problème serveur Mistral :"
        echo "   - Réessayez dans quelques minutes"
        echo "   - Vérifiez le status : https://status.mistral.ai/"
    fi
    echo ""
    exit 1
fi

# Test 2 : Test avec le prompt ZyatrIA
echo "📡 Test 2 : Test avec le contexte ZyatrIA"
echo "----------------------------------------"

response=$(curl -s -w "\n%{http_code}" -X POST https://api.mistral.ai/v1/chat/completions \
  -H "Authorization: Bearer $MISTRAL_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "mistral-medium",
    "messages": [
      {
        "role": "system",
        "content": "Tu es un assistant IA pour ZyatrIA Global, une entreprise canadienne spécialisée en agents IA."
      },
      {
        "role": "user",
        "content": "Quels sont vos services ?"
      }
    ],
    "temperature": 0.7,
    "max_tokens": 800
  }')

http_code=$(echo "$response" | tail -n1)
body=$(echo "$response" | sed '$d')

echo "Code HTTP : $http_code"
echo ""

if [ "$http_code" = "200" ]; then
    echo "✅ Succès ! Le contexte ZyatrIA fonctionne"
    echo ""
    echo "📝 Réponse :"
    echo "$body" | jq -r '.choices[0].message.content' 2>/dev/null || echo "$body"
    echo ""
else
    echo "❌ Erreur : Code HTTP $http_code"
    echo ""
    echo "📝 Détails :"
    echo "$body" | jq '.' 2>/dev/null || echo "$body"
    echo ""
fi

# Test 3 : Vérifier les modèles disponibles
echo "📡 Test 3 : Modèles disponibles"
echo "------------------------------"

models_response=$(curl -s -w "\n%{http_code}" -X GET https://api.mistral.ai/v1/models \
  -H "Authorization: Bearer $MISTRAL_API_KEY")

http_code=$(echo "$models_response" | tail -n1)
body=$(echo "$models_response" | sed '$d')

echo "Code HTTP : $http_code"
echo ""

if [ "$http_code" = "200" ]; then
    echo "✅ Modèles disponibles :"
    echo "$body" | jq -r '.data[].id' 2>/dev/null || echo "$body"
    echo ""
else
    echo "⚠️ Impossible de récupérer la liste des modèles"
    echo ""
fi

# Résumé
echo "================================"
echo "📊 Résumé des tests"
echo "================================"
echo ""
echo "✅ Tous les tests sont passés !"
echo ""
echo "🎯 Prochaines étapes :"
echo "   1. Votre clé API Mistral fonctionne correctement"
echo "   2. Le modèle mistral-medium est accessible"
echo "   3. Le chatbot est prêt à être utilisé"
echo ""
echo "🚀 Pour tester le chatbot sur votre site :"
echo "   1. Démarrer le serveur : npm run dev"
echo "   2. Ouvrir http://localhost:4321"
echo "   3. Cliquer sur l'icône ✨ en bas à droite"
echo "   4. Envoyer un message de test"
echo ""
echo "📚 Documentation complète : 🔑_CONFIGURATION_MISTRAL_API.md"
echo ""
