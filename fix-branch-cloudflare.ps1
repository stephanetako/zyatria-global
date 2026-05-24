# ========================================
# 🔧 SCRIPT DE CORRECTION DE BRANCHE
# ========================================
# Ce script renomme la branche master en main
# pour correspondre à la configuration Cloudflare

Write-Host ""
Write-Host "🔧 CORRECTION DE LA BRANCHE POUR CLOUDFLARE" -ForegroundColor Cyan
Write-Host "=============================================" -ForegroundColor Cyan
Write-Host ""

# Vérifier qu'on est dans un dépôt Git
if (-not (Test-Path ".git")) {
    Write-Host "❌ Erreur: Ce n'est pas un dépôt Git!" -ForegroundColor Red
    Write-Host "   Assurez-vous d'être dans le dossier zyatria-global" -ForegroundColor Yellow
    exit 1
}

Write-Host "📋 Étape 1: Vérification de la branche actuelle..." -ForegroundColor Yellow
$currentBranch = git branch --show-current
Write-Host "   Branche actuelle: $currentBranch" -ForegroundColor White

if ($currentBranch -eq "main") {
    Write-Host "✅ Vous êtes déjà sur la branche 'main'!" -ForegroundColor Green
    Write-Host "   Aucune action nécessaire." -ForegroundColor Green
    exit 0
}

Write-Host ""
Write-Host "📋 Étape 2: Renommage de la branche 'master' en 'main'..." -ForegroundColor Yellow

try {
    # Renommer la branche locale
    git branch -m master main
    Write-Host "   ✅ Branche locale renommée" -ForegroundColor Green
    
    Write-Host ""
    Write-Host "📋 Étape 3: Mise à jour de la branche distante..." -ForegroundColor Yellow
    
    # Pousser la nouvelle branche
    git push -u origin main
    Write-Host "   ✅ Branche 'main' poussée sur GitHub" -ForegroundColor Green
    
    Write-Host ""
    Write-Host "📋 Étape 4: Suppression de l'ancienne branche 'master'..." -ForegroundColor Yellow
    
    # Supprimer l'ancienne branche master sur GitHub
    git push origin --delete master
    Write-Host "   ✅ Ancienne branche 'master' supprimée" -ForegroundColor Green
    
    Write-Host ""
    Write-Host "🎉 SUCCÈS!" -ForegroundColor Green
    Write-Host "=============================================" -ForegroundColor Green
    Write-Host "✅ Votre branche est maintenant 'main'" -ForegroundColor Green
    Write-Host "✅ Cloudflare va automatiquement redéployer" -ForegroundColor Green
    Write-Host ""
    Write-Host "🌐 Vérifiez votre déploiement sur:" -ForegroundColor Cyan
    Write-Host "   https://dash.cloudflare.com" -ForegroundColor White
    Write-Host ""
    
} catch {
    Write-Host ""
    Write-Host "❌ ERREUR lors du renommage de la branche!" -ForegroundColor Red
    Write-Host "   Détails: $_" -ForegroundColor Red
    Write-Host ""
    Write-Host "💡 SOLUTION ALTERNATIVE:" -ForegroundColor Yellow
    Write-Host "   Allez sur Cloudflare Pages > Settings > Builds" -ForegroundColor White
    Write-Host "   Changez 'Production branch' de 'main' à 'master'" -ForegroundColor White
    Write-Host ""
    exit 1
}
