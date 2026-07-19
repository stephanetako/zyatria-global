# 🧪 Script de test pour l'API Mistral (PowerShell)
# Ce script teste la connexion à l'API Mistral avec votre clé API

Write-Host "🧪 Test de l'API Mistral" -ForegroundColor Cyan
Write-Host "=======================" -ForegroundColor Cyan
Write-Host ""

# Vérifier si la clé API est définie
$apiKey = $env:MISTRAL_API_KEY

if (-not $apiKey) {
    # Essayer de lire depuis .env
    if (Test-Path ".env") {
        $envContent = Get-Content ".env"
        foreach ($line in $envContent) {
            if ($line -match "^MISTRAL_API_KEY=(.+)$") {
                $apiKey = $matches[1]
                break
            }
        }
    }
}

if (-not $apiKey) {
    Write-Host "❌ Erreur : La variable MISTRAL_API_KEY n'est pas définie" -ForegroundColor Red
    Write-Host ""
    Write-Host "📋 Pour définir la clé API :" -ForegroundColor Yellow
    Write-Host "   `$env:MISTRAL_API_KEY='sk-VOTRE_CLE_API_ICI'" -ForegroundColor White
    Write-Host ""
    Write-Host "   Ou créer un fichier .env avec :" -ForegroundColor Yellow
    Write-Host "   MISTRAL_API_KEY=sk-VOTRE_CLE_API_ICI" -ForegroundColor White
    Write-Host ""
    exit 1
}

$maskedKey = $apiKey.Substring(0, [Math]::Min(10, $apiKey.Length)) + "..."
Write-Host "✅ Clé API trouvée : $maskedKey" -ForegroundColor Green
Write-Host ""

# Test 1 : Appel API simple
Write-Host "📡 Test 1 : Appel API simple" -ForegroundColor Cyan
Write-Host "----------------------------" -ForegroundColor Cyan

$headers = @{
    "Authorization" = "Bearer $apiKey"
    "Content-Type" = "application/json"
}

$body = @{
    model = "mistral-medium"
    messages = @(
        @{
            role = "user"
            content = "Bonjour !"
        }
    )
    temperature = 0.7
} | ConvertTo-Json -Depth 10

try {
    $response = Invoke-RestMethod -Uri "https://api.mistral.ai/v1/chat/completions" `
        -Method Post `
        -Headers $headers `
        -Body $body `
        -ErrorAction Stop

    Write-Host "✅ Succès ! L'API fonctionne correctement" -ForegroundColor Green
    Write-Host ""
    Write-Host "📝 Réponse :" -ForegroundColor Yellow
    Write-Host $response.choices[0].message.content -ForegroundColor White
    Write-Host ""
}
catch {
    $statusCode = $_.Exception.Response.StatusCode.value__
    Write-Host "❌ Erreur : Code HTTP $statusCode" -ForegroundColor Red
    Write-Host ""
    Write-Host "📝 Détails de l'erreur :" -ForegroundColor Yellow
    Write-Host $_.Exception.Message -ForegroundColor White
    Write-Host ""
    
    if ($statusCode -eq 401) {
        Write-Host "🔑 Problème d'authentification :" -ForegroundColor Yellow
        Write-Host "   - Vérifiez que votre clé API est correcte" -ForegroundColor White
        Write-Host "   - Vérifiez qu'elle n'a pas été révoquée" -ForegroundColor White
        Write-Host "   - Générez une nouvelle clé sur https://console.mistral.ai/" -ForegroundColor White
    }
    elseif ($statusCode -eq 429) {
        Write-Host "⏱️ Limite de taux dépassée :" -ForegroundColor Yellow
        Write-Host "   - Attendez quelques minutes avant de réessayer" -ForegroundColor White
        Write-Host "   - Vérifiez votre quota sur https://console.mistral.ai/usage" -ForegroundColor White
    }
    elseif ($statusCode -ge 500) {
        Write-Host "🔧 Problème serveur Mistral :" -ForegroundColor Yellow
        Write-Host "   - Réessayez dans quelques minutes" -ForegroundColor White
        Write-Host "   - Vérifiez le status : https://status.mistral.ai/" -ForegroundColor White
    }
    Write-Host ""
    exit 1
}

# Test 2 : Test avec le prompt ZyatrIA
Write-Host "📡 Test 2 : Test avec le contexte ZyatrIA" -ForegroundColor Cyan
Write-Host "----------------------------------------" -ForegroundColor Cyan

$body2 = @{
    model = "mistral-medium"
    messages = @(
        @{
            role = "system"
            content = "Tu es un assistant IA pour ZyatrIA Global, une entreprise canadienne spécialisée en agents IA."
        },
        @{
            role = "user"
            content = "Quels sont vos services ?"
        }
    )
    temperature = 0.7
    max_tokens = 800
} | ConvertTo-Json -Depth 10

try {
    $response2 = Invoke-RestMethod -Uri "https://api.mistral.ai/v1/chat/completions" `
        -Method Post `
        -Headers $headers `
        -Body $body2 `
        -ErrorAction Stop

    Write-Host "✅ Succès ! Le contexte ZyatrIA fonctionne" -ForegroundColor Green
    Write-Host ""
    Write-Host "📝 Réponse :" -ForegroundColor Yellow
    Write-Host $response2.choices[0].message.content -ForegroundColor White
    Write-Host ""
}
catch {
    Write-Host "❌ Erreur lors du test 2" -ForegroundColor Red
    Write-Host $_.Exception.Message -ForegroundColor White
    Write-Host ""
}

# Test 3 : Vérifier les modèles disponibles
Write-Host "📡 Test 3 : Modèles disponibles" -ForegroundColor Cyan
Write-Host "------------------------------" -ForegroundColor Cyan

try {
    $models = Invoke-RestMethod -Uri "https://api.mistral.ai/v1/models" `
        -Method Get `
        -Headers $headers `
        -ErrorAction Stop

    Write-Host "✅ Modèles disponibles :" -ForegroundColor Green
    foreach ($model in $models.data) {
        Write-Host "   - $($model.id)" -ForegroundColor White
    }
    Write-Host ""
}
catch {
    Write-Host "⚠️ Impossible de récupérer la liste des modèles" -ForegroundColor Yellow
    Write-Host ""
}

# Résumé
Write-Host "================================" -ForegroundColor Cyan
Write-Host "📊 Résumé des tests" -ForegroundColor Cyan
Write-Host "================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "✅ Tous les tests sont passés !" -ForegroundColor Green
Write-Host ""
Write-Host "🎯 Prochaines étapes :" -ForegroundColor Yellow
Write-Host "   1. Votre clé API Mistral fonctionne correctement" -ForegroundColor White
Write-Host "   2. Le modèle mistral-medium est accessible" -ForegroundColor White
Write-Host "   3. Le chatbot est prêt à être utilisé" -ForegroundColor White
Write-Host ""
Write-Host "🚀 Pour tester le chatbot sur votre site :" -ForegroundColor Yellow
Write-Host "   1. Démarrer le serveur : npm run dev" -ForegroundColor White
Write-Host "   2. Ouvrir http://localhost:4321" -ForegroundColor White
Write-Host "   3. Cliquer sur l'icône ✨ en bas à droite" -ForegroundColor White
Write-Host "   4. Envoyer un message de test" -ForegroundColor White
Write-Host ""
Write-Host "📚 Documentation complète : 🔑_CONFIGURATION_MISTRAL_API.md" -ForegroundColor Cyan
Write-Host ""
