#!/bin/bash

echo "🔍 === VÉRIFICATION DES CHATBOTS ==="
echo ""

# Couleurs
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# 1. Vérifier les fichiers de chatbot
echo "📁 1. FICHIERS DE CHATBOT"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

chatbots=(
  "src/components/SimpleChatbot.tsx"
  "src/components/EnhancedClaudeChatBot.tsx"
  "src/components/SuperChatbotFamily.tsx"
  "src/components/ClaudePoweredChatBot.tsx"
  "src/components/MistralChatBot.tsx"
)

for chatbot in "${chatbots[@]}"; do
  if [ -f "$chatbot" ]; then
    size=$(wc -c < "$chatbot" | tr -d ' ')
    echo -e "${GREEN}✅${NC} $(basename $chatbot) (${size} bytes)"
  else
    echo -e "${RED}❌${NC} $(basename $chatbot) - ABSENT"
  fi
done

echo ""

# 2. Vérifier les imports dans HomePageComplete
echo "📦 2. IMPORTS DANS HomePageComplete.tsx"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

if [ -f "src/components/pages/HomePageComplete.tsx" ]; then
  imports=$(grep -n "import.*Chatbot\|import.*ChatBot" src/components/pages/HomePageComplete.tsx)
  if [ -n "$imports" ]; then
    echo -e "${GREEN}✅${NC} Imports trouvés:"
    echo "$imports"
  else
    echo -e "${RED}❌${NC} Aucun import de chatbot trouvé"
  fi
else
  echo -e "${RED}❌${NC} HomePageComplete.tsx non trouvé"
fi

echo ""

# 3. Vérifier les rendus de chatbot
echo "🎨 3. RENDUS DE CHATBOT"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

if [ -f "src/components/pages/HomePageComplete.tsx" ]; then
  renders=$(grep -n "<.*Chatbot.*/>\\|<.*ChatBot.*/>" src/components/pages/HomePageComplete.tsx)
  if [ -n "$renders" ]; then
    echo -e "${GREEN}✅${NC} Rendus trouvés:"
    echo "$renders"
  else
    echo -e "${RED}❌${NC} Aucun rendu de chatbot trouvé"
  fi
fi

echo ""

# 4. Vérifier les APIs
echo "🔌 4. APIS DE CHATBOT"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

apis=(
  "src/pages/api/claude-chat.ts"
  "src/pages/api/mistral-chat.ts"
  "src/pages/api/ai/chat.ts"
)

for api in "${apis[@]}"; do
  if [ -f "$api" ]; then
    echo -e "${GREEN}✅${NC} $(basename $api)"
  else
    echo -e "${RED}❌${NC} $(basename $api) - ABSENT"
  fi
done

echo ""

# 5. Vérifier les variables d'environnement
echo "🔑 5. VARIABLES D'ENVIRONNEMENT"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

if [ -f ".env" ]; then
  echo -e "${GREEN}✅${NC} Fichier .env trouvé"
  
  # Vérifier les clés (sans afficher les valeurs)
  if grep -q "ANTHROPIC_API_KEY" .env; then
    echo -e "${GREEN}✅${NC} ANTHROPIC_API_KEY configurée"
  else
    echo -e "${RED}❌${NC} ANTHROPIC_API_KEY manquante"
  fi
  
  if grep -q "MISTRAL_API_KEY" .env; then
    echo -e "${GREEN}✅${NC} MISTRAL_API_KEY configurée"
  else
    echo -e "${YELLOW}⚠️${NC}  MISTRAL_API_KEY manquante (optionnelle)"
  fi
else
  echo -e "${RED}❌${NC} Fichier .env non trouvé"
fi

echo ""

# 6. Vérifier les emojis dans SimpleChatbot
echo "😀 6. EMOJIS DANS SimpleChatbot"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

if [ -f "src/components/SimpleChatbot.tsx" ]; then
  emoji_count=$(grep -o "💬\|✨\|🚀\|🤖" src/components/SimpleChatbot.tsx | wc -l)
  if [ "$emoji_count" -gt 0 ]; then
    echo -e "${GREEN}✅${NC} $emoji_count emojis trouvés"
    echo "   Emojis utilisés:"
    grep -o "💬\|✨\|🚀\|🤖" src/components/SimpleChatbot.tsx | sort | uniq -c
  else
    echo -e "${RED}❌${NC} Aucun emoji trouvé"
  fi
fi

echo ""

# 7. Vérifier le z-index
echo "📊 7. Z-INDEX DU CHATBOT"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

if [ -f "src/components/SimpleChatbot.tsx" ]; then
  zindex=$(grep -o "z-\[9999\]\|z-50\|z-\[.*\]" src/components/SimpleChatbot.tsx | head -1)
  if [ -n "$zindex" ]; then
    if [[ "$zindex" == "z-[9999]" ]]; then
      echo -e "${GREEN}✅${NC} Z-index optimal: $zindex"
    else
      echo -e "${YELLOW}⚠️${NC}  Z-index: $zindex (devrait être z-[9999])"
    fi
  else
    echo -e "${RED}❌${NC} Z-index non trouvé"
  fi
fi

echo ""

# 8. Résumé
echo "📋 RÉSUMÉ"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# Compter les problèmes
problems=0

[ ! -f "src/components/SimpleChatbot.tsx" ] && ((problems++))
[ ! -f "src/components/pages/HomePageComplete.tsx" ] && ((problems++))
[ ! -f ".env" ] && ((problems++))

if [ $problems -eq 0 ]; then
  echo -e "${GREEN}✅ TOUT EST OK !${NC}"
  echo ""
  echo "Le chatbot devrait être visible sur:"
  echo "👉 http://localhost:4321"
  echo ""
  echo "Cherchez le bouton rond coloré en bas à droite avec 💬 et ✨"
else
  echo -e "${RED}❌ $problems problème(s) détecté(s)${NC}"
  echo ""
  echo "Consultez les détails ci-dessus pour corriger."
fi

echo ""
echo "🔍 === VÉRIFICATION TERMINÉE ==="
