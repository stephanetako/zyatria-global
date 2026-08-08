# ============================================================================
# 🔐 SCRIPT D'AJOUT DES SECRETS STRIPE DANS CLOUDFLARE PAGES (PowerShell)
# ============================================================================
# 
# Ce script vous guide pour ajouter les 3 variables Stripe nécessaires
# dans votre projet Cloudflare Pages.
#
# Prérequis:
# - wrangler CLI installé (npm install -g wrangler)
# - Authentifié avec Cloudflare (wrangler login)
# - Accès au Stripe Dashboard
#
# ============================================================================

$ErrorActionPreference = "Stop"

# Nom du projet
$PROJECT_NAME = "zyatria-global"

# ============================================================================
# FONCTIONS UTILITAIRES
# ============================================================================

function Write-Header {
    param([string]$Message)
    Write-Host ""
    Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Blue
    Write-Host $Message -ForegroundColor Cyan
    Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Blue
    Write-Host ""
}

function Write-Success {
    param([string]$Message)
    Write-Host "✅ $Message" -ForegroundColor Green
}

function Write-Error-Custom {
    param([string]$Message)
    Write-Host "❌ $Message" -ForegroundColor Red
}

function Write-Warning-Custom {
    param([string]$Message)
    Write-Host "⚠️  $Message" -ForegroundColor Yellow
}

function Write-Info {
    param([string]$Message)
    Write-Host "ℹ️  $Message" -ForegroundColor Cyan
}

function Write-Step {
    param([string]$Message)
    Write-Host "▶ $Message" -ForegroundColor Magenta
}

# ============================================================================
# VÉRIFICATIONS PRÉLIMINAIRES
# ============================================================================

Write-Header "🔍 VÉRIFICATIONS PRÉLIMINAIRES"

# Vérifier que wrangler est installé
Write-Step "Vérification de wrangler CLI..."
try {
    $null = wrangler --version 2>&1
    Write-Success "wrangler est installé"
} catch {
    Write-Error-Custom "wrangler n'est pas installé"
    Write-Host ""
    Write-Host "Installation:"
    Write-Host "  npm install -g wrangler"
    Write-Host ""
    exit 1
}

# Vérifier l'authentification
Write-Step "Vérification de l'authentification Cloudflare..."
try {
    $whoami = wrangler whoami 2>&1
    if ($whoami -match "not authenticated" -or $whoami -match "You are not logged in") {
        throw "Not authenticated"
    }
    Write-Success "Authentifié avec Cloudflare"
} catch {
    Write-Error-Custom "Vous n'êtes pas authentifié avec Cloudflare"
    Write-Host ""
    Write-Host "Authentification:"
    Write-Host "  wrangler login"
    Write-Host ""
    exit 1
}

# Vérifier que le projet existe
Write-Step "Vérification du projet $PROJECT_NAME..."
try {
    $projects = wrangler pages project list 2>&1 | Out-String
    if ($projects -match $PROJECT_NAME) {
        Write-Success "Projet '$PROJECT_NAME' trouvé"
    } else {
        Write-Warning-Custom "Le projet '$PROJECT_NAME' n'a pas été trouvé"
        Write-Info "Le script continuera quand même - les secrets seront ajoutés lors de la création du projet"
    }
} catch {
    Write-Warning-Custom "Impossible de vérifier le projet"
}

# ============================================================================
# GUIDE POUR RÉCUPÉRER LES CLÉS STRIPE
# ============================================================================

Write-Header "📋 GUIDE - RÉCUPÉRER VOS CLÉS STRIPE"

Write-Host "Avant de continuer, vous devez récupérer 3 clés depuis Stripe Dashboard:" -ForegroundColor White
Write-Host ""
Write-Host "1. Secret Key (sk_live_...)" -ForegroundColor Yellow
Write-Host "   → https://dashboard.stripe.com/apikeys"
Write-Host "   → Assurez-vous d'être en MODE LIVE (toggle en haut à droite)"
Write-Host "   → Copiez la 'Secret key'"
Write-Host ""
Write-Host "2. Publishable Key (pk_live_...)" -ForegroundColor Yellow
Write-Host "   → Même page que ci-dessus"
Write-Host "   → Copiez la 'Publishable key'"
Write-Host ""
Write-Host "3. Webhook Secret (whsec_...)" -ForegroundColor Yellow
Write-Host "   → https://dashboard.stripe.com/webhooks"
Write-Host "   → Si vous avez déjà un endpoint, cliquez dessus et copiez le 'Signing secret'"
Write-Host "   → Sinon, utilisez temporairement: whsec_temp_will_configure_after_deploy"
Write-Host ""
Write-Host "⚠️  IMPORTANT: Utilisez les clés LIVE (pas TEST)" -ForegroundColor Red
Write-Host ""

