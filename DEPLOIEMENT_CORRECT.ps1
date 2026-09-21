# ========================================
# SCRIPT DE DÉPLOIEMENT CORRECT
# ========================================

Write-Host "🧹 1. Nettoyage..." -ForegroundColor Cyan
Remove-Item -Recurse -Force dist, .astro -ErrorAction SilentlyContinue

Write-Host "`n🔨 2. Build du projet..." -ForegroundColor Cyan
npm run build

Write-Host "`n🚀 3. Déploiement sur Cloudflare..." -ForegroundColor Cyan
npx wrangler pages deploy dist --project-name=zyatria-global --branch=main

Write-Host "`n✅ DÉPLOIEMENT TERMINÉ !" -ForegroundColor Green
Write-Host "📋 Vérifiez l'URL affichée ci-dessus" -ForegroundColor Yellow
