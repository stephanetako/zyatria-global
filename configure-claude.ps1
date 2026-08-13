#!/usr/bin/env pwsh

Write-Host "🤖 CONFIGURATION CLAUDE API POUR ZYATRIA GLOBAL" -ForegroundColor Cyan
Write-Host "================================================" -ForegroundColor Cyan
Write-Host ""

# Vérifier si wrangler est installé
Write-Host "🔍 Vérification de Wrangler..." -ForegroundColor Yellow
$wranglerInstalled = Get-Command wrangler -ErrorAction SilentlyContinue

if (-not $wranglerInstalled) {
    Write-Host "❌ Wrangler n'est pas installé !" -ForegroundColor Red
    Write-Host ""
    Write-Host "📦 Installation de Wrangler..." -ForegroundColor Yellow
    npm install -g wrangler
    Write-Host "✅ Wrangler installé !" -ForegroundColor Green
}
else {
    Write-Host "✅ Wrangler est installé" -ForegroundColor Green
}

Write-Host ""
Write-Host "🔑 OBTENIR VOTRE CLÉ API CLAUDE" -ForegroundColor Cyan
Write-Host "================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "1. Allez sur : https://console.anthropic.com/" -ForegroundColor White
Write-Host "2. Créez un compte (ou connectez-vous)" -ForegroundColor White
Write-Host "3. Allez dans : Settings → API Keys" -ForegroundColor White
Write-Host "4. Cliquez sur : Create Key" -ForegroundColor White
Write-Host "5. Copiez la clé (commence par sk-ant-api03-)" -ForegroundColor White
Write-Host ""

# Demander la clé API
Write-Host "📝 Entrez votre clé API Claude :" -ForegroundColor Yellow
Write-Host "(Format : sk-ant-api03-xxxxx...)" -ForegroundColor Gray
$apiKey = Read-Host "Clé API"

# Vérifier le format de la clé
if ($apiKey -notmatch "^sk-ant-api03-") {
    Write-Host ""
    Write-Host "⚠️  ATTENTION : La clé ne commence pas par 'sk-ant-api03-'" -ForegroundColor Yellow
    Write-Host "Êtes-vous sûr que c'est une clé Claude valide ?" -ForegroundColor Yellow
    Write-Host ""
    $continue = Read-Host "Continuer quand même ? (o/N)"
    
    if ($continue -ne "o" -and $continue -ne "O") {
        Write-Host "❌ Configuration annulée" -ForegroundColor Red
        exit 1
    }
}

Write-Host ""
Write-Host "🔧 Configuration de la clé API..." -ForegroundColor Yellow

# Créer le fichier .env.local pour le développement local
$envContent = "MISTRAL_API_KEY=$apiKey"
Set-Content -Path ".env.local" -Value $envContent

Write-Host "✅ Fichier .env.local créé pour le développement local" -ForegroundColor Green

Write-Host ""
Write-Host "☁️  CONFIGURATION CLOUDFLARE" -ForegroundColor Cyan
Write-Host "============================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Voulez-vous configurer la clé sur Cloudflare Pages maintenant ?" -ForegroundColor Yellow
Write-Host "(Vous devez être connecté à Wrangler)" -ForegroundColor Gray
$configureCloudflare = Read-Host "Configurer sur Cloudflare ? (o/N)"

if ($configureCloudflare -eq "o" -or $configureCloudflare -eq "O") {
    Write-Host ""
    Write-Host "🔐 Configuration de la variable d'environnement sur Cloudflare..." -ForegroundColor Yellow
    Write-Host ""
    
    # Créer un fichier temporaire avec la clé
    $tempFile = New-TemporaryFile
    Set-Content -Path $tempFile.FullName -Value $apiKey
    
    # Configurer la variable sur Cloudflare
    Get-Content $tempFile.FullName | wrangler pages secret put MISTRAL_API_KEY
    
    # Supprimer le fichier temporaire
    Remove-Item $tempFile.FullName
    
    Write-Host ""
    Write-Host "✅ Variable configurée sur Cloudflare Pages !" -ForegroundColor Green
}
else {
    Write-Host ""
    Write-Host "⏭️  Configuration Cloudflare ignorée" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "📝 Pour configurer manuellement :" -ForegroundColor Cyan
    Write-Host "1. Allez sur : https://dash.cloudflare.com/" -ForegroundColor White
    Write-Host "2. Sélectionnez votre projet Pages" -ForegroundColor White
    Write-Host "3. Settings → Environment variables" -ForegroundColor White
    Write-Host "4. Ajoutez : MISTRAL_API_KEY = $apiKey" -ForegroundColor White
}