$response = Read-Host "Avez-vous récupéré vos 3 clés Stripe? (o/n)"
if ($response -notmatch "^[OoYy]$") {
    Write-Warning-Custom "Script annulé. Récupérez vos clés et relancez le script."
    exit 0
}

# ============================================================================
# AJOUT DES SECRETS
# ============================================================================

Write-Header "🔐 AJOUT DES SECRETS STRIPE"

Write-Host "Nous allons maintenant ajouter les 3 secrets dans Cloudflare Pages." -ForegroundColor White
Write-Host "Les valeurs seront masquées pendant la saisie pour plus de sécurité." -ForegroundColor Cyan
Write-Host ""

# ============================================================================
# 1. STRIPE_SECRET_KEY
# ============================================================================

Write-Step "1/3 - Ajout de STRIPE_SECRET_KEY"
Write-Host ""
Write-Host "Collez votre Secret Key (commence par sk_live_...)" -ForegroundColor Yellow
Write-Host "La valeur sera masquée pendant la saisie" -ForegroundColor Cyan
Write-Host ""

$STRIPE_SECRET_KEY = Read-Host "STRIPE_SECRET_KEY" -AsSecureString
$STRIPE_SECRET_KEY_Plain = [Runtime.InteropServices.Marshal]::PtrToStringAuto(
    [Runtime.InteropServices.Marshal]::SecureStringToBSTR($STRIPE_SECRET_KEY)
)

# Vérifier le format
if ($STRIPE_SECRET_KEY_Plain -notmatch "^sk_live_") {
    Write-Warning-Custom "La clé ne commence pas par 'sk_live_'"
    $continue = Read-Host "Voulez-vous continuer quand même? (o/n)"
    if ($continue -notmatch "^[OoYy]$") {
        Write-Error-Custom "Ajout annulé"
        exit 1
    }
}

# Ajouter le secret
try {
    $STRIPE_SECRET_KEY_Plain | wrangler pages secret put STRIPE_SECRET_KEY --project-name=$PROJECT_NAME 2>&1 | Out-Null
    Write-Success "STRIPE_SECRET_KEY ajouté avec succès"
} catch {
    Write-Error-Custom "Erreur lors de l'ajout de STRIPE_SECRET_KEY"
    Write-Host $_.Exception.Message -ForegroundColor Red
    exit 1
}

Write-Host ""

# ============================================================================
# 2. STRIPE_PUBLIC_KEY
# ============================================================================

Write-Step "2/3 - Ajout de STRIPE_PUBLIC_KEY"
Write-Host ""
Write-Host "Collez votre Publishable Key (commence par pk_live_...)" -ForegroundColor Yellow
Write-Host "La valeur sera masquée pendant la saisie" -ForegroundColor Cyan
Write-Host ""

$STRIPE_PUBLIC_KEY = Read-Host "STRIPE_PUBLIC_KEY" -AsSecureString
$STRIPE_PUBLIC_KEY_Plain = [Runtime.InteropServices.Marshal]::PtrToStringAuto(
    [Runtime.InteropServices.Marshal]::SecureStringToBSTR($STRIPE_PUBLIC_KEY)
)

# Vérifier le format
if ($STRIPE_PUBLIC_KEY_Plain -notmatch "^pk_live_") {
    Write-Warning-Custom "La clé ne commence pas par 'pk_live_'"
    $continue = Read-Host "Voulez-vous continuer quand même? (o/n)"
    if ($continue -notmatch "^[OoYy]$") {
        Write-Error-Custom "Ajout annulé"
        exit 1
    }
}

