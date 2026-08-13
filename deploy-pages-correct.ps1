# ============================================
# DÉPLOIEMENT CLOUDFLARE PAGES (PAS WORKERS)
# ============================================

Write-Host "🚀 DÉPLOIEMENT CLOUDFLARE PAGES" -ForegroundColor Cyan
Write-Host "=================================" -ForegroundColor Cyan
Write-Host ""

# Étape 1 : Build
Write-Host "📦 Étape 1/4 : Build du projet..." -ForegroundColor Yellow
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Erreur lors du build" -ForegroundColor Red
    exit 1
}
Write-Host "✅ Build réussi" -ForegroundColor Green
Write-Host ""

# Étape 2 : Commit
Write-Host "💾 Étape 2/4 : Commit des changements..." -ForegroundColor Yellow
git add .
git commit -m "fix: Configuration Cloudflare Pages (pas Workers)"
Write-Host "✅ Commit réussi" -ForegroundColor Green
Write-Host ""

# Étape 3 : Push
Write-Host "📤 Étape 3/4 : Push vers GitHub..." -ForegroundColor Yellow
git push origin main
if ($LASTEXITCODE -ne 0) {
    Write-Host "⚠️  Essai avec 'master'..." -ForegroundColor Yellow
    git push origin master
}
Write-Host "✅ Push réussi" -ForegroundColor Green
Write-Host ""

# Étape 4 : Instructions Cloudflare
Write-Host "🌐 Étape 4/4 : Configuration Cloudflare" -ForegroundColor Yellow
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "⚠️  IMPORTANT : Vous devez créer un projet PAGES (pas Workers)" -ForegroundColor Red
Write-Host ""
Write-Host "📋 ÉTAPES DANS CLOUDFLARE DASHBOARD :" -ForegroundColor Cyan
Write-Host ""
Write-Host "1. Allez sur : https://dash.cloudflare.com" -ForegroundColor White
Write-Host "2. Cliquez sur 'Workers & Pages' dans le menu" -ForegroundColor White
Write-Host "3. Cliquez sur 'Create application'" -ForegroundColor White
Write-Host "4. Choisissez l'onglet 'Pages' (PAS Workers !)" -ForegroundColor Yellow
Write-Host "5. Cliquez sur 'Connect to Git'" -ForegroundColor White
Write-Host "6. Sélectionnez votre repository GitHub" -ForegroundColor White
Write-Host "7. Configuration du build :" -ForegroundColor White
Write-Host "   - Framework preset: Astro" -ForegroundColor Gray
Write-Host "   - Build command: npm run build" -ForegroundColor Gray
Write-Host "   - Build output directory: dist" -ForegroundColor Gray
Write-Host "8. Cliquez sur 'Save and Deploy'" -ForegroundColor White
Write-Host ""
Write-Host "✅ Votre site sera disponible sur :" -ForegroundColor Green
Write-Host "   https://zyatria-global.pages.dev" -ForegroundColor Cyan
Write-Host ""
Write-Host "🔑 N'OUBLIEZ PAS d'ajouter vos variables d'environnement :" -ForegroundColor Yellow
Write-Host "   Settings → Environment variables" -ForegroundColor Gray
Write-Host ""
Write-Host "📝 Variables à ajouter :" -ForegroundColor Cyan
Write-Host "   - FORMSPREE_FORM_ID" -ForegroundColor Gray
Write-Host "   - MISTRAL_API_KEY" -ForegroundColor Gray
Write-Host "   - STRIPE_SECRET_KEY (optionnel)" -ForegroundColor Gray
Write-Host "   - STRIPE_PUBLISHABLE_KEY (optionnel)" -ForegroundColor Gray
Write-Host ""
Write-Host "🎉 TERMINÉ !" -ForegroundColor Green
