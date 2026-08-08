# 🚀 Déploiement Cloudflare Worker
Write-Host "🚀 DEPLOIEMENT CLOUDFLARE WORKER" -ForegroundColor Cyan
Write-Host "=================================" -ForegroundColor Cyan
Write-Host ""

# Build
Write-Host "📦 Build du projet..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Erreur lors du build" -ForegroundColor Red
    pause
    exit 1
}

Write-Host "✅ Build réussi" -ForegroundColor Green
Write-Host ""

# Deploy
Write-Host "🚀 Déploiement sur Cloudflare..." -ForegroundColor Yellow
npx wrangler pages deploy dist --project-name=zyatria-global

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Erreur lors du déploiement" -ForegroundColor Red
    Write-Host ""
    Write-Host "Connectez-vous d'abord:" -ForegroundColor Yellow
    Write-Host "npx wrangler login" -ForegroundColor White
    pause
    exit 1
}

Write-Host ""
Write-Host "✅ DEPLOIEMENT REUSSI !" -ForegroundColor Green
Write-Host ""
Write-Host "🌐 Votre site est disponible sur:" -ForegroundColor Cyan
Write-Host "https://zyatria-global.zyatria-contact.workers.dev" -ForegroundColor White
Write-Host ""
pause
