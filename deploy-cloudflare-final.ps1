Write-Host "🚀 DÉPLOIEMENT COMPLET VERS CLOUDFLARE" -ForegroundColor Cyan
Write-Host "=======================================" -ForegroundColor Cyan
Write-Host ""

# Étape 1 : Nettoyer
Write-Host "🧹 Étape 1/5 : Nettoyage..." -ForegroundColor Yellow
if (Test-Path "dist") { Remove-Item -Recurse -Force "dist" }
if (Test-Path ".astro") { Remove-Item -Recurse -Force ".astro" }
Write-Host "✅ Nettoyage terminé" -ForegroundColor Green
Write-Host ""

# Étape 2 : Installer les dépendances
Write-Host "📦 Étape 2/5 : Installation des dépendances..." -ForegroundColor Yellow
npm ci --prefer-offline --no-audit
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Erreur lors de l'installation des dépendances" -ForegroundColor Red
    exit 1
}
Write-Host "✅ Dépendances installées" -ForegroundColor Green
Write-Host ""

# Étape 3 : Build
Write-Host "🔨 Étape 3/5 : Build du projet (MODE SERVER)..." -ForegroundColor Yellow
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Erreur lors du build" -ForegroundColor Red
    exit 1
}
Write-Host "✅ Build terminé" -ForegroundColor Green
Write-Host ""

# Étape 4 : Vérification
Write-Host "🔍 Étape 4/5 : Vérification du mode SERVER..." -ForegroundColor Yellow
if (Test-Path "dist/_worker.js") {
    Write-Host "✅ SUCCESS: _worker.js trouvé (MODE SERVER activé)" -ForegroundColor Green
    $fileSize = (Get-Item "dist/_worker.js").Length / 1KB
    Write-Host "📊 Taille du fichier: $([math]::Round($fileSize, 2)) KB" -ForegroundColor Cyan
} else {
    Write-Host "❌ ERREUR: _worker.js non trouvé (MODE STATIC détecté)" -ForegroundColor Red
    Write-Host "🔍 Contenu du dossier dist/:" -ForegroundColor Yellow
    Get-ChildItem "dist" -Force | Format-Table Name, Length
    Write-Host ""
    Write-Host "⚠️  Le site ne fonctionnera pas correctement sur Cloudflare" -ForegroundColor Red
    Write-Host "💡 Vérifiez astro.config.mjs → output: 'server'" -ForegroundColor Yellow
    exit 1
}
Write-Host ""

# Étape 5 : Git push
Write-Host "📤 Étape 5/5 : Push vers GitHub..." -ForegroundColor Yellow
Write-Host "Voulez-vous pousser les changements vers GitHub maintenant? (O/N)" -ForegroundColor Cyan
$response = Read-Host

if ($response -eq "O" -or $response -eq "o") {
    git add .
    git commit -m "Fix: Configuration Cloudflare optimisée - Mode SERVER activé"
    git push origin main
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✅ Push réussi vers GitHub" -ForegroundColor Green
        Write-Host ""
        Write-Host "🎉 DÉPLOIEMENT TERMINÉ AVEC SUCCÈS!" -ForegroundColor Green
        Write-Host ""
        Write-Host "📋 PROCHAINES ÉTAPES:" -ForegroundColor Cyan
        Write-Host "1. Allez sur Cloudflare Dashboard → Pages" -ForegroundColor White
        Write-Host "2. Attendez 2-3 minutes que le déploiement se termine" -ForegroundColor White
        Write-Host "3. Testez votre site sur: https://zyatria-global.pages.dev" -ForegroundColor White
        Write-Host ""
        Write-Host "🔑 N'oubliez pas de configurer vos variables d'environnement:" -ForegroundColor Yellow
        Write-Host "   - MISTRAL_API_KEY" -ForegroundColor White
        Write-Host "   - FORMSPREE_FORM_ID" -ForegroundColor White
        Write-Host "   - STRIPE_SECRET_KEY (optionnel)" -ForegroundColor White
    } else {
        Write-Host "❌ Erreur lors du push vers GitHub" -ForegroundColor Red
        exit 1
    }
} else {
    Write-Host "⏸️  Push annulé. Vous pouvez le faire manuellement avec:" -ForegroundColor Yellow
    Write-Host "   git add ." -ForegroundColor White
    Write-Host "   git commit -m 'Fix: Configuration Cloudflare optimisée'" -ForegroundColor White
    Write-Host "   git push origin main" -ForegroundColor White
}

Write-Host ""
Write-Host "✨ Script terminé!" -ForegroundColor Green
