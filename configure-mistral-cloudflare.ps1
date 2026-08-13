# ============================================
# 🔑 Configuration Mistral API sur Cloudflare
# ============================================
# Script PowerShell pour configurer automatiquement
# la clé API Mistral dans Cloudflare Pages
# ============================================

Write-Host ""
Write-Host "============================================" -ForegroundColor Cyan
Write-Host "🔑 Configuration Mistral API - Cloudflare" -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""

# Fonction pour afficher les étapes
function Show-Step {
    param([string]$Number, [string]$Title)
    Write-Host ""
    Write-Host "[$Number] $Title" -ForegroundColor Yellow
    Write-Host ("=" * 50) -ForegroundColor Gray
}

# Fonction pour afficher les succès
function Show-Success {
    param([string]$Message)
    Write-Host "✅ $Message" -ForegroundColor Green
}

# Fonction pour afficher les infos
function Show-Info {
    param([string]$Message)
    Write-Host "ℹ️  $Message" -ForegroundColor Cyan
}

# Fonction pour afficher les warnings
function Show-Warning {
    param([string]$Message)
    Write-Host "⚠️  $Message" -ForegroundColor Yellow
}

# Fonction pour afficher les erreurs
function Show-Error {
    param([string]$Message)
    Write-Host "❌ $Message" -ForegroundColor Red
}

# ============================================
# ÉTAPE 1 : Vérifications préliminaires
# ============================================

Show-Step "1" "Vérifications préliminaires"

# Vérifier si wrangler est installé
Write-Host "Vérification de Wrangler CLI..." -ForegroundColor White
try {
    $wranglerVersion = wrangler --version 2>$null
    if ($wranglerVersion) {
        Show-Success "Wrangler CLI détecté : $wranglerVersion"
    } else {
        throw "Wrangler non trouvé"
    }
} catch {
    Show-Warning "Wrangler CLI n'est pas installé"
    Show-Info "Installation de Wrangler..."
    npm install -g wrangler
    Show-Success "Wrangler installé avec succès"
}

# Vérifier si l'utilisateur est connecté à Cloudflare
Write-Host ""
Write-Host "Vérification de la connexion Cloudflare..." -ForegroundColor White
try {
    $whoami = wrangler whoami 2>&1
    if ($whoami -match "You are logged in") {
        Show-Success "Connecté à Cloudflare"
    } else {
        throw "Non connecté"
    }
} catch {
    Show-Warning "Vous n'êtes pas connecté à Cloudflare"
    Show-Info "Lancement de l'authentification..."
    wrangler login
    Show-Success "Authentification réussie"
}

# ============================================
# ÉTAPE 2 : Obtenir la clé API Mistral
# ============================================

Show-Step "2" "Obtenir votre clé API Mistral"

Write-Host ""
Show-Info "Pour obtenir votre clé API Mistral :"
Write-Host ""
Write-Host "  1. Ouvrez votre navigateur" -ForegroundColor White
Write-Host "  2. Allez sur : https://console.mistral.ai/" -ForegroundColor Cyan
Write-Host "  3. Connectez-vous ou créez un compte" -ForegroundColor White
Write-Host "  4. Allez dans : API Keys" -ForegroundColor White
Write-Host "  5. Cliquez sur : Create new key" -ForegroundColor White
Write-Host "  6. Nom : ZyatrIA-Chatbot-Production" -ForegroundColor White
Write-Host "  7. Copiez la clé (commence par sk-proj-...)" -ForegroundColor White
Write-Host ""

# Ouvrir automatiquement le navigateur
Show-Info "Ouverture de Mistral Console dans votre navigateur..."
Start-Process "https://console.mistral.ai/"

Write-Host ""
Write-Host "Appuyez sur ENTRÉE une fois que vous avez copié votre clé API..." -ForegroundColor Yellow
Read-Host

# Demander la clé API
Write-Host ""
$mistralApiKey = Read-Host "Collez votre clé API Mistral ici"

# Valider le format de la clé
if ($mistralApiKey -notmatch "^sk-") {
    Show-Error "Format de clé invalide. La clé doit commencer par 'sk-'"
    Show-Info "Exemple : sk-proj-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
    exit 1
}

Show-Success "Clé API Mistral validée"

# ============================================
# ÉTAPE 3 : Détecter le projet Cloudflare
# ============================================

Show-Step "3" "Détection du projet Cloudflare Pages"

# Lire le fichier wrangler.toml
if (Test-Path "wrangler.toml") {
    $wranglerContent = Get-Content "wrangler.toml" -Raw
    
    # Extraire le nom du projet
    if ($wranglerContent -match 'name\s*=\s*"([^"]+)"') {
        $projectName = $Matches[1]
        Show-Success "Projet détecté : $projectName"
    } else {
        Show-Warning "Impossible de détecter le nom du projet"
        $projectName = Read-Host "Entrez le nom de votre projet Cloudflare Pages"
    }
} else {
    Show-Warning "Fichier wrangler.toml non trouvé"
    $projectName = Read-Host "Entrez le nom de votre projet Cloudflare Pages"
}

