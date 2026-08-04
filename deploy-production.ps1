#!/usr/bin/env pwsh
# Script de déploiement en production pour zyatria-global

Write-Host ""
Write-Host "🚀 DÉPLOIEMENT EN PRODUCTION" -ForegroundColor Cyan
Write-Host "============================" -ForegroundColor Cyan
Write-Host ""

# Nettoyer .wrangler
Write-Host "🧹 Nettoyage de la configuration..." -ForegroundColor Yellow
if (Test-Path ".wrangler") {
    Remove-Item -Recurse -Force ".wrangler"
    Write-Host "   ✅ Configuration nettoyée" -ForegroundColor Green
}

Write-Host ""

# Build
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

# Deploy
Write-Host "🌐 Déploiement sur Cloudflare..." -ForegroundColor Yellow
npx wrangler pages deploy dist --project-name=zyatria-global --branch=main --commit-dirty=true

if ($LASTEXITCODE -ne 0) {
    Write-Host ""
    Write-Host "❌ Erreur lors du déploiement !" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "🎉 DÉPLOIEMENT RÉUSSI !" -ForegroundColor Green
Write-Host ""
Write-Host "🌐 URLs du site :" -ForegroundColor Yellow
Write-Host "   📍 https://zyatria-global.pages.dev" -ForegroundColor Cyan
Write-Host "   📍 https://main.zyatria-global.pages.dev" -ForegroundColor Cyan
Write-Host ""
Write-Host "📋 Prochaines étapes :" -ForegroundColor Yellow
Write-Host "   1. Configurer le domaine zyatria.global" -ForegroundColor White
Write-Host "   2. Tester le site en production" -ForegroundColor White
Write-Host ""
