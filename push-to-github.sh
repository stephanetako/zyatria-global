#!/bin/bash

echo "🚀 PRÉPARATION PUSH VERS GITHUB"
echo "================================"
echo ""

# Vérifier si Git est initialisé
if [ ! -d .git ]; then
  echo "📦 Initialisation Git..."
  git init
  echo "✅ Git initialisé"
else
  echo "✅ Git déjà initialisé"
fi

# Configurer Git (si nécessaire)
echo ""
echo "👤 Configuration Git..."
git config user.name "Stephane Chevry" 2>/dev/null || true
git config user.email "stephanechevry@gmail.com" 2>/dev/null || true

# Vérifier les remotes existants
echo ""
echo "🔍 Vérification des remotes..."
git remote -v

# Ajouter le remote si pas déjà présent
if ! git remote | grep -q "origin"; then
  echo ""
  echo "➕ Ajout du remote GitHub..."
  git remote add origin https://github.com/stephanechevry-dev/Zyatria-Global.git
  echo "✅ Remote ajouté"
else
  echo "✅ Remote déjà configuré"
  echo ""
  echo "📝 Pour changer le remote:"
  echo "git remote set-url origin https://github.com/stephanechevry-dev/Zyatria-Global.git"
fi

# Afficher les fichiers à committer
echo ""
echo "📋 Fichiers à committer:"
git status --short | head -20

echo ""
echo "📊 Total fichiers modifiés:"
git status --short | wc -l

echo ""
echo "================================"
echo "✅ PRÉPARATION TERMINÉE"
echo ""
echo "🎯 PROCHAINES COMMANDES:"
echo ""
echo "# 1. Ajouter tous les fichiers"
echo "git add ."
echo ""
echo "# 2. Créer le commit"
echo "git commit -m 'Site complet - Formspree + Stripe configurés'"
echo ""
echo "# 3. Vérifier la branche"
echo "git branch -M main"
echo ""
echo "# 4. Pousser vers GitHub"
echo "git push -u origin main"
echo ""
echo "# Si erreur 'rejected', forcer le push:"
echo "git push -u origin main --force"
echo ""

