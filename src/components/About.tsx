




import React from 'react';
import { Card } from './ui/card';
import { Globe2, Users, Award, TrendingUp, Shield, Lightbulb, Globe, Zap, Lock } from 'lucide-react';

interface AboutProps {
  lang?: string;
}

const About: React.FC<AboutProps> = ({ lang = 'en' }) => {
  const content: Record<string, any> = {
    en: {
      badge: 'About ZyatrIA Global',
      title: 'Building the Future of AI, ',
      titleHighlight: 'Without Borders',
      description: 'We are a Canadian company proudly based in Quebec, with a global team of AI specialists, engineers, and innovators dedicated to making advanced AI technology accessible to businesses worldwide. Our mission is to break down barriers and deliver intelligent solutions that transcend geographical and cultural boundaries.',
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
    },
    fr: {
      badge: 'À Propos de ZyatrIA Global',
      title: 'Construire l\'Avenir de l\'IA, ',
      titleHighlight: 'Sans Frontières',
      description: 'Nous sommes une entreprise canadienne fièrement établie au Québec, avec une équipe mondiale de spécialistes IA, d\'ingénieurs et d\'innovateurs dédiés à rendre la technologie IA avancée accessible aux entreprises du monde entier. Notre mission est d\'éliminer les barrières et de fournir des solutions intelligentes qui transcendent les frontières géographiques et culturelles.',
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
    },
    es: {
      badge: 'Acerca de ZyatrIA Global',
      title: 'Construyendo el Futuro de la IA, ',
      titleHighlight: 'Sin Fronteras',
      description: 'Somos una empresa canadiense orgullosamente establecida en Quebec, con un equipo global de especialistas en IA, ingenieros e innovadores dedicados a hacer accesible la tecnología IA avanzada a empresas de todo el mundo. Nuestra misión es derribar barreras y entregar soluciones inteligentes que trascienden fronteras geográficas y culturales.',
      location: '🇨🇦 Empresa Canadiense | Con Sede en Quebec',
      mission: {
        title: 'Nuestra Misión',
        text: 'Democratizar la tecnología IA y empoderar a empresas de todos los continentes con soluciones inteligentes, accesibles e impactantes.',
      },
      vision: {
        title: 'Nuestra Visión',
        text: 'Un mundo donde cada organización, sin importar su tamaño o ubicación, pueda aprovechar la IA de vanguardia para lograr resultados extraordinarios.',
      },
      values: [
        {
          icon: Globe2,
          title: 'Perspectiva Global',
          description: 'Operando en todos los continentes con experiencia local y alcance mundial.',
        },
        {
          icon: Users,
          title: 'Centrado en el Cliente',
          description: 'Su éxito es nuestra prioridad. Construimos soluciones que generan resultados reales.',
        },
        {
          icon: Award,
          title: 'Excelencia',
          description: 'Comprometidos a entregar la más alta calidad en cada proyecto.',
        },
        {
          icon: TrendingUp,
          title: 'Innovación',
          description: 'Empujando constantemente límites para estar a la vanguardia de la IA.',
        },
        {
          icon: Shield,
          title: 'Confianza y Seguridad',
          description: 'Sus datos y privacidad son fundamentales en todo lo que hacemos.',
        },
        {
          icon: Lightbulb,
          title: 'Creatividad',
          description: 'Pensar diferente para resolver desafíos complejos con soluciones elegantes.',
        },
      ],
      stats: [
        { value: '50+', label: 'Especialistas IA' },
        { value: '40+', label: 'Países' },
        { value: '200+', label: 'Proyectos Entregados' },
        { value: '15+', label: 'Industrias Atendidas' },
      ],
    },
    pt: {
      badge: 'Sobre ZyatrIA Global',
      title: 'Construindo o Futuro da IA, ',
      titleHighlight: 'Sem Fronteiras',
      description: 'Somos uma empresa canadense orgulhosamente estabelecida em Quebec, com uma equipe global de especialistas em IA, engenheiros e inovadores dedicados a tornar a tecnologia IA avançada acessível a empresas em todo o mundo. Nossa missão é quebrar barreiras e entregar soluções inteligentes que transcendem fronteiras geográficas e culturais.',
      location: '🇨🇦 Empresa Canadense | Sediada em Quebec',
      mission: {
        title: 'Nossa Missão',
        text: 'Democratizar a tecnologia IA e capacitar empresas em todos os continentes com soluções inteligentes, acessíveis e impactantes.',
      },
      vision: {
        title: 'Nossa Visão',
        text: 'Um mundo onde cada organização, independentemente do tamanho ou localização, possa aproveitar IA de ponta para alcançar resultados extraordinários.',
      },
      values: [
        {
          icon: Globe2,
          title: 'Perspectiva Global',
          description: 'Operando em todos os continentes com experiência local e alcance mundial.',
        },
        {
          icon: Users,
          title: 'Centrado no Cliente',
          description: 'Seu sucesso é nossa prioridade. Construímos soluções que geram resultados reais.',
        },
        {
          icon: Award,
          title: 'Excelência',
          description: 'Comprometidos a entregar a mais alta qualidade em cada projeto.',
        },
        {
          icon: TrendingUp,
          title: 'Inovação',
          description: 'Empurrando constantemente limites para ficar à frente da curva da IA.',
        },
        {
          icon: Shield,
          title: 'Confiança e Segurança',
          description: 'Seus dados e privacidade são fundamentais em tudo o que fazemos.',
        },
        {
          icon: Lightbulb,
          title: 'Criatividade',
          description: 'Pensar diferente para resolver desafios complexos com soluções elegantes.',
        },
      ],
      stats: [
        { value: '50+', label: 'Especialistas IA' },
        { value: '40+', label: 'Países' },
        { value: '200+', label: 'Projetos Entregues' },
        { value: '15+', label: 'Setores Atendidos' },
      ],
    },
  };

  const translations = {
    en: {
      badge: "Why ZyatrIA",
      title: "We Don't Just Build Technology—We Solve Real Business Problems",
      subtitle: "Your Success Is Our Mission",
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
      title: "Nous Ne Construisons Pas Que de la Technologie—Nous Résolvons de Vrais Problèmes Business",
      subtitle: "Votre Succès Est Notre Mission",
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
    },
    es: {
      badge: "Por Qué ZyatrIA",
      title: "No Solo Construimos Tecnología—Resolvemos Problemas Reales de Negocio",
      subtitle: "Su Éxito Es Nuestra Misión",
      usps: [
        {
          icon: Globe,
          title: "Experiencia Internacional Que Habla Su Idioma",
          description: "Operando en América del Norte, Europa, África y América Latina. Entendemos su mercado, regulaciones y cultura empresarial—no solo su zona horaria."
        },
        {
          icon: Zap,
          title: "Resultados en Días, No en Meses",
          description: "Mientras otros pasan 3-6 meses planificando, nosotros implementamos soluciones funcionales en 10-15 días. ROI desde la primera semana, no en el cuarto trimestre."
        },
        {
          icon: Shield,
          title: "Construido Para Su Negocio, No Plantillas Genéricas",
          description: "Cada solución es personalizada para su sector, sus desafíos, sus objetivos. Inmobiliaria, e-commerce, coaching—sabemos qué funciona porque ya lo hemos hecho."
        },
        {
          icon: Users,
          title: "Soporte Humano + Tecnología Inteligente",
          description: "La tecnología maneja el trabajo repetitivo. Nuestro equipo maneja estrategia, optimización y se asegura de su éxito. Obtiene ambos, no solo software."
        },
        {
          icon: TrendingUp,
          title: "Pague Por Resultados, No Por Horas",
          description: "Precio mensual fijo. Sin facturas sorpresa. Sin honorarios de consultoría infinitos. Sabe exactamente qué paga y qué obtiene—más leads, más ventas, más tiempo."
        },
        {
          icon: Lock,
          title: "Seguridad Empresarial, Velocidad Startup",
          description: "Cumple GDPR, infraestructura certificada SOC 2. Sus datos protegidos como un banco, pero implementa como una startup tech. Lo mejor de ambos mundos."
        }
      ]
    },
    pt: {
      badge: "Por Que ZyatrIA",
      title: "Não Apenas Construímos Tecnologia—Resolvemos Problemas Reais de Negócio",
      subtitle: "Seu Sucesso É Nossa Missão",
      usps: [
        {
          icon: Globe,
          title: "Expertise Internacional Que Fala Sua Língua",
          description: "Operando na América do Norte, Europa, África e América Latina. Entendemos seu mercado, regulamentações e cultura empresarial—não apenas seu fuso horário."
        },
        {
          icon: Zap,
          title: "Resultados em Dias, Não em Meses",
          description: "Enquanto outros gastam 3-6 meses planejando, implementamos soluções funcionais em 10-15 dias. ROI desde a primeira semana, não no quarto trimestre."
        },
        {
          icon: Shield,
          title: "Construído Para Seu Negócio, Não Templates Genéricos",
          description: "Cada solução é personalizada para seu setor, seus desafios, seus objetivos. Imobiliário, e-commerce, coaching—sabemos o que funciona porque já fizemos antes."
        },
        {
          icon: Users,
          title: "Suporte Humano + Tecnologia Inteligente",
          description: "A tecnologia cuida do trabalho repetitivo. Nossa equipe cuida da estratégia, otimização e garante seu sucesso. Você tem ambos, não apenas software."
        },
        {
          icon: TrendingUp,
          title: "Pague Por Resultados, Não Por Horas",
          description: "Preço mensal fixo. Sem contas surpresa. Sem taxas de consultoria infinitas. Você sabe exatamente o que paga e o que recebe—mais leads, mais vendas, mais tempo."
        },
        {
          icon: Lock,
          title: "Segurança Empresarial, Velocidade Startup",
          description: "Conforme GDPR, infraestrutura certificada SOC 2. Seus dados protegidos como um banco, mas você implementa como uma startup tech. O melhor dos dois mundos."
        }
      ]
    }
  };

  const t = content[lang];

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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {t.stats.map((stat: any, index: number) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;






