# ============================================
# CONFIGURATION STRIPE LIVE
# ============================================

Write-Host ""
Write-Host "╔══════════════════════════════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "║                                                              ║" -ForegroundColor Cyan
Write-Host "║     🔑 CONFIGURATION STRIPE LIVE                             ║" -ForegroundColor Cyan
Write-Host "║                                                              ║" -ForegroundColor Cyan
Write-Host "╚══════════════════════════════════════════════════════════════╝" -ForegroundColor Cyan
Write-Host ""

Write-Host "📋 Instructions:" -ForegroundColor Blue
Write-Host ""
Write-Host "1. Allez sur: https://dashboard.stripe.com/apikeys"
Write-Host "2. Basculez en mode LIVE (en haut à droite)"
Write-Host "3. Copiez vos clés LIVE"
Write-Host ""
Write-Host "⚠️  Assurez-vous d'être en mode LIVE (pas TEST)" -ForegroundColor Yellow
Write-Host ""

# Demander confirmation
$confirm = Read-Host "Êtes-vous prêt à continuer? (o/n)"
if ($confirm -ne "o" -and $confirm -ne "O") {
    Write-Host "❌ Annulé" -ForegroundColor Red
    exit
}

Write-Host ""
Write-Host "🔑 Entrez vos clés Stripe LIVE:" -ForegroundColor Blue
Write-Host ""

# Demander la clé publique
$STRIPE_PUBLIC_KEY = Read-Host "Clé publique LIVE (pk_live_...)"
if (-not $STRIPE_PUBLIC_KEY.StartsWith("pk_live_")) {
    Write-Host "❌ Erreur: La clé publique doit commencer par 'pk_live_'" -ForegroundColor Red
    exit
}

# Demander la clé secrète
$STRIPE_SECRET_KEY = Read-Host "Clé secrète LIVE (sk_live_...)"
if (-not $STRIPE_SECRET_KEY.StartsWith("sk_live_")) {
    Write-Host "❌ Erreur: La clé secrète doit commencer par 'sk_live_'" -ForegroundColor Red
    exit
}

# Demander le webhook secret
$STRIPE_WEBHOOK_SECRET = Read-Host "Webhook secret (whsec_...)"
if (-not $STRIPE_WEBHOOK_SECRET.StartsWith("whsec_")) {
    Write-Host "❌ Erreur: Le webhook secret doit commencer par 'whsec_'" -ForegroundColor Red
    exit
}

Write-Host ""
Write-Host "📦 Création d'un backup..." -ForegroundColor Blue
Copy-Item ".env" ".env.before-live" -Force
Write-Host "✅ Backup créé: .env.before-live" -ForegroundColor Green
Write-Host ""

Write-Host "🔄 Mise à jour du fichier .env..." -ForegroundColor Blue

# Créer le nouveau .env
$envContent = @"
# ============================================
# ZYATRIA GLOBAL - CONFIGURATION LIVE
# ============================================

# === FORMSPREE (Formulaires de contact) ===
FORMSPREE_FORM_ID="xbdedonn"

# === WEBFLOW (CMS et API) ===
WEBFLOW_API_HOST="https://api-cdn.webflow.com/v2"
WEBFLOW_SITE_API_TOKEN="8160da8face945f9fb1e1515f445592076f5481aabc0aeb7a7a11e9fdb118ed0"
WEBFLOW_CMS_SITE_API_TOKEN="177d18c2c624850e2dd7deb5c159dc319b90ef7c9cad86464217b2346a6f3c64"

# === MISTRAL AI (Chatbot) ===
MISTRAL_API_KEY="Hy1Ja5hxTfLBsgJVJgAvrUdVtQL5OdWD2aRB31Z0bgY8pHsWrczFMBt68nkTzje9u96WCnuAyBjf7TFw3Jqb000Cfx4xRu"

# === STRIPE (Paiements) - MODE LIVE ===
STRIPE_PUBLIC_KEY="$STRIPE_PUBLIC_KEY"
STRIPE_SECRET_KEY="$STRIPE_SECRET_KEY"
STRIPE_WEBHOOK_SECRET="$STRIPE_WEBHOOK_SECRET"

# === CLAUDE AI (Optionnel) ===
CLAUDE_API_KEY="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"

# === CLOUDFLARE (Déploiement) ===
CLOUDFLARE_API_TOKEN="b909407c94ef1c9232d0391"
"@

$envContent | Out-File -FilePath ".env" -Encoding UTF8 -NoNewline

Write-Host "✅ Fichier .env mis à jour avec les clés LIVE" -ForegroundColor Green
Write-Host ""

Write-Host "📊 Vérification:" -ForegroundColor Blue
Write-Host ""
Write-Host "  ✓ Clé publique: $($STRIPE_PUBLIC_KEY.Substring(0, 20))..." -ForegroundColor Green
Write-Host "  ✓ Clé secrète: $($STRIPE_SECRET_KEY.Substring(0, 20))..." -ForegroundColor Green
Write-Host "  ✓ Webhook secret: $($STRIPE_WEBHOOK_SECRET.Substring(0, 20))..." -ForegroundColor Green
Write-Host ""

Write-Host "╔══════════════════════════════════════════════════════════════╗" -ForegroundColor Green
Write-Host "║                                                              ║" -ForegroundColor Green
Write-Host "║     ✅ CLÉS STRIPE LIVE CONFIGURÉES !                        ║" -ForegroundColor Green
Write-Host "║                                                              ║" -ForegroundColor Green
Write-Host "╚══════════════════════════════════════════════════════════════╝" -ForegroundColor Green
Write-Host ""

Write-Host "🎯 Prochaines étapes:" -ForegroundColor Yellow
Write-Host ""
Write-Host "  1. Testez localement:"
Write-Host "     PS> npm run dev" -ForegroundColor Cyan
Write-Host ""
Write-Host "  2. Configurez Cloudflare Workers:"
Write-Host "     - Allez sur: https://dash.cloudflare.com"
Write-Host "     - Workers & Pages > Votre projet > Settings > Variables"
Write-Host "     - Ajoutez les 3 variables Stripe (marquez les secrets comme 'Encrypt')"
Write-Host ""
Write-Host "  3. Déployez:"
Write-Host "     PS> npm run build" -ForegroundColor Cyan
Write-Host "     PS> git add ." -ForegroundColor Cyan
Write-Host "     PS> git commit -m '🔑 Clés Stripe LIVE configurées'" -ForegroundColor Cyan
Write-Host "     PS> git push origin main" -ForegroundColor Cyan
Write-Host ""
Write-Host "⚠️  IMPORTANT: N'oubliez pas de configurer les variables dans Cloudflare !" -ForegroundColor Red
Write-Host ""
