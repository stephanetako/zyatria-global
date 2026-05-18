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
  Eye
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';

const resources = {
  guides: [
    {
      id: 1,
      title: 'Guide de Démarrage Rapide',
      description: 'Commencez avec vos premiers agents IA en 15 minutes',
      type: 'PDF',
      size: '2.4 MB',
      downloads: 1247,
      rating: 4.8,
      category: 'Débutant',
      updated: '2024-01-15'
    },
    {
      id: 2,
      title: 'Configuration Avancée des Micro-Agents',
      description: 'Optimisez vos agents pour des performances maximales',
      type: 'PDF',
      size: '5.1 MB',
      downloads: 892,
      rating: 4.9,
      category: 'Avancé',
      updated: '2024-01-20'
    },
    {
      id: 3,
      title: 'Intégration CRM - Guide Complet',
      description: 'Connectez vos agents à votre CRM existant',
      type: 'PDF',
      size: '3.8 MB',
      downloads: 654,
      rating: 4.7,
      category: 'Intermédiaire',
      updated: '2024-01-18'
    },
  ],
  videos: [
    {
      id: 1,
      title: 'Introduction aux Agents IA',
      description: 'Découvrez le potentiel des agents intelligents',
      duration: '12:34',
      views: 3421,
      rating: 4.9,
      category: 'Débutant',
      thumbnail: '/video-thumb-1.jpg'
    },
    {
      id: 2,
      title: 'Automatisation des Workflows',
      description: 'Créez des workflows automatisés puissants',
      duration: '18:45',
      views: 2156,
      rating: 4.8,
      category: 'Intermédiaire',
      thumbnail: '/video-thumb-2.jpg'
    },
    {
      id: 3,
      title: 'Analytics et Reporting',
      description: 'Analysez les performances de vos agents',
      duration: '15:20',
      views: 1834,
      rating: 4.7,
      category: 'Avancé',
      thumbnail: '/video-thumb-3.jpg'
    },
  ],
  documentation: [
    {
      id: 1,
      title: 'API Reference',
      description: 'Documentation complète de l\'API ZyatrIA',
      pages: 124,
      category: 'Technique',
      updated: '2024-01-22'
    },
    {
      id: 2,
      title: 'Best Practices',
      description: 'Meilleures pratiques pour l\'utilisation des agents',
      pages: 45,
      category: 'Guide',
      updated: '2024-01-19'
    },
    {
      id: 3,
      title: 'Troubleshooting',
      description: 'Solutions aux problèmes courants',
      pages: 67,
      category: 'Support',
      updated: '2024-01-21'
    },
  ]
};

export default function ResourcesTab() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'débutant':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'intermédiaire':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400';
      case 'avancé':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
    }
  };

  return (
    <div className="space-y-6 animate-fade-in-up">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-heading font-bold">Ressources</h2>
          <p className="text-muted-foreground">Documentation, guides et tutoriels</p>
        </div>
      </div>

      {/* Search and Filter */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Rechercher des ressources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="gap-2">
              <Filter className="h-4 w-4" />
              Filtres
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Resources Tabs */}
      <Tabs defaultValue="guides" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="guides" className="gap-2">
            <FileText className="h-4 w-4" />
            Guides
          </TabsTrigger>
          <TabsTrigger value="videos" className="gap-2">
            <Video className="h-4 w-4" />
            Vidéos
          </TabsTrigger>
          <TabsTrigger value="docs" className="gap-2">
            <BookOpen className="h-4 w-4" />
            Documentation
          </TabsTrigger>
        </TabsList>

        {/* Guides Tab */}
        <TabsContent value="guides" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {resources.guides.map((guide) => (
              <Card key={guide.id} className="hover-lift cursor-pointer">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <Badge className={getCategoryColor(guide.category)}>
                      {guide.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{guide.title}</CardTitle>
                  <CardDescription>{guide.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{guide.type} • {guide.size}</span>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span>{guide.rating}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Download className="h-4 w-4" />
                        <span>{guide.downloads} téléchargements</span>
                      </div>
                    </div>

                    <Button className="w-full gap-2">
                      <Download className="h-4 w-4" />
                      Télécharger
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Videos Tab */}
        <TabsContent value="videos" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {resources.videos.map((video) => (
              <Card key={video.id} className="hover-lift cursor-pointer overflow-hidden">
                <div className="aspect-video bg-muted relative group">
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                      <Video className="h-8 w-8 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-xs">
                    {video.duration}
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge className={getCategoryColor(video.category)}>
                      {video.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-sm">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span>{video.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg">{video.title}</CardTitle>
                  <CardDescription>{video.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      <span>{video.views} vues</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{video.duration}</span>
                    </div>
                  </div>
                  <Button className="w-full gap-2">
                    <Video className="h-4 w-4" />
                    Regarder
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Documentation Tab */}
        <TabsContent value="docs" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {resources.documentation.map((doc) => (
              <Card key={doc.id} className="hover-lift cursor-pointer">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <BookOpen className="h-6 w-6 text-primary" />
                    </div>
                    <Badge className={getCategoryColor(doc.category)}>
                      {doc.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{doc.title}</CardTitle>
                  <CardDescription>{doc.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{doc.pages} pages</span>
                      <span>Mis à jour: {new Date(doc.updated).toLocaleDateString('fr-FR')}</span>
                    </div>
                    
                    <Button className="w-full gap-2">
                      <BookOpen className="h-4 w-4" />
                      Lire
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Popular Resources */}
      <Card>
        <CardHeader>
          <CardTitle>Ressources Populaires</CardTitle>
          <CardDescription>Les plus consultées ce mois</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { title: 'Guide de Démarrage Rapide', type: 'Guide', views: 1247 },
              { title: 'Introduction aux Agents IA', type: 'Vidéo', views: 3421 },
              { title: 'API Reference', type: 'Documentation', views: 892 },
            ].map((item, index) => (
              <div 
                key={index}
                className="flex items-center justify-between p-3 border border-border rounded-lg hover:bg-accent transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <p className="text-sm text-muted-foreground">{item.type}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Eye className="h-4 w-4" />
                  <span>{item.views}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
