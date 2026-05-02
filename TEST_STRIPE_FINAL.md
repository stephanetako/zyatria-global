#!/usr/bin/env node

/**
 * Script de vérification des liens Stripe
 * Vérifie que tous les liens sont accessibles
 */

const stripeLinks = {
  'Bot IA Starter (one-time)': 'https://buy.stripe.com/8x26oz6mP7Hr689eMI9oc00',
  'Bot IA Starter (monthly)': 'https://buy.stripe.com/28EfZ9fXp2n7cwxeMI9oc01',
  'Bot IA Professional (one-time)': 'https://buy.stripe.com/28E4gr9z12n7gMN1ZW9oc02',
  'Bot IA Professional (monthly)': 'https://buy.stripe.com/14A4grbH9aTDaopaws9oc03',
  'Audit IA Complet': 'https://buy.stripe.com/eVqfZ99z14vf9kl9so9oc04',
  'Bot IA Enterprise (one-time)': 'https://buy.stripe.com/7sYfZ93aDbXHgMN5c89oc05',
  'Bot IA Enterprise (monthly)': 'https://buy.stripe.com/fZu5kv3aD5zjdABeMI9oc06',
  'Consultation Stratégique': 'https://buy.stripe.com/4gM00b7qT6DndAB9so9oc07'
};

async function verifyLink(name, url) {
  try {
    const response = await fetch(url, { method: 'HEAD' });
    if (response.ok || response.status === 303) {
      console.log(`✅ ${name}: OK`);
      return true;
    } else {
      console.log(`❌ ${name}: Status ${response.status}`);
      return false;
    }
  } catch (error) {
    console.log(`❌ ${name}: Error - ${error.message}`);
    return false;
  }
}

async function verifyAllLinks() {
  console.log('🔍 Vérification des liens Stripe...\n');
  
  let allOk = true;
  for (const [name, url] of Object.entries(stripeLinks)) {
    const ok = await verifyLink(name, url);
    if (!ok) allOk = false;
  }
  
  console.log('\n' + (allOk ? '✅ Tous les liens fonctionnent !' : '❌ Certains liens ont des problèmes'));
}

verifyAllLinks();
