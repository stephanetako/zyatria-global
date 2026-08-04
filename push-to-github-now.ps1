# 🚀 PUSH RAPIDE VERS GITHUB
# Script PowerShell pour pousser tous les commits vers GitHub

Write-Host "🚀 DÉMARRAGE DU PUSH VERS GITHUB..." -ForegroundColor Cyan
Write-Host ""

# Vérifier qu'on est dans le bon répertoire
if (-not (Test-Path ".git")) {
    Write-Host "❌ ERREUR: Pas de repository Git trouvé ici!" -ForegroundColor Red
    Write-Host "📂 Naviguez vers le dossier zyatria-global d'abord" -ForegroundColor Yellow
    pause
    exit 1
}

# Afficher la branche actuelle
Write-Host "📍 Branche actuelle:" -ForegroundColor Yellow
git branch --show-current
Write-Host ""

# Afficher les commits à pusher
Write-Host "📦 Commits à pusher:" -ForegroundColor Yellow
git log origin/master..HEAD --oneline 2>$null
if ($LASTEXITCODE -ne 0) {
    Write-Host "⚠️  Impossible de comparer avec origin/master" -ForegroundColor Yellow
    Write-Host "📋 Derniers commits locaux:" -ForegroundColor Cyan
    git log --oneline -5
}
Write-Host ""

# Demander confirmation
Write-Host "❓ Voulez-vous pusher ces commits vers GitHub? (O/N)" -ForegroundColor Cyan
$confirmation = Read-Host
if ($confirmation -ne "O" -and $confirmation -ne "o") {
    Write-Host "❌ Push annulé" -ForegroundColor Red
    pause
    exit 0
}

Write-Host ""
Write-Host "🔄 Push en cours vers origin/master..." -ForegroundColor Cyan

# Pusher vers master
git push origin master 2>&1 | Tee-Object -Variable pushOutput

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "✅ PUSH RÉUSSI !" -ForegroundColor Green
    Write-Host ""
    Write-Host "🎉 Vos commits sont maintenant sur GitHub !" -ForegroundColor Green
    Write-Host ""
    Write-Host "🌐 Vérifiez sur: https://github.com/stephanetako/zyatria-global" -ForegroundColor Cyan
    Write-Host ""
} else {
    Write-Host ""
    Write-Host "❌ ERREUR LORS DU PUSH" -ForegroundColor Red
    Write-Host ""
    Write-Host "📋 Sortie complète:" -ForegroundColor Yellow
    Write-Host $pushOutput
    Write-Host ""
    Write-Host "💡 Solutions possibles:" -ForegroundColor Cyan
    Write-Host "   1. Vérifiez votre connexion Internet" -ForegroundColor White
    Write-Host "   2. Vérifiez vos identifiants GitHub" -ForegroundColor White
    Write-Host "   3. Essayez: git push origin master --force" -ForegroundColor White
    Write-Host ""
}

Write-Host ""
Write-Host "Appuyez sur une touche pour fermer..." -ForegroundColor Gray
pause
