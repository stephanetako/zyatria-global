Write-Host "`n?? VÉRIFICATION COMPLÈTE DE STRIPE..." -ForegroundColor Cyan

$errors = @()
$warnings = @()
$success = @()

Write-Host "`n?? Vérification des fichiers..." -ForegroundColor Yellow

$files = @(
    "src\lib\stripe-webhook-helpers.ts",
    "src\lib\stripe-subscription-logic.ts",
    "src\pages\api\stripe\webhook.ts",
    ".env"
)

foreach ($file in $files) {
    if (Test-Path $file) {
        $success += "? $file existe"
    } else {
        $errors += "? $file MANQUANT"
    }
}

Write-Host "`n?? Vérification des variables d'environnement..." -ForegroundColor Yellow

if (Test-Path ".env") {
    $envContent = Get-Content ".env" -Raw

    $requiredVars = @(
        "STRIPE_SECRET_KEY",
        "STRIPE_PUBLISHABLE_KEY",
        "STRIPE_WEBHOOK_SECRET"
    )

    foreach ($var in $requiredVars) {
        if ($envContent -match "$var=") {
            $success += "? $var configuré"
        } else {
            $errors += "? $var MANQUANT dans .env"
        }
    }
} else {
    $errors += "? Fichier .env MANQUANT"
}

Write-Host "`n?? Vérification des dépendances..." -ForegroundColor Yellow

if (Test-Path "package.json") {
    $packageJson = Get-Content "package.json" -Raw | ConvertFrom-Json

    if ($packageJson.dependencies.stripe) {
        $success += "? Package stripe installé"
    } else {
        $errors += "? Package stripe MANQUANT"
    }
}

Write-Host "`n?? Vérification de node_modules..." -ForegroundColor Yellow

if (Test-Path "node_modules\stripe") {
    $success += "? Module stripe présent"
} else {
    $warnings += "??  Module stripe absent"
}

Write-Host "`n============================================================" -ForegroundColor Cyan
Write-Host "RÉSULTATS" -ForegroundColor Cyan
Write-Host "============================================================" -ForegroundColor Cyan

if ($success.Count -gt 0) {
    Write-Host "`n? SUCCÈS:" -ForegroundColor Green
    foreach ($s in $success) {
        Write-Host "   $s" -ForegroundColor Green
    }
}

if ($warnings.Count -gt 0) {
    Write-Host "`n??  AVERTISSEMENTS:" -ForegroundColor Yellow
    foreach ($w in $warnings) {
        Write-Host "   $w" -ForegroundColor Yellow
    }
}

if ($errors.Count -gt 0) {
    Write-Host "`n? ERREURS:" -ForegroundColor Red
    foreach ($e in $errors) {
        Write-Host "   $e" -ForegroundColor Red
    }
}

Write-Host "`n============================================================`n" -ForegroundColor Cyan
