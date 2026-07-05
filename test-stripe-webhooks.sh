#!/bin/bash

# 🧪 Script de Test Automatisé des Webhooks Stripe
# Ce script teste tous les scénarios de webhooks

echo "🧪 TEST AUTOMATISÉ DES WEBHOOKS STRIPE"
echo "======================================"
echo ""

# Vérifier que Stripe CLI est installé
if ! command -v stripe &> /dev/null; then
    echo "❌ Stripe CLI n'est pas installé"
    echo "📥 Installation requise:"
    echo ""
    echo "macOS:   brew install stripe/stripe-cli/stripe"
    echo "Windows: scoop install stripe"
    echo "Linux:   Voir GUIDE_TEST_STRIPE_CLI.md"
    echo ""
    exit 1
fi

echo "✅ Stripe CLI détecté"
echo ""

# Vérifier que le serveur est démarré
echo "🔍 Vérification du serveur local..."
if ! curl -s http://localhost:4321 > /dev/null 2>&1; then
    echo "❌ Le serveur n'est pas démarré sur le port 4321"
    echo "💡 Démarrez-le avec: npm run dev"
    echo ""
    exit 1
fi

echo "✅ Serveur local actif"
echo ""

# Fonction pour tester un événement
test_event() {
    local event_name=$1
    local description=$2
    
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "📋 TEST: $description"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo ""
    echo "🚀 Déclenchement de l'événement: $event_name"
    echo ""
    
    # Déclencher l'événement
    stripe trigger $event_name
    
    echo ""
    echo "⏳ Attente de 2 secondes..."
    sleep 2
    echo ""
}

# Afficher les instructions
echo "📝 INSTRUCTIONS:"
echo "1. Assurez-vous que 'stripe listen' est actif dans un autre terminal"
echo "2. Commande: stripe listen --forward-to localhost:4321/api/stripe/webhook"
echo "3. Appuyez sur ENTRÉE pour continuer..."
read

echo ""
echo "🎯 DÉBUT DES TESTS"
echo "=================="
echo ""

# Test 1: Paiement réussi
test_event "payment_intent.succeeded" "Paiement Réussi"

# Test 2: Checkout complété
test_event "checkout.session.completed" "Checkout Complété"

# Test 3: Nouvel abonnement
test_event "customer.subscription.created" "Nouvel Abonnement (Période d'Essai)"

# Test 4: Abonnement mis à jour
test_event "customer.subscription.updated" "Abonnement Mis à Jour"

# Test 5: Paiement échoué
test_event "payment_intent.payment_failed" "Paiement Échoué"

# Test 6: Abonnement supprimé
test_event "customer.subscription.deleted" "Abonnement Supprimé"

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✅ TOUS LES TESTS TERMINÉS"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "📊 RÉSUMÉ:"
echo "   ✅ 6 événements déclenchés"
echo "   ✅ Vérifiez les logs dans le terminal 'stripe listen'"
echo "   ✅ Vérifiez les logs dans le terminal 'npm run dev'"
echo ""
echo "🎯 VÉRIFICATIONS À FAIRE:"
echo "   [ ] Tous les événements ont été reçus (200 OK)"
echo "   [ ] Les logs montrent les bonnes données"
echo "   [ ] Les scores de santé sont corrects:"
echo "       - Abonnement créé/mis à jour: 100%"
echo "       - Abonnement supprimé: 0%"
echo "       - Paiement échoué: 50%"
echo ""
echo "📚 Pour plus de détails, voir: GUIDE_TEST_STRIPE_CLI.md"
echo ""
echo "🚀 Prochaine étape: Créer le dashboard (Étape 2)"
echo ""
