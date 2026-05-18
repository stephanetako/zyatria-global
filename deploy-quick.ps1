# 🚀 Script de Déploiement Rapide - ZyatrIA Global (Windows PowerShell)
# Ce script automatise le déploiement sur GitHub

Write-Host "🚀 Déploiement ZyatrIA Global" -ForegroundColor Cyan
Write-Host "==============================" -ForegroundColor Cyan
Write-Host ""

# Vérifier si Git est installé
try {
    git --version | Out-Null
    Write-Host "✅ Git est installé" -ForegroundColor Green
} catch {
    Write-Host "❌ Git n'est pas installé. Télécharge-le ici :" -ForegroundColor Red
    Write-Host "   https://git-scm.com/download/win" -ForegroundColor Yellow
    exit 1
}

Write-Host ""

# Vérifier si c'est déjà un repo Git
if (Test-Path .git) {
    Write-Host "✅ Repo Git déjà initialisé" -ForegroundColor Green
} else {
    Write-Host "📦 Initialisation du repo Git..." -ForegroundColor Yellow
    git init
    Write-Host "✅ Repo Git initialisé" -ForegroundColor Green
}

Write-Host ""

# Demander le nom d'utilisateur GitHub
Write-Host "📝 Configuration GitHub" -ForegroundColor Cyan
Write-Host "----------------------" -ForegroundColor Cyan
$GITHUB_USERNAME = Read-Host "Entre ton nom d'utilisateur GitHub"

if ([string]::IsNullOrWhiteSpace($GITHUB_USERNAME)) {
    Write-Host "❌ Nom d'utilisateur requis" -ForegroundColor Red
    exit 1
}

# Demander le nom du repo
$REPO_NAME = Read-Host "Nom du repo (défaut: zyatria-global)"
if ([string]::IsNullOrWhiteSpace($REPO_NAME)) {
    $REPO_NAME = "zyatria-global"
}

Write-Host ""
Write-Host "📋 Résumé :" -ForegroundColor Cyan
Write-Host "  - Utilisateur : $GITHUB_USERNAME" -ForegroundColor White
Write-Host "  - Repo : $REPO_NAME" -ForegroundColor White
Write-Host "  - URL : https://github.com/$GITHUB_USERNAME/$REPO_NAME" -ForegroundColor White
Write-Host ""

$CONFIRM = Read-Host "Continuer ? (o/n)"
if ($CONFIRM -ne "o" -and $CONFIRM -ne "O") {
    Write-Host "❌ Annulé" -ForegroundColor Red
    exit 0
}

Write-Host ""
Write-Host "📦 Préparation des fichiers..." -ForegroundColor Yellow

# Créer .gitignore si nécessaire
if (-not (Test-Path .gitignore)) {
    @"
# Dependencies
node_modules/
.pnpm-store/

# Build outputs
dist/
.astro/

# Environment
.env
.env.local
.env.production

# Logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*

# OS
.DS_Store
Thumbs.db

# IDE
.vscode/
.idea/
*.swp
*.swo

# Cloudflare
.wrangler/
wrangler.toml
"@ | Out-File -FilePath .gitignore -Encoding UTF8
    Write-Host "✅ .gitignore créé" -ForegroundColor Green
}

# Ajouter tous les fichiers
Write-Host "📦 Ajout des fichiers..." -ForegroundColor Yellow
git add .

# Créer le commit
Write-Host "📝 Création du commit..." -ForegroundColor Yellow
git commit -m "Initial commit - ZyatrIA Global site complet

- 12 pages Astro (Home, Services, Pricing, About, etc.)
- 26 composants React
- Système de traduction FR/EN
- Intégration Formspree et Stripe
- Design premium et responsive
- SEO optimisé
- Prêt pour déploiement Cloudflare Pages"

Write-Host "✅ Commit créé" -ForegroundColor Green
Write-Host ""

