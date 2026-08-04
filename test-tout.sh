#!/bin/bash

# 🧪 Script de test automatique complet
# Teste toutes les fonctionnalités du site après déploiement

set -e

# Couleurs
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

success() {
    echo -e "${GREEN}✅ $1${NC}"
}

warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

error() {
    echo -e "${RED}❌ $1${NC}"
}

# URL du site (modifiable)
SITE_URL="${1:-https://zyatria-global.workers.dev}"

echo ""
echo "🧪 TEST AUTOMATIQUE COMPLET"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
info "URL testée : $SITE_URL"
echo ""

# Compteurs
TESTS_TOTAL=0
TESTS_PASSED=0
TESTS_FAILED=0

# Fonction de test
run_test() {
    local test_name="$1"
    local test_command="$2"
    
    TESTS_TOTAL=$((TESTS_TOTAL + 1))
    
    info "Test $TESTS_TOTAL: $test_name"
    
    if eval "$test_command" > /dev/null 2>&1; then
        success "PASS"
        TESTS_PASSED=$((TESTS_PASSED + 1))
    else
        error "FAIL"
        TESTS_FAILED=$((TESTS_FAILED + 1))
    fi
    echo ""
}

# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# 1. TESTS DE BASE
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🌐 1. TESTS DE BASE"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

run_test "Site accessible" \
    "curl -s -o /dev/null -w '%{http_code}' $SITE_URL | grep -q 200"

run_test "Page d'accueil charge" \
    "curl -s $SITE_URL | grep -q 'ZyatrIA'"

run_test "HTTPS activé" \
    "curl -s -I $SITE_URL | grep -q 'HTTP/2 200'"

# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# 2. TESTS DU CHATBOT
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🤖 2. TESTS DU CHATBOT"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

run_test "API chatbot accessible" \
    "curl -s -o /dev/null -w '%{http_code}' $SITE_URL/api/mistral-chat -X POST -H 'Content-Type: application/json' -d '{\"message\":\"test\"}' | grep -q 200"

run_test "Chatbot répond à 'Bonjour'" \
    "curl -s $SITE_URL/api/mistral-chat -X POST -H 'Content-Type: application/json' -d '{\"message\":\"Bonjour\"}' | grep -q 'response'"

run_test "Chatbot répond à 'Prix'" \
    "curl -s $SITE_URL/api/mistral-chat -X POST -H 'Content-Type: application/json' -d '{\"message\":\"Quels sont vos prix ?\"}' | grep -q 'Starter'"

run_test "Chatbot répond en anglais" \
    "curl -s $SITE_URL/api/mistral-chat -X POST -H 'Content-Type: application/json' -d '{\"message\":\"Hello\"}' | grep -q 'response'"

# Test du cache (2 requêtes identiques)
info "Test du cache (requête 1/2)"
curl -s $SITE_URL/api/mistral-chat -X POST -H 'Content-Type: application/json' -d '{"message":"Test cache"}' > /dev/null
echo ""

run_test "Cache fonctionne (requête 2/2)" \
    "curl -s $SITE_URL/api/mistral-chat -X POST -H 'Content-Type: application/json' -d '{\"message\":\"Test cache\"}' | grep -q 'cached'"

# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# 3. TESTS DES STATISTIQUES
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📊 3. TESTS DES STATISTIQUES"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

run_test "API cache-stats accessible" \
    "curl -s -o /dev/null -w '%{http_code}' $SITE_URL/api/cache-stats | grep -q 200"

run_test "Statistiques du cache disponibles" \
    "curl -s $SITE_URL/api/cache-stats | grep -q 'hitRate'"

run_test "Statistiques du rate limiter disponibles" \
    "curl -s $SITE_URL/api/cache-stats | grep -q 'requestsLastMinute'"

# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# 4. TESTS DES PAGES
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📄 4. TESTS DES PAGES"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

run_test "Page d'accueil" \
    "curl -s -o /dev/null -w '%{http_code}' $SITE_URL/ | grep -q 200"

run_test "Page Services" \
    "curl -s -o /dev/null -w '%{http_code}' $SITE_URL/services | grep -q 200"

run_test "Page Pricing" \
    "curl -s -o /dev/null -w '%{http_code}' $SITE_URL/pricing | grep -q 200"

