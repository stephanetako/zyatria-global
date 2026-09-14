# ============================================
# 🚀 SCRIPT DE NETTOYAGE ET REDÉPLOIEMENT COMPLET
# ZyatrIA Global - Cloudflare Pages
# ============================================

Write-Host "
🧹 ÉTAPE 1/5 : Nettoyage complet des caches..." -ForegroundColor Cyan
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor DarkGray

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

Write-Host "
✅ Nettoyage terminé!
" -ForegroundColor Green

Write-Host "🔨 ÉTAPE 2/5 : Build complet du projet..." -ForegroundColor Cyan
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor DarkGray

npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "
❌ ERREUR : Le build a échoué!" -ForegroundColor Red
    exit 1
}

Write-Host "
✅ Build terminé avec succès!
" -ForegroundColor Green

Write-Host "🔍 ÉTAPE 3/5 : Vérification du contenu..." -ForegroundColor Cyan
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor DarkGray

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
    Write-Host "
❌ ERREUR : Fichiers essentiels manquants!" -ForegroundColor Red
    exit 1
}

Write-Host "
  🔎 Recherche de 'NavigationDesignSystem' dans le build..." -ForegroundColor Yellow
$workerContent = Get-Content "dist\_worker.js" -Raw
if ($workerContent -match "NavigationDesignSystem") {
    Write-Host "  ✅ NavigationDesignSystem trouvé dans le build!" -ForegroundColor Green
} else {
    Write-Host "  ⚠️  NavigationDesignSystem NON trouvé" -ForegroundColor Yellow
}

Write-Host "
✅ Vérification terminée!
" -ForegroundColor Green

Write-Host "🗑️  ÉTAPE 4/5 : Suppression des fichiers problématiques..." -ForegroundColor Cyan
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor DarkGray

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

Write-Host "
✅ Fichiers problématiques supprimés!
" -ForegroundColor Green

Write-Host "☁️  ÉTAPE 5/5 : Déploiement sur Cloudflare Pages..." -ForegroundColor Cyan
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor DarkGray

npx wrangler pages deploy dist --project-name=zyatria-global --branch=main-fixed

if ($LASTEXITCODE -ne 0) {
    Write-Host "
❌ ERREUR : Le déploiement a échoué!" -ForegroundColor Red
    exit 1
}

Write-Host "
╔════════════════════════════════════════════════════════════╗" -ForegroundColor Green
Write-Host "║          ✅ DÉPLOIEMENT RÉUSSI !                          ║" -ForegroundColor Green
Write-Host "╚════════════════════════════════════════════════════════════╝" -ForegroundColor Green
Write-Host "
🌐 Testez votre site maintenant!
" -ForegroundColor Cyan
