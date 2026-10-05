# Script de vérification des chatbots pour Windows PowerShell
# Encodage UTF-8 pour les emojis

Write-Host "🔍 === VÉRIFICATION DES CHATBOTS ===" -ForegroundColor Cyan
Write-Host ""

# 1. Vérifier les fichiers de chatbot
Write-Host "📁 1. FICHIERS DE CHATBOT" -ForegroundColor Yellow
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

$chatbots = @(
    "src/components/SimpleChatbot.tsx",
    "src/components/EnhancedClaudeChatBot.tsx",
    "src/components/SuperChatbotFamily.tsx",
    "src/components/ClaudePoweredChatBot.tsx",
    "src/components/MistralChatBot.tsx"
)

foreach ($chatbot in $chatbots) {
    if (Test-Path $chatbot) {
        $size = (Get-Item $chatbot).Length
        $name = Split-Path $chatbot -Leaf
        Write-Host "✅ $name ($size bytes)" -ForegroundColor Green
    } else {
        $name = Split-Path $chatbot -Leaf
        Write-Host "❌ $name - ABSENT" -ForegroundColor Red
    }
}

Write-Host ""

# 2. Vérifier les imports dans HomePageComplete
Write-Host "📦 2. IMPORTS DANS HomePageComplete.tsx" -ForegroundColor Yellow
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

$homePageFile = "src/components/pages/HomePageComplete.tsx"
if (Test-Path $homePageFile) {
    $imports = Select-String -Path $homePageFile -Pattern "import.*Chatbot|import.*ChatBot" | ForEach-Object { "$($_.LineNumber):$($_.Line.Trim())" }
    if ($imports) {
        Write-Host "✅ Imports trouvés:" -ForegroundColor Green
        $imports | ForEach-Object { Write-Host "   $_" }
    } else {
        Write-Host "❌ Aucun import de chatbot trouvé" -ForegroundColor Red
    }
} else {
    Write-Host "❌ HomePageComplete.tsx non trouvé" -ForegroundColor Red
}

Write-Host ""

# 3. Vérifier les rendus de chatbot
Write-Host "🎨 3. RENDUS DE CHATBOT" -ForegroundColor Yellow
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

if (Test-Path $homePageFile) {
    $renders = Select-String -Path $homePageFile -Pattern "<.*Chatbot.*/>|<.*ChatBot.*/>" | ForEach-Object { "$($_.LineNumber):$($_.Line.Trim())" }
    if ($renders) {
        Write-Host "✅ Rendus trouvés:" -ForegroundColor Green
        $renders | ForEach-Object { Write-Host "   $_" }
    } else {
        Write-Host "❌ Aucun rendu de chatbot trouvé" -ForegroundColor Red
    }
}

Write-Host ""

# 4. Vérifier les APIs
Write-Host "🔌 4. APIS DE CHATBOT" -ForegroundColor Yellow
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

$apis = @(
    "src/pages/api/claude-chat.ts",
    "src/pages/api/mistral-chat.ts",
    "src/pages/api/ai/chat.ts"
)

foreach ($api in $apis) {
    $name = Split-Path $api -Leaf
    if (Test-Path $api) {
        Write-Host "✅ $name" -ForegroundColor Green
    } else {
        Write-Host "❌ $name - ABSENT" -ForegroundColor Red
    }
}

Write-Host ""

# 5. Vérifier les variables d'environnement
Write-Host "🔑 5. VARIABLES D'ENVIRONNEMENT" -ForegroundColor Yellow
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

if (Test-Path ".env") {
    Write-Host "✅ Fichier .env trouvé" -ForegroundColor Green
    
    $envContent = Get-Content ".env" -Raw
    
    if ($envContent -match "ANTHROPIC_API_KEY") {
        Write-Host "✅ ANTHROPIC_API_KEY configurée" -ForegroundColor Green
    } else {
        Write-Host "❌ ANTHROPIC_API_KEY manquante" -ForegroundColor Red
    }
    
    if ($envContent -match "MISTRAL_API_KEY") {
        Write-Host "✅ MISTRAL_API_KEY configurée" -ForegroundColor Green
    } else {
        Write-Host "⚠️  MISTRAL_API_KEY manquante (optionnelle)" -ForegroundColor Yellow
    }
} else {
    Write-Host "❌ Fichier .env non trouvé" -ForegroundColor Red
}

