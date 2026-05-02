# =====================================================
# SCRIPT DE DÉPLOIEMENT AUTOMATIQUE ZYATRIA GLOBAL
# =====================================================

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  DÉPLOIEMENT ZYATRIA GLOBAL SUR GITHUB" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Configuration
$repoUrl = "https://github.com/stephanechevry-dev/Zyatria-Global.git"
$projectName = "Zyatria-Global"
$workDir = "$env:USERPROFILE\Desktop\$projectName-deploy"

Write-Host "[1/7] Vérification de Git..." -ForegroundColor Yellow

# Vérifier si Git est installé
try {
    $gitVersion = git --version
    Write-Host "✅ Git trouvé: $gitVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Git n'est pas installé!" -ForegroundColor Red
    Write-Host "Télécharge Git sur: https://git-scm.com/download/win" -ForegroundColor Yellow
    pause
    exit
}

Write-Host ""
Write-Host "[2/7] Création du dossier de travail..." -ForegroundColor Yellow

# Créer le dossier de travail
if (Test-Path $workDir) {
    Write-Host "⚠️  Le dossier existe déjà. Suppression..." -ForegroundColor Yellow
    Remove-Item -Path $workDir -Recurse -Force
}

New-Item -ItemType Directory -Path $workDir | Out-Null
Set-Location $workDir
Write-Host "✅ Dossier créé: $workDir" -ForegroundColor Green

Write-Host ""
Write-Host "[3/7] Configuration Git..." -ForegroundColor Yellow

# Configurer Git
git config --global user.name "stephanechevry-dev"

Write-Host "📧 Entre ton email GitHub:" -ForegroundColor Cyan
$email = Read-Host
git config --global user.email $email

Write-Host "✅ Configuration Git terminée" -ForegroundColor Green

Write-Host ""
Write-Host "[4/7] Initialisation du repository..." -ForegroundColor Yellow

# Initialiser Git
git init
git branch -M main

Write-Host "✅ Repository initialisé" -ForegroundColor Green

Write-Host ""
Write-Host "[5/7] Téléchargement du projet depuis l'environnement de développement..." -ForegroundColor Yellow
Write-Host "⚠️  IMPORTANT: Tu dois avoir téléchargé 'zyatria-production-clean.zip' depuis l'interface de développement!" -ForegroundColor Yellow
Write-Host ""
Write-Host "📍 Cherche le fichier 'zyatria-production-clean.zip' dans tes téléchargements" -ForegroundColor Cyan
Write-Host ""
Write-Host "Entre le chemin COMPLET du fichier .zip:" -ForegroundColor Cyan
Write-Host "Exemple: C:\Users\TON_NOM\Downloads\zyatria-production-clean.zip" -ForegroundColor Gray
$zipPath = Read-Host

if (-not (Test-Path $zipPath)) {
    Write-Host "❌ Fichier non trouvé: $zipPath" -ForegroundColor Red
    Write-Host "Télécharge d'abord 'zyatria-production-clean.zip' depuis l'interface!" -ForegroundColor Yellow
    pause
    exit
}

Write-Host "✅ Fichier trouvé!" -ForegroundColor Green

Write-Host ""
Write-Host "[6/7] Extraction des fichiers..." -ForegroundColor Yellow

# Extraire le ZIP
Expand-Archive -Path $zipPath -DestinationPath $workDir -Force

Write-Host "✅ Fichiers extraits" -ForegroundColor Green

Write-Host ""
Write-Host "[7/7] Envoi sur GitHub..." -ForegroundColor Yellow
Write-Host ""

# Ajouter tous les fichiers
git add .
git commit -m "Initial commit - Production files"
git remote add origin $repoUrl

Write-Host ""
Write-Host "🔐 Entre ton TOKEN GitHub (Personal Access Token):" -ForegroundColor Cyan
Write-Host "Si tu n'en as pas, crée-en un sur: https://github.com/settings/tokens" -ForegroundColor Gray
$token = Read-Host -AsSecureString

# Convertir le SecureString en texte
$BSTR = [System.Runtime.InteropServices.Marshal]::SecureStringToBSTR($token)
$tokenText = [System.Runtime.InteropServices.Marshal]::PtrToStringAuto($BSTR)

# Construire l'URL avec le token
$repoUrlWithToken = $repoUrl -replace "https://", "https://$tokenText@"

Write-Host ""
Write-Host "📤 Push en cours..." -ForegroundColor Yellow

try {
    git push -u $repoUrlWithToken main
    Write-Host ""
    Write-Host "========================================" -ForegroundColor Green
    Write-Host "  ✅ DÉPLOIEMENT RÉUSSI !" -ForegroundColor Green
    Write-Host "========================================" -ForegroundColor Green
    Write-Host ""
    Write-Host "📍 Ton projet est maintenant sur GitHub:" -ForegroundColor Cyan
    Write-Host "   https://github.com/stephanechevry-dev/Zyatria-Global" -ForegroundColor Cyan
    Write-Host ""
} catch {
    Write-Host ""
    Write-Host "❌ ERREUR lors du push!" -ForegroundColor Red
    Write-Host $_.Exception.Message -ForegroundColor Red
    Write-Host ""
    Write-Host "Vérifications:" -ForegroundColor Yellow
    Write-Host "  1. Ton token est-il valide ?" -ForegroundColor Yellow
    Write-Host "  2. Le repo existe-t-il sur GitHub ?" -ForegroundColor Yellow
    Write-Host "  3. As-tu les permissions d'écriture ?" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "Appuie sur une touche pour fermer..." -ForegroundColor Gray
pause
