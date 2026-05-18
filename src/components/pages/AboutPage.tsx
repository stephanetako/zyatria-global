import React from 'react';
import { Target, Eye, Heart, Globe, TrendingUp, Users, Shield, Zap } from 'lucide-react';
import { Button } from '../ui/button';
import { baseUrl } from '../../lib/base-url';
import { useLanguage } from '../../lib/language-context';

const translations = {
  en: {
    hero: {
      title: "About ZyatrIA Global",
      subtitle: "An international AI agency dedicated to innovation and performance."
    },
    mission: {
      title: "Mission",
      description: "Make AI accessible, performant, and useful for all businesses."
    },
    vision: {
      title: "Vision",
      description: "Create a world where every business can rely on reliable, fast, and intelligent AI agents."
    },
    values: {
      title: "Our Values",
      list: [
        { icon: TrendingUp, name: "Innovation", description: "Cutting-edge solutions" },
        { icon: Shield, name: "Transparency", description: "Clear communication" },
        { icon: Target, name: "Performance", description: "Measurable results" },
        { icon: Users, name: "Accessibility", description: "AI for everyone" },
        { icon: Globe, name: "International", description: "Worldwide Coverage" }
      ]
    },
    cta: {
      title: "Want to Work With Us?",
      button: "Request a Demo"
    }
  },
  fr: {
    hero: {
      title: "À propos de ZyatrIA Global",
      subtitle: "Une agence IA internationale dédiée à l'innovation et à la performance."
    },
    mission: {
      title: "Mission",
      description: "Rendre l'IA accessible, performante et utile pour toutes les entreprises."
    },
    vision: {
      title: "Vision",
      description: "Créer un monde où chaque entreprise peut s'appuyer sur des agents IA fiables, rapides et intelligents."
    },
    values: {
      title: "Nos valeurs",
      list: [
        { icon: TrendingUp, name: "Innovation", description: "Solutions de pointe" },
        { icon: Shield, name: "Transparence", description: "Communication claire" },
        { icon: Target, name: "Performance", description: "Résultats mesurables" },
        { icon: Users, name: "Accessibilité", description: "L'IA pour tous" },
        { icon: Globe, name: "International", description: "L'IA sans frontières" }
      ]
    },
    cta: {
      title: "Envie de travailler avec nous ?",
      button: "Demander une démo"
    }
  },
  es: {
    hero: {
      title: "Acerca de ZyatrIA Global",
      subtitle: "Una agencia IA internacional dedicada a la innovación y el rendimiento."
    },
    mission: {
      title: "Misión",
      description: "Hacer que la IA sea accesible, eficiente y útil para todas las empresas."
    },
    vision: {
      title: "Visión",
      description: "Crear un mundo donde cada empresa pueda confiar en agentes IA confiables, rápidos e inteligentes."
    },
    values: {
      title: "Nuestros valores",
      list: [
        { icon: TrendingUp, name: "Innovación", description: "Soluciones de vanguardia" },
        { icon: Shield, name: "Transparencia", description: "Comunicación clara" },
        { icon: Target, name: "Rendimiento", description: "Resultados medibles" },
        { icon: Users, name: "Accesibilidad", description: "IA para todos" },
        { icon: Globe, name: "Internacional", description: "IA sin fronteras" }
      ]
    },
    cta: {
      title: "¿Quiere trabajar con nosotros?",
      button: "Solicitar una demo"
    }
  },
  pt: {
    hero: {
      title: "Sobre ZyatrIA Global",
      subtitle: "Uma agência IA internacional dedicada à inovação e performance."
    },
    mission: {
      title: "Missão",
      description: "Tornar a IA acessível, eficiente e útil para todas as empresas."
    },
    vision: {
      title: "Visão",
      description: "Criar um mundo onde cada empresa possa confiar em agentes IA confiáveis, rápidos e inteligentes."
    },
    values: {
      title: "Nossos valores",
      list: [
        { icon: TrendingUp, name: "Inovação", description: "Soluções de ponta" },
        { icon: Shield, name: "Transparência", description: "Comunicação clara" },
        { icon: Target, name: "Performance", description: "Resultados mensuráveis" },
        { icon: Users, name: "Acessibilidade", description: "IA para todos" },
        { icon: Globe, name: "Internacional", description: "IA sem fronteiras" }
      ]
    },
    cta: {
      title: "Quer trabalhar conosco?",
      button: "Solicitar uma demo"
    }
  }
};

export default function AboutPage() {
  const { language } = useLanguage();
  const t = translations[language];

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

      {/* Mission & Vision */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Mission */}
          <div className="bg-card border border-border rounded-2xl p-8 animate-fade-in-up">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-primary" />
            </div>
            <h2 className="text-3xl font-bold mb-4 font-heading">{t.mission.title}</h2>
            <p className="text-lg text-muted-foreground">{t.mission.description}</p>
          </div>

          {/* Vision */}
          <div className="bg-card border border-border rounded-2xl p-8 animate-fade-in-up delay-200">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
              <Eye className="w-7 h-7 text-primary" />
            </div>
            <h2 className="text-3xl font-bold mb-4 font-heading">{t.vision.title}</h2>
            <p className="text-lg text-muted-foreground">{t.vision.description}</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 font-heading">
            {t.values.title}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.values.list.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-card border border-border rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 font-heading">{value.name}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              );
            })}
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





