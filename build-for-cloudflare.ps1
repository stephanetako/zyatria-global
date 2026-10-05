Write-Host "🚀 Building ZyatrIA Global for Cloudflare Pages (SERVER MODE)" -ForegroundColor Cyan
Write-Host "============================================================" -ForegroundColor Cyan
Write-Host ""

# Clean previous build
Write-Host "🧹 Cleaning previous build..." -ForegroundColor Yellow
if (Test-Path "dist") { Remove-Item -Recurse -Force "dist" }
if (Test-Path ".astro") { Remove-Item -Recurse -Force ".astro" }

# Install dependencies
Write-Host "📦 Installing dependencies..." -ForegroundColor Yellow
npm ci --prefer-offline --no-audit

# Build in server mode
Write-Host "🔨 Building in SERVER mode..." -ForegroundColor Yellow
npm run build

# Verify _worker.js exists
if (Test-Path "dist/_worker.js") {
    Write-Host "✅ SUCCESS: _worker.js generated (SERVER MODE)" -ForegroundColor Green
    $fileSize = (Get-Item "dist/_worker.js").Length / 1KB
    Write-Host "📊 File size: $([math]::Round($fileSize, 2)) KB" -ForegroundColor Green
} else {
    Write-Host "❌ ERROR: _worker.js NOT found (STATIC MODE detected)" -ForegroundColor Red
    Write-Host "🔍 Checking dist/ contents..." -ForegroundColor Yellow
    Get-ChildItem "dist" -Force
    exit 1
}

Write-Host ""
Write-Host "✨ Build complete and ready for Cloudflare Pages!" -ForegroundColor Green
Write-Host "📁 Output directory: dist/" -ForegroundColor Cyan
Write-Host ""
