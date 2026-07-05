import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Sparkles, Zap, Globe2 } from 'lucide-react';
import { baseUrl } from '../lib/base-url';
import { useLanguage } from '../lib/language-context';

const translations = {
  en: {
    badge: "Global AI Agency",
    canadianBadge: "🇨🇦 Canadian Company from Quebec",
    title: "Intelligent AI Agents for Modern Business",
    description: "Transform your business with advanced AI automation, intelligent agents, and specialized micro-agents. Global solutions for modern enterprises.",
    cta1: "Request a Demo",
    cta2: "Explore Solutions",
    payNow: "Already convinced? Start now",
    stats: [
      { value: "150+", label: "Active Projects" },
      { value: "40+", label: "Countries Served" },
      { value: "98%", label: "Client Satisfaction" }
    ]
  },
  fr: {
    badge: "Agence IA Internationale",
    canadianBadge: "🇨🇦 Entreprise Canadienne du Québec",
    title: "Agents IA Intelligents pour les Entreprises Modernes",
    description: "Transformez votre entreprise avec l'automatisation IA avancée, des agents intelligents et des micro-agents spécialisés. Solutions mondiales pour entreprises modernes.",
    cta1: "Demander une démo",
    cta2: "Découvrir les solutions",
    payNow: "Déjà convaincu ? Commencer maintenant",
    stats: [
      { value: "150+", label: "Projets actifs" },
      { value: "40+", label: "Pays desservis" },
      { value: "98%", label: "Satisfaction client" }
    ]
  },
  es: {
    badge: "Agencia IA Internacional",
    canadianBadge: "🇨🇦 Empresa Canadiense de Quebec",
    title: "Agentes IA Inteligentes para Empresas Modernas",
    description: "Transforme su negocio con automatización IA avanzada, agentes inteligentes y micro-agentes especializados. Soluciones globales para empresas modernas.",
    cta1: "Solicitar una demo",
    cta2: "Explorar soluciones",
    payNow: "¿Ya convencido? Empezar ahora",
    stats: [
      { value: "150+", label: "Proyectos activos" },
      { value: "40+", label: "Países atendidos" },
      { value: "98%", label: "Satisfacción del cliente" }
    ]
  },
  pt: {
    badge: "Agência IA Internacional",
    canadianBadge: "🇨🇦 Empresa Canadense de Quebec",
    title: "Agentes IA Inteligentes para Empresas Modernas",
    description: "Transforme seu negócio com automação IA avançada, agentes inteligentes e micro-agentes especializados. Soluções globais para empresas modernas.",
    cta1: "Solicitar uma demo",
    cta2: "Explorar soluções",
    payNow: "Já convencido? Começar agora",
    stats: [
      { value: "150+", label: "Projetos ativos" },
      { value: "40+", label: "Países atendidos" },
      { value: "98%", label: "Satisfação do cliente" }
    ]
  }
};

const Hero: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations] || translations.fr;
  
  // Direct Stripe checkout URL (replace with your actual Stripe link)
  const stripeCheckoutUrl = 'https://buy.stripe.com/xxxxxx';

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
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6 animate-fade-in">
          <Sparkles className="w-4 h-4 text-yellow-300" />
          <span className="text-sm font-medium text-white">{t.badge}</span>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 animate-fade-in-up">
          <span className="text-gradient-tech bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 bg-clip-text text-transparent font-extrabold">
            {t.title}
          </span>
        </h1>

        {/* Description */}
        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 animate-fade-in-up delay-200">
          {t.description}
        </p>

        {/* CTAs - BLEU ÉLECTRIQUE */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up delay-400">
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
            className="text-lg px-8 py-6 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
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
            className="text-sm text-white/70 hover:text-white transition-colors inline-flex items-center gap-1"
          >
            {t.payNow}
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>

        {/* Stats - BORDURES BLEUES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in-up delay-500">
          {t.stats.map((stat: any, index: number) => (
            <div key={index} className="p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-sm text-white/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Icons - BLEU/VIOLET */}
      <div className="absolute top-1/4 left-1/4 animate-float hidden lg:block">
        <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center backdrop-blur-sm border border-blue-500/30">
          <Zap className="w-6 h-6 text-blue-300" />
        </div>
      </div>
      <div className="absolute bottom-1/3 right-1/4 animate-float delay-500 hidden lg:block">
        <div className="w-12 h-12 bg-violet-500/20 rounded-lg flex items-center justify-center backdrop-blur-sm border border-violet-500/30">
          <Globe2 className="w-6 h-6 text-violet-300" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

