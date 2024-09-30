// /app/api/subscriptions/route.js

let SubscriptionData = {
    Residential: [],
    Corporate: [],
    Pro: [],
  };
  
  // Handle POST request to add subscription data
  export async function POST(request) {
    const { type, title, value, category,date } = await request.json();
  
    // Input validation
    if (!type || !title || !value || !category || !date) {
      return new Response(JSON.stringify({ error: 'All fields are required' }), { status: 400 });
    }
  
    // Validate category
    const validCategories = ['Residential', 'Corporate', 'Pro'];
    if (!validCategories.includes(category)) {
      return new Response(JSON.stringify({ error: 'Invalid category' }), { status: 400 });
    }
  
    // Save the subscription data
    SubscriptionData[category].push({ type, title, value,date });
    return new Response(JSON.stringify({ message: 'Subscription added successfully', data: SubscriptionData }), { status: 201 });
  }
  
  // Handle GET request to retrieve subscription data
  export async function GET() {
    return new Response(JSON.stringify(SubscriptionData), { status: 200 });
  }
  