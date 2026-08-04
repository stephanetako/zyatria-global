#!/usr/bin/env pwsh
# 🚀 Script de déploiement automatique - LIVE MODE
# Ce script va commit, push et déployer votre site en production

Write-Host "🚀 DÉPLOIEMENT EN MODE LIVE - ZyatrIA Global" -ForegroundColor Cyan
Write-Host "=============================================" -ForegroundColor Cyan
Write-Host ""

# Vérifier si on est dans le bon répertoire
if (-not (Test-Path "package.json")) {
    Write-Host "❌ Erreur: package.json non trouvé" -ForegroundColor Red
    Write-Host "Assurez-vous d'être dans le répertoire du projet" -ForegroundColor Yellow
    exit 1
}

Write-Host "✅ Répertoire du projet détecté" -ForegroundColor Green
Write-Host ""

# Étape 1: Vérifier le statut Git
Write-Host "📋 ÉTAPE 1/5: Vérification du statut Git..." -ForegroundColor Yellow
git status --short

Write-Host ""
$continue = Read-Host "Voulez-vous continuer avec le commit et push? (o/n)"
if ($continue -ne "o") {
    Write-Host "❌ Déploiement annulé" -ForegroundColor Red
    exit 0
}

# Étape 2: Build du projet
Write-Host ""
Write-Host "🔨 ÉTAPE 2/5: Build du projet..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Erreur lors du build" -ForegroundColor Red
    exit 1
}

Write-Host "✅ Build réussi" -ForegroundColor Green

# Étape 3: Commit et Push
Write-Host ""
Write-Host "📤 ÉTAPE 3/5: Commit et Push vers GitHub..." -ForegroundColor Yellow

git add .
git commit -m "🚀 Déploiement LIVE MODE - Stripe configuré avec tous les liens"

if ($LASTEXITCODE -ne 0) {
    Write-Host "⚠️  Aucun changement à commiter ou erreur de commit" -ForegroundColor Yellow
} else {
    Write-Host "✅ Commit créé" -ForegroundColor Green
}

git push origin master

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Erreur lors du push" -ForegroundColor Red
    Write-Host "Vérifiez votre connexion GitHub" -ForegroundColor Yellow
    exit 1
}

Write-Host "✅ Code poussé sur GitHub" -ForegroundColor Green

# Étape 4: Rappel des variables d'environnement
Write-Host ""
Write-Host "⚙️  ÉTAPE 4/5: Configuration Cloudflare" -ForegroundColor Yellow
Write-Host ""
Write-Host "🔑 VARIABLES D'ENVIRONNEMENT À CONFIGURER:" -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Allez sur: https://dash.cloudflare.com" -ForegroundColor White
Write-Host "Workers & Pages → Votre projet → Settings → Environment variables" -ForegroundColor White
Write-Host ""
Write-Host "Ajoutez ces variables (Production ET Preview):" -ForegroundColor Yellow
Write-Host ""
Write-Host "💳 STRIPE (LIVE MODE):" -ForegroundColor Magenta
Write-Host "  STRIPE_SECRET_KEY = sk_live_51QhRRhP3bMl..." -ForegroundColor White
Write-Host "  PUBLIC_STRIPE_PUBLISHABLE_KEY = pk_live_51QhRRhP3bMl..." -ForegroundColor White
Write-Host "  STRIPE_WEBHOOK_SECRET = whsec_..." -ForegroundColor White
Write-Host ""
Write-Host "📧 FORMSPREE:" -ForegroundColor Magenta
Write-Host "  FORMSPREE_FORM_ID = mldekqbz" -ForegroundColor White
Write-Host ""
Write-Host "🤖 MISTRAL AI:" -ForegroundColor Magenta
Write-Host "  MISTRAL_API_KEY = Ij0Aq3Ot3zzJ..." -ForegroundColor White
Write-Host ""

$envConfigured = Read-Host "Avez-vous configuré toutes les variables d'environnement? (o/n)"
if ($envConfigured -ne "o") {
    Write-Host ""
    Write-Host "⚠️  Configurez les variables avant de continuer" -ForegroundColor Yellow
    Write-Host "Le déploiement continuera mais le site ne fonctionnera pas correctement" -ForegroundColor Yellow
    Write-Host ""
    $forceContinue = Read-Host "Voulez-vous quand même continuer? (o/n)"
    if ($forceContinue -ne "o") {
        Write-Host "❌ Déploiement annulé" -ForegroundColor Red
        exit 0
    }
}

