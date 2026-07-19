#!/bin/bash

echo "🔍 Recherche de TOUTES les couleurs vertes..."

# Trouver tous les fichiers avec du vert
files=$(grep -rl "green\|emerald\|lime" src/components --include="*.tsx" | grep -v "node_modules")

echo "📁 Fichiers trouvés avec du vert:"
echo "$files"
echo ""

for file in $files; do
  echo "🔄 Traitement: $file"
  
  # Remplacer les gradients verts par des gradients terracotta/beige
  sed -i 's/from-green-500 to-emerald-500/from-primary to-primary\/80/g' "$file"
  sed -i 's/from-green-50 to-emerald-50/from-secondary to-muted/g' "$file"
  sed -i 's/from-green-950\/20 to-emerald-950\/20/from-primary\/10 to-primary\/5/g' "$file"
  
  sed -i 's/from-green-50 to-green-100/from-secondary to-muted/g' "$file"
  sed -i 's/from-green-950\/20 to-green-900\/20/from-primary\/10 to-primary\/5/g' "$file"
  
  # Remplacer les backgrounds verts
  sed -i 's/bg-green-100 text-green-800/bg-muted text-foreground/g' "$file"
  sed -i 's/bg-green-900\/20 text-green-400/bg-muted text-foreground/g' "$file"
  
  # Remplacer les textes verts
  sed -i 's/text-green-600/text-foreground/g' "$file"
  sed -i 's/text-green-800/text-foreground/g' "$file"
  sed -i 's/text-green-400/text-foreground/g' "$file"
  
  # Remplacer les badges verts
  sed -i 's/from-green-500 to-emerald-500/from-primary to-primary\/80/g' "$file"
  
  echo "✅ $file"
done

echo ""
echo "✅ Terminé ! Vérification..."
remaining=$(grep -r "green\|emerald\|lime" src/components --include="*.tsx" | grep -E "(text-|bg-|from-|to-|border-)" | wc -l)
echo "Couleurs vertes restantes: $remaining"
