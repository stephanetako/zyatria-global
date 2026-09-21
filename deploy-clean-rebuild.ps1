# ============================================
# 🚀 SCRIPT DE NETTOYAGE ET REDÉPLOIEMENT COMPLET
# ZyatrIA Global - Cloudflare Pages
# ============================================

Write-Host "`n🧹 ÉTAPE 1/5 : Nettoyage complet des caches..." -ForegroundColor Cyan
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor DarkGray

# Supprimer tous les dossiers de cache
$foldersToDelete = @(
    "dist",
    ".astro",
    "node_modules\.vite",
    "node_modules\.cache"
)

foreach ($folder in $foldersToDelete) {
    if (Test-Path $folder) {
        Write-Host "  ❌ Suppression de $folder..." -ForegroundColor Yellow
        Remove-Item -Recurse -Force $folder -ErrorAction SilentlyContinue
        Write-Host "  ✅ $folder supprimé" -ForegroundColor Green
    } else {
        Write-Host "  ℹ️  $folder n'existe pas (OK)" -ForegroundColor Gray
    }
}

Write-Host "`n✅ Nettoyage terminé!`n" -ForegroundColor Green

# ============================================

Write-Host "🔨 ÉTAPE 2/5 : Build complet du projet..." -ForegroundColor Cyan
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor DarkGray

npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "`n❌ ERREUR : Le build a échoué!" -ForegroundColor Red
    Write-Host "Vérifiez les erreurs ci-dessus et réessayez.`n" -ForegroundColor Yellow
    exit 1
}

Write-Host "`n✅ Build terminé avec succès!`n" -ForegroundColor Green

# ============================================

Write-Host "🔍 ÉTAPE 3/5 : Vérification du contenu..." -ForegroundColor Cyan
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor DarkGray

# Vérifier que les fichiers essentiels existent
$essentialFiles = @(
    "dist\_worker.js",
    "dist\_routes.json"
)

$allFilesExist = $true
foreach ($file in $essentialFiles) {
    if (Test-Path $file) {
        Write-Host "  ✅ $file existe" -ForegroundColor Green
    } else {
        Write-Host "  ❌ $file MANQUANT!" -ForegroundColor Red
        $allFilesExist = $false
    }
}

if (-not $allFilesExist) {
    Write-Host "`n❌ ERREUR : Fichiers essentiels manquants!" -ForegroundColor Red
    Write-Host "Le build n'est pas complet. Vérifiez la configuration.`n" -ForegroundColor Yellow
    exit 1
}

# Vérifier que le bon composant est présent
Write-Host "`n  🔎 Recherche de 'NavigationDesignSystem' dans le build..." -ForegroundColor Yellow
$workerContent = Get-Content "dist\_worker.js" -Raw
if ($workerContent -match "NavigationDesignSystem") {
    Write-Host "  ✅ NavigationDesignSystem trouvé dans le build!" -ForegroundColor Green
} else {
    Write-Host "  ⚠️  NavigationDesignSystem NON trouvé - le build pourrait être incorrect" -ForegroundColor Yellow
}

Write-Host "`n✅ Vérification terminée!`n" -ForegroundColor Green

# ============================================

Write-Host "🗑️  ÉTAPE 4/5 : Suppression des fichiers problématiques..." -ForegroundColor Cyan
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor DarkGray

# Supprimer wrangler.json s'il existe dans dist
$problematicFiles = @(
    "dist\server\.prerender\wrangler.json",
    "dist\wrangler.json"
)

foreach ($file in $problematicFiles) {
    if (Test-Path $file) {
        Write-Host "  ❌ Suppression de $file..." -ForegroundColor Yellow
        Remove-Item -Force $file -ErrorAction SilentlyContinue
        Write-Host "  ✅ $file supprimé" -ForegroundColor Green
    }
}

Write-Host "`n✅ Fichiers problématiques supprimés!`n" -ForegroundColor Green

# ============================================

Write-Host "☁️  ÉTAPE 5/5 : Déploiement sur Cloudflare Pages..." -ForegroundColor Cyan
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor DarkGray

npx wrangler pages deploy dist --project-name=zyatria-global --branch=main-fixed

if ($LASTEXITCODE -ne 0) {
    Write-Host "`n❌ ERREUR : Le déploiement a échoué!" -ForegroundColor Red
    Write-Host "Vérifiez les erreurs ci-dessus.`n" -ForegroundColor Yellow
    exit 1
}

# ============================================

Write-Host "`n" -ForegroundColor White
Write-Host "╔════════════════════════════════════════════════════════════╗" -ForegroundColor Green
Write-Host "║                                                            ║" -ForegroundColor Green
Write-Host "║          ✅ DÉPLOIEMENT RÉUSSI !                          ║" -ForegroundColor Green
Write-Host "║                                                            ║" -ForegroundColor Green
Write-Host "╚════════════════════════════════════════════════════════════╝" -ForegroundColor Green
Write-Host "`n"

Write-Host "🌐 Votre site est maintenant en ligne !" -ForegroundColor Cyan
Write-Host "`n📋 PROCHAINES ÉTAPES :" -ForegroundColor Yellow
Write-Host "  1. Testez votre site sur l'URL de déploiement" -ForegroundColor White
Write-Host "  2. Vérifiez que tous les composants s'affichent correctement" -ForegroundColor White
Write-Host "  3. Si tout fonctionne, sauvegardez sur GitHub :" -ForegroundColor White
Write-Host "     git add ." -ForegroundColor Gray
Write-Host "     git commit -m '✅ Déploiement clean avec bon design'" -ForegroundColor Gray
Write-Host "     git push" -ForegroundColor Gray
Write-Host "`n"
