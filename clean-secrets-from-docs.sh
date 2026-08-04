#!/bin/bash

# Script pour nettoyer les secrets des fichiers de documentation
# Ce script remplace les vrais tokens par des placeholders

echo "╔══════════════════════════════════════════════════════════════════╗"
echo "║                                                                  ║"
echo "║         🧹 NETTOYAGE DES SECRETS DANS LA DOCUMENTATION 🧹        ║"
echo "║                                                                  ║"
echo "╚══════════════════════════════════════════════════════════════════╝"
echo ""

# Backup des fichiers avant modification
echo "📦 Création des backups..."
mkdir -p .backups/$(date +%Y%m%d_%H%M%S)
BACKUP_DIR=".backups/$(date +%Y%m%d_%H%M%S)"

# Liste des fichiers à nettoyer
FILES_TO_CLEAN=(
    "FORMSPREE_CONFIGURATION.md"
    "📋_CONFIGURATION_ETAPE_PAR_ETAPE.md"
)

for file in "${FILES_TO_CLEAN[@]}"; do
    if [ -f "$file" ]; then
        echo "   📄 Backup de $file"
        cp "$file" "$BACKUP_DIR/"
    fi
done

echo ""
echo "🔧 Nettoyage des secrets..."
echo ""

# Nettoyer FORMSPREE_CONFIGURATION.md
if [ -f "FORMSPREE_CONFIGURATION.md" ]; then
    echo "   🧹 Nettoyage de FORMSPREE_CONFIGURATION.md"
    
    # Remplacer le token Webflow Site API
    sed -i.bak 's/WEBFLOW_SITE_API_TOKEN="8160da8f[^"]*"/WEBFLOW_SITE_API_TOKEN="VOTRE_TOKEN_ICI"/g' "FORMSPREE_CONFIGURATION.md"
    
    # Remplacer le token Webflow CMS API
    sed -i.bak 's/WEBFLOW_CMS_SITE_API_TOKEN="177d18c2[^"]*"/WEBFLOW_CMS_SITE_API_TOKEN="VOTRE_TOKEN_ICI"/g' "FORMSPREE_CONFIGURATION.md"
    
    rm -f "FORMSPREE_CONFIGURATION.md.bak"
    echo "      ✅ Tokens Webflow remplacés"
fi

# Nettoyer 📋_CONFIGURATION_ETAPE_PAR_ETAPE.md
if [ -f "📋_CONFIGURATION_ETAPE_PAR_ETAPE.md" ]; then
    echo "   🧹 Nettoyage de 📋_CONFIGURATION_ETAPE_PAR_ETAPE.md"
    
    # Remplacer le webhook secret Stripe
    sed -i.bak 's/STRIPE_WEBHOOK_SECRET="whsec_d292[^"]*"/STRIPE_WEBHOOK_SECRET="whsec_VOTRE_SECRET_ICI"/g' "📋_CONFIGURATION_ETAPE_PAR_ETAPE.md"
    
    rm -f "📋_CONFIGURATION_ETAPE_PAR_ETAPE.md.bak"
    echo "      ✅ Webhook secret Stripe remplacé"
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "✅ NETTOYAGE TERMINÉ !"
echo ""
echo "📦 Backups sauvegardés dans : $BACKUP_DIR"
echo ""
echo "🔍 Vérification..."
echo ""

# Vérifier qu'il ne reste plus de secrets
SECRET_COUNT=$(git grep -E "(8160da8f|177d18c2|whsec_d292)" 2>/dev/null | grep -v ".sh:" | wc -l | tr -d ' ')

if [ "$SECRET_COUNT" -eq "0" ]; then
    echo "   ✅ Aucun secret détecté dans les fichiers nettoyés"
else
    echo "   ⚠️  $SECRET_COUNT occurrences restantes (vérifier manuellement)"
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "📋 PROCHAINES ÉTAPES :"
echo ""
echo "1. Vérifier les fichiers nettoyés :"
echo "   git diff FORMSPREE_CONFIGURATION.md"
echo "   git diff 📋_CONFIGURATION_ETAPE_PAR_ETAPE.md"
echo ""
echo "2. Si tout est OK, commiter les changements :"
echo "   git add ."
echo "   git commit -m \"docs: remove secrets from documentation\""
echo ""
echo "3. Si déjà pushé sur GitHub, régénérer les tokens :"
echo "   - Webflow : https://webflow.com/dashboard/account/api"
echo "   - Stripe : https://dashboard.stripe.com/webhooks"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
