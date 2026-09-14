# Script de déploiement ZyatrIA Global
Write-Host "🚀 Déploiement en cours..." -ForegroundColor Cyan

# Nettoyer
Remove-Item -Recurse -Force dist, .astro, .wrangler -ErrorAction SilentlyContinue

# Build
npm run build

# Supprimer les fichiers problématiques APRÈS le build
Remove-Item "dist\server\wrangler.json" -Force -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force "dist\server\.prerender" -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force ".wrangler" -ErrorAction SilentlyContinue

Write-Host "'n✅ Fichiers problématiques supprimés" -ForegroundColor Green

# Déployer
npx wrangler pages deploy dist --project-name=zyatria-global --commit-dirty=true

Write-Host "'n✅ Déploiement terminé!" -ForegroundColor Green
Write-Host "🌐 URL: https://main-fixed.zyatria-global-cve.pages.dev" -ForegroundColor Cyan
