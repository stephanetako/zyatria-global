# ========================================
# SCRIPT DE BUILD POUR CLOUDFLARE PAGES
# ========================================

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  BUILD ZYATRIA POUR CLOUDFLARE PAGES  " -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Vérifier que Node.js est installé
Write-Host "[1/4] Vérification de Node.js..." -ForegroundColor Yellow
try {
    $nodeVersion = node --version
    Write-Host "✓ Node.js installé : $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "✗ ERREUR : Node.js n'est pas installé !" -ForegroundColor Red
    Write-Host ""
    Write-Host "Installez Node.js depuis : https://nodejs.org" -ForegroundColor Yellow
    Write-Host ""
    Read-Host "Appuyez sur Entrée pour quitter"
    exit 1
}

Write-Host ""

# Nettoyer les anciens fichiers
Write-Host "[2/4] Nettoyage des anciens fichiers..." -ForegroundColor Yellow
if (Test-Path "dist") {
    Remove-Item -Recurse -Force "dist"
    Write-Host "✓ Dossier dist supprimé" -ForegroundColor Green
}
if (Test-Path "node_modules") {
    Write-Host "  Suppression de node_modules (peut prendre 1 minute)..." -ForegroundColor Gray
    Remove-Item -Recurse -Force "node_modules"
    Write-Host "✓ Dossier node_modules supprimé" -ForegroundColor Green
}
if (Test-Path "package-lock.json") {
    Remove-Item -Force "package-lock.json"
    Write-Host "✓ package-lock.json supprimé" -ForegroundColor Green
}

Write-Host ""

# Installer les dépendances
Write-Host "[3/4] Installation des dépendances..." -ForegroundColor Yellow
Write-Host "  (Cela peut prendre 1-2 minutes)" -ForegroundColor Gray
Write-Host ""

npm install

if ($LASTEXITCODE -ne 0) {
    Write-Host ""
    Write-Host "✗ ERREUR lors de l'installation !" -ForegroundColor Red
    Write-Host ""
    Read-Host "Appuyez sur Entrée pour quitter"
    exit 1
}

Write-Host ""
Write-Host "✓ Dépendances installées avec succès" -ForegroundColor Green
Write-Host ""

# Builder le site
Write-Host "[4/4] Build du site..." -ForegroundColor Yellow
Write-Host "  (Cela peut prendre 30 secondes)" -ForegroundColor Gray
Write-Host ""

npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host ""
    Write-Host "✗ ERREUR lors du build !" -ForegroundColor Red
    Write-Host ""
    Read-Host "Appuyez sur Entrée pour quitter"
    exit 1
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Green
Write-Host "  ✓ BUILD TERMINÉ AVEC SUCCÈS !        " -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""
Write-Host "Le dossier 'dist' a été créé avec votre site." -ForegroundColor Cyan
Write-Host ""
Write-Host "PROCHAINES ÉTAPES :" -ForegroundColor Yellow
Write-Host "1. Allez sur Cloudflare Pages" -ForegroundColor White
Write-Host "2. Cliquez sur 'Upload your static files'" -ForegroundColor White
Write-Host "3. Uploadez le dossier 'dist' qui vient d'être créé" -ForegroundColor White
Write-Host ""
Write-Host "Emplacement du dossier dist :" -ForegroundColor Cyan
Write-Host "  $PWD\dist" -ForegroundColor White
Write-Host ""

# Ouvrir le dossier dist dans l'explorateur
Write-Host "Voulez-vous ouvrir le dossier dist dans l'explorateur ? (O/N)" -ForegroundColor Yellow
$response = Read-Host

if ($response -eq "O" -or $response -eq "o" -or $response -eq "oui") {
    explorer.exe "$PWD\dist"
    Write-Host "✓ Dossier ouvert !" -ForegroundColor Green
}

Write-Host ""
Write-Host "Appuyez sur Entrée pour quitter..." -ForegroundColor Gray
Read-Host
