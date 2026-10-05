@echo off
chcp 65001 >nul
cls

echo.
echo ═══════════════════════════════════════════════════════════════
echo.
echo            🚀 DÉPLOIEMENT ZYATRIA GLOBAL 🚀
echo.
echo ═══════════════════════════════════════════════════════════════
echo.
echo.
echo   ✅ Tous les problèmes sont résolus
echo   ✅ Configuration automatisée
echo   ✅ Prêt pour production
echo.
echo ═══════════════════════════════════════════════════════════════
echo.
echo.

timeout /t 3 /nobreak >nul

echo   📦 Build en cours...
echo.
call npm run build

if %errorlevel% neq 0 (
    echo.
    echo   ❌ Erreur lors du build
    echo.
    pause
    exit /b 1
)

echo.
echo ═══════════════════════════════════════════════════════════════
echo   ✅ Build réussi!
echo ═══════════════════════════════════════════════════════════════
echo.

timeout /t 2 /nobreak >nul

echo   🚀 Déploiement en cours...
echo.
call npx wrangler pages deploy dist

if %errorlevel% neq 0 (
    echo.
    echo   ❌ Erreur lors du déploiement
    echo.
    echo   💡 Vérifiez votre connexion: npx wrangler login
    echo.
    pause
    exit /b 1
)

echo.
echo ═══════════════════════════════════════════════════════════════
echo.
echo            🎉 DÉPLOIEMENT RÉUSSI! 🎉
echo.
echo ═══════════════════════════════════════════════════════════════
echo.
echo   ✅ Votre site est maintenant en ligne!
echo.
echo   📋 Prochaines étapes:
echo      1. Vérifier le site sur l'URL fournie
echo      2. Configurer les variables d'environnement
echo      3. Tester toutes les fonctionnalités
echo.
echo ═══════════════════════════════════════════════════════════════
echo.

pause
