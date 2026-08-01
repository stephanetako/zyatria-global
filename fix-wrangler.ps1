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

$utf8NoBom = New-Object System.Text.UTF8Encoding $false
[System.IO.File]::WriteAllText("$PSScriptRoot\wrangler.jsonc", $content, $utf8NoBom)
Write-Host "✅ Fichier corrigé !" -ForegroundColor Green
git add wrangler.jsonc
git commit -m "Fix: Remove BOM character from wrangler.jsonc"
git push origin master
