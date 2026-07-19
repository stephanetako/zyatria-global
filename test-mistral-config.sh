#!/bin/bash

echo "═══════════════════════════════════════════════════════════════"
echo "           🔍 VÉRIFICATION CONFIGURATION MISTRAL"
echo "═══════════════════════════════════════════════════════════════"
echo ""

# Vérifier que le fichier .env existe
if [ ! -f .env ]; then
    echo "❌ Fichier .env non trouvé !"
    echo ""
    echo "Solution :"
    echo "1. Le fichier .env devrait être à la racine du projet"
    echo "2. Créez-le avec : echo 'MISTRAL_API_KEY=votre_clé' > .env"
    echo ""
    exit 1
fi

echo "✅ Fichier .env trouvé"
echo ""

# Lire la clé API
source .env

# Vérifier que la clé est définie
if [ -z "$MISTRAL_API_KEY" ]; then
    echo "❌ MISTRAL_API_KEY n'est pas défini dans .env"
    echo ""
    echo "Solution :"
    echo "1. Ouvrir le fichier .env"
    echo "2. Ajouter : MISTRAL_API_KEY=votre_clé_ici"
    echo ""
    exit 1
fi

echo "✅ MISTRAL_API_KEY est défini"
echo ""

# Vérifier le format de la clé
if [[ ! $MISTRAL_API_KEY =~ ^sk- ]]; then
    echo "⚠️  ATTENTION : La clé ne commence pas par 'sk-'"
    echo ""
    echo "Format attendu : sk-abc123def456..."
    echo "Format actuel  : $MISTRAL_API_KEY"
    echo ""
    echo "Vérifiez que vous avez copié la bonne clé depuis console.mistral.ai"
    echo ""
fi

# Masquer la clé pour l'affichage
MASKED_KEY="${MISTRAL_API_KEY:0:10}...${MISTRAL_API_KEY: -4}"
echo "📋 Clé configurée : $MASKED_KEY"
echo ""

# Vérifier la longueur de la clé
KEY_LENGTH=${#MISTRAL_API_KEY}
if [ $KEY_LENGTH -lt 20 ]; then
    echo "⚠️  ATTENTION : La clé semble trop courte ($KEY_LENGTH caractères)"
    echo ""
    echo "Une clé Mistral valide fait généralement 40+ caractères"
    echo ""
fi

echo "═══════════════════════════════════════════════════════════════"
echo "                    📊 RÉSUMÉ"
echo "═══════════════════════════════════════════════════════════════"
echo ""
echo "Fichier .env        : ✅ Trouvé"
echo "MISTRAL_API_KEY     : ✅ Défini"
echo "Format              : $(if [[ $MISTRAL_API_KEY =~ ^sk- ]]; then echo '✅ Correct'; else echo '⚠️  À vérifier'; fi)"
echo "Longueur            : $KEY_LENGTH caractères"
echo ""
echo "═══════════════════════════════════════════════════════════════"
echo "                    🧪 PROCHAINES ÉTAPES"
echo "═══════════════════════════════════════════════════════════════"
echo ""
echo "1. Ouvrir le preview du site"
echo "2. Cliquer sur l'icône ✨ (chatbot)"
echo "3. Poser une question : 'Quels sont vos services ?'"
echo "4. Vérifier la réponse"
echo ""
echo "Si vous obtenez une réponse intelligente → ✅ Configuration OK !"
echo "Si vous obtenez un message de fallback → ❌ Vérifier la clé"
echo ""
echo "═══════════════════════════════════════════════════════════════"
