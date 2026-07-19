/**
 * Script de test pour vérifier tous les liens Stripe
 * Usage: node test-stripe-links.js
 */

import { STRIPE_PAYMENT_LINKS } from './src/config/stripe-links.ts';

console.log('🔍 VÉRIFICATION DES LIENS STRIPE\n');
console.log('='.repeat(60));

let totalLinks = 0;
let validLinks = 0;
let invalidLinks = [];

// Fonction pour vérifier si un lien est valide
function isValidStripeLink(link) {
  return link && 
         link.startsWith('https://buy.stripe.com/') && 
         !link.includes('VOTRE_LIEN_ICI') &&
         link.length > 30;
}

// Vérifier les plans principaux
console.log('\n📦 PLANS PRINCIPAUX\n');
['starter', 'professional', 'enterprise'].forEach(plan => {
  console.log(`\n🔹 ${plan.toUpperCase()}`);
  
  ['oneTime', 'monthly'].forEach(type => {
    totalLinks++;
    const link = STRIPE_PAYMENT_LINKS[plan][type];
    const isValid = isValidStripeLink(link);
    
    if (isValid) {
      validLinks++;
      console.log(`  ✅ ${type}: ${link.substring(0, 50)}...`);
    } else {
      invalidLinks.push(`${plan}.${type}`);
      console.log(`  ❌ ${type}: INVALIDE`);
    }
  });
});

// Vérifier les micro-agents
console.log('\n\n🤖 MICRO-AGENTS\n');
const microAgents = [
  'leadQualification',
  'customerSupport', 
  'appointments',
  'prospectFollowup',
  'realEstate',
  'ecommerce'
];

microAgents.forEach(agent => {
  totalLinks++;
  const link = STRIPE_PAYMENT_LINKS.microAgents[agent];
  const isValid = isValidStripeLink(link);
  
  if (isValid) {
    validLinks++;
    console.log(`  ✅ ${agent}: ${link.substring(0, 50)}...`);
  } else {
    invalidLinks.push(`microAgents.${agent}`);
    console.log(`  ❌ ${agent}: INVALIDE`);
  }
});

// Vérifier les services
console.log('\n\n🎯 SERVICES ADDITIONNELS\n');
['audit', 'consultation'].forEach(service => {
  totalLinks++;
  const link = STRIPE_PAYMENT_LINKS.services[service];
  const isValid = isValidStripeLink(link);
  
  if (isValid) {
    validLinks++;
    console.log(`  ✅ ${service}: ${link.substring(0, 50)}...`);
  } else {
    invalidLinks.push(`services.${service}`);
    console.log(`  ❌ ${service}: INVALIDE`);
  }
});

// Résumé
console.log('\n' + '='.repeat(60));
console.log('\n📊 RÉSUMÉ\n');
console.log(`Total de liens: ${totalLinks}`);
console.log(`✅ Liens valides: ${validLinks}`);
console.log(`❌ Liens invalides: ${invalidLinks.length}`);

if (invalidLinks.length > 0) {
  console.log('\n⚠️  LIENS À CORRIGER:');
  invalidLinks.forEach(link => console.log(`   - ${link}`));
  console.log('\n❌ CERTAINS LIENS DOIVENT ÊTRE CONFIGURÉS\n');
  process.exit(1);
} else {
  console.log('\n✅ TOUS LES LIENS SONT VALIDES ET PRÊTS !\n');
  process.exit(0);
}
