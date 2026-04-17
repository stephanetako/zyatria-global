





import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Sparkles, Zap, Globe2 } from 'lucide-react';
import { baseUrl } from '../lib/base-url';

const translations = {
  en: {
    badge: "Global AI Agency",
    canadianBadge: "🇨🇦 Canadian Company from Quebec",
    title: {
      line1: "Transform Your Business",
      line2: "With Intelligent Automation",
      highlight: "In Days, Not Months"
    },
    subtitle: "Specialized solutions that work 24/7 to grow your business. Deploy in 10-15 days. Results from day one.",
    cta: {
      primary: "See How It Works",
      secondary: "Book a Free Demo"
    },
    payNow: "Already convinced? Start now",
    stats: [
      { value: "50+", label: "Growing Companies" },
      { value: "10-15", label: "Days to Launch" },
      { value: "+42%", label: "Customer Satisfaction" },
      { value: "24/7", label: "Always Available" }
    ]
  },
  fr: {
    badge: "Agence IA Internationale",
    canadianBadge: "🇨🇦 Entreprise Canadienne du Québec",
    title: {
      line1: "Transformez Votre Entreprise",
      line2: "Avec L'Automatisation Intelligente",
      highlight: "En Jours, Pas En Mois"
    },
    subtitle: "Des solutions spécialisées qui travaillent 24/7 pour faire grandir votre entreprise. Déploiement en 10-15 jours. Résultats dès le premier jour.",
    cta: {
      primary: "Voir Comment Ça Marche",
      secondary: "Réserver Une Démo Gratuite"
    },
    payNow: "Déjà convaincu ? Commencer maintenant",
    stats: [
      { value: "50+", label: "Entreprises En Croissance" },
      { value: "10-15", label: "Jours Pour Lancer" },
      { value: "+42%", label: "Satisfaction Client" },
      { value: "24/7", label: "Toujours Disponible" }
    ]
  },
  es: {
    badge: "Agencia IA Internacional",
    canadianBadge: "🇨🇦 Empresa Canadiense de Quebec",
    title: {
      line1: "Transforme Su Negocio",
      line2: "Con Automatización Inteligente",
      highlight: "En Días, No En Meses"
    },
    subtitle: "Soluciones especializadas que trabajan 24/7 para hacer crecer su negocio. Implementación en 10-15 días. Resultados desde el primer día.",
    cta: {
      primary: "Ver Cómo Funciona",
      secondary: "Reservar Una Demo Gratuita"
    },
    payNow: "¿Ya convencido? Empezar ahora",
    stats: [
      { value: "50+", label: "Empresas En Crecimiento" },
      { value: "10-15", label: "Días Para Lanzar" },
      { value: "+42%", label: "Satisfacción Del Cliente" },
      { value: "24/7", label: "Siempre Disponible" }
    ]
  },
  pt: {
    badge: "Agência IA Internacional",
    canadianBadge: "🇨🇦 Empresa Canadense de Quebec",
    title: {
      line1: "Transforme Seu Negócio",
      line2: "Com Automação Inteligente",
      highlight: "Em Dias, Não Em Meses"
    },
    subtitle: "Soluções especializadas que trabalham 24/7 para fazer crescer seu negócio. Implementação em 10-15 dias. Resultados desde o primeiro dia.",
    cta: {
      primary: "Ver Como Funciona",
      secondary: "Agendar Uma Demo Gratuita"
    },
    payNow: "Já convencido? Começar agora",
    stats: [
      { value: "50+", label: "Empresas Em Crescimento" },
      { value: "10-15", label: "Dias Para Lançar" },
      { value: "+42%", label: "Satisfação Do Cliente" },
      { value: "24/7", label: "Sempre Disponível" }
    ]
  }
};

interface HeroProps {
  lang?: string;
}

