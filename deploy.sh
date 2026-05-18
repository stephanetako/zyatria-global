#!/bin/bash

# 🚀 Script de déploiement automatique ZyatrIA Global

set -e

echo "🚀 DÉPLOIEMENT ZYATRIA GLOBAL"
echo "=============================="
echo ""

# Étape 1: Vérifier Node.js
echo "📦 Vérification de Node.js..."
node --version
echo ""

# Étape 2: Installer les dépendances
echo "📦 Installation des dépendances..."
npm install
echo ""

# Étape 3: Build
echo "🔨 Build du projet..."
npm run build
echo ""

# Étape 4: Authentification
echo "🔐 Authentification Cloudflare..."
echo "⚠️  Une page web va s'ouvrir - cliquez sur 'Allow'"
npx wrangler login
echo ""

# Étape 5: Déploiement
echo "🚀 Déploiement..."
npx wrangler deploy
echo ""

# Étape 6: Secrets
echo "🔑 Configuration des secrets..."
echo ""
echo "Entrez votre FORMSPREE_FORM_ID:"
read FORMSPREE_ID
echo "$FORMSPREE_ID" | npx wrangler secret put FORMSPREE_FORM_ID
echo ""

echo "Entrez votre STRIPE_SECRET_KEY:"
read STRIPE_KEY
echo "$STRIPE_KEY" | npx wrangler secret put STRIPE_SECRET_KEY
echo ""

echo "🎉 DÉPLOIEMENT TERMINÉ !"
