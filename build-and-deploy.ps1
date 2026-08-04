# ============================================
# 🚀 SCRIPT DE BUILD ET DÉPLOIEMENT ZYATRIA
# ============================================

Write-Host "🧹 ÉTAPE 1 : Nettoyage complet..." -ForegroundColor Cyan

# Supprimer les caches
if (Test-Path "node_modules\.vite") {
    Remove-Item -Recurse -Force "node_modules\.vite"
    Write-Host "✅ Cache Vite supprimé" -ForegroundColor Green
}

if (Test-Path "dist") {
    Remove-Item -Recurse -Force "dist"
    Write-Host "✅ Dossier dist supprimé" -ForegroundColor Green
}

if (Test-Path ".astro") {
    Remove-Item -Recurse -Force ".astro"
    Write-Host "✅ Cache Astro supprimé" -ForegroundColor Green
}

# Supprimer wrangler.jsonc s'il existe
if (Test-Path "wrangler.jsonc") {
    Remove-Item -Force "wrangler.jsonc"
    Write-Host "✅ wrangler.jsonc supprimé" -ForegroundColor Green
}

Write-Host ""
Write-Host "📝 ÉTAPE 2 : Création de wrangler.toml..." -ForegroundColor Cyan

# Créer wrangler.toml (format TOML, plus stable)
$wranglerToml = @"
name = "zyatria-global"
compatibility_date = "2025-04-15"
compatibility_flags = ["nodejs_compat"]
account_id = "b909407c9d4fcef1c9232d039138b851"

[observability]
enabled = true

[vars]
NODE_ENV = "production"

[assets]
binding = "ASSETS"
directory = "./dist"
"@

Set-Content -Path "wrangler.toml" -Value $wranglerToml -Encoding UTF8
Write-Host "✅ wrangler.toml créé" -ForegroundColor Green

Write-Host ""
Write-Host "🔨 ÉTAPE 3 : Build du projet..." -ForegroundColor Cyan
Write-Host ""

# Lancer le build
npm run build

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "✅ BUILD RÉUSSI !" -ForegroundColor Green
    Write-Host ""
    Write-Host "🎯 PROCHAINES ÉTAPES :" -ForegroundColor Yellow
    Write-Host "1. Connectez-vous à Cloudflare : npx wrangler login" -ForegroundColor White
    Write-Host "2. Déployez le site : npx wrangler deploy" -ForegroundColor White
    Write-Host ""
} else {
    Write-Host ""
    Write-Host "❌ ERREUR LORS DU BUILD" -ForegroundColor Red
    Write-Host ""
    Write-Host "📋 Informations de diagnostic :" -ForegroundColor Yellow
    Write-Host "- Vérifiez les erreurs ci-dessus" -ForegroundColor White
    Write-Host "- Assurez-vous que toutes les dépendances sont installées" -ForegroundColor White
    Write-Host ""
    exit 1
}
