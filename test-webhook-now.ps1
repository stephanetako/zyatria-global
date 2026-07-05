#!/usr/bin/env pwsh
# Test automatique du webhook Stripe
# Utilisation: .\test-webhook-now.ps1

Write-Host "🚀 DEMARRAGE DU TEST WEBHOOK STRIPE" -ForegroundColor Cyan
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host ""

# Vérifier que Stripe CLI est installé
Write-Host "🔍 Vérification de Stripe CLI..." -ForegroundColor Yellow
$stripeVersion = stripe --version 2>&1
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Stripe CLI n'est pas installé!" -ForegroundColor Red
    Write-Host "   Installez-le avec: scoop install stripe" -ForegroundColor Yellow
    exit 1
}
Write-Host "✅ Stripe CLI installé: $stripeVersion" -ForegroundColor Green
Write-Host ""

# Vérifier le fichier .env
Write-Host "🔍 Vérification du fichier .env..." -ForegroundColor Yellow
if (-not (Test-Path ".env")) {
    Write-Host "❌ Fichier .env introuvable!" -ForegroundColor Red
    exit 1
}

$envContent = Get-Content ".env" -Raw
if ($envContent -notmatch "STRIPE_WEBHOOK_SECRET=whsec_") {
    Write-Host "❌ STRIPE_WEBHOOK_SECRET non configuré dans .env!" -ForegroundColor Red
    Write-Host "   Exécutez d'abord: stripe listen --print-secret" -ForegroundColor Yellow
    exit 1
}
Write-Host "✅ Fichier .env configuré" -ForegroundColor Green
Write-Host ""

# Démarrer le serveur de dev en arrière-plan
Write-Host "🚀 Démarrage du serveur de développement..." -ForegroundColor Yellow
$devProcess = Start-Process -FilePath "npm" -ArgumentList "run", "dev" -PassThru -NoNewWindow
Start-Sleep -Seconds 5

Write-Host "✅ Serveur démarré (PID: $($devProcess.Id))" -ForegroundColor Green
Write-Host ""

# Démarrer Stripe listen en arrière-plan
Write-Host "🎧 Démarrage de Stripe listen..." -ForegroundColor Yellow
$stripeProcess = Start-Process -FilePath "stripe" -ArgumentList "listen", "--forward-to", "localhost:4321/api/stripe/webhook" -PassThru -NoNewWindow
Start-Sleep -Seconds 3

Write-Host "✅ Stripe listen démarré (PID: $($stripeProcess.Id))" -ForegroundColor Green
Write-Host ""

# Attendre que tout soit prêt
Write-Host "⏳ Attente de 5 secondes pour que tout soit prêt..." -ForegroundColor Yellow
Start-Sleep -Seconds 5
Write-Host ""

# Envoyer le webhook de test
Write-Host "📤 ENVOI DU WEBHOOK DE TEST..." -ForegroundColor Cyan
Write-Host "=====================================" -ForegroundColor Cyan
stripe trigger payment_intent.succeeded
Write-Host ""

# Attendre un peu pour voir les logs
Write-Host "⏳ Attente de 3 secondes pour voir les logs..." -ForegroundColor Yellow
Start-Sleep -Seconds 3
Write-Host ""

# Afficher les instructions
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host "✅ TEST TERMINÉ!" -ForegroundColor Green
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "📋 VÉRIFIEZ LES LOGS CI-DESSUS" -ForegroundColor Yellow
Write-Host ""
Write-Host "Si vous voyez:" -ForegroundColor White
Write-Host "  ✅ '🔔 Webhook received: payment_intent.succeeded' = SUCCÈS!" -ForegroundColor Green
Write-Host "  ❌ '[404] POST /api/stripe/webhook' = ÉCHEC!" -ForegroundColor Red
Write-Host ""
Write-Host "Pour arrêter les processus:" -ForegroundColor Yellow
Write-Host "  Stop-Process -Id $($devProcess.Id) -Force" -ForegroundColor Gray
Write-Host "  Stop-Process -Id $($stripeProcess.Id) -Force" -ForegroundColor Gray
Write-Host ""
Write-Host "Ou appuyez sur Ctrl+C dans ce terminal" -ForegroundColor Yellow
Write-Host ""

# Garder le script ouvert
Write-Host "Appuyez sur une touche pour arrêter tous les processus..." -ForegroundColor Cyan
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")

# Nettoyer
Write-Host ""
Write-Host "🧹 Nettoyage..." -ForegroundColor Yellow
Stop-Process -Id $devProcess.Id -Force -ErrorAction SilentlyContinue
Stop-Process -Id $stripeProcess.Id -Force -ErrorAction SilentlyContinue
Write-Host "✅ Terminé!" -ForegroundColor Green
