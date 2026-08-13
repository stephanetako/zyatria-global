import React from 'react';
import { useLanguage } from '../lib/language-context';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { ShoppingCart, Home, Users, Laptop, Heart, Briefcase, TrendingUp, Phone } from 'lucide-react';

const IndustrySolutions: React.FC = () => {
  const { t } = useLanguage();

  const industries = {
    fr: [
      {
        icon: ShoppingCart,
        title: 'E-commerce & Retail',
        description: 'Transformez vos visiteurs en acheteurs',
        benefits: [
          'Récupérez 30% des paniers abandonnés',
          'Réduisez le temps de réponse de 80%',
          'Augmentez la satisfaction client de 42%',
          'Support multilingue 24/7'
        ],
        color: 'text-blue-600'
      },
      {
        icon: Home,
        title: 'Immobilier',
        description: 'Convertissez plus de demandes immobilières',
        benefits: [
          '+65% vitesse de réponse aux leads',
          '+38% rendez-vous qualifiés',
          'Suivez chaque demande immobilière',
          'Qualification automatique des prospects'
        ],
        color: 'text-orange-600'
      },
      {
        icon: Users,
        title: 'Coaching & Consulting',
        description: 'Automatisez votre acquisition de clients',
        benefits: [
          '+50% de leads qualifiés',
          'Réservations automatiques 24/7',
          'Suivi personnalisé des prospects',
          'Réduction de 70% du temps admin'
        ],
        color: 'text-purple-600'
      },
      {
        icon: Laptop,
        title: 'SaaS & Tech',
        description: 'Accélérez l\'onboarding et réduisez le churn',
        benefits: [
          '+45% taux d\'activation utilisateurs',
          '-35% tickets de support',
          'Onboarding automatisé',
          'Support technique intelligent'
        ],
        color: 'text-indigo-600'
      },
      {
        icon: Heart,
        title: 'Santé & Bien-être',
        description: 'Optimisez la gestion des rendez-vous',
        benefits: [
          '-60% de rendez-vous manqués',
          'Rappels automatiques personnalisés',
          'Gestion des urgences prioritaire',
          'Conformité HIPAA/RGPD'
        ],
        color: 'text-red-600'
      },
      {
        icon: Briefcase,
        title: 'Services Professionnels',
        description: 'Automatisez la qualification et le suivi',
        benefits: [
          '+55% de leads qualifiés',
          'Collecte automatique de documents',
          'Suivi de projets intelligent',
          'Facturation et rappels automatisés'
        ],
        color: 'text-green-600'
      },
      {
        icon: TrendingUp,
        title: 'Finance & Assurance',
        description: 'Qualification et conformité automatisées',
        benefits: [
          'Qualification KYC automatique',
          'Conformité réglementaire garantie',
          'Suivi des demandes en temps réel',
          'Réduction de 80% du temps de traitement'
        ],
        color: 'text-emerald-600'
      },
      {
        icon: Phone,
        title: 'Télécommunications',
        description: 'Support client intelligent et évolutif',
        benefits: [
          '-75% temps de résolution',
          'Support multicanal unifié',
          'Détection proactive des problèmes',
          'Satisfaction client +48%'
        ],
        color: 'text-cyan-600'
      }
    ],
    en: [
      {
        icon: ShoppingCart,
        title: 'E-commerce & Retail',
        description: 'Turn visitors into buyers',
        benefits: [
          'Recover 30% of abandoned carts',
          'Reduce response time by 80%',
          'Increase customer satisfaction by 42%',
          'Multilingual 24/7 support'
        ],
        color: 'text-blue-600'
      },
      {
        icon: Home,
        title: 'Real Estate',
        description: 'Convert more property inquiries',
        benefits: [
          '+65% lead response speed',
          '+38% qualified appointments',
          'Track every property inquiry',
          'Automatic prospect qualification'
        ],
        color: 'text-orange-600'
      },
      {
        icon: Users,
        title: 'Coaching & Consulting',
        description: 'Automate your client acquisition',
        benefits: [
          '+50% qualified leads',
          '24/7 automatic bookings',
          'Personalized prospect follow-up',
          '70% reduction in admin time'
        ],
        color: 'text-purple-600'
      },
      {
        icon: Laptop,
        title: 'SaaS & Tech',
        description: 'Accelerate onboarding and reduce churn',
        benefits: [
          '+45% user activation rate',
          '-35% support tickets',
          'Automated onboarding',
          'Intelligent technical support'
        ],
        color: 'text-indigo-600'
      },
      {
        icon: Heart,
        title: 'Healthcare & Wellness',
        description: 'Optimize appointment management',
        benefits: [
          '-60% missed appointments',
          'Personalized automatic reminders',
          'Priority emergency management',
          'HIPAA/GDPR compliance'
        ],
        color: 'text-red-600'
      },
      {
        icon: Briefcase,
        title: 'Professional Services',
        description: 'Automate qualification and follow-up',
        benefits: [
          '+55% qualified leads',
          'Automatic document collection',
          'Intelligent project tracking',
          'Automated billing and reminders'
        ],
        color: 'text-green-600'
      },
      {
        icon: TrendingUp,
        title: 'Finance & Insurance',
        description: 'Automated qualification and compliance',
        benefits: [
          'Automatic KYC qualification',
          'Guaranteed regulatory compliance',
          'Real-time request tracking',
          '80% reduction in processing time'
        ],
        color: 'text-emerald-600'
      },
      {
        icon: Phone,
        title: 'Telecommunications',
        description: 'Intelligent and scalable customer support',
        benefits: [
          '-75% resolution time',
          'Unified multichannel support',
          'Proactive issue detection',
          '+48% customer satisfaction'
        ],
        color: 'text-cyan-600'
      }
    ],
    es: [
      {
        icon: ShoppingCart,
        title: 'E-commerce y Retail',
        description: 'Convierte visitantes en compradores',
        benefits: [
          'Recupera el 30% de carritos abandonados',
          'Reduce el tiempo de respuesta en 80%',
          'Aumenta la satisfacción del cliente en 42%',
          'Soporte multilingüe 24/7'
        ],
        color: 'text-blue-600'
      },
      {
        icon: Home,
        title: 'Inmobiliaria',
        description: 'Convierte más consultas inmobiliarias',
        benefits: [
          '+65% velocidad de respuesta a leads',
          '+38% citas calificadas',
          'Seguimiento de cada consulta',
          'Calificación automática de prospectos'
        ],
        color: 'text-orange-600'
      },
      {
        icon: Users,
        title: 'Coaching y Consultoría',
        description: 'Automatiza tu adquisición de clientes',
        benefits: [
          '+50% de leads calificados',
          'Reservas automáticas 24/7',
          'Seguimiento personalizado',
          'Reducción del 70% en tiempo admin'
        ],
        color: 'text-purple-600'
      },
      {
        icon: Laptop,
        title: 'SaaS y Tech',
        description: 'Acelera el onboarding y reduce el churn',
        benefits: [
          '+45% tasa de activación',
          '-35% tickets de soporte',
          'Onboarding automatizado',
          'Soporte técnico inteligente'
        ],
        color: 'text-indigo-600'
      },
      {
        icon: Heart,
        title: 'Salud y Bienestar',
        description: 'Optimiza la gestión de citas',
        benefits: [
          '-60% de citas perdidas',
          'Recordatorios automáticos personalizados',
          'Gestión prioritaria de urgencias',
          'Cumplimiento HIPAA/RGPD'
        ],
        color: 'text-red-600'
      },
      {
        icon: Briefcase,
        title: 'Servicios Profesionales',
        description: 'Automatiza calificación y seguimiento',
        benefits: [
          '+55% de leads calificados',
          'Recopilación automática de documentos',
          'Seguimiento inteligente de proyectos',
          'Facturación y recordatorios automatizados'
        ],
        color: 'text-green-600'
      },
      {
        icon: TrendingUp,
        title: 'Finanzas y Seguros',
        description: 'Calificación y cumplimiento automatizados',
        benefits: [
          'Calificación KYC automática',
          'Cumplimiento regulatorio garantizado',
          'Seguimiento en tiempo real',
          'Reducción del 80% en tiempo de procesamiento'
        ],
        color: 'text-emerald-600'
      },
      {
        icon: Phone,
        title: 'Telecomunicaciones',
        description: 'Soporte inteligente y escalable',
        benefits: [
          '-75% tiempo de resolución',
          'Soporte multicanal unificado',
          'Detección proactiva de problemas',
          '+48% satisfacción del cliente'
        ],
        color: 'text-cyan-600'
      }
    ],
    pt: [
      {
        icon: ShoppingCart,
        title: 'E-commerce e Varejo',
        description: 'Transforme visitantes em compradores',
        benefits: [
          'Recupere 30% dos carrinhos abandonados',
          'Reduza o tempo de resposta em 80%',
          'Aumente a satisfação do cliente em 42%',
          'Suporte multilíngue 24/7'
        ],
        color: 'text-blue-600'
      },
      {
        icon: Home,
        title: 'Imobiliário',
        description: 'Converta mais consultas imobiliárias',
        benefits: [
          '+65% velocidade de resposta a leads',
          '+38% agendamentos qualificados',
          'Acompanhe cada consulta',
          'Qualificação automática de prospects'
        ],
        color: 'text-orange-600'
      },
      {
        icon: Users,
        title: 'Coaching e Consultoria',
        description: 'Automatize sua aquisição de clientes',
        benefits: [
          '+50% de leads qualificados',
          'Reservas automáticas 24/7',
          'Acompanhamento personalizado',
          'Redução de 70% no tempo admin'
        ],
        color: 'text-purple-600'
      },
      {
        icon: Laptop,
        title: 'SaaS e Tech',
        description: 'Acelere o onboarding e reduza o churn',
        benefits: [
          '+45% taxa de ativação',
          '-35% tickets de suporte',
          'Onboarding automatizado',
          'Suporte técnico inteligente'
        ],
        color: 'text-indigo-600'
      },
      {
        icon: Heart,
        title: 'Saúde e Bem-estar',
        description: 'Otimize a gestão de consultas',
        benefits: [
          '-60% de consultas perdidas',
          'Lembretes automáticos personalizados',
          'Gestão prioritária de urgências',
          'Conformidade HIPAA/LGPD'
        ],
        color: 'text-red-600'
      },
      {
        icon: Briefcase,
        title: 'Serviços Profissionais',
        description: 'Automatize qualificação e acompanhamento',
        benefits: [
          '+55% de leads qualificados',
          'Coleta automática de documentos',
          'Acompanhamento inteligente de projetos',
          'Faturamento e lembretes automatizados'
        ],
        color: 'text-green-600'
      },
      {
        icon: TrendingUp,
        title: 'Finanças e Seguros',
        description: 'Qualificação e conformidade automatizadas',
        benefits: [
          'Qualificação KYC automática',
          'Conformidade regulatória garantida',
          'Acompanhamento em tempo real',
          'Redução de 80% no tempo de processamento'
        ],
        color: 'text-emerald-600'
      },
      {
        icon: Phone,
        title: 'Telecomunicações',
        description: 'Suporte inteligente e escalável',
        benefits: [
          '-75% tempo de resolução',
          'Suporte multicanal unificado',
          'Detecção proativa de problemas',
          '+48% satisfação do cliente'
        ],
        color: 'text-cyan-600'
      }
    ]
  };

  const content = {
    fr: {
      title: '🎯 Solutions Adaptées à Votre Secteur',
      subtitle: 'Nous avons conçu des agents IA spécialement pour votre industrie',
      cta: 'Planifier Une Consultation Gratuite'
    },
    en: {
      title: '🎯 Solutions Tailored to Your Industry',
      subtitle: 'We have designed AI agents specifically for your industry',
      cta: 'Schedule a Free Consultation'
    },
    es: {
      title: '🎯 Soluciones Adaptadas a Tu Sector',
      subtitle: 'Hemos diseñado agentes IA específicamente para tu industria',
      cta: 'Programar Una Consulta Gratuita'
    },
    pt: {
      title: '🎯 Soluções Adaptadas ao Seu Setor',
      subtitle: 'Projetamos agentes IA especificamente para sua indústria',
      cta: 'Agendar Uma Consulta Gratuita'
    }
  };

  const currentLanguage = t('language') as 'fr' | 'en' | 'es' | 'pt';
  const currentIndustries = industries[currentLanguage] || industries.fr;
  const currentContent = content[currentLanguage] || content.fr;

  const handleConsultation = () => {
    // Scroll to contact form or open demo booking
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Fallback to demo page
      window.location.href = '/demo';
    }
  };

  return (
    <section className="section-spacing bg-muted/30">
      <div className="container-responsive">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-responsive-3xl font-heading font-bold mb-4">
            {currentContent.title}
          </h2>
          <p className="text-responsive-lg text-muted-foreground max-w-3xl mx-auto">
            {currentContent.subtitle}
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {currentIndustries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <Card 
                key={index}
                className="hover-lift transition-smooth animate-fade-in-up group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className={`${industry.color} mb-3 transition-transform group-hover:scale-110`}>
                    <Icon className="w-10 h-10" />
                  </div>
                  <CardTitle className="text-xl mb-2">{industry.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {industry.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {industry.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <span className="text-green-600 mr-2 mt-0.5 flex-shrink-0">✓</span>
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    onClick={handleConsultation}
                    className="w-full"
                    variant="default"
                  >
                    {currentContent.cta}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: '800ms' }}>
          <p className="text-muted-foreground mb-4">
            {currentLanguage === 'fr' && "Votre secteur n'est pas listé ? Nous créons des solutions sur mesure."}
            {currentLanguage === 'en' && "Your industry not listed? We create custom solutions."}
            {currentLanguage === 'es' && "¿Tu sector no está listado? Creamos soluciones personalizadas."}
            {currentLanguage === 'pt' && "Seu setor não está listado? Criamos soluções personalizadas."}
          </p>
          <Button 
            onClick={handleConsultation}
            size="lg"
            variant="outline"
          >
            {currentLanguage === 'fr' && "Discuter de Mon Cas Spécifique"}
            {currentLanguage === 'en' && "Discuss My Specific Case"}
            {currentLanguage === 'es' && "Discutir Mi Caso Específico"}
            {currentLanguage === 'pt' && "Discutir Meu Caso Específico"}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default IndustrySolutions;
