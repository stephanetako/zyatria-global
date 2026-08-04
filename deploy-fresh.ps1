#!/usr/bin/env pwsh
# Déploiement sur un NOUVEAU projet Cloudflare

Write-Host ""
Write-Host "🚀 DÉPLOIEMENT NOUVEAU PROJET" -ForegroundColor Cyan
Write-Host "==============================" -ForegroundColor Cyan
Write-Host ""

# Supprimer le cache local
Remove-Item -Recurse -Force .wrangler -ErrorAction SilentlyContinue

Write-Host "📊 Vérification des fichiers..." -ForegroundColor Yellow
$fileCount = (Get-ChildItem -Path "dist" -Recurse -File).Count
Write-Host "   Fichiers à déployer : $fileCount" -ForegroundColor Green
Write-Host ""

Write-Host "🚀 Déploiement sur NOUVEAU projet..." -ForegroundColor Yellow
Write-Host ""

# Déployer sur un nouveau projet
npx wrangler pages deploy dist --project-name=zyatria --branch=main

Write-Host ""
Write-Host "✅ Déploiement terminé !" -ForegroundColor Green
Write-Host ""
