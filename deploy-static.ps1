# Script de déploiement automatique pour Cloudflare Pages (mode statique)
Write-Host "🚀 Déploiement de ZyatrIA Global..." -ForegroundColor Cyan
Remove-Item -Recurse -Force dist, .astro -ErrorAction SilentlyContinue
npm run build
if (Test-Path dist\_routes.json) { Remove-Item dist\_routes.json }
npx wrangler pages deploy dist --project-name=zyatria-global --branch=production --commit-dirty=true
git add .
git commit -m "Deploy: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
git push origin main
Write-Host "✅ Déploiement terminé !" -ForegroundColor Green
