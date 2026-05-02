#!/bin/bash

echo "📦 Création de l'archive du projet ZyatrIA Global..."
echo ""

# Créer l'archive
tar -czf zyatria-global-production.tar.gz \
  --exclude=node_modules \
  --exclude=dist \
  --exclude=.git \
  --exclude=*.log \
  --exclude=.astro \
  .

echo "✅ Archive créée : zyatria-global-production.tar.gz"
echo ""
echo "📥 Pour télécharger :"
echo "1. Télécharge le fichier zyatria-global-production.tar.gz"
echo "2. Extrais-le sur ton ordinateur"
echo "3. Ouvre le terminal dans le dossier"
echo "4. Exécute : npm install"
echo "5. Puis suis GUIDE_DEPLOIEMENT_CLOUDFLARE.md"
echo ""

