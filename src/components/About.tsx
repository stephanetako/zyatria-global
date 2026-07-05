import React from 'react';
import { Card } from './ui/card';
import { Globe2, Users, Award, TrendingUp, Shield, Lightbulb, Globe, Zap, Lock } from 'lucide-react';
import { useLanguage } from '../lib/language-context';

const translations: Record<'en' | 'fr', any> = {
  en: {
    badge: "Why ZyatrIA",
    title: "We Don't Just Build Technology—",
    titleHighlight: "We Solve Real Business Problems",
    description: "Your Success Is Our Mission",
    location: '🇨🇦 Canadian Company | Based in Quebec',
    mission: {
      title: 'Our Mission',
      text: 'To democratize AI technology and empower businesses across all continents with intelligent, accessible, and impactful solutions.',
    },
    vision: {
      title: 'Our Vision',
      text: 'A world where every organization, regardless of size or location, can leverage cutting-edge AI to achieve extraordinary results.',
    },
    values: [
      {
        icon: Globe2,
        title: 'Global Perspective',
        description: 'Operating across continents with local expertise and global reach.',
      },
      {
        icon: Users,
        title: 'Client-Centric',
        description: 'Your success is our priority. We build solutions that drive real results.',
      },
      {
        icon: Award,
        title: 'Excellence',
        description: 'Committed to delivering the highest quality in every project.',
      },
      {
        icon: TrendingUp,
        title: 'Innovation',
        description: 'Constantly pushing boundaries to stay ahead of the AI curve.',
      },
      {
        icon: Shield,
        title: 'Trust & Security',
        description: 'Your data and privacy are paramount in everything we do.',
      },
      {
        icon: Lightbulb,
        title: 'Creativity',
        description: 'Thinking differently to solve complex challenges with elegant solutions.',
      },
    ],
    stats: [
      { value: '50+', label: 'AI Specialists' },
      { value: '40+', label: 'Countries' },
      { value: '200+', label: 'Projects Delivered' },
      { value: '15+', label: 'Industries Served' },
    ],
    usps: [
      {
        icon: Globe,
        title: "International Expertise That Speaks Your Language",
        description: "Operating across North America, Europe, Africa, and Latin America. We understand your market, regulations, and business culture—not just your timezone."
      },
      {
        icon: Zap,
        title: "Results in Days, Not Months",
        description: "While others spend 3-6 months planning, we deploy working solutions in 10-15 days. Start seeing ROI from week one, not quarter four."
      },
      {
        icon: Shield,
        title: "Built For Your Business, Not Generic Templates",
        description: "Every solution is customized to your sector, your challenges, your goals. Real estate, e-commerce, coaching—we know what works because we've done it before."
      },
      {
        icon: Users,
        title: "Human Support + Smart Technology",
        description: "Technology handles the repetitive work. Our team handles strategy, optimization, and making sure you succeed. You get both, not just software."
      },
      {
        icon: TrendingUp,
        title: "Pay For Results, Not Hours",
        description: "Fixed monthly pricing. No surprise bills. No endless consulting fees. You know exactly what you pay and what you get—more leads, more sales, more time."
      },
      {
        icon: Lock,
        title: "Enterprise Security, Startup Speed",
        description: "GDPR compliant, SOC 2 certified infrastructure. Your data is protected like a bank's, but you deploy like a tech startup. Best of both worlds."
      }
    ]
  },
  fr: {
    badge: "Pourquoi ZyatrIA",
    title: "Nous Ne Construisons Pas Que de la Technologie—",
    titleHighlight: "Nous Résolvons de Vrais Problèmes Business",
    description: "Votre Succès Est Notre Mission",
    location: '🇨🇦 Entreprise Canadienne | Basée au Québec',
    mission: {
      title: 'Notre Mission',
      text: 'Démocratiser la technologie IA et autonomiser les entreprises de tous les continents avec des solutions intelligentes, accessibles et impactantes.',
    },
    vision: {
      title: 'Notre Vision',
      text: 'Un monde où chaque organisation, quelle que soit sa taille ou sa localisation, peut exploiter l\'IA de pointe pour obtenir des résultats extraordinaires.',
    },
    values: [
      {
        icon: Globe2,
        title: 'Perspective Globale',
        description: 'Opérant sur tous les continents avec une expertise locale et une portée mondiale.',
      },
      {
        icon: Users,
        title: 'Centré Client',
        description: 'Votre succès est notre priorité. Nous créons des solutions qui génèrent de vrais résultats.',
      },
      {
        icon: Award,
        title: 'Excellence',
        description: 'Engagés à fournir la plus haute qualité dans chaque projet.',
      },
      {
        icon: TrendingUp,
        title: 'Innovation',
        description: 'Repoussant constamment les limites pour rester en avance sur l\'IA.',
      },
      {
        icon: Shield,
        title: 'Confiance & Sécurité',
        description: 'Vos données et votre confidentialité sont primordiales dans tout ce que nous faisons.',
      },
      {
        icon: Lightbulb,
        title: 'Créativité',
        description: 'Penser différemment pour résoudre des défis complexes avec des solutions élégantes.',
      },
    ],
    stats: [
      { value: '50+', label: 'Spécialistes IA' },
      { value: '40+', label: 'Pays' },
      { value: '200+', label: 'Projets Livrés' },
      { value: '15+', label: 'Secteurs Desservis' },
    ],
    usps: [
      {
        icon: Globe,
        title: "Expertise Internationale Qui Parle Votre Langue",
        description: "Présents en Amérique du Nord, Europe, Afrique et Amérique latine. Nous comprenons votre marché, vos régulations et votre culture business—pas juste votre fuseau horaire."
      },
      {
        icon: Zap,
        title: "Résultats en Jours, Pas en Mois",
        description: "Pendant que d'autres passent 3-6 mois à planifier, nous déployons des solutions fonctionnelles en 10-15 jours. ROI dès la première semaine, pas au quatrième trimestre."
      },
      {
        icon: Shield,
        title: "Conçu Pour Votre Entreprise, Pas des Templates Génériques",
        description: "Chaque solution est personnalisée pour votre secteur, vos défis, vos objectifs. Immobilier, e-commerce, coaching—nous savons ce qui fonctionne car nous l'avons déjà fait."
      },
      {
        icon: Users,
        title: "Support Humain + Technologie Intelligente",
        description: "La technologie gère le travail répétitif. Notre équipe gère la stratégie, l'optimisation et s'assure de votre succès. Vous obtenez les deux, pas juste un logiciel."
      },
      {
        icon: TrendingUp,
        title: "Payez Pour des Résultats, Pas des Heures",
        description: "Prix mensuel fixe. Pas de factures surprises. Pas de frais de consulting infinis. Vous savez exactement ce que vous payez et ce que vous obtenez—plus de leads, plus de ventes, plus de temps."
      },
      {
        icon: Lock,
        title: "Sécurité Entreprise, Vitesse Startup",
        description: "Conforme RGPD, infrastructure certifiée SOC 2. Vos données protégées comme une banque, mais vous déployez comme une startup tech. Le meilleur des deux mondes."
      }
    ]
  }
};

