# 🚀 Script PowerShell - Push vers GitHub
# ZyatrIA Global - Déploiement Final

Write-Host "🚀 Push vers GitHub - ZyatrIA Global" -ForegroundColor Cyan
Write-Host "=" * 60 -ForegroundColor Cyan
Write-Host ""

# Vérifier si on est dans le bon répertoire
if (-Not (Test-Path "package.json")) {
    Write-Host "❌ ERREUR: Vous n'êtes pas dans le répertoire du projet!" -ForegroundColor Red
    Write-Host "📁 Naviguez d'abord vers le dossier zyatria-global" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Exemple:" -ForegroundColor Yellow
    Write-Host "  cd C:\Users\VotreNom\Documents\zyatria-global" -ForegroundColor White
    exit 1
}

Write-Host "✅ Répertoire du projet détecté" -ForegroundColor Green
Write-Host ""

# Vérifier Git
Write-Host "🔍 Vérification de Git..." -ForegroundColor Yellow
try {
    $gitVersion = git --version
    Write-Host "✅ Git installé: $gitVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Git n'est pas installé!" -ForegroundColor Red
    Write-Host "📥 Téléchargez Git: https://git-scm.com/download/win" -ForegroundColor Yellow
    exit 1
}
Write-Host ""

# Vérifier le remote
Write-Host "🔍 Vérification du repository GitHub..." -ForegroundColor Yellow
$remote = git remote get-url origin 2>$null
if ($remote) {
    Write-Host "✅ Repository: $remote" -ForegroundColor Green
} else {
    Write-Host "❌ Aucun repository GitHub configuré!" -ForegroundColor Red
    Write-Host "📝 Configurez d'abord votre repository" -ForegroundColor Yellow
    exit 1
}
Write-Host ""

# Vérifier le statut
Write-Host "📊 Statut Git actuel:" -ForegroundColor Yellow
git status --short
Write-Host ""

# Vérifier s'il y a des commits à pousser
Write-Host "🔍 Vérification des commits à pousser..." -ForegroundColor Yellow
$ahead = git rev-list --count origin/master..HEAD 2>$null
if ($ahead -eq $null -or $ahead -eq 0) {
    Write-Host "⚠️  Aucun commit à pousser" -ForegroundColor Yellow
    Write-Host "💡 Tout est déjà à jour sur GitHub" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "Voulez-vous quand même forcer le push? (o/N)" -ForegroundColor Yellow
    $force = Read-Host
    if ($force -ne "o" -and $force -ne "O") {
        Write-Host "✅ Opération annulée" -ForegroundColor Green
        exit 0
    }
} else {
    Write-Host "✅ $ahead commit(s) à pousser" -ForegroundColor Green
}
Write-Host ""

# Demander confirmation
Write-Host "🚀 Prêt à pousser vers GitHub" -ForegroundColor Cyan
Write-Host "=" * 60 -ForegroundColor Cyan
Write-Host ""
Write-Host "Repository: $remote" -ForegroundColor White
Write-Host "Branche: master" -ForegroundColor White
Write-Host ""
Write-Host "⚠️  IMPORTANT:" -ForegroundColor Yellow
Write-Host "   Si vous avez l'authentification 2FA activée," -ForegroundColor Yellow
Write-Host "   vous aurez besoin d'un Personal Access Token" -ForegroundColor Yellow
Write-Host ""
Write-Host "Continuer? (O/n)" -ForegroundColor Cyan
$confirm = Read-Host

if ($confirm -eq "n" -or $confirm -eq "N") {
    Write-Host "❌ Push annulé" -ForegroundColor Red
    exit 0
}

Write-Host ""
Write-Host "🚀 Push en cours..." -ForegroundColor Cyan
Write-Host ""

# Effectuer le push
try {
    git push origin master
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host ""
        Write-Host "=" * 60 -ForegroundColor Green
        Write-Host "✅ PUSH RÉUSSI!" -ForegroundColor Green
        Write-Host "=" * 60 -ForegroundColor Green
        Write-Host ""
        Write-Host "🎉 Votre code est maintenant sur GitHub!" -ForegroundColor Cyan
        Write-Host ""
        Write-Host "📋 Prochaines étapes:" -ForegroundColor Yellow
        Write-Host "   1. Allez sur https://dash.cloudflare.com" -ForegroundColor White
        Write-Host "   2. Workers & Pages → Create Application" -ForegroundColor White
        Write-Host "   3. Pages → Connect to Git" -ForegroundColor White
        Write-Host "   4. Sélectionnez: stephanetako/zyatria-global" -ForegroundColor White
        Write-Host ""
        Write-Host "🔗 Votre repository:" -ForegroundColor Cyan
        Write-Host "   $remote" -ForegroundColor White
        Write-Host ""
    } else {
        throw "Push failed"
    }
} catch {
    Write-Host ""
    Write-Host "=" * 60 -ForegroundColor Red
    Write-Host "❌ ERREUR LORS DU PUSH" -ForegroundColor Red
    Write-Host "=" * 60 -ForegroundColor Red
    Write-Host ""
    
    # Vérifier le type d'erreur
    $errorMessage = $Error[0].Exception.Message
    
    if ($errorMessage -match "Authentication failed" -or $errorMessage -match "403") {
        Write-Host "🔑 PROBLÈME D'AUTHENTIFICATION" -ForegroundColor Yellow
        Write-Host ""
        Write-Host "Solution: Créez un Personal Access Token" -ForegroundColor Cyan
        Write-Host ""
        Write-Host "Étapes:" -ForegroundColor Yellow
        Write-Host "1. Allez sur: https://github.com/settings/tokens" -ForegroundColor White
        Write-Host "2. Cliquez sur 'Generate new token' → 'Classic'" -ForegroundColor White
        Write-Host "3. Cochez 'repo' (tous les sous-items)" -ForegroundColor White
        Write-Host "4. Générez et copiez le token" -ForegroundColor White
        Write-Host "5. Utilisez-le comme mot de passe lors du push" -ForegroundColor White
        Write-Host ""
        Write-Host "Puis réessayez:" -ForegroundColor Yellow
        Write-Host "   git push origin master" -ForegroundColor White
        Write-Host "   Username: stephanetako" -ForegroundColor White
        Write-Host "   Password: [VOTRE_TOKEN]" -ForegroundColor White
        Write-Host ""
    } elseif ($errorMessage -match "rejected" -or $errorMessage -match "non-fast-forward") {
        Write-Host "⚠️  CONFLIT DÉTECTÉ" -ForegroundColor Yellow
        Write-Host ""
        Write-Host "Solution: Synchronisez d'abord avec GitHub" -ForegroundColor Cyan
        Write-Host ""
        Write-Host "Commandes:" -ForegroundColor Yellow
        Write-Host "   git pull origin master --rebase" -ForegroundColor White
        Write-Host "   git push origin master" -ForegroundColor White
        Write-Host ""
    } else {
        Write-Host "Erreur: $errorMessage" -ForegroundColor Red
        Write-Host ""
        Write-Host "💡 Essayez:" -ForegroundColor Yellow
        Write-Host "   git status" -ForegroundColor White
        Write-Host "   git remote -v" -ForegroundColor White
        Write-Host ""
    }
    
    exit 1
}

Write-Host "Appuyez sur une touche pour continuer..." -ForegroundColor Gray
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
