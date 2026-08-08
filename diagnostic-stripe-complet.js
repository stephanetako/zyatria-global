#!/usr/bin/env node

/**
 * 🔍 DIAGNOSTIC COMPLET DES LIENS STRIPE
 * Ce script vérifie tous les liens et identifie les problèmes
 */

console.log('=== 🔍 DIAGNOSTIC COMPLET DES LIENS STRIPE ===\n');

// Simulation des liens depuis stripe-links.ts
const STRIPE_PAYMENT_LINKS = {
  starter: {
    oneTime: '',
    monthly: 'https://buy.stripe.com/9B6cMX6mPaTD5450VS',
  },
  professional: {
    oneTime: 'https://buy.stripe.com/9B628jcLd4vfaop5c8',
    monthly: 'https://buy.stripe.com/00waEPfXp0eZfIJ1ZW',
  },
  enterprise: {
    oneTime: 'https://buy.stripe.com/5kQ8wHcLdaTD7cdbAw',
    monthly: 'https://buy.stripe.com/6oU00b26zgdXeEFbAw',
  },
  microAgents: {
    leadQualification: '#contact',
    customerSupport: '#contact',
    appointments: '#contact',
    prospectFollowup: '#contact',
    realEstate: '#contact',
    ecommerce: '#contact',
  },
  services: {
    audit: 'https://buy.stripe.com/fZubIT9z1d1L1RT7kg',
    consultation: 'https://buy.stripe.com/dRm28j9z15zj9kl0VS',
    formation: 'https://buy.stripe.com/00wfZ9eTle5P0NP9so',
  },
};

console.log('📊 ANALYSE DES PLANS PRINCIPAUX:\n');

const plans = ['starter', 'professional', 'enterprise'];
const billingTypes = ['oneTime', 'monthly'];

let totalLinks = 0;
let validLinks = 0;
let emptyLinks = 0;
let contactLinks = 0;

plans.forEach(plan => {
  console.log(`\n🔹 ${plan.toUpperCase()}:`);
  billingTypes.forEach(billing => {
    totalLinks++;
    const link = STRIPE_PAYMENT_LINKS[plan][billing];
    
    if (!link) {
      emptyLinks++;
      console.log(`  ❌ ${billing}: VIDE (va recharger la page!)`);
    } else if (link === '#contact') {
      contactLinks++;
      console.log(`  ⚠️  ${billing}: #contact (va scroller vers contact)`);
    } else if (link.startsWith('https://buy.stripe.com/')) {
      validLinks++;
      console.log(`  ✅ ${billing}: ${link}`);
    } else {
      console.log(`  ⚠️  ${billing}: ${link} (lien invalide)`);
    }
  });
});

console.log('\n\n📊 RÉSUMÉ:');
console.log('='.repeat(60));
console.log(`Total de liens vérifiés: ${totalLinks}`);
console.log(`✅ Liens Stripe valides: ${validLinks}`);
console.log(`❌ Liens vides: ${emptyLinks}`);
console.log(`⚠️  Liens #contact: ${contactLinks}`);

console.log('\n\n🎯 DIAGNOSTIC:');
console.log('='.repeat(60));

if (emptyLinks > 0) {
  console.log('\n❌ PROBLÈME IDENTIFIÉ: Liens vides');
  console.log('   Quand un lien est vide (""), le href devient href=""');
  console.log('   Cela recharge la page actuelle au lieu d\'aller sur Stripe!');
  console.log('\n   📝 SOLUTION:');
  console.log('   - Remplacer les liens vides par des vrais liens Stripe');
  console.log('   - OU rediriger vers #contact si le lien n\'existe pas');
}

if (contactLinks > 0) {
  console.log('\n⚠️  ATTENTION: Liens #contact');
  console.log('   Ces liens scrollent vers la section contact');
  console.log('   au lieu d\'ouvrir Stripe');
  console.log('\n   📝 SOLUTION:');
  console.log('   - Créer les Payment Links dans Stripe Dashboard');
  console.log('   - Remplacer #contact par les vrais liens');
}

if (validLinks === totalLinks) {
  console.log('\n✅ TOUS LES LIENS SONT VALIDES!');
  console.log('   Si le problème persiste, vérifiez:');
  console.log('   1. Le code React dans Pricing.tsx');
  console.log('   2. Les return_url dans Stripe Dashboard');
}

console.log('\n\n🧪 TEST RECOMMANDÉ:');
console.log('='.repeat(60));
console.log('Ouvrez: http://localhost:4321/test-stripe-direct.html');
console.log('Testez chaque lien pour voir s\'ils ouvrent Stripe correctement');

console.log('\n\n💡 PROCHAINES ÉTAPES:');
console.log('='.repeat(60));
console.log('1. Testez la page de test HTML');
console.log('2. Si les liens fonctionnent → Problème dans React');
console.log('3. Si les liens ne fonctionnent pas → Problème dans Stripe Dashboard');
console.log('4. Vérifiez les return_url dans Stripe Dashboard');

console.log('\n');