export default function About() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-4">
            <span className="text-sm font-medium text-primary">{t.badge}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            {t.title}
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              {t.titleHighlight}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            {t.description}
          </p>
          <div className="mt-6">
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-red-50 to-white dark:from-red-950/20 dark:to-background border-2 border-red-500/30 rounded-lg">
              <span className="text-lg font-semibold bg-gradient-to-r from-red-600 to-red-800 dark:from-red-400 dark:to-red-600 bg-clip-text text-transparent">
                {t.location}
              </span>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="p-8 border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
            <h3 className="text-2xl font-bold font-heading mb-4 text-primary">{t.mission.title}</h3>
            <p className="text-muted-foreground">{t.mission.text}</p>
          </Card>
          <Card className="p-8 border-2 border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-transparent">
            <h3 className="text-2xl font-bold font-heading mb-4 text-purple-600">{t.vision.title}</h3>
            <p className="text-muted-foreground">{t.vision.text}</p>
          </Card>
        </div>

        {/* Team Photo Section */}
        <div className="mb-16 rounded-2xl overflow-hidden shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=600&fit=crop&q=80" 
            alt="ZyatrIA Team" 
            className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {t.values.map((value: any, index: number) => {
            const Icon = value.icon;
            return (
              <div key={index} className="p-6 bg-card border border-border rounded-lg hover:shadow-lg transition">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-lg font-bold mb-2">{value.title}</h4>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            );
          })}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
          {t.stats.map((stat: any, index: number) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* USPs - Your Success, Our Priority */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              {language === 'fr' ? 'Votre Succès, Notre Priorité' : 'Your Success, Our Priority'}
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {language === 'fr' 
                ? 'Ce qui nous différencie vraiment des autres agences IA' 
                : 'What truly sets us apart from other AI agencies'}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.usps.map((usp: any, index: number) => {
              const Icon = usp.icon;
              return (
                <div 
                  key={index} 
                  className="p-8 bg-card border-2 border-border rounded-xl hover:border-primary/50 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-3 font-heading">{usp.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{usp.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}



















