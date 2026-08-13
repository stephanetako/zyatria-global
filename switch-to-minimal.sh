#!/bin/bash

echo "🔄 Basculement vers la version minimale..."

# Sauvegarder la version actuelle
cp src/pages/index.astro src/pages/index.full.astro.bak

# Créer la version minimale
cat > src/pages/index.astro << 'EOF'
---
import MainLayout from '../layouts/main.astro';
import AppWrapperMinimal from '../components/AppWrapperMinimal';
---

<MainLayout 
  title="Test Minimal - ZyatrIA Global"
  description="Version minimale pour diagnostic"
>
  <AppWrapperMinimal client:only="react" />
</MainLayout>
EOF

echo "✅ Version minimale activée !"
echo ""
echo "📋 Pour tester :"
echo "   npm run build"
echo "   npm run preview"
echo ""
echo "🔙 Pour revenir à la version complète :"
echo "   ./switch-to-full.sh"
