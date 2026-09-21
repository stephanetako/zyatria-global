# Script de déploiement ZyatrIA Global - MODE DIRECTORY
Write-Host "🚀 Déploiement en cours..." -ForegroundColor Cyan

# Nettoyer
Remove-Item -Recurse -Force dist, .astro, .wrangler, node_modules\.vite -ErrorAction SilentlyContinue

# Build
npm run build

# Supprimer les fichiers problématiques APRÈS le build
Remove-Item "dist\server\wrangler.json" -Force -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force "dist\server\.prerender" -ErrorAction SilentlyContinue

Write-Host "`n✅ Fichiers problématiques supprimés" -ForegroundColor Green

# Déployer le dossier dist (mode directory)
npx wrangler pages deploy dist --project-name=zyatria-global --commit-dirty=true

Write-Host "`n✅ Déploiement terminé!" -ForegroundColor Green
Write-Host "🌐 URL: https://zyatria-global.pages.dev" -ForegroundColor Cyan
