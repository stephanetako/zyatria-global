import React from 'react';
import { 
  TrendingUp, 
  Users, 
  Calendar, 
  DollarSign,
  ArrowUpRight,
  ArrowDownRight,
  Activity
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Progress } from '../ui/progress';

interface OverviewTabProps {
  lang?: 'en' | 'fr' | 'es' | 'pt';
}

type TranslationKey = 'en' | 'fr' | 'es' | 'pt';

const translations: Record<TranslationKey, any> = {
  en: {
    stats: {
      activeAgents: 'Active Agents',
      automatedTasks: 'Automated Tasks',
      users: 'Users',
      savings: 'Savings'
    },
    agentPerformance: {
      title: 'Agent Performance',
      description: 'Usage and completed tasks this month',
      tasks: 'tasks'
    },
    recentActivity: {
      title: 'Recent Activity',
      description: 'Real-time agent actions',
      timeAgo: {
        minutes: 'minutes ago',
        hour: 'hour ago',
        hours: 'hours ago'
      }
    },
    quickActions: {
      title: 'Quick Actions',
      description: 'Manage your agents and automations',
      newBooking: {
        title: 'New Booking',
        description: 'Schedule a consultation'
      },
      configureAgent: {
        title: 'Configure Agent',
        description: 'Create a new micro-agent'
      },
      viewReports: {
        title: 'View Reports',
        description: 'Detailed analytics'
      }
    },
    activities: {
      crmSync: 'Synchronized 45 contacts',
      emailSent: 'Sent 120 marketing emails',
      ticketsProcessed: 'Processed 8 tickets',
      reportGenerated: 'Generated monthly report'
    },
    agents: {
      crm: 'CRM Agent',
      email: 'Email Agent',
      support: 'Support Agent',
      analytics: 'Analytics Agent',
      social: 'Social Agent'
    }
  },
  fr: {
    stats: {
      activeAgents: 'Agents Actifs',
      automatedTasks: 'Tâches Automatisées',
      users: 'Utilisateurs',
      savings: 'Économies'
    },
    agentPerformance: {
      title: 'Performance des Agents',
      description: 'Utilisation et tâches complétées ce mois',
      tasks: 'tâches'
    },
    recentActivity: {
      title: 'Activité Récente',
      description: 'Actions des agents en temps réel',
      timeAgo: {
        minutes: 'Il y a',
        hour: 'Il y a',
        hours: 'Il y a'
      }
    },
    quickActions: {
      title: 'Actions Rapides',
      description: 'Gérez vos agents et automatisations',
      newBooking: {
        title: 'Nouvelle Réservation',
        description: 'Planifier une consultation'
      },
      configureAgent: {
        title: 'Configurer Agent',
        description: 'Créer un nouveau micro-agent'
      },
      viewReports: {
        title: 'Voir Rapports',
        description: 'Analytics détaillés'
      }
    },
    activities: {
      crmSync: 'Synchronisation de 45 contacts',
      emailSent: 'Envoi de 120 emails marketing',
      ticketsProcessed: 'Traitement de 8 tickets',
      reportGenerated: 'Génération du rapport mensuel'
    },
    agents: {
      crm: 'Agent CRM',
      email: 'Agent Email',
      support: 'Agent Support',
      analytics: 'Agent Analytics',
      social: 'Agent Social'
    }
  },
  es: {
    stats: {
      activeAgents: 'Agentes Activos',
      automatedTasks: 'Tareas Automatizadas',
      users: 'Usuarios',
      savings: 'Ahorros'
    },
    agentPerformance: {
      title: 'Rendimiento de Agentes',
      description: 'Uso y tareas completadas este mes',
      tasks: 'tareas'
    },
    recentActivity: {
      title: 'Actividad Reciente',
      description: 'Acciones de agentes en tiempo real',
      timeAgo: {
        minutes: 'Hace',
        hour: 'Hace',
        hours: 'Hace'
      }
    },
    quickActions: {
      title: 'Acciones Rápidas',
      description: 'Gestione sus agentes y automatizaciones',
      newBooking: {
        title: 'Nueva Reserva',
        description: 'Programar una consulta'
      },
      configureAgent: {
        title: 'Configurar Agente',
        description: 'Crear un nuevo micro-agente'
      },
      viewReports: {
        title: 'Ver Informes',
        description: 'Análisis detallados'
      }
    },
    activities: {
      crmSync: 'Sincronizados 45 contactos',
      emailSent: 'Enviados 120 emails de marketing',
      ticketsProcessed: 'Procesados 8 tickets',
      reportGenerated: 'Generado informe mensual'
    },
    agents: {
      crm: 'Agente CRM',
      email: 'Agente Email',
      support: 'Agente Soporte',
      analytics: 'Agente Analytics',
      social: 'Agente Social'
    }
  },
  pt: {
    stats: {
      activeAgents: 'Agentes Ativos',
      automatedTasks: 'Tarefas Automatizadas',
      users: 'Usuários',
      savings: 'Economias'
    },
    agentPerformance: {
      title: 'Desempenho dos Agentes',
      description: 'Uso e tarefas concluídas este mês',
      tasks: 'tarefas'
    },
    recentActivity: {
      title: 'Atividade Recente',
      description: 'Ações dos agentes em tempo real',
      timeAgo: {
        minutes: 'Há',
        hour: 'Há',
        hours: 'Há'
      }
    },
    quickActions: {
      title: 'Ações Rápidas',
      description: 'Gerencie seus agentes e automações',
      newBooking: {
        title: 'Nova Reserva',
        description: 'Agendar uma consulta'
      },
      configureAgent: {
        title: 'Configurar Agente',
        description: 'Criar um novo micro-agente'
      },
      viewReports: {
        title: 'Ver Relatórios',
        description: 'Análises detalhadas'
      }
    },
    activities: {
      crmSync: 'Sincronizados 45 contatos',
      emailSent: 'Enviados 120 emails de marketing',
      ticketsProcessed: 'Processados 8 tickets',
      reportGenerated: 'Gerado relatório mensal'
    },
    agents: {
      crm: 'Agente CRM',
      email: 'Agente Email',
      support: 'Agente Suporte',
      analytics: 'Agente Analytics',
      social: 'Agente Social'
    }
  }
};

