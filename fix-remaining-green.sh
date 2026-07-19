#!/bin/bash

echo "🔄 Suppression de TOUTES les couleurs vertes restantes..."

# Liste des fichiers à corriger
files=(
  "src/components/pages/DemoPage.tsx"
  "src/components/LiveChat.tsx"
  "src/components/ROICalculator.tsx"
  "src/components/dashboard/OverviewTab.tsx"
  "src/components/dashboard/BookingsTab.tsx"
  "src/components/dashboard/ResourcesTab.tsx"
  "src/components/ServicesAvailable.tsx"
  "src/components/Pricing.tsx"
)

for file in "${files[@]}"; do
  if [ -f "$file" ]; then
    echo "🔄 $file"
    
    # Remplacer TOUS les verts par noir/terracotta
    sed -i 's/bg-green-500/bg-primary/g' "$file"
    sed -i 's/bg-green-400/bg-primary/g' "$file"
    sed -i 's/bg-green-100/bg-muted/g' "$file"
    sed -i 's/bg-green-900\/20/bg-muted/g' "$file"
    sed -i 's/bg-green-950\/20/bg-muted/g' "$file"
    
    sed -i 's/text-green-500/text-foreground/g' "$file"
    sed -i 's/text-green-400/text-foreground/g' "$file"
    sed -i 's/text-green-800/text-foreground/g' "$file"
    
    sed -i 's/from-green-50\/30/from-secondary\/30/g' "$file"
    sed -i 's/via-green-50\/30/via-secondary\/30/g' "$file"
    sed -i 's/via-green-950\/10/via-muted\/10/g' "$file"
    
    sed -i 's/from-green-950\/20/from-muted/g' "$file"
    sed -i 's/to-green-900\/20/to-muted/g' "$file"
    sed -i 's/to-emerald-950\/20/to-muted/g' "$file"
    
    sed -i 's/dark:bg-green-900\/20/dark:bg-muted/g' "$file"
    sed -i 's/dark:text-green-400/dark:text-foreground/g' "$file"
    
    echo "✅ $file"
  fi
done

echo ""
echo "✅ Vérification finale..."
remaining=$(grep -r "green\|emerald" src/components --include="*.tsx" | grep -E "(text-|bg-|from-|to-|border-)" | wc -l)
echo "Couleurs vertes restantes: $remaining"

if [ $remaining -eq 0 ]; then
  echo "🎉 PARFAIT ! Plus aucune couleur verte !"
else
  echo "⚠️  Il reste encore $remaining occurrences"
  grep -r "green\|emerald" src/components --include="*.tsx" | grep -E "(text-|bg-|from-|to-|border-)"
fi
