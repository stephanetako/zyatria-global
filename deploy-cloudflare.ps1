# Deploy to Cloudflare Pages
# This script builds and deploys the project

Write-Host "🚀 Building project..." -ForegroundColor Cyan
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Build failed!" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "✅ Build successful!" -ForegroundColor Green
Write-Host ""
Write-Host "📤 Deploying to Cloudflare Pages..." -ForegroundColor Cyan

wrangler pages deploy dist --project-name=zyatria-global

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "✨ Deployment successful!" -ForegroundColor Green
    Write-Host ""
    Write-Host "🌐 Your site is live at:" -ForegroundColor Cyan
    Write-Host "   https://master.zyatria-global-cve.pages.dev" -ForegroundColor Yellow
} else {
    Write-Host ""
    Write-Host "❌ Deployment failed!" -ForegroundColor Red
    exit 1
}
