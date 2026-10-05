# Script de déploiement automatique pour Cloudflare
# ZyatrIA Global - Déploiement rapide

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  DEPLOIEMENT ZYATRIA GLOBAL" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Étape 1 : Vérifier que le serveur dev n'est pas en cours
Write-Host "1. Vérification de l'environnement..." -ForegroundColor Yellow
$devProcess = Get-Process -Name "node" -ErrorAction SilentlyContinue | Where-Object { $_.CommandLine -like "*astro dev*" }
if ($devProcess) {
    Write-Host "   ⚠️  Le serveur dev est en cours. Arrêtez-le d'abord (Ctrl+C)" -ForegroundColor Red
    exit 1
}
Write-Host "   ✅ Environnement OK" -ForegroundColor Green
Write-Host ""

# Étape 2 : Test du build
Write-Host "2. Test du build..." -ForegroundColor Yellow
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "   ❌ Le build a échoué. Corrigez les erreurs avant de déployer." -ForegroundColor Red
    exit 1
}
Write-Host "   ✅ Build réussi" -ForegroundColor Green
Write-Host ""

# Étape 3 : Git status
Write-Host "3. Vérification des fichiers modifiés..." -ForegroundColor Yellow
git status --short
Write-Host ""

# Étape 4 : Confirmation
Write-Host "Voulez-vous déployer ces changements ? (O/N)" -ForegroundColor Cyan
$confirmation = Read-Host
if ($confirmation -ne "O" -and $confirmation -ne "o") {
    Write-Host "Déploiement annulé." -ForegroundColor Yellow
    exit 0
}

# Étape 5 : Git add
Write-Host ""
Write-Host "4. Ajout des fichiers..." -ForegroundColor Yellow
git add .
Write-Host "   ✅ Fichiers ajoutés" -ForegroundColor Green

# Étape 6 : Git commit
Write-Host ""
Write-Host "5. Commit..." -ForegroundColor Yellow
$commitMessage = "Fix: Page blanche corrigée - configuration simplifiée"
git commit -m $commitMessage
Write-Host "   ✅ Commit créé" -ForegroundColor Green

# Étape 7 : Git push
Write-Host ""
Write-Host "6. Push vers GitHub..." -ForegroundColor Yellow
git push origin main
if ($LASTEXITCODE -ne 0) {
    Write-Host "   ❌ Le push a échoué. Vérifiez votre connexion GitHub." -ForegroundColor Red
    exit 1
}
Write-Host "   ✅ Push réussi" -ForegroundColor Green

# Étape 8 : Informations finales
Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  DEPLOIEMENT EN COURS" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "✅ Votre code a été envoyé sur GitHub" -ForegroundColor Green
Write-Host "⏳ Cloudflare va déployer votre site dans 2-3 minutes" -ForegroundColor Yellow
Write-Host ""
Write-Host "📊 Pour suivre le déploiement :" -ForegroundColor Cyan
Write-Host "   https://dash.cloudflare.com/b909407c9d4fcef1c9232d039138b851" -ForegroundColor White
Write-Host ""
Write-Host "🌐 Votre site sera bientôt disponible sur :" -ForegroundColor Cyan
Write-Host "   https://zyatria-global.pages.dev" -ForegroundColor White
Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
