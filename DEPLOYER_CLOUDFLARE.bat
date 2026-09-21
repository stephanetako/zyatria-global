@echo off
chcp 65001 >nul
cls

echo.
echo ╔══════════════════════════════════════════════════════════════════════════════╗
echo ║                                                                              ║
echo ║                    🚀 DÉPLOIEMENT CLOUDFLARE WORKERS                         ║
echo ║                                                                              ║
echo ╚══════════════════════════════════════════════════════════════════════════════╝
echo.
echo.

echo 📦 Étape 1/3 : Vérification du build...
if not exist "dist\server\entry.mjs" (
    echo ��� Le fichier entry.mjs n'existe pas. Construction du projet...
    call npm run build
    if errorlevel 1 (
        echo.
        echo ❌ ERREUR lors de la construction
        pause
        exit /b 1
    )
)
echo ✅ Build vérifié
echo.

echo 🔐 Étape 2/3 : Authentification Cloudflare...
echo    Si une fenêtre s'ouvre, connectez-vous à Cloudflare
echo.

echo 🚀 Étape 3/3 : Déploiement en cours...
echo.
npx wrangler deploy dist/server/entry.mjs --name zyatria-global --compatibility-date 2024-01-01

if errorlevel 1 (
    echo.
    echo ❌ ERREUR lors du déploiement
    echo.
    echo 💡 Solutions possibles:
    echo    1. Vérifiez votre connexion Internet
    echo    2. Assurez-vous d'être authentifié: npx wrangler login
    echo    3. Vérifiez que le projet existe sur Cloudflare
    echo.
    pause
    exit /b 1
)

echo.
echo ╔══════════════════════════════════════════════════════════════════════════════╗
echo ║                                                                              ║
echo ║                          ✅ DÉPLOIEMENT RÉUSSI!                              ║
echo ║                                                                              ║
echo ║  Votre site est maintenant en ligne à:                                      ║
echo ║  https://zyatria-global.VOTRE-SOUS-DOMAINE.workers.dev                      ║
echo ║                                                                              ║
echo ╚══════════════════════════════════════════════════════════════════════════════╝
echo.
echo.
pause
