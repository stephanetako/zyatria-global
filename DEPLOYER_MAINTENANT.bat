@echo off
chcp 65001 >nul
cls

echo.
echo ========================================
echo 🚀 DÉPLOIEMENT ZYATRIA GLOBAL
echo ========================================
echo.
echo Ce script va déployer votre site sur GitHub et Cloudflare Pages
echo.
pause

echo.
echo 📋 Lancement du script de déploiement...
echo.

powershell -ExecutionPolicy Bypass -File "deploy-github-cloudflare.ps1"

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo ❌ Une erreur s'est produite
    echo.
    pause
    exit /b 1
)

echo.
echo ✅ Déploiement terminé avec succès!
echo.
echo 📖 Consultez le guide complet: 🚀_DEPLOYER_MAINTENANT_GUIDE_FINAL.md
echo.
pause