const Hero: React.FC<HeroProps> = ({ lang = 'en' }) => {
  // Direct Stripe checkout URL (replace with your actual Stripe link)
  const stripeCheckoutUrl = 'https://buy.stripe.com/xxxxxx';
  
  const content: Record<string, any> = {
    en: {
      badge: 'AI without borders',
      title: 'Intelligent AI Agents for a ',
      titleHighlight: 'Borderless World',
      description: 'Transform your business with advanced AI automation, intelligent agents, and specialized micro-agents. Global solutions for modern enterprises.',
      cta1: 'Request a Demo',
      cta2: 'Explore Solutions',
      stats: [
        { value: '150+', label: 'Active Projects' },
        { value: '40+', label: 'Countries Served' },
        { value: '98%', label: 'Client Satisfaction' },
      ],
    },
    fr: {
      badge: 'IA sans frontières',
      title: 'Agents IA Intelligents pour un ',
      titleHighlight: 'Monde Sans Frontières',
      description: 'Transformez votre entreprise avec l\'automatisation IA avancée, des agents intelligents et des micro-agents spécialisés. Solutions mondiales pour entreprises modernes.',
      cta1: 'Demander une démo',
      cta2: 'Découvrir les solutions',
      stats: [
        { value: '150+', label: 'Projets actifs' },
        { value: '40+', label: 'Pays desservis' },
        { value: '98%', label: 'Satisfaction client' },
      ],
    },
    es: {
      badge: 'IA sin fronteras',
      title: 'Agentes de IA Inteligentes para un ',
      titleHighlight: 'Mundo Sin Fronteras',
      description: 'Transforme su negocio con automatización IA avanzada, agentes inteligentes y micro-agentes especializados. Soluciones globales para empresas modernas.',
      cta1: 'Solicitar una demo',
      cta2: 'Explorar soluciones',
      stats: [
        { value: '150+', label: 'Proyectos activos' },
        { value: '40+', label: 'Países atendidos' },
        { value: '98%', label: 'Satisfacción del cliente' },
      ],
    },
    pt: {
      badge: 'IA sem fronteiras',
      title: 'Agentes de IA Inteligentes para um ',
      titleHighlight: 'Mundo Sem Fronteiras',
      description: 'Transforme seu negócio com automação IA avançada, agentes inteligentes e micro-agentes especializados. Soluções globais para empresas modernas.',
      cta1: 'Solicitar uma demo',
      cta2: 'Explorar soluções',
      stats: [
        { value: '150+', label: 'Projetos ativos' },
        { value: '40+', label: 'Países atendidos' },
        { value: '98%', label: 'Satisfação do cliente' },
      ],
    },
  };

  const t = content[lang];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-500 via-violet-500 to-cyan-500">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Tech Gradient Orbs - BLEU/VIOLET/CYAN */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 opacity-20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-500 opacity-25 rounded-full blur-3xl animate-float delay-1000" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-cyan-400 opacity-20 rounded-full blur-3xl animate-float delay-500" />
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-blue-600 opacity-15 rounded-full blur-3xl animate-float delay-300" />
        
        {/* Grid Pattern - BLEU */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,102,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,102,255,0.05)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_80%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        {/* Badge - BLEU */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 mb-6 animate-fade-in-up shadow-lg">
          <Sparkles className="w-5 h-5 text-white" />
          <span className="text-sm font-semibold text-white">{t.badge}</span>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 animate-fade-in-up">
          {t.title}
          <br />
          <span className="text-gradient-tech bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 bg-clip-text text-transparent font-extrabold">
            {t.titleHighlight}
          </span>
        </h1>

        {/* Description */}
        <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto mb-12 animate-fade-in-up delay-200">
          {t.description}
        </p>

        {/* CTAs - BLEU ÉLECTRIQUE */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up delay-300">
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 group bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transition-all"
            onClick={() => window.location.href = `${baseUrl}/demo`}
          >
            {t.cta1}
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-lg px-8 py-6 border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950"
            onClick={() => window.location.href = `${baseUrl}/services`}
          >
            {t.cta2}
          </Button>
        </div>

        {/* Secondary Link: Direct Payment */}
        <div className="mb-20 animate-fade-in-up delay-400">
          <a
            href={stripeCheckoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-500 hover:text-blue-600 transition-colors inline-flex items-center gap-1"
          >
            {content[lang]?.payNow || translations[lang]?.payNow}
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>

        {/* Stats - BORDURES BLEUES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in-up delay-500">
          {t.stats.map((stat: any, index: number) => (
            <div key={index} className="p-6 bg-white dark:bg-zinc-900 border-2 border-blue-100 dark:border-blue-900 rounded-xl backdrop-blur-sm hover:shadow-xl hover:shadow-blue-600/10 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300">
              <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Icons - BLEU/VIOLET */}
      <div className="absolute top-1/4 left-1/4 animate-float hidden lg:block">
        <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center backdrop-blur-sm border border-blue-500/30">
          <Zap className="w-6 h-6 text-blue-600" />
        </div>
      </div>
      <div className="absolute bottom-1/3 right-1/4 animate-float delay-500 hidden lg:block">
        <div className="w-12 h-12 bg-violet-500/20 rounded-lg flex items-center justify-center backdrop-blur-sm border border-violet-500/30">
          <Globe2 className="w-6 h-6 text-violet-600" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

















