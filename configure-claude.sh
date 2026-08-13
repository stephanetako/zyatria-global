#!/bin/bash

# Couleurs
CYAN='\033[0;36m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
GRAY='\033[0;37m'
NC='\033[0m' # No Color

echo -e "${CYAN}🤖 CONFIGURATION CLAUDE API POUR ZYATRIA GLOBAL${NC}"
echo -e "${CYAN}================================================${NC}"
echo ""

# Vérifier si wrangler est installé
echo -e "${YELLOW}🔍 Vérification de Wrangler...${NC}"
if ! command -v wrangler &> /dev/null; then
    echo -e "${RED}❌ Wrangler n'est pas installé !${NC}"
    echo ""
    echo -e "${YELLOW}📦 Installation de Wrangler...${NC}"
    npm install -g wrangler
    echo -e "${GREEN}✅ Wrangler installé !${NC}"
else
    echo -e "${GREEN}✅ Wrangler est installé${NC}"
fi

echo ""
echo -e "${CYAN}🔑 OBTENIR VOTRE CLÉ API CLAUDE${NC}"
echo -e "${CYAN}================================${NC}"
echo ""
echo -e "${NC}1. Allez sur : https://console.anthropic.com/${NC}"
echo -e "${NC}2. Créez un compte (ou connectez-vous)${NC}"
echo -e "${NC}3. Allez dans : Settings → API Keys${NC}"
echo -e "${NC}4. Cliquez sur : Create Key${NC}"
echo -e "${NC}5. Copiez la clé (commence par sk-ant-api03-)${NC}"
echo ""

# Demander la clé API
echo -e "${YELLOW}📝 Entrez votre clé API Claude :${NC}"
echo -e "${GRAY}(Format : sk-ant-api03-xxxxx...)${NC}"
read -p "Clé API: " apiKey

# Vérifier le format de la clé
if [[ ! $apiKey =~ ^sk-ant-api03- ]]; then
    echo ""
    echo -e "${YELLOW}⚠️  ATTENTION : La clé ne commence pas par 'sk-ant-api03-'${NC}"
    echo -e "${YELLOW}Êtes-vous sûr que c'est une clé Claude valide ?${NC}"
    echo ""
    read -p "Continuer quand même ? (o/N): " continue
    
    if [[ ! $continue =~ ^[oO]$ ]]; then
        echo -e "${RED}❌ Configuration annulée${NC}"
        exit 1
    fi
fi

echo ""
echo -e "${YELLOW}🔧 Configuration de la clé API...${NC}"

# Créer le fichier .env.local pour le développement local
echo "MISTRAL_API_KEY=$apiKey" > .env.local

echo -e "${GREEN}✅ Fichier .env.local créé pour le développement local${NC}"

echo ""
echo -e "${CYAN}☁️  CONFIGURATION CLOUDFLARE${NC}"
echo -e "${CYAN}============================${NC}"
echo ""
echo -e "${YELLOW}Voulez-vous configurer la clé sur Cloudflare Pages maintenant ?${NC}"
echo -e "${GRAY}(Vous devez être connecté à Wrangler)${NC}"
read -p "Configurer sur Cloudflare ? (o/N): " configureCloudflare

if [[ $configureCloudflare =~ ^[oO]$ ]]; then
    echo ""
    echo -e "${YELLOW}🔐 Configuration de la variable d'environnement sur Cloudflare...${NC}"
    echo ""
    
    # Configurer la variable sur Cloudflare
    echo "$apiKey" | wrangler pages secret put MISTRAL_API_KEY
    
    echo ""
    echo -e "${GREEN}✅ Variable configurée sur Cloudflare Pages !${NC}"
else
    echo ""
    echo -e "${YELLOW}⏭️  Configuration Cloudflare ignorée${NC}"
    echo ""
    echo -e "${CYAN}📝 Pour configurer manuellement :${NC}"
    echo -e "${NC}1. Allez sur : https://dash.cloudflare.com/${NC}"
    echo -e "${NC}2. Sélectionnez votre projet Pages${NC}"
    echo -e "${NC}3. Settings → Environment variables${NC}"
    echo -e "${NC}4. Ajoutez : MISTRAL_API_KEY = $apiKey${NC}"
fi

echo ""
echo -e "${CYAN}🧪 TEST DE LA CLÉ API${NC}"
echo -e "${CYAN}=====================${NC}"
echo ""
echo -e "${YELLOW}Voulez-vous tester la clé API maintenant ?${NC}"
read -p "Tester la clé ? (o/N): " testApi

if [[ $testApi =~ ^[oO]$ ]]; then
    echo ""
    echo -e "${YELLOW}🔍 Test de la clé API Claude...${NC}"
    
    # Test de l'API avec curl
    response=$(curl -s -w "\n%{http_code}" -X POST https://api.anthropic.com/v1/messages \
        -H "Content-Type: application/json" \
        -H "x-api-key: $apiKey" \
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
    
    if [ "$http_code" = "200" ]; then
        echo -e "${GREEN}✅ CLÉ API VALIDE !${NC}"
        echo -e "${GREEN}📝 Réponse de Claude : $(echo $body | grep -o '"text":"[^"]*"' | cut -d'"' -f4)${NC}"
    else
        echo -e "${RED}❌ ERREUR API (Code: $http_code)${NC}"
        echo -e "${RED}Détails : $body${NC}"
    fi
fi

echo ""
echo -e "${GREEN}🎉 CONFIGURATION TERMINÉE !${NC}"
echo -e "${GREEN}===========================${NC}"
echo ""
echo -e "${CYAN}📋 RÉSUMÉ :${NC}"
echo -e "${GREEN}✅ Clé API Claude configurée${NC}"
echo -e "${GREEN}✅ Fichier .env.local créé${NC}"

if [[ $configureCloudflare =~ ^[oO]$ ]]; then
    echo -e "${GREEN}✅ Variable Cloudflare configurée${NC}"
fi

echo ""
echo -e "${CYAN}🚀 PROCHAINES ÉTAPES :${NC}"
echo ""
echo -e "${NC}1. Tester en local :${NC}"
echo -e "${GRAY}   npm run dev${NC}"
echo ""
echo -e "${NC}2. Déployer sur Cloudflare :${NC}"
echo -e "${GRAY}   npm run build${NC}"
echo -e "${GRAY}   git add .${NC}"
echo -e "${GRAY}   git commit -m '✨ Configure Claude API'${NC}"
echo -e "${GRAY}   git push origin main${NC}"
echo ""
echo -e "${NC}3. Tester le chatbot sur votre site !${NC}"
echo ""
echo -e "${YELLOW}💡 ASTUCE : Gardez ce fichier .env.local pour le développement local${NC}"
echo ""
echo -e "${CYAN}📚 Documentation complète : ✅_CHATBOT_CLAUDE_INSTALLE.md${NC}"
echo ""
echo -e "${CYAN}🎯 Besoin d'aide ? ZyatrIA.contact@gmail.com${NC}"
echo ""
