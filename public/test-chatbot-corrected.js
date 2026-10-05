// Configuration - URL Cloudflare Worker corrigée
const BACKEND_URL = 'https://zyatria-global.pages.dev/api/claude-chat';

const AGENTS = [
  {
    id: 'lead',
    icon: '<svg class="ico" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
    name: 'Qualification des leads',
    desc: 'Scoring des prospects, qualification instantanée et alertes réservées aux leads sérieux.',
    features: ['Auto-scoring des prospects', 'Qualification instantanée', 'Alertes leads chauds', 'Intégration CRM'],
    price: '69',
    period: '$CA/mois'
  },
  {
    id: 'support',
    icon: '<svg class="ico" viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
    name: 'Réponses clients 24/7',
    desc: 'Réponses instantanées aux questions courantes, jour et nuit, en plusieurs langues.',
    features: ['Réponses instantanées 24/7', 'Support multilingue', 'Base de connaissances FAQ', 'Escalade humaine'],
    price: '69',
    period: '$CA/mois'
  },
  {
    id: 'rdv',
    icon: '<svg class="ico" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
    name: 'Gestion des rendez-vous',
    desc: 'Réservation directe, rappels automatiques, synchronisation agenda.',
    features: ['Réservation en ligne', 'Rappels automatiques', 'Sync agenda', 'Gestion des confirmations'],
    price: '68',
    period: '$CA/mois'
  },
  {
    id: 'followup',
    icon: '<svg class="ico" viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>',
    name: 'Suivi des prospects',
    desc: 'Relances automatiques par email, SMS ou WhatsApp, au bon moment.',
    features: ['Séquences automatisées', 'Multi-canal', 'Timing intelligent', 'Suivi d\'engagement'],
    price: '180',
    period: '$CA/mois'
  },
  {
    id: 'immo',
    icon: '<svg class="ico" viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
    name: 'Micro-agent immobilier',
    desc: 'Visites, qualification des acheteurs et réponses sur les annonces, 24/7.',
    features: ['Planification des visites', 'Qualification des acheteurs', 'Réponses sur les biens', 'Gestion des leads'],
    price: '208',
    period: '$CA/mois'
  },
  {
    id: 'commerce',
    icon: '<svg class="ico" viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>',
    name: 'Micro-agent commerce',
    desc: 'Récupération des paniers abandonnés, suivi des commandes, FAQ produits.',
    features: ['Récupération de paniers', 'Suivi de commandes', 'FAQ produits', 'Recommandations'],
    price: '195',
    period: '$CA/mois'
  }
];

