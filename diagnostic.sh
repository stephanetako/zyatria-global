#!/bin/bash

echo "🔍 DIAGNOSTIC SERVEUR ZYATRIA"
echo "=============================="
echo ""

echo "1️⃣ Vérification du port 3000..."
netstat -ano | findstr :3000 || echo "   ✅ Port 3000 libre"
echo ""

echo "2️⃣ Vérification du port 4321..."
netstat -ano | findstr :4321 || echo "   ✅ Port 4321 libre"
echo ""

echo "3️⃣ Test de connexion localhost..."
curl -s http://localhost:3000/ > /dev/null 2>&1 && echo "   ✅ Serveur répond" || echo "   ❌ Serveur ne répond pas"
echo ""

echo "4️⃣ Démarrage du serveur..."
cd /app
npm run dev &
SERVER_PID=$!
echo "   Serveur démarré (PID: $SERVER_PID)"
echo ""

echo "5️⃣ Attente 5 secondes..."
sleep 5
echo ""

echo "6️⃣ Test de l'API..."
curl -s http://localhost:3000/api/test-simple || echo "   ❌ API ne répond pas"
echo ""

echo "7️⃣ Arrêt du serveur..."
kill $SERVER_PID 2>/dev/null
echo "   ✅ Serveur arrêté"
echo ""

echo "=============================="
echo "✅ DIAGNOSTIC TERMINÉ"
