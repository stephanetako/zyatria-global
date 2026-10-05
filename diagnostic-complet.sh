#!/bin/bash

echo "🔍 DIAGNOSTIC COMPLET - ZyatrIA Global"
echo "======================================"
echo ""

# 1. Vérifier Node et npm
echo "1️⃣ Versions installées:"
echo "Node: $(node --version)"
echo "npm: $(npm --version)"
echo ""

# 2. Vérifier la configuration Astro
echo "2️⃣ Configuration Astro:"
if grep -q "output: 'server'" astro.config.mjs; then
    echo "✅ Mode server activé"
else
    echo "❌ Mode server NON activé"
fi

if grep -q "@astrojs/cloudflare" astro.config.mjs; then
    echo "✅ Adapter Cloudflare configuré"
else
    echo "❌ Adapter Cloudflare manquant"
fi
echo ""

# 3. Vérifier les dépendances
echo "3️⃣ Dépendances critiques:"
if [ -d "node_modules" ]; then
    echo "✅ node_modules existe"
    
    if [ -d "node_modules/astro" ]; then
        echo "✅ Astro installé"
    else
        echo "❌ Astro manquant"
    fi
    
    if [ -d "node_modules/react" ]; then
        echo "✅ React installé"
    else
        echo "❌ React manquant"
    fi
    
    if [ -d "node_modules/@astrojs/cloudflare" ]; then
        echo "✅ Cloudflare adapter installé"
    else
        echo "❌ Cloudflare adapter manquant"
    fi
else
    echo "❌ node_modules manquant - Lancez: npm install"
fi
echo ""

# 4. Vérifier les fichiers critiques
echo "4️⃣ Fichiers critiques:"
files=(
    "src/pages/index.astro"
    "src/components/AppWrapper.tsx"
    "src/layouts/main.astro"
    "package.json"
    "astro.config.mjs"
)

for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        echo "✅ $file"
    else
        echo "❌ $file manquant"
    fi
done
echo ""

# 5. Test de build
echo "5️⃣ Test de build:"
echo "Lancement du build..."
if npm run build > /tmp/build.log 2>&1; then
    echo "✅ Build réussi"
    if [ -d "dist" ]; then
        echo "✅ Dossier dist créé"
        echo "   Taille: $(du -sh dist | cut -f1)"
    fi
else
    echo "❌ Build échoué"
    echo "Dernières lignes du log:"
    tail -20 /tmp/build.log
fi
echo ""

# 6. Vérifier les variables d'environnement
echo "6️⃣ Variables d'environnement:"
if [ -f ".env" ]; then
    echo "✅ Fichier .env existe"
    if grep -q "FORMSPREE_FORM_ID" .env; then
        echo "✅ FORMSPREE_FORM_ID défini"
    else
        echo "⚠️  FORMSPREE_FORM_ID manquant (optionnel)"
    fi
    
    if grep -q "MISTRAL_API_KEY" .env; then
        echo "✅ MISTRAL_API_KEY défini"
    else
        echo "⚠️  MISTRAL_API_KEY manquant (optionnel pour chatbot)"
    fi
else
    echo "⚠️  Fichier .env manquant (optionnel)"
fi
echo ""

# 7. Résumé
echo "======================================"
echo "📊 RÉSUMÉ"
echo "======================================"
echo ""
echo "Pour tester localement:"
echo "  npm run dev"
echo "  Puis ouvrez: http://localhost:3000/test-simple"
echo ""
echo "Pour déployer:"
echo "  git add ."
echo "  git commit -m 'Fix: Configuration corrigée'"
echo "  git push origin main"
echo ""
