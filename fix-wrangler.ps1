#!/usr/bin/env pwsh
Write-Host "🔧 Correction des fichiers wrangler.json..." -ForegroundColor Yellow

# Trouver tous les wrangler.json dans dist
$wranglerFiles = Get-ChildItem -Path dist -Filter "wrangler.json" -Recurse

foreach ($file in $wranglerFiles) {
    Write-Host "  Suppression: $($file.FullName)" -ForegroundColor Gray
    Remove-Item $file.FullName -Force
}

Write-Host "✅ Fichiers wrangler.json supprimés" -ForegroundColor Green
Write-Host ""
Write-Host "🚀 Déploiement..." -ForegroundColor Yellow

wrangler pages deploy dist --project-name=zyatria-global-cve

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "🎉 DÉPLOIEMENT RÉUSSI !" -ForegroundColor Green
    Write-Host "🔗 https://zyatria-global-cve.pages.dev" -ForegroundColor Cyan
}
