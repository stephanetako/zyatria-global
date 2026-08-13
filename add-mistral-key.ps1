# ============================================
# 🔑 Ajouter la clé Mistral API - ZyatrIA Global
# ============================================
# Script simplifié pour votre projet Cloudflare Pages
# URL: zyatria-global.zyatria-contact.workers.dev
# ============================================

Write-Host ""
Write-Host "============================================" -ForegroundColor Cyan
Write-Host "🔑 Configuration Mistral API" -ForegroundColor Cyan
Write-Host "   Projet: zyatria-global" -ForegroundColor White
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""

# ============================================
# ÉTAPE 1 : Obtenir la clé API Mistral
# ============================================

Write-Host "📋 ÉTAPE 1 : Obtenir votre clé API Mistral" -ForegroundColor Yellow
Write-Host ("=" * 50) -ForegroundColor Gray
Write-Host ""

Write-Host "Pour obtenir votre clé API Mistral :" -ForegroundColor White
Write-Host ""
Write-Host "  1. Je vais ouvrir https://console.mistral.ai/ dans votre navigateur" -ForegroundColor Cyan
Write-Host "  2. Connectez-vous ou créez un compte (gratuit)" -ForegroundColor White
Write-Host "  3. Dans le menu de gauche, cliquez sur : API Keys 🔑" -ForegroundColor White
Write-Host "  4. Cliquez sur : Create new key" -ForegroundColor White
Write-Host "  5. Nom suggéré : ZyatrIA-Chatbot-Production" -ForegroundColor White
Write-Host "  6. Copiez la clé (commence par sk-proj-...)" -ForegroundColor White
Write-Host ""

# Ouvrir le navigateur
Write-Host "🌐 Ouverture de Mistral Console..." -ForegroundColor Cyan
Start-Sleep -Seconds 1
Start-Process "https://console.mistral.ai/"

Write-Host ""
Write-Host "⏸️  Appuyez sur ENTRÉE une fois que vous avez copié votre clé API..." -ForegroundColor Yellow
Read-Host

# ============================================
# ÉTAPE 2 : Saisir la clé
# ============================================

Write-Host ""
Write-Host "📋 ÉTAPE 2 : Saisir votre clé API" -ForegroundColor Yellow
Write-Host ("=" * 50) -ForegroundColor Gray
Write-Host ""

$mistralKey = Read-Host "Collez votre clé API Mistral ici"

# Validation
if ([string]::IsNullOrWhiteSpace($mistralKey)) {
    Write-Host "❌ Erreur : Clé vide" -ForegroundColor Red
    exit 1
}

if ($mistralKey -notmatch "^sk-") {
    Write-Host "⚠️  Attention : La clé devrait commencer par 'sk-'" -ForegroundColor Yellow
    $continue = Read-Host "Continuer quand même ? (o/n)"
    if ($continue -ne "o" -and $continue -ne "O") {
        exit 1
    }
}

Write-Host "✅ Clé API reçue" -ForegroundColor Green

# ============================================
# ÉTAPE 3 : Configuration Cloudflare
# ============================================

Write-Host ""
Write-Host "📋 ÉTAPE 3 : Configuration Cloudflare Pages" -ForegroundColor Yellow
Write-Host ("=" * 50) -ForegroundColor Gray
Write-Host ""

Write-Host "🌐 Ouverture du dashboard Cloudflare..." -ForegroundColor Cyan
Start-Sleep -Seconds 1
Start-Process "https://dash.cloudflare.com/"

Write-Host ""
Write-Host "📝 Suivez ces étapes dans votre navigateur :" -ForegroundColor White
Write-Host ""
Write-Host "  1. Dans Cloudflare Dashboard, cliquez sur : Workers & Pages" -ForegroundColor Cyan
Write-Host "  2. Trouvez et cliquez sur : zyatria-global" -ForegroundColor Yellow
Write-Host "  3. Cliquez sur l'onglet : Settings ⚙️" -ForegroundColor Cyan
Write-Host "  4. Dans le menu de gauche : Environment variables" -ForegroundColor Cyan
Write-Host "  5. Cliquez sur : Add variable (ou Edit variables)" -ForegroundColor Cyan
Write-Host ""
Write-Host "  6. Remplissez :" -ForegroundColor White
Write-Host ""
Write-Host "     Variable name:  MISTRAL_API_KEY" -ForegroundColor Yellow
Write-Host "     Value:          [Collez la clé ci-dessous]" -ForegroundColor Yellow
Write-Host ""
Write-Host "  7. Type: Encrypted (par défaut)" -ForegroundColor Cyan
Write-Host "  8. Environment: Production ✅ + Preview ✅" -ForegroundColor Cyan
Write-Host "  9. Cliquez sur : Save" -ForegroundColor Cyan
Write-Host ""

