# 🚀 Script de déploiement automatique - ZyatrIA Global (Windows PowerShell)
# Ce script automatise le déploiement sur Cloudflare Pages via GitHub

Write-Host "🚀 DÉPLOIEMENT ZYATRIA GLOBAL" -ForegroundColor Cyan
Write-Host "==============================" -ForegroundColor Cyan
Write-Host ""

# Fonction pour afficher les étapes
function Step {
    param($message)
    Write-Host "▶ $message" -ForegroundColor Blue
}

function Success {
    param($message)
    Write-Host "✅ $message" -ForegroundColor Green
}

function Warning {
    param($message)
    Write-Host "⚠️  $message" -ForegroundColor Yellow
}

function Error {
    param($message)
    Write-Host "❌ $message" -ForegroundColor Red
}

# Vérifier que nous sommes dans le bon dossier
if (-not (Test-Path "package.json")) {
    Error "Erreur : package.json non trouvé. Es-tu dans le bon dossier ?"
    exit 1
}

Success "Dossier du projet trouvé !"
Write-Host ""

# Étape 1 : Vérifier Git
Step "Étape 1/6 : Vérification de Git..."
try {
    $gitVersion = git --version
    Success "Git est installé ! ($gitVersion)"
} catch {
    Error "Git n'est pas installé. Installe-le d'abord : https://git-scm.com/"
    exit 1
}
Write-Host ""

# Étape 2 : Initialiser Git si nécessaire
Step "Étape 2/6 : Initialisation de Git..."
if (-not (Test-Path ".git")) {
    git init
    Success "Git initialisé !"
} else {
    Success "Git déjà initialisé !"
}
Write-Host ""

# Étape 3 : Ajouter tous les fichiers
Step "Étape 3/6 : Ajout des fichiers..."
git add .
Success "Fichiers ajoutés !"
Write-Host ""

# Étape 4 : Créer le commit
Step "Étape 4/6 : Création du commit..."
$commitMessage = Read-Host "Entre un message de commit (ou appuie sur Entrée pour utiliser le message par défaut)"

if ([string]::IsNullOrWhiteSpace($commitMessage)) {
    $commitMessage = "ZyatrIA Global - Ready for launch 🚀"
}

git commit -m $commitMessage
Success "Commit créé : $commitMessage"
Write-Host ""

# Étape 5 : Configurer le remote
Step "Étape 5/6 : Configuration du repository GitHub..."
Write-Host ""
Warning "IMPORTANT : Tu dois d'abord créer un repo sur GitHub.com"
Write-Host ""
Write-Host "1. Va sur https://github.com/new"
Write-Host "2. Nom du repo : zyatria-global"
Write-Host "3. Visibilité : Private (recommandé)"
Write-Host "4. NE COCHE PAS 'Initialize with README'"
Write-Host "5. Clique sur 'Create repository'"
Write-Host ""

$repoCreated = Read-Host "As-tu créé le repo sur GitHub ? (o/n)"

if ($repoCreated -ne "o" -and $repoCreated -ne "O") {
    Warning "Crée d'abord le repo sur GitHub, puis relance ce script."
    exit 0
}

Write-Host ""
$githubUsername = Read-Host "Entre ton username GitHub"

if ([string]::IsNullOrWhiteSpace($githubUsername)) {
    Error "Username GitHub requis !"
    exit 1
}

# Vérifier si le remote existe déjà
$remotes = git remote
if ($remotes -contains "origin") {
    Warning "Remote 'origin' existe déjà. Suppression..."
    git remote remove origin
}

# Ajouter le remote
git remote add origin "https://github.com/$githubUsername/zyatria-global.git"
Success "Remote GitHub configuré !"
Write-Host ""

# Étape 6 : Pousser le code
Step "Étape 6/6 : Push vers GitHub..."
git branch -M main

Write-Host ""
Warning "Tu vas être invité à te connecter à GitHub..."
Write-Host ""

try {
    git push -u origin main
    Success "Code poussé sur GitHub avec succès !"
} catch {
    Error "Erreur lors du push. Vérifie tes identifiants GitHub."
    exit 1
}

Write-Host ""
Write-Host "==============================" -ForegroundColor Cyan
Success "🎉 DÉPLOIEMENT GITHUB TERMINÉ !"
Write-Host "==============================" -ForegroundColor Cyan
Write-Host ""

# Instructions pour Cloudflare Pages
Write-Host "📋 PROCHAINES ÉTAPES :" -ForegroundColor Blue
Write-Host ""
Write-Host "1. Va sur https://dash.cloudflare.com"
Write-Host "2. Clique sur 'Pages' → 'Create a project'"
Write-Host "3. Clique sur 'Connect to Git'"
Write-Host "4. Sélectionne le repo 'zyatria-global'"
Write-Host "5. Configure le build :"
Write-Host "   - Framework preset: Astro"
Write-Host "   - Build command: npm run build"
Write-Host "   - Build output directory: dist"
Write-Host "6. Clique sur 'Save and Deploy'"
Write-Host ""
Write-Host "⏳ Attends 2-5 minutes pour le déploiement..."
Write-Host ""
Success "Ton site sera disponible sur : https://zyatria-global.pages.dev"
Write-Host ""

# Demander si on veut ouvrir les URLs
$openCloudflare = Read-Host "Veux-tu ouvrir Cloudflare Pages maintenant ? (o/n)"

if ($openCloudflare -eq "o" -or $openCloudflare -eq "O") {
    Start-Process "https://dash.cloudflare.com"
}

Write-Host ""
Success "✨ Bon lancement ! 🚀"
Write-Host ""
