import type { APIRoute } from 'astro';

export const prerender = false;

const N8N_WEBHOOK_URL = 'https://zyatria.app.n8n.cloud/webhook/zyatria-contact';

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();

    // Honeypot spam check
    if (formData.get('_gotcha')) {
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const payload: Record<string, string> = {};
    formData.forEach((value, key) => {
      if (key !== '_gotcha') {
        payload[key] = value.toString();
      }
    });
    payload.source = 'zyatria-global-website';
    payload.submittedAt = new Date().toISOString();

    const webhookResponse = await fetch(N8N_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!webhookResponse.ok) {
      return new Response(
        JSON.stringify({ success: false, error: 'Webhook responded with an error' }),
        { status: 502, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error: 'Server error while forwarding submission' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};