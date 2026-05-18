import React from 'react';
import { useLanguage } from '../lib/language-context';
import { Newspaper, Trophy } from 'lucide-react';

const translations = {
  en: {
    title: "As Seen In",
    subtitle: "Featured in leading tech and business publications"
  },
  fr: {
    title: "Vu dans",
    subtitle: "Présenté dans les principales publications tech et business"
  },
  es: {
    title: "Visto en",
    subtitle: "Destacado en las principales publicaciones tecnológicas y empresariales"
  },
  pt: {
    title: "Visto em",
    subtitle: "Destaque nas principais publicações de tecnologia e negócios"
  }
};

const media = [
  {
    name: "TechCrunch",
    category: "Technology",
    highlight: true
  },
  {
    name: "Forbes",
    category: "Business",
    highlight: true
  },
  {
    name: "VentureBeat",
    category: "AI & Tech"
  },
  {
    name: "Business Insider",
    category: "Business"
  },
  {
    name: "The Verge",
    category: "Technology"
  },
  {
    name: "Fast Company",
    category: "Innovation"
  }
];

const awards = [
  {
    en: "Best AI Automation Platform 2025",
    fr: "Meilleure plateforme d'automatisation IA 2025",
    es: "Mejor plataforma de automatización IA 2025",
    pt: "Melhor plataforma de automação IA 2025",
    organization: "Tech Awards"
  },
  {
    en: "Top 10 AI Startups to Watch",
    fr: "Top 10 des startups IA à suivre",
    es: "Top 10 de startups de IA a seguir",
    pt: "Top 10 startups de IA para acompanhar",
    organization: "Forbes"
  },
  {
    en: "Innovation Leader in Enterprise AI",
    fr: "Leader de l'innovation en IA d'entreprise",
    es: "Líder en innovación en IA empresarial",
    pt: "Líder em inovação em IA empresarial",
    organization: "Gartner"
  }
];

export default function AsSeenIn() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="py-16 bg-background border-y border-border">
      <div className="container">
        {/* Media Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Newspaper className="w-4 h-4 text-primary" />
            <span className="text-xs font-medium text-primary uppercase tracking-wide">
              {t.title}
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            {t.subtitle}
          </p>
        </div>

        {/* Media Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {media.map((outlet, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center p-6 rounded-lg border transition-all hover:shadow-md ${
                outlet.highlight
                  ? 'border-primary/30 bg-primary/5'
                  : 'border-border bg-card'
              }`}
            >
              <div className={`text-xl font-bold ${
                outlet.highlight ? 'text-primary' : 'text-foreground/70'
              }`}>
                {outlet.name}
              </div>
              <div className="text-xs text-muted-foreground mt-2">
                {outlet.category}
              </div>
            </div>
          ))}
        </div>

        {/* Awards Section */}
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-8">
            <Trophy className="w-5 h-5 text-yellow-500" />
            <h3 className="text-lg font-semibold">Awards & Recognition</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg bg-gradient-to-b from-yellow-50 to-orange-50 dark:from-yellow-950/20 dark:to-orange-950/20 border border-yellow-200 dark:border-yellow-800"
              >
                <Trophy className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
                <div className="font-semibold text-sm mb-2">
                  {award[language]}
                </div>
                <div className="text-xs text-muted-foreground">
                  {award.organization}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

