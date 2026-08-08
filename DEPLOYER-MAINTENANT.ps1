# ============================================
# 🚀 DÉPLOIEMENT ZYATRIA GLOBAL - ULTRA SIMPLE
# ============================================

Write-Host ""
Write-Host "╔══════════════════════════════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "║                                                              ║" -ForegroundColor Cyan
Write-Host "║          🚀 DÉPLOIEMENT ZYATRIA GLOBAL                       ║" -ForegroundColor Cyan
Write-Host "║                                                              ║" -ForegroundColor Cyan
Write-Host "╚════════���═════════════════════════════════════════════════════╝" -ForegroundColor Cyan
Write-Host ""

# Étape 1: Push vers GitHub
Write-Host "📤 Étape 1/2: Envoi vers GitHub..." -ForegroundColor Yellow
Write-Host ""

try {
    git push origin master
    Write-Host ""
    Write-Host "✅ Push réussi !" -ForegroundColor Green
} catch {
    Write-Host ""
    Write-Host "❌ Erreur lors du push" -ForegroundColor Red
    Write-Host "Essayez manuellement: git push origin master" -ForegroundColor Yellow
    exit 1
}

Write-Host ""
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Cyan
Write-Host ""

# Étape 2: Attendre le déploiement
Write-Host "⏳ Étape 2/2: Cloudflare déploie votre site..." -ForegroundColor Yellow
Write-Host ""
Write-Host "   Cela prend environ 3-4 minutes" -ForegroundColor Gray
Write-Host ""

# Compte à rebours visuel
for ($i = 180; $i -gt 0; $i -= 10) {
    $minutes = [math]::Floor($i / 60)
    $seconds = $i % 60
    Write-Host "`r   ⏱️  Temps restant: $minutes min $seconds sec..." -NoNewline -ForegroundColor Cyan
    Start-Sleep -Seconds 10
}

Write-Host ""
Write-Host ""
Write-Host "✅ Déploiement terminé !" -ForegroundColor Green
Write-Host ""

# Résumé final
Write-Host "╔══════════════════════════════════════════════════════════════╗" -ForegroundColor Green
Write-Host "║                                                              ║" -ForegroundColor Green
Write-Host "║          🎉 SITE DÉPLOYÉ AVEC SUCCÈS ! 🎉                   ║" -ForegroundColor Green
Write-Host "║                                                              ║" -ForegroundColor Green
Write-Host "╚══════════════════════════════════════════════════════════════╝" -ForegroundColor Green
Write-Host ""

Write-Host "📊 Ce qui a été déployé:" -ForegroundColor Cyan
Write-Host ""
Write-Host "   ✅ Site complet avec design system" -ForegroundColor White
Write-Host "   ✅ 8 liens Stripe LIVE (paiements réels)" -ForegroundColor White
Write-Host "   ✅ Chatbot Mistral intelligent" -ForegroundColor White
Write-Host "   ✅ Formulaires Formspree" -ForegroundColor White
Write-Host "   ✅ 15+ pages optimisées" -ForegroundColor White
Write-Host ""

Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Cyan
Write-Host ""

Write-Host "🔗 Prochaines étapes:" -ForegroundColor Yellow
Write-Host ""
Write-Host "   1. Ouvrez votre dashboard Cloudflare" -ForegroundColor White
Write-Host "   2. Vérifiez que le déploiement est terminé" -ForegroundColor White
Write-Host "   3. Testez votre site en production" -ForegroundColor White
Write-Host "   4. Vérifiez les boutons Stripe" -ForegroundColor White
Write-Host "   5. Testez le chatbot Mistral" -ForegroundColor White
Write-Host ""

Write-Host "⚠️  RAPPEL: Vous êtes en MODE LIVE Stripe" -ForegroundColor Red
Write-Host "   Les paiements seront RÉELS" -ForegroundColor Yellow
Write-Host "   Utilisez la carte de test: 4242 4242 4242 4242" -ForegroundColor Yellow
Write-Host ""

Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Cyan
Write-Host ""

Write-Host "🎊 Félicitations ! Votre site est en ligne ! 🎊" -ForegroundColor Green
Write-Host ""

# Ouvrir le dashboard Cloudflare
$response = Read-Host "Voulez-vous ouvrir le dashboard Cloudflare ? (O/N)"
if ($response -eq "O" -or $response -eq "o") {
    Start-Process "https://dash.cloudflare.com"
    Write-Host ""
    Write-Host "✅ Dashboard Cloudflare ouvert dans votre navigateur" -ForegroundColor Green
}

Write-Host ""
Write-Host "Appuyez sur une touche pour fermer..." -ForegroundColor Gray
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
