@echo off
chcp 65001 >nul
echo.
echo ╔════════════════════════════════════════════════════════════╗
echo ║                                                            ║
echo ║     🚀 DÉPLOIEMENT CLOUDFLARE - ZYATRIA GLOBAL 🚀        ║
echo ║                                                            ║
echo ╚════════════════════════════════════════════════════════════╝
echo.
echo 📦 Étape 1/3 - Construction du projet...
echo.

call npm run build

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo ❌ ERREUR lors de la construction!
    echo.
    pause
    exit /b 1
)

echo.
echo ✅ Construction réussie!
echo.
echo 🔐 Étape 2/3 - Authentification Cloudflare...
echo.
echo ⚠️  Si vous n'êtes pas connecté, une fenêtre de navigateur va s'ouvrir
echo.

call npx wrangler login

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo ❌ ERREUR lors de l'authentification!
    echo.
    pause
    exit /b 1
)

echo.
echo ✅ Authentification réussie!
echo.
echo 🚀 Étape 3/3 - Déploiement sur Cloudflare Pages...
echo.

call npx wrangler pages deploy dist --project-name=zyatria-global

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo ❌ ERREUR lors du déploiement!
    echo.
    pause
    exit /b 1
)

echo.
echo ╔════════════════════════════════════════════════════════════╗
echo ║                                                            ║
echo ║              ✅ DÉPLOIEMENT RÉUSSI! ✅                    ║
echo ║                                                            ║
echo ║     🌐 Votre site est maintenant en ligne!                ║
echo ║                                                            ║
echo ║     📍 URL: https://zyatria-global.pages.dev              ║
echo ║                                                            ║
echo ╚═══════════════════════════════════��════════════════════════╝
echo.
echo 🎉 Félicitations! Votre site est déployé!
echo.
pause
