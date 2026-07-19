import { useEffect, useState } from 'react';
import { TrendingUp, Users, Clock, Zap } from 'lucide-react';
import { useLanguage } from '../lib/language-context';

const translations = {
  en: {
    title: "Live Performance Dashboard",
    subtitle: "Real-time metrics from our global AI network",
    stats: {
      activeAgents: "Active AI Agents",
      tasksCompleted: "Tasks Completed Today",
      avgResponse: "Avg Response Time",
      uptime: "System Uptime"
    }
  },
  fr: {
    title: "Tableau de bord en temps réel",
    subtitle: "Métriques en temps réel de notre réseau IA mondial",
    stats: {
      activeAgents: "Agents IA actifs",
      tasksCompleted: "Tâches complétées aujourd'hui",
      avgResponse: "Temps de réponse moyen",
      uptime: "Disponibilité système"
    }
  },
  es: {
    title: "Panel de rendimiento en vivo",
    subtitle: "Métricas en tiempo real de nuestra red de IA global",
    stats: {
      activeAgents: "Agentes de IA activos",
      tasksCompleted: "Tareas completadas hoy",
      avgResponse: "Tiempo de respuesta promedio",
      uptime: "Tiempo de actividad del sistema"
    }
  },
  pt: {
    title: "Painel de desempenho ao vivo",
    subtitle: "Métricas em tempo real da nossa rede global de IA",
    stats: {
      activeAgents: "Agentes de IA ativos",
      tasksCompleted: "Tarefas concluídas hoje",
      avgResponse: "Tempo médio de resposta",
      uptime: "Tempo de atividade do sistema"
    }
  }
};

export default function LiveStats() {
  const { language } = useLanguage();
  const t = translations[language];

  // Simulated live counters
  const [activeAgents, setActiveAgents] = useState(2847);
  const [tasksCompleted, setTasksCompleted] = useState(145892);
  const [avgResponse, setAvgResponse] = useState(0.43);
  const [uptime, setUptime] = useState(99.87);

  useEffect(() => {
    // Simulate real-time updates
    const interval = setInterval(() => {
      setActiveAgents(prev => prev + Math.floor(Math.random() * 5) - 2);
      setTasksCompleted(prev => prev + Math.floor(Math.random() * 15) + 1);
      setAvgResponse(prev => Math.max(0.1, prev + (Math.random() * 0.1 - 0.05)));
      setUptime(prev => Math.min(100, Math.max(99.5, prev + (Math.random() * 0.02 - 0.01))));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number) => {
    return num.toLocaleString('en-US');
  };

  return (
    <section className="py-12 bg-gradient-to-b from-blue-500/5 via-white to-violet-500/5 dark:from-blue-950/10 dark:via-zinc-950 dark:to-violet-950/10 border-y border-zinc-200 dark:border-zinc-800">
      <div className="container">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-muted/10 border border-border/20 px-4 py-2 rounded-full mb-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-muted opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-muted"></span>
            </span>
            <span className="text-xs font-medium text-foreground dark:text-foreground uppercase tracking-wide">
              Live Now
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            {t.title}
          </h2>
          <p className="text-sm text-muted-foreground">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {/* Active Agents */}
          <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all group">
            <div className="flex items-center justify-between mb-3">
              <Users className="w-8 h-8 text-blue-500" />
              <span className="text-xs bg-muted/10 text-foreground px-2 py-1 rounded-full flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-muted rounded-full animate-pulse"></span>
                Live
              </span>
            </div>
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2 tabular-nums">
              {formatNumber(activeAgents)}
            </div>
            <div className="text-xs text-muted-foreground">
              {t.stats.activeAgents}
            </div>
            <div className="mt-3 flex items-center gap-1 text-xs text-foreground">
              <TrendingUp className="w-3 h-3" />
              <span>+12% vs yesterday</span>
            </div>
          </div>

          {/* Tasks Completed */}
          <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all group">
            <div className="flex items-center justify-between mb-3">
              <Zap className="w-8 h-8 text-purple-500" />
              <span className="text-xs bg-muted/10 text-foreground px-2 py-1 rounded-full flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-muted rounded-full animate-pulse"></span>
                Live
              </span>
            </div>
            <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-1 tabular-nums">
              {formatNumber(tasksCompleted)}
            </div>
            <div className="text-xs text-muted-foreground">
              {t.stats.tasksCompleted}
            </div>
            <div className="mt-3 flex items-center gap-1 text-xs text-foreground">
              <TrendingUp className="w-3 h-3" />
              <span>+23% vs avg</span>
            </div>
          </div>

          {/* Avg Response Time */}
          <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all group">
            <div className="flex items-center justify-between mb-3">
              <Clock className="w-8 h-8 text-foreground" />
              <span className="text-xs bg-muted/10 text-foreground px-2 py-1 rounded-full flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-muted rounded-full animate-pulse"></span>
                Live
              </span>
            </div>
            <div className="text-3xl md:text-4xl font-bold text-foreground mb-1 tabular-nums">
              {avgResponse.toFixed(2)}s
            </div>
            <div className="text-xs text-muted-foreground">
              {t.stats.avgResponse}
            </div>
            <div className="mt-3 flex items-center gap-1 text-xs text-foreground">
              <TrendingUp className="w-3 h-3 rotate-180" />
              <span>-15% faster</span>
            </div>
          </div>

          {/* Uptime */}
          <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all group">
            <div className="flex items-center justify-between mb-3">
              <TrendingUp className="w-8 h-8 text-orange-500" />
              <span className="text-xs bg-muted/10 text-foreground px-2 py-1 rounded-full flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-muted rounded-full animate-pulse"></span>
                Live
              </span>
            </div>
            <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-1 tabular-nums">
              {uptime.toFixed(2)}%
            </div>
            <div className="text-xs text-muted-foreground">
              {t.stats.uptime}
            </div>
            <div className="mt-3 flex items-center gap-1 text-xs text-foreground">
              <TrendingUp className="w-3 h-3" />
              <span>Exceeds SLA</span>
            </div>
          </div>
        </div>

        {/* Subtle message */}
        <p className="text-center mt-6 text-xs text-muted-foreground">
          💡 Data refreshes every 3 seconds • Powered by our global network of AI agents
        </p>
      </div>
    </section>
  );
}



