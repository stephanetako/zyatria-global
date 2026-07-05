# 🔍 DIAGNOSTIC SERVEUR ZYATRIA - WINDOWS
# ==========================================

Write-Host "🔍 DIAGNOSTIC SERVEUR ZYATRIA" -ForegroundColor Cyan
Write-Host "==============================" -ForegroundColor Cyan
Write-Host ""

# 1. Vérification du port 3000
Write-Host "1️⃣ Vérification du port 3000..." -ForegroundColor Yellow
$port3000 = Get-NetTCPConnection -LocalPort 3000 -ErrorAction SilentlyContinue
if ($port3000) {
    Write-Host "   ❌ Port 3000 OCCUPÉ par le processus:" -ForegroundColor Red
    Get-Process -Id $port3000.OwningProcess | Select-Object ProcessName, Id
    Write-Host "   💡 Voulez-vous tuer ce processus? (O/N)" -ForegroundColor Yellow
    $response = Read-Host
    if ($response -eq "O" -or $response -eq "o") {
        Stop-Process -Id $port3000.OwningProcess -Force
        Write-Host "   ✅ Processus tué" -ForegroundColor Green
    }
} else {
    Write-Host "   ✅ Port 3000 LIBRE" -ForegroundColor Green
}
Write-Host ""

# 2. Vérification du port 4321
Write-Host "2️⃣ Vérification du port 4321..." -ForegroundColor Yellow
$port4321 = Get-NetTCPConnection -LocalPort 4321 -ErrorAction SilentlyContinue
if ($port4321) {
    Write-Host "   ⚠️ Port 4321 occupé" -ForegroundColor Yellow
} else {
    Write-Host "   ✅ Port 4321 libre" -ForegroundColor Green
}
Write-Host ""

# 3. Vérification du pare-feu Windows
Write-Host "3️⃣ Vérification du pare-feu Windows..." -ForegroundColor Yellow
$firewallStatus = Get-NetFirewallProfile | Select-Object Name, Enabled
Write-Host "   Statut du pare-feu:" -ForegroundColor Cyan
$firewallStatus | Format-Table -AutoSize
Write-Host ""

# 4. Test de connexion localhost
Write-Host "4️⃣ Test de connexion localhost..." -ForegroundColor Yellow
try {
    $response = Invoke-WebRequest -Uri "http://localhost:3000/" -TimeoutSec 2 -ErrorAction Stop
    Write-Host "   ✅ Serveur répond (Code: $($response.StatusCode))" -ForegroundColor Green
} catch {
    Write-Host "   ❌ Serveur ne répond pas" -ForegroundColor Red
    Write-Host "   Erreur: $($_.Exception.Message)" -ForegroundColor Red
}
Write-Host ""

# 5. Vérification de Node.js
Write-Host "5️⃣ Vérification de Node.js..." -ForegroundColor Yellow
$nodeVersion = node --version
Write-Host "   Version Node.js: $nodeVersion" -ForegroundColor Cyan
$npmVersion = npm --version
Write-Host "   Version npm: $npmVersion" -ForegroundColor Cyan
Write-Host ""

# 6. Vérification du dossier du projet
Write-Host "6️⃣ Vérification du dossier du projet..." -ForegroundColor Yellow
$currentDir = Get-Location
Write-Host "   Dossier actuel: $currentDir" -ForegroundColor Cyan
if (Test-Path "package.json") {
    Write-Host "   ✅ package.json trouvé" -ForegroundColor Green
} else {
    Write-Host "   ❌ package.json NON trouvé" -ForegroundColor Red
    Write-Host "   💡 Vous n'êtes pas dans le bon dossier!" -ForegroundColor Yellow
}
Write-Host ""

# 7. Instructions pour démarrer le serveur
Write-Host "==============================" -ForegroundColor Cyan
Write-Host "📋 INSTRUCTIONS:" -ForegroundColor Yellow
Write-Host ""
Write-Host "Si le port 3000 est libre, tapez:" -ForegroundColor Cyan
Write-Host "   npm run dev" -ForegroundColor White
Write-Host ""
Write-Host "Puis dans un navigateur, allez sur:" -ForegroundColor Cyan
Write-Host "   http://localhost:3000/api/test-simple" -ForegroundColor White
Write-Host ""
Write-Host "==============================" -ForegroundColor Cyan
Write-Host "✅ DIAGNOSTIC TERMINÉ" -ForegroundColor Green
Write-Host ""