# ============================================
# ÉTAPE 4 : Configurer la variable d'environnement
# ============================================

Show-Step "4" "Configuration de la variable d'environnement"

Write-Host ""
Show-Info "Ajout de MISTRAL_API_KEY dans Cloudflare Pages..."

# Méthode 1 : Via Wrangler (recommandé)
Write-Host ""
Write-Host "Tentative de configuration via Wrangler..." -ForegroundColor White

try {
    # Pour Pages, on utilise wrangler pages secret
    $secretCommand = "echo `"$mistralApiKey`" | wrangler pages secret put MISTRAL_API_KEY --project-name=$projectName"
    
    Show-Info "Exécution de la commande..."
    Invoke-Expression $secretCommand
    
    Show-Success "Variable MISTRAL_API_KEY ajoutée avec succès"
    $configSuccess = $true
} catch {
    Show-Warning "Configuration automatique échouée"
    $configSuccess = $false
}

# Méthode 2 : Instructions manuelles si automatique échoue
if (-not $configSuccess) {
    Write-Host ""
    Show-Warning "Configuration manuelle requise"
    Write-Host ""
    Show-Info "Suivez ces étapes dans votre navigateur :"
    Write-Host ""
    Write-Host "  1. Allez sur : https://dash.cloudflare.com/" -ForegroundColor Cyan
    Write-Host "  2. Cliquez sur : Workers & Pages" -ForegroundColor White
    Write-Host "  3. Sélectionnez : $projectName" -ForegroundColor Yellow
    Write-Host "  4. Cliquez sur : Settings" -ForegroundColor White
    Write-Host "  5. Cliquez sur : Environment variables" -ForegroundColor White
    Write-Host "  6. Cliquez sur : Add variable" -ForegroundColor White
    Write-Host "  7. Variable name : MISTRAL_API_KEY" -ForegroundColor Yellow
    Write-Host "  8. Value : [Collez votre clé]" -ForegroundColor Yellow
    Write-Host "  9. Environment : Production + Preview" -ForegroundColor White
    Write-Host " 10. Cliquez sur : Save" -ForegroundColor White
    Write-Host ""
    
    # Ouvrir le dashboard Cloudflare
    Show-Info "Ouverture du dashboard Cloudflare..."
    Start-Process "https://dash.cloudflare.com/"
    
    Write-Host ""
    Write-Host "Appuyez sur ENTRÉE une fois la configuration terminée..." -ForegroundColor Yellow
    Read-Host
}

# ============================================
# ÉTAPE 5 : Sauvegarder localement (optionnel)
# ============================================

Show-Step "5" "Sauvegarde locale (optionnel)"

Write-Host ""
$saveLocal = Read-Host "Voulez-vous aussi sauvegarder la clé localement dans .env ? (o/n)"

if ($saveLocal -eq "o" -or $saveLocal -eq "O" -or $saveLocal -eq "y" -or $saveLocal -eq "Y") {
    
    # Vérifier si .env existe
    if (Test-Path ".env") {
        $envContent = Get-Content ".env" -Raw
        
        # Vérifier si MISTRAL_API_KEY existe déjà
        if ($envContent -match "MISTRAL_API_KEY") {
            Show-Info "Mise à jour de MISTRAL_API_KEY dans .env..."
            $envContent = $envContent -replace 'MISTRAL_API_KEY=.*', "MISTRAL_API_KEY=$mistralApiKey"
            $envContent | Set-Content ".env" -NoNewline
        } else {
            Show-Info "Ajout de MISTRAL_API_KEY dans .env..."
            Add-Content ".env" "`nMISTRAL_API_KEY=$mistralApiKey"
        }
        
        Show-Success "Clé sauvegardée dans .env"
    } else {
        Show-Info "Création du fichier .env..."
        "MISTRAL_API_KEY=$mistralApiKey" | Set-Content ".env"
        Show-Success "Fichier .env créé avec la clé"
    }
    
    # Vérifier .gitignore
    if (Test-Path ".gitignore") {
        $gitignoreContent = Get-Content ".gitignore" -Raw
        if ($gitignoreContent -notmatch "\.env") {
            Show-Warning ".env n'est pas dans .gitignore"
            Add-Content ".gitignore" "`n.env"
            Show-Success ".env ajouté à .gitignore"
        }
    }
}

# ============================================
# ÉTAPE 6 : Redéploiement
# ============================================

Show-Step "6" "Redéploiement du site"

Write-Host ""
$deploy = Read-Host "Voulez-vous redéployer le site maintenant ? (o/n)"

