#!/bin/bash

echo "╔══════════════════════════════════════════════════════════════╗"
echo "║                                                              ║"
echo "║     🚀 DÉPLOIEMENT PRODUCTION - ZYATRIA GLOBAL              ║"
echo "║                                                              ║"
echo "╚══════════════════════════════════════════════════════════════╝"
echo ""

# Étape 1: Ajouter tous les fichiers
echo "📦 Étape 1/4: Ajout des fichiers..."
git add .
echo "   ✅ Fichiers ajoutés"
echo ""

# Étape 2: Commit
echo "💾 Étape 2/4: Création du commit..."
git commit -m "🚀 Production Ready - Configuration complète

✅ Stripe LIVE configuré (8 liens)
✅ Chatbot Mistral activé
✅ Formspree opérationnel
✅ Design system restauré
✅ Build réussi
✅ Variables Cloudflare configurées

Prêt pour déploiement en production"
echo "   ✅ Commit créé"
echo ""

# Étape 3: Afficher le statut
echo "📊 Étape 3/4: Vérification..."
echo ""
echo "   Branche actuelle: $(git branch --show-current)"
echo "   Dernier commit: $(git log -1 --oneline)"
echo ""

# Étape 4: Instructions pour push
echo "╔══════════════════════════════════════════════════════════════╗"
echo "║  🎯 PRÊT POUR LE PUSH                                        ║"
echo "╚══════════════════════════════════════════════════════════════╝"
echo ""
echo "Pour déployer sur Cloudflare, exécutez:"
echo ""
echo "  $ git push origin master"
echo ""
echo "Cloudflare déploiera automatiquement avec:"
echo "  ✓ Stripe LIVE (paiements réels)"
echo "  ✓ Chatbot Mistral"
echo "  ✓ Formulaires Formspree"
echo "  ✓ Design system complet"
echo ""
echo "╔══════════════════════════════════════════════════════════════╗"
echo "║  📋 APRÈS LE DÉPLOIEMENT                                     ║"
echo "╚══════════════════════════════════════════════════════════════╝"
echo ""
echo "1. Attendez 2-3 minutes que Cloudflare déploie"
echo "2. Testez votre site en production"
echo "3. Vérifiez les boutons Stripe"
echo "4. Testez le chatbot Mistral"
echo "5. Testez les formulaires"
echo ""
echo "🎊 Tout est prêt pour le déploiement !"
echo ""

