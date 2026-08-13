#!/bin/bash

# Couleurs
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${YELLOW}🧪 TEST DE LA CLÉ API CLAUDE${NC}"
echo "=============================="
echo ""

# Vérifier si .env.local existe
if [ ! -f .env.local ]; then
    echo -e "${RED}❌ Fichier .env.local introuvable !${NC}"
    echo ""
    echo -e "${YELLOW}Créez le fichier .env.local avec :${NC}"
    echo "MISTRAL_API_KEY=sk-ant-api03-xxxxx..."
    echo ""
    exit 1
fi

# Lire la clé API
source .env.local

if [ -z "$MISTRAL_API_KEY" ]; then
    echo -e "${RED}❌ Variable MISTRAL_API_KEY non définie dans .env.local !${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Clé API trouvée dans .env.local${NC}"
echo -e "${YELLOW}Clé : ${MISTRAL_API_KEY:0:20}...${NC}"
echo ""

# Vérifier le format
if [[ ! $MISTRAL_API_KEY =~ ^sk-ant-api03- ]]; then
    echo -e "${RED}⚠️  ATTENTION : La clé ne commence pas par 'sk-ant-api03-'${NC}"
    echo -e "${RED}Ce n'est probablement pas une clé Claude valide !${NC}"
    echo ""
fi

echo -e "${YELLOW}🔍 Test de l'API Claude...${NC}"
echo ""

# Test de l'API
response=$(curl -s -w "\n%{http_code}" -X POST https://api.anthropic.com/v1/messages \
    -H "Content-Type: application/json" \
    -H "x-api-key: $MISTRAL_API_KEY" \
    -H "anthropic-version: 2023-06-01" \
    -d '{
        "model": "claude-3-5-sonnet-20241022",
        "max_tokens": 100,
        "messages": [{
            "role": "user",
            "content": "Hello! Just testing the API. Reply with OK."
        }]
    }')

# Extraire le code HTTP
http_code=$(echo "$response" | tail -n1)
body=$(echo "$response" | sed '$d')

echo "Code HTTP : $http_code"
echo ""

if [ "$http_code" = "200" ]; then
    echo -e "${GREEN}✅ CLÉ API VALIDE !${NC}"
    echo ""
    echo -e "${GREEN}📝 Réponse de Claude :${NC}"
    echo "$body" | jq -r '.content[0].text' 2>/dev/null || echo "$body"
    echo ""
    echo -e "${GREEN}🎉 Votre chatbot peut maintenant utiliser Claude !${NC}"
    echo ""
    echo -e "${YELLOW}Prochaines étapes :${NC}"
    echo "1. Redémarrez le serveur : npm run dev"
    echo "2. Testez le chatbot sur http://localhost:4321"
    echo ""
else
    echo -e "${RED}❌ ERREUR API (Code: $http_code)${NC}"
    echo ""
    echo -e "${RED}Détails :${NC}"
    echo "$body" | jq '.' 2>/dev/null || echo "$body"
    echo ""
    
    if [ "$http_code" = "401" ]; then
        echo -e "${YELLOW}💡 Solution :${NC}"
        echo "1. Vérifiez que votre clé est valide sur https://console.anthropic.com/settings/keys"
        echo "2. Si elle est révoquée, créez une nouvelle clé"
        echo "3. Mettez à jour .env.local avec la nouvelle clé"
    elif [ "$http_code" = "429" ]; then
        echo -e "${YELLOW}💡 Solution :${NC}"
        echo "Vous avez dépassé la limite de requêtes. Attendez quelques minutes."
    else
        echo -e "${YELLOW}💡 Solution :${NC}"
        echo "Vérifiez votre connexion internet et réessayez."
    fi
    echo ""
fi