# Afficher la clé pour faciliter le copier-coller
Write-Host ("=" * 50) -ForegroundColor Green
Write-Host "📋 VOTRE CLÉ À COPIER :" -ForegroundColor Green
Write-Host ("=" * 50) -ForegroundColor Green
Write-Host ""
Write-Host $mistralKey -ForegroundColor White
Write-Host ""
Write-Host ("=" * 50) -ForegroundColor Green
Write-Host ""

Write-Host "💡 Conseil : Sélectionnez la clé ci-dessus et copiez-la (Ctrl+C)" -ForegroundColor Cyan
Write-Host ""

Write-Host "⏸️  Appuyez sur ENTRÉE une fois la variable ajoutée dans Cloudflare..." -ForegroundColor Yellow
Read-Host

# ============================================
# ÉTAPE 4 : Sauvegarde locale (optionnel)
# ============================================

Write-Host ""
Write-Host "📋 ÉTAPE 4 : Sauvegarde locale (optionnel)" -ForegroundColor Yellow
Write-Host ("=" * 50) -ForegroundColor Gray
Write-Host ""

$saveLocal = Read-Host "Voulez-vous aussi sauvegarder la clé dans .env local ? (o/n)"

if ($saveLocal -eq "o" -or $saveLocal -eq "O") {
    
    if (Test-Path ".env") {
        $envContent = Get-Content ".env" -Raw
        
        if ($envContent -match "MISTRAL_API_KEY") {
            # Remplacer
            $envContent = $envContent -replace 'MISTRAL_API_KEY=.*', "MISTRAL_API_KEY=$mistralKey"
            $envContent | Set-Content ".env" -NoNewline
            Write-Host "✅ MISTRAL_API_KEY mis à jour dans .env" -ForegroundColor Green
        } else {
            # Ajouter
            Add-Content ".env" "`nMISTRAL_API_KEY=$mistralKey"
            Write-Host "✅ MISTRAL_API_KEY ajouté dans .env" -ForegroundColor Green
        }
    } else {
        # Créer .env
        "MISTRAL_API_KEY=$mistralKey" | Set-Content ".env"
        Write-Host "✅ Fichier .env créé avec MISTRAL_API_KEY" -ForegroundColor Green
    }
    
    # Vérifier .gitignore
    if (Test-Path ".gitignore") {
        $gitignoreContent = Get-Content ".gitignore" -Raw
        if ($gitignoreContent -notmatch "\.env") {
            Add-Content ".gitignore" "`n.env"
            Write-Host "✅ .env ajouté à .gitignore (sécurité)" -ForegroundColor Green
        }
    }
}

# ============================================
# ÉTAPE 5 : Redéploiement
# ============================================

Write-Host ""
Write-Host "📋 ÉTAPE 5 : Redéploiement" -ForegroundColor Yellow
Write-Host ("=" * 50) -ForegroundColor Gray
Write-Host ""

Write-Host "Pour que la nouvelle variable soit active, vous devez redéployer." -ForegroundColor White
Write-Host ""
Write-Host "Deux options :" -ForegroundColor Cyan
Write-Host ""
Write-Host "  A) Redéploiement automatique depuis Cloudflare Dashboard" -ForegroundColor White
Write-Host "     1. Dans Cloudflare → zyatria-global → Deployments" -ForegroundColor Gray
Write-Host "     2. Cliquez sur ⋮ (3 points) du dernier déploiement" -ForegroundColor Gray
Write-Host "     3. Cliquez sur : Retry deployment" -ForegroundColor Gray
Write-Host ""
Write-Host "  B) Push Git (si connecté à GitHub)" -ForegroundColor White
Write-Host "     git add ." -ForegroundColor Gray
Write-Host "     git commit -m 'Add Mistral API key'" -ForegroundColor Gray
Write-Host "     git push" -ForegroundColor Gray
Write-Host ""

$deployChoice = Read-Host "Voulez-vous que je vous guide pour l'option A ? (o/n)"

