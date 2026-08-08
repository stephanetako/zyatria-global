# 🚀 Script PowerShell - Push vers GitHub
# Auteur: ZyatrIA Global
# Description: Push automatique vers GitHub avec gestion d'erreurs

Write-Host "🚀 PUSH VERS GITHUB - ZYATRIA GLOBAL" -ForegroundColor Cyan
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host ""

# Vérifier qu'on est dans le bon dossier
if (-Not (Test-Path ".git")) {
    Write-Host "❌ ERREUR: Pas de dossier .git trouvé" -ForegroundColor Red
    Write-Host "Assurez-vous d'être dans le dossier du projet" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Appuyez sur une touche pour quitter..."
    $null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
    exit 1
}

# Afficher le statut actuel
Write-Host "📊 Statut actuel:" -ForegroundColor Yellow
git status
Write-Host ""

# Vérifier s'il y a des changements à push
$branch = git rev-parse --abbrev-ref HEAD
$ahead = git rev-list --count origin/$branch..$branch 2>$null

if ($ahead -eq 0) {
    Write-Host "✅ Aucun changement à push" -ForegroundColor Green
    Write-Host ""
    Write-Host "Appuyez sur une touche pour quitter..."
    $null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
    exit 0
}

Write-Host "📤 $ahead commit(s) à push vers GitHub" -ForegroundColor Cyan
Write-Host ""

# Récupérer les derniers changements
Write-Host "🔄 Récupération des derniers changements..." -ForegroundColor Yellow
git pull origin master --rebase

if ($LASTEXITCODE -ne 0) {
    Write-Host ""
    Write-Host "⚠️  Conflit détecté ou erreur lors du pull" -ForegroundColor Yellow
    Write-Host "Résolvez les conflits manuellement puis relancez le script" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Appuyez sur une touche pour quitter..."
    $null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
    exit 1
}

Write-Host "✅ Pull réussi" -ForegroundColor Green
Write-Host ""

# Push vers GitHub
Write-Host "🚀 Push vers GitHub..." -ForegroundColor Cyan
git push origin master

if ($LASTEXITCODE -ne 0) {
    Write-Host ""
    Write-Host "❌ ERREUR lors du push" -ForegroundColor Red
    Write-Host ""
    Write-Host "Solutions possibles:" -ForegroundColor Yellow
    Write-Host "1. Vérifiez votre connexion internet" -ForegroundColor White
    Write-Host "2. Vérifiez vos identifiants GitHub" -ForegroundColor White
    Write-Host "3. Créez un Personal Access Token:" -ForegroundColor White
    Write-Host "   https://github.com/settings/tokens" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "Pour utiliser un token:" -ForegroundColor Yellow
    Write-Host "git remote set-url origin https://[TOKEN]@github.com/stephanetako/zyatria-global.git" -ForegroundColor White
    Write-Host ""
    Write-Host "Appuyez sur une touche pour quitter..."
    $null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
    exit 1
}

Write-Host ""
Write-Host "✅ PUSH RÉUSSI !" -ForegroundColor Green
Write-Host ""
Write-Host "🎉 Votre code est maintenant sur GitHub !" -ForegroundColor Cyan
Write-Host ""
Write-Host "📊 Prochaines étapes:" -ForegroundColor Yellow
Write-Host "1. Vérifiez sur GitHub:" -ForegroundColor White
Write-Host "   https://github.com/stephanetako/zyatria-global" -ForegroundColor Cyan
Write-Host ""
Write-Host "2. Cloudflare déploiera automatiquement (3-4 min)" -ForegroundColor White
Write-Host "   https://dash.cloudflare.com" -ForegroundColor Cyan
Write-Host ""
Write-Host "3. Testez votre site:" -ForegroundColor White
Write-Host "   https://zyatria-global.pages.dev" -ForegroundColor Cyan
Write-Host ""
Write-Host "4. Configurez Stripe (voir: 🎯_CONFIGURER_STRIPE_MAINTENANT.md)" -ForegroundColor White
Write-Host ""
Write-Host "Appuyez sur une touche pour quitter..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
