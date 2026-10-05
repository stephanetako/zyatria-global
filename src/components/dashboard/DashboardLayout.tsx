import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Calendar, 
  FileText, 
  Settings, 
  Users, 
  BarChart3,
  Bell,
  LogOut,
  Menu,
  X,
  ChevronDown,
  Globe
} from 'lucide-react';
import { Button } from '../ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

interface DashboardLayoutProps {
  children: React.ReactNode;
  activeTab: string;
  onTabChange: (tab: string) => void;
  lang?: 'en' | 'fr' | 'es' | 'pt';
  onLangChange?: (lang: 'en' | 'fr' | 'es' | 'pt') => void;
}

type TranslationKey = 'en' | 'fr' | 'es' | 'pt';

const translations: Record<TranslationKey, any> = {
  en: {
    navigation: [
      { id: 'overview', name: 'Overview', icon: LayoutDashboard },
      { id: 'bookings', name: 'Bookings', icon: Calendar },
      { id: 'resources', name: 'Resources', icon: FileText },
      { id: 'analytics', name: 'Analytics', icon: BarChart3 },
      { id: 'team', name: 'Team', icon: Users },
      { id: 'settings', name: 'Settings', icon: Settings },
    ],
    user: {
      myAccount: 'My Account',
      settings: 'Settings',
      notifications: 'Notifications',
      logout: 'Logout'
    },
    languages: {
      en: 'English',
      fr: 'Français',
      es: 'Español',
      pt: 'Português'
    }
  },
  fr: {
    navigation: [
      { id: 'overview', name: 'Vue d\'ensemble', icon: LayoutDashboard },
      { id: 'bookings', name: 'Réservations', icon: Calendar },
      { id: 'resources', name: 'Ressources', icon: FileText },
      { id: 'analytics', name: 'Analytics', icon: BarChart3 },
      { id: 'team', name: 'Équipe', icon: Users },
      { id: 'settings', name: 'Paramètres', icon: Settings },
    ],
    user: {
      myAccount: 'Mon compte',
      settings: 'Paramètres',
      notifications: 'Notifications',
      logout: 'Déconnexion'
    },
    languages: {
      en: 'English',
      fr: 'Français',
      es: 'Español',
      pt: 'Português'
    }
  },
  es: {
    navigation: [
      { id: 'overview', name: 'Resumen', icon: LayoutDashboard },
      { id: 'bookings', name: 'Reservas', icon: Calendar },
      { id: 'resources', name: 'Recursos', icon: FileText },
      { id: 'analytics', name: 'Analíticas', icon: BarChart3 },
      { id: 'team', name: 'Equipo', icon: Users },
      { id: 'settings', name: 'Configuración', icon: Settings },
    ],
    user: {
      myAccount: 'Mi cuenta',
      settings: 'Configuración',
      notifications: 'Notificaciones',
      logout: 'Cerrar sesión'
    },
    languages: {
      en: 'English',
      fr: 'Français',
      es: 'Español',
      pt: 'Português'
    }
  },
  pt: {
    navigation: [
      { id: 'overview', name: 'Visão Geral', icon: LayoutDashboard },
      { id: 'bookings', name: 'Reservas', icon: Calendar },
      { id: 'resources', name: 'Recursos', icon: FileText },
      { id: 'analytics', name: 'Análises', icon: BarChart3 },
      { id: 'team', name: 'Equipe', icon: Users },
      { id: 'settings', name: 'Configurações', icon: Settings },
    ],
    user: {
      myAccount: 'Minha conta',
      settings: 'Configurações',
      notifications: 'Notificações',
      logout: 'Sair'
    },
    languages: {
      en: 'English',
      fr: 'Français',
      es: 'Español',
      pt: 'Português'
    }
  }
};

export default function DashboardLayout({ 
  children, 
  activeTab, 
  onTabChange,
  lang = 'fr',
  onLangChange
}: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notifications] = useState(3);

  const t = translations[lang];
  const navigation = t.navigation;

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed top-0 left-0 z-50 h-full w-64 bg-card border-r border-border
        transform transition-transform duration-300 ease-in-out
        lg:translate-x-0
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">Z</span>
              </div>
              <span className="font-heading font-bold text-xl">ZyatrIA</span>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onTabChange(item.id);
                    setSidebarOpen(false);
                  }}
                  className={`
                    w-full flex items-center gap-3 px-4 py-3 rounded-lg
                    transition-all duration-200
                    ${isActive 
                      ? 'bg-primary text-primary-foreground shadow-sm' 
                      : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                    }
                  `}
                >
                  <Icon className="h-5 w-5" />
                  <span className="font-medium">{item.name}</span>
                </button>
              );
            })}
          </nav>

          {/* User section */}
          <div className="p-4 border-t border-border">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/avatar-placeholder.png" />
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      JD
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 text-left">
                    <p className="text-sm font-medium">John Doe</p>
                    <p className="text-xs text-muted-foreground">john@example.com</p>
                  </div>
                  <ChevronDown className="h-4 w-4 text-muted-foreground" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>{t.user.myAccount}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  {t.user.settings}
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Bell className="mr-2 h-4 w-4" />
                  {t.user.notifications}
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-destructive">
                  <LogOut className="mr-2 h-4 w-4" />
                  {t.user.logout}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="lg:pl-64">
        {/* Top bar */}
        <header className="sticky top-0 z-30 bg-card border-b border-border">
          <div className="flex items-center justify-between px-4 lg:px-8 py-4">
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </Button>

            <div className="flex-1 lg:flex-none">
              <h1 className="text-xl lg:text-2xl font-heading font-bold">
                {navigation.find(item => item.id === activeTab)?.name}
              </h1>
            </div>

            <div className="flex items-center gap-2">
              {/* Language Selector */}
              {onLangChange && (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <Globe className="h-5 w-5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Language</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {(['en', 'fr', 'es', 'pt'] as const).map((l) => (
                      <DropdownMenuItem
                        key={l}
                        onClick={() => onLangChange(l)}
                        className={lang === l ? 'bg-accent' : ''}
                      >
                        {t.languages[l]}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              )}

              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                {notifications > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 w-5 bg-destructive text-destructive-foreground text-xs rounded-full flex items-center justify-center">
                    {notifications}
                  </span>
                )}
              </Button>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="p-4 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}

