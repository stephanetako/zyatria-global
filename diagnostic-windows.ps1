#!/usr/bin/env pwsh
# Diagnostic des projets Cloudflare

Write-Host ""
Write-Host "🔍 DIAGNOSTIC CLOUDFLARE PAGES" -ForegroundColor Cyan
Write-Host "===============================" -ForegroundColor Cyan
Write-Host ""

Write-Host "📋 Liste des projets Cloudflare :" -ForegroundColor Yellow
npx wrangler pages project list

Write-Host ""
Write-Host "📊 Informations sur zyatria :" -ForegroundColor Yellow
npx wrangler pages deployment list --project-name=zyatria | Select-Object -First 10

Write-Host ""
Write-Host "📊 Informations sur zyatria-global :" -ForegroundColor Yellow
npx wrangler pages deployment list --project-name=zyatria-global | Select-Object -First 10

Write-Host ""
Write-Host "✅ Diagnostic terminé !" -ForegroundColor Green
Write-Host ""
