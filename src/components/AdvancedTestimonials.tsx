import React, { useState } from 'react';
import { Quote, Star, TrendingUp, Clock, DollarSign, CheckCircle } from 'lucide-react';
import { useLanguage } from '../lib/language-context';

const translations = {
  en: {
    title: "What Our Clients Say",
    subtitle: "Real results from real businesses",
    readMore: "Read full case study",
    results: "Results"
  },
  fr: {
    title: "Ce que disent nos clients",
    subtitle: "Résultats réels d'entreprises réelles",
    readMore: "Lire l'étude de cas complète",
    results: "Résultats"
  },
  es: {
    title: "Lo que dicen nuestros clientes",
    subtitle: "Resultados reales de empresas reales",
    readMore: "Leer el caso de estudio completo",
    results: "Resultados"
  },
  pt: {
    title: "O que dizem nossos clientes",
    subtitle: "Resultados reais de empresas reais",
    readMore: "Ler o estudo de caso completo",
    results: "Resultados"
  }
};

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CEO",
    company: "TechStart Inc.",
    location: "San Francisco, USA",
    image: "👩‍💼",
    rating: 5,
    quote: {
      en: "ZyatrIA transformed our customer service. Response time dropped from 4 hours to 2 minutes. Our team can now focus on complex issues while AI handles routine queries.",
      fr: "ZyatrIA a transformé notre service client. Le temps de réponse est passé de 4 heures à 2 minutes. Notre équipe peut maintenant se concentrer sur les problèmes complexes pendant que l'IA gère les requêtes routinières.",
      es: "ZyatrIA transformó nuestro servicio al cliente. El tiempo de respuesta bajó de 4 horas a 2 minutos. Nuestro equipo ahora puede enfocarse en problemas complejos mientras la IA maneja consultas rutinarias.",
      pt: "A ZyatrIA transformou nosso atendimento ao cliente. O tempo de resposta caiu de 4 horas para 2 minutos. Nossa equipe agora pode se concentrar em questões complexas enquanto a IA cuida das consultas rotineiras."
    },
    results: [
      { icon: Clock, label: "Response Time", value: "-95%", color: "text-foreground" },
      { icon: TrendingUp, label: "Satisfaction", value: "+87%", color: "text-blue-600" },
      { icon: DollarSign, label: "Cost Saved", value: "$45k/mo", color: "text-purple-600" }
    ]
  },
  {
    name: "Pierre Dubois",
    role: "Directeur des Opérations",
    company: "Commerce Plus",
    location: "Paris, France",
    image: "👨‍💼",
    rating: 5,
    quote: {
      en: "We automated 80% of our order processing. What took 3 days now takes 3 hours. ROI achieved in just 4 months.",
      fr: "Nous avons automatisé 80% de notre traitement des commandes. Ce qui prenait 3 jours prend maintenant 3 heures. ROI atteint en seulement 4 mois.",
      es: "Automatizamos el 80% de nuestro procesamiento de pedidos. Lo que tomaba 3 días ahora toma 3 horas. ROI logrado en solo 4 meses.",
      pt: "Automatizamos 80% do nosso processamento de pedidos. O que levava 3 dias agora leva 3 horas. ROI alcançado em apenas 4 meses."
    },
    results: [
      { icon: Clock, label: "Processing Time", value: "-92%", color: "text-foreground" },
      { icon: TrendingUp, label: "Accuracy", value: "99.7%", color: "text-blue-600" },
      { icon: DollarSign, label: "ROI", value: "4 months", color: "text-purple-600" }
    ]
  },
  {
    name: "Maria González",
    role: "Directora de Marketing",
    company: "Digital Ventures",
    location: "Barcelona, España",
    image: "👩‍💻",
    rating: 5,
    quote: {
      en: "The AI agents handle our entire lead qualification process. We went from 20% to 73% conversion rate. Game changer.",
      fr: "Les agents IA gèrent tout notre processus de qualification des leads. Nous sommes passés de 20% à 73% de taux de conversion. Un vrai changement.",
      es: "Los agentes de IA manejan todo nuestro proceso de calificación de leads. Pasamos del 20% al 73% de tasa de conversión. Un cambio revolucionario.",
      pt: "Os agentes de IA lidam com todo o nosso processo de qualificação de leads. Passamos de 20% para 73% de taxa de conversão. Mudança de jogo."
    },
    results: [
      { icon: TrendingUp, label: "Conversion", value: "+265%", color: "text-foreground" },
      { icon: Clock, label: "Lead Response", value: "< 1 min", color: "text-blue-600" },
      { icon: DollarSign, label: "Revenue", value: "+$230k", color: "text-purple-600" }
    ]
  }
];

export default function AdvancedTestimonials() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">{t.title}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              {/* Header avec photo et info */}
              <div className="flex items-start gap-4 mb-6">
                <div className="text-5xl">{testimonial.image}</div>
                <div className="flex-1">
                  <div className="font-bold text-lg">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <p className="font-semibold text-blue-600">{testimonial.company}</p>
                  <div className="text-xs text-muted-foreground mt-1">{testimonial.location}</div>
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <div className="relative mb-6">
                <Quote className="w-12 h-12 text-blue-600/20 mb-4" />
                <p className="text-foreground/90 leading-relaxed pl-6 italic">
                  "{testimonial.quote[language]}"
                </p>
              </div>

              {/* Results */}
              <div className="border-t border-border pt-6">
                <div className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide">
                  {t.results}
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {testimonial.results.map((result, idx) => (
                    <div key={idx} className="text-center">
                      <result.icon className={`w-5 h-5 mx-auto mb-1 ${result.color}`} />
                      <div className={`text-lg font-bold ${result.color}`}>
                        {result.value}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {result.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <button className="w-full mt-6 text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors group-hover:underline">
                {t.readMore} →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}




