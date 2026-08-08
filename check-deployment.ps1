# 🔍 Vérification du déploiement
Write-Host "🔍 VERIFICATION DU DEPLOIEMENT" -ForegroundColor Cyan
Write-Host "==============================" -ForegroundColor Cyan
Write-Host ""

Write-Host "📊 Statut actuel:" -ForegroundColor Yellow
Write-Host ""
Write-Host "1. Build en cours sur Cloudflare" -ForegroundColor White
Write-Host "2. Commit: 'Force rebuild - Design System'" -ForegroundColor White
Write-Host "3. Branche: master" -ForegroundColor White
Write-Host ""

Write-Host "🌐 URL de production:" -ForegroundColor Cyan
Write-Host "https://zyatria-global.zyatria-contact.workers.dev" -ForegroundColor White
Write-Host ""

Write-Host "⏳ Temps estimé: 3-4 minutes" -ForegroundColor Yellow
Write-Host ""

Write-Host "📋 Checklist après déploiement:" -ForegroundColor Cyan
Write-Host "  ✓ Vider le cache du navigateur (Ctrl+Shift+Delete)" -ForegroundColor White
Write-Host "  ✓ Ouvrir en navigation privée (Ctrl+Shift+N)" -ForegroundColor White
Write-Host "  ✓ Tester l'URL de production" -ForegroundColor White
Write-Host ""

Write-Host "🎯 Ce que vous devriez voir:" -ForegroundColor Cyan
Write-Host "  ✓ NavigationDesignSystem (couleurs terre)" -ForegroundColor Green
Write-Host "  ✓ HeroDesignSystem (gradient)" -ForegroundColor Green
Write-Host "  ✓ TrustStatsSimple" -ForegroundColor Green
Write-Host "  ✓ Services" -ForegroundColor Green
Write-Host "  ✓ MicroAgents" -ForegroundColor Green
Write-Host "  ✓ RoadmapDesignSystem" -ForegroundColor Green
Write-Host "  ✓ Pricing" -ForegroundColor Green
Write-Host "  ✓ TestimonialsDesignSystem" -ForegroundColor Green
Write-Host "  ✓ FAQDesignSystem" -ForegroundColor Green
Write-Host "  ✓ CTAFinal" -ForegroundColor Green
Write-Host "  ✓ FooterDesignSystem" -ForegroundColor Green
Write-Host "  ✓ MistralChatBot (en bas à droite)" -ForegroundColor Green
Write-Host ""

$continue = Read-Host "Voulez-vous ouvrir le dashboard Cloudflare? (O/N)"
if ($continue -eq "O" -or $continue -eq "o") {
    Start-Process "https://dash.cloudflare.com"
}

Write-Host ""
$openSite = Read-Host "Voulez-vous ouvrir le site? (O/N)"
if ($openSite -eq "O" -or $openSite -eq "o") {
    Start-Process "https://zyatria-global.zyatria-contact.workers.dev"
}

Write-Host ""
Write-Host "✅ Script terminé" -ForegroundColor Green
pause
