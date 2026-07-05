#!/bin/bash

# Script de démarrage rapide ZyatrIA Global

clear

cat << "EOF"
╔══════════════════════════════════════════════════════════════════════════════╗
║                                                                              ║
║                    🚀 ZYATRIA GLOBAL - DÉMARRAGE                             ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
EOF

echo ""
echo "🔍 Vérification de la configuration..."
echo ""

# Vérifier si .env existe
if [ ! -f .env ]; then
    echo "❌ Fichier .env non trouvé !"
    echo ""
    echo "📋 Créez un fichier .env à la racine du projet avec :"
    echo "   PUBLIC_FORMSPREE_FORM_ID=\"votre_form_id\""
    echo ""
    exit 1
fi

# Vérifier Formspree
if grep -q "PUBLIC_FORMSPREE_FORM_ID=" .env; then
    value=$(grep "PUBLIC_FORMSPREE_FORM_ID=" .env | cut -d'=' -f2 | tr -d '"' | tr -d "'")
    if [ "$value" = "VOTRE_FORM_ID_ICI" ] || [ -z "$value" ]; then
        echo "⚠️  Formspree n'est pas configuré !"
        echo ""
        echo "📋 ÉTAPES À SUIVRE :"
        echo "   1. Allez sur : https://formspree.io/register"
        echo "   2. Créez un compte et un formulaire"
        echo "   3. Copiez le Form ID"
        echo "   4. Ajoutez dans .env : PUBLIC_FORMSPREE_FORM_ID=\"votre_id\""
        echo ""
        echo "📖 Guide complet : 🚀_ACTION_IMMEDIATE.md"
        echo ""
        read -p "Appuyez sur Entrée pour continuer quand même..."
    else
        echo "✅ Formspree configuré"
    fi
else
    echo "⚠️  PUBLIC_FORMSPREE_FORM_ID manquant dans .env"
    echo ""
    echo "📋 Ajoutez cette ligne dans .env :"
    echo "   PUBLIC_FORMSPREE_FORM_ID=\"votre_form_id\""
    echo ""
    read -p "Appuyez sur Entrée pour continuer quand même..."
fi

echo ""
echo "📦 Vérification des dépendances..."
echo ""

# Vérifier si node_modules existe
if [ ! -d "node_modules" ]; then
    echo "📥 Installation des dépendances..."
    npm install
    if [ $? -ne 0 ]; then
        echo ""
        echo "❌ Erreur lors de l'installation des dépendances"
        exit 1
    fi
else
    echo "✅ Dépendances déjà installées"
fi

echo ""
echo "🚀 Démarrage du serveur de développement..."
echo ""
echo "┌──────────────────────────────────────────────────────────────┐"
echo "│  Le site sera accessible sur : http://localhost:4321        │"
echo "│  Appuyez sur Ctrl+C pour arrêter le serveur                 │"
echo "└──────────────────────────────────────────────────────────────┘"
echo ""

# Démarrer le serveur
npm run dev
