# Script de déploiement automatique pour Cloudflare Pages (mode statique)
# Auteur: ZyatrIA Global
# Date: 2026-09-14

Write-Host "🚀 Déploiement de ZyatrIA Global sur Cloudflare Pages..." -ForegroundColor Cyan
Write-Host ""

# 1. Nettoyer les anciens builds
Write-Host "🧹 Nettoyage des anciens builds..." -ForegroundColor Yellow
Remove-Item -Recurse -Force dist, .astro -ErrorAction SilentlyContinue
Write-Host "✅ Nettoyage terminé" -ForegroundColor Green
Write-Host ""

# 2. Build du projet
Write-Host "🔨 Build du projet..." -ForegroundColor Yellow
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Erreur lors du build" -ForegroundColor Red
    exit 1
}
Write-Host "✅ Build réussi" -ForegroundColor Green
Write-Host ""

# 3. Vérifier que index.html existe
if (Test-Path dist\index.html) {
    Write-Host "✅ index.html trouvé" -ForegroundColor Green
} else {
    Write-Host "❌ index.html introuvable" -ForegroundColor Red
    exit 1
}
Write-Host ""

# 4. Supprimer _routes.json s'il existe (pour éviter les erreurs)
if (Test-Path dist\_routes.json) {
    Write-Host "🗑️ Suppression de _routes.json..." -ForegroundColor Yellow
    Remove-Item dist\_routes.json -ErrorAction SilentlyContinue
    Write-Host "✅ _routes.json supprimé" -ForegroundColor Green
    Write-Host ""
}

# 5. Déployer sur Cloudflare Pages
Write-Host "☁️ Déploiement sur Cloudflare Pages..." -ForegroundColor Yellow
npx wrangler pages deploy dist --project-name=zyatria-global --branch=production --commit-dirty=true
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Erreur lors du déploiement" -ForegroundColor Red
    exit 1
}
Write-Host ""
Write-Host "✅ Déploiement réussi !" -ForegroundColor Green
Write-Host ""

# 6. Pousser sur GitHub
Write-Host "📤 Push sur GitHub..." -ForegroundColor Yellow
git add .
git commit -m "Deploy: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
git push origin main
if ($LASTEXITCODE -ne 0) {
    Write-Host "⚠️ Erreur lors du push GitHub (non bloquant)" -ForegroundColor Yellow
} else {
    Write-Host "✅ Push GitHub réussi" -ForegroundColor Green
}
Write-Host ""

Write-Host "🎉 Déploiement terminé avec succès !" -ForegroundColor Cyan
Write-Host "🌐 URL de production: https://production.zyatria-global-cve.pages.dev" -ForegroundColor Cyan
Write-Host ""
