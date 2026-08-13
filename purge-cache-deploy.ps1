#!/usr/bin/env pwsh

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  PURGE CACHE & REDEPLOY CLOUDFLARE" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Étape 1 : Build du projet
Write-Host "📦 Étape 1/4 : Build du projet..." -ForegroundColor Yellow
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Erreur lors du build" -ForegroundColor Red
    exit 1
}
Write-Host "✅ Build réussi" -ForegroundColor Green
Write-Host ""

# Étape 2 : Commit des changements
Write-Host "💾 Étape 2/4 : Commit des changements..." -ForegroundColor Yellow
git add .
git commit -m "fix: purge cache and redeploy - $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
Write-Host "✅ Changements commités" -ForegroundColor Green
Write-Host ""

# Étape 3 : Push vers GitHub
Write-Host "🚀 Étape 3/4 : Push vers GitHub..." -ForegroundColor Yellow
git push origin main
if ($LASTEXITCODE -ne 0) {
    Write-Host "⚠️  Tentative avec 'master'..." -ForegroundColor Yellow
    git push origin master
}
Write-Host "✅ Push réussi" -ForegroundColor Green
Write-Host ""

# Étape 4 : Instructions pour purger le cache
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  ☁️  PURGER LE CACHE CLOUDFLARE" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "🔧 ACTIONS MANUELLES REQUISES :" -ForegroundColor Yellow
Write-Host ""
Write-Host "1️⃣  Ouvrir le Dashboard Cloudflare :" -ForegroundColor White
Write-Host "   https://dash.cloudflare.com" -ForegroundColor Cyan
Write-Host ""
Write-Host "2️⃣  Aller dans :" -ForegroundColor White
Write-Host "   Workers & Pages → zyatria-global → Settings" -ForegroundColor Cyan
Write-Host ""
Write-Host "3️⃣  Cliquer sur :" -ForegroundColor White
Write-Host "   'Purge Cache' ou 'Clear Cache'" -ForegroundColor Cyan
Write-Host ""
Write-Host "4️⃣  Attendre 2-3 minutes puis tester :" -ForegroundColor White
Write-Host "   https://votre-site.pages.dev/test-final.html" -ForegroundColor Cyan
Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  🧪 TESTS À EFFECTUER" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "✅ Test 1 : Page de diagnostic" -ForegroundColor Green
Write-Host "   URL : /test-final.html" -ForegroundColor White
Write-Host ""
Write-Host "✅ Test 2 : Navigation privée" -ForegroundColor Green
Write-Host "   Ctrl + Shift + N (Chrome)" -ForegroundColor White
Write-Host ""
Write-Host "✅ Test 3 : Console navigateur" -ForegroundColor Green
Write-Host "   F12 → Console → Chercher erreurs" -ForegroundColor White
Write-Host ""
Write-Host "✅ Test 4 : Cache navigateur" -ForegroundColor Green
Write-Host "   Ctrl + Shift + R (hard refresh)" -ForegroundColor White
Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  📊 DIAGNOSTIC COMPLET" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Si la page reste blanche après purge du cache :" -ForegroundColor Yellow
Write-Host ""
Write-Host "1. Ouvrir la console navigateur (F12)" -ForegroundColor White
Write-Host "2. Noter les erreurs en rouge" -ForegroundColor White
Write-Host "3. Vérifier l'onglet 'Network' pour les 404" -ForegroundColor White
Write-Host "4. Tester /test-final.html pour confirmer que Cloudflare fonctionne" -ForegroundColor White
Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  ✅ DÉPLOIEMENT TERMINÉ" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "⏳ Attendre 2-3 minutes pour la propagation..." -ForegroundColor Yellow
Write-Host "🔄 Puis purger le cache Cloudflare manuellement" -ForegroundColor Yellow
Write-Host ""
