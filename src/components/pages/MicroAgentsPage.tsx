import React from 'react';
import { Target, MessageSquare, Calendar, Bell, Home, ShoppingBag, CheckCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { baseUrl } from '../../lib/base-url';

const translations = {
  en: {
    hero: {
      title: "Digital Micro-Agents AI",
      subtitle: "Specialized micro-agents designed to automate your key tasks in just a few days."
    },
    list: {
      title: "Our AI Micro-Agents",
      subtitle: "Choose the micro-agent suited to your business.",
      agents: [
        { icon: Target, name: "Automatic lead qualification" },
        { icon: MessageSquare, name: "24/7 customer responses" },
        { icon: Calendar, name: "Appointment management" },
        { icon: Bell, name: "Prospect follow-up" },
        { icon: Home, name: "Real estate micro-agent (visits, leads, responses)" },
        { icon: ShoppingBag, name: "E-commerce micro-agent (cart, orders, FAQ)" }
      ]
    },
    process: {
      title: "How It Works",
      steps: [
        "Analysis of your need",
        "Micro-agent creation",
        "Deployment in less than 7 days"
      ]
    },
    cta: {
      title: "Configure Your Micro-Agent",
      button: "Configure My Micro-Agent"
    }
  },
  fr: {
    hero: {
      title: "Les Micro Digitaux IA",
      subtitle: "Des micro-agents spécialisés, conçus pour automatiser vos tâches clés en quelques jours."
    },
    list: {
      title: "Nos micro-agents IA",
      subtitle: "Choisissez le micro-agent adapté à votre activité.",
      agents: [
        { icon: Target, name: "Qualification automatique des leads" },
        { icon: MessageSquare, name: "Réponses clients 24/7" },
        { icon: Calendar, name: "Gestion des rendez-vous" },
        { icon: Bell, name: "Suivi des prospects" },
        { icon: Home, name: "Micro-agent immobilier (visites, leads, réponses)" },
        { icon: ShoppingBag, name: "Micro-agent commerce (panier, commandes, FAQ)" }
      ]
    },
    process: {
      title: "Comment ça fonctionne",
      steps: [
        "Analyse de votre besoin",
        "Création du micro-agent",
        "Déploiement en moins de 7 jours"
      ]
    },
    cta: {
      title: "Configurez votre micro-agent",
      button: "Configurer mon micro-agent"
    }
  },
  es: {
    hero: {
      title: "Los Micro Digitales IA",
      subtitle: "Micro-agentes especializados diseñados para automatizar sus tareas clave en pocos días."
    },
    list: {
      title: "Nuestros micro-agentes IA",
      subtitle: "Elija el micro-agente adaptado a su actividad.",
      agents: [
        { icon: Target, name: "Calificación automática de leads" },
        { icon: MessageSquare, name: "Respuestas a clientes 24/7" },
        { icon: Calendar, name: "Gestión de citas" },
        { icon: Bell, name: "Seguimiento de prospectos" },
        { icon: Home, name: "Micro-agente inmobiliario (visitas, leads, respuestas)" },
        { icon: ShoppingBag, name: "Micro-agente comercio (carrito, pedidos, FAQ)" }
      ]
    },
    process: {
      title: "Cómo funciona",
      steps: [
        "Análisis de su necesidad",
        "Creación del micro-agente",
        "Implementación en menos de 7 días"
      ]
    },
    cta: {
      title: "Configure su micro-agente",
      button: "Configurar mi micro-agente"
    }
  },
  pt: {
    hero: {
      title: "Os Micro Digitais IA",
      subtitle: "Micro-agentes especializados projetados para automatizar suas tarefas-chave em poucos dias."
    },
    list: {
      title: "Nossos micro-agentes IA",
      subtitle: "Escolha o micro-agente adaptado à sua atividade.",
      agents: [
        { icon: Target, name: "Qualificação automática de leads" },
        { icon: MessageSquare, name: "Respostas a clientes 24/7" },
        { icon: Calendar, name: "Gestão de agendamentos" },
        { icon: Bell, name: "Acompanhamento de prospects" },
        { icon: Home, name: "Micro-agente imobiliário (visitas, leads, respostas)" },
        { icon: ShoppingBag, name: "Micro-agente comércio (carrinho, pedidos, FAQ)" }
      ]
    },
    process: {
      title: "Como funciona",
      steps: [
        "Análise da sua necessidade",
        "Criação do micro-agente",
        "Implementação em menos de 7 dias"
      ]
    },
    cta: {
      title: "Configure seu micro-agente",
      button: "Configurar meu micro-agente"
    }
  }
};

export default function MicroAgentsPage() {
  const [language, setLanguage] = React.useState<'en' | 'fr' | 'es' | 'pt'>('en');
  const t = translations[language];

  React.useEffect(() => {
    const savedLang = localStorage.getItem('language') as 'en' | 'fr' | 'es' | 'pt';
    if (savedLang) setLanguage(savedLang);

    const handleLanguageChange = (e: CustomEvent) => {
      setLanguage(e.detail);
    };

    window.addEventListener('languageChange', handleLanguageChange as EventListener);
    return () => window.removeEventListener('languageChange', handleLanguageChange as EventListener);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in font-heading">
            {t.hero.title}
          </h1>
          <p className="text-xl text-muted-foreground animate-fade-in-up delay-200">
            {t.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Micro-Agents List */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">{t.list.title}</h2>
            <p className="text-lg text-muted-foreground">{t.list.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.list.agents.map((agent, index) => {
              const Icon = agent.icon;
              return (
                <div
                  key={index}
                  className="bg-card border border-border rounded-2xl p-6 hover:shadow-xl hover:border-primary/50 transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">{agent.name}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 font-heading">
            {t.process.title}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {t.process.steps.map((step, index) => (
              <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 font-heading">
                  {index + 1}
                </div>
                <p className="text-lg font-medium">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-background border border-primary/20 rounded-3xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
              {t.cta.title}
            </h2>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-button"
              onClick={() => window.location.href = `${baseUrl}/demo`}
            >
              {t.cta.button}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
