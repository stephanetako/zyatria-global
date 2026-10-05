import React from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { 
  Bot, Zap, Workflow, Brain, Network, Sparkles, 
  CheckCircle2, ArrowRight, Globe, Users, Target,
  TrendingUp, Shield, Clock, Award, Rocket
} from 'lucide-react';
import { useLanguage } from '../lib/language-context';

const translations = {
  fr: {
    // Hero Section
    badge: "Nos Solutions IA",
    title: "Transformez Votre Entreprise avec l'Intelligence Artificielle",
    subtitle: "ZyatrIA Global : Votre partenaire en automatisation intelligente et agents IA sans frontières",
    
    // About Company
    aboutTitle: "Qui Sommes-Nous ?",
    aboutSubtitle: "ZyatrIA Global - L'IA Sans Frontières",
    aboutDescription: "Nous sommes une agence internationale spécialisée dans le déploiement d'agents IA intelligents et l'automatisation avancée. Notre mission : rendre l'intelligence artificielle accessible à toutes les entreprises, partout dans le monde.",
    aboutStats: [
      { value: "7-15 jours", label: "Déploiement rapide" },
      { value: "4 continents", label: "Présence mondiale" },
      { value: "15+ secteurs", label: "Industries servies" },
      { value: "99.9%", label: "Taux de satisfaction" }
    ],
    
    // Main Services
    servicesTitle: "Nos Services Principaux",
    servicesSubtitle: "Des solutions complètes pour automatiser et optimiser votre entreprise",
    
    services: [
      {
        icon: Brain,
        title: "Agents IA Intelligents",
        subtitle: "L'Intelligence au Service de Votre Entreprise",
        description: "Nos agents IA ne se contentent pas de répondre : ils analysent, comprennent le contexte, prennent des décisions et exécutent des actions complexes. Ils apprennent de chaque interaction pour s'améliorer continuellement.",
        features: [
          "Compréhension du langage naturel en 15+ langues",
          "Analyse de sentiment et détection d'intention",
          "Prise de décision basée sur vos règles métier",
          "Exécution automatique de tâches complexes",
          "Apprentissage continu et amélioration",
          "Intégration avec vos systèmes existants"
        ],
        benefits: [
          "Réduction de 70% du temps de réponse",
          "Disponibilité 24/7 sans interruption",
          "Cohérence parfaite dans toutes les interactions"
        ],
        cta: "Découvrir les Agents IA",
        ctaLink: "/demo"
      },
      {
        icon: Workflow,
        title: "Automatisation Avancée",
        subtitle: "Connectez, Synchronisez, Automatisez",
        description: "Nous créons des workflows intelligents qui connectent tous vos outils et automatisent vos processus métier. Fini le travail manuel répétitif, concentrez-vous sur la croissance de votre entreprise.",
        features: [
          "Intégration CRM (Salesforce, HubSpot, Zoho...)",
          "Automatisation des emails et relances",
          "Synchronisation en temps réel des données",
          "Workflows personnalisés selon vos besoins",
          "Gestion automatique des leads",
          "Rapports et analytics automatisés"
        ],
        benefits: [
          "Gain de 15-20 heures par semaine",
          "Zéro erreur de saisie manuelle",
          "ROI mesurable dès le premier mois"
        ],
        cta: "Voir l'Automatisation",
        ctaLink: "/demo"
      },
      {
        icon: Zap,
        title: "Micro-Agents Spécialisés",
        subtitle: "Solutions Rapides et Efficaces par Secteur",
        description: "Des agents IA pré-configurés pour les besoins spécifiques de votre industrie. Déploiement ultra-rapide en 7-15 jours, coût réduit, résultats immédiats.",
        features: [
          "Agent Immobilier : Qualification de leads, visites virtuelles",
          "Agent E-commerce : Support client, recommandations produits",
          "Agent RH : Screening CV, planification entretiens",
          "Agent Finance : Analyse de documents, reporting",
          "Agent Santé : Prise de RDV, rappels patients",
          "Agent Éducation : Support étudiant, correction automatique"
        ],
        benefits: [
          "Déploiement en 7-15 jours garanti",
          "Coût 60% inférieur aux solutions sur-mesure",
          "Résultats prouvés dans votre secteur"
        ],
        cta: "Explorer les Micro-Agents",
        ctaLink: "/micro-agents"
      }
    ],
    
    // Why Choose Us
    whyTitle: "Pourquoi Choisir ZyatrIA Global ?",
    whySubtitle: "Ce qui nous différencie de la concurrence",
    whyReasons: [
      {
        icon: Globe,
        title: "Présence Internationale",
        description: "Nous opérons en Amérique du Nord, Europe, Afrique et Amérique Latine avec support multilingue."
      },
      {
        icon: Clock,
        title: "Déploiement Rapide",
        description: "Vos solutions IA sont opérationnelles en 7-15 jours, pas en 6 mois comme ailleurs."
      },
      {
        icon: Shield,
        title: "Sécurité & Conformité",
        description: "Conformité RGPD, chiffrement de bout en bout, hébergement sécurisé certifié."
      },
      {
        icon: Users,
        title: "Support Dédié",
        description: "Une équipe d'experts disponible pour vous accompagner à chaque étape."
      },
      {
        icon: Target,
        title: "ROI Garanti",
        description: "Nous garantissons un retour sur investissement mesurable dès le premier mois."
      },
      {
        icon: Award,
        title: "Expertise Prouvée",
        description: "Plus de 100 projets réussis dans 15+ industries différentes."
      }
    ],
    
    // Process
    processTitle: "Notre Processus en 4 Étapes",
    processSubtitle: "De la consultation au déploiement, nous vous accompagnons",
    processSteps: [
      {
        number: "01",
        title: "Consultation Gratuite",
        description: "Analyse de vos besoins et identification des opportunités d'automatisation."
      },
      {
        number: "02",
        title: "Conception & Planification",
        description: "Création d'une solution sur-mesure adaptée à vos processus métier."
      },
      {
        number: "03",
        title: "Développement & Tests",
        description: "Configuration et tests rigoureux de vos agents IA et automatisations."
      },
      {
        number: "04",
        title: "Déploiement & Formation",
        description: "Mise en production et formation de vos équipes pour une adoption réussie."
      }
    ],
    
    // Industries
    industriesTitle: "Secteurs d'Activité",
    industriesSubtitle: "Nous servons plus de 15 industries différentes",
    industries: [
      "Immobilier", "E-commerce", "Finance", "Santé", 
      "Éducation", "Ressources Humaines", "Marketing", "Ventes",
      "Service Client", "Logistique", "Hôtellerie", "Assurance"
    ],
    
    // CTA
    ctaTitle: "Prêt à Transformer Votre Entreprise ?",
    ctaSubtitle: "Commencez avec une consultation gratuite de 30 minutes",
    ctaButton: "Réserver Ma Consultation Gratuite",
    ctaSecondary: "Voir une Démo"
  },
  en: {
    // Hero Section
    badge: "Our AI Solutions",
    title: "Transform Your Business with Artificial Intelligence",
    subtitle: "ZyatrIA Global: Your partner in intelligent automation and AI agents without borders",
    
    // About Company
    aboutTitle: "Who We Are",
    aboutSubtitle: "ZyatrIA Global - AI Without Borders",
    aboutDescription: "We are an international agency specializing in deploying intelligent AI agents and advanced automation. Our mission: make artificial intelligence accessible to all businesses, everywhere in the world.",
    aboutStats: [
      { value: "7-15 days", label: "Fast deployment" },
      { value: "4 continents", label: "Global presence" },
      { value: "15+ sectors", label: "Industries served" },
      { value: "99.9%", label: "Satisfaction rate" }
    ],
    
    // Main Services
    servicesTitle: "Our Main Services",
    servicesSubtitle: "Complete solutions to automate and optimize your business",
    
    services: [
      {
        icon: Brain,
        title: "Intelligent AI Agents",
        subtitle: "Intelligence at Your Business Service",
        description: "Our AI agents don't just respond: they analyze, understand context, make decisions, and execute complex actions. They learn from each interaction to continuously improve.",
        features: [
          "Natural language understanding in 15+ languages",
          "Sentiment analysis and intent detection",
          "Decision-making based on your business rules",
          "Automatic execution of complex tasks",
          "Continuous learning and improvement",
          "Integration with your existing systems"
        ],
        benefits: [
          "70% reduction in response time",
          "24/7 availability without interruption",
          "Perfect consistency in all interactions"
        ],
        cta: "Discover AI Agents",
        ctaLink: "/demo"
      },
      {
        icon: Workflow,
        title: "Advanced Automation",
        subtitle: "Connect, Sync, Automate",
        description: "We create intelligent workflows that connect all your tools and automate your business processes. No more repetitive manual work, focus on growing your business.",
        features: [
          "CRM integration (Salesforce, HubSpot, Zoho...)",
          "Email and follow-up automation",
          "Real-time data synchronization",
          "Custom workflows for your needs",
          "Automatic lead management",
          "Automated reports and analytics"
        ],
        benefits: [
          "Save 15-20 hours per week",
          "Zero manual entry errors",
          "Measurable ROI from the first month"
        ],
        cta: "See Automation",
        ctaLink: "/demo"
      },
      {
        icon: Zap,
        title: "Specialized Micro-Agents",
        subtitle: "Fast and Effective Solutions by Sector",
        description: "Pre-configured AI agents for your industry's specific needs. Ultra-fast deployment in 7-15 days, reduced cost, immediate results.",
        features: [
          "Real Estate Agent: Lead qualification, virtual tours",
          "E-commerce Agent: Customer support, product recommendations",
          "HR Agent: Resume screening, interview scheduling",
          "Finance Agent: Document analysis, reporting",
          "Health Agent: Appointment booking, patient reminders",
          "Education Agent: Student support, automatic grading"
        ],
        benefits: [
          "Guaranteed deployment in 7-15 days",
          "60% lower cost than custom solutions",
          "Proven results in your sector"
        ],
        cta: "Explore Micro-Agents",
        ctaLink: "/micro-agents"
      }
    ],
    
    // Why Choose Us
    whyTitle: "Why Choose ZyatrIA Global?",
    whySubtitle: "What sets us apart from the competition",
    whyReasons: [
      {
        icon: Globe,
        title: "International Presence",
        description: "We operate in North America, Europe, Africa and Latin America with multilingual support."
      },
      {
        icon: Clock,
        title: "Fast Deployment",
        description: "Your AI solutions are operational in 7-15 days, not 6 months like elsewhere."
      },
      {
        icon: Shield,
        title: "Security & Compliance",
        description: "GDPR compliance, end-to-end encryption, certified secure hosting."
      },
      {
        icon: Users,
        title: "Dedicated Support",
        description: "A team of experts available to support you at every step."
      },
      {
        icon: Target,
        title: "Guaranteed ROI",
        description: "We guarantee measurable return on investment from the first month."
      },
      {
        icon: Award,
        title: "Proven Expertise",
        description: "Over 100 successful projects in 15+ different industries."
      }
    ],
    
    // Process
    processTitle: "Our 4-Step Process",
    processSubtitle: "From consultation to deployment, we guide you",
    processSteps: [
      {
        number: "01",
        title: "Free Consultation",
        description: "Analysis of your needs and identification of automation opportunities."
      },
      {
        number: "02",
        title: "Design & Planning",
        description: "Creation of a custom solution adapted to your business processes."
      },
      {
        number: "03",
        title: "Development & Testing",
        description: "Configuration and rigorous testing of your AI agents and automations."
      },
      {
        number: "04",
        title: "Deployment & Training",
        description: "Production launch and team training for successful adoption."
      }
    ],
    
    // Industries
    industriesTitle: "Industries",
    industriesSubtitle: "We serve over 15 different industries",
    industries: [
      "Real Estate", "E-commerce", "Finance", "Healthcare", 
      "Education", "Human Resources", "Marketing", "Sales",
      "Customer Service", "Logistics", "Hospitality", "Insurance"
    ],
    
    // CTA
    ctaTitle: "Ready to Transform Your Business?",
    ctaSubtitle: "Start with a free 30-minute consultation",
    ctaButton: "Book My Free Consultation",
    ctaSecondary: "See a Demo"
  }
};

