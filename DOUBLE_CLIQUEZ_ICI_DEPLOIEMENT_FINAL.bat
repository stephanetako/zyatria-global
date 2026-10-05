@echo off
chcp 65001 >nul
color 0A
cls

echo ═══════════════════════════════════════════════════════════════
echo   🚀 DÉPLOIEMENT AUTOMATIQUE - ZYATRIA GLOBAL
echo ═══════════════════════════════════════════════════════════════
echo.
echo   Ce script va:
echo   1. Ajouter tous les fichiers modifiés
echo   2. Créer un commit
echo   3. Pousser vers GitHub
echo   4. Cloudflare déploiera automatiquement
echo.
echo ═══════════════════════════════════════════════════════════════
echo.

pause

echo.
echo 📦 Étape 1/3 - Ajout des fichiers...
echo.
git add .
if %errorlevel% neq 0 (
    echo ❌ Erreur lors de l'ajout des fichiers
    pause
    exit /b 1
)
echo ✅ Fichiers ajoutés avec succès
echo.

echo 💾 Étape 2/3 - Création du commit...
echo.
git commit -m "Fix: Page blanche corrigée - mode server activé"
if %errorlevel% neq 0 (
    echo ⚠️  Aucun changement à commiter ou erreur
    echo.
    echo Vérification du dernier commit...
    git log -1 --oneline
    echo.
)
echo.

echo 🚀 Étape 3/3 - Push vers GitHub...
echo.
git push origin master
if %errorlevel% neq 0 (
    echo ❌ Erreur lors du push
    echo.
    echo Essayez manuellement:
    echo   git push origin master
    echo.
    pause
    exit /b 1
)
echo.

echo ═══════════════════════════════════════════════════════════════
echo   ✅ DÉPLOIEMENT LANCÉ AVEC SUCCÈS !
echo ═══════════════════════════════════════════════════════════════
echo.
echo   📊 Prochaines étapes:
echo.
echo   1. Attendez 2-3 minutes
echo.
echo   2. Vérifiez le déploiement sur Cloudflare:
echo      https://dash.cloudflare.com/b909407c9d4fcef1c9232d039138b851
echo.
echo   3. Testez votre site:
echo      https://zyatria-global-cve.pages.dev
echo.
echo   4. Si vous voyez encore l'ancien projet:
echo      - Videz le cache (Ctrl+Shift+R)
echo      - Essayez en navigation privée (Ctrl+Shift+N)
echo      - Attendez 1-2 minutes de plus
echo.
echo ═══════════════════════════════════════════════════════════════
echo.
echo   🎉 Votre nouveau site sera en ligne dans quelques minutes !
echo.
echo ═══════════════════════════════════════════════════════════════
echo.

pause