# Ajouter le secret
try {
    $STRIPE_PUBLIC_KEY_Plain | wrangler pages secret put STRIPE_PUBLIC_KEY --project-name=$PROJECT_NAME 2>&1 | Out-Null
    Write-Success "STRIPE_PUBLIC_KEY ajouté avec succès"
} catch {
    Write-Error-Custom "Erreur lors de l'ajout de STRIPE_PUBLIC_KEY"
    Write-Host $_.Exception.Message -ForegroundColor Red
    exit 1
}

Write-Host ""

# ============================================================================
# 3. STRIPE_WEBHOOK_SECRET
# ============================================================================

Write-Step "3/3 - Ajout de STRIPE_WEBHOOK_SECRET"
Write-Host ""
Write-Host "Collez votre Webhook Secret (commence par whsec_...)" -ForegroundColor Yellow
Write-Host "Ou utilisez: whsec_temp_will_configure_after_deploy" -ForegroundColor Cyan
Write-Host "La valeur sera masquée pendant la saisie" -ForegroundColor Cyan
Write-Host ""

$STRIPE_WEBHOOK_SECRET = Read-Host "STRIPE_WEBHOOK_SECRET" -AsSecureString
$STRIPE_WEBHOOK_SECRET_Plain = [Runtime.InteropServices.Marshal]::PtrToStringAuto(
    [Runtime.InteropServices.Marshal]::SecureStringToBSTR($STRIPE_WEBHOOK_SECRET)
)

# Vérifier le format
if ($STRIPE_WEBHOOK_SECRET_Plain -notmatch "^whsec_") {
    Write-Warning-Custom "Le secret ne commence pas par 'whsec_'"
    $continue = Read-Host "Voulez-vous continuer quand même? (o/n)"
    if ($continue -notmatch "^[OoYy]$") {
        Write-Error-Custom "Ajout annulé"
        exit 1
    }
}

# Ajouter le secret
try {
    $STRIPE_WEBHOOK_SECRET_Plain | wrangler pages secret put STRIPE_WEBHOOK_SECRET --project-name=$PROJECT_NAME 2>&1 | Out-Null
    Write-Success "STRIPE_WEBHOOK_SECRET ajouté avec succès"
} catch {
    Write-Error-Custom "Erreur lors de l'ajout de STRIPE_WEBHOOK_SECRET"
    Write-Host $_.Exception.Message -ForegroundColor Red
    exit 1
}

Write-Host ""

# ============================================================================
# VÉRIFICATION
# ============================================================================

Write-Header "✅ VÉRIFICATION DES SECRETS"

Write-Step "Liste des variables d'environnement du projet..."
Write-Host ""

try {
    wrangler pages project view $PROJECT_NAME 2>&1
} catch {
    Write-Warning-Custom "Impossible d'afficher les variables"
}

Write-Host ""

# ============================================================================
# RÉSUMÉ
# ============================================================================

Write-Header "🎉 CONFIGURATION TERMINÉE"

Write-Success "Les 3 secrets Stripe ont été ajoutés avec succès!"
Write-Host ""
Write-Host "Secrets ajoutés:" -ForegroundColor White
Write-Host "  ✅ STRIPE_SECRET_KEY" -ForegroundColor Green
Write-Host "  ✅ STRIPE_PUBLIC_KEY" -ForegroundColor Green
Write-Host "  ✅ STRIPE_WEBHOOK_SECRET" -ForegroundColor Green
Write-Host ""

# ============================================================================
# PROCHAINES ÉTAPES
# ============================================================================

Write-Header "🚀 PROCHAINES ÉTAPES"

