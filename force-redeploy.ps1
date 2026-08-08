# 🚀 Force Redeploy Cloudflare
Write-Host "🚀 FORCE REDEPLOY CLOUDFLARE" -ForegroundColor Cyan
Write-Host "=============================" -ForegroundColor Cyan
Write-Host ""

# 1. Clean build
Write-Host "🧹 Nettoyage..." -ForegroundColor Yellow
if (Test-Path "dist") {
    Remove-Item -Recurse -Force "dist"
    Write-Host "✅ Dossier dist supprimé" -ForegroundColor Green
}

if (Test-Path ".astro") {
    Remove-Item -Recurse -Force ".astro"
    Write-Host "✅ Cache Astro supprimé" -ForegroundColor Green
}

if (Test-Path "node_modules/.vite") {
    Remove-Item -Recurse -Force "node_modules/.vite"
    Write-Host "✅ Cache Vite supprimé" -ForegroundColor Green
}

Write-Host ""

# 2. Build
Write-Host "📦 Build du projet..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Erreur lors du build" -ForegroundColor Red
    pause
    exit 1
}

Write-Host "✅ Build réussi" -ForegroundColor Green
Write-Host ""

# 3. Deploy
Write-Host "🚀 Déploiement sur Cloudflare..." -ForegroundColor Yellow
npx wrangler pages deploy dist --project-name=zyatria-global

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Erreur lors du déploiement" -ForegroundColor Red
    pause
    exit 1
}

Write-Host ""
Write-Host "✅ DEPLOIEMENT REUSSI !" -ForegroundColor Green
Write-Host ""
Write-Host "🌐 Testez votre site:" -ForegroundColor Cyan
Write-Host "https://zyatria-global.zyatria-contact.workers.dev" -ForegroundColor White
Write-Host ""
Write-Host "⏳ Attendez 2-3 minutes pour que le cache se vide" -ForegroundColor Yellow
Write-Host ""
pause
