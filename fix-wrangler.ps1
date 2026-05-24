# Script pour corriger wrangler.jsonc (enlever le BOM)
Write-Host "🔧 Correction du fichier wrangler.jsonc..." -ForegroundColor Cyan

$content = @'
{
  "$schema": "node_modules/wrangler/config-schema.json",
  "name": "astro",
  "main": "./dist/_worker.js/index.js",
  "compatibility_date": "2025-04-15",
  "compatibility_flags": [
    "nodejs_compat"
  ],
  "assets": {
    "binding": "ASSETS",
    "directory": "./dist"
  },
  "observability": {
    "enabled": true
  }
}
'@

# Écrire le fichier en UTF-8 sans BOM
$utf8NoBom = New-Object System.Text.UTF8Encoding $false
[System.IO.File]::WriteAllText("$PSScriptRoot\wrangler.jsonc", $content, $utf8NoBom)

Write-Host "✅ Fichier corrigé avec succès !" -ForegroundColor Green
Write-Host ""
Write-Host "📋 Maintenant, poussons sur GitHub..." -ForegroundColor Yellow
Write-Host ""

# Git add, commit, push
git add wrangler.jsonc
if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Fichier ajouté à Git" -ForegroundColor Green
    
    git commit -m "Fix: Remove BOM character from wrangler.jsonc"
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✅ Commit créé" -ForegroundColor Green
        
        git push origin master
        if ($LASTEXITCODE -eq 0) {
            Write-Host ""
            Write-Host "🎉 SUCCÈS ! Le fichier a été corrigé et poussé sur GitHub !" -ForegroundColor Green
            Write-Host "🚀 Cloudflare va automatiquement redéployer votre site." -ForegroundColor Cyan
        } else {
            Write-Host "❌ Erreur lors du push" -ForegroundColor Red
        }
    } else {
        Write-Host "⚠️  Aucun changement à commiter (le fichier est peut-être déjà correct)" -ForegroundColor Yellow
    }
} else {
    Write-Host "❌ Erreur lors de l'ajout du fichier" -ForegroundColor Red
}

Write-Host ""
Write-Host "Appuyez sur une touche pour fermer..." -ForegroundColor Gray
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
