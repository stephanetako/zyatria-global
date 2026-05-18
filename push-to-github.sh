#!/bin/bash

# 🚀 Script de Push Automatique vers GitHub
# ZyatrIA Global - Déploiement Automatisé

echo "🚀 =========================================="
echo "   PUSH AUTOMATIQUE VERS GITHUB"
echo "   ZyatrIA Global"
echo "=========================================="
echo ""

# Couleurs pour les messages
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Vérifier si git est installé
if ! command -v git &> /dev/null; then
    echo -e "${RED}❌ Git n'est pas installé${NC}"
    exit 1
fi

# Vérifier si on est dans un repo git
if [ ! -d .git ]; then
    echo -e "${RED}❌ Ce n'est pas un dépôt Git${NC}"
    exit 1
fi

echo -e "${BLUE}📊 Statut actuel du dépôt...${NC}"
git status --short
echo ""

# Demander confirmation
echo -e "${YELLOW}⚠️  Voulez-vous pousser tous ces changements vers GitHub ?${NC}"
read -p "Continuer ? (o/n) : " -n 1 -r
echo ""

if [[ ! $REPLY =~ ^[OoYy]$ ]]; then
    echo -e "${RED}❌ Opération annulée${NC}"
    exit 1
fi

# Ajouter tous les fichiers
echo -e "${BLUE}📦 Ajout de tous les fichiers...${NC}"
git add .

# Demander le message de commit
echo ""
echo -e "${YELLOW}💬 Message de commit (appuyez sur Entrée pour le message par défaut) :${NC}"
read -r COMMIT_MSG

if [ -z "$COMMIT_MSG" ]; then
    COMMIT_MSG="🚀 Mise à jour automatique - $(date '+%Y-%m-%d %H:%M:%S')"
fi

# Créer le commit
echo -e "${BLUE}📝 Création du commit...${NC}"
git commit -m "$COMMIT_MSG"

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Erreur lors de la création du commit${NC}"
    exit 1
fi

echo ""
echo -e "${GREEN}✅ Commit créé avec succès !${NC}"
echo ""

# Vérifier le remote
REMOTE_URL=$(git remote get-url origin)
echo -e "${BLUE}🔗 Remote actuel : ${REMOTE_URL}${NC}"
echo ""

# Méthode d'authentification
echo -e "${YELLOW}🔐 Choisissez la méthode d'authentification :${NC}"
echo "1) Token GitHub (Recommandé)"
echo "2) SSH"
echo "3) Essayer le push direct (si déjà configuré)"
echo ""
read -p "Votre choix (1/2/3) : " -n 1 -r AUTH_METHOD
echo ""
echo ""

case $AUTH_METHOD in
    1)
        echo -e "${BLUE}🔑 Configuration avec Token GitHub${NC}"
        echo ""
        echo -e "${YELLOW}📝 Entrez votre token GitHub :${NC}"
        echo "(Créez-en un sur : https://github.com/settings/tokens)"
        read -s GITHUB_TOKEN
        echo ""
        
        if [ -z "$GITHUB_TOKEN" ]; then
            echo -e "${RED}❌ Token vide, opération annulée${NC}"
            exit 1
        fi
        
        # Extraire le nom d'utilisateur et le repo
        REPO_PATH=$(echo $REMOTE_URL | sed 's/https:\/\/github.com\///')
        
        # Configurer le remote avec le token
        git remote set-url origin "https://${GITHUB_TOKEN}@github.com/${REPO_PATH}"
        
        echo -e "${GREEN}✅ Token configuré${NC}"
        ;;
        
    2)
        echo -e "${BLUE}🔑 Configuration avec SSH${NC}"
        
        # Extraire le chemin du repo
        REPO_PATH=$(echo $REMOTE_URL | sed 's/https:\/\/github.com\///')
        
        # Configurer le remote en SSH
        git remote set-url origin "git@github.com:${REPO_PATH}"
        
        echo -e "${GREEN}✅ Remote configuré en SSH${NC}"
        ;;
        
    3)
        echo -e "${BLUE}🔄 Tentative de push direct...${NC}"
        ;;
        
    *)
        echo -e "${RED}❌ Choix invalide${NC}"
        exit 1
        ;;
esac

echo ""
echo -e "${BLUE}🚀 Push vers GitHub en cours...${NC}"
echo ""

# Pousser vers GitHub
git push origin main

if [ $? -eq 0 ]; then
    echo ""
    echo -e "${GREEN}=========================================="
    echo "   ✅ PUSH RÉUSSI !"
    echo "=========================================="
    echo ""
    echo "🎉 Vos changements ont été poussés vers GitHub"
    echo "🔗 Voir sur : ${REMOTE_URL}"
    echo ""
else
    echo ""
    echo -e "${RED}=========================================="
    echo "   ❌ ERREUR LORS DU PUSH"
    echo "=========================================="
    echo ""
    echo "💡 Solutions possibles :"
    echo "   1. Vérifiez votre token GitHub"
    echo "   2. Vérifiez vos clés SSH"
    echo "   3. Vérifiez votre connexion internet"
    echo "   4. Vérifiez les permissions du dépôt"
    echo ""
    exit 1
fi
