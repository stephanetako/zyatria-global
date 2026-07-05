#!/bin/bash

echo "🧪 Test API Formspree Direct"
echo "============================"
echo ""

# Test avec curl
curl -X POST https://formspree.io/f/xeelvrdl \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Jean Dupont",
    "email": "jean@entreprise.com",
    "phone": "+1 438 123 4567",
    "company": "Test Corp",
    "service": "agents-ia",
    "budget": "business",
    "timeline": "asap",
    "message": "TEST API Direct - Vérification après correction membres"
  }'

echo ""
echo ""
echo "✅ Si vous voyez 'ok: true', le formulaire fonctionne !"
echo "❌ Si vous voyez une erreur, vérifiez votre dashboard Formspree"
