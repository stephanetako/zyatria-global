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

const stats = [
  {
    title: 'Agents Actifs',
    value: '12',
    change: '+2',
    trend: 'up',
    icon: Activity,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100 dark:bg-blue-900/20'
  },
  {
    title: 'Tâches Automatisées',
    value: '1,247',
    change: '+18%',
    trend: 'up',
    icon: TrendingUp,
    color: 'text-green-600',
    bgColor: 'bg-green-100 dark:bg-green-900/20'
  },
  {
    title: 'Utilisateurs',
    value: '48',
    change: '+5',
    trend: 'up',
    icon: Users,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100 dark:bg-purple-900/20'
  },
  {
    title: 'Économies',
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
    agent: 'Agent CRM',
    action: 'Synchronisation de 45 contacts',
    time: 'Il y a 5 minutes',
    status: 'success'
  },
  {
    id: 2,
    agent: 'Agent Email',
    action: 'Envoi de 120 emails marketing',
    time: 'Il y a 15 minutes',
    status: 'success'
  },
  {
    id: 3,
    agent: 'Agent Support',
    action: 'Traitement de 8 tickets',
    time: 'Il y a 1 heure',
    status: 'success'
  },
  {
    id: 4,
    agent: 'Agent Analytics',
    action: 'Génération du rapport mensuel',
    time: 'Il y a 2 heures',
    status: 'success'
  },
];

const agentPerformance = [
  { name: 'Agent CRM', usage: 92, tasks: 342 },
  { name: 'Agent Email', usage: 87, tasks: 289 },
  { name: 'Agent Support', usage: 78, tasks: 156 },
  { name: 'Agent Analytics', usage: 65, tasks: 98 },
  { name: 'Agent Social', usage: 54, tasks: 67 },
];

export default function OverviewTab() {
  return (
    <div className="space-y-6 animate-fade-in-up">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          const TrendIcon = stat.trend === 'up' ? ArrowUpRight : ArrowDownRight;
          
          return (
            <Card key={index} className="hover-lift">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                  <Icon className={`h-4 w-4 ${stat.color}`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="flex items-center gap-1 mt-1">
                  <TrendIcon className={`h-4 w-4 ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`} />
                  <span className={`text-sm font-medium ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                    {stat.change}
                  </span>
                  <span className="text-sm text-muted-foreground">vs mois dernier</span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Agent Performance */}
        <Card>
          <CardHeader>
            <CardTitle>Performance des Agents</CardTitle>
            <CardDescription>Utilisation et tâches complétées ce mois</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {agentPerformance.map((agent, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">{agent.name}</span>
                  <span className="text-muted-foreground">{agent.tasks} tâches</span>
                </div>
                <Progress value={agent.usage} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Activité Récente</CardTitle>
            <CardDescription>Actions des agents en temps réel</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-start gap-3 pb-4 border-b border-border last:border-0 last:pb-0">
                  <div className="w-2 h-2 mt-2 rounded-full bg-green-500 animate-pulse" />
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
          <CardTitle>Actions Rapides</CardTitle>
          <CardDescription>Gérez vos agents et automatisations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="p-4 border border-border rounded-lg hover:bg-accent transition-colors text-left group">
              <Calendar className="h-8 w-8 text-primary mb-2 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold mb-1">Nouvelle Réservation</h3>
              <p className="text-sm text-muted-foreground">Planifier une consultation</p>
            </button>
            
            <button className="p-4 border border-border rounded-lg hover:bg-accent transition-colors text-left group">
              <Activity className="h-8 w-8 text-primary mb-2 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold mb-1">Configurer Agent</h3>
              <p className="text-sm text-muted-foreground">Créer un nouveau micro-agent</p>
            </button>
            
            <button className="p-4 border border-border rounded-lg hover:bg-accent transition-colors text-left group">
              <TrendingUp className="h-8 w-8 text-primary mb-2 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold mb-1">Voir Rapports</h3>
              <p className="text-sm text-muted-foreground">Analytics détaillés</p>
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
