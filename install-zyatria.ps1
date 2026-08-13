# ============================================
# 🚀 Installation complète ZyatrIA
# ============================================
# Ce script trouve le projet et lance la configuration
# ============================================

Write-Host ""
Write-Host "============================================" -ForegroundColor Cyan
Write-Host "🚀 Installation ZyatrIA - Tout-en-un" -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""

# Fonction pour trouver le projet
function Find-Project {
    Write-Host "🔍 Recherche du projet..." -ForegroundColor Yellow
    
    # Chemins communs
    $paths = @(
        "$HOME\Desktop\zyatria-global",
        "$HOME\Documents\zyatria-global",
        "$HOME\Downloads\zyatria-global",
        "$HOME\zyatria-global",
        "C:\Users\$env:USERNAME\Desktop\zyatria-global",
        "C:\Users\$env:USERNAME\Documents\zyatria-global"
    )
    
    foreach ($path in $paths) {
        if (Test-Path "$path\package.json") {
            Write-Host "✅ Projet trouvé : $path" -ForegroundColor Green
            return $path
        }
    }
    
    # Demander à l'utilisateur
    Write-Host "❌ Projet non trouvé automatiquement" -ForegroundColor Red
    Write-Host ""
    $manualPath = Read-Host "Entrez le chemin complet du dossier zyatria-global"
    
    if (Test-Path "$manualPath\package.json") {
        return $manualPath
    } else {
        Write-Host "❌ Chemin invalide" -ForegroundColor Red
        exit 1
    }
}

# Trouver le projet
$projectPath = Find-Project

# Naviguer vers le projet
Write-Host ""
Write-Host "📂 Navigation vers : $projectPath" -ForegroundColor Cyan
Set-Location $projectPath

# Vérifier que le script de configuration existe
if (-not (Test-Path "configure-mistral-cloudflare.ps1")) {
    Write-Host "❌ Script de configuration non trouvé" -ForegroundColor Red
    Write-Host "💡 Assurez-vous que tous les fichiers sont présents" -ForegroundColor Yellow
    exit 1
}

# Lancer le script de configuration
Write-Host ""
Write-Host "🚀 Lancement de la configuration..." -ForegroundColor Green
Write-Host ""

# Exécuter le script
& ".\configure-mistral-cloudflare.ps1"