# Vérifier si le remote existe déjà
$remotes = git remote
if ($remotes -contains "origin") {
    Write-Host "⚠️  Remote 'origin' existe déjà" -ForegroundColor Yellow
    $REPLACE = Read-Host "Remplacer ? (o/n)"
    if ($REPLACE -eq "o" -or $REPLACE -eq "O") {
        git remote remove origin
        git remote add origin "https://github.com/$GITHUB_USERNAME/$REPO_NAME.git"
        Write-Host "✅ Remote mis à jour" -ForegroundColor Green
    }
} else {
    git remote add origin "https://github.com/$GITHUB_USERNAME/$REPO_NAME.git"
    Write-Host "✅ Remote ajouté" -ForegroundColor Green
}

Write-Host ""
Write-Host "🌐 Prochaines étapes :" -ForegroundColor Cyan
Write-Host "=====================" -ForegroundColor Cyan
Write-Host ""
Write-Host "1️⃣  Crée le repo sur GitHub :" -ForegroundColor Yellow
Write-Host "   👉 https://github.com/new" -ForegroundColor White
Write-Host "   - Nom : $REPO_NAME" -ForegroundColor White
Write-Host "   - Description : ZyatrIA Global - AI Agents & Automation Platform" -ForegroundColor White
Write-Host "   - Public ou Private (ton choix)" -ForegroundColor White
Write-Host "   - NE COCHE PAS 'Initialize with README'" -ForegroundColor White
Write-Host ""
Write-Host "2️⃣  Une fois le repo créé, reviens ici et appuie sur Entrée..." -ForegroundColor Yellow
Read-Host

Write-Host ""
Write-Host "📤 Push vers GitHub..." -ForegroundColor Yellow

# Renommer la branche en main
git branch -M main

# Pousser le code
try {
    git push -u origin main
    Write-Host ""
    Write-Host "🎉 SUCCÈS ! Code poussé sur GitHub !" -ForegroundColor Green
    Write-Host ""
    Write-Host "🔗 Voir ton repo : https://github.com/$GITHUB_USERNAME/$REPO_NAME" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "📋 Prochaine étape : Déployer sur Cloudflare Pages" -ForegroundColor Cyan
    Write-Host "==================================================" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "1. Va sur https://dash.cloudflare.com" -ForegroundColor White
    Write-Host "2. Clique sur 'Workers & Pages'" -ForegroundColor White
    Write-Host "3. Clique sur 'Create application' > 'Pages' > 'Connect to Git'" -ForegroundColor White
    Write-Host "4. Sélectionne ton repo : $REPO_NAME" -ForegroundColor White
    Write-Host "5. Configuration :" -ForegroundColor White
    Write-Host "   - Framework preset : Astro" -ForegroundColor White
    Write-Host "   - Build command : npm run build" -ForegroundColor White
    Write-Host "   - Build output : dist" -ForegroundColor White
    Write-Host "6. Clique sur 'Save and Deploy'" -ForegroundColor White
    Write-Host ""
    Write-Host "⏳ Attends 2-3 minutes et ton site sera en ligne ! 🚀" -ForegroundColor Green
    Write-Host ""
} catch {
    Write-Host ""
    Write-Host "❌ Erreur lors du push" -ForegroundColor Red
    Write-Host ""
    Write-Host "Causes possibles :" -ForegroundColor Yellow
    Write-Host "1. Le repo n'existe pas encore sur GitHub" -ForegroundColor White
    Write-Host "2. Tu n'as pas les droits d'accès" -ForegroundColor White
    Write-Host "3. Problème d'authentification" -ForegroundColor White
    Write-Host ""
    Write-Host "Solutions :" -ForegroundColor Yellow
    Write-Host "1. Vérifie que le repo existe : https://github.com/$GITHUB_USERNAME/$REPO_NAME" -ForegroundColor White
    Write-Host "2. Configure ton authentification GitHub :" -ForegroundColor White
    Write-Host "   git config --global user.name 'Ton Nom'" -ForegroundColor White
    Write-Host "   git config --global user.email 'ton@email.com'" -ForegroundColor White
    Write-Host "3. Utilise un Personal Access Token si nécessaire" -ForegroundColor White
    Write-Host ""
    Write-Host "Puis réessaye : git push -u origin main" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "Appuie sur Entrée pour fermer..." -ForegroundColor Gray
Read-Host