Write-Host ""
Write-Host "🧪 TEST DE LA CLÉ API" -ForegroundColor Cyan
Write-Host "=====================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Voulez-vous tester la clé API maintenant ?" -ForegroundColor Yellow
$testApi = Read-Host "Tester la clé ? (o/N)"

if ($testApi -eq "o" -or $testApi -eq "O") {
    Write-Host ""
    Write-Host "🔍 Test de la clé API Claude..." -ForegroundColor Yellow
    
    # Créer un script de test temporaire
    $testScript = @"
const fetch = require('node-fetch');

async function testClaudeAPI() {
  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': '$apiKey',
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-3-5-sonnet-20241022',
        max_tokens: 100,
        messages: [{
          role: 'user',
          content: 'Hello! Just testing the API. Reply with OK.'
        }]
      })
    });

    if (response.ok) {
      const data = await response.json();
      console.log('✅ CLÉ API VALIDE !');
      console.log('📝 Réponse de Claude :', data.content[0].text);
      process.exit(0);
    } else {
      const error = await response.json();
      console.log('❌ ERREUR API :', error.error?.message || 'Erreur inconnue');
      process.exit(1);
    }
  } catch (error) {
    console.log('❌ ERREUR :', error.message);
    process.exit(1);
  }
}

testClaudeAPI();
"@
    
    $testFile = New-TemporaryFile
    Set-Content -Path "$($testFile.FullName).js" -Value $testScript
    
    # Exécuter le test
    node "$($testFile.FullName).js"
    
    # Supprimer le fichier temporaire
    Remove-Item "$($testFile.FullName).js"
}

Write-Host ""
Write-Host "🎉 CONFIGURATION TERMINÉE !" -ForegroundColor Green
Write-Host "===========================" -ForegroundColor Green
Write-Host ""
Write-Host "📋 RÉSUMÉ :" -ForegroundColor Cyan
Write-Host "✅ Clé API Claude configurée" -ForegroundColor Green
Write-Host "✅ Fichier .env.local créé" -ForegroundColor Green

if ($configureCloudflare -eq "o" -or $configureCloudflare -eq "O") {
    Write-Host "✅ Variable Cloudflare configurée" -ForegroundColor Green
}

Write-Host ""
Write-Host "🚀 PROCHAINES ÉTAPES :" -ForegroundColor Cyan
Write-Host ""
Write-Host "1. Tester en local :" -ForegroundColor White
Write-Host "   npm run dev" -ForegroundColor Gray
Write-Host ""
Write-Host "2. Déployer sur Cloudflare :" -ForegroundColor White
Write-Host "   npm run build" -ForegroundColor Gray
Write-Host "   git add ." -ForegroundColor Gray
Write-Host "   git commit -m '✨ Configure Claude API'" -ForegroundColor Gray
Write-Host "   git push origin main" -ForegroundColor Gray
Write-Host ""
Write-Host "3. Tester le chatbot sur votre site !" -ForegroundColor White
Write-Host ""
Write-Host "💡 ASTUCE : Gardez ce fichier .env.local pour le développement local" -ForegroundColor Yellow
Write-Host ""
Write-Host "📚 Documentation complète : ✅_CHATBOT_CLAUDE_INSTALLE.md" -ForegroundColor Cyan
Write-Host ""
Write-Host "🎯 Besoin d'aide ? ZyatrIA.contact@gmail.com" -ForegroundColor Cyan
Write-Host ""
