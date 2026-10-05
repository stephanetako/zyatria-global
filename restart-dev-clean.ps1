#!/usr/bin/env pwsh

Write-Host "🔄 Nettoyage et redémarrage du serveur de développement..." -ForegroundColor Cyan

# Arrêter le serveur Astro existant
Write-Host "⏹️  Arrêt du serveur Astro..." -ForegroundColor Yellow
try {
    npx astro dev stop 2>$null
    Start-Sleep -Seconds 1
} catch {
    Write-Host "Aucun serveur à arrêter" -ForegroundColor Gray
}

# Tuer tous les processus Node qui pourraient bloquer
Write-Host "⏹️  Arrêt des processus Node..." -ForegroundColor Yellow
Get-Process -Name node -ErrorAction SilentlyContinue | Stop-Process -Force -ErrorAction SilentlyContinue
Start-Sleep -Seconds 2

# Libérer les ports
Write-Host "🔓 Libération des ports..." -ForegroundColor Yellow
$ports = @(3000, 4321)
foreach ($port in $ports) {
    $connections = Get-NetTCPConnection -LocalPort $port -ErrorAction SilentlyContinue
    foreach ($conn in $connections) {
        Stop-Process -Id $conn.OwningProcess -Force -ErrorAction SilentlyContinue
    }
}
Start-Sleep -Seconds 1

# Nettoyer les caches
Write-Host "🧹 Nettoyage des caches..." -ForegroundColor Yellow
Remove-Item -Path ".astro" -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item -Path "node_modules\.vite" -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item -Path "node_modules\.cache" -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item -Path "dist" -Recurse -Force -ErrorAction SilentlyContinue

Write-Host ""
Write-Host "✅ Nettoyage terminé!" -ForegroundColor Green
Write-Host ""
Write-Host "Pour démarrer le serveur, exécutez:" -ForegroundColor Cyan
Write-Host "  npm run dev" -ForegroundColor White
Write-Host ""
Write-Host "Ou pour un build de production:" -ForegroundColor Cyan
Write-Host "  npm run build" -ForegroundColor White
