#!/usr/bin/env node

/**
 * Script de vérification de la configuration ZyatrIA Global
 * Exécutez : node test-config.js
 */

import { config } from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readFileSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Charger les variables d'environnement
config();

console.log('\n🔍 VÉRIFICATION DE LA CONFIGURATION ZYATRIA GLOBAL\n');
console.log('='.repeat(60));

const checks = {
  '✅ Configuré': [],
  '⚠️  Manquant': [],
  '❌ Invalide': []
};

// Fonction de vérification
function checkEnvVar(name, required = true, validator = null) {
  const value = process.env[name];
  
  if (!value || value === 'VOTRE_FORM_ID_ICI' || value === 'votre_token_ici' || value === 'votre_cms_token_ici') {
    if (required) {
      checks['⚠️  Manquant'].push(`${name}`);
    }
    return false;
  }
  
  if (validator && !validator(value)) {
    checks['❌ Invalide'].push(`${name} (format incorrect)`);
    return false;
  }
  
  checks['✅ Configuré'].push(`${name}`);
  return true;
}

// Vérifications
console.log('\n📋 FORMSPREE (Formulaires de Contact)');
console.log('-'.repeat(60));
checkEnvVar('PUBLIC_FORMSPREE_FORM_ID', true, (val) => val.length > 5);

console.log('\n💳 STRIPE (Paiements)');
console.log('-'.repeat(60));
checkEnvVar('STRIPE_SECRET_KEY', true, (val) => val.startsWith('sk_'));
checkEnvVar('STRIPE_PUBLISHABLE_KEY', true, (val) => val.startsWith('pk_'));
checkEnvVar('STRIPE_WEBHOOK_SECRET', false, (val) => val.startsWith('whsec_'));

console.log('\n🤖 MISTRAL AI (Chatbot)');
console.log('-'.repeat(60));
checkEnvVar('MISTRAL_API_KEY', true, (val) => val.length > 10);

console.log('\n🌐 WEBFLOW CMS (Optionnel)');
console.log('-'.repeat(60));
checkEnvVar('WEBFLOW_API_HOST', false);
checkEnvVar('WEBFLOW_SITE_API_TOKEN', false);
checkEnvVar('WEBFLOW_CMS_SITE_API_TOKEN', false);

console.log('\n📊 ANALYTICS (Optionnel)');
console.log('-'.repeat(60));
checkEnvVar('PUBLIC_GA_MEASUREMENT_ID', false, (val) => val.startsWith('G-'));

// Afficher les résultats
console.log('\n' + '='.repeat(60));
console.log('\n📊 RÉSUMÉ DE LA CONFIGURATION\n');

Object.entries(checks).forEach(([status, items]) => {
  if (items.length > 0) {
    console.log(`\n${status}:`);
    items.forEach(item => console.log(`  • ${item}`));
  }
});

// Recommandations
console.log('\n' + '='.repeat(60));
console.log('\n💡 RECOMMANDATIONS\n');

if (checks['⚠️  Manquant'].length > 0) {
  console.log('🔴 Actions requises :');
  
  if (checks['⚠️  Manquant'].includes('PUBLIC_FORMSPREE_FORM_ID')) {
    console.log('\n1. FORMSPREE (URGENT) :');
    console.log('   → Allez sur https://formspree.io/register');
    console.log('   → Créez un formulaire');
    console.log('   → Copiez le Form ID');
    console.log('   → Ajoutez-le dans .env : PUBLIC_FORMSPREE_FORM_ID="votre_id"');
  }
  
  if (checks['⚠️  Manquant'].some(item => item.includes('STRIPE'))) {
    console.log('\n2. STRIPE :');
    console.log('   → Allez sur https://dashboard.stripe.com/test/apikeys');
    console.log('   → Copiez vos clés de test');
    console.log('   → Ajoutez-les dans .env');
  }
  
  if (checks['⚠️  Manquant'].includes('MISTRAL_API_KEY')) {
    console.log('\n3. MISTRAL AI :');
    console.log('   → Allez sur https://console.mistral.ai/');
    console.log('   → Créez une clé API');
    console.log('   → Ajoutez-la dans .env : MISTRAL_API_KEY="votre_clé"');
  }
}

if (checks['✅ Configuré'].length === 0) {
  console.log('\n⚠️  Aucune variable configurée. Commencez par Formspree !');
} else if (checks['⚠️  Manquant'].length === 0 && checks['❌ Invalide'].length === 0) {
  console.log('\n✅ Tout est configuré ! Vous pouvez lancer le site :');
  console.log('   npm run dev');
} else {
  console.log('\n🟡 Configuration partielle. Complétez les variables manquantes.');
}

// Vérifier les fichiers de configuration
console.log('\n' + '='.repeat(60));
console.log('\n📁 FICHIERS DE CONFIGURATION\n');

const configFiles = [
  { path: 'src/config/formspree.ts', name: 'Formspree Config' },
  { path: 'src/config/stripe-links.ts', name: 'Stripe Links' },
  { path: 'astro.config.mjs', name: 'Astro Config' },
  { path: 'wrangler.jsonc', name: 'Cloudflare Config' }
];

configFiles.forEach(({ path, name }) => {
  try {
    const fullPath = join(__dirname, path);
    readFileSync(fullPath, 'utf-8');
    console.log(`✅ ${name} : ${path}`);
  } catch (error) {
    console.log(`⚠️  ${name} : ${path} (non trouvé)`);
  }
});

console.log('\n' + '='.repeat(60));
console.log('\n🚀 PROCHAINES ÉTAPES :\n');
console.log('1. Complétez les variables manquantes dans .env');
console.log('2. Lancez : npm install');
console.log('3. Testez : npm run dev');
console.log('4. Ouvrez : http://localhost:4321');
console.log('\n' + '='.repeat(60) + '\n');
