import React, { useState } from 'react';
import { 
  FileText, 
  Video, 
  BookOpen, 
  Download, 
  Search,
  Filter,
  Star,
  Clock,
  Eye,
  Rocket,
  Zap,
  Target,
  Code,
  LifeBuoy,
  BookMarked
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import FooterResourcesSimple from './FooterResourcesSimple';

interface ResourcesTabProps {
  lang?: 'en' | 'fr' | 'es' | 'pt';
}

type TranslationKey = 'en' | 'fr' | 'es' | 'pt';

const translations: Record<TranslationKey, any> = {
  en: {
    title: 'Resources',
    subtitle: 'Documentation, guides and tutorials to master your AI agents',
    searchPlaceholder: 'Search resources...',
    filters: 'Filters',
    tabs: {
      guides: 'Guides',
      videos: 'Videos',
      docs: 'Documentation'
    },
    categories: {
      beginner: 'Beginner',
      intermediate: 'Intermediate',
      advanced: 'Advanced',
      technical: 'Technical',
      guide: 'Guide',
      support: 'Support'
    },
    actions: {
      download: 'Download',
      watch: 'Watch',
      read: 'Read'
    },
    stats: {
      downloads: 'downloads',
      views: 'views',
      pages: 'pages',
      updated: 'Updated'
    },
    popular: {
      title: 'Popular Resources',
      subtitle: 'Most viewed this month'
    }
  },
  fr: {
    title: 'Ressources',
    subtitle: 'Documentation, guides et tutoriels pour maîtriser vos agents IA',
    searchPlaceholder: 'Rechercher des ressources...',
    filters: 'Filtres',
    tabs: {
      guides: 'Guides',
      videos: 'Vidéos',
      docs: 'Documentation'
    },
    categories: {
      beginner: 'Débutant',
      intermediate: 'Intermédiaire',
      advanced: 'Avancé',
      technical: 'Technique',
      guide: 'Guide',
      support: 'Support'
    },
    actions: {
      download: 'Télécharger',
      watch: 'Regarder',
      read: 'Lire'
    },
    stats: {
      downloads: 'téléchargements',
      views: 'vues',
      pages: 'pages',
      updated: 'Mis à jour'
    },
    popular: {
      title: 'Ressources Populaires',
      subtitle: 'Les plus consultées ce mois'
    }
  },
  es: {
    title: 'Recursos',
    subtitle: 'Documentación, guías y tutoriales para dominar sus agentes IA',
    searchPlaceholder: 'Buscar recursos...',
    filters: 'Filtros',
    tabs: {
      guides: 'Guías',
      videos: 'Videos',
      docs: 'Documentación'
    },
    categories: {
      beginner: 'Principiante',
      intermediate: 'Intermedio',
      advanced: 'Avanzado',
      technical: 'Técnico',
      guide: 'Guía',
      support: 'Soporte'
    },
    actions: {
      download: 'Descargar',
      watch: 'Ver',
      read: 'Leer'
    },
    stats: {
      downloads: 'descargas',
      views: 'vistas',
      pages: 'páginas',
      updated: 'Actualizado'
    },
    popular: {
      title: 'Recursos Populares',
      subtitle: 'Los más vistos este mes'
    }
  },
  pt: {
    title: 'Recursos',
    subtitle: 'Documentação, guias e tutoriais para dominar seus agentes IA',
    searchPlaceholder: 'Pesquisar recursos...',
    filters: 'Filtros',
    tabs: {
      guides: 'Guias',
      videos: 'Vídeos',
      docs: 'Documentação'
    },
    categories: {
      beginner: 'Iniciante',
      intermediate: 'Intermediário',
      advanced: 'Avançado',
      technical: 'Técnico',
      guide: 'Guia',
      support: 'Suporte'
    },
    actions: {
      download: 'Baixar',
      watch: 'Assistir',
      read: 'Ler'
    },
    stats: {
      downloads: 'downloads',
      views: 'visualizações',
      pages: 'páginas',
      updated: 'Atualizado'
    },
    popular: {
      title: 'Recursos Populares',
      subtitle: 'Mais vistos este mês'
    }
  }
};

const resourcesData = {
  guides: [
    {
      id: 1,
      titleKey: 'quickStart',
      descriptionKey: 'quickStartDesc',
      type: 'PDF',
      size: '2.4 MB',
      downloads: 1247,
      rating: 4.8,
      categoryKey: 'beginner',
      updated: '2024-01-15'
    },
    {
      id: 2,
      titleKey: 'advancedConfig',
      descriptionKey: 'advancedConfigDesc',
      type: 'PDF',
      size: '5.1 MB',
      downloads: 892,
      rating: 4.9,
      categoryKey: 'advanced',
      updated: '2024-01-20'
    },
    {
      id: 3,
      titleKey: 'crmIntegration',
      descriptionKey: 'crmIntegrationDesc',
      type: 'PDF',
      size: '3.8 MB',
      downloads: 654,
      rating: 4.7,
      categoryKey: 'intermediate',
      updated: '2024-01-18'
    },
  ],
  videos: [
    {
      id: 1,
      titleKey: 'introAI',
      descriptionKey: 'introAIDesc',
      duration: '12:34',
      views: 3421,
      rating: 4.9,
      categoryKey: 'beginner',
      thumbnail: '/video-thumb-1.jpg'
    },
    {
      id: 2,
      titleKey: 'workflowAutomation',
      descriptionKey: 'workflowAutomationDesc',
      duration: '18:45',
      views: 2156,
      rating: 4.8,
      categoryKey: 'intermediate',
      thumbnail: '/video-thumb-2.jpg'
    },
    {
      id: 3,
      titleKey: 'analyticsReporting',
      descriptionKey: 'analyticsReportingDesc',
      duration: '15:20',
      views: 1834,
      rating: 4.7,
      categoryKey: 'advanced',
      thumbnail: '/video-thumb-3.jpg'
    },
  ],
  documentation: [
    {
      id: 1,
      titleKey: 'apiReference',
      descriptionKey: 'apiReferenceDesc',
      pages: 124,
      categoryKey: 'technical',
      updated: '2024-01-22'
    },
    {
      id: 2,
      titleKey: 'bestPractices',
      descriptionKey: 'bestPracticesDesc',
      pages: 45,
      categoryKey: 'guide',
      updated: '2024-01-19'
    },
    {
      id: 3,
      titleKey: 'troubleshooting',
      descriptionKey: 'troubleshootingDesc',
      pages: 67,
      categoryKey: 'support',
      updated: '2024-01-21'
    },
  ]
};

const contentTranslations: Record<TranslationKey, any> = {
  en: {
    quickStart: 'Quick Start Guide',
    quickStartDesc: 'Get started with your first AI agents in 15 minutes',
    advancedConfig: 'Advanced Micro-Agent Configuration',
    advancedConfigDesc: 'Optimize your agents for maximum performance',
    crmIntegration: 'CRM Integration - Complete Guide',
    crmIntegrationDesc: 'Connect your agents to your existing CRM',
    introAI: 'Introduction to AI Agents',
    introAIDesc: 'Discover the potential of intelligent agents',
    workflowAutomation: 'Workflow Automation',
    workflowAutomationDesc: 'Create powerful automated workflows',
    analyticsReporting: 'Analytics and Reporting',
    analyticsReportingDesc: 'Analyze your agents\' performance',
    apiReference: 'API Reference',
    apiReferenceDesc: 'Complete ZyatrIA API documentation',
    bestPractices: 'Best Practices',
    bestPracticesDesc: 'Best practices for using agents',
    troubleshooting: 'Troubleshooting',
    troubleshootingDesc: 'Solutions to common problems'
  },
  fr: {
    quickStart: 'Guide de Démarrage Rapide',
    quickStartDesc: 'Commencez avec vos premiers agents IA en 15 minutes',
    advancedConfig: 'Configuration Avancée des Micro-Agents',
    advancedConfigDesc: 'Optimisez vos agents pour des performances maximales',
    crmIntegration: 'Intégration CRM - Guide Complet',
    crmIntegrationDesc: 'Connectez vos agents à votre CRM existant',
    introAI: 'Introduction aux Agents IA',
    introAIDesc: 'Découvrez le potentiel des agents intelligents',
    workflowAutomation: 'Automatisation des Workflows',
    workflowAutomationDesc: 'Créez des workflows automatisés puissants',
    analyticsReporting: 'Analytics et Reporting',
    analyticsReportingDesc: 'Analysez les performances de vos agents',
    apiReference: 'API Reference',
    apiReferenceDesc: 'Documentation complète de l\'API ZyatrIA',
    bestPractices: 'Best Practices',
    bestPracticesDesc: 'Meilleures pratiques pour l\'utilisation des agents',
    troubleshooting: 'Troubleshooting',
    troubleshootingDesc: 'Solutions aux problèmes courants'
  },
  es: {
    quickStart: 'Guía de Inicio Rápido',
    quickStartDesc: 'Comience con sus primeros agentes IA en 15 minutos',
    advancedConfig: 'Configuración Avanzada de Micro-Agentes',
    advancedConfigDesc: 'Optimice sus agentes para máximo rendimiento',
    crmIntegration: 'Integración CRM - Guía Completa',
    crmIntegrationDesc: 'Conecte sus agentes a su CRM existente',
    introAI: 'Introducción a los Agentes IA',
    introAIDesc: 'Descubra el potencial de los agentes inteligentes',
    workflowAutomation: 'Automatización de Flujos de Trabajo',
    workflowAutomationDesc: 'Cree flujos de trabajo automatizados potentes',
    analyticsReporting: 'Análisis e Informes',
    analyticsReportingDesc: 'Analice el rendimiento de sus agentes',
    apiReference: 'Referencia API',
    apiReferenceDesc: 'Documentación completa de la API ZyatrIA',
    bestPractices: 'Mejores Prácticas',
    bestPracticesDesc: 'Mejores prácticas para usar agentes',
    troubleshooting: 'Solución de Problemas',
    troubleshootingDesc: 'Soluciones a problemas comunes'
  },
  pt: {
    quickStart: 'Guia de Início Rápido',
    quickStartDesc: 'Comece com seus primeiros agentes IA em 15 minutos',
    advancedConfig: 'Configuração Avançada de Micro-Agentes',
    advancedConfigDesc: 'Otimize seus agentes para máximo desempenho',
    crmIntegration: 'Integração CRM - Guia Completo',
    crmIntegrationDesc: 'Conecte seus agentes ao seu CRM existente',
    introAI: 'Introdução aos Agentes IA',
    introAIDesc: 'Descubra o potencial dos agentes inteligentes',
    workflowAutomation: 'Automação de Fluxos de Trabalho',
    workflowAutomationDesc: 'Crie fluxos de trabalho automatizados poderosos',
    analyticsReporting: 'Análises e Relatórios',
    analyticsReportingDesc: 'Analise o desempenho de seus agentes',
    apiReference: 'Referência API',
    apiReferenceDesc: 'Documentação completa da API ZyatrIA',
    bestPractices: 'Melhores Práticas',
    bestPracticesDesc: 'Melhores práticas para usar agentes',
    troubleshooting: 'Solução de Problemas',
    troubleshootingDesc: 'Soluções para problemas comuns'
  }
};

export default function ResourcesTab({ lang = 'fr' }: ResourcesTabProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'guides' | 'videos' | 'docs'>('guides');

  const t = translations[lang];
  const ct = contentTranslations[lang];

  const getCategoryBadgeStyle = (category: string) => {
    switch (category.toLowerCase()) {
      case 'débutant':
        return { background: '#DBEAFE', color: '#1E40AF', border: '1px solid #BFDBFE' };
      case 'intermédiaire':
        return { background: '#E0E7FF', color: '#4338CA', border: '1px solid #C7D2FE' };
      case 'avancé':
        return { background: '#DBEAFE', color: '#1E40AF', border: '1px solid #BFDBFE' };
      case 'technique':
        return { background: '#FEE2E2', color: '#991B1B', border: '1px solid #FECACA' };
      case 'guide':
        return { background: '#D1FAE5', color: '#065F46', border: '1px solid #A7F3D0' };
      case 'support':
        return { background: '#FEF3C7', color: '#92400E', border: '1px solid #FDE68A' };
      default:
        return { background: '#F3F4F6', color: '#374151', border: '1px solid #E5E7EB' };
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'débutant':
        return { Icon: Rocket, color: '#3B82F6', bgGradient: 'linear-gradient(135deg, #DBEAFE, #93C5FD)' };
      case 'intermédiaire':
        return { Icon: Zap, color: '#6366F1', bgGradient: 'linear-gradient(135deg, #E0E7FF, #C7D2FE)' };
      case 'avancé':
        return { Icon: Target, color: '#3B82F6', bgGradient: 'linear-gradient(135deg, #DBEAFE, #93C5FD)' };
      case 'technique':
        return { Icon: Code, color: '#DC2626', bgGradient: 'linear-gradient(135deg, #FEE2E2, #FECACA)' };
      case 'guide':
        return { Icon: BookMarked, color: '#059669', bgGradient: 'linear-gradient(135deg, #D1FAE5, #A7F3D0)' };
      case 'support':
        return { Icon: LifeBuoy, color: '#D97706', bgGradient: 'linear-gradient(135deg, #FEF3C7, #FDE68A)' };
      default:
        return { Icon: FileText, color: '#64748B', bgGradient: 'linear-gradient(135deg, #F3F4F6, #E5E7EB)' };
    }
  };

  return (
    <div style={{ padding: '40px 20px', maxWidth: '1400px', margin: '0 auto' }}>
      
      {/* Header */}
      <div style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '10px', color: '#1E293B' }}>
          {t.title}
        </h2>
        <p style={{ fontSize: '16px', color: '#64748B' }}>
          {t.subtitle}
        </p>
      </div>

      {/* Search Bar */}
      <div className="card" style={{ marginBottom: '40px', padding: '20px' }}>
        <div style={{ display: 'flex', gap: '15px', alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ position: 'relative', flex: '1', minWidth: '250px' }}>
            <Search size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#94A3B8' }} />
            <input
              type="text"
              placeholder={t.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 12px 12px 40px',
                border: '1px solid #E2E8F0',
                borderRadius: '8px',
                fontSize: '14px',
                outline: 'none',
                transition: 'border 0.3s'
              }}
              onFocus={(e) => e.target.style.borderColor = '#3B82F6'}
              onBlur={(e) => e.target.style.borderColor = '#E2E8F0'}
            />
          </div>
          <button className="btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Filter size={16} />
            {t.filters}
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ marginBottom: '30px' }}>
        <div style={{ 
          display: 'inline-flex', 
          background: '#F8FAFC', 
          padding: '6px', 
          borderRadius: '12px',
          border: '1px solid #E2E8F0',
          gap: '6px'
        }}>
          <button
            onClick={() => setActiveTab('guides')}
            style={{
              padding: '10px 20px',
              borderRadius: '8px',
              border: 'none',
              fontWeight: '600',
              fontSize: '14px',
              cursor: 'pointer',
              transition: 'all 0.3s',
              background: activeTab === 'guides' ? '#3B82F6' : 'transparent',
              color: activeTab === 'guides' ? 'white' : '#64748B',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <FileText size={16} />
            {t.tabs.guides}
          </button>
          <button
            onClick={() => setActiveTab('videos')}
            style={{
              padding: '10px 20px',
              borderRadius: '8px',
              border: 'none',
              fontWeight: '600',
              fontSize: '14px',
              cursor: 'pointer',
              transition: 'all 0.3s',
              background: activeTab === 'videos' ? '#3B82F6' : 'transparent',
              color: activeTab === 'videos' ? 'white' : '#64748B',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <Video size={16} />
            {t.tabs.videos}
          </button>
          <button
            onClick={() => setActiveTab('docs')}
            style={{
              padding: '10px 20px',
              borderRadius: '8px',
              border: 'none',
              fontWeight: '600',
              fontSize: '14px',
              cursor: 'pointer',
              transition: 'all 0.3s',
              background: activeTab === 'docs' ? '#3B82F6' : 'transparent',
              color: activeTab === 'docs' ? 'white' : '#64748B',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <BookOpen size={16} />
            {t.tabs.docs}
          </button>
        </div>
      </div>

      {/* Guides Tab */}
      {activeTab === 'guides' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '25px' }}>
          {resourcesData.guides.map((guide) => {
            const { Icon, color, bgGradient } = getCategoryIcon(t.categories[guide.categoryKey]);
            return (
              <div key={guide.id} className="card" style={{ position: 'relative' }}>
                {/* Header with Icon and Badge */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '15px' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    background: bgGradient,
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                  }}>
                    <Icon size={24} style={{ color: color }} />
                  </div>
                  <span style={{
                    ...getCategoryBadgeStyle(t.categories[guide.categoryKey]),
                    padding: '4px 12px',
                    borderRadius: '12px',
                    fontSize: '12px',
                    fontWeight: '600'
                  }}>
                    {t.categories[guide.categoryKey]}
                  </span>
                </div>

                {/* Title and Description */}
                <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px', color: '#1E293B' }}>
                  {ct[guide.titleKey]}
                </h3>
                <p style={{ fontSize: '14px', color: '#64748B', marginBottom: '20px', lineHeight: '1.5' }}>
                  {ct[guide.descriptionKey]}
                </p>

                {/* Meta Info */}
                <div style={{ marginBottom: '15px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                    <span style={{ fontSize: '13px', color: '#94A3B8' }}>
                      {guide.type} • {guide.size}
                    </span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Star size={14} style={{ color: '#FBBF24', fill: '#FBBF24' }} />
                      <span style={{ fontSize: '13px', fontWeight: '600', color: '#1E293B' }}>{guide.rating}</span>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: '#64748B' }}>
                    <Download size={14} />
                    <span>{guide.downloads} {t.stats.downloads}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <button className="btn-primary" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                  <Download size={16} />
                  {t.actions.download}
                </button>
              </div>
            );
          })}
        </div>
      )}

      {/* Videos Tab */}
      {activeTab === 'videos' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '25px' }}>
          {resourcesData.videos.map((video) => {
            const { Icon, color, bgGradient } = getCategoryIcon(t.categories[video.categoryKey]);
            return (
              <div key={video.id} className="card" style={{ padding: '0', overflow: 'hidden' }}>
                {/* Video Thumbnail */}
                <div style={{ 
                  position: 'relative', 
                  width: '100%', 
                  paddingTop: '56.25%', 
                  background: bgGradient,
                  cursor: 'pointer'
                }}>
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(0, 0, 0, 0.3)',
                    transition: 'background 0.3s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0, 0, 0, 0.5)'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(0, 0, 0, 0.3)'}
                  >
                    <div style={{
                      width: '60px',
                      height: '60px',
                      background: '#3B82F6',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <Video size={28} style={{ color: 'white' }} />
                    </div>
                  </div>
                  <div style={{
                    position: 'absolute',
                    bottom: '10px',
                    right: '10px',
                    background: 'rgba(0, 0, 0, 0.8)',
                    color: 'white',
                    padding: '4px 8px',
                    borderRadius: '6px',
                    fontSize: '12px',
                    fontWeight: '600'
                  }}>
                    {video.duration}
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <span style={{
                      ...getCategoryBadgeStyle(t.categories[video.categoryKey]),
                      padding: '4px 12px',
                      borderRadius: '12px',
                      fontSize: '12px',
                      fontWeight: '600'
                    }}>
                      {t.categories[video.categoryKey]}
                    </span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Star size={14} style={{ color: '#FBBF24', fill: '#FBBF24' }} />
                      <span style={{ fontSize: '13px', fontWeight: '600', color: '#1E293B' }}>{video.rating}</span>
                    </div>
                  </div>

                  <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px', color: '#1E293B' }}>
                    {ct[video.titleKey]}
                  </h3>
                  <p style={{ fontSize: '14px', color: '#64748B', marginBottom: '15px', lineHeight: '1.5' }}>
                    {ct[video.descriptionKey]}
                  </p>

                  <div style={{ display: 'flex', gap: '15px', marginBottom: '15px', fontSize: '13px', color: '#64748B' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Eye size={14} />
                      <span>{video.views} {t.stats.views}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Clock size={14} />
                      <span>{video.duration}</span>
                    </div>
                  </div>

                  <button className="btn-primary" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                    <Video size={16} />
                    {t.actions.watch}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Documentation Tab */}
      {activeTab === 'docs' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '25px' }}>
          {resourcesData.documentation.map((doc) => {
            const { Icon, color, bgGradient } = getCategoryIcon(t.categories[doc.categoryKey]);
            return (
              <div key={doc.id} className="card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '15px' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    background: bgGradient,
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                  }}>
                    <Icon size={24} style={{ color: color }} />
                  </div>
                  <span style={{
                    ...getCategoryBadgeStyle(t.categories[doc.categoryKey]),
                    padding: '4px 12px',
                    borderRadius: '12px',
                    fontSize: '12px',
                    fontWeight: '600'
                  }}>
                    {t.categories[doc.categoryKey]}
                  </span>
                </div>

                <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px', color: '#1E293B' }}>
                  {ct[doc.titleKey]}
                </h3>
                <p style={{ fontSize: '14px', color: '#64748B', marginBottom: '20px', lineHeight: '1.5' }}>
                  {ct[doc.descriptionKey]}
                </p>

                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: '#94A3B8', marginBottom: '15px' }}>
                  <span>{doc.pages} {t.stats.pages}</span>
                  <span>{t.stats.updated}: {new Date(doc.updated).toLocaleDateString(lang === 'en' ? 'en-US' : lang === 'fr' ? 'fr-FR' : lang === 'es' ? 'es-ES' : 'pt-PT')}</span>
                </div>

                <button className="btn-primary" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                  <BookOpen size={16} />
                  {t.actions.read}
                </button>
              </div>
            );
          })}
        </div>
      )}

      {/* Popular Resources */}
      <div className="card" style={{ marginTop: '50px', padding: '30px' }}>
        <h3 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '8px', color: '#1E293B' }}>
          {t.popular.title}
        </h3>
        <p style={{ fontSize: '14px', color: '#64748B', marginBottom: '25px' }}>
          {t.popular.subtitle}
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {[
            { titleKey: 'quickStart', type: t.tabs.guides, views: 1247 },
            { titleKey: 'introAI', type: t.tabs.videos, views: 3421 },
            { titleKey: 'apiReference', type: t.tabs.docs, views: 892 },
          ].map((item, index) => (
            <div 
              key={index}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '15px',
                border: '1px solid #E2E8F0',
                borderRadius: '10px',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#F8FAFC';
                e.currentTarget.style.transform = 'translateX(5px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'white';
                e.currentTarget.style.transform = 'translateX(0)';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  background: 'linear-gradient(135deg, #EFF6FF, #DBEAFE)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '16px',
                  fontWeight: '700',
                  color: '#3B82F6'
                }}>
                  {index + 1}
                </div>
                <div>
                  <p style={{ fontSize: '15px', fontWeight: '600', color: '#1E293B', marginBottom: '2px' }}>
                    {ct[item.titleKey]}
                  </p>
                  <p style={{ fontSize: '13px', color: '#64748B' }}>
                    {item.type}
                  </p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: '#64748B' }}>
                <Eye size={14} />
                <span>{item.views}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <FooterResourcesSimple lang={lang} />
    </div>
  );
}


