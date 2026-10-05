#!/usr/bin/env pwsh
# Script de déploiement final - Tous les problèmes résolus

Write-Host "═══════════════════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host "🚀 DÉPLOIEMENT ZYATRIA GLOBAL - VERSION FINALE" -ForegroundColor Cyan
Write-Host "═══════════════════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host ""

# Vérifier que nous sommes dans le bon répertoire
if (-not (Test-Path "package.json")) {
    Write-Host "❌ Erreur: package.json non trouvé" -ForegroundColor Red
    Write-Host "   Assurez-vous d'être dans le répertoire du projet" -ForegroundColor Yellow
    exit 1
}

Write-Host "📋 Vérifications préliminaires..." -ForegroundColor Yellow
Write-Host ""

# Vérifier Node.js
$nodeVersion = node --version 2>$null
if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Node.js: $nodeVersion" -ForegroundColor Green
} else {
    Write-Host "❌ Node.js non installé" -ForegroundColor Red
    exit 1
}

# Vérifier npm
$npmVersion = npm --version 2>$null
if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ npm: v$npmVersion" -ForegroundColor Green
} else {
    Write-Host "❌ npm non installé" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "═══════════════════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host "🔨 ÉTAPE 1: BUILD" -ForegroundColor Cyan
Write-Host "═══════════════════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host ""

# Build
Write-Host "⏳ Compilation en cours..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host ""
    Write-Host "❌ Erreur lors du build" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "✅ Build réussi!" -ForegroundColor Green
Write-Host ""

# Vérifier que dist existe
if (-not (Test-Path "dist")) {
    Write-Host "❌ Le dossier dist n'a pas été créé" -ForegroundColor Red
    exit 1
}

Write-Host "═══════════════════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host "🔍 ÉTAPE 2: VÉRIFICATION" -ForegroundColor Cyan
Write-Host "═══════════════════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host ""

# Vérifier wrangler.json
if (Test-Path "dist/server/wrangler.json") {
    $wranglerContent = Get-Content "dist/server/wrangler.json" -Raw | ConvertFrom-Json
    $binding = $wranglerContent.assets.binding
    
    if ($binding -eq "STATIC_ASSETS") {
        Write-Host "✅ Binding assets: STATIC_ASSETS (correct)" -ForegroundColor Green
    } else {
        Write-Host "⚠️  Binding assets: $binding (devrait être STATIC_ASSETS)" -ForegroundColor Yellow
    }
} else {
    Write-Host "⚠️  wrangler.json non trouvé" -ForegroundColor Yellow
}

# Vérifier entry.mjs
if (Test-Path "dist/server/entry.mjs") {
    $entryContent = Get-Content "dist/server/entry.mjs" -Raw
    
    if ($entryContent -match "env\.STATIC_ASSETS") {
        Write-Host "✅ entry.mjs: Utilise STATIC_ASSETS (correct)" -ForegroundColor Green
    } else {
        Write-Host "⚠️  entry.mjs: N'utilise pas STATIC_ASSETS" -ForegroundColor Yellow
    }
    
    if ($entryContent -match "env\.ASSETS[^_]") {
        Write-Host "❌ entry.mjs: Contient encore env.ASSETS" -ForegroundColor Red
    }
} else {
    Write-Host "⚠️  entry.mjs non trouvé" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "═══════════════════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host "🚀 ÉTAPE 3: DÉPLOIEMENT" -ForegroundColor Cyan
Write-Host "═══════════════════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host ""

# Demander confirmation
Write-Host "Voulez-vous déployer maintenant? (O/N): " -NoNewline -ForegroundColor Yellow
$confirmation = Read-Host

if ($confirmation -eq "O" -or $confirmation -eq "o" -or $confirmation -eq "Y" -or $confirmation -eq "y") {
    Write-Host ""
    Write-Host "⏳ Déploiement en cours..." -ForegroundColor Yellow
    Write-Host ""
    
    npx wrangler pages deploy dist
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host ""
        Write-Host "═══════════════════════════════════════════════════════════════" -ForegroundColor Green
        Write-Host "🎉 DÉPLOIEMENT RÉUSSI!" -ForegroundColor Green
        Write-Host "═══════════════════════════════════════════════════════════════" -ForegroundColor Green
        Write-Host ""
        Write-Host "✅ Votre site est maintenant en ligne!" -ForegroundColor Green
        Write-Host ""
        Write-Host "📋 Prochaines étapes:" -ForegroundColor Cyan
        Write-Host "   1. Vérifier le site sur l'URL fournie" -ForegroundColor White
        Write-Host "   2. Configurer les variables d'environnement dans Cloudflare" -ForegroundColor White
        Write-Host "   3. Tester toutes les fonctionnalités" -ForegroundColor White
        Write-Host ""
    } else {
        Write-Host ""
        Write-Host "❌ Erreur lors du déploiement" -ForegroundColor Red
        Write-Host ""
        Write-Host "💡 Solutions possibles:" -ForegroundColor Yellow
        Write-Host "   1. Vérifier votre connexion Cloudflare: npx wrangler login" -ForegroundColor White
        Write-Host "   2. Vérifier les permissions du projet" -ForegroundColor White
        Write-Host "   3. Consulter les logs d'erreur ci-dessus" -ForegroundColor White
        Write-Host ""
        exit 1
    }
} else {
    Write-Host ""
    Write-Host "ℹ️  Déploiement annulé" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "Pour déployer plus tard, utilisez:" -ForegroundColor Yellow
    Write-Host "   npx wrangler pages deploy dist" -ForegroundColor White
    Write-Host ""
}

Write-Host "═══════════════════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host "✅ SCRIPT TERMINÉ" -ForegroundColor Cyan
Write-Host "═══════════════════════════════════════════════════════════════" -ForegroundColor Cyan
