import { useState } from 'react';

const translations = {
  en: {
    title: "Trusted by Industry Leaders",
    subtitle: "Join 2,000+ companies already transforming their operations with AI"
  },
  fr: {
    title: "La confiance des leaders de l'industrie",
    subtitle: "Rejoignez 2 000+ entreprises qui transforment déjà leurs opérations avec l'IA"
  },
  es: {
    title: "Confianza de los líderes de la industria",
    subtitle: "Únete a más de 2,000 empresas que ya están transformando sus operaciones con IA"
  },
  pt: {
    title: "Confiança dos líderes da indústria",
    subtitle: "Junte-se a mais de 2.000 empresas que já estão transformando suas operações com IA"
  }
};

// Logos d'entreprises fictives mais crédibles
const companies = [
  { name: "TechCorp", industry: "Technology" },
  { name: "GlobalBank", industry: "Finance" },
  { name: "MediCare Plus", industry: "Healthcare" },
  { name: "RetailPro", industry: "Retail" },
  { name: "AutoDrive", industry: "Automotive" },
  { name: "EduTech", industry: "Education" },
  { name: "LogisticsPro", industry: "Logistics" },
  { name: "EnergyGrid", industry: "Energy" }
];

export default function TrustedByLogos() {
  const [lang] = useState<'en' | 'fr' | 'es' | 'pt'>('en');
  const t = translations[lang];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t.title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center max-w-5xl mx-auto">
          {companies.map((company, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-full h-24 px-6 rounded-lg bg-background border border-border hover:border-primary/50 transition-all hover:shadow-md group"
            >
              <div className="text-center">
                <div className="text-xl font-bold text-foreground/80 group-hover:text-primary transition-colors">
                  {company.name}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  {company.industry}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats sous les logos */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">2,000+</div>
            <div className="text-sm text-muted-foreground mt-1">Active Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">50+</div>
            <div className="text-sm text-muted-foreground mt-1">Countries</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">99.8%</div>
            <div className="text-sm text-muted-foreground mt-1">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">24/7</div>
            <div className="text-sm text-muted-foreground mt-1">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
}
