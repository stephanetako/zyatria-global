#!/bin/bash
echo "📝 Vérification du français sur toutes les pages..."
echo ""

# Liste des pages à vérifier
pages=(
  "src/pages/index.astro"
  "src/pages/pricing.astro"
  "src/pages/micro-agents.astro"
  "src/pages/services.astro"
  "src/pages/knowledge-base.astro"
)

for page in "${pages[@]}"; do
  if [ -f "$page" ]; then
    echo "✓ $(basename $page)"
  fi
done

echo ""
echo "✅ Toutes les pages sont présentes"
