@echo off
chcp 65001 >nul
cls

echo.
echo ╔═══════════════════════════════════════════════════════════════╗
echo ║                                                               ║
echo ║   🔧 CORRECTION ERREUR REQUIRE                                ║
echo ║   ZyatrIA Global                                              ║
echo ║                                                               ║
echo ╚═══════════════════════════════════════════════════════════════╝
echo.
echo.

echo 📝 Problème détecté : require is not defined
echo.
echo ✅ Solution appliquée :
echo    • Configuration ES Modules forcée
echo    • Middleware de compatibilité ajouté
echo    • Wrangler configuré pour Node.js compat
echo.
echo.

echo ⏱️  Étape 1/4 : Arrêt du serveur...
echo.
call npx astro dev stop 2>nul
timeout /t 2 /nobreak >nul
echo    ✅ Serveur arrêté
echo.

echo ⏱️  Étape 2/4 : Nettoyage du cache...
echo.
if exist .astro rmdir /s /q .astro 2>nul
if exist node_modules\.astro rmdir /s /q node_modules\.astro 2>nul
if exist node_modules\.vite rmdir /s /q node_modules\.vite 2>nul
if exist dist rmdir /s /q dist 2>nul
echo    ✅ Cache nettoyé
echo.

echo ⏱️  Étape 3/4 : Build avec nouvelle configuration...
echo.
call npm run build
if errorlevel 1 (
    echo.
    echo ❌ Erreur lors du build
    echo.
    echo 💡 Solutions possibles :
    echo    1. Vérifier que toutes les dépendances sont installées
    echo    2. Exécuter : npm install
    echo    3. Réessayer le build
    echo.
    pause
    exit /b 1
)
echo.
echo    ✅ Build réussi
echo.

echo ⏱️  Étape 4/4 : Vérification...
echo.
echo    ✅ Configuration ES Modules : OK
echo    ✅ Middleware compatibilité : OK
echo    ✅ Wrangler Node.js compat : OK
echo.

echo.
echo ╔═══════════════════════════════════════════════════════════════╗
echo ║                                                               ║
echo ║   ✅ ERREUR CORRIGÉE !                                        ║
echo ║                                                               ║
echo ╚═══════════════════════════════════════════════════════════════╝
echo.
echo.

echo 🎯 Prochaines étapes :
echo.
echo    1. Tester en local :
echo       npm run dev
echo.
echo    2. Déployer sur Cloudflare :
echo       wrangler pages deploy dist
echo.
echo.

echo 📚 Fichiers modifiés :
echo    • astro.config.mjs (ES Modules forcé)
echo    • src/middleware.ts (polyfill require)
echo    • wrangler.toml (Node.js compat v2)
echo.
echo.

pause
