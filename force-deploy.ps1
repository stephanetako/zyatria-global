#!/usr/bin/env pwsh

Write-Host "🔥 DÉPLOIEMENT FORCÉ AVEC PURGE DE CACHE" -ForegroundColor Cyan
Write-Host "=========================================" -ForegroundColor Cyan
Write-Host ""

# 1. Clean build
Write-Host "🧹 Nettoyage..." -ForegroundColor Yellow
Remove-Item -Recurse -Force dist -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force .astro -ErrorAction SilentlyContinue

# 2. Build fresh
Write-Host "🔨 Build..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Build échoué!" -ForegroundColor Red
    exit 1
}

# 3. Deploy
Write-Host "🚀 Déploiement..." -ForegroundColor Yellow
npx wrangler deploy --compatibility-date=2024-01-01

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Déploiement échoué!" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "✅ DÉPLOIEMENT TERMINÉ!" -ForegroundColor Green
Write-Host ""
Write-Host "⏳ ATTENDEZ 2 MINUTES puis:" -ForegroundColor Yellow
Write-Host "   1. Ouvrez Chrome en navigation privée (Ctrl+Shift+N)" -ForegroundColor White
Write-Host "   2. Allez sur: https://zyatria-global.zyatria-contact.workers.dev" -ForegroundColor White
Write-Host "   3. Faites Ctrl+Shift+R pour forcer le rechargement" -ForegroundColor White
Write-Host ""
