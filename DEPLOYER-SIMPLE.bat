@echo off
chcp 65001 >nul
color 0B

echo.
echo ╔══════════════════════════════════════════════════════════════╗
echo ║                                                              ║
echo ║          🚀 DÉPLOIEMENT ZYATRIA GLOBAL                       ║
echo ║                                                              ║
echo ╚══════════════════════════════════════════════════════════════╝
echo.
echo.

echo 📤 Envoi vers GitHub...
echo.

git push origin master

if %errorlevel% neq 0 (
    echo.
    echo ❌ Erreur lors du push
    echo.
    echo Vérifiez votre connexion Git et réessayez.
    echo.
    pause
    exit /b 1
)

echo.
echo ✅ Push réussi !
echo.
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
echo.
echo ⏳ Cloudflare déploie votre site...
echo.
echo    Cela prend environ 3-4 minutes
echo.
echo    Vous pouvez fermer cette fenêtre et vérifier
echo    le statut sur votre dashboard Cloudflare
echo.
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
echo.
echo.
echo 🔗 Dashboard Cloudflare:
echo    https://dash.cloudflare.com
echo.
echo.
echo 📊 Ce qui a été déployé:
echo.
echo    ✅ Site complet avec design system
echo    ✅ 8 liens Stripe LIVE (paiements réels)
echo    ✅ Chatbot Mistral intelligent
echo    ✅ Formulaires Formspree
echo    ✅ 15+ pages optimisées
echo.
echo.
echo ⚠️  RAPPEL: Vous êtes en MODE LIVE Stripe
echo    Les paiements seront RÉELS
echo    Carte de test: 4242 4242 4242 4242
echo.
echo.
echo 🎊 Déploiement lancé avec succès ! 🎊
echo.
echo.

pause
