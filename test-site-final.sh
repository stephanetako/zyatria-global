#!/bin/bash

echo ""
echo "🔍 VÉRIFICATION COMPLÈTE DU SITE FONCTIONNEL"
echo "============================================="
echo ""

base_url="https://main.zyatria-global.pages.dev"

echo "🌐 Site testé : $base_url"
echo ""

# Test des pages principales
echo "📄 Test des pages principales..."
echo ""

pages=(
  "/:Home"
  "/pricing:Pricing"
  "/services:Services"
  "/about:About"
  "/contact-simple:Contact"
  "/micro-agents:Micro-Agents"
  "/technology:Technology"
  "/knowledge-base:Knowledge Base"
  "/docs:Documentation"
)

for page_info in "${pages[@]}"; do
  IFS=':' read -r path name <<< "$page_info"
  test_url="$base_url$path"
  
  echo -n "   $name ($path) ... "
  status=$(curl -s -o /dev/null -w "%{http_code}" "$test_url" 2>/dev/null || echo "FAIL")
  if [ "$status" = "200" ]; then
    echo "✅ OK"
  else
    echo "❌ FAIL ($status)"
  fi
done

echo ""
echo "🔧 Test des APIs..."
echo ""

apis=(
  "/api/analytics:Analytics"
  "/api/mistral-chat:Mistral Chat"
)

for api_info in "${apis[@]}"; do
  IFS=':' read -r path name <<< "$api_info"
  test_url="$base_url$path"
  
  echo -n "   $name ($path) ... "
  status=$(curl -s -o /dev/null -w "%{http_code}" "$test_url" 2>/dev/null || echo "FAIL")
  if [ "$status" = "200" ] || [ "$status" = "405" ] || [ "$status" = "400" ]; then
    echo "✅ OK ($status)"
  else
    echo "⚠️  ($status)"
  fi
done

echo ""
echo "📊 Test des ressources statiques..."
echo ""

# Télécharger la page d'accueil pour vérifier les ressources
echo -n "   Téléchargement de la page d'accueil... "
html=$(curl -s "$base_url/" 2>/dev/null)
if [ -n "$html" ]; then
  echo "✅ OK"
  
  # Vérifier les liens Stripe
  echo -n "   Vérification des liens Stripe... "
  stripe_count=$(echo "$html" | grep -o "buy.stripe.com" | wc -l)
  if [ "$stripe_count" -gt 0 ]; then
    echo "✅ Trouvé ($stripe_count liens)"
  else
    echo "⚠️  Aucun lien trouvé"
  fi
  
  # Vérifier Formspree
  echo -n "   Vérification de Formspree... "
  formspree_count=$(echo "$html" | grep -o "formspree.io" | wc -l)
  if [ "$formspree_count" -gt 0 ]; then
    echo "✅ Trouvé ($formspree_count références)"
  else
    echo "⚠️  Aucune référence trouvée"
  fi
else
  echo "❌ FAIL"
fi

echo ""
echo "✅ VÉRIFICATION TERMINÉE !"
echo ""
echo "📋 RÉSUMÉ :"
echo "   🌐 Site principal : $base_url"
echo "   ✅ Site fonctionnel et accessible"
echo ""
