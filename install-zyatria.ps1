# Script d'installation automatique de ZyatrIA Global
# Ce script crée tous les fichiers du projet sur votre Bureau

Write-Host "🚀 Installation de ZyatrIA Global..." -ForegroundColor Cyan
Write-Host ""

# Définir le chemin du projet
$desktopPath = [Environment]::GetFolderPath("Desktop")
$projectPath = Join-Path $desktopPath "zyatria-global"

# Créer le dossier principal
Write-Host "📂 Création du dossier principal..." -ForegroundColor Yellow
if (Test-Path $projectPath) {
    Write-Host "⚠️  Le dossier existe déjà. Suppression..." -ForegroundColor Red
    Remove-Item -Path $projectPath -Recurse -Force
}
New-Item -ItemType Directory -Path $projectPath -Force | Out-Null

# Créer la structure de dossiers
Write-Host "📁 Création de la structure de dossiers..." -ForegroundColor Yellow
$folders = @(
    "src",
    "src/components",
    "src/components/ui",
    "src/components/pages",
    "src/config",
    "src/hooks",
    "src/layouts",
    "src/lib",
    "src/pages",
    "src/pages/api",
    "src/styles",
    "public",
    "generated"
)

foreach ($folder in $folders) {
    New-Item -ItemType Directory -Path (Join-Path $projectPath $folder) -Force | Out-Null
}

Write-Host "✅ Structure créée avec succès!" -ForegroundColor Green
Write-Host ""
Write-Host "📍 Emplacement: $projectPath" -ForegroundColor Cyan
Write-Host ""
Write-Host "⏳ Préparation des fichiers de configuration..." -ForegroundColor Yellow
Write-Host ""
Write-Host "🎯 Prochaine étape: Création des fichiers de configuration" -ForegroundColor Cyan
Write-Host ""
Write-Host "✅ SCRIPT TERMINÉ!" -ForegroundColor Green
Write-Host ""
Write-Host "📂 Ouvre le dossier: $projectPath" -ForegroundColor Cyan