export default function OverviewTab({ lang = 'fr' }: OverviewTabProps) {
  const t = translations[lang];

  const stats = [
    {
      title: t.stats.activeAgents,
      value: '12',
      change: '+2',
      trend: 'up',
      icon: Activity,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100 dark:bg-blue-900/20'
    },
    {
      title: t.stats.automatedTasks,
      value: '1,247',
      change: '+18%',
      trend: 'up',
      icon: TrendingUp,
      color: 'text-foreground',
      bgColor: 'bg-muted dark:bg-muted'
    },
    {
      title: t.stats.users,
      value: '48',
      change: '+5',
      trend: 'up',
      icon: Users,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100 dark:bg-purple-900/20'
    },
    {
      title: t.stats.savings,
      value: '$12,450',
      change: '+23%',
      trend: 'up',
      icon: DollarSign,
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
  ];

  const recentActivity = [
    {
      id: 1,
      agent: t.agents.crm,
      action: t.activities.crmSync,
      time: lang === 'en' ? '5 minutes ago' : lang === 'fr' ? 'Il y a 5 minutes' : lang === 'es' ? 'Hace 5 minutos' : 'Há 5 minutos',
      status: 'success'
    },
    {
      id: 2,
      agent: t.agents.email,
      action: t.activities.emailSent,
      time: lang === 'en' ? '15 minutes ago' : lang === 'fr' ? 'Il y a 15 minutes' : lang === 'es' ? 'Hace 15 minutos' : 'Há 15 minutos',
      status: 'success'
    },
    {
      id: 3,
      agent: t.agents.support,
      action: t.activities.ticketsProcessed,
      time: lang === 'en' ? '1 hour ago' : lang === 'fr' ? 'Il y a 1 heure' : lang === 'es' ? 'Hace 1 hora' : 'Há 1 hora',
      status: 'success'
    },
    {
      id: 4,
      agent: t.agents.analytics,
      action: t.activities.reportGenerated,
      time: lang === 'en' ? '2 hours ago' : lang === 'fr' ? 'Il y a 2 heures' : lang === 'es' ? 'Hace 2 horas' : 'Há 2 horas',
      status: 'success'
    },
  ];

  const agentPerformance = [
    { name: t.agents.crm, usage: 92, tasks: 342 },
    { name: t.agents.email, usage: 87, tasks: 289 },
    { name: t.agents.support, usage: 78, tasks: 156 },
    { name: t.agents.analytics, usage: 65, tasks: 98 },
    { name: t.agents.social, usage: 54, tasks: 67 },
  ];

  return (
    <div className="space-y-6 animate-fade-in-up">
      {/* Stats Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginBottom: '30px' }}>
        {stats.map((stat, index) => (
          <div key={index} className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '15px' }}>
              <div style={{
                width: '48px',
                height: '48px',
                background: stat.bgColor,
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <stat.icon size={24} style={{ color: stat.color }} />
              </div>
              <span style={{
                fontSize: '16px',
                fontWeight: '700',
                color: stat.trend === 'up' ? '#10B981' : '#EF4444',
                background: stat.trend === 'up' ? '#D1FAE5' : '#FEE2E2',
                padding: '4px 10px',
                borderRadius: '12px',
                border: stat.trend === 'up' ? '1px solid #A7F3D0' : '1px solid #FECACA'
              }}>
                {stat.change}
              </span>
            </div>
            <h3 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '5px', color: '#1E293B' }}>
              {stat.value}
            </h3>
            <p style={{ fontSize: '14px', color: '#64748B' }}>
              {stat.title}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Agent Performance */}
        <Card>
          <CardHeader>
            <CardTitle>{t.agentPerformance.title}</CardTitle>
            <CardDescription>{t.agentPerformance.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {agentPerformance.map((agent, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">{agent.name}</span>
                  <span className="text-muted-foreground">{agent.tasks} {t.agentPerformance.tasks}</span>
                </div>
                <Progress value={agent.usage} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>{t.recentActivity.title}</CardTitle>
            <CardDescription>{t.recentActivity.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-start gap-3 pb-4 border-b border-border last:border-0 last:pb-0">
                  <div className="w-2 h-2 mt-2 rounded-full bg-primary animate-pulse" />
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium">{activity.agent}</p>
                    <p className="text-sm text-muted-foreground">{activity.action}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>{t.quickActions.title}</CardTitle>
          <CardDescription>{t.quickActions.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="p-4 border border-border rounded-lg hover:bg-accent transition-colors text-left group">
              <Calendar className="h-8 w-8 text-primary mb-2 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold mb-1">{t.quickActions.newBooking.title}</h3>
              <p className="text-sm text-muted-foreground">{t.quickActions.newBooking.description}</p>
            </button>
            
            <button className="p-4 border border-border rounded-lg hover:bg-accent transition-colors text-left group">
              <Activity className="h-8 w-8 text-primary mb-2 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold mb-1">{t.quickActions.configureAgent.title}</h3>
              <p className="text-sm text-muted-foreground">{t.quickActions.configureAgent.description}</p>
            </button>
            
            <button className="p-4 border border-border rounded-lg hover:bg-accent transition-colors text-left group">
              <TrendingUp className="h-8 w-8 text-primary mb-2 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold mb-1">{t.quickActions.viewReports.title}</h3>
              <p className="text-sm text-muted-foreground">{t.quickActions.viewReports.description}</p>
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}


