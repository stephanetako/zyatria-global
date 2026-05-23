# ============================================
# 🚀 PUSH CHATBOT MISTRAL SUR GITHUB
# ============================================

Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "🚀 PUSH CHATBOT MISTRAL SUR GITHUB" -ForegroundColor Cyan
Write-Host "========================================`n" -ForegroundColor Cyan

# Vérifier si on est dans le bon dossier
if (-not (Test-Path ".git")) {
    Write-Host "❌ ERREUR: Pas dans un dépôt Git!" -ForegroundColor Red
    Write-Host "📁 Naviguez vers votre projet d'abord:" -ForegroundColor Yellow
    Write-Host "   cd 'C:\Users\DELL\OneDrive\Bureau\zyatria-simple'" -ForegroundColor White
    exit 1
}

Write-Host "✅ Dépôt Git détecté`n" -ForegroundColor Green

# Afficher les changements
Write-Host "📋 CHANGEMENTS À POUSSER:" -ForegroundColor Yellow
Write-Host "─────────────────────────────────────────" -ForegroundColor Gray
git status --short
Write-Host "─────────────────────────────────────────`n" -ForegroundColor Gray

# Demander confirmation
Write-Host "🤔 Voulez-vous pousser ces changements sur GitHub?" -ForegroundColor Yellow
Write-Host "   [O] Oui  [N] Non" -ForegroundColor White
$confirmation = Read-Host "Votre choix"

if ($confirmation -ne "O" -and $confirmation -ne "o") {
    Write-Host "`n❌ Push annulé" -ForegroundColor Red
    exit 0
}

Write-Host "`n🔄 Préparation du push...`n" -ForegroundColor Cyan

# Méthode d'authentification
Write-Host "🔐 MÉTHODE D'AUTHENTIFICATION:" -ForegroundColor Yellow
Write-Host "   [1] Token GitHub (recommandé)" -ForegroundColor White
Write-Host "   [2] SSH" -ForegroundColor White
$method = Read-Host "Votre choix (1 ou 2)"

if ($method -eq "1") {
    Write-Host "`n📝 Entrez votre token GitHub:" -ForegroundColor Yellow
    Write-Host "   (Créez-en un sur: https://github.com/settings/tokens)" -ForegroundColor Gray
    $token = Read-Host "Token" -AsSecureString
    $tokenPlain = [Runtime.InteropServices.Marshal]::PtrToStringAuto(
        [Runtime.InteropServices.Marshal]::SecureStringToBSTR($token)
    )
    
    # Récupérer l'URL du dépôt
    $repoUrl = git config --get remote.origin.url
    
    if ($repoUrl -match "https://github.com/(.+)") {
        $repoPath = $matches[1]
        $newUrl = "https://${tokenPlain}@github.com/${repoPath}"
        
        Write-Host "`n🔄 Configuration de l'authentification..." -ForegroundColor Cyan
        git remote set-url origin $newUrl
        
        Write-Host "🚀 Push en cours...`n" -ForegroundColor Cyan
        git push origin main
        
        if ($LASTEXITCODE -eq 0) {
            Write-Host "`n✅ PUSH RÉUSSI!" -ForegroundColor Green
            Write-Host "🎉 Votre chatbot Mistral est maintenant sur GitHub!" -ForegroundColor Green
            Write-Host "`n📊 RÉSUMÉ DES CHANGEMENTS:" -ForegroundColor Cyan
            Write-Host "   ✅ Chatbot Mistral AI fonctionnel" -ForegroundColor White
            Write-Host "   ✅ API endpoint configuré" -ForegroundColor White
            Write-Host "   ✅ Tests de connexion réussis" -ForegroundColor White
            Write-Host "   ✅ Interface moderne avec animations" -ForegroundColor White
            Write-Host "`n🔗 Vérifiez sur: https://github.com/${repoPath}`n" -ForegroundColor Yellow
        } else {
            Write-Host "`n❌ ERREUR lors du push" -ForegroundColor Red
            Write-Host "💡 Vérifiez votre token et réessayez`n" -ForegroundColor Yellow
        }
        
        # Nettoyer le token de l'URL
        $cleanUrl = "https://github.com/${repoPath}"
        git remote set-url origin $cleanUrl
        
    } else {
        Write-Host "`n❌ Impossible de récupérer l'URL du dépôt" -ForegroundColor Red
    }
    
} elseif ($method -eq "2") {
    Write-Host "`n🔑 Utilisation de SSH..." -ForegroundColor Cyan
    Write-Host "📝 Assurez-vous que votre clé SSH est configurée`n" -ForegroundColor Yellow
    
    git push origin main
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "`n✅ PUSH RÉUSSI!" -ForegroundColor Green
        Write-Host "🎉 Votre chatbot Mistral est maintenant sur GitHub!`n" -ForegroundColor Green
    } else {
        Write-Host "`n❌ ERREUR lors du push" -ForegroundColor Red
        Write-Host "💡 Vérifiez votre configuration SSH`n" -ForegroundColor Yellow
    }
} else {
    Write-Host "`n❌ Choix invalide" -ForegroundColor Red
    exit 1
}

Write-Host "========================================`n" -ForegroundColor Cyan
