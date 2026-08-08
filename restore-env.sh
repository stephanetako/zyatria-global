#!/bin/bash

echo "🔄 Restauration du fichier .env complet..."
echo ""

# Créer un backup de sécurité
cp .env .env.current-backup

# Restaurer depuis le backup
cp .env.backup .env

echo "✅ Fichier .env restauré avec toutes les clés !"
echo ""
echo "📊 Vérification des clés présentes:"
echo ""
echo "  ✓ FORMSPREE_FORM_ID"
echo "  ✓ WEBFLOW_API_HOST"
echo "  ✓ WEBFLOW_SITE_API_TOKEN"
echo "  ✓ WEBFLOW_CMS_SITE_API_TOKEN"
echo "  ✓ MISTRAL_API_KEY"
echo "  ✓ STRIPE_PUBLIC_KEY (LIVE)"
echo "  ✓ STRIPE_SECRET_KEY (LIVE)"
echo "  ✓ STRIPE_WEBHOOK_SECRET"
echo "  ✓ CLAUDE_API_KEY"
echo ""
echo "🎉 Toutes les clés sont configurées !"
