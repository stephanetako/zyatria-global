
#!/usr/bin/env pwsh
<#
.SYNOPSIS
    Script de déploiement automatique pour Cloudflare Pages
.DESCRIPTION
    Nettoie, rebuild et déploie le projet sur Cloudflare Pages
#>

Write-Host ""
Write-Host "🚀 DÉPLOIEMENT CLOUDFLARE PAGES" -ForegroundColor Cyan
Write-Host "================================" -ForegroundColor Cyan
Write-Host ""

# 1. Nettoyage
Write-Host "🧹 Nettoyage des fichiers de build..." -ForegroundColor Yellow
Remove-Item -Recurse -Force dist, .astro, .wrangler -ErrorAction SilentlyContinue
Write-Host "✅ Nettoyage terminé" -ForegroundColor Green
Write-Host ""

# 2. Build
Write-Host "🔨 Build du projet..." -ForegroundColor Yellow
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host ""
    Write-Host "❌ ERREUR LORS DU BUILD" -ForegroundColor Red
    exit 1
}
Write-Host "✅ Build réussi" -ForegroundColor Green
Write-Host ""

# 3. Suppression des fichiers wrangler.json problématiques
Write-Host "🔧 Suppression des fichiers wrangler.json..." -ForegroundColor Yellow
Get-ChildItem -Path dist -Filter "wrangler.json" -Recurse | Remove-Item -Force -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force .wrangler -ErrorAction SilentlyContinue
Write-Host "✅ Fichiers supprimés" -ForegroundColor Green
Write-Host ""

# 4. Déploiement
Write-Host "🌍 Déploiement sur Cloudflare Pages..." -ForegroundColor Yellow
wrangler pages deploy dist --project-name=zyatria-global-cve --commit-dirty=true

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "🎉 DÉPLOIEMENT RÉUSSI !" -ForegroundColor Green
    Write-Host "=======================" -ForegroundColor Green
    Write-Host ""
    Write-Host "🔗 URL principale: https://zyatria-global-cve.pages.dev" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "💡 Conseil: Poussez vos changements sur GitHub:" -ForegroundColor Yellow
    Write-Host "   git add ." -ForegroundColor Gray
    Write-Host "   git commit -m 'Deploy: Mise à jour du site'" -ForegroundColor Gray
    Write-Host "   git push origin main" -ForegroundColor Gray
    Write-Host ""
} else {
    Write-Host ""
    Write-Host "❌ ERREUR LORS DU DÉPLOIEMENT" -ForegroundColor Red
    exit 1
}

