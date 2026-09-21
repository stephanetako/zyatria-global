#!/usr/bin/env pwsh
Write-Host ""
Write-Host "🚀 DÉPLOIEMENT RAPIDE" -ForegroundColor Cyan
Write-Host "====================" -ForegroundColor Cyan
Write-Host ""

# Vérifier que dist existe
if (!(Test-Path "dist")) {
    Write-Host "❌ Le dossier dist n'existe pas!" -ForegroundColor Red
    Write-Host "   Lancez d'abord: npm run build" -ForegroundColor Yellow
    exit 1
}

# Supprimer le fichier wrangler.json problématique
Write-Host "🔧 Nettoyage des fichiers problématiques..." -ForegroundColor Yellow
Remove-Item "dist\server\.prerender\wrangler.json" -ErrorAction SilentlyContinue
Write-Host "✅ Nettoyage terminé" -ForegroundColor Green
Write-Host ""

# Déployer
Write-Host "🚀 Déploiement sur Cloudflare..." -ForegroundColor Yellow
wrangler pages deploy dist --project-name=zyatria-global-cve

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "🎉 DÉPLOIEMENT RÉUSSI !" -ForegroundColor Green
    Write-Host "====================" -ForegroundColor Green
    Write-Host ""
    Write-Host "🔗 URL: https://zyatria-global-cve.pages.dev" -ForegroundColor Cyan
    Write-Host ""
} else {
    Write-Host ""
    Write-Host "❌ ERREUR LORS DU DÉPLOIEMENT" -ForegroundColor Red
    Write-Host ""
    exit 1
}
