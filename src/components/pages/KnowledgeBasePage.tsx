import React, { useState } from 'react';
import { 
  Book, 
  Search,
  ChevronRight,
  FileText,
  Code,
  Zap,
  Settings,
  HelpCircle,
  Video,
  Download,
  ExternalLink,
  BookOpen,
  Lightbulb,
  MessageCircle
} from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Input } from '../ui/input';

interface KnowledgeBasePageProps {
  lang?: 'en' | 'fr' | 'es' | 'pt';
}

export default function KnowledgeBasePage({ lang = 'en' }: KnowledgeBasePageProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const translations = {
    en: {
      hero: {
        badge: "Knowledge Base",
        title: "ZyatrIA Global Help Center",
        subtitle: "Everything you need to know about AI agents, automation, and deployment",
        searchPlaceholder: "Search for help..."
      },
      categories: {
        title: "Browse by Category",
        items: [
          {
            icon: Book,
            title: "Getting Started",
            description: "Begin your journey with AI agents",
            articles: 12,
            slug: "getting-started",
            color: "bg-gradient-primary"
          },
          {
            icon: Code,
            title: "Technical Documentation",
            description: "API references and code examples",
            articles: 24,
            slug: "technical",
            color: "bg-gradient-accent"
          },
          {
            icon: Zap,
            title: "Integrations",
            description: "Connect with your favorite tools",
            articles: 18,
            slug: "integrations",
            color: "bg-gradient-warm"
          },
          {
            icon: Settings,
            title: "Configuration",
            description: "Set up and customize your agents",
            articles: 15,
            slug: "configuration",
            color: "bg-gradient-cool"
          },
          {
            icon: HelpCircle,
            title: "Troubleshooting",
            description: "Common issues and solutions",
            articles: 20,
            slug: "troubleshooting",
            color: "bg-gradient-sunset"
          },
          {
            icon: Lightbulb,
            title: "Best Practices",
            description: "Tips from our experts",
            articles: 16,
            slug: "best-practices",
            color: "bg-gradient-ocean"
          }
        ]
      },
      popular: {
        title: "Popular Articles",
        articles: [
          {
            icon: FileText,
            title: "How to Deploy Your First AI Agent",
            description: "Step-by-step guide for beginners",
            readTime: "5 min read",
            views: "12.5K views"
          },
          {
            icon: Code,
            title: "Connecting Webflow Forms to AI Agents",
            description: "Complete integration tutorial",
            readTime: "8 min read",
            views: "8.2K views"
          },
          {
            icon: Settings,
            title: "Configuring Autonomy Rules",
            description: "Define when agents act vs. escalate",
            readTime: "10 min read",
            views: "6.8K views"
          },
          {
            icon: Zap,
            title: "Make.com Scenario Templates",
            description: "Pre-built workflows you can import",
            readTime: "6 min read",
            views: "9.1K views"
          }
        ]
      },
      resources: {
        title: "Additional Resources",
        items: [
          {
            icon: Video,
            title: "Video Tutorials",
            description: "Watch step-by-step guides",
            link: "/tutorials",
            badge: "12 videos"
          },
          {
            icon: Download,
            title: "Downloadable Templates",
            description: "Ready-to-use configurations",
            link: "/templates",
            badge: "8 templates"
          },
          {
            icon: BookOpen,
            title: "API Reference",
            description: "Complete API documentation",
            link: "/api-reference",
            badge: "Full docs"
          },
          {
            icon: MessageCircle,
            title: "Community Forum",
            description: "Connect with other users",
            link: "/forum",
            badge: "Active"
          }
        ]
      },
      guides: {
        title: "Step-by-Step Guides",
        items: [
          {
            title: "Quick Start (15 minutes)",
            steps: [
              "Create your ZyatrIA account",
              "Choose your AI model (GPT-4 recommended)",
              "Connect your first integration",
              "Deploy a simple lead qualification agent",
              "Test with sample data"
            ]
          },
          {
            title: "Production Setup (1-2 hours)",
            steps: [
              "Configure all required API keys",
              "Set up orchestration platform (Make/Zapier)",
              "Connect CRM and databases",
              "Define autonomy rules",
              "Run comprehensive tests",
              "Deploy to production with monitoring"
            ]
          },
          {
            title: "Advanced Configuration (2-4 hours)",
            steps: [
              "Implement custom business logic",
              "Set up multi-agent workflows",
              "Configure advanced error handling",
              "Optimize for high volume",
              "Integrate with proprietary systems",
              "Set up analytics and reporting"
            ]
          }
        ]
      },
      support: {
        title: "Still Need Help?",
        description: "Our support team is here 24/7",
        channels: [
          { icon: "💬", label: "Live Chat", value: "Available now", action: "Start Chat" },
          { icon: "📧", label: "Email Support", value: "tech@zyatria.global", action: "Send Email" },
          { icon: "📞", label: "Phone Support", value: "+1 (555) 123-4567", action: "Call Now" },
          { icon: "📅", label: "Book a Call", value: "1-on-1 assistance", action: "Schedule" }
        ]
      }
    },
    fr: {
      hero: {
        badge: "Base de Connaissances",
        title: "Centre d'Aide ZyatrIA Global",
        subtitle: "Tout ce que vous devez savoir sur les agents IA, l'automation et le déploiement",
        searchPlaceholder: "Rechercher de l'aide..."
      },
      categories: {
        title: "Parcourir par Catégorie",
        items: [
          {
            icon: Book,
            title: "Démarrage",
            description: "Commencez votre parcours avec les agents IA",
            articles: 12,
            slug: "demarrage",
            color: "bg-gradient-primary"
          },
          {
            icon: Code,
            title: "Documentation Technique",
            description: "Références API et exemples de code",
            articles: 24,
            slug: "technique",
            color: "bg-gradient-accent"
          },
          {
            icon: Zap,
            title: "Intégrations",
            description: "Connectez vos outils préférés",
            articles: 18,
            slug: "integrations",
            color: "bg-gradient-warm"
          },
          {
            icon: Settings,
            title: "Configuration",
            description: "Configurez et personnalisez vos agents",
            articles: 15,
            slug: "configuration",
            color: "bg-gradient-cool"
          },
          {
            icon: HelpCircle,
            title: "Dépannage",
            description: "Problèmes courants et solutions",
            articles: 20,
            slug: "depannage",
            color: "bg-gradient-sunset"
          },
          {
            icon: Lightbulb,
            title: "Bonnes Pratiques",
            description: "Conseils de nos experts",
            articles: 16,
            slug: "bonnes-pratiques",
            color: "bg-gradient-ocean"
          }
        ]
      },
      support: {
        title: "Besoin d'Aide ?",
        description: "Notre équipe est disponible 24/7",
        channels: [
          { icon: "💬", label: "Chat en Direct", value: "Disponible maintenant", action: "Démarrer" },
          { icon: "📧", label: "Support Email", value: "tech@zyatria.global", action: "Envoyer" },
          { icon: "📞", label: "Support Téléphone", value: "+1 (555) 123-4567", action: "Appeler" },
          { icon: "📅", label: "Réserver un Appel", value: "Assistance 1-à-1", action: "Planifier" }
        ]
      }
    }
  };

  const t = translations[lang];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero with Search */}
      <section className="relative py-20 bg-gradient-hero text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-0 backdrop-blur">
              {t.hero.badge}
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
              {t.hero.title}
            </h1>
            <p className="text-xl mb-8 opacity-90">
              {t.hero.subtitle}
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder={t.hero.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-6 text-lg bg-white text-foreground"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-12">
            {t.categories.title}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.categories.items.map((category: any, idx: number) => {
              const Icon = category.icon;
              return (
                <Card 
                  key={idx}
                  className="p-6 hover:shadow-xl transition-all duration-300 cursor-pointer group hover:scale-105"
                >
                  <div className={`w-14 h-14 ${category.color} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold font-heading mb-2 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {category.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">{category.articles} articles</Badge>
                    <ChevronRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-12">
            {t.popular.title}
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {t.popular.articles.map((article: any, idx: number) => {
              const Icon = article.icon;
              return (
                <Card 
                  key={idx}
                  className="p-6 hover:shadow-xl transition-all duration-300 cursor-pointer group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-muted-foreground mb-3">
                        {article.description}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>📖 {article.readTime}</span>
                        <span>👁️ {article.views}</span>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform flex-shrink-0" />
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Step-by-Step Guides */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-12">
            {t.guides.title}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {t.guides.items.map((guide: any, idx: number) => (
              <Card key={idx} className="p-6 hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold font-heading mb-4 text-gradient-primary">
                  {guide.title}
                </h3>
                <ol className="space-y-3">
                  {guide.steps.map((step: string, stepIdx: number) => (
                    <li key={stepIdx} className="flex items-start gap-2">
                      <span className="w-6 h-6 bg-gradient-primary rounded-full flex items-center justify-center text-white text-xs flex-shrink-0 mt-0.5">
                        {stepIdx + 1}
                      </span>
                      <span className="text-sm">{step}</span>
                    </li>
                  ))}
                </ol>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-12">
            {t.resources.title}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {t.resources.items.map((resource: any, idx: number) => {
              const Icon = resource.icon;
              return (
                <Card 
                  key={idx}
                  className="p-6 text-center hover:shadow-xl transition-all duration-300 cursor-pointer group hover:scale-105"
                >
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {resource.description}
                  </p>
                  <Badge variant="secondary">{resource.badge}</Badge>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="p-12 max-w-4xl mx-auto bg-gradient-hero text-white border-0 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-4">
              {t.support.title}
            </h2>
            <p className="text-center text-xl mb-8 opacity-90">
              {t.support.description}
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {t.support.channels.map((channel: any, idx: number) => (
                <div key={idx} className="bg-white/10 backdrop-blur rounded-lg p-6 text-center">
                  <div className="text-4xl mb-2">{channel.icon}</div>
                  <h3 className="font-bold mb-1">{channel.label}</h3>
                  <p className="text-sm opacity-75 mb-4">{channel.value}</p>
                  <Button variant="secondary" className="bg-white text-primary hover:bg-white/90">
                    {channel.action}
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
