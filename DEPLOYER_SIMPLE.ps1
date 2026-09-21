# ═══════════════════════════════════════════════════════════
# SCRIPT DE DÉPLOIEMENT SIMPLE - ZyatrIA Global
# ═══════════════════════════════════════════════════════════

Write-Host "╔══════════════════════════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "║     DÉPLOIEMENT ZYATRIA GLOBAL - MODE STATIC            ║" -ForegroundColor Cyan
Write-Host "╚══════════════════════════════════════════════════════════╝" -ForegroundColor Cyan
Write-Host ""

# Étape 1: Vérifier qu'on est dans le bon dossier
Write-Host "📁 Vérification du dossier..." -ForegroundColor Yellow
if (-not (Test-Path "package.json")) {
    Write-Host "❌ ERREUR: Vous n'êtes pas dans le dossier du projet!" -ForegroundColor Red
    Write-Host "   Naviguez vers le dossier zyatria-global d'abord:" -ForegroundColor Red
    Write-Host "   cd C:\Users\steph\OneDrive\Bureau\zyatria-global" -ForegroundColor Yellow
    exit 1
}
Write-Host "✅ Dossier correct" -ForegroundColor Green
Write-Host ""

# Étape 2: Vérifier la configuration Astro
Write-Host "⚙️  Vérification de la configuration..." -ForegroundColor Yellow
$configContent = Get-Content "astro.config.mjs" -Raw
if ($configContent -match "output:\s*['""]static['""]") {
    Write-Host "✅ Configuration correcte (mode static)" -ForegroundColor Green
} else {
    Write-Host "❌ Configuration incorrecte!" -ForegroundColor Red
    Write-Host "   Le fichier astro.config.mjs doit avoir: output: 'static'" -ForegroundColor Red
    exit 1
}
Write-Host ""

# Étape 3: Installer les dépendances
Write-Host "📦 Installation des dépendances..." -ForegroundColor Yellow
npm install
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Erreur lors de l'installation" -ForegroundColor Red
    exit 1
}
Write-Host "✅ Dépendances installées" -ForegroundColor Green
Write-Host ""

# Étape 4: Build du projet
Write-Host "🔨 Build du projet..." -ForegroundColor Yellow
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Erreur lors du build" -ForegroundColor Red
    exit 1
}
Write-Host "✅ Build réussi" -ForegroundColor Green
Write-Host ""

# Étape 5: Déploiement sur Cloudflare
Write-Host "🚀 Déploiement sur Cloudflare Pages..." -ForegroundColor Yellow
Write-Host "   (Vous devrez peut-être vous authentifier)" -ForegroundColor Cyan
Write-Host ""

npx wrangler pages deploy dist --project-name=zyatria-global

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "╔══════════════════════════════════════════════════════════╗" -ForegroundColor Green
    Write-Host "║              ✅ DÉPLOIEMENT RÉUSSI! ✅                  ║" -ForegroundColor Green
    Write-Host "╚══════════════════════════════════════════════════════════╝" -ForegroundColor Green
    Write-Host ""
    Write-Host "🌐 Votre site est en ligne à:" -ForegroundColor Cyan
    Write-Host "   https://zyatria-global.pages.dev" -ForegroundColor Yellow
    Write-Host ""
} else {
    Write-Host ""
    Write-Host "❌ Erreur lors du déploiement" -ForegroundColor Red
    Write-Host ""
    Write-Host "💡 Si vous voyez une erreur d'authentification:" -ForegroundColor Yellow
    Write-Host "   1. Exécutez: npx wrangler login" -ForegroundColor Cyan
    Write-Host "   2. Puis relancez ce script" -ForegroundColor Cyan
    Write-Host ""
}

Write-Host "Appuyez sur une touche pour fermer..." -ForegroundColor Gray
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
