#!/usr/bin/env pwsh

Write-Host "🔥 PURGE CACHE CLOUDFLARE + REDÉPLOIEMENT" -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host ""

# 1. Build local
Write-Host "📦 Building project..." -ForegroundColor Yellow
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Build failed!" -ForegroundColor Red
    exit 1
}
Write-Host "✅ Build successful!" -ForegroundColor Green
Write-Host ""

# 2. Commit et push
Write-Host "📤 Pushing to GitHub..." -ForegroundColor Yellow
git add .
git commit -m "Fix: Force client:only React hydration + cache purge"
git push origin master
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Push failed!" -ForegroundColor Red
    exit 1
}
Write-Host "✅ Pushed to GitHub!" -ForegroundColor Green
Write-Host ""

# 3. Instructions pour purger le cache
Write-Host "🔥 MAINTENANT, PURGEZ LE CACHE CLOUDFLARE:" -ForegroundColor Cyan
Write-Host ""
Write-Host "1. Allez sur: https://dash.cloudflare.com" -ForegroundColor White
Write-Host "2. Workers & Pages → zyatria-global" -ForegroundColor White
Write-Host "3. Onglet 'Settings'" -ForegroundColor White
Write-Host "4. Cliquez sur 'Purge Cache' ou 'Clear Cache'" -ForegroundColor White
Write-Host ""
Write-Host "OU utilisez l'API Cloudflare si vous avez la clé:" -ForegroundColor Yellow
Write-Host ""
Write-Host "curl -X POST 'https://api.cloudflare.com/client/v4/zones/YOUR_ZONE_ID/purge_cache' \" -ForegroundColor Gray
Write-Host "  -H 'Authorization: Bearer YOUR_API_TOKEN' \" -ForegroundColor Gray
Write-Host "  -H 'Content-Type: application/json' \" -ForegroundColor Gray
Write-Host "  --data '{\"purge_everything\":true}'" -ForegroundColor Gray
Write-Host ""
Write-Host "⏱️  Attendez 2-3 minutes après le déploiement" -ForegroundColor Yellow
Write-Host "🔄 Puis rechargez avec Ctrl+Shift+R" -ForegroundColor Yellow
Write-Host ""
Write-Host "✅ Script terminé!" -ForegroundColor Green
