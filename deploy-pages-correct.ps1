#!/usr/bin/env pwsh
# Déploiement Cloudflare Pages avec la bonne configuration

Write-Host ""
Write-Host "🚀 DÉPLOIEMENT CLOUDFLARE PAGES" -ForegroundColor Cyan
Write-Host "================================" -ForegroundColor Cyan
Write-Host ""

# Vérifier que dist existe
if (-not (Test-Path "dist")) {
    Write-Host "❌ Le dossier dist n'existe pas !" -ForegroundColor Red
    Write-Host "   Exécutez d'abord : npm run build" -ForegroundColor Yellow
    exit 1
}

# Compter les fichiers
$totalFiles = (Get-ChildItem -Path "dist" -Recurse -File).Count
Write-Host "📊 Fichiers dans dist/ : $totalFiles" -ForegroundColor Green

$workerFiles = (Get-ChildItem -Path "dist/_worker.js" -Recurse -File -ErrorAction SilentlyContinue).Count
Write-Host "📊 Fichiers dans _worker.js/ : $workerFiles" -ForegroundColor Green

$staticFiles = (Get-ChildItem -Path "dist" -File).Count
Write-Host "📊 Fichiers statiques : $staticFiles" -ForegroundColor Green
Write-Host ""

# Supprimer le cache
Remove-Item -Recurse -Force .wrangler -ErrorAction SilentlyContinue

Write-Host "🚀 Déploiement en cours..." -ForegroundColor Yellow
Write-Host ""

# Déployer avec wrangler pages deploy
# Cloudflare Pages détecte automatiquement _worker.js/ et _routes.json
npx wrangler pages deploy dist --project-name=zyatria --branch=main --commit-dirty=true

Write-Host ""
Write-Host "✅ Déploiement terminé !" -ForegroundColor Green
Write-Host ""
