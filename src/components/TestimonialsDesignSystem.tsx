import React from 'react';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { useLanguage } from '../lib/language-context';

const translations = {
  fr: {
    title: 'Ce que disent nos clients',
    subtitle: 'Résultats réels d\'entreprises réelles',
    resultsLabel: '📊 Résultats :',
    caseStudy: 'Lire l\'étude de cas',
    testimonials: [
      {
        name: 'Sarah Mitchell',
        role: 'CEO, TechStart Inc.',
        location: 'San Francisco, USA',
        avatar: 'https://via.placeholder.com/60x60/3B82F6/FFFFFF?text=SM',
        quote: 'ZyatrIA a transformé notre service client. Le temps de réponse est passé de 4 heures à 2 minutes. Notre équipe peut maintenant se concentrer sur les problèmes complexes pendant que l\'IA gère les requêtes routinières.',
        results: [
          '-95% de temps de réponse',
          '+87% de satisfaction client',
          '45 000 $ CAD économisés par mois'
        ]
      },
      {
        name: 'Pierre Dubois',
        role: 'Directeur des Opérations, Commerce Plus',
        location: 'Paris, France',
        avatar: 'https://via.placeholder.com/60x60/8B5CF6/FFFFFF?text=PD',
        quote: 'Nous avons automatisé 80% de notre traitement des commandes. Ce qui prenait 3 jours prend maintenant 3 heures. ROI atteint en seulement 4 mois.',
        results: [
          '-92% de temps de traitement',
          '99.7% de précision',
          'ROI en 4 mois'
        ]
      },
      {
        name: 'Maria González',
        role: 'Directora de Marketing, Digital Ventures',
        location: 'Barcelona, España',
        avatar: 'https://via.placeholder.com/60x60/10B981/FFFFFF?text=MG',
        quote: 'Les agents IA gèrent tout notre processus de qualification des leads. Nous sommes passés de 20% à 73% de taux de conversion. Un vrai changement.',
        results: [
          '+265% de conversion',
          '< 1 min de temps de réponse',
          '+230 000 $ CAD de revenus'
        ]
      }
    ]
  },
  en: {
    title: 'What our clients say',
    subtitle: 'Real results from real businesses',
    resultsLabel: '📊 Results:',
    caseStudy: 'Read case study',
    testimonials: [
      {
        name: 'Sarah Mitchell',
        role: 'CEO, TechStart Inc.',
        location: 'San Francisco, USA',
        avatar: 'https://via.placeholder.com/60x60/3B82F6/FFFFFF?text=SM',
        quote: 'ZyatrIA transformed our customer service. Response time went from 4 hours to 2 minutes. Our team can now focus on complex issues while AI handles routine queries.',
        results: [
          '-95% response time',
          '+87% customer satisfaction',
          '$45,000 CAD saved per month'
        ]
      },
      {
        name: 'Pierre Dubois',
        role: 'Operations Director, Commerce Plus',
        location: 'Paris, France',
        avatar: 'https://via.placeholder.com/60x60/8B5CF6/FFFFFF?text=PD',
        quote: 'We automated 80% of our order processing. What took 3 days now takes 3 hours. ROI achieved in just 4 months.',
        results: [
          '-92% processing time',
          '99.7% accuracy',
          'ROI in 4 months'
        ]
      },
      {
        name: 'Maria González',
        role: 'Marketing Director, Digital Ventures',
        location: 'Barcelona, España',
        avatar: 'https://via.placeholder.com/60x60/10B981/FFFFFF?text=MG',
        quote: 'AI agents handle our entire lead qualification process. We went from 20% to 73% conversion rate. A real game changer.',
        results: [
          '+265% conversion',
          '< 1 min response time',
          '+$230,000 CAD revenue'
        ]
      }
    ]
  }
};

interface TestimonialProps {
  name: string;
  role: string;
  location: string;
  avatar: string;
  quote: string;
  results: string[];
  resultsLabel: string;
  caseStudy: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({
  name,
  role,
  location,
  avatar,
  quote,
  results,
  resultsLabel,
  caseStudy
}) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-header">
        <img src={avatar} alt={name} className="testimonial-avatar" />
        <div>
          <h4 style={{ margin: 0, color: '#1E293B' }}>{name}</h4>
          <p style={{ margin: '5px 0 0 0', color: '#64748B', fontSize: '14px' }}>
            {role} | {location}
          </p>
        </div>
      </div>
      <p style={{
        color: '#374151',
        marginBottom: '15px',
        fontStyle: 'italic',
        lineHeight: '1.6'
      }}>
        "{quote}"
      </p>
      <div className="testimonial-results">
        <p style={{ margin: 0, fontSize: '14px', color: '#64748B', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <TrendingUp size={16} />
          {resultsLabel}
        </p>
        <ul>
          {results.map((result, index) => (
            <li key={index}>✅ {result}</li>
          ))}
        </ul>
      </div>
      <a
        href="#contact"
        style={{
          color: '#3B82F6',
          textDecoration: 'none',
          fontWeight: 600,
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          transition: 'all 0.3s'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.gap = '10px';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.gap = '6px';
        }}
      >
        {caseStudy} <ArrowRight size={16} />
      </a>
    </div>
  );
};

const TestimonialsDesignSystem: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language as 'en' | 'fr'];

  return (
    <section className="section" id="temoignages">
      <h2 style={{ textAlign: 'center', marginBottom: '10px' }}>
        {t.title}
      </h2>
      <p style={{ textAlign: 'center', color: '#64748B', marginBottom: '40px' }}>
        {t.subtitle}
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '20px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {t.testimonials.map((testimonial: any, index: number) => (
          <TestimonialCard
            key={index}
            {...testimonial}
            resultsLabel={t.resultsLabel}
            caseStudy={t.caseStudy}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialsDesignSystem;

