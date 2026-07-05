# 🧪 Script de Test Automatisé des Webhooks Stripe (PowerShell)
# Ce script teste tous les scénarios de webhooks

Write-Host "🧪 TEST AUTOMATISÉ DES WEBHOOKS STRIPE" -ForegroundColor Cyan
Write-Host "======================================" -ForegroundColor Cyan
Write-Host ""

# Vérifier que Stripe CLI est installé
$stripeVersion = stripe --version 2>$null
if (-not $stripeVersion) {
    Write-Host "❌ Stripe CLI n'est pas installé" -ForegroundColor Red
    Write-Host "📥 Installation requise:" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Windows: scoop install stripe" -ForegroundColor White
    Write-Host ""
    exit 1
}

Write-Host "✅ Stripe CLI détecté: $stripeVersion" -ForegroundColor Green
Write-Host ""

# Vérifier que le serveur est démarré
try {
    $response = Invoke-WebRequest -Uri "http://localhost:4321" -UseBasicParsing -TimeoutSec 2 -ErrorAction Stop
    Write-Host "✅ Serveur local actif" -ForegroundColor Green
} catch {
    Write-Host "❌ Le serveur n'est pas démarré sur le port 4321" -ForegroundColor Red
    Write-Host "💡 Démarrez-le avec: npm run dev" -ForegroundColor Yellow
    Write-Host ""
    exit 1
}

Write-Host ""

# Fonction pour tester un événement
function Test-Event {
    param(
        [string]$EventName,
        [string]$Description
    )
    
    Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Gray
    Write-Host "📋 TEST: $Description" -ForegroundColor Cyan
    Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Gray
    Write-Host ""
    Write-Host "🚀 Déclenchement de l'événement: $EventName" -ForegroundColor Yellow
    Write-Host ""
    
    # Déclencher l'événement
    stripe trigger $EventName
    
    Write-Host ""
    Write-Host "⏳ Attente de 2 secondes..." -ForegroundColor Gray
    Start-Sleep -Seconds 2
    Write-Host ""
}

# Afficher les instructions
Write-Host "📝 INSTRUCTIONS:" -ForegroundColor Yellow
Write-Host "1. Assurez-vous que 'stripe listen' est actif dans un autre terminal" -ForegroundColor White
Write-Host "2. Commande: stripe listen --forward-to localhost:4321/api/stripe/webhook" -ForegroundColor White
Write-Host "3. Appuyez sur ENTRÉE pour continuer..." -ForegroundColor White
Read-Host

Write-Host ""
Write-Host "🎯 DÉBUT DES TESTS" -ForegroundColor Cyan
Write-Host "==================" -ForegroundColor Cyan
Write-Host ""

# Test 1: Paiement réussi
Test-Event -EventName "payment_intent.succeeded" -Description "Paiement Réussi"

# Test 2: Checkout complété
Test-Event -EventName "checkout.session.completed" -Description "Checkout Complété"

# Test 3: Nouvel abonnement
Test-Event -EventName "customer.subscription.created" -Description "Nouvel Abonnement (Période d'Essai)"

# Test 4: Abonnement mis à jour
Test-Event -EventName "customer.subscription.updated" -Description "Abonnement Mis à Jour"

# Test 5: Paiement échoué
Test-Event -EventName "payment_intent.payment_failed" -Description "Paiement Échoué"

# Test 6: Abonnement supprimé
Test-Event -EventName "customer.subscription.deleted" -Description "Abonnement Supprimé"

Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Gray
Write-Host "✅ TOUS LES TESTS TERMINÉS" -ForegroundColor Green
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Gray
Write-Host ""
Write-Host "📊 RÉSUMÉ:" -ForegroundColor Cyan
Write-Host "   ✅ 6 événements déclenchés" -ForegroundColor Green
Write-Host "   ✅ Vérifiez les logs dans le terminal 'stripe listen'" -ForegroundColor Yellow
Write-Host "   ✅ Vérifiez les logs dans le terminal 'npm run dev'" -ForegroundColor Yellow
Write-Host ""
Write-Host "🎯 VÉRIFICATIONS À FAIRE:" -ForegroundColor Cyan
Write-Host "   [ ] Tous les événements ont été reçus (200 OK)" -ForegroundColor White
Write-Host "   [ ] Les logs montrent les bonnes données" -ForegroundColor White
Write-Host "   [ ] Les scores de santé sont corrects:" -ForegroundColor White
Write-Host "       - Abonnement créé/mis à jour: 100%" -ForegroundColor Green
Write-Host "       - Abonnement supprimé: 0%" -ForegroundColor Red
Write-Host "       - Paiement échoué: 50%" -ForegroundColor Yellow
Write-Host ""
Write-Host "📚 Pour plus de détails, voir: GUIDE_TEST_STRIPE_CLI.md" -ForegroundColor Cyan
Write-Host ""
Write-Host "🚀 Prochaine étape: Créer le dashboard (Étape 2)" -ForegroundColor Magenta
Write-Host ""
