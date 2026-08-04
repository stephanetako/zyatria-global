#!/usr/bin/env pwsh
# Correction de la configuration Wrangler corrompue

Write-Host ""
Write-Host "🔧 CORRECTION CONFIGURATION WRANGLER" -ForegroundColor Cyan
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host ""

# Supprimer le dossier .wrangler corrompu
Write-Host "🗑️  Suppression de la configuration corrompue..." -ForegroundColor Yellow
if (Test-Path ".wrangler") {
    Remove-Item -Recurse -Force ".wrangler"
    Write-Host "   ✅ Dossier .wrangler supprimé" -ForegroundColor Green
} else {
    Write-Host "   ℹ️  Dossier .wrangler n'existe pas" -ForegroundColor Gray
}

Write-Host ""
Write-Host "📦 Build du projet..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host ""
    Write-Host "❌ Erreur lors du build !" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "✅ Build terminé avec succès !" -ForegroundColor Green
Write-Host ""

Write-Host "🌐 Déploiement sur Cloudflare..." -ForegroundColor Yellow
npx wrangler pages deploy dist --project-name=zyatria --branch=main --commit-dirty=true

if ($LASTEXITCODE -ne 0) {
    Write-Host ""
    Write-Host "❌ Erreur lors du déploiement !" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "🎉 DÉPLOIEMENT RÉUSSI !" -ForegroundColor Green
Write-Host ""
Write-Host "🌐 URLs du site :" -ForegroundColor Yellow
Write-Host "   📍 https://zyatria.pages.dev" -ForegroundColor Cyan
Write-Host "   📍 https://main.zyatria.pages.dev" -ForegroundColor Cyan
Write-Host ""
