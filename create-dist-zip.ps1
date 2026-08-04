#!/usr/bin/env pwsh
# Script pour créer un ZIP du dossier dist pour upload manuel

Write-Host "🔧 Création du ZIP pour déploiement manuel..." -ForegroundColor Cyan

# Vérifier que dist existe
if (-not (Test-Path "dist")) {
    Write-Host "❌ Le dossier dist n'existe pas. Lancez 'npm run build' d'abord." -ForegroundColor Red
    exit 1
}

# Créer le ZIP
$zipPath = "zyatria-dist.zip"
if (Test-Path $zipPath) {
    Remove-Item $zipPath -Force
}

Write-Host "📦 Compression en cours..." -ForegroundColor Yellow
Compress-Archive -Path "dist\*" -DestinationPath $zipPath -Force

Write-Host "✅ ZIP créé : $zipPath" -ForegroundColor Green
Write-Host ""
Write-Host "📤 PROCHAINES ÉTAPES :" -ForegroundColor Cyan
Write-Host "1. Allez sur https://dash.cloudflare.com" -ForegroundColor White
Write-Host "2. Pages → zyatria-global" -ForegroundColor White
Write-Host "3. Cliquez 'Upload assets'" -ForegroundColor White
Write-Host "4. Uploadez le fichier $zipPath" -ForegroundColor White
Write-Host ""
Write-Host "OU déployez directement avec :" -ForegroundColor Cyan
Write-Host "npx wrangler pages deploy dist --project-name=zyatria-global --branch=main" -ForegroundColor Yellow
