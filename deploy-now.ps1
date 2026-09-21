#!/usr/bin/env pwsh
# Script de déploiement Cloudflare - Version Simple
Write-Host ""
Write-Host "🚀 DÉPLOIEMENT CLOUDFLARE" -ForegroundColor Cyan
Write-Host "=========================" -ForegroundColor Cyan
Write-Host ""

# Étape 1: Nettoyer
Write-Host "🧹 Nettoyage..." -ForegroundColor Yellow
Remove-Item -Recurse -Force dist, .astro, node_modules/.vite -ErrorAction SilentlyContinue
Write-Host "✅ Nettoyage terminé" -ForegroundColor Green
Write-Host ""

# Étape 2: Build
Write-Host "🏗️  Build du projet..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host ""
    Write-Host "❌ ERREUR : Le build a échoué!" -ForegroundColor Red
    Write-Host ""
    exit 1
}

Write-Host "✅ Build réussi" -ForegroundColor Green
Write-Host ""

# Étape 3: Détecter le dossier à déployer
Write-Host "🔍 Détection du mode..." -ForegroundColor Yellow
if (Test-Path "dist/_worker.js") {
    $deployPath = "dist"
    Write-Host "✅ Mode server détecté" -ForegroundColor Green
} elseif (Test-Path "dist/client") {
    $deployPath = "dist/client"
    Write-Host "✅ Mode hybrid détecté" -ForegroundColor Green
} else {
    $deployPath = "dist"
    Write-Host "✅ Mode static détecté" -ForegroundColor Green
}
Write-Host ""

# Étape 4: Déployer
Write-Host "🚀 Déploiement sur Cloudflare..." -ForegroundColor Yellow
wrangler pages deploy $deployPath --project-name=zyatria-global-cve

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "🎉 DÉPLOIEMENT RÉUSSI !" -ForegroundColor Green
    Write-Host "=========================" -ForegroundColor Green
    Write-Host ""
    Write-Host "🔗 URL: https://zyatria-global-cve.pages.dev" -ForegroundColor Cyan
    Write-Host ""
} else {
    Write-Host ""
    Write-Host "❌ ERREUR LORS DU DÉPLOIEMENT" -ForegroundColor Red
    Write-Host ""
    exit 1
}
