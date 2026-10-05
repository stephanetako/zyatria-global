# ============================================================
# Déploiement du Worker ZyatrIA avec RAG (Vectorize)
# ============================================================

Write-Host "🚀 Déploiement du Worker ZyatrIA..." -ForegroundColor Cyan
Write-Host ""

# Étape 1 : Créer l'index Vectorize (si pas déjà fait)
Write-Host "📊 Création de l'index Vectorize..." -ForegroundColor Yellow
try {
    npx wrangler vectorize create zyatria-knowledge --dimensions=1024 --metric=cosine 2>$null
} catch {
    Write-Host "⚠️  Index déjà existant (normal si déjà créé)" -ForegroundColor Gray
}

Write-Host ""

# Étape 2 : Déployer le Worker
Write-Host "📦 Déploiement du Worker..." -ForegroundColor Yellow
npx wrangler deploy

Write-Host ""

# Étape 3 : Charger la base de connaissances
if (Test-Path "knowledge.json") {
    Write-Host "📚 Chargement de la base de connaissances dans Vectorize..." -ForegroundColor Yellow
    npx wrangler vectorize insert zyatria-knowledge --file=knowledge.json
    Write-Host "✅ Base de connaissances chargée !" -ForegroundColor Green
} else {
    Write-Host "⚠️  Fichier knowledge.json introuvable" -ForegroundColor Yellow
    Write-Host "💡 Créez d'abord votre base de connaissances avec : node create-knowledge.js" -ForegroundColor Gray
}

Write-Host ""
Write-Host "✅ Déploiement terminé !" -ForegroundColor Green
Write-Host ""
Write-Host "🌐 Votre Worker est maintenant en ligne !" -ForegroundColor Cyan
Write-Host "📝 URL : https://zyatria-api.<votre-subdomain>.workers.dev" -ForegroundColor Gray
Write-Host ""
Write-Host "🧪 Tester le chatbot :" -ForegroundColor Yellow
Write-Host 'curl -X POST https://zyatria-api.<votre-subdomain>.workers.dev/chat \' -ForegroundColor Gray
Write-Host '  -H "Content-Type: application/json" \' -ForegroundColor Gray
Write-Host '  -d ''{"messages":[{"role":"user","content":"Bonjour"}],"lang":"fr"}''' -ForegroundColor Gray
