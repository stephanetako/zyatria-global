#!/bin/bash

# Couleurs
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m'

clear
echo -e "${PURPLE}"
cat << "BANNER"
╔══════════════════════════════════════════════════════════════╗
║                                                              ║
║     🚀 DÉPLOIEMENT FINAL COMPLET - ZYATRIA GLOBAL 🚀        ║
║                                                              ║
║              Site SSR avec Cloudflare Workers                ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝
BANNER
echo -e "${NC}"
echo ""

# ÉTAPE 1 : Build
echo -e "${CYAN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${CYAN}  ÉTAPE 1/5 : BUILD DU PROJET${NC}"
echo -e "${CYAN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

rm -rf dist/ .astro/
npm run build

if [ $? -eq 0 ]; then
    echo ""
    echo -e "${GREEN}✅ Build réussi !${NC}"
else
    echo ""
    echo -e "${RED}❌ Build échoué !${NC}"
    exit 1
fi

# ÉTAPE 2 : Vérification
echo ""
echo -e "${CYAN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━���━━━${NC}"
echo -e "${CYAN}  ÉTAPE 2/5 : VÉRIFICATION DES FICHIERS${NC}"
echo -e "${CYAN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

# Vérifier le Worker
if [ -d "dist/_worker.js" ]; then
    echo -e "${GREEN}✅ Cloudflare Worker généré${NC}"
    echo "   📦 Taille: $(du -sh dist/_worker.js | cut -f1)"
else
    echo -e "${RED}❌ Worker manquant !${NC}"
    exit 1
fi

# Vérifier _routes.json
if [ -f "dist/_routes.json" ]; then
    echo -e "${GREEN}✅ Configuration des routes (_routes.json)${NC}"
    routes_count=$(cat dist/_routes.json | grep -c "\"")
    echo "   📋 Routes configurées: OK"
else
    echo -e "${RED}❌ _routes.json manquant !${NC}"
    exit 1
fi

# Vérifier les assets
if [ -d "dist/_astro" ]; then
    js_count=$(find dist/_astro -name "*.js" | wc -l)
    css_count=$(find dist/_astro -name "*.css" | wc -l)
    echo -e "${GREEN}✅ Assets compilés${NC}"
    echo "   📦 Fichiers JS: $js_count"
    echo "   🎨 Fichiers CSS: $css_count"
fi

# Vérifier les pages de test
test_count=$(find dist -name "test-*.html" | wc -l)
echo -e "${GREEN}✅ Pages de test: $test_count fichiers${NC}"

# ÉTAPE 3 : Statistiques
echo ""
echo -e "${CYAN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${CYAN}  ÉTAPE 3/5 : STATISTIQUES DU BUILD${NC}"
echo -e "${CYAN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

total_size=$(du -sh dist | cut -f1)
total_files=$(find dist -type f | wc -l)

echo -e "${BLUE}📊 Taille totale:${NC} $total_size"
echo -e "${BLUE}📁 Nombre de fichiers:${NC} $total_files"
echo -e "${BLUE}⚙️  Type de déploiement:${NC} SSR (Server-Side Rendering)"
echo -e "${BLUE}🌐 Plateforme:${NC} Cloudflare Workers"

# ÉTAPE 4 : Git
echo ""
echo -e "${CYAN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${CYAN}  ÉTAPE 4/5 : PRÉPARATION GIT${NC}"
echo -e "${CYAN}━━━━━━━━━━━━━━━━━━━━��━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

if [ -d ".git" ]; then
    git add .
    
    changed_files=$(git status --porcelain | wc -l)
    
    if [ $changed_files -gt 0 ]; then
        echo -e "${GREEN}✅ Repository Git détecté${NC}"
        echo -e "${BLUE}📝 Fichiers modifiés:${NC} $changed_files"
        echo ""
        echo -e "${YELLOW}Fichiers principaux modifiés:${NC}"
        git status --short | head -10
        
        if [ $changed_files -gt 10 ]; then
            echo "   ... et $((changed_files - 10)) autres fichiers"
        fi
    else
        echo -e "${YELLOW}⚠️  Aucun changement à commiter${NC}"
    fi
else
    echo -e "${RED}❌ Pas de repository Git${NC}"
    echo ""
    echo "Pour initialiser Git:"
    echo "  git init"
    echo "  git add ."
    echo "  git commit -m 'Initial commit'"
fi

# ÉTAPE 5 : Instructions de déploiement
echo ""
echo -e "${CYAN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${CYAN}  ÉTAPE 5/5 : INSTRUCTIONS DE DÉPLOIEMENT${NC}"
echo -e "${CYAN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

echo -e "${GREEN}╔══════════════════════════════════════════════════════════════╗${NC}"
echo -e "${GREEN}║                    ✅ BUILD RÉUSSI !                         ║${NC}"
echo -e "${GREEN}╚══════════════════════════════════════════════════════════════╝${NC}"
echo ""

