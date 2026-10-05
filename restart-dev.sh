#!/bin/bash

echo "🔄 Arrêt du serveur de développement..."
npx kill-port 3000 2>/dev/null || true
sleep 2

echo "🧹 Nettoyage du cache..."
rm -rf .astro node_modules/.vite dist 2>/dev/null || true

echo "🚀 Redémarrage du serveur..."
npm run dev
