import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json() as any;

    // Validation basique
    if (!body.name || !body.email || !body.date || !body.time) {
      return new Response(JSON.stringify({
        success: false,
        error: 'Missing required fields: name, email, date, time'
      }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    // Créer la réservation
    const booking = {
      id: `BK-${Date.now()}`,
      service: body.service || 'Consultation',
      date: body.date,
      time: body.time,
      duration: body.duration || '60',
      type: body.type || 'video',
      name: body.name,
      email: body.email,
      phone: body.phone || '',
      notes: body.notes || '',
      status: 'pending',
      createdAt: new Date().toISOString(),
      confirmationCode: Math.random().toString(36).substring(2, 10).toUpperCase()
    };

    // En production, sauvegarder dans une base de données
    // et envoyer un email de confirmation

    return new Response(JSON.stringify({
      success: true,
      data: booking,
      message: 'Réservation créée avec succès. Un email de confirmation a été envoyé.'
    }), {
      status: 201,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({
      success: false,
      error: 'Failed to create booking'
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};

