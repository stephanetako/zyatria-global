import { STRIPE_PAYMENT_LINKS, productDetails } from './src/config/stripe-links.ts';

console.log('\n🔍 VÉRIFICATION DES LIENS STRIPE\n');
console.log('='.repeat(60));

const plans = ['starter', 'professional', 'enterprise'];
const billingTypes = ['oneTime', 'monthly'];

plans.forEach(plan => {
  console.log(`\n📦 ${plan.toUpperCase()}`);
  billingTypes.forEach(billing => {
    const link = STRIPE_PAYMENT_LINKS[plan][billing];
    const status = link && link !== '' ? '✅' : '❌';
    const mode = link && link.includes('test_') ? '🧪 TEST' : '🟢 LIVE';
    console.log(`  ${billing.padEnd(10)} ${status} ${mode}`);
    if (link && link !== '') {
      console.log(`    ${link.substring(0, 50)}...`);
    } else {
      console.log(`    ⚠️  Lien vide ou manquant`);
    }
  });
});

console.log('\n📋 SERVICES');
console.log(`  Audit:        ${STRIPE_PAYMENT_LINKS.services.audit ? '✅' : '❌'}`);
console.log(`  Consultation: ${STRIPE_PAYMENT_LINKS.services.consultation ? '✅' : '❌'}`);

console.log('\n' + '='.repeat(60));
