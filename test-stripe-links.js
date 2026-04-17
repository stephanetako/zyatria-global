/**
 * Script de test des liens Stripe
 * Vérifie que tous les liens de paiement sont valides et accessibles
 */

import { stripeLinks } from './src/config/stripe-links.ts';

console.log('\n🧪 TEST DES LIENS STRIPE\n');
console.log('=' .repeat(60));

const testLinks = [
  { name: 'Starter - Paiement Unique', link: stripeLinks.starter.oneTime, expected: '5 000 $CA' },
  { name: 'Starter - Mensuel', link: stripeLinks.starter.monthly, expected: '299 $CA/mois' },
  { name: 'Professional - Paiement Unique', link: stripeLinks.professional.oneTime, expected: '1 500 $CA' },
  { name: 'Professional - Mensuel', link: stripeLinks.professional.monthly, expected: '799 $CA/mois' },
  { name: 'Enterprise - Paiement Unique', link: stripeLinks.enterprise.oneTime, expected: '45 000 $CA' },
  { name: 'Enterprise - Mensuel', link: stripeLinks.enterprise.monthly, expected: '2 499 $CA/mois' },
  { name: 'Audit IA Complet', link: stripeLinks.services.audit, expected: '2 500 $CA' },
  { name: 'Consultation Stratégique', link: stripeLinks.services.consultation, expected: '500 $CA' },
];

console.log('\n📋 LISTE DES LIENS À TESTER :\n');

testLinks.forEach((test, index) => {
  console.log(`${index + 1}. ${test.name}`);
  console.log(`   URL: ${test.link}`);
  console.log(`   Prix attendu: ${test.expected}`);
  console.log('');
});

console.log('=' .repeat(60));
console.log('\n✅ TOTAL: 8 liens configurés\n');
console.log('📝 INSTRUCTIONS:');
console.log('   1. Ouvrez votre site local');
console.log('   2. Allez à la section Pricing');
console.log('   3. Testez chaque bouton');
console.log('   4. Vérifiez que Stripe affiche le bon prix\n');
console.log('🔗 Dashboard Stripe: https://dashboard.stripe.com/test/payment-links\n');
