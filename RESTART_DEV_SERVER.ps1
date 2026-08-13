#!/usr/bin/env pwsh
# 🔄 REDÉMARRAGE COMPLET DU SERVEUR DE DÉVELOPPEMENT

Write-Host "🛑 Arrêt de tous les processus Node..." -ForegroundColor Yellow
Get-Process node -ErrorAction SilentlyContinue | Stop-Process -Force

Write-Host "🧹 Nettoyage du cache..." -ForegroundColor Cyan
Remove-Item -Path "node_modules/.vite" -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item -Path ".astro" -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item -Path "dist" -Recurse -Force -ErrorAction SilentlyContinue

Write-Host "✅ Cache nettoyé !" -ForegroundColor Green

Write-Host ""
Write-Host "🚀 MAINTENANT, EXÉCUTEZ CETTE COMMANDE :" -ForegroundColor Yellow
Write-Host "   npm run dev" -ForegroundColor Cyan
Write-Host ""
Write-Host "📱 Puis ouvrez : http://localhost:3000" -ForegroundColor Green
