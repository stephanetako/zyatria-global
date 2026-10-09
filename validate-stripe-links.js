/**
 * Script de validation des liens Stripe
 * Vérifie que tous les liens sont présents et correctement formatés
 */

import { stripeLinks, validatePaymentLinks } from './src/config/stripe-links.ts';

console.log('🔍 Validation des liens Stripe ZyatrIA Global\n');
console.log('='.repeat(60));

// Validation automatique
const validation = validatePaymentLinks();

if (validation.valid) {
  console.log('\n✅ TOUS LES LIENS SONT VALIDES!\n');
} else {
  console.log('\n❌ LIENS MANQUANTS:\n');
  validation.missing.forEach(link => {
    console.log(`   - ${link}`);
  });
  console.log('');
}

// Affichage détaillé
console.log('📊 RÉCAPITULATIF DES LIENS:\n');

console.log('Plans Principaux:');
console.log(`  ✓ Starter Monthly: ${stripeLinks.plans.starterMonthly}`);
console.log(`  ✓ Starter One-Time: ${stripeLinks.plans.starterOneTime}`);
console.log(`  ✓ Professional Monthly: ${stripeLinks.plans.professionalMonthly}`);
console.log(`  ✓ Professional One-Time: ${stripeLinks.plans.professionalOneTime}`);
console.log(`  ✓ Enterprise Monthly: ${stripeLinks.plans.enterpriseMonthly}`);
console.log(`  ✓ Enterprise One-Time: ${stripeLinks.plans.enterpriseOneTime}`);

console.log('\nServices:');
console.log(`  ✓ Consultation: ${stripeLinks.services.consultation}`);
console.log(`  ✓ Audit: ${stripeLinks.services.audit}`);
console.log(`  ✓ Formation: ${stripeLinks.services.formation}`);

console.log('\nMicro-Agents:');
console.log(`  ✓ Lead Qualification: ${stripeLinks.microAgents.leadQualification}`);
console.log(`  ✓ Customer Support: ${stripeLinks.microAgents.customerSupport}`);
console.log(`  ✓ Appointments: ${stripeLinks.microAgents.appointments}`);
console.log(`  ✓ Prospect Follow-up: ${stripeLinks.microAgents.prospectFollowup}`);
console.log(`  ✓ Real Estate: ${stripeLinks.microAgents.realEstate}`);
console.log(`  ✓ E-commerce: ${stripeLinks.microAgents.ecommerce}`);

console.log('\n' + '='.repeat(60));
console.log('✅ Validation terminée!\n');
