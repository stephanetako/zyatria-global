#!/bin/bash

echo "🔄 Restauration de la version complète..."

if [ -f "src/pages/index.full.astro.bak" ]; then
    cp src/pages/index.full.astro.bak src/pages/index.astro
    echo "✅ Version complète restaurée !"
else
    # Créer la version complète par défaut
    cat > src/pages/index.astro << 'EOF'
---
import MainLayout from '../layouts/main.astro';
import AppWrapper from '../components/AppWrapper';

const seoData = {
  title: "ZyatrIA Global | Agents IA & Automation Sans Frontières - Déploiement en 7-15 jours",
  description: "Transformez votre entreprise avec des agents IA intelligents et une automatisation avancée. Déploiement rapide en 7-15 jours. Disponible en Amérique du Nord, Europe, Afrique et Amérique Latine. Micro-agents spécialisés pour immobilier, e-commerce, support client.",
  ogImage: "/og-image.png",
  keywords: "agents IA, automatisation, micro-agents, IA sans frontières, automation entreprise, agents intelligents, CRM automation, workflow automation, IA multilingue, déploiement rapide IA"
};
---

<MainLayout 
  title={seoData.title}
  description={seoData.description}
  ogImage={seoData.ogImage}
>
  <AppWrapper client:only="react" />
</MainLayout>
EOF
    echo "✅ Version complète créée !"
fi

echo ""
echo "📋 Pour tester :"
echo "   npm run build"
echo "   npm run preview"
