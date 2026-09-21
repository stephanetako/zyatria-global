
@echo off
chcp 65001 >nul
cls

echo 🚀 DÉPLOIEMENT EN COURS...
echo.

cd /d "%~dp0"

echo 📦 Construction du projet...
call npm run build

if errorlevel 1 (
    echo ❌ Erreur lors de la construction
    pause
    exit /b 1
)

echo.
echo 🌐 Déploiement sur Cloudflare...
echo.

npx wrangler deploy dist/server/entry.mjs --name zyatria-global --compatibility-date 2024-01-01

if errorlevel 1 (
    echo ❌ Erreur lors du déploiement
    pause
    exit /b 1
)

echo.
echo ✅ TERMINÉ! Site en ligne!
echo.
pause

