import { Globe } from 'lucide-react';
import { useState } from 'react';

const translations = {
  en: {
    badge: "Who We Are",
    title: "Stop Wasting Time on Repetitive Tasks",
    subtitle: "We Help You Automate What Slows You Down",
    description: "ZyatrIA Global deploys intelligent solutions that handle your repetitive work while you focus on growing your business. Whether you're in Montreal, Paris, Brussels, São Paulo, or Madrid—we speak your language and understand your market.",
    description2: "Our AI agents work tirelessly to streamline your operations, reduce errors, and free up your team to focus on what truly matters.",
    description3: "Join hundreds of businesses that have already transformed their workflows with our cutting-edge automation solutions.",
    cta: "Discover Our Solutions",
    highlights: [
      "Solutions ready in 10-15 days, not 3-6 months",
      "Works 24/7 without vacation or errors",
      "Adapts to your business, your sector, your language",
      "Immediate ROI from the first week"
    ]
  },
  fr: {
    badge: "Qui Sommes-Nous",
    title: "Arrêtez de Perdre du Temps sur des Tâches Répétitives",
    subtitle: "Nous Vous Aidons à Automatiser Ce Qui Vous Ralentit",
    description: "ZyatrIA Global déploie des solutions intelligentes qui gèrent votre travail répétitif pendant que vous vous concentrez sur la croissance de votre entreprise. Que vous soyez à Montréal, Paris, Bruxelles, São Paulo ou Madrid—nous parlons votre langue et comprenons votre marché.",
    description2: "Nos agents IA travaillent sans relâche pour rationaliser vos opérations, réduire les erreurs et libérer votre équipe pour se concentrer sur ce qui compte vraiment.",
    description3: "Rejoignez des centaines d'entreprises qui ont déjà transformé leurs flux de travail avec nos solutions d'automatisation de pointe.",
    cta: "Découvrir Nos Solutions",
    highlights: [
      "Solutions prêtes en 10-15 jours, pas 3-6 mois",
      "Fonctionne 24/7 sans vacances ni erreurs",
      "S'adapte à votre entreprise, votre secteur, votre langue",
      "ROI immédiat dès la première semaine"
    ]
  },
  es: {
    badge: "Quiénes Somos",
    title: "Deje de Perder Tiempo en Tareas Repetitivas",
    subtitle: "Le Ayudamos a Automatizar Lo Que Le Frena",
    description: "ZyatrIA Global implementa soluciones inteligentes que manejan su trabajo repetitivo mientras usted se enfoca en hacer crecer su negocio. Ya sea en Montreal, París, Bruselas, São Paulo o Madrid—hablamos su idioma y entendemos su mercado.",
    description2: "Nuestros agentes de IA trabajan incansablemente para optimizar sus operaciones, reducir errores y liberar a su equipo para concentrarse en lo que realmente importa.",
    description3: "Únase a cientos de empresas que ya han transformado sus flujos de trabajo con nuestras soluciones de automatización de vanguardia.",
    cta: "Descubrir Nuestras Soluciones",
    highlights: [
      "Soluciones listas en 10-15 días, no 3-6 meses",
      "Funciona 24/7 sin vacaciones ni errores",
      "Se adapta a su empresa, su sector, su idioma",
      "ROI inmediato desde la primera semana"
    ]
  },
  pt: {
    badge: "Quem Somos",
    title: "Pare de Perder Tempo com Tarefas Repetitivas",
    subtitle: "Ajudamos Você a Automatizar O Que Te Atrasa",
    description: "ZyatrIA Global implementa soluções inteligentes que cuidam do seu trabalho repetitivo enquanto você foca em crescer seu negócio. Seja em Montreal, Paris, Bruxelas, São Paulo ou Madrid—falamos seu idioma e entendemos seu mercado.",
    description2: "Nossos agentes de IA trabalham incansavelmente para otimizar suas operações, reduzir erros e liberar sua equipe para se concentrar no que realmente importa.",
    description3: "Junte-se a centenas de empresas que já transformaram seus fluxos de trabalho com nossas soluções de automação de ponta.",
    cta: "Descobrir Nossas Soluções",
    highlights: [
      "Soluções prontas em 10-15 dias, não 3-6 meses",
      "Funciona 24/7 sem férias ou erros",
      "Se adapta ao seu negócio, seu setor, seu idioma",
      "ROI imediato desde a primeira semana"
    ]
  }
};

export default function Intro() {
  const [lang, setLang] = useState<'en' | 'fr' | 'es' | 'pt'>('en');
  const t = translations[lang];

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="intro" className="relative py-20 md:py-32 bg-gradient-to-b from-white to-blue-50/30 dark:from-zinc-950 dark:to-blue-950/10 overflow-hidden">
      {/* Animated background globe */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <Globe className="w-[800px] h-[800px] animate-float" strokeWidth={0.5} />
      </div>

      <div className="container relative z-10">
        {/* Language Switcher */}
        <div className="flex justify-center gap-2 mb-8 animate-fade-in">
          {(['en', 'fr', 'es', 'pt'] as const).map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                lang === l
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Badge */}
          <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full mb-6">
            <span className="text-sm font-semibold text-blue-600">{t.badge}</span>
          </div>

          {/* Main Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground animate-fade-in-up delay-200">
            {t.title}
          </h2>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground font-medium animate-fade-in-up delay-300">
            {t.subtitle}
          </p>

          {/* Description */}
          <div className="space-y-4 text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in-up delay-400">
            <p>{t.description}</p>
            <p>{t.description2}</p>
            <p>{t.description3}</p>
          </div>

          {/* CTA Button */}
          <div className="pt-4 animate-fade-in-up delay-500">
            <button
              onClick={scrollToServices}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-violet-700 transition-all shadow-lg shadow-blue-600/30 hover:shadow-xl hover:scale-105"
            >
              <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
                {t.cta}
              </span>
              <span className="text-xl">→</span>
            </button>
          </div>
        </div>

        {/* World Map Markers */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto text-center animate-fade-in-up delay-1000">
          {[
            { city: 'Montreal', flag: '🇨🇦', country: 'Canada' },
            { city: 'Paris', flag: '🇫🇷', country: 'France' },
            { city: 'Brussels', flag: '🇧🇪', country: 'Belgium' },
            { city: 'São Paulo', flag: '🇧🇷', country: 'Brazil' },
            { city: 'Casablanca', flag: '🇲🇦', country: 'Morocco' }
          ].map((location) => (
            <div key={location.city} className="p-3 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-blue-500/50 transition-colors">
              <div className="text-3xl mb-1">{location.flag}</div>
              <div className="text-sm font-semibold text-foreground">{location.city}</div>
              <div className="text-xs text-muted-foreground">{location.country}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}





