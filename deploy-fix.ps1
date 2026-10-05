# Script de déploiement avec correction automatique
Write-Host "🚀 Déploiement ZyatrIA Global" -ForegroundColor Cyan
Write-Host ""

# Étape 1: Build
Write-Host "📦 Étape 1/3: Build du projet..." -ForegroundColor Yellow
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Erreur lors du build" -ForegroundColor Red
    exit 1
}

Write-Host "✅ Build réussi!" -ForegroundColor Green
Write-Host ""

# Étape 2: Vérification
Write-Host "🔍 Étape 2/3: Vérification de la configuration..." -ForegroundColor Yellow
$wranglerConfig = Get-Content "dist\server\wrangler.json" -Raw | ConvertFrom-Json
if ($wranglerConfig.assets) {
    Write-Host "⚠️  Binding ASSETS détecté - correction en cours..." -ForegroundColor Yellow
    node fix-wrangler-config.js
} else {
    Write-Host "✅ Configuration correcte!" -ForegroundColor Green
}
Write-Host ""

# Étape 3: Déploiement
Write-Host "🌐 Étape 3/3: Déploiement sur Cloudflare Pages..." -ForegroundColor Yellow
npx wrangler pages deploy dist
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Erreur lors du déploiement" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "🎉 Déploiement réussi!" -ForegroundColor Green
Write-Host "🌐 Votre site: https://zyatria-global-cve.pages.dev" -ForegroundColor Cyan
