# ═══════════════════════════════════════════════════════════
# 🚀 SCRIPT DE DÉPLOIEMENT ZYATRIA GLOBAL
# ═══════════════════════════════════════════════════════════

Write-Host ""
Write-Host "═══════════════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host "🚀 DÉPLOIEMENT ZYATRIA GLOBAL" -ForegroundColor Cyan
Write-Host "═══════════════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host ""

# Étape 1: Nettoyage
Write-Host "🧹 ÉTAPE 1/3: Nettoyage..." -ForegroundColor Yellow
Remove-Item -Recurse -Force dist -ErrorAction SilentlyContinue
Write-Host "   ✅ Dossier dist nettoyé" -ForegroundColor Green
Write-Host ""

# Étape 2: Build
Write-Host "🔨 ÉTAPE 2/3: Build du projet..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -eq 0) {
    Write-Host "   ✅ Build réussi!" -ForegroundColor Green
} else {
    Write-Host "   ❌ Erreur lors du build!" -ForegroundColor Red
    exit 1
}
Write-Host ""

# Étape 3: Déploiement
Write-Host "🚀 ÉTAPE 3/3: Déploiement sur Cloudflare..." -ForegroundColor Yellow
npx wrangler pages deploy dist/client --project-name=zyatria-global --branch=main --commit-dirty=true

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "═══════════════════════════════════════════════════════════" -ForegroundColor Green
    Write-Host "🎉 DÉPLOIEMENT RÉUSSI!" -ForegroundColor Green
    Write-Host "═══════════════════════════════════════════════════════════" -ForegroundColor Green
    Write-Host ""
    Write-Host "🌐 Votre site est en ligne!" -ForegroundColor Cyan
    Write-Host ""
} else {
    Write-Host ""
    Write-Host "❌ Erreur lors du déploiement!" -ForegroundColor Red
    exit 1
}

Write-Host "Appuyez sur une touche pour fermer..." -ForegroundColor Gray
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
