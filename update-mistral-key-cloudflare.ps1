# Script PowerShell pour mettre à jour la clé Mistral sur Cloudflare Pages
# Usage: .\update-mistral-key-cloudflare.ps1

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  MISE À JOUR CLÉ MISTRAL - CLOUDFLARE  " -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Vérifier si wrangler est installé
Write-Host "🔍 Vérification de Wrangler..." -ForegroundColor Yellow
$wranglerInstalled = Get-Command wrangler -ErrorAction SilentlyContinue

if (-not $wranglerInstalled) {
    Write-Host "❌ Wrangler n'est pas installé." -ForegroundColor Red
    Write-Host ""
    Write-Host "📦 Installation de Wrangler..." -ForegroundColor Yellow
    npm install -g wrangler
    Write-Host "✅ Wrangler installé avec succès !" -ForegroundColor Green
    Write-Host ""
}

# Lire la clé depuis le fichier .env
Write-Host "📖 Lecture de la clé depuis .env..." -ForegroundColor Yellow
$envContent = Get-Content .env -Raw
$mistralKey = ""

if ($envContent -match 'MISTRAL_API_KEY="([^"]+)"') {
    $mistralKey = $matches[1]
    Write-Host "✅ Clé trouvée dans .env" -ForegroundColor Green
    Write-Host "   Prévisualisation: $($mistralKey.Substring(0, [Math]::Min(10, $mistralKey.Length)))..." -ForegroundColor Gray
    Write-Host ""
} else {
    Write-Host "❌ Clé MISTRAL_API_KEY non trouvée dans .env" -ForegroundColor Red
    Write-Host ""
    Write-Host "Veuillez entrer votre clé API Mistral:" -ForegroundColor Yellow
    $mistralKey = Read-Host "Clé API"
    Write-Host ""
}

if ([string]::IsNullOrWhiteSpace($mistralKey)) {
    Write-Host "❌ Aucune clé fournie. Abandon." -ForegroundColor Red
    exit 1
}

# Demander le nom du projet Cloudflare Pages
Write-Host "📝 Configuration Cloudflare Pages" -ForegroundColor Cyan
Write-Host ""
Write-Host "Quel est le nom de votre projet Cloudflare Pages ?" -ForegroundColor Yellow
Write-Host "(Par défaut: zyatria-global)" -ForegroundColor Gray
$projectName = Read-Host "Nom du projet"

if ([string]::IsNullOrWhiteSpace($projectName)) {
    $projectName = "zyatria-global"
}

Write-Host ""
Write-Host "🔧 Configuration de la variable d'environnement..." -ForegroundColor Yellow
Write-Host "   Projet: $projectName" -ForegroundColor Gray
Write-Host "   Variable: MISTRAL_API_KEY" -ForegroundColor Gray
Write-Host ""

# Méthode 1 : Via wrangler pages secret
Write-Host "📤 Méthode 1: Via Wrangler CLI" -ForegroundColor Cyan
Write-Host ""
Write-Host "Exécutez cette commande:" -ForegroundColor Yellow
Write-Host ""
Write-Host "echo `"$mistralKey`" | wrangler pages secret put MISTRAL_API_KEY --project-name=$projectName" -ForegroundColor White
Write-Host ""

# Méthode 2 : Instructions manuelles
Write-Host "📤 Méthode 2: Via le Dashboard Cloudflare (Recommandé)" -ForegroundColor Cyan
Write-Host ""
Write-Host "1. Allez sur: https://dash.cloudflare.com/" -ForegroundColor White
Write-Host "2. Sélectionnez 'Workers & Pages'" -ForegroundColor White
Write-Host "3. Cliquez sur votre projet: $projectName" -ForegroundColor White
Write-Host "4. Allez dans 'Settings' → 'Environment variables'" -ForegroundColor White
Write-Host "5. Trouvez 'MISTRAL_API_KEY' et cliquez sur 'Edit'" -ForegroundColor White
Write-Host "6. Collez cette valeur:" -ForegroundColor White
Write-Host ""
Write-Host "   $mistralKey" -ForegroundColor Yellow
Write-Host ""
Write-Host "7. Cliquez sur 'Save'" -ForegroundColor White
Write-Host "8. Redéployez le site (Deployments → Retry deployment)" -ForegroundColor White
Write-Host ""

# Copier la clé dans le presse-papiers (si possible)
try {
    Set-Clipboard -Value $mistralKey
    Write-Host "✅ Clé copiée dans le presse-papiers !" -ForegroundColor Green
    Write-Host "   Vous pouvez la coller directement sur Cloudflare" -ForegroundColor Gray
    Write-Host ""
} catch {
    Write-Host "⚠️ Impossible de copier dans le presse-papiers" -ForegroundColor Yellow
    Write-Host "   Copiez manuellement la clé ci-dessus" -ForegroundColor Gray
    Write-Host ""
}

# Résumé
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  RÉSUMÉ" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "✅ Clé lue depuis .env" -ForegroundColor Green
Write-Host "✅ Instructions fournies" -ForegroundColor Green
Write-Host "✅ Clé copiée dans le presse-papiers" -ForegroundColor Green
Write-Host ""
Write-Host "📋 PROCHAINES ÉTAPES:" -ForegroundColor Yellow
Write-Host ""
Write-Host "1. Allez sur le dashboard Cloudflare" -ForegroundColor White
Write-Host "2. Mettez à jour la variable MISTRAL_API_KEY" -ForegroundColor White
Write-Host "3. Redéployez le site" -ForegroundColor White
Write-Host "4. Testez en production" -ForegroundColor White
Write-Host ""
Write-Host "🔗 Dashboard: https://dash.cloudflare.com/" -ForegroundColor Cyan
Write-Host ""

# Demander si l'utilisateur veut ouvrir le dashboard
Write-Host "Voulez-vous ouvrir le dashboard Cloudflare maintenant ? (O/N)" -ForegroundColor Yellow
$openDashboard = Read-Host

if ($openDashboard -eq "O" -or $openDashboard -eq "o") {
    Start-Process "https://dash.cloudflare.com/"
    Write-Host "✅ Dashboard ouvert dans votre navigateur" -ForegroundColor Green
}

Write-Host ""
Write-Host "✅ Script terminé !" -ForegroundColor Green
Write-Host ""