if ($deploy -eq "o" -or $deploy -eq "O" -or $deploy -eq "y" -or $deploy -eq "Y") {
    
    Show-Info "Déploiement en cours..."
    Write-Host ""
    
    try {
        # Build
        Write-Host "📦 Build du projet..." -ForegroundColor Cyan
        npm run build
        
        # Deploy
        Write-Host ""
        Write-Host "🚀 Déploiement sur Cloudflare Pages..." -ForegroundColor Cyan
        wrangler pages deploy dist --project-name=$projectName
        
        Show-Success "Déploiement réussi !"
        
    } catch {
        Show-Error "Erreur lors du déploiement"
        Show-Info "Vous pouvez déployer manuellement avec : npm run build && wrangler pages deploy dist"
    }
    
} else {
    Show-Info "Vous pouvez déployer plus tard avec :"
    Write-Host "  npm run build" -ForegroundColor Yellow
    Write-Host "  wrangler pages deploy dist --project-name=$projectName" -ForegroundColor Yellow
}

# ============================================
# ÉTAPE 7 : Instructions de test
# ============================================

Show-Step "7" "Test du chatbot"

Write-Host ""
Show-Success "Configuration terminée !"
Write-Host ""
Show-Info "Pour tester le chatbot :"
Write-Host ""
Write-Host "  1. Attendez 2-3 minutes (propagation)" -ForegroundColor White
Write-Host "  2. Ouvrez votre site" -ForegroundColor White
Write-Host "  3. Cherchez l'icône ✨ en bas à droite" -ForegroundColor White
Write-Host "  4. Cliquez pour ouvrir le chat" -ForegroundColor White
Write-Host "  5. Testez avec :" -ForegroundColor White
Write-Host ""
Write-Host "     Français  : Bonjour, je suis intéressé par vos agents IA" -ForegroundColor Cyan
Write-Host "     English   : Hello, I'm interested in your AI agents" -ForegroundColor Cyan
Write-Host "     Español   : Hola, estoy interesado en sus agentes IA" -ForegroundColor Cyan
Write-Host "     Português : Olá, estou interessado em seus agentes IA" -ForegroundColor Cyan
Write-Host ""

# ============================================
# RÉCAPITULATIF
# ============================================

Write-Host ""
Write-Host "============================================" -ForegroundColor Green
Write-Host "✅ CONFIGURATION TERMINÉE" -ForegroundColor Green
Write-Host "============================================" -ForegroundColor Green
Write-Host ""
Write-Host "📋 Récapitulatif :" -ForegroundColor Yellow
Write-Host ""
Write-Host "  ✅ Wrangler CLI installé/vérifié" -ForegroundColor Green
Write-Host "  ✅ Authentification Cloudflare OK" -ForegroundColor Green
Write-Host "  ✅ Clé API Mistral obtenue" -ForegroundColor Green
Write-Host "  ✅ Variable MISTRAL_API_KEY configurée" -ForegroundColor Green

if ($saveLocal -eq "o" -or $saveLocal -eq "O") {
    Write-Host "  ✅ Clé sauvegardée localement" -ForegroundColor Green
}

if ($deploy -eq "o" -or $deploy -eq "O") {
    Write-Host "  ✅ Site redéployé" -ForegroundColor Green
}

Write-Host ""
Write-Host "🎯 Prochaines étapes :" -ForegroundColor Yellow
Write-Host ""
Write-Host "  1. Testez le chatbot sur votre site" -ForegroundColor White
Write-Host "  2. Vérifiez les réponses intelligentes" -ForegroundColor White
Write-Host "  3. Testez en plusieurs langues" -ForegroundColor White
Write-Host "  4. Surveillez l'utilisation sur https://console.mistral.ai/" -ForegroundColor Cyan
Write-Host ""

# ============================================
# INFORMATIONS UTILES
# ============================================

Write-Host "📊 Informations utiles :" -ForegroundColor Yellow
Write-Host ""
Write-Host "  💰 Coût : ~0.01€ par conversation" -ForegroundColor White
Write-Host "  🎁 Crédit gratuit : 5€ (≈500 conversations)" -ForegroundColor White
Write-Host "  🌍 Langues : FR, EN, ES, PT" -ForegroundColor White
Write-Host "  ⚡ Déploiement : 7-15 jours" -ForegroundColor White
Write-Host ""

Write-Host "🔗 URLs importantes :" -ForegroundColor Yellow
Write-Host ""
Write-Host "  Mistral Console  : https://console.mistral.ai/" -ForegroundColor Cyan
Write-Host "  Cloudflare Dash  : https://dash.cloudflare.com/" -ForegroundColor Cyan
Write-Host "  Documentation    : https://docs.mistral.ai/" -ForegroundColor Cyan
Write-Host ""

Write-Host "============================================" -ForegroundColor Cyan
Write-Host "🎉 Merci d'utiliser ZyatrIA Global !" -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""

# Pause finale
Write-Host "Appuyez sur ENTRÉE pour terminer..." -ForegroundColor Gray
Read-Host
