# Script de déploiement GitHub + Cloudflare Pages
# Pour Windows PowerShell

Write-Host "🚀 DÉPLOIEMENT ZYATRIA GLOBAL" -ForegroundColor Cyan
Write-Host "=============================" -ForegroundColor Cyan
Write-Host ""

# Vérifier si Git est installé
if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
    Write-Host "❌ Git n'est pas installé. Veuillez installer Git d'abord." -ForegroundColor Red
    Write-Host "Télécharger: https://git-scm.com/download/win" -ForegroundColor Yellow
    exit 1
}

Write-Host "📋 ÉTAPE 1: Vérification du projet" -ForegroundColor Green
Write-Host "-----------------------------------" -ForegroundColor Gray

# Vérifier que nous sommes dans le bon dossier
if (-not (Test-Path "package.json")) {
    Write-Host "❌ Erreur: package.json non trouvé" -ForegroundColor Red
    Write-Host "Assurez-vous d'être dans le dossier du projet" -ForegroundColor Yellow
    exit 1
}

Write-Host "✅ Dossier du projet trouvé" -ForegroundColor Green

# Vérifier le build
Write-Host ""
Write-Host "📋 ÉTAPE 2: Test du build" -ForegroundColor Green
Write-Host "-------------------------" -ForegroundColor Gray

npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Le build a échoué" -ForegroundColor Red
    exit 1
}

Write-Host "✅ Build réussi" -ForegroundColor Green

# Initialiser Git si nécessaire
Write-Host ""
Write-Host "📋 ÉTAPE 3: Configuration Git" -ForegroundColor Green
Write-Host "-----------------------------" -ForegroundColor Gray

if (-not (Test-Path ".git")) {
    Write-Host "Initialisation de Git..." -ForegroundColor Yellow
    git init
    git branch -M main
}

Write-Host "✅ Git configuré" -ForegroundColor Green

# Ajouter tous les fichiers
Write-Host ""
Write-Host "📋 ÉTAPE 4: Préparation du commit" -ForegroundColor Green
Write-Host "---------------------------------" -ForegroundColor Gray

git add .

# Créer le commit
$commitMessage = "✅ Site complet - Tous agents activés - Prêt production - $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
git commit -m $commitMessage

Write-Host "✅ Commit créé: $commitMessage" -ForegroundColor Green

# Demander l'URL du repository
Write-Host ""
Write-Host "📋 ÉTAPE 5: Configuration du repository GitHub" -ForegroundColor Green
Write-Host "----------------------------------------------" -ForegroundColor Gray

# Vérifier si un remote existe déjà
$remoteUrl = git remote get-url origin 2>$null

if ($remoteUrl) {
    Write-Host "✅ Repository GitHub déjà configuré: $remoteUrl" -ForegroundColor Green
    
    $response = Read-Host "Voulez-vous pousser vers ce repository? (O/N)"
    if ($response -ne "O" -and $response -ne "o") {
        Write-Host "❌ Déploiement annulé" -ForegroundColor Yellow
        exit 0
    }
} else {
    Write-Host "Aucun repository GitHub configuré." -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Pour créer un repository GitHub:" -ForegroundColor Cyan
    Write-Host "1. Allez sur https://github.com/new" -ForegroundColor White
    Write-Host "2. Créez un nouveau repository (ex: zyatria-global)" -ForegroundColor White
    Write-Host "3. NE PAS initialiser avec README, .gitignore ou license" -ForegroundColor White
    Write-Host "4. Copiez l'URL du repository (ex: https://github.com/username/zyatria-global.git)" -ForegroundColor White
    Write-Host ""
    
    $repoUrl = Read-Host "Entrez l'URL de votre repository GitHub"
    
    if (-not $repoUrl) {
        Write-Host "❌ URL non fournie. Déploiement annulé." -ForegroundColor Red
        exit 1
    }
    
    git remote add origin $repoUrl
    Write-Host "✅ Repository configuré: $repoUrl" -ForegroundColor Green
}

