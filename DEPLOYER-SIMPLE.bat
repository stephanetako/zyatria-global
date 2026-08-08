@echo off
echo.
echo ========================================
echo   DEPLOIEMENT ZYATRIA GLOBAL
echo ========================================
echo.

echo [1/3] Ajout des fichiers...
git add .

echo [2/3] Commit...
git commit -m "Deploy: Mise a jour complete du site"

echo [3/3] Push vers GitHub...
git push origin master

echo.
echo ========================================
echo   DEPLOIEMENT TERMINE !
echo ========================================
echo.
echo Cloudflare va deployer automatiquement (3-4 min)
echo.
echo Verifiez sur: https://dash.cloudflare.com
echo Testez sur: https://zyatria-global.pages.dev
echo.
pause
