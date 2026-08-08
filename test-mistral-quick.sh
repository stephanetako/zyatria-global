#!/bin/bash

echo "🔑 TEST RAPIDE MISTRAL AI"
echo "========================="
echo ""

# Demander la clé à l'utilisateur
echo "Collez votre nouvelle clé Mistral AI ici :"
echo "(ou appuyez sur Entrée pour tester la clé actuelle)"
read -r NEW_KEY

if [ -z "$NEW_KEY" ]; then
    # Utiliser la clé du .env
    MISTRAL_KEY=$(grep "^MISTRAL_API_KEY=" .env | cut -d'=' -f2 | tr -d '"' | tr -d "'")
    echo "📋 Test de la clé actuelle..."
else
    MISTRAL_KEY="$NEW_KEY"
    echo "📋 Test de la nouvelle clé..."
fi

echo ""
echo "🔍 Longueur: ${#MISTRAL_KEY} caractères"
echo ""

# Test de la clé
echo "🧪 Test de connexion à l'API Mistral..."
RESPONSE=$(curl -s -w "\n%{http_code}" https://api.mistral.ai/v1/models \
  -H "Authorization: Bearer $MISTRAL_KEY")

HTTP_CODE=$(echo "$RESPONSE" | tail -n1)
BODY=$(echo "$RESPONSE" | head -n-1)

echo "📡 Code HTTP: $HTTP_CODE"
echo ""

if [ "$HTTP_CODE" = "200" ]; then
    echo "✅ ✅ ✅ CLÉ VALIDE ! ✅ ✅ ✅"
    echo ""
    echo "📊 Modèles disponibles:"
    echo "$BODY" | grep -o '"id":"[^"]*"' | head -10 | sed 's/"id":"/   - /' | sed 's/"$//'
    echo ""
    
    if [ ! -z "$NEW_KEY" ]; then
        echo "💾 Voulez-vous sauvegarder cette clé dans .env ? (o/n)"
        read -r SAVE
        if [ "$SAVE" = "o" ] || [ "$SAVE" = "O" ]; then
            # Backup de l'ancien .env
            cp .env .env.backup.$(date +%Y%m%d_%H%M%S)
            # Remplacer la clé
            sed -i "s|^MISTRAL_API_KEY=.*|MISTRAL_API_KEY=$NEW_KEY|" .env
            echo "✅ Clé sauvegardée dans .env"
            echo "📁 Backup créé: .env.backup.*"
        fi
    fi
    
    echo ""
    echo "🚀 PROCHAINES ÉTAPES:"
    echo "   1. Tester localement: npm run dev"
    echo "   2. Builder: npm run build"
    echo "   3. Déployer: wrangler pages deploy dist"
    echo "   4. Ajouter la clé dans Cloudflare Pages"
    
else
    echo "❌ ❌ ❌ CLÉ INVALIDE ! ❌ ❌ ❌"
    echo ""
    echo "📄 Réponse de l'API:"
    echo "$BODY"
    echo ""
    echo "🔧 SOLUTION:"
    echo "   1. Allez sur: https://console.mistral.ai/api-keys/"
    echo "   2. Créez une nouvelle clé"
    echo "   3. Relancez ce script avec la nouvelle clé"
fi

echo ""
