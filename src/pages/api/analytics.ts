import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ request }) => {
  try {
    const url = new URL(request.url);
    const period = url.searchParams.get('period') || '30d';

    // Mock analytics data
    const analyticsData = {
      period,
      overview: {
        totalRevenue: 45780,
        revenueChange: 12.5,
        activeProjects: 8,
        projectsChange: 2,
        completionRate: 94,
        completionChange: 3,
        clientSatisfaction: 4.8,
        satisfactionChange: 0.2
      },
      revenueByMonth: [
        { month: 'Jan', revenue: 12500 },
        { month: 'Fév', revenue: 15200 },
        { month: 'Mar', revenue: 18080 }
      ],
      projectsByStatus: [
        { status: 'En cours', count: 5, color: '#C98769' },
        { status: 'Terminé', count: 12, color: '#8F5B41' },
        { status: 'En attente', count: 3, color: '#E6DCD4' }
      ],
      recentActivity: [
        {
          id: '1',
          type: 'project_completed',
          title: 'Projet E-commerce terminé',
          description: 'Le micro-agent e-commerce a été déployé avec succès',
          timestamp: new Date(Date.now() - 3600000).toISOString(),
          icon: 'CheckCircle'
        },
        {
          id: '2',
          type: 'booking_confirmed',
          title: 'Nouvelle consultation planifiée',
          description: 'Consultation stratégique le 15 mars à 14h00',
          timestamp: new Date(Date.now() - 7200000).toISOString(),
          icon: 'Calendar'
        },
        {
          id: '3',
          type: 'invoice_paid',
          title: 'Facture payée',
          description: 'Paiement de 5,000€ reçu',
          timestamp: new Date(Date.now() - 86400000).toISOString(),
          icon: 'DollarSign'
        }
      ],
      topServices: [
        { name: 'Micro-Agents', revenue: 25000, percentage: 55 },
        { name: 'Automatisation', revenue: 12000, percentage: 26 },
        { name: 'Consulting', revenue: 8780, percentage: 19 }
      ]
    };

    return new Response(JSON.stringify({
      success: true,
      data: analyticsData
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({
      success: false,
      error: 'Failed to fetch analytics'
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};
