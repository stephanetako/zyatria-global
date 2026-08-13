import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ArrowRight, TrendingDown, TrendingUp, DollarSign } from 'lucide-react';

interface Metric {
  icon: React.ReactNode;
  label: string;
  color: string;
}

interface Testimonial {
  id: string;
  name: string;
  title: string;
  company: string;
  location: string;
  avatar: string;
  quote: string;
  metrics: Metric[];
  caseStudyLink?: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Mitchell',
    title: 'CEO',
    company: 'TechStart Inc.',
    location: 'San Francisco, USA',
    avatar: 'SM',
    quote: 'ZyatrIA a transformé notre service client. Le temps de réponse est passé de 4 heures à 2 minutes.',
    metrics: [
      { icon: <TrendingDown className="w-4 h-4" />, label: '-95% de temps de réponse', color: 'text-green-600' },
      { icon: <TrendingUp className="w-4 h-4" />, label: '+87% de satisfaction client', color: 'text-green-600' },
      { icon: <DollarSign className="w-4 h-4" />, label: '45 000$ économisés par mois', color: 'text-green-600' }
    ],
    caseStudyLink: '#case-study-techstart'
  },
  {
    id: '2',
    name: 'Pierre Dubois',
    title: 'Directeur des Opérations',
    company: 'Commerce Plus',
    location: 'Paris, France',
    avatar: 'PD',
    quote: 'Nous avons automatisé 80% de notre traitement des commandes. Ce qui prenait 3 jours prend maintenant 3 heures.',
    metrics: [
      { icon: <TrendingDown className="w-4 h-4" />, label: '-92% de temps de traitement', color: 'text-green-600' },
      { icon: <TrendingUp className="w-4 h-4" />, label: '99.7% de précision', color: 'text-green-600' },
      { icon: <DollarSign className="w-4 h-4" />, label: 'ROI atteint en 4 mois', color: 'text-green-600' }
    ],
    caseStudyLink: '#case-study-commerce'
  },
  {
    id: '3',
    name: 'Maria Rodriguez',
    title: 'Directrice Marketing',
    company: 'Global Retail',
    location: 'Madrid, Espagne',
    avatar: 'MR',
    quote: 'Nos agents IA ont qualifié 3x plus de leads qu\'avant. Notre taux de conversion a explosé.',
    metrics: [
      { icon: <TrendingUp className="w-4 h-4" />, label: '+215% de leads qualifiés', color: 'text-green-600' },
      { icon: <TrendingUp className="w-4 h-4" />, label: '+68% de taux de conversion', color: 'text-green-600' },
      { icon: <DollarSign className="w-4 h-4" />, label: '120 000€ de CA additionnel/mois', color: 'text-green-600' }
    ],
    caseStudyLink: '#case-study-retail'
  },
  {
    id: '4',
    name: 'Ahmed Hassan',
    title: 'Fondateur',
    company: 'PropTech Solutions',
    location: 'Dubai, UAE',
    avatar: 'AH',
    quote: 'L\'agent immobilier IA gère 90% de nos visites. Nos agents se concentrent sur la conclusion.',
    metrics: [
      { icon: <TrendingUp className="w-4 h-4" />, label: '+150% de visites planifiées', color: 'text-green-600' },
      { icon: <TrendingDown className="w-4 h-4" />, label: '-70% de no-shows', color: 'text-green-600' },
      { icon: <DollarSign className="w-4 h-4" />, label: '+45% de ventes conclues', color: 'text-green-600' }
    ],
    caseStudyLink: '#case-study-proptech'
  },
  {
    id: '5',
    name: 'Sophie Tremblay',
    title: 'VP Customer Success',
    company: 'SaaS Innovate',
    location: 'Montréal, Canada',
    avatar: 'ST',
    quote: 'Le support 24/7 automatisé a réduit notre churn de moitié. Nos clients adorent la réactivité.',
    metrics: [
      { icon: <TrendingDown className="w-4 h-4" />, label: '-52% de churn', color: 'text-green-600' },
      { icon: <TrendingUp className="w-4 h-4" />, label: '+91% de CSAT', color: 'text-green-600' },
      { icon: <DollarSign className="w-4 h-4" />, label: '280 000$ de MRR sauvé', color: 'text-green-600' }
    ],
    caseStudyLink: '#case-study-saas'
  },
  {
    id: '6',
    name: 'Dr. Carlos Silva',
    title: 'Directeur Clinique',
    company: 'HealthCare Plus',
    location: 'São Paulo, Brésil',
    avatar: 'CS',
    quote: 'La prise de rendez-vous automatisée a libéré notre équipe. Zéro erreur de planification.',
    metrics: [
      { icon: <TrendingUp className="w-4 h-4" />, label: '+180% de rendez-vous pris', color: 'text-green-600' },
      { icon: <TrendingDown className="w-4 h-4" />, label: '-98% d\'erreurs de planification', color: 'text-green-600' },
      { icon: <TrendingUp className="w-4 h-4" />, label: '+35% de satisfaction patients', color: 'text-green-600' }
    ],
    caseStudyLink: '#case-study-healthcare'
  }
];

export default function TestimonialsModern() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-100">
            💬 Témoignages Clients
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Ils Ont Transformé Leur Entreprise
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez comment nos clients ont <strong>multiplié leur efficacité</strong> et <strong>réduit leurs coûts</strong> grâce à nos agents IA.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border border-gray-200 hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
              <CardContent className="p-6 flex flex-col h-full">
                {/* Header with Avatar */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    {testimonial.avatar}
                  </div>
                  <div className="flex-grow min-w-0">
                    <h4 className="font-bold text-gray-900 text-lg truncate">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600 truncate">
                      {testimonial.title}, {testimonial.company}
                    </p>
                    <p className="text-xs text-gray-500 truncate">
                      📍 {testimonial.location}
                    </p>
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="text-gray-700 italic mb-4 flex-grow leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                {/* Metrics */}
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <p className="text-sm font-semibold text-gray-600 mb-3">
                    📊 Résultats :
                  </p>
                  <ul className="space-y-2">
                    {testimonial.metrics.map((metric, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className={metric.color}>✅</span>
                        <span className="text-sm text-gray-700 font-medium">
                          {metric.label}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Case Study Link */}
                {testimonial.caseStudyLink && (
                  <a
                    href={testimonial.caseStudyLink}
                    className="text-blue-500 hover:text-blue-600 font-semibold text-sm flex items-center gap-2 group transition-colors"
                  >
                    Lire l'étude de cas complète
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Prêt à Rejoindre Nos Clients à Succès ?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Commencez votre essai gratuit de 7 jours et découvrez comment nos agents IA peuvent transformer votre entreprise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all shadow-lg"
            >
              Démarrer l'Essai Gratuit
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-500 font-semibold rounded-lg border-2 border-blue-500 hover:bg-blue-50 transition-all"
            >
              Voir les Tarifs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
