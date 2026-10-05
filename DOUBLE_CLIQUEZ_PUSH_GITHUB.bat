@echo off
chcp 65001 >nul
cls
echo.
echo ========================================
echo    🚀 PUSH VERS GITHUB
echo ========================================
echo.
echo 📦 Ajout des fichiers...
git add -A
echo.
echo 💾 Création du commit...
git commit -m "Nettoyage complet + corrections"
echo.
echo 🚀 Push vers GitHub...
git push origin master
echo.
if %errorlevel% equ 0 (
    echo ========================================
    echo    ✅ SUCCÈS !
    echo ========================================
    echo.
    echo 🔗 Dépôt: https://github.com/stephanetako/zyatria-global
    echo.
    echo 📋 PROCHAINE ÉTAPE:
    echo    Allez sur Cloudflare Dashboard
    echo    Le déploiement se fera automatiquement
    echo.
) else (
    echo ========================================
    echo    ❌ ERREUR
    echo ========================================
    echo.
    echo 💡 Créez un Personal Access Token:
    echo    https://github.com/settings/tokens
    echo.
)
echo.
pause