echo -e "${YELLOW}🚀 OPTION 1 - DÉPLOIEMENT VIA GITHUB (RECOMMANDÉ)${NC}"
echo ""
echo "  1️⃣  Commiter les changements:"
echo "      ${CYAN}git commit -m \"Deploy: Complete SSR build\"${NC}"
echo ""
echo "  2️⃣  Pousser vers GitHub:"
echo "      ${CYAN}git push origin main${NC}"
echo ""
echo "  3️⃣  Cloudflare déploiera automatiquement (2-3 min)"
echo ""
echo "  4️⃣  Vérifier le déploiement:"
echo "      • Dashboard Cloudflare Pages"
echo "      • Onglet 'Deployments'"
echo ""

echo -e "${YELLOW}🔧 OPTION 2 - DÉPLOIEMENT DIRECT VIA WRANGLER${NC}"
echo ""
echo "      ${CYAN}npx wrangler pages deploy dist${NC}"
echo ""

echo -e "${YELLOW}🧪 PAGES À TESTER APRÈS DÉPLOIEMENT${NC}"
echo ""
echo "  Remplacez 'votre-site.pages.dev' par votre URL Cloudflare:"
echo ""
echo "  ✅ Page principale (SSR):"
echo "      ${CYAN}https://votre-site.pages.dev/${NC}"
echo ""
echo "  ✅ Pages de test (statiques):"
echo "      ${CYAN}https://votre-site.pages.dev/test-site-final.html${NC}"
echo "      ${CYAN}https://votre-site.pages.dev/test-page-blanche.html${NC}"
echo ""
echo "  ✅ Pages du site:"
echo "      ${CYAN}https://votre-site.pages.dev/pricing${NC}"
echo "      ${CYAN}https://votre-site.pages.dev/services${NC}"
echo "      ${CYAN}https://votre-site.pages.dev/micro-agents${NC}"
echo ""

echo -e "${YELLOW}🔍 SI LA PAGE EST BLANCHE${NC}"
echo ""
echo "  1. Ouvrez les DevTools (F12)"
echo "  2. Allez dans l'onglet 'Console'"
echo "  3. Notez les erreurs JavaScript"
echo "  4. Allez dans l'onglet 'Network'"
echo "  5. Rechargez la page (Ctrl+R)"
echo "  6. Vérifiez les requêtes en erreur (rouge)"
echo ""
echo "  ${CYAN}Solutions courantes:${NC}"
echo "  • Purger le cache Cloudflare"
echo "  • Vérifier les variables d'environnement"
echo "  • Attendre 5 minutes (propagation DNS)"
echo ""

echo -e "${YELLOW}🔑 VARIABLES D'ENVIRONNEMENT CLOUDFLARE${NC}"
echo ""
echo "  Dans le dashboard Cloudflare Pages:"
echo "  Settings > Environment variables"
echo ""
echo "  Variables à configurer:"
echo "  • MISTRAL_API_KEY"
echo "  • FORMSPREE_FORM_ID"
echo "  • STRIPE_SECRET_KEY (optionnel)"
echo "  • STRIPE_PUBLISHABLE_KEY (optionnel)"
echo ""

echo -e "${PURPLE}══════════════════════════════════════════════════════════════${NC}"
echo -e "${PURPLE}            ✨ Prêt pour le déploiement ! ✨${NC}"
echo -e "${PURPLE}══════════════════════════════════════════════════════════════${NC}"
echo ""

# Proposer de commiter
if [ -d ".git" ] && [ $changed_files -gt 0 ]; then
    echo ""
    read -p "Voulez-vous commiter maintenant? (o/n) " -n 1 -r
    echo
    
    if [[ $REPLY =~ ^[OoYy]$ ]]; then
        echo ""
        read -p "Message de commit (Enter pour défaut): " commit_msg
        
        if [ -z "$commit_msg" ]; then
            commit_msg="Deploy: Complete SSR build with Cloudflare Workers"
        fi
        
        git commit -m "$commit_msg"
        
        if [ $? -eq 0 ]; then
            echo ""
            echo -e "${GREEN}✅ Commit réussi !${NC}"
            echo ""
            echo "Pour pousser vers GitHub:"
            echo "  ${CYAN}git push origin main${NC}"
            echo ""
            
            read -p "Voulez-vous pousser maintenant? (o/n) " -n 1 -r
            echo
            
            if [[ $REPLY =~ ^[OoYy]$ ]]; then
                git push origin main
                
                if [ $? -eq 0 ]; then
                    echo ""
                    echo -e "${GREEN}✅ Push réussi !${NC}"
                    echo ""
                    echo "Cloudflare va déployer automatiquement."
                    echo "Vérifiez le dashboard dans 2-3 minutes."
                fi
            fi
        fi
    fi
fi

echo ""
echo -e "${GREEN}🎉 Processus terminé avec succès !${NC}"
echo ""
