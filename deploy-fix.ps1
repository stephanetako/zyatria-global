#!/usr/bin/env pwsh
# 🚀 DÉPLOIEMENT RAPIDE - FIX CLIENT:ONLY

Write-Host "🔨 Building..." -ForegroundColor Cyan
npm run build

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Build réussi!" -ForegroundColor Green
    Write-Host ""
    Write-Host "🚀 Déploiement sur Cloudflare..." -ForegroundColor Cyan
    npx wrangler deploy
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host ""
        Write-Host "🎉 DÉPLOIEMENT RÉUSSI!" -ForegroundColor Green
        Write-Host "🌐 Votre site: https://zyatria-global.zyatria-contact.workers.dev" -ForegroundColor Yellow
        Write-Host ""
        Write-Host "⏳ Attendez 30 secondes puis testez le site" -ForegroundColor Cyan
    } else {
        Write-Host "❌ Erreur de déploiement" -ForegroundColor Red
    }
} else {
    Write-Host "❌ Erreur de build" -ForegroundColor Red
}
