import type { APIRoute } from 'astro';

// API pour synchroniser avec des CRM externes
export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { provider, action, data } = body;

    // Simuler une synchronisation CRM
    const syncResult = {
      provider,
      action,
      timestamp: new Date().toISOString(),
      status: 'success',
      recordsProcessed: data?.records?.length || 0,
      details: {
        created: 0,
        updated: 0,
        failed: 0
      }
    };

    // Simuler le traitement
    if (data?.records) {
      syncResult.details.created = Math.floor(data.records.length * 0.7);
      syncResult.details.updated = Math.floor(data.records.length * 0.2);
      syncResult.details.failed = data.records.length - syncResult.details.created - syncResult.details.updated;
    }

    return new Response(JSON.stringify({
      success: true,
      data: syncResult
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({
      success: false,
      error: 'Sync failed'
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};

export const GET: APIRoute = async () => {
  // Retourner le statut de synchronisation
  const syncStatus = {
    lastSync: new Date(Date.now() - 3600000).toISOString(),
    nextSync: new Date(Date.now() + 3600000).toISOString(),
    status: 'active',
    providers: [
      { name: 'Salesforce', connected: true, lastSync: new Date(Date.now() - 3600000).toISOString() },
      { name: 'HubSpot', connected: true, lastSync: new Date(Date.now() - 7200000).toISOString() },
      { name: 'Pipedrive', connected: false, lastSync: null }
    ]
  };

  return new Response(JSON.stringify({
    success: true,
    data: syncStatus
  }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
};
