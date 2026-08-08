# Déploiement avec branche master
Write-Host "🚀 Déploiement sur Cloudflare Pages (branche master)..." -ForegroundColor Cyan

# Build
Write-Host "`n📦 Build du projet..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n✅ Build réussi!" -ForegroundColor Green
    
    # Deploy
    Write-Host "`n🌐 Déploiement..." -ForegroundColor Yellow
    npx wrangler pages deploy dist --project-name=zyatria-global-cve --branch=master --commit-dirty=true
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "`n🎉 DÉPLOIEMENT RÉUSSI!" -ForegroundColor Green
        Write-Host "`n📍 URLs:" -ForegroundColor Cyan
        Write-Host "   Production: https://zyatria-global-cve.pages.dev" -ForegroundColor White
        Write-Host "   Master: https://master.zyatria-global-cve.pages.dev" -ForegroundColor White
    } else {
        Write-Host "`n❌ Erreur lors du déploiement" -ForegroundColor Red
    }
} else {
    Write-Host "`n❌ Erreur lors du build" -ForegroundColor Red
}