# Pousser vers GitHub
Write-Host ""
Write-Host "📋 ÉTAPE 6: Push vers GitHub" -ForegroundColor Green
Write-Host "----------------------------" -ForegroundColor Gray

Write-Host "Envoi du code vers GitHub..." -ForegroundColor Yellow

git push -u origin main

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Erreur lors du push vers GitHub" -ForegroundColor Red
    Write-Host ""
    Write-Host "Solutions possibles:" -ForegroundColor Yellow
    Write-Host "1. Vérifiez vos identifiants GitHub" -ForegroundColor White
    Write-Host "2. Vérifiez que le repository existe" -ForegroundColor White
    Write-Host "3. Vérifiez votre connexion internet" -ForegroundColor White
    exit 1
}

Write-Host "✅ Code poussé vers GitHub avec succès!" -ForegroundColor Green

# Instructions pour Cloudflare
Write-Host ""
Write-Host "🎉 SUCCÈS! Code sur GitHub" -ForegroundColor Green
Write-Host "==========================" -ForegroundColor Green
Write-Host ""
Write-Host "📋 PROCHAINES ÉTAPES - CLOUDFLARE PAGES:" -ForegroundColor Cyan
Write-Host ""
Write-Host "1. Allez sur: https://dash.cloudflare.com" -ForegroundColor White
Write-Host "2. Cliquez sur 'Workers & Pages'" -ForegroundColor White
Write-Host "3. Cliquez sur 'Create application' > 'Pages'" -ForegroundColor White
Write-Host "4. Cliquez sur 'Connect to Git'" -ForegroundColor White
Write-Host "5. Sélectionnez votre repository" -ForegroundColor White
Write-Host "6. Configuration du build:" -ForegroundColor White
Write-Host "   - Framework: Astro" -ForegroundColor Yellow
Write-Host "   - Build command: npm run build" -ForegroundColor Yellow
Write-Host "   - Build output: dist" -ForegroundColor Yellow
Write-Host "7. Cliquez sur 'Save and Deploy'" -ForegroundColor White
Write-Host ""
Write-Host "⚠️  IMPORTANT: Après le premier déploiement:" -ForegroundColor Yellow
Write-Host "   Allez dans Settings > Environment variables" -ForegroundColor White
Write-Host "   Et ajoutez ces variables:" -ForegroundColor White
Write-Host ""
Write-Host "   MISTRAL_API_KEY" -ForegroundColor Cyan
Write-Host "   STRIPE_PUBLIC_KEY" -ForegroundColor Cyan
Write-Host "   STRIPE_SECRET_KEY" -ForegroundColor Cyan
Write-Host "   STRIPE_WEBHOOK_SECRET" -ForegroundColor Cyan
Write-Host "   FORMSPREE_FORM_ID" -ForegroundColor Cyan
Write-Host ""
Write-Host "   (Les valeurs sont dans le fichier .env)" -ForegroundColor Gray
Write-Host ""
Write-Host "📖 Guide complet: Voir 🚀_DEPLOYER_MAINTENANT_GUIDE_FINAL.md" -ForegroundColor Cyan
Write-Host ""
Write-Host "✅ Déploiement GitHub terminé avec succès!" -ForegroundColor Green
Write-Host ""

# Ouvrir le navigateur vers GitHub
$response = Read-Host "Voulez-vous ouvrir GitHub dans votre navigateur? (O/N)"
if ($response -eq "O" -or $response -eq "o") {
    $repoUrl = git remote get-url origin
    $repoUrl = $repoUrl -replace "\.git$", ""
    Start-Process $repoUrl
}

# Ouvrir le navigateur vers Cloudflare
$response = Read-Host "Voulez-vous ouvrir Cloudflare Pages dans votre navigateur? (O/N)"
if ($response -eq "O" -or $response -eq "o") {
    Start-Process "https://dash.cloudflare.com/?to=/:account/pages"
}

Write-Host ""
Write-Host "🎉 Terminé! Suivez les étapes ci-dessus pour déployer sur Cloudflare." -ForegroundColor Green
