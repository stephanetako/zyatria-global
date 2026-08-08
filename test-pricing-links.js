#!/usr/bin/env node

/**
 * Test des liens Stripe Payment Links
 * Vérifie que tous les liens sont valides et accessibles
 */

const https = require('https');
const { STRIPE_PAYMENT_LINKS } = require('./src/config/stripe-links.ts');

console.log('=== 🧪 TEST DES LIENS STRIPE ===\n');

const links = {
  'Starter Monthly': STRIPE_PAYMENT_LINKS.starter.monthly,
  'Professional One-time': STRIPE_PAYMENT_LINKS.professional.oneTime,
  'Professional Monthly': STRIPE_PAYMENT_LINKS.professional.monthly,
  'Enterprise One-time': STRIPE_PAYMENT_LINKS.enterprise.oneTime,
  'Enterprise Monthly': STRIPE_PAYMENT_LINKS.enterprise.monthly,
  'Audit': STRIPE_PAYMENT_LINKS.services.audit,
  'Consultation': STRIPE_PAYMENT_LINKS.services.consultation,
  'Formation': STRIPE_PAYMENT_LINKS.services.formation,
};

console.log('📊 LIENS CONFIGURÉS:\n');
Object.entries(links).forEach(([name, link]) => {
  console.log(`${name}:`);
  console.log(`  ${link}`);
  console.log(`  Type: ${link.startsWith('https://buy.stripe.com/') ? '✅ Lien Stripe valide' : '❌ Lien invalide'}`);
  console.log('');
});

console.log('\n🔍 ANALYSE:');
console.log('='.repeat(50));

const validLinks = Object.values(links).filter(link => 
  link && link.startsWith('https://buy.stripe.com/')
);

const invalidLinks = Object.entries(links).filter(([_, link]) => 
  !link || !link.startsWith('https://buy.stripe.com/')
);

console.log(`\n✅ Liens valides: ${validLinks.length}/8`);
console.log(`❌ Liens invalides: ${invalidLinks.length}/8`);

if (invalidLinks.length > 0) {
  console.log('\n⚠️  LIENS PROBLÉMATIQUES:');
  invalidLinks.forEach(([name, link]) => {
    console.log(`  - ${name}: "${link}"`);
  });
}

console.log('\n💡 RECOMMANDATIONS:');
console.log('='.repeat(50));

if (validLinks.length === 8) {
  console.log('✅ Tous les liens sont configurés correctement!');
  console.log('   Les boutons devraient rediriger vers Stripe.');
} else {
  console.log('⚠️  Certains liens ne sont pas configurés.');
  console.log('   Vérifiez src/config/stripe-links.ts');
}

console.log('\n📝 COMPORTEMENT ATTENDU:');
console.log('   - Clic sur un bouton → Ouvre Stripe dans un nouvel onglet');
console.log('   - Si ça ouvre votre site → Problème de configuration');
console.log('   - Si erreur Stripe → Lien créé en mode Test au lieu de Live');