# Étape 5: Webhook Stripe
Write-Host ""
Write-Host "🔗 ÉTAPE 5/5: Configuration du Webhook Stripe" -ForegroundColor Yellow
Write-Host ""
Write-Host "Allez sur: https://dashboard.stripe.com/webhooks" -ForegroundColor White
Write-Host ""
Write-Host "1. Cliquez sur 'Add endpoint'" -ForegroundColor White
Write-Host "2. URL: https://votre-domaine.pages.dev/api/stripe/webhook" -ForegroundColor White
Write-Host "3. Sélectionnez ces événements:" -ForegroundColor White
Write-Host "   - checkout.session.completed" -ForegroundColor Gray
Write-Host "   - payment_intent.succeeded" -ForegroundColor Gray
Write-Host "   - payment_intent.payment_failed" -ForegroundColor Gray
Write-Host "   - customer.subscription.created" -ForegroundColor Gray
Write-Host "   - customer.subscription.updated" -ForegroundColor Gray
Write-Host "   - customer.subscription.deleted" -ForegroundColor Gray
Write-Host "   - invoice.paid" -ForegroundColor Gray
Write-Host "   - invoice.payment_failed" -ForegroundColor Gray
Write-Host "4. Copiez le 'Signing secret' (whsec_...)" -ForegroundColor White
Write-Host "5. Ajoutez-le dans Cloudflare comme STRIPE_WEBHOOK_SECRET" -ForegroundColor White
Write-Host ""

$webhookConfigured = Read-Host "Avez-vous configuré le webhook Stripe? (o/n)"

# Résumé final
Write-Host ""
Write-Host "🎉 DÉPLOIEMENT TERMINÉ!" -ForegroundColor Green
Write-Host "======================" -ForegroundColor Green
Write-Host ""
Write-Host "✅ Code poussé sur GitHub" -ForegroundColor Green
Write-Host "✅ Cloudflare va déployer automatiquement" -ForegroundColor Green
Write-Host ""

if ($envConfigured -eq "o" -and $webhookConfigured -eq "o") {
    Write-Host "✅ Configuration complète!" -ForegroundColor Green
    Write-Host ""
    Write-Host "🌐 Votre site sera disponible dans quelques minutes sur:" -ForegroundColor Cyan
    Write-Host "   https://votre-domaine.pages.dev" -ForegroundColor White
} else {
    Write-Host "⚠️  Configuration incomplète" -ForegroundColor Yellow
    Write-Host ""
    if ($envConfigured -ne "o") {
        Write-Host "❌ Variables d'environnement non configurées" -ForegroundColor Red
    }
    if ($webhookConfigured -ne "o") {
        Write-Host "❌ Webhook Stripe non configuré" -ForegroundColor Red
    }
    Write-Host ""
    Write-Host "Le site sera déployé mais ne fonctionnera pas correctement" -ForegroundColor Yellow
    Write-Host "Complétez la configuration dans Cloudflare et Stripe" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "📋 CHECKLIST FINALE:" -ForegroundColor Cyan
Write-Host "===================" -ForegroundColor Cyan
Write-Host "[ ] Vérifier que le site est déployé" -ForegroundColor White
Write-Host "[ ] Tester la page d'accueil" -ForegroundColor White
Write-Host "[ ] Tester la page Pricing" -ForegroundColor White
Write-Host "[ ] Tester un paiement Stripe (LIVE MODE)" -ForegroundColor White
Write-Host "[ ] Tester le formulaire de contact" -ForegroundColor White
Write-Host "[ ] Tester les micro-agents" -ForegroundColor White
Write-Host ""
Write-Host "📚 Pour plus de détails, consultez:" -ForegroundColor Cyan
Write-Host "   🚀_DEPLOIEMENT_FINAL_LIVE_MODE.md" -ForegroundColor White
Write-Host ""
Write-Host "🎊 Félicitations! Votre site est prêt à accepter de vrais paiements!" -ForegroundColor Green
Write-Host ""
