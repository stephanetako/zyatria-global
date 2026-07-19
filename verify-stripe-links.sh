#!/bin/bash

echo "🔍 VÉRIFICATION DES LIENS STRIPE"
echo "================================="
echo ""

# Liste de tous les liens
declare -A links=(
    ["Starter Mensuel"]="https://buy.stripe.com/9B6cMX6mPaTD5450VS"
    ["Professional Unique"]="https://buy.stripe.com/9B628jcLd4vfaop5c8"
    ["Professional Mensuel"]="https://buy.stripe.com/00waEPfXp0eZfIJ1ZW"
    ["Enterprise Unique"]="https://buy.stripe.com/5kQ8wHcLdaTD7cdbAw"
    ["Enterprise Mensuel"]="https://buy.stripe.com/6oU00b26zgdXeEFbAw"
    ["Audit IA"]="https://buy.stripe.com/00g28j9yX0eZ0XP1Zb"
    ["Consultation"]="https://buy.stripe.com/00g28j9yX0eZ0XP1Za"
)

echo "📋 Vos liens actuels :"
echo ""

for name in "${!links[@]}"; do
    url="${links[$name]}"
    echo "🔗 $name"
    echo "   $url"
    echo ""
done

echo "================================="
echo ""
echo "⚠️  SI UN LIEN NE FONCTIONNE PAS :"
echo ""
echo "1. Allez sur https://dashboard.stripe.com"
echo "2. Cliquez sur 'Produits' → 'Payment Links'"
echo "3. Vérifiez que TOUS ces liens existent"
echo "4. Si un lien manque, recréez-le"
echo ""
