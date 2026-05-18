import type { APIRoute } from 'astro';

// Mock CRM data - En production, connectez à votre CRM réel (Salesforce, HubSpot, etc.)
const mockContacts = [
  {
    id: '1',
    firstName: 'Jean',
    lastName: 'Dupont',
    email: 'jean.dupont@example.com',
    company: 'Acme Corp',
    phone: '+33 1 23 45 67 89',
    status: 'active',
    tags: ['VIP', 'Enterprise'],
    createdAt: '2024-01-15T10:00:00Z',
    lastContact: '2024-02-01T14:30:00Z'
  },
  {
    id: '2',
    firstName: 'Marie',
    lastName: 'Martin',
    email: 'marie.martin@example.com',
    company: 'TechStart Inc',
    phone: '+33 1 98 76 54 32',
    status: 'active',
    tags: ['Startup', 'Hot Lead'],
    createdAt: '2024-01-20T09:15:00Z',
    lastContact: '2024-02-05T11:20:00Z'
  },
  {
    id: '3',
    firstName: 'Pierre',
    lastName: 'Dubois',
    email: 'pierre.dubois@example.com',
    company: 'Global Solutions',
    phone: '+33 1 45 67 89 01',
    status: 'prospect',
    tags: ['SMB', 'Interested'],
    createdAt: '2024-02-01T16:45:00Z',
    lastContact: '2024-02-10T09:00:00Z'
  }
];

export const GET: APIRoute = async ({ request }) => {
  try {
    const url = new URL(request.url);
    const search = url.searchParams.get('search');
    const status = url.searchParams.get('status');
    const limit = parseInt(url.searchParams.get('limit') || '10');
    const offset = parseInt(url.searchParams.get('offset') || '0');

    let filteredContacts = [...mockContacts];

    if (search) {
      const searchLower = search.toLowerCase();
      filteredContacts = filteredContacts.filter(contact =>
        contact.firstName.toLowerCase().includes(searchLower) ||
        contact.lastName.toLowerCase().includes(searchLower) ||
        contact.email.toLowerCase().includes(searchLower) ||
        contact.company.toLowerCase().includes(searchLower)
      );
    }

    if (status) {
      filteredContacts = filteredContacts.filter(contact => contact.status === status);
    }

    const total = filteredContacts.length;
    const paginatedContacts = filteredContacts.slice(offset, offset + limit);

    return new Response(JSON.stringify({
      success: true,
      data: paginatedContacts,
      pagination: {
        total,
        limit,
        offset,
        hasMore: offset + limit < total
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
      error: 'Failed to fetch contacts'
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    
    if (!body.firstName || !body.lastName || !body.email) {
      return new Response(JSON.stringify({
        success: false,
        error: 'Missing required fields'
      }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    const newContact = {
      id: String(mockContacts.length + 1),
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      company: body.company || '',
      phone: body.phone || '',
      status: body.status || 'prospect',
      tags: body.tags || [],
      createdAt: new Date().toISOString(),
      lastContact: new Date().toISOString()
    };

    mockContacts.push(newContact);

    return new Response(JSON.stringify({
      success: true,
      data: newContact
    }), {
      status: 201,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({
      success: false,
      error: 'Failed to create contact'
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};
