import React from 'react';
import { ShoppingBag, Building2, HeartHandshake, ArrowRight, TrendingUp, Clock, Users, DollarSign } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { baseUrl } from '../lib/base-url';
import { useLanguage } from '../lib/language-context';

const translations = {
  en: {
    badge: "Success Stories",
    title: "They transformed their business with AI",
    subtitle: "Real results from real companies across multiple industries",
    cta: "Your industry not listed?",
    ctaButton: "Let's talk about your project",
    cases: [
      {
        icon: ShoppingBag,
        sector: "E-commerce",
        location: "Montreal, Canada 🇨🇦",
        client: "Boutique Mode Québec",
        size: "15 employees, €2M revenue",
        problem: "Our support team was overwhelmed: 200+ emails/day in French and English, 8-12h response time, dissatisfied customers. Impossible to hire more without exploding costs.",
        solution: "AI Customer Support Micro-Agent + AI E-commerce Micro-Agent",
        deployment: "12 days",
        languages: "FR/EN (bilingual Quebec)",
        integrations: "Shopify, Gmail, Slack",
        results: [
          { icon: TrendingUp, stat: "+42%", label: "Customer satisfaction (3.8 → 4.7/5)" },
          { icon: Clock, stat: "8h → 2min", label: "Response time" },
          { icon: Users, stat: "-70%", label: "Support workload (freed 2 FTE)" }
        ],
        additionalResults: [
          "+18% conversions (AI recommendations)",
          "-35% cart abandonment"
        ],
        testimonial: "The AI agent perfectly understands Quebec French AND English. Our customers are thrilled, and our team can finally focus on strategy rather than repetitive emails.",
        author: "Sophie Tremblay",
        role: "E-commerce Director"
      },
      {
        icon: Building2,
        sector: "Real Estate",
        location: "Paris, France 🇫🇷",
        client: "PropTech Solutions",
        size: "Startup 8 people, €500K revenue",
        problem: "Too many unqualified prospects: 80% of sales time wasted on cold leads. Impossible to scale without hiring 5 additional salespeople (prohibitive cost for a startup).",
        solution: "AI Lead Qualification Micro-Agent",
        deployment: "10 days",
        languages: "French",
        integrations: "HubSpot CRM, website, WhatsApp Business",
        results: [
          { icon: TrendingUp, stat: "x3", label: "Qualified prospects per day (5 → 15)" },
          { icon: Clock, stat: "+38%", label: "Conversion rate (lead → visit)" },
          { icon: Users, stat: "-80%", label: "Manual qualification time" }
        ],
        additionalResults: [
          "Positive ROI from month 2",
          "+60% appointments booked automatically"
        ],
        testimonial: "The AI agent asks the right questions, detects serious prospects and books visits directly in our calendars. Total game-changer.",
        author: "Marc Dubois",
        role: "CEO & Founder"
      },
      {
        icon: HeartHandshake,
        sector: "Coaching",
        location: "Brussels, Belgium 🇧🇪",
        client: "BeCoach International",
        size: "12 coaches, €800K revenue",
        problem: "Our coaches spent 60% of their time on client administrative follow-up: reminders, sending exercises, answering questions... Instead of coaching. Scalability limit reached.",
        solution: "AI HR/Coaching Assistant Micro-Agent",
        deployment: "15 days",
        languages: "FR/EN (international clients)",
        integrations: "Notion, Calendly, Stripe, email",
        results: [
          { icon: TrendingUp, stat: "x3", label: "Capacity (clients per coach: 15 → 45)" },
          { icon: Clock, stat: "+73%", label: "Client engagement (completed exercises)" },
          { icon: Users, stat: "-60%", label: "Admin time for coaches" }
        ],
        additionalResults: [
          "+€120K additional revenue (same team)",
          "+55% client satisfaction (daily AI follow-up)"
        ],
        testimonial: "The AI agent sends exercises, motivates clients every day, and alerts the coach if needed. We can finally scale without hiring.",
        author: "Laura Van der Berg",
        role: "Operations Director"
      }
    ]
  },
  fr: {
    badge: "Études de Cas",
    title: "Ils ont transformé leur business avec l'IA",
    subtitle: "Des résultats concrets d'entreprises réelles dans plusieurs secteurs",
    cta: "Votre secteur n'est pas listé ?",
    ctaButton: "Parlons de votre projet",
    cases: [
      {
        icon: ShoppingBag,
        sector: "E-commerce",
        location: "Montréal, Canada 🇨🇦",
        client: "Boutique Mode Québec",
        size: "15 employés, 2M€ CA",
        problem: "Notre équipe support était débordée : 200+ emails/jour en français et anglais, temps de réponse de 8-12h, clients insatisfaits. Impossible de recruter plus sans exploser les coûts.",
        solution: "Micro-Agent Support Client IA + Micro-Agent E-commerce IA",
        deployment: "12 jours",
        languages: "FR/EN (bilingue Québec)",
        integrations: "Shopify, Gmail, Slack",
        results: [
          { icon: TrendingUp, stat: "+42%", label: "Satisfaction client (3.8 → 4.7/5)" },
          { icon: Clock, stat: "8h → 2min", label: "Temps de réponse" },
          { icon: Users, stat: "-70%", label: "Charge support (libéré 2 ETP)" }
        ],
        additionalResults: [
          "+18% conversions (recommandations IA)",
          "-35% abandons de panier"
        ],
        testimonial: "L'agent IA comprend parfaitement le français québécois ET l'anglais. Nos clients sont ravis, et notre équipe peut enfin se concentrer sur la stratégie plutôt que sur les emails répétitifs.",
        author: "Sophie Tremblay",
        role: "Directrice E-commerce"
      },
      {
        icon: Building2,
        sector: "Immobilier",
        location: "Paris, France 🇫🇷",
        client: "PropTech Solutions",
        size: "Startup 8 personnes, 500K€ CA",
        problem: "Trop de prospects non qualifiés : 80% du temps commercial perdu sur des leads froids. Impossible de scaler sans recruter 5 commerciaux supplémentaires (coût prohibitif pour une startup).",
        solution: "Micro-Agent Qualification de Prospects IA",
        deployment: "10 jours",
        languages: "Français",
        integrations: "HubSpot CRM, site web, WhatsApp Business",
        results: [
          { icon: TrendingUp, stat: "x3", label: "Prospects qualifiés par jour (5 → 15)" },
          { icon: Clock, stat: "+38%", label: "Taux de conversion (lead → visite)" },
          { icon: Users, stat: "-80%", label: "Temps de qualification manuelle" }
        ],
        additionalResults: [
          "ROI positif dès le 2ème mois",
          "+60% rendez-vous bookés automatiquement"
        ],
        testimonial: "L'agent IA pose les bonnes questions, détecte les prospects sérieux et book les visites directement dans nos agendas. Game-changer total.",
        author: "Marc Dubois",
        role: "CEO & Fondateur"
      },
      {
        icon: HeartHandshake,
        sector: "Coaching",
        location: "Bruxelles, Belgique 🇧🇪",
        client: "BeCoach International",
        size: "12 coachs, 800K€ CA",
        problem: "Nos coachs passaient 60% de leur temps sur le suivi administratif des clients : rappels, envoi d'exercices, réponses aux questions... Au lieu de coacher. Limite de scalabilité atteinte.",
        solution: "Micro-Agent Assistant RH/Coaching IA",
        deployment: "15 jours",
        languages: "FR/EN (clients internationaux)",
        integrations: "Notion, Calendly, Stripe, email",
        results: [
          { icon: TrendingUp, stat: "x3", label: "Capacité (clients suivis par coach: 15 → 45)" },
          { icon: Clock, stat: "+73%", label: "Engagement clients (exercices complétés)" },
          { icon: Users, stat: "-60%", label: "Temps admin pour les coachs" }
        ],
        additionalResults: [
          "+120K€ CA additionnel (même équipe)",
          "+55% satisfaction clients (suivi quotidien IA)"
        ],
        testimonial: "L'agent IA envoie les exercices, motive les clients tous les jours, et alerte le coach si besoin. On peut enfin scaler sans recruter.",
        author: "Laura Van der Berg",
        role: "Directrice des Opérations"
      }
    ]
  },
  es: {
    badge: "Casos de Éxito",
    title: "Transformaron su negocio con IA",
    subtitle: "Resultados reales de empresas reales en múltiples industrias",
    cta: "¿Su industria no está en la lista?",
    ctaButton: "Hablemos de su proyecto",
    cases: [
      {
        icon: ShoppingBag,
        sector: "E-commerce",
        location: "Montreal, Canadá 🇨🇦",
        client: "Boutique Mode Québec",
        size: "15 empleados, €2M ingresos",
        problem: "Nuestro equipo de soporte estaba abrumado: 200+ emails/día en francés e inglés, tiempo de respuesta de 8-12h, clientes insatisfechos. Imposible contratar más sin explotar los costos.",
        solution: "Micro-Agente de Soporte al Cliente IA + Micro-Agente E-commerce IA",
        deployment: "12 días",
        languages: "FR/EN (bilingüe Quebec)",
        integrations: "Shopify, Gmail, Slack",
        results: [
          { icon: TrendingUp, stat: "+42%", label: "Satisfacción del cliente (3.8 → 4.7/5)" },
          { icon: Clock, stat: "8h → 2min", label: "Tiempo de respuesta" },
          { icon: Users, stat: "-70%", label: "Carga de soporte (liberado 2 ETP)" }
        ],
        additionalResults: [
          "+18% conversiones (recomendaciones IA)",
          "-35% abandono de carrito"
        ],
        testimonial: "El agente IA comprende perfectamente el francés québécois Y el inglés. Nuestros clientes están encantados, y nuestro equipo finalmente puede concentrarse en la estrategia en lugar de emails repetitivos.",
        author: "Sophie Tremblay",
        role: "Directora de E-commerce"
      },
      {
        icon: Building2,
        sector: "Inmobiliario",
        location: "París, Francia 🇫🇷",
        client: "PropTech Solutions",
        size: "Startup 8 personas, €500K ingresos",
        problem: "Demasiados prospectos no calificados: 80% del tiempo de ventas perdido en leads fríos. Imposible escalar sin contratar 5 vendedores adicionales (costo prohibitivo para una startup).",
        solution: "Micro-Agente de Calificación de Leads IA",
        deployment: "10 días",
        languages: "Francés",
        integrations: "HubSpot CRM, sitio web, WhatsApp Business",
        results: [
          { icon: TrendingUp, stat: "x3", label: "Prospectos calificados por día (5 → 15)" },
          { icon: Clock, stat: "+38%", label: "Tasa de conversión (lead → visita)" },
          { icon: Users, stat: "-80%", label: "Tiempo de calificación manual" }
        ],
        additionalResults: [
          "ROI positivo desde el mes 2",
          "+60% citas reservadas automáticamente"
        ],
        testimonial: "El agente IA hace las preguntas correctas, detecta prospectos serios y reserva visitas directamente en nuestros calendarios. Cambio total del juego.",
        author: "Marc Dubois",
        role: "CEO y Fundador"
      },
      {
        icon: HeartHandshake,
        sector: "Coaching",
        location: "Bruselas, Bélgica 🇧🇪",
        client: "BeCoach International",
        size: "12 coaches, €800K ingresos",
        problem: "Nuestros coaches pasaban 60% de su tiempo en seguimiento administrativo de clientes: recordatorios, envío de ejercicios, responder preguntas... En lugar de hacer coaching. Límite de escalabilidad alcanzado.",
        solution: "Micro-Agente Asistente de RH/Coaching IA",
        deployment: "15 días",
        languages: "FR/EN (clientes internacionales)",
        integrations: "Notion, Calendly, Stripe, email",
        results: [
          { icon: TrendingUp, stat: "x3", label: "Capacidad (clientes por coach: 15 → 45)" },
          { icon: Clock, stat: "+73%", label: "Compromiso de clientes (ejercicios completados)" },
          { icon: Users, stat: "-60%", label: "Tiempo administrativo para coaches" }
        ],
        additionalResults: [
          "+€120K ingresos adicionales (mismo equipo)",
          "+55% satisfacción de clientes (seguimiento diario IA)"
        ],
        testimonial: "El agente IA envía ejercicios, motiva a los clientes todos los días y alerta al coach si es necesario. Finalmente podemos escalar sin contratar.",
        author: "Laura Van der Berg",
        role: "Directora de Operaciones"
      }
    ]
  },
  pt: {
    badge: "Casos de Sucesso",
    title: "Eles transformaram seus negócios com IA",
    subtitle: "Resultados reais de empresas reais em múltiplos setores",
    cta: "Seu setor não está listado?",
    ctaButton: "Vamos falar sobre seu projeto",
    cases: [
      {
        icon: ShoppingBag,
        sector: "E-commerce",
        location: "Montreal, Canadá 🇨🇦",
        client: "Boutique Mode Québec",
        size: "15 funcionários, €2M receita",
        problem: "Nossa equipe de suporte estava sobrecarregada: 200+ emails/dia em francês e inglês, tempo de resposta de 8-12h, clientes insatisfeitos. Impossível contratar mais sem explodir os custos.",
        solution: "Micro-Agente de Suporte ao Cliente IA + Micro-Agente E-commerce IA",
        deployment: "12 dias",
        languages: "FR/EN (bilíngue Quebec)",
        integrations: "Shopify, Gmail, Slack",
        results: [
          { icon: TrendingUp, stat: "+42%", label: "Satisfação do cliente (3.8 → 4.7/5)" },
          { icon: Clock, stat: "8h → 2min", label: "Tempo de resposta" },
          { icon: Users, stat: "-70%", label: "Carga de suporte (liberado 2 FTE)" }
        ],
        additionalResults: [
          "+18% conversões (recomendações IA)",
          "-35% abandono de carrinho"
        ],
        testimonial: "O agente IA entende perfeitamente o francês québécois E o inglês. Nossos clientes estão encantados, e nossa equipe finalmente pode se concentrar na estratégia em vez de emails repetitivos.",
        author: "Sophie Tremblay",
        role: "Diretora de E-commerce"
      },
      {
        icon: Building2,
        sector: "Imobiliário",
        location: "Paris, França 🇫🇷",
        client: "PropTech Solutions",
        size: "Startup 8 pessoas, €500K receita",
        problem: "Muitos prospects não qualificados: 80% do tempo de vendas perdido em leads frios. Impossível escalar sem contratar 5 vendedores adicionais (custo proibitivo para uma startup).",
        solution: "Micro-Agente de Qualificação de Leads IA",
        deployment: "10 dias",
        languages: "Francês",
        integrations: "HubSpot CRM, site, WhatsApp Business",
        results: [
          { icon: TrendingUp, stat: "x3", label: "Prospects qualificados por dia (5 → 15)" },
          { icon: Clock, stat: "+38%", label: "Taxa de conversão (lead → visita)" },
          { icon: Users, stat: "-80%", label: "Tempo de qualificação manual" }
        ],
        additionalResults: [
          "ROI positivo a partir do mês 2",
          "+60% reuniões agendadas automaticamente"
        ],
        testimonial: "O agente IA faz as perguntas certas, detecta prospects sérios e agenda visitas diretamente em nossas agendas. Mudança total de jogo.",
        author: "Marc Dubois",
        role: "CEO e Fundador"
      },
      {
        icon: HeartHandshake,
        sector: "Coaching",
        location: "Bruxelas, Bélgica 🇧🇪",
        client: "BeCoach International",
        size: "12 coaches, €800K receita",
        problem: "Nossos coaches passavam 60% do tempo no acompanhamento administrativo de clientes: lembretes, envio de exercícios, respostas a perguntas... Em vez de fazer coaching. Limite de escalabilidade atingido.",
        solution: "Micro-Agente Assistente de RH/Coaching IA",
        deployment: "15 dias",
        languages: "FR/EN (clientes internacionais)",
        integrations: "Notion, Calendly, Stripe, email",
        results: [
          { icon: TrendingUp, stat: "x3", label: "Capacidade (clientes por coach: 15 → 45)" },
          { icon: Clock, stat: "+73%", label: "Engajamento de clientes (exercícios concluídos)" },
          { icon: Users, stat: "-60%", label: "Tempo administrativo para coaches" }
        ],
        additionalResults: [
          "+€120K receita adicional (mesma equipe)",
          "+55% satisfação dos clientes (acompanhamento diário IA)"
        ],
        testimonial: "O agente IA envia exercícios, motiva os clientes todos os dias e alerta o coach se necessário. Finalmente podemos escalar sem contratar.",
        author: "Laura Van der Berg",
        role: "Diretora de Operações"
      }
    ]
  }
};