const I18N = {
  fr: {
    nav_home: 'Accueil',
    nav_services: 'Services',
    nav_agents: 'Micro-agents',
    nav_roadmap: 'Roadmap',
    nav_pricing: 'Tarifs',
    nav_faq: 'FAQ',
    nav_cta: 'Démo gratuite',
    hero_badge: 'Déploiement en 7-15 jours',
    hero_title: 'Déployez des <span class="grad">agents IA intelligents</span> en 7-15 jours',
    hero_sub: 'Automatisez vos processus, qualifiez vos leads et répondez à vos clients 24/7. Sans embauche. Sans formation. Résultats mesurables dès la première semaine.',
    hero_cta1: 'Démarrer votre démo gratuite',
    hero_cta2: 'Voir les tarifs',
    stat1: 'Déploiement',
    stat2: 'Disponibilité',
    stat3: 'Langues',
    stat4: 'Coûts',
    card1_title: 'Lead qualifié',
    card1_desc: 'Score 92/100 · Prêt pour votre équipe',
    card2_title: 'Réponse client',
    card2_desc: 'En 1,2 secondes · 24/7',
    card3_title: '+265% conversion',
    card3_desc: 'Mesuré chez Digital Ventures',
    services_eyebrow: 'Nos solutions',
    services_title: 'Un écosystème IA complet pour votre croissance',
    services_sub: 'Trois leviers complémentaires, adaptés à votre secteur.',
    svc1_title: 'Agents IA',
    svc1_desc: 'Des agents qui analysent, décident et exécutent.',
    svc2_title: 'Automatisation',
    svc2_desc: 'Éliminez le travail manuel.',
    svc3_title: 'Micro-agents',
    svc3_desc: 'Solutions pré-construites pour vos défis courants.',
    svc_link: 'Voir comment ça marche',
    agents_eyebrow: 'Micro-agents digitaux',
    agents_title: 'Choisissez le micro-agent adapté à votre activité',
    agents_sub: 'Solutions pré-configurées, prêtes à déployer.',
    roadmap_eyebrow: 'Transparence totale',
    roadmap_title: 'Roadmap de développement',
    roadmap_sub: 'Nous vous montrons où nous en sommes.',
    rm1_status: 'Disponible maintenant',
    rm1_title: 'Consultations & audits',
    rm1_1: 'Consultations stratégiques IA',
    rm1_2: 'Audits de processus complets',
    rm1_3: 'Formation IA pour équipes',
    rm1_4: 'Recommandations personnalisées',
    rm1_5: 'Roadmap d\'automatisation',
    rm1_cta: 'Réserver maintenant',
    rm2_status: 'En développement (60 jours)',
    rm2_title: 'Agents avancés',
    rm2_1: 'Agent vocal (Vapi.ai)',
    rm2_2: 'Chatbot intelligent (GPT-4)',
    rm2_3: 'Automatisation CRM',
    rm2_4: 'Intégrations API',
    rm2_5: 'Dashboard analytics',
    rm2_cta: 'Pré-commander (-30%)',
    rm3_status: 'Lancement complet (90 jours)',
    rm3_title: 'Écosystème complet',
    rm3_1: '7 micro-agents spécialisés',
    rm3_2: 'Support 24/7',
    rm3_3: 'Déploiement en 7-15 jours',
    rm3_4: 'Formation personnalisée',
    rm3_5: 'SLA garantis',
    rm3_cta: 'Réserver votre place',
    pricing_eyebrow: 'Tarification transparente',
    pricing_title: 'Choisissez votre solution IA',
    pricing_sub: 'Sans frais cachés. Garantie 30 jours.',
    p1_name: 'Starter',
    p1_desc: 'Parfait pour démarrer',
    p1_period: 'Idéal pour automatiser vos processus de base.',
    p1_f1: '1 bot IA spécialisé',
    p1_f2: 'Déploiement en 7-15 jours',
    p1_f3: 'Support email (48h)',
    p1_f4: 'Tableau de bord analytique',
    p1_f5: '1 000 interactions/mois',
    p1_cta: 'Démarrer l\'essai gratuit',
    p2_name: 'Professional',
    p2_desc: 'Le plus populaire',
    p2_period: 'Automatisation avancée.',
    p2_f1: '3 bots IA spécialisés',
    p2_f2: 'Déploiement en 7-15 jours',
    p2_f3: 'Automatisation avancée',
    p2_f4: 'Intégrations CRM',
    p2_f5: 'Support prioritaire (24h)',
    p2_f6: '5 000 interactions/mois',
    p2_cta: 'Démarrer l\'essai gratuit',
    p3_name: 'Enterprise',
    p3_desc: 'Solution complète',
    p3_price: 'Sur devis',
    p3_period: 'Pour grandes organisations.',
    p3_f1: '7 bots IA — suite complète',
    p3_f2: 'Déploiement personnalisé',
    p3_f3: 'Gestionnaire dédié',
    p3_f4: 'Support 24/7',
    p3_f5: 'Interactions illimitées',
    p3_f6: 'SLA 99,9%',
    p3_cta: 'Contacter notre équipe',
    testi_eyebrow: 'Références',
    testi_title: 'Ce que disent nos clients',
    testi_sub: 'Des résultats mesurés.',
    t1_text: '« ZyatrIA a transformé notre service client. »',
    t2_text: '« Nous avons automatisé 80% du traitement. »',
    t3_text: '« Les agents IA gèrent notre qualification. »',
    faq_eyebrow: 'FAQ',
    faq_title: 'Tout ce que vous devez savoir',
    faq_sub: 'Réponses claires.',
    faq1_q: 'Combien de temps prend le déploiement ?',
    faq1_a: 'Entre 7 et 15 jours.',
    faq2_q: 'Quels outils pouvez-vous intégrer ?',
    faq2_a: 'CRM, email, SMS, WhatsApp, etc.',
    faq3_q: 'Puis-je annuler à tout moment ?',
    faq3_a: 'Oui, sans engagement.',
    faq4_q: 'Les agents IA parlent-ils plusieurs langues ?',
    faq4_a: 'Oui, FR, EN, ES et PT.',
    faq5_q: 'Quel support offrez-vous ?',
    faq5_a: 'Email 48h, prioritaire 24h, ou 24/7.',
    faq6_q: 'Comment mesurez-vous les résultats ?',
    faq6_a: 'Dashboard analytique en temps réel.',
    cta_title: 'Vos concurrents utilisent déjà l\'IA. Et vous ?',
    cta_sub: 'Démarrez votre transformation digitale aujourd\'hui.',
    cta_btn: 'Réserver ma démo gratuite'
  },
  en: {
    nav_home: 'Home',
    nav_services: 'Services',
    nav_agents: 'Micro-agents',
    nav_roadmap: 'Roadmap',
    nav_pricing: 'Pricing',
    nav_faq: 'FAQ',
    nav_cta: 'Free Demo',
    hero_badge: 'Deploy in 7-15 days',
    hero_title: 'Deploy <span class="grad">intelligent AI agents</span> in 7-15 days',
    hero_sub: 'Automate your processes, qualify your leads, and respond to your customers 24/7. No hiring. No training. Measurable results from week one.',
    hero_cta1: 'Start your free demo',
    hero_cta2: 'View pricing',
    stat1: 'Deployment',
    stat2: 'Availability',
    stat3: 'Languages',
    stat4: 'Costs',
    card1_title: 'Qualified lead',
    card1_desc: 'Score 92/100 · Ready for your sales team',
    card2_title: 'Customer response',
    card2_desc: 'In 1.2 seconds · 24/7',
    card3_title: '+265% conversion',
    card3_desc: 'Measured at Digital Ventures',
    services_eyebrow: 'Our solutions',
    services_title: 'A complete AI ecosystem for your growth',
    services_sub: 'Three complementary levers, adapted to your industry.',
    svc1_title: 'AI Agents',
    svc1_desc: 'Agents that analyze, decide, and execute.',
    svc2_title: 'Automation',
    svc2_desc: 'Eliminate manual work.',
    svc3_title: 'Micro-agents',
    svc3_desc: 'Pre-built solutions for your common challenges.',
    svc_link: 'See how it works',
    agents_eyebrow: 'Digital micro-agents',
    agents_title: 'Choose the micro-agent for your business',
    agents_sub: 'Pre-configured solutions, ready to deploy.',
    roadmap_eyebrow: 'Total transparency',
    roadmap_title: 'Development roadmap',
    roadmap_sub: 'We show you where we are.',
    rm1_status: 'Available now',
    rm1_title: 'Consultations & audits',
    rm1_1: 'Strategic AI consultations',
    rm1_2: 'Complete process audits',
    rm1_3: 'AI training for teams',
    rm1_4: 'Personalized recommendations',
    rm1_5: 'Automation roadmap',
    rm1_cta: 'Book now',
    rm2_status: 'In development (60 days)',
    rm2_title: 'Advanced agents',
    rm2_1: 'Voice agent (Vapi.ai)',
    rm2_2: 'Intelligent chatbot (GPT-4)',
    rm2_3: 'CRM automation',
    rm2_4: 'API integrations',
    rm2_5: 'Analytics dashboard',
    rm2_cta: 'Pre-order (-30%)',
    rm3_status: 'Full launch (90 days)',
    rm3_title: 'Complete ecosystem',
    rm3_1: '7 specialized micro-agents',
    rm3_2: '24/7 support',
    rm3_3: 'Deploy in 7-15 days',
    rm3_4: 'Personalized training',
    rm3_5: 'Guaranteed SLAs',
    rm3_cta: 'Reserve your spot',
    pricing_eyebrow: 'Transparent pricing',
    pricing_title: 'Choose your AI solution',
    pricing_sub: 'No hidden fees. 30-day guarantee.',
    p1_name: 'Starter',
    p1_desc: 'Perfect to get started',
    p1_period: 'Ideal for automating your basic processes.',
    p1_f1: '1 specialized AI bot',
    p1_f2: 'Deploy in 7-15 days',
    p1_f3: 'Email support (48h)',
    p1_f4: 'Analytics dashboard',
    p1_f5: '1,000 interactions/month',
    p1_cta: 'Start free trial',
    p2_name: 'Professional',
    p2_desc: 'Most popular',
    p2_period: 'Advanced automation.',
    p2_f1: '3 specialized AI bots',
    p2_f2: 'Deploy in 7-15 days',
    p2_f3: 'Advanced automation',
    p2_f4: 'CRM integrations',
    p2_f5: 'Priority support (24h)',
    p2_f6: '5,000 interactions/month',
    p2_cta: 'Start free trial',
    p3_name: 'Enterprise',
    p3_desc: 'Complete solution',
    p3_price: 'Custom quote',
    p3_period: 'For large organizations.',
    p3_f1: '7 AI bots — complete suite',
    p3_f2: 'Custom deployment',
    p3_f3: 'Dedicated manager',
    p3_f4: '24/7 support',
    p3_f5: 'Unlimited interactions',
    p3_f6: '99.9% SLA',
    p3_cta: 'Contact our team',
    testi_eyebrow: 'References',
    testi_title: 'What our clients say',
    testi_sub: 'Measured results.',
    t1_text: '"ZyatrIA transformed our customer service."',
    t2_text: '"We automated 80% of processing."',
    t3_text: '"AI agents handle our qualification."',
    faq_eyebrow: 'FAQ',
    faq_title: 'Everything you need to know',
    faq_sub: 'Clear answers.',
    faq1_q: 'How long does deployment take?',
    faq1_a: 'Between 7 and 15 days.',
    faq2_q: 'What tools can you integrate?',
    faq2_a: 'CRM, email, SMS, WhatsApp, etc.',
    faq3_q: 'Can I cancel anytime?',
    faq3_a: 'Yes, no commitment.',
    faq4_q: 'Do AI agents speak multiple languages?',
    faq4_a: 'Yes, FR, EN, ES, and PT.',
    faq5_q: 'What support do you offer?',
    faq5_a: 'Email 48h, priority 24h, or 24/7.',
    faq6_q: 'How do you measure results?',
    faq6_a: 'Real-time analytics dashboard.',
    cta_title: 'Your competitors are already using AI. Are you?',
    cta_sub: 'Start your digital transformation today.',
    cta_btn: 'Book my free demo'
  }
};

// Initialisation
let currentLang = 'fr';

// Fonction de traduction
function translate(lang) {
  currentLang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (I18N[lang] && I18N[lang][key]) {
      el.innerHTML = I18N[lang][key];
    }
  });
  
  // Mettre à jour les boutons de langue
  document.querySelectorAll('.lang-toggle button').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });
}

// Gestion des événements
document.addEventListener('DOMContentLoaded', () => {
  // Boutons de langue
  document.querySelectorAll('.lang-toggle button').forEach(btn => {
    btn.addEventListener('click', () => {
      translate(btn.getAttribute('data-lang'));
    });
  });
  
  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
  
  // Initialiser la langue par défaut
  translate('fr');
});

console.log('✅ Script chargé avec succès');
console.log('✅ URL Backend:', BACKEND_URL);
