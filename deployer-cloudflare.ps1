# Script PowerShell pour déploiement Cloudflare
# Encodage UTF-8
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

Write-Host ""
Write-Host "╔════════════════════════════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "║                                                            ║" -ForegroundColor Cyan
Write-Host "║     🚀 DÉPLOIEMENT CLOUDFLARE - ZYATRIA GLOBAL 🚀        ║" -ForegroundColor Cyan
Write-Host "║                                                            ║" -ForegroundColor Cyan
Write-Host "╚════════════════════════════════════════════════════════════╝" -ForegroundColor Cyan
Write-Host ""

# Étape 1: Build
Write-Host "📦 Étape 1/3 - Construction du projet..." -ForegroundColor Yellow
Write-Host ""

npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host ""
    Write-Host "❌ ERREUR lors de la construction!" -ForegroundColor Red
    Write-Host ""
    Read-Host "Appuyez sur Entrée pour quitter"
    exit 1
}

Write-Host ""
Write-Host "✅ Construction réussie!" -ForegroundColor Green
Write-Host ""

# Étape 2: Login
Write-Host "🔐 Étape 2/3 - Authentification Cloudflare..." -ForegroundColor Yellow
Write-Host ""
Write-Host "⚠️  Si vous n'êtes pas connecté, une fenêtre de navigateur va s'ouvrir" -ForegroundColor Magenta
Write-Host ""

npx wrangler login

if ($LASTEXITCODE -ne 0) {
    Write-Host ""
    Write-Host "❌ ERREUR lors de l'authentification!" -ForegroundColor Red
    Write-Host ""
    Read-Host "Appuyez sur Entrée pour quitter"
    exit 1
}

Write-Host ""
Write-Host "✅ Authentification réussie!" -ForegroundColor Green
Write-Host ""

# Étape 3: Deploy
Write-Host "🚀 Étape 3/3 - Déploiement sur Cloudflare Pages..." -ForegroundColor Yellow
Write-Host ""

npx wrangler pages deploy dist --project-name=zyatria-global

if ($LASTEXITCODE -ne 0) {
    Write-Host ""
    Write-Host "❌ ERREUR lors du déploiement!" -ForegroundColor Red
    Write-Host ""
    Read-Host "Appuyez sur Entrée pour quitter"
    exit 1
}

Write-Host ""
Write-Host "╔════════════════════════════════════════════════════════════╗" -ForegroundColor Green
Write-Host "║                                                            ║" -ForegroundColor Green
Write-Host "║              ✅ DÉPLOIEMENT RÉUSSI! ✅                    ║" -ForegroundColor Green
Write-Host "║                                                            ║" -ForegroundColor Green
Write-Host "║     🌐 Votre site est maintenant en ligne!                ║" -ForegroundColor Green
Write-Host "║                                                            ║" -ForegroundColor Green
Write-Host "║     📍 URL: https://zyatria-global.pages.dev              ║" -ForegroundColor Green
Write-Host "║                                                            ║" -ForegroundColor Green
Write-Host "╚════════════════════════════════════════════════════════════╝" -ForegroundColor Green
Write-Host ""
Write-Host "🎉 Félicitations! Votre site est déployé!" -ForegroundColor Cyan
Write-Host ""

Read-Host "Appuyez sur Entrée pour quitter"
