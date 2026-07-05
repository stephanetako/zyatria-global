# ============================================
# VÉRIFICATION COMPLÈTE STRIPE
# ============================================

Write-Host "`n🔍 VÉRIFICATION COMPLÈTE DE STRIPE..." -ForegroundColor Cyan

$errors = @()
$warnings = @()
$success = @()

# 1. Vérifier les fichiers
Write-Host "`n📁 Vérification des fichiers..." -ForegroundColor Yellow

$files = @(
    "src\lib\stripe-webhook-helpers.ts",
    "src\lib\stripe-subscription-logic.ts",
    "src\pages\api\stripe\webhook.ts",
    ".env"
)

foreach ($file in $files) {
    if (Test-Path $file) {
        $success += "✅ $file existe"
    } else {
        $errors += "❌ $file MANQUANT"
    }
}

# 2. Vérifier le .env
Write-Host "`n🔑 Vérification des variables d'environnement..." -ForegroundColor Yellow

if (Test-Path ".env") {
    $envContent = Get-Content ".env" -Raw
    
    $requiredVars = @(
        "STRIPE_SECRET_KEY",
        "STRIPE_PUBLISHABLE_KEY",
        "STRIPE_WEBHOOK_SECRET"
    )
    
    foreach ($var in $requiredVars) {
        if ($envContent -match "$var=") {
            $success += "✅ $var configuré"
        } else {
            $errors += "❌ $var MANQUANT dans .env"
        }
    }
} else {
    $errors += "❌ Fichier .env MANQUANT"
}

# 3. Vérifier package.json
Write-Host "`n📦 Vérification des dépendances..." -ForegroundColor Yellow

if (Test-Path "package.json") {
    $packageJson = Get-Content "package.json" -Raw | ConvertFrom-Json
    
    if ($packageJson.dependencies.stripe) {
        $success += "✅ Package 'stripe' installé (v$($packageJson.dependencies.stripe))"
    } else {
        $errors += "❌ Package 'stripe' MANQUANT"
    }
} else {
    $errors += "❌ package.json MANQUANT"
}

# 4. Vérifier node_modules
Write-Host "`n📚 Vérification de node_modules..." -ForegroundColor Yellow

if (Test-Path "node_modules\stripe") {
    $success += "✅ Module 'stripe' présent dans node_modules"
} else {
    $warnings += "⚠️  Module 'stripe' absent de node_modules - Exécutez 'npm install'"
}

# 5. Afficher les résultats
Write-Host "`n" -NoNewline
Write-Host "=" * 60 -ForegroundColor Cyan
Write-Host "RÉSULTATS DE LA VÉRIFICATION" -ForegroundColor Cyan
Write-Host "=" * 60 -ForegroundColor Cyan

if ($success.Count -gt 0) {
    Write-Host "`n✅ SUCCÈS ($($success.Count)):" -ForegroundColor Green
    foreach ($s in $success) {
        Write-Host "   $s" -ForegroundColor Green
    }
}

if ($warnings.Count -gt 0) {
    Write-Host "`n⚠️  AVERTISSEMENTS ($($warnings.Count)):" -ForegroundColor Yellow
    foreach ($w in $warnings) {
        Write-Host "   $w" -ForegroundColor Yellow
    }
}

if ($errors.Count -gt 0) {
    Write-Host "`n❌ ERREURS ($($errors.Count)):" -ForegroundColor Red
    foreach ($e in $errors) {
        Write-Host "   $e" -ForegroundColor Red
    }
    
    Write-Host "`n🔧 ACTIONS REQUISES:" -ForegroundColor Yellow
    Write-Host "   1. Créez les fichiers manquants" -ForegroundColor White
    Write-Host "   2. Configurez les variables d'environnement" -ForegroundColor White
    Write-Host "   3. Exécutez 'npm install'" -ForegroundColor White
} else {
    Write-Host "`n🎉 TOUT EST PRÊT POUR STRIPE!" -ForegroundColor Green
    Write-Host "`n📋 PROCHAINES ÉTAPES:" -ForegroundColor Cyan
    Write-Host "   1. Démarrez le serveur: npm run dev" -ForegroundColor White
    Write-Host "   2. Écoutez les webhooks: stripe listen --forward-to localhost:4321/api/stripe/webhook" -ForegroundColor White
    Write-Host "   3. Testez: stripe trigger payment_intent.succeeded" -ForegroundColor White
}

Write-Host "`n" -NoNewline
Write-Host "=" * 60 -ForegroundColor Cyan
Write-Host ""
