# Push Manuel vers GitHub
Write-Host ""
Write-Host "PUSH VERS GITHUB" -ForegroundColor Cyan
Write-Host ""

git status
Write-Host ""

Write-Host "Choisissez votre methode :" -ForegroundColor Yellow
Write-Host "1 = Token GitHub"
Write-Host "2 = Push Direct"
Write-Host ""

$choix = Read-Host "Votre choix (1 ou 2)"

if ($choix -eq "1") {
    Write-Host ""
    Write-Host "Creez un token sur : https://github.com/settings/tokens" -ForegroundColor Yellow
    Write-Host "Cochez : repo" -ForegroundColor Gray
    Write-Host ""
    $token = Read-Host "Entrez votre token"
    
    git remote set-url origin "https://$token@github.com/stephanetako/-ZyatrIA-Global.git"
    Write-Host "Remote configure !" -ForegroundColor Green
}

Write-Host ""
Write-Host "Push en cours..." -ForegroundColor Cyan
git push origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "PUSH REUSSI !" -ForegroundColor Green
} else {
    Write-Host ""
    Write-Host "ERREUR" -ForegroundColor Red
}
