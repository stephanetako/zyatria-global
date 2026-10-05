@echo off
chcp 65001 >nul
cls
echo.
echo ╔════════════════════════════════════════════════════════════╗
echo ║                                                            ║
echo ║          🔍 DIAGNOSTIC CHATBOT ZYATRIA                     ║
echo ║                                                            ║
echo ╚════════════════════════════════════════════════════════════╝
echo.
echo.

echo 📁 Vérification des fichiers...
echo.

set "errors=0"

if exist "src\components\SimpleChatbot.tsx" (
    echo [32m✅ SimpleChatbot.tsx[0m
) else (
    echo [31m❌ SimpleChatbot.tsx - ABSENT[0m
    set /a errors+=1
)

if exist "src\components\pages\HomePageComplete.tsx" (
    echo [32m✅ HomePageComplete.tsx[0m
) else (
    echo [31m❌ HomePageComplete.tsx - ABSENT[0m
    set /a errors+=1
)

if exist ".env" (
    echo [32m✅ Fichier .env[0m
) else (
    echo [31m❌ Fichier .env - ABSENT[0m
    set /a errors+=1
)

echo.
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
echo.

if %errors%==0 (
    echo [32m✅ TOUT EST OK ![0m
    echo.
    echo Le chatbot devrait être visible sur:
    echo [36m👉 http://localhost:4321[0m
    echo.
    echo Cherchez le bouton rond coloré en bas à droite avec 💬 et ✨
    echo.
    echo.
    echo 🚀 Voulez-vous lancer le serveur maintenant ?
    echo.
    choice /C ON /M "Appuyez sur O pour OUI, N pour NON"
    if errorlevel 2 goto :end
    if errorlevel 1 goto :start
) else (
    echo [31m❌ %errors% problème(s) détecté(s)[0m
    echo.
    echo Vérifiez que vous êtes dans le bon dossier.
    echo.
    goto :end
)

:start
echo.
echo 🚀 Lancement du serveur de développement...
echo.
echo [33mAppuyez sur Ctrl+C pour arrêter le serveur[0m
echo.
call npm run dev
goto :end

:end
echo.
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━���━━━━━━━━━━━━━━━
echo.
pause
