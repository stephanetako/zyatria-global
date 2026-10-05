#!/bin/bash

echo "🔄 Nettoyage et redémarrage du serveur de développement..."

# Tuer tous les processus Node/Astro
echo "⏹️  Arrêt des processus existants..."
pkill -f "astro dev" 2>/dev/null || true
pkill -f "node.*astro" 2>/dev/null || true
npx kill-port 4321 2>/dev/null || true
npx kill-port 3000 2>/dev/null || true

# Attendre que les ports soient libérés
sleep 2

# Nettoyer les caches
echo "🧹 Nettoyage des caches..."
rm -rf .astro 2>/dev/null || true
rm -rf node_modules/.vite 2>/dev/null || true
rm -rf node_modules/.cache 2>/dev/null || true
rm -rf dist 2>/dev/null || true

# Vérifier que les dépendances sont installées
if [ ! -d "node_modules" ]; then
  echo "📦 Installation des dépendances..."
  npm install
fi

echo "✅ Nettoyage terminé!"
echo ""
echo "Pour démarrer le serveur, exécutez:"
echo "  npm run dev"
echo ""
echo "Ou pour un build de production:"
echo "  npm run build"
