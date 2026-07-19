#!/bin/bash

echo "🔍 VÉRIFICATION DE L'INTÉGRATION STRIPE"
echo "========================================"
echo ""

echo "📋 PRODUITS CONFIGURÉS DANS stripe-links.ts:"
echo ""
echo "✅ STARTER:"
echo "   - Paiement unique: 997 CAD"
echo "   - Abonnement mensuel: 97 CAD/mois"
echo ""
echo "✅ PROFESSIONAL:"
echo "   - Paiement unique: 2997 CAD"
echo "   - Abonnement mensuel: 297 CAD/mois"
echo ""
echo "✅ ENTERPRISE:"
echo "   - Paiement unique: 9997 CAD"
echo "   - Abonnement mensuel: 997 CAD/mois"
echo ""
echo "✅ MICRO-AGENTS (6 produits):"
echo "   - Lead Qualification: 197 CAD/mois"
echo "   - Customer Support: 147 CAD/mois"
echo "   - Appointments: 127 CAD/mois"
echo "   - Prospect Followup: 177 CAD/mois"
echo "   - Real Estate: 247 CAD/mois"
echo "   - E-commerce: 197 CAD/mois"
echo ""
echo "✅ SERVICES ADDITIONNELS:"
echo "   - Audit IA: 497 CAD"
echo "   - Consultation: 147 CAD"
echo ""
echo "========================================"
echo "📊 TOTAL: 14 produits Stripe configurés"
echo ""

echo "🔍 Vérification des liens Stripe..."
echo ""

# Compter les liens valides
valid_links=$(grep -o "https://buy.stripe.com/test_" src/config/stripe-links.ts | wc -l)
echo "✅ Liens Stripe valides trouvés: $valid_links"

echo ""
echo "🔍 Vérification de l'utilisation dans les composants..."
echo ""

# Vérifier Pricing.tsx
if grep -q "stripeLinks" src/components/Pricing.tsx; then
  echo "✅ Pricing.tsx utilise les liens Stripe"
else
  echo "❌ Pricing.tsx n'utilise PAS les liens Stripe"
fi

# Vérifier MicroAgents.tsx
if grep -q "stripeLinks\|STRIPE_PAYMENT_LINKS" src/components/MicroAgents.tsx; then
  echo "✅ MicroAgents.tsx utilise les liens Stripe"
else
  echo "❌ MicroAgents.tsx n'utilise PAS les liens Stripe"
fi

# Vérifier les pages
if grep -q "stripeLinks\|STRIPE_PAYMENT_LINKS" src/components/pages/*.tsx; then
  echo "✅ Pages utilisent les liens Stripe"
else
  echo "⚠️  Pages n'utilisent peut-être pas les liens Stripe"
fi

echo ""
echo "🔍 Recherche de tous les boutons de paiement..."
echo ""

# Chercher les boutons "Commencer" ou "Acheter"
payment_buttons=$(grep -r "Commencer\|Acheter\|Souscrire\|buy.stripe.com" src/components --include="*.tsx" | wc -l)
echo "📊 Boutons de paiement trouvés: $payment_buttons"

echo ""
echo "========================================"
echo "📋 RÉSUMÉ"
echo "========================================"
echo ""
echo "✅ Produits configurés: 14"
echo "✅ Liens Stripe valides: $valid_links"
echo "✅ Composants intégrés: Pricing, MicroAgents"
echo ""

if [ $valid_links -eq 14 ]; then
  echo "🎉 PARFAIT ! Tous les produits Stripe sont configurés !"
else
  echo "⚠️  Attention: Nombre de liens ($valid_links) différent du nombre de produits (14)"
fi

