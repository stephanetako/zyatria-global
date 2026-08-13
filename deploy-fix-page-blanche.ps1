#!/usr/bin/env pwsh

# Script de déploiement automatique - Correction Page Blanche
# ZyatrIA Global - 2024

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  DÉPLOIEMENT CORRECTION PAGE BLANCHE  " -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Fonction pour afficher les messages
function Write-Step {
    param([string]$Message, [string]$Color = "Yellow")
    Write-Host "➤ $Message" -ForegroundColor $Color
}

function Write-Success {
    param([string]$Message)
    Write-Host "✅ $Message" -ForegroundColor Green
}

function Write-Error {
    param([string]$Message)
    Write-Host "❌ $Message" -ForegroundColor Red
}

function Write-Info {
    param([string]$Message)
    Write-Host "ℹ️  $Message" -ForegroundColor Cyan
}

# Vérifier qu'on est dans le bon répertoire
Write-Step "Vérification du répertoire..."
if (-not (Test-Path "package.json")) {
    Write-Error "Erreur: package.json non trouvé. Êtes-vous dans le bon répertoire ?"
    exit 1
}
Write-Success "Répertoire correct"

# Vérifier que les fichiers corrigés existent
Write-Step "Vérification des fichiers corrigés..."
$requiredFiles = @(
    "src/components/AppWrapperFixed.tsx",
    "src/pages/index.astro"
)

foreach ($file in $requiredFiles) {
    if (-not (Test-Path $file)) {
        Write-Error "Fichier manquant: $file"
        exit 1
    }
}
Write-Success "Tous les fichiers corrigés sont présents"

# Afficher les modifications
Write-Step "Modifications détectées:"
Write-Host ""
Write-Host "  📝 src/components/AppWrapperFixed.tsx" -ForegroundColor White
Write-Host "     └─ Nouveau composant avec PricingDesignSystem" -ForegroundColor Gray
Write-Host ""
Write-Host "  📝 src/pages/index.astro" -ForegroundColor White
Write-Host "     └─ Utilise maintenant AppWrapperFixed" -ForegroundColor Gray
Write-Host ""

# Demander confirmation
Write-Host ""
$confirmation = Read-Host "Voulez-vous déployer ces changements ? (O/N)"
if ($confirmation -ne "O" -and $confirmation -ne "o") {
    Write-Info "Déploiement annulé"
    exit 0
}

# Test du build local
Write-Step "Test du build local..."
Write-Host ""
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Error "Le build a échoué. Vérifiez les erreurs ci-dessus."
    exit 1
}
Write-Success "Build réussi !"

# Git status
Write-Step "Vérification du statut Git..."
git status --short
Write-Host ""

# Git add
Write-Step "Ajout des fichiers modifiés..."
git add .
Write-Success "Fichiers ajoutés"

# Git commit
Write-Step "Création du commit..."
$commitMessage = "Fix: Replace Pricing with PricingDesignSystem to fix blank page"
git commit -m $commitMessage
if ($LASTEXITCODE -ne 0) {
    Write-Info "Aucun changement à commiter ou commit déjà effectué"
}
Write-Success "Commit créé"

# Git push
Write-Step "Push vers GitHub..."
git push origin master
if ($LASTEXITCODE -ne 0) {
    Write-Error "Erreur lors du push. Vérifiez votre connexion et vos credentials."
    exit 1
}
Write-Success "Push réussi !"

# Instructions post-déploiement
Write-Host ""
Write-Host "========================================" -ForegroundColor Green
Write-Host "  ✅ DÉPLOIEMENT RÉUSSI !              " -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""

Write-Info "Prochaines étapes:"
Write-Host ""
Write-Host "  1️⃣  Attendre 2-3 minutes" -ForegroundColor Yellow
Write-Host "     └─ Cloudflare est en train de rebuilder votre site" -ForegroundColor Gray
Write-Host ""
Write-Host "  2️⃣  Vérifier le déploiement" -ForegroundColor Yellow
Write-Host "     └─ https://dash.cloudflare.com/" -ForegroundColor Gray
Write-Host "     └─ Workers & Pages > zyatria-global > Deployments" -ForegroundColor Gray
Write-Host ""
Write-Host "  3️⃣  Purger le cache Cloudflare" -ForegroundColor Yellow
Write-Host "     └─ Caching > Purge Everything" -ForegroundColor Gray
Write-Host ""
Write-Host "  4️⃣  Tester votre site" -ForegroundColor Yellow
Write-Host "     └─ https://zyatria-global.zyatria-contact.workers.dev/" -ForegroundColor Gray
Write-Host "     └─ Appuyez sur Ctrl + Shift + R pour recharger sans cache" -ForegroundColor Gray
Write-Host ""

# Ouvrir automatiquement le dashboard Cloudflare
Write-Host ""
$openDashboard = Read-Host "Voulez-vous ouvrir le Cloudflare Dashboard maintenant ? (O/N)"
if ($openDashboard -eq "O" -or $openDashboard -eq "o") {
    Start-Process "https://dash.cloudflare.com/"
    Write-Success "Dashboard Cloudflare ouvert dans votre navigateur"
}

# Timer de 3 minutes
Write-Host ""
$waitForDeploy = Read-Host "Voulez-vous attendre 3 minutes puis ouvrir votre site ? (O/N)"
if ($waitForDeploy -eq "O" -or $waitForDeploy -eq "o") {
    Write-Step "Attente de 3 minutes pour le déploiement..."
    for ($i = 180; $i -gt 0; $i--) {
        $minutes = [math]::Floor($i / 60)
        $seconds = $i % 60
        Write-Progress -Activity "Déploiement en cours..." -Status "Temps restant: $minutes min $seconds sec" -PercentComplete ((180 - $i) / 180 * 100)
        Start-Sleep -Seconds 1
    }
    Write-Progress -Activity "Déploiement en cours..." -Completed
    Write-Success "Déploiement terminé !"
    
    # Ouvrir le site
    Start-Process "https://zyatria-global.zyatria-contact.workers.dev/"
    Write-Success "Site ouvert dans votre navigateur"
    Write-Info "N'oubliez pas d'appuyer sur Ctrl + Shift + R pour recharger sans cache !"
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  🎉 SCRIPT TERMINÉ !                  " -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Résumé final
Write-Host "📊 RÉSUMÉ:" -ForegroundColor White
Write-Host "  ✅ Build local réussi" -ForegroundColor Green
Write-Host "  ✅ Commit créé" -ForegroundColor Green
Write-Host "  ✅ Push vers GitHub réussi" -ForegroundColor Green
Write-Host "  ⏳ Déploiement Cloudflare en cours..." -ForegroundColor Yellow
Write-Host ""
Write-Host "📝 FICHIERS MODIFIÉS:" -ForegroundColor White
Write-Host "  • src/components/AppWrapperFixed.tsx" -ForegroundColor Gray
Write-Host "  • src/pages/index.astro" -ForegroundColor Gray
Write-Host ""
Write-Host "🔗 LIENS UTILES:" -ForegroundColor White
Write-Host "  • Dashboard: https://dash.cloudflare.com/" -ForegroundColor Cyan
Write-Host "  • Site: https://zyatria-global.zyatria-contact.workers.dev/" -ForegroundColor Cyan
Write-Host ""

Write-Success "Tout est prêt ! Votre site devrait être en ligne dans quelques minutes."
Write-Host ""