const Services: React.FC = () => {
  const { language } = useLanguage();
  const lang = (language === 'en' || language === 'fr') ? language : 'fr';
  const t = translations[lang];

  return (
    <div className="bg-white dark:bg-zinc-950">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 via-white to-white dark:from-blue-950/20 dark:via-zinc-950 dark:to-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-6 shadow-sm">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-600">{t.badge}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 text-foreground">
              {t.title}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
              {t.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* About Company */}
      <section className="py-20 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-foreground">
              {t.aboutTitle}
            </h2>
            <p className="text-lg text-primary font-semibold mb-4">{t.aboutSubtitle}</p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t.aboutDescription}
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {t.aboutStats.map((stat: any, index: number) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-gradient-to-b from-white via-blue-50/30 to-white dark:from-zinc-950 dark:via-blue-950/10 dark:to-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-foreground">
              {t.servicesTitle}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t.servicesSubtitle}
            </p>
          </div>

          <div className="space-y-20">
            {t.services.map((service: any, index: number) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`grid md:grid-cols-2 gap-12 items-center ${!isEven ? 'md:flex-row-reverse' : ''}`}>
                  <div className={`${!isEven ? 'md:order-2' : ''}`}>
                    <Card className="p-8 hover:shadow-2xl transition-all duration-500 border-2 hover:border-blue-400/50">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                        <Icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                      </div>
                      
                      <div className="mb-2">
                        <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                          {service.subtitle}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl font-bold font-heading mb-4 text-foreground">
                        {service.title}
                      </h3>
                      
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-foreground mb-3">Fonctionnalités :</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature: string, idx: number) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-blue-50 dark:bg-blue-950/30 rounded-lg p-4 mb-6">
                        <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                          <TrendingUp className="w-4 h-4 text-blue-600" />
                          Bénéfices :
                        </h4>
                        <ul className="space-y-1">
                          {service.benefits.map((benefit: string, idx: number) => (
                            <li key={idx} className="text-sm text-muted-foreground">
                              • {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Button asChild className="w-full group">
                        <a href={service.ctaLink}>
                          {service.cta}
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </Button>
                    </Card>
                  </div>

                  <div className={`${!isEven ? 'md:order-1' : ''}`}>
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl blur-3xl"></div>
                      <div className="relative bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-12 text-white">
                        <Icon className="w-32 h-32 mx-auto mb-6 opacity-20" />
                        <div className="text-center">
                          <div className="text-6xl font-bold mb-2">{index + 1}</div>
                          <div className="text-xl font-semibold">{service.title}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-foreground">
              {t.whyTitle}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t.whySubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.whyReasons.map((reason: any, index: number) => {
              const Icon = reason.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-400/50">
                  <div className="w-12 h-12 bg-blue-50 dark:bg-blue-950/30 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold font-heading mb-2 text-foreground">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {reason.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gradient-to-b from-white via-blue-50/30 to-white dark:from-zinc-950 dark:via-blue-950/10 dark:to-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-foreground">
              {t.processTitle}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t.processSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.processSteps.map((step: any, index: number) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold shadow-lg">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-bold font-heading mb-2 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-600 to-transparent -translate-x-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-foreground">
              {t.industriesTitle}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t.industriesSubtitle}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {t.industries.map((industry: string, index: number) => (
              <div key={index} className="px-6 py-3 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-full text-sm font-medium text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors">
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Rocket className="w-16 h-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            {t.ctaTitle}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {t.ctaSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="group">
              {t.ctaButton}
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
              {t.ctaSecondary}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
