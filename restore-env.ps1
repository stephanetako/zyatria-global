# ============================================
# RESTAURATION CONFIGURATION COMPLÈTE
# ============================================

Write-Host ""
Write-Host "╔══════════════════════════════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "║                                                              ║" -ForegroundColor Cyan
Write-Host "║     🔑 RESTAURATION CONFIGURATION COMPLÈTE                   ║" -ForegroundColor Cyan
Write-Host "║                                                              ║" -ForegroundColor Cyan
Write-Host "╚══════════════════════════════════════════════════════════════╝" -ForegroundColor Cyan
Write-Host ""

Write-Host "📋 Vérification des fichiers..." -ForegroundColor Blue
Write-Host ""

# Vérifier que le backup existe
if (-not (Test-Path ".env.backup")) {
    Write-Host "❌ Fichier .env.backup introuvable" -ForegroundColor Red
    exit 1
}

Write-Host "✅ Fichier .env.backup trouvé" -ForegroundColor Green
Write-Host ""

# Créer un backup du .env actuel
if (Test-Path ".env") {
    Write-Host "📦 Création d'un backup du .env actuel..." -ForegroundColor Yellow
    Copy-Item ".env" ".env.before-restore" -Force
    Write-Host "✅ Backup créé: .env.before-restore" -ForegroundColor Green
    Write-Host ""
}

# Restaurer depuis le backup
Write-Host "🔄 Restauration du .env depuis le backup..." -ForegroundColor Blue
Copy-Item ".env.backup" ".env" -Force
Write-Host "✅ Fichier .env restauré" -ForegroundColor Green
Write-Host ""

# Afficher les clés configurées
Write-Host "📊 Clés configurées:" -ForegroundColor Blue
Write-Host ""
Get-Content ".env" | Select-String "^[A-Z_]+=" | ForEach-Object {
    $key = $_ -replace "=.*", "=***"
    Write-Host "  ✓ $key" -ForegroundColor Green
}
Write-Host ""

Write-Host "╔══════════════════════════════════════════════════════════════╗" -ForegroundColor Green
Write-Host "║                                                              ║" -ForegroundColor Green
Write-Host "║     ✅ CONFIGURATION RESTAURÉE AVEC SUCCÈS !                 ║" -ForegroundColor Green
Write-Host "║                                                              ║" -ForegroundColor Green
Write-Host "╚══════════════════════════════════════════════════════════════╝" -ForegroundColor Green
Write-Host ""

Write-Host "🎯 Prochaines étapes:" -ForegroundColor Yellow
Write-Host ""
Write-Host "  1. Testez localement:"
Write-Host "     PS> npm run dev" -ForegroundColor Cyan
Write-Host ""
Write-Host "  2. Vérifiez que tout fonctionne:"
Write-Host "     - Formulaires de contact"
Write-Host "     - Chatbot Mistral"
Write-Host "     - Liens Stripe"
Write-Host ""
Write-Host "  3. Déployez sur Cloudflare:"
Write-Host "     PS> npm run build" -ForegroundColor Cyan
Write-Host "     PS> git add ." -ForegroundColor Cyan
Write-Host "     PS> git commit -m '✅ Configuration complète'" -ForegroundColor Cyan
Write-Host "     PS> git push origin main" -ForegroundColor Cyan
Write-Host ""
