@echo off
chcp 65001 >nul
echo.
echo 🔍 === VÉRIFICATION DES CHATBOTS ===
echo.

echo 📁 1. FICHIERS DE CHATBOT
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
if exist "src\components\SimpleChatbot.tsx" (
    echo ✅ SimpleChatbot.tsx
) else (
    echo ❌ SimpleChatbot.tsx - ABSENT
)

if exist "src\components\EnhancedClaudeChatBot.tsx" (
    echo ✅ EnhancedClaudeChatBot.tsx
) else (
    echo ❌ EnhancedClaudeChatBot.tsx - ABSENT
)

if exist "src\components\SuperChatbotFamily.tsx" (
    echo ✅ SuperChatbotFamily.tsx
) else (
    echo ❌ SuperChatbotFamily.tsx - ABSENT
)

echo.
echo 📦 2. IMPORTS DANS HomePageComplete.tsx
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
findstr /N "import.*Chatbot" "src\components\pages\HomePageComplete.tsx" 2>nul
if errorlevel 1 (
    echo ❌ Aucun import trouvé
) else (
    echo ✅ Imports trouvés
)

echo.
echo 🎨 3. RENDUS DE CHATBOT
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
findstr /N "SimpleChatbot" "src\components\pages\HomePageComplete.tsx" 2>nul
if errorlevel 1 (
    echo ❌ Aucun rendu trouvé
) else (
    echo ✅ Rendus trouvés
)

echo.
echo 🔌 4. APIS DE CHATBOT
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
if exist "src\pages\api\claude-chat.ts" (
    echo ✅ claude-chat.ts
) else (
    echo ❌ claude-chat.ts - ABSENT
)

if exist "src\pages\api\mistral-chat.ts" (
    echo ✅ mistral-chat.ts
) else (
    echo ❌ mistral-chat.ts - ABSENT
)

if exist "src\pages\api\ai\chat.ts" (
    echo ✅ ai/chat.ts
) else (
    echo ❌ ai/chat.ts - ABSENT
)

echo.
echo 🔑 5. VARIABLES D'ENVIRONNEMENT
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
if exist ".env" (
    echo ✅ Fichier .env trouvé
    findstr /C:"ANTHROPIC_API_KEY" .env >nul 2>&1
    if errorlevel 1 (
        echo ❌ ANTHROPIC_API_KEY manquante
    ) else (
        echo ✅ ANTHROPIC_API_KEY configurée
    )
    findstr /C:"MISTRAL_API_KEY" .env >nul 2>&1
    if errorlevel 1 (
        echo ⚠️  MISTRAL_API_KEY manquante
    ) else (
        echo ✅ MISTRAL_API_KEY configurée
    )
) else (
    echo ❌ Fichier .env non trouvé
)

echo.
echo 📋 RÉSUMÉ
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
echo.
echo ✅ VÉRIFICATION TERMINÉE !
echo.
echo 💡 PROCHAINES ÉTAPES:
echo 1. Lancez: npm run dev
echo 2. Ouvrez: http://localhost:4321
echo 3. Cherchez le bouton 💬 en bas à droite
echo.
pause
