#!/usr/bin/env pwsh
# Nettoyage des anciens projets Cloudflare

Write-Host ""
Write-Host "🗑️  NETTOYAGE CLOUDFLARE PAGES" -ForegroundColor Cyan
Write-Host "===============================" -ForegroundColor Cyan
Write-Host ""

Write-Host "📋 Projets actuels :" -ForegroundColor Yellow
npx wrangler pages project list

Write-Host ""
Write-Host "🗑️  Suppression des anciens projets..." -ForegroundColor Yellow
Write-Host ""

# Supprimer zyatria-global
Write-Host "   Suppression de zyatria-global..." -ForegroundColor Red
npx wrangler pages project delete zyatria-global --yes

# Supprimer zyatria-final
Write-Host "   Suppression de zyatria-final..." -ForegroundColor Red
npx wrangler pages project delete zyatria-final --yes

# Supprimer zyatria-site
Write-Host "   Suppression de zyatria-site..." -ForegroundColor Red
npx wrangler pages project delete zyatria-site --yes

Write-Host ""
Write-Host "📋 Projets restants :" -ForegroundColor Green
npx wrangler pages project list

Write-Host ""
Write-Host "✅ Nettoyage terminé !" -ForegroundColor Green
Write-Host "   Il ne reste que : zyatria (qui fonctionne)" -ForegroundColor Green
Write-Host ""
