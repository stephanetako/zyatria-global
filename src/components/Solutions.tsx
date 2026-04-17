import React from 'react';
import { Card } from './ui/card';
import { ArrowRight, Target, Zap, Building, Briefcase, Smartphone } from 'lucide-react';
import { Button } from './ui/button';

interface SolutionsProps {
  lang?: string;
}

const Solutions: React.FC<SolutionsProps> = ({ lang = 'en' }) => {
  const content: Record<string, any> = {
    en: {
      badge: 'Industry Solutions',
      title: 'Built For Your Industry, Not Generic Software',
      subtitle: 'Real solutions for real challenges in your sector',
      solutions: [
        {
          icon: ShoppingCart,
          title: 'E-commerce & Retail',
          subtitle: 'Turn Browsers Into Buyers',
          challenge: 'Losing sales to cart abandonment and slow customer service?',
          solution: 'Recover 30% of abandoned carts with instant follow-ups. Answer product questions 24/7. Automate order tracking and shipping notifications.',
          results: [
            '↑ 30% cart recovery rate',
            '↓ 80% response time',
            '↑ 42% customer satisfaction',
            '24/7 multilingual support'
          ]
        },
        {
          icon: Building,
          title: 'Real Estate',
          subtitle: 'Convert More Property Inquiries',
          challenge: 'Can\'t respond fast enough to property inquiries and losing deals?',
          solution: 'Instant responses to listing questions. Auto-schedule property visits. Qualify serious buyers before your first call. Never miss a hot lead again.',
          results: [
            '↑ 65% lead response speed',
            '↑ 38% qualified appointments',
            '↓ 50% time on admin work',
            'Track every property inquiry'
          ]
        },
        {
          icon: GraduationCap,
          title: 'Coaching & Consulting',
          subtitle: 'Scale Your Expertise Without Burnout',
          challenge: 'Trading time for money and can\'t scale your impact?',
          solution: 'Automate client onboarding. Send personalized follow-ups. Schedule sessions automatically. Focus on coaching, not admin work.',
          results: [
            '↑ 3x more clients without hiring',
            '↓ 70% admin time',
            '↑ 100% on-time payments',
            'Automated client journey'
          ]
        },
        {
          icon: Briefcase,
          title: 'Professional Services',
          subtitle: 'Win More Deals, Waste Less Time',
          challenge: 'Spending more time on proposals than delivering value?',
          solution: 'Auto-qualify leads. Generate proposals faster. Automate follow-ups and contract reminders. Close deals while you sleep.',
          results: [
            '↑ 45% proposal win rate',
            '↓ 60% time on proposals',
            '↑ 55% client retention',
            'Automated contract renewals'
          ]
        },
        {
          icon: Smartphone,
          title: 'SaaS & Tech',
          subtitle: 'Grow Users, Reduce Churn',
          challenge: 'Users signing up but not sticking around?',
          solution: 'Personalized onboarding sequences. Proactive churn prevention. Automated upsell campaigns. Support tickets resolved faster.',
          results: [
            '↓ 40% churn rate',
            '↑ 85% onboarding completion',
            '↑ 32% upgrade conversions',
            '24/7 first-line support'
          ]
        },
        {
          icon: Heart,
          title: 'Healthcare & Wellness',
          subtitle: 'Better Patient Care, Less Paperwork',
          challenge: 'Staff overwhelmed with booking and admin tasks?',
          solution: 'Automated appointment booking and reminders. Insurance verification. Follow-up care messages. HIPAA-compliant communication.',
          results: [
            '↓ 45% no-show rate',
            '↑ 60% booking efficiency',
            '↓ 70% admin workload',
            'HIPAA compliant automation'
          ]
        }
      ],
      cta: {
        title: 'Don\'t See Your Industry?',
        description: 'We customize solutions for any business. Let\'s talk about your specific challenges.',
        button: 'Schedule a Free Consultation'
      }
    },
    fr: {
      badge: 'Solutions Par Secteur',
      title: 'Conçu Pour Votre Industrie, Pas un Logiciel Générique',
      subtitle: 'Solutions réelles pour défis réels dans votre secteur',
      solutions: [
        {
          icon: ShoppingCart,
          title: 'E-commerce & Retail',
          subtitle: 'Transformez les Visiteurs en Acheteurs',
          challenge: 'Vous perdez des ventes à cause des paniers abandonnés et du service client lent ?',
          solution: 'Récupérez 30% des paniers abandonnés avec des relances instantanées. Répondez aux questions produits 24/7. Automatisez le suivi des commandes et les notifications d\'expédition.',
          results: [
            '↑ 30% taux de récupération panier',
            '↓ 80% temps de réponse',
            '↑ 42% satisfaction client',
            'Support multilingue 24/7'
          ]
        },
        {
          icon: Building,
          title: 'Immobilier',
          subtitle: 'Convertissez Plus de Demandes Immobilières',
          challenge: 'Impossible de répondre assez vite aux demandes et vous perdez des affaires ?',
          solution: 'Réponses instantanées aux questions sur les biens. Auto-planification des visites. Qualification des acheteurs sérieux avant votre premier appel. Ne ratez plus jamais un lead chaud.',
          results: [
            '↑ 65% vitesse de réponse aux leads',
            '↑ 38% rendez-vous qualifiés',
            '↓ 50% temps sur tâches admin',
            'Suivez chaque demande immobilière'
          ]
        },
        {
          icon: GraduationCap,
          title: 'Coaching & Consulting',
          subtitle: 'Développez Votre Expertise Sans Burn-out',
          challenge: 'Vous échangez temps contre argent et ne pouvez pas scaler votre impact ?',
          solution: 'Automatisez l\'onboarding clients. Envoyez des relances personnalisées. Planifiez les sessions automatiquement. Concentrez-vous sur le coaching, pas l\'admin.',
          results: [
            '↑ 3x plus de clients sans embaucher',
            '↓ 70% temps admin',
            '↑ 100% paiements à temps',
            'Parcours client automatisé'
          ]
        },
        {
          icon: Briefcase,
          title: 'Services Professionnels',
          subtitle: 'Gagnez Plus d\'Affaires, Perdez Moins de Temps',
          challenge: 'Vous passez plus de temps sur les propositions que sur la livraison de valeur ?',
          solution: 'Auto-qualification des leads. Génération de propositions plus rapide. Automatisation des relances et rappels de contrats. Concluez des affaires pendant que vous dormez.',
          results: [
            '↑ 45% taux de gain de propositions',
            '↓ 60% temps sur propositions',
            '↑ 55% rétention client',
            'Renouvellements de contrats automatisés'
          ]
        },
        {
          icon: Smartphone,
          title: 'SaaS & Tech',
          subtitle: 'Faites Croître les Utilisateurs, Réduisez le Churn',
          challenge: 'Les utilisateurs s\'inscrivent mais ne restent pas ?',
          solution: 'Séquences d\'onboarding personnalisées. Prévention proactive du churn. Campagnes d\'upsell automatisées. Tickets de support résolus plus vite.',
          results: [
            '↓ 40% taux de churn',
            '↑ 85% complétion onboarding',
            '↑ 32% conversions upgrade',
            'Support première ligne 24/7'
          ]
        },
        {
          icon: Heart,
          title: 'Santé & Bien-être',
          subtitle: 'Meilleurs Soins, Moins de Paperasse',
          challenge: 'Personnel submergé par les réservations et tâches admin ?',
          solution: 'Réservation et rappels de rendez-vous automatisés. Vérification d\'assurance. Messages de suivi de soins. Communication conforme HIPAA.',
          results: [
            '↓ 45% taux d\'absence',
            '↑ 60% efficacité de réservation',
            '↓ 70% charge admin',
            'Automatisation conforme HIPAA'
          ]
        }
      ],
      cta: {
        title: 'Vous Ne Voyez Pas Votre Secteur ?',
        description: 'Nous personnalisons des solutions pour toute entreprise. Parlons de vos défis spécifiques.',
        button: 'Planifier Une Consultation Gratuite'
      }
    },
    es: {
      badge: 'Soluciones Por Industria',
      title: 'Construido Para Su Industria, No Software Genérico',
      subtitle: 'Soluciones reales para desafíos reales en su sector',
      solutions: [
        {
          icon: ShoppingCart,
          title: 'E-commerce & Retail',
          subtitle: 'Convierta Visitantes en Compradores',
          challenge: '¿Perdiendo ventas por carritos abandonados y servicio lento?',
          solution: 'Recupere el 30% de carritos abandonados con seguimientos instantáneos. Responda preguntas de productos 24/7. Automatice seguimiento de pedidos y notificaciones de envío.',
          results: [
            '↑ 30% tasa de recuperación de carritos',
            '↓ 80% tiempo de respuesta',
            '↑ 42% satisfacción del cliente',
            'Soporte multilingüe 24/7'
          ]
        },
        {
          icon: Building,
          title: 'Inmobiliaria',
          subtitle: 'Convierta Más Consultas de Propiedades',
          challenge: '¿No puede responder lo suficientemente rápido y pierde negocios?',
          solution: 'Respuestas instantáneas a preguntas sobre propiedades. Auto-programación de visitas. Califique compradores serios antes de su primera llamada. Nunca más pierda un lead caliente.',
          results: [
            '↑ 65% velocidad de respuesta a leads',
            '↑ 38% citas calificadas',
            '↓ 50% tiempo en tareas admin',
            'Rastree cada consulta inmobiliaria'
          ]
        },
        {
          icon: GraduationCap,
          title: 'Coaching & Consultoría',
          subtitle: 'Escale Su Experiencia Sin Agotarse',
          challenge: '¿Intercambiando tiempo por dinero y no puede escalar su impacto?',
          solution: 'Automatice la incorporación de clientes. Envíe seguimientos personalizados. Programe sesiones automáticamente. Enfóquese en coaching, no en admin.',
          results: [
            '↑ 3x más clientes sin contratar',
            '↓ 70% tiempo admin',
            '↑ 100% pagos a tiempo',
            'Viaje del cliente automatizado'
          ]
        },
        {
          icon: Briefcase,
          title: 'Servicios Profesionales',
          subtitle: 'Gane Más Negocios, Pierda Menos Tiempo',
          challenge: '¿Gastando más tiempo en propuestas que entregando valor?',
          solution: 'Auto-califique leads. Genere propuestas más rápido. Automatice seguimiento y recordatorios de contratos. Cierre negocios mientras duerme.',
          results: [
            '↑ 45% tasa de ganancia de propuestas',
            '↓ 60% tiempo en propuestas',
            '↑ 55% retención de clientes',
            'Renovaciones de contratos automatizadas'
          ]
        },
        {
          icon: Smartphone,
          title: 'SaaS & Tech',
          subtitle: 'Crezca Usuarios, Reduzca Churn',
          challenge: '¿Usuarios registrándose pero no permaneciendo?',
          solution: 'Secuencias de incorporación personalizadas. Prevención proactiva de churn. Campañas de upsell automatizadas. Tickets de soporte resueltos más rápido.',
          results: [
            '↓ 40% tasa de churn',
            '↑ 85% completación de incorporación',
            '↑ 32% conversiones de upgrade',
            'Soporte de primera línea 24/7'
          ]
        },
        {
          icon: Heart,
          title: 'Salud & Bienestar',
          subtitle: 'Mejor Atención, Menos Papeleo',
          challenge: '¿Personal abrumado con reservas y tareas admin?',
          solution: 'Reserva de citas y recordatorios automatizados. Verificación de seguros. Mensajes de seguimiento de atención. Comunicación conforme HIPAA.',
          results: [
            '↓ 45% tasa de ausencia',
            '↑ 60% eficiencia de reservas',
            '↓ 70% carga admin',
            'Automatización conforme HIPAA'
          ]
        }
      ],
      cta: {
        title: '¿No Ve Su Industria?',
        description: 'Personalizamos soluciones para cualquier negocio. Hablemos de sus desafíos específicos.',
        button: 'Programar Una Consulta Gratuita'
      }
    },
    pt: {
      badge: 'Soluções Por Indústria',
      title: 'Construído Para Sua Indústria, Não Software Genérico',
      subtitle: 'Soluções reais para desafios reais no seu setor',
      solutions: [
        {
          icon: ShoppingCart,
          title: 'E-commerce & Varejo',
          subtitle: 'Transforme Visitantes em Compradores',
          challenge: 'Perdendo vendas por carrinhos abandonados e atendimento lento?',
          solution: 'Recupere 30% dos carrinhos abandonados com follow-ups instantâneos. Responda perguntas de produtos 24/7. Automatize rastreamento de pedidos e notificações de envio.',
          results: [
            '↑ 30% taxa de recuperação de carrinho',
            '↓ 80% tempo de resposta',
            '↑ 42% satisfação do cliente',
            'Suporte multilíngue 24/7'
          ]
        },
        {
          icon: Building,
          title: 'Imobiliário',
          subtitle: 'Converta Mais Consultas de Imóveis',
          challenge: 'Não consegue responder rápido o suficiente e perde negócios?',
          solution: 'Respostas instantâneas a perguntas sobre imóveis. Auto-agendamento de visitas. Qualifique compradores sérios antes da primeira chamada. Nunca mais perca um lead quente.',
          results: [
            '↑ 65% velocidade de resposta a leads',
            '↑ 38% agendamentos qualificados',
            '↓ 50% tempo em tarefas admin',
            'Rastreie cada consulta imobiliária'
          ]
        },
        {
          icon: GraduationCap,
          title: 'Coaching & Consultoria',
          subtitle: 'Escale Sua Expertise Sem Esgotamento',
          challenge: 'Trocando tempo por dinheiro e não consegue escalar seu impacto?',
          solution: 'Automatize onboarding de clientes. Envie follow-ups personalizados. Agende sessões automaticamente. Foque em coaching, não em admin.',
          results: [
            '↑ 3x mais clientes sem contratar',
            '↓ 70% tempo admin',
            '↑ 100% pagamentos em dia',
            'Jornada do cliente automatizada'
          ]
        },
        {
          icon: Briefcase,
          title: 'Serviços Profissionais',
          subtitle: 'Ganhe Mais Negócios, Perca Menos Tempo',
          challenge: 'Gastando mais tempo em propostas do que entregando valor?',
          solution: 'Auto-qualifique leads. Gere propostas mais rápido. Automatize follow-ups e lembretes de contratos. Feche negócios enquanto você dorme.',
          results: [
            '↑ 45% taxa de ganho de propostas',
            '↓ 60% tempo em propostas',
            '↑ 55% retenção de clientes',
            'Renovações de contratos automatizadas'
          ]
        },
        {
          icon: Smartphone,
          title: 'SaaS & Tech',
          subtitle: 'Cresça Usuários, Reduza Churn',
          challenge: 'Usuários se cadastrando mas não ficando?',
          solution: 'Sequências de onboarding personalizadas. Prevenção proativa de churn. Campanhas de upsell automatizadas. Tickets de suporte resolvidos mais rápido.',
          results: [
            '↓ 40% taxa de churn',
            '↑ 85% completação de onboarding',
            '↑ 32% conversões de upgrade',
            'Suporte de primeira linha 24/7'
          ]
        },
        {
          icon: Heart,
          title: 'Saúde & Bem-estar',
          subtitle: 'Melhor Cuidado, Menos Papelada',
          challenge: 'Equipe sobrecarregada com reservas e tarefas admin?',
          solution: 'Reserva de consultas e lembretes automatizados. Verificação de seguros. Mensagens de acompanhamento de cuidados. Comunicação conforme HIPAA.',
          results: [
            '↓ 45% taxa de ausência',
            '↑ 60% eficiencia de reservas',
            '↓ 70% carga admin',
            'Automação conforme HIPAA'
          ]
        }
      ],
      cta: {
        title: 'Não Vê Sua Indústria?',
        description: 'Personalizamos soluções para qualquer negócio. Vamos conversar sobre seus desafíos específicos.',
        button: 'Agendar Uma Consulta Gratuita'
      }
    }
  };

  const t = content[lang];

  return (
    <section id="solutions" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full mb-4">
            <span className="text-sm font-semibold text-blue-600">{t.badge}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            {t.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.description}
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.solutions.map((solution: any, index: number) => {
            const Icon = solution.icon;
            return (
              <Card key={index} className="group relative overflow-hidden hover:shadow-xl hover:shadow-blue-600/10 transition-all duration-300 border-2 hover:border-blue-400/40">
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${solution.color}`}></div>
                
                <div className="p-6">
                  <div className={`w-14 h-14 bg-gradient-to-br ${solution.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 font-heading">{solution.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{solution.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {solution.features.map((feature: string, fIndex: number) => (
                      <li key={fIndex} className="flex items-start gap-2 text-sm">
                        <div className={`w-1.5 h-1.5 bg-gradient-to-r ${solution.color} rounded-full mt-2 flex-shrink-0`}></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button variant="ghost" className="w-full group-hover:bg-blue-500/10 transition">
                    {t.cta}
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Solutions;





