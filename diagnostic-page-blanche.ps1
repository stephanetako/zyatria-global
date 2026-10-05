# Diagnostic Page Blanche - ZyatrIA Global

Write-Host "🔍 Diagnostic Page Blanche - ZyatrIA Global" -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host ""

# 1. Vérifier que tous les composants existent
Write-Host "📁 Vérification des composants..." -ForegroundColor Yellow

$components = @(
    "NavigationDesignSystem",
    "HeroDesignSystem",
    "TrustStatsSimple",
    "Services",
    "MicroAgents",
    "RoadmapDesignSystem",
    "Pricing",
    "TestimonialsDesignSystem",
    "FAQDesignSystem",
    "CTAFinal",
    "FooterDesignSystem",
    "SuperChatbotFamily"
)

$missing = 0
foreach ($component in $components) {
    $path = "src/components/$component.tsx"
    if (Test-Path $path) {
        Write-Host "  ✅ $component.tsx" -ForegroundColor Green
    } else {
        Write-Host "  ��� $component.tsx - MANQUANT" -ForegroundColor Red
        $missing++
    }
}

Write-Host ""
if ($missing -eq 0) {
    Write-Host "✅ Tous les composants sont présents" -ForegroundColor Green
} else {
    Write-Host "❌ $missing composant(s) manquant(s)" -ForegroundColor Red
}

# 2. Vérifier index.astro
Write-Host ""
Write-Host "🔧 Vérification de la configuration..." -ForegroundColor Yellow

$indexContent = Get-Content "src/pages/index.astro" -Raw

if ($indexContent -match "AppWrapperProgressive") {
    Write-Host "  ✅ index.astro utilise AppWrapperProgressive" -ForegroundColor Green
} elseif ($indexContent -match "AppWrapperSafe") {
    Write-Host "  ⚠️  index.astro utilise AppWrapperSafe (ancienne version)" -ForegroundColor Yellow
} elseif ($indexContent -match "AppWrapperMinimal") {
    Write-Host "  ⚠️  index.astro utilise AppWrapperMinimal (version de test)" -ForegroundColor Yellow
} else {
    Write-Host "  ❌ index.astro n'utilise aucun wrapper connu" -ForegroundColor Red
}

# 3. Vérifier le build
Write-Host ""
Write-Host "🏗️  Test de build..." -ForegroundColor Yellow

$buildOutput = npm run build 2>&1
if ($LASTEXITCODE -eq 0) {
    Write-Host "  ✅ Build réussi" -ForegroundColor Green
} else {
    Write-Host "  ❌ Build échoué - Voir les erreurs ci-dessous:" -ForegroundColor Red
    $buildOutput | Select-String -Pattern "error" -CaseSensitive | Select-Object -First 5
}

# Résumé
Write-Host ""
Write-Host "📊 Résumé" -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host "Composants: $($components.Count - $missing)/$($components.Count)"
Write-Host "Configuration: OK"
Write-Host ""
Write-Host "🎯 Recommandations:" -ForegroundColor Yellow
Write-Host ""

if ($missing -eq 0) {
    Write-Host "1. Tester localement: npm run dev" -ForegroundColor White
    Write-Host "2. Ouvrir http://localhost:4321" -ForegroundColor White
    Write-Host "3. Vérifier la console (F12) pour les erreurs" -ForegroundColor White
    Write-Host "4. Si tout fonctionne, déployer: .\deploy-cloudflare.ps1" -ForegroundColor White
} else {
    Write-Host "1. Restaurer les composants manquants" -ForegroundColor White
    Write-Host "2. Relancer ce diagnostic" -ForegroundColor White
}

Write-Host ""
Write-Host "✅ Diagnostic terminé" -ForegroundColor Green
