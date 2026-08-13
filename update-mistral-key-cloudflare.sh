#!/bin/bash

# Script pour mettre à jour la clé Mistral sur Cloudflare Pages
# Usage: ./update-mistral-key-cloudflare.sh

echo "========================================"
echo "  MISE À JOUR CLÉ MISTRAL - CLOUDFLARE  "
echo "========================================"
echo ""

# Vérifier si wrangler est installé
echo "🔍 Vérification de Wrangler..."
if ! command -v wrangler &> /dev/null; then
    echo "❌ Wrangler n'est pas installé."
    echo ""
    echo "📦 Installation de Wrangler..."
    npm install -g wrangler
    echo "✅ Wrangler installé avec succès !"
    echo ""
fi

# Lire la clé depuis le fichier .env
echo "📖 Lecture de la clé depuis .env..."
if [ -f .env ]; then
    MISTRAL_KEY=$(grep "MISTRAL_API_KEY" .env | cut -d '"' -f 2)
    
    if [ -n "$MISTRAL_KEY" ]; then
        echo "✅ Clé trouvée dans .env"
        echo "   Prévisualisation: ${MISTRAL_KEY:0:10}..."
        echo ""
    else
        echo "❌ Clé MISTRAL_API_KEY non trouvée dans .env"
        echo ""
        echo "Veuillez entrer votre clé API Mistral:"
        read -r MISTRAL_KEY
        echo ""
    fi
else
    echo "❌ Fichier .env non trouvé"
    echo ""
    echo "Veuillez entrer votre clé API Mistral:"
    read -r MISTRAL_KEY
    echo ""
fi

if [ -z "$MISTRAL_KEY" ]; then
    echo "❌ Aucune clé fournie. Abandon."
    exit 1
fi

# Demander le nom du projet Cloudflare Pages
echo "📝 Configuration Cloudflare Pages"
echo ""
echo "Quel est le nom de votre projet Cloudflare Pages ?"
echo "(Par défaut: zyatria-global)"
read -r PROJECT_NAME

if [ -z "$PROJECT_NAME" ]; then
    PROJECT_NAME="zyatria-global"
fi

echo ""
echo "🔧 Configuration de la variable d'environnement..."
echo "   Projet: $PROJECT_NAME"
echo "   Variable: MISTRAL_API_KEY"
echo ""

# Méthode 1 : Via wrangler pages secret
echo "📤 Méthode 1: Via Wrangler CLI"
echo ""
echo "Exécutez cette commande:"
echo ""
echo "echo \"$MISTRAL_KEY\" | wrangler pages secret put MISTRAL_API_KEY --project-name=$PROJECT_NAME"
echo ""

# Méthode 2 : Instructions manuelles
echo "📤 Méthode 2: Via le Dashboard Cloudflare (Recommandé)"
echo ""
echo "1. Allez sur: https://dash.cloudflare.com/"
echo "2. Sélectionnez 'Workers & Pages'"
echo "3. Cliquez sur votre projet: $PROJECT_NAME"
echo "4. Allez dans 'Settings' → 'Environment variables'"
echo "5. Trouvez 'MISTRAL_API_KEY' et cliquez sur 'Edit'"
echo "6. Collez cette valeur:"
echo ""
echo "   $MISTRAL_KEY"
echo ""
echo "7. Cliquez sur 'Save'"
echo "8. Redéployez le site (Deployments → Retry deployment)"
echo ""

# Copier la clé dans le presse-papiers (si possible)
if command -v pbcopy &> /dev/null; then
    # macOS
    echo "$MISTRAL_KEY" | pbcopy
    echo "✅ Clé copiée dans le presse-papiers (macOS) !"
    echo "   Vous pouvez la coller directement sur Cloudflare"
    echo ""
elif command -v xclip &> /dev/null; then
    # Linux avec xclip
    echo "$MISTRAL_KEY" | xclip -selection clipboard
    echo "✅ Clé copiée dans le presse-papiers (Linux) !"
    echo "   Vous pouvez la coller directement sur Cloudflare"
    echo ""
elif command -v xsel &> /dev/null; then
    # Linux avec xsel
    echo "$MISTRAL_KEY" | xsel --clipboard
    echo "✅ Clé copiée dans le presse-papiers (Linux) !"
    echo "   Vous pouvez la coller directement sur Cloudflare"
    echo ""
else
    echo "⚠️ Impossible de copier dans le presse-papiers"
    echo "   Copiez manuellement la clé ci-dessus"
    echo ""
fi

# Résumé
echo "========================================"
echo "  RÉSUMÉ"
echo "========================================"
echo ""
echo "✅ Clé lue depuis .env"
echo "✅ Instructions fournies"
echo ""
echo "📋 PROCHAINES ÉTAPES:"
echo ""
echo "1. Allez sur le dashboard Cloudflare"
echo "2. Mettez à jour la variable MISTRAL_API_KEY"
echo "3. Redéployez le site"
echo "4. Testez en production"
echo ""
echo "🔗 Dashboard: https://dash.cloudflare.com/"
echo ""

# Demander si l'utilisateur veut ouvrir le dashboard
echo "Voulez-vous ouvrir le dashboard Cloudflare maintenant ? (o/n)"
read -r OPEN_DASHBOARD

if [ "$OPEN_DASHBOARD" = "o" ] || [ "$OPEN_DASHBOARD" = "O" ]; then
    if command -v xdg-open &> /dev/null; then
        # Linux
        xdg-open "https://dash.cloudflare.com/"
    elif command -v open &> /dev/null; then
        # macOS
        open "https://dash.cloudflare.com/"
    else
        echo "⚠️ Impossible d'ouvrir le navigateur automatiquement"
        echo "   Allez sur: https://dash.cloudflare.com/"
    fi
    echo "✅ Dashboard ouvert dans votre navigateur"
fi

echo ""
echo "✅ Script terminé !"
echo ""
