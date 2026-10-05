# ============================================================
# Configuration des secrets Cloudflare pour ZyatrIA Worker
# ============================================================

Write-Host "🔑 Configuration des secrets Cloudflare..." -ForegroundColor Cyan
Write-Host ""

# Claude API Key
Write-Host "📝 Configuration de CLAUDE_API_KEY" -ForegroundColor Yellow
Write-Host "Obtenir votre clé sur : https://console.anthropic.com/" -ForegroundColor Gray
npx wrangler secret put CLAUDE_API_KEY

Write-Host ""

# Mistral API Key
Write-Host "📝 Configuration de MISTRAL_API_KEY" -ForegroundColor Yellow
Write-Host "Obtenir votre clé sur : https://console.mistral.ai/" -ForegroundColor Gray
npx wrangler secret put MISTRAL_API_KEY

Write-Host ""

# Pexels API Key
Write-Host "📝 Configuration de PEXELS_API_KEY" -ForegroundColor Yellow
Write-Host "Obtenir votre clé gratuite sur : https://www.pexels.com/api/" -ForegroundColor Gray
npx wrangler secret put PEXELS_API_KEY

Write-Host ""
Write-Host "✅ Configuration des secrets terminée !" -ForegroundColor Green
Write-Host ""
Write-Host "🚀 Prochaines étapes :" -ForegroundColor Cyan
Write-Host "1. Créer l'index Vectorize : npx wrangler vectorize create zyatria-knowledge --dimensions=1024 --metric=cosine"
Write-Host "2. Peupler la base de connaissances : node populate-vectorize.js"
Write-Host "3. Déployer le worker : npx wrangler deploy"
