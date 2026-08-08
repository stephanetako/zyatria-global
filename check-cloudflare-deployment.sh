#!/bin/bash

echo "🔍 Vérification du Déploiement Cloudflare"
echo "=========================================="
echo ""

# Couleurs
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Vérifier la connexion Cloudflare
echo -e "${BLUE}1. Vérification de la connexion Cloudflare...${NC}"
if npx wrangler whoami > /dev/null 2>&1; then
    echo -e "${GREEN}✅ Connecté à Cloudflare${NC}"
    npx wrangler whoami
else
    echo -e "${RED}❌ Non connecté à Cloudflare${NC}"
    echo -e "${YELLOW}Exécutez: npx wrangler login${NC}"
    exit 1
fi
echo ""

# Vérifier le build local
echo -e "${BLUE}2. Vérification du build local...${NC}"
if [ -d "dist" ]; then
    echo -e "${GREEN}✅ Dossier dist/ existe${NC}"
    echo "   Taille: $(du -sh dist/ | cut -f1)"
    
    if [ -f "dist/_worker.js" ]; then
        echo -e "${GREEN}✅ Fichier _worker.js existe${NC}"
    else
        echo -e "${RED}❌ Fichier _worker.js manquant${NC}"
    fi
    
    if [ -d "dist/_astro" ]; then
        echo -e "${GREEN}✅ Dossier _astro/ existe${NC}"
        echo "   Fichiers JS/CSS: $(ls dist/_astro/*.js dist/_astro/*.css 2>/dev/null | wc -l)"
    else
        echo -e "${RED}❌ Dossier _astro/ manquant${NC}"
    fi
else
    echo -e "${RED}❌ Dossier dist/ n'existe pas${NC}"
    echo -e "${YELLOW}Exécutez: npm run build${NC}"
fi
echo ""

# Vérifier les déploiements récents
echo -e "${BLUE}3. Derniers déploiements sur Cloudflare...${NC}"
npx wrangler pages deployment list --project-name=zyatria-global 2>/dev/null | head -10
echo ""

# Vérifier les variables d'environnement
echo -e "${BLUE}4. Variables d'environnement configurées...${NC}"
echo -e "${YELLOW}Note: Les valeurs sont masquées pour la sécurité${NC}"
npx wrangler pages secret list --project-name=zyatria-global 2>/dev/null
echo ""

# Tester l'URL de production
echo -e "${BLUE}5. Test de l'URL de production...${NC}"
URL="https://zyatria-global.zyatria-contact.workers.dev"
echo "   URL: $URL"

if curl -s -o /dev/null -w "%{http_code}" "$URL" | grep -q "200"; then
    echo -e "${GREEN}✅ Site accessible (HTTP 200)${NC}"
else
    echo -e "${RED}❌ Site non accessible ou erreur${NC}"
fi
echo ""

# Vérifier le contenu de la page
echo -e "${BLUE}6. Vérification du contenu de la page...${NC}"
CONTENT=$(curl -s "$URL")

if echo "$CONTENT" | grep -q "ZyatrIA"; then
    echo -e "${GREEN}✅ Contenu ZyatrIA trouvé${NC}"
else
    echo -e "${RED}❌ Contenu ZyatrIA non trouvé${NC}"
fi

if echo "$CONTENT" | grep -q "Transformez Votre Entreprise"; then
    echo -e "${GREEN}✅ Hero section trouvée${NC}"
else
    echo -e "${RED}❌ Hero section non trouvée${NC}"
fi

if echo "$CONTENT" | grep -q "Micro-Agents"; then
    echo -e "${GREEN}✅ Section Micro-Agents trouvée${NC}"
else
    echo -e "${RED}❌ Section Micro-Agents non trouvée${NC}"
fi
echo ""

# Résumé
echo -e "${BLUE}=========================================="
echo "📊 Résumé"
echo -e "==========================================${NC}"
echo ""
echo -e "${YELLOW}URL de production:${NC}"
echo "   $URL"
echo ""
echo -e "${YELLOW}Actions recommandées:${NC}"
echo "   1. Si le site ne ressemble pas au projet local:"
echo "      → Exécutez: ./deploy-fix-cloudflare.sh"
echo ""
echo "   2. Si le chatbot ne fonctionne pas:"
echo "      → Configurez MISTRAL_API_KEY dans Cloudflare"
echo "      → Lisez: 🔑_CONFIGURER_CLOUDFLARE_ENV.md"
echo ""
echo "   3. Si les formulaires ne fonctionnent pas:"
echo "      → Configurez FORMSPREE_FORM_ID dans Cloudflare"
echo ""
echo "   4. Après tout changement:"
echo "      → Attendez 2-3 minutes pour la propagation"
echo "      → Videz le cache du navigateur (Ctrl+Shift+R)"
echo ""
echo -e "${GREEN}✅ Vérification terminée!${NC}"
