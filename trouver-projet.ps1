# 🔍 SCRIPT POUR TROUVER LE PROJET ZYATRIA

Write-Host "🔍 RECHERCHE DU PROJET ZYATRIA..." -ForegroundColor Cyan
Write-Host ""

# Chemins possibles
$possiblePaths = @(
    "$env:USERPROFILE\Desktop\zyatria-global",
    "$env:USERPROFILE\OneDrive\Desktop\zyatria-global",
    "$env:USERPROFILE\OneDrive\Bureau\zyatria-global",
    "$env:USERPROFILE\Documents\zyatria-global",
    "$env:USERPROFILE\Downloads\zyatria-global",
    "C:\zyatria-global",
    "D:\zyatria-global"
)

Write-Host "📋 Vérification des emplacements courants..." -ForegroundColor Yellow
Write-Host ""

$found = $false

foreach ($path in $possiblePaths) {
    if (Test-Path $path) {
        Write-Host "✅ TROUVÉ: $path" -ForegroundColor Green
        $found = $true
        
        # Vérifier si c'est un repo Git
        if (Test-Path "$path\.git") {
            Write-Host "   ✅ C'est un repository Git valide!" -ForegroundColor Green
            Write-Host ""
            Write-Host "🎯 UTILISEZ CETTE COMMANDE:" -ForegroundColor Cyan
            Write-Host "   cd `"$path`"" -ForegroundColor White
            Write-Host ""
        }
    }
}

if (-not $found) {
    Write-Host "❌ Projet non trouvé dans les emplacements courants" -ForegroundColor Red
    Write-Host ""
    Write-Host "🔍 RECHERCHE APPROFONDIE..." -ForegroundColor Yellow
    Write-Host "   (Cela peut prendre quelques minutes)" -ForegroundColor Gray
    Write-Host ""
    
    # Recherche dans tout le profil utilisateur
    $searchResult = Get-ChildItem -Path $env:USERPROFILE -Recurse -Directory -Filter "zyatria-global" -ErrorAction SilentlyContinue | Select-Object -First 1
    
    if ($searchResult) {
        Write-Host "✅ TROUVÉ: $($searchResult.FullName)" -ForegroundColor Green
        Write-Host ""
        Write-Host "🎯 UTILISEZ CETTE COMMANDE:" -ForegroundColor Cyan
        Write-Host "   cd `"$($searchResult.FullName)`"" -ForegroundColor White
        Write-Host ""
    } else {
        Write-Host "❌ Projet introuvable" -ForegroundColor Red
        Write-Host ""
        Write-Host "💡 SOLUTIONS:" -ForegroundColor Cyan
        Write-Host "   1. Vérifiez que vous avez bien cloné le projet" -ForegroundColor White
        Write-Host "   2. Cherchez manuellement le dossier 'zyatria-global'" -ForegroundColor White
        Write-Host "   3. Si vous ne l'avez pas encore, clonez-le:" -ForegroundColor White
        Write-Host "      git clone https://github.com/stephanetako/zyatria-global.git" -ForegroundColor Gray
        Write-Host ""
    }
}

Write-Host ""
Write-Host "Appuyez sur une touche pour fermer..." -ForegroundColor Gray
pause
