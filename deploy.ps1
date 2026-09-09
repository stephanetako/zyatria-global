# Déploiement ZyatrIA Global
Write-Host "🧹 Nettoyage..." -ForegroundColor Yellow
Remove-Item -Recurse -Force dist -ErrorAction SilentlyContinue

Write-Host "🔨 Build..." -ForegroundColor Yellow
npm run build

Write-Host "🚀 Déploiement..." -ForegroundColor Yellow
npx wrangler pages deploy dist/client --project-name=zyatria-global --branch=main

Write-Host "✅ Terminé!" -ForegroundColor Green
