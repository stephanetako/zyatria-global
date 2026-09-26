#!/bin/bash

echo "🔍 TEST FINAL DU BUILD"
echo "====================="
echo ""

# Clean
echo "1️⃣ Nettoyage..."
rm -rf dist/
rm -rf .astro/

# Build
echo ""
echo "2️⃣ Build..."
npm run build 2>&1 | tail -20

# Check dist
echo ""
echo "3️⃣ Vérification du dossier dist..."
if [ -d "dist" ]; then
  echo "✅ Dossier dist créé"
  echo "📁 Contenu:"
  ls -lh dist/ | head -10
else
  echo "❌ Dossier dist manquant"
  exit 1
fi

# Check index.html
echo ""
echo "4️⃣ Vérification de index.html..."
if [ -f "dist/index.html" ]; then
  echo "✅ index.html existe"
  echo "📄 Taille: $(wc -c < dist/index.html) bytes"
  echo ""
  echo "🔍 Contenu (premières lignes):"
  head -20 dist/index.html
else
  echo "❌ index.html manquant"
  exit 1
fi

echo ""
echo "✅ BUILD RÉUSSI !"
echo ""
echo "📊 RÉSUMÉ:"
echo "- Build: ✅"
echo "- Dist: ✅"
echo "- Index: ✅"
echo ""
echo "🚀 PRÊT POUR DÉPLOIEMENT"