Write-Host ""

# 6. Vérifier les emojis dans SimpleChatbot
Write-Host "😀 6. EMOJIS DANS SimpleChatbot" -ForegroundColor Yellow
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

$simpleChatbotFile = "src/components/SimpleChatbot.tsx"
if (Test-Path $simpleChatbotFile) {
    $content = Get-Content $simpleChatbotFile -Raw -Encoding UTF8
    $emojiMatches = [regex]::Matches($content, "💬|✨|🚀|🤖")
    
    if ($emojiMatches.Count -gt 0) {
        Write-Host "✅ $($emojiMatches.Count) emojis trouvés" -ForegroundColor Green
        Write-Host "   Emojis utilisés:"
        
        $emojiGroups = $emojiMatches | Group-Object Value | Sort-Object Count -Descending
        foreach ($group in $emojiGroups) {
            Write-Host "      $($group.Count) $($group.Name)"
        }
    } else {
        Write-Host "❌ Aucun emoji trouvé" -ForegroundColor Red
    }
}

Write-Host ""

# 7. Vérifier le z-index
Write-Host "📊 7. Z-INDEX DU CHATBOT" -ForegroundColor Yellow
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

if (Test-Path $simpleChatbotFile) {
    $zindexMatch = Select-String -Path $simpleChatbotFile -Pattern "z-\[9999\]|z-50|z-\[.*?\]" | Select-Object -First 1
    
    if ($zindexMatch) {
        $zindex = $zindexMatch.Line -replace '.*?(z-\[9999\]|z-50|z-\[.*?\]).*', '$1'
        if ($zindex -eq "z-[9999]") {
            Write-Host "✅ Z-index optimal: $zindex" -ForegroundColor Green
        } else {
            Write-Host "⚠️  Z-index: $zindex (devrait être z-[9999])" -ForegroundColor Yellow
        }
    } else {
        Write-Host "❌ Z-index non trouvé" -ForegroundColor Red
    }
}

Write-Host ""

# 8. Résumé
Write-Host "📋 RÉSUMÉ" -ForegroundColor Yellow
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

$problems = 0

if (-not (Test-Path "src/components/SimpleChatbot.tsx")) { $problems++ }
if (-not (Test-Path "src/components/pages/HomePageComplete.tsx")) { $problems++ }
if (-not (Test-Path ".env")) { $problems++ }

if ($problems -eq 0) {
    Write-Host "✅ TOUT EST OK !" -ForegroundColor Green
    Write-Host ""
    Write-Host "Le chatbot devrait être visible sur:" -ForegroundColor Cyan
    Write-Host "👉 http://localhost:4321" -ForegroundColor White
    Write-Host ""
    Write-Host "Cherchez le bouton rond coloré en bas à droite avec 💬 et ✨" -ForegroundColor White
} else {
    Write-Host "❌ $problems problème(s) détecté(s)" -ForegroundColor Red
    Write-Host ""
    Write-Host "Consultez les détails ci-dessus pour corriger." -ForegroundColor Yellow
}

Write-Host ""
Write-Host "🔍 === VÉRIFICATION TERMINÉE ===" -ForegroundColor Cyan
Write-Host ""
Write-Host "💡 PROCHAINES ÉTAPES:" -ForegroundColor Yellow
Write-Host "1. Si tout est OK, lancez: npm run dev" -ForegroundColor White
Write-Host "2. Ouvrez: http://localhost:4321" -ForegroundColor White
Write-Host "3. Cherchez le bouton 💬 en bas à droite" -ForegroundColor White
Write-Host "4. Si invisible, ouvrez la console (F12) et collez le script de diagnostic" -ForegroundColor White
Write-Host ""