Write-Host "1. Déployer votre site" -ForegroundColor White
Write-Host "   npm run build"
Write-Host "   wrangler pages deploy dist --project-name=$PROJECT_NAME"
Write-Host ""
Write-Host "2. Configurer le webhook Stripe" -ForegroundColor White
Write-Host "   → Allez sur https://dashboard.stripe.com/webhooks"
Write-Host "   → Cliquez sur 'Add endpoint'"
Write-Host "   → URL: https://zyatria-global.pages.dev/api/stripe/webhook"
Write-Host "   → Sélectionnez les événements:"
Write-Host "     • checkout.session.completed"
Write-Host "     • payment_intent.succeeded"
Write-Host "     • payment_intent.payment_failed"
Write-Host "     • customer.subscription.created"
Write-Host "     • customer.subscription.updated"
Write-Host "     • customer.subscription.deleted"
Write-Host "   → Copiez le 'Signing secret' (whsec_...)"
Write-Host "   → Si différent, mettez à jour STRIPE_WEBHOOK_SECRET:"
Write-Host "     echo 'nouveau_secret' | wrangler pages secret put STRIPE_WEBHOOK_SECRET --project-name=$PROJECT_NAME"
Write-Host ""
Write-Host "3. Tester Stripe" -ForegroundColor White
Write-Host "   → Allez sur https://zyatria-global.pages.dev/pricing"
Write-Host "   → Cliquez sur un bouton de paiement"
Write-Host "   → Vérifiez que vous êtes redirigé vers Stripe"
Write-Host ""

# ============================================================================
# AVERTISSEMENTS
# ============================================================================

Write-Header "⚠️  AVERTISSEMENTS IMPORTANTS"

Write-Host "MODE LIVE ACTIVÉ" -ForegroundColor Red
Write-Host "• Les paiements seront RÉELS" -ForegroundColor Red
Write-Host "• Les cartes seront DÉBITÉES" -ForegroundColor Red
Write-Host "• L'argent ira sur votre compte Stripe" -ForegroundColor Red
Write-Host ""
Write-Host "Recommandations:" -ForegroundColor Yellow
Write-Host "• Testez d'abord avec votre propre carte"
Write-Host "• Vérifiez les montants dans Stripe Dashboard"
Write-Host "• Configurez les webhooks immédiatement"
Write-Host "• Surveillez les transactions les premiers jours"
Write-Host ""

# ============================================================================
# SÉCURITÉ
# ============================================================================

Write-Header "🔐 RAPPEL SÉCURITÉ"

Write-Host "✅ Les secrets sont stockés de manière sécurisée dans Cloudflare" -ForegroundColor Green
Write-Host "✅ Ils ne sont jamais exposés dans le code ou les logs" -ForegroundColor Green
Write-Host "✅ Seul le runtime Cloudflare y a accès" -ForegroundColor Green
Write-Host ""
Write-Host "Bonnes pratiques:" -ForegroundColor Yellow
Write-Host "• Ne jamais commiter les clés dans Git"
Write-Host "• Activer 2FA sur Stripe Dashboard"
Write-Host "• Surveiller les accès API dans Stripe"
Write-Host "• Renouveler les clés régulièrement"
Write-Host ""

# ============================================================================
# FIN
# ============================================================================

Write-Header "✨ SCRIPT TERMINÉ"

Write-Host "Votre configuration Stripe est maintenant complète!" -ForegroundColor Green
Write-Host ""
Write-Host "Voulez-vous déployer maintenant? (o/n)" -ForegroundColor Cyan
$deploy = Read-Host ">"

if ($deploy -match "^[OoYy]$") {
    Write-Step "Lancement du déploiement..."
    Write-Host ""
    
    try {
        Write-Host "Building..." -ForegroundColor Cyan
        npm run build
        
        Write-Host ""
        Write-Host "Deploying to Cloudflare Pages..." -ForegroundColor Cyan
        wrangler pages deploy dist --project-name=$PROJECT_NAME
        
        Write-Host ""
        Write-Success "Déploiement réussi!"
        Write-Host ""
        Write-Host "Votre site est disponible sur:" -ForegroundColor Cyan
        Write-Host "https://zyatria-global.pages.dev" -ForegroundColor Green
        Write-Host ""
    } catch {
        Write-Error-Custom "Erreur lors du déploiement"
        Write-Host $_.Exception.Message -ForegroundColor Red
        Write-Host ""
        Write-Host "Déploiement manuel:" -ForegroundColor Yellow
        Write-Host "  npm run build"
        Write-Host "  wrangler pages deploy dist --project-name=$PROJECT_NAME"
    }
} else {
    Write-Info "Déploiement annulé"
    Write-Host ""
    Write-Host "Pour déployer plus tard:" -ForegroundColor Yellow
    Write-Host "  npm run build"
    Write-Host "  wrangler pages deploy dist --project-name=$PROJECT_NAME"
    Write-Host ""
}

Write-Success "Terminé!"
Write-Host ""
