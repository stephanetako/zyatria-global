#!/bin/bash

echo ""
echo "🔍 VÉRIFICATION COMPLÈTE DU SITE"
echo "================================="
echo ""

# Tester les URLs principales
echo "📍 Test des URLs principales..."
echo ""

urls=(
  "https://zyatria-global.pages.dev"
  "https://main.zyatria-global.pages.dev"
  "https://zyatria.pages.dev"
  "https://main.zyatria.pages.dev"
)

for url in "${urls[@]}"; do
  echo -n "   Testing $url ... "
  status=$(curl -s -o /dev/null -w "%{http_code}" "$url" 2>/dev/null || echo "FAIL")
  if [ "$status" = "200" ]; then
    echo "✅ OK (200)"
  else
    echo "❌ FAIL ($status)"
  fi
done

echo ""
echo "📄 Test des pages principales..."
echo ""

pages=(
  ""
  "pricing"
  "services"
  "about"
  "contact-simple"
  "micro-agents"
)

base_url="https://zyatria-global.pages.dev"

for page in "${pages[@]}"; do
  if [ -z "$page" ]; then
    test_url="$base_url/"
    page_name="Home"
  else
    test_url="$base_url/$page"
    page_name="$page"
  fi
  
  echo -n "   Testing /$page_name ... "
  status=$(curl -s -o /dev/null -w "%{http_code}" "$test_url" 2>/dev/null || echo "FAIL")
  if [ "$status" = "200" ]; then
    echo "✅ OK (200)"
  else
    echo "❌ FAIL ($status)"
  fi
done

echo ""
echo "✅ Vérification terminée !"
echo ""
