# DÉPLOIEMENT ZYATRIA GLOBAL
Write-Host ""
Write-Host "🚀 DÉPLOIEMENT ZYATRIA GLOBAL" -ForegroundColor Cyan
Write-Host "==============================" -ForegroundColor Cyan
Write-Host ""
Write-Host "📝 Collez l'URL de votre repository GitHub ici :" -ForegroundColor Yellow
Write-Host "   (Exemple: https://github.com/stephanetako/zyatria-global.git)" -ForegroundColor Gray
Write-Host ""
$REPO_URL = Read-Host "URL"

if ([string]::IsNullOrWhiteSpace($REPO_URL)) {
    Write-Host "❌ URL requise!" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "📦 Préparation du déploiement..." -ForegroundColor Yellow
Set-Location zyatria-global-clean

# Initialiser Git si nécessaire
if (-not (Test-Path .git)) {
    Write-Host "🔧 Initialisation de Git..." -ForegroundColor Yellow
    git init
    git branch -M main
}

# Ajouter le remote
Write-Host "🔗 Configuration du remote..." -ForegroundColor Yellow
git remote remove origin 2>$null
git remote add origin $REPO_URL

# Ajouter les fichiers
Write-Host "📁 Ajout des fichiers..." -ForegroundColor Yellow
git add .

# Commit
Write-Host "💾 Création du commit..." -ForegroundColor Yellow
git commit -m "🚀 Initial commit - ZyatrIA Global clean version"

# Push
Write-Host "⬆️  Push vers GitHub..." -ForegroundColor Yellow
git push -u origin main --force

Write-Host ""
Write-Host "✅ CODE POUSSÉ AVEC SUCCÈS!" -ForegroundColor Green
Write-Host ""
Write-Host "🎯 PROCHAINE ÉTAPE:" -ForegroundColor Cyan
Write-Host "1. Allez sur https://dash.cloudflare.com"
Write-Host "2. Workers & Pages → Create application"
Write-Host "3. Pages → Connect to Git"
Write-Host "4. Sélectionnez votre repository"
Write-Host ""
Write-Host "Appuyez sur une touche pour continuer..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