run_test "Page About" \
    "curl -s -o /dev/null -w '%{http_code}' $SITE_URL/about | grep -q 200"

run_test "Page Contact" \
    "curl -s -o /dev/null -w '%{http_code}' $SITE_URL/contact-simple | grep -q 200"

run_test "Page Micro-Agents" \
    "curl -s -o /dev/null -w '%{http_code}' $SITE_URL/micro-agents | grep -q 200"

run_test "Page Technology" \
    "curl -s -o /dev/null -w '%{http_code}' $SITE_URL/technology | grep -q 200"

# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# 5. TESTS DES API STRIPE
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━��━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "💳 5. TESTS DES API STRIPE"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

run_test "API Stripe webhook accessible" \
    "curl -s -o /dev/null -w '%{http_code}' $SITE_URL/api/stripe/webhook -X POST | grep -q 400"

run_test "API Stripe test accessible" \
    "curl -s -o /dev/null -w '%{http_code}' $SITE_URL/api/stripe/test | grep -q 200"

# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# 6. TESTS DE PERFORMANCE
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "⚡ 6. TESTS DE PERFORMANCE"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

info "Mesure du temps de réponse de la page d'accueil..."
RESPONSE_TIME=$(curl -s -o /dev/null -w '%{time_total}' $SITE_URL)
echo "Temps de réponse: ${RESPONSE_TIME}s"

if (( $(echo "$RESPONSE_TIME < 3.0" | bc -l) )); then
    success "Temps de réponse < 3s"
    TESTS_PASSED=$((TESTS_PASSED + 1))
else
    warning "Temps de réponse > 3s (peut être amélioré)"
    TESTS_FAILED=$((TESTS_FAILED + 1))
fi
TESTS_TOTAL=$((TESTS_TOTAL + 1))
echo ""

info "Mesure du temps de réponse du chatbot..."
CHATBOT_TIME=$(curl -s -o /dev/null -w '%{time_total}' $SITE_URL/api/mistral-chat -X POST -H 'Content-Type: application/json' -d '{"message":"test"}')
echo "Temps de réponse: ${CHATBOT_TIME}s"

if (( $(echo "$CHATBOT_TIME < 5.0" | bc -l) )); then
    success "Temps de réponse chatbot < 5s"
    TESTS_PASSED=$((TESTS_PASSED + 1))
else
    warning "Temps de réponse chatbot > 5s"
    TESTS_FAILED=$((TESTS_FAILED + 1))
fi
TESTS_TOTAL=$((TESTS_TOTAL + 1))
echo ""

# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# 7. TESTS DE SÉCURITÉ
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🔒 7. TESTS DE SÉCURITÉ"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

run_test "HTTPS forcé" \
    "curl -s -I $SITE_URL | grep -q 'strict-transport-security'"

run_test "Headers de sécurité présents" \
    "curl -s -I $SITE_URL | grep -q 'x-'"

# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# RÉSUMÉ
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📊 RÉSUMÉ DES TESTS"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

echo "Total de tests : $TESTS_TOTAL"
success "Tests réussis : $TESTS_PASSED"
if [ $TESTS_FAILED -gt 0 ]; then
    error "Tests échoués : $TESTS_FAILED"
else
    echo "Tests échoués : $TESTS_FAILED"
fi
echo ""

# Calcul du pourcentage
PERCENTAGE=$((TESTS_PASSED * 100 / TESTS_TOTAL))

echo "Taux de réussite : ${PERCENTAGE}%"
echo ""

if [ $PERCENTAGE -ge 90 ]; then
    success "🎉 EXCELLENT ! Le site fonctionne parfaitement !"
elif [ $PERCENTAGE -ge 70 ]; then
    warning "⚠️  BON ! Quelques améliorations possibles."
else
    error "❌ ATTENTION ! Plusieurs problèmes détectés."
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Afficher les statistiques du cache
info "📊 Statistiques du cache :"
curl -s $SITE_URL/api/cache-stats | python3 -m json.tool 2>/dev/null || echo "Impossible de récupérer les stats"
echo ""

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

if [ $TESTS_FAILED -eq 0 ]; then
    success "✅ Tous les tests sont passés ! Votre site est prêt ! 🚀"
else
    warning "⚠️  Certains tests ont échoué. Vérifiez les logs avec : wrangler tail"
fi

echo ""
