import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ request }) => {
  try {
    const url = new URL(request.url);
    const date = url.searchParams.get('date');
    const service = url.searchParams.get('service');

    if (!date) {
      return new Response(JSON.stringify({
        success: false,
        error: 'Date parameter is required'
      }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    const allSlots = [
      '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
      '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00'
    ];

    const bookedSlots = ['10:00', '14:30', '16:00'];
    
    const availableSlots = allSlots.map(slot => ({
      time: slot,
      available: !bookedSlots.includes(slot),
      duration: service === 'training' ? 120 : 60
    }));

    return new Response(JSON.stringify({
      success: true,
      data: {
        date,
        slots: availableSlots
      }
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({
      success: false,
      error: 'Failed to fetch available slots'
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};
