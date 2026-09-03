# Script de vérification et push complet
Write-Host "=== VERIFICATION COMPLETE ===" -ForegroundColor Cyan

# 1. Vérifie les fichiers critiques
$files = @(
    "src/lib/language-context.tsx",
    "src/components/AppWrapper.tsx",
    "src/components/NavigationDesignSystem.tsx",
    "src/components/HeroDesignSystem.tsx"
)

Write-Host "`nFichiers à vérifier:" -ForegroundColor Yellow
foreach ($file in $files) {
    if (Test-Path $file) {
        Write-Host "  ✓ $file" -ForegroundColor Green
    } else {
        Write-Host "  ✗ $file MANQUANT!" -ForegroundColor Red
        exit 1
    }
}

# 2. Vérifie le statut Git
Write-Host "`n=== STATUT GIT ===" -ForegroundColor Cyan
git status

# 3. Ajoute TOUS les fichiers
Write-Host "`n=== AJOUT DES FICHIERS ===" -ForegroundColor Cyan
git add -A
git status

# 4. Commit
Write-Host "`n=== COMMIT ===" -ForegroundColor Cyan
$commitMsg = "Fix: Add all missing files including language-context"
git commit -m $commitMsg

# 5. Push
Write-Host "`n=== PUSH VERS GITHUB ===" -ForegroundColor Cyan
git push origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n✓ PUSH RÉUSSI!" -ForegroundColor Green
    Write-Host "Cloudflare va déployer dans 2-3 minutes" -ForegroundColor Cyan
    Write-Host "Vérifie: https://dash.cloudflare.com" -ForegroundColor Yellow
} else {
    Write-Host "`n✗ ERREUR PUSH!" -ForegroundColor Red
    exit 1
}
