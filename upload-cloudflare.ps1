#!/usr/bin/env pwsh
# Script pour préparer le déploiement manuel sur Cloudflare

Write-Host ""
Write-Host "🚀 PRÉPARATION DU DÉPLOIEMENT CLOUDFLARE" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Vérifier que dist existe
if (-not (Test-Path "dist")) {
    Write-Host "❌ Le dossier dist n'existe pas." -ForegroundColor Red
    Write-Host "   Lancez d'abord : npm run build" -ForegroundColor Yellow
    exit 1
}

# Compter les fichiers
$fileCount = (Get-ChildItem -Path "dist" -Recurse -File).Count
Write-Host "📊 Fichiers à déployer : $fileCount" -ForegroundColor Green
Write-Host ""

# Créer le ZIP
$zipPath = "zyatria-dist.zip"
if (Test-Path $zipPath) {
    Write-Host "🗑️  Suppression de l'ancien ZIP..." -ForegroundColor Yellow
    Remove-Item $zipPath -Force
}

Write-Host "📦 Création du ZIP..." -ForegroundColor Cyan
Compress-Archive -Path "dist\*" -DestinationPath $zipPath -Force

$zipSize = [math]::Round((Get-Item $zipPath).Length / 1MB, 2)
Write-Host "✅ ZIP créé : $zipPath ($zipSize MB)" -ForegroundColor Green
Write-Host ""

Write-Host "📤 PROCHAINES ÉTAPES :" -ForegroundColor Cyan
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor DarkGray
Write-Host ""
Write-Host "1️⃣  Ouvrez votre navigateur :" -ForegroundColor White
Write-Host "   https://dash.cloudflare.com" -ForegroundColor Yellow
Write-Host ""
Write-Host "2️⃣  Naviguez vers :" -ForegroundColor White
Write-Host "   Pages → zyatria-global" -ForegroundColor Yellow
Write-Host ""
Write-Host "3️⃣  Cliquez sur :" -ForegroundColor White
Write-Host "   'Upload assets' (bouton en haut à droite)" -ForegroundColor Yellow
Write-Host ""
Write-Host "4️⃣  Uploadez le fichier :" -ForegroundColor White
Write-Host "   $zipPath" -ForegroundColor Yellow
Write-Host ""
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor DarkGray
Write-Host ""
Write-Host "💡 ALTERNATIVE : Connexion GitHub automatique" -ForegroundColor Cyan
Write-Host "   Voir le fichier : 📤_DEPLOIEMENT_MANUEL_CLOUDFLARE.md" -ForegroundColor White
Write-Host ""