if ($deployChoice -eq "o" -or $deployChoice -eq "O") {
    Write-Host ""
    Write-Host "🌐 Ouverture de la page Deployments..." -ForegroundColor Cyan
    Start-Process "https://dash.cloudflare.com/"
    
    Write-Host ""
    Write-Host "📝 Dans Cloudflare Dashboard :" -ForegroundColor White
    Write-Host ""
    Write-Host "  1. Workers & Pages → zyatria-global" -ForegroundColor Cyan
    Write-Host "  2. Onglet : Deployments" -ForegroundColor Cyan
    Write-Host "  3. Trouvez le dernier déploiement (en haut)" -ForegroundColor Cyan
    Write-Host "  4. Cliquez sur ⋮ (3 points à droite)" -ForegroundColor Cyan
    Write-Host "  5. Cliquez sur : Retry deployment" -ForegroundColor Cyan
    Write-Host "  6. Attendez 2-3 minutes" -ForegroundColor Cyan
    Write-Host ""
}

# ============================================
# ÉTAPE 6 : Test
# ============================================

Write-Host ""
Write-Host "📋 ÉTAPE 6 : Tester le chatbot" -ForegroundColor Yellow
Write-Host ("=" * 50) -ForegroundColor Gray
Write-Host ""

Write-Host "Une fois le redéploiement terminé :" -ForegroundColor White
Write-Host ""
Write-Host "  1. Allez sur : https://zyatria-global.zyatria-contact.workers.dev" -ForegroundColor Cyan
Write-Host "  2. Cherchez l'icône ✨ en bas à droite" -ForegroundColor White
Write-Host "  3. Cliquez pour ouvrir le chatbot" -ForegroundColor White
Write-Host "  4. Testez avec :" -ForegroundColor White
Write-Host ""
Write-Host "     Français  : Bonjour, je suis intéressé par vos agents IA" -ForegroundColor Yellow
Write-Host "     English   : Hello, I'm interested in your AI agents" -ForegroundColor Yellow
Write-Host "     Español   : Hola, estoy interesado en sus agentes IA" -ForegroundColor Yellow
Write-Host "     Português : Olá, estou interessado em seus agentes IA" -ForegroundColor Yellow
Write-Host ""

$openSite = Read-Host "Voulez-vous ouvrir votre site maintenant ? (o/n)"

if ($openSite -eq "o" -or $openSite -eq "O") {
    Write-Host ""
    Write-Host "🌐 Ouverture de votre site..." -ForegroundColor Cyan
    Start-Process "https://zyatria-global.zyatria-contact.workers.dev"
}

# ============================================
# RÉCAPITULATIF
# ============================================

Write-Host ""
Write-Host "============================================" -ForegroundColor Green
Write-Host "✅ CONFIGURATION TERMINÉE" -ForegroundColor Green
Write-Host "============================================" -ForegroundColor Green
Write-Host ""

Write-Host "📋 Ce qui a été fait :" -ForegroundColor Yellow
Write-Host ""
Write-Host "  ✅ Clé API Mistral obtenue" -ForegroundColor Green
Write-Host "  ✅ Instructions Cloudflare fournies" -ForegroundColor Green

if ($saveLocal -eq "o" -or $saveLocal -eq "O") {
    Write-Host "  ✅ Clé sauvegardée dans .env local" -ForegroundColor Green
}

Write-Host ""
Write-Host "🎯 Prochaines étapes :" -ForegroundColor Yellow
Write-Host ""
Write-Host "  1. ⏳ Attendez la fin du redéploiement (2-3 min)" -ForegroundColor White
Write-Host "  2. 🧪 Testez le chatbot sur votre site" -ForegroundColor White
Write-Host "  3. 🌍 Vérifiez les 4 langues (FR, EN, ES, PT)" -ForegroundColor White
Write-Host "  4. 📊 Surveillez l'utilisation : https://console.mistral.ai/" -ForegroundColor Cyan
Write-Host ""

Write-Host "💰 Informations de facturation :" -ForegroundColor Yellow
Write-Host ""
Write-Host "  • Crédit gratuit : 5€ (~500 conversations)" -ForegroundColor White
Write-Host "  • Coût par conversation : ~0.01€" -ForegroundColor White
Write-Host "  • Langues supportées : FR, EN, ES, PT" -ForegroundColor White
Write-Host ""

Write-Host "🔗 Liens utiles :" -ForegroundColor Yellow
Write-Host ""
Write-Host "  Votre site      : https://zyatria-global.zyatria-contact.workers.dev" -ForegroundColor Cyan
Write-Host "  Mistral Console : https://console.mistral.ai/" -ForegroundColor Cyan
Write-Host "  Cloudflare Dash : https://dash.cloudflare.com/" -ForegroundColor Cyan
Write-Host ""

Write-Host "============================================" -ForegroundColor Cyan
Write-Host "🎉 Merci d'utiliser ZyatrIA Global !" -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "Appuyez sur ENTRÉE pour terminer..." -ForegroundColor Gray
Read-Host
