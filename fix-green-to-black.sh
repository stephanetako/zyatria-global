#!/bin/bash

# Liste des fichiers à modifier
files=(
  "src/components/AdvancedTestimonials.tsx"
  "src/components/CompactContactForm.tsx"
  "src/components/CompetitorComparison.tsx"
  "src/components/Contact.tsx"
  "src/components/LeadQualificationForm.tsx"
  "src/components/LeadQualificationFormSimple.tsx"
  "src/components/LiveStats.tsx"
  "src/components/MistralChatBot.tsx"
  "src/components/Newsletter.tsx"
  "src/components/Pricing.tsx"
  "src/components/ROICalculator.tsx"
  "src/components/Roadmap.tsx"
  "src/components/ServicesAvailable.tsx"
  "src/components/SimpleContactForm.tsx"
  "src/components/pages/PaymentDemoPage.tsx"
)

echo "🔄 Remplacement de toutes les couleurs vertes par noir..."

for file in "${files[@]}"; do
  if [ -f "$file" ]; then
    # Remplacer toutes les variantes de vert par foreground (noir)
    sed -i 's/text-green-[0-9]\+/text-foreground/g' "$file"
    sed -i 's/text-emerald-[0-9]\+/text-foreground/g' "$file"
    sed -i 's/text-lime-[0-9]\+/text-foreground/g' "$file"
    
    # Remplacer les backgrounds verts
    sed -i 's/bg-green-[0-9]\+/bg-muted/g' "$file"
    sed -i 's/bg-emerald-[0-9]\+/bg-muted/g' "$file"
    sed -i 's/bg-lime-[0-9]\+/bg-muted/g' "$file"
    
    # Remplacer les borders verts
    sed -i 's/border-green-[0-9]\+/border-border/g' "$file"
    sed -i 's/border-emerald-[0-9]\+/border-border/g' "$file"
    sed -i 's/border-lime-[0-9]\+/border-border/g' "$file"
    
    echo "✅ $file"
  fi
done

echo ""
echo "✅ Terminé ! Toutes les couleurs vertes ont été remplacées par noir."
