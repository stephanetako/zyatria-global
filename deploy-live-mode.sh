#!/bin/bash
# 🚀 Script de déploiement automatique - LIVE MODE
# Ce script va commit, push et déployer votre site en production

echo "🚀 DÉPLOIEMENT EN MODE LIVE - ZyatrIA Global"
echo "============================================="
echo ""

# Vérifier si on est dans le bon répertoire
if [ ! -f "package.json" ]; then
    echo "❌ Erreur: package.json non trouvé"
    echo "Assurez-vous d'être dans le répertoire du projet"
    exit 1
fi

echo "✅ Répertoire du projet détecté"
echo ""

# Étape 1: Vérifier le statut Git
echo "📋 ÉTAPE 1/5: Vérification du statut Git..."
git status --short

echo ""
read -p "Voulez-vous continuer avec le commit et push? (o/n) " continue
if [ "$continue" != "o" ]; then
    echo "❌ Déploiement annulé"
    exit 0
fi

# Étape 2: Build du projet
echo ""
echo "🔨 ÉTAPE 2/5: Build du projet..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Erreur lors du build"
    exit 1
fi

echo "✅ Build réussi"

# Étape 3: Commit et Push
echo ""
echo "📤 ÉTAPE 3/5: Commit et Push vers GitHub..."

git add .
git commit -m "🚀 Déploiement LIVE MODE - Stripe configuré avec tous les liens"

if [ $? -ne 0 ]; then
    echo "⚠️  Aucun changement à commiter ou erreur de commit"
else
    echo "✅ Commit créé"
fi

git push origin master

if [ $? -ne 0 ]; then
    echo "❌ Erreur lors du push"
    echo "Vérifiez votre connexion GitHub"
    exit 1
fi

echo "✅ Code poussé sur GitHub"

# Étape 4: Rappel des variables d'environnement
echo ""
echo "⚙️  ÉTAPE 4/5: Configuration Cloudflare"
echo ""
echo "🔑 VARIABLES D'ENVIRONNEMENT À CONFIGURER:"
echo "=========================================="
echo ""
echo "Allez sur: https://dash.cloudflare.com"
echo "Workers & Pages → Votre projet → Settings → Environment variables"
echo ""
echo "Ajoutez ces variables (Production ET Preview):"
echo ""
echo "💳 STRIPE (LIVE MODE):"
echo "  STRIPE_SECRET_KEY = sk_live_51QhRRhP3bMl..."
echo "  PUBLIC_STRIPE_PUBLISHABLE_KEY = pk_live_51QhRRhP3bMl..."
echo "  STRIPE_WEBHOOK_SECRET = whsec_..."
echo ""
echo "📧 FORMSPREE:"
echo "  FORMSPREE_FORM_ID = mldekqbz"
echo ""
echo "🤖 MISTRAL AI:"
echo "  MISTRAL_API_KEY = Ij0Aq3Ot3zzJ..."
echo ""

read -p "Avez-vous configuré toutes les variables d'environnement? (o/n) " envConfigured
if [ "$envConfigured" != "o" ]; then
    echo ""
    echo "⚠️  Configurez les variables avant de continuer"
    echo "Le déploiement continuera mais le site ne fonctionnera pas correctement"
    echo ""
    read -p "Voulez-vous quand même continuer? (o/n) " forceContinue
    if [ "$forceContinue" != "o" ]; then
        echo "❌ Déploiement annulé"
        exit 0
    fi
fi

# Étape 5: Webhook Stripe
echo ""
echo "🔗 ÉTAPE 5/5: Configuration du Webhook Stripe"
echo ""
echo "Allez sur: https://dashboard.stripe.com/webhooks"
echo ""
echo "1. Cliquez sur 'Add endpoint'"
echo "2. URL: https://votre-domaine.pages.dev/api/stripe/webhook"
echo "3. Sélectionnez ces événements:"
echo "   - checkout.session.completed"
echo "   - payment_intent.succeeded"
echo "   - payment_intent.payment_failed"
echo "   - customer.subscription.created"
echo "   - customer.subscription.updated"
echo "   - customer.subscription.deleted"
echo "   - invoice.paid"
echo "   - invoice.payment_failed"
echo "4. Copiez le 'Signing secret' (whsec_...)"
echo "5. Ajoutez-le dans Cloudflare comme STRIPE_WEBHOOK_SECRET"
echo ""

read -p "Avez-vous configuré le webhook Stripe? (o/n) " webhookConfigured

# Résumé final
echo ""
echo "🎉 DÉPLOIEMENT TERMINÉ!"
echo "======================"
echo ""
echo "✅ Code poussé sur GitHub"
echo "✅ Cloudflare va déployer automatiquement"
echo ""

if [ "$envConfigured" == "o" ] && [ "$webhookConfigured" == "o" ]; then
    echo "✅ Configuration complète!"
    echo ""
    echo "🌐 Votre site sera disponible dans quelques minutes sur:"
    echo "   https://votre-domaine.pages.dev"
else
    echo "⚠️  Configuration incomplète"
    echo ""
    if [ "$envConfigured" != "o" ]; then
        echo "❌ Variables d'environnement non configurées"
    fi
    if [ "$webhookConfigured" != "o" ]; then
        echo "❌ Webhook Stripe non configuré"
    fi
    echo ""
    echo "Le site sera déployé mais ne fonctionnera pas correctement"
    echo "Complétez la configuration dans Cloudflare et Stripe"
fi

echo ""
echo "📋 CHECKLIST FINALE:"
echo "==================="
echo "[ ] Vérifier que le site est déployé"
echo "[ ] Tester la page d'accueil"
echo "[ ] Tester la page Pricing"
echo "[ ] Tester un paiement Stripe (LIVE MODE)"
echo "[ ] Tester le formulaire de contact"
echo "[ ] Tester les micro-agents"
echo ""
echo "📚 Pour plus de détails, consultez:"
echo "   🚀_DEPLOIEMENT_FINAL_LIVE_MODE.md"
echo ""
echo "🎊 Félicitations! Votre site est prêt à accepter de vrais paiements!"
echo ""
