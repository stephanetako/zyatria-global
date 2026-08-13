# Script pour trouver le projet ZyatrIA
Write-Host "🔍 Recherche du projet ZyatrIA..." -ForegroundColor Cyan
Write-Host ""

# Chemins communs à vérifier
$commonPaths = @(
    "$HOME\Desktop\zyatria-global",
    "$HOME\Documents\zyatria-global",
    "$HOME\Downloads\zyatria-global",
    "$HOME\zyatria-global",
    "C:\Users\$env:USERNAME\Desktop\zyatria-global",
    "C:\Users\$env:USERNAME\Documents\zyatria-global",
    "C:\Projects\zyatria-global",
    "C:\Dev\zyatria-global"
)

$found = $false

foreach ($path in $commonPaths) {
    if (Test-Path $path) {
        Write-Host "✅ Projet trouvé !" -ForegroundColor Green
        Write-Host "📁 Emplacement : $path" -ForegroundColor Yellow
        Write-Host ""
        Write-Host "Pour y accéder, copiez-collez cette commande :" -ForegroundColor Cyan
        Write-Host ""
        Write-Host "cd `"$path`"" -ForegroundColor White
        Write-Host ""
        $found = $true
        break
    }
}

if (-not $found) {
    Write-Host "❌ Projet non trouvé dans les emplacements communs" -ForegroundColor Red
    Write-Host ""
    Write-Host "🔍 Recherche dans tout le disque C:\ (peut prendre 1-2 minutes)..." -ForegroundColor Yellow
    Write-Host ""
    
    $results = Get-ChildItem -Path "C:\" -Filter "package.json" -Recurse -ErrorAction SilentlyContinue | 
               Where-Object { $_.Directory.Name -like "*zyatria*" } |
               Select-Object -First 5
    
    if ($results) {
        Write-Host "✅ Projets trouvés :" -ForegroundColor Green
        Write-Host ""
        foreach ($result in $results) {
            $projectPath = $result.Directory.FullName
            Write-Host "📁 $projectPath" -ForegroundColor Yellow
            Write-Host "   Commande : cd `"$projectPath`"" -ForegroundColor White
            Write-Host ""
        }
    } else {
        Write-Host "❌ Aucun projet trouvé" -ForegroundColor Red
        Write-Host ""
        Write-Host "💡 Suggestions :" -ForegroundColor Cyan
        Write-Host "  1. Vérifiez que vous avez bien téléchargé le projet" -ForegroundColor White
        Write-Host "  2. Cherchez manuellement le dossier 'zyatria-global'" -ForegroundColor White
        Write-Host "  3. Ouvrez PowerShell dans le dossier du projet (clic droit → Ouvrir dans Terminal)" -ForegroundColor White
    }
}

Write-Host ""
Write-Host "Appuyez sur ENTRÉE pour fermer..." -ForegroundColor Gray
Read-Host
