import type { APIRoute } from 'astro';

export const POST: APIRoute = async () => {
  console.log('🎉 TEST ROUTE CALLED!');
  return new Response(JSON.stringify({ success: true, message: 'Test route works!' }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
};

export const GET: APIRoute = async () => {
  console.log('🎉 TEST ROUTE CALLED (GET)!');
  return new Response(JSON.stringify({ success: true, message: 'Test route works!' }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
};
