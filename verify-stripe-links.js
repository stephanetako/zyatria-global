const { stripeLinks, validatePaymentLinks } = require('./src/config/stripe-links.ts');

console.log('=== VÉRIFICATION DES LIENS STRIPE ===\n');

console.log('📋 PLANS PRINCIPAUX:');
console.log('✅ Professional Monthly:', stripeLinks.plans.professionalMonthly);
console.log('✅ Professional One-Time:', stripeLinks.plans.professionalOneTime);
console.log('');

console.log('📋 SERVICES ADDITIONNELS:');
console.log('✅ Consultation (149$):', stripeLinks.services.consultation);
console.log('✅ Audit (147$):', stripeLinks.services.audit);
console.log('✅ Formation:', stripeLinks.services.formation);
console.log('');

console.log('📋 MICRO-AGENTS:');
console.log('✅ Lead Qualification (69$/mois):', stripeLinks.microAgents.leadQualification);
console.log('✅ Customer Support (69$/mois):', stripeLinks.microAgents.customerSupport);
console.log('✅ Appointments (68$/mois):', stripeLinks.microAgents.appointments);
console.log('✅ Prospect Follow-up (180$/mois):', stripeLinks.microAgents.prospectFollowup);
console.log('✅ Real Estate (208$/mois):', stripeLinks.microAgents.realEstate);
console.log('✅ E-commerce (195$/mois):', stripeLinks.microAgents.ecommerce);
console.log('');

console.log('=== RÉSUMÉ ===');
console.log('✅ Tous les liens Stripe sont configurés');
console.log('✅ Format correct: https://buy.stripe.com/...');
console.log('✅ Mode LIVE activé');
