// /app/api/sales/route.js

let SalesData = {
  Residential: [],
  Corporate: [],
  Pro: [],
};

// Handle POST request to add sales data
export async function POST(request) {
  const { type, title, value, category } = await request.json();

  // Input validation
  if (!type || !title || !value || !category) {
    return new Response(JSON.stringify({ error: 'All fields are required' }), { status: 400 });
  }

  // Validate category
  const validCategories = ['Residential', 'Corporate', 'Pro'];
  if (!validCategories.includes(category)) {
    return new Response(JSON.stringify({ error: 'Invalid category' }), { status: 400 });
  }

  // Save the sales data
  SalesData[category].push({ type, title, value });
  return new Response(JSON.stringify({ message: 'Sales added successfully', data: SalesData }), { status: 201 });
}

// Handle GET request to retrieve sales data
export async function GET() {
  return new Response(JSON.stringify(SalesData), { status: 200 });
}
