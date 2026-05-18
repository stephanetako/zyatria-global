# 🚀 Script de Push Automatique vers GitHub
# ZyatrIA Global - Déploiement Automatisé

Write-Host "🚀 ==========================================" -ForegroundColor Cyan
Write-Host "   PUSH AUTOMATIQUE VERS GITHUB" -ForegroundColor Cyan
Write-Host "   ZyatrIA Global" -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host ""

# Vérifier si git est installé
try {
    $null = git --version
} catch {
    Write-Host "❌ Git n'est pas installé" -ForegroundColor Red
    exit 1
}

# Vérifier si on est dans un repo git
if (-not (Test-Path .git)) {
    Write-Host "❌ Ce n'est pas un dépôt Git" -ForegroundColor Red
    exit 1
}

Write-Host "📊 Statut actuel du dépôt..." -ForegroundColor Blue
git status --short
Write-Host ""

# Demander confirmation
Write-Host "⚠️  Voulez-vous pousser tous ces changements vers GitHub ?" -ForegroundColor Yellow
$confirmation = Read-Host "Continuer ? (o/n)"

if ($confirmation -notmatch '^[OoYy]$') {
    Write-Host "❌ Opération annulée" -ForegroundColor Red
    exit 1
}

# Ajouter tous les fichiers
Write-Host "📦 Ajout de tous les fichiers..." -ForegroundColor Blue
git add .

# Demander le message de commit
Write-Host ""
Write-Host "💬 Message de commit (appuyez sur Entrée pour le message par défaut) :" -ForegroundColor Yellow
$commitMsg = Read-Host

if ([string]::IsNullOrWhiteSpace($commitMsg)) {
    $commitMsg = "🚀 Mise à jour automatique - $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
}

# Créer le commit
Write-Host "📝 Création du commit..." -ForegroundColor Blue
git commit -m $commitMsg

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Erreur lors de la création du commit" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "✅ Commit créé avec succès !" -ForegroundColor Green
Write-Host ""

# Vérifier le remote
$remoteUrl = git remote get-url origin
Write-Host "🔗 Remote actuel : $remoteUrl" -ForegroundColor Blue
Write-Host ""

# Méthode d'authentification
Write-Host "🔐 Choisissez la méthode d'authentification :" -ForegroundColor Yellow
Write-Host "1) Token GitHub (Recommandé)"
Write-Host "2) SSH"
Write-Host "3) Essayer le push direct (si déjà configuré)"
Write-Host ""
$authMethod = Read-Host "Votre choix (1/2/3)"
Write-Host ""

switch ($authMethod) {
    "1" {
        Write-Host "🔑 Configuration avec Token GitHub" -ForegroundColor Blue
        Write-Host ""
        Write-Host "📝 Entrez votre token GitHub :" -ForegroundColor Yellow
        Write-Host "(Créez-en un sur : https://github.com/settings/tokens)"
        $githubToken = Read-Host -AsSecureString
        $githubTokenPlain = [Runtime.InteropServices.Marshal]::PtrToStringAuto(
            [Runtime.InteropServices.Marshal]::SecureStringToBSTR($githubToken)
        )
        Write-Host ""
        
        if ([string]::IsNullOrWhiteSpace($githubTokenPlain)) {
            Write-Host "❌ Token vide, opération annulée" -ForegroundColor Red
            exit 1
        }
        
        # Extraire le chemin du repo
        $repoPath = $remoteUrl -replace 'https://github.com/', ''
        
        # Configurer le remote avec le token
        git remote set-url origin "https://$githubTokenPlain@github.com/$repoPath"
        
        Write-Host "✅ Token configuré" -ForegroundColor Green
    }
    
    "2" {
        Write-Host "🔑 Configuration avec SSH" -ForegroundColor Blue
        
        # Extraire le chemin du repo
        $repoPath = $remoteUrl -replace 'https://github.com/', ''
        
        # Configurer le remote en SSH
        git remote set-url origin "git@github.com:$repoPath"
        
        Write-Host "✅ Remote configuré en SSH" -ForegroundColor Green
    }
    
    "3" {
        Write-Host "🔄 Tentative de push direct..." -ForegroundColor Blue
    }
    
    default {
        Write-Host "❌ Choix invalide" -ForegroundColor Red
        exit 1
    }
}

Write-Host ""
Write-Host "🚀 Push vers GitHub en cours..." -ForegroundColor Blue
Write-Host ""

# Pousser vers GitHub
git push origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "==========================================" -ForegroundColor Green
    Write-Host "   ✅ PUSH RÉUSSI !" -ForegroundColor Green
    Write-Host "==========================================" -ForegroundColor Green
    Write-Host ""
    Write-Host "🎉 Vos changements ont été poussés vers GitHub"
    Write-Host "🔗 Voir sur : $remoteUrl"
    Write-Host ""
} else {
    Write-Host ""
    Write-Host "==========================================" -ForegroundColor Red
    Write-Host "   ❌ ERREUR LORS DU PUSH" -ForegroundColor Red
    Write-Host "==========================================" -ForegroundColor Red
    Write-Host ""
    Write-Host "💡 Solutions possibles :"
    Write-Host "   1. Vérifiez votre token GitHub"
    Write-Host "   2. Vérifiez vos clés SSH"
    Write-Host "   3. Vérifiez votre connexion internet"
    Write-Host "   4. Vérifiez les permissions du dépôt"
    Write-Host ""
    exit 1
}