export default function CaseStudies() {
  const t = translations.en;

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="case-studies" className="py-20 md:py-32 bg-background">
      <div className="container">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-2 rounded-full bg-sky-500/10 text-sky-600 text-sm font-medium animate-fade-in-up border border-sky-400/30">
            {t.badge}
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold animate-fade-in-up delay-200">
            {t.title}
          </h2>
          
          <p className="text-xl text-muted-foreground animate-fade-in-up delay-300">
            {t.subtitle}
          </p>
        </div>

        {/* Case Studies */}
        <div className="space-y-12">
          {t.cases.map((caseStudy, index) => {
            const Icon = caseStudy.icon;
            return (
              <div
                key={index}
                className="p-8 md:p-12 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-sky-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/5 animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-sky-500/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-8 h-8 text-sky-600" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-2xl font-bold">{caseStudy.sector}</h3>
                      <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium">
                        {caseStudy.location}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {caseStudy.client} • {caseStudy.size}
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Left Column */}
                  <div className="space-y-6">
                    {/* Problem */}
                    <div>
                      <h4 className="text-sm font-semibold text-sky-600 mb-2">❌ PROBLEM</h4>
                      <p className="text-muted-foreground italic">"{caseStudy.problem}"</p>
                    </div>

                    {/* Solution */}
                    <div>
                      <h4 className="text-sm font-semibold text-sky-600 mb-2">✅ SOLUTION</h4>
                      <p className="font-semibold mb-2">{caseStudy.solution}</p>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>• Deployment: {caseStudy.deployment}</p>
                        <p>• Languages: {caseStudy.languages}</p>
                        <p>• Integrations: {caseStudy.integrations}</p>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Results */}
                  <div className="space-y-6">
                    {/* Main Results */}
                    <div>
                      <h4 className="text-sm font-semibold text-sky-600 mb-4">📈 RESULTS</h4>
                      <div className="space-y-3">
                        {caseStudy.results.map((result, i) => {
                          const ResultIcon = result.icon;
                          return (
                            <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                              <ResultIcon className="w-5 h-5 text-sky-600 flex-shrink-0" />
                              <div>
                                <div className="font-bold text-sky-600">{result.stat}</div>
                                <div className="text-sm text-muted-foreground">{result.label}</div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Additional Results */}
                    <div className="space-y-2">
                      {caseStudy.additionalResults.map((result, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm">
                          <span className="text-sky-600 mt-0.5">✓</span>
                          <span className="text-muted-foreground">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Testimonial */}
                <div className="mt-8 p-6 rounded-xl bg-sky-500/5 border-l-4 border-sky-500">
                  <p className="text-foreground italic mb-3">"{caseStudy.testimonial}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-sky-500/20 flex items-center justify-center text-sky-600 font-bold">
                      {caseStudy.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-semibold">{caseStudy.author}</div>
                      <div className="text-sm text-muted-foreground">{caseStudy.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center space-y-4 animate-fade-in-up delay-1000">
          <p className="text-xl text-muted-foreground">{t.cta}</p>
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-violet-700 transition-all shadow-lg shadow-blue-600/30 hover:shadow-xl hover:scale-105"
          >
            {t.ctaButton}
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}







