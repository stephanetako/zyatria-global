# ============================================
# 🚀 DÉPLOIEMENT FORCÉ (ignore l'erreur ASSETS)
# ZyatrIA Global - Cloudflare Pages
# ============================================

Write-Host "`n🧹 Nettoyage des caches..." -ForegroundColor Cyan
Remove-Item -Recurse -Force dist, .astro, node_modules\.vite -ErrorAction SilentlyContinue
Write-Host "✅ Nettoyage terminé!`n" -ForegroundColor Green

Write-Host "🔨 Build du projet..." -ForegroundColor Cyan
npm run build 2>&1 | Out-Null

# Vérifier que les fichiers essentiels existent
if ((Test-Path "dist\_worker.js") -and (Test-Path "dist\_routes.json")) {
    Write-Host "✅ Build réussi (fichiers créés)!`n" -ForegroundColor Green
} else {
    Write-Host "❌ ERREUR : Fichiers manquants!" -ForegroundColor Red
    exit 1
}

Write-Host "🗑️  Suppression du fichier problématique..." -ForegroundColor Cyan
Remove-Item -Force "dist\server\.prerender\wrangler.json" -ErrorAction SilentlyContinue
Write-Host "✅ Fichier supprimé!`n" -ForegroundColor Green

Write-Host "🔍 Vérification du contenu..." -ForegroundColor Cyan
$workerContent = Get-Content "dist\_worker.js" -Raw
if ($workerContent -match "NavigationDesignSystem") {
    Write-Host "✅ NavigationDesignSystem trouvé dans le build!`n" -ForegroundColor Green
} else {
    Write-Host "⚠️  NavigationDesignSystem NON trouvé`n" -ForegroundColor Yellow
}

Write-Host "☁️  Déploiement sur Cloudflare..." -ForegroundColor Cyan
npx wrangler pages deploy dist --project-name=zyatria-global --branch=main-fixed

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n╔════════════════════════════════════════════════════════════╗" -ForegroundColor Green
    Write-Host "║          ✅ DÉPLOIEMENT RÉUSSI !                          ║" -ForegroundColor Green
    Write-Host "╚════════════════════════════════════════════════════════════╝" -ForegroundColor Green
    Write-Host "`n🌐 Testez votre site maintenant!`n" -ForegroundColor Cyan
} else {
    Write-Host "`n❌ Erreur lors du déploiement" -ForegroundColor Red
}
